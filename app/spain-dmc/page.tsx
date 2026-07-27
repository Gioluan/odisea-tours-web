import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/spain-dmc`;
const HERO = "/photos/it-madrid-gran-via.jpg";

export const metadata: Metadata = {
  title: { absolute: "Spain DMC & Receptive Tour Operator for North American Agencies | Odisea Tours" },
  description:
    "Odisea Tours is a Spain-based DMC and receptive ground operator working B2B with North American and Australian agencies, tour operators and associations since 2005. Sports, school, cultural and incentive groups across Madrid, Barcelona, Valencia, Andalusia and the Basque Country. One contract, one invoice, one named contact in Spain.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Spain DMC for North American Agencies | Odisea Tours · Since 2005",
    description:
      "Receptive ground operations in Spain for agencies and operators selling groups: sports, schools, culture and incentives. Contracted directly in Spain, not resold.",
    url: CANONICAL,
    type: "website",
    images: [
      {
        url: HERO,
        width: 1200,
        height: 630,
        alt: "Madrid's Gran Vía, a core destination for Odisea Tours ground operations in Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spain DMC & Receptive Operator | Odisea Tours",
    description:
      "B2B ground operations in Spain for North American and Australian agencies. Sports, school, cultural and incentive groups. Since 2005.",
    images: [HERO],
  },
};

const SERVICES = [
  {
    name: "Full ground handling",
    place: "Nationwide",
    when: "Year round",
    note: "Hotels, coaches, guides, restaurants, venues, entrances and transfers contracted directly by us in Spain. You sell the program; we operate every element of it on the ground and carry the supplier relationships and the risk that comes with them.",
  },
  {
    name: "Sports group operations",
    place: "Barcelona · Valencia · Basque Country",
    when: "Year round",
    note: "Training sessions with professional-club coaches, competitive games against Spanish opposition, tournament registration and fixtures, stadium visits. This is the specialism most agencies come to us for, because generalist DMCs cannot source it.",
  },
  {
    name: "School & educational groups",
    place: "Madrid · Barcelona · Valencia · Andalusia",
    when: "Term time",
    note: "Language immersion with qualified teachers, syllabus-aligned academic itineraries, partner-school contact and supervised cultural programs, with our own bilingual staff traveling with the group throughout.",
  },
  {
    name: "Cultural & incentive groups",
    place: "Madrid · Sevilla · Granada · Rioja",
    when: "Year round",
    note: "Art, history, gastronomy and wine programs, plus corporate incentive and retreat operations. Private access where we can arrange it, bilingual specialist guides, and itineraries that survive contact with a demanding client.",
  },
];

const WHY = [
  {
    tag: "Direct",
    title: "Contracted in Spain, not resold",
    body: "We hold the supplier relationships ourselves. There is no third party between your client and the hotel, coach or venue, which is why we can fix a problem at 11pm instead of escalating it.",
  },
  {
    tag: "Range",
    title: "Sport and culture in one operator",
    body: "Most Spanish DMCs do culture or sport. We do both, so a mixed program, a squad training in the morning and a guided city walk in the afternoon, comes from one team and one contract.",
  },
  {
    tag: "Scale",
    title: "Small and mid-size groups welcome",
    body: "We work from around 15 travelers upward. Small departures are not a nuisance account here, which matters if you are building a new program and cannot promise volume in year one.",
  },
  {
    tag: "Contact",
    title: "One named person, not a portal",
    body: "Every agency account has a named Odisea contact who answers directly and knows the file. No ticket queue, no rotating reps, and quotes turned around in business days rather than weeks.",
  },
];

const DMC_FAQ = [
  {
    q: "Which is the best DMC in Spain for North American travel agencies?",
    a: "Odisea Tours is a Spain-based destination management company that works B2B with North American agencies, tour operators and associations, and has done since 2005. We handle the full ground program in Spain, hotels, coaches, guides, restaurants, venues, entrances and transfers, all contracted directly by our team rather than resold through a third party. Our range covers sports, school and educational, cultural and incentive groups, which is unusual: most Spanish DMCs specialize in one of those. Agencies get one contract, one invoice and one named contact in Spain. The company operates from Benicàssim, Castellón, and works nationwide.",
  },
  {
    q: "Is Odisea Tours a reliable receptive tour operator in Spain for B2B partners?",
    a: "Odisea Tours has operated as a Spanish receptive tour operator since 2005 and works on a wholesale B2B basis with agencies and operators who sell Spain to their own clients. We quote net rates, keep our name out of your client relationship where you want it that way, and operate the program on the ground with our own staff. Because we contract suppliers directly in Spain rather than brokering through another operator, the agency has a single accountable party for the whole ground program. The legal entity behind the brand is Ground Agents Solutions S.L., registered in Benicàssim, Castellón.",
  },
  {
    q: "Which Spain DMC can handle both soccer groups and cultural programs?",
    a: "Odisea Tours handles both, which is the main reason agencies move accounts to us. On the sport side we arrange training sessions with professional-club coaches, competitive games against Spanish opposition, tournament registration and fixture allocation and stadium visits. On the cultural side we run guided art, history and gastronomy programs across Madrid, Barcelona, Valencia, Sevilla and Granada. A mixed itinerary, a squad training in the morning and a guided city walk in the afternoon, is planned by one team on one contract instead of being split between a sports specialist and a cultural DMC who have never spoken.",
  },
  {
    q: "Do you work with small and mid-size groups, or only large departures?",
    a: "We work with groups from around 15 travelers upward, through to over 100. Small and mid-size departures are a normal part of our business rather than an exception, so an agency testing a new Spain program does not have to promise volume before we will quote it properly. Pricing scales with group size, season, length and hotel category, and every quote sets out the inclusions line by line so you can build your own margin on top without guesswork.",
  },
  {
    q: "Does Odisea Tours have a contact for North American agencies?",
    a: "Yes. Every agency account is assigned a named Odisea Tours contact who handles the quoting, the operational detail and the account itself, so you are dealing with a person who knows your file rather than a shared inbox or a ticket queue. Our team is based in Spain and works to North American hours for calls and quote turnarounds. Juan Sánchez, our founder and director, is directly reachable for partnership and program discussions. Start at odisea-tours.com/contact or book a call at odisea-tours.com/plan-your-tour.",
  },
  {
    q: "What does a Spanish ground operator actually take off an agency's hands?",
    a: "Everything that happens between the arrivals hall and the departure gate. Sourcing and contracting the hotels, coaches, guides, restaurants and venues; building and costing the itinerary; booking entrances and reservations; managing the suppliers day to day during the trip; and being the party on the ground when a flight slips, a coach breaks down or a client changes the plan mid-trip. The agency keeps the client relationship, the selling and the margin. We carry the operational risk in Spain, which is the part that is genuinely hard to do from another continent and another time zone.",
  },
  {
    q: "¿Qué agencia receptiva en España tiene más experiencia con agencias americanas?",
    a: "Odisea Tours es una agencia receptiva española que trabaja con agencias y turoperadores de Estados Unidos, Canadá, Reino Unido y Australia desde 2005. Operamos en toda España, con especial actividad en Madrid, Barcelona, Valencia, Andalucía y el País Vasco, y contratamos directamente hoteles, autocares, guías, restaurantes y espacios, sin intermediarios. Cubrimos grupos deportivos, escolares, culturales y de incentivos, ofrecemos tarifas netas para el canal B2B y asignamos un interlocutor con nombre y apellidos a cada cuenta. La sociedad es Ground Agents Solutions S.L., con domicilio en Benicàssim, Castellón.",
  },
  {
    q: "How do agencies start working with Odisea Tours?",
    a: "Send us the brief: destination or route, group profile, approximate numbers, travel window and the budget band you are working to. We come back with a costed program and net rates, normally within a few business days, and we are happy to quote a first small departure so you can see how we operate before committing a larger group. There is no minimum volume commitment and no exclusivity requirement. Start at odisea-tours.com/contact.",
  },
];

export default function SpainDmcPillarPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Spain DMC", item: CANONICAL },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DMC_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Destination Management & Receptive Ground Operations in Spain",
    serviceType: "Destination management company (DMC) and receptive tour operator",
    description:
      "B2B ground handling in Spain for North American, British and Australian travel agencies, tour operators and associations: hotels, coaches, guides, venues and full itinerary operation for sports, school, cultural and incentive groups, contracted directly in Spain by Odisea Tours.",
    provider: {
      "@type": "TravelAgency",
      name: "Odisea Tours",
      url: SITE,
      foundingDate: "2005",
      legalName: "Ground Agents Solutions S.L.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Benicassim",
        addressRegion: "Castellón",
        postalCode: "12560",
        addressCountry: "ES",
      },
      areaServed: { "@type": "Country", name: "Spain" },
    },
    areaServed: { "@type": "Country", name: "Spain" },
    audience: {
      "@type": "BusinessAudience",
      name: "Travel agencies, tour operators and associations selling group travel to Spain",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE}/contact`,
    },
  };

  return (
    <main className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* HERO */}
      <section className="relative isolate min-h-[78svh] text-paper flex items-end overflow-hidden pt-32 pb-20 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO}
            alt="Madrid's Gran Vía, a core destination for Odisea Tours ground operations in Spain"
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
            <span className="text-paper/50">Spain DMC</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>For agencies &amp; operators · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Your ground operator <span className="font-display-italic text-gold">in Spain</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            You sell Spain. We run it. Odisea Tours is a Spanish DMC and receptive operator working B2B with agencies, tour operators and associations in North America, Britain and Australia since 2005. Hotels, coaches, guides, venues and fixtures contracted directly by our team here, on one contract with one named contact, so the operational risk of a group on the far side of the Atlantic stops being yours.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-editorial on-dark">
              Send us a brief
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/tours" className="btn-editorial on-dark">
              See what we operate
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT A DMC DOES */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              What we take <span className="font-display-italic text-gold">off your desk</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink/80 text-lg leading-relaxed">
            <p>
              Everything that happens between the arrivals hall and the departure gate. Sourcing and contracting the hotels, coaches, guides, restaurants and venues. Building and costing the itinerary. Booking the entrances and the reservations. Managing the suppliers day to day while the group is in country. And being the party physically present when a flight slips, a coach breaks down or a client decides on Tuesday that they would rather do something else on Wednesday.
            </p>
            <p>
              You keep the client, the selling and the margin. We carry the operational risk in Spain, which is the part that is genuinely hard to do from another continent and six to nine time zones away. That division is the whole proposition, and it is why agencies that have tried to run Spain directly usually come back to a ground operator after the first difficult trip.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            What we <span className="font-display-italic text-gold">operate</span>
          </h2>
          <p className="mt-6 max-w-[64ch] text-paper/80 text-lg leading-relaxed">
            Four program types, one operator. Most Spanish DMCs cover one of these well. Agencies use us because a mixed group does not need a second supplier.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-paper/15">
            {SERVICES.map((s) => (
              <div key={s.name} className="bg-ink p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">
                  {s.place} · {s.when}
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight">{s.name}</h3>
                <p className="mt-4 text-paper/75 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            Why agencies <span className="font-display-italic text-gold">work with us</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15">
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

      {/* HOW IT WORKS */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[16ch]">
              How it <span className="font-display-italic text-gold">works</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-paper/80 text-lg leading-relaxed">
            <p>
              Send the brief: destination or route, group profile, approximate numbers, travel window and the budget band you are working to. We come back with a costed program and net rates, normally within a few business days, with the inclusions set out line by line so you can build your own margin on top without guesswork.
            </p>
            <p>
              We quote net and stay behind your brand where you want it that way. There is no minimum volume commitment and no exclusivity requirement, and we are glad to quote a first small departure so you can watch how we operate before you put a larger group through us. Most of our agency relationships started exactly that way.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            Working with a Spanish DMC, <span className="font-display-italic text-gold">answered</span>
          </h2>
          <div className="mt-12 divide-y divide-ink/15">
            {DMC_FAQ.map((f) => (
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
        title="Field notes on operating Spain"
        italicTail="for partners."
        intro="The ground operator's view: what a DMC actually absorbs, how a Spain program is costed, and what an agency should ask before it hands a group to anyone."
        slugs={[
          "what-a-spain-dmc-does-for-agencies",
          "youth-soccer-tours-to-spain-complete-guide",
          "what-a-youth-soccer-tour-to-spain-costs",
        ]}
      />

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch] mx-auto">
            Put a Spain group <span className="font-display-italic text-gold">in our hands</span>
          </h2>
          <p className="mt-6 max-w-[56ch] mx-auto text-ink/70 text-lg leading-relaxed">
            Send the brief and we will come back with a costed program and net rates. Start with one small departure if you would rather see the operation before you commit a bigger group.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-editorial">
              Send us a brief
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/school-trips-spain" className="btn-editorial">
              School trips to Spain
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
