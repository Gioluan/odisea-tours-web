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
  itinerary: { day: string; title: string; detail: string }[];
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
    image: "/img/tours/soccer.jpg",
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
      },
      {
        day: "II",
        title: "Camp Nou & La Masia",
        detail: "Private stadium tour before the crowds, followed by an afternoon inside the academy grounds.",
      },
      {
        day: "III",
        title: "Matchday",
        detail: "Walk to the stadium with the locals, group seating together, post-match dinner at a bodega we love.",
      },
      {
        day: "IV",
        title: "AVE to Madrid",
        detail: "High-speed rail in business class. Check in, afternoon at the Metropolitano museum.",
      },
      {
        day: "V",
        title: "Bernabéu Day",
        detail: "Behind-the-scenes at the rebuilt Bernabéu, evening Real Madrid fixture.",
      },
      {
        day: "VI",
        title: "Departure",
        detail: "Tapas brunch, airport transfer, and a photo book mailed home within the month.",
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
    image: "/img/tours/cultural.jpg",
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
      },
      {
        day: "II",
        title: "Córdoba & the Mezquita",
        detail: "Day trip to the old caliphate capital, private hour inside the Mezquita before opening.",
      },
      {
        day: "III",
        title: "Granada",
        detail: "Transfer through olive country, sunset view from the Mirador de San Nicolás.",
      },
      {
        day: "IV",
        title: "Alhambra at Dawn",
        detail: "First group of the morning, three hours with an art historian.",
      },
      {
        day: "V",
        title: "Madrid",
        detail: "AVE north. Afternoon at the Prado with a curator-led visit.",
      },
      {
        day: "VI",
        title: "San Sebastián",
        detail: "Pintxo route through the old town, cooking class with a local chef.",
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
      },
      {
        day: "II",
        title: "Work Day",
        detail: "Full-day strategic session in a monastery cloister, lunch served in the courtyard.",
      },
      {
        day: "III",
        title: "Team Activity",
        detail: "Choose: hiking in Sierra de la Demanda, cooking class, or horseback through the vineyards.",
      },
      {
        day: "IV",
        title: "Close & Depart",
        detail: "Morning retrospective, group photo, transfers to Madrid or Bilbao.",
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
      },
      {
        day: "II",
        title: "Coastal Ride",
        detail: "Sea-kayak and cliff trek along the Costa Quebrada.",
      },
      {
        day: "III",
        title: "Picos de Europa",
        detail: "Transfer inland, cable-car to the mountain ridge, guided hike on the Ruta del Cares.",
      },
      {
        day: "IV",
        title: "Rest & Ride",
        detail: "Morning yoga, afternoon e-bike through the lower valley.",
      },
      {
        day: "V",
        title: "Departure",
        detail: "Farewell seafood lunch in Santander, transfers to airport or train station.",
      },
    ],
  },
];

export function tourBySlug(slug: string) {
  return TOURS.find((t) => t.slug === slug);
}
