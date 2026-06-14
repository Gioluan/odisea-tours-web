export type AuthorId = "juan" | "aitor" | "raul";

export interface Author {
  id: AuthorId;
  name: string;
  role: string;
  bio: string;
}

export const AUTHORS: Record<AuthorId, Author> = {
  juan: {
    id: "juan",
    name: "Juan Sanchez",
    role: "Director, Odisea Tours",
    bio: "Founded Odisea Tours in 2005. Twenty years organising group sport and cultural tours across Spain.",
  },
  aitor: {
    id: "aitor",
    name: "Aitor Corres",
    role: "Middle East Specialist",
    bio: "Middle East specialist with deep roots across the region and decades of group travel experience.",
  },
  raul: {
    id: "raul",
    name: "Raul Sanz",
    role: "Lead Representative, Spain",
    bio: "On the ground in Spain for every tour. Certified fitness and health instructor.",
  },
};

export function authorById(id: AuthorId | undefined): Author {
  return AUTHORS[id ?? "juan"];
}

const AUTHOR_BY_SLUG: Record<string, AuthorId> = {
  "spain-soccer-tour-day-by-day": "juan",
  "best-football-tour-destinations-barcelona": "aitor",
  "what-parents-need-to-know-youth-football-tours-spain": "juan",
  "corporate-team-building-retreats-spain": "juan",
  "how-to-organize-school-football-tour-spain": "juan",
  "sabores-de-espana-food-wine-tour-spain": "aitor",
  "youth-soccer-tours-to-spain-complete-guide": "juan",
  "walking-camino-de-santiago-with-a-group": "aitor",
  "how-to-fundraise-for-your-teams-spain-tour": "juan",
  "what-a-youth-soccer-tour-to-spain-costs": "juan",
  "la-masia-la-fabrica-academies-worth-visiting": "raul",
  "how-to-plan-a-group-trip-to-spain": "juan",
  "real-madrid-or-fc-barcelona-which-stadium-visit": "raul",
  "top-5-football-stadiums-visit-spain-soccer-tour": "raul",
  "arranging-friendly-matches-against-spanish-youth-clubs": "raul",
  "best-time-of-year-for-a-youth-soccer-tour-to-spain": "juan",
  "why-la-masia-is-still-the-best-football-visit-in-europe": "raul",
  "barcelona-vs-madrid-best-city-football-tour-spain": "raul",
  "valencia-sevilla-football-cities-most-tours-miss": "raul",
  "pre-tour-checklist-coach-field-guide": "raul",
  "training-spanish-fa-rfef-football-tour-experience": "raul",
  "what-parents-ask-before-europe-soccer-tour": "juan",
  "why-veterans-football-tours-spain-are-booming": "juan",
  "why-australian-teams-choosing-spain-over-england": "juan",
  "best-softball-tours-spain-us-teams": "juan",
};

const TAGS_BY_SLUG: Record<string, string[]> = {
  "spain-soccer-tour-day-by-day": ["youth soccer", "Spain", "day by day", "Madrid", "Valencia", "Barcelona", "tour planning", "complete guide"],
  "best-football-tour-destinations-barcelona": ["Barcelona", "Camp Nou", "football tours", "Spain"],
  "what-parents-need-to-know-youth-football-tours-spain": ["youth tours", "parents", "safeguarding", "Spain"],
  "corporate-team-building-retreats-spain": ["corporate retreats", "team building", "Spain", "Basque Country", "La Rioja"],
  "how-to-organize-school-football-tour-spain": ["school tours", "PE", "safeguarding", "Spain"],
  "sabores-de-espana-food-wine-tour-spain": ["food and wine", "Sabores de Espana", "Basque Country", "La Rioja"],
  "youth-soccer-tours-to-spain-complete-guide": ["youth soccer", "complete guide", "Spain", "tour planning"],
  "walking-camino-de-santiago-with-a-group": ["Camino de Santiago", "group walking", "Galicia", "pilgrimage"],
  "how-to-fundraise-for-your-teams-spain-tour": ["fundraising", "youth clubs", "tour budget", "sponsorship"],
  "what-a-youth-soccer-tour-to-spain-costs": ["pricing", "tour cost", "youth soccer", "Spain"],
  "la-masia-la-fabrica-academies-worth-visiting": ["La Masia", "La Fabrica", "academies", "Valencia CF"],
  "how-to-plan-a-group-trip-to-spain": ["group travel", "trip planning", "Spain"],
  "real-madrid-or-fc-barcelona-which-stadium-visit": ["Bernabeu", "Camp Nou", "stadium tours", "Spain"],
  "top-5-football-stadiums-visit-spain-soccer-tour": ["stadium tours", "La Liga", "Spain"],
  "arranging-friendly-matches-against-spanish-youth-clubs": ["friendly matches", "youth football", "Spain"],
  "best-time-of-year-for-a-youth-soccer-tour-to-spain": ["seasonality", "youth tours", "Spain"],
  "why-la-masia-is-still-the-best-football-visit-in-europe": ["La Masia", "FC Barcelona", "academies"],
  "barcelona-vs-madrid-best-city-football-tour-spain": ["Barcelona", "Madrid", "football tours", "Spain"],
  "valencia-sevilla-football-cities-most-tours-miss": ["Valencia", "Sevilla", "off-the-beaten-path", "Spain"],
  "pre-tour-checklist-coach-field-guide": ["coaching", "pre-tour checklist", "logistics"],
  "training-spanish-fa-rfef-football-tour-experience": ["RFEF", "Spanish FA", "training", "Las Rozas"],
  "what-parents-ask-before-europe-soccer-tour": ["parents", "FAQ", "youth tours", "Europe"],
  "why-veterans-football-tours-spain-are-booming": ["veterans football", "masters", "Spain"],
  "why-australian-teams-choosing-spain-over-england": ["Australia", "youth tours", "Spain", "England"],
  "best-softball-tours-spain-us-teams": ["softball", "Spain", "US teams", "softball tours", "CBS Rivas", "Sant Boi", "Fenix Valencia", "Madrid", "Valencia", "Barcelona"],
};

export function authorOf(post: Post): Author {
  return authorById(post.author ?? AUTHOR_BY_SLUG[post.slug]);
}

export function tagsOf(post: Post): string[] {
  return post.tags ?? TAGS_BY_SLUG[post.slug] ?? [post.category, "Spain", "group travel"];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface HowToData {
  name: string;
  description?: string;
  totalTime?: string;
  steps: HowToStep[];
}

const HOWTO_BY_SLUG: Record<string, HowToData> = {
  "how-to-fundraise-for-your-teams-spain-tour": {
    name: "How to fundraise for your team's Spain tour",
    description:
      "A practical playbook to fund a youth or school football tour to Spain across local sponsorship, crowdfunding, community events and structured payment plans.",
    totalTime: "P9M",
    steps: [
      {
        name: "Build a local business sponsorship deck",
        text: "Identify 10 to 15 local businesses connected to your club's families (dentist, dealership, real-estate agent, restaurant, gym). Send each a one-page PDF with club crest, tour dates and three sponsorship tiers from 250 to 1,500 dollars in exchange for kit logo, social mentions and a framed squad photo at a Spanish stadium.",
      },
      {
        name: "Launch a focused crowdfunding campaign",
        text: "Set a specific dollar goal, a hard deadline and a 60 to 90 second team video explaining why the trip matters. Update the page weekly with new content. Strong campaigns raise 3,000 to 12,000 dollars when the story is personal and the cadence is steady.",
      },
      {
        name: "Run two to four community events",
        text: "Schedule one car wash and one bake sale per quarter. Plan for 400 to 800 dollars per event. Treat these as community-building moments that keep families engaged, not as the primary revenue source.",
      },
      {
        name: "Offer a 12-month structured payment plan",
        text: "Spread the per-player tour cost over 10 to 12 monthly instalments starting at booking. A 3,000 dollar tour becomes a 250 dollar monthly line item families can absorb. Add an early-bird discount of 5 to 10 percent for families who commit and start paying 6+ months out.",
      },
      {
        name: "Combine all four sources on one spreadsheet",
        text: "Map sponsorship + crowdfunding + events + payment plan against the total tour cost per family. The clubs that fund tours successfully are the ones that attack from all four directions in parallel, not the ones who rely on a single channel.",
      },
    ],
  },
  "how-to-organize-school-football-tour-spain": {
    name: "How to organize a school football tour to Spain",
    description:
      "Step by step for PE teachers and school coaches planning a football tour to Spain, from board approval through safeguarding, supervision ratios and match scheduling.",
    totalTime: "P12M",
    steps: [
      {
        name: "Pitch it to the school board with numbers",
        text: "Prepare a one-page brief: per-pupil cost, insurance certificate, safeguarding protocol, risk assessment and educational justification (language exposure, cultural competency, teamwork). Compare the tour cost to your nearest residential trip to make value land.",
      },
      {
        name: "Lock the safeguarding framework",
        text: "Run a minimum 1 adult to 10 pupils supervision ratio. Confirm ground coordinators are DBS-checked or equivalent, hotels have secured floors with key-card access, and a curfew walk happens at 23:00 every night. Brief the lead teacher on medical, passport and behavioural protocols before departure.",
      },
      {
        name: "Design the right day shape",
        text: "Morning training (2 hours) at a professional or semi-pro facility with a Spanish coach and translator. Sit-down lunch with dietary requirements briefed in advance. Afternoon cultural visit or friendly match. Evening dinner together followed by supervised downtime. Keep activities and rest in balance.",
      },
      {
        name: "Schedule two matches per week, not more",
        text: "Two friendlies per week is the right number. Three over-fatigues pupils and the second-week matches degrade. One is not enough to justify the trip. Match against organised Spanish school sides matched to your age and level.",
      },
      {
        name: "Book 12 months ahead",
        text: "The best training facilities, Spanish school opponents and Easter or half-term windows fill 9 to 12 months out. October and early November give the best availability, lower prices and ideal weather. Anything inside three months means working from what is left.",
      },
    ],
  },
  "how-to-plan-a-group-trip-to-spain": {
    name: "How to plan a group trip to Spain",
    description:
      "Five operating rules for planning a group trip to Spain that keep 20 plus travellers happy without diluting the experience.",
    totalTime: "P4M",
    steps: [
      {
        name: "Pick a spine and protect it",
        text: "Choose one unifying idea (football, food, the Camino, history). Every day anchors around it. Once the spine is set the hotel choice, the bus timing and the restaurant bookings all become easier. Trying to please 25 people in 25 directions pleases no one.",
      },
      {
        name: "Spend on what people will remember",
        text: "Travellers remember the dinner on the terrace with the guitar player and forget the mid-range rental car. Book the rental car on a budget and the terrace dinner without apology. Allocate the budget to the moments that will outlive the trip.",
      },
      {
        name: "Build a shadow itinerary for weather",
        text: "Every outdoor day needs a quietly prepared indoor alternative. Spain is sunny until it is not. Switch the itinerary without announcing the change. Nobody notices except that the day still worked.",
      },
      {
        name: "Leave breathing room in the day",
        text: "The best moments are usually the ones that were not scheduled. Build fewer items into each day and protect 60 to 90 minutes of unstructured time. Tired groups do not enjoy themselves and the photographs all start to look the same.",
      },
      {
        name: "Pick the operator who answers at 2am",
        text: "Every trip has at least one thing that goes sideways. Flight delays, sick travellers, closed restaurants. The measure of a group travel operator is what happens at 2am on the day that did not go to plan. Choose accordingly.",
      },
    ],
  },
  "pre-tour-checklist-coach-field-guide": {
    name: "Pre-tour checklist for coaches travelling to Spain",
    description:
      "The five items only the club can handle before a Spain football tour. Passports, medical, kit, currency and the talk that decides how the trip lands.",
    totalTime: "P3M",
    steps: [
      {
        name: "Check every passport 90 days before departure",
        text: "Every player and adult needs a passport valid at least six months past the return date. Check each one by hand 90 days before the trip, not 90 days before booking. One four-month-validity passport can pull an entire travel plan apart at Spanish immigration.",
      },
      {
        name: "Collect medical forms and insurance",
        text: "Get a signed travel medical form for each player listing allergies and emergency contacts. Confirm team insurance explicitly covers international travel or buy a supplemental policy. Collect a signed permission slip allowing the head coach to consent to medical care in a foreign country.",
      },
      {
        name: "Brief the kit packing list",
        text: "Each player travels with two full training sets and one match kit. Training kit gets destroyed faster than the match shirt. Plan one kit rotation per day with a laundry turnaround built into the itinerary on day four.",
      },
      {
        name: "Set up currency, cards and phones in advance",
        text: "Confirm at least one adult per group carries a chip-and-PIN debit card that works internationally. Float 50 to 100 euros cash per player for incidentals. Put phones on an international plan before departure, not at the airport.",
      },
      {
        name: "Have the meaning-of-the-trip talk before they fly",
        text: "Spend an hour with the players in the week before the trip. Tell them plainly what the tour is, what the opponents will be like, how to behave at La Masia and what is expected of them at the dinner table and on the bus. Teams who are told this arrive prepared. Teams who are not arrive only excited.",
      },
    ],
  },
};

export function howToOf(post: Post): HowToData | null {
  return HOWTO_BY_SLUG[post.slug] ?? null;
}

export type ClusterId = "soccer" | "softball" | "culinary" | "camino" | "corporate" | "planning";

const CLUSTER_BY_SLUG: Record<string, ClusterId> = {
  "spain-soccer-tour-day-by-day": "soccer",
  "best-football-tour-destinations-barcelona": "soccer",
  "what-parents-need-to-know-youth-football-tours-spain": "soccer",
  "corporate-team-building-retreats-spain": "corporate",
  "how-to-organize-school-football-tour-spain": "soccer",
  "sabores-de-espana-food-wine-tour-spain": "culinary",
  "youth-soccer-tours-to-spain-complete-guide": "soccer",
  "walking-camino-de-santiago-with-a-group": "camino",
  "how-to-fundraise-for-your-teams-spain-tour": "soccer",
  "what-a-youth-soccer-tour-to-spain-costs": "soccer",
  "la-masia-la-fabrica-academies-worth-visiting": "soccer",
  "how-to-plan-a-group-trip-to-spain": "planning",
  "real-madrid-or-fc-barcelona-which-stadium-visit": "soccer",
  "top-5-football-stadiums-visit-spain-soccer-tour": "soccer",
  "arranging-friendly-matches-against-spanish-youth-clubs": "soccer",
  "best-time-of-year-for-a-youth-soccer-tour-to-spain": "soccer",
  "why-la-masia-is-still-the-best-football-visit-in-europe": "soccer",
  "barcelona-vs-madrid-best-city-football-tour-spain": "soccer",
  "valencia-sevilla-football-cities-most-tours-miss": "soccer",
  "pre-tour-checklist-coach-field-guide": "soccer",
  "training-spanish-fa-rfef-football-tour-experience": "soccer",
  "what-parents-ask-before-europe-soccer-tour": "soccer",
  "why-veterans-football-tours-spain-are-booming": "soccer",
  "why-australian-teams-choosing-spain-over-england": "soccer",
  "best-softball-tours-spain-us-teams": "softball",
};

export interface PillarInfo {
  href: string;
  title: string;
  blurb: string;
  ctaLabel: string;
}

export const PILLAR_BY_CLUSTER: Record<ClusterId, PillarInfo | null> = {
  soccer: {
    href: "/soccer-tours-spain",
    title: "Soccer Tours in Spain",
    blurb:
      "The full operator-level breakdown of pricing, training homes (FC Barcelona, Valencia CF, the Spanish FA), audiences and the four formats lives on our soccer pillar guide. Start there if this is the first thing you have read about how we run a Spain soccer tour.",
    ctaLabel: "Read the Soccer Tours in Spain pillar",
  },
  softball: {
    href: "/tours/softball-tours-spain",
    title: "Spain Softball Experience",
    blurb:
      "The full day-by-day for our softball tour, the four host clubs (CBS Rivas, the Selección Valenciana U22, Sófbol Fénix Valencia and CB Sant Boi), inclusions and group pricing all live on the Spain Softball Experience tour page. Start there if you are weighing a softball tour to Spain for your US team.",
    ctaLabel: "Read the Spain Softball Experience tour page",
  },
  culinary: {
    href: "/tours/sabores-de-espana",
    title: "Sabores de España",
    blurb:
      "The full day-by-day for our culinary tour through Barcelona, Penedès, La Rioja, San Sebastián and Pamplona lives on the Sabores de España tour page. Inclusions, group size, the cooking class and what is on each table are all listed there.",
    ctaLabel: "Read the Sabores de España tour page",
  },
  camino: {
    href: "/tours/camino-de-santiago",
    title: "Camino de Santiago",
    blurb:
      "The full seven-day group Camino itinerary from Sarria to Santiago, with daily distances, hotel selection and luggage transfers, lives on the Camino de Santiago tour page.",
    ctaLabel: "Read the Camino de Santiago tour page",
  },
  corporate: {
    href: "/tours/corporate-retreats",
    title: "Corporate Retreats in Spain",
    blurb:
      "The full menu of corporate retreat options across the Basque Country, La Rioja, Andalucía and the Camino lives on the Corporate Retreats tour page. Group sizes, activity options and what a typical five-day itinerary looks like.",
    ctaLabel: "Read the Corporate Retreats tour page",
  },
  planning: null,
};

export function clusterOf(post: Post): ClusterId {
  return CLUSTER_BY_SLUG[post.slug] ?? "planning";
}

export function pillarOf(post: Post): PillarInfo | null {
  return PILLAR_BY_CLUSTER[clusterOf(post)];
}

export interface Post {
  slug: string;
  title: string;
  italicTitle?: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  readTime: string;
  category: string;
  cover: string;
  body: string[];
  author?: AuthorId;
  tags?: string[];
  faqs?: FAQ[];
}

export const POSTS: Post[] = [
  {
    slug: "spain-soccer-tour-day-by-day",
    title: "A 10-Day Spain Soccer Tour, Day by",
    italicTitle: "Day",
    excerpt:
      "What actually happens on a 10-day youth soccer tour to Spain, hour by hour, from the airport pickup in Madrid to the last paella in Barcelona. Written from the operator side of the bus.",
    date: "2026-05-23",
    readTime: "14 min",
    category: "Field Notes",
    cover: "/photos/veterans-soccer-tour-match-vs-spanish-team.jpg",
    faqs: [
      {
        q: "How long is a typical Spain soccer tour?",
        a: "Most youth and high school tours run 7 to 10 nights. Our most-booked shape is 10 nights across three cities (Madrid, Valencia and Barcelona), which gives the group two real training cycles, two friendly matches, one La Liga night, two stadium days and a rest day in the middle. Anything shorter than 7 nights burns half the trip on airport transfers. Anything longer than 12 starts to fatigue younger players.",
      },
      {
        q: "Why three cities instead of one base?",
        a: "Because Spanish soccer is not a single thing. Madrid is national-team scale, the Spanish FA, the Bernabéu. Valencia is human-scale, intimate, Mediterranean, the home of a different coaching pedagogy. Barcelona is the Cruyff legacy. Putting the players in all three teaches a comparative lesson no single city can replicate. The bus days between them are part of the trip, not a tax on it.",
      },
      {
        q: "What does a typical training day on tour look like?",
        a: "Two hours on the pitch in the morning at a professional or semi-professional facility, run by a Spanish coach with our trip leader translating. A sit-down lunch after, dietary requirements briefed in advance to the kitchen. An afternoon that is either a cultural visit, a friendly match, or unstructured free time depending on the day shape. Evenings are group dinners and supervised downtime. Two training days, two match days and two stadium days are the spine of a 10-night tour.",
      },
      {
        q: "How many matches does the tour include?",
        a: "Two friendlies per week against Spanish academy or amateur sides matched to your age and level. Two is the right number. Three over-fatigues younger players and the second-week match degrades. One is not enough to justify the trip. Fixtures are confirmed in writing with the club name and the specific opponent age group before departure.",
      },
      {
        q: "What is the Odisea trip leader actually doing each day?",
        a: "Riding the bus with the group every kilometre. Translating training sessions and team talks. Confirming the next day's training facility access by phone with the home club. Briefing every restaurant on dietary requirements before the group arrives. Carrying first aid, emergency contacts and a card with the local hospital network. Answering the phone at 02:00 if a passport gets lost. The coach coaches. The trip leader handles the country.",
      },
    ],
    body: [
      "Every Spain soccer tour we run is custom built, but the shape of a 10-night trip across Madrid, Valencia and Barcelona has held steady for the last decade because it works. Two training cycles, two matches, two stadium days, a rest day in the middle, and three cities that teach the players a comparative lesson about Spanish soccer they cannot get from one base. This post is the day-by-day version of that trip, written from the operator side of the bus, the way it actually runs when a group of twenty under-sixteens from California or Sydney lands in Madrid on a Tuesday morning in October.",
      "We are publishing this because new clients ask for it constantly, and the brochures we send back never quite capture the texture of a real tour. The brochure tells you that the group trains at the Spanish FA and visits the Bernabéu. It does not tell you why we schedule the stadium tour for Day 3 instead of Day 1, why the bus to Valencia leaves at 09:30 and not at 08:00, or why we put the rest day in the middle and not at the end. Those are the small operator decisions that decide whether a tour lands properly. We have made them thousands of times. Here is what they look like in sequence.",
      "## Day 1 · Arrival into Madrid",
      "The first day of a Spain tour is not really a tour day. It is a recovery day with the appearance of a tour day, and the operators who treat it as a real day are the ones who blow up their own week. The group lands at Madrid Barajas, typically between 09:00 and 11:00 from a US East Coast red-eye or between 06:30 and 08:30 from a Sydney or Brisbane flight that connected through Doha or London. Our trip leader meets the group at the arrivals door with a printed sign and a smile, runs a head count before anyone walks fifty metres, and walks the whole group to the private coach waiting at the terminal exit. The coach drives directly to the hotel, which is by design a fifteen-minute ride from the airport and not in the centre of Madrid. We learned long ago that fighting Madrid traffic on Day 1 with a planeload of jet-lagged teenagers is a mistake.",
      "Check-in happens at noon, which the hotel holds for us because we book early and we book the whole floor. Rooms are pre-assigned from a list the coach sends two weeks before departure, which removes the queue of twenty kids and three adults arguing about who is in with whom. Bags drop. Players have ninety minutes of unstructured time, which means showers, naps, and a slow drift toward the lobby. We do not schedule a training session on Day 1. We do not schedule a stadium tour. We do not even leave the hotel for lunch, which we serve in the hotel restaurant where the kitchen has already been briefed on every dietary requirement on the roster. Mid-afternoon, the trip leader holds a fifteen-minute team meeting in the function room: tomorrow's schedule, the rules of the road in Spain, the curfew, the emergency card we hand each player with the hotel address and our local mobile number in Spanish and English. By 19:30 the group walks ten minutes to a restaurant we have used for fifteen years, eats a proper Spanish dinner under a vaulted brick ceiling, and is back at the hotel by 22:00. Lights out by 23:00, which is the only curfew that ever gets respected on a tour because by 23:00 on Day 1 nobody has the energy to fight it.",
      "## Day 2 · First training at the Spanish FA",
      "Day 2 is when the tour actually begins, and we begin it on purpose at the Spanish Football Federation's headquarters at Las Rozas, north of Madrid. The reason is straightforward. The Spanish FA is the most serious training environment any visiting youth team will set foot in during their trip, and starting there sets the bar for the rest of the week. The complex sits in the Sierra de Guadarrama foothills, twenty-five minutes from central Madrid, with multiple full-size grass pitches, an indoor facility, a residence where the senior national team stays during international windows, and a dining hall the players eat in at lunch. Walking through the gate on a Wednesday morning in October, past the framed photos of every Spain squad that has won a major tournament, is the moment most players understand what they have come for.",
      "The session itself runs two hours. A Spanish FA-credentialed coach takes the group through a warm-up, technical work, a positional progression, and a small-sided game with a tactical brief at the start. Our trip leader translates in real time. The home coaches who run the visiting-group sessions are good. They know how to read the level of a visiting squad in the first fifteen minutes and adapt without making it obvious. They will compliment a player publicly. They will correct a player in private. They will work the goalkeepers in a separate area for thirty minutes with a specialist. By the end of the session the players are tired, slightly stunned, and already speaking about the Spanish coach by his first name. Lunch is served at the federation's dining hall, the same room the national team eats in, and the food is genuinely excellent, which is a small joke we let the players figure out on their own. Afternoon back to the hotel, a short walking tour of Madrid's Retiro park to keep the legs loose, dinner at the hotel, lights out early. Tomorrow is the Bernabéu day, and they need to be sharp for it.",
      "## Day 3 · The Bernabéu, then Madrid",
      "We deliberately schedule the Bernabéu stadium visit for Day 3 and not Day 1. The reason matters. A stadium tour on Day 1 lands as a sightseeing visit, the same way it would for a tourist family on a city break. A stadium tour on Day 3, after a real training session in a real federation environment, lands as part of the soccer story the group is now living inside. The Bernabéu is the most ambitious stadium build in world soccer, the rebuilt version with the retractable roof, the liftable pitch, and the golden skin that changes colour in the afternoon light. The full guided tour takes ninety minutes, includes the changing rooms, the tunnel, the bench, the pitchside, the trophy room with the fifteen Champions League trophies, the press room where every televised post-match interview happens, and the museum, which is the single best soccer museum in Europe.",
      "We book the tour for late morning, when the angle of the light through the glass facade is strongest and the crowds are still thin. Players take photos at the bench, sit in the press room and pretend to take questions, stand in the tunnel and feel the floor vibrate underneath them. The trip leader has done this tour ninety times and still notices the moment a fifteen-year-old realises what they are standing in. Lunch is at a restaurant in the Chamartín neighbourhood ten minutes from the stadium, where we have a private room reserved that holds thirty without anyone having to shout. The afternoon is free time on the Gran Vía and at Puerta del Sol, in supervised small groups with a meeting time and a meeting point. Some players buy a Real Madrid shirt. Some players buy nothing. By 20:00 the whole group is back at the hotel. Dinner that night is at a tablao in the Madrid centre, a traditional flamenco dinner show that the adults love and the players grudgingly admit was better than they expected. Back to the hotel by 23:00. Tomorrow is match day.",
      "## Day 4 · Match day in Madrid",
      "Match day in Madrid is the first competitive moment of the tour, and we treat it the way we would treat a regional semi-final at home. The opposition is confirmed in writing two months before the group arrives. For a U16 team from the West Coast on a development tour, the opponent might be the U17 side of a Tercera RFEF club from the Madrid region, an organised, properly coached youth team one tier below the professional pyramid, competitive without being humiliating. For a U14 team from a private school in Texas, it might be the U15 side of a Segunda RFEF affiliate. We name the club. We confirm the age group. We pick the right tier. The matches are played on real grass, with Spanish federation referees, on a Wednesday or Thursday evening between 17:00 and 19:00, which avoids the worst of the heat in summer and gives us match-quality light all year.",
      "The day itself is paced for performance. A late breakfast, a short walk, a video review session in the function room at the hotel where the head coach previews the opponent in twenty minutes. A light lunch around 13:00. A pre-match meal at 15:00 of pasta with chicken and bread, prepared by the hotel kitchen to our standing pre-match brief. The team meets in the lobby at 16:00 in full kit, boards the bus, and arrives at the pitch ninety minutes before kickoff. The home club has a small clubhouse where the visiting team gets a dressing room, water, and a quiet space for the head coach's team talk. The match itself almost always plays out the same way. The first twenty minutes are tight while both sides figure each other out. The middle thirty minutes are where the Spanish side typically takes control, because their team chemistry has been built over years and the visiting side has been together for fifteen days, of which ten of them were in a plane or a hotel. The last twenty minutes are where the visiting team adjusts, makes substitutions, and finishes the match strong. The result, almost always, does not matter. What matters is the post-match handshake line, the photo with the home team that the home coach insists on, and the bus ride back to the hotel where twenty teenagers process what just happened on a Spanish pitch in front of forty Spanish parents who applauded politely for both teams. That ride is one of the moments the tour was built for.",
      "## Day 5 · Bus to Valencia",
      "Day 5 is a travel day, and the operators who try to crowbar a training session or a cultural visit into a travel day are the ones who lose the second half of the tour. We have made this mistake. We do not make it any more. The group checks out of the Madrid hotel at 09:00, boards the bus at 09:30, and rides four hours south-east to Valencia along the A-3 motorway, through the high plains of Castilla-La Mancha that look like the openings of every Spanish film the players have never seen. We stop once at a roadside cafeteria fifteen minutes outside Albacete for an early lunch of bocadillos, fresh fruit and one coffee per adult. We pull into Valencia at 14:30. We check into the hotel by 15:00. The afternoon is intentionally and aggressively unstructured.",
      "Players are given the rest of the day off until a 20:00 dinner in the Ruzafa neighbourhood. Some sleep. Some walk to the beach, which is a twenty-minute tram ride from the hotel and as flat and warm a Mediterranean beach as exists in Europe in October. Some go with a parent to the central market, which is the most beautiful daily food market in Spain. Our trip leader is in the hotel lobby with a phone and a city map, available to anyone who needs a translation or a recommendation, not pushing an itinerary. Dinner that evening is a Valencian paella, the real one, made in front of the group in a wide flat pan over a wood fire, with the socarrat layer at the bottom that the chef shows the players how to scrape with a spoon. The energy of the group on the second night in a new city is the moment the tour stops feeling like a school trip and starts feeling like an adventure. The bus driver gets a glass of wine at the end of the meal. So does the trip leader. Lights out by 23:30. Tomorrow is Paterna.",
      "## Day 6 · Valencia CF at Paterna, plus Mestalla",
      "Valencia is the secret weapon of a Spain soccer tour, and Day 6 is why. Valencia CF's training ground at Paterna is twenty minutes outside the city, set into a hillside on the edge of a small industrial town, and the experience there is fundamentally different from Madrid or Barcelona. Where the Spanish FA is institutional and Joan Gamper is a campus, Paterna feels like a working club. There is no museum. There is no gift shop. There is a security gate, a sign, a pitch, and a coach. The visiting-group session at Paterna is led by Valencia CF coaching staff and built around a more direct, more aggressive tactical pedagogy than the possession-first approach the players experienced at the Spanish FA two days earlier. The contrast is deliberate. The players spend the first thirty minutes wondering what is different and the next ninety figuring it out.",
      "Lunch is at the club restaurant next to the training pitches, a relaxed buffet that the players are now hungry enough to attack properly. After lunch we drive twenty minutes into the city to Mestalla. The stadium is one of the oldest in continuous professional use in Spain, the stands are vertical in a way no modern stadium is, and the tour takes the group through the dressing rooms, the tunnel, the dugout area, and the presidential box, which still looks like a senator's office from a 1950s film. The total time inside the stadium is around an hour. The players take photographs at the bench. The trip leader points out the section of the stand where the Mestalla ultras sit during a derby and explains, with restraint, what a Valencia versus Levante derby is actually like. We leave the stadium by 17:00. The evening is dinner in the city centre, a casual sit-down meal at a tapas restaurant on a pedestrianised street, where the players eat with their hands and the parents drink albariño. By 22:30 everyone is walking back to the hotel through streets that are still busy because Valencia eats late. Lights out by 23:30. Tomorrow is a long bus, and we leave early.",
      "## Day 7 · Bus to Barcelona, arrival at sundown",
      "The Madrid to Valencia bus is four hours. The Valencia to Barcelona bus is three and a half. We schedule the Valencia to Barcelona leg on Day 7 not because we have to but because the arrival into Barcelona at the end of a tour, after the players have already trained at the federation and at a La Liga club, hits differently than it would on Day 1. Barcelona, for a teenager who has spent six days learning what Spanish soccer takes seriously, lands as the emotional culmination of the trip and not as a starting point. The drive itself runs north along the Mediterranean coast on the AP-7, past Castellón (which is where Odisea is based, and which the trip leader will point out without making a speech about it), past the wind turbines on the ridges above Tarragona, and finally into the southern outskirts of Barcelona around 14:30.",
      "We check into the hotel in the Eixample district, which is central enough to walk to the Gothic Quarter and far enough from Las Ramblas to sleep. The afternoon is intentionally light. A walking tour of the Gothic Quarter at the golden hour, led by our trip leader and a local guide who has been working with us since 2009, takes the group through the Plaça del Rei, the Cathedral, the Carrer dels Banys Nous where the silversmiths used to work, and ends in a square with a guitar player and an outdoor café. Players sit. Adults order vermouth. The light goes orange. Dinner is at 21:00 in a restaurant we have used for nineteen years where the chef remembers our trip leader by name and brings out a plate of pan con tomate before we have even ordered. Back at the hotel by 23:30. Tomorrow is the day many of the players will tell their parents about for the rest of their lives.",
      "## Day 8 · Joan Gamper, the FC Barcelona training ground",
      "FC Barcelona's training complex at Joan Gamper is the most famous youth-development facility in world soccer, and the visiting-group session here is the one most teams come to Spain for. The complex sits next to the Camp Nou site, and the entrance is unmarked, which is by design. The security gate, the long driveway, the row of pitches behind a low concrete wall, the small Lluís Companys logo on the side of the administrative building. There is no gift shop. The session itself is two hours, run by FC Barcelona academy coaching staff, built around the Cruyff-era positional play and rondo progressions that the club still teaches its own under-twelves. The progression is deceptively simple. Three small-sided rondos. A positional game in a fifteen-by-fifteen grid. A small-sided game with constraints. By minute thirty the visiting players understand that what they have been told all their lives is just a rondo is actually a positional teaching tool with twenty layers of complexity. By minute ninety the head coach of the visiting team is taking notes.",
      "The session ends with a brief talk from the FC Barcelona coach, often translated by our trip leader on the spot, about what they have just seen and what they should take home with them. A certificate is presented to each player at the end, individually, by name. We are not above describing this in marketing language: the photo of a fourteen-year-old American shaking hands with an FC Barcelona academy coach in front of the team crest is the photo their parents print and frame. We arrange for a group photo on the pitch. We arrange for individual photos with the coach if requested in advance. Lunch is in the club's training-ground restaurant, which is where the senior squad eats. The food is, for the third time on this tour, genuinely excellent. Afternoon free, dinner together at the hotel restaurant, an early night because tomorrow is Camp Nou and a La Liga match and the players need every hour of sleep we can build into the schedule.",
      "## Day 9 · Camp Nou and a La Liga match",
      "Day 9 is the longest and most charged day of the tour. We split it into two distinct halves. The morning is Camp Nou. Even mid-renovation, the stadium still does what no other ground in Europe does to a teenager who walks into it for the first time. The Immersive Tour takes the group through the visiting team's dressing room, the players' tunnel, onto the pitchside, up to the commentary boxes, and through the museum, which is the most-visited museum in Barcelona ahead of the Picasso. Players photograph everything. The trip leader keeps the group moving but not rushed. By 12:30 we are out of the stadium, by 13:00 we are at lunch at a restaurant we have used for so long that the owner refuses to let us pay him on the last day of every tour.",
      "The afternoon is free until 17:30, when the group meets at the hotel in full club shirts. Tonight the players are attending a La Liga match. The fixture depends on the calendar. In October it might be Barcelona against Real Sociedad or Espanyol against Atlético Madrid. In April it could be Girona against Sevilla. We have a relationship with a ticket broker who allocates a thirty-seat block in the second tier of the home end at every game we attend, so the group sits together. We arrive at the stadium ninety minutes before kickoff, walk in with the locals, and spend twenty minutes in the concourse before taking our seats. The match itself is a backdrop for the experience of being inside a Spanish stadium on a Wednesday night with forty thousand people who care more than any home crowd the players have ever experienced. The bus is waiting outside the away gate at the final whistle. We are back at the hotel by 23:30. Dinner is sandwiches the hotel has prepared and held in the function room. Players eat in fifteen minutes and go to bed without prompting. Tomorrow is the last day.",
      "## Day 10 · Farewell brunch, then home",
      "The last day is short on schedule and long on feeling. Breakfast at the hotel is unhurried. The trip leader hands each player a small printed envelope with a USB drive of the match-day photos and a handwritten note from Odisea Tours. The head coach makes a short speech in the lobby, thanks the trip leader, thanks the bus driver, and reminds the players that what they did on this tour is not over the moment they board the plane. At 11:00 we leave the hotel for a final group brunch at a restaurant in the Born neighbourhood where the windows are open onto a small medieval plaza. The food is jamón, manchego, pan con tomate, tortilla, and the kind of bread that the players have learned over ten days to recognise as different from what they get at home. The owner brings out a plate of croquetas the players did not order and tells the trip leader, in Spanish, that this group was better behaved than the last one.",
      "By 13:30 the bus is at the restaurant. By 14:30 we are at the airport. Our trip leader walks the group to the check-in counter, watches the bags onto the belt, sees the group through security, and waves from the rail above the departures hall. The players wave back from the escalator. The head coach, on the way through security, almost always turns around and thanks the trip leader one more time. The trip leader rides the empty bus back to the city with the driver, who has been on every kilometre of this tour. They get coffee at a service station outside Barcelona on the way back to the depot. They talk about which group this one reminded them of. They book the next tour into the calendar the next morning. The photo book arrives at the head coach's office in the States or in Australia three weeks later. The phone call from a parent, the one that says my child came home different, arrives roughly a month after that. The tour is finished. The change is permanent.",
      "## A note on what this post leaves out",
      "What this post leaves out, because no public document can include it honestly, is what goes wrong on every single tour. The flight delay that arrives two days before departure and breaks the Day 1 timing. The player who loses a passport on Day 4. The hotel that double-books a floor. The food poisoning that takes three players out of a training session. The bus that breaks down between Valencia and Barcelona on the AP-7. None of these failures are hypothetical. All of them have happened to groups we have run. The reason we still recommend a 10-night tour through three cities, after twenty years of these failures, is that the recovery from each of them is what builds the trust the group leaves Spain with. The flight delay is solved by the trip leader rebooking everything by phone in ninety minutes. The lost passport is solved by the embassy contact already in our coordinator's phone. The food poisoning is solved by the doctor we have on call in Madrid, Valencia and Barcelona. The bus breakdown is solved by a replacement coach that meets the group at the next motorway service station within forty-five minutes. None of those solutions are visible in the brochure. All of them are why the tour works.",
      "If you have read this far, you are almost certainly planning a tour. The honest next step is a call, not a quote. Tell us your squad size, your age group, your home city, your travel window, and your hard budget per player. We will come back inside seven days with a draft itinerary that names the hotels, names the training facilities, names the opposition tier, names the cities, and prices the trip per player without hiding anything. [Start the conversation here](/plan-your-tour). The full breakdown of pricing, training facilities, audiences and the four formats we run lives on the [Soccer Tours in Spain pillar guide](/soccer-tours-spain). The day-by-day above is one shape of the trip. The right one for your group is the one we build with you.",
    ],
  },
  {
    slug: "best-football-tour-destinations-barcelona",
    title: "The Best Football Tour Destinations in",
    italicTitle: "Barcelona",
    excerpt:
      "Barcelona offers more for a football tour group than any other city in Spain. From Camp Nou and La Masia to the Olympic Stadium and Espanyol, here is everything you can fit into one extraordinary visit.",
    date: "2026-04-17",
    readTime: "8 min",
    category: "Dispatches",
    cover: "/photos/veterans-soccer-tour-camp-nou-barcelona.jpg",
    body: [
      "Barcelona is the single best football tour destination in Spain, and it is not particularly close. We have been sending groups to this city since 2005, and every year the case gets stronger. The combination of world-class football infrastructure, a walkable city centre packed with culture, reliable Mediterranean weather, and a depth of experience that no other European city can match makes Barcelona the place where most groups want to start. Some groups come to Spain and visit two or three cities. Almost all of them wish they had spent more time in Barcelona. The city does not just host football tours. It absorbs them. Every corner of the place has something to offer a group that loves the game, and the non-football hours are just as rich as the ones spent on a pitch.",
      "## Camp Nou and the Joan Gamper academy",
      "Camp Nou is the anchor of any Barcelona football tour, and it remains extraordinary even in the middle of its long renovation. The stadium's sheer scale is the thing that hits first: ninety-nine thousand seats rising around you in a bowl that makes every other ground in Europe feel like a theatre. The museum, which is the most visited museum in Barcelona ahead of the Picasso, houses decades of trophies, match footage, and the kind of Messi memorabilia that makes teenage players go very quiet. The Immersive Tour takes groups through the tunnel, onto the pitchside, through the mixed zone, and into the commentary boxes. Even with scaffolding visible in places, the emotional weight of the place is untouched. For groups staying more than three days, we also recommend a visit to the Johan Gamper training complex, where La Masia's youth teams and the first team train on adjacent pitches. Watching a Barcelona youth session from the sideline is one of the most instructive ninety minutes in European football. We write about this in detail on our [European soccer tours page](/tours/european-soccer-tours).",
      "## Football experiences most itineraries miss",
      "Beyond Camp Nou, Barcelona offers football experiences that most itineraries overlook. The Montjuic Olympic Stadium, built for the 1992 Games, is a stunning venue that hosted the opening ceremony and still operates as a professional ground. It is where Espanyol played for several years, and the hilltop setting offers panoramic views over the entire city and the sea. Espanyol's current home, the RCDE Stadium in Cornella, is a modern, intimate ground that offers excellent group access and a friendlier, less corporate atmosphere than the bigger clubs. For groups interested in futsal, one of our favourite hidden gems is attending an FCB Futsal match at the Palau Blaugrana, the arena that sits right next to Camp Nou. The quality of play is breathtaking, the tickets are affordable, the atmosphere is intense, and your players will leave with a completely different understanding of close-quarters football. We recommend it to every group that asks us for something beyond the obvious.",
      "## The city beyond the football",
      "The city itself is the other half of the equation, and it is the reason Barcelona works so well for groups that include families, partners, or non-footballing travellers. The Gothic Quarter is a maze of medieval streets that opens into hidden plazas with guitar players and outdoor cafes. La Rambla runs from Placa Catalunya down to the port and is best walked early in the morning before the crowds build. Barceloneta beach is a fifteen-minute walk from the city centre and offers a full afternoon of sand, seafood restaurants, and the kind of low-effort recovery time that a group needs after three days of matches and stadium visits. The Sagrada Familia is unlike any building most visitors have ever seen, and the interior, flooded with coloured light from Gaudi's stained glass, tends to silence even the loudest group of teenagers. For groups with a [youth football focus](/youth), we build itineraries that alternate football mornings with cultural afternoons, and the feedback is consistently that Barcelona makes the balance effortless.",
      "## When to go and how to arrive",
      "The best time to visit Barcelona for a football tour is October through November or March through May. The weather in these windows sits comfortably in the low twenties Celsius, the hotel rates are significantly lower than summer, and the football calendar is in full swing. Summer tours are possible and we run plenty of them, but July and August bring heat that makes afternoon training sessions punishing, crowds that make stadium visits slower, and hotel prices that climb steeply. For groups arriving from the United States or Australia, a direct flight into Barcelona El Prat drops you twenty minutes from the city centre, and the airport transfer is one of the smoothest in Europe. We handle all ground logistics from the moment the group lands, including hotel check-in coordination, bus transfers, and restaurant bookings for groups of any size.",
      "## Where to stay",
      "Where to stay depends on the group's priorities. For football-first itineraries, we book hotels near the Joan Gamper training complex or in the Sants district, which sits close to Camp Nou and has excellent metro connections to the rest of the city. For groups that want to be in the centre of things, the Eixample neighbourhood offers wide boulevards, easy walking to the Gothic Quarter, and a huge range of restaurants that can seat large groups without advance drama. For budget-conscious clubs, the Poble Nou district near the beach has newer hotels at lower rates and a creative, local atmosphere that feels nothing like a tourist zone. Whatever the group profile, Barcelona has the accommodation and the infrastructure to handle it. If you are considering Barcelona for your next football tour, [get in touch through our planning page](/plan-your-tour) and we will build an itinerary that makes the most of every day in this city.",
    ],
  },
  {
    slug: "what-parents-need-to-know-youth-football-tours-spain",
    title: "What Parents Need to Know About Youth Football Tours",
    italicTitle: "to Spain",
    excerpt:
      "Written for parents, not coaches. The real answers to every question you have about safety, supervision, cost, and what your child will actually experience on a football tour to Spain.",
    date: "2026-04-17",
    readTime: "7 min",
    category: "Field Notes",
    cover: "/photos/odisea-tours-youth-girls-celebrating.jpg",
    faqs: [
      {
        q: "What is the supervisor-to-player ratio on Odisea Tours youth football tours?",
        a: "Every tour operates with a minimum ratio of one adult supervisor to ten players. Most school and club groups bring it closer to one to eight.",
      },
      {
        q: "How much does a youth football tour to Spain cost per player?",
        a: "A seven to ten night youth football tour to Spain, including full board, ground transport, training, stadium visits, matches, insurance and bilingual coordination, sits between roughly 2,800 and 3,800 dollars per player. International flights are quoted separately because airfare fluctuates.",
      },
      {
        q: "What is included in the tour price and what is extra?",
        a: "Included: accommodation, all meals on match and training days, bus transfers, training facility hire, coaching, stadium tours, match fees, referees, medical cover, and our on-the-ground team. Typically extra: international flights, personal spending money (we recommend fifty to a hundred euros), and any optional excursions added by the group.",
      },
      {
        q: "Can parents travel along with the youth team?",
        a: "Yes. A significant number of our youth tours include parents who travel alongside the group. While players train in the morning, parents can explore the city with our bilingual guide, visit a market, or take a cooking class, then meet the team for dinner.",
      },
      {
        q: "What does a typical day on tour look like?",
        a: "Morning training (about two hours) at a professional or semi-professional facility led by a Spanish coach with our coordinator translating. Sit-down lunch where dietary requirements are briefed in advance. Afternoons rotate between cultural visits, friendly matches against local Spanish youth teams, or free time. Evenings are group dinners followed by supervised downtime at the hotel.",
      },
      {
        q: "Are payment plans available for the tour?",
        a: "Yes. Many clubs offer twelve-month payment plans that bring the monthly cost down to roughly 250 to 320 dollars per family, which is manageable for most household budgets.",
      },
    ],
    body: [
      "This is written for you, the parent, not the coach. We know the coach has already decided this tour is a good idea. You are the one who needs convincing, and you deserve straight answers rather than a glossy brochure. We have been running youth football tours to Spain since 2005, and in that time we have spoken to thousands of parents with the same set of concerns. Every one of those concerns is reasonable. None of them should stop your child from going. But you need to hear the detail before you can feel it in your chest, and that is what this piece is for.",
      "## Safety and supervision on tour",
      "Safety and supervision are the first thing on your mind, and they should be. Every tour we run operates with a minimum ratio of one adult supervisor to ten players, and most school and club groups bring it closer to one to eight. Our ground coordinators in Spain are bilingual, trained in emergency response, and present with the group from the moment the bus leaves the airport until the moment it returns. Hotels are selected for secured-floor access with key-card entry, and we run a head count and curfew walk at 11pm every night without exception. Your child carries an emergency card with the hotel address, a local Spanish phone number, and embassy contact details in both English and Spanish. We are fully insured and bonded, and we carry comprehensive travel and medical cover for every player on every tour. The [youth tours page](/youth) has the full safeguarding framework if you want to read it in detail.",
      "## What a typical day looks like",
      "A typical day on tour has a rhythm that keeps the players engaged without exhausting them. Morning training at a professional or semi-professional facility, usually two hours, led by a Spanish coach with our coordinator translating. A sit-down lunch at the hotel or a nearby restaurant where dietary requirements have been communicated in advance. An afternoon that rotates between cultural visits (a cathedral, a museum, a walking tour), a friendly match against a local Spanish youth team, or free time at the beach or in the town centre. Evenings are group dinners followed by supervised downtime at the hotel. Match days are the highlights: two per week, properly refereed, against organised Spanish opposition matched to your child's age and level. The days are full but not frantic, and rest time is built into the itinerary because tired teenagers do not learn and do not enjoy themselves.",
      "## What it costs and what is included",
      "Cost is the question you want a number for, so here it is. A seven to ten night youth football tour to Spain, including full board, ground transport, training sessions, stadium visits, matches, insurance, and bilingual coordination, sits between roughly 2,800 and 3,800 dollars per player. International flights are quoted separately because airfare fluctuates and we refuse to hide the volatility. Many clubs offer twelve-month payment plans that bring the monthly cost down to 250 to 320 dollars, which is manageable for most family budgets. What is included: accommodation, all meals on match and training days, bus transfers, training facility hire, coaching, stadium tours, match fees, referees, medical cover, and our on-the-ground team. What is typically extra: flights, personal spending money (we recommend fifty to a hundred euros), and any optional excursions the group adds. There are no hidden fees. We quote everything upfront because parents who discover surprise costs mid-tour do not come back, and we want them to come back.",
      "## Will my child actually be okay",
      "The concern we hear most often from parents who have never sent a child abroad without them is simple: will my kid be okay? The honest answer, after twenty years of watching thousands of teenagers on these tours, is that they will be better than okay. They will thrive. The players who are nervous on the first day are leading the group sing-along on the bus by day three. The ones who have never eaten anything more adventurous than chicken fingers are ordering pulpo a la gallega by the end of the week. Being away from home, in a country where the language is different and the football is played with a seriousness they have never encountered, grows something in young people that cannot be replicated at a domestic camp or a weekend tournament. They come back more confident, more independent, and more curious about the world. That is not a sales pitch. It is what we have observed, consistently, for two decades. Visit our [schools page](/schools) for details on how school groups structure these tours.",
      "## Come along yourself",
      "The last thing we want to say to you is this: come along. A significant number of our youth tours include parents who travel with the group, and the experience is richer for it. While the players train in the morning, parents explore the city with our bilingual guide, visit a market, sit in a cafe in the Gothic Quarter, or take a cooking class. Everyone meets up for dinner with stories to share. The parents who come along do not regret it. They see their child compete on a Spanish pitch, navigate a foreign city, and handle themselves with a maturity that surprises everyone, including the child. And the parents who stay home? They get the phone call on the last night, the one where their kid's voice sounds different, a little older, a little wider. That call is worth the whole tour. Whenever you are ready, [start planning here](/plan-your-tour).",
    ],
  },
  {
    slug: "corporate-team-building-retreats-spain",
    title: "Corporate Team Building Retreats in",
    italicTitle: "Spain",
    excerpt:
      "Forget paintball and trust falls. A corporate retreat in Spain builds more team cohesion in five days than a year of office activities, and the ROI shows up in retention, morale, and cross-department bonding.",
    date: "2026-04-16",
    readTime: "7 min",
    category: "Dispatches",
    cover: "/photos/flamenco-moorish-spain-hero.jpg",
    body: [
      "The best corporate retreats do not feel like corporate retreats. They feel like the best week of the year, the one people still reference in meetings six months later when they need a shorthand for trust. Spain is where we build those weeks, and we have been doing it long enough to know that the difference between a retreat that changes a team and one that wastes a budget comes down to a single principle: the activities have to be real. Not simulated, not gamified, not wrapped in a facilitation framework that makes adults feel like they are back in school. Real food, real culture, real challenge, real conversation. Spain delivers all four without trying, which is exactly why it works.",
      "Consider what a five-day corporate retreat in Spain actually looks like when it is designed properly. Day one: the group lands in Bilbao, transfers to San Sebastian, and sits down for a pintxos crawl through the old town that covers six bars in three hours. By the second bar, people from departments that have never shared a corridor are sharing plates of anchovy and pepper, arguing about which gilda was better, and laughing in a way the office has never heard. Day two: a private cooking class in a Basque farmhouse where the group makes a full lunch together, from market shopping to plating. The COO is chopping onions next to the junior developer. The head of sales is learning to make a béchamel from a seventy-year-old Basque grandmother. Nobody is thinking about KPIs. Everyone is building a memory that will outlast every slide deck they have ever seen. We build these itineraries through our [Sabores de Espana programme](/tours/sabores-de-espana), adapted for corporate groups.",
      "The range of what Spain offers for corporate retreats goes far beyond food, though food is often the spine. In La Rioja, we organise private vineyard visits and wine-blending workshops where teams create their own cuvee, label it, and take the bottles home. In Seville, we run flamenco workshops in a courtyard studio where a professional dancer teaches the group the basics of compas and footwork, and the CEO discovers that rhythm is harder than strategy. In Valencia, we arrange sailing regattas in the America's Cup harbour where teams of six crew a racing yacht and compete against each other on open water. Along the Camino de Santiago, we walk the final stage together, five days of shared effort that strips away hierarchy and replaces it with the simple solidarity of putting one foot in front of the other. Each of these activities is designed to create a shared experience that is genuinely difficult, genuinely enjoyable, and impossible to replicate in a conference room. The [corporate retreats page](/tours/corporate-retreats) has the full menu of options.",
      "We handle everything from the moment the group lands to the moment they depart. Airport transfers, hotel check-ins coordinated for large groups, restaurant bookings for tables of fifteen to eighty, bilingual coordination at every activity, dietary requirements communicated to every kitchen, and a ground team that picks up the phone at any hour if something needs adjusting. The company's internal organiser does not become a travel agent. They stay focused on their team while we manage the country. This is the part that HR directors and office managers tell us they value most: the ability to hand the logistics to someone who has done it hundreds of times and simply be present with their colleagues. For companies of fifteen to eighty people, we build bespoke itineraries that balance structured group activities with free time, because adults need breathing room and the best conversations happen in the unscheduled hours.",
      "The ROI argument for a Spain retreat is not abstract. Companies that invest in meaningful shared experiences see measurable returns in employee retention, cross-department collaboration, and morale. A week in Spain costs less than replacing a single senior hire, and the bonds formed over a long lunch in a Rioja vineyard or a sunrise walk on the Camino create the kind of institutional glue that no Slack channel or quarterly offsite can manufacture. We have worked with technology companies, law firms, financial services teams, creative agencies, and family businesses, and the pattern is the same across all of them. The teams that travel together work better together. The teams that eat together trust each other faster. Spain accelerates both of those processes because the country is built around shared tables, shared walks, and shared experiences. It is not a coincidence that Spanish culture prioritises the long meal. There is wisdom in it, and corporate teams absorb that wisdom whether they intend to or not.",
      "If you are considering Spain for your next corporate retreat, the best time to travel is April through June or September through November. The weather is warm without being punishing, the cities are lively without being overrun, and the availability at our preferred venues and restaurants is strongest. Summer works for groups who want beach time built into the itinerary, but hotel rates climb and the midday heat in southern Spain limits outdoor activities. We recommend starting the conversation at least four months before your preferred travel window, as the best cooking schools, vineyard experiences, and boutique hotels book early. [Plan your retreat here](/plan-your-tour) and we will send you a proposal within forty-eight hours. No templates, no generic packages. Every corporate retreat we build is designed from scratch around your group's size, goals, and appetite for adventure.",
    ],
  },
  {
    slug: "how-to-organize-school-football-tour-spain",
    title: "How to Organize a School Football Tour",
    italicTitle: "to Spain",
    excerpt:
      "The complete guide for PE teachers and school coaches planning a football tour to Spain, from pitching the idea to the school board to what a typical match day actually looks like.",
    date: "2026-04-16",
    readTime: "9 min",
    category: "Field Notes",
    cover: "/photos/odisea-tours-group-barcelona-cathedral.jpg",
    faqs: [
      {
        q: "What does the school board want to see in a tour proposal?",
        a: "A per-pupil cost, an insurance certificate, a safeguarding protocol, a risk assessment and a clear educational justification. We provide templates for all of these because we have helped dozens of schools through this process.",
      },
      {
        q: "What is the supervision ratio on Odisea Tours school football tours?",
        a: "A minimum of one adult to ten pupils, though most schools bring it closer to one to eight. Our ground coordinators are DBS-checked or equivalent, and every hotel has secured floors with key-card access.",
      },
      {
        q: "How many matches should a school football tour include?",
        a: "Two matches per week is the right number. Three is too many and pupils stop playing well. One is not enough to justify the trip.",
      },
      {
        q: "Why is Spain a better school tour destination than France or the Netherlands?",
        a: "Spain offers world-class football infrastructure, reliable weather, a cost base lower than northern Europe and a depth of professional academy access no other country can match. Pupils can train at facilities used by La Liga youth teams, visit Camp Nou or the Bernabeu, and play organised Spanish school sides who take the fixture seriously.",
      },
      {
        q: "How far in advance should a school book a Spain football tour?",
        a: "Twelve months ahead gets the best tour. Three months ahead gets a good tour. Six weeks before departure gets whatever is left.",
      },
    ],
    body: [
      "A school football tour to Spain is not a school trip with a ball thrown in. It is a proper sporting programme built around competitive matches, professional training, and cultural immersion, and the schools that do it well treat it with the same seriousness they would give to any other part of the curriculum. We have been organising these tours since 2005, and the schools that come back to us year after year are the ones where the PE department understood from the start that this was an educational project first, a holiday second, and a logistical challenge always. The good news is that the logistical part is the bit we handle. The educational part is the bit you are already good at.",
      "## Pitching it to the school board",
      "The first hurdle is the school board, and the way to clear it is with numbers, not enthusiasm. A board wants to see a per-pupil cost, an insurance certificate, a safeguarding protocol, a risk assessment, and a clear educational justification. We provide templates for all of these because we have helped dozens of schools through exactly this process. The educational case writes itself once you frame it correctly: language exposure, cultural competency, teamwork under pressure, and the experience of competing against peers from a completely different footballing tradition. The cost, for a seven-night tour with matches, training, stadium visits, full board, and ground transport, sits in the range most parents already expect for a European school trip. When the board sees the numbers next to a residential trip to, say, an outdoor activity centre in Wales, Spain tends to win on value. Visit our [schools page](/schools) for the full breakdown of what a school tour includes.",
      "## Safeguarding and supervision",
      "Safeguarding is the item that keeps heads of department awake at night, and rightly so. Every school tour we run carries a minimum supervision ratio of one adult to ten pupils, though most schools bring it closer to one to eight. Our ground coordinators in Spain are DBS-checked or equivalent, and every hotel we use has secured floors with key-card access. We run a curfew walk at 11pm every night. We carry emergency protocols for medical, passport, and behavioural incidents, and we brief the lead teacher on all of them before the group lands. The single most important thing we tell schools is this: the safeguarding framework you already run at home transfers to Spain without modification. The difference is that in Spain, you have a bilingual coordinator standing next to you who knows the local hospitals, the local police station, and the fastest route from the hotel to both.",
      "## The shape of a tour day",
      "A typical day on a school football tour has a rhythm that teachers find surprisingly easy to manage. Morning training at a professional or semi-professional facility, usually two hours, led by a Spanish coach with our coordinator translating. A sit-down lunch at the hotel or a nearby restaurant where dietary requirements have been briefed in advance. An afternoon cultural visit, a cathedral, a museum, a walking tour of the old quarter, or free time at the beach if the group is on the coast. On match days, the cultural visit is replaced by the match itself, usually scheduled for late afternoon when the heat drops. Evenings are dinner together and free time in the hotel or a supervised walk in the neighbourhood. Two matches per week is the right number. Three is too many. One is not enough. The [plan your tour page](/plan-your-tour) walks you through how we build an itinerary around your group's specific needs.",
      "## Why Spain over France or Holland",
      "The question we hear most from PE teachers considering Spain over other destinations is simple: why not France, or the Netherlands, or Portugal? The answer is equally simple. Spain offers the combination of world-class football infrastructure, reliable weather, a cost base that is lower than northern Europe, and a depth of professional academy access that no other country can match. Your pupils can train at facilities used by La Liga youth teams, visit Camp Nou or the Bernabeu, and play against organised Spanish school sides who take the fixture as seriously as your group does. The cultural dimension is richer too. Spain is different enough from home to feel like a genuine abroad experience, which is half the point of taking teenagers out of the country in the first place. A trip to the Netherlands is a good football trip. A trip to Spain is a good football trip and a good education. We have watched the difference land with thousands of pupils over twenty years.",
      "## When to book",
      "The last piece of advice we give every school is about timing. Book early. The best training facilities and the strongest Spanish school opponents are available between October and May, and the most popular windows, Easter and half-term, fill up fast. If your school can travel in October or early November, you will find better availability, lower prices, and perfect weather. If you are locked into a spring or summer window, we can still build a superb tour, but the earlier you start the conversation the more options we have. The schools that plan twelve months ahead get the best tours. The schools that plan three months ahead get a good tour. The schools that call us six weeks before departure get whatever is left, and we would rather build you the best version. Explore the [European soccer tour options](/tours/european-soccer-tours) and get in touch when you are ready to start.",
    ],
  },
  {
    slug: "sabores-de-espana-food-wine-tour-spain",
    title: "Sabores de Espana: A Culinary Journey Through",
    italicTitle: "Spain",
    excerpt:
      "What the Sabores tour actually looks like, day by day, from Barcelona's market halls to the Basque Country's pintxos bars, through the vineyards of La Rioja and the cava cellars of Penedes.",
    date: "2026-04-15",
    readTime: "7 min",
    category: "Dispatches",
    cover: "/photos/sabores-de-espana-hero.jpg",
    body: [
      "The Sabores de Espana tour was born because we kept noticing the same thing on our football tours. The parents and partners who came along would politely attend the stadium visit, clap at the training session, and then light up completely at dinner. The meal was always the part they talked about on the bus. The wine, the jamon, the octopus someone was brave enough to try. After watching this happen for fifteen years, we stopped pretending the food was a side note and built an entire tour around it. Sabores de Espana is the result, and it is, plate for plate, the most personally satisfying tour we run.",
      "The tour begins in Barcelona, and it begins at the market. Not the tourist version of La Boqueria that sits on the Rambla, but the working section at the back where the stall owners know our guide by name and where the seafood counter will hand you a prawn to taste before you have asked for one. From the market we move to a private cooking class in the Gothic Quarter, where a local chef walks the group through a proper paella, not the yellow rice tourists get at beachfront restaurants, but the real Valencian method with sofrito, bomba rice, and a socarrat that crackles. That first evening sets the tone for the whole trip. This is not a tour where you watch someone else cook. You cook, you eat, you drink, and then you walk through a medieval city at sunset with a glass of cava still cold in your memory. The full itinerary is on the [Sabores de Espana tour page](/tours/sabores-de-espana).",
      "From Barcelona the route moves southwest into the Penedes wine region, where the cava cellars sit in rolling green hills that look nothing like the Spain most visitors imagine. Penedes is where ninety-five percent of Spain's cava is produced, and the cellar visits here are unhurried, underground, and surprisingly moving. The guide at our preferred bodega has been making cava for thirty years and speaks about the process the way a sculptor talks about marble. After Penedes we cross into La Rioja, and the landscape shifts again. The vineyards here are older, drier, and draped across hillsides that turn gold in the late afternoon light. We visit Marques de Riscal, whose Frank Gehry-designed hotel is one of the most photographed buildings in Spain, and whose wines need no introduction to anyone who has ever looked at a Spanish wine list. The tasting at Marques de Riscal is a highlight, but the real pleasure is the lunch that follows at a small family-run asador nearby where the lamb has been slow-roasting since dawn.",
      "The Basque Country is the final act, and it is the one that ruins people for food back home. San Sebastian holds more Michelin stars per square metre than any city on earth, and while we do not take the group to a three-star restaurant (the Sabores tour is about real food, not theatre), we do take them on a pintxos crawl through the old town that covers six bars in three hours and leaves everyone slightly dazed by the quality of what a four-euro snack can be in this city. The pintxos in San Sebastian are not tapas. They are miniature compositions, each one designed by a chef who treats a slice of bread and a piece of cod as seriously as a tasting menu. The group moves from bar to bar with our local guide, who knows which bar does the best gilda, which one has the crab tortilla, and which one you have to arrive at before 8pm or the good stuff is gone.",
      "Between San Sebastian and the journey home, we stop in Pamplona. Most people associate Pamplona with the running of the bulls, but the old city is a quiet, beautiful place the other fifty-one weeks of the year, and its food culture is deeply Navarrese in a way that feels distinct from both the Basque Country and the rest of Spain. The group eats lunch at a cider house outside the city walls where the ritual is the same as it has been for a century: you stand under a massive barrel, someone opens the tap, and you catch the stream of cider in your glass from three feet away. It is silly, joyful, and the cider is excellent. By this point in the tour, the group has cooked in Barcelona, tasted cava underground, drunk Rioja at the source, eaten pintxos that cost less than a coffee and tasted better than most restaurant meals, and caught cider from a barrel in Navarra. That is Sabores de Espana. It is not a food tour. It is a tour of Spain that happens to be organised around the best thing about Spain.",
      "We run the Sabores tour for groups of ten to thirty, and the people who book it are remarkably varied. Corporate retreats, friend groups celebrating a milestone birthday, couples travelling together, veterans football clubs who want something for the partners to do while the lads play their matches. The common thread is not a passion for food, though that helps. It is curiosity. The groups that get the most out of Sabores are the ones who show up willing to try things, and Spain rewards that willingness more generously than almost anywhere else in the world. If you are thinking about it, [get in touch with our team](/team) and we will walk you through the options. The Sabores tour books well in advance, especially for the autumn and spring windows, so the earlier you start the conversation the better the dates we can hold. [Plan your tour](/plan-your-tour) and we will take it from there.",
    ],
  },
  {
    slug: "youth-soccer-tours-to-spain-complete-guide",
    title: "Youth Soccer Tours to Spain: A Complete",
    italicTitle: "Guide",
    excerpt:
      "Everything a coach needs to know before bringing a youth team to Spain: how a tour is built, what the rhythm looks like, and why the logistics are the part nobody sees.",
    date: "2026-04-14",
    dateModified: "2026-05-09",
    readTime: "11 min",
    category: "Field Notes",
    cover: "/img/journal/youth-inspiration.jpg",
    faqs: [
      {
        q: "How much does a youth soccer tour to Spain cost per player?",
        a: "A 7 to 10 night youth soccer tour to Spain, including full board, ground transport, training sessions, stadium visits, friendly matches, insurance and bilingual coordination, sits between roughly 2,800 and 3,800 dollars per player. International flights are quoted separately because airfare moves with the calendar.",
      },
      {
        q: "How many nights should a Spain soccer tour be?",
        a: "Most groups travel for 7 to 10 nights. Anything shorter than 7 leaves no recovery time and most of your bus hours go to airport transfers. Anything longer than 10 starts to fatigue younger players. The 8-night, 2-city itinerary is our most-booked shape: Madrid plus Barcelona, or Valencia plus Barcelona.",
      },
      {
        q: "Which age groups can travel? Is there a minimum age?",
        a: "We host U12 through U19 club and school teams. We do not run tours for U11 and below because the trip rhythm and overnight format does not suit that age. For mixed-age school groups, we adapt training intensity by squad rather than by tour.",
      },
      {
        q: "Do you organise friendly matches against Spanish teams?",
        a: "Yes. Every youth tour includes 2 friendly matches against organised Spanish opposition matched to your age and level. We do not over-schedule matches because tired legs do not learn. Fixtures are typically against academy youth sides, top amateur clubs and federation development sides depending on the level of your group.",
      },
      {
        q: "Can we visit Camp Nou, the Bernabéu or other La Liga stadiums?",
        a: "Yes. Stadium visits to Camp Nou (FC Barcelona), the Santiago Bernabéu (Real Madrid), Mestalla (Valencia CF) and others are part of every soccer tour we run. Where available we book the immersive tunnel-and-pitchside tour for groups, which is the version players remember a decade later.",
      },
      {
        q: "What is the supervision and safeguarding setup?",
        a: "Every tour runs with a minimum 1 adult to 10 player ratio, more on most school groups. Our Spanish ground coordinators are bilingual, present from airport pickup to drop-off, and trained in emergency response. Hotels have key-card secured floors. Curfew check happens at 23:00 every night without exception. Every player carries a card with hotel address, local Spanish phone number and embassy contacts in English and Spanish.",
      },
      {
        q: "What is included in the tour price?",
        a: "Accommodation, all meals on training and match days, ground transport (private buses), training facility hire, Spanish coaching, stadium visits, match fees, referees, comprehensive medical and travel insurance, and our on-the-ground bilingual team for the entire tour. Excluded: international flights, personal spending money (we suggest 50 to 100 euros per player), and any optional excursions you add later.",
      },
      {
        q: "What is the best time of year to bring a youth team to Spain?",
        a: "October to November and March to May are the best windows. Weather sits in the high teens to low twenties Celsius, hotel rates are below summer peak and the Spanish football calendar is in full swing. We run tours in summer too but heat in southern Spain limits afternoon training and prices climb. Avoid mid-December through early January for fixture availability.",
      },
      {
        q: "How far in advance should we book?",
        a: "Six months is comfortable. Four months is workable. Anything inside three months gets harder for the best training facilities and stadium tour slots, especially around Real Madrid and FC Barcelona match weekends. For groups of 30 plus, six to nine months out is the right window.",
      },
      {
        q: "Can parents travel along with the team?",
        a: "Yes, and many do. We run a parent-side itinerary in parallel: cultural visits, a market tour, a cooking class, then everyone meets for dinner. The presence of parents does not get in the way of the football, and the players who have a parent on the trip do not get embarrassed by it the way coaches sometimes worry about.",
      },
    ],
    body: [
      "A youth soccer tour to Spain is not a vacation with matches attached. It is the other way around. Everything in a good Spain tour, the hotel, the bus, the rest day, the museum afternoon, is built to serve the football, and everything we have learned in twenty years of organizing these trips comes back to that single ordering. When a tour works, the players come home changed. When it does not, they come home with souvenirs and a sore ankle. The difference is almost entirely in how the trip was designed.",
      "## The teams that travel with us",
      "The teams that come to us are mostly the same shape. Twelve to twenty-five players, two or three coaches, a handful of parents, an age somewhere between U13 and U19. About seventy percent of our [youth soccer tours to Spain](/youth) groups are from the United States and Australia. They arrive with three things already decided, how many days they have, how much they can spend, and whether they want to see Madrid or Barcelona first, and almost nothing else. Everything after that is ours to build.",
      "## The rhythm of a well-designed tour",
      "A well-designed Spain tour has a rhythm to it. Morning training sessions at a real academy ground. Friendly matches against local Spanish teams twice a week, never more. Stadium visits to one of the big clubs, Camp Nou, Bernabeu, Mestalla, which the players will talk about for a decade. An afternoon in the old town of wherever you are based. One full rest day in the middle where nothing football-related is scheduled. Coaches often want to add more. We gently talk them out of it. Tired legs do not learn anything, and tired teenagers do not remember anything.",
      "## The invisible logistics layer",
      "The logistics are the invisible part. Visas if needed. A coach who speaks the language and knows which door to knock on. Kit laundry turnarounds. A bus driver who knows which stadium entrance is the one for touring groups, not the one for season ticket holders. A backup pitch for when a morning training site floods. A backup restaurant for when thirty-six hungry teenagers arrive at a place that was only holding tables for thirty. The best way to judge a Spain soccer tour operator is not the glossy itinerary. It is how they answer a phone call the week before departure, when one of your players has a passport problem.",
      "## What it costs",
      "A full youth soccer tour to Spain, seven to ten nights, full board, matches, training, stadium visits, two Spanish cities, buses, guides, and the invisible insurance layer of someone in the country who picks up the phone at 2am, costs roughly what parents expect a family vacation to Europe to cost. We write more specifically about cost elsewhere in this journal. What matters here is that the price is almost always dictated by the quality of the things people remember, not the things they forget. A better hotel in an uninteresting neighborhood is a worse tour than a simpler hotel next to the training ground. We pick the training ground every time. If you are ready to explore what a trip looks like for your team, [start planning](/plan-your-tour).",
      "## What players bring home",
      "The last thing worth saying about a youth soccer tour to Spain is the one thing that is hardest to put on a brochure. The players come back different. They have played on grass that Xavi trained on, eaten in a restaurant a first-team player eats at on days off, and spent ten days surrounded by the game being taken seriously by an entire country. You cannot buy that back home. You can only go and get it.",
    ],
  },
  {
    slug: "walking-camino-de-santiago-with-a-group",
    title: "Walking the Camino de Santiago With a",
    italicTitle: "Group",
    excerpt:
      "The Camino works brilliantly as a group experience, not just a solo pilgrimage. Here is what the seven-day highlights route looks like when you walk it with friends, family, or colleagues.",
    date: "2026-04-14",
    readTime: "8 min",
    category: "Dispatches",
    cover: "/photos/camino-de-santiago-hero.jpg",
    body: [
      "The Camino de Santiago has been walked for a thousand years, and for most of those years it was walked alone or in small clusters of strangers who became friends by the time they reached the cathedral. That version of the Camino is still there, and it is wonderful, and it is not what we are talking about here. We are talking about the group version, the one where a corporate team, a circle of old friends, a family reunion, or a church congregation walks the final stage of the Camino together over seven days and arrives at the Cathedral of Santiago de Compostela as a unit. We have been running this tour for over a decade, and it is, without exaggeration, the most emotionally powerful thing we do.",
      "## The route, distances and terrain",
      "The route we use is the last 115 kilometres of the Camino Frances, starting in Sarria and finishing in Santiago. This is the minimum distance required to earn the Compostela, the official certificate of completion issued by the Cathedral office, and it is also, conveniently, the most beautiful and best-supported stretch of the entire route. The daily distances are manageable: between 18 and 25 kilometres per day, depending on the stage, which translates to roughly five to seven hours of walking with stops. The terrain is rolling Galician countryside, through eucalyptus forests, across medieval stone bridges, past tiny hamlets where the church bells still ring at noon. It is not flat, but it is not punishing either. We have walked this route with groups whose youngest member was twelve and whose oldest was seventy-four. Everyone finished. Everyone cried at the end. Those two facts are related. The full itinerary is on the [Camino de Santiago tour page](/tours/camino-de-santiago).",
      "## What makes a group Camino different",
      "What makes the group Camino different from the solo version is the shared rhythm of the days. You walk together in the morning when the mist is still on the fields. You stop for coffee at a village bar where the owner has been serving pilgrims for twenty years and does not need to be told what you want. You eat lunch at a long table in a country restaurant where the menu is whatever the kitchen made that morning, usually a thick Galician stew, bread, and a glass of local wine that costs less than the bread. In the afternoon you walk again, and by now the group has broken into smaller clusters, conversations happening that would never happen in a meeting room or a living room back home. The Camino strips away the noise. People talk properly on this walk. That is not something we put in the brochure, but it is the thing every group tells us afterwards.",
      "## How we handle the logistics",
      "The logistics of a group Camino are the part we handle so that the group can focus entirely on the walking. Luggage is transferred by van from hotel to hotel each morning, so you walk with a daypack, not a full rucksack. The hotels are small, clean, and locally owned, selected because the owners understand pilgrims and do not try to turn the experience into a resort stay. Breakfast is at the hotel. Lunch is on the trail. Dinner is together each evening at a restaurant we have chosen, and the dinners get progressively more celebratory as Santiago draws closer. Our ground coordinator walks with the group every day, carrying a first-aid kit, a phone with local emergency contacts, and the quiet authority of someone who has walked this route more than fifty times. If someone needs to rest, the support van picks them up. Nobody is left behind, and nobody is made to feel bad about needing a shorter day.",
      "## Who books a group Camino",
      "The groups who book the Camino with us are more varied than you might expect. Corporate teams use it as a leadership retreat, and the conversations that happen between kilometre markers eight and fifteen of a long walking day are worth more than any offsite workshop. Friend groups in their forties and fifties use it to mark a milestone, a collective fiftieth birthday, a reunion after years apart. Church groups use it as a pilgrimage in the original sense, and the arrival at the Cathedral carries a spiritual weight that the secular groups feel too, even if they would not use that word. Families use it to do something together that is not a beach holiday, something that requires effort and delivers a payoff that everyone shares equally. If your group is also interested in the culinary side of Spain, the Camino pairs beautifully with a few days on the [Sabores de Espana tour](/tours/sabores-de-espana), and we often build combined itineraries for groups who want both.",
      "## Arriving in Santiago",
      "The arrival in Santiago is the moment the whole tour builds toward, and it is the moment we have watched hundreds of times without it losing any of its force. The group walks the last two kilometres through the outskirts of the city, enters the old town through a stone archway, follows the narrow streets downhill, and emerges into the Praza do Obradoiro with the Cathedral filling the entire western side of the square. People stop. Some cheer. Some go quiet. Some cry openly. The Cathedral has been receiving pilgrims since the ninth century, and the weight of that continuity is something you feel in your chest, not your head. After the square, we go to the Pilgrim Office to collect the Compostela certificates, and then to a long celebratory lunch where the Albarino wine flows and the stories from the trail start to become the stories the group will tell for the rest of their lives. If you are considering this for your group, [start the conversation](/plan-your-tour). The best windows are spring and autumn, and the most popular dates fill early.",
    ],
  },
  {
    slug: "how-to-fundraise-for-your-teams-spain-tour",
    title: "How to Fundraise for Your Team's Spain",
    italicTitle: "Tour",
    excerpt:
      "A practical fundraising playbook for clubs and schools planning a tour to Spain, from local sponsorship deals and crowdfunding campaigns to payment plans that spread the cost over twelve months.",
    date: "2026-04-13",
    readTime: "7 min",
    category: "Field Notes",
    cover: "/photos/odisea-tours-youth-girls-happy.jpg",
    body: [
      "The single biggest reason a youth team or school side does not go to Spain is not lack of interest. It is the belief that the money is not there. We have heard this from hundreds of coaches over twenty years, and in almost every case the money was there. It was just scattered across sources that nobody had thought to assemble into a single funding plan. A Spain tour for a squad of twenty players, at roughly 2,800 to 3,500 dollars per head, is a significant number when you look at it as a lump sum. It is a much more manageable number when you break it into components, spread it over twelve months, and attack it from four or five directions at once. This is the playbook we share with every club that tells us they want to come but are not sure they can afford it.",
      "Local business sponsorship is the single most underused funding source we see, and it is also the most effective. A youth club with fifteen to twenty families has a network of local businesses connected to those families: the dentist, the car dealership, the real estate agent, the restaurant, the gym. Each of those businesses has a marketing budget, and most of them would rather spend five hundred dollars sponsoring a local team's tour to Spain (with their logo on the training kit, a mention on social media, and a framed photo of the squad at the Bernabeu) than spend the same five hundred on a Google ad that disappears in a week. We tell clubs to approach ten local businesses with a simple sponsorship deck. If five say yes at five hundred each, that is 2,500 dollars, enough to cover nearly one full player's tour cost. If ten say yes, you have funded two players entirely through sponsorship. The key is to make the ask specific, professional, and easy to say yes to. A one-page PDF with the club crest, the tour dates, and three sponsorship tiers is all you need. Our [youth tours page](/youth) has more detail on what a typical tour includes, which helps you build that deck.",
      "Crowdfunding works, but only if you do it properly. The campaigns that raise real money are the ones with a clear goal, a compelling story, a specific deadline, and regular updates. A GoFundMe page that says \"help our team get to Spain\" and then goes silent for three months will raise very little. A page that says \"the U15 girls need 8,000 dollars by March 1st to train at the Spanish FA and play against Barcelona youth sides, here is a video of the team explaining why this matters to them\" will raise significantly more. We have seen clubs raise between 3,000 and 12,000 dollars through crowdfunding alone, and the common thread is always the same: the campaign was personal, specific, and updated weekly. Parents, grandparents, aunts, uncles, family friends, and even strangers who played youth football themselves will contribute when the story is real.",
      "Car washes and bake sales are the fundraisers everyone thinks of first, and we will not pretend they do not work, because they do. A well-organised car wash on a Saturday morning can bring in 400 to 800 dollars, and a bake sale at a tournament can do the same. The problem is that these events are labour-intensive relative to the return, and a club that relies entirely on them will need to run one every month for a year to cover the cost of a tour. Our advice is to use these events as community-building moments rather than primary revenue sources. They keep the tour visible, they keep the families engaged, and the money they raise is real. But the heavier lifting should come from sponsorship, crowdfunding, and the next item on this list: structured payment plans. Visit our [schools page](/schools) for details on how school groups typically structure their funding.",
      "Payment plans are the single most important tool in the funding toolkit, and we offer them on every tour we build. Instead of asking a family to pay 3,000 dollars in a single transaction, we spread the cost over six to twelve monthly instalments, starting from the moment the tour is confirmed. A family paying 250 dollars per month for twelve months will barely feel it in their household budget, and the tour is fully funded before the plane takes off. We collect the payments on a fixed schedule and handle the administration, so the club manager is not chasing twenty families for money every month. Early-bird pricing is the other lever: families who commit and begin payments early, typically six months or more before departure, receive a discount that rewards their commitment and helps us with our own supplier deposits. The combination of a twelve-month payment plan and an early-bird incentive removes the financial shock almost entirely.",
      "The clubs that fund their tours most successfully are the ones that combine all of these sources. Five local sponsors at 500 dollars each, a crowdfunding campaign that raises 5,000, two or three community events that bring in another 2,000, and a twelve-month payment plan for each family that covers the remainder. When you lay it out on a spreadsheet, the per-family cost drops from an intimidating lump sum to a monthly number that most households can absorb comfortably. We have watched teams that initially said \"we cannot afford this\" arrive in Spain eleven months later with their tour fully paid, their families invested in the experience, and their players understanding that the trip was earned, not given. That last part matters more than people realise. A tour that was fundraised for feels different from a tour that was simply purchased. The players value it more, the parents value it more, and the memories carry a weight that a holiday does not. [Start planning your tour](/plan-your-tour) and we will help you build the funding plan alongside the itinerary.",
    ],
  },
  {
    slug: "what-a-youth-soccer-tour-to-spain-costs",
    title: "What a Youth Soccer Tour to Spain",
    italicTitle: "Costs",
    excerpt:
      "A straight answer to the first question every coach asks, what a real Spain tour costs per player, and what the number actually buys you behind the itinerary.",
    date: "2026-04-10",
    readTime: "7 min",
    category: "Field Notes",
    cover: "/img/journal/group-barcelona.jpg",
    faqs: [
      {
        q: "What does a youth soccer tour to Spain actually cost?",
        a: "A proper tour sits between roughly 2,800 and 3,800 dollars per player for seven to ten nights. The number depends on the time of year, the cities chosen, the opponent level you want to play and the origin city for the international flight.",
      },
      {
        q: "What is included in the per-player price?",
        a: "Hotels, ground transport, full board on match days, training sessions, stadium visits, Spanish youth opponents, referees, insurance and ground coordination. International flights are quoted separately because ticket prices swing week to week.",
      },
      {
        q: "Why does the price move so much between trips?",
        a: "Mostly the calendar. A tour in April or October costs noticeably less than one in June or July, because hotel rates in Spanish coastal cities roughly double in high summer and the professional academies are on their own holiday calendar.",
      },
      {
        q: "When is the cheapest time of year to travel?",
        a: "Shifting your travel window by two weeks into April or October typically saves fifteen to twenty percent without touching the quality of any item on the itinerary.",
      },
      {
        q: "Why are the cheapest tours risky?",
        a: "The two-thousand-dollar tours almost always cut one of three things: the insurance, the ground coordinator or the quality of the opposition. We have inherited groups whose previous operator did all three, and the tour fell apart the moment a player rolled an ankle or a bus driver got lost.",
      },
    ],
    body: [
      "The first question every coach asks is not about hotels or stadiums. It is about the number. We understand why. Before a director of coaching can pitch a Spain tour to a club board, or a high school athletic department, or a group of parents, they need a figure that will not move. Every year the first email of the planning season starts with the same line. What does a ten-day youth soccer tour to Spain actually cost.",
      "The honest answer is that a proper tour, the kind we are willing to put our name on, sits between roughly 2,800 and 3,800 dollars per player for seven to ten nights. The number depends on the time of year, the cities chosen, the opponent level you want to play, and whether you are flying into Madrid or Barcelona from New York, Los Angeles, or Sydney. That figure includes everything that happens once the team lands. Hotels, ground transport, full board on match days, training sessions, stadium visits, Spanish youth opponents, referees, insurance, ground coordination, and the people who fix things when they go sideways. It does not include the international flight. We quote flights separately because ticket prices swing week to week and we refuse to bury the volatility.",
      "What that number buys you breaks down in a way most parents never see. Roughly a third of it is accommodation. Another quarter is transport and food. About fifteen percent is what it actually costs us to put a trained coordinator on the ground with the group every day. The rest is split between the stadium visits, the training facility rentals, the referees for friendly matches, and the insurance and contingency layer we insist on carrying on every trip. None of those numbers are arbitrary. They are the minimum a tour can honestly deliver without cutting the part that turns a trip into a memory.",
      "The price moves mostly with the calendar. A tour in April or October costs noticeably less than a tour in June or July, because hotel rates in Spanish coastal cities roughly double in high summer and the professional academies are on their own holiday calendar. If a club can shift its travel window by two weeks, we can usually save them fifteen to twenty percent without touching the quality of a single item on the itinerary. This is the single most useful piece of advice we give new clients, and almost nobody uses it on their first trip.",
      "The cheaper end of the market, the two-thousand-dollar tours, the ones that look too good to be true, almost always cut one of three things. The insurance, the ground coordinator, or the quality of the opposition. We have inherited groups whose previous operator did all three. The tour looked identical on paper. It fell apart the moment a player rolled an ankle, a bus driver got lost, or the promised academy opponent turned out to be a recreational team someone's cousin pulled together. There is a floor below which a [European soccer tour](/tours/european-soccer-tours) cannot be safely and properly delivered. We know exactly where that floor is, because we have spent twenty years standing on it.",
      "The last thing we say about price is this. A Spain tour is not, in our experience, the line item parents complain about. It is the line item they tell their friends about, for years. The trips that become expensive are the ones where the operator cut the wrong corner and the memory came back thin. The ones where the operator spent in the right places stay lit long after the return flight. Ready to see what your tour would cost? [Get a custom itinerary](/plan-your-tour).",
    ],
  },
  {
    slug: "la-masia-la-fabrica-academies-worth-visiting",
    title: "La Masia, La Fábrica and the Academies Worth",
    italicTitle: "Visiting",
    excerpt:
      "There are five major academy visits in Spain. Only three of them are worth planning a tour around. A working guide to which is which, and why.",
    date: "2026-04-06",
    readTime: "8 min",
    category: "Dispatches",
    cover: "/img/journal/spanish-fa-training.jpg",
    body: [
      "There are five academy visits a Spain soccer tour can include, and only three of them are worth planning an entire trip around. We say this knowing it will annoy some of the newer tour operators who market all five with the same glossy language. We have been sending groups to these places since 2005, and we know exactly which of them leave a mark.",
      "## La Masia, FC Barcelona",
      "La Masia is the one every family already knows. Twelve-year-olds from Texas show up with the Barcelona crest on their tracksuit, which is why the Barcelona staff still walk groups around with real patience after forty-five years of doing it. We have written before, in a separate note, about why La Masia is still the best football visit in Europe, and nothing about that has changed. The reason is simple. La Masia was built to develop players, not to host visitors. The visitor program is a by-product of how seriously the club takes its own youth system, and you can feel the difference the moment you step on the grass.",
      "## La Fábrica, Real Madrid",
      "La Fábrica, Real Madrid's academy at Valdebebas, is the opposite experience. Where La Masia feels like a monastery, La Fábrica feels like a base. The facilities are newer, the perimeter is more corporate, and the visit itself is more choreographed. Real Madrid is uncompromising about protecting its first-team environment, so the visitor program keeps a respectful distance from the senior players. What it does offer is a walk through the best-resourced youth operation in world football, and for a coach who is there to see how a professional system is laid out physically, the pitches, the gym, the nutrition area, the classrooms, it is a clinic in how the modern game is built.",
      "## Paterna, Valencia CF",
      "Valencia CF's academy at Paterna is the one most tours skip, and the one we recommend most often to groups on a [youth football tour](/youth) staying on the Mediterranean coast. It is the only academy we know of where a visiting youth team can, on a quiet afternoon, end up in a short session with a Valencia staff coach and walk away with real feedback on their own play. It is not always possible and we never promise it in advance. When it happens, it is the thing the group remembers from the whole trip. Paterna is also the spiritual home of a generation of players who came through the Valencia system and went on to the national team, and the atmosphere at the training ground reflects that.",
      "## Villarreal and Sevilla",
      "Villarreal and Sevilla round out the top five. Villarreal is a reward for groups who are willing to drive two hours out of any major city. A club that punches four divisions above its town size, with a training ground laid out so meticulously it makes visiting coaches take photographs of the drainage. Sevilla's facility is the most human-scaled of the five, and the easiest one to get access to on short notice if a group adds a day at the last minute.",
      "## Why we leave out Atlético and Athletic",
      "What we never include on the list, and what our more ambitious clients always ask us about, are Atlético Madrid and Athletic Bilbao. Atlético's academy program is professional and correct, but the club still treats visitors at arm's length, and the experience feels transactional in a way La Masia and Paterna do not. Athletic Bilbao we leave out for a different reason. The club's own identity is so tightly woven around Basque players that an outside youth team visit feels, by design, like you are a guest at someone else's family dinner. Which you are. We have great respect for that, and we send groups to Bilbao for other reasons. Not this one.",
      "## How many academies to visit on one tour",
      "The single most common mistake we see new tour operators make is stringing three academy visits into the same week. It looks comprehensive on a spreadsheet. In practice, by the third academy, the players stop paying attention. Two academies per [European soccer tour](/tours/european-soccer-tours) is the correct number. One is the emotional highlight. The second is the comparison point that teaches the coaches something. Any more and you are trading the thing the players will remember for a bullet point on a brochure.",
    ],
  },
  {
    slug: "how-to-plan-a-group-trip-to-spain",
    title: "How to plan a group trip to",
    italicTitle: "Spain",
    excerpt:
      "The quiet rules we have learned after twenty years of hosting schools, companies, and families across every corner of the country.",
    date: "2026-04-02",
    readTime: "8 min",
    category: "Field Notes",
    cover: "/photos/veterans-soccer-tour-barcelona-la-rambla.jpg",
    body: [
      "The hardest part of a group trip is not the booking. It is the deciding. A group of twenty-five people will want twenty-five different things, and the agency that tries to please everyone will please no one. The first rule we learned in 2005, and the one we still repeat to every new client, is this. Pick a spine, and protect it.",
      "## Rule one: pick a spine",
      "A spine is a single unifying idea. For a school team, it might be football. Every day anchors around a training visit or a match. For a [culinary tour](/tours/sabores-de-espana), it might be food. Every meal is the day's main event, and the sightseeing bends around it. Once the spine is set, every other decision becomes easier. The hotel is the one closest to the training ground. The bus leaves at the hour that gets you to the pintxos bar before the locals arrive.",
      "## Rule two: spend on what is remembered",
      "The second rule is less obvious. Spend on what people will remember, save on what they will forget. Travelers remember the dinner on the terrace with the guitar player. They forget the mid-range rental car. So we book the rental car on a budget and the terrace dinner with the guitar player without apology.",
      "## Rule three: always have a weather plan",
      "Rule three. Always have a weather plan. Spain is sunny until it is not. Every good itinerary we build has a shadow itinerary, an indoor day we can swap in if the forecast changes. We never tell the group. We just switch quietly, and nobody notices except that the day was good.",
      "## Rule four: let the group breathe",
      "Rule four, and the one we feel most strongly about. Let the group breathe. Twenty years of watching travelers in this country has taught us that the best moments are almost always the ones that were not scheduled. The hour after lunch when everybody sat in the shade and nobody wanted to move. The wrong turn that led to a plaza nobody had heard of. Leave space for those moments. Build fewer items into the day. Your group will thank you in their photographs.",
      "## Rule five: pick the agency that picks up at 2am",
      "And finally, the rule we hold above all the others. Pick the agency you would trust to answer the phone at two in the morning. Because something, on every trip, goes sideways. A flight delay. A sick traveler. A closed restaurant. The measure of a group travel company is not what happens on the sunny days. It is what happens at 2am on the day that did not go as planned. Meet [our team](/team), and see how long it takes us to answer.",
    ],
  },
  {
    slug: "real-madrid-or-fc-barcelona-which-stadium-visit",
    title: "Real Madrid or FC Barcelona: Which Stadium Visit Is",
    italicTitle: "Best",
    excerpt:
      "Both tours show you the same list of things. The experiences are not the same. A working guide to which stadium your group should see first.",
    date: "2026-03-28",
    readTime: "6 min",
    category: "Dispatches",
    cover: "/img/journal/camp-nou.jpg",
    body: [
      "We get asked this more than any other question, and the honest answer depends entirely on what your group is trying to feel. Not what they are trying to see. Both stadiums show you essentially the same list of things. Trophy room. Dressing room. Press room. Tunnel. Pitch view from the bench. The sequence is almost identical. The experience is not.",
      "Camp Nou, even mid-renovation as it has been for the last several years, has a kind of worn cathedral quality. The stands are bigger than they look on television. The dressing room is smaller. The walk from the tunnel to the pitch is shorter than any of the players expect. For a coach trying to teach a lesson about how elite environments are not about luxury but about focus, there is no better visual aid. A group of thirteen-year-olds standing on that sideline, looking up at ninety-nine thousand empty seats, tend to go very quiet. We stop talking for a few minutes and let the place do the work.",
      "The Bernabeu is a different project entirely. It has been rebuilt, not just renovated, and the new version is the most technologically ambitious stadium in world football. Retractable roof. Liftable pitch. A golden skin that changes with the light. The museum is the most complete you will see in any football tour in Europe, and the Champions League trophy room alone earns the price of the visit. For a group that is into the production side of the game, the scale, the spectacle, the way football is staged as a modern cultural event, there is nothing like it.",
      "If we had to break a tie, we would ask one question. What does the coach want the players to talk about on the bus ride home. If the answer is work ethic, hunger, and the cost of excellence, take them to Camp Nou. The stadium still wears the years. If the answer is ambition, production, and what the game becomes at its most polished, take them to the Bernabeu. Both are correct answers, and neither is the wrong trip.",
      "The quiet third option we recommend more often than people expect is to visit both. Most tours try to combine a Madrid week and a Barcelona week, and groups that do this usually come home saying the comparison was the most valuable part of the trip. Whether you are booking a [youth football tour](/youth) or an [over-35 tour](/veterans), the players see two clubs that have won more between them than anyone else, and they see two completely different philosophies about what a football club is supposed to be. That single comparison, made in person, teaches a lesson that no film session at home can replicate.",
      "The one thing we steer groups away from is the pre-bundled stadium-and-museum tour you can book yourself online. Both clubs offer them. They are fine if you are a solo fan on a weekend in Europe. For a youth team visit, you want the guided experience with access to the training facility and, when possible, a walk with someone who actually works at the club. It is a completely different visit. It costs more. It is worth more.",
    ],
  },
  {
    slug: "top-5-football-stadiums-visit-spain-soccer-tour",
    title: "Top 5 Football Stadiums to Visit on Your Spain",
    italicTitle: "Soccer Tour",
    excerpt:
      "From the iconic Camp Nou to the newly renovated Santiago Bernabeu, here are the must-visit stadiums that will make your football tour to Spain unforgettable.",
    date: "2026-03-27",
    readTime: "6 min",
    category: "Dispatches",
    cover: "/photos/veterans-soccer-tour-bernabeu-stadium.jpg",
    body: [
      "Spain is the undisputed capital of world football, and no soccer tour is complete without stepping inside the stadiums where legends are made. After organizing hundreds of tours over 20 years, here are the five stadiums that consistently leave our groups speechless.",
      "The newly renovated home of Real Madrid is nothing short of spectacular. The retractable roof, the 360-degree screen, and the sheer scale of the stadium make it the most impressive sports venue in Europe right now. What your group gets: a behind-the-scenes tour including the press room (where you can sit where the coaches sit for post-match conferences), the tunnel, pitchside access, the trophy room with 15 Champions League trophies, and the presidential box. Book the tour for late afternoon. The lighting inside the stadium is magical as the sun sets through the new glass facade. We always try to combine the stadium visit with a panoramic tour of Madrid so families get the full experience.",
      "FC Barcelona's legendary home is undergoing its own massive renovation, but the experience remains iconic. The museum alone is worth the visit. It is the most visited museum in Barcelona, ahead of the Picasso Museum. The Immersive Tour takes you through the players' tunnel onto the pitch, through the mixed zone, into the away dressing room, and up to the commentary boxes. The museum showcases Messi's six Ballon d'Or trophies and decades of Barca history. If your group is training at the Joan Gamper (FCB's training ground), ask about watching the first team or youth teams train. We have arranged this for groups dozens of times and it is always a highlight. Seeing Barca's La Masia academy players up close is something your young players will never forget.",
      "Valencia CF's Mestalla is one of the oldest stadiums still in use in Spain, and it has an atmosphere that modern stadiums cannot replicate. The steep stands make it feel like the crowd is right on top of the pitch. A full stadium tour includes the dressing rooms, tunnel, dugout area, and the presidential box. Valencia CF's staff run the tours with genuine passion for their club. Combine the stadium tour with a full-day training session at Valencia CF's training facilities. Their coaching staff deliver sessions that are consistently rated as the highlight of the entire tour by our groups. The certificate ceremony at the end is a special touch that kids and adults alike treasure.",
      "Athletic Bilbao's cathedral of football. San Mames is modern, stunning, and has an atmosphere that rivals anywhere in Europe. The Basque Country adds a completely different cultural dimension to your tour. Stadium tour plus the Athletic Club Museum, which tells the remarkable story of a club that only signs players from the Basque Country and still competes at the highest level. The Bilbao region offers incredible gastronomy. We always recommend adding a pintxos tour in the Old Town after the stadium visit. Your group will thank you.",
      "Malaga might not have the global fame of Barcelona or Madrid, but their stadium offers something the bigger clubs cannot: intimacy and access. Your group can get genuinely close to the action here. Stadium access plus the possibility of organizing a friendly match at Malaga CF's facilities. The Costa del Sol location means you can combine football with beach time. Malaga is our secret weapon for groups that want to avoid the intensity of the big cities. The weather is perfect, the facilities are professional-grade, and the prices are significantly more accessible.",
      "The key to a great stadium visit is timing and logistics. At Odisea Tours, we handle all the bookings, transfers, and scheduling so your group arrives at the right time, avoids the crowds, and gets the most out of every visit. After 20 years and hundreds of tours, we know exactly how to sequence these visits into an itinerary that flows naturally and keeps energy levels high. [Plan your tour](/plan-your-tour) and we will build the perfect stadium route for your group.",
    ],
  },
  {
    slug: "arranging-friendly-matches-against-spanish-youth-clubs",
    title: "How to Arrange Friendly Matches Against Spanish",
    italicTitle: "Youth Clubs",
    excerpt:
      "The matches are the reason teams come to Spain. Everything else on the itinerary is a frame around them. A working guide to how the friendlies get built.",
    date: "2026-03-24",
    readTime: "7 min",
    category: "Field Notes",
    cover: "/img/journal/match-vs-local.jpg",
    body: [
      "The matches are the reason teams come to Spain. Everything else on the itinerary is a frame around them. A well-matched, properly refereed friendly against a Spanish youth club is the single thing a visiting team will still be talking about a year later, and the single thing that is most likely to be done badly if the operator does not know the local clubs by first name.",
      "The first thing to understand is that Spanish youth football runs on a structured pyramid. Every professional club, Barcelona, Real Madrid, Valencia, Sevilla, Villarreal, Real Sociedad, sits on top of a network of affiliated clubs, partner academies, and feeder programs. Below them is a densely populated middle tier of semi-professional and regional clubs whose youth teams are genuinely competitive. Below that is the amateur level. What we call arranging a friendly is choosing, for a given visiting team's age, strength, and time of year, the right layer to drop them into for a morning.",
      "The mistake most new tour operators make is to quote a match against a local Spanish team without specifying which layer. We have inherited groups whose previous operator promised matches against Barcelona affiliates and delivered, when the buses arrived, matches against a local recreation league. The Spanish clubs were not hiding anything. They had no idea the visiting group thought they were playing an academy team. The operator had collapsed three tiers into a single phrase to make the sale easier. We spend a lot of time untangling this for people who come to us for their second Spain tour.",
      "What we do instead is confirm the match level in writing, name the club, and, where appropriate, describe the specific age group within that club that we have secured. For a U14 team from Denver on one of our [youth soccer tours to Spain](/youth), we might arrange a match against the U15 side of a Segunda RFEF affiliate. A real, organized youth team, one division below the professional tier, competitive without being crushing. For a U18 high school team from Sydney, we might look at a Tercera Federación youth side, or the reserves of a Segunda División B academy. The matching matters. A mismatched game, too easy or too hard, is a wasted match.",
      "The logistics underneath all of this are the part nobody on the visiting side ever sees. Pitch bookings at real grass or 3G surfaces. Spanish federation referees, not volunteers. Medical cover. Kit storage. A translator if the home coach wants to exchange a few words before kickoff, which happens more often than people expect. A post-match handshake line that is not rushed, because the Spanish side will want to mark the moment, and the visiting side will spend the rest of the week talking about it. None of that is visible on an invoice, but all of it is the reason a match becomes a memory.",
      "Our rule is two friendlies per week, not more. Three matches in seven days is physically possible but mentally saturating. Two matches, spaced three or four days apart, with a full training session in between, is the rhythm that leaves players still excited for the second game. This applies equally to our [school football tours](/schools) and club trips. Groups who insist on three matches usually come back to us on their next tour and ask us to cut it to two. We quietly say yes.",
      "The final and most important thing we tell every coach before they commit to a Spain tour is this. The result of the friendly does not matter. A Spanish youth academy will probably beat your U16s. They beat almost everybody. What matters is the ninety minutes in between, where twenty-two teenagers from opposite sides of the world figure out that they are playing the same sport. The visiting players come off the pitch changed. We have watched it happen for twenty years. It does not get old.",
    ],
  },
  {
    slug: "best-time-of-year-for-a-youth-soccer-tour-to-spain",
    title: "The Best Time of Year for a Youth Soccer Tour",
    italicTitle: "to Spain",
    excerpt:
      "The uncomfortable answer we give every coach, the window you probably want is not the one your club calendar is telling you to take.",
    date: "2026-03-22",
    readTime: "6 min",
    category: "Field Notes",
    cover: "/img/journal/happy-group.jpg",
    body: [
      "Every coach asks us when to go, and every year we give them the same uncomfortable answer. The window you probably want is not the window the rest of your club calendar is telling you to take. The best time of year for a youth soccer tour to Spain is not summer. It is April and October. We know this is inconvenient. It is also true.",
      "Summer in Spain is hot, expensive, and, for the professional academies we work with, the wrong time. Spanish professional clubs run on a European calendar, which means their own youth sides are on a six-week break from mid-June through late July. The quality of opponents we can arrange in those weeks drops a full tier. The stadium tours are overrun with tourists. The hotel rates in any coastal city double without apology. A summer Spain tour is not impossible. We organize plenty of them. But the value is worse, the temperatures are harsh for teenage athletes, and the atmosphere around the academies is distinctly quieter.",
      "April and October are the two windows where everything aligns. The Spanish league is mid-season, which means the academies are training at full intensity. The weather in both Barcelona and Madrid is in the seventies by day and the low sixties at night, which is close to perfect for teenage match legs. Hotel rates are at their lowest point outside of winter. The cities are fully alive without being overrun. We have run Spain tours in both these windows for nearly two decades, and we still get a small thrill when a new client chooses April without us having to argue for it.",
      "The one exception we make to this rule is for high school teams in the United States, whose spring semester and state tournament schedules leave almost no room to travel in April. For these groups we push hard for early June, the last week of the Spanish regular season, before the academies break. You get a slightly hotter Spain and slightly pricier hotels, but you also catch the final match days of La Liga, which is something high school players talk about for a long time afterwards.",
      "November is the sleeper option. Late October bleeds into early November without much change in the weather, and for clubs whose fall season wraps up around Halloween, the first two weeks of November are an excellent Spain window. It is also a beautiful time for a [Camino de Santiago](/tours/camino-de-santiago) trip. The light is softer, the hotels are the cheapest they will be all year, and the Spanish academy coaches are in the reflective part of their season where they have a little more time to host a visiting group properly. We do more November tours every year as more coaches figure this out.",
      "The windows we steer every group away from are Easter week in Spain, Semana Santa, when the entire country halts for religious processions and our bus operators and referees disappear, and the first two weeks of January, when the Spanish Copa del Rey round disrupts everything. Everything else is workable with enough notice. April and October are the two best months. June is the compromise. July and August are for vacations, not tours. [Start planning](/plan-your-tour) and we will help you find the right window.",
    ],
  },
  {
    slug: "why-la-masia-is-still-the-best-football-visit-in-europe",
    title: "Why La Masia is still the best football",
    italicTitle: "visit in Europe",
    excerpt:
      "Every academy in Europe now runs a visitor program. Barcelona's is twenty years older, and it shows.",
    date: "2026-03-18",
    readTime: "6 min",
    category: "Dispatches",
    cover: "/img/tours/soccer.jpg",
    body: [
      "There are perhaps two dozen top football academies in Europe you can now visit as a group. Most are recent additions. Manchester City opened theirs in 2014. PSG's visitor program dates from 2019. Bayern Munich's new facility only started hosting outside groups in 2022. These are all very good programs. They are also, unmistakably, corporate operations.",
      "La Masia is different because it was never built for visitors. It was built to develop footballers, starting in 1979, and it still is. With an obsession that every agency who has ever brought a group through its gates will recognize the moment they step inside. The staff are not tour guides. They are coaches who have been told, today, that a group from Ohio will be visiting, and would they mind walking them around. Most of the time, they do not mind. Sometimes they bring a training session to a pause so a twelve-year-old from Cincinnati can meet the kid who might be the next Pedri.",
      "The visit itself is not polished. You will not be handed a glossy folder. There is no gift shop at the end. What you will get, if you arrange it through an agency that has actually spent time there, is a walk through grounds that feel like a monastery. A twenty-minute conversation with a technical director who still speaks about the club the way he did when he first arrived. And, if your group is quiet and interested, a seat at the side of a youth training session where you can watch the thing being built in real time.",
      "This is why we think La Masia is still the best football visit in Europe. Not because it is the shiniest, because it is not. Because it is the only one that still feels, after forty-five years, like a place where the game is being taken seriously by people who do not seem to notice that tourists are watching. We include La Masia on nearly every [European soccer tour](/tours/european-soccer-tours) we build.",
      "We have been taking school groups there since 2009. We still feel lucky every time we walk through the gate.",
    ],
  },
  {
    slug: "barcelona-vs-madrid-best-city-football-tour-spain",
    title: "Barcelona vs Madrid: Which City Is Better for Your",
    italicTitle: "Football Tour?",
    excerpt:
      "The eternal debate, settled from a football tour perspective. We break down training facilities, stadiums, culture, and logistics to help you choose.",
    date: "2026-03-13",
    readTime: "7 min",
    category: "Dispatches",
    cover: "/photos/veterans-soccer-tour-fc-barcelona-visit.jpg",
    body: [
      "It is the question every group asks: should we go to Barcelona or Madrid? After organizing hundreds of tours to both cities, here is my honest breakdown. The best answer is usually both. But if you can only choose one, here is how to decide.",
      "For training facilities, Barcelona offers FC Barcelona at Joan Gamper which is world-class with training on the same pitches where the first team trains, coaches who are FCB-certified, and structured professional sessions. The certificate ceremony at the end is emotional. Other options include Espanyol facilities and various municipal sports complexes. Madrid offers the Spanish FA (RFEF) headquarters, the crown jewel where La Roja trains with impeccable facilities and the experience of training where World Cup winners prepare. Other options include Atletico Madrid's facilities and various club academies. It depends on your priorities: for pure brand prestige, FC Barcelona; for the national team experience, Madrid.",
      "For stadium experience, Barcelona has Camp Nou which is iconic and massive at 99,000 capacity with an incredible museum, currently undergoing renovation but still visitable, plus the Johan Cruyff Stadium where Barca Femeni and youth teams play. Madrid has the Santiago Bernabeu which is recently renovated and arguably the most impressive stadium in the world right now with the retractable pitch, 360-degree screen, and new roof, plus the Wanda Metropolitano which is Atletico Madrid's modern home. Madrid wins by a hair. The new Bernabeu is on another level, and having two elite stadiums to visit gives you options.",
      "For culture and activities beyond football, Barcelona offers La Rambla, Gothic Quarter, Sagrada Familia, Park Guell, the beach at Barceloneta which is a 15-minute walk from the city center, incredible food, and vibrant young energy perfect for groups with families. Madrid offers the Royal Palace, Puerta del Sol, Plaza Mayor, Retiro Park, world-class museums like the Prado and Reina Sofia, and arguably the best nightlife in Europe which is relevant for veterans tours. Barcelona wins for youth and family groups thanks to beach and walkability. Madrid wins for veterans and adults with culture and nightlife.",
      "Barcelona wins on weather from March through November with its Mediterranean climate meaning warm sunny days and pleasant evenings, while Madrid has extreme temperatures that are brutally hot in summer and properly cold in winter. October and April are comfortable in both. Barcelona is more compact and walkable with most things within 30 minutes by bus, while Madrid is larger and more spread out. However, Madrid is the central transport hub with more direct flights and connections. For cost, Barcelona has become expensive with higher hotels, restaurants, and entry fees across the board plus tourist tax, while Madrid offers better value especially for accommodation and dining.",
      "My recommendation after 20 years is to do both. A 10 to 12 day tour that starts in Madrid and ends in Barcelona or vice versa gives your group the complete Spanish football experience. You train at the Spanish FA and FC Barcelona. You visit the Bernabeu and Camp Nou. You experience traditional Spain and Mediterranean Spain. If you truly must choose one, Barcelona for youth groups, Madrid for [veterans football tours](/veterans). [Plan your tour](/plan-your-tour) and we will help you decide.",
    ],
  },
  {
    slug: "valencia-sevilla-football-cities-most-tours-miss",
    title: "Valencia, Sevilla and the Football Cities Most Tours",
    italicTitle: "Miss",
    excerpt:
      "Every Spain soccer tour starts in Madrid or Barcelona. The cities worth visiting next are the ones most itineraries skip, and the ones we push clients toward on their second trip.",
    date: "2026-03-12",
    readTime: "7 min",
    category: "Dispatches",
    cover: "/img/journal/valencia-cf.jpg",
    body: [
      "Every Spain soccer tour itinerary you will ever see begins with the same two cities. Madrid first or Barcelona first, and then the other one, and then the plane home. We have built this tour a thousand times. It is the safe one. It is not, in our opinion, the most interesting Spain has to offer a football-loving group.",
      "The cities most tours miss, and the ones we quietly push clients toward whenever they are on their second or third Spain trip, are Valencia and Sevilla. Both are professional football cities with enormous histories. Both sit at roughly the same match quality as their Madrid and Barcelona equivalents. Both have academies worth visiting, stadiums worth touring, and, crucially, local cultures that feel less like a tourist route and more like an actual city.",
      "Valencia is our personal favorite. The city is smaller than Madrid and Barcelona in a way that makes it easy to walk between the training ground, the hotel, and the historic center in the same afternoon. Mestalla is the most intimate top-division stadium in Spain. The stands feel close to the pitch in a way modern stadiums have largely engineered away. The academy at Paterna, as we have written elsewhere, is the most generous of the five major Spanish academies in how it treats visiting youth teams. The city itself is famous for paella, which is worth noting only because the paella your group will eat on a terrace in Ruzafa is a different object entirely from whatever they have ordered in the United States. For groups who want to build the entire trip around the food, our [Sabores de Espana tour](/tours/sabores-de-espana) does exactly that. The players will remember it. They will talk about it more than they talk about most of the football.",
      "Sevilla is a harder sell on paper and an easier sell once the group arrives. Two professional clubs, Sevilla FC and Real Betis, play across a river from each other, and the rivalry runs deeper than almost any in European football. Sevilla's training ground is human-scaled, the academy staff are reachable, and the city itself, the whitewashed streets, the cathedral, the flamenco culture, is the version of Spain that a lot of Americans imagined before they ever set foot in the country. For a group with one extra day in the itinerary, we will always argue for an afternoon in Sevilla.",
      "The quieter cases we make on longer tours are for Bilbao and San Sebastián in the Basque Country, and for Villarreal. Bilbao is the hardest of the Spanish football cities for an outsider to love on a first visit. It rains. The city is built into a valley that runs gray in November. And yet. San Mamés is one of the three or four most atmospheric stadiums in Spain, the Basque food is the best in Europe, and Athletic Bilbao's local-only player philosophy is a lesson a visiting coach can spend three hours talking about on the bus ride out of the city. San Sebastián, thirty minutes away, is where we take groups for the rest day, because the rest day is better if it happens somewhere people will never forget.",
      "Villarreal we have written about too. It is not a city. It is a small industrial town with a football club that has spent fifteen years punching above every weight class in Europe, and an academy so well-designed it draws visiting coaches from Japan and Australia specifically to walk its pitches. It is a pilgrimage, not a day trip. Groups that do it come back to us the next year asking to do it again.",
      "The point of writing all this down is simple. If a Spain soccer tour is done well, it leaves the players with a better idea of the country football comes from. Madrid and Barcelona are two chapters of that story. The other cities are the ones where the players start to figure out that Spain is bigger than the two famous shirts. That shift, when it happens, is one of the best moments of the trip.",
    ],
  },
  {
    slug: "pre-tour-checklist-coach-field-guide",
    title: "The Pre-Tour Checklist: A Coach's Field",
    italicTitle: "Guide",
    excerpt:
      "The work nobody outsources to the tour operator. The items only the club can handle, and the ones that decide whether the trip goes smoothly.",
    date: "2026-03-08",
    readTime: "7 min",
    category: "Field Notes",
    cover: "/img/journal/professional-coaching.jpg",
    body: [
      "The difference between a good Spain tour and a great one is almost always decided in the three months before the plane takes off. We have watched this happen for two decades. The coaches who prepare well have trips that go smoothly. The coaches who leave the preparation to the operator and the parents end up firefighting in airports. Neither group is wrong to trust us with the heavy lifting, that is what they are paying for, but the items on this list are the ones only the club can do, and they are the ones that matter most.",
      "Passports first, always. Every player and every adult on the trip needs a passport valid at least six months past the return date. We have pulled more than one travel plan apart because a single player's passport was issued four and a half months before departure, which clears U.S. Customs on the way out but not Spanish immigration on the way in. The rule is six months of validity past the return flight. We tell clubs to check every passport, by hand, ninety days before departure. Not ninety days before booking. Ninety days before the trip.",
      "Medical forms and insurance are the second item, and the one coaches most often defer until the last week. A travel medical form for each player, signed by a parent, listing allergies and emergency contacts. A copy of the team's insurance policy that explicitly includes international travel, or a supplemental policy if the home policy does not. A signed permission slip that authorizes the head coach to consent to medical care in a foreign country in case a parent is unreachable. These forms are tedious. They also turn a broken ankle on a training pitch in Valencia from a six-hour problem into a twenty-minute problem.",
      "Kit is the third. Every player should travel with two full training sets and one match kit, not the other way around. The match shirt is the one everyone wants to pack three of, but you only wear it twice in a week, and the training kit is what gets destroyed. We tell coaches to plan for one kit rotation per day, with a laundry turnaround built into the itinerary on day four. [Our team](/team) handles the laundry. The coach's job is to make sure the players packed in the first place.",
      "Currency, cards, and phones are the part most American clubs underestimate. Spain runs on euros, not dollars, and on chip-and-PIN cards, not magstripe. A parent who hands their fourteen-year-old a debit card that worked in Ohio last week may be handing them a card that will be declined at a terminal in Seville this week. We recommend one working international-capable debit card per adult, not per player, and a small cash float of fifty to a hundred euros per player for incidentals. Phones should be put into an international plan before departure, not at the airport. The airport plans are a small racket and every coach who has used one regrets it.",
      "The last item is the hardest one to explain and the most important. The coach needs to spend an hour with the players in the week before the trip and tell them, plainly, what this tour is. Not the itinerary. The meaning. Why they are going to Spain. What the opponents will be like. How to behave at La Masia. Why the stadium walk is supposed to feel serious. What the coach expects of them in the bus, at the dinner table, in the museum. Teams who are told this arrive prepared. Teams who are not told this arrive excited, which is different. The first group comes home changed. The second group comes home with souvenirs. The difference is the conversation a coach has with his players in the week before they leave.",
    ],
  },
  {
    slug: "training-spanish-fa-rfef-football-tour-experience",
    title: "What It's Like to Train at the Spanish FA: An Insider's",
    italicTitle: "Guide",
    excerpt:
      "The Spanish Football Federation (RFEF) headquarters is where La Roja prepares for World Cups. Here is what your group can expect when training at their world-class facilities.",
    date: "2026-03-06",
    readTime: "5 min",
    category: "Dispatches",
    cover: "/photos/veterans-soccer-tour-professional-training-ground.jpg",
    body: [
      "If there is one experience that consistently gets rated as the highlight of our tours, it is training at the Spanish Football Federation (RFEF) headquarters. Here is what your group can expect.",
      "The RFEF headquarters is located in Las Rozas, just outside Madrid. This is where the Spanish national team, men's, women's, and youth, prepares for major tournaments. The same pitches where Spain prepared for their World Cup and European Championship victories. The complex features multiple full-size professional pitches that are immaculately maintained with natural and artificial surfaces, indoor training facilities for tactical sessions and bad weather days, changing rooms and medical areas at professional grade used by the national team, dining facilities where your group can eat where the national team eats, and conference rooms for team talks, video analysis, and welcome meetings. The moment your players walk through the gates and see the Spanish FA crest, the RFEF flags, and the pristine pitches, you can see it in their faces. They know this is special.",
      "A typical training day at the RFEF on our tours starts with a morning session of two hours including a welcome and facility tour, warm-up and technical drills led by licensed coaches, position-specific work with goalkeepers separate, and small-sided games with tactical focus. Then lunch at the RFEF where your group eats at the federation's dining area. This is a highlight in itself. The food is excellent, and the experience of having lunch like a national team player is something kids talk about for years. The afternoon session of two hours covers a tactical session building on the morning's work, match simulation or full-sided game, cool down and certificates.",
      "The sessions are delivered by Spanish FA-licensed coaches who regularly work with youth development programs. They are professionals, structured, demanding, but encouraging. They adapt sessions to your group's level, whether you are a competitive U15 academy or a [veterans football tour](/veterans) on a social trip. One thing I always hear from coaches who travel with their teams is that they learned as much as their players did. The Spanish coaching methodology, their emphasis on positional play, rondos, and decision-making speed, is world-renowned for a reason.",
      "For some groups, we can arrange accommodation at the RFEF complex itself. Your players literally live where the national team lives during camp. They sleep in the same rooms, eat in the same dining hall, and train on the same pitches. This option is not always available as it depends on the national team's schedule, but when it is, it is an extraordinary experience. Imagine your players going to sleep knowing that the room they are in was used by the Spanish squad preparing for the Euros.",
      "The Spanish FA stands out for three reasons. The history, because this is where World Cup winners prepared and that is not marketing but literally true and your players feel it. The quality, because everything from the pitches to the changing rooms to the food is at the highest professional level. And the respect, because the RFEF staff treat visiting groups with genuine warmth and they understand that for your players this might be a once-in-a-lifetime experience and they make it count. The Spanish FA is located near Madrid, so it fits naturally into tours that include the capital. We typically schedule RFEF training sessions at the start of the tour as it sets the tone for everything that follows.",
    ],
  },
  {
    slug: "what-parents-ask-before-europe-soccer-tour",
    title: "What Parents Ask Before Every Europe Soccer",
    italicTitle: "Tour",
    excerpt:
      "The first three questions have been the same since 2005. The answers are the part of the process that decides whether a parent feels safe sending their child.",
    date: "2026-03-04",
    readTime: "6 min",
    category: "Field Notes",
    cover: "/img/journal/youth-girls-happy.jpg",
    faqs: [
      {
        q: "Who supervises the players at night on a youth soccer tour to Europe?",
        a: "Every hotel we use has secured floors. Our staff conduct curfew walks and a head count at 11pm every night of every tour. Each trip travels with a Spanish-speaking ground coordinator who is a trained operator with a radio and a car, not a volunteer. Every player carries an emergency card with the hotel address, a Spanish phone number and embassy contact in both English and Spanish.",
      },
      {
        q: "What happens if my child gets injured or sick during the tour?",
        a: "Spain has one of the best public healthcare systems in Europe. We can get a player into a clinic or emergency room in most Spanish cities within thirty minutes. Our ground coordinator has standing relationships with two hospital networks in both Madrid and Barcelona, and we carry a single point of contact emergency protocol that includes insurance, parental notification and transport.",
      },
      {
        q: "How are food allergies and dietary requirements handled?",
        a: "We carry dietary information for every player before the plane takes off and brief every restaurant we bring a group to. Gluten-free is handled. Vegetarian is handled. Severe nut allergies are handled with written notes and visual checks.",
      },
      {
        q: "Can I call my child every day?",
        a: "Yes. Players keep their phones, and the hotels have wifi. Most groups also build in a daily call window so parents know when to expect a check-in.",
      },
    ],
    body: [
      "The questions change a little each year, and the order changes a lot, but the first three questions parents ask about a youth soccer tour to Europe have been the same since we started in 2005. We keep a mental list because we have answered them about ten thousand times, and because the answers are almost always the part of the process that decides whether a parent feels safe sending their child.",
      "The first question is always about safety. Not the abstract is Spain a safe country question, which almost every parent already knows the answer to, but the practical one. Who is with the players at night. What happens if someone gets sick in the middle of the trip. Are the hotels secure. Who is between my fifteen-year-old and a stranger in a foreign city at 10pm. The answers we give are specific and unhurried. Every hotel we use has secured floors, curfew walks by our staff, and a head count at 11pm every night of every tour. Every trip travels with a Spanish-speaking ground coordinator who is not a volunteer but a trained operator with a radio and a car. Every player carries an emergency card with hotel address, Spanish phone number, and embassy contact in both English and Spanish. The parents who hear this in full almost always relax within the first minute. The parents who do not hear it in full do not.",
      "The second question is about medical. What if my child breaks something. What if they have asthma. What if they need a prescription refilled in Spain. The answer is that Spain has one of the best public healthcare systems in Europe, that we can get a player into a clinic or emergency room in most Spanish cities within thirty minutes, that our ground coordinator has standing relationships with two hospital networks in both Madrid and Barcelona, and that we carry a single-point-of-contact emergency protocol that includes insurance, notification, and transport in both directions. We tell parents honestly that minor injuries happen on almost every trip. We also tell them, honestly, that the response time is better in Spain than in most American cities.",
      "The third question is about food. This one surprises new operators. It should not. Twenty-five American or Australian teenagers, many of whom have allergies or dietary preferences, eating three meals a day in a foreign country for a week, is a larger logistical project than the football. We carry dietary information for every player before the plane takes off, and we brief every restaurant we bring a group to. Gluten-free is handled. Vegetarian is handled. Severe nut allergies are handled with written notes and visual checks. Parents of children with real allergies want to hear this in detail, and we always give them the detail.",
      "After those three, the questions spread out. Will my child get enough sleep. Can I call them every day. What happens if the team loses badly and they are upset. Is the stadium visit scary. Is there a swimming pool at the hotel. Will there be free time. The answers get shorter. The first three are the ones that decide whether the trip happens. The rest are the ones that make the trip fun. Both sets deserve real answers, and we give them real answers every time. If you have questions of your own, [get in touch and start planning](/plan-your-tour).",
      "The last thing worth saying to any parent reading this page is something we do not usually write down. The tours we have been running for twenty years are tours we have sent our own children on. That is not a marketing line. It is the test we apply to every itinerary we sign off, every hotel we contract, every opponent we field, and every staff member we put on the bus. If we would not put our own child on this trip, the trip does not happen. It is the simplest rule we have, and the one we never break.",
    ],
  },
  {
    slug: "why-veterans-football-tours-spain-are-booming",
    title: "Why Veterans Football Tours to Spain Are",
    italicTitle: "Booming",
    excerpt:
      "More veteran and adult football clubs are touring Spain than ever before. Here is why, and what makes a great veterans tour different from a youth tour.",
    date: "2026-02-27",
    readTime: "5 min",
    category: "Field Notes",
    cover: "/photos/veterans-soccer-tour-spanish-football-federation.jpg",
    body: [
      "Something interesting has happened over the last few years: veteran and adult football clubs are touring Spain in record numbers. At Odisea Tours, veterans groups now make up almost a third of our business and growing fast. Here is why.",
      "Youth tours are about player development, coaching, and learning. Veterans tours are about something completely different: living the football experience you dreamed about as a kid. Playing on a professional pitch in Spain. Visiting the Bernabeu. Sitting in the press room where Zidane gave post-match interviews. Training at the Spanish FA. These are not development opportunities. They are bucket list moments. And unlike when you were 15, you can actually appreciate them.",
      "Most veteran clubs have been playing together for years, sometimes decades. The Tuesday night game, the Sunday morning league, the WhatsApp group that never shuts up. A tour to Spain takes that bond and amplifies it by a thousand. The shared experiences, scoring at a Spanish ground, losing embarrassingly to a local team half your age, finding that perfect restaurant in the Gothic Quarter, become stories you tell for the rest of your lives. It is not just a football trip. It is a memory factory.",
      "After organizing dozens of veterans tours, here is what we have learned about what works. Do not over-schedule. Youth tours pack in 2 to 3 activities per day, but veterans need breathing room. A morning match, a long lunch, and an afternoon at the beach is a perfect day. Nobody wants to feel like they are on a school trip. Quality over quantity matters. Veterans care less about doing everything and more about doing things well. One exceptional stadium tour is better than three rushed ones. A proper sit-down dinner at a great restaurant beats a quick meal at the hotel every time.",
      "Include partners and families. Many of our [veterans football tours](/veterans) groups travel with partners. While the lads play their match, partners explore the city with our bilingual guide. Everyone meets up for dinner with stories to share. It makes the trip richer for everyone. Veterans want to play, but they want fair opposition matched to their age and level. We organize matches against local Spanish veteran teams, and the post-match interactions, usually involving beer and broken Spanish, are often the highlight of the tour.",
      "The social programme matters. Post-match dinners, [food and wine tours](/tours/sabores-de-espana), pintxos tours, beach days, cultural visits are not add-ons. For veterans, the social programme is the tour, with football as the spine that holds it together. We are seeing average group size growing from 12 to 15 players up to 20 to 30 because partners, friends, and family join. Over 60 percent of our veterans groups book a second tour within 2 years. Tour length is increasing from 5 days to 7 to 10 days as standard because they want the full experience. We are seeing veterans clubs from the USA, Australia, UK, Ireland, South Africa, and increasingly Asia.",
    ],
  },
  {
    slug: "why-australian-teams-choosing-spain-over-england",
    title: "Why Australian Youth Teams Are Choosing Spain Over",
    italicTitle: "England",
    excerpt:
      "Ten years ago every Australian team landed in England first. That pattern has broken in the last five years. A note on why.",
    date: "2026-02-26",
    readTime: "7 min",
    category: "Dispatches",
    cover: "/img/journal/coaching-session.jpg",
    body: [
      "Ten years ago, almost every Australian youth soccer team that came to Europe landed in England. Manchester, Liverpool, London. The shirts they bought at the airport, the academy visits they scheduled, the local opposition they played, all English. We have watched that pattern break in the last five years. An increasing number of Australian clubs are skipping England on their first Europe tour and coming straight to Spain. When we ask the coaches why, the answer is always the same thing said a dozen different ways. Spain is a better football education.",
      "The first reason is the weather. An Australian youth team lands in London in June expecting European summer and finds mid-fifties and grey skies. The same team landing in Barcelona in June finds seventy-two and blue. Australian coaches are not soft. They are used to weather. But for a fourteen-day tour where the value of every match and every training session is measured in the intensity the players can bring to it, the climate in Spain is more generous to the work. Players are fresher. Training absorbs more. Matches go the full ninety without the back half turning into a grind.",
      "The second reason is the cost gap. A Spain tour is meaningfully cheaper than an England tour at the same quality level. London hotel rates are double what we pay in Madrid or Valencia. Ground transport in England is more expensive per kilometer. Academy access in England is tighter and more corporate, which means the visits that are available come at a premium. For an Australian club booking a [youth soccer tour to Spain](/youth), the savings are often the difference between a seven-night tour and a ten-night tour. Three extra nights of real football is the trade-off that most coaches cannot turn down once the math is shown to them.",
      "The third reason is harder to explain and the most important one. The football in Spain is taught differently, and the Australian game has been quietly moving toward a more Spanish model for a decade. The A-League Youth sides now run positional rondos that would have looked out of place in Sydney ten years ago. The under-age national teams have hired coaches who speak the same technical vocabulary as the Spanish academies. A visit to La Masia or Paterna lands differently when the visiting Australian team is already running half the drills they see on the pitch in Spain. England, by contrast, has spent the last decade trying to rebuild its own development model, and the identity of English academy football is less clear than it used to be. Spanish academies know what they are. The Australian coaches we work with want their players to see that clarity in person.",
      "The fourth reason is the one most Australians quietly enjoy. Spain is different from home in a way England is not. The streets are wider in a new way. The food is completely different. The language is one the players do not speak. The currency is not in any pocket they have ever used. For a team of sixteen-year-olds from Perth or Brisbane, Spain is a real cultural experience in a way that England, same language, same currency, same breakfast items, sometimes fails to be. A soccer tour is partly about the game. It is also, if it is a good tour, about the players discovering that the world is bigger than they had imagined. Spain delivers that second part with ease.",
      "The last thing we would say to any Australian coach considering their first [European soccer tour](/tours/european-soccer-tours) is that the Spain choice is no longer a contrarian one. Five years ago we were having to argue the case. Today, more Australian under-age squads are traveling to Spain than to England, and the conversation has flipped. The question is not whether Spain can match an English tour. The question is whether an English tour can still match what the Australian coaches have already started to see in Spain. That, for us, is a good sign. For our own game, and for theirs.",
    ],
  },
  {
    slug: "best-softball-tours-spain-us-teams",
    title: "The Best Softball Tours in Spain for US",
    italicTitle: "Teams",
    excerpt:
      "What a softball tour to Spain actually looks like for a US team: the cities, the host clubs you play, what it costs, and why Madrid, Valencia and Barcelona make a standout nine-day trip for a visiting softball team.",
    date: "2026-06-11",
    readTime: "11 min",
    category: "Field Notes",
    cover: "/photos/softball-tours-spain-hero.jpg",
    faqs: [
      {
        q: "What is the best softball tour in Spain for a US team?",
        a: "The most complete softball tour in Spain for US teams is a nine-day trip through Madrid, Valencia and Barcelona with four games against established Spanish clubs. Odisea Tours runs exactly this as the Spain Softball Experience: the group is based at the Spanish FA residence in Las Rozas, plays Club CBS Rivas in Madrid, the Selección Valenciana U22 and Sófbol Fénix Valencia in Valencia, and CB i Sófbol Sant Boi near Barcelona, with cultural days at Las Ventas, Toledo, the City of Arts and Sciences and Gaudí's Barcelona around the games.",
      },
      {
        q: "Which Spanish softball clubs do US teams play on tour?",
        a: "On a Spain softball tour, US teams typically play four host clubs across three cities: Club CBS Rivas in Rivas-Vaciamadrid (Madrid), the Selección Valenciana U22 fielded by the Valencian softball federation, Sófbol Fénix Valencia, and CB i Sófbol Sant Boi in Sant Boi de Llobregat, one of the historic homes of Spanish softball and baseball near Barcelona. Opponents are matched to your age and level and arranged ahead of the trip, though the final clubs can change with the Spanish season.",
      },
      {
        q: "How much does a softball tour to Spain cost for a US team?",
        a: "A Spain softball tour starts from $1,400 per person for a six-night trip, based on a group of 20, twin sharing, ground services only, with international flights separate. The price scales with the number of nights, the group size, the season and the hotel category, so a fuller nine-day trip through Madrid, Valencia and Barcelona with four games and the full cultural programme sits above that entry point. Pricing is locked once the group size, dates and trip length are confirmed.",
      },
      {
        q: "What is the best time of year for a softball tour to Spain?",
        a: "Late spring and early summer, roughly May through June, is the best window for a US softball tour to Spain. The weather is warm and dry across Madrid, Valencia and Barcelona, the Spanish league and federation sides are mid-season and available for friendlies, and it lines up with the end of the US school year. June also catches the Sant Joan festival on the Catalan coast, which makes the Barcelona leg memorable.",
      },
    ],
    body: [
      "Every year more US softball teams ask us the same question: can you build a real softball tour in Spain, not a sightseeing trip with one exhibition game bolted on, but a proper tour with competitive games against Spanish clubs in the middle of a cultural trip families will remember. The answer is yes. After twenty years running group sport tours in Spain, we have built the softball version on the same template that works for our other tours. This is the operator's view of a softball tour to Spain for a US team: the route, the clubs you would play, what it costs, and the decisions that separate a tour that lands from one that does not. We run it as the [Spain Softball Experience](/tours/softball-tours-spain), and the shape below is how we build it.",
      "## Why Spain for softball",
      "Softball in the US is enormous and the level is high, so the first thing a coach wants to know is whether Spain can give their players real games. It can. Spain has an established softball community concentrated around Madrid, Valencia and Catalonia, with federation structures, regional select sides and clubs that have been playing for decades. The level is not the US college game, and we never pretend it is. What it is, is competitive, well-organized, age-appropriate opposition that gives your players four real games in three different cities, against teams who are genuinely happy to host a visiting American side. The Spanish clubs treat these fixtures as an event. They turn out their squads, they put on refreshments afterward, and the post-game mixing between a team from Texas or California and a team from Valencia is consistently the part players talk about on the bus home.",
      "The second reason is that Spain gives you a complete trip around the softball. A pure tournament trip is all diamond and hotel. A Spain tour alternates game days with Las Ventas, Toledo, the City of Arts and Sciences in Valencia, Sagunto castle above the Mediterranean, and a guided day through Gaudí's Barcelona. For a group that includes families, and softball groups almost always travel with families, that balance is the whole point. The players get four competitive games. The parents get a tour of Spain. Nobody spends a week sitting in a single set of bleachers.",
      "## The route: Madrid, Valencia, Barcelona",
      "The tour we recommend runs nine days and eight nights from Madrid in the center to Barcelona on the coast, with Valencia in between. The group lands in Madrid and bases at the Spanish FA residence in Las Rozas when it is available, which is the same residence the Spanish national football teams use, with full facilities and a dining hall on site. The first competitive game comes on day three, against Club CBS Rivas in Rivas-Vaciamadrid, after a morning day-trip to Toledo. We deliberately do not schedule a game on day one. A team coming off a transatlantic flight does not play its best softball jet-lagged, and starting with a cultural day and an easy first evening sets the week up properly.",
      "From Madrid the tour moves to Valencia for the biggest playing day of the trip, a double-header against the Selección Valenciana U22, a regional select side fielded by the Valencian softball federation, and Sófbol Fénix Valencia, the city's home club. Valencia is also where we build in the rest day: a morning on Malvarrosa beach or free in the city before the games, because two games in one afternoon is a real workload and the legs need it. The tour then runs up the coast to Catalonia for the closing fixture against CB i Sófbol Sant Boi in Sant Boi de Llobregat, one of the historic homes of softball and baseball in Spain, before a final guided day in Barcelona and the flight home.",
      "## The clubs you play",
      "The four host clubs are the spine of the tour. We share the planned opponents and their age groups with you ahead of the trip, and we are upfront that the final fixtures can shift with the Spanish season. Club CBS Rivas is an established Madrid-region club and makes a strong, organized opener. The Selección Valenciana U22 is a select side rather than a single club, which gives your older players a genuinely competitive game against the best young softball players in the region. Sófbol Fénix Valencia is a warm, well-run home club and the second half of the Valencia double-header. CB i Sófbol Sant Boi, near Barcelona, sits in a town that has been central to Spanish softball and baseball for generations, and closing the tour there, the night of the Sant Joan festival in June, is the kind of finish that ends a trip on a high. We match each fixture to your team's age and level. If your group skews younger, we adjust the opponents accordingly.",
      "## What is included, and what is not",
      "A softball tour to Spain done properly is priced once, with no surprises on the ground. The per-person rate covers eight nights of accommodation, daily breakfast and dinner, all four games and the field permits and host-club coordination that sit behind them, a private coach with a driver for the airport pickups and every internal transfer, all the guided cultural visits, and a full-time Odisea Tours director who is with the group from the arrivals hall to the departure gate. What it does not cover is international flights, lunches, personal spending and travel insurance, which we strongly recommend. Keeping lunches out of the package is deliberate. Families like the flexibility to eat where they want at midday, and it keeps the headline price honest.",
      "## What it costs",
      "A Spain softball tour starts from $1,400 per person for a six-night trip, based on a group of twenty, twin sharing, ground services only. That number moves with the trip length, the group size, the travel dates and the hotel category, so the fuller nine-day Madrid, Valencia and Barcelona trip described here, with four games and the full cultural programme, sits above that entry point. Larger groups bring the per-person cost down. The honest way to get a real number is to tell us the squad size, the number of traveling families, your age groups, your travel window and how many nights you want, and we come back with a per-person price that names the hotels and the opponents rather than hiding behind a from-rate.",
      "## How to start planning",
      "If you are a coach or a team manager weighing a softball tour to Spain, the next step is a conversation, not a brochure. Tell us your squad size, your players' ages, how many parents and siblings are likely to travel, and your window, and we will draft a nine-day itinerary that names the cities, the host clubs and the hotels, and prices it per person. The full day-by-day, the four host clubs and the inclusions all live on the [Spain Softball Experience](/tours/softball-tours-spain) tour page, and you can see how we handle US groups more broadly on our [tours for US teams](/usa) page. When you are ready, [start the conversation here](/plan-your-tour). We have been building group tours in Spain since 2005, and softball is the newest version of that work, built on the same template we trust for our other sport tours.",
    ],
  },
];

export function postBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
