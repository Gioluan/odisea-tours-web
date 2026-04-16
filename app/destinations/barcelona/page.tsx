import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Football Tours in Barcelona — Camp Nou, La Masia & Coaching",
  description:
    "Football tours in Barcelona for clubs and youth teams. Visit Camp Nou, train at La Masia academy facilities, play local sides, and experience the best of Catalonia. Organized by Odisea Tours.",
  alternates: { canonical: "/destinations/barcelona" },
  openGraph: {
    url: "https://odisea-tours.com/destinations/barcelona",
    title: "Football Tours in Barcelona | Odisea Tours",
    description:
      "Camp Nou, La Masia, Espanyol, coaching sessions and Mediterranean culture. Football tours in Barcelona organized on the ground since 2005.",
    images: [
      {
        url: "/photos/veterans-soccer-tour-camp-nou-barcelona.jpg",
        width: 1200,
        height: 630,
        alt: "Football tour group at Camp Nou, Barcelona",
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
    { "@type": "ListItem", position: 3, name: "Barcelona", item: "https://odisea-tours.com/destinations/barcelona" },
  ],
};

const WHAT_YOU_GET = [
  {
    title: "Camp Nou stadium experience",
    desc: "Walk through the tunnel, visit the press room, and stand pitchside at the largest stadium in Europe. Even mid-renovation, this is an iconic visit.",
  },
  {
    title: "La Masia academy training",
    desc: "Coaching sessions at FC Barcelona's world-famous youth development facilities. The methodology that produced Messi, Xavi, and Iniesta.",
  },
  {
    title: "Matches against local clubs",
    desc: "Competitive fixtures on proper pitches against Catalan sides matched to your level. Referees, kits, and opponents who take the game seriously.",
  },
  {
    title: "FC Barcelona Museum",
    desc: "The most visited museum in Barcelona. Trophies, memorabilia, and interactive exhibits covering 125 years of football history.",
  },
  {
    title: "RCDE Stadium and Espanyol",
    desc: "A modern 40,000-seat stadium perfect for group visits and friendly matches. Espanyol is a welcoming club for touring sides.",
  },
  {
    title: "FCB Futsal (hidden gem)",
    desc: "Watch professional futsal at Palau Blaugrana. Electric atmosphere, incredible skill, and an experience most tourists never discover.",
  },
];

const FOOTBALL_EXPERIENCES = [
  {
    title: "Camp Nou Tour",
    detail: "Full stadium tour including the pitch, tunnel, press room, mixed zone, and the FC Barcelona Museum. Even during the ongoing renovation, the experience is extraordinary.",
  },
  {
    title: "Joan Gamper Training Ground",
    detail: "FC Barcelona's training complex and home to La Masia. Coaching sessions here follow Barca's possession-based methodology with licensed academy coaches.",
  },
  {
    title: "Olympic Stadium Montjuic",
    detail: "Built for the 1992 Olympics and currently hosting FC Barcelona's first team. A stadium with serious history and stunning views over the city.",
  },
  {
    title: "RCDE Stadium (Espanyol)",
    detail: "Modern, accessible, and ideal for group friendlies. Espanyol's stadium offers excellent pitch quality and a welcoming atmosphere for visiting teams.",
  },
  {
    title: "Competitive Friendlies",
    detail: "We arrange matches against local Catalan clubs at every level. Youth academies, amateur sides, veterans clubs. Real fixtures with referees on professional pitches.",
  },
  {
    title: "La Liga Match Tickets",
    detail: "FC Barcelona, Espanyol, or a trip to nearby Girona FC. We source tickets and handle logistics so your group walks into the stadium together.",
  },
];

const BEYOND_THE_PITCH = [
  {
    title: "Gothic Quarter",
    desc: "Narrow medieval streets, hidden squares, the Cathedral, and some of the best tapas in the city. Perfect for a group evening stroll.",
  },
  {
    title: "La Rambla and Boqueria Market",
    desc: "Barcelona's most famous boulevard. Walk from Placa Catalunya to the port, stopping at Boqueria Market for fresh juice and jamon.",
  },
  {
    title: "Sagrada Familia",
    desc: "Gaudi's unfinished masterpiece. Book in advance for your group and let the light through those stained glass windows do the rest.",
  },
  {
    title: "Barceloneta Beach",
    desc: "A 20-minute walk from the city centre. Ideal for a morning recovery swim or an afternoon on the sand after a training session.",
  },
  {
    title: "Montjuic Hill",
    desc: "Olympic facilities, panoramic views, botanical gardens, and the Magic Fountain. A full half-day excursion for any group.",
  },
];

const STATS = [
  { value: "2", label: "Professional stadiums" },
  { value: "15+", label: "Local clubs for friendlies" },
  { value: "No.1", label: "Most visited museum in the city" },
  { value: "20min", label: "From stadium to beach" },
];

export default function BarcelonaPage() {
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
            src="/photos/veterans-soccer-tour-camp-nou-barcelona.jpg"
            alt="Football tour group at Camp Nou stadium in Barcelona"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/65" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 pb-20 pt-40">
          <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-5 reveal">
            Chapter I: Barcelona
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] text-paper max-w-3xl reveal">
            Football tours in{" "}
            <span className="font-display-italic text-gold">Barcelona</span>
          </h1>
          <p className="mt-6 text-paper/60 text-lg sm:text-xl max-w-xl leading-relaxed reveal">
            Camp Nou. La Masia. Mediterranean sunshine and the best coaching
            methodology in world football. Barcelona is where your football tour
            begins.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan Your Barcelona Tour
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
            Everything Barcelona{" "}
            <span className="font-display-italic text-gold">has to offer.</span>
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
                On the pitch in{" "}
                <span className="font-display-italic text-gold">Catalonia</span>
              </h2>
              <p className="text-ink-muted text-base leading-relaxed mb-8 reveal">
                Barcelona is synonymous with a style of football that changed the game.
                Your group trains where that philosophy was born, plays on pitches
                across the city, and watches it live at Camp Nou.
              </p>
              <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
                <Image
                  src="/photos/veterans-soccer-tour-fc-barcelona-visit.jpg"
                  alt="Football group visiting FC Barcelona facilities"
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
                Barcelona off{" "}
                <span className="font-display-italic text-gold">the field</span>
              </h2>
              <p className="text-ink-muted text-base leading-relaxed reveal">
                Football is the reason you come. Barcelona is the reason you never
                want to leave. Gothic architecture, Mediterranean food, beaches five
                minutes from the city centre, and a cultural scene that rivals
                anywhere in Europe.
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
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
              <Image
                src="/photos/veterans-soccer-tour-barcelona-la-rambla.jpg"
                alt="Football tour group walking La Rambla in Barcelona"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden corner-ticks reveal">
              <Image
                src="/photos/odisea-tours-group-barcelona-cathedral.jpg"
                alt="Odisea Tours group at Barcelona Cathedral"
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
              For football groups, we recommend the Eixample district or the area around
              Placa Catalunya. Central, well-connected to stadiums and training grounds by
              metro, and packed with restaurants for group dinners.
            </p>
            <p className="text-ink-muted text-base leading-relaxed">
              Youth teams often prefer hotels near the Olympic Village, close to the beach
              and with easy access to the sporting facilities on Montjuic. We select 3 or
              4-star properties with experience hosting groups and flexible dining
              arrangements.
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
            <span>Barcelona in numbers</span>
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
              Youth teams wanting{" "}
              <span className="font-display-italic text-gold">academy training</span>
            </h2>
            <p className="text-ink-muted text-base leading-relaxed">
              Barcelona is the world capital of youth football development. If your
              group wants to train at professional academy facilities, learn the
              Barca methodology first-hand, and visit the club where La Masia
              changed football forever, this is your city. The combination of elite
              coaching, competitive friendlies against strong Catalan youth sides,
              and a city that keeps everyone entertained makes Barcelona the top
              choice for youth football tours.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/photos/veterans-soccer-tour-camp-nou-stadium.jpg"
            alt="Camp Nou stadium interior"
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
            <span className="font-display-italic text-gold">Barcelona tour</span>
          </h2>
          <p className="text-paper/50 text-lg leading-relaxed max-w-xl mx-auto mb-10 reveal">
            Tell us about your group, your dates, and what you want to experience.
            We will design a Barcelona itinerary built around your squad and your
            budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan Your Barcelona Tour
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
