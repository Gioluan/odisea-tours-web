import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TOURS } from "@/content/tours";
import { FAQ_FLAT } from "@/content/faq";
import JournalLinks from "@/components/JournalLinks";
import GroundLogistics from "@/components/GroundLogistics";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/soccer-tours-spain`;

export const metadata: Metadata = {
  title: { absolute: "Soccer Tours in Spain · Youth, Pre-Season & Veterans | Odisea Tours" },
  description:
    "Soccer tours in Spain run by a Spanish team on the ground since 2005. Training at FC Barcelona, Valencia CF and the Spanish Football Federation. Matches against Spanish academy or amateur sides. Stadium days at Camp Nou, Bernabéu and Mestalla. From $1,400 per player.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Soccer Tours in Spain | Odisea Tours · Since 2005",
    description:
      "Youth, pre-season, tournament and veterans soccer tours in Spain. Training at FC Barcelona, Valencia CF and the Spanish FA. Stadium days at Camp Nou, Bernabéu and Mestalla.",
    url: CANONICAL,
    type: "website",
    images: [
      {
        url: "/photos/odisea-tours-youth-fcb-training-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Youth soccer team training at FC Barcelona's Joan Gamper facilities on a Spain soccer tour with Odisea Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soccer Tours in Spain | Odisea Tours",
    description:
      "Youth, pre-season, tournament and veterans soccer tours in Spain. Since 2005.",
    images: ["/photos/odisea-tours-youth-fcb-training-hero.jpg"],
  },
};

const SOCCER_TOUR_SLUGS = [
  "youth-soccer-spain-tour",
  "tournament-experience",
  "european-soccer-tours",
  "pre-season-stages",
] as const;

const FAQ_SLUGS_FOR_PILLAR = [
  "How much does a Spain soccer tour cost?",
  "What is included in the price?",
  "Do players actually train inside FC Barcelona, Valencia CF and the Spanish FA?",
  "Who organises the matches, and who is the opposition?",
  "What is the minimum and maximum group size?",
  "What ages can travel?",
  "Can families travel on the same itinerary as the players?",
  "When should we book?",
  "How safe are Odisea tours, and is travel insurance included?",
  "How does language work? Will my players cope?",
];

export default function SoccerToursSpainPillarPage() {
  const soccerTours = SOCCER_TOUR_SLUGS
    .map((slug) => TOURS.find((t) => t.slug === slug))
    .filter((t): t is (typeof TOURS)[number] => Boolean(t));

  const faqItems = FAQ_SLUGS_FOR_PILLAR
    .map((q) => FAQ_FLAT.find((f) => f.q === q))
    .filter((f): f is (typeof FAQ_FLAT)[number] => Boolean(f));

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Soccer Tours in Spain", item: CANONICAL },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Soccer Tours in Spain",
    description:
      "Group soccer tours in Spain for youth clubs, schools, pre-season squads and adult amateur teams. Training at FC Barcelona, Valencia CF and the Spanish Football Federation. Matches against Spanish academy or amateur sides. Stadium days at Camp Nou, Bernabéu and Mestalla.",
    touristType: [
      "Youth soccer clubs",
      "High school soccer programs",
      "College pre-season squads",
      "Adult amateur and veterans soccer teams",
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
      price: "1400",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE}/plan-your-tour`,
      description: "Youth Soccer Spain Tour, from $1,400 per player for 6 to 12 nights, based on group size and season.",
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
            src="/photos/odisea-tours-youth-fcb-training-hero.jpg"
            alt="Youth soccer team training at FC Barcelona's Joan Gamper facilities on an Odisea Tours soccer tour in Spain"
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
            <span className="text-paper/50">Soccer Tours in Spain</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Pillar guide · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Soccer Tours <span className="font-display-italic text-gold">in Spain</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            A soccer tour in Spain is not a vacation with a stadium tour bolted on. It is ten days of being inside the country that built the modern game. Our team has been planning these trips since 2005, for youth clubs, high school programs, college pre-season squads and adult amateur teams from the US, UK and Australia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan your Spain soccer tour
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/tours" className="btn-editorial on-dark">
              Browse all tours
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
              Why a tour through <span className="font-display-italic text-gold">Spain</span>.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-ink-soft leading-relaxed text-lg max-w-[60ch]">
            <p>
              Spain is where the modern game was assembled. Cruyff arrived in Catalonia in the seventies and rewired the way Spanish clubs think about possession. La Masia turned out a generation that won everything, including a World Cup. The Spanish Football Federation built a coaching culture that produces winning managers across England, Italy and Germany. Periodización táctica, juego de posición, the rondo as a training method, all of it has a Spanish accent.
            </p>
            <p>
              A youth or pre-season tour in Spain puts your players on grass that Iniesta and Xavi trained on. It puts them under coaches who learned the game from Spaniards who learned it from Cruyff. It puts them in stadiums where football is taken seriously by an entire country, on a Saturday night, in front of forty thousand people who care more than your home crowd ever has.
            </p>
            <p>
              That is the difference. You cannot replicate it at a tournament in Florida or a camp in England. You have to fly the team in.
            </p>
          </div>
        </div>
      </section>

      {/* THE FOUR FORMATS */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
            Chapter II · Tour formats
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Four kinds of Spain soccer tours <span className="font-display-italic text-gold">we run</span>.
          </h2>
          <p className="mt-6 max-w-[60ch] text-paper/75 leading-relaxed">
            Every tour gets customised around the group, but most soccer tours in Spain fall into one of these four formats. Pick the closest fit and we shape the rest in the planning call.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {soccerTours.map((t) => (
              <Link
                key={t.slug}
                href={`/tours/${t.slug}`}
                className="group block border border-paper/15 p-8 hover:bg-paper hover:text-ink transition-colors"
              >
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-paper/60 group-hover:text-ink/55 mb-3">
                  Chapter {t.chapter} · {t.duration}
                </div>
                <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight">
                  {t.title} {t.italicTitle ? (
                    <span className="font-display-italic text-gold">{t.italicTitle}</span>
                  ) : null}
                </h3>
                <p className="mt-4 text-paper/80 group-hover:text-ink-soft leading-relaxed">
                  {t.tagline}
                </p>
                <span className="inline-block mt-6 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-gold group-hover:text-gold-deep">
                  Read the tour →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE THEY TRAIN */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            Chapter III · The training homes
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            Where your players <span className="font-display-italic text-gold">actually train</span>.
          </h2>
          <p className="mt-6 max-w-[60ch] text-ink-soft leading-relaxed">
            Three training facilities anchor most of our soccer tours in Spain. Access is arranged through twenty years of working relationships, not through a booking portal.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <article className="border border-ink/15 p-7">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 mb-3">
                FC Barcelona
              </div>
              <h3 className="font-display text-xl md:text-2xl uppercase leading-tight">
                Joan <span className="font-display-italic text-gold">Gamper</span>
              </h3>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                The Joan Gamper complex is the same training campus the FC Barcelona first team and the FCB academy use day to day. Visiting youth groups train on the academy pitches under FC Barcelona coaching staff used to international squads. Sessions cover technical work, positional play and the Cruyff-era rondo progressions Barça still teaches.
              </p>
            </article>
            <article className="border border-ink/15 p-7">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 mb-3">
                Valencia CF
              </div>
              <h3 className="font-display text-xl md:text-2xl uppercase leading-tight">
                <span className="font-display-italic text-gold">Paterna</span>
              </h3>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                Valencia CF's Paterna training ground is twenty minutes outside the city. Sessions are run by VCF coaches and built around a more intense, defensive-organisation pedagogy than Barcelona. The Mestalla stadium tour usually pairs with the training day.
              </p>
            </article>
            <article className="border border-ink/15 p-7">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 mb-3">
                Spanish FA · RFEF
              </div>
              <h3 className="font-display text-xl md:text-2xl uppercase leading-tight">
                Las <span className="font-display-italic text-gold">Rozas</span>
              </h3>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                The Spanish Football Federation's headquarters at Las Rozas sits north of Madrid. The senior Spanish national team trains here. Visiting groups can stay on-site in the federation's residence and train on RFEF pitches with coaches credentialed by the federation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* THE THREE CITIES */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
            Chapter IV · The cities
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Three cities most of our soccer tours <span className="font-display-italic text-gold">move through</span>.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Link href="/destinations/madrid" className="group block border border-paper/15 p-7 hover:bg-paper hover:text-ink transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-paper/60 group-hover:text-ink/55 mb-3">
                40.4168° N
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                <span className="font-display-italic text-gold">Madrid</span>
              </h3>
              <p className="mt-4 text-paper/80 group-hover:text-ink-soft leading-relaxed text-[0.97rem]">
                Santiago Bernabéu, the Metropolitano, the Spanish FA at Las Rozas. The capital usually opens or closes the trip.
              </p>
              <span className="inline-block mt-5 font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold group-hover:text-gold-deep">
                Soccer tours in Madrid →
              </span>
            </Link>
            <Link href="/destinations/valencia" className="group block border border-paper/15 p-7 hover:bg-paper hover:text-ink transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-paper/60 group-hover:text-ink/55 mb-3">
                39.4699° N
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                <span className="font-display-italic text-gold">Valencia</span>
              </h3>
              <p className="mt-4 text-paper/80 group-hover:text-ink-soft leading-relaxed text-[0.97rem]">
                Mestalla, Valencia CF at Paterna, paella in the village where the dish was born. The middle leg of most tours.
              </p>
              <span className="inline-block mt-5 font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold group-hover:text-gold-deep">
                Soccer tours in Valencia →
              </span>
            </Link>
            <Link href="/destinations/barcelona" className="group block border border-paper/15 p-7 hover:bg-paper hover:text-ink transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-paper/60 group-hover:text-ink/55 mb-3">
                41.3851° N
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                <span className="font-display-italic text-gold">Barcelona</span>
              </h3>
              <p className="mt-4 text-paper/80 group-hover:text-ink-soft leading-relaxed text-[0.97rem]">
                Camp Nou, Joan Gamper, the Cruyff legacy, Gaudí. The emotional centre of any Spain soccer tour.
              </p>
              <span className="inline-block mt-5 font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-gold group-hover:text-gold-deep">
                Soccer tours in Barcelona →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            Chapter V · Audiences
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            Who Spain soccer tours <span className="font-display-italic text-gold">are for</span>.
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <Link href="/youth" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/65 mb-3">
                U10 to U19
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                Youth <span className="font-display-italic text-gold">clubs</span>
              </h3>
              <p className="mt-4 text-ink-soft group-hover:text-paper/80 leading-relaxed">
                Youth clubs from the US, UK and Australia send squads of 18 to 60 players plus parents. Ten days, three cities, full board, training and friendlies. The standard format for a first international tour.
              </p>
            </Link>
            <Link href="/schools" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/65 mb-3">
                High school
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                School <span className="font-display-italic text-gold">programs</span>
              </h3>
              <p className="mt-4 text-ink-soft group-hover:text-paper/80 leading-relaxed">
                Varsity and First XI programs from US private schools and UK independents. Often paired with a Spanish-language or cultural component, scheduled around the school academic calendar.
              </p>
            </Link>
            <Link href="/veterans" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/65 mb-3">
                Adult amateur
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                Veterans <span className="font-display-italic text-gold">teams</span>
              </h3>
              <p className="mt-4 text-ink-soft group-hover:text-paper/80 leading-relaxed">
                Adult amateur sides, alumni squads and corporate-sponsored groups who want stadium days at Camp Nou and the Bernabéu, La Liga matches, a tactical session with a UEFA coach, and a long lunch afterward.
              </p>
            </Link>
            <Link href="/tours/pre-season-stages" className="group block border border-ink/15 p-7 hover:bg-ink hover:text-paper transition-colors">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-ink/55 group-hover:text-paper/65 mb-3">
                Pre-season
              </div>
              <h3 className="font-display text-2xl uppercase leading-tight">
                College &amp; pro <span className="font-display-italic text-gold">pre-season</span>
              </h3>
              <p className="mt-4 text-ink-soft group-hover:text-paper/80 leading-relaxed">
                US college programs and UK clubs running their summer block in Spain. Four to fifteen nights, daily training pitches, recovery facilities, two to four friendlies against age-matched Spanish opposition.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
            Chapter VI · The number
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            What a Spain soccer tour <span className="font-display-italic text-gold">costs</span>.
          </h2>
          <p className="mt-6 max-w-[60ch] text-paper/75 leading-relaxed">
            The first question every coach asks is about the number. We publish ours so you can pitch the trip to a board, an athletic department, or a group of parents without waiting on a quote.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="border border-paper/15 p-7">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-paper/60 mb-3">
                Youth Soccer Spain Tour
              </div>
              <div className="font-display text-3xl md:text-4xl text-paper">
                From <span className="font-display-italic text-gold">$1,400</span>
                <span className="ml-2 text-base text-paper/60 font-mono-editorial tracking-wider uppercase">per player</span>
              </div>
              <p className="mt-4 text-paper/75 leading-relaxed text-[0.97rem]">
                6 to 12 nights through Madrid, Valencia and Barcelona. Training at FC Barcelona, Valencia CF and the Spanish FA. Three friendlies against Spanish academy or amateur sides. One La Liga match. Four-star hotels. Bilingual Odisea guide for the full trip.
              </p>
            </div>
            <div className="border border-paper/15 p-7">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-paper/60 mb-3">
                Tournament Experience
              </div>
              <div className="font-display text-3xl md:text-4xl text-paper">
                <span className="font-display-italic text-gold">Quote</span>
                <span className="ml-2 text-base text-paper/60 font-mono-editorial tracking-wider uppercase">per group</span>
              </div>
              <p className="mt-4 text-paper/75 leading-relaxed text-[0.97rem]">
                Donosti Cup in San Sebastián. 10 nights, group stage through finals, opening and closing ceremonies, plus a preparation match at FC Barcelona's Joan Gamper. Priced per group based on size and accommodation tier.
              </p>
            </div>
            <div className="border border-paper/15 p-7">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-paper/60 mb-3">
                European Soccer Pilgrimages
              </div>
              <div className="font-display text-3xl md:text-4xl text-paper">
                <span className="font-display-italic text-gold">6–10</span>
                <span className="ml-2 text-base text-paper/60 font-mono-editorial tracking-wider uppercase">nights · adult</span>
              </div>
              <p className="mt-4 text-paper/75 leading-relaxed text-[0.97rem]">
                Adult amateur and veterans groups, 12 to 60 travellers. Stadium tours at Camp Nou and Bernabéu, La Liga match tickets by category, a tactical session with a UEFA coach, four-star lodging within walking distance of each stadium.
              </p>
            </div>
            <div className="border border-paper/15 p-7">
              <div className="font-mono-editorial text-[0.58rem] tracking-[0.26em] uppercase text-paper/60 mb-3">
                Pre-Season Stages
              </div>
              <div className="font-display text-3xl md:text-4xl text-paper">
                <span className="font-display-italic text-gold">4–15</span>
                <span className="ml-2 text-base text-paper/60 font-mono-editorial tracking-wider uppercase">nights · full board</span>
              </div>
              <p className="mt-4 text-paper/75 leading-relaxed text-[0.97rem]">
                College programs and UK clubs. Pick the base city (Madrid, Valencia, Barcelona or Málaga), pick the length, pick full or half board. Daily training pitches, friendlies, recovery facilities. Priced by length and squad size.
              </p>
            </div>
          </div>

          <p className="mt-10 text-paper/70 leading-relaxed text-[0.95rem] max-w-[68ch]">
            Deposit of $500 per player at booking, balance due 60 days before departure. Once the deposit is paid, the per-player price is locked in. International flights are not included in any package so each club can use its preferred airline or group flight desk.
          </p>
        </div>
      </section>

      {/* HOW IT COMES TOGETHER */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-4">
              Chapter VII
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              How a tour <span className="font-display-italic text-gold">comes together</span>.
            </h2>
          </div>
          <ol className="md:col-span-8 space-y-6 text-ink-soft leading-relaxed text-lg max-w-[60ch]">
            <li>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-2">Step I · Discovery call</div>
              <p>
                Thirty minutes with one of our planners. Squad size, age, desired cities, budget per player, travel window, dietary needs. We map what is actually possible in your window.
              </p>
            </li>
            <li>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-2">Step II · First draft</div>
              <p>
                A complete itinerary inside seven days. Hotels named, training facilities named, friendly opposition profile defined, pricing locked. You see exactly what each day looks like before you take it to the board.
              </p>
            </li>
            <li>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-2">Step III · Contract &amp; deposit</div>
              <p>
                Standard $500 per player deposit, deposit secures the dates and training-facility access. From this point the per-player price is locked. Balance falls due 60 days before departure.
              </p>
            </li>
            <li>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-2">Step IV · Planning kickoff</div>
              <p>
                Eight to twelve months out for peak summer windows so we can lock training dates with FC Barcelona and Valencia CF. Four to six months is enough for off-peak. Parent rosters, dietary needs and passport copies get collected here.
              </p>
            </li>
            <li>
              <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-2">Step V · Day one</div>
              <p>
                A bilingual Odisea guide meets the group at the airport. They stay with the squad from pickup through farewell, every day of the tour. The team coaches coach. We handle everything else.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* GROUND LOGISTICS (existing component) */}
      <GroundLogistics audience="your soccer program" termFor="soccer" variant="ink" />

      {/* WHY ODISEA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            Chapter VIII · The operator
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Why groups choose <span className="font-display-italic text-gold">Odisea Tours</span>.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="border border-ink/15 p-7">
              <div className="font-display text-4xl text-gold-deep">2005</div>
              <div className="mt-3 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55">Founded</div>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                Twenty years building soccer tours in Spain. Long enough that the academy directors and federation contacts we work with came up through the system together.
              </p>
            </div>
            <div className="border border-ink/15 p-7">
              <div className="font-display text-4xl text-gold-deep">100%</div>
              <div className="mt-3 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55">Spanish-staffed ground operation</div>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                Every guide, driver and on-ground coordinator is Spanish or based in Spain. Bilingual end-to-end. No outsourcing.
              </p>
            </div>
            <div className="border border-ink/15 p-7">
              <div className="font-display text-4xl text-gold-deep">24 / 7</div>
              <div className="mt-3 font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55">Emergency phone</div>
              <p className="mt-4 text-ink-soft leading-relaxed text-[0.97rem]">
                A real person on the line whenever the group is in Spain. Group travel insurance covering medical and incident response is included in every package.
              </p>
            </div>
          </div>

          <p className="mt-10 text-ink-soft leading-relaxed max-w-[64ch]">
            Operator licensing and insurance documentation available on request. Our team is on the <Link href="/team" className="underline underline-offset-4 hover:text-gold-deep">team page</Link>, with first names, photos and what each person actually does on a tour.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/60 mb-6">
            Chapter IX · Frequently asked
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Questions coaches ask <span className="font-display-italic text-gold">before booking</span>.
          </h2>

          <div className="mt-12 divide-y divide-paper/15">
            {faqItems.map((f) => (
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
        title="Field notes on soccer tours"
        italicTail="in Spain."
        intro="Long-form pieces written for the coaches, directors and athletic departments planning their first or fifth Spain tour. Cost, timing, academies worth visiting, friendlies, what parents actually ask."
        slugs={[
          "spain-soccer-tour-day-by-day",
          "youth-soccer-tours-to-spain-complete-guide",
          "what-a-youth-soccer-tour-to-spain-costs",
          "real-madrid-or-fc-barcelona-which-stadium-visit",
          "arranging-friendly-matches-against-spanish-youth-clubs",
          "best-time-of-year-for-a-youth-soccer-tour-to-spain",
          "training-spanish-fa-rfef-football-tour-experience",
        ]}
      />

      {/* SISTER PUBLICATION · reciprocal deep links to The Spanish Football Desk */}
      <section className="paper-texture border-t border-ink/10 py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            From our newsroom · The Spanish Football Desk
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[28ch]">
            The coach&apos;s <span className="font-display-italic text-gold">planning library</span>.
          </h2>
          <p className="mt-6 max-w-[60ch] text-ink-soft leading-relaxed text-lg">
            We publish The Spanish Football Desk, an English-language read on Spanish football written for US coaches. Its
            free guides answer the questions coaches ask before a tour, from budget to academy access.
          </p>
          <ul className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-4">
            {[
              ["What a youth soccer tour to Spain really costs", "cost-to-take-us-youth-team-on-tour-to-spain"],
              ["When to take your team: a coach's calendar", "best-time-of-year-youth-soccer-tour-spain"],
              ["The best cities in Spain for a youth tour", "best-cities-in-spain-for-a-youth-soccer-tour"],
              ["How to arrange friendlies against Spanish clubs", "arranging-friendly-matches-spanish-clubs-us-coaches"],
              ["Visiting La Masia and Spain's top academies", "visiting-la-masia-spanish-academies-team-tour-guide"],
            ].map(([title, slug]) => (
              <li key={slug} className="border-t border-ink/15 pt-3">
                <a
                  href={`https://spanishfootballdesk.com/${slug}?utm_source=odisea-tours&utm_medium=pillar&utm_campaign=soccer-tours-spain`}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-start justify-between gap-4 font-display uppercase text-base md:text-lg leading-snug hover:text-gold transition-colors"
                >
                  <span>{title}</span>
                  <span className="text-gold shrink-0" aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a
              href="https://spanishfootballdesk.com/coaches?utm_source=odisea-tours&utm_medium=pillar&utm_campaign=soccer-tours-spain"
              target="_blank"
              rel="noopener"
              className="btn-editorial"
            >
              Browse all coach guides
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6 justify-center">
            <span>Step one</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[22ch] mx-auto">
            Plan your Spain <span className="font-display-italic text-gold">soccer tour</span>.
          </h2>
          <p className="mt-6 max-w-[58ch] mx-auto text-ink-soft leading-relaxed text-lg">
            Tell us your squad size, age group, home city and the window you are looking at. We come back with a draft itinerary and a per-player number inside seven days.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">
              Plan your tour
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-editorial">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
