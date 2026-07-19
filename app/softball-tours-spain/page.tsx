import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/content/tours";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/softball-tours-spain`;
const HERO = "/photos/softball-tours-spain-hero.jpg";

export const metadata: Metadata = {
  title: { absolute: "Softball Tours in Spain · For US Teams & Families | Odisea Tours" },
  description:
    "Softball tours to Spain run by Odisea Tours. Four competitive games against established Spanish clubs across Madrid, Valencia and Barcelona, woven into a real cultural trip for US teams and their families. From $1,700 per person.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Softball Tours in Spain | Odisea Tours · Since 2005",
    description:
      "A real softball tour to Spain for US teams: four games against Spanish clubs in Madrid, Valencia and Barcelona, full cultural programme for travelling families, an Odisea director on the ground for the whole trip.",
    url: CANONICAL,
    type: "website",
    images: [
      {
        url: HERO,
        width: 1200,
        height: 630,
        alt: "US softball team and their Spanish host club together on the field during an Odisea Tours softball tour of Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Softball Tours in Spain | Odisea Tours",
    description:
      "Softball tours to Spain for US teams and families. Four games against Spanish clubs across Madrid, Valencia and Barcelona. Since 2005.",
    images: [HERO],
  },
};

const HOST_CLUBS = [
  {
    name: "Club CBS Rivas",
    place: "Rivas-Vaciamadrid · Madrid",
    note: "An established Madrid-region club and a strong, well-organised opener, played after the Toledo day trip.",
  },
  {
    name: "Selección Valenciana U22",
    place: "Valencia",
    note: "A regional select side fielded by the Valencian softball federation, the most competitive game for older players.",
  },
  {
    name: "Sófbol Fénix Valencia",
    place: "Valencia",
    note: "Valencia's warm, well-run home club, the second half of the Valencia double-header.",
  },
  {
    name: "CB i Sófbol Sant Boi",
    place: "Sant Boi de Llobregat · Barcelona",
    note: "One of the historic homes of Spanish softball and baseball, the closing fixture near Barcelona.",
  },
];

const AUDIENCES = [
  {
    tag: "High school",
    title: "High school programs",
    body: "Varsity girls fastpitch programs travelling with parents and siblings. Spring break and early-summer windows that line up with the end of the US school year.",
  },
  {
    tag: "Travel ball",
    title: "Youth & travel ball",
    body: "Girls travel ball and club teams looking for real competitive games abroad, not a sightseeing trip with one exhibition game bolted on. Opponents matched to the squad's age and level.",
  },
  {
    tag: "College",
    title: "College squads",
    body: "College programs running a pre-season or end-of-year block in Spain, with games against regional select sides and full training and recovery built around them.",
  },
  {
    tag: "Families",
    title: "Travelling families",
    body: "Softball groups almost always travel with families. The cultural programme runs in parallel, so parents and siblings get a full tour of Spain while the players get their four games.",
  },
];

const SOFTBALL_FAQ = [
  {
    q: "What is the best softball tour in Spain for a US team?",
    a: "The most complete softball tour in Spain for US teams is a nine-day trip through Madrid, Valencia and Barcelona with four games against established Spanish clubs. Odisea Tours runs exactly this as the Spain Softball Experience: the group is based at the Spanish FA residence in Las Rozas, plays Club CBS Rivas in Madrid, the Selección Valenciana U22 and Sófbol Fénix Valencia in Valencia, and CB i Sófbol Sant Boi near Barcelona, with cultural days at Las Ventas, Toledo, the City of Arts and Sciences and Gaudí's Barcelona around the games.",
  },
  {
    q: "Which Spanish softball clubs do US teams play on tour?",
    a: "On a Spain softball tour, US teams typically play four host clubs across three cities: Club CBS Rivas in Rivas-Vaciamadrid (Madrid), the Selección Valenciana U22 fielded by the Valencian softball federation, Sófbol Fénix Valencia, and CB i Sófbol Sant Boi in Sant Boi de Llobregat, one of the historic homes of Spanish softball and baseball near Barcelona. Opponents are matched to your age and level and arranged ahead of the trip, though the final clubs can change with the Spanish season.",
  },
  {
    q: "How much does a softball tour to Spain cost for a US team?",
    a: "A Spain softball tour starts from $1,700 per person for a six-night trip, based on a group of 20, twin sharing, ground services only, with international flights separate. The price scales with the number of nights, the group size, the season and the hotel category, so a fuller nine-day trip through Madrid, Valencia and Barcelona with four games and the full cultural programme sits above that entry point. Pricing is locked once the group size, dates and trip length are confirmed.",
  },
  {
    q: "What is the best time of year for a softball tour to Spain?",
    a: "Late spring and early summer, roughly May through June, is the best window for a US softball tour to Spain. The weather is warm and dry across Madrid, Valencia and Barcelona, the Spanish league and federation sides are mid-season and available for friendlies, and it lines up with the end of the US school year. June also catches the Sant Joan festival on the Catalan coast, which makes the Barcelona leg memorable.",
  },
  {
    q: "Can families travel with the team on a Spain softball tour?",
    a: "Yes, and most softball groups do. The tour is built so families travel on the same itinerary as the players. While the team plays its four games, the cultural programme runs in parallel: Las Ventas, Toledo, the City of Arts and Sciences in Valencia, Sagunto castle and a guided day through Gaudí's Barcelona. The players get competitive softball, the parents get a tour of Spain, and nobody spends the week sitting in a single set of bleachers.",
  },
  {
    q: "What is included in a Spain softball tour?",
    a: "The per-person rate covers eight nights of twin-share accommodation including the Spanish FA residence in Las Rozas where available, daily breakfast and dinner, all four games with the field permits and host-club coordination behind them, a private coach with driver for airport pickups and every internal transfer, all guided cultural visits, and a full-time Odisea Tours director with the group from the arrivals hall to the departure gate. International flights, lunches, personal spending and travel insurance are not included.",
  },
  {
    q: "How long is a softball tour to Spain and where do teams stay?",
    a: "The tour we recommend runs nine days and eight nights from Madrid through Valencia to Barcelona, and the length is flexible from six nights up depending on your budget and travel window. The group bases at the Spanish FA residence in Las Rozas when it is available, the same residence the Spanish national football teams use, with full facilities and a dining hall on site, and moves to vetted group hotels in Valencia and Barcelona for the coastal legs.",
  },
  {
    q: "Who organizes softball tours to Spain for US teams?",
    a: "Odisea Tours organizes softball tours to Spain for US teams. We are a Spain-based ground operator, so we arrange the four games against established Spanish clubs, the accommodation, the transfers and the cultural programme directly and locally, rather than reselling from abroad. Opponents are matched to your team's age and level, and an Odisea director travels with the group for the whole trip. Our team has run group sport tours in Spain since 2005.",
  },
  {
    q: "Can you plan a women's or fastpitch softball tour to Spain with real games?",
    a: "Yes. The Spain softball tour is built around four competitive fastpitch games against established Spanish clubs across Madrid, Valencia and Barcelona, and we run it for women's, girls travel ball and high school fastpitch teams. Opponents include a regional select side fielded by the Valencian softball federation for older squads, and every fixture is matched to your team's age and level ahead of the trip, so a women's or girls fastpitch team gets genuine games, not a single exhibition bolted onto a sightseeing trip.",
  },
  {
    q: "Is a spring break softball trip to Spain possible for a high school girls team?",
    a: "Yes. A spring break softball trip to Spain works well for a high school girls team and is one of the windows we run most. The trip is six nights and up, with four games against Spanish clubs and a full cultural programme that travelling families join, and it can be sized to a school-break week. Late spring and early summer have the warmest, driest weather and the most available Spanish opposition, so if your break falls in March or April we confirm fixtures and hotels early to lock the dates.",
  },
];

export default function SoftballToursSpainPillarPage() {
  const softballTour = TOURS.find((t) => t.slug === "softball-tours-spain");

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Softball Tours in Spain", item: CANONICAL },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SOFTBALL_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Softball Tours in Spain",
    description:
      "Group softball tours in Spain for US high school, travel ball and college teams and their families. Four competitive games against established Spanish clubs across Madrid, Valencia and Barcelona, woven into a full cultural programme, run by an Odisea Tours director on the ground.",
    touristType: [
      "US high school softball teams",
      "Girls travel ball and club softball teams",
      "College softball squads",
      "Softball families",
    ],
    provider: {
      "@type": "TravelAgency",
      name: "Odisea Tours",
      url: SITE,
      foundingDate: "2018",
      areaServed: { "@type": "Country", name: "Spain" },
    },
    itinerary: [
      { "@type": "City", name: "Madrid" },
      { "@type": "City", name: "Valencia" },
      { "@type": "City", name: "Barcelona" },
    ],
    offers: {
      "@type": "Offer",
      price: "1700",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE}/plan-your-tour`,
      description:
        "Spain Softball Experience, from $1,700 per person for a six-night trip, scaling with length, group size and season. Fuller nine-day Madrid, Valencia and Barcelona tour with four games sits above that entry point.",
    },
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
            alt="US softball team and their Spanish host club together on the field during an Odisea Tours softball tour of Spain"
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
            <span className="text-paper/50">Softball Tours in Spain</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Pillar guide · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Softball Tours <span className="font-display-italic text-gold">in Spain</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            A softball tour to Spain done properly is not a sightseeing trip with one exhibition game bolted on. It is four competitive games against established Spanish clubs, across Madrid, Valencia and Barcelona, woven into a real cultural trip the whole family remembers. Our team has built group sport tours in Spain since 2005, and softball is the newest version of that work.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan your Spain softball tour
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/tours/softball-tours-spain" className="btn-editorial on-dark">
              See the full tour
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SPAIN */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-4">
              Chapter I
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              Why a softball tour to <span className="font-display-italic text-gold">Spain</span>.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-ink-soft leading-relaxed text-lg max-w-[60ch]">
            <p>
              Softball in the US is enormous and the level is high, so the first thing a coach wants to know is whether Spain can give their players real games. It can. Spain has an established softball community concentrated around Madrid, Valencia and Catalonia, with federation structures, regional select sides and clubs that have been playing for decades.
            </p>
            <p>
              The level is not the US college game, and we never pretend it is. What it is, is competitive, well-organised, age-appropriate opposition that gives your players four real games in three different cities, against teams who are genuinely happy to host a visiting American side. The Spanish clubs treat these fixtures as an event. The post-game mixing between a team from Texas or California and a team from Valencia is consistently the part players talk about on the bus home.
            </p>
            <p>
              The second reason is that Spain gives you a complete trip around the softball. A pure tournament trip is all diamond and hotel. A Spain tour alternates game days with Las Ventas, Toledo, the City of Arts and Sciences, Sagunto castle above the Mediterranean, and a guided day through Gaudí's Barcelona. For a group that travels with families, and softball groups almost always do, that balance is the whole point.
            </p>
          </div>
        </div>
      </section>

      {/* THE FOUR GAMES / HOST CLUBS */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
            Chapter II · The four games
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            The Spanish clubs your team <span className="font-display-italic text-gold">plays</span>.
          </h2>
          <p className="mt-6 max-w-[62ch] text-paper/75 leading-relaxed">
            Four host clubs are the spine of the tour, one game in each city plus a Valencia double-header. We share the planned opponents and their age groups ahead of the trip, and we are upfront that the final fixtures can shift with the Spanish season. Each game is matched to your team's age and level.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {HOST_CLUBS.map((c) => (
              <article key={c.name} className="border border-paper/15 p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-paper/60 mb-3">
                  {c.place}
                </div>
                <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight">
                  {c.name}
                </h3>
                <p className="mt-4 text-paper/80 leading-relaxed">
                  {c.note}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-[62ch] text-paper/70 leading-relaxed">
            Prefer the north? We also run a one-way <Link href="/tours/softball-tour-basque-country-barcelona" className="underline decoration-gold/60 underline-offset-4 hover:text-gold">Basque Country and Barcelona softball tour</Link>, flying into Barcelona and out of Bilbao, with four games against CB i Sófbol Sant Boi, CB Miralbueno, CD Arga and OBB Bizkorrak on the way through Zaragoza, Pamplona and San Sebastián.
          </p>

          <div className="mt-12">
            <Link href="/tours/softball-tours-spain" className="btn-editorial on-dark">
              Full day-by-day & inclusions
            </Link>
          </div>
        </div>
      </section>

      {/* THE THREE CITIES */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            Chapter III · The cities
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Three cities the tour <span className="font-display-italic text-gold">moves through</span>.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Link href="/destinations/madrid" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/65 mb-3">
                40.4168° N
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                <span className="font-display-italic text-gold">Madrid</span>
              </h3>
              <p className="mt-4 text-ink-soft group-hover:text-paper/80 leading-relaxed text-[0.97rem]">
                The Spanish FA residence at Las Rozas as a base, Las Ventas, a Toledo day trip, and the tour opener against Club CBS Rivas under the lights.
              </p>
              <span className="inline-block mt-5 font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold-deep group-hover:text-gold">
                Tours in Madrid →
              </span>
            </Link>
            <Link href="/destinations/valencia" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/65 mb-3">
                39.4699° N
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                <span className="font-display-italic text-gold">Valencia</span>
              </h3>
              <p className="mt-4 text-ink-soft group-hover:text-paper/80 leading-relaxed text-[0.97rem]">
                The biggest playing day, a double-header against the Selección Valenciana U22 and Sófbol Fénix Valencia, the City of Arts and Sciences and a rest morning on Malvarrosa beach.
              </p>
              <span className="inline-block mt-5 font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold-deep group-hover:text-gold">
                Tours in Valencia →
              </span>
            </Link>
            <Link href="/destinations/barcelona" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/65 mb-3">
                41.3851° N
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                <span className="font-display-italic text-gold">Barcelona</span>
              </h3>
              <p className="mt-4 text-ink-soft group-hover:text-paper/80 leading-relaxed text-[0.97rem]">
                The closing fixture against CB i Sófbol Sant Boi, one of the historic homes of Spanish softball, then a guided day through Gaudí's Barcelona before the flight home.
              </p>
              <span className="inline-block mt-5 font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold-deep group-hover:text-gold">
                Tours in Barcelona →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
            Chapter IV · Audiences
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            Who Spain softball tours <span className="font-display-italic text-gold">are for</span>.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="border border-paper/15 p-7">
                <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-paper/60 mb-3">
                  {a.tag}
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight">
                  {a.title}
                </h3>
                <p className="mt-4 text-paper/80 leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-paper/70 leading-relaxed max-w-[64ch]">
            Most softball groups come to us from the US. See how we handle US groups more broadly on our{" "}
            <Link href="/usa" className="underline underline-offset-4 hover:text-gold">tours for US teams</Link> page.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            Chapter V · The number
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            What a softball tour to Spain <span className="font-display-italic text-gold">costs</span>.
          </h2>
          <p className="mt-6 max-w-[62ch] text-ink-soft leading-relaxed">
            A softball tour to Spain done properly is priced once, with no surprises on the ground. We publish the entry rate so you can take the trip to parents or a board without waiting on a quote.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="border border-ink/15 p-7">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 mb-3">
                Spain Softball Experience
              </div>
              <div className="font-display text-3xl md:text-4xl text-ink">
                From <span className="font-display-italic text-gold-deep">$2,300</span>
                <span className="ml-2 text-base text-ink/55 font-mono-editorial tracking-wider uppercase">per person</span>
              </div>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                Eight nights and nine days through Madrid, Valencia and Barcelona, based on a group of 20, twin sharing, ground services only, with international flights separate. Four games and the full cultural programme included. Pricing scales with the season and the hotel category, and larger groups bring the per-person cost down.
              </p>
            </div>
            <div className="border border-ink/15 p-7">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 mb-3">
                What the rate covers
              </div>
              <ul className="mt-1 space-y-2 text-ink-soft leading-relaxed text-[0.97rem]">
                <li>Eight nights twin-share, Las Rozas FA residence where available</li>
                <li>Four games against Spanish clubs, age-matched</li>
                <li>Daily breakfast and dinner</li>
                <li>Private coach, airport pickups and every transfer</li>
                <li>All guided cultural visits across the three cities</li>
                <li>Full-time Odisea director, arrivals hall to departure gate</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-ink-soft leading-relaxed text-[0.95rem] max-w-[68ch]">
            Lunches are deliberately left out of the package so families can eat where they want at midday and the headline price stays honest. The honest way to get a real number is to tell us the squad size, the number of travelling families, your age groups, your travel window and how many nights you want, and we come back with a per-person price that names the hotels and the opponents rather than hiding behind a from-rate. International flights, personal spending and travel insurance, which we strongly recommend, are not included.
          </p>
        </div>
      </section>

      {/* HOW IT COMES TOGETHER */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-4">
              Chapter VI
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              How the tour <span className="font-display-italic text-gold">comes together</span>.
            </h2>
          </div>
          <ol className="md:col-span-8 space-y-6 text-paper/85 leading-relaxed text-lg max-w-[60ch]">
            <li>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-2">Step I · Discovery call</div>
              <p>
                Tell us the squad size, the players' ages, how many parents and siblings are likely to travel, and your window. We map what is actually possible in those dates.
              </p>
            </li>
            <li>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-2">Step II · First draft</div>
              <p>
                A nine-day itinerary that names the cities, the host clubs and the hotels, and prices it per person. You see exactly what each day looks like before you take it to the parents.
              </p>
            </li>
            <li>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-2">Step III · Fixtures & dates locked</div>
              <p>
                We confirm the host clubs and game days with the Spanish season in mind, then lock the per-person price once group size, dates and length are set.
              </p>
            </li>
            <li>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-2">Step IV · Day one</div>
              <p>
                An Odisea director meets the group at Madrid Barajas and stays with the squad from the arrivals hall to the departure gate. The team's coaches coach. We handle everything else.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* WHY ODISEA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            Chapter VII · The operator
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Why teams choose <span className="font-display-italic text-gold">Odisea Tours</span>.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="border border-ink/15 p-7">
              <div className="font-display text-4xl text-gold-deep">2005</div>
              <div className="mt-3 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55">Founded</div>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                Twenty years building group sport tours in Spain. Softball is the newest version of that work, built on the same template we trust for our other tours.
              </p>
            </div>
            <div className="border border-ink/15 p-7">
              <div className="font-display text-4xl text-gold-deep">100%</div>
              <div className="mt-3 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55">Spanish-staffed ground operation</div>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                Every guide, driver and on-ground coordinator is Spanish or based in Spain. Bilingual end to end, with the host-club relationships that make the fixtures happen.
              </p>
            </div>
            <div className="border border-ink/15 p-7">
              <div className="font-display text-4xl text-gold-deep">24 / 7</div>
              <div className="mt-3 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55">Director on the ground</div>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                A full-time Odisea director travels with the group the whole trip, with a real person on the line whenever the team is in Spain.
              </p>
            </div>
          </div>

          <p className="mt-10 text-ink-soft leading-relaxed max-w-[64ch]">
            Operator licensing and insurance documentation available on request. Our team is on the{" "}
            <Link href="/team" className="underline underline-offset-4 hover:text-gold-deep">team page</Link>, with first names, photos and what each person actually does on a tour.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
            Chapter VIII · Frequently asked
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Questions coaches ask <span className="font-display-italic text-gold">before booking</span>.
          </h2>

          <div className="mt-12 divide-y divide-paper/15">
            {SOFTBALL_FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <h3 className="font-display text-lg md:text-xl uppercase leading-snug">
                    {f.q}
                  </h3>
                  <span className="font-mono-editorial text-2xl text-gold transition-transform group-open:rotate-45 shrink-0" aria-hidden>+</span>
                </summary>
                <p className="mt-4 text-paper/80 leading-relaxed max-w-[68ch]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/faq" className="btn-editorial on-dark">
              Read the full FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <JournalLinks
        label="From the Journal"
        title="Field notes on softball tours"
        italicTail="in Spain."
        intro="The operator's view of building a softball tour to Spain for a US team: the cities, the clubs you play, what it costs, and the decisions that separate a tour that lands from one that does not."
        slugs={[
          "best-softball-tours-spain-us-teams",
          "spain-softball-tour-basque-country-barcelona",
          "how-to-plan-a-group-trip-to-spain",
        ]}
      />

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6 justify-center">
            <span>Step one</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[22ch] mx-auto">
            Plan your Spain <span className="font-display-italic text-gold">softball tour</span>.
          </h2>
          <p className="mt-6 max-w-[58ch] mx-auto text-ink-soft leading-relaxed text-lg">
            Tell us your squad size, your players' ages, how many families are likely to travel, and the window you are looking at. We come back with a draft nine-day itinerary and a per-person number that names the cities, the host clubs and the hotels.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">
              Plan your tour
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href={softballTour ? `/tours/${softballTour.slug}` : "/tours"} className="btn-editorial">
              See the full tour
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
