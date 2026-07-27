export type AuCity = {
  slug: string;
  name: string;
  state: string;
  state_abbr: string;
  metro: string;
  airport_codes: string[];
  flight_hours_to_madrid: string;
  flight_hours_to_barcelona: string;
  carriers: string[];
  intro: string;
  local_soccer_context: string;
  time_zone_note: string;
  why_spain: string[];
  sample_clubs_phrase: string;
  ideal_audiences: string[];
  hero_photo: string;
  og_summary: string;
};

export const AU_CITIES: AuCity[] = [
  {
    slug: "sydney",
    name: "Sydney",
    state: "New South Wales",
    state_abbr: "NSW",
    metro: "Greater Sydney",
    airport_codes: ["SYD"],
    flight_hours_to_madrid: "23 to 25 hours, one stop via Dubai, Doha or Singapore",
    flight_hours_to_barcelona: "23 to 24 hours, one stop via Dubai, Doha or Singapore",
    carriers: [
      "Qatar Airways (SYD to Madrid and Barcelona via Doha)",
      "Emirates (SYD to Madrid and Barcelona via Dubai)",
      "Singapore Airlines (SYD via Singapore, codeshare to Madrid)",
    ],
    intro:
      "Sydney runs the largest junior soccer base in Australia. Our team has been hosting NPL clubs, junior representative squads, school First XIs and academy sides from Greater Sydney in Spain since 2005, with training inside FC Barcelona, Valencia CF and the Spanish Football Federation's Las Rozas headquarters.",
    local_soccer_context:
      "Sydney soccer covers NPL Men's and Women's, junior representative football, NSWNL, and the deep school AFC and CIS competitions across the north shore, eastern suburbs, western Sydney and the Sutherland shire. The A-League off-season from May through September aligns cleanly with a European tour window, and the Australian winter is the right time to be training in Spanish sunshine. We run the most Sydney groups in late June, July and September school holidays.",
    time_zone_note:
      "Spain runs 8 to 10 hours behind Sydney depending on daylight savings. Most squads land in Madrid morning local time, settle in, and start training the next day with one buffer day for recovery.",
    why_spain: [
      "The off-season window from May to September is the strongest training time of year for Sydney squads, and Spain at that point of the calendar gives access to its quieter La Liga training schedules.",
      "Spanish methodology and the modern A-League technical style overlap more than they differ. Players hear the same coaching idea framed in Spain's accent and it cements.",
      "Family travel from Sydney to Spain is already a familiar trip. The tour formats let parents travel on the same itinerary while the squad trains.",
    ],
    sample_clubs_phrase:
      "Clubs across the north shore, eastern suburbs, inner west, Sutherland shire, western Sydney, the Hills district and the Central Coast",
    ideal_audiences: [
      "NPL and NPL2 junior clubs",
      "School AFC, CAS, GPS and CIS First XI programs",
      "Junior representative and academy development squads",
    ],
    hero_photo: "/photos/spain-soccer-tour-sydney-clubs-fc-barcelona-training-spain.jpg",
    og_summary:
      "Spain soccer tours from Sydney for NPL clubs, schools and junior representative squads. FC Barcelona, Valencia CF and Spanish FA training. Run by a Spanish team on the ground since 2005.",
  },
  {
    slug: "melbourne",
    name: "Melbourne",
    state: "Victoria",
    state_abbr: "VIC",
    metro: "Greater Melbourne",
    airport_codes: ["MEL"],
    flight_hours_to_madrid: "23 to 24 hours, one stop via Doha or Dubai",
    flight_hours_to_barcelona: "23 to 25 hours, one stop via Doha or Singapore",
    carriers: [
      "Qatar Airways (MEL to Madrid and Barcelona via Doha)",
      "Emirates (MEL to Madrid and Barcelona via Dubai)",
      "Singapore Airlines (MEL via SIN with codeshare to Madrid)",
    ],
    intro:
      "Melbourne carries the deepest senior soccer culture in Australia and a junior pipeline to match. Odisea Tours builds Spain tours for Victorian NPL clubs, school sport programs and academy squads, with sessions inside FC Barcelona's Joan Gamper, Valencia CF's Paterna ground and the Spanish FA at Las Rozas.",
    local_soccer_context:
      "Victorian soccer is split across NPL Victoria, the State League system and the school sport network through ACC, AGSV and APS competitions. Melbourne winters in July and August are exactly when Spain hits a quieter training window, which gives Odisea access to better facilities and coaches than the high A-League months. Most Melbourne tours we run align with the July school holidays.",
    time_zone_note:
      "Spain runs 8 to 10 hours behind Melbourne depending on daylight savings. Standard schedule is to land Madrid mid-morning, take one buffer day, then train on day two.",
    why_spain: [
      "Direct connections from Melbourne to Madrid and Barcelona through Doha or Dubai mean a single stop and a Spain arrival inside 24 hours from MEL.",
      "Australian winter aligns with Spain's quieter training calendar. Same La Liga clubs, easier slot bookings, lower vendor rates passed back to the group.",
      "Melbourne school sport competitions and APS sides slot the tour into the July holiday window without missing a domestic round.",
    ],
    sample_clubs_phrase:
      "Clubs across the inner suburbs, the bayside, the eastern corridor, Geelong, the south east and the northern suburbs",
    ideal_audiences: [
      "NPL Victoria and State League junior clubs",
      "ACC, AGSV and APS school sport programs",
      "Junior representative and academy squads",
    ],
    hero_photo: "/photos/spain-soccer-tour-melbourne-clubs-spanish-fa-training-spain.jpg",
    og_summary:
      "Spain soccer tours from Melbourne for NPL clubs, schools and academies. FC Barcelona, Valencia CF and Spanish FA training. On the ground in Spain since 2005.",
  },
  {
    slug: "brisbane",
    name: "Brisbane",
    state: "Queensland",
    state_abbr: "QLD",
    metro: "Brisbane and South East Queensland",
    airport_codes: ["BNE"],
    flight_hours_to_madrid: "24 to 26 hours, one stop via Doha or Dubai",
    flight_hours_to_barcelona: "23 to 25 hours, one stop via Doha or Singapore",
    carriers: [
      "Qatar Airways (BNE to Madrid via Doha)",
      "Emirates (BNE to Madrid and Barcelona via Dubai)",
      "Singapore Airlines (BNE via SIN to Spanish destinations)",
    ],
    intro:
      "Brisbane and South East Queensland have a growing junior soccer base, a stable NPL competition and one of Australia's strongest school sport networks. Odisea Tours builds Spain tours for Queensland clubs and schools, with training inside FC Barcelona, Valencia CF and the Spanish Football Federation.",
    local_soccer_context:
      "Queensland soccer covers NPL Queensland, FQPL competitions and the school sport pathway through AIC, GPS and TAS. The state's strong winter sport tradition and June through September school terms align cleanly with a European tour window. Brisbane families are used to travelling for Gold Coast tournaments, and a Spain trip extends that pattern at a competitive cost point.",
    time_zone_note:
      "Spain runs 7 to 9 hours behind Brisbane depending on daylight savings in Spain. Brisbane does not observe daylight savings. Squads land Madrid morning local time and take one buffer day.",
    why_spain: [
      "One-stop service from BNE to Madrid and Barcelona via Doha and Dubai means the squad lands inside 24 hours from departure.",
      "Queensland school sport July break is the quietest window in the Spanish training calendar, which means better facility access at lower rates.",
      "Spain pairs well with a stopover in Singapore or Dubai on the outbound leg, giving families a soft entry into long-haul travel.",
    ],
    sample_clubs_phrase:
      "Clubs across Brisbane, the Gold Coast, the Sunshine Coast, Ipswich and Logan",
    ideal_audiences: [
      "NPL Queensland and FQPL junior clubs",
      "AIC, GPS and TAS school sport programs",
      "Junior representative and academy sides",
    ],
    hero_photo: "/photos/spain-soccer-tour-brisbane-clubs-spanish-fa-training-session-spain.jpg",
    og_summary:
      "Spain soccer tours from Brisbane and South East Queensland. NPL clubs, schools and academies. FC Barcelona, Valencia CF, Spanish FA training. On the ground in Spain since 2005.",
  },
  {
    slug: "perth",
    name: "Perth",
    state: "Western Australia",
    state_abbr: "WA",
    metro: "Greater Perth",
    airport_codes: ["PER"],
    flight_hours_to_madrid: "22 to 24 hours, one stop via Doha or Dubai",
    flight_hours_to_barcelona: "21 to 23 hours, one stop via Doha or Dubai",
    carriers: [
      "Qatar Airways (PER to Madrid via Doha, daily)",
      "Emirates (PER to Madrid and Barcelona via Dubai)",
      "Qantas (PER to London Heathrow direct, onward to Madrid)",
    ],
    intro:
      "Perth has the shortest one-stop route to Europe from Australia, and the Qantas PER to LHR direct service makes it the most efficient launch point for a Spain tour from the country. Odisea Tours builds Spain tours for Western Australian NPL clubs and schools, with training inside FC Barcelona, Valencia CF and the Spanish FA.",
    local_soccer_context:
      "WA soccer is anchored by NPL Western Australia and a strong school sport network through PSA and ACC. Perth's isolation makes domestic travel for tournaments expensive relative to the rest of the country, which is exactly why a Spain tour can sit at a comparable cost level. Most Perth groups we run align with the WA July school holidays.",
    time_zone_note:
      "Spain runs 6 to 8 hours behind Perth depending on Spain's daylight savings. WA does not observe daylight savings. Most squads land Madrid in the morning local time after the PER overnight.",
    why_spain: [
      "Perth is the closest Australian capital to Europe. Total travel time from PER to Madrid sits at the lower end of the Australian range.",
      "Qantas direct PER to LHR plus an onward short-haul to Madrid is the cleanest single-connection route in the country.",
      "WA winter sport calendar lines up with Spain's quieter La Liga training windows, which means better facility slots at fairer vendor rates.",
    ],
    sample_clubs_phrase:
      "Clubs across Perth's northern suburbs, the western suburbs, Fremantle, the south east corridor and the Peel region",
    ideal_audiences: [
      "NPL Western Australia and State League junior clubs",
      "PSA and ACC school sport First XIs",
      "Junior representative and academy squads",
    ],
    hero_photo: "/photos/spain-soccer-tour-perth-clubs-coaching-briefing-spain.jpg",
    og_summary:
      "Spain soccer tours from Perth and Western Australia. Shortest one-stop route to Europe. FC Barcelona, Valencia CF, Spanish FA training. On the ground in Spain since 2005.",
  },
  {
    slug: "adelaide",
    name: "Adelaide",
    state: "South Australia",
    state_abbr: "SA",
    metro: "Greater Adelaide",
    airport_codes: ["ADL"],
    flight_hours_to_madrid: "24 to 26 hours, one stop via Doha or two stops via Singapore",
    flight_hours_to_barcelona: "23 to 25 hours, one stop via Dubai",
    carriers: [
      "Qatar Airways (ADL to Madrid via Doha)",
      "Emirates (ADL to Madrid and Barcelona via Dubai)",
      "Singapore Airlines (ADL via SIN to Madrid codeshare)",
    ],
    intro:
      "Adelaide has a tight, well-organised junior soccer base and a strong school sport tradition. Odisea Tours builds Spain tours for South Australian NPL clubs, school First XIs and junior representative sides, with training inside FC Barcelona, Valencia CF and the Spanish FA.",
    local_soccer_context:
      "South Australian soccer runs through NPL South Australia and the SAASTA school sport competition. Adelaide families are used to interstate travel for representative football, and the cost of a Spain tour from ADL sits within range of a multi-event domestic season. Most groups we run from Adelaide travel in the July school holiday window.",
    time_zone_note:
      "Spain runs 7 to 9 hours behind Adelaide depending on each country's daylight savings. South Australia does observe daylight savings. Squads land Madrid mid-morning and take one buffer day.",
    why_spain: [
      "One-stop ADL service via Doha or Dubai brings the squad into Madrid or Barcelona inside 26 hours of departure.",
      "Adelaide's tighter junior pipeline means clubs benefit disproportionately from European exposure. The tour returns more per player than in larger metros.",
      "South Australian July break lines up with Spain's quieter training window for La Liga and the Spanish FA, which translates into better facility access.",
    ],
    sample_clubs_phrase:
      "Clubs across Adelaide's inner suburbs, the eastern foothills, the western corridor and the southern coast",
    ideal_audiences: [
      "NPL South Australia junior clubs",
      "SAASTA and independent school First XIs",
      "Junior representative and academy squads",
    ],
    hero_photo: "/photos/spain-soccer-tour-adelaide-clubs-action-training-spain.jpg",
    og_summary:
      "Spain soccer tours from Adelaide and South Australia. NPL clubs, schools and academies. FC Barcelona, Valencia CF, Spanish FA training. On the ground in Spain since 2005.",
  },
];

export function auCityBySlug(slug: string): AuCity | undefined {
  return AU_CITIES.find((c) => c.slug === slug);
}
