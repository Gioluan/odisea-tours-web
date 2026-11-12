import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Resend } from "resend";
import { getDoc, patchDoc } from "@/lib/firestore-rest";
import FamilyPlan from "@/lib/family-plan.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Daily payment reminders for families that pay Odisea directly (family
 * portal plans, accessCodes/{CODE}.payment). Run by Vercel Cron (vercel.json),
 * authorised with CRON_SECRET (Vercel sends "Authorization: Bearer <secret>").
 *
 * Families pay any amount whenever they like (12-Nov-2026); what matters is
 * the TOTAL paid by each due date. For the next date a family has not reached:
 *   14 and 3 days before  -> friendly reminder to the family
 *   1 and 7 days after    -> overdue notice to the family
 * Each one is sent once (accessCodes/{CODE}.reminders[<due>:<step>]).
 * Juan gets a summary on any day something happens, and an overview of every
 * family on Mondays. Card payments already email Juan from the Stripe webhook.
 *
 * Settings: Firestore config/paymentReminders
 *   { tourIds: ["1793980169017"], familyEmails: false }
 * familyEmails false (or missing) = nothing goes to families: Juan's summary
 * lists what WOULD have been sent, so the wording can be checked first.
 * ?dry=1 returns the plan as JSON and sends nothing at all.
 */

const JUAN = "juan@odisea-tours.com";
const FROM_FAMILY = "Juan Sanchez | Odisea Tours <info@odisea-tours.com>";
const FROM_JUAN = "Odisea Tours Payments <info@odisea-tours.com>";
const PORTAL = "https://portal.odisea-tours.com/portal.html?code=";
// Windows, not exact days: a missed cron run sends the reminder the next day
// instead of losing it. Each step is still sent once per due date. Checked
// in order; only the first window matching daysTo applies.
const STEPS: { from: number; to: number; step: string; late: boolean }[] = [
  { from: 4, to: 14, step: "before14", late: false },
  { from: 0, to: 3, step: "before3", late: false },
  { from: -6, to: -1, step: "late1", late: true },
  { from: -60, to: -7, step: "late7", late: true },
];

const eur = (v: number) => "€" + Number(v).toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const longDate = (d: string) => new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const dayDiff = (a: string, b: string) => Math.round((Date.parse(a + "T00:00:00Z") - Date.parse(b + "T00:00:00Z")) / 86400000);
const esc = (s: unknown) => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));

type Row = {
  tour: string; family: string; code: string; email: string;
  paid: number; total: number; due: string; target: number; left: number; daysTo: number;
  step?: string; sent?: boolean; error?: string;
};

function familyEmail(r: Row, late: boolean) {
  const subject = late
    ? `${r.tour}: payment overdue (${eur(r.left)})`
    : `${r.tour}: payment reminder, ${longDate(r.due)}`;
  const intro = late
    ? `Our records show that your total paid has not yet reached the amount due by <strong>${longDate(r.due)}</strong>.`
    : `This is a friendly reminder of your next payment date: <strong>${longDate(r.due)}</strong>.`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#1f2937;line-height:1.5">
<p>Dear ${esc(r.family)},</p>
<p>${intro}</p>
<table style="border-collapse:collapse;margin:8px 0 14px">
<tr><td style="padding:3px 16px 3px 0;color:#6b7280">Total to have paid by ${esc(longDate(r.due))}</td><td style="padding:3px 0"><strong>${eur(r.target)}</strong></td></tr>
<tr><td style="padding:3px 16px 3px 0;color:#6b7280">Paid so far</td><td style="padding:3px 0">${eur(r.paid)}</td></tr>
<tr><td style="padding:3px 16px 3px 0;color:#6b7280">Still to pay</td><td style="padding:3px 0"><strong>${eur(r.left)}</strong></td></tr>
</table>
<p>You can pay <strong>any amount, whenever it suits you</strong>, by card, Wise or bank transfer, from your family portal:</p>
<p><a href="${PORTAL}${encodeURIComponent(r.code)}" style="display:inline-block;background:#0b2545;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:bold">Open my family portal</a></p>
<p style="color:#6b7280;font-size:13px">If you have sent a bank transfer in the last few days, thank you: it may not show yet, as we add transfers by hand once they arrive. Card payments show automatically.${late ? " If you need more time or there is a problem, just reply to this email." : ""}</p>
<p>Best regards,<br>Juan Sanchez<br>Odisea Tours</p>
</div>`;
  return { subject, html };
}

function juanTable(rows: Row[], title: string) {
  if (!rows.length) return "";
  return `<h3 style="margin:18px 0 6px">${esc(title)}</h3><table style="border-collapse:collapse;font-size:13px">
<tr style="text-align:left;color:#6b7280"><th style="padding:3px 10px 3px 0">Family</th><th style="padding:3px 10px">Paid</th><th style="padding:3px 10px">Next date</th><th style="padding:3px 10px">Still due</th><th style="padding:3px 10px">Note</th></tr>
${rows.map(r => `<tr><td style="padding:3px 10px 3px 0">${esc(r.family)} <span style="color:#9ca3af">${esc(r.code)}</span></td>
<td style="padding:3px 10px">${eur(r.paid)} / ${eur(r.total)}</td>
<td style="padding:3px 10px">${r.due ? esc(r.due) + (r.daysTo < 0 ? ` <b style="color:#b91c1c">(${-r.daysTo}d late)</b>` : ` (${r.daysTo}d)`) : r.total > 0 ? "all paid" : "nothing due"}</td>
<td style="padding:3px 10px">${r.left > 0 ? eur(r.left) : "-"}</td>
<td style="padding:3px 10px">${esc(r.step ? (r.sent ? "emailed: " : "would email: ") + r.step : r.error || "")}</td></tr>`).join("")}
</table>`;
}

export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  }
  const dry = req.nextUrl.searchParams.get("dry") === "1";
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Madrid" });
  const cfg = (await getDoc("config/paymentReminders"))?.data || {};
  const override = dry ? (req.nextUrl.searchParams.get("tours") || "").split(",").filter(Boolean) : [];
  const tourIds: string[] = override.length ? override : Array.isArray(cfg.tourIds) ? cfg.tourIds.map(String) : [];
  const familyOn = cfg.familyEmails === true && !dry;
  const key = process.env.RESEND_API_KEY;
  const resend = key ? new Resend(key) : null;

  const all: Row[] = [];
  for (const tourId of tourIds) {
    const t = (await getDoc(`tours/${tourId}`))?.data;
    if (!t) continue;
    const tourName = String(t.tourName || t.name || "Your Odisea trip");
    const clients: any[] = Array.isArray(t.individualClients) ? t.individualClients : [];
    const codes: Record<string, any> = t.familyAccessCodes || {};
    for (const c of clients) {
      const code = codes[String(c.id)]?.code;
      if (!code) continue;
      const doc = await getDoc(`accessCodes/${code}`);
      const plan = doc?.data?.payment;
      if (!plan) continue;
      const ch = (await getDoc(`tours/${tourId}/familyChoices/${c.id}`).catch(() => null))?.data || {};
      const live = FamilyPlan.compute(plan, ch, today);
      // Running target: what the total paid must reach by each due date.
      let run = 0, next: any = null, target = 0;
      for (const i of live.items) {
        const a = Number(i.amount) || 0;
        if (a <= 0) continue;
        run = Math.round((run + a) * 100) / 100;
        if (!next && live.paid < run - 0.005) { next = i; target = run; }
      }
      const row: Row = {
        tour: tourName, family: String(c.name || code), code, email: String(c.email || "").trim(),
        paid: live.paid, total: live.total, due: next?.due || "", target,
        left: next ? Math.round((target - live.paid) * 100) / 100 : 0,
        daysTo: next?.due ? dayDiff(next.due, today) : 0,
      };
      all.push(row);
      if (!next?.due) continue;
      const hit = STEPS.find(s => row.daysTo >= s.from && row.daysTo <= s.to);
      if (!hit) continue;
      const sentKey = `${next.due}:${hit.step}`;
      const reminders: Record<string, string> = doc!.data.reminders || {};
      if (reminders[sentKey]) continue;
      row.step = hit.step;
      if (!familyOn || !resend) continue;
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(row.email)) { row.error = "no valid email"; continue; }
      try {
        const m = familyEmail(row, hit.late);
        await resend.emails.send({ from: FROM_FAMILY, to: [row.email], replyTo: JUAN, subject: m.subject, html: m.html });
        row.sent = true;
        await patchDoc(`accessCodes/${code}`, { reminders: { ...reminders, [sentKey]: new Date().toISOString() } });
      } catch (e: any) { row.error = "send failed: " + String(e?.message || e).slice(0, 80); }
    }
  }

  const actions = all.filter(r => r.step || r.error);
  const late = all.filter(r => r.due && r.daysTo < 0);
  const monday = new Date().getUTCDay() === 1;
  // ?dry=1&preview=<CODE>: send that family's reminder and overdue emails to Juan only, marked [TEST].
  const preview = dry ? req.nextUrl.searchParams.get("preview") : null;
  if (preview && resend) {
    const r = all.find(x => x.code === preview && x.due);
    if (r) for (const late of [false, true]) {
      const m = familyEmail(r, late);
      await resend.emails.send({ from: FROM_FAMILY, to: [JUAN], replyTo: JUAN, subject: "[TEST] " + m.subject, html: m.html });
    }
    return NextResponse.json({ preview, sentToJuan: !!r });
  }
  if (dry) return NextResponse.json({ today, tourIds, familyEmails: cfg.familyEmails === true, rows: all });

  if (resend && (actions.length || monday)) {
    const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#1f2937">
<p>Family payments, ${esc(today)}.${familyOn ? "" : " <b>Family reminder emails are OFF</b>: nothing was sent to families; below is what would have gone out. Turn them on in Firestore config/paymentReminders.familyEmails."}</p>
${juanTable(actions, familyOn ? "Reminders today" : "Reminders that would go out today")}
${juanTable(late, "Behind schedule")}
${monday ? juanTable(all, "All families (Monday overview)") : ""}
</div>`;
    const subject = `Family payments ${today}: ${actions.filter(r => r.sent).length} reminders sent${late.length ? `, ${late.length} behind` : ""}${familyOn ? "" : " (family emails OFF)"}`;
    try { await resend.emails.send({ from: FROM_JUAN, to: [JUAN], subject, html }); } catch { /* next run */ }
  }
  return NextResponse.json({ ok: true, today, families: all.length, reminders: actions.length, sent: actions.filter(r => r.sent).length, behind: late.length });
}
