import { NextResponse } from "next/server";
import { sendInquiry } from "@/lib/inquiry";

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

    const result = await sendInquiry({
      name,
      org,
      email,
      phone,
      tourType,
      groupSize,
      travelMonth,
      duration,
      message,
      source: "contact-form",
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.error || "Could not send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, dev: result.dev });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
