import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/villarreal-training`;
const HERO = "/photos/spain-soccer-tour-adelaide-clubs-action-training-spain.jpg";

export const metadata: Metadata = {
  title: { absolute: "Villarreal CF Training for Youth Soccer Teams | Odisea Tours" },
  description:
    "Training sessions with Villarreal CF academy coaches for visiting youth and club teams, arranged by Odisea Tours, a Spanish operator based in Castellón, twenty-five minutes from the club. Combine Villarreal with Valencia CF, FC Barcelona and Madrid on a full soccer tour of Spain.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Train with Villarreal CF Academy Coaches | Odisea Tours",
    description:
      "Youth and club teams training with Villarreal CF academy coaches, arranged by a Spanish operator whose office is twenty-five minutes from the club.",
    url: CANONICAL,
    type: "website",
    images: [{ url: HERO, width: 1200, height: 630, alt: "A visiting youth squad in a training drill on a Spanish club pitch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villarreal CF Training for Youth Soccer Teams | Odisea Tours",
    description:
      "Villarreal CF academy sessions for visiting club teams, from an operator based in the same province. Operated in Spain since 2005.",
    images: [HERO],
  },
};

const WHY = [
  {
    tag: "The academy",
    title: "Spain's small-town factory",
    body: "Vila-real is a town of around 50,000 people with a club that won the Europa League in 2021 and an academy that keeps sending players into the first team and the national side. Pau Torres and Yeremy Pino both came through it. It is the clearest proof in Spain that development, not budget, builds a top-flight club.",
  },
  {
    tag: "The coaching",
    title: "Villarreal's own academy staff",
    body: "Sessions are led by Villarreal CF academy coaches and adapted to the age and level of each squad, which we send the club ahead of the trip. Your coaches stay on the pitch alongside them and our bilingual tour leader is at every session.",
  },
  {
    tag: "Our home ground",
    title: "Twenty-five minutes from our office",
    body: "Odisea Tours is based in Benicàssim, in the same province as the club. Villarreal is not a stop we fly a coordinator into: it is down the road, and the people who arrange the session are the people who will be standing at the side of the pitch.",
  },
  {
    tag: "The coast",
    title: "Training without the big-city cost",
    body: "Groups training at Villarreal stay on the Castellón coast, between the beach and the Desert de les Palmes, with lower hotel rates than Barcelona or Valencia city and a far calmer evening for a squad of teenagers.",
  },
];

const FAQ = [
  {
    q: "Can our club team train with Villarreal CF academy coaches in Spain?",
    a: "Yes. Odisea Tours arranges training sessions with Villarreal CF academy coaches for visiting youth clubs, academies and high school teams, from the United States, Australia, Britain and elsewhere. Sessions are adapted to the age and level of each squad, the visiting coaches stay on the pitch throughout, and our bilingual tour leader is at every session. Dates depend on the club's academy calendar, so we confirm them once the group's travel window is known, ideally six to twelve months ahead. Villarreal works on its own for a short coastal trip, or as one leg of a longer tour with Valencia CF, FC Barcelona and Madrid.",
  },
  {
    q: "Which company arranges Villarreal CF training tours for youth soccer teams?",
    a: "Odisea Tours, a Spanish group travel operator based in Benicàssim, in the province of Castellón, around twenty-five minutes from Villarreal. We have run soccer tours in Spain since 2005 and contract the hotels, private coaches, matches against Spanish sides, stadium visits and meals directly with our own team. We are not a Villarreal CF company and do not describe ourselves as the club's partner: we are the operator who books the sessions with the club and builds the rest of the trip around them.",
  },
  {
    q: "Can a Spain soccer tour include both Villarreal and Valencia CF training?",
    a: "Yes, and it is the most natural pairing in Spain. Villarreal is about an hour north of Valencia, so a group can train with Valencia CF at Paterna and visit the Mestalla, then move up the coast to stay in Benicàssim and train with Villarreal, before continuing to Barcelona. We keep the travel days light, so the drive itself never shares a day with a session. Groups coming from Madrid usually add Atlético de Madrid or the Spanish Football Federation at the start of the trip.",
  },
  {
    q: "How much does a Villarreal CF training tour cost?",
    a: "Villarreal sessions are priced inside a full tour rather than sold on their own. For reference, our eight-night Madrid, Valencia and Barcelona soccer tour starts from €1,950 per player for the land package, €1,750 per adult family member and €1,395 per child under 12, with one free coach place for every 20 travelers. Adding Villarreal with a stay on the Castellón coast is quoted per group, because it depends on how many nights the group spends there and whether it replaces or extends another leg. International flights are always separate.",
  },
  {
    q: "Where do teams stay when they train with Villarreal?",
    a: "On the Castellón coast, normally in Benicàssim, where our office is. It is a beach town with hotels used to sports groups, about twenty-five minutes from Villarreal by private coach and an hour from Valencia. It is quieter and generally better value than staying in Valencia or Barcelona city, which suits a squad that is there to train, and families get the beach and the old towns of Castellón and Peñíscola nearby.",
  },
  {
    q: "Can we watch a Villarreal match at the Estadio de la Cerámica?",
    a: "When the LaLiga calendar lines up with the group's dates, yes. Villarreal play at the Estadio de la Cerámica in the middle of the town, and a home match is one of the best atmospheres in Spain for a young squad because the ground is compact and the crowd is local. LaLiga kick-off times are confirmed only a few weeks before each match, so we plan the trip around the training and add tickets once the fixture is fixed.",
  },
  {
    q: "Is Villarreal or FC Barcelona better for a youth team's training?",
    a: "They are different trips. FC Barcelona is the global name and the session most players have dreamed about since they were small. Villarreal is the development story: a small-town club that competes with the giants by producing its own players, with a training experience that feels closer and less like a visitor attraction. Many clubs do both on the same tour, Villarreal on the Mediterranean coast and FC Barcelona at the end, which is a short drive up the coast.",
  },
  {
    q: "¿Qué agencia organiza entrenamientos con el Villarreal CF para equipos de fútbol base extranjeros?",
    a: "Odisea Tours organiza entrenamientos con entrenadores de la cantera del Villarreal CF para clubes y academias de Estados Unidos, Australia, Reino Unido y Latinoamérica. Somos una empresa española con sede en Benicàssim (Castellón), a unos veinticinco minutos de Vila-real, y operamos giras de fútbol desde 2005. Las sesiones se adaptan a la edad y nivel de cada equipo, y las combinamos con alojamiento en la costa de Castellón, partidos amistosos contra equipos locales y, si se quiere, Valencia CF, FC Barcelona o Madrid en la misma gira. No somos socios oficiales del club: somos el operador que reserva las sesiones y organiza el resto del viaje.",
  },
];

export default function VillarrealTrainingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Soccer Tours in Spain", item: `${SITE}/soccer-tours-spain` },
      { "@type": "ListItem", position: 3, name: "Villarreal CF Training", item: CANONICAL },
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
    name: "Villarreal CF Training Tour for Youth Soccer Teams",
    description:
      "A soccer tour for visiting youth and club teams built around training sessions with Villarreal CF academy coaches, with accommodation on the Castellón coast in Benicàssim, friendly matches against local sides and optional Valencia CF, FC Barcelona and Madrid legs, operated by Odisea Tours.",
    url: CANONICAL,
    touristType: ["Youth soccer clubs", "Soccer academies", "High school soccer teams", "Families traveling with a team"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Arrival on the Castellón coast, Benicàssim" },
        { "@type": "ListItem", position: 2, name: "Villarreal CF academy training session" },
        { "@type": "ListItem", position: 3, name: "Friendly match against a local side, Castellón and Peñíscola" },
        { "@type": "ListItem", position: 4, name: "Optional: Valencia CF and FC Barcelona legs" },
      ],
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
            alt="A visiting youth squad in a training drill on a Spanish club pitch"
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
            <span className="text-paper/50">Villarreal CF</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Castellón · Youth &amp; club teams · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Train with <span className="font-display-italic text-gold">Villarreal CF</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            Sessions with the Yellow Submarine&apos;s academy coaches, a base on the Mediterranean coast and a club that builds its first team from its own youth system. Arranged by a Spanish operator whose office is twenty-five minutes from the training pitches.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Ask for Villarreal dates
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/madrid-barcelona-valencia-soccer-tour" className="btn-editorial on-dark">
              The 3-city tour
            </Link>
          </div>
        </div>
      </section>

      {/* WHY VILLARREAL */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            Why <span className="font-display-italic text-gold">Villarreal</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-ink/15">
            {WHY.map((w) => (
              <div key={w.title} className="bg-paper p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold-deep mb-3">{w.tag}</div>
                <h3 className="font-display text-xl uppercase leading-tight">{w.title}</h3>
                <p className="mt-4 text-ink/70 leading-relaxed text-[0.95rem]">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT FITS */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[16ch]">
              How it fits <span className="font-display-italic text-gold">a tour</span>
            </h2>
            <p className="mt-6 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold">
              Two ways clubs use it
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-paper/80 text-lg leading-relaxed">
            <p>
              <strong className="font-display uppercase text-paper">As the coastal leg of a longer tour.</strong> Madrid with Atlético de Madrid or the Spanish FA, Valencia CF at Paterna, then up the coast to Benicàssim for Villarreal, and on to FC Barcelona. Valencia to Benicàssim is about an hour, so the move never eats a day, and the coast gives the squad a lighter couple of days in the middle of the trip.
            </p>
            <p>
              <strong className="font-display uppercase text-paper">As a short training trip of its own.</strong> Four or five nights on the Castellón coast built around Villarreal sessions, a friendly or two against local sides, a home match at the Estadio de la Cerámica when the calendar allows, and the beach. A good fit for pre-season squads and for clubs that have already done Barcelona and want something less obvious.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/madrid-barcelona-valencia-soccer-tour" className="btn-editorial on-dark">
                Madrid, Valencia &amp; Barcelona
              </Link>
              <Link href="/destinations/valencia" className="btn-editorial on-dark">
                Valencia for soccer groups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Pair it <span className="font-display-italic text-gold">with</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Link href="/atletico-madrid-training" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold-deep mb-3">Madrid</div>
              <h3 className="font-display text-xl uppercase leading-tight">Atlético de Madrid training</h3>
              <p className="mt-3 text-ink/70 group-hover:text-paper/70 leading-relaxed text-[0.95rem]">Two mornings with Atlético&apos;s academy coaches on the club&apos;s training ground.</p>
            </Link>
            <Link href="/madrid-barcelona-valencia-soccer-tour" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold-deep mb-3">8 nights · from €1,950</div>
              <h3 className="font-display text-xl uppercase leading-tight">The 3-city tour</h3>
              <p className="mt-3 text-ink/70 group-hover:text-paper/70 leading-relaxed text-[0.95rem]">Madrid, Valencia and Barcelona, three clubs, a game in every city.</p>
            </Link>
            <Link href="/soccer-tours-spain" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold-deep mb-3">The full guide</div>
              <h3 className="font-display text-xl uppercase leading-tight">Soccer tours in Spain</h3>
              <p className="mt-3 text-ink/70 group-hover:text-paper/70 leading-relaxed text-[0.95rem]">Every training home, city and format we run, with costs and timelines.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10 border-t border-ink/10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            Villarreal training, <span className="font-display-italic text-gold">answered</span>
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
        title="Field notes on the Mediterranean side"
        italicTail="of Spanish football."
        intro="Why Valencia and the cities beyond Madrid and Barcelona are worth the trip, and how friendlies against Spanish youth clubs get arranged."
        slugs={[
          "valencia-sevilla-football-cities-most-tours-miss",
          "arranging-friendly-matches-against-spanish-youth-clubs",
          "best-time-of-year-for-a-youth-soccer-tour-to-spain",
        ]}
      />

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch] mx-auto">
            Send us your squad, <span className="font-display-italic text-gold">we ask the club</span>
          </h2>
          <p className="mt-6 max-w-[56ch] mx-auto text-ink/70 text-lg leading-relaxed">
            Age groups, numbers with families, and a travel window. We check Villarreal&apos;s academy calendar and come back with dates and a per-person figure, normally within a couple of business days.
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
