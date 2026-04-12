"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/tours", label: "Tours", num: "I" },
  { href: "/about", label: "Origin", num: "II" },
  { href: "/journal", label: "Journal", num: "III" },
  { href: "/contact", label: "Inquire", num: "IV" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-paper/88 backdrop-blur-md border-b border-ink/10 text-ink"
            : "bg-transparent text-paper"
        }`}
      >
        <div className="max-w-[1680px] mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between h-20">
          {/* Wordmark */}
          <Link href="/" className="flex items-end gap-3 group">
            <span className="font-display text-3xl md:text-[2.1rem] leading-none tracking-tight">
              Odisea
            </span>
            <span
              className={`font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase pb-1 hidden sm:inline ${
                scrolled ? "text-ink-muted" : "text-paper/70"
              }`}
            >
              Tours / Est. 2005
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-baseline gap-2 text-sm"
              >
                <span
                  className={`font-mono-editorial text-[0.6rem] tracking-[0.2em] ${
                    scrolled ? "text-ink-muted" : "text-paper/70"
                  }`}
                >
                  {l.num}
                </span>
                <span className="link-rule font-display text-xl tracking-tight">
                  {l.label}
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              className={`btn-editorial ${scrolled ? "" : "on-dark"}`}
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Request Dispatch
            </Link>
          </nav>

          {/* Mobile trigger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-px transition-transform ${
                scrolled ? "bg-ink" : "bg-paper"
              } ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-px transition-transform ${
                scrolled ? "bg-ink" : "bg-paper"
              } ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-all duration-700 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-start px-8 gap-8">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4"
            >
              <span className="font-mono-editorial text-xs text-ink-muted">
                {l.num}
              </span>
              <span
                className="font-display text-6xl"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
