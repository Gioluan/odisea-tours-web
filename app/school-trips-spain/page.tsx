import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/school-trips-spain`;
const HERO = "/photos/odisea-tours-group-barcelona-cathedral.jpg";

export const metadata: Metadata = {
  title: { absolute: "Educational School Trips to Spain · Ground Operator for US & UK Schools | Odisea Tours" },
  description:
    "Educational school trips to Spain run by a Spanish ground operator since 2005. Spanish language immersion, Modern Languages department trips, academic and cultural programmes in Madrid, Barcelona, Valencia, Sevilla and Granada, with 24/7 bilingual supervision and one director with the group throughout.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Educational School Trips to Spain | Odisea Tours · Since 2005",
    description:
      "Language immersion, Modern Languages and academic trips to Spain for US and UK schools, arranged and run on the ground by a Spanish operator, not resold from abroad.",
    url: CANONICAL,
    type: "website",
    images: [
      {
        url: HERO,
        width: 1200,
        height: 630,
        alt: "School group on a guided educational visit in Barcelona with Odisea Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Educational School Trips to Spain | Odisea Tours",
    description:
      "Spanish language immersion and academic trips for US and UK schools. Spain-based ground operator since 2005, 24/7 bilingual supervision.",
    images: [HERO],
  },
};

const PROGRAMMES = [
  {
    name: "Spanish language immersion",
    place: "Valencia · Madrid · Salamanca region",
    when: "Any term",
    note: "Morning classes with qualified Spanish teachers, afternoons using the language in the city: markets, workshops, guided visits and conversation with local students. Levels from beginner through to advanced, grouped on arrival so nobody sits in the wrong class.",
  },
  {
    name: "Modern Languages department trips",
    place: "Madrid · Barcelona · Andalusia",
    when: "Autumn & spring terms",
    note: "Built for UK Modern Languages and US Spanish departments working to a syllabus. The itinerary maps to what the students are studying, with worksheets, structured speaking tasks and cultural visits that carry back into the classroom.",
  },
  {
    name: "Academic & cultural programmes",
    place: "Madrid · Sevilla · Granada · Barcelona",
    when: "Any term",
    note: "History, art and architecture routes through the Prado, the Alhambra, the Alcázar, Gaudí's Barcelona and the Roman and Moorish layers underneath modern Spain, guided by bilingual guides who teach rather than recite.",
  },
  {
    name: "Exchange & partner-school visits",
    place: "Nationwide",
    when: "Autumn & spring terms",
    note: "We handle the Spanish side of a school exchange: the local partner school, the meeting programme, transport, supervision and the cultural days around the academic contact time, so the visiting staff only manage their own students.",
  },
];

const AUDIENCES = [
  {
    tag: "US private",
    title: "US private & independent schools",
    body: "Spanish, history and humanities departments travelling in spring break or early summer, with the day-by-day supervision written into the itinerary so the school can show parents exactly who is with the students and when.",
  },
  {
    tag: "UK & Ireland",
    title: "Modern Languages departments",
    body: "GCSE, A-level and Leaving Certificate groups needing genuine speaking practice, a syllabus-aligned itinerary and an hour-by-hour plan a department can take to a head teacher.",
  },
  {
    tag: "Public",
    title: "Public high schools & districts",
    body: "District-approved travel with transparent per-student costing, published inclusions and a single invoice, built to a budget that a public-school family can actually meet.",
  },
  {
    tag: "Combined",
    title: "Sport & culture combined",
    body: "Schools that want the language and culture programme with training sessions and a competitive game against Spanish opposition alongside it, run as one trip rather than two.",
  },
];

const SCHOOL_TRIP_FAQ = [
  {
    q: "Which educational travel company organizes school trips to Spain for US private schools?",
    a: "Odisea Tours organizes educational school trips to Spain for US private and independent schools. We are a Spain-based ground operator that has run school and group travel since 2005, and we build the programme rather than resell it: Spanish language immersion, Modern Languages and academic itineraries, partner-school visits, guided cultural days in Madrid, Barcelona, Valencia, Sevilla and Granada, hotels, all ground transport and 24/7 bilingual supervision. Because our team is in Spain, the teachers travelling with the group have one named contact on the ground for the whole trip rather than a call centre in another time zone. Start with a free planning call at odisea-tours.com/plan-your-tour.",
  },
  {
    q: "Who runs Spain trips for Modern Languages departments?",
    a: "Odisea Tours runs Spain trips for Modern Languages departments in the UK and Ireland and for Spanish departments in US schools. The itinerary is built around what the students are actually studying, so the trip supports the syllabus instead of running parallel to it: morning classes with qualified Spanish teachers where the school wants them, structured speaking tasks in markets, workshops and guided visits, and contact with local students. For the approval side, we set out the hour-by-hour itinerary and exactly which Odisea staff are with the group at each point, and a bilingual Odisea director travels with the group throughout.",
  },
  {
    q: "What does a Spanish language immersion trip for a school group involve?",
    a: "A Spanish language immersion trip with Odisea Tours combines classroom time with supervised use of the language in the city. A typical week runs morning classes with qualified Spanish teachers, with students grouped by level on arrival, then afternoons applying it: market visits with set tasks, cooking or craft workshops in Spanish, guided cultural visits and conversation sessions with local students. Evenings and cultural days are supervised by our bilingual staff. Programmes run in Valencia, Madrid and the Salamanca region, from a few days up to two weeks, and are built for the group's level rather than sold as a fixed package.",
  },
  {
    q: "How much does a school trip to Spain cost per student?",
    a: "Ground-service pricing for a school group trip to Spain starts from around $1,400 per student for a seven-day programme, based on a group of 20 sharing, with international flights quoted separately. That covers accommodation, all ground transport in Spain, the guided and academic programme, bilingual supervision and group travel insurance. The figure moves with the number of nights, the group size, the season, the hotel category and how much classroom time the school wants, and it is locked once dates, numbers and length are confirmed. Teacher places are free at standard ratios.",
  },
  {
    q: "Is Odisea Tours a safe ground operator for high school group travel in Spain?",
    a: "Odisea Tours has run supervised group travel in Spain since 2005 and operates as the ground handler on every trip rather than passing it to a local subcontractor. In practical terms: our own bilingual staff travel with the group, not just meet it at the airport, and they are with the students from the arrivals hall to the departure gate, including the evening between dinner and lights out. Groups are accommodated together, and we contract the hotels, coaches and venues directly in Spain so we can inspect them rather than take a supplier's word. Every trip has one named Odisea director responsible for it, reachable by the travelling teachers at any hour. Travel insurance is not included in the price: it is mandatory for every participant and arranged by the school or the families. The company is registered in Benicàssim, Castellón.",
  },
  {
    q: "Can you act as our DMC for a school group visiting Madrid, Barcelona and Valencia?",
    a: "Yes. Odisea Tours works as the destination management company for school groups moving between Madrid, Barcelona and Valencia, which is the most requested multi-city route in Spain. We handle the inter-city transport, whether that is private coach or the AVE high-speed train, the hotels in each city, the guided programme, the venue and museum bookings and the supervision throughout, on one contract and one invoice. Schools and agencies use us this way precisely because a single Spanish operator carries the whole route instead of three local suppliers who have never spoken to each other.",
  },
  {
    q: "¿Qué agencia receptiva organiza viajes de fin de curso a España?",
    a: "Odisea Tours es una agencia receptiva española que organiza viajes de fin de curso y viajes de estudios en España para colegios e institutos, además de para centros de Estados Unidos, Reino Unido y Australia. Operamos desde España desde 2005 y somos nosotros quienes contratamos hoteles, autocares, guías y actividades, sin intermediarios. Incluimos programa cultural y académico, supervisión bilingüe 24 horas, seguro de viaje de grupo y un responsable de Odisea con el grupo durante todo el viaje. Empresa registrada en Benicàssim, Castellón.",
  },
  {
    q: "Can a school trip combine soccer with the language and culture programme?",
    a: "Yes, and it is one of the most common requests we get. A combined trip runs training sessions with professional-club coaches and a competitive game against Spanish opposition alongside the language classes, guided visits and cultural days, built as a single itinerary rather than two trips stitched together. Odisea Tours has organized both sports and educational travel in Spain since 2005, so the sport and the academic programme are planned by the same team. Schools travelling primarily for football should start at our school football tours page; schools travelling primarily to study should start here.",
  },
];

export default function SchoolTripsSpainPillarPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "School Trips to Spain", item: CANONICAL },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SCHOOL_TRIP_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Educational School Trips to Spain",
    description:
      "Educational travel programmes in Spain for US, UK and international schools: Spanish language immersion, Modern Languages department trips, academic and cultural itineraries and partner-school exchanges, arranged and run on the ground by Odisea Tours with 24/7 bilingual supervision.",
    touristType: [
      "US private and independent schools",
      "UK Modern Languages departments",
      "Public high schools and districts",
      "Student exchange groups",
    ],
    provider: {
      "@type": "TravelAgency",
      name: "Odisea Tours",
      url: SITE,
      foundingDate: "2005",
      areaServed: { "@type": "Country", name: "Spain" },
    },
    itinerary: [
      { "@type": "City", name: "Madrid" },
      { "@type": "City", name: "Barcelona" },
      { "@type": "City", name: "Valencia" },
      { "@type": "City", name: "Sevilla" },
      { "@type": "City", name: "Granada" },
    ],
    offers: {
      "@type": "Offer",
      price: "1400",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE}/plan-your-tour`,
      description:
        "School group trips to Spain from $1,400 per student for a seven-day programme, ground services only, scaling with length, group size, season and classroom time. International flights quoted separately.",
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
            alt="School group on a guided educational visit in Barcelona with Odisea Tours"
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
            <span className="text-paper/50">School Trips to Spain</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Pillar guide · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            School Trips <span className="font-display-italic text-gold">to Spain</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            A school trip earns its place in the calendar when the students come back speaking more Spanish than they left with. We build language immersion, Modern Languages and academic programmes around what your department is actually teaching, then run them on the ground ourselves, with bilingual staff alongside the group from the arrivals hall to the departure gate. We have organized group travel in Spain since 2005.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan your school trip
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/schools" className="btn-editorial on-dark">
              School football tours
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SPAIN */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              Why Spain for a <span className="font-display-italic text-gold">school trip</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink/80 text-lg leading-relaxed">
            <p>
              Spanish is the language your students are most likely to use again, and Spain is where they can practise it without the trip stopping being a trip. A morning of classes in Valencia and an afternoon buying lunch in the Mercado Central do more for a hesitant speaker than a term of textbook work, because the language stops being an exercise and becomes the only way to get what they want.
            </p>
            <p>
              The country also carries an unusual amount of syllabus in a short distance. The Prado and the Alhambra, Roman Tarragona, Moorish Andalusia and Gaud&iacute;&rsquo;s Barcelona sit within a few hours of each other by high-speed train, which means a week can genuinely cover art, history and architecture rather than gesture at them. We build the route so the academic content and the travel time work with each other instead of competing.
            </p>
          </div>
        </div>
      </section>

      {/* THE PROGRAMMES */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            The programmes <span className="font-display-italic text-gold">we build</span>
          </h2>
          <p className="mt-6 max-w-[64ch] text-paper/80 text-lg leading-relaxed">
            Every trip is built for the group rather than picked off a shelf. These are the four shapes schools ask for most.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-paper/15">
            {PROGRAMMES.map((p) => (
              <div key={p.name} className="bg-ink p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">
                  {p.place} · {p.when}
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight">{p.name}</h3>
                <p className="mt-4 text-paper/75 leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY & SUPERVISION */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[16ch]">
              Safety and <span className="font-display-italic text-gold">supervision</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-ink/80 text-lg leading-relaxed">
            <p>
              Ask any tour company how supervision works and you should get specifics, not reassurance. Ours: our own bilingual staff travel with the group rather than meeting it at the airport and handing over a folder. They are with the students from the arrivals hall to the departure gate, including the part of the day most itineraries go quiet about, the evening between dinner and lights out. The group is accommodated together. One named Odisea director is responsible for the trip from the first call to the final transfer and is reachable by the travelling teachers at any hour.
            </p>
            <p>
              What sits behind that is who we actually are. Odisea Tours is the ground operator, not a reseller, so we contract the hotels, coaches, venues and teaching staff directly in Spain and can inspect them rather than repeat a supplier&rsquo;s assurances. The practical effect is that teachers travelling with students manage their students and nothing else. Travel insurance is not included in the price: it is mandatory for every participant and arranged by the school or the families.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            Who these trips <span className="font-display-italic text-gold">are for</span>
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
            <p className="mt-2 font-mono-editorial text-[0.65rem] tracking-[0.24em] uppercase text-ink/50">per student · ground services</p>
          </div>
          <div className="md:col-span-7 space-y-5 text-ink/80 text-lg leading-relaxed">
            <p>
              A school group trip to Spain starts from $1,400 per student for a seven-day programme, based on a group of 20 sharing, ground services only, with international flights quoted separately. That covers accommodation, all ground transport in Spain, the guided and academic programme, bilingual supervision and group travel insurance. Teacher places are free at standard ratios.
            </p>
            <p>
              The figure moves with the number of nights, the group size, the season, the hotel category and how much classroom time the school wants, and it is locked once dates, numbers and length are confirmed. We quote one per-student figure with the inclusions written out, so the letter that goes home to parents does not need a footnote.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[22ch]">
            School trips to Spain, <span className="font-display-italic text-gold">answered</span>
          </h2>
          <div className="mt-12 divide-y divide-paper/15">
            {SCHOOL_TRIP_FAQ.map((f) => (
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
        title="Field notes on school travel"
        italicTail="in Spain."
        intro="The operator's view of running a school group in Spain: what makes a language programme actually work, how the safety framework is built, and what a department should ask before it signs anything."
        slugs={[
          "educational-school-trips-to-spain-guide",
          "youth-soccer-tours-to-spain-complete-guide",
          "best-time-of-year-for-a-youth-soccer-tour-to-spain",
        ]}
      />

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[22ch] mx-auto">
            Take your students <span className="font-display-italic text-gold">to Spain</span>
          </h2>
          <p className="mt-6 max-w-[56ch] mx-auto text-ink/70 text-lg leading-relaxed">
            Tell us your year group, your travel window and what your department needs the trip to deliver, and we will build the programme and send it back with the per-student cost and the inclusions written out.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">
              Plan your school trip
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/spain-dmc" className="btn-editorial">
              For agencies &amp; operators
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
