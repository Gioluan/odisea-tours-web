import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";
import { verifyFirebaseToken } from "@/lib/firebase-token";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * "A family wrote to us": the client portal (portal.odisea-tours.com) calls
 * this right after a family or the organiser saves a message, so Juan gets an
 * email instead of having to open the CRM to find out.
 *
 * Deliberately NOT a general send endpoint: the recipient is fixed to
 * Odisea's own inbox, so the worst a caller can do is email us. Requires a
 * Firebase ID token from the portal's anonymous session, the portal origin,
 * and caps the text length and the rate per sender.
 */

const NOTIFY_TO = "juan@odisea-tours.com";
const CRM_URL = "https://portal.odisea-tours.com/";
const ALLOWED_ORIGINS = new Set(["https://portal.odisea-tours.com", "http://localhost:5500", "http://127.0.0.1:5500"]);

// Best effort, per server instance: at most 10 notices per sender in 10 minutes.
const recent = new Map<string, number[]>();
function rateLimited(uid: string) {
  const now = Date.now();
  const list = (recent.get(uid) || []).filter(t => now - t < 10 * 60 * 1000);
  list.push(now);
  recent.set(uid, list);
  return list.length > 10;
}

export async function OPTIONS(req: NextRequest) {
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

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  const cors = (res: NextResponse) => {
    if (ALLOWED_ORIGINS.has(origin)) {
      res.headers.set("Access-Control-Allow-Origin", origin);
      res.headers.set("Vary", "Origin");
    }
    return res;
  };
  if (!ALLOWED_ORIGINS.has(origin)) return cors(NextResponse.json({ error: "Origin not allowed" }, { status: 403 }));

  const token = await verifyFirebaseToken(req.headers.get("authorization"));
  if (!token) return cors(NextResponse.json({ error: "Not authorised" }, { status: 401 }));
  if (rateLimited(token.uid)) return cors(NextResponse.json({ error: "Too many" }, { status: 429 }));

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return cors(NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 503 }));

  let body: { tourId?: string; tourName?: string; from?: string; kind?: string; text?: string };
  try {
    body = await req.json();
  } catch {
    return cors(NextResponse.json({ error: "Invalid JSON" }, { status: 400 }));
  }
  const clip = (v: unknown, n: number) => String(v ?? "").replace(/[\r\n]+/g, " ").slice(0, n);
  const from = clip(body.from, 120) || "A family";
  const tourName = clip(body.tourName, 160) || "a tour";
  const kind = body.kind === "club" ? "organiser" : "family";
  const text = String(body.text ?? "").slice(0, 2000);
  if (!text.trim()) return cors(NextResponse.json({ error: "Empty" }, { status: 400 }));

  const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
  const subject = `Portal message from ${from} (${tourName})`;
  const plain = `${from} (${kind}) wrote in the portal for ${tourName}:\n\n${text}\n\nReply from the CRM: open the trip, Client Portal, View Messages.\n${CRM_URL}`;
  const html =
    `<p style="font-family:Arial,sans-serif;font-size:14px;color:#111"><strong>${esc(from)}</strong> (${kind}) wrote in the portal for <strong>${esc(tourName)}</strong>:</p>` +
    `<blockquote style="font-family:Arial,sans-serif;font-size:14px;color:#111;border-left:3px solid #f0a500;margin:0 0 12px 0;padding:6px 12px;white-space:pre-wrap">${esc(text)}</blockquote>` +
    `<p style="font-family:Arial,sans-serif;font-size:13px;color:#555">Reply from the CRM: open the trip, Client Portal, View Messages. Replies to this email do not reach the family.</p>` +
    `<p><a href="${CRM_URL}" style="font-family:Arial,sans-serif;font-size:13px">Open the CRM</a></p>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Odisea Tours Portal <info@odisea-tours.com>",
      to: [NOTIFY_TO],
      subject,
      html,
      text: plain,
    });
    if (error) return cors(NextResponse.json({ error: error.message || "Resend error" }, { status: 502 }));
    return cors(NextResponse.json({ ok: true }));
  } catch (e) {
    return cors(NextResponse.json({ error: "Send failed", detail: e instanceof Error ? e.message : String(e) }, { status: 500 }));
  }
}
