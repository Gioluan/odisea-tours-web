import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { sendInquiry } from "@/lib/inquiry";
import { buildTourKB, ABOUT_ODISEA, CONTACT_FACTS } from "@/content/concierge-kb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-haiku-4-5-20251001";
const MAX_TURNS = 24; // cap conversation length the server will accept
const MAX_CHARS = 2000; // cap per user message
const MAX_TOOL_HOPS = 4; // how many tool round-trips per request

type Role = "user" | "assistant";
interface ClientMessage {
  role: Role;
  content: string;
}

// Best-effort in-memory rate limit (per warm instance). Not a hard security
// boundary on serverless, just a basic abuse damper.
const HITS = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = HITS.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    HITS.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_PER_WINDOW;
}

const SYSTEM = `You are the Odisea Tours concierge, a warm, concise assistant on odisea-tours.com.
Your single goal is to help group-travel visitors and move serious inquiries toward a free discovery
call or a captured inquiry. You are NOT a salesperson who closes deals: group tours are custom and
high-consideration, so your job is to answer well, qualify gently, and hand off.

## About Odisea
${ABOUT_ODISEA}

## How to reach the team
${CONTACT_FACTS}

## Tours you can talk about
${buildTourKB()}

## How you behave
- Be genuinely helpful and brief. Short paragraphs. Plain, friendly English.
- Use "soccer" (not "football") for these mostly US and Australian visitors.
- Qualify naturally over the conversation: what kind of group, sport or interest, rough group size,
  origin country, and rough dates or time of year. Do not interrogate; weave it in.
- When a visitor is a real prospect, point them to the free 30-minute discovery call
  (https://calendly.com/juan-odisea-tours/30min) as the main next step.
- If they do not want to book the call, you MUST ask for their email address so the team can send
  them a written proposal and quote. Never let an interested visitor leave with neither a booked
  call nor a captured email. Then pass their details to the team with the submit_inquiry tool.
- Before calling submit_inquiry you MUST have, at minimum, their name, an email, the tour type or
  interest, and a rough group size. Ask for whatever is missing first. Confirm the email back.
- After a successful submit_inquiry, tell them the team (Juan and the Odisea team) will reply within
  one business day, and share the Calendly link as the faster option.

## Hard rules (never break these)
- NEVER quote, estimate, or confirm any price, per-person figure, or total. Pricing depends on dates,
  group size, length and hotel tier. If asked about cost, say it is fully custom and the team will
  send an exact per-traveler quote after a quick call or inquiry, then offer the call.
- NEVER call Odisea an "official partner" of FC Barcelona, Valencia CF, the RFEF/Spanish FA, or any
  club or federation. Odisea has worked with Spanish clubs and academies for years, but is not an
  official partner. Avoid the word "official" in that context entirely.
- Do NOT promise fixtures or training against top La Liga first-team academies (FC Barcelona,
  Valencia CF, RCD Espanyol academy sides) for men's or boys' groups. Describe opponents as
  "age-matched Spanish academy or amateur sides". Women's and girls' groups can exceptionally get
  more, but never over-promise; let the team confirm on a call.
- Never invent testimonials, names, guarantees, availability, or specific dates.
- Never use em-dashes. Use commas, colons, parentheses, or a new sentence.
- Stay on topic: Odisea's Spain group, sport, school and cultural tours. If asked something off-topic
  or out of scope (visas, flights pricing, unrelated requests), give a brief honest pointer and steer
  back to how Odisea can help, or to the discovery call.
- If you do not know something, say so plainly and offer the call. Do not guess.`;

const TOOLS: Anthropic.Tool[] = [
  {
    name: "submit_inquiry",
    description:
      "Pass a qualified visitor's details to the Odisea Tours team (lands in bookings@). Only call this once you have the visitor's name, email, tour type or interest, and a rough group size, and the visitor has agreed to be contacted.",
    input_schema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Visitor's full name." },
        email: { type: "string", description: "Visitor's email address." },
        tourType: {
          type: "string",
          description:
            "The tour or interest, e.g. 'Youth soccer tour', 'Camino de Santiago', 'Culinary / Sabores de España', 'Softball'.",
        },
        groupSize: {
          type: "string",
          description: "Rough group size, e.g. '24 players + 6 staff' or '~30'.",
        },
        org: { type: "string", description: "Club, school or organization name, if given." },
        phone: { type: "string", description: "Phone or WhatsApp, if given." },
        origin: { type: "string", description: "Origin country or city, if given." },
        travelMonth: {
          type: "string",
          description: "Rough travel dates or time of year, if given.",
        },
        message: {
          type: "string",
          description:
            "A short summary of what the group wants, written from the visitor's perspective, capturing the key details discussed.",
        },
      },
      required: ["name", "email", "tourType", "groupSize", "message"],
    },
  },
];

/**
 * Safety net for Juan's hard no-em-dash rule. Haiku occasionally emits "—"
 * despite the system prompt, so we strip it server-side. En-dashes (–) are left
 * alone because the tour data uses them for legitimate ranges ("6–10 nights").
 */
function stripEmDashes(s: string): string {
  return s.replace(/\s*—\s*/g, ", ");
}

export async function POST(req: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "Concierge is not configured." },
        { status: 503 }
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const incoming: ClientMessage[] = Array.isArray(body.messages)
      ? body.messages
      : [];

    if (incoming.length === 0) {
      return NextResponse.json({ error: "No messages." }, { status: 400 });
    }
    if (incoming.length > MAX_TURNS) {
      return NextResponse.json(
        { error: "This conversation is long. Please book a call so we can help properly: https://calendly.com/juan-odisea-tours/30min" },
        { status: 400 }
      );
    }

    // Sanitize into Anthropic message format.
    const messages: Anthropic.MessageParam[] = incoming
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({
        role: m.role,
        content: m.content.slice(0, MAX_CHARS),
      }));

    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    let inquirySubmitted = false;

    // Agent loop: let the model answer and optionally call submit_inquiry.
    for (let hop = 0; hop < MAX_TOOL_HOPS; hop++) {
      const res = await anthropic.messages.create({
        model: MODEL,
        max_tokens: 1024,
        system: SYSTEM,
        tools: TOOLS,
        messages,
      });

      const toolUses = res.content.filter(
        (b): b is Anthropic.ToolUseBlock => b.type === "tool_use"
      );

      if (toolUses.length === 0 || res.stop_reason !== "tool_use") {
        const text = res.content
          .filter((b): b is Anthropic.TextBlock => b.type === "text")
          .map((b) => b.text)
          .join("\n")
          .trim();
        return NextResponse.json({
          reply: stripEmDashes(text) || "Sorry, I lost my train of thought. Could you say that again?",
          inquirySubmitted,
        });
      }

      // Execute tool calls and feed results back.
      messages.push({ role: "assistant", content: res.content });
      const toolResults: Anthropic.ToolResultBlockParam[] = [];

      for (const tu of toolUses) {
        if (tu.name === "submit_inquiry") {
          const input = tu.input as Record<string, string>;
          const result = await sendInquiry({
            name: input.name,
            email: input.email,
            tourType: input.tourType,
            groupSize: input.groupSize,
            org: input.org,
            phone: input.phone,
            origin: input.origin,
            travelMonth: input.travelMonth,
            message: input.message || "Inquiry via site concierge.",
            source: "concierge",
          });
          if (result.ok) inquirySubmitted = true;
          toolResults.push({
            type: "tool_result",
            tool_use_id: tu.id,
            content: result.ok
              ? "Inquiry delivered to the Odisea team. Confirm to the visitor and share the Calendly link."
              : `Could not send: ${result.error}. Apologize briefly and give the visitor the Calendly link and bookings@odisea-tours.com instead.`,
            is_error: !result.ok,
          });
        } else {
          toolResults.push({
            type: "tool_result",
            tool_use_id: tu.id,
            content: "Unknown tool.",
            is_error: true,
          });
        }
      }

      messages.push({ role: "user", content: toolResults });
    }

    // Exhausted tool hops without a final text answer.
    return NextResponse.json({
      reply:
        "Thanks. The best next step is a quick free call so the team can help properly: https://calendly.com/juan-odisea-tours/30min",
      inquirySubmitted,
    });
  } catch (err) {
    console.error("[concierge]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email bookings@odisea-tours.com or book a call at https://calendly.com/juan-odisea-tours/30min" },
      { status: 500 }
    );
  }
}
