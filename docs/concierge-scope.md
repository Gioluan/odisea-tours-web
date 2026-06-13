# Site Concierge — scope and build notes

A floating AI chat assistant on odisea-tours.com that answers visitor questions,
qualifies group-tour intent, and hands serious prospects to a discovery call or a
captured inquiry. It is a **qualifier and concierge, not a closer**. Group tours are
high-consideration custom purchases, so the goal metric is qualified discovery calls
booked / leads captured, not "sales".

## What it does
- Floating "Plan your trip" launcher, bottom-right, on every page.
- Answers questions about the 12 tour experiences, who Odisea is, and how it works.
- Qualifies naturally: group type, sport/interest, group size, origin, rough dates.
- Two conversion paths, both always available:
  1. **Calendly** free 30-min discovery call (persistent button in the panel).
  2. **submit_inquiry** tool: hands a qualified lead to `bookings@odisea-tours.com`
     through the same Resend pipeline the contact form uses.

## Architecture
- `components/Concierge.tsx` — client widget, mounted globally in `app/layout.tsx`.
  Editorial styling (paper / ink / gold, Archivo + JetBrains Mono). Self-contained,
  inline-styled so it does not depend on utility classes existing.
- `app/api/concierge/route.ts` — Node runtime endpoint. Runs Claude Haiku 4.5 with a
  guardrailed system prompt and one tool (`submit_inquiry`). Agent loop handles tool
  calls server-side (max 4 hops), then returns the final assistant text.
- `content/concierge-kb.ts` — knowledge base built from the structured `content/tours.ts`
  fields. **Prices are deliberately excluded.** Free-text tour descriptions and the
  per-tour FAQ answers (which carry prices) are not included.
- `lib/inquiry.ts` — shared `sendInquiry()` used by both the contact form
  (`/api/inquiry`) and the concierge tool, so all leads land in one inbox identically.

## Hard guardrails (in the system prompt)
- **No prices, ever.** Pricing is custom; the concierge routes to a quote/call.
- **No "official partner"** language for FCB / VCF / RFEF or any club/federation.
- **No top-academy fixture promises** for men's/boys' groups. Opponents are described
  as "age-matched Spanish academy or amateur sides".
- No fabricated testimonials, names, availability, or dates.
- No em-dashes. "Soccer" (not "football") for US/AU visitors.
- Stays on topic; deflects off-topic and steers back to how Odisea can help.

## Abuse / cost controls
- Best-effort per-IP rate limit (20 msgs / minute per warm instance).
- Max 24 turns and 2000 chars per message accepted by the server.
- `max_tokens: 1024`, Haiku 4.5 (cheap). Typical conversation is a few cents.

## Configuration
Requires one new environment variable:

```
ANTHROPIC_API_KEY=sk-ant-...
```

Set it on Vercel (Production + Preview) and in `.env.local` for local dev. Without it
the endpoint returns 503 and the widget shows a graceful fallback (email + Calendly).
`RESEND_API_KEY` already powers the contact form; the concierge reuses it. With no
Resend key in dev, inquiries are logged instead of sent.

## Out of scope for v1
- Payments, live availability, CRM write-back (leads land in `bookings@` email).
- Multilingual UI (English only v1).
- Streaming responses (Haiku is fast enough that request/response is fine).

## Future ideas
- Stream tokens for a snappier feel.
- Log transcripts to Firestore for lead intelligence and prompt tuning.
- Localize for Spanish-speaking visitors.
- A/B the launcher copy and the qualify-vs-call balance.
