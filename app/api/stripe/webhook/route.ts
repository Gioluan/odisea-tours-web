import crypto from "crypto";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";
import { getDoc, patchDoc } from "@/lib/firestore-rest";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Stripe → family portal. When a family pays an instalment with its card link,
 * Stripe calls this endpoint and the instalment on the family's private plan
 * (accessCodes/{CODE}.payment) turns "paid".
 *
 * An instalment is marked paid ONLY when all of these hold:
 *   1. the request carries a valid Stripe signature (STRIPE_WEBHOOK_SECRET),
 *      so nobody can fake a payment by calling this URL;
 *   2. Stripe says the money is captured (payment_status "paid"), not just
 *      started or pending (bank debits, Klarna);
 *   3. client_reference_id names a real family code and instalment
 *      ("OT-<CODE>-<key>", added to each family's link by _cufc_payments.py);
 *   4. the amount in euros equals that instalment to the cent.
 * Anything else changes nothing on the portal and emails Juan to check.
 * Every event is processed once (stripeEvents/{eventId}).
 */

const NOTIFY_TO = "juan@odisea-tours.com";
const TOLERANCE_S = 300;

function verifySignature(payload: string, header: string | null, secret: string): boolean {
  if (!header) return false;
  const parts = Object.fromEntries(header.split(",").map(p => {
    const i = p.indexOf("=");
    return [p.slice(0, i), p.slice(i + 1)];
  })) as Record<string, string>;
  const t = Number(parts.t);
  if (!t || Math.abs(Date.now() / 1000 - t) > TOLERANCE_S) return false;
  const expected = crypto.createHmac("sha256", secret).update(`${t}.${payload}`).digest("hex");
  // A header can carry several v1 signatures (secret rotation).
  return header.split(",").filter(p => p.startsWith("v1=")).some(p => {
    const got = p.slice(3);
    return got.length === expected.length && crypto.timingSafeEqual(Buffer.from(got), Buffer.from(expected));
  });
}

async function mail(subject: string, lines: string[]) {
  try {
    const key = process.env.RESEND_API_KEY;
    if (!key) return;
    await new Resend(key).emails.send({
      from: "Odisea Tours Payments <info@odisea-tours.com>",
      to: [NOTIFY_TO],
      subject,
      text: lines.join("\n"),
    });
  } catch { /* the event is still recorded in stripeEvents */ }
}

// Euros actually charged, in cents. With Adaptive Pricing a US card pays in
// dollars; Stripe then reports the original euro amount in currency_conversion.
function euroCents(s: any): number | null {
  if (String(s.currency).toLowerCase() === "eur") return s.amount_total ?? null;
  const cc = s.currency_conversion;
  if (cc && String(cc.source_currency).toLowerCase() === "eur") return cc.amount_total ?? null;
  return null;
}

type Outcome = { status: string; subject: string; lines: string[] };

async function markPaid(session: any): Promise<Outcome> {
  const ref = String(session.client_reference_id || "");
  const m = /^OT-([A-Z0-9]+-[A-Z0-9]+)-(deposit|second|final)$/.exec(ref);
  const cents = euroCents(session);
  const shown = cents != null ? (cents / 100).toFixed(2) + " EUR" : `${session.amount_total} ${session.currency}`;
  const base = [`Stripe session: ${session.id}`, `Reference: ${ref || "(none)"}`, `Amount: ${shown}`,
                `Payer email: ${session.customer_details?.email || "-"}`];
  if (!m) return { status: "unmatched", subject: `Card payment to check: no family reference (${shown})`, lines: [...base, "", "Not linked to a family. Nothing changed on the portal. Find the payer in Stripe and mark it by hand."] };
  const [, code, key] = m;

  for (let attempt = 0; attempt < 3; attempt++) {
    const doc = await getDoc(`accessCodes/${code}`);
    const plan = doc?.data?.payment;
    const items: any[] = Array.isArray(plan?.installments) ? plan.installments : [];
    const it = items.find(i => i.key === key);
    if (!doc || !it) return { status: "unmatched", subject: `Card payment to check: unknown family code (${shown})`, lines: [...base, "", `No payment plan for ${code} / ${key}. Nothing changed on the portal.`] };
    const family = String(doc.data.familyName || code);
    const due = Math.round(Number(it.amount) * 100);
    if (it.status === "paid") return { status: "duplicate", subject: `Card payment to check: ${key} already marked paid (${code})`, lines: [...base, "", `The ${it.label || key} for ${code} was already paid. Possible double payment: check Stripe and refund if needed.`] };
    if (cents !== due) {
      return { status: "amount-mismatch", subject: `Card payment to check: ${code} paid ${shown}, ${it.label || key} is ${(due / 100).toFixed(2)} EUR`,
               lines: [...base, "", `Expected ${(due / 100).toFixed(2)} EUR for the ${it.label || key}. The portal still shows it as due. Check the quantity paid and mark it by hand (or refund the difference).`] };
    }
    it.status = "paid";
    it.paidOn = new Date().toISOString().slice(0, 10);
    it.paidVia = "card";
    it.stripeSession = session.id;
    plan.updatedAt = new Date().toISOString();
    try {
      await patchDoc(`accessCodes/${code}`, { payment: plan }, { updateTime: doc.updateTime });
      return { status: "paid", subject: `Card payment received: ${code} ${it.label || key} ${(due / 100).toFixed(2)} EUR`,
               lines: [...base, "", `Marked PAID on the family portal (${code}, ${it.label || key}).`, family !== code ? `Family: ${family}` : ""] };
    } catch (e: any) {
      if (e?.status === 400 || e?.status === 409 || e?.status === 412) continue;   // changed meanwhile: re-read and retry
      throw e;
    }
  }
  return { status: "error", subject: `Card payment to check: could not update ${code}`, lines: [...base, "", "The plan kept changing while saving. Mark it by hand."] };
}

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ error: "not configured" }, { status: 503 });
  const payload = await req.text();
  if (!verifySignature(payload, req.headers.get("stripe-signature"), secret)) {
    return NextResponse.json({ error: "bad signature" }, { status: 400 });
  }
  const event = JSON.parse(payload);

  // Process each event once. Stripe retries until it gets a 2xx.
  try {
    await patchDoc(`stripeEvents/${event.id}`, { type: event.type, receivedAt: new Date().toISOString(), status: "processing" }, { mustNotExist: true });
  } catch (e: any) {
    if (e?.status === 400 || e?.status === 409 || e?.status === 412) return NextResponse.json({ ok: true, duplicate: true });
    throw e;
  }

  let outcome: Outcome = { status: "ignored", subject: "", lines: [] };
  const obj = event.data?.object || {};
  try {
    if (event.type === "checkout.session.completed" || event.type === "checkout.session.async_payment_succeeded") {
      if (obj.payment_status === "paid") outcome = await markPaid(obj);
      else outcome = { status: "pending", subject: `Card payment started, not yet confirmed (${obj.client_reference_id || "no reference"})`,
                       lines: [`Stripe session: ${obj.id}`, "Payment method still processing (bank debit or similar). The portal stays as due until Stripe confirms it."] };
    } else if (event.type === "checkout.session.async_payment_failed") {
      outcome = { status: "failed", subject: `Card payment FAILED (${obj.client_reference_id || "no reference"})`,
                  lines: [`Stripe session: ${obj.id}`, "The delayed payment failed. Nothing changed on the portal; the family still owes it."] };
    } else if (event.type === "charge.refunded" || event.type === "charge.dispute.created") {
      outcome = { status: "refund-or-dispute", subject: `Stripe ${event.type === "charge.refunded" ? "refund" : "DISPUTE"}: ${(obj.amount_refunded ?? obj.amount ?? 0) / 100} ${String(obj.currency || "").toUpperCase()}`,
                  lines: [`Charge: ${obj.id || obj.charge}`, "The portal is NOT changed automatically. If an instalment should go back to due, change it by hand."] };
    }
  } catch (e: any) {
    outcome = { status: "error", subject: "Card payment to check: webhook error", lines: [`Event ${event.id} (${event.type})`, String(e?.message || e)] };
  }

  await patchDoc(`stripeEvents/${event.id}`, { type: event.type, status: outcome.status, sessionId: obj.id || null,
    reference: obj.client_reference_id || null, processedAt: new Date().toISOString() }).catch(() => {});
  if (outcome.subject) await mail(outcome.subject, outcome.lines);
  return NextResponse.json({ ok: true, status: outcome.status });
}
