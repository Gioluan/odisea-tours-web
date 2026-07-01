import fs from "node:fs";
import path from "node:path";

// -----------------------------------------------------------------------------
// News + evergreen "guide" content, auto-generated daily by scripts/generate-news.mjs
// Each post is a JSON file in /content/news. This loader reads them at build time
// so a new file = a new page, no code change. Mirrors the static journal pattern.
// -----------------------------------------------------------------------------

export type NewsKind = "news" | "guide";

export interface NewsSource {
  // Outbound attribution. We report facts in our own words and link out; we never
  // reproduce a source's headline, prose or images. See generate-news.mjs guardrail.
  name: string; // e.g. "Marca"
  url: string; // canonical article URL on the source
}

export interface NewsPost {
  slug: string;
  kind: NewsKind;
  title: string;
  excerpt: string;
  date: string; // ISO published date
  dateModified?: string;
  readTime: string; // e.g. "4 min"
  category: string; // e.g. "La Liga", "Transfers", "Youth & Academies", "Tour Guides"
  kicker?: string; // "La Liga · Atletico Madrid" — drives the typographic cover for hard news
  cover?: string; // /photos/... path; optional. Hard news uses a typographic cover instead.
  body: string[]; // markdown-ish paragraphs, "## " headings, [text](url) links
  tags: string[];
  sources: NewsSource[]; // the outbound receipts
  ctaTourHref?: string; // Odisea page this article funnels to
  ctaTourLabel?: string;
}

const NEWS_DIR = path.join(process.cwd(), "content", "news");

function readAll(): NewsPost[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".json"));
  } catch {
    return [];
  }
  const posts: NewsPost[] = [];
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf8");
      const post = JSON.parse(raw) as NewsPost;
      if (post && post.slug && post.title && Array.isArray(post.body)) {
        posts.push(post);
      }
    } catch {
      // skip malformed files rather than break the whole build
    }
  }
  // newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function allNews(): NewsPost[] {
  return readAll();
}

export function newsBySlug(slug: string): NewsPost | undefined {
  return readAll().find((p) => p.slug === slug);
}

export function newsByKind(kind: NewsKind): NewsPost[] {
  return readAll().filter((p) => p.kind === kind);
}

export function newsCategories(): string[] {
  return Array.from(new Set(readAll().map((p) => p.category)));
}

export function relatedNews(slug: string, category: string, limit = 4): NewsPost[] {
  const all = readAll().filter((p) => p.slug !== slug);
  const sameCat = all.filter((p) => p.category === category);
  const rest = all.filter((p) => p.category !== category);
  return [...sameCat, ...rest].slice(0, limit);
}
