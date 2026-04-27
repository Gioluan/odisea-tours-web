export type UsCity = {
  slug: string;
  name: string;
  state: string;
  state_abbr: string;
  metro: string;
  airport_codes: string[];
  flight_hours_to_madrid: string;
  flight_hours_to_barcelona: string;
  nonstop_carriers: string[];
  intro: string;
  local_soccer_context: string;
  time_zone_note: string;
  why_spain: string[];
  sample_clubs_phrase: string;
  ideal_audiences: string[];
  hero_photo: string;
  og_summary: string;
};

export const US_CITIES: UsCity[] = [
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    state_abbr: "CA",
    metro: "Greater Los Angeles",
    airport_codes: ["LAX", "BUR", "LGB", "SNA"],
    flight_hours_to_madrid: "11 hours nonstop",
    flight_hours_to_barcelona: "12 hours (one stop)",
    nonstop_carriers: ["Iberia (LAX to Madrid)", "American (seasonal)"],
    intro:
      "Los Angeles runs one of the deepest youth soccer pipelines in the United States. Odisea Tours has been bringing Southern California clubs, high school teams and college rosters to Spain for two decades, training inside FC Barcelona, Valencia CF and the Spanish Football Federation's Las Rozas headquarters.",
    local_soccer_context:
      "From the ECNL pathways in the San Fernando Valley to the MLS Next academies in Long Beach, Carson and the South Bay, LA teams are used to a high competitive standard and long seasons. A Spain tour slots naturally into the pre-season and the winter break windows most SoCal clubs already plan around, and it gives families something the domestic showcase circuit cannot: Camp Nou's training ground, Mestalla, and a night sleeping at the Spanish national team's headquarters.",
    time_zone_note:
      "Spain sits 9 hours ahead of Los Angeles. Most LA groups land in Madrid mid-morning local time and are training inside 24 hours.",
    why_spain: [
      "Direct flights. Iberia flies LAX to Madrid nonstop year-round (about 11 hours), so teams land rested and train the same day.",
      "Families travel on the same itinerary. Parents visit Gaudí's Barcelona or Valencia's old town while players train with FC Barcelona and Valencia CF staff.",
      "The cost equation. A 10-day Spain tour with included facilities, coaching, games and meals sits below what Southern California families typically spend on a Hawaii or Europe ECNL showcase.",
    ],
    sample_clubs_phrase:
      "Soccer clubs across Long Beach, Carson, Torrance, Manhattan Beach, Santa Monica, the San Fernando Valley and the Inland Empire",
    ideal_audiences: [
      "MLS Next and ECNL clubs",
      "High school varsity and college rosters",
      "AYSO all-star teams and regional select squads",
    ],
    hero_photo: "/photos/odisea-tours-fcb-celebration-night.jpg",
    og_summary:
      "Spain soccer tours for Los Angeles and Southern California clubs. FC Barcelona, Valencia CF and Spanish FA training. Run by Odisea Tours since 2005.",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    state: "California",
    state_abbr: "CA",
    metro: "San Diego County",
    airport_codes: ["SAN"],
    flight_hours_to_madrid: "12–14 hours (one stop)",
    flight_hours_to_barcelona: "13–15 hours (one stop)",
    nonstop_carriers: ["Iberia via LAX", "British Airways via LHR"],
    intro:
      "San Diego hosts one of the densest youth soccer calendars in the country, from the Surf Cup and Presidio to the college pipeline at SDSU and USD. Odisea Tours builds Spain tours for San Diego clubs that fit around the winter break, the summer showcase gap and the spring college recruiting window.",
    local_soccer_context:
      "San Diego clubs already travel heavily for showcases. A Spain tour redirects that travel budget into something the Surf Cup cannot replicate: training sessions at Valencia CF, fixtures against Spanish academy sides, and a night at the Spanish FA. For families, San Diego's temperate climate year-round means groups can travel in any season without the team falling out of rhythm on return.",
    time_zone_note:
      "Spain is 9 hours ahead of San Diego. Most groups route through LAX or Dallas on the outbound leg and fly direct to Madrid from there.",
    why_spain: [
      "Every big San Diego club has done Surf Cup. A Spain tour is what comes after.",
      "Two-week format fits high school summer and winter break windows without disrupting the club season.",
      "Families travel on the same itinerary, with a cultural programme running parallel to training so parents are not sitting in hotel lobbies.",
    ],
    sample_clubs_phrase:
      "Clubs across North County, Chula Vista, La Jolla, Carlsbad and the East County",
    ideal_audiences: [
      "Presidio and CSL clubs",
      "High school varsity and JV programmes",
      "College ID camp graduates and academy sides",
    ],
    hero_photo: "/photos/veterans-soccer-tour-valencia-cf-match.jpg",
    og_summary:
      "Spain soccer tours for San Diego youth clubs and high school teams. Surf Cup alternative with FC Barcelona, Valencia CF and Spanish FA training.",
  },
  {
    slug: "dallas",
    name: "Dallas",
    state: "Texas",
    state_abbr: "TX",
    metro: "Dallas–Fort Worth",
    airport_codes: ["DFW", "DAL"],
    flight_hours_to_madrid: "9.5 hours nonstop",
    flight_hours_to_barcelona: "10 hours (one stop)",
    nonstop_carriers: ["American Airlines (DFW to Madrid)", "Iberia codeshare"],
    intro:
      "Dallas–Fort Worth has the shortest nonstop flight to Madrid of any major US metro west of the Mississippi. Odisea Tours builds Spain tours for DFW clubs that use the direct American Airlines service to arrive rested, train the same day, and keep the full calendar productive.",
    local_soccer_context:
      "North Texas runs one of the most organised youth soccer ecosystems in the country, from FC Dallas's academy down through the ECNL clubs in Plano, Frisco, Southlake and the mid-cities. A Spain tour slots cleanly into the Texas school calendar's summer window and the winter break, and the cultural side of the trip (Madrid, Valencia, Barcelona in 10–12 days) matches how DFW families already think about group travel.",
    time_zone_note:
      "Spain is 7 hours ahead of Dallas. Groups leaving DFW in the evening arrive Madrid mid-morning ready to train.",
    why_spain: [
      "Nonstop American Airlines service DFW to Madrid means 9.5 hours door-to-door and no layover delays.",
      "Tour windows align with UIL summer and winter breaks, so player-development time is protected.",
      "Group pricing from Texas families sits at the same level as a Disney trip, but players come home having trained at Camp Nou.",
    ],
    sample_clubs_phrase:
      "Clubs across Plano, Frisco, Southlake, Flower Mound, McKinney, Arlington and the mid-cities",
    ideal_audiences: [
      "ECNL and MLS Next clubs",
      "UIL high school varsity programmes",
      "Select and academy teams from U13 up",
    ],
    hero_photo: "/photos/veterans-soccer-tour-spain-match-action.jpg",
    og_summary:
      "Spain soccer tours for Dallas-Fort Worth youth clubs. Direct flights DFW to Madrid, FC Barcelona and Valencia CF training, run by Odisea Tours since 2005.",
  },
  {
    slug: "houston",
    name: "Houston",
    state: "Texas",
    state_abbr: "TX",
    metro: "Greater Houston",
    airport_codes: ["IAH", "HOU"],
    flight_hours_to_madrid: "10 hours (one stop)",
    flight_hours_to_barcelona: "11 hours (one stop)",
    nonstop_carriers: ["United and Iberia via IAD/JFK", "Direct service seasonal"],
    intro:
      "Houston has one of the largest and fastest-growing youth soccer markets in the United States, driven by the Dynamo FC academy, a dense ECNL base and a deep Hispanic soccer culture. Odisea Tours runs Spain tours for Houston clubs that fit the Texas summer and winter break windows without pulling players out of the season.",
    local_soccer_context:
      "Houston clubs already send players to Europe through Dynamo, FC Dallas academy loans and the occasional international showcase. What Odisea adds is the structure a club tour needs: FC Barcelona training at Joan Gamper, fixtures against Spanish academy sides, and a full cultural programme for families so the trip reads as a family investment, not a soccer-only ask.",
    time_zone_note:
      "Spain is 7 hours ahead of Houston. Most groups connect through Washington Dulles or Newark for the nonstop leg to Madrid.",
    why_spain: [
      "Strong Spanish-language connection in Houston homes. Families land and feel half the cultural work is already done.",
      "Summer break windows are longer in Texas than most states; a 12-day Spain tour fits without touching the club season.",
      "Houston's existing sport-tourism travel patterns (Orlando, Europe, Mexico) make a Spain tour a recognisable, trusted next step.",
    ],
    sample_clubs_phrase:
      "Clubs across The Woodlands, Katy, Sugar Land, Pearland, Cypress, and inside the Loop",
    ideal_audiences: [
      "ECNL and MLS Next clubs",
      "UIL varsity programmes",
      "Hispanic soccer academies and Sunday leagues",
    ],
    hero_photo: "/photos/veterans-soccer-tour-fc-barcelona-visit.jpg",
    og_summary:
      "Spain soccer tours for Houston youth clubs and high schools. FC Barcelona, Valencia CF and Spanish FA training. Built around the Texas school calendar.",
  },
  {
    slug: "new-york",
    name: "New York",
    state: "New York",
    state_abbr: "NY",
    metro: "New York Metro (NY / NJ / CT)",
    airport_codes: ["JFK", "EWR", "LGA"],
    flight_hours_to_madrid: "7 hours nonstop",
    flight_hours_to_barcelona: "8 hours nonstop",
    nonstop_carriers: ["Iberia, Delta, American (JFK to Madrid)", "United (EWR to Barcelona)"],
    intro:
      "New York is the closest major US metro to Spain by flight time and the easiest to build a Spain tour around. Odisea Tours runs youth soccer tours for clubs across the NY/NJ/CT metro, using the nonstop JFK-to-Madrid and Newark-to-Barcelona services to fit the school calendar tightly.",
    local_soccer_context:
      "The NY metro runs ECNL, NPL and MLS Next alongside a deep high school soccer tradition and some of the most competitive academy sides on the East Coast. A Spain tour gives a NY club something the domestic showcase circuit cannot: official training inside FC Barcelona and Valencia CF, games against Spanish academy opposition, and a cultural programme in Barcelona, Madrid and Valencia that parents value as much as the soccer.",
    time_zone_note:
      "Spain is 6 hours ahead of New York. Groups leaving JFK in the evening arrive Madrid first thing in the morning and train the same day.",
    why_spain: [
      "7-hour nonstop to Madrid is the shortest transatlantic option for any US city. Zero connection risk.",
      "Every major carrier flies JFK to Madrid or Newark to Barcelona, so group rates are competitive year-round.",
      "Academic calendar alignment. NY private schools and public districts both break in the same windows that work for training in Spain.",
    ],
    sample_clubs_phrase:
      "Clubs across Westchester, Long Island, Rockland, Bergen County, Fairfield County, and the five boroughs",
    ideal_audiences: [
      "ECNL, NPL and MLS Next clubs",
      "Private school varsity teams",
      "NYCFC and Red Bulls academy affiliates",
    ],
    hero_photo: "/photos/veterans-soccer-tour-barcelona-la-rambla.jpg",
    og_summary:
      "Spain soccer tours for New York, New Jersey and Connecticut clubs. 7-hour nonstop to Madrid. FC Barcelona, Valencia CF and Spanish FA training.",
  },
  {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    state_abbr: "FL",
    metro: "South Florida",
    airport_codes: ["MIA", "FLL"],
    flight_hours_to_madrid: "9 hours nonstop",
    flight_hours_to_barcelona: "10 hours nonstop",
    nonstop_carriers: ["Iberia, American (MIA to Madrid)", "Level, American (MIA to Barcelona)"],
    intro:
      "Miami has nonstop service to both Madrid and Barcelona, a deep Hispanic soccer culture, and a youth pipeline anchored by Inter Miami CF's academy. Odisea Tours runs Spain tours for South Florida clubs that take full advantage of the short flight and the shared-language edge most Miami families have on landing.",
    local_soccer_context:
      "South Florida kids grow up watching La Liga in their own homes. A Spain tour turns that into training at Valencia CF, fixtures in Benicassim and Barcelona, and a night at the Spanish FA headquarters. Inter Miami's rise has made the European-pipeline question the obvious next conversation for any club director in the region, and Spain is where that conversation starts.",
    time_zone_note:
      "Spain is 6 hours ahead of Miami. Evening departures land Madrid mid-morning local time, ready to train the same day.",
    why_spain: [
      "Nonstop service to both Madrid and Barcelona from MIA. No transfers, no missed-connection risk.",
      "Shared-language edge. Miami families read Spanish signage, order meals, navigate hotels without friction.",
      "The La Liga culture in South Florida homes makes Spain the most natural first international tour for any ambitious club.",
    ],
    sample_clubs_phrase:
      "Clubs across Miami-Dade, Broward, Palm Beach and the Treasure Coast",
    ideal_audiences: [
      "MLS Next clubs and Inter Miami affiliates",
      "FHSAA varsity programmes",
      "Hispanic soccer academies and church leagues",
    ],
    hero_photo: "/photos/odisea-tours-girls-fcb-celebration-hero.jpg",
    og_summary:
      "Spain soccer tours for Miami and South Florida clubs. Direct MIA-Madrid and MIA-Barcelona flights. FC Barcelona, Valencia CF, Spanish FA training.",
  },
];

export function usCityBySlug(slug: string): UsCity | undefined {
  return US_CITIES.find((c) => c.slug === slug);
}
