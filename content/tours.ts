export interface Tour {
  slug: string;
  chapter: string;
  title: string;
  italicTitle?: string;
  tagline: string;
  description: string;
  image: string;
  coordinates: string;
  duration: string;
  groupSize: string;
  includes: string[];
  itinerary: { day: string; title: string; detail: string; image?: string }[];
  accent: string;
}

export const TOURS: Tour[] = [
  {
    slug: "european-soccer-tours",
    chapter: "I",
    title: "European Soccer",
    italicTitle: "Pilgrimages",
    tagline: "Where the game still feels like religion.",
    description:
      "Matchday access no tourist buys online. Training-ground pass from academy directors we've worked with for fifteen years. Back-row seats in the press box, a pint with an old scout afterward, and a guide who remembers when Xavi was still a kid at La Masia.",
    image: "/photos/veterans-soccer-tour-camp-nou-barcelona.jpg",
    coordinates: "41.3809° N / 2.1228° E",
    duration: "6–10 nights",
    groupSize: "12–60 travelers",
    accent: "#ffb400",
    includes: [
      "La Liga match tickets (category by request)",
      "Stadium + museum tours at Camp Nou, Bernabéu, Metropolitano",
      "Training-facility access at partner academies",
      "Meet & greet opportunities with former pros",
      "Tactical session with a certified UEFA coach",
      "Four-star lodging within walking distance of each stadium",
    ],
    itinerary: [
      {
        day: "I",
        title: "Arrival · Barcelona",
        detail: "Transfer from BCN, welcome vermut on Las Ramblas, first training visit at sundown.",
        image: "/photos/veterans-soccer-tour-barcelona-la-rambla.jpg",
      },
      {
        day: "II",
        title: "Camp Nou & La Masia",
        detail: "Private stadium tour before the crowds, followed by an afternoon inside the academy grounds.",
        image: "/photos/veterans-soccer-tour-camp-nou-stadium.jpg",
      },
      {
        day: "III",
        title: "Matchday",
        detail: "Walk to the stadium with the locals, group seating together, post-match dinner at a bodega we love.",
        image: "/photos/veterans-soccer-tour-match-vs-spanish-team.jpg",
      },
      {
        day: "IV",
        title: "AVE to Madrid",
        detail: "High-speed rail in business class. Check in, afternoon at the Metropolitano museum.",
        image: "/photos/it-ave-train-madrid.jpg",
      },
      {
        day: "V",
        title: "Bernabéu Day",
        detail: "Behind-the-scenes at the rebuilt Bernabéu, evening Real Madrid fixture.",
        image: "/photos/veterans-soccer-tour-bernabeu-stadium.jpg",
      },
      {
        day: "VI",
        title: "Departure",
        detail: "Tapas brunch, airport transfer, and a photo book mailed home within the month.",
        image: "/photos/veterans-soccer-tour-happy-group.jpg",
      },
    ],
  },
  {
    slug: "cultural-journeys",
    chapter: "II",
    title: "Cultural",
    italicTitle: "Journeys",
    tagline: "Spain, with the volume turned up.",
    description:
      "Not the greatest-hits bus tour. Dinners in private homes in Triana, studio time with a ceramicist in Úbeda, a dawn walk through the Alhambra before it opens. Built around curiosity, paced for adults who actually want to linger.",
    image: "/photos/odisea-tours-group-barcelona-cathedral.jpg",
    coordinates: "37.1773° N / 3.5986° W",
    duration: "8–12 nights",
    groupSize: "10–30 travelers",
    accent: "#c05530",
    includes: [
      "Private guided visits to Alhambra, Mezquita, Sagrada Família",
      "Flamenco peña in Seville's Triana district",
      "Olive-oil tasting at a family mill in Jaén",
      "Cooking class with a local chef in San Sebastián",
      "Hand-selected boutique hotels and paradores",
      "Bilingual cultural historian throughout",
    ],
    itinerary: [
      {
        day: "I",
        title: "Seville",
        detail: "Arrival, tapas crawl through Santa Cruz, evening flamenco in Triana.",
        image: "/photos/it-seville-santa-cruz.jpg",
      },
      {
        day: "II",
        title: "Córdoba & the Mezquita",
        detail: "Day trip to the old caliphate capital, private hour inside the Mezquita before opening.",
        image: "/photos/it-cordoba-mezquita.jpg",
      },
      {
        day: "III",
        title: "Granada",
        detail: "Transfer through olive country, sunset view from the Mirador de San Nicolás.",
        image: "/photos/it-granada-mirador.jpg",
      },
      {
        day: "IV",
        title: "Alhambra at Dawn",
        detail: "First group of the morning, three hours with an art historian.",
        image: "/photos/it-alhambra-dawn.jpg",
      },
      {
        day: "V",
        title: "Madrid",
        detail: "AVE north. Afternoon at the Prado with a curator-led visit.",
        image: "/photos/it-madrid-prado.jpg",
      },
      {
        day: "VI",
        title: "San Sebastián",
        detail: "Pintxo route through the old town, cooking class with a local chef.",
        image: "/photos/it-san-sebastian-pintxos.jpg",
      },
    ],
  },
  {
    slug: "corporate-retreats",
    chapter: "III",
    title: "Corporate",
    italicTitle: "Retreats",
    tagline: "Off-sites that don't feel like off-sites.",
    description:
      "We stopped booking generic conference hotels a decade ago. Your team will plan next year's roadmap from a restored monastery in La Rioja, break bread with the winemaker, and come home actually energized. Every detail held invisible so your people can think.",
    image: "/img/tours/corporate.jpg",
    coordinates: "42.4627° N / 2.4449° W",
    duration: "3–6 nights",
    groupSize: "8–120 travelers",
    accent: "#1a1612",
    includes: [
      "Venue scouting and contracting",
      "AV, simultaneous translation, and stage build",
      "Team-building programming (hiking, cooking, sailing)",
      "Executive transfers, group coaches, private rail cars",
      "On-site producer and 24/7 incident response",
      "Full budget transparency and vendor reporting",
    ],
    itinerary: [
      {
        day: "I",
        title: "Arrival · La Rioja",
        detail: "Private transfers from Bilbao, welcome dinner at a family winery.",
        image: "/photos/it-rioja-winery.jpg",
      },
      {
        day: "II",
        title: "Work Day",
        detail: "Full-day strategic session in a monastery cloister, lunch served in the courtyard.",
        image: "/photos/it-monastery-cloister.jpg",
      },
      {
        day: "III",
        title: "Team Activity",
        detail: "Choose: hiking in Sierra de la Demanda, cooking class, or horseback through the vineyards.",
        image: "/photos/it-vineyard-hike.jpg",
      },
      {
        day: "IV",
        title: "Close & Depart",
        detail: "Morning retrospective, group photo, transfers to Madrid or Bilbao.",
        image: "/photos/it-bilbao-skyline.jpg",
      },
    ],
  },
  {
    slug: "sport-adventure",
    chapter: "IV",
    title: "Sport &",
    italicTitle: "Adventure",
    tagline: "Earned views. Earned appetites.",
    description:
      "Surf camps on the Cantabrian coast, mountain-biking the Pyrenees, sailing trips through the Balearics. Built for groups who want their days physical, their nights social, and their guides genuinely certified.",
    image: "/img/tours/adventure.jpg",
    coordinates: "43.3614° N / 4.3873° W",
    duration: "5–9 nights",
    groupSize: "8–24 travelers",
    accent: "#0e6b52",
    includes: [
      "Certified mountain and water guides",
      "All technical equipment supplied",
      "Professional safety and medical support",
      "Custom programming by ability level",
      "Hotels at the trailhead or harbor",
      "Post-activity recovery and massage options",
    ],
    itinerary: [
      {
        day: "I",
        title: "San Vicente de la Barquera",
        detail: "Arrival on the Cantabrian coast, gear fitting, sunset beach walk.",
        image: "/photos/it-cantabria-coast.jpg",
      },
      {
        day: "II",
        title: "Coastal Ride",
        detail: "Sea-kayak and cliff trek along the Costa Quebrada.",
        image: "/photos/it-sea-kayak-coast.jpg",
      },
      {
        day: "III",
        title: "Picos de Europa",
        detail: "Transfer inland, cable-car to the mountain ridge, guided hike on the Ruta del Cares.",
        image: "/photos/it-picos-de-europa.jpg",
      },
      {
        day: "IV",
        title: "Rest & Ride",
        detail: "Morning yoga, afternoon e-bike through the lower valley.",
        image: "/photos/it-ebike-valley.jpg",
      },
      {
        day: "V",
        title: "Departure",
        detail: "Farewell seafood lunch in Santander, transfers to airport or train station.",
        image: "/photos/it-santander-seafood.jpg",
      },
    ],
  },
  {
    slug: "sabores-de-espana",
    chapter: "V",
    title: "Sabores",
    italicTitle: "de España",
    tagline: "Spain, tasted slowly.",
    description:
      "Eight nights of harvest season, cava among the vineyards, a Basque cooking class with a chef who learned from his grandmother, Bodegas Marqués de Riscal inside the Gehry building, and a farewell dinner in Pamplona after a day on the Running of the Bulls route. Built for adults who came here to eat, drink, and pay attention.",
    image: "/photos/sabores-de-espana-hero.jpg",
    coordinates: "42.5801° N / 2.9033° W",
    duration: "8 nights · 9 days",
    groupSize: "20 travelers",
    accent: "#b8552f",
    includes: [
      "Eight nights in 4-star hotels across Barcelona, Zaragoza, La Rioja, San Sebastián and Pamplona",
      "Half-day Barcelona city tour and La Boqueria market walk with a local guide",
      "Flamenco dinner show at a traditional Barcelona tablao",
      "Penedès cava winery lunch, Bodegas Marqués de Riscal guided tasting, D.O. Navarra cellar visit",
      "Hands-on Basque seafood cooking class in San Sebastián and a guided pintxos crawl through Parte Vieja",
      "Full day in Pamplona with Casco Viejo walking tour, tapas lunch on Calle Estafeta, and a farewell Navarrese dinner",
      "Guggenheim Museum guided visit and Mercado de la Ribera lunch in Bilbao",
      "Private 50-seat coach with driver and bilingual tour leader for the full nine days",
    ],
    itinerary: [
      {
        day: "I",
        title: "Barcelona · El Born",
        detail: "Arrival, transfer to the Gothic Quarter, welcome dinner at a traditional Catalan restaurant in El Born.",
        image: "/photos/it-barcelona-el-born.jpg",
      },
      {
        day: "II",
        title: "Boqueria & Tablao",
        detail: "Morning city tour through Las Ramblas and La Boqueria, lunch at Port Olímpic, flamenco dinner show at night.",
        image: "/photos/it-boqueria-market.jpg",
      },
      {
        day: "III",
        title: "Penedès → Zaragoza",
        detail: "Cava winery harvest lunch among the vineyards, then on to Zaragoza for a relaxed sunset at Basílica del Pilar.",
        image: "/photos/it-penedes-cava.jpg",
      },
      {
        day: "IV",
        title: "Harvest in La Rioja",
        detail: "Grape harvest experience at a family vineyard in Haro, five-course wine pairing lunch at the bodega.",
        image: "/photos/it-rioja-harvest.jpg",
      },
      {
        day: "V",
        title: "Marqués de Riscal",
        detail: "Guided tour and tasting inside the Frank Gehry wine resort, chuletillas al sarmiento lunch in Laguardia village.",
        image: "/photos/it-marques-riscal.jpg",
      },
      {
        day: "VI",
        title: "San Sebastián",
        detail: "Drive to the Basque coast, afternoon seafood cooking class with a local chef, guided pintxos crawl through Parte Vieja.",
        image: "/photos/it-san-sebastian-concha.jpg",
      },
      {
        day: "VII",
        title: "Pamplona · Navarra",
        detail: "Full day on the Running of the Bulls route, tapas lunch on Calle Estafeta, D.O. Navarra bodega and Navarrese farewell dinner.",
        image: "/photos/it-pamplona.jpg",
      },
      {
        day: "VIII",
        title: "Bilbao · Guggenheim",
        detail: "Guided Guggenheim visit, lunch at Mercado de la Ribera, afternoon stroll through Casco Viejo.",
        image: "/photos/it-bilbao-guggenheim.jpg",
      },
      {
        day: "IX",
        title: "Departure",
        detail: "Transfer to Bilbao airport, farewell espresso, photo book mailed home within the month.",
      },
    ],
  },
  {
    slug: "flamenco-moorish-spain",
    chapter: "VI",
    title: "Flamenco",
    italicTitle: "& Moorish Spain",
    tagline: "Andalusia, from royal Madrid to the Alhambra.",
    description:
      "Seven nights through the south. A curator-led hour at the Prado. The Mezquita of Córdoba when the tour groups haven't arrived yet. The Alcázar of Seville with an art historian who will tell you what Game of Thrones got right. A live flamenco tablao in Triana and a full day inside the Alhambra palaces at the pace they deserve. Paced for adults who want to linger.",
    image: "/photos/flamenco-moorish-spain-hero.jpg",
    coordinates: "37.1760° N / 3.5880° W",
    duration: "7 nights · 8 days",
    groupSize: "20 travelers",
    accent: "#a8391e",
    includes: [
      "Seven nights in 4-star boutique hotels in historic centers (Madrid, Córdoba, Sevilla, Granada)",
      "Prado Museum guided tour with an art historian",
      "Mezquita-Catedral of Córdoba guided visit",
      "Real Alcázar of Sevilla guided visit, the Game of Thrones palace",
      "Live flamenco show with tapas dinner at a traditional Sevilla tablao",
      "Full day inside the Alhambra and Generalife Gardens with a specialist historian",
      "Sunset at the Mirador de San Nicolás and a post-Alhambra Arab baths (hammam) decompression",
      "Private coach with driver for all transfers and a bilingual tour leader for eight days",
    ],
    itinerary: [
      {
        day: "I",
        title: "Madrid · Welcome",
        detail: "Arrival, private transfer to a hotel near Gran Vía, welcome walking tour through Madrid de los Austrias, tapas dinner.",
        image: "/photos/it-madrid-gran-via.jpg",
      },
      {
        day: "II",
        title: "The Prado",
        detail: "Morning with an art historian at the Prado, leisurely lunch in Barrio de las Letras, free afternoon in Retiro.",
        image: "/photos/it-madrid-prado.jpg",
      },
      {
        day: "III",
        title: "Córdoba · Mezquita",
        detail: "Scenic coach through La Mancha, arrival in the Jewish Quarter, guided hour inside the Mezquita.",
        image: "/photos/it-cordoba-mezquita.jpg",
      },
      {
        day: "IV",
        title: "Sevilla · Flamenco",
        detail: "Morning coach via Carmona, afternoon at the Real Alcázar, evening flamenco tablao with tapas dinner.",
        image: "/photos/it-sevilla-alcazar.jpg",
      },
      {
        day: "V",
        title: "Triana",
        detail: "Walking tour of Triana, ceramic workshop visit, Mercado de Triana lunch, free afternoon by the Guadalquivir.",
        image: "/photos/it-triana-seville.jpg",
      },
      {
        day: "VI",
        title: "Olive Country → Granada",
        detail: "Drive through the olive groves with an estate tasting, check in near the Albaicín, sunset at Mirador San Nicolás.",
        image: "/photos/it-andalusia-olive-grove.jpg",
      },
      {
        day: "VII",
        title: "The Alhambra",
        detail: "Full day inside the Nasrid Palaces and Generalife with a specialist, afternoon Arab baths, farewell dinner with live guitar.",
        image: "/photos/it-alhambra-courtyard.jpg",
      },
      {
        day: "VIII",
        title: "Departure",
        detail: "Transfer from Granada to the airport, farewell espresso, end of services.",
      },
    ],
  },
  {
    slug: "sin-traduccion",
    chapter: "VII",
    title: "Sin",
    italicTitle: "Traducción",
    tagline: "Eight nights in Spain. Zero English.",
    description:
      "Built for U.S. high school Spanish programs. Eight nights through Madrid, Valencia and Barcelona with a Spanish-speaking Odisea guide who refuses to translate. A morning at the Prado, a half day in Toledo, paella cooked from scratch in El Palmar, and the Gothic Quarter at dusk. Every meal, every guide, every market stop happens in Spanish. Your students stop reaching for the English crutch by day three.",
    image: "/photos/odisea-tours-group-barcelona-cathedral.jpg",
    coordinates: "39.4699° N / 0.3763° W",
    duration: "8 nights · 9 days",
    groupSize: "15–40 students + chaperones",
    accent: "#c8602b",
    includes: [
      "Eight nights in 3-star hotels in Madrid, Valencia and Barcelona",
      "Spanish-only Odisea tour leader for the full nine days",
      "Private coach with driver for every transfer, including airport pickup and drop-off",
      "Half-day Toledo excursion from Madrid",
      "Prado Museum entry and a guided visit in Spanish",
      "Albufera boat ride and a hands-on paella cooking class in El Palmar, taught entirely in Spanish",
      "Sagrada Família interior entry and a Gaudí walking route in Barcelona",
      "Free guided walks through Madrid de los Austrias, Valencia old town, Las Ramblas + La Boquería + the Gothic Quarter",
      "Daily breakfast, welcome dinner in Madrid, farewell tapas dinner in Barcelona",
      "Teacher goes free on every group of ten paid students",
    ],
    itinerary: [
      {
        day: "I",
        title: "Madrid · Bienvenida",
        detail: "MAD airport pickup by private coach, hotel check-in near Gran Vía, welcome dinner around Plaza Mayor, ground rules: solo en español from this moment forward.",
      },
      {
        day: "II",
        title: "El Prado",
        detail: "Guided morning at the Prado in Spanish, focused on Velázquez and Goya. Free afternoon walk through Madrid de los Austrias, Mercado de San Miguel for tapas at the students' own pace.",
        image: "/photos/it-madrid-prado.jpg",
      },
      {
        day: "III",
        title: "Toledo → Valencia",
        detail: "Morning coach to Toledo for a half day in the imperial city. Afternoon scenic drive through La Mancha to Valencia, evening stroll near Mercado Central.",
      },
      {
        day: "IV",
        title: "Valencia · Casco Antiguo",
        detail: "Free guided walking tour of the old town with the Odisea guide, lunch on your own at Mercado Central, afternoon at the Ciudad de las Artes y las Ciencias.",
      },
      {
        day: "V",
        title: "Albufera & Paella",
        detail: "Albufera boat ride through the rice paddies, then the marquee day: paella cooking class in a family farmhouse in El Palmar, fully in Spanish, students cook in pairs and eat what they made.",
      },
      {
        day: "VI",
        title: "Valencia → Barcelona",
        detail: "Free morning at the beach or wandering Ruzafa, midday coach up the coast to Barcelona, evening light tapas dinner near the hotel.",
      },
      {
        day: "VII",
        title: "Gaudí",
        detail: "Sagrada Família interior in the morning, Gaudí walking route past Casa Batlló and Casa Milà, evening free walk down Las Ramblas through La Boquería and the Gothic Quarter.",
      },
      {
        day: "VIII",
        title: "Barcelona Libre",
        detail: "Free morning for shopping, journals or a beach run. Farewell tapas dinner in El Born with the full group, certificates handed out for the students who stayed in Spanish all eight nights.",
      },
      {
        day: "IX",
        title: "Departure",
        detail: "Private coach transfer to BCN airport, end of services. Photo book mailed to the school within the month.",
      },
    ],
  },
  {
    slug: "camino-de-santiago",
    chapter: "VIII",
    title: "Camino de",
    italicTitle: "Santiago",
    tagline: "The last hundred kilometers, on foot.",
    description:
      "Seven nights walking the final stretch of the Camino Francés, from Sarria to the Praza do Obradoiro. Eucalyptus forests, pazos, stone bridges, and a support van following the group every step. A pulpería lunch in Melide, the Pilgrim's Mass in Santiago, and a farewell dinner at a Michelin recommended Galician restaurant. You walk, we carry your bags, pour your wine, and hand you the Compostela certificate at the Cathedral.",
    image: "/photos/camino-de-santiago-hero.jpg",
    coordinates: "42.8806° N / 8.5448° W",
    duration: "7 nights · 8 days",
    groupSize: "20 travelers",
    accent: "#4a6741",
    includes: [
      "Seven nights in hand-picked rural hotels along the route, plus a 4-star hotel in the old town of Santiago de Compostela",
      "Specialist Camino guide walking with the group every day",
      "Full support van with snacks, water, and optional pickups on every walking stage",
      "Daily luggage transfer between hotels (one bag per pilgrim)",
      "Half-board on walking days, plus a celebratory pulpería lunch in Melide and a farewell Michelin-recommended dinner in Santiago",
      "Pilgrim credential (credencial), Compostela certificate, and Pilgrim's Mass attendance",
      "Santiago Cathedral, Museum and rooftops private guided tour on the rest day",
      "Nightly glass of Galician Albariño or Mencía with dinner, safety kit, and 24/7 Odisea Tours on-the-ground support",
    ],
    itinerary: [
      {
        day: "I",
        title: "Arrival · Sarria",
        detail: "Santiago airport pickup, transfer to Sarria, pilgrim briefing, credential handed out, welcome Galician dinner.",
        image: "/photos/it-sarria.jpg",
      },
      {
        day: "II",
        title: "Sarria → Portomarín",
        detail: "Twenty-two kilometers through eucalyptus forests and stone bridges, support van mid-route, late lunch in Portomarín.",
        image: "/photos/it-eucalyptus-camino.jpg",
      },
      {
        day: "III",
        title: "Portomarín → Palas de Rei",
        detail: "Twenty-five kilometers through rolling Galician countryside, pazos and hidden chapels, dinner and overnight.",
        image: "/photos/it-galicia-countryside.jpg",
      },
      {
        day: "IV",
        title: "Melide Pulperías",
        detail: "The longest stage (shorter fifteen-kilometer option with van pickup), pulpo a feira lunch in Melide, on to Arzúa.",
        image: "/photos/it-pulpo-melide.jpg",
      },
      {
        day: "V",
        title: "Arzúa → O Pedrouzo",
        detail: "Nineteen easy kilometers through farmland, early arrival, free afternoon, optional post-walk massage.",
        image: "/photos/it-camino-pilgrims.jpg",
      },
      {
        day: "VI",
        title: "Monte do Gozo → Santiago",
        detail: "The final twenty kilometers. First view from Monte do Gozo, triumphant entry into the Praza do Obradoiro, Compostela certificate, Pilgrim's Mass, celebratory dinner.",
        image: "/photos/it-santiago-obradoiro.jpg",
      },
      {
        day: "VII",
        title: "Santiago Cathedral",
        detail: "Rest day. Private tour of the Cathedral, Museum and rooftops, free afternoon, farewell dinner at a Michelin-recommended Galician restaurant.",
        image: "/photos/it-santiago-cathedral.jpg",
      },
      {
        day: "VIII",
        title: "Departure",
        detail: "Transfer to Santiago de Compostela airport, end of services.",
      },
    ],
  },
];

export function tourBySlug(slug: string) {
  return TOURS.find((t) => t.slug === slug);
}
