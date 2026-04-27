import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

export const metadata: Metadata = {
  title: "Football Tours in Madrid — Bernabeu, Atletico & La Liga",
  description:
    "Football tours in Madrid for clubs and groups. Visit the Santiago Bernabeu, Metropolitano, train at Real Madrid City, and watch La Liga live. Organized by Odisea Tours since 2005.",
  alternates: { canonical: "/destinations/madrid" },
  openGraph: {
    url: "https://odisea-tours.com/destinations/madrid",
    title: "Football Tours in Madrid | Odisea Tours",
    description:
      "Santiago Bernabeu, Atletico Madrid, Real Madrid City, Spanish FA headquarters. Football tours in Madrid organized on the ground.",
    images: [
      {
        url: "/photos/veterans-soccer-tour-bernabeu-stadium.jpg",
        width: 1200,
        height: 630,
        alt: "Football tour group at Santiago Bernabeu stadium, Madrid",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://odisea-tours.com" },
    { "@type": "ListItem", position: 2, name: "Destinations", item: "https://odisea-tours.com/destinations" },
    { "@type": "ListItem", position: 3, name: "Madrid", item: "https://odisea-tours.com/destinations/madrid" },
  ],
};

const WHAT_YOU_GET = [
  {
    title: "Santiago Bernabeu stadium tour",
    desc: "The newly renovated Bernabeu is the most impressive stadium in Europe. Retractable roof, 360-degree screen, and a tour that takes you through every corner.",
  },
  {
    title: "Real Madrid City (Valdebebas)",
    desc: "Real Madrid's training complex in Valdebebas. Professional coaching sessions on the same pitches used by the first team squad.",
  },
  {
    title: "Metropolitano (Atletico Madrid)",
    desc: "Atletico's 68,000-seat stadium. Modern, electric on match days, and an excellent tour for any football group.",
  },
  {
    title: "Spanish FA headquarters",
    desc: "Visit the RFEF (Real Federacion Espanola de Futbol) at Ciudad del Futbol in Las Rozas. The nerve centre of Spanish football.",
  },
  {
    title: "Matches against Madrid clubs",
    desc: "Competitive friendlies against local amateur, veterans, and youth sides across the Madrid region. Real fixtures on quality pitches.",
  },
  {
    title: "La Liga match tickets",
    desc: "Real Madrid, Atletico Madrid, Rayo Vallecano, Getafe, Leganes. Madrid has more La Liga clubs than any other city in Spain.",
  },
];

const FOOTBALL_EXPERIENCES = [
  {
    title: "Santiago Bernabeu Tour",
    detail: "The complete experience: panoramic views from the roof terrace, the trophy room, the tunnel, the pitch, the presidential box. The 2024 renovation has made this the most spectacular stadium tour in the world.",
  },
  {
    title: "Real Madrid City at Valdebebas",
    detail: "Coaching sessions at Real Madrid's state-of-the-art training complex. Your group trains with licensed coaches using the same methodologies as the academy players.",
  },
  {
    title: "Metropolitano Stadium Tour",
    detail: "Atletico Madrid's home since 2017. Walk through the tunnel, see the dressing rooms, and stand in the stands of a stadium built for European finals.",
  },
  {
    title: "Ciudad del Futbol (RFEF)",
    detail: "The headquarters of the Spanish Football Association in Las Rozas. Where the national team prepares for tournaments. A visit most tourists never get to make.",
  },
  {
    title: "Competitive Friendlies",
    detail: "Madrid has hundreds of amateur and veterans clubs across its sprawling suburbs. We match your group with opponents at the right level for a proper fixture.",
  },
  {
    title: "Multiple La Liga Options",
    detail: "With five or six La Liga clubs in the region on any given season, Madrid offers the best chance of catching a live match regardless of your travel dates.",
  },
];

const BEYOND_THE_PITCH = [
  {
    title: "Museo del Prado",
    desc: "One of the finest art museums in the world. Velazquez, Goya, El Greco. A cultural experience that balances the football perfectly.",
  },
  {
    title: "Retiro Park",
    desc: "A 350-acre green lung in the city centre. Ideal for a morning jog, a rowing boat on the lake, or a group picnic between matches.",
  },
  {
    title: "Gran Via and Plaza Mayor",
    desc: "Madrid's iconic boulevard and its grand central square. Shopping, street performers, and people-watching at its finest.",
  },
  {
    title: "La Latina (tapas district)",
    desc: "The best tapas in Madrid are in La Latina. Cava Baja street alone has more than 30 bars, each with its own specialty. Perfect for a group dinner crawl.",
  },
  {
    title: "Mercado de San Miguel",
    desc: "A beautiful iron-and-glass market near Plaza Mayor. Gourmet tapas, local wines, and a lively atmosphere. Great for a group lunch stop.",
  },
];

const STATS = [
  { value: "3", label: "La Liga stadiums in the city" },
  { value: "2024", label: "Bernabeu renovation completed" },
  { value: "68K", label: "Metropolitano capacity" },
  { value: "1", label: "Spanish FA headquarters" },
];

export default function MadridPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[70dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/photos/veterans-soccer-tour-bernabeu-stadium.jpg"
            alt="Football tour group at Santiago Bernabeu stadium in Madrid"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/65" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 pb-20 pt-40">
          <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-5 reveal">
            Chapter II: Madrid
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] text-paper max-w-3xl reveal">
            Football tours in{" "}
            <span className="font-display-italic text-gold">Madrid</span>
          </h1>
          <p className="mt-6 text-paper/60 text-lg sm:text-xl max-w-xl leading-relaxed reveal">
            The Santiago Bernabeu. Atletico's Metropolitano. The Spanish FA.
            Madrid is the capital of La Liga and the ultimate destination for
            groups wanting the full Spanish football experience.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan Your Madrid Tour
            </Link>
            <a
              href="https://wa.me/34670059797"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule text-paper/50 hover:text-paper transition-colors text-sm"
            >
              Or WhatsApp us directly
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT YOUR GROUP GETS
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="rule-label text-paper/30 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>What your group gets</span>
          </div>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-paper mb-14 reveal">
            The capital of{" "}
            <span className="font-display-italic text-gold">Spanish football.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10">
            {WHAT_YOU_GET.map((item, i) => (
              <div key={i} className="bg-ink p-8 reveal">
                <span className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold/70 block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-paper text-lg mb-2">{item.title}</h3>
                <p className="text-paper/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTBALL EXPERIENCES
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
                <span>Football experiences</span>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink mb-6 reveal">
                The full{" "}
                <span className="font-display-italic text-gold">La Liga experience</span>
              </h2>
              <p className="text-ink-muted text-base leading-relaxed mb-8 reveal">
                No city in Spain offers more football per square kilometre than Madrid.
                Three La Liga stadiums, the national federation headquarters, hundreds
                of local clubs, and a culture where football is the first topic at
                every dinner table.
              </p>
              <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
                <Image
                  src="/photos/veterans-soccer-tour-real-madrid-bernabeu.jpg"
                  alt="Football group inside the Santiago Bernabeu press room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-8">
              {FOOTBALL_EXPERIENCES.map((exp, i) => (
                <div key={i} className="border-b border-ink/15 pb-8 reveal">
                  <span className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted block mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-ink text-lg mb-2">{exp.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{exp.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BEYOND THE PITCH
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper-warm py-16 md:py-20 paper-texture">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
                <span>Beyond the pitch</span>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink mb-6 reveal">
                Madrid off{" "}
                <span className="font-display-italic text-gold">the field</span>
              </h2>
              <p className="text-ink-muted text-base leading-relaxed reveal">
                Madrid is a city that stays up late and eats well. World-class
                museums, sprawling parks, tapas bars on every corner, and a
                nightlife that starts when most cities wind down. For groups
                travelling with families, there is as much to do off the pitch
                as on it.
              </p>
            </div>

            <div className="space-y-6">
              {BEYOND_THE_PITCH.map((item, i) => (
                <div key={i} className="reveal">
                  <h3 className="font-display text-ink text-base mb-1">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Culture photo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
              <Image
                src="/photos/it-madrid-prado.jpg"
                alt="Museo del Prado in Madrid"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
              <Image
                src="/photos/odisea-tours-coaching-spanish-fa.jpg"
                alt="Coaching session at Spanish FA facilities near Madrid"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHERE TO STAY
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="max-w-2xl reveal">
            <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8">
              <span>Where to stay</span>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink mb-6">
              Group-friendly{" "}
              <span className="font-display-italic text-gold">accommodation</span>
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-4">
              For football groups in Madrid, we recommend staying in the Salamanca or
              Chamberi districts. Both are central, safe, well-connected by metro, and
              within walking distance of restaurants and cultural sites.
            </p>
            <p className="text-ink-muted text-base leading-relaxed">
              The Bernabeu is on the Paseo de la Castellana, easily reached from
              anywhere in the centre. The Metropolitano is a short metro ride south.
              We select 3 or 4-star hotels with experience hosting groups and
              flexible breakfast and dinner service.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink py-16 md:py-20 stripes">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <div className="rule-label text-paper/30 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8 reveal">
            <span>Madrid in numbers</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-3xl mx-auto reveal">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-display text-3xl sm:text-4xl text-gold block">
                  {stat.value}
                </span>
                <span className="font-mono-editorial text-[0.55rem] tracking-[0.22em] uppercase text-paper/40 mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BEST FOR
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper-warm py-16 md:py-20 paper-texture">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="max-w-2xl reveal">
            <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8">
              <span>Best for</span>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink mb-6">
              Groups wanting the full{" "}
              <span className="font-display-italic text-gold">La Liga experience</span>
            </h2>
            <p className="text-ink-muted text-base leading-relaxed">
              Madrid is where Spanish football lives. More La Liga clubs than any
              other city, the newly renovated Bernabeu (arguably the most impressive
              stadium on the planet), Atletico's Metropolitano, and the Spanish FA
              headquarters all within a 30-minute drive. If your group wants to see
              the biggest names in European football and experience the intensity of
              a La Liga match day, Madrid is the destination. Add world-class tapas,
              the Prado, and Retiro Park for the days between matches, and you have
              the complete football tour.
            </p>
          </div>
        </div>
      </section>

      <JournalLinks
        title="Reading on Madrid"
        italicTail="for tour planners."
        intro="Bernabeu over Camp Nou, the case for Madrid as a tour anchor, the stadiums most groups miss. Field notes from twenty years of running tours through the capital."
        slugs={[
          "real-madrid-or-fc-barcelona-which-stadium-visit",
          "barcelona-vs-madrid-best-city-football-tour-spain",
          "top-5-football-stadiums-visit-spain-soccer-tour",
          "training-spanish-fa-rfef-football-tour-experience",
        ]}
      />

      {/* ═══════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/photos/veterans-soccer-tour-real-madrid-bernabeu.jpg"
            alt="Inside the Santiago Bernabeu, Madrid"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/75" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/40 mb-6 reveal">
            Start planning
          </p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] text-paper max-w-2xl mx-auto mb-6 reveal">
            Plan your{" "}
            <span className="font-display-italic text-gold">Madrid tour</span>
          </h2>
          <p className="text-paper/50 text-lg leading-relaxed max-w-xl mx-auto mb-10 reveal">
            Tell us about your group and we will build a Madrid itinerary around
            your squad, your schedule, and your budget. Matches, stadiums, coaching,
            culture. All handled on the ground.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan Your Madrid Tour
            </Link>
            <a
              href="https://wa.me/34670059797"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule text-paper/50 hover:text-paper transition-colors text-sm"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
