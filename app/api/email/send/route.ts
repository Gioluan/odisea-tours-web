import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Direct send for the Odisea Tours CRM (portal.odisea-tours.com) and the
 * marketing site. Same pattern as mycantera.com/sales — Resend with
 * juan@odisea-tours.com as the verified sender. Replies go to that address,
 * which forwards to Juan's mailbox.
 *
 * Auth: Origin allowlist for v1. Replace with Firebase ID token verification
 * when Aitor/Raul start sending on their own accounts.
 */

const ALLOWED_ORIGINS = new Set([
  "https://portal.odisea-tours.com",
  "https://odisea-tours.com",
  "http://localhost:3000",
  "http://localhost:5500",
  "http://127.0.0.1:5500",
]);

const ALLOWED_SENDERS: Record<string, { name: string }> = {
  "juan@odisea-tours.com": { name: "Juan Sanchez" },
  "bookings@odisea-tours.com": { name: "Odisea Tours · Bookings" },
  "info@odisea-tours.com": { name: "Odisea Tours" },
};
const DEFAULT_FROM_EMAIL = "juan@odisea-tours.com";

type SendBody = {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
  from?: string; // must be one of ALLOWED_SENDERS
};

export async function OPTIONS(req: NextRequest) {
  return preflight(req);
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  if (!ALLOWED_ORIGINS.has(origin)) {
    return cors(NextResponse.json({ error: "Origin not allowed" }, { status: 403 }), origin);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return cors(
      NextResponse.json({ error: "RESEND_API_KEY not configured on the server" }, { status: 503 }),
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
    return cors(NextResponse.json({ error: "Missing subject or body" }, { status: 400 }), origin);
  }

  const fromEmail = body.from && ALLOWED_SENDERS[body.from] ? body.from : DEFAULT_FROM_EMAIL;
  const fromName = ALLOWED_SENDERS[fromEmail].name;
  const replyTo = body.replyTo || fromEmail;

  // Auto-build HTML from plain text if no HTML supplied — preserves paragraph
  // breaks and renders cleanly without making it look like a marketing blast.
  const html = body.html
    ? body.html
    : (body.text || "")
        .split("\n")
        .map(line =>
          line.trim()
            ? `<p style="margin:0 0 12px 0;font-family:Arial,sans-serif;font-size:14px;line-height:1.5;color:#111">${escapeHtml(line)}</p>`
            : ""
        )
        .join("");

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to,
      cc: normaliseAddresses(body.cc),
      bcc: normaliseAddresses(body.bcc),
      replyTo,
      subject: body.subject,
      html,
      text: body.text,
    });

    if (error) {
      console.error("[email/send] Resend error:", error);
      return cors(
        NextResponse.json({ error: error.message || "Resend error", detail: error }, { status: 502 }),
        origin
      );
    }

    return cors(NextResponse.json({ ok: true, id: data?.id || null }), origin);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error("[email/send] failed:", msg);
    return cors(
      NextResponse.json({ error: "Send failed", detail: msg }, { status: 500 }),
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

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
