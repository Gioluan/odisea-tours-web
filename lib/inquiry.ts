import { Resend } from "resend";

// Where lead notifications land. bookings@odisea-tours.com did NOT deliver to a
// mailbox Juan reads (Resend accepted the send but the address dead-ended), so
// leads were silently lost. Route to inboxes Juan actually monitors. Override
// with INQUIRY_TO (comma-separated). The split/trim also strips any stray
// trailing newline the Vercel CLI can append to env values.
const TO = (process.env.INQUIRY_TO || "juan@odisea-tours.com, bookings@odisea-tours.com")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const FROM = process.env.RESEND_FROM || "Odisea Tours <inquiry@odisea-tours.com>";

export interface InquiryPayload {
  name: string;
  email: string;
  message: string;
  tourType: string;
  groupSize: string;
  org?: string;
  phone?: string;
  travelMonth?: string;
  duration?: string;
  origin?: string;
  /** Where the lead came from: "contact-form" or "concierge". */
  source?: string;
}

export interface InquiryResult {
  ok: boolean;
  dev?: boolean;
  error?: string;
}

const REQUIRED: (keyof InquiryPayload)[] = [
  "name",
  "email",
  "message",
  "tourType",
  "groupSize",
];

/**
 * Single source of truth for turning a qualified lead into an email to
 * bookings@. Used by both the /contact form (/api/inquiry) and the site
 * concierge tool (/api/concierge), so leads land in one inbox the same way.
 */
export async function sendInquiry(p: InquiryPayload): Promise<InquiryResult> {
  for (const field of REQUIRED) {
    if (!p[field]) {
      return { ok: false, error: `Missing required field: ${field}` };
    }
  }

  const sourceLabel =
    p.source === "concierge" ? "Concierge chat" : "Website form";

  const row = (label: string, value?: string) =>
    value
      ? `<tr><td style="padding: 8px 0; color: #888; width: 140px;">${escape(
          label
        )}</td><td>${escape(value)}</td></tr>`
      : "";

  const html = `
    <div style="font-family: -apple-system, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #111;">
      <div style="border-bottom: 1px solid #eee; padding-bottom: 16px; margin-bottom: 24px;">
        <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin: 0;">New Inquiry · ${escape(
          sourceLabel
        )}</p>
        <h1 style="font-family: Georgia, serif; font-size: 28px; margin: 8px 0 0; color: #111;">${escape(
          p.name
        )}</h1>
        ${p.org ? `<p style="color: #555; margin: 4px 0 0;">${escape(p.org)}</p>` : ""}
      </div>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 8px 0; color: #888; width: 140px;">Email</td><td><a href="mailto:${escape(
          p.email
        )}">${escape(p.email)}</a></td></tr>
        ${row("Phone", p.phone)}
        ${row("Tour type", p.tourType)}
        ${row("Group size", p.groupSize)}
        ${row("Origin", p.origin)}
        ${row("Travel month", p.travelMonth)}
        ${row("Duration", p.duration)}
      </table>
      <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #eee;">
        <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin: 0 0 8px;">The story</p>
        <p style="line-height: 1.7; white-space: pre-wrap;">${escape(p.message)}</p>
      </div>
      <p style="margin-top: 32px; font-size: 11px; color: #aaa; text-align: center;">Sent from odisea-tours.com · ${sourceLabel} · ${new Date().toISOString()}</p>
    </div>
  `;

  if (!process.env.RESEND_API_KEY) {
    // Dev mode: log instead of sending so local runs don't need a key.
    console.log("[inquiry] Would send email:", {
      name: p.name,
      email: p.email,
      tourType: p.tourType,
      source: p.source,
    });
    return { ok: true, dev: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: p.email,
    subject: `New inquiry · ${p.name} · ${p.tourType} (${p.groupSize})${
      p.source === "concierge" ? " · via concierge" : ""
    }`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return { ok: false, error: "Could not send email." };
  }

  return { ok: true };
}

export type ChatClassification = "abandoned" | "converted" | "browsed";

export interface TranscriptPayload {
  conversationId: string;
  messages: { role: "user" | "assistant"; content: string }[];
  classification: ChatClassification;
  capturedEmail?: string;
}

/**
 * Emails Juan a full concierge conversation transcript when a chat ends or is
 * abandoned. Complements sendInquiry (which only fires on a fully-qualified
 * lead): this gives visibility into every engaged chat, and flags the ones
 * where a visitor left a name/email but never completed as ABANDONED so they
 * can be recovered. Reuses the same Resend transport, sender and recipients.
 */
export async function sendConciergeTranscript(
  p: TranscriptPayload
): Promise<InquiryResult> {
  const userCount = p.messages.filter((m) => m.role === "user").length;

  const badge = {
    abandoned: { label: "Abandoned · contact captured", color: "#a8391e" },
    converted: { label: "Lead submitted", color: "#1f7a3d" },
    browsed: { label: "Browsed · no contact left", color: "#666" },
  }[p.classification];

  const bubbles = p.messages
    .map((m) => {
      const who = m.role === "user" ? "Visitor" : "Concierge";
      const bg = m.role === "user" ? "#f2ede3" : "#ffffff";
      const align = m.role === "user" ? "right" : "left";
      return `<div style="margin: 8px 0; text-align: ${align};"><div style="display: inline-block; max-width: 88%; text-align: left; background: ${bg}; border: 1px solid #ececec; border-radius: 10px; padding: 8px 11px;"><div style="font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: #999; margin-bottom: 3px;">${who}</div><div style="font-size: 13px; line-height: 1.5; white-space: pre-wrap;">${escape(
        m.content
      )}</div></div></div>`;
    })
    .join("");

  const html = `
    <div style="font-family: -apple-system, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; color: #111;">
      <div style="border-bottom: 1px solid #eee; padding-bottom: 16px; margin-bottom: 20px;">
        <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin: 0;">Concierge conversation</p>
        <p style="display: inline-block; margin: 10px 0 0; padding: 3px 10px; border-radius: 999px; background: ${badge.color}; color: #fff; font-size: 12px; font-weight: 600;">${badge.label}</p>
        ${
          p.capturedEmail
            ? `<p style="margin: 12px 0 0; font-size: 14px;">Contact left: <a href="mailto:${escape(
                p.capturedEmail
              )}">${escape(p.capturedEmail)}</a></p>`
            : ""
        }
        <p style="margin: 6px 0 0; font-size: 12px; color: #999;">${userCount} visitor message${
    userCount === 1 ? "" : "s"
  } · id ${escape(p.conversationId.slice(0, 8))}</p>
      </div>
      ${
        p.classification === "abandoned"
          ? `<p style="background: #fdf3f0; border: 1px solid #f3d6cd; border-radius: 8px; padding: 10px 12px; font-size: 13px; color: #7a2814; margin: 0 0 18px;">This visitor left contact details but did not complete an inquiry. Worth a follow-up.</p>`
          : ""
      }
      ${bubbles}
      <p style="margin-top: 28px; font-size: 11px; color: #aaa; text-align: center;">Sent from odisea-tours.com concierge · ${new Date().toISOString()}</p>
    </div>
  `;

  const subject =
    p.classification === "abandoned"
      ? `Concierge · Abandoned lead${
          p.capturedEmail ? ` · ${p.capturedEmail}` : ""
        } · ${userCount} msgs`
      : p.classification === "converted"
      ? `Concierge · Conversation (lead submitted) · ${userCount} msgs`
      : `Concierge · Conversation (browsed, no contact) · ${userCount} msgs`;

  if (!process.env.RESEND_API_KEY) {
    console.log("[concierge-log] Would send transcript:", {
      conversationId: p.conversationId,
      classification: p.classification,
      capturedEmail: p.capturedEmail,
    });
    return { ok: true, dev: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    ...(p.capturedEmail ? { replyTo: p.capturedEmail } : {}),
    subject,
    html,
  });

  if (error) {
    console.error("Resend transcript error:", error);
    return { ok: false, error: "Could not send transcript." };
  }
  return { ok: true };
}

function escape(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
