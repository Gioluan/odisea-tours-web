#!/usr/bin/env node
// Attribution report: how much Search Console traffic lands on pages that only
// exist because of the GEO/SEO build, versus the rest of the site.
//
//   node scripts/gsc-attribution.mjs            # last 90 days
//   node scripts/gsc-attribution.mjs --days=180
//
// Reuses the OAuth token saved by scripts/gsc-auth.mjs.

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const args = process.argv.slice(2);
const DAYS = Number((args.find((a) => a.startsWith("--days=")) || "--days=90").split("=")[1]) || 90;
const SITE = process.env.GSC_SITE || "sc-domain:odisea-tours.com";

// Pages built by the GEO programme, with the date each went live.
// Anything these earn is caused by the work: the URL did not exist before.
const BUILT = [
  { path: "/softball-tours-spain", shipped: "2026-06-26", label: "Softball pillar" },
  { path: "/soccer-tournaments-spain", shipped: "2026-07-18", label: "Tournaments pillar" },
  { path: "/school-trips-spain", shipped: "2026-07-27", label: "School trips pillar" },
  { path: "/spain-dmc", shipped: "2026-07-27", label: "Spain DMC pillar" },
  { path: "/corporate-retreats", shipped: "2026-06-09", label: "Corporate retreats pillar" },
  { path: "/soccer-tours-spain", shipped: "2026-05-01", label: "Soccer pillar" },
  { path: "/journal/", shipped: "2026-05-01", label: "Journal posts", prefix: true },
  { path: "/usa/states/", shipped: "2026-05-20", label: "US state pages", prefix: true },
];

function pad(n) { return String(n).padStart(2, "0"); }
function isoDate(d) { return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`; }

async function getAccessToken() {
  const oauthPath = resolve(process.cwd(), ".gsc-oauth.json");
  if (!existsSync(oauthPath)) throw new Error("No .gsc-oauth.json. Run scripts/gsc-auth.mjs first.");
  const o = JSON.parse(readFileSync(oauthPath, "utf8"));
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: o.client_id,
      client_secret: o.client_secret,
      refresh_token: o.refresh_token,
      grant_type: "refresh_token",
    }),
  });
  if (!res.ok) throw new Error(`OAuth refresh failed (${res.status}): ${await res.text()}`);
  return (await res.json()).access_token;
}

async function query(token, body) {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GSC query failed (${res.status}): ${await res.text()}`);
  return (await res.json()).rows || [];
}

const end = new Date(Date.now() - 3 * 864e5);          // GSC lags ~3 days
const start = new Date(end.getTime() - DAYS * 864e5);
const startDate = isoDate(start);
const endDate = isoDate(end);

const token = await getAccessToken();

// 1. Whole property
const [totals] = await query(token, { startDate, endDate, dimensions: [], rowLimit: 1 });

// 2. Every page
const pages = await query(token, { startDate, endDate, dimensions: ["page"], rowLimit: 500 });

const norm = (u) => u.replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "") || "/";
const matched = new Set();
const built = BUILT.map((b) => {
  const rows = pages.filter((r) => {
    const p = norm(r.keys[0]);
    return b.prefix ? p.startsWith(b.path.replace(/\/$/, "") + "/") : p === b.path.replace(/\/$/, "");
  });
  rows.forEach((r) => matched.add(r.keys[0]));
  return {
    ...b,
    clicks: rows.reduce((a, r) => a + r.clicks, 0),
    impressions: rows.reduce((a, r) => a + r.impressions, 0),
    urls: rows.length,
  };
});

const builtClicks = built.reduce((a, b) => a + b.clicks, 0);
const builtImpr = built.reduce((a, b) => a + b.impressions, 0);

console.log(`\nODISEA TOURS · Search Console attribution`);
console.log(`Window: ${startDate} to ${endDate} (${DAYS} days), property ${SITE}\n`);

if (!totals) {
  console.log("No data returned for this window.");
  process.exit(0);
}

console.log(`WHOLE SITE`);
console.log(`  clicks ${totals.clicks}   impressions ${totals.impressions}   CTR ${(totals.ctr * 100).toFixed(2)}%   avg pos ${totals.position.toFixed(1)}\n`);

console.log(`PAGES BUILT BY THE GEO PROGRAMME`);
console.log(`  ${"page".padEnd(30)} ${"shipped".padEnd(12)} ${"urls".padStart(5)} ${"clicks".padStart(8)} ${"impr".padStart(9)}`);
for (const b of built.sort((x, y) => y.clicks - x.clicks)) {
  console.log(`  ${b.label.padEnd(30)} ${b.shipped.padEnd(12)} ${String(b.urls).padStart(5)} ${String(b.clicks).padStart(8)} ${String(b.impressions).padStart(9)}`);
}
const pctC = totals.clicks ? (100 * builtClicks / totals.clicks).toFixed(1) : "0";
const pctI = totals.impressions ? (100 * builtImpr / totals.impressions).toFixed(1) : "0";
console.log(`  ${"".padEnd(30)} ${"TOTAL".padEnd(12)} ${"".padStart(5)} ${String(builtClicks).padStart(8)} ${String(builtImpr).padStart(9)}`);
console.log(`  = ${pctC}% of all site clicks, ${pctI}% of all impressions\n`);

console.log(`TOP 15 PAGES OVERALL`);
for (const r of pages.slice(0, 15)) {
  const flag = matched.has(r.keys[0]) ? "*" : " ";
  console.log(`  ${flag} ${String(r.clicks).padStart(5)} clicks  ${String(r.impressions).padStart(7)} impr   ${norm(r.keys[0])}`);
}
console.log(`  (* = page built by the programme)\n`);

// 3. Queries, to see which intents are earning the clicks
const queries = await query(token, { startDate, endDate, dimensions: ["query"], rowLimit: 25 });
console.log(`TOP 25 QUERIES`);
for (const r of queries) {
  console.log(`  ${String(r.clicks).padStart(5)} clicks  ${String(r.impressions).padStart(7)} impr  pos ${r.position.toFixed(1).padStart(5)}   ${r.keys[0]}`);
}
console.log();
