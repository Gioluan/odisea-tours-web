#!/usr/bin/env node
// GSC reporting for odisea-tours.com.
// Zero-dependency: signs a service-account JWT with built-in crypto, calls the
// Google Search Console API, renders an HTML report and opens it in the browser.
//
// Usage:
//   node scripts/gsc-report.mjs            # live run (needs .gsc-key.json)
//   node scripts/gsc-report.mjs --sample   # render a labeled sample, no key needed
//   node scripts/gsc-report.mjs --days=90  # change the lookback window
//   GSC_SITE="sc-domain:odisea-tours.com" node scripts/gsc-report.mjs
//
// One-time setup (see the chat steps): create a service account + JSON key,
// add the service-account email as a user on the odisea-tours.com GSC property,
// and save the key as .gsc-key.json in the repo root.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { createSign } from "node:crypto";
import { spawn } from "node:child_process";

const args = process.argv.slice(2);
const SAMPLE = args.includes("--sample");
const DAYS = Number((args.find((a) => a.startsWith("--days=")) || "--days=28").split("=")[1]) || 28;
const KEY_PATH = process.env.GSC_KEY || resolve(process.cwd(), ".gsc-key.json");
const SITE = process.env.GSC_SITE || "sc-domain:odisea-tours.com";
const OUT_DIR = resolve(process.cwd(), "scripts", "gsc-out");

function b64url(input) {
  return Buffer.from(input).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function isoDate(d) {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

async function getAccessToken() {
  // Prefer OAuth (user account that owns the property) when present, since
  // Search Console refuses service-account emails as users on some properties.
  const oauthPath = resolve(process.cwd(), ".gsc-oauth.json");
  if (existsSync(oauthPath)) {
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

  if (!existsSync(KEY_PATH)) {
    throw new Error(`No credentials found. Run "node scripts/gsc-auth.mjs <oauth-client.json>" to authorize, or drop a service-account key at ${KEY_PATH}.`);
  }
  const key = JSON.parse(readFileSync(KEY_PATH, "utf8"));
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(claim))}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = b64url(signer.sign(key.private_key));
  const jwt = `${unsigned}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) throw new Error(`Token exchange failed (${res.status}): ${await res.text()}`);
  return (await res.json()).access_token;
}

async function query(token, body) {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (res.status === 403) throw new Error(`403 Forbidden. The service account is not a user on the GSC property "${SITE}". Add its email under GSC > Settings > Users and permissions.`);
  if (res.status === 404) throw new Error(`404 Not found for site "${SITE}". If your property is a Domain property, run with GSC_SITE="sc-domain:odisea-tours.com".`);
  if (!res.ok) throw new Error(`Query failed (${res.status}): ${await res.text()}`);
  return (await res.json()).rows || [];
}

function pct(n) {
  return `${(n * 100).toFixed(1)}%`;
}

function rowsTable(rows, keyLabel, { link } = {}) {
  if (!rows.length) return `<p class="empty">No data yet for this window. Brand-new pages take 1-2 weeks to accrue impressions.</p>`;
  const body = rows
    .map((r) => {
      const k = r.keys[0];
      const cell = link ? `<a href="${k}" target="_blank" rel="noopener">${k}</a>` : escapeHtml(k);
      return `<tr><td class="k">${cell}</td><td>${r.clicks}</td><td>${r.impressions}</td><td>${pct(r.ctr)}</td><td>${r.position.toFixed(1)}</td></tr>`;
    })
    .join("");
  return `<table><thead><tr><th>${keyLabel}</th><th>Clicks</th><th>Impr.</th><th>CTR</th><th>Avg pos</th></tr></thead><tbody>${body}</tbody></table>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function renderHtml({ startDate, endDate, totals, queries, pages, statePages, sample }) {
  const banner = sample
    ? `<div class="banner">SAMPLE DATA — illustrative layout only. Connect the GSC key and re-run for live numbers.</div>`
    : "";
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Odisea Tours · Search Console report</title>
<style>
:root{--paper:#f6f6f6;--ink:#111;--soft:#555;--gold:#c98a00;--line:#e3e0d8;}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:15px/1.5 -apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;padding:40px 24px}
.wrap{max-width:1040px;margin:0 auto}
h1{font-size:26px;margin:0 0 4px}h2{font-size:18px;margin:38px 0 12px;border-bottom:2px solid var(--ink);padding-bottom:6px;text-transform:uppercase;letter-spacing:.04em}
.meta{color:var(--soft);font-size:13px;margin-bottom:24px}
.banner{background:#fff4d6;border:1px solid var(--gold);color:#7a5400;padding:10px 14px;border-radius:6px;margin-bottom:22px;font-weight:600;font-size:13px}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:8px 0 6px}
.card{background:#fff;border:1px solid var(--line);border-radius:8px;padding:16px}
.card .n{font-size:26px;font-weight:700}.card .l{color:var(--soft);font-size:12px;text-transform:uppercase;letter-spacing:.05em;margin-top:4px}
table{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line);border-radius:8px;overflow:hidden;font-size:14px}
th,td{text-align:right;padding:9px 12px;border-bottom:1px solid var(--line)}th{background:#faf8f3;font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:var(--soft)}
th:first-child,td:first-child{text-align:left}td.k{max-width:520px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
tr:last-child td{border-bottom:none}a{color:var(--gold);text-decoration:none}a:hover{text-decoration:underline}
.empty{color:var(--soft);background:#fff;border:1px dashed var(--line);border-radius:8px;padding:16px}
.foot{color:var(--soft);font-size:12px;margin-top:34px}
</style></head><body><div class="wrap">
${banner}
<h1>Odisea Tours — Search Console</h1>
<div class="meta">${escapeHtml(SITE)} &middot; ${startDate} to ${endDate} (${DAYS}-day window)</div>
<div class="cards">
  <div class="card"><div class="n">${totals.clicks}</div><div class="l">Clicks</div></div>
  <div class="card"><div class="n">${totals.impressions}</div><div class="l">Impressions</div></div>
  <div class="card"><div class="n">${pct(totals.ctr)}</div><div class="l">CTR</div></div>
  <div class="card"><div class="n">${totals.position.toFixed(1)}</div><div class="l">Avg position</div></div>
</div>
<h2>State pages (the new geo set)</h2>
${rowsTable(statePages, "Page", { link: true })}
<h2>Top queries</h2>
${rowsTable(queries, "Query")}
<h2>Top pages</h2>
${rowsTable(pages, "Page", { link: true })}
<div class="foot">Generated ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC. GSC data lags ~2-3 days. Re-run: <code>node scripts/gsc-report.mjs</code></div>
</div></body></html>`;
}

function openInBrowser(path) {
  if (process.platform === "win32") {
    spawn("powershell", ["-NoProfile", "-Command", `Start-Process "${path}"`], { stdio: "ignore", detached: true }).unref();
  } else if (process.platform === "darwin") {
    spawn("open", [path], { stdio: "ignore", detached: true }).unref();
  } else {
    spawn("xdg-open", [path], { stdio: "ignore", detached: true }).unref();
  }
}

function sampleData() {
  const mk = (k, clicks, impressions, ctr, position) => ({ keys: [k], clicks, impressions, ctr, position });
  return {
    totals: { clicks: 41, impressions: 1480, ctr: 41 / 1480, position: 10.6 },
    queries: [
      mk("odisea tours", 9, 31, 9 / 31, 1.1),
      mk("spain soccer tour from texas", 5, 88, 5 / 88, 6.1),
      mk("youth soccer tour barcelona cost", 3, 64, 3 / 64, 5.4),
      mk("camino de santiago group tour", 2, 47, 2 / 47, 8.2),
      mk("spain soccer tours", 4, 540, 4 / 540, 14.3),
    ],
    pages: [
      mk("https://odisea-tours.com/", 14, 300, 14 / 300, 9.1),
      mk("https://odisea-tours.com/soccer-tours-spain", 8, 210, 8 / 210, 11.0),
      mk("https://odisea-tours.com/usa/states/texas", 4, 70, 4 / 70, 6.2),
    ],
    statePages: [
      mk("https://odisea-tours.com/usa/states/texas", 4, 70, 4 / 70, 6.2),
      mk("https://odisea-tours.com/usa/states/california", 2, 55, 2 / 55, 7.8),
      mk("https://odisea-tours.com/usa/states/florida", 1, 33, 1 / 33, 9.4),
    ],
  };
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const end = new Date(Date.now() - 3 * 86400000);
  const start = new Date(end.getTime() - (DAYS - 1) * 86400000);
  const startDate = isoDate(start);
  const endDate = isoDate(end);

  let data;
  if (SAMPLE) {
    const s = sampleData();
    data = { startDate, endDate, sample: true, ...s };
  } else {
    const token = await getAccessToken();
    const base = { startDate, endDate };
    const [totalRows, queries, pages] = await Promise.all([
      query(token, { ...base, dimensions: [] }),
      query(token, { ...base, dimensions: ["query"], rowLimit: 50 }),
      query(token, { ...base, dimensions: ["page"], rowLimit: 50 }),
    ]);
    const totals = totalRows[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    const statePages = pages.filter((p) => p.keys[0].includes("/usa/states/"));
    data = { startDate, endDate, totals, queries, pages, statePages, sample: false };
  }

  const html = renderHtml(data);
  const file = resolve(OUT_DIR, `gsc-report-${endDate}${SAMPLE ? "-SAMPLE" : ""}.html`);
  writeFileSync(file, html);
  console.log(`Report written: ${file}`);
  openInBrowser(file);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
