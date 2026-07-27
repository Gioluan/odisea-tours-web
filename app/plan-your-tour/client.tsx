"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SPORTS = [
  { value: "soccer", label: "Soccer / Football" },
  { value: "softball", label: "Softball" },
  { value: "other", label: "Other sport" },
];

const GROUP_TYPES = [
  { value: "veterans", label: "Veterans / Adult Club" },
  { value: "youth", label: "Youth Club / Academy" },
  { value: "school", label: "School / College Team" },
  { value: "other", label: "Other" },
];

const GROUP_SIZES = ["Under 15", "15-25", "25-40", "40-60", "60-100", "100+"];

const DESTINATIONS = [
  "Barcelona",
  "Madrid",
  "Valencia",
  "Bilbao",
  "Malaga",
  "Multiple cities",
  "Not sure yet",
];

export default function PlanYourTourPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    clubName: "",
    sport: "",
    groupType: "",
    groupSize: "",
    families: "",
    destination: "",
    preferredDates: "",
    message: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  // Pre-select the sport when arriving from a sport-specific CTA (e.g. ?sport=softball)
  useEffect(() => {
    const sport = new URLSearchParams(window.location.search).get("sport");
    if (sport && SPORTS.some((s) => s.value === sport)) update("sport", sport);
  }, []);

  const isSoftball = form.sport === "softball";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const sportLabel = SPORTS.find((s) => s.value === form.sport)?.label || "Not specified";
    const subject = `${form.sport === "softball" ? "Softball" : "Tour"} Inquiry / ${form.clubName || form.name} (${form.groupType || sportLabel})`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Club/Team: ${form.clubName}`,
      `Sport: ${sportLabel}`,
      `Group Type: ${form.groupType}`,
      `Group Size: ${form.groupSize}`,
      `Families traveling: ${form.families || "Not specified"}`,
      `Destination: ${form.destination}`,
      `Preferred Dates: ${form.preferredDates || "Flexible"}`,
      `Message: ${form.message || "No additional message"}`,
      "",
      "Sent from odisea-tours.com",
    ].join("\n");

    const mailtoUrl = `mailto:juan@odisea-tours.com?cc=bookings@odisea-tours.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, "_blank");

    setSending(false);
    setSent(true);
  };

  /* ─── Success state ─── */
  if (sent) {
    return (
      <>
        <section className="min-h-[100dvh] bg-ink flex flex-col items-center justify-center px-6 relative overflow-hidden">
          <div className="relative text-center max-w-lg">
            <div className="stamp text-paper/70 mx-auto mb-10">
              INQUIRY
              <br />
              SENT
            </div>
            <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-paper mb-4">
              You&apos;re one step closer to Spain
            </h1>
            <p className="text-paper/50 text-lg mb-4 max-w-md mx-auto">
              Your email client should have opened with your inquiry.
              Send it and Juan will get back to you within 24 hours.
            </p>
            <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/30 mb-10">
              Prefer to chat right now? WhatsApp is faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/34670059797?text=${encodeURIComponent(
                  isSoftball
                    ? "Hi Juan! I just submitted a softball tour inquiry on odisea-tours.com."
                    : "Hi Juan! I just submitted a tour inquiry on odisea-tours.com.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial on-dark"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                WhatsApp Juan
              </a>
              <Link href="/" className="btn-editorial on-dark">
                Back to Odisea Tours
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-ink pt-32 pb-20 overflow-hidden">
        <Image
          src={
            isSoftball
              ? "/photos/odisea-softball-tours-spain-teams-on-field.jpg"
              : "/photos/veterans-soccer-tour-match-vs-spanish-team.jpg"
          }
          alt={isSoftball ? "US softball team on tour in Spain" : "Football tour group in Spain"}
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />

        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="max-w-2xl">
            <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/40 mb-6 reveal">
              {isSoftball ? "Four games, three cities" : "Start your journey"}
            </p>
            <h1 className="font-display text-[clamp(2rem,5vw,3.4rem)] leading-[0.92] text-paper mb-6 reveal">
              {isSoftball ? "Plan Your Softball" : "Plan Your Football"}
              <br />
              Tour to <span className="font-display-italic text-gold">Spain</span>
            </h1>
            <p className="text-paper/50 text-lg max-w-lg reveal">
              {isSoftball
                ? "Tell us your squad size, your players' ages and how many families are traveling. We come back with a draft nine-day itinerary and a per-person number that names the cities, the host clubs and the hotels."
                : "Tell us about your group and we'll build a custom itinerary. No commitment, no pressure. Just 20 years of experience at your service."}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FORM
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper-warm paper-texture py-20">
        <div className="max-w-[720px] mx-auto px-6 md:px-10">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Sport */}
            <div className="reveal">
              <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-4">
                What sport is your team?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {SPORTS.map((s) => (
                  <label
                    key={s.value}
                    className={`relative border py-3 px-4 cursor-pointer transition-all text-sm font-display tracking-tight text-center ${
                      form.sport === s.value
                        ? "bg-ink text-paper border-ink"
                        : "border-ink/20 text-ink hover:border-ink/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="sport"
                      value={s.value}
                      checked={form.sport === s.value}
                      onChange={() => update("sport", s.value)}
                      className="sr-only"
                    />
                    {s.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Group type */}
            <div className="reveal">
              <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-4">
                What type of group are you?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {GROUP_TYPES.map((t) => (
                  <label
                    key={t.value}
                    className={`relative border py-3 px-4 cursor-pointer transition-all text-sm font-display tracking-tight ${
                      form.groupType === t.value
                        ? "bg-ink text-paper border-ink"
                        : "border-ink/20 text-ink hover:border-ink/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="groupType"
                      value={t.value}
                      checked={form.groupType === t.value}
                      onChange={() => update("groupType", t.value)}
                      className="sr-only"
                    />
                    {t.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 reveal">
              <div>
                <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-2">
                  Your name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="John Smith"
                  className="w-full bg-transparent border-b border-ink/25 py-3 text-lg text-ink placeholder-ink-muted/40 focus:border-ink focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-ink/25 py-3 text-lg text-ink placeholder-ink-muted/40 focus:border-ink focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 reveal">
              <div>
                <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+1 555 123 4567"
                  className="w-full bg-transparent border-b border-ink/25 py-3 text-lg text-ink placeholder-ink-muted/40 focus:border-ink focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-2">
                  Club / Team name *
                </label>
                <input
                  type="text"
                  required
                  value={form.clubName}
                  onChange={(e) => update("clubName", e.target.value)}
                  placeholder="Sydney Legends FC"
                  className="w-full bg-transparent border-b border-ink/25 py-3 text-lg text-ink placeholder-ink-muted/40 focus:border-ink focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Group size */}
            <div className="reveal">
              <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-4">
                Group size (travelers)
              </label>
              <div className="flex flex-wrap gap-2">
                {GROUP_SIZES.map((s) => (
                  <label
                    key={s}
                    className={`border py-2.5 px-4 cursor-pointer transition-all text-sm font-mono-editorial tracking-wide ${
                      form.groupSize === s
                        ? "bg-ink text-paper border-ink"
                        : "border-ink/20 text-ink-muted hover:border-ink/40 hover:text-ink"
                    }`}
                  >
                    <input
                      type="radio"
                      name="groupSize"
                      value={s}
                      checked={form.groupSize === s}
                      onChange={() => update("groupSize", s)}
                      className="sr-only"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            {/* Families traveling */}
            <div className="reveal">
              <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-2">
                How many families are traveling? {isSoftball ? "" : "(optional)"}
              </label>
              <input
                type="text"
                value={form.families}
                onChange={(e) => update("families", e.target.value)}
                placeholder={isSoftball ? "e.g., 12 families joining the squad" : "e.g., a few parents, or none"}
                className="w-full bg-transparent border-b border-ink/25 py-3 text-lg text-ink placeholder-ink-muted/40 focus:border-ink focus:outline-none transition-colors"
              />
              {isSoftball && (
                <p className="font-mono-editorial text-[0.58rem] tracking-[0.22em] uppercase text-ink-muted/70 mt-2">
                  Softball groups travel with families. They join the cultural program and are quoted at a lower rate than players.
                </p>
              )}
            </div>

            {/* Destination */}
            <div className="reveal">
              <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-4">
                Where in Spain?
              </label>
              <div className="flex flex-wrap gap-2">
                {DESTINATIONS.map((d) => (
                  <label
                    key={d}
                    className={`border py-2.5 px-4 cursor-pointer transition-all text-sm font-mono-editorial tracking-wide ${
                      form.destination === d
                        ? "bg-ink text-paper border-ink"
                        : "border-ink/20 text-ink-muted hover:border-ink/40 hover:text-ink"
                    }`}
                  >
                    <input
                      type="radio"
                      name="destination"
                      value={d}
                      checked={form.destination === d}
                      onChange={() => update("destination", d)}
                      className="sr-only"
                    />
                    {d}
                  </label>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div className="reveal">
              <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-2">
                Preferred dates (optional)
              </label>
              <input
                type="text"
                value={form.preferredDates}
                onChange={(e) => update("preferredDates", e.target.value)}
                placeholder="e.g., October 2026, Spring break 2027, flexible..."
                className="w-full bg-transparent border-b border-ink/25 py-3 text-lg text-ink placeholder-ink-muted/40 focus:border-ink focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div className="reveal">
              <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-2">
                Anything else we should know?
              </label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us about your group, what matters most to you, any specific requests..."
                rows={3}
                className="w-full bg-transparent border-b border-ink/25 py-3 text-lg text-ink placeholder-ink-muted/40 focus:border-ink focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="reveal">
              <button
                type="submit"
                disabled={sending || !form.name || !form.email || !form.clubName}
                className="btn-editorial w-full justify-center disabled:opacity-30 disabled:pointer-events-none"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                {sending ? "Sending..." : "Send Inquiry to Odisea Tours"}
              </button>

              <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted text-center mt-4">
                No commitment. Juan will personally reply within 24 hours.
              </p>
            </div>

            {/* Divider */}
            <div className="rule-label text-ink-muted reveal">
              <span className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase">or chat now</span>
            </div>

            {/* WhatsApp */}
            <div className="reveal">
              <a
                href={`https://wa.me/34670059797?text=${encodeURIComponent(
                  isSoftball
                    ? "Hi Juan! I'm interested in organizing a softball tour to Spain."
                    : "Hi Juan! I'm interested in organizing a football tour to Spain.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial w-full justify-center"
              >
                WhatsApp Juan directly
              </a>
            </div>
          </form>

          {/* Trust */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-14 reveal">
            <span className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted">On the ground in Spain since 2005</span>
            <span className="text-ink/15">|</span>
            <span className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted">100+ tours organized</span>
            <span className="text-ink/15">|</span>
            <span className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted">FC Barcelona / Valencia CF / Spanish FA</span>
          </div>
        </div>
      </section>
    </>
  );
}
