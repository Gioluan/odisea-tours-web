import { NextResponse } from "next/server";
import { sendConciergeTranscript, type ChatClassification } from "@/lib/inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Matches an email address anywhere in a visitor message.
const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const MAX_MSGS = 40;
const MAX_CHARS = 4000;

type Role = "user" | "assistant";
interface Msg {
  role: Role;
  content: string;
}

/**
 * Records a concierge conversation when it ends or is abandoned. The widget
 * beacons the full transcript here on idle, close, or page-leave. We only email
 * Juan for engaged chats (>= 2 visitor messages) and classify each one:
 *  - converted: a lead was already submitted this session (transcript for context)
 *  - abandoned: a visitor left an email but never completed  -> recover it
 *  - browsed:   engaged but no contact left                  -> informational
 */
export async function POST(req: Request) {
  try {
    let body: {
      conversationId?: string;
      messages?: unknown;
      inquirySubmitted?: boolean;
    };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ ok: false, error: "Bad JSON" }, { status: 400 });
    }

    const conversationId =
      typeof body.conversationId === "string"
        ? body.conversationId.slice(0, 64)
        : "unknown";
    const inquirySubmitted = body.inquirySubmitted === true;

    const raw = Array.isArray(body.messages) ? body.messages : [];
    const messages: Msg[] = raw
      .filter(
        (m): m is Msg =>
          !!m &&
          typeof m === "object" &&
          ((m as Msg).role === "user" || (m as Msg).role === "assistant") &&
          typeof (m as Msg).content === "string"
      )
      .slice(0, MAX_MSGS)
      .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

    const userMsgs = messages.filter((m) => m.role === "user");

    // Engaged chats only: skip anything that is not a real back-and-forth.
    if (userMsgs.length < 2) {
      return NextResponse.json({ ok: true, skipped: "not-engaged" });
    }

    // Look for a captured email in the visitor's own messages.
    let capturedEmail: string | undefined;
    for (const m of userMsgs) {
      const match = m.content.match(EMAIL_RE);
      if (match) {
        capturedEmail = match[0];
        break;
      }
    }

    const classification: ChatClassification = inquirySubmitted
      ? "converted"
      : capturedEmail
      ? "abandoned"
      : "browsed";

    const result = await sendConciergeTranscript({
      conversationId,
      messages,
      classification,
      capturedEmail,
    });

    return NextResponse.json({ ok: result.ok, classification });
  } catch (err) {
    console.error("[concierge-log]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
