import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/corporate-retreats`;

export const metadata: Metadata = {
  title: { absolute: "Corporate Retreats in Spain · Company Offsites & Team Building | Odisea Tours" },
  description:
    "Corporate retreats, company offsites and team-building trips in Spain, run end to end by a Spanish team on the ground since 2005. Venues in Madrid, Barcelona, Valencia, La Rioja and the Basque Country for groups of 8 to 120. Venue scouting, AV and translation, transfers and an on-site producer, with full budget transparency.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Corporate Retreats in Spain | Odisea Tours · Since 2005",
    description:
      "Company offsites and team-building retreats in Spain for groups of 8 to 120. Venues in Madrid, Barcelona, Valencia and La Rioja, handled end to end by a Spanish team on the ground.",
    url: CANONICAL,
    type: "website",
    images: [
      {
        url: "/photos/it-monastery-cloister.jpg",
        width: 1200,
        height: 630,
        alt: "A restored monastery cloister in Spain used as a corporate retreat venue by Odisea Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Retreats in Spain | Odisea Tours",
    description:
      "Company offsites and team-building retreats in Spain for groups of 8 to 120. Handled end to end since 2005.",
    images: ["/photos/it-monastery-cloister.jpg"],
  },
};

const HANDLED = [
  { t: "Venue scouting and contracting", d: "We find and contract the right venue for your group size and tone, from a restored monastery to a design hotel or a private winery estate. You approve, we sign." },
  { t: "AV, translation and stage build", d: "Full production for the working sessions: AV, simultaneous translation, stage and set build, so the offsite runs like a conference when it needs to." },
  { t: "Team-building programming", d: "Cooking classes, winery harvest days, sailing, guided hikes and city challenges, matched to the seniority and energy of the group." },
  { t: "Transfers and ground logistics", d: "Executive transfers, group coaches and private rail cars. Airport to venue to dinner, all timed and held invisible so nobody is left waiting." },
  { t: "On-site producer, 24/7", d: "A dedicated Odisea producer on the ground for the whole program, with 24/7 incident response. One contact, every detail handled." },
  { t: "Full budget transparency", d: "Itemised vendor reporting and a transparent budget. You see what each line costs. No hidden margin buried in a package price." },
];

const VENUES = [
  { city: "Madrid", note: "The connectivity choice: direct long-haul flights, fast onward rail, historic five-star hotels and private palacio venues. Best for leadership offsites and kickoffs that need easy arrival from abroad.", href: "/destinations/madrid" },
  { city: "Barcelona", note: "Design hotels, the sea and the Collserola hills within reach, and a creative backdrop for product and brand teams. Best for offsites that want energy and a city to spill into after hours.", href: "/destinations/barcelona" },
  { city: "Valencia", note: "The value option without the compromise: beach, sailing, the City of Arts and Sciences and a compact, walkable center. Best for larger company retreats and team-building-led programs.", href: "/destinations/valencia" },
  { city: "La Rioja & the Basque Country", note: "Restored monasteries, working wineries and the San Sebastián Michelin scene. Best for senior teams and board retreats that want to think somewhere quiet and eat extremely well.", href: "/plan-your-tour" },
];

const FORMATS = [
  { name: "Leadership offsite", size: "8 to 20", body: "Three to four nights for an exec or board team. A quiet venue, focused working sessions, and one or two shared experiences that build trust without a ropes course." },
  { name: "Department kickoff", size: "20 to 60", body: "Four to five nights blending strategy sessions with team-building and a city to explore. The format most company offsites land on." },
  { name: "Full company retreat", size: "60 to 120", body: "A larger production: plenary sessions with full AV and translation, breakout tracks, an evening event and a team-building day across multiple groups." },
];

const FAQ = [
  {
    q: "How much does a corporate retreat in Spain cost?",
    a: "A corporate retreat in Spain is quoted per group, not per person off a price list, because the number depends on group size (8 to 120), length (3 to 6 nights), city, venue tier and the programming you choose. Odisea Tours sends a costed proposal within 48 hours of a short planning call, with itemised vendor reporting and full budget transparency, so you see what each line costs rather than a single packaged figure with hidden margin.",
  },
  {
    q: "Where are the best venues for a company retreat in Spain?",
    a: "It depends on the group. Madrid is the connectivity choice, with direct long-haul flights and historic five-star and private palacio venues. Barcelona suits creative teams that want design hotels and city energy. Valencia is the value option with beach, sailing and a walkable center, and works well for larger groups. La Rioja and the Basque Country offer restored monasteries, working wineries and the San Sebastián Michelin scene for senior teams and board retreats. Odisea Tours scouts and contracts the venue for you in whichever region fits.",
  },
  {
    q: "Can you organize a company offsite or team-building retreat in Spain end to end?",
    a: "Yes. Odisea Tours handles the whole offsite on the ground: venue scouting and contracting, AV, simultaneous translation and stage build for the working sessions, team-building programming, executive transfers and group coaches, an on-site producer for the full program and 24/7 incident response. The organizer has one contact and never has to manage Spanish vendors directly.",
  },
  {
    q: "How large a group can you handle for a corporate retreat?",
    a: "From 8 to 120. That spans a small executive or board offsite, a department kickoff of 20 to 60, and a full company retreat of 60 to 120 with plenary sessions, breakout tracks and an evening event. The production scales to the group while the single point of contact does not change.",
  },
  {
    q: "What team-building activities do you run in Spain?",
    a: "Cooking classes, winery harvest days in La Rioja, sailing in Valencia or the Bay of Biscay, guided hikes, and city challenges through the old quarters. For senior teams we lean toward quieter formats built around wine, gastronomy and wellness. Every activity is matched to the seniority and energy of the group rather than dropped in from a catalogue.",
  },
  {
    q: "Do you run corporate retreats for companies based outside Spain?",
    a: "Yes. Most corporate clients are companies based in the United States, the United Kingdom and across Europe. Odisea Tours is a Spanish destination management company whose team has run everything on the ground since 2005, which means the organizer abroad gets a single point of contact and never has to source or manage local venues, transport or production vendors.",
  },
  {
    q: "How far in advance should we book a company retreat in Spain?",
    a: "Three to four months is comfortable for the peak windows of May to June and September to October, when the best venues book out earliest. Shorter lead times are workable, and we hold venues quickly once dates are confirmed. Start with a planning call and we will tell you honestly what is still available for your window.",
  },
];

export default function CorporateRetreatsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Corporate Retreats in Spain", item: CANONICAL },
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
    name: "Corporate Retreats in Spain",
    description:
      "Corporate retreats, company offsites and team-building trips in Spain for groups of 8 to 120, run end to end by Odisea Tours. Venues in Madrid, Barcelona, Valencia, La Rioja and the Basque Country.",
    touristType: [
      "Corporate leadership teams",
      "Company departments and kickoffs",
      "Board and executive offsites",
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
      { "@type": "City", name: "Barcelona" },
      { "@type": "City", name: "Valencia" },
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
            src="/photos/it-monastery-cloister.jpg"
            alt="A restored monastery cloister in Spain used as a corporate retreat venue by Odisea Tours"
            fill
            priority
            sizes="100vw"
            className="object-cover kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/25 to-ink/90" />
        </div>
        <div className="relative z-10 max-w-[1100px] mx-auto w-full">
          <nav aria-label="Breadcrumb" className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <Link href="/" className="hover:text-gold">Odisea Tours</Link>
            <span className="mx-2">/</span>
            <span className="text-paper/50">Corporate Retreats in Spain</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Company offsites &amp; team building · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Corporate Retreats <span className="font-display-italic text-gold">in Spain</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            Off-sites that do not feel like off-sites. Your team plans next year from a restored monastery in La Rioja or a design hotel in Barcelona, breaks bread with the winemaker, and comes home actually energised. Our team has run company retreats in Spain since 2005, end to end, for teams of 8 to 120 from the US, UK and across Europe.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan your company retreat
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/tours/corporate-retreats" className="btn-editorial on-dark">
              See the retreat in detail
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SPAIN */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-4">
              01 / Why Spain
            </div>
            <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05]">
              The case against the <span className="font-display-italic text-gold-deep">conference hotel</span>.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-ink-soft leading-relaxed text-[1.05rem]">
            <p>
              A generic conference hotel gives you a windowless room and a coffee urn. Spain gives you a reason for the team to be there. Direct long-haul flights into Madrid and Barcelona, a climate that cooperates from spring through autumn, world-class food at every budget tier, and venues with actual character, from Rioja wineries to Basque monasteries to Mediterranean design hotels.
            </p>
            <p>
              The value maths works too. A retreat in Valencia or La Rioja typically lands below the equivalent in London, Paris or a US resort town, while the experience reads as more memorable. And because Odisea Tours is a Spanish company running everything on the ground, the organizer abroad gets one contact and never has to source a Spanish venue, coach company or AV vendor.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE HANDLE */}
      <section className="bg-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            02 / What we handle
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[24ch]">
            Every detail held <span className="font-display-italic text-gold-deep">invisible</span>, so your people can think.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HANDLED.map((h) => (
              <div key={h.t} className="border border-ink/15 p-7">
                <h3 className="font-display text-lg uppercase leading-tight">{h.t}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed text-[0.97rem]">{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUES BY REGION */}
      <section className="bg-ink text-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            03 / Where to hold it
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[22ch]">
            Four regions, <span className="font-display-italic text-gold">four very different offsites</span>.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {VENUES.map((v) => (
              <Link key={v.city} href={v.href} className="group block border border-paper/15 p-7 hover:bg-paper hover:text-ink transition-colors">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-paper/60 group-hover:text-ink/55 mb-3">
                  Retreat venue
                </div>
                <h3 className="font-display text-2xl uppercase">{v.city}</h3>
                <p className="mt-4 text-paper/80 group-hover:text-ink-soft leading-relaxed text-[0.97rem]">{v.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="paper-texture py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6">
            04 / Formats that work
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] uppercase leading-[1.05] max-w-[22ch]">
            From a board offsite to a <span className="font-display-italic text-gold-deep">full company kickoff</span>.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {FORMATS.map((f) => (
              <div key={f.name} className="border border-ink/15 p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.26em] uppercase text-ink/55 mb-3">
                  {f.size} people · 3 to 6 nights
                </div>
                <h3 className="font-display text-xl uppercase leading-tight">{f.name}</h3>
                <p className="mt-4 text-ink-soft leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-paper py-20 md:py-24 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            05 / Questions organizers ask
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] uppercase leading-[1.05] max-w-[22ch]">
            Planning a company retreat, <span className="font-display-italic text-gold">answered</span>.
          </h2>
          <div className="mt-12 divide-y divide-paper/15">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                  <h3 className="font-display text-lg md:text-xl uppercase leading-snug">{f.q}</h3>
                  <span className="font-mono-editorial text-2xl text-gold transition-transform group-open:rotate-45 shrink-0" aria-hidden>+</span>
                </summary>
                <p className="mt-4 text-paper/80 leading-relaxed max-w-[68ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink/55 mb-6 justify-center">
            <span>Step one</span>
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3.2rem)] uppercase leading-[1.05] max-w-[22ch] mx-auto">
            Tell us the team and the goal. <span className="font-display-italic text-gold-deep">We cost it in 48 hours.</span>
          </h2>
          <p className="mt-6 max-w-[56ch] mx-auto text-ink-soft leading-relaxed">
            Group size, the dates you are eyeing, and what the retreat is for. We come back with a venue shortlist, a draft program and a transparent, itemised budget.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">Plan your company retreat</Link>
            <Link href="/contact" className="btn-editorial">Talk to us</Link>
          </div>
        </div>
      </section>

      <JournalLinks
        title="Reading for"
        italicTail="retreat organizers."
        slugs={["corporate-team-building-retreats-spain", "how-to-plan-a-group-trip-to-spain"]}
      />
    </main>
  );
}
