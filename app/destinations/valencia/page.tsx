import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

export const metadata: Metadata = {
  title: "Football Tours in Valencia — Mestalla, Coaching & Beach",
  description:
    "Football tours in Valencia for clubs and groups. Visit Mestalla stadium, train at Valencia CF facilities in Paterna, play local sides, and enjoy the beach. Organized by Odisea Tours.",
  alternates: { canonical: "/destinations/valencia" },
  openGraph: {
    url: "https://odisea-tours.com/destinations/valencia",
    title: "Football Tours in Valencia | Odisea Tours",
    description:
      "Mestalla, elite coaching at Paterna, Levante friendlies, paella on the beach. Football tours in Valencia organized on the ground since 2005.",
    images: [
      {
        url: "/photos/veterans-soccer-tour-valencia-cf-match.jpg",
        width: 1200,
        height: 630,
        alt: "Football match at Mestalla stadium, Valencia",
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
    { "@type": "ListItem", position: 3, name: "Valencia", item: "https://odisea-tours.com/destinations/valencia" },
  ],
};

const WHAT_YOU_GET = [
  {
    title: "Mestalla stadium experience",
    desc: "The oldest still-active stadium in Spain. Steep stands, incredible acoustics, and an atmosphere that puts many bigger venues to shame.",
  },
  {
    title: "Coaching at Valencia CF (Paterna)",
    desc: "Valencia CF's training facilities at Paterna offer some of the best coaching sessions we have seen. Small groups, expert coaches, outstanding pitches.",
  },
  {
    title: "Friendlies against local clubs",
    desc: "Levante UD and dozens of Valencian amateur and youth clubs provide competitive opposition at every level. Real matches, proper pitches, referees included.",
  },
  {
    title: "La Liga match tickets",
    desc: "Mestalla on a match night is one of the great experiences in European football. We source tickets and get your group seated together.",
  },
  {
    title: "Beach lifestyle",
    desc: "Malvarrosa and Patacona beaches are 15 minutes from the city centre. Recovery sessions on the sand, morning swims, and seafood lunches by the water.",
  },
  {
    title: "Paella, the real thing",
    desc: "Valencia is the birthplace of paella. We take groups to restaurants in El Palmar or Malvarrosa where it is cooked properly, over open flame, the way it was invented.",
  },
];

const FOOTBALL_EXPERIENCES = [
  {
    title: "Mestalla Stadium Tour",
    detail: "Walk through the tunnel, sit in the dugout, and see the press room at Spain's oldest continuously active stadium. The steep, tight stands make Mestalla one of the most atmospheric grounds in Europe.",
  },
  {
    title: "Valencia CF Training at Paterna",
    detail: "Professional coaching sessions at Ciudad Deportiva de Paterna. In our experience, these are among the highest-quality coaching sessions available to visiting groups anywhere in Spain. Excellent coaches, outstanding facilities, small group sizes.",
  },
  {
    title: "Levante UD Friendlies",
    detail: "Levante's Ciutat de Valencia stadium is a compact, welcoming venue perfect for group friendlies. Their youth setup is strong, making them ideal opponents for touring academy sides.",
  },
  {
    title: "Valencian Amateur Clubs",
    detail: "The Valencia region has a deep football culture with hundreds of clubs at every level. We arrange competitive fixtures against sides that match your group's ability and age profile.",
  },
  {
    title: "La Liga at Mestalla",
    detail: "There is something special about a night match at Mestalla. 49,000 fans packed into steep, close stands. The noise is extraordinary. If your dates align, this is a must.",
  },
  {
    title: "Futsal and Indoor Football",
    detail: "Valencia has a thriving futsal scene. We can arrange indoor sessions, futsal coaching clinics, or tickets to professional futsal matches for groups that want variety.",
  },
];

const BEYOND_THE_PITCH = [
  {
    title: "City of Arts and Sciences",
    desc: "Santiago Calatrava's futuristic complex on the old Turia riverbed. The Oceanografic aquarium, the Hemisferic cinema, and the architecture itself are worth half a day.",
  },
  {
    title: "Turia Gardens",
    desc: "A 9-kilometre park running through the city centre in a drained riverbed. Perfect for a group jog, a bike ride, or a slow walk between activities.",
  },
  {
    title: "Malvarrosa Beach",
    desc: "A wide, sandy beach 15 minutes from the city centre. Ideal for a morning swim, beach volleyball, or an afternoon paella at one of the beachfront restaurants.",
  },
  {
    title: "Central Market (Mercado Central)",
    desc: "One of the largest and most beautiful fresh food markets in Europe. Over 1,000 stalls under a stunning modernist roof. Great for a group breakfast stop.",
  },
  {
    title: "El Carmen (Old Town)",
    desc: "Narrow streets, street art, independent shops, and some of the best tapas bars in Valencia. The historic centre comes alive in the evenings.",
  },
];

const STATS = [
  { value: "1923", label: "Mestalla opened" },
  { value: "49K", label: "Mestalla capacity" },
  { value: "15min", label: "City centre to beach" },
  { value: "Top 3", label: "Coaching sessions in Spain" },
];

export default function ValenciaPage() {
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
            src="/photos/veterans-soccer-tour-valencia-cf-match.jpg"
            alt="Football match at Mestalla stadium in Valencia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/65" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 pb-20 pt-40">
          <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-5 reveal">
            Chapter III: Valencia
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] text-paper max-w-3xl reveal">
            Football tours in{" "}
            <span className="font-display-italic text-gold">Valencia</span>
          </h1>
          <p className="mt-6 text-paper/60 text-lg sm:text-xl max-w-xl leading-relaxed reveal">
            Mestalla. Elite coaching at Paterna. Competitive friendlies, Mediterranean
            beaches, and the birthplace of paella. Valencia is where football meets
            the good life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan Your Valencia Tour
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
            Football and{" "}
            <span className="font-display-italic text-gold">the Mediterranean.</span>
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
                Intimate coaching,{" "}
                <span className="font-display-italic text-gold">serious football</span>
              </h2>
              <p className="text-ink-muted text-base leading-relaxed mb-8 reveal">
                Valencia is a quieter, more intimate football city than Barcelona or
                Madrid. That is exactly why coaching sessions here are exceptional.
                Smaller groups, more personal attention, and training facilities
                that rival anything in Spain.
              </p>
              <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
                <Image
                  src="/photos/odisea-tours-professional-coaching.jpg"
                  alt="Professional coaching session at Valencia CF training facilities"
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
                Valencia off{" "}
                <span className="font-display-italic text-gold">the field</span>
              </h2>
              <p className="text-ink-muted text-base leading-relaxed reveal">
                Valencia combines everything a touring group could want. Futuristic
                architecture, one of Europe's best beaches, the birthplace of paella,
                and a compact old town that is easy to explore on foot. It is a
                smaller, warmer, more relaxed alternative to Barcelona and Madrid,
                and groups consistently rate it as their favourite stop.
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

          {/* Culture photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
              <Image
                src="/photos/odisea-tours-coaching-session.jpg"
                alt="Football coaching session in Valencia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
              <Image
                src="/photos/odisea-tours-match-vs-local-team.jpg"
                alt="Football match against a local Valencian team"
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
              For football groups, the Eixample or Ciutat Vella districts are ideal.
              Central, walkable, and close to both Mestalla and the beach. Valencia
              is a compact city, so most activities are within 15 minutes of your hotel.
            </p>
            <p className="text-ink-muted text-base leading-relaxed">
              Groups wanting a beach-focused stay can base themselves near Malvarrosa,
              with easy tram access to the city centre and Mestalla. We work with 3
              and 4-star hotels experienced in group bookings, with flexible dining
              and secure luggage storage for match-day equipment.
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
            <span>Valencia in numbers</span>
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
              Groups wanting coaching{" "}
              <span className="font-display-italic text-gold">and the beach</span>
            </h2>
            <p className="text-ink-muted text-base leading-relaxed">
              Valencia is the sweet spot for groups that want serious football
              combined with a relaxed Mediterranean lifestyle. The coaching sessions
              at Paterna are, in our experience, among the best available to visiting
              teams anywhere in Spain. The city is compact and easy to navigate. The
              beach is always close. And the food is extraordinary: this is where
              paella was invented, after all. For groups that want to train hard in
              the morning and eat paella on the beach in the afternoon, Valencia is
              the perfect choice.
            </p>
          </div>
        </div>
      </section>

      <JournalLinks
        title="Reading on Valencia"
        italicTail="for tour planners."
        intro="Why Valencia and Sevilla quietly outperform the obvious cities, what training at Valencia CF looks like, and the case for the cities most tours miss."
        slugs={[
          "valencia-sevilla-football-cities-most-tours-miss",
          "training-spanish-fa-rfef-football-tour-experience",
          "top-5-football-stadiums-visit-spain-soccer-tour",
          "how-to-plan-a-group-trip-to-spain",
        ]}
      />

      {/* ═══════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/photos/veterans-soccer-tour-happy-group.jpg"
            alt="Happy football tour group in Spain"
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
            <span className="font-display-italic text-gold">Valencia tour</span>
          </h2>
          <p className="text-paper/50 text-lg leading-relaxed max-w-xl mx-auto mb-10 reveal">
            Tell us about your group and we will design a Valencia itinerary around
            your squad. Coaching at Paterna, friendlies against local clubs,
            Mestalla, and the best paella you have ever eaten.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan Your Valencia Tour
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
