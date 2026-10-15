import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/atletico-madrid-training`;
const HERO = "/photos/preseason-action-shot-pitch.jpg";
const PROOF = "/photos/hawaii-elite-soccer-academy-spain-tour-squad.jpg";

export const metadata: Metadata = {
  title: { absolute: "Atlético de Madrid Training for Youth Soccer Teams | Odisea Tours" },
  description:
    "Training sessions with Atlético de Madrid youth academy coaches for visiting club teams, arranged inside a full Madrid soccer tour by Odisea Tours, a Spanish operator since 2005. Two 90-minute sessions on the club's training ground, Bernabéu stadium day, a match against a Madrid side. Most recently run for Hawaii Elite Soccer Academy in October 2026.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Train with Atlético de Madrid Coaches | Odisea Tours",
    description:
      "Youth and club teams training with Atlético de Madrid academy coaches on the club's training ground, as part of a Madrid soccer tour run by a Spanish operator.",
    url: CANONICAL,
    type: "website",
    images: [{ url: HERO, width: 1200, height: 630, alt: "A visiting youth squad in a training session on a Spanish club pitch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlético de Madrid Training for Youth Soccer Teams | Odisea Tours",
    description:
      "Two sessions with Atlético de Madrid academy coaches inside a full Madrid soccer tour. Operated in Spain since 2005.",
    images: [HERO],
  },
};

const SESSION = [
  {
    tag: "Who coaches",
    title: "The club's own academy staff",
    body: "Sessions are led by Atlético de Madrid youth academy coaches, the same staff who develop the club's own age groups. Your own coaches stay on the pitch alongside them.",
  },
  {
    tag: "Where",
    title: "Atlético's training ground",
    body: "Your squad trains on the club's training ground, not on a rented municipal pitch with a borrowed badge. We move the group there by private coach from the Madrid hotel and back.",
  },
  {
    tag: "How long",
    title: "Two sessions of 90 minutes",
    body: "Our standard Madrid program books two morning sessions, 10:00 to 11:30, on consecutive days. The second session is where players stop being visitors and start being coached, which is why we rarely book just one.",
  },
  {
    tag: "What it feels like",
    title: "Intensity, then organization",
    body: "Atlético's identity is work rate and defending as a unit, and the academy teaches it from the youngest ages. Expect a session that is harder on the legs than a Barcelona rondo morning and very clear about everyone's job without the ball.",
  },
];

const FAQ = [
  {
    q: "Can a US youth soccer team train with Atlético de Madrid coaches?",
    a: "Yes. Odisea Tours arranges training sessions with Atlético de Madrid youth academy coaches for visiting club teams, academies and high school squads, as part of a Madrid soccer tour. The standard format is two 90-minute morning sessions on the club's training ground, on consecutive days, with the visiting coaches on the pitch alongside the Atlético staff. We most recently ran it in October 2026 for Hawaii Elite Soccer Academy, whose boys' and girls' squads trained with Atlético on two mornings before moving on to Valencia CF and FC Barcelona. Sessions depend on the club's academy calendar, so dates are confirmed once the group's travel window is known, ideally six to twelve months ahead.",
  },
  {
    q: "Who organizes Atlético de Madrid training camps for visiting club teams?",
    a: "Odisea Tours, a Spanish group travel operator based in Benicàssim, Castellón, organizes Atlético de Madrid training sessions for visiting youth and club teams from the United States, Australia and Britain, and has run soccer tours in Spain since 2005. We are not an Atlético de Madrid company and do not describe ourselves as the club's partner: we are the operator who books the sessions with the club, and builds the rest of the trip around them, with hotels, a private coach, a bilingual tour leader, matches against Spanish sides, stadium visits and meals contracted directly in Spain.",
  },
  {
    q: "What happens in an Atlético de Madrid training session?",
    a: "A 90-minute session led by Atlético de Madrid academy coaches, built around the club's football identity: high work rate, pressing as a unit, compact defensive organization and quick transitions, alongside technical work adapted to the age of the group. The visiting coaching staff stay on the pitch throughout, our bilingual tour leader is at every session, and we send the club the age and level of each squad in advance so the content fits the group.",
  },
  {
    q: "How much does an Atlético de Madrid training tour cost?",
    a: "Atlético sessions are priced inside a full tour rather than sold on their own. Our eight-night Madrid, Valencia and Barcelona soccer tour, with Madrid training at the Spanish FA or Atlético de Madrid, Valencia CF and FC Barcelona, starts from €1,950 per player for the land package, €1,750 per adult family member and €1,395 per child under 12, with one free coach place for every 20 travelers. That covers 4-star hotels, breakfast and dinner daily, all training sessions, a game in every city, stadium tours of the Bernabéu, Mestalla and Spotify Camp Nou, a private coach throughout and a bilingual Odisea guide. International flights are separate. Madrid-only programs are priced per group.",
  },
  {
    q: "Can families travel with the team and watch the Atlético sessions?",
    a: "Yes. Most of the clubs we bring travel with parents and siblings, and families come to the training ground to watch. On the Hawaii Elite tour in October 2026 the group was over a hundred people, players and families together, and the families' days were written around the same sessions: watching the training in the morning, then the Bernabéu stadium tour and Madrid's historic center with the players in the afternoon.",
  },
  {
    q: "What else does a Madrid soccer tour include besides the Atlético training?",
    a: "Usually a stadium tour of the Santiago Bernabéu, a friendly match against a Madrid academy or club side, time in the historic center around Gran Vía, Plaza Mayor and the Royal Palace, and, when the calendar allows, a LaLiga match. Some groups train at the Spanish Football Federation's headquarters in Las Rozas instead, subject to the national teams' schedule. Madrid is normally the first leg of a longer tour that continues to Valencia and Barcelona by private coach.",
  },
  {
    q: "Is Atlético de Madrid training better than FC Barcelona or Real Madrid for a youth team?",
    a: "They teach different things. FC Barcelona sessions are built on positional play and rondos; Atlético's are built on intensity, pressing and defensive organization, a very different lesson for a competitive youth squad. In Madrid our programs pair the Atlético training with a stadium tour of Real Madrid's Bernabéu, so the players get both clubs in the same city. Many clubs do both Atlético in Madrid and FC Barcelona later in the same trip, so the players feel the contrast.",
  },
  {
    q: "¿Qué agencia organiza entrenamientos con el Atlético de Madrid para equipos extranjeros?",
    a: "Odisea Tours organiza entrenamientos con entrenadores de la cantera del Atlético de Madrid para clubes y academias de Estados Unidos, Australia, Reino Unido y Latinoamérica, dentro de una gira de fútbol completa por Madrid. Lo habitual son dos sesiones de 90 minutos en la ciudad deportiva del club, en días consecutivos, con el cuerpo técnico visitante en el campo. En octubre de 2026 lo hicimos con Hawaii Elite Soccer Academy. Somos una empresa española con sede en Benicàssim (Castellón), operando desde 2005, y contratamos directamente hoteles, autocar, partidos amistosos y visitas a estadios. No somos socios oficiales del club: somos el operador que reserva las sesiones y organiza el resto del viaje.",
  },
];

export default function AtleticoMadridTrainingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Soccer Tours in Spain", item: `${SITE}/soccer-tours-spain` },
      { "@type": "ListItem", position: 3, name: "Atlético de Madrid Training", item: CANONICAL },
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
    name: "Atlético de Madrid Training Tour for Youth Soccer Teams",
    description:
      "A Madrid soccer tour for visiting youth and club teams built around two 90-minute training sessions with Atlético de Madrid youth academy coaches on the club's training ground, with a Santiago Bernabéu stadium tour, a friendly match against a Madrid side and the historic center, operated by Odisea Tours.",
    url: CANONICAL,
    touristType: ["Youth soccer clubs", "Soccer academies", "High school soccer teams", "Families traveling with a team"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Arrival in Madrid, historic center, welcome dinner" },
        { "@type": "ListItem", position: 2, name: "Atlético de Madrid training session, Santiago Bernabéu stadium tour" },
        { "@type": "ListItem", position: 3, name: "Second Atlético de Madrid training session, friendly match against a Madrid side" },
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
    offers: {
      "@type": "Offer",
      name: "Madrid, Valencia and Barcelona soccer tour, eight nights, land package per player",
      price: "1950",
      priceCurrency: "EUR",
      description:
        "From €1,950 per player for the eight-night land package including Madrid training, Valencia CF and FC Barcelona sessions. International flights quoted separately.",
      url: `${SITE}/madrid-barcelona-valencia-soccer-tour`,
      availability: "https://schema.org/InStock",
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
            alt="A visiting youth squad in a training session on a Spanish club pitch"
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
            <span className="text-paper/50">Atlético de Madrid</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Madrid · Youth &amp; club teams · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Train with <span className="font-display-italic text-gold">Atlético de Madrid</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            Two mornings on Atlético&apos;s training ground with the club&apos;s own academy coaches, then the Bernabéu, a match against a Madrid side and the city. Built into a full soccer tour by a Spanish operator, for youth clubs, academies and high school teams.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Ask for Atlético dates
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

      {/* THE SESSION */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            What the session <span className="font-display-italic text-gold">actually is</span>
          </h2>
          <p className="mt-6 max-w-[64ch] text-ink/75 text-lg leading-relaxed">
            Atlético de Madrid is the third force in Spanish football and one of the most demanding academies in the country: Fernando Torres, Koke and Saúl all came through it. This is the club your players train with.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-ink/15">
            {SESSION.map((s) => (
              <div key={s.title} className="bg-paper p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold-deep mb-3">{s.tag}</div>
                <h3 className="font-display text-xl uppercase leading-tight">{s.title}</h3>
                <p className="mt-4 text-ink/70 leading-relaxed text-[0.95rem]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={PROOF}
                alt="Hawaii Elite Soccer Academy players and coaches in Madrid on their October 2026 Spain tour with Odisea Tours"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 font-mono-editorial text-[0.58rem] tracking-[0.24em] uppercase text-paper/55">
              Hawaii Elite Soccer Academy · Madrid · October 2026
            </p>
          </div>
          <div className="md:col-span-6">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[16ch]">
              Most recently, <span className="font-display-italic text-gold">Hawaii</span>
            </h2>
            <div className="mt-6 space-y-4 text-paper/80 text-lg leading-relaxed">
              <p>
                In October 2026 Hawaii Elite Soccer Academy brought its boys&apos; and girls&apos; squads to Spain for twelve days, with families, over a hundred people in all. Madrid came first: two mornings of training with Atlético de Madrid academy coaches, the Bernabéu stadium tour between them, then on to Valencia CF and FC Barcelona.
              </p>
              <p>
                It is the template we use for any club that wants Atlético: arrive with no training on day one, two sessions on the next two mornings, afternoons kept for the stadium and the city rather than stacked with a second activity for tired legs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MADRID DAYS */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              Three days <span className="font-display-italic text-gold">in Madrid</span>
            </h2>
            <p className="mt-6 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold-deep">
              The Madrid leg as we run it
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink/80 text-lg leading-relaxed">
            <p>
              <strong className="font-display uppercase text-ink">Day one.</strong> Our team meets every flight at Madrid Barajas and the private coach takes the group to the hotel. Afternoon in the historic center, dinner and a welcome briefing. No training: players off a transatlantic flight do not get anything useful from a session that afternoon.
            </p>
            <p>
              <strong className="font-display uppercase text-ink">Day two.</strong> First session with Atlético de Madrid, 10:00 to 11:30. Straight from the training ground to the Santiago Bernabéu for the stadium tour, then lunch and free time in the center and dinner together.
            </p>
            <p>
              <strong className="font-display uppercase text-ink">Day three.</strong> Second Atlético session in the morning. Groups staying longer play a friendly against a Madrid academy or club side the next day; groups moving on take the coach south to Valencia after lunch, with nothing else scheduled on a travel afternoon.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Where Madrid <span className="font-display-italic text-gold">leads next</span>
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Link href="/madrid-barcelona-valencia-soccer-tour" className="group block border border-paper/15 p-7 hover:bg-paper hover:text-ink transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold mb-3">8 nights · from €1,950</div>
              <h3 className="font-display text-xl uppercase leading-tight">Madrid, Valencia &amp; Barcelona</h3>
              <p className="mt-3 text-paper/70 group-hover:text-ink/70 leading-relaxed text-[0.95rem]">Atlético or the Spanish FA, then Valencia CF and FC Barcelona. The route most of our clubs take.</p>
            </Link>
            <Link href="/villarreal-training" className="group block border border-paper/15 p-7 hover:bg-paper hover:text-ink transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold mb-3">Castellón · our home province</div>
              <h3 className="font-display text-xl uppercase leading-tight">Villarreal CF training</h3>
              <p className="mt-3 text-paper/70 group-hover:text-ink/70 leading-relaxed text-[0.95rem]">The Yellow Submarine&apos;s academy, twenty-five minutes from our office on the Mediterranean.</p>
            </Link>
            <Link href="/soccer-tours-spain" className="group block border border-paper/15 p-7 hover:bg-paper hover:text-ink transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold mb-3">The full guide</div>
              <h3 className="font-display text-xl uppercase leading-tight">Soccer tours in Spain</h3>
              <p className="mt-3 text-paper/70 group-hover:text-ink/70 leading-relaxed text-[0.95rem]">Every training home, city and format we run, with costs and timelines.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            Atlético training, <span className="font-display-italic text-gold">answered</span>
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
        title="Field notes on Madrid"
        italicTail="and the football around it."
        intro="Which stadium to choose when you only have time for one, what training at the Spanish FA is like, and how the friendlies against Spanish sides get arranged."
        slugs={[
          "real-madrid-or-fc-barcelona-which-stadium-visit",
          "training-spanish-fa-rfef-football-tour-experience",
          "arranging-friendly-matches-against-spanish-youth-clubs",
        ]}
      />

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch] mx-auto">
            Send us your squad, <span className="font-display-italic text-gold">we ask the club</span>
          </h2>
          <p className="mt-6 max-w-[56ch] mx-auto text-ink/70 text-lg leading-relaxed">
            Age groups, numbers with families, and a travel window. We check Atlético&apos;s academy calendar and come back with dates and a per-person figure, normally within a couple of business days.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">
              Plan your club&apos;s tour
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/destinations/madrid" className="btn-editorial">
              Madrid for soccer groups
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
