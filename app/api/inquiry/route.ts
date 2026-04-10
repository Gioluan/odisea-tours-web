import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "bookings@odisea-tours.com";
const FROM = process.env.RESEND_FROM || "Odisea Tours <inquiry@odisea-tours.com>";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const { name, org, email, phone, tourType, groupSize, travelMonth, duration, message } = body;

    if (!name || !email || !message || !tourType || !groupSize) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: -apple-system, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #111;">
        <div style="border-bottom: 1px solid #eee; padding-bottom: 16px; margin-bottom: 24px;">
          <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin: 0;">New Inquiry · Odisea Tours</p>
          <h1 style="font-family: Georgia, serif; font-size: 28px; margin: 8px 0 0; color: #111;">${escape(name)}</h1>
          ${org ? `<p style="color: #555; margin: 4px 0 0;">${escape(org)}</p>` : ""}
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 8px 0; color: #888; width: 140px;">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #888;">Phone</td><td>${escape(phone)}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; color: #888;">Tour type</td><td>${escape(tourType)}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Group size</td><td>${escape(groupSize)}</td></tr>
          ${travelMonth ? `<tr><td style="padding: 8px 0; color: #888;">Travel month</td><td>${escape(travelMonth)}</td></tr>` : ""}
          ${duration ? `<tr><td style="padding: 8px 0; color: #888;">Duration</td><td>${escape(duration)}</td></tr>` : ""}
        </table>
        <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #eee;">
          <p style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin: 0 0 8px;">The story</p>
          <p style="line-height: 1.7; white-space: pre-wrap;">${escape(message)}</p>
        </div>
        <p style="margin-top: 32px; font-size: 11px; color: #aaa; text-align: center;">Sent from odisea-tours.com · ${new Date().toISOString()}</p>
      </div>
    `;

    if (!process.env.RESEND_API_KEY) {
      // Dev mode — log instead of sending
      console.log("[inquiry] Would send email:", { name, email, tourType });
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New inquiry · ${name} · ${tourType} (${groupSize})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error." },
      { status: 500 }
    );
  }
}

function escape(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
