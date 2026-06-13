import { Resend } from "resend";

const TO = "bookings@odisea-tours.com";
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

function escape(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
