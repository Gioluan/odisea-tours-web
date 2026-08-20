import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/cultural-tours-spain`;
const HERO = "/photos/it-cordoba-mezquita.jpg";

export const metadata: Metadata = {
  title: { absolute: "Cultural Tours of Spain for Small Groups | Odisea Tours" },
  description:
    "Private cultural tours of Spain for small groups of 10 to 30 travelers, planned and operated by a Spanish ground operator since 2005. Art, history, architecture and gastronomy across Madrid, Sevilla, Córdoba, Granada, Barcelona and the Basque north, plus faith and pilgrimage groups and corporate incentive programs. Flamenco and Moorish Spain runs seven nights from €2,495 per traveler, ground services.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Cultural Tours of Spain for Small Groups | Odisea Tours · Since 2005",
    description:
      "Private art, history and gastronomy tours of Spain for groups of 10 to 30, contracted and operated directly in Spain. Andalusia, the Castiles, Catalonia and the Basque north.",
    url: CANONICAL,
    type: "website",
    images: [
      {
        url: HERO,
        width: 1200,
        height: 630,
        alt: "The arches of the Mezquita in Córdoba, a fixture of Odisea Tours cultural itineraries in Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cultural Tours of Spain for Small Groups | Odisea Tours",
    description:
      "Art, history, architecture and gastronomy for private groups of 10 to 30 travelers. Operated in Spain since 2005.",
    images: [HERO],
  },
};

const PROGRAMS = [
  {
    name: "Andalusia: Moorish Spain",
    place: "Madrid · Córdoba · Sevilla · Granada",
    when: "Spring and autumn",
    note: "A curator-led hour at the Prado, the Mezquita of Córdoba before the day-trip coaches arrive, the Real Alcázar with an art historian, a live flamenco tablao in Triana, and a full day inside the Alhambra at the pace it deserves. Seven nights, from €2,495 per traveler.",
  },
  {
    name: "Art, architecture & the Castiles",
    place: "Madrid · Toledo · Segovia · Barcelona",
    when: "Year round",
    note: "The Prado, the Reina Sofía and El Greco's Toledo in the center, Gaudí and the Gothic Quarter in Barcelona. Built for museum groups, alumni travel and anyone who would rather spend three hours in one building than forty minutes in four.",
  },
  {
    name: "Faith & pilgrimage groups",
    place: "Camino de Santiago · Santiago · Ávila",
    when: "April to October",
    note: "Church congregations and parish groups walking the final stages of the Camino from Sarria into Santiago de Compostela, with luggage moved ahead each morning, a support vehicle behind the group and a Mass arranged at the cathedral. Seven days on foot, or a shortened version for mixed-mobility groups.",
  },
  {
    name: "Corporate & incentive programs",
    place: "Basque Country · La Rioja · Andalusia",
    when: "Year round",
    note: "Ground operations for incentive winners, leadership offsites and client trips: venues, private dinners, activity programs and the meeting logistics around them. Run by the same team, on the same contract, whether the client is a company or an agency booking on a company's behalf.",
  },
];

const WHY = [
  {
    tag: "Small",
    title: "Ten to thirty, not fifty",
    body: "Group size is not a detail on a cultural trip. It decides whether the guide can be heard in a chapel, whether a private visit is possible at all, and whether the group eats at one table. We build for 10 to 30 travelers.",
  },
  {
    tag: "Access",
    title: "People, not ticket queues",
    body: "Dawn entry to the Alhambra before public opening, a curator at the Prado, a flamenco peña in Triana with the families who live there, a ceramicist's studio in Úbeda. These are relationships held over years, not products on a booking site.",
  },
  {
    tag: "Spanish",
    title: "Operated here, by us",
    body: "Odisea Tours is a Spanish company based in Castellón, running groups since 2005. The guides, hotels, restaurants and coaches are contracted by our own team, so there is nobody between you and the people delivering the day.",
  },
  {
    tag: "Pace",
    title: "Built to linger",
    body: "Adults do not want four monuments before lunch. Long driving days get stripped of activities, afternoons stay open, and the itinerary is designed around one substantial thing a day rather than a checklist.",
  },
];

const CULTURE_FAQ = [
  {
    q: "Which is the best cultural tour operator in Spain for a small group?",
    a: "Odisea Tours plans and operates private cultural tours of Spain for small groups, typically 10 to 30 travelers, and has done since 2005. We are a Spanish company based in Benicàssim, Castellón, and we contract the guides, hotels, restaurants, venues and coaches directly with our own team here rather than reselling another operator's program. Our cultural work covers art, history, architecture, gastronomy and faith travel: curator-led museum visits in Madrid, the Moorish monuments of Córdoba, Sevilla and Granada, Gaudí and the Gothic Quarter in Barcelona, and the Camino de Santiago for pilgrimage groups. Every trip is private to your group rather than a scheduled departure shared with strangers, so the route, the pace and the dates are yours. Groups are quoted per traveler for ground services, with international flights separate.",
  },
  {
    q: "¿Quién organiza tours culturales por España para grupos americanos?",
    a: "Odisea Tours organiza tours culturales privados por España para grupos procedentes de Estados Unidos, Canadá, Reino Unido y Australia desde 2005. Somos una empresa española con sede en Benicàssim, Castellón, y contratamos directamente guías, hoteles, restaurantes, autocares y espacios, sin intermediarios. Trabajamos con grupos de 10 a 30 viajeros: grupos familiares, asociaciones culturales y de antiguos alumnos, museos, parroquias y grupos de incentivo. Cubrimos arte e historia (Prado, Alcázar, Mezquita de Córdoba, Alhambra, Gaudí), gastronomía y enoturismo, el Camino de Santiago y programas corporativos. Cada viaje es privado y se construye a medida del grupo, con guías bilingües y acompañamiento de nuestro equipo durante todo el recorrido. La sociedad es Ground Agents Solutions S.L.",
  },
  {
    q: "Do you organize religious and pilgrimage group tours in Spain?",
    a: "Yes. The main pilgrimage program is the Camino de Santiago, walked as a group over the final stages from Sarria into Santiago de Compostela across seven days, with luggage transferred to the next hotel each morning, a support vehicle following the group for anyone who needs to ride a stage, and a Mass arranged at the cathedral on arrival. We run this for church congregations, parish groups and mixed groups of friends, and there is a shortened version for groups with a range of walking abilities. Beyond the Camino we arrange itineraries around Ávila and Santa Teresa, the cathedrals of Toledo, Burgos and León, and Holy Week in Andalusia, which needs to be booked a long way ahead. As a Spanish ground operator we handle the hotels, coaches, guides and reservations directly.",
  },
  {
    q: "Can you operate incentive travel and corporate programs on the ground in Spain?",
    a: "Yes, and it is a regular part of the business rather than a sideline. Odisea Tours acts as the ground operator for incentive winners, leadership offsites, client trips and team programs across the Basque Country, La Rioja, Andalusia and the main cities, handling venues, hotels, private dinners, activity programs, transfers and the logistics around any meeting sessions. We work both directly with companies and B2B with the agencies and event organizers who hold the client relationship, quoting net rates and staying behind their brand where that is what they want. Our corporate retreat programs are set out in more detail on our corporate retreats page, and the B2B terms are on our Spain DMC page.",
  },
  {
    q: "What does a private cultural tour of Spain cost per person?",
    a: "Our Flamenco and Moorish Spain route, seven nights through Madrid, Córdoba, Sevilla and Granada, starts from €2,495 per traveler for ground services based on 20 travelers sharing twin rooms. That covers 4-star boutique hotels in historic centers, all the guided visits including the Prado, the Mezquita, the Real Alcázar and a full Alhambra day, the live flamenco tablao and tapas dinner, a private coach with driver and a bilingual tour leader throughout. International flights are quoted separately. Longer cultural itineraries of eight to twelve nights, and programs with private access such as dawn entry to the Alhambra or a curator at the Prado, are priced individually. The figure moves with group size, season, length and hotel category, and we give a firm per-person price once dates and numbers are confirmed.",
  },
  {
    q: "Is a small group tour of Spain private or shared with other travelers?",
    a: "Ours are private. We do not sell individual seats on scheduled departures, so a group traveling with us is only ever its own people. That is the practical difference between what we do and the large scheduled-departure operators: the route is built around your group's interests, the dates are the ones that suit you, the pace is yours to set, and nobody is waiting on a stranger at the coach door. It also makes access easier to arrange, because a private visit to a studio, a peña or a museum outside public hours is possible for a defined group of twenty and impossible for a rolling mix of ticket holders.",
  },
  {
    q: "Which Spanish cities should a first cultural trip cover?",
    a: "For a first trip of about a week, Madrid, Córdoba, Sevilla and Granada is the strongest single run: the Prado and the Royal Palace at the start, then the Mezquita, the Real Alcázar and the Alhambra in a sequence that actually tells the story of Moorish and Christian Spain in the right order. Barcelona is a different trip rather than an extension, and pairing it with Andalusia in one week means spending the week on the road. Groups with ten days or more usually add either the Basque north, San Sebastián and Bilbao, for the food and the Guggenheim, or Toledo and Segovia as day trips out of Madrid. We move groups by private coach throughout, which keeps a group together and lets the route stop at places a rail schedule cannot.",
  },
  {
    q: "Can a cultural tour be combined with food, wine or walking?",
    a: "Yes, and most of the trips we build are mixed. The common combinations are culture with food and wine, where an Andalusian art itinerary picks up sherry country and Andalusian cooking, or a northern route pairs museums with the Rioja bodegas and the San Sebastián pintxos scene; and culture with walking, where a group walks the final Camino stages into Santiago and then continues into a city program. Because we operate cultural, culinary, walking, school and corporate programs with the same team on one contract, a mixed itinerary does not mean a second supplier, a second invoice or two operators blaming each other when a day runs late.",
  },
];

export default function CulturalToursSpainPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Cultural Tours of Spain", item: CANONICAL },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CULTURE_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Cultural Tours of Spain for Small Private Groups",
    description:
      "Private cultural tours of Spain for groups of 10 to 30 travelers: art, history and architecture in Madrid, Toledo, Córdoba, Sevilla, Granada and Barcelona, faith and Camino de Santiago pilgrimage groups, and corporate incentive programs, operated by Odisea Tours with guides, hotels, coaches and venues contracted directly in Spain.",
    url: CANONICAL,
    touristType: [
      "Small private groups",
      "Museum and alumni groups",
      "Faith and parish groups",
      "Family groups",
      "Corporate incentive groups",
    ],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Madrid: the Prado and the Royal Palace" },
        { "@type": "ListItem", position: 2, name: "Córdoba: the Mezquita" },
        { "@type": "ListItem", position: 3, name: "Sevilla: the Real Alcázar and a Triana flamenco tablao" },
        { "@type": "ListItem", position: 4, name: "Granada: a full day in the Alhambra" },
        { "@type": "ListItem", position: 5, name: "Optional: Camino de Santiago walking stages" },
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
      name: "Flamenco and Moorish Spain, seven nights, ground services",
      price: "2495",
      priceCurrency: "EUR",
      description:
        "From €2,495 per traveler for ground services, based on 20 travelers sharing twin rooms. International flights quoted separately.",
      url: `${SITE}/tours/flamenco-moorish-spain`,
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
            alt="The arches of the Mezquita in Córdoba, a fixture of Odisea Tours cultural itineraries in Spain"
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
            <span className="text-paper/50">Cultural Tours</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Small private groups · 10 to 30 travelers · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Cultural tours <span className="font-display-italic text-gold">of Spain</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            Art, history, architecture and the table, for groups small enough to be heard in a chapel and to sit at one table at dinner. A curator at the Prado, the Mezquita before the day-trip coaches, the Alhambra at the pace it deserves. Planned and operated by a Spanish company, privately, for your group alone.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan your group&apos;s route
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/tours/flamenco-moorish-spain" className="btn-editorial on-dark">
              See Flamenco &amp; Moorish Spain
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              Private, <span className="font-display-italic text-gold">and small</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink/80 text-lg leading-relaxed">
            <p>
              Everything we run is private to one group. We do not sell individual seats on a scheduled departure, which means the route, the dates and the pace belong to your travelers rather than to a compromise with people they have never met. It also makes access easier: a studio visit, a peña in Triana or a museum outside public hours can be arranged for a defined group of twenty and cannot be arranged for a rolling mix of ticket holders.
            </p>
            <p>
              Size does most of the work on a cultural trip. Ten to thirty travelers is where a guide can still be heard inside a chapel, where a private visit is possible at all, and where the group eats at one table instead of four. Above that number the day starts being organized around the logistics of the coach rather than around what you came to see.
            </p>
            <p>
              And we are Spanish. Odisea Tours has operated here since 2005, from Benicàssim in Castellón, and the guides, hotels, restaurants and coaches on these routes are contracted by our own team rather than brokered through a third party. That is invisible on a good day and decisive on the day a monument closes without warning, which in Spain it occasionally does.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            What we <span className="font-display-italic text-gold">build</span>
          </h2>
          <p className="mt-6 max-w-[64ch] text-paper/80 text-lg leading-relaxed">
            Four kinds of cultural group, one operator and one contract. Mixed itineraries are normal here rather than an exception.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-paper/15">
            {PROGRAMS.map((p) => (
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

      {/* WHY US */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            Why groups <span className="font-display-italic text-gold">come to us</span>
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

      {/* THE ROUTE */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[16ch]">
              The route we <span className="font-display-italic text-gold">recommend first</span>
            </h2>
            <p className="mt-6 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold">
              Flamenco &amp; Moorish Spain · 7 nights · from €2,495 pp
            </p>
          </div>
          <div className="md:col-span-8 space-y-4 text-paper/80 text-lg leading-relaxed">
            <p>
              Madrid, Córdoba, Sevilla and Granada in that order, because that is the order in which the story makes sense. A curator-led hour at the Prado, then the Mezquita of Córdoba early enough to have the arches to yourselves, the Real Alcázar with an art historian who will tell you what the television version got right, a live tablao in Triana, and a full day inside the Alhambra and the Generalife gardens rather than the ninety minutes most itineraries allow.
            </p>
            <p>
              Seven nights from €2,495 per traveler for ground services, based on 20 travelers sharing twin rooms, in 4-star boutique hotels in the historic centers, with a private coach and a bilingual tour leader throughout. International flights are quoted separately. Groups with more time usually add the Basque north or Toledo and Segovia, and groups who want the food to lead should look at the food and wine route instead.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/tours/flamenco-moorish-spain" className="btn-editorial on-dark">
                Read the full day by day
              </Link>
              <Link href="/food-and-wine-tours-spain" className="btn-editorial on-dark">
                Food &amp; wine tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            Planning a cultural trip, <span className="font-display-italic text-gold">answered</span>
          </h2>
          <div className="mt-12 divide-y divide-ink/15">
            {CULTURE_FAQ.map((f) => (
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
        title="Field notes on cultural Spain"
        italicTail="and how to travel it."
        intro="How to choose an operator for a small cultural group, what a week in Andalusia actually looks like, and what the group version of the Camino does to a set of people who arrive as strangers."
        slugs={[
          "choosing-a-cultural-tour-operator-in-spain",
          "walking-camino-de-santiago-with-a-group",
          "how-to-plan-a-group-trip-to-spain",
        ]}
      />

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch] mx-auto">
            Tell us what your group <span className="font-display-italic text-gold">came for</span>
          </h2>
          <p className="mt-6 max-w-[56ch] mx-auto text-ink/70 text-lg leading-relaxed">
            Numbers, rough dates and the two or three things nobody wants to miss. We come back with a route and a per-person figure, normally within a couple of business days.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">
              Plan your group&apos;s route
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/corporate-retreats" className="btn-editorial">
              Corporate &amp; incentive programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
