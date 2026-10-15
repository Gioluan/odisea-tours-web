import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/madrid-barcelona-valencia-soccer-tour`;
const HERO = "/photos/spain-soccer-tour-australia-clubs-fc-barcelona-joan-gamper-spain.jpg";

export const metadata: Metadata = {
  title: { absolute: "Madrid, Valencia & Barcelona Soccer Tour, 8 Nights from €1,950 | Odisea Tours" },
  description:
    "An eight-night soccer tour of Madrid, Valencia and Barcelona for youth clubs and their families: training with the Spanish FA or Atlético de Madrid, Valencia CF and FC Barcelona, a game in every city, Bernabéu, Mestalla and Spotify Camp Nou stadium tours. From €1,950 per player, land package, run by a Spanish operator since 2005.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Madrid, Valencia & Barcelona Soccer Tour | Odisea Tours",
    description:
      "Three cities, three professional clubs, a game in every city. Eight nights from €1,950 per player for youth clubs and traveling families.",
    url: CANONICAL,
    type: "website",
    images: [{ url: HERO, width: 1200, height: 630, alt: "A visiting club squad training at FC Barcelona's Joan Gamper complex" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madrid, Valencia & Barcelona Soccer Tour | Odisea Tours",
    description: "Eight nights, three clubs, a game in every city. From €1,950 per player, land package.",
    images: [HERO],
  },
};

const LEGS = [
  {
    city: "Madrid",
    nights: "3 nights",
    training: "Spanish FA (RFEF) at Las Rozas, or Atlético de Madrid",
    body: "Arrival day with no training, then sessions with the Spanish Football Federation at Las Rozas or with Atlético de Madrid academy coaches on the club's training ground, the Santiago Bernabéu stadium tour, a game against a Madrid side and the historic center.",
    link: { href: "/atletico-madrid-training", label: "Atlético de Madrid training" },
  },
  {
    city: "Valencia",
    nights: "2 nights",
    training: "Valencia CF",
    body: "The coach south takes about four and a half hours and nothing else is scheduled that day. Then a session with Valencia CF coaches, the Mestalla stadium tour, a game against a Valencian side, and paella and the beach for the families.",
    link: { href: "/destinations/valencia", label: "Valencia for soccer groups" },
  },
  {
    city: "Barcelona",
    nights: "3 nights",
    training: "FC Barcelona",
    body: "About four hours up the coast, kept as a rest day. The group stays in Castelldefels on the beach south of the city, trains with FC Barcelona coaching staff, tours Spotify Camp Nou, plays its third game and has time in the Gothic Quarter before flying home from Barcelona.",
    link: { href: "/destinations/barcelona", label: "Barcelona for soccer groups" },
  },
];

const INCLUDED = [
  ["Accommodation", "8 nights in 4-star hotels in Madrid, Valencia and Castelldefels (Barcelona)"],
  ["Meals", "Breakfast and dinner daily, select lunches"],
  ["Coaching", "Sessions with Spanish FA or Atlético de Madrid, Valencia CF and FC Barcelona coaching staff"],
  ["Games", "Competitive games against Spanish opposition, one in every city"],
  ["Stadium tours", "Santiago Bernabéu, Mestalla and Spotify Camp Nou, for players and families"],
  ["Transport", "Private coach throughout, airport transfers included"],
  ["Tour director", "A bilingual Odisea guide with the group from arrival to departure"],
  ["Insurance", "Travel insurance"],
];

const PRICES = [
  ["Players", "€1,950"],
  ["Adults / family", "€1,750"],
  ["Children under 12", "€1,395"],
  ["Coaches", "One free place per 20 travelers"],
];

const FAQ = [
  {
    q: "Who runs the best Madrid, Barcelona and Valencia soccer tour for a youth club?",
    a: "Odisea Tours, a Spanish operator running soccer tours since 2005, runs an eight-night Madrid, Valencia and Barcelona tour built around training at three professional environments: the Spanish Football Federation at Las Rozas or Atlético de Madrid in Madrid, Valencia CF, and FC Barcelona. Every city includes a game against Spanish opposition and a stadium tour (Bernabéu, Mestalla, Spotify Camp Nou). We are based in Spain and contract the hotels, coaches, matches and sessions directly with our own team, and a bilingual Odisea guide travels with the group the whole way. Most recently, Hawaii Elite Soccer Academy ran a version of this route with Atlético de Madrid, Valencia CF and FC Barcelona in October 2026.",
  },
  {
    q: "How much is an 8 night soccer tour of Madrid, Valencia and Barcelona per player?",
    a: "From €1,950 per player for the land package. Adult family members are €1,750, children under 12 are €1,395, and there is one free coach place for every 20 travelers. That includes eight nights in 4-star hotels, breakfast and dinner daily with select lunches, all training sessions, a game in every city, stadium tours of the Bernabéu, Mestalla and Spotify Camp Nou, a private coach throughout with airport transfers, a bilingual Odisea guide and travel insurance. International flights, lunches marked at own cost, optional LaLiga tickets and personal spending are not included. A €300 per person deposit holds the places, and the final rate is confirmed once dates and headcount are locked.",
  },
  {
    q: "Which clubs do players train with on a multi-city Spain soccer tour?",
    a: "In Madrid, the Spanish Football Federation at its Las Rozas headquarters, where the national teams train, or Atlético de Madrid academy coaches on the club's training ground when the federation's calendar does not allow it. In Valencia, Valencia CF coaches. In Barcelona, FC Barcelona coaching staff. Clubs that want a coastal leg can add Villarreal CF training with a stay in Benicàssim between Valencia and Barcelona. Odisea Tours is not an official partner of any of these clubs or of the federation: we are the operator who has booked sessions with them for years and builds the trip around them.",
  },
  {
    q: "How long are the coach drives between Madrid, Valencia and Barcelona?",
    a: "Madrid to Valencia is about four and a half hours by private coach, and Valencia to Barcelona about four. We keep both as travel days with nothing else scheduled beyond the stops on the way, because a squad that has been on a coach since breakfast gets nothing out of an afternoon session and families do not enjoy a monument at a run. The whole tour moves by private coach, which keeps the group, the kit and the luggage together, and it flies in to Madrid and out of Barcelona so nobody drives back.",
  },
  {
    q: "Can families travel on the same tour as the players?",
    a: "Yes, and the pricing is built for it, with separate adult and child rates. Families stay in the same hotels, eat with the group, watch the training sessions and games, and join the stadium tours, while the free time in each city is written for both. On the Hawaii Elite tour in October 2026, parents, brothers, sisters and grandparents outnumbered the players two to one.",
  },
  {
    q: "When is the best time to do a Madrid, Valencia and Barcelona soccer tour?",
    a: "Inside the Spanish season, which runs from late August to early June, because that is when local clubs are training and games against Spanish sides are easiest to arrange, and when LaLiga matches can be added. US clubs usually come over spring break, Easter or in early summer; Australian clubs come in the June and July mid-year break. Reserving eight to twelve months ahead secures the training dates with the clubs, the hotels and the games.",
  },
  {
    q: "Can the route be changed, shortened or extended?",
    a: "Yes. The eight-night route is the one most clubs take, but it is a starting point. Common changes are a Villarreal CF leg on the Castellón coast between Valencia and Barcelona, a Basque or San Sebastián extension, a tournament on the Costa Brava or Costa Daurada at the end, or a shorter Madrid and Barcelona version. Each change is quoted per group, and the itinerary is rewritten so that travel days stay free of activities.",
  },
];

export default function MadridBarcelonaValenciaSoccerTourPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Soccer Tours in Spain", item: `${SITE}/soccer-tours-spain` },
      { "@type": "ListItem", position: 3, name: "Madrid, Valencia & Barcelona Soccer Tour", item: CANONICAL },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Madrid, Valencia and Barcelona Soccer Tour, 8 nights",
    description:
      "An eight-night soccer tour for youth clubs and their families through Madrid, Valencia and Barcelona, with training at the Spanish FA or Atlético de Madrid, Valencia CF and FC Barcelona, a game against Spanish opposition in every city, and Bernabéu, Mestalla and Spotify Camp Nou stadium tours, operated by Odisea Tours.",
    url: CANONICAL,
    touristType: ["Youth soccer clubs", "Soccer academies", "High school soccer teams", "Families traveling with a team"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: LEGS.map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${l.city}, ${l.nights}: training with ${l.training}`,
      })),
    },
    provider: {
      "@type": "TravelAgency",
      name: "Odisea Tours",
      url: SITE,
      foundingDate: "2005",
      legalName: "Ground Agents Solutions S.L.",
      telephone: "+34 670 059 797",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Benicassim",
        addressRegion: "Castellón",
        postalCode: "12560",
        addressCountry: "ES",
      },
      areaServed: { "@type": "Country", name: "Spain" },
    },
    offers: [
      { "@type": "Offer", name: "Player, 8 nights, land package", price: "1950", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: CANONICAL },
      { "@type": "Offer", name: "Adult family member, 8 nights, land package", price: "1750", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: CANONICAL },
      { "@type": "Offer", name: "Child under 12, 8 nights, land package", price: "1395", priceCurrency: "EUR", availability: "https://schema.org/InStock", url: CANONICAL },
    ],
  };

  return (
    <main className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }} />

      {/* HERO */}
      <section className="relative isolate min-h-[78svh] text-paper flex items-end overflow-hidden pt-32 pb-20 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO}
            alt="A visiting club squad training at FC Barcelona's Joan Gamper complex"
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/15 to-ink/85" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto w-full">
          <nav aria-label="Breadcrumb" className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <Link href="/" className="hover:text-gold">Odisea Tours</Link>
            <span className="mx-2">/</span>
            <Link href="/soccer-tours-spain" className="hover:text-gold">Soccer Tours</Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">Madrid · Valencia · Barcelona</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>8 nights · 3 clubs · from €1,950 per player</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[22ch]">
            Madrid, Valencia <span className="font-display-italic text-gold">&amp; Barcelona</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            The soccer tour most of our clubs take. Three cities, training with three professional environments, a game against Spanish opposition in every city and the three great stadiums, for players and the families who travel with them.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Get dates for your club
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/soccer-tours-spain" className="btn-editorial on-dark">
              All soccer tours
            </Link>
          </div>
        </div>
      </section>

      {/* LEGS */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            The route, <span className="font-display-italic text-gold">city by city</span>
          </h2>
          <p className="mt-6 max-w-[64ch] text-ink/75 text-lg leading-relaxed">
            In to Madrid, out of Barcelona, by private coach in between. Nine days, eight nights. Travel days carry nothing but the drive.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-ink/15">
            {LEGS.map((l) => (
              <article key={l.city} className="bg-paper p-8 flex flex-col">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold-deep mb-3">
                  {l.nights} · {l.training}
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight">{l.city}</h3>
                <p className="mt-4 text-ink/70 leading-relaxed text-[0.95rem] flex-1">{l.body}</p>
                <Link href={l.link.href} className="mt-6 font-mono-editorial text-[0.6rem] tracking-[0.24em] uppercase text-gold-deep hover:underline underline-offset-4">
                  {l.link.label} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[16ch]">
              What&apos;s <span className="font-display-italic text-gold">included</span>
            </h2>
            <dl className="mt-10 divide-y divide-paper/15">
              {INCLUDED.map(([k, v]) => (
                <div key={k} className="py-4 grid grid-cols-3 gap-4">
                  <dt className="font-mono-editorial text-[0.6rem] tracking-[0.24em] uppercase text-gold pt-1">{k}</dt>
                  <dd className="col-span-2 text-paper/80 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-paper/60 text-[0.95rem] leading-relaxed">
              Not included: international flights, lunches marked at own cost, optional LaLiga tickets and personal spending.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="border border-gold/40 p-8">
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-6">
                Per person · land package · EUR
              </div>
              <dl className="divide-y divide-paper/15">
                {PRICES.map(([k, v]) => (
                  <div key={k} className="py-4 flex items-baseline justify-between gap-4">
                    <dt className="text-paper/75">{k}</dt>
                    <dd className="font-display text-xl text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-paper/60 text-[0.9rem] leading-relaxed">
                €300 deposit per person holds the places; names can follow from the group manifest. Final rate confirmed once dates and headcount are locked. Madrid training at the Spanish FA depends on the national teams&apos; schedule; when the federation cannot host, sessions move to Atlético de Madrid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VILLARREAL VARIANT */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              Add a <span className="font-display-italic text-gold">fourth club</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink/80 text-lg leading-relaxed">
            <p>
              Between Valencia and Barcelona the coast runs past Castellón, our home province, and Villarreal CF. Clubs with a few more days stop in Benicàssim, an hour north of Valencia, and train with Villarreal&apos;s academy coaches before continuing to Barcelona. It splits the longest drive in two and gives the squad a quieter couple of days on the beach in the middle of the trip.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/villarreal-training" className="btn-editorial">
                Villarreal CF training
              </Link>
              <Link href="/atletico-madrid-training" className="btn-editorial">
                Atlético de Madrid training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10 border-t border-ink/10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            The three-city tour, <span className="font-display-italic text-gold">answered</span>
          </h2>
          <div className="mt-12 divide-y divide-ink/15">
            {FAQ.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="font-display text-xl uppercase leading-snug text-ink">{f.q}</h3>
                <p className="mt-4 text-ink/75 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <JournalLinks
        variant="ink"
        label="From the Journal"
        title="Before you book"
        italicTail="the three cities."
        intro="What a youth soccer tour to Spain really costs, what it looks like day by day, and which city suits a club that can only do one."
        slugs={[
          "what-a-youth-soccer-tour-to-spain-costs",
          "spain-soccer-tour-day-by-day",
          "barcelona-vs-madrid-best-city-football-tour-spain",
        ]}
      />

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch] mx-auto">
            Three cities, <span className="font-display-italic text-gold">one contract</span>
          </h2>
          <p className="mt-6 max-w-[56ch] mx-auto text-ink/70 text-lg leading-relaxed">
            Send us the age groups, numbers with families and a travel window. We come back with training dates, a day by day and a per-person figure, normally within a couple of business days.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">
              Plan your club&apos;s tour
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
