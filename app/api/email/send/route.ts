import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = new Set([
  "https://portal.odisea-tours.com",
  "https://odisea-tours.com",
  "http://localhost:3000",
  "http://localhost:5500",
  "http://127.0.0.1:5500",
]);

type SendBody = {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
};

export async function OPTIONS(req: NextRequest) {
  return preflight(req);
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  if (!ALLOWED_ORIGINS.has(origin)) {
    return cors(NextResponse.json({ error: "Origin not allowed" }, { status: 403 }), origin);
  }

  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) {
    return cors(
      NextResponse.json(
        { error: "Gmail OAuth not configured on the server." },
        { status: 500 }
      ),
      origin
    );
  }

  let body: SendBody;
  try {
    body = (await req.json()) as SendBody;
  } catch {
    return cors(NextResponse.json({ error: "Invalid JSON" }, { status: 400 }), origin);
  }

  const to = normaliseAddresses(body.to);
  if (!to.length) {
    return cors(NextResponse.json({ error: "Missing 'to'" }, { status: 400 }), origin);
  }
  if (!body.subject || (!body.text && !body.html)) {
    return cors(
      NextResponse.json({ error: "Missing subject or body" }, { status: 400 }),
      origin
    );
  }

  try {
    const oauth2 = new google.auth.OAuth2(clientId, clientSecret);
    oauth2.setCredentials({ refresh_token: refreshToken });

    const gmail = google.gmail({ version: "v1", auth: oauth2 });

    const raw = buildRawMessage({
      to,
      cc: normaliseAddresses(body.cc),
      bcc: normaliseAddresses(body.bcc),
      subject: body.subject,
      text: body.text,
      html: body.html,
      replyTo: body.replyTo,
    });

    const res = await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw },
    });

    return cors(
      NextResponse.json({
        ok: true,
        messageId: res.data.id,
        threadId: res.data.threadId,
      }),
      origin
    );
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error("[gmail/send] failed:", msg);
    return cors(
      NextResponse.json({ error: "Gmail send failed", detail: msg }, { status: 500 }),
      origin
    );
  }
}

function preflight(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
  if (ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Vary"] = "Origin";
  }
  return new NextResponse(null, { status: 204, headers });
}

function cors(res: NextResponse, origin: string) {
  if (ALLOWED_ORIGINS.has(origin)) {
    res.headers.set("Access-Control-Allow-Origin", origin);
    res.headers.set("Vary", "Origin");
  }
  return res;
}

function normaliseAddresses(v: string | string[] | undefined): string[] {
  if (!v) return [];
  const arr = Array.isArray(v) ? v : [v];
  return arr
    .flatMap(s => String(s).split(/[,;]/))
    .map(s => s.trim())
    .filter(s => s && /.+@.+/.test(s));
}

function buildRawMessage(args: {
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
}) {
  const boundary = "----=_OdiseaTours_" + Math.random().toString(36).slice(2);
  const lines: string[] = [];
  lines.push(`To: ${args.to.join(", ")}`);
  if (args.cc.length) lines.push(`Cc: ${args.cc.join(", ")}`);
  if (args.bcc.length) lines.push(`Bcc: ${args.bcc.join(", ")}`);
  if (args.replyTo) lines.push(`Reply-To: ${args.replyTo}`);
  lines.push(`Subject: ${encodeHeader(args.subject)}`);
  lines.push("MIME-Version: 1.0");

  if (args.text && args.html) {
    lines.push(`Content-Type: multipart/alternative; boundary="${boundary}"`);
    lines.push("");
    lines.push(`--${boundary}`);
    lines.push('Content-Type: text/plain; charset="UTF-8"');
    lines.push("Content-Transfer-Encoding: 7bit");
    lines.push("");
    lines.push(args.text);
    lines.push("");
    lines.push(`--${boundary}`);
    lines.push('Content-Type: text/html; charset="UTF-8"');
    lines.push("Content-Transfer-Encoding: 7bit");
    lines.push("");
    lines.push(args.html);
    lines.push("");
    lines.push(`--${boundary}--`);
  } else if (args.html) {
    lines.push('Content-Type: text/html; charset="UTF-8"');
    lines.push("Content-Transfer-Encoding: 7bit");
    lines.push("");
    lines.push(args.html);
  } else {
    lines.push('Content-Type: text/plain; charset="UTF-8"');
    lines.push("Content-Transfer-Encoding: 7bit");
    lines.push("");
    lines.push(args.text || "");
  }

  const message = lines.join("\r\n");
  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function encodeHeader(s: string) {
  // RFC 2047 encoded-word for non-ASCII subjects
  if (/^[\x20-\x7E]*$/.test(s)) return s;
  return "=?UTF-8?B?" + Buffer.from(s).toString("base64") + "?=";
}
