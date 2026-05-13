import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Step 2 of one-time OAuth setup.
 *
 * Receives ?code= from Google, exchanges for tokens, and renders a one-time
 * HTML page showing the refresh_token. Juan copies that into Vercel env
 * GMAIL_REFRESH_TOKEN, redeploys, and OAuth setup is done.
 */
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const error = req.nextUrl.searchParams.get("error");

  if (error) {
    return htmlResponse(`<h1>Google denied access</h1><p>${escapeHtml(error)}</p>`);
  }
  if (!code) {
    return htmlResponse("<h1>Missing ?code parameter</h1>");
  }

  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI;
  if (!clientId || !clientSecret || !redirectUri) {
    return htmlResponse("<h1>Missing Google OAuth env vars on Vercel.</h1>");
  }

  try {
    const oauth2 = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
    const { tokens } = await oauth2.getToken(code);

    if (!tokens.refresh_token) {
      return htmlResponse(
        `<h1>No refresh token returned</h1>
         <p>Google only issues a refresh token the first time. Revoke the app's access at
         <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>
         and try /api/auth/google/init again.</p>`
      );
    }

    oauth2.setCredentials(tokens);
    const profile = await google.oauth2({ version: "v2", auth: oauth2 }).userinfo.get();
    const email = profile.data.email || "(unknown)";

    return htmlResponse(`
      <h1>OAuth setup complete</h1>
      <p>Signed in as <strong>${escapeHtml(email)}</strong>.</p>
      <p>Add this to Vercel env (Production + Preview):</p>
      <pre style="background:#111;color:#0f0;padding:18px;border-radius:8px;overflow-x:auto;font-size:13px">GMAIL_REFRESH_TOKEN=${escapeHtml(tokens.refresh_token)}</pre>
      <p>Then redeploy. After redeploy, the CRM can send mail via /api/email/send.</p>
      <p style="color:#a00"><strong>Copy this token now</strong> &mdash; it will not be shown again. If you lose it, revoke access at
      <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a> and re-run /api/auth/google/init.</p>
    `);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return htmlResponse(`<h1>Token exchange failed</h1><pre>${escapeHtml(msg)}</pre>`);
  }
}

function htmlResponse(body: string) {
  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><title>OAuth setup</title>
    <style>body{font-family:-apple-system,Helvetica,sans-serif;max-width:720px;margin:60px auto;padding:0 20px;line-height:1.55;color:#111}h1{font-family:Georgia,serif}a{color:#0a66c2}</style>
    </head><body>${body}</body></html>`,
    { status: 200, headers: { "content-type": "text/html; charset=utf-8" } }
  );
}

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
