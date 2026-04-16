import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "We could not find the page you were looking for. Browse our tour experiences, the journal, or get in touch.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-10 lg:px-14 paper-texture">
      <div className="max-w-[720px] text-center">
        <div className="rule-label justify-center font-mono-editorial text-[0.58rem] tracking-[0.28em] uppercase text-ink/55 mb-6 inline-flex">
          <span>404 · Off the Map</span>
        </div>
        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-[-0.015em]">
          You took a wrong turn,{" "}
          <span className="font-display-italic text-gold">friend.</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-base md:text-lg text-ink/70 leading-snug">
          The page you were looking for is not here. It may have moved, or it may
          never have existed. Either way, the rest of Spain is still waiting.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Link
            href="/"
            className="block border border-ink/15 hover:border-gold p-5 text-left transition-colors"
          >
            <div className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/55 mb-2">
              01 · Home
            </div>
            <div className="font-display text-lg leading-snug">
              Back to the <span className="font-display-italic text-gold">beginning</span>
            </div>
          </Link>
          <Link
            href="/tours"
            className="block border border-ink/15 hover:border-gold p-5 text-left transition-colors"
          >
            <div className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/55 mb-2">
              02 · Tours
            </div>
            <div className="font-display text-lg leading-snug">
              Browse the <span className="font-display-italic text-gold">experiences</span>
            </div>
          </Link>
          <Link
            href="/journal"
            className="block border border-ink/15 hover:border-gold p-5 text-left transition-colors"
          >
            <div className="font-mono-editorial text-[0.55rem] tracking-[0.28em] uppercase text-ink/55 mb-2">
              03 · The Journal
            </div>
            <div className="font-display text-lg leading-snug">
              Read the <span className="font-display-italic text-gold">field notes</span>
            </div>
          </Link>
        </div>

        <div className="mt-12">
          <Link href="/plan-your-tour" className="link-rule font-display text-base">
            Or just get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}
