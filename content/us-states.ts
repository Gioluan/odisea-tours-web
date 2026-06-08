export type UsStateCity = {
  slug: string;
  name: string;
  note: string;
};

export type UsStateFAQ = {
  q: string;
  a: string;
};

export type UsState = {
  slug: string;
  name: string;
  abbreviation: string;
  hero_photo: string;
  og_summary: string;
  intro: string;
  soccer_landscape: string;
  major_soccer_organisations: string[];
  cities_we_serve: UsStateCity[];
  real_clients: string[];
  flight_overview: string;
  gateway_airports: string[];
  why_state_picks_spain: string[];
  ideal_audiences: string[];
  best_seasons: string;
  faqs: UsStateFAQ[];
};

export const US_STATES: UsState[] = [
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    hero_photo: "/photos/veterans-soccer-tour-camp-nou-barcelona.jpg",
    og_summary:
      "Spain soccer tours for California clubs, high schools and college programs. Iberia nonstop LAX to Madrid. Anchored by long-term California client relationships including Long Beach University and the NorCal coaching community.",
    intro:
      "California sends more youth soccer players to Europe than any other US state, and Spain is consistently the first international destination clubs from Cal North and Cal South pick. Odisea Tours has been hosting California groups since 2005, from competitive youth clubs and ECNL sides to high school programs and college rosters. The state's combination of direct flight access, year-round training calendar, and Spanish-speaking population make Spain an unusually natural fit for California-based soccer programs.",
    soccer_landscape:
      "Between Cal North Youth Soccer in the Bay Area and Cal South across the southern half of the state, California has the largest youth soccer registered base in the country. ECNL fields more than thirty California clubs across both genders. MLS Next runs deeper here than in any other state, anchored by the academies of LA Galaxy, LAFC, San Jose Earthquakes and Real Salt Lake affiliates. The high school season runs on a different calendar than club, which gives California families more flexibility than most states when scheduling an international tour. The college pipeline is equally dense, with Pac-12 and Big West programs (UCLA, USC, Stanford, Cal, Long Beach State, UC Irvine, San Diego State) running structured summer windows that fit a soccer-focused Spain tour cleanly.",
    major_soccer_organisations: [
      "Cal North Youth Soccer Association",
      "Cal South Youth Soccer Association",
      "ECNL Pacific Northwest and ECNL Southwest",
      "MLS Next (LA Galaxy, LAFC, San Jose Earthquakes affiliates)",
      "NPL West",
      "California Interscholastic Federation (CIF) high school soccer",
    ],
    cities_we_serve: [
      { slug: "los-angeles", name: "Los Angeles", note: "MLS Next academies, ECNL clubs across the South Bay, San Fernando Valley and Inland Empire" },
      { slug: "san-diego", name: "San Diego", note: "Surf Cup ecosystem, Presidio and CSL clubs, North County and East County academies" },
    ],
    real_clients: [
      "Long Beach University (college program, 2 trips, soccer-focused with Mauricio Ingrassia as Director of Coaching)",
      "NorCal Coaches and Directors (coaching delegation, travelled with Odisea in 2012)",
    ],
    flight_overview:
      "California's gateway to Spain is Los Angeles International (LAX), with Iberia operating a year-round nonstop service to Madrid of around 11 hours. San Francisco (SFO), San Diego (SAN) and Sacramento (SMF) groups typically route through LAX or one-stop via Dallas, Miami or London. Group bookings on Iberia carry through-bag handling, which removes one of the biggest pain points on connections.",
    gateway_airports: ["LAX (primary)", "SFO", "SAN", "SMF"],
    why_state_picks_spain: [
      "Year-round LAX to Madrid nonstop on Iberia. California groups land rested and train the same day, with no European weather window forcing the trip into a specific season.",
      "California's Spanish-speaking community runs deep enough that most California groups have at least one parent, coach or player who handles the language. The trip reads as cultural homecoming, not foreign expedition.",
      "Tour cost from California sits in the same range a Disney week or an out-of-state showcase would. Families recognise the number and the value proposition lands without sticker shock.",
    ],
    ideal_audiences: [
      "ECNL clubs (both genders) across Cal North and Cal South",
      "MLS Next academy and reserve sides",
      "CIF high school varsity programs (private and public)",
      "Pac-12 and Big West college soccer programs on in-season immersion tours",
      "AYSO regional select squads and academy sides",
    ],
    best_seasons:
      "California has the most seasonal flexibility of any state we work with. Spring break (mid-March to early April) is the most-booked window. Winter break (last two weeks of December through first week of January) works for programs that want a single intensive block. Summer (June through early August) is the only window we steer some California college programs away from, because Spanish professional academies are on their own summer break and opposition quality drops.",
    faqs: [
      {
        q: "How long is the flight from California to Spain?",
        a: "From LAX, Iberia operates a year-round nonstop to Madrid of around 11 hours. From SFO, SAN or SMF, groups typically route through LAX or one-stop via Dallas (American), Miami (American or Iberia) or London (British Airways). Total elapsed time is 11 to 14 hours depending on routing.",
      },
      {
        q: "Have you actually run Spain tours for California clubs before?",
        a: "Yes. Long Beach University has travelled with Odisea twice on in-season soccer-focused tours, in coordination with Director of Coaching Mauricio Ingrassia. The NorCal Coaches and Directors delegation travelled with us in 2012. We have hosted youth clubs, high school programs and college rosters from across the state for two decades.",
      },
      {
        q: "What does a Spain tour from California cost per player?",
        a: "A 10-day Spain soccer tour from California sits between roughly $3,495 and $4,200 per player for ground services (accommodation in 4-star hotels and the Spanish FA residence, ground transport, training facility access, fixtures, full board on match days, bilingual Odisea guides, group travel insurance). International flights are quoted separately because LAX to Madrid airfare moves week to week. The per-player number for college programs and tournament formats varies by group size and itinerary.",
      },
      {
        q: "When is the best time for a California team to travel to Spain?",
        a: "Spring break (mid-March to early April) and the winter break (late December through early January) are the two most-booked windows for California youth clubs and high schools. College programs running an in-season soccer-focused tour usually travel in late September or early October, which aligns with the Spanish league calendar at full intensity. We steer most California groups away from July and August because Spanish professional academies are on summer break and opposition quality drops.",
      },
      {
        q: "Can families travel on the same itinerary as the players?",
        a: "Yes, and a meaningful share of California families do. We run a parent-side cultural programme in parallel with training, with a bilingual guide leading market visits, cooking classes and city tours while players are on the pitch. Everyone reconvenes for dinners. Parents are not sitting in hotel lobbies.",
      },
      {
        q: "Which California cities have detailed planning pages?",
        a: "Los Angeles and San Diego have dedicated tour-planning pages covering flight routes, local soccer context and tour formats. Clubs from the Bay Area, Sacramento, Fresno, Orange County and the Inland Empire are welcome and we route flights from the nearest gateway airport.",
      },
    ],
  },
  {
    slug: "texas",
    name: "Texas",
    abbreviation: "TX",
    hero_photo: "/photos/veterans-soccer-tour-bernabeu-stadium.jpg",
    og_summary:
      "Spain soccer tours for Texas clubs, high schools and college programs. American Airlines nonstop DFW to Madrid in 9.5 hours. ECNL Texas, UIL varsity, FC Dallas and Houston Dynamo academies all welcome.",
    intro:
      "Texas runs one of the most organised youth soccer ecosystems in the country, anchored by the FC Dallas and Houston Dynamo academies and supported by deep ECNL and NPL bases across the major metros. Odisea Tours hosts Texas soccer programs across DFW, Greater Houston, Austin and San Antonio, and the American Airlines nonstop service from Dallas to Madrid makes Texas one of the easiest US states to build a Spain tour around.",
    soccer_landscape:
      "Tex-N and Tex-S Youth Soccer Associations together register more youth soccer players than any state outside California. ECNL has more than fifteen Texas clubs across both genders, and MLS Next is anchored by FC Dallas, one of the most productive academies in North America, alongside Houston Dynamo affiliates. The University Interscholastic League (UIL) runs Texas high school soccer with a January through April schedule, which leaves the summer and winter break windows clear for international travel without disrupting the school season. The college pipeline includes Big 12 and American Conference programs (SMU, Houston, Texas Tech, Baylor, Texas State, TCU) and a deep NAIA presence.",
    major_soccer_organisations: [
      "North Texas Youth Soccer Association (Tex-N)",
      "South Texas Youth Soccer Association (Tex-S)",
      "ECNL South Central",
      "MLS Next (FC Dallas, Houston Dynamo affiliates)",
      "NPL Texas",
      "University Interscholastic League (UIL) high school soccer",
    ],
    cities_we_serve: [
      { slug: "dallas", name: "Dallas", note: "FC Dallas academy ecosystem, ECNL clubs in Plano, Frisco, Southlake and the mid-cities, direct DFW to Madrid" },
      { slug: "houston", name: "Houston", note: "Houston Dynamo academy, dense Hispanic soccer culture, fast-growing youth pipeline across Katy, Sugar Land and The Woodlands" },
    ],
    real_clients: [
      "Multi-year work with clubs across DFW and Greater Houston (specific club names available on request).",
    ],
    flight_overview:
      "Texas's gateway to Spain is Dallas-Fort Worth (DFW), with American Airlines operating a year-round nonstop service to Madrid of around 9.5 hours, the shortest direct option of any US metro west of the Mississippi. Houston (IAH) groups can fly Iberia-codeshare via DFW or connect through Washington Dulles or Newark. Austin (AUS) and San Antonio (SAT) groups typically connect through DFW.",
    gateway_airports: ["DFW (primary, AA nonstop to MAD)", "IAH", "AUS", "SAT"],
    why_state_picks_spain: [
      "American Airlines nonstop DFW to Madrid is the shortest direct US-Spain flight west of the Mississippi. Groups land in 9.5 hours and train the same day.",
      "UIL high school soccer runs January through April, which leaves summer and winter break windows wide open for international travel without touching the school season.",
      "Group pricing from Texas families sits in the same range a Disney week or an out-of-state ECNL showcase would, with the upside of training at FC Barcelona, Valencia CF and the Spanish FA.",
    ],
    ideal_audiences: [
      "FC Dallas and Houston Dynamo academy and reserve sides",
      "ECNL clubs across Tex-N and Tex-S",
      "UIL varsity high school programs",
      "Big 12, American Conference and NAIA college programs",
      "Select and academy teams from U13 up",
    ],
    best_seasons:
      "Summer (early June through late July) and the winter break (late December through early January) are the two most-booked windows for Texas youth clubs and high schools. UIL high school soccer's late-January through April calendar means most Texas school programs travel in early summer or in the December break. College programs typically travel in late September.",
    faqs: [
      {
        q: "How long is the flight from Texas to Spain?",
        a: "American Airlines runs a nonstop DFW to Madrid service of around 9.5 hours, the shortest direct US-Spain flight west of the Mississippi. From Houston (IAH), groups typically connect through DFW (Iberia codeshare) or through Washington Dulles or Newark. Austin and San Antonio groups connect through DFW.",
      },
      {
        q: "Does the tour fit around the UIL high school soccer calendar?",
        a: "Yes. UIL high school soccer runs January through April. The two ideal windows for Texas school programs are early summer (June and the first half of July) and the winter break (late December through the first week of January). Both leave the school season untouched.",
      },
      {
        q: "What does a Spain tour from Texas cost per player?",
        a: "A 10-day Spain soccer tour from Texas sits between roughly $3,495 and $4,200 per player for ground services. International flights are quoted separately because DFW to Madrid airfare moves week to week. College pre-season and tournament formats vary by group size and itinerary.",
      },
      {
        q: "Can the tour include Spanish-language immersion for the players?",
        a: "Yes. For high school programs, we run a Spanish-immersion variant called Sin Traducción, where a Spanish-only guide leads the group and players are pushed into the language from arrival. This works particularly well for Texas school programs with established Spanish departments.",
      },
      {
        q: "Which Texas cities have detailed planning pages?",
        a: "Dallas and Houston have dedicated tour-planning pages covering flight routes, local soccer context and tour formats. Clubs from Austin, San Antonio, El Paso and the Rio Grande Valley are welcome and we route flights from the nearest gateway airport.",
      },
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    hero_photo: "/photos/odisea-tours-youth-girls-celebrating.jpg",
    og_summary:
      "Spain soccer tours for Florida clubs, high schools and college programs. Direct flights MIA to Madrid and MIA to Barcelona, Inter Miami CF and Orlando City SC academy pipeline, deep Hispanic soccer culture.",
    intro:
      "Florida has nonstop service to both Madrid and Barcelona, a youth soccer pipeline anchored by Inter Miami CF and Orlando City SC academies, and a Hispanic soccer culture that runs deeper than almost anywhere else in the US. Odisea Tours hosts Florida soccer programs across South Florida, Orlando, Tampa and Jacksonville on tours that take full advantage of the short flight and the language edge most Florida families already have on landing.",
    soccer_landscape:
      "Florida Youth Soccer Association is one of the most active state bodies in the country, and ECNL fields more than ten Florida clubs across both genders. MLS Next is anchored by Inter Miami CF's academy (the most-watched US youth academy of the last three years) and Orlando City SC, with strong affiliate programs in Tampa and Jacksonville. The Florida High School Athletic Association (FHSAA) runs the high school season from November through February, which leaves the spring and summer windows open for international travel. The college pipeline includes ACC, Sun Belt and Conference USA programs (Florida State, Miami, UCF, USF, FAU, FIU, FGCU).",
    major_soccer_organisations: [
      "Florida Youth Soccer Association (FYSA)",
      "ECNL South",
      "MLS Next (Inter Miami CF, Orlando City SC)",
      "NPL South",
      "Florida High School Athletic Association (FHSAA)",
      "United Soccer League (USL) academy affiliates",
    ],
    cities_we_serve: [
      { slug: "miami", name: "Miami", note: "Inter Miami CF academy ecosystem, nonstop service to both Madrid and Barcelona, deep Hispanic soccer culture across Dade, Broward and Palm Beach" },
    ],
    real_clients: [
      "Multi-year work with clubs across South Florida and Central Florida (specific club names available on request).",
    ],
    flight_overview:
      "Florida is the only US state with nonstop service from a single airport (Miami International) to both Madrid and Barcelona. Iberia and American run MIA to Madrid (around 9 hours) year-round. Level and American run MIA to Barcelona (around 10 hours) year-round. From Orlando (MCO), groups typically route through Miami or one-stop via Madrid. From Tampa (TPA) and Jacksonville (JAX), groups connect through Miami or Charlotte.",
    gateway_airports: ["MIA (primary, nonstop to MAD and BCN)", "MCO", "TPA", "FLL", "JAX"],
    why_state_picks_spain: [
      "Miami is the only US gateway with nonstop service to both Madrid and Barcelona. No transfers, no missed-connection risk.",
      "South Florida families read Spanish signage, order meals in Spanish, navigate Spanish hotels and cities without friction. Half the cultural-onboarding work is already done before the plane lands.",
      "The La Liga culture in South Florida homes makes Spain the obvious first international tour for any ambitious Florida club, and Inter Miami CF's rise has made the European-pipeline conversation urgent.",
    ],
    ideal_audiences: [
      "Inter Miami CF and Orlando City SC academy and affiliate sides",
      "ECNL clubs across FYSA",
      "FHSAA varsity high school programs",
      "ACC, Sun Belt and Conference USA college programs",
      "Hispanic soccer academies and church-league select squads",
    ],
    best_seasons:
      "Spring break (mid-March to early April) and the late summer window (early August before FHSAA preseason) are the two most-booked windows for Florida youth clubs. FHSAA high school soccer's November through February calendar means most Florida school programs travel in early summer or the December break. College programs typically travel in late September.",
    faqs: [
      {
        q: "How long is the flight from Florida to Spain?",
        a: "Miami International (MIA) runs nonstop service to both Madrid (around 9 hours) and Barcelona (around 10 hours) year-round on Iberia, American and Level. Orlando, Tampa and Jacksonville groups connect through Miami or one-stop through Madrid.",
      },
      {
        q: "Does the tour fit around the FHSAA high school soccer calendar?",
        a: "Yes. FHSAA high school soccer runs November through February. The two ideal windows for Florida school programs are spring (March-April) and early summer (June through mid-July). Both leave the school season untouched.",
      },
      {
        q: "What does a Spain tour from Florida cost per player?",
        a: "A 10-day Spain soccer tour from Florida sits between roughly $3,295 and $4,100 per player for ground services. The lower end of that range reflects the shorter flight time from Miami and the lower airfare base, which is typically the lowest of any major US metro.",
      },
      {
        q: "Do you work with Inter Miami CF or Orlando City SC academies?",
        a: "We work with academy-affiliated clubs and reserve programs across Florida. We do not represent ourselves as an official partner of Inter Miami CF or Orlando City SC and do not promise fixtures against their reserve sides. Our fixtures are against Spanish academy or amateur sides matched to your age and level.",
      },
      {
        q: "Which Florida cities have detailed planning pages?",
        a: "Miami has a dedicated tour-planning page covering flight routes, local soccer context and tour formats. Clubs from Orlando, Tampa, Jacksonville and the Treasure Coast are welcome and we route flights from the nearest gateway airport.",
      },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    hero_photo: "/photos/veterans-soccer-tour-spanish-football-federation.jpg",
    og_summary:
      "Spain soccer tours for New York, New Jersey and Connecticut clubs. 7-hour nonstop JFK to Madrid. NYCFC and Red Bulls academy pipeline, ECNL, NPL and MLS Next clubs across the metro.",
    intro:
      "New York is the closest major US metro to Spain by flight time and one of the easiest US states to build a Spain tour around. Odisea Tours hosts New York metro soccer programs across Manhattan, the boroughs, Long Island, Westchester, Rockland, and the adjacent New Jersey and Connecticut counties, using the nonstop JFK to Madrid (7 hours) and Newark to Barcelona (8 hours) services to fit the school calendar tightly without burning a day on connections.",
    soccer_landscape:
      "The New York metro runs ECNL, NPL, MLS Next and a deep high school soccer tradition across both private and public schools. The MLS Next academies of New York City FC and the New York Red Bulls are the most prominent of the East Coast, and the ECNL base includes some of the most competitive academy sides on the eastern seaboard. The Eastern New York Youth Soccer Association covers the metro proper, while the New York State West Youth Soccer Association covers Buffalo, Rochester and Syracuse. High school soccer in New York runs in the fall, which leaves the spring and summer windows clear for international travel.",
    major_soccer_organisations: [
      "Eastern New York Youth Soccer Association (ENYYSA)",
      "New York State West Youth Soccer Association",
      "ECNL Mid-Atlantic and ECNL Northeast",
      "MLS Next (New York City FC, New York Red Bulls)",
      "NPL Northeast",
      "New York State Public High School Athletic Association (NYSPHSAA)",
      "Catholic High School Athletic Association (CHSAA, private school)",
    ],
    cities_we_serve: [
      { slug: "new-york", name: "New York", note: "MLS Next academies, ECNL clubs across the boroughs, Long Island, Westchester, Rockland and the adjacent NJ and CT metro counties" },
    ],
    real_clients: [
      "Multi-year work with clubs across the NY/NJ/CT tri-state metro (specific club names available on request).",
    ],
    flight_overview:
      "JFK is the New York gateway to Spain, with Iberia, Delta and American all operating nonstop service to Madrid of around 7 hours. Newark (EWR) runs United nonstop to Barcelona at around 8 hours. LaGuardia (LGA) and the smaller regional fields connect through JFK or EWR. The metro has the most carrier optionality of any US gateway to Spain, which keeps group rates competitive year-round.",
    gateway_airports: ["JFK (Iberia, Delta, American nonstop to MAD)", "EWR (United nonstop to BCN)", "LGA"],
    why_state_picks_spain: [
      "7-hour nonstop JFK to Madrid is the shortest transatlantic flight from any US city. Players land rested and the trip never burns a day on layovers.",
      "Every major US carrier flies JFK to Madrid or EWR to Barcelona, so group rates stay competitive year-round, especially in the off-peak windows.",
      "Academic calendar alignment. NY private schools and public districts both break in the same windows that work for training in Spain, with no UIL-style calendar conflict to navigate.",
    ],
    ideal_audiences: [
      "NYCFC and Red Bulls academy and affiliate sides",
      "ECNL clubs across ENYYSA, NJ and CT",
      "NYSPHSAA and CHSAA varsity programs",
      "Patriot League, Big East and Ivy League college soccer programs",
      "Private school First XIs",
    ],
    best_seasons:
      "Spring break (last week of March or first week of April) and the winter break (last week of December through first week of January) are the two most-booked windows for NY metro youth clubs. The summer window (June through mid-July) is heavy for high school programs and college pre-season. New York high school soccer's fall calendar leaves both spring and summer windows clear.",
    faqs: [
      {
        q: "How long is the flight from New York to Spain?",
        a: "JFK to Madrid is 7 hours nonstop on Iberia, Delta or American. Newark (EWR) to Barcelona is 8 hours nonstop on United. This is the shortest transatlantic flight from any US city.",
      },
      {
        q: "Does the tour work for both private school and public school groups?",
        a: "Yes. We run separate tour shapes for CHSAA private school varsity programs (often combined with Spanish-language coursework) and NYSPHSAA public school programs (often combined with an athletic department's overall European exposure). Both groups travel in similar windows but the cultural programme adapts to the group's interests.",
      },
      {
        q: "What does a Spain tour from New York cost per player?",
        a: "A 10-day Spain soccer tour from New York sits between roughly $3,295 and $4,000 per player for ground services. The 7-hour nonstop from JFK keeps the airfare base lower than most US metros, and the carrier competition on the route works in the group's favour.",
      },
      {
        q: "Do you also serve clubs from New Jersey and Connecticut?",
        a: "Yes. The NY/NJ/CT tri-state metro is treated as a single market for tour planning purposes. Clubs in Bergen County, Westchester, Rockland, Fairfield County and Nassau or Suffolk all use the same JFK or EWR gateway and the same tour formats apply.",
      },
      {
        q: "What detailed planning page should I read next?",
        a: "The New York city tour-planning page covers flight routes, local soccer context and tour formats in operational detail. The Soccer Tours in Spain pillar guide covers pricing, training homes and the four tour formats end to end.",
      },
    ],
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    abbreviation: "HI",
    hero_photo: "/photos/veterans-soccer-tour-match-vs-spanish-team.jpg",
    og_summary:
      "Spain soccer tours for Hawaii clubs and high schools. Hawaii Elite has travelled annually with Odisea Tours since 2019. Brent Nunes is our Hawaii partner. Routing through LAX with nonstop continuation to Madrid.",
    intro:
      "Hawaii is the longest journey from a US state to Spain, and it is also the state with our deepest, longest-running client relationship. Hawaii Elite has travelled with Odisea Tours every year since 2019, in partnership with Brent Nunes. After six consecutive years of running Hawaii groups through Madrid, Valencia and Barcelona, we have built a tour shape specifically calibrated for the Pacific time zone, the long flight day, and the unique competitive landscape Hawaii youth soccer operates inside.",
    soccer_landscape:
      "Hawaii Youth Soccer Association (HYSA) runs the state's competitive youth soccer base, and Hawaii Elite is the most prominent club. The Hawaii Premier Soccer League covers the upper end of the competitive pyramid. What makes Hawaii distinct from any mainland state is the geography. Hawaii kids have less access to mainland US showcase events than their peers in California or Texas, which makes an international tour fill a clearer competitive gap. Players who travel with us from Hawaii return having played against Spanish academy and amateur opposition the same age and level they would meet at a top mainland showcase, with the cultural depth of a real European tour as a bonus the mainland circuit cannot provide.",
    major_soccer_organisations: [
      "Hawaii Youth Soccer Association (HYSA)",
      "Hawaii Premier Soccer League",
      "Hawaii Elite (Odisea Tours' anchor Hawaii partner)",
      "Hawaii High School Athletic Association (HHSAA)",
    ],
    cities_we_serve: [
      { slug: "honolulu", name: "Honolulu (Oahu)", note: "Primary HYSA base, Honolulu International (HNL) gateway, Hawaii Elite and HHSAA clubs across the island" },
      { slug: "kailua-kona", name: "Big Island and outer islands", note: "Clubs from Kona, Hilo, Maui and Kauai connect through Honolulu or LAX" },
    ],
    real_clients: [
      "Hawaii Elite (six consecutive years travelling with Odisea since 2019, partnership with Brent Nunes).",
    ],
    flight_overview:
      "Hawaii's gateway to Spain is Honolulu (HNL), with a connection through LAX onto Iberia's nonstop service to Madrid. Total travel time is around 17 to 19 hours including the LAX connection. We schedule HNL departures for late evening so groups arrive Madrid in the morning, hold the hotel for an early check-in, and protect Day 1 as a pure rest day before training begins on Day 2. Outer-island groups (Maui, Kauai, Big Island) connect through Honolulu first.",
    gateway_airports: ["HNL (primary, connect through LAX)", "OGG (Maui, connect through HNL)", "KOA (Big Island, connect through HNL)", "LIH (Kauai, connect through HNL)"],
    why_state_picks_spain: [
      "Six consecutive years of running Hawaii groups through Spain means the long-haul logistics are dialled in. The Day 1 rest protocol, the Pacific time zone reset, the LAX layover handling, none of it is improvised.",
      "Hawaii kids get less access to mainland US showcase opposition than their peers in California or Texas. A Spain tour fills a competitive gap the mainland circuit cannot, with academy-level opposition and a structured European training environment.",
      "Hawaii Elite's repeat booking pattern (annual since 2019) is the strongest credibility signal we have anywhere in the US. The proof that the trip lands properly is that the same families and the same club come back every year.",
    ],
    ideal_audiences: [
      "Hawaii Elite and HYSA competitive clubs",
      "HHSAA high school varsity programs",
      "Club teams from Oahu, Maui, Kauai and the Big Island",
      "Mixed-school select squads",
    ],
    best_seasons:
      "Summer (mid-June through late July) is the most-booked window for Hawaii groups, matching the HHSAA school break and avoiding the Pacific hurricane window. Spring break works for some clubs but the routing is harder during high travel season. Hawaii Elite typically travels in summer.",
    faqs: [
      {
        q: "How long is the journey from Hawaii to Spain?",
        a: "Total elapsed time is around 17 to 19 hours including a 6-hour flight from HNL to LAX and the 11-hour Iberia nonstop from LAX to Madrid. We schedule Hawaii groups for late-evening HNL departures so the arrival in Madrid lands in the morning local time. Day 1 is protected as a pure rest day. Training starts Day 2.",
      },
      {
        q: "Have you really hosted Hawaii groups before?",
        a: "Yes. Hawaii Elite has travelled with Odisea Tours every year since 2019, six consecutive years as of 2026, in partnership with Brent Nunes. We have run the Hawaii to Spain routing more times than any other Pacific-region travel pattern, and the operational details (LAX layover handling, Day 1 rest protocol, Pacific time zone reset) are dialled in.",
      },
      {
        q: "What does a Spain tour from Hawaii cost per player?",
        a: "A 10-day Spain soccer tour from Hawaii sits between roughly $3,795 and $4,400 per player for ground services, with the slightly higher range reflecting the longer flight day. International flights are quoted separately because HNL to Madrid airfare varies significantly by season and how far in advance the group books.",
      },
      {
        q: "Who is Brent Nunes?",
        a: "Brent Nunes is our partner in Hawaii and the contact through which Hawaii Elite has travelled with Odisea Tours since 2019. Brent handles the Hawaii-side coordination for the partnership.",
      },
      {
        q: "Is the long flight worth it for younger players?",
        a: "After six years of running Hawaii groups, our honest answer is yes for U14 and above and case by case for U12 to U13. The Day 1 rest day is non-negotiable for Hawaii groups, and we never schedule a training session in the first 24 hours of the tour. Younger Hawaii squads usually travel with a higher parent-to-player ratio than mainland US groups, which we accommodate inside the same itinerary.",
      },
    ],
  },
];

export function usStateBySlug(slug: string): UsState | undefined {
  return US_STATES.find((s) => s.slug === slug);
}
