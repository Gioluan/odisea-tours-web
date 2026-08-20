import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JournalLinks from "@/components/JournalLinks";

const SITE = "https://odisea-tours.com";
const CANONICAL = `${SITE}/food-and-wine-tours-spain`;
const HERO = "/photos/it-rioja-harvest.jpg";

export const metadata: Metadata = {
  title: { absolute: "Spain Food & Wine Tours for Private Groups | Odisea Tours" },
  description:
    "Private food and wine tours of Spain for groups of 15 to 30 adults, planned and operated by a Spanish ground operator since 2005. Rioja and Navarra wine country, the San Sebastián pintxos scene, Penedès cava, Basque cooking classes and Catalan cuisine. Sabores de España runs eight nights from €2,595 per traveler, ground services, or we build the route around your group.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Food & Wine Tours of Spain for Groups | Odisea Tours · Since 2005",
    description:
      "Private culinary tours of Spain for adult groups: Rioja, Navarra, the Basque pintxos scene and Penedès cava, contracted and operated directly in Spain.",
    url: CANONICAL,
    type: "website",
    images: [
      {
        url: HERO,
        width: 1200,
        height: 630,
        alt: "Grape harvest at a family vineyard in La Rioja, part of the Odisea Tours food and wine route",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spain Food & Wine Tours for Groups | Odisea Tours",
    description:
      "Rioja, Navarra, San Sebastián pintxos and Penedès cava, for private groups of 15 to 30 adults. Operated in Spain since 2005.",
    images: [HERO],
  },
};

const REGIONS = [
  {
    name: "La Rioja & Navarra",
    place: "Haro · Laguardia · Pamplona",
    when: "Best September to October",
    note: "Harvest at a family vineyard in Haro with a five-course pairing lunch at the bodega, a guided tasting inside Frank Gehry's Marqués de Riscal, chuletillas al sarmiento in Laguardia and a D.O. Navarra cellar. Harvest season books out early, so a September group needs its dates held roughly a year ahead.",
  },
  {
    name: "The Basque coast",
    place: "San Sebastián · Bilbao",
    when: "Year round",
    note: "A hands-on Basque seafood cooking class taught the traditional way, then a guided pintxos crawl through the bars of the Parte Vieja where the point is to eat one thing and move on. Bilbao adds the Guggenheim and lunch inside the Mercado de la Ribera.",
  },
  {
    name: "Catalonia & Penedès",
    place: "Barcelona · Sant Sadurní",
    when: "Year round",
    note: "La Boqueria walked with a local guide rather than a chef, because the market is about produce and the people selling it. A cava winery lunch among the Penedès vines an hour outside the city. A flamenco dinner at a traditional Barcelona tablao to open the trip.",
  },
  {
    name: "Andalusia",
    place: "Sevilla · Córdoba · Jaén",
    when: "Spring and autumn",
    note: "Sherry country, olive oil at a family mill in Jaén, and Andalusian cooking around the Moorish monuments. Usually built as a second route for groups that have already done the north, or paired with the Flamenco and Moorish Spain cultural itinerary.",
  },
];

const HOW = [
  {
    tag: "Private",
    title: "Your group, not a set departure",
    body: "We do not sell seats on a scheduled bus. Every food and wine tour we run is one group traveling together, which is why the pace, the dates and the number of wineries are yours to set rather than a compromise with strangers.",
  },
  {
    tag: "Direct",
    title: "Contracted here, in Spain",
    body: "The bodegas, the cooking schools, the restaurants and the coach are booked by our own team in Spain, not brokered through a reseller. When a winery moves a harvest date at short notice, we are the ones on the phone with them.",
  },
  {
    tag: "Pace",
    title: "One region a day, not three",
    body: "A wine lunch and a wine dinner on the same day is not a better trip, it is a worse one. We strip activities off long driving days on purpose. Groups that eat this well need the afternoon back.",
  },
  {
    tag: "Table",
    title: "Small enough to sit together",
    body: "Around 20 travelers is the number where a group can still take one long table at dinner and one guide can be heard in a cellar. We work from about 15 up to 30, and above that we split the tastings rather than shout over them.",
  },
];

const FOOD_FAQ = [
  {
    q: "Who organizes a Spain food and wine tour for a US group?",
    a: "Odisea Tours plans and operates private food and wine tours of Spain for groups traveling from the United States, typically 15 to 30 adults traveling together as a family group, a circle of friends, an alumni group or a club. Our Sabores de España route runs eight nights from Barcelona through Penedès, La Rioja, San Sebastián and Pamplona to Bilbao, with a cava winery lunch, a harvest visit in Haro, a guided tasting at Bodegas Marqués de Riscal inside the Frank Gehry building, a hands-on Basque seafood cooking class, a pintxos crawl through the Parte Vieja and a private coach with a bilingual leader throughout. It is priced from €2,595 per traveler for ground services at 20 travelers, twin sharing, with international flights quoted separately. We are a Spanish company, based in Benicàssim, Castellón, operating since 2005, and we contract every winery, restaurant and hotel directly rather than reselling another operator's program.",
  },
  {
    q: "What does a group food and wine tour of Spain cost per person?",
    a: "Sabores de España, our eight-night culinary route, starts from €2,595 per traveler for ground services based on 20 travelers sharing twin rooms. That figure covers 4-star hotels across Barcelona, Zaragoza, La Rioja, San Sebastián and Pamplona, the Penedès cava lunch, the Rioja harvest experience and pairing lunch, the Marqués de Riscal tasting, the Basque cooking class, the guided pintxos crawl, the Barcelona flamenco dinner show, the full Pamplona day with a Navarrese farewell dinner, the Guggenheim visit, and a private 50-seat coach with driver and bilingual tour leader for all nine days. International flights are separate. Price moves with group size, season, trip length and hotel category, and a shorter five or six night version of the same route costs materially less. We quote a firm per-person figure once dates and numbers are set.",
  },
  {
    q: "¿Qué agencia receptiva en España organiza viajes gastronómicos para grupos?",
    a: "Odisea Tours es una agencia receptiva española especializada, entre otras cosas, en viajes gastronómicos y enológicos para grupos. Trabajamos desde 2005 y contratamos directamente bodegas, escuelas de cocina, restaurantes, hoteles y autocares en España, sin intermediarios. Nuestra ruta Sabores de España recorre ocho noches entre Barcelona, el Penedès, La Rioja, San Sebastián, Pamplona y Bilbao, con comida en bodega de cava, vendimia en Haro, visita guiada a Bodegas Marqués de Riscal, clase de cocina vasca y ruta de pintxos por la Parte Vieja. Operamos para grupos de 15 a 30 viajeros y también trabajamos en B2B con agencias y turoperadores extranjeros que venden España a sus propios clientes, con tarifas netas. La sociedad es Ground Agents Solutions S.L., con domicilio en Benicàssim, Castellón.",
  },
  {
    q: "What is the Sabores de España tour and which cities does it cover?",
    a: "Sabores de España is Odisea Tours' own eight-night food and wine itinerary, and the route runs north rather than south: Barcelona, the Penedès cava region, Zaragoza, La Rioja, San Sebastián, Pamplona and Bilbao. It is built that way because Spain's densest run of wine country and its strongest eating city sit within a few hours of each other along the north. Groups looking for Madrid, Sevilla and Granada instead are usually after our Flamenco and Moorish Spain route, which is a cultural itinerary through Andalusia with food in it rather than a wine trip, and the two can be combined into a longer program for a group with the time. Either can be rebuilt around your own list of cities.",
  },
  {
    q: "Can you arrange winery visits and cooking classes for a private group?",
    a: "Yes, and it is most of what this trip is. On the winery side we book harvest experiences at family vineyards, guided tastings and cellar tours, and pairing lunches inside the bodega, across Rioja, Navarra and Penedès. On the cooking side the standard is a hands-on Basque seafood class in San Sebastián taught by a local chef, with a paella class in the Albufera near Valencia as the alternative when a group is routed through the east coast. We book one cooking class per trip rather than three. Groups that cook every day stop tasting the difference, and the class is worth more when it is the thing you did that day.",
  },
  {
    q: "When is the best time of year for a wine tour in Spain?",
    a: "September and early October, if the harvest is the point. That is when the vendimia is actually happening in Rioja and Navarra, when a family vineyard will let a group pick and press, and when the countryside looks the way people imagine it. The trade-off is that harvest dates shift with the weather and the good bodegas are spoken for early, so a September group should hold dates around a year out. Late spring, roughly May and June, is the other strong window: the weather is settled, San Sebastián is not yet full, and prices sit below the autumn peak. July and August are workable but hot inland, and much of the wine trade is on holiday in August.",
  },
  {
    q: "Do you run food and wine tours for adult groups rather than students?",
    a: "Yes. The food and wine side of Odisea Tours is built for adults, and the typical group is 15 to 30 travelers in their forties through their seventies: family groups, groups of long-standing friends, alumni and museum groups, wine clubs and small corporate incentives. The pace reflects that. Days are built around one substantial thing rather than four, long driving days are stripped of activities, and there is free time in the afternoons on purpose. Our student and school programs are a separate part of the business and run on entirely different itineraries.",
  },
  {
    q: "Can a food and wine trip be combined with something other than eating?",
    a: "Regularly, and it usually makes the week better. The common combinations are art and architecture, the Guggenheim in Bilbao and the Prado in Madrid sit naturally on these routes; the Camino de Santiago, where a group walks the last stages into Santiago and then continues into Rioja; and corporate programs where a leadership team wants the tasting to sit alongside working sessions. Because we operate cultural, culinary, walking and corporate programs with the same team on one contract, a mixed itinerary does not mean a second supplier or a second invoice.",
  },
];

export default function FoodAndWineToursSpainPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Food & Wine Tours in Spain", item: CANONICAL },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FOOD_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const tripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Food & Wine Tours of Spain for Private Groups",
    description:
      "Private culinary and wine tours of Spain for adult groups of 15 to 30 travelers: harvest and tastings in La Rioja and Navarra, the San Sebastián pintxos scene and a hands-on Basque cooking class, Penedès cava and Catalan cuisine in Barcelona, operated by Odisea Tours with hotels, coaches, guides and bodegas contracted directly in Spain.",
    url: CANONICAL,
    touristType: [
      "Adult private groups",
      "Family groups",
      "Alumni and museum groups",
      "Wine clubs",
      "Corporate incentive groups",
    ],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Barcelona and the Penedès cava region" },
        { "@type": "ListItem", position: 2, name: "La Rioja: Haro harvest and Marqués de Riscal" },
        { "@type": "ListItem", position: 3, name: "San Sebastián: Basque cooking class and pintxos" },
        { "@type": "ListItem", position: 4, name: "Pamplona and D.O. Navarra" },
        { "@type": "ListItem", position: 5, name: "Bilbao: Guggenheim and Mercado de la Ribera" },
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
      name: "Sabores de España, eight nights, ground services",
      price: "2595",
      priceCurrency: "EUR",
      description:
        "From €2,595 per traveler for ground services, based on 20 travelers sharing twin rooms. International flights quoted separately.",
      url: `${SITE}/tours/sabores-de-espana`,
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
            alt="Grape harvest at a family vineyard in La Rioja, part of the Odisea Tours food and wine route"
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
            <span className="text-paper/50">Food &amp; Wine Tours</span>
          </nav>
          <div className="rule-label font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-paper/70 mb-6">
            <span>Private groups · 15 to 30 travelers · Since 2005</span>
          </div>
          <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.4rem)] uppercase leading-[0.95] tracking-[-0.015em] max-w-[20ch]">
            Food &amp; wine tours <span className="font-display-italic text-gold">of Spain</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-paper/85 text-lg leading-relaxed">
            Private culinary trips for adults who came here to eat, drink and pay attention. Harvest in La Rioja, a guided tasting inside the Gehry building at Marqués de Riscal, a Basque cooking class taught the traditional way, and a pintxos crawl through the Parte Vieja. Planned and operated by a Spanish company, with every bodega, restaurant and hotel contracted by our own team here.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/plan-your-tour" className="btn-editorial on-dark">
              Plan your group&apos;s route
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/tours/sabores-de-espana" className="btn-editorial on-dark">
              See Sabores de España
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[14ch]">
              What kind of trip <span className="font-display-italic text-gold">this is</span>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-ink/80 text-lg leading-relaxed">
            <p>
              It is a private group trip, which is the first thing worth saying plainly, because most of what turns up when you search for a Spanish food and wine tour is a seat on a scheduled departure with strangers. We do not sell seats. Every trip we run is one group traveling together, so the dates, the pace and the number of wineries belong to your group rather than to a compromise with eleven people you have never met.
            </p>
            <p>
              The second thing is that we are a Spanish company, not an American operator with a Spanish subcontractor. Odisea Tours has run group travel here since 2005, and the bodegas, cooking schools, restaurants, hotels and coaches on these routes are contracted by our own team in Spain. That matters less on the day the trip is perfect and a great deal on the day a winery moves a harvest visit at forty-eight hours&apos; notice, which happens, because harvest follows the weather rather than the calendar.
            </p>
            <p>
              The third thing is the pace. A wine lunch and a wine dinner on the same day is not a better trip. Neither is a cooking class stacked on top of a four-hour drive. We strip activities off travel days on purpose and leave afternoons open, and groups who eat this well are almost always grateful for it by day four.
            </p>
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[26ch]">
            Where the food <span className="font-display-italic text-gold">actually is</span>
          </h2>
          <p className="mt-6 max-w-[64ch] text-paper/80 text-lg leading-relaxed">
            Spain's best eating and its densest wine country sit in the north, within a few hours of each other. That is why our flagship culinary route runs Barcelona to Bilbao rather than through the south.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-paper/15">
            {REGIONS.map((r) => (
              <div key={r.name} className="bg-ink p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold mb-3">
                  {r.place} · {r.when}
                </div>
                <h3 className="font-display text-2xl uppercase leading-tight">{r.name}</h3>
                <p className="mt-4 text-paper/75 leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE RUN IT */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            How we <span className="font-display-italic text-gold">run it</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15">
            {HOW.map((h) => (
              <div key={h.title} className="bg-paper p-8">
                <div className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold-deep mb-3">{h.tag}</div>
                <h3 className="font-display text-xl uppercase leading-tight">{h.title}</h3>
                <p className="mt-4 text-ink/70 leading-relaxed text-[0.95rem]">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE FLAGSHIP ROUTE */}
      <section className="bg-ink text-paper py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[16ch]">
              The route we <span className="font-display-italic text-gold">know best</span>
            </h2>
            <p className="mt-6 font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-gold">
              Sabores de España · 8 nights · from €2,595 pp
            </p>
          </div>
          <div className="md:col-span-8 space-y-4 text-paper/80 text-lg leading-relaxed">
            <p>
              Barcelona to Bilbao over eight nights, through the Penedès, Zaragoza, La Rioja, San Sebastián and Pamplona. A welcome dinner in El Born, La Boqueria with a local guide, a flamenco dinner at a traditional tablao, a cava lunch among the vines, harvest at a family vineyard in Haro with a five-course pairing lunch, the guided tasting at Marqués de Riscal, chuletillas in Laguardia, a Basque seafood cooking class, a pintxos crawl through the Parte Vieja, a full day in Pamplona with a Navarrese farewell dinner, and the Guggenheim with lunch at the Mercado de la Ribera before flying home.
            </p>
            <p>
              From €2,595 per traveler for ground services, based on 20 travelers sharing twin rooms, with 4-star hotels throughout and a private 50-seat coach with driver and bilingual leader for all nine days. International flights are quoted separately. A shorter five or six night version of the same route costs materially less, and the whole thing can be rebuilt around your group&apos;s own list of cities.
            </p>
            <div className="pt-4">
              <Link href="/tours/sabores-de-espana" className="btn-editorial on-dark">
                Read the full day by day
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] uppercase leading-[1.02] max-w-[24ch]">
            Planning a culinary trip, <span className="font-display-italic text-gold">answered</span>
          </h2>
          <div className="mt-12 divide-y divide-ink/15">
            {FOOD_FAQ.map((f) => (
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
        title="Notes from the table"
        italicTail="and the cellar."
        intro="How a private food and wine trip through Spain is actually put together, what it costs, and when to travel if the harvest is the point."
        slugs={[
          "planning-a-food-and-wine-tour-of-spain-for-a-group",
          "sabores-de-espana-food-wine-tour-spain",
          "how-to-plan-a-group-trip-to-spain",
        ]}
      />

      {/* CTA */}
      <section className="paper-texture py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] uppercase leading-[1.02] max-w-[24ch] mx-auto">
            Tell us who is <span className="font-display-italic text-gold">coming</span>
          </h2>
          <p className="mt-6 max-w-[56ch] mx-auto text-ink/70 text-lg leading-relaxed">
            Group size, rough dates and whether the harvest matters to you. We come back with a route and a per-person figure, normally within a couple of business days.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/plan-your-tour" className="btn-editorial">
              Plan your group&apos;s route
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5 H13 M9 1 L13 5 L9 9" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </Link>
            <Link href="/cultural-tours-spain" className="btn-editorial">
              Cultural tours of Spain
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
