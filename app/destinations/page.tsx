import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Football Tour Destinations in Spain",
  description:
    "Explore Spain's greatest football cities with Odisea Tours. Barcelona, Madrid and Valencia: professional stadiums, coaching sessions, La Liga matches and cultural experiences for your group.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    url: "https://odisea-tours.com/destinations",
    title: "Football Tour Destinations in Spain | Odisea Tours",
    description:
      "Barcelona, Madrid and Valencia. Three football cities, one expert tour operator on the ground since 2005.",
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
  ],
};

const DESTINATIONS = [
  {
    slug: "barcelona",
    name: "Barcelona",
    photo: "/photos/veterans-soccer-tour-camp-nou-barcelona.jpg",
    alt: "Football tour group at Camp Nou stadium in Barcelona",
    tagline: "Camp Nou, La Masia, and the Mediterranean coast.",
  },
  {
    slug: "madrid",
    name: "Madrid",
    photo: "/photos/veterans-soccer-tour-bernabeu-stadium.jpg",
    alt: "Football tour group at Santiago Bernabeu stadium in Madrid",
    tagline: "The Bernabeu, Atletico, and the heart of Spanish football.",
  },
  {
    slug: "valencia",
    name: "Valencia",
    photo: "/photos/veterans-soccer-tour-valencia-cf-match.jpg",
    alt: "Football match at Mestalla stadium in Valencia",
    tagline: "Mestalla, elite coaching, and paella on the beach.",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[60dvh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/photos/veterans-soccer-tour-camp-nou-stadium.jpg"
            alt="Inside Camp Nou stadium, Barcelona"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/65" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 pb-16 pt-40">
          <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/50 mb-5 reveal">
            Destinations
          </p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.98] text-paper max-w-3xl reveal">
            Football tour destinations{" "}
            <span className="font-display-italic text-gold">in Spain</span>
          </h1>
          <p className="mt-6 text-paper/60 text-lg sm:text-xl max-w-xl leading-relaxed reveal">
            Three world-class football cities. Professional stadiums, elite coaching
            facilities, La Liga matches, and the culture that makes Spain unforgettable.
            All organized on the ground by Odisea Tours.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INTRO
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="max-w-2xl reveal">
            <div className="rule-label text-ink-muted font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase mb-8">
              <span>Why Spain</span>
            </div>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-ink mb-6">
              The home of{" "}
              <span className="font-display-italic text-gold">beautiful football</span>
            </h2>
            <p className="text-ink-muted text-base leading-relaxed">
              Spain produced four consecutive major tournament wins between 2008 and 2024.
              Its domestic league attracts the best players on the planet. Its coaching
              methodology is studied worldwide. For any football group, from youth academies
              to veterans clubs, there is no better destination. Odisea Tours has been
              organizing group travel across Spain since 2005. We live here. We know the
              pitches, the coaches, and the restaurants.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DESTINATION CARDS
      ═══════════════════════════════════════════════════ */}
      <section className="bg-paper-warm py-16 md:py-20 paper-texture">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="group reveal"
              >
                <div className="relative aspect-[4/3] overflow-hidden corner-ticks mb-5">
                  <Image
                    src={dest.photo}
                    alt={dest.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/20 transition-colors" />
                </div>
                <h3 className="font-display text-2xl text-ink group-hover:text-gold transition-colors">
                  {dest.name}
                </h3>
                <p className="mt-2 text-ink-muted text-sm leading-relaxed">
                  {dest.tagline}
                </p>
                <span className="mt-3 inline-block font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted group-hover:text-gold transition-colors">
                  Explore destination
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════ */}
      <section className="bg-ink py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-14 text-center">
          <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/40 mb-6 reveal">
            Start planning
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[1] text-paper mb-6 reveal">
            Not sure which city?{" "}
            <span className="font-display-italic text-gold">We will help.</span>
          </h2>
          <p className="text-paper/50 text-lg leading-relaxed max-w-xl mx-auto mb-10 reveal">
            Tell us about your group and we will recommend the perfect itinerary.
            Most tours combine two or three cities for the full Spanish football experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan Your Tour
            </Link>
            <a
              href="https://wa.me/34670059797"
              target="_blank"
              rel="noopener noreferrer"
              className="link-rule text-paper/50 hover:text-paper transition-colors text-sm"
            >
              WhatsApp us directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
