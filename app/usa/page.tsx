import Link from "next/link";
import type { Metadata } from "next";
import { US_CITIES } from "@/content/us-cities";
import JournalLinks from "@/components/JournalLinks";

export const metadata: Metadata = {
  title: "Spain Soccer Tours from the USA | Odisea Tours",
  description:
    "Spain soccer tours built for US clubs, high schools and colleges. City-specific planning for Los Angeles, San Diego, Dallas, Houston, New York, Miami and beyond. Run by Odisea Tours since 2005.",
  alternates: { canonical: "/usa" },
  openGraph: {
    title: "Spain Soccer Tours from the USA | Odisea Tours",
    description:
      "Spain soccer tours built for US clubs, high schools and colleges. City-specific planning for the biggest youth soccer metros.",
    url: "https://odisea-tours.com/usa",
    type: "website",
  },
};

export default function UsaIndexPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="bg-ink text-paper pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <nav aria-label="Breadcrumb" className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <Link href="/" className="hover:text-gold">Odisea Tours</Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">Tours from the USA</span>
          </nav>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[0.95] max-w-[20ch]">
            Spain Soccer Tours <span className="font-display-italic text-gold">from the USA</span>
          </h1>
          <p className="mt-6 max-w-[60ch] text-paper/85 text-lg leading-relaxed">
            Odisea Tours has been hosting US soccer clubs, high schools and college rosters in Spain since 2005. Pick your home city to see flight routes, training partners and the tour formats that work from your market.
          </p>
        </div>
      </section>

      <section className="paper-texture py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-8">
            Tour planning by home city
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {US_CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/usa/${c.slug}`}
                className="group border border-ink/15 p-8 hover:bg-ink hover:text-paper transition-colors"
              >
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/70 mb-3">
                  {c.state_abbr} · {c.metro}
                </div>
                <h2 className="font-display text-2xl md:text-3xl uppercase leading-tight">
                  Spain tours from <span className="font-display-italic text-gold">{c.name}</span>
                </h2>
                <p className="mt-4 text-ink-soft group-hover:text-paper/85 leading-relaxed">
                  {c.og_summary}
                </p>
                <span className="inline-block mt-5 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-gold-deep group-hover:text-gold">
                  Plan a tour from {c.name} →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-ink-soft max-w-[60ch] mx-auto leading-relaxed">
              Not in one of these metros? Spain tours work from every US city. Tell us where you are flying from and we build the routing.
            </p>
            <Link href="/plan-your-tour" className="inline-block mt-6 btn-editorial">Plan a tour</Link>
          </div>
        </div>
      </section>

      <JournalLinks
        title="Reading for US clubs"
        italicTail="planning Spain."
        intro="The conversations US club directors have with us before booking, written up as field notes. Cost, timing, opposition, parents."
        slugs={[
          "youth-soccer-tours-to-spain-complete-guide",
          "what-a-youth-soccer-tour-to-spain-costs",
          "real-madrid-or-fc-barcelona-which-stadium-visit",
          "arranging-friendly-matches-against-spanish-youth-clubs",
        ]}
      />
    </main>
  );
}
