"use client";
import { useState } from "react";

const TOUR_TYPES = [
  "European Soccer",
  "Cultural",
  "Corporate / Retreat",
  "Sport & Adventure",
  "Not sure yet",
];

const GROUP_SIZES = ["Under 15", "15–30", "30–60", "60–120", "120+"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong.");
      }
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-24 text-center">
        <div className="stamp text-gold-deep mx-auto mb-10">
          Received
          <br />
          Thank You
        </div>
        <h2 className="font-display text-6xl md:text-7xl tracking-tight mb-6">
          We&apos;ve got it.
        </h2>
        <p className="text-ink/75 text-lg max-w-md mx-auto">
          A real person on the team will read your message and reply, usually
          within a few hours. In the meantime, a quiet vermut is recommended.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        <Field label="Your name" name="name" required />
        <Field label="Organization" name="org" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (with country code)" name="phone" />
      </div>

      <div>
        <FieldLabel>Type of tour</FieldLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          {TOUR_TYPES.map((t) => (
            <label
              key={t}
              className="relative border border-ink/20 py-3 px-4 cursor-pointer hover:border-ink transition-colors has-[:checked]:bg-ink has-[:checked]:text-paper"
            >
              <input
                type="radio"
                name="tourType"
                value={t}
                className="absolute opacity-0"
                required
              />
              <span className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase">
                {t}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <FieldLabel>Group size</FieldLabel>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
          {GROUP_SIZES.map((g) => (
            <label
              key={g}
              className="relative border border-ink/20 py-3 px-4 cursor-pointer hover:border-ink transition-colors has-[:checked]:bg-ink has-[:checked]:text-paper"
            >
              <input
                type="radio"
                name="groupSize"
                value={g}
                className="absolute opacity-0"
                required
              />
              <span className="font-mono-editorial text-[0.6rem] tracking-[0.22em] uppercase text-center block">
                {g}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Field label="Preferred travel month" name="travelMonth" />
        <Field label="Approximate duration" name="duration" />
      </div>

      <div>
        <FieldLabel>Tell us the story</FieldLabel>
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Who are you bringing, and what would make this trip unforgettable?"
          className="w-full mt-4 bg-transparent border border-ink/20 focus:border-ink px-5 py-4 text-base placeholder:text-ink/40 focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="flex items-center justify-between flex-wrap gap-6 pt-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-editorial disabled:opacity-40"
        >
          {status === "sending" ? "Sending..." : "Send Dispatch"}
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path
              d="M1 5 H13 M9 1 L13 5 L9 9"
              stroke="currentColor"
              strokeWidth="1.3"
            />
          </svg>
        </button>
        <p className="font-mono-editorial text-[0.55rem] tracking-[0.2em] uppercase text-ink/50 max-w-xs">
          We keep your details to ourselves. No list, no newsletter, no spam.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-800 border border-red-800/30 p-4">
          {error}
        </p>
      )}
    </form>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/60 block">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <FieldLabel>{label}{required && " *"}</FieldLabel>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full mt-3 bg-transparent border-b border-ink/25 focus:border-ink py-3 text-lg focus:outline-none transition-colors font-display"
      />
    </label>
  );
}
