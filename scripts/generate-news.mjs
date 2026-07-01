#!/usr/bin/env node
/**
 * generate-news.mjs — Odisea Tours daily Spanish-football newsroom
 *
 * Pipeline:
 *   1. INGEST   pull today's headlines from AS / Marca / Sport / Mundo Deportivo RSS
 *   2. DIGEST   (optional) enrich with a Perplexity fact digest for freshness
 *   3. WRITE    Claude turns the FACTS into ORIGINAL English articles for US coaches,
 *               links out to the source, never reproduces the source's prose/headline
 *   4. EMIT     write content/news/<slug>.json (a new file = a new page)
 *
 * LEGAL GUARDRAIL (enforced in the prompt): we report facts (not copyrightable) in
 * our own words and link out. We do NOT translate, quote, or copy source text/images.
 *
 * Env: ANTHROPIC_API_KEY (required), PERPLEXITY_API_KEY (optional, improves freshness)
 * Usage:
 *   node scripts/generate-news.mjs                # ~4 news articles
 *   node scripts/generate-news.mjs --count 3      # cap article count
 *   node scripts/generate-news.mjs --guide "youth academy training week"  # 1 evergreen guide
 *   node scripts/generate-news.mjs --dry-run      # print, don't write files
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const NEWS_DIR = path.join(ROOT, "content", "news");

// ---- CLI args ---------------------------------------------------------------
const args = process.argv.slice(2);
const flag = (name, def = null) => {
  const i = args.indexOf(`--${name}`);
  if (i === -1) return def;
  const next = args[i + 1];
  return next && !next.startsWith("--") ? next : true;
};
const DRY = args.includes("--dry-run");
const COUNT = Number(flag("count", 4));
const GUIDE_TOPIC = flag("guide", null); // if set, produce one evergreen guide instead

const MODEL = "claude-opus-4-8";

// RSS feeds for the four papers Juan named. Football / La Liga sections.
// If a feed URL rots, the script logs and continues on the others.
const FEEDS = [
  { name: "Marca", url: "https://e00-marca.uecdn.es/rss/futbol/primera-division.xml" },
  { name: "AS", url: "https://as.com/rss/futbol/primera.xml" },
  { name: "Sport", url: "https://www.sport.es/es/rss/futbol/rss.xml" },
  { name: "Mundo Deportivo", url: "https://www.mundodeportivo.com/feed/rss/futbol" },
];

// Real cover photos that exist in /public/photos — Claude picks the closest fit.
const COVERS = [
  "/photos/odisea-tours-match-action-01.jpg",
  "/photos/spain-soccer-tour-match-vs-spanish-academy-side.jpg",
  "/photos/odisea-tours-camp-nou-tour-women.jpg",
  "/photos/spain-football-tour-camp-nou-stadium-visit-barcelona.jpg",
  "/photos/odisea-tours-valencia-cf-coach-instructing.jpg",
  "/photos/odisea-tours-spanish-fa-rfef-training.jpg",
  "/photos/odisea-tours-professional-coaching.jpg",
  "/photos/odisea-tours-youth-fcb-training-hero.jpg",
  "/photos/preseason-action-shot-pitch.jpg",
];

// Odisea funnel targets by theme.
const CTAS = {
  soccer: { href: "/soccer-tours-spain", label: "See how a Spain soccer tour works" },
  academy: { href: "/soccer-tours-spain", label: "Train at a Spanish academy with your team" },
  softball: { href: "/tours/softball-tours-spain", label: "See the Spain Softball Experience" },
  default: { href: "/soccer-tours-spain", label: "See how a Spain soccer tour works" },
};

// -----------------------------------------------------------------------------
function todayISO() {
  // Cron sets this at run time; kept as its own fn for testability.
  return new Date().toISOString().slice(0, 10);
}

function stripTags(s) {
  return s
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#\d+;/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Minimal RSS parser (no dep) — pulls title / link / description per <item>.
function parseRss(xml, sourceName) {
  const items = [];
  const blocks = xml.split(/<item[\s>]/i).slice(1);
  for (const block of blocks.slice(0, 12)) {
    const pick = (tag) => {
      const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
      return m ? stripTags(m[1]) : "";
    };
    const title = pick("title");
    let link = pick("link");
    if (!link) {
      const lm = block.match(/<link[^>]*>([\s\S]*?)<\/link>/i);
      link = lm ? lm[1].trim() : "";
    }
    const description = pick("description");
    if (title && link) items.push({ source: sourceName, title, link, description });
  }
  return items;
}

async function fetchFeeds() {
  const all = [];
  for (const feed of FEEDS) {
    try {
      const res = await fetch(feed.url, {
        headers: { "User-Agent": "OdiseaNewsroom/1.0 (+https://odisea-tours.com)" },
        signal: AbortSignal.timeout(15000),
      });
      if (!res.ok) {
        console.warn(`  ! ${feed.name} RSS ${res.status}`);
        continue;
      }
      const xml = await res.text();
      const items = parseRss(xml, feed.name);
      console.log(`  · ${feed.name}: ${items.length} items`);
      all.push(...items);
    } catch (e) {
      console.warn(`  ! ${feed.name} RSS failed: ${e.message}`);
    }
  }
  return all;
}

async function perplexityDigest() {
  const key = process.env.PERPLEXITY_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "sonar-pro",
        messages: [
          {
            role: "user",
            content:
              "List today's 6 biggest Spanish football (La Liga, Spanish clubs, Spanish national teams, La Liga academies) news stories. For each: one line of factual summary. Prioritise transfers, results, and youth/academy news. Facts only.",
          },
        ],
      }),
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? null;
  } catch {
    return null;
  }
}

// -----------------------------------------------------------------------------
const SYSTEM = `You are the editor of the Odisea Tours newsroom. Odisea Tours (odisea-tours.com) runs group soccer, softball and cultural tours to Spain since 2005, mainly for US youth coaches and clubs. Your readers are US soccer coaches.

You write ORIGINAL English-language articles about Spanish football, using the supplied Spanish-source headlines/summaries ONLY as factual input. Absolute rules:
- Report FACTS in your OWN words. Facts are not copyrightable; their prose is.
- NEVER translate, quote, paraphrase closely, or copy a source's sentences or headline.
- NEVER invent facts, quotes, scores, or transfer fees. If unsure of a detail, keep it general and verifiable.
- Write for US coaches: explain relevance to the youth/coaching game and Spanish football culture where natural.
- Voice: sharp sports-desk English, no hype, no em-dashes (use commas or full stops), no exclamation marks.
- Each article links out to the source(s) it drew facts from, in a sources list you return separately.
- Do NOT write marketing copy for Odisea; the site injects its own call-to-action.`;

const TOOL = {
  name: "publish_articles",
  description: "Return the finished original English articles as structured data.",
  input_schema: {
    type: "object",
    properties: {
      articles: {
        type: "array",
        items: {
          type: "object",
          properties: {
            slug: { type: "string", description: "kebab-case, no dates, <=70 chars, unique" },
            title: { type: "string", description: "original English headline, not the source's" },
            excerpt: { type: "string", description: "1-2 sentence standfirst, original" },
            readTime: { type: "string", description: "e.g. '4 min'" },
            category: {
              type: "string",
              enum: ["La Liga", "Transfers", "Youth & Academies", "Spanish Football", "Tour Guides"],
            },
            cover: { type: "string", enum: COVERS },
            body: {
              type: "array",
              items: { type: "string" },
              description:
                "6-11 paragraphs of ORIGINAL prose. Use '## Heading' lines for sections. Inline links as [text](https url) allowed. No images.",
            },
            tags: { type: "array", items: { type: "string" } },
            ctaTheme: { type: "string", enum: ["soccer", "academy", "softball", "default"] },
            sourceItems: {
              type: "array",
              items: { type: "integer" },
              description:
                "The item NUMBER(S) from the RSS list below whose headline is about THIS story. The article's facts must come from these items only. Do not list items about a different story.",
            },
          },
          required: ["slug", "title", "excerpt", "readTime", "category", "cover", "body", "tags", "ctaTheme", "sourceItems"],
        },
      },
    },
    required: ["articles"],
  },
};

// Resolve the model's chosen item NUMBERS back to the exact {name, url} of those
// real feed items. Name and URL always come from the same real item, so the model
// cannot staple an unrelated (or hallucinated) link to a story to pass a check.
function resolveSources(article, items) {
  const idxs = Array.isArray(article.sourceItems) ? article.sourceItems : [];
  const seen = new Set();
  const kept = [];
  for (const n of idxs) {
    const item = items[n - 1]; // list is 1-based in the prompt
    if (!item) {
      console.warn(`  ! ${article.slug}: source item #${n} out of range, dropped`);
      continue;
    }
    if (seen.has(item.link)) continue;
    seen.add(item.link);
    kept.push({ name: item.source, url: item.link });
  }
  return kept;
}

async function writeArticles(anthropic, userContent) {
  const res = await anthropic.messages.create({
    model: MODEL,
    max_tokens: 8000,
    system: SYSTEM,
    tools: [TOOL],
    tool_choice: { type: "tool", name: "publish_articles" },
    messages: [{ role: "user", content: userContent }],
  });
  const block = res.content.find((b) => b.type === "tool_use");
  if (!block) throw new Error("model returned no tool_use block");
  return block.input.articles ?? [];
}

function toPost(a, kind) {
  const cta = CTAS[a.ctaTheme] ?? CTAS.default;
  const date = todayISO();
  return {
    slug: a.slug,
    kind,
    title: a.title,
    excerpt: a.excerpt,
    date,
    dateModified: date,
    readTime: a.readTime || "4 min",
    category: a.category,
    cover: a.cover,
    body: a.body,
    tags: a.tags || [],
    sources: kind === "news" ? a.sources || [] : [],
    ctaTourHref: cta.href,
    ctaTourLabel: cta.label,
  };
}

function save(post) {
  if (DRY) {
    console.log(`\n--- ${post.slug} [${post.category}] ---`);
    console.log(post.title);
    console.log(post.excerpt);
    console.log(`sources: ${post.sources.map((s) => s.name).join(", ") || "(guide)"}`);
    console.log(`${post.body.length} paragraphs, cover ${post.cover}`);
    return;
  }
  fs.mkdirSync(NEWS_DIR, { recursive: true });
  const file = path.join(NEWS_DIR, `${post.slug}.json`);
  fs.writeFileSync(file, JSON.stringify(post, null, 2) + "\n");
  console.log(`  ✓ ${path.relative(ROOT, file)}`);
}

// -----------------------------------------------------------------------------
async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is required");
    process.exit(1);
  }
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  if (GUIDE_TOPIC) {
    console.log(`Writing evergreen guide: "${GUIDE_TOPIC}"`);
    const userContent =
      `Write ONE evergreen "Tour Guides" article for US coaches on this topic: "${GUIDE_TOPIC}". ` +
      `This is not news, so set sourceItems to an empty array and category to "Tour Guides". ` +
      `Make it genuinely useful and specific to youth soccer tours in Spain. ctaTheme "academy" or "soccer".`;
    const articles = await writeArticles(anthropic, userContent);
    articles.slice(0, 1).forEach((a) => save(toPost(a, "guide")));
    return;
  }

  console.log("Ingesting RSS…");
  const items = await fetchFeeds();
  const digest = await perplexityDigest();

  if (items.length === 0 && !digest) {
    console.error("No source material (all feeds failed and no Perplexity key). Aborting.");
    process.exit(1);
  }

  const feedBlock = items
    .map((it, i) => `${i + 1}. [${it.source}] ${it.title}\n   ${it.description}\n   URL: ${it.link}`)
    .join("\n");

  const userContent =
    `Today is ${todayISO()}. Below are today's Spanish-football headlines from AS, Marca, Sport and Mundo Deportivo, plus a fact digest.\n\n` +
    `Select the ${COUNT} most relevant stories for US coaches, cluster duplicates, and write ${COUNT} ORIGINAL English articles. ` +
    `Only write about stories that actually appear in the numbered list below. For each article, set "sourceItems" to the item NUMBER(S) whose headline is about that same story. Do not attach an item number about a different story. Never copy the source's wording, only the facts.\n\n` +
    `=== RSS HEADLINES ===\n${feedBlock || "(none)"}\n\n` +
    `=== FACT DIGEST ===\n${digest || "(none)"}\n`;

  console.log(`Writing up to ${COUNT} articles with ${MODEL}…`);
  const articles = await writeArticles(anthropic, userContent);
  console.log(`Model returned ${articles.length} articles.`);

  for (const a of articles.slice(0, COUNT)) {
    a.sources = resolveSources(a, items);
    if (a.sources.length === 0) {
      // A news piece with no verifiable source link is not publishable under our rule.
      console.warn(`  ✗ ${a.slug}: no verifiable sources, skipping`);
      continue;
    }
    save(toPost(a, "news"));
  }
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
