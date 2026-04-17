"use client";

import { useState } from "react";

export default function PasswordGate({ slug, clubName }: { slug: string; clubName: string }) {
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!password) return;
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/proposals/verify", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ slug, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErr(data.error || "Incorrect access code.");
        setBusy(false);
        return;
      }
      window.location.reload();
    } catch {
      setErr("Something went wrong. Try again.");
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-ink text-paper flex items-center justify-center px-6">
      <div className="corner-ticks w-full max-w-lg py-24 text-center">
        <div className="mb-10 inline-flex items-center gap-3">
          <span className="w-2 h-2 bg-gold inline-block rotate-45" />
          <span className="font-mono-editorial text-[0.68rem] tracking-[0.28em] uppercase text-paper/70">
            Odisea Tours · Prepared for
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl uppercase leading-[0.92] mb-10">
          {clubName}
        </h1>

        <p className="text-paper/70 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
          This proposal is private. Enter the access code we sent with your invitation to continue.
        </p>

        <form onSubmit={submit} className="flex flex-col items-center gap-4 max-w-xs mx-auto">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            placeholder="Access code"
            spellCheck={false}
            autoCapitalize="characters"
            className="w-full border border-paper/40 bg-transparent px-4 py-3 font-mono-editorial text-[0.82rem] tracking-[0.18em] uppercase text-center text-paper placeholder-paper/40 focus:outline-none focus:border-gold transition-colors"
          />
          <button type="submit" className="btn-editorial on-dark" disabled={busy || !password}>
            {busy ? "Opening" : "Open proposal"}
          </button>
          {err && (
            <p className="text-gold font-mono-editorial text-[0.7rem] tracking-[0.18em] uppercase mt-2">
              {err}
            </p>
          )}
        </form>

        <p className="mt-16 text-paper/40 font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase">
          odisea-tours.com · since 2005
        </p>
      </div>
    </main>
  );
}
