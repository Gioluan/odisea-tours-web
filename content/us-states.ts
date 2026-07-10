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
  /** Named past clients. Leave empty for states with no in-state client history. The page omits the section rather than claiming work we have not done. */
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
      "California sends more youth soccer players to Europe than any other US state, and Spain is consistently the first international destination clubs from Cal North and Cal South pick. Our team has been hosting California groups since 2005, from competitive youth clubs and ECNL sides to high school programs and college rosters. The state's combination of direct flight access, year-round training calendar, and Spanish-speaking population make Spain an unusually natural fit for California-based soccer programs.",
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
        a: "A Spain soccer tour from California starts from around $1,400 per player for ground services (accommodation in 4-star hotels and the Spanish FA residence, ground transport, training facility access, fixtures, full board on match days, bilingual Odisea guides, group travel insurance), depending on length and group size. International flights are quoted separately because LAX to Madrid airfare moves week to week. The per-player number for college programs and tournament formats varies by group size and itinerary.",
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
        a: "A Spain soccer tour from Texas starts from around $1,400 per player for ground services, depending on length and group size. International flights are quoted separately because DFW to Madrid airfare moves week to week. College pre-season and tournament formats vary by group size and itinerary.",
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
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbreviation: "NJ",
    hero_photo: "/photos/spain-soccer-tour-match-vs-spanish-academy-side.jpg",
    og_summary:
      "Spain soccer tours for New Jersey clubs, high schools and college programs. United nonstop Newark to Barcelona in 8 hours, JFK to Madrid in 7. Red Bulls academy ecosystem, deep ECNL and MLS Next base across the Garden State.",
    intro:
      "New Jersey runs one of the densest youth soccer ecosystems in the country, anchored by the New York Red Bulls academy in Whippany and a deep ECNL and MLS Next base across the northern and central parts of the state. Our team has hosted US soccer programs since 2005, and New Jersey groups travel on the same tour shapes as the rest of the tri-state metro, using the United nonstop from Newark to Barcelona and the short hop to JFK for Madrid services.",
    soccer_landscape:
      "New Jersey Youth Soccer registers one of the largest competitive bases on the East Coast. The New York Red Bulls run their MLS Next academy out of Whippany, which sets the ceiling for the state's pyramid, and ECNL fields a strong New Jersey contingent across both genders. The NJSIAA high school season runs in the fall, which leaves the spring break and summer windows clean for international travel. Bergen, Essex, Morris, Monmouth and Middlesex counties together hold a concentration of competitive clubs that rivals any metro in the country.",
    major_soccer_organisations: [
      "New Jersey Youth Soccer (NJYS)",
      "ECNL Mid-Atlantic and ECNL Northeast",
      "MLS Next (New York Red Bulls academy, Whippany)",
      "NPL Northeast",
      "New Jersey State Interscholastic Athletic Association (NJSIAA)",
    ],
    cities_we_serve: [
      { slug: "northern-new-jersey", name: "Northern New Jersey", note: "Bergen, Essex, Morris and Passaic county clubs, Red Bulls academy ecosystem, Newark Liberty gateway" },
      { slug: "central-new-jersey", name: "Central New Jersey", note: "Middlesex, Monmouth and Somerset county clubs, dense ECNL and NPL presence along the Route 1 corridor" },
    ],
    real_clients: [],
    flight_overview:
      "New Jersey's home gateway is Newark Liberty (EWR), with United operating a year-round nonstop to Barcelona of around 8 hours. For Madrid, New Jersey groups use JFK, a short transfer across the metro, where Iberia, Delta and American all run nonstop services of around 7 hours. The tri-state metro has more transatlantic carrier optionality than any other US market, which keeps group rates competitive across the calendar.",
    gateway_airports: ["EWR (United nonstop to BCN)", "JFK (Iberia, Delta, American nonstop to MAD)", "PHL (American nonstop to MAD, South Jersey)"],
    why_state_picks_spain: [
      "Newark to Barcelona nonstop on United is one of the shortest transatlantic flights from any US city, and JFK to Madrid is shorter still. New Jersey groups never burn a day on layovers.",
      "The state's soccer calendar runs high school in the fall, which leaves spring break and summer wide open for a Spain tour without touching the school season.",
      "South Jersey clubs have the Philadelphia nonstop to Madrid as a second clean gateway, so no part of the state is more than a short drive from a direct flight to Spain.",
    ],
    ideal_audiences: [
      "Red Bulls academy and affiliate sides",
      "ECNL clubs across NJYS",
      "NJSIAA varsity high school programs",
      "Patriot League, Big East and Ivy League college soccer programs",
      "Competitive club and select squads from U13 up",
    ],
    best_seasons:
      "Spring break (late March or early April) and the summer window (June through mid-July) are the two most-booked windows for New Jersey youth clubs and high schools. The state's fall high school calendar means most school programs travel in spring or early summer. College programs typically travel in late September during the Spanish league season.",
    faqs: [
      {
        q: "How long is the flight from New Jersey to Spain?",
        a: "From Newark Liberty (EWR), United runs a nonstop to Barcelona of around 8 hours. For Madrid, groups use JFK, a short transfer across the metro, where Iberia, Delta and American fly nonstop in around 7 hours. South Jersey clubs can also use the Philadelphia nonstop to Madrid.",
      },
      {
        q: "Do you treat New Jersey separately from the New York metro?",
        a: "For tour planning, the NY/NJ/CT tri-state area is a single market, but New Jersey has its own gateway logic. North Jersey clubs fly United nonstop from Newark to Barcelona, while South Jersey clubs often prefer the Philadelphia nonstop to Madrid. We route each group from whichever gateway is closest and cheapest.",
      },
      {
        q: "What does a Spain tour from New Jersey cost per player?",
        a: "A 10-day Spain soccer tour from New Jersey sits between roughly $3,295 and $4,000 per player for ground services. The short transatlantic flight time from the metro keeps the airfare base lower than most US states, and the carrier competition across Newark, JFK and Philadelphia works in the group's favour.",
      },
      {
        q: "Which travel windows work for a New Jersey high school program?",
        a: "NJSIAA soccer runs in the fall, so spring break (late March or early April) and early summer (June and the first half of July) are the cleanest windows for a New Jersey school program. Both leave the competitive season untouched.",
      },
    ],
  },
  {
    slug: "illinois",
    name: "Illinois",
    abbreviation: "IL",
    hero_photo: "/photos/odisea-tours-youth-fcb-training-hero.jpg",
    og_summary:
      "Spain soccer tours for Illinois clubs, high schools and college programs. Iberia and American nonstop Chicago O'Hare to Madrid in around 8.5 hours. Chicago Fire academy ecosystem, deep ECNL and MLS Next base across the Chicago metro.",
    intro:
      "Illinois anchors the Midwest's youth soccer pyramid, with the Chicago Fire FC academy at the top and a deep ECNL and NPL base across the Chicago metro and the collar counties. Our team has hosted US soccer programs since 2005, and Illinois groups build their Spain tour around the year-round Iberia and American nonstop services from Chicago O'Hare to Madrid, one of only a handful of direct US-to-Madrid routes outside the coasts.",
    soccer_landscape:
      "Illinois Youth Soccer registers the largest competitive base in the Midwest. The Chicago Fire FC run their MLS Next academy in the metro, and the ECNL fields a strong Illinois contingent across both genders, with several clubs that consistently produce college and professional players. The IHSA high school season runs in the fall for boys and spring for girls, which gives Illinois programs more nuance than most states when scheduling around the school calendar. The college pipeline runs through the Big Ten and the Missouri Valley Conference.",
    major_soccer_organisations: [
      "Illinois Youth Soccer Association (IYSA)",
      "ECNL Midwest and ECNL Heartland",
      "MLS Next (Chicago Fire FC academy)",
      "NPL Great Lakes",
      "Illinois High School Association (IHSA)",
    ],
    cities_we_serve: [
      { slug: "chicago", name: "Chicago", note: "Chicago Fire academy ecosystem, ECNL and NPL clubs across the metro and collar counties, O'Hare nonstop to Madrid" },
    ],
    real_clients: [],
    flight_overview:
      "Illinois's gateway to Spain is Chicago O'Hare (ORD), with both Iberia and American operating year-round nonstop services to Madrid of around 8.5 hours. O'Hare is one of the few direct US-to-Madrid gateways in the interior of the country, which means Illinois groups avoid the connection that clubs in most Midwest and Plains states have to accept. Downstate groups from Peoria, Champaign and the Quad Cities connect through O'Hare.",
    gateway_airports: ["ORD (Iberia and American nonstop to MAD)", "MDW (Chicago Midway, domestic connections)"],
    why_state_picks_spain: [
      "Chicago O'Hare runs year-round nonstop to Madrid on both Iberia and American, a direct gateway most of the interior of the country does not have. Illinois groups land rested and train the same day.",
      "Two carriers on the same nonstop route keep group airfares competitive across the calendar, including the spring break and summer peak windows.",
      "The IHSA split season (boys in fall, girls in spring) gives Illinois programs unusual flexibility to slot an international tour into a window that does not touch their competitive calendar.",
    ],
    ideal_audiences: [
      "Chicago Fire academy and affiliate sides",
      "ECNL clubs across IYSA",
      "IHSA varsity high school programs (boys and girls)",
      "Big Ten and Missouri Valley college soccer programs",
      "Competitive club and select squads from U13 up",
    ],
    best_seasons:
      "Summer (June through late July) and spring break (late March) are the two most-booked windows for Illinois youth clubs. The IHSA split season means boys programs often travel in spring and girls programs in late summer or the December break. College programs typically travel in late September.",
    faqs: [
      {
        q: "How long is the flight from Illinois to Spain?",
        a: "Chicago O'Hare (ORD) runs year-round nonstop service to Madrid on both Iberia and American, around 8.5 hours. This is one of the few direct US-to-Madrid gateways in the interior of the country, so Illinois groups avoid the connection most Midwest states have to make. Downstate groups connect through O'Hare.",
      },
      {
        q: "Does a tour fit around the IHSA soccer calendar?",
        a: "Yes, and Illinois has more flexibility than most states because the IHSA runs boys soccer in the fall and girls soccer in the spring. We slot each program into the window that does not touch its competitive season, usually summer for boys and the December break or summer for girls.",
      },
      {
        q: "What does a Spain tour from Illinois cost per player?",
        a: "A 10-day Spain soccer tour from Illinois sits between roughly $3,395 and $4,100 per player for ground services. The year-round O'Hare nonstop to Madrid keeps the airfare base lower than most interior states, which usually carry a connection.",
      },
      {
        q: "Which Illinois clubs do you work with?",
        a: "We host competitive clubs, high school programs and college rosters from across the Chicago metro and downstate. We do not represent ourselves as an official partner of the Chicago Fire and our fixtures are against Spanish academy or amateur sides matched to your age and level, not MLS Next reserve sides.",
      },
    ],
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbreviation: "GA",
    hero_photo: "/photos/odisea-tours-girls-fcb-celebration-hero.jpg",
    og_summary:
      "Spain soccer tours for Georgia clubs, high schools and college programs. Delta nonstop Atlanta to Madrid in around 8.5 hours. Atlanta United academy ecosystem, one of the fastest-growing youth soccer markets in the US.",
    intro:
      "Georgia is one of the fastest-growing youth soccer markets in the country, anchored by the Atlanta United FC academy and a youth culture that has accelerated sharply since the club's arrival. Our team has hosted US soccer programs since 2005, and Georgia groups build their Spain tour around the Delta nonstop from Atlanta to Madrid, which makes the Southeast's biggest hub one of the easiest gateways to Spain in the country.",
    soccer_landscape:
      "Georgia Soccer registers a rapidly expanding competitive base, and the arrival of Atlanta United FC reshaped the state's youth pyramid almost overnight. The Atlanta United MLS Next academy now sits at the top, and ECNL fields a growing Georgia contingent across both genders. The GHSA high school season runs in the spring, which puts summer and the December break in clear view for an international tour. The metro Atlanta counties hold the densest concentration of competitive clubs in the Southeast.",
    major_soccer_organisations: [
      "Georgia Soccer",
      "ECNL Southeast",
      "MLS Next (Atlanta United FC academy)",
      "NPL Southeast",
      "Georgia High School Association (GHSA)",
    ],
    cities_we_serve: [
      { slug: "atlanta", name: "Atlanta", note: "Atlanta United academy ecosystem, ECNL and NPL clubs across the metro counties, Hartsfield-Jackson nonstop to Madrid" },
    ],
    real_clients: [],
    flight_overview:
      "Georgia's gateway to Spain is Hartsfield-Jackson Atlanta (ATL), the busiest airport in the world, with Delta operating a year-round nonstop to Madrid of around 8.5 hours. Atlanta's hub status means groups from Savannah, Augusta, Columbus and the rest of the Southeast can reach the ATL gateway on a short domestic connection, then fly straight through to Spain.",
    gateway_airports: ["ATL (Delta nonstop to MAD)"],
    why_state_picks_spain: [
      "Atlanta to Madrid nonstop on Delta turns the world's busiest hub into one of the cleanest US gateways to Spain. Georgia groups land rested and train the same day.",
      "The GHSA spring soccer season leaves summer and the December break wide open for a Spain tour with no conflict with the competitive calendar.",
      "Atlanta United's arrival has made the European-pipeline conversation urgent across the metro, and a Spain tour gives ambitious Georgia clubs the academy-level exposure their players are now chasing.",
    ],
    ideal_audiences: [
      "Atlanta United academy and affiliate sides",
      "ECNL clubs across Georgia Soccer",
      "GHSA varsity high school programs",
      "SEC, ACC and Sun Belt college soccer programs",
      "Competitive club and select squads from U13 up",
    ],
    best_seasons:
      "Summer (June through late July) and the December break are the two most-booked windows for Georgia youth clubs. The GHSA spring high school calendar means most Georgia school programs travel in early summer. College programs typically travel in late September during the Spanish league season.",
    faqs: [
      {
        q: "How long is the flight from Georgia to Spain?",
        a: "Hartsfield-Jackson Atlanta (ATL) runs year-round nonstop service to Madrid on Delta, around 8.5 hours. Because Atlanta is the busiest hub in the world, groups from Savannah, Augusta, Columbus and across the Southeast reach the ATL gateway on a short domestic connection and fly straight through.",
      },
      {
        q: "Does a tour fit around the GHSA soccer calendar?",
        a: "Yes. GHSA high school soccer runs in the spring, so summer (June and July) and the December break are the cleanest windows for a Georgia school program. Both leave the competitive season untouched.",
      },
      {
        q: "What does a Spain tour from Georgia cost per player?",
        a: "A 10-day Spain soccer tour from Georgia sits between roughly $3,395 and $4,100 per player for ground services. The year-round Atlanta nonstop to Madrid on Delta keeps the airfare base competitive, and the hub means feeder flights from across the Southeast are cheap.",
      },
      {
        q: "Do you work with the Atlanta United academy?",
        a: "We host competitive clubs, high school programs and college rosters from across Georgia. We do not represent ourselves as an official partner of Atlanta United and our fixtures are against Spanish academy or amateur sides matched to your age and level, not MLS Next reserve sides.",
      },
    ],
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbreviation: "PA",
    hero_photo: "/photos/veterans-soccer-tour-fc-barcelona-visit.jpg",
    og_summary:
      "Spain soccer tours for Pennsylvania clubs, high schools and college programs. American nonstop Philadelphia to Madrid in around 8 hours. Philadelphia Union academy and YSC ecosystem, deep ECNL base across the state.",
    intro:
      "Pennsylvania runs a serious youth soccer pyramid, anchored by the Philadelphia Union academy and the YSC Academy model that has produced a steady stream of professional and college players. Our team has hosted US soccer programs since 2005, and Pennsylvania groups build their Spain tour around the American nonstop from Philadelphia to Madrid, one of the East Coast's cleanest direct gateways to Spain.",
    soccer_landscape:
      "Eastern Pennsylvania Youth Soccer and PA West together register a large competitive base spread across the Philadelphia and Pittsburgh metros. The Philadelphia Union's MLS Next academy, paired with the YSC Academy school model, sits at the top of the state's pyramid and is one of the most productive development environments in the country. ECNL fields a strong Pennsylvania contingent across both genders. The PIAA high school season runs in the fall, which leaves spring break and summer clear for international travel.",
    major_soccer_organisations: [
      "Eastern Pennsylvania Youth Soccer (EPYSA)",
      "Pennsylvania West Youth Soccer (PA West)",
      "ECNL Mid-Atlantic",
      "MLS Next (Philadelphia Union academy, YSC Academy)",
      "Pennsylvania Interscholastic Athletic Association (PIAA)",
    ],
    cities_we_serve: [
      { slug: "philadelphia", name: "Philadelphia", note: "Philadelphia Union and YSC academy ecosystem, ECNL clubs across the metro and the Main Line, nonstop to Madrid" },
      { slug: "pittsburgh", name: "Pittsburgh", note: "PA West clubs across Western Pennsylvania, connect through Philadelphia or the New York metro gateways" },
    ],
    real_clients: [],
    flight_overview:
      "Pennsylvania's gateway to Spain is Philadelphia (PHL), with American operating a year-round nonstop to Madrid of around 8 hours. Philadelphia is one of American's transatlantic hubs, which makes it a clean, high-frequency gateway for the whole eastern half of the state. Pittsburgh and Western Pennsylvania groups connect through Philadelphia or use the New York metro gateways.",
    gateway_airports: ["PHL (American nonstop to MAD)", "PIT (Pittsburgh, connect through PHL or the NY metro)"],
    why_state_picks_spain: [
      "Philadelphia to Madrid nonstop on American is one of the East Coast's cleanest direct gateways to Spain, and it is an American hub, so frequency and connections are strong.",
      "The PIAA fall soccer season leaves spring break and summer wide open for a Spain tour with no conflict with the competitive calendar.",
      "The Philadelphia Union and YSC academy model has set a high development bar across the state, and a Spain tour gives ambitious Pennsylvania clubs the academy-level exposure their players are chasing.",
    ],
    ideal_audiences: [
      "Philadelphia Union academy and affiliate sides",
      "ECNL clubs across EPYSA and PA West",
      "PIAA varsity high school programs",
      "Patriot League, Big Ten and Atlantic 10 college soccer programs",
      "Competitive club and select squads from U13 up",
    ],
    best_seasons:
      "Spring break (late March or early April) and summer (June through mid-July) are the two most-booked windows for Pennsylvania youth clubs. The PIAA fall high school season means most Pennsylvania school programs travel in spring or early summer. College programs typically travel in late September.",
    faqs: [
      {
        q: "How long is the flight from Pennsylvania to Spain?",
        a: "Philadelphia (PHL) runs year-round nonstop service to Madrid on American, around 8 hours. Philadelphia is an American transatlantic hub, so frequency is high and connections from across the eastern half of the state are easy. Pittsburgh groups connect through Philadelphia or use the New York metro gateways.",
      },
      {
        q: "Does a tour fit around the PIAA soccer calendar?",
        a: "Yes. PIAA high school soccer runs in the fall, so spring break (late March or early April) and summer (June and the first half of July) are the cleanest windows for a Pennsylvania school program. Both leave the competitive season untouched.",
      },
      {
        q: "What does a Spain tour from Pennsylvania cost per player?",
        a: "A 10-day Spain soccer tour from Pennsylvania sits between roughly $3,295 and $4,000 per player for ground services. The year-round Philadelphia nonstop to Madrid keeps the airfare base competitive for the eastern half of the state.",
      },
      {
        q: "Do you work with the Philadelphia Union or YSC academies?",
        a: "We host competitive clubs, high school programs and college rosters from across Pennsylvania. We do not represent ourselves as an official partner of the Philadelphia Union and our fixtures are against Spanish academy or amateur sides matched to your age and level.",
      },
    ],
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbreviation: "NC",
    hero_photo: "/photos/odisea-tours-both-teams-post-match.jpg",
    og_summary:
      "Spain soccer tours for North Carolina clubs, high schools and college programs. American nonstop Charlotte to Madrid in around 8 hours. NCFC Youth and North Carolina Courage ecosystem, one of the largest youth soccer bases in the Southeast.",
    intro:
      "North Carolina runs one of the largest and best-organised youth soccer bases in the Southeast, anchored by NCFC Youth and the North Carolina FC and Courage professional structure in the Triangle. Our team has hosted US soccer programs since 2005, and North Carolina groups build their Spain tour around the American nonstop from Charlotte to Madrid, which gives the state a direct gateway most of the Southeast does not have.",
    soccer_landscape:
      "The North Carolina Youth Soccer Association registers one of the largest competitive bases in the Southeast, and NCFC Youth in the Triangle is among the biggest youth clubs in the country by registration. North Carolina FC and the NWSL's North Carolina Courage anchor the professional structure, and ECNL fields a strong North Carolina contingent across both genders. The NCHSAA high school season runs in the fall for boys and spring for girls, which gives programs flexibility. The college pipeline runs through the ACC, home to North Carolina, Duke, NC State and Wake Forest.",
    major_soccer_organisations: [
      "North Carolina Youth Soccer Association (NCYSA)",
      "NCFC Youth",
      "ECNL Southeast",
      "North Carolina FC and North Carolina Courage",
      "North Carolina High School Athletic Association (NCHSAA)",
    ],
    cities_we_serve: [
      { slug: "charlotte", name: "Charlotte", note: "American hub with nonstop service to Madrid, dense club base across Mecklenburg and the surrounding counties" },
      { slug: "raleigh", name: "Raleigh and the Triangle", note: "NCFC Youth and the North Carolina FC and Courage structure, one of the largest youth bases in the country" },
    ],
    real_clients: [],
    flight_overview:
      "North Carolina's gateway to Spain is Charlotte (CLT), an American hub, with a year-round nonstop to Madrid of around 8 hours. Charlotte's hub status means Triangle groups from Raleigh-Durham (RDU) and groups from Greensboro and Asheville reach the CLT gateway on a short domestic connection, then fly straight through to Spain.",
    gateway_airports: ["CLT (American hub, nonstop to MAD)", "RDU (Raleigh-Durham, connect through CLT)"],
    why_state_picks_spain: [
      "Charlotte to Madrid nonstop on American gives North Carolina a direct gateway most of the Southeast does not have, with hub frequency and easy feeder connections from Raleigh, Greensboro and Asheville.",
      "The NCHSAA split season (boys in fall, girls in spring) gives North Carolina programs flexibility to slot a Spain tour into a window that does not touch the competitive calendar.",
      "NCFC Youth and the Triangle's professional structure have set a high development bar, and a Spain tour gives ambitious North Carolina clubs the academy-level exposure their players are chasing.",
    ],
    ideal_audiences: [
      "NCFC Youth and other large competitive clubs",
      "ECNL clubs across NCYSA",
      "NCHSAA varsity high school programs (boys and girls)",
      "ACC and Big South college soccer programs",
      "Competitive club and select squads from U13 up",
    ],
    best_seasons:
      "Summer (June through late July) and spring break (late March) are the two most-booked windows for North Carolina youth clubs. The NCHSAA split season means boys programs often travel in spring and girls programs in summer or the December break. College programs typically travel in late September.",
    faqs: [
      {
        q: "How long is the flight from North Carolina to Spain?",
        a: "Charlotte (CLT) runs year-round nonstop service to Madrid on American, around 8 hours. Charlotte is an American hub, so Triangle groups from Raleigh-Durham and groups from Greensboro and Asheville reach the gateway on a short domestic connection and fly straight through.",
      },
      {
        q: "Does a tour fit around the NCHSAA soccer calendar?",
        a: "Yes, and North Carolina has flexibility because the NCHSAA runs boys soccer in the fall and girls soccer in the spring. We slot each program into the window that does not touch its competitive season, usually summer or the December break.",
      },
      {
        q: "What does a Spain tour from North Carolina cost per player?",
        a: "A 10-day Spain soccer tour from North Carolina sits between roughly $3,395 and $4,100 per player for ground services. The year-round Charlotte nonstop to Madrid keeps the airfare base competitive, and the hub means feeder flights from across the state are cheap.",
      },
      {
        q: "Which North Carolina cities have planning context?",
        a: "Charlotte and the Raleigh-Triangle area are the two anchors. Charlotte is the nonstop gateway to Madrid, and the Triangle holds NCFC Youth and the North Carolina FC and Courage structure, one of the largest youth bases in the country. Clubs from Greensboro, Winston-Salem and Asheville route through Charlotte.",
      },
    ],
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbreviation: "MA",
    hero_photo: "/photos/veterans-soccer-tour-bernabeu-stadium.jpg",
    og_summary:
      "Spain soccer tours for Massachusetts clubs, high schools and college programs. Iberia nonstop Boston to Madrid in around 7 hours. New England Revolution academy ecosystem, deep ECNL base across the New England metro.",
    intro:
      "Massachusetts anchors New England's youth soccer pyramid, with the New England Revolution academy at the top and a deep ECNL and club base across Greater Boston and the surrounding states. Our team has hosted US soccer programs since 2005, and Massachusetts groups build their Spain tour around the Iberia nonstop from Boston to Madrid, one of the shortest transatlantic flights from any US gateway.",
    soccer_landscape:
      "Mass Youth Soccer registers the largest competitive base in New England, and the New England Revolution run their MLS Next academy out of the Boston metro. ECNL fields a strong Massachusetts contingent across both genders, and the region's club soccer feeds one of the densest college pipelines in the country, anchored by the deep Division I, II and III presence across New England. The MIAA high school season runs in the fall, which leaves spring break and summer clear for international travel.",
    major_soccer_organisations: [
      "Massachusetts Youth Soccer Association (Mass Youth Soccer)",
      "ECNL New England and ECNL Northeast",
      "MLS Next (New England Revolution academy)",
      "NPL Northeast",
      "Massachusetts Interscholastic Athletic Association (MIAA)",
    ],
    cities_we_serve: [
      { slug: "boston", name: "Boston", note: "New England Revolution academy ecosystem, ECNL clubs across Greater Boston and the surrounding metro, Logan nonstop to Madrid" },
    ],
    real_clients: [],
    flight_overview:
      "Massachusetts's gateway to Spain is Boston Logan (BOS), with Iberia operating a year-round nonstop to Madrid of around 7 hours, one of the shortest transatlantic flights from any US gateway. Boston also carries seasonal nonstop service to Madrid and Barcelona on Delta and Aer Lingus partners, which adds optionality in the spring and summer peak windows. Groups from Worcester, Providence and southern New Hampshire all use the Logan gateway.",
    gateway_airports: ["BOS (Iberia nonstop to MAD, around 7 hours)", "seasonal additional carriers in spring and summer"],
    why_state_picks_spain: [
      "Boston to Madrid nonstop on Iberia is around 7 hours, one of the shortest transatlantic flights from any US gateway. Massachusetts groups land rested and train the same day.",
      "Boston picks up seasonal additional carriers to Spain in the spring and summer, exactly the peak tour windows, which keeps group rates competitive.",
      "The MIAA fall soccer season leaves spring break and summer wide open for a Spain tour with no conflict with the competitive calendar.",
    ],
    ideal_audiences: [
      "New England Revolution academy and affiliate sides",
      "ECNL clubs across Mass Youth Soccer",
      "MIAA varsity high school programs",
      "Ivy League, Patriot League, Hockey East and NESCAC college soccer programs",
      "Competitive club and select squads from U13 up",
    ],
    best_seasons:
      "Spring break (April) and summer (June through mid-July) are the two most-booked windows for Massachusetts youth clubs. The MIAA fall high school season means most Massachusetts school programs travel in spring or early summer. College programs typically travel in late September.",
    faqs: [
      {
        q: "How long is the flight from Massachusetts to Spain?",
        a: "Boston Logan (BOS) runs year-round nonstop service to Madrid on Iberia, around 7 hours, one of the shortest transatlantic flights from any US gateway. Boston also picks up seasonal nonstop service to Madrid and Barcelona in the spring and summer. Groups from Worcester, Providence and southern New Hampshire all use Logan.",
      },
      {
        q: "Does a tour fit around the MIAA soccer calendar?",
        a: "Yes. MIAA high school soccer runs in the fall, so spring break (April) and summer (June and the first half of July) are the cleanest windows for a Massachusetts school program. Both leave the competitive season untouched.",
      },
      {
        q: "What does a Spain tour from Massachusetts cost per player?",
        a: "A 10-day Spain soccer tour from Massachusetts sits between roughly $3,295 and $4,000 per player for ground services. The 7-hour Boston nonstop to Madrid keeps the airfare base among the lowest of any US state, and the seasonal carrier additions in spring and summer help.",
      },
      {
        q: "Do you also serve clubs from Rhode Island and New Hampshire?",
        a: "Yes. New England is treated as a single market for tour planning, with Boston Logan as the shared gateway. Clubs from Providence, Worcester, southern New Hampshire and the rest of the region use the same Logan nonstop and the same tour formats apply.",
      },
    ],
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbreviation: "VA",
    hero_photo: "/photos/odisea-tours-spanish-fa-training.jpg",
    og_summary:
      "Spain soccer tours for Virginia and DC-area clubs, high schools and college programs. Iberia nonstop Washington Dulles to Madrid in around 7.5 hours. One of the deepest competitive youth soccer markets on the East Coast.",
    intro:
      "Northern Virginia and the wider DC metro hold one of the deepest competitive youth soccer markets on the East Coast, with a concentration of nationally ranked ECNL clubs and a development culture as serious as any in the country. Our team has hosted US soccer programs since 2005, and Virginia groups build their Spain tour around the Iberia nonstop from Washington Dulles to Madrid, a clean direct gateway for the whole DC metro.",
    soccer_landscape:
      "The Virginia Youth Soccer Association registers a large and competitive base, with Northern Virginia in particular fielding some of the most successful ECNL clubs in the country across both genders. The DC United MLS Next academy draws from the Virginia, Maryland and DC region. The VHSL high school season runs in the spring, which leaves summer and the December break clear for international travel. The college pipeline runs through the ACC, the Patriot League and the Colonial Athletic Association.",
    major_soccer_organisations: [
      "Virginia Youth Soccer Association (VYSA)",
      "ECNL Mid-Atlantic",
      "MLS Next (DC United academy, regional)",
      "NPL Mid-Atlantic",
      "Virginia High School League (VHSL)",
    ],
    cities_we_serve: [
      { slug: "northern-virginia", name: "Northern Virginia and DC metro", note: "Fairfax, Loudoun, Arlington and Prince William county clubs, some of the most competitive ECNL sides in the country, Dulles nonstop to Madrid" },
      { slug: "richmond", name: "Richmond and Hampton Roads", note: "VYSA clubs across central and coastal Virginia, connect through Washington Dulles" },
    ],
    real_clients: [],
    flight_overview:
      "Virginia's gateway to Spain is Washington Dulles (IAD), with Iberia operating a year-round nonstop to Madrid of around 7.5 hours, and United adding seasonal nonstop service in the spring and summer peak windows. Dulles serves the entire Northern Virginia and DC metro directly. Richmond (RIC) and Hampton Roads (ORF) groups connect through Dulles or the wider DC airports.",
    gateway_airports: ["IAD (Iberia nonstop to MAD, United seasonal)", "DCA and BWI (DC metro alternatives)", "RIC and ORF (connect through IAD)"],
    why_state_picks_spain: [
      "Washington Dulles to Madrid nonstop on Iberia is around 7.5 hours and serves the entire Northern Virginia and DC metro directly. Virginia groups land rested and train the same day.",
      "Dulles picks up United seasonal nonstop service to Madrid in spring and summer, the peak tour windows, which adds capacity and keeps group rates competitive.",
      "The VHSL spring soccer season leaves summer and the December break wide open for a Spain tour with no conflict with the competitive calendar.",
    ],
    ideal_audiences: [
      "Nationally ranked Northern Virginia ECNL clubs",
      "DC United academy and affiliate sides",
      "VHSL varsity high school programs",
      "ACC, Patriot League and CAA college soccer programs",
      "Competitive club and select squads from U13 up",
    ],
    best_seasons:
      "Summer (June through late July) and the December break are the two most-booked windows for Virginia youth clubs. The VHSL spring high school season means most Virginia school programs travel in early summer. College programs typically travel in late September.",
    faqs: [
      {
        q: "How long is the flight from Virginia to Spain?",
        a: "Washington Dulles (IAD) runs year-round nonstop service to Madrid on Iberia, around 7.5 hours, with United adding seasonal nonstop service in spring and summer. Dulles serves the whole Northern Virginia and DC metro directly. Richmond and Hampton Roads groups connect through Dulles.",
      },
      {
        q: "Does a tour fit around the VHSL soccer calendar?",
        a: "Yes. VHSL high school soccer runs in the spring, so summer (June and July) and the December break are the cleanest windows for a Virginia school program. Both leave the competitive season untouched.",
      },
      {
        q: "What does a Spain tour from Virginia cost per player?",
        a: "A 10-day Spain soccer tour from Virginia sits between roughly $3,295 and $4,000 per player for ground services. The 7.5-hour Dulles nonstop to Madrid keeps the airfare base low, and the United seasonal additions in spring and summer help capacity.",
      },
      {
        q: "Do you serve clubs from Maryland and DC as well?",
        a: "Yes. The DC metro is treated as a single market for tour planning, with Washington Dulles as the primary gateway. Clubs from Maryland, the District and Northern Virginia use the same Dulles nonstop and the same tour formats apply.",
      },
    ],
  },
  {
    slug: "washington",
    name: "Washington",
    abbreviation: "WA",
    hero_photo: "/photos/veterans-soccer-tour-camp-nou-stadium.jpg",
    og_summary:
      "Spain soccer tours for Washington State clubs, high schools and college programs. One-stop routing from Seattle to Madrid via the East Coast or a European hub. Sounders academy ecosystem and one of the strongest youth development cultures in the country.",
    intro:
      "Washington State punches far above its size in youth soccer, with the Seattle Sounders academy and a development culture, led by clubs like Crossfire Premier, that has produced a remarkable number of professional and national-team players. Our team has hosted US soccer programs since 2005, and Washington groups travel on a one-stop routing from Seattle to Madrid, planned around the long flight day with a protected rest day on arrival.",
    soccer_landscape:
      "Washington Youth Soccer registers a deep competitive base for a state its size, and the Seattle Sounders FC run one of the most respected MLS Next academies in the country. Crossfire Premier and a handful of other Puget Sound clubs have a national reputation for development that outstrips the state's population. ECNL fields a strong Washington contingent across both genders. The WIAA high school season runs in the fall, which leaves spring break and summer clear for international travel.",
    major_soccer_organisations: [
      "Washington Youth Soccer",
      "ECNL Northwest",
      "MLS Next (Seattle Sounders FC academy)",
      "NPL Northwest",
      "Washington Interscholastic Activities Association (WIAA)",
    ],
    cities_we_serve: [
      { slug: "seattle", name: "Seattle and Puget Sound", note: "Sounders academy ecosystem, Crossfire Premier and other nationally respected clubs, Sea-Tac gateway with one-stop routing to Spain" },
    ],
    real_clients: [],
    flight_overview:
      "Washington has no nonstop service to Spain, so Seattle (SEA) groups route one-stop, either eastbound through a US gateway like New York or Chicago onto an Iberia or American nonstop to Madrid, or through a European hub such as London, Amsterdam or Paris. Total elapsed time is around 14 to 16 hours. We schedule departures so the arrival in Madrid lands in the morning and protect Day 1 as a rest day before training begins.",
    gateway_airports: ["SEA (one-stop via JFK, ORD or a European hub)", "feeder connections from Spokane (GEG) and Portland (PDX)"],
    why_state_picks_spain: [
      "Washington's development culture, led by the Sounders academy and clubs like Crossfire Premier, is among the strongest in the country, and a Spain tour gives those players academy-level European opposition matched to their level.",
      "The WIAA fall soccer season leaves spring break and summer wide open for a Spain tour with no conflict with the competitive calendar.",
      "After two decades of running long-haul US groups, including annual Hawaii tours since 2019, our Day 1 rest protocol and long-flight logistics are built for exactly the routing Washington groups face.",
    ],
    ideal_audiences: [
      "Seattle Sounders academy and affiliate sides",
      "Nationally respected Puget Sound clubs",
      "ECNL clubs across Washington Youth Soccer",
      "WIAA varsity high school programs",
      "Pac-12 and West Coast Conference college soccer programs",
    ],
    best_seasons:
      "Summer (mid-June through late July) and spring break (late March or early April) are the two most-booked windows for Washington youth clubs. The WIAA fall high school season means most Washington school programs travel in spring or early summer. The one-stop routing is smoothest outside the December holiday peak.",
    faqs: [
      {
        q: "How long is the journey from Washington to Spain?",
        a: "Washington has no nonstop service to Spain, so Seattle (SEA) groups route one-stop, either eastbound through New York or Chicago onto an Iberia or American nonstop to Madrid, or through a European hub. Total elapsed time is around 14 to 16 hours. We schedule the routing so the arrival in Madrid lands in the morning and we protect Day 1 as a rest day.",
      },
      {
        q: "Is the long flight worth it from the West Coast?",
        a: "Yes. We have run long-haul US groups for two decades, including annual Hawaii tours since 2019 on a journey longer than Seattle's. The Day 1 rest protocol means no training session in the first 24 hours, so players arrive, recover, and train fresh on Day 2.",
      },
      {
        q: "What does a Spain tour from Washington cost per player?",
        a: "A 10-day Spain soccer tour from Washington sits between roughly $3,595 and $4,300 per player for ground services, with the slightly higher range reflecting the one-stop routing. International flights are quoted separately because the Seattle-to-Madrid connection varies by season and how far ahead the group books.",
      },
      {
        q: "Which Washington clubs do you work with?",
        a: "We host competitive clubs, high school programs and college rosters from across Washington State. We do not represent ourselves as an official partner of the Seattle Sounders and our fixtures are against Spanish academy or amateur sides matched to your age and level.",
      },
    ],
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbreviation: "CO",
    hero_photo: "/photos/odisea-tours-spanish-fa-rfef-training.jpg",
    og_summary:
      "Spain soccer tours for Colorado clubs, high schools and college programs. One-stop routing from Denver to Madrid via the East Coast. Colorado Rapids and Real Colorado ecosystem, one of the strongest development states in the Mountain West.",
    intro:
      "Colorado is one of the strongest youth soccer development states in the Mountain West, anchored by the Colorado Rapids academy and Real Colorado, a club with a national reputation across both the ECNL and the player-development pipeline. Our team has hosted US soccer programs since 2005, and Colorado groups travel on a one-stop routing from Denver to Madrid, planned around the flight day with a protected rest day on arrival.",
    soccer_landscape:
      "The Colorado Soccer Association registers a deep competitive base, and the altitude-trained Colorado player has a long history of overperforming relative to the state's size. The Colorado Rapids run their MLS Next academy in the Denver metro, and Real Colorado is one of the most respected ECNL clubs in the country across both genders. The CHSAA high school season runs in the spring, which leaves summer and the December break clear for international travel.",
    major_soccer_organisations: [
      "Colorado Soccer Association",
      "ECNL Mountain",
      "MLS Next (Colorado Rapids academy)",
      "Real Colorado and other nationally ranked clubs",
      "Colorado High School Activities Association (CHSAA)",
    ],
    cities_we_serve: [
      { slug: "denver", name: "Denver and the Front Range", note: "Colorado Rapids and Real Colorado ecosystem, dense club base from Boulder through Colorado Springs, DEN gateway with one-stop routing to Spain" },
    ],
    real_clients: [],
    flight_overview:
      "Colorado has no nonstop service to Spain, so Denver (DEN) groups route one-stop, typically eastbound through a US gateway like New York, Chicago or Dallas onto an Iberia or American nonstop to Madrid. Total elapsed time is around 13 to 15 hours. We schedule departures so the arrival in Madrid lands in the morning and protect Day 1 as a rest day before training begins.",
    gateway_airports: ["DEN (one-stop via JFK, ORD or DFW)", "feeder connections from Colorado Springs (COS)"],
    why_state_picks_spain: [
      "Colorado's altitude-trained players have a long history of overperforming, and a Spain tour gives clubs like Real Colorado and the Rapids academy the European academy-level opposition that matches their level.",
      "The CHSAA spring soccer season leaves summer and the December break wide open for a Spain tour with no conflict with the competitive calendar.",
      "Denver's central hub position means a clean single connection to an East Coast or Dallas nonstop to Madrid, with no European-hub detour required.",
    ],
    ideal_audiences: [
      "Colorado Rapids academy and affiliate sides",
      "Real Colorado and other nationally ranked clubs",
      "ECNL clubs across the Colorado Soccer Association",
      "CHSAA varsity high school programs",
      "Pac-12, Big 12 and Mountain West college soccer programs",
    ],
    best_seasons:
      "Summer (June through late July) and the December break are the two most-booked windows for Colorado youth clubs. The CHSAA spring high school season means most Colorado school programs travel in early summer. College programs typically travel in late September.",
    faqs: [
      {
        q: "How long is the journey from Colorado to Spain?",
        a: "Colorado has no nonstop service to Spain, so Denver (DEN) groups route one-stop, typically eastbound through New York, Chicago or Dallas onto an Iberia or American nonstop to Madrid. Total elapsed time is around 13 to 15 hours. We schedule the routing so the arrival lands in the morning and we protect Day 1 as a rest day.",
      },
      {
        q: "Does a tour fit around the CHSAA soccer calendar?",
        a: "Yes. CHSAA high school soccer runs in the spring, so summer (June and July) and the December break are the cleanest windows for a Colorado school program. Both leave the competitive season untouched.",
      },
      {
        q: "What does a Spain tour from Colorado cost per player?",
        a: "A Spain soccer tour from Colorado starts from around $1,400 per player for ground services, depending on length and group size. International flights are quoted separately because the Denver-to-Madrid connection varies by season and booking lead time.",
      },
      {
        q: "Do you work with Real Colorado or the Rapids academy?",
        a: "We host competitive clubs, high school programs and college rosters from across Colorado. We do not represent ourselves as an official partner of the Colorado Rapids or Real Colorado, and our fixtures are against Spanish academy or amateur sides matched to your age and level.",
      },
    ],
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbreviation: "AZ",
    hero_photo: "/photos/odisea-tours-valencia-cf-coach-instructing.jpg",
    og_summary:
      "Spain soccer tours for Arizona clubs, high schools and college programs. One-stop routing from Phoenix to Madrid via Dallas or the East Coast. Phoenix Rising academy ecosystem and a fast-growing Southwest youth base.",
    intro:
      "Arizona runs a fast-growing youth soccer base across the Phoenix and Tucson metros, anchored by the Phoenix Rising FC academy and a deep Hispanic soccer culture that makes Spain a natural first international destination. Our team has hosted US soccer programs since 2005, and Arizona groups travel on a clean one-stop routing from Phoenix to Madrid through Dallas, planned around the flight day with a protected rest day on arrival.",
    soccer_landscape:
      "The Arizona Youth Soccer Association registers a fast-growing competitive base, and the Phoenix Rising FC academy anchors the state's MLS Next presence. ECNL fields a growing Arizona contingent across both genders, and the year-round training climate means Arizona players are match-fit at almost any point in the calendar. The AIA high school season runs in the winter, which leaves spring break, summer and the early-fall windows clear for international travel.",
    major_soccer_organisations: [
      "Arizona Youth Soccer Association (AYSA)",
      "ECNL Southwest",
      "MLS Next (Phoenix Rising FC academy)",
      "NPL Desert",
      "Arizona Interscholastic Association (AIA)",
    ],
    cities_we_serve: [
      { slug: "phoenix", name: "Phoenix and the Valley", note: "Phoenix Rising academy ecosystem, ECNL and NPL clubs across the Valley of the Sun, PHX gateway with one-stop routing via Dallas" },
    ],
    real_clients: [],
    flight_overview:
      "Arizona has no nonstop service to Spain, so Phoenix (PHX) groups route one-stop, most cleanly through Dallas (DFW) onto American's 9.5-hour nonstop to Madrid, the shortest direct US-to-Madrid flight west of the Mississippi. Total elapsed time is around 14 hours. Tucson (TUS) groups connect through Phoenix or Dallas. We schedule departures so the arrival lands in the morning and protect Day 1 as a rest day.",
    gateway_airports: ["PHX (one-stop via DFW onto AA nonstop to MAD)", "TUS (Tucson, connect through PHX or DFW)"],
    why_state_picks_spain: [
      "Phoenix routes cleanly through Dallas onto the shortest direct US-to-Madrid nonstop, so Arizona groups face a single connection rather than a European-hub detour.",
      "The AIA winter high school season leaves spring break, summer and early fall all open for a Spain tour with no conflict with the competitive calendar.",
      "Arizona's deep Hispanic soccer culture means most groups have players, coaches or families who handle Spanish, so the trip reads as cultural homecoming rather than foreign expedition.",
    ],
    ideal_audiences: [
      "Phoenix Rising academy and affiliate sides",
      "ECNL clubs across the Arizona Youth Soccer Association",
      "AIA varsity high school programs",
      "Pac-12, Big 12 and WAC college soccer programs",
      "Competitive club and select squads from U13 up",
    ],
    best_seasons:
      "Spring break (March) and summer (June through late July) are the two most-booked windows for Arizona youth clubs. The AIA winter high school season gives Arizona programs unusual flexibility, with the early-fall window also clear. College programs typically travel in late September.",
    faqs: [
      {
        q: "How long is the journey from Arizona to Spain?",
        a: "Arizona has no nonstop service to Spain, so Phoenix (PHX) groups route one-stop, most cleanly through Dallas onto American's 9.5-hour nonstop to Madrid, the shortest direct US-to-Madrid flight west of the Mississippi. Total elapsed time is around 14 hours. Tucson groups connect through Phoenix or Dallas.",
      },
      {
        q: "Does a tour fit around the AIA soccer calendar?",
        a: "Yes, and Arizona has unusual flexibility because the AIA runs high school soccer in the winter. Spring break, summer and early fall are all clean windows for an Arizona school program, none of which touch the competitive season.",
      },
      {
        q: "What does a Spain tour from Arizona cost per player?",
        a: "A Spain soccer tour from Arizona starts from around $1,400 per player for ground services, depending on length and group size. International flights are quoted separately because the Phoenix-to-Madrid connection varies by season and booking lead time.",
      },
      {
        q: "Can the tour include Spanish-language immersion?",
        a: "Yes. For high school programs we run a Spanish-immersion variant where a Spanish-only guide leads the group and players are pushed into the language from arrival. Given Arizona's deep Hispanic soccer culture, this works particularly well for school programs with established Spanish departments.",
      },
    ],
  },
];

export function usStateBySlug(slug: string): UsState | undefined {
  return US_STATES.find((s) => s.slug === slug);
}
