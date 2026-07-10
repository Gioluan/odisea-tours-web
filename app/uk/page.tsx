import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { UK_CITIES } from "@/content/uk-cities";
import JournalLinks from "@/components/JournalLinks";
import GroundLogistics from "@/components/GroundLogistics";

export const metadata: Metadata = {
  title: "Spain Football Tours from the UK | Odisea Tours",
  description:
    "Spain football tours built for UK clubs, schools and academies. City-specific planning for London, Manchester, Birmingham, Liverpool, Leeds and Glasgow. Run by a Spanish team on the ground since 2005.",
  alternates: {
    canonical: "/uk",
    languages: {
      "en-US": "https://odisea-tours.com/usa",
      "en-GB": "https://odisea-tours.com/uk",
      "en-AU": "https://odisea-tours.com/australia",
      "x-default": "https://odisea-tours.com/",
    },
  },
  openGraph: {
    title: "Spain Football Tours from the UK | Odisea Tours",
    description:
      "Spain football tours for UK clubs, schools and academies. City-specific planning for the major UK markets.",
    url: "https://odisea-tours.com/uk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spain Football Tours from the UK | Odisea Tours",
    description:
      "Spain football tours for UK clubs, schools and academies. City-specific planning for the major UK markets.",
  },
};

export default function UkIndexPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="relative isolate min-h-[68svh] text-paper flex items-end overflow-hidden pt-32 pb-20 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/spain-football-tour-uk-clubs-fc-barcelona-joan-gamper-training-spain.jpg"
            alt="UK football clubs training inside FC Barcelona's Joan Gamper facilities, Spain"
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/15 to-ink/85" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto w-full">
          <nav aria-label="Breadcrumb" className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <Link href="/" className="hover:text-gold">Odisea Tours</Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">Tours from the UK</span>
          </nav>
          <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] uppercase leading-[0.95] max-w-[20ch]">
            Spain Football Tours <span className="font-display-italic text-gold">from the UK</span>
          </h1>
          <p className="mt-6 max-w-[60ch] text-paper/85 text-lg leading-relaxed">
            Our team has been hosting UK football clubs, school First XIs and academy squads in Spain since 2005. Pick your home city to see direct flights, training partners and the tour formats that work from your market.
          </p>
        </div>
      </section>

      <section className="paper-texture py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.62rem] tracking-[0.28em] uppercase text-ink/55 mb-8">
            Tour planning by home city
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {UK_CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/uk/${c.slug}`}
                className="group border border-ink/15 p-8 hover:bg-ink hover:text-paper transition-colors"
              >
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/70 mb-3">
                  {c.region_abbr} · {c.metro}
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
              Not in one of these cities? Spain tours work from every UK airport. Tell us where you are flying from and we build the routing.
            </p>
            <Link href="/plan-your-tour" className="inline-block mt-6 btn-editorial">Plan a tour</Link>
          </div>
        </div>
      </section>

      <GroundLogistics audience="your UK club" termFor="football" variant="paper" />

      <JournalLinks
        title="Reading for UK clubs"
        italicTail="planning Spain."
        intro="The conversations UK club directors, school sport heads and academy coaches have with us before booking, written up as field notes. Cost, timing, opposition, parents."
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
