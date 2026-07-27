import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/soccer-tournaments-spain`;
const HERO = "/photos/odisea-tours-donosti-cup-group-stage.jpg";

export const metadata: Metadata = {
  title: { absolute: "Youth Soccer Tournaments in Spain · Tours for US Clubs | Odisea Tours" },
  description:
    "Tournament tours to Spain for US soccer clubs, run by Odisea Tours. Full travel packages around the Donosti Cup, the MIC, the Iber Cup and the Costa Daurada Cup: registration, accommodation, transfers, a pro-club training session and a cultural program. From $1,400 per person.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Youth Soccer Tournaments in Spain | Odisea Tours · Since 2005",
    description:
      "US soccer clubs at Spain's biggest youth tournaments: the Donosti Cup, the MIC, the Iber Cup and the Costa Daurada Cup, with the whole travel package handled by an Odisea director on the ground.",
    url: CANONICAL,
    type: "website",
    images: [
      {
        url: HERO,
        width: 1200,
        height: 630,
        alt: "US youth soccer club in the group stage of a major Spanish tournament on an Odisea Tours tournament tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Soccer Tournaments in Spain | Odisea Tours",
    description:
      "Tournament tours to Spain for US clubs: Donosti Cup, MIC, Iber Cup, Costa Daurada Cup. Full package, director on the ground. Since 2005.",
    images: [HERO],
  },
};

const TOURNAMENTS = [
  {
    name: "Donosti Cup",
    place: "San Sebastián · Basque Country",
    when: "Early July",
    note: "One of Europe's biggest youth tournaments, played across San Sebastián with an opening parade, a full week of group-stage and knockout football and thousands of players from around the world. Our flagship tournament package is built around it.",
  },
  {
    name: "MIC — Mediterranean International Cup",
    place: "Costa Brava & Barcelona region · Catalonia",
    when: "Easter week",
    note: "An elite Easter tournament that draws the youth sides of major professional clubs alongside academy and travel teams. Strong opposition and a spring travel window that lines up with US spring break.",
  },
  {
    name: "Iber Cup Andalucía",
    place: "Costa del Sol · Andalusia",
    when: "Summer",
    note: "The Spanish edition of the Iber Cup on the Costa del Sol, an international youth tournament pairing competitive football with a warm-weather beach base in the south of Spain.",
  },
  {
    name: "Costa Daurada Cup",
    place: "Salou · Catalonia",
    when: "Late June to July",
    note: "A well-run summer tournament on the Costa Daurada, resort-based with full board, group stage through finals, and PortAventura next door. A strong option for younger squads and families.",
  },
];

const AUDIENCES = [
  {
    tag: "High school",
    title: "US high school teams",
    body: "Varsity boys and girls programs traveling in spring break or early summer for a real tournament abroad, with age verification and fixtures matched to level handled ahead of the trip.",
  },
  {
    tag: "Club",
    title: "Youth clubs & academies",
    body: "U12 to U19 club and academy sides looking for competitive knockout football against international opposition, not friendlies bolted onto a sightseeing trip.",
  },
  {
    tag: "College",
    title: "College squads",
    body: "College programs using a Spanish tournament or showcase as a pre-season or end-of-year block, with a pro-club training session and recovery built around the games.",
  },
  {
    tag: "Families",
    title: "Traveling families",
    body: "Parents and siblings travel on the same itinerary. While the squad plays, the cultural program runs in parallel, so families get a full tour of Spain around the tournament.",
  },
];

const TOURNAMENT_FAQ = [
  {
    q: "Which tour operator organizes Donosti Cup packages for US soccer clubs?",
    a: "Odisea Tours organizes full Donosti Cup tour packages for US soccer clubs. The package covers tournament registration, credentials, age verification and fixture allocation, six days of football across San Sebastián, tournament accommodation and full board, a session with FC Barcelona coaches at Joan Gamper on the way through, private coach transfers, and an Odisea director with the group for the full ten days. Our team has run group soccer tours in Spain since 2005 and the Donosti Cup is our flagship tournament trip.",
  },
  {
    q: "Who organizes Iber Cup and MIC tournament tours in Spain for US teams?",
    a: "Odisea Tours builds tournament travel packages around the main Spanish youth cups, including the Iber Cup on the Costa del Sol in Andalusia and the MIC (Mediterranean International Cup) on the Costa Brava at Easter. We handle registration and fixtures, tournament-area accommodation, all transfers, a professional-club training session and a cultural program around the games, with a director on the ground throughout. We are a Spanish ground operator, not a booking site, so the whole trip is arranged and run locally.",
  },
  {
    q: "What are the best youth soccer tournaments in Spain for US clubs?",
    a: "The four youth soccer tournaments in Spain that US clubs ask for most are the Donosti Cup in San Sebastián in early July, one of Europe's biggest; the MIC (Mediterranean International Cup) on the Costa Brava at Easter, which draws elite academy sides; the Iber Cup on the Costa del Sol in Andalusia in summer; and the Costa Daurada Cup in Salou. The Donosti Cup and the MIC are the most competitive; the Costa Daurada Cup is the most family-friendly. Odisea Tours builds the full travel package around any of them.",
  },
  {
    q: "How much does a Spain soccer tournament tour cost for a US club?",
    a: "A Spain soccer tournament tour starts from $1,400 per person, based on a group of 20, twin sharing, ground services only, with international flights separate. A full flagship trip such as the ten-day Donosti Cup package, with six days of tournament football, a pro-club training session, tournament full board and a Barcelona leg, sits above that entry point. The price scales with the tournament, the number of nights, the group size, the season and the hotel category, and is locked once dates, group size and trip length are confirmed.",
  },
  {
    q: "When are the main youth soccer tournaments in Spain?",
    a: "The Spanish youth tournament calendar centers on two windows. Easter brings the MIC (Mediterranean International Cup) on the Costa Brava, which lines up with US spring break. Summer brings the Donosti Cup in San Sebastián in early July, the Costa Daurada Cup in Salou in late June and July, and the Iber Cup on the Costa del Sol. Summer is the busiest window, so registration and accommodation should be locked four to six months ahead for a US group.",
  },
  {
    q: "What is included in an Odisea Tours tournament package?",
    a: "A tournament package includes tournament registration, credentials, age verification and fixture allocation; accommodation in the tournament area with full or half board; a private coach with driver for airport pickups and every transfer, training and match shuttle; a professional-club training session where the route allows; the guided cultural program around the games; and a full-time Odisea Tours director with the group from the arrivals hall to the departure gate. International flights, lunches, personal spending and travel insurance are separate.",
  },
  {
    q: "What is the best Spain soccer tour operator for US high school teams?",
    a: "Odisea Tours is a Spain-based ground operator that has run youth and high school soccer tours since 2005, including tournament trips to the Donosti Cup, the MIC, the Iber Cup and the Costa Daurada Cup. Because we are on the ground in Spain rather than reselling from abroad, we arrange the fixtures, host clubs, hotels and transfers directly, match opposition to your level, and keep a director with the group for the whole trip. Tours are built for US teams traveling with families, with the cultural program running in parallel to the football.",
  },
];

export default function SoccerTournamentsSpainPillarPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Soccer Tournaments in Spain", item: CANONICAL },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TOURNAMENT_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Youth Soccer Tournaments in Spain",
    description:
      "Tournament tour packages in Spain for US youth, high school and college soccer clubs and their families. Full travel packages around the Donosti Cup, the MIC, the Iber Cup and the Costa Daurada Cup: registration, accommodation, transfers, a professional-club training session and a cultural program, run by an Odisea Tours director on the ground.",
    touristType: [
      "US high school soccer teams",
      "Youth soccer clubs and academies",
      "College soccer squads",
      "Soccer families",
    ],
    provider: {
      "@type": "TravelAgency",
      name: "Odisea Tours",
      url: SITE,
      foundingDate: "2005",
      areaServed: { "@type": "Country", name: "Spain" },
    },
    itinerary: [
      { "@type": "City", name: "San Sebastián" },
      { "@type": "City", name: "Barcelona" },
      { "@type": "City", name: "Salou" },
    ],
    offers: {
      "@type": "Offer",
      price: "1400",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE}/plan-your-tour`,
      description:
        "Spain soccer tournament tours from $1,400 per person, ground services only, scaling with the tournament, length, group size and season. The flagship ten-day Donosti Cup package sits above that entry point.",
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
            alt="US youth soccer club in the group stage of a major Spanish tournament on an Odisea Tours tournament tour"
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
            <span className="text-paper/50">Soccer Tournaments in Spain</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Pillar guide · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Soccer Tournaments <span className="font-display-italic text-gold">in Spain</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            A tournament trip to Spain done properly is more than a registration and a hotel. It is competitive knockout football at one of Europe&rsquo;s great youth cups, a session with professional-club coaches, and a real tour of Spain around the games, with one Odisea director carrying the whole thing from the arrivals hall to the final. We have built group soccer tours in Spain since 2005.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan your tournament tour
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/tours/tournament-experience" className="btn-editorial on-dark">
              See the Donosti Cup tour
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SPAIN */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              Why a tournament in <span className="font-display-italic text-gold">Spain</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink/80 text-lg leading-relaxed">
            <p>
              Spain runs some of the biggest and best-organized youth tournaments in the world, and it does it in cities a US family actually wants to visit. The Donosti Cup fills San Sebastián every July; the MIC turns the Costa Brava into an elite academy showcase at Easter; the Iber Cup bases on the Costa del Sol; the Costa Daurada Cup runs resort-style in Salou. The football is real, the opposition is international, and the setting is the Mediterranean coast or the Basque Country.
            </p>
            <p>
              The second reason is that Spain gives you a complete trip around the tournament. A pure cup trip is all pitch and hotel. An Odisea tournament tour alternates match days with a session at a professional club, a stadium tour, and a guided day through Gaud&iacute;&rsquo;s Barcelona or the La Concha bay. For a group that travels with families, and tournament groups almost always do, that balance is the whole point.
            </p>
          </div>
        </div>
      </section>

      {/* THE TOURNAMENTS */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            The tournaments <span className="font-display-italic text-gold">we build around</span>
          </h2>
          <p className="mt-6 max-w-[64ch] text-paper/80 text-lg leading-relaxed">
            We arrange the full travel package around any of Spain&rsquo;s major youth cups. These four are the ones US clubs ask for most.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-paper/15">
            {TOURNAMENTS.map((t) => (
              <div key={t.name} className="bg-ink p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">
                  {t.place} · {t.when}
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight">{t.name}</h3>
                <p className="mt-4 text-paper/75 leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ODISEA HANDLES */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[16ch]">
              What we <span className="font-display-italic text-gold">handle</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-ink/80 text-lg leading-relaxed">
            <p>
              Registration, credentials, age verification and fixture allocation at the tournament. Accommodation in the tournament area, with full or half board. A private coach with driver for the airport and every match, training and shuttle transfer. A session with professional-club coaches where the route allows, plus the stadium tours and guided cultural days. And an Odisea Tours director with the group for the whole trip.
            </p>
            <p>
              Because we are a Spanish ground operator rather than a booking site, all of it is arranged and run locally, and opposition is matched to your squad&rsquo;s age and level ahead of the trip.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            Who tournament tours <span className="font-display-italic text-gold">are for</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="bg-ink p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">{a.tag}</div>
                <h3 className="font-display text-xl uppercase leading-tight">{a.title}</h3>
                <p className="mt-4 text-paper/75 leading-relaxed text-[0.95rem]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[16ch]">
              What it <span className="font-display-italic text-gold">costs</span>
            </h2>
            <p className="mt-6 font-display text-5xl text-gold">from $1,400</p>
            <p className="mt-2 font-mono-editorial text-[0.65rem] tracking-[0.24em] uppercase text-ink/50">per person · ground services</p>
          </div>
          <div className="md:col-span-7 space-y-5 text-ink/80 text-lg leading-relaxed">
            <p>
              A Spain tournament tour starts from $1,400 per person, based on a group of 20, twin sharing, ground services only, with international flights separate. The flagship ten-day Donosti Cup package, with six days of tournament football, a pro-club session, full board at the cup and a Barcelona leg, sits above that entry point.
            </p>
            <p>
              The price scales with the tournament, the number of nights, the group size, the season and the hotel category, and is locked once dates, group size and trip length are confirmed. Summer tournaments fill early, so we recommend confirming four to six months ahead.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            Tournament tours to Spain, <span className="font-display-italic text-gold">answered</span>
          </h2>
          <div className="mt-12 divide-y divide-paper/15">
            {TOURNAMENT_FAQ.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="font-display text-xl uppercase leading-snug text-paper">{f.q}</h3>
                <p className="mt-4 text-paper/75 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <JournalLinks
        label="From the Journal"
        title="Field notes on soccer tournaments"
        italicTail="in Spain."
        intro="The operator's view of taking a US club to a Spanish cup: which tournament suits your age group and level, when each runs, and how we build the whole travel package around the games."
        slugs={[
          "best-youth-soccer-tournaments-spain-us-clubs",
          "youth-soccer-tours-to-spain-complete-guide",
          "what-a-youth-soccer-tour-to-spain-costs",
          "best-time-of-year-for-a-youth-soccer-tour-to-spain",
        ]}
      />

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[22ch] mx-auto">
            Bring your club to a <span className="font-display-italic text-gold">Spanish cup</span>
          </h2>
          <p className="mt-6 max-w-[56ch] mx-auto text-ink/70 text-lg leading-relaxed">
            Tell us your tournament, your age groups and your travel window, and we will build the package and lock the fixtures. An Odisea director travels with you for the whole trip.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">
              Plan your tournament tour
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/soccer-tours-spain" className="btn-editorial">
              All soccer tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
