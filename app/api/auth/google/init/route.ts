import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Step 1 of one-time OAuth setup.
 *
 * Open this URL in a browser while logged into juan@odisea-tours.com:
 *   https://odisea-tours.com/api/auth/google/init
 *
 * Google will prompt for consent and bounce back to /api/auth/google/callback
 * which displays the refresh token to paste into Vercel env GMAIL_REFRESH_TOKEN.
 */
export async function GET() {
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { error: "Missing GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET, or GOOGLE_OAUTH_REDIRECT_URI in Vercel env." },
      { status: 500 }
    );
  }

  const oauth2 = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
  const url = oauth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/gmail.send",
      "https://www.googleapis.com/auth/gmail.readonly",
    ],
  });

  return NextResponse.redirect(url);
}
