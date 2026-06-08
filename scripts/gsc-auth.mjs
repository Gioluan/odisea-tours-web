#!/usr/bin/env node
// One-time OAuth authorizer for GSC reporting.
// Uses your own Google account (which owns the odisea-tours.com property), so no
// service-account "add user" is needed. Saves a refresh token to .gsc-oauth.json.
//
// Usage:
//   node scripts/gsc-auth.mjs "C:\\path\\to\\oauth-client.json"
// where the JSON is a "Desktop app" OAuth client downloaded from
// GCP Console > APIs & Services > Credentials.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { createServer } from "node:http";
import { spawn } from "node:child_process";

const CLIENT_PATH = process.argv[2] || process.env.GSC_CLIENT;
if (!CLIENT_PATH) {
  console.error('Pass the OAuth client JSON: node scripts/gsc-auth.mjs "C:\\path\\to\\client.json"');
  process.exit(1);
}

const raw = JSON.parse(readFileSync(CLIENT_PATH, "utf8"));
const c = raw.installed || raw.web || raw;
if (!c.client_id || !c.client_secret) {
  console.error("That file does not look like an OAuth client (no client_id/client_secret). Create a 'Desktop app' OAuth client and download it.");
  process.exit(1);
}

const PORT = 4100;
const REDIRECT = `http://localhost:${PORT}`;
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

const authUrl =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    client_id: c.client_id,
    redirect_uri: REDIRECT,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    prompt: "consent",
  }).toString();

function openInBrowser(url) {
  if (process.platform === "win32") {
    spawn("powershell", ["-NoProfile", "-Command", `Start-Process "${url}"`], { stdio: "ignore", detached: true }).unref();
  } else if (process.platform === "darwin") {
    spawn("open", [url], { stdio: "ignore", detached: true }).unref();
  } else {
    spawn("xdg-open", [url], { stdio: "ignore", detached: true }).unref();
  }
}

const server = createServer(async (req, res) => {
  const u = new URL(req.url, REDIRECT);
  const code = u.searchParams.get("code");
  const err = u.searchParams.get("error");
  if (err) {
    res.end(`Authorization error: ${err}. Return to the terminal.`);
    console.error(`Authorization error: ${err}`);
    server.close();
    process.exit(1);
  }
  if (!code) {
    res.end("Waiting for authorization code...");
    return;
  }
  res.end("Authorized. You can close this tab and return to the terminal.");
  server.close();
  try {
    const tr = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: c.client_id,
        client_secret: c.client_secret,
        redirect_uri: REDIRECT,
        grant_type: "authorization_code",
      }),
    });
    const tok = await tr.json();
    if (!tok.refresh_token) {
      console.error("No refresh_token returned. Revoke the app's access at https://myaccount.google.com/permissions and re-run.", tok);
      process.exit(1);
    }
    const out = resolve(process.cwd(), ".gsc-oauth.json");
    writeFileSync(out, JSON.stringify({ client_id: c.client_id, client_secret: c.client_secret, refresh_token: tok.refresh_token }, null, 2));
    console.log(`Saved ${out}`);
    console.log("Done. Now run:  node scripts/gsc-report.mjs");
    process.exit(0);
  } catch (e) {
    console.error("Token exchange failed:", e.message || e);
    process.exit(1);
  }
});

server.listen(PORT, () => {
  console.log("Opening your browser to authorize (sign in with the Google account that owns the GSC property)...");
  openInBrowser(authUrl);
  console.log(`If it does not open, paste this into your browser:\n${authUrl}`);
});
