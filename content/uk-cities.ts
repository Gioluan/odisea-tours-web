export type UkCity = {
  slug: string;
  name: string;
  region: string;
  region_abbr: string;
  metro: string;
  airport_codes: string[];
  flight_hours_to_madrid: string;
  flight_hours_to_barcelona: string;
  carriers: string[];
  intro: string;
  local_football_context: string;
  time_zone_note: string;
  why_spain: string[];
  sample_clubs_phrase: string;
  ideal_audiences: string[];
  hero_photo: string;
  og_summary: string;
};

export const UK_CITIES: UkCity[] = [
  {
    slug: "london",
    name: "London",
    region: "Greater London",
    region_abbr: "LDN",
    metro: "Greater London",
    airport_codes: ["LHR", "LGW", "STN", "LTN", "LCY"],
    flight_hours_to_madrid: "2h 25m nonstop",
    flight_hours_to_barcelona: "2h 15m nonstop",
    carriers: [
      "Iberia and British Airways (LHR to Madrid, daily)",
      "Vueling and easyJet (LGW and STN to Barcelona)",
      "Ryanair (STN to Madrid and Valencia)",
    ],
    intro:
      "London grassroots and academy football is the deepest pipeline in Europe, and the cheapest flight to Spain is the one your club is already used to taking on a half-term family trip. Odisea Tours has been hosting London Sunday League clubs, school first XIs and academy sides since 2005, with training inside FC Barcelona, Valencia CF and the Spanish Football Federation's Las Rozas headquarters.",
    local_football_context:
      "London clubs sit closer to Spanish football than any other big football city in Europe. The U16 to U18 squad that travels Sunday morning to Hackney Marshes can fly to Madrid Saturday after school and train at the Spanish FA on Sunday. The pull is not the flight. It is the access to La Liga methodology, the warm-weather training week in February when London pitches are unplayable, and the cultural side trip that turns a football tour into a parent-friendly itinerary.",
    time_zone_note:
      "Spain runs one hour ahead of London. There is no jet lag and the squad keeps its sleep pattern intact for the next league weekend.",
    why_spain: [
      "Two and a half hours from London to Madrid means the squad lands rested and trains the same afternoon. No recovery day burned to travel.",
      "Warm-weather windows in October through March solve the problem London grassroots clubs already know: half the league season is played on a soaked pitch.",
      "Tour cost from London families lands at the same level as a midweek skiing trip, but players come home having trained inside FC Barcelona's Joan Gamper facilities.",
    ],
    sample_clubs_phrase:
      "Clubs across north London, east London, south London and the home counties around Surrey, Kent and Essex",
    ideal_audiences: [
      "Sunday League grassroots clubs U12 to U18",
      "Independent school and state grammar football programmes",
      "Sixth form and academy development squads",
    ],
    hero_photo: "/photos/odisea-tours-fcb-squad-with-barca-coaches.jpg",
    og_summary:
      "Spain football tours for London clubs, schools and academies. FC Barcelona, Valencia CF and Spanish FA training, two and a half hours from Heathrow. Run by Odisea Tours since 2005.",
  },
  {
    slug: "manchester",
    name: "Manchester",
    region: "North West England",
    region_abbr: "NW",
    metro: "Greater Manchester",
    airport_codes: ["MAN"],
    flight_hours_to_madrid: "2h 45m nonstop",
    flight_hours_to_barcelona: "2h 25m nonstop",
    carriers: [
      "Iberia and British Airways (MAN to Madrid, daily)",
      "Jet2 and easyJet (MAN to Barcelona, daily)",
      "Vueling (MAN to Valencia, seasonal)",
    ],
    intro:
      "Manchester runs more academy football per square mile than any city in Europe. Odisea Tours builds Spain tours for north west clubs and schools that match the standard set at home, with sessions at FC Barcelona's Joan Gamper, Valencia CF's Paterna ground and the Spanish FA in Las Rozas.",
    local_football_context:
      "Greater Manchester clubs are used to a higher daily training standard than most of their international opponents. The Spain tour is built around that, not down from it. Three sessions inside La Liga facilities, one fixture against a Spanish youth side, plus a stadium experience at Camp Nou or Mestalla. Manchester half-term in February and the May bank holiday are the two windows we run most groups through.",
    time_zone_note:
      "Spain is one hour ahead of Manchester. Groups landing in Madrid mid-afternoon can train the same evening with no jet lag carry-over.",
    why_spain: [
      "Direct Manchester flights to Madrid, Barcelona and Valencia mean the squad can do a four-night tour over a long weekend without missing school.",
      "The Spanish FA in Las Rozas is the only national federation HQ in Europe that lets visiting youth squads sleep on site between training sessions.",
      "Spanish coaching philosophy translates directly into what Manchester academy coaches are already teaching. Players hear the same idea in a different accent and it lands.",
    ],
    sample_clubs_phrase:
      "Clubs across Manchester, Salford, Bolton, Bury, Oldham, Stockport, Tameside and Trafford",
    ideal_audiences: [
      "Junior football clubs U11 to U18",
      "Independent and state school football programmes",
      "Sixth form and college academy squads",
    ],
    hero_photo: "/photos/odisea-tours-youth-fcb-training-hero.jpg",
    og_summary:
      "Spain football tours from Manchester. Direct flights to Madrid, Barcelona and Valencia. FC Barcelona, Valencia CF and Spanish FA training. Run by Odisea Tours since 2005.",
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    region_abbr: "WM",
    metro: "West Midlands",
    airport_codes: ["BHX"],
    flight_hours_to_madrid: "2h 30m nonstop",
    flight_hours_to_barcelona: "2h 10m nonstop",
    carriers: [
      "Iberia and British Airways (BHX to Madrid, daily via LHR or direct seasonal)",
      "Ryanair and Jet2 (BHX to Alicante and Barcelona)",
      "Vueling (BHX to Barcelona, daily seasonal)",
    ],
    intro:
      "Birmingham and the West Midlands hold one of the deepest grassroots football pipelines outside London. Odisea Tours has been hosting Midlands clubs and school football sides in Spain since 2005, with training inside FC Barcelona, Valencia CF and the Spanish FA at Las Rozas.",
    local_football_context:
      "Midlands grassroots football covers everything from Birmingham city academies to county football across Warwickshire, Worcestershire and Staffordshire. A Spain tour from BHX is the same flight time as a London commute and the cost sits below a comparable European youth festival in Germany or the Netherlands. Most Midlands squads run their tour over February half-term, the Easter break or the late May bank holiday.",
    time_zone_note:
      "Spain is one hour ahead of Birmingham. Groups arrive without jet lag and keep their league weekend rhythm.",
    why_spain: [
      "BHX direct service to Madrid, Barcelona and Alicante means the tour starts on day one with a training session, not a recovery day.",
      "Spanish league fixtures against academy or amateur sides at the right age band give Midlands clubs a true competitive read.",
      "Stadium tours at Camp Nou, Mestalla and the Wanda Metropolitano are baked into the itinerary, not an upsell.",
    ],
    sample_clubs_phrase:
      "Clubs across Birmingham, Coventry, Wolverhampton, West Bromwich, Solihull, Walsall and Warwickshire",
    ideal_audiences: [
      "Junior football clubs and academies U11 to U18",
      "Independent and state school first XI programmes",
      "Sixth form and college football squads",
    ],
    hero_photo: "/photos/preseason-team-briefing.jpg",
    og_summary:
      "Spain football tours from Birmingham. Direct flights to Madrid, Barcelona and Alicante. FC Barcelona, Valencia CF, Spanish FA training. Odisea Tours since 2005.",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "North West England",
    region_abbr: "NW",
    metro: "Liverpool and Merseyside",
    airport_codes: ["LPL", "MAN"],
    flight_hours_to_madrid: "2h 45m via MAN or LPL",
    flight_hours_to_barcelona: "2h 25m via MAN or LPL",
    carriers: [
      "easyJet (LPL to Barcelona and Madrid)",
      "Ryanair (LPL to Alicante and Madrid)",
      "Jet2 and Iberia (MAN to Madrid and Barcelona)",
    ],
    intro:
      "Liverpool football culture runs deeper than its two top-flight clubs. The youth side of Merseyside, the parish leagues, the school first XIs, the academy feeder sides all live and breathe the game. Odisea Tours builds Spain tours for Merseyside clubs that meet that culture at the right level.",
    local_football_context:
      "Merseyside clubs already speak the same football language as Spain. The Spain tour is what extends that into actual on-pitch experience: three sessions inside La Liga facilities, a fixture against a Spanish side, a Camp Nou or Mestalla stadium day. Liverpool school holidays through February and Easter are the busiest windows we run.",
    time_zone_note:
      "Spain runs one hour ahead of Liverpool. No jet lag, no recovery day. The tour starts when the plane lands.",
    why_spain: [
      "Liverpool John Lennon and Manchester airports together offer direct service to every major Spanish hub. Cost per seat sits below most European football festivals.",
      "Merseyside families know the Spanish league. The cultural bridge is already in place before the squad lands.",
      "Spanish coaching method emphasises ball control and decision speed, the same focus most Liverpool academy and school coaches are already teaching.",
    ],
    sample_clubs_phrase:
      "Clubs across Liverpool, Wirral, Sefton, Knowsley, St Helens and the Merseyside boroughs",
    ideal_audiences: [
      "Junior football clubs U11 to U18",
      "Independent school and state grammar first XIs",
      "Sixth form and college academy programmes",
    ],
    hero_photo: "/photos/odisea-tours-coaching-session.jpg",
    og_summary:
      "Spain football tours from Liverpool and Merseyside. FC Barcelona, Valencia CF and Spanish FA training. Direct flights from LPL and MAN. Odisea Tours since 2005.",
  },
  {
    slug: "leeds",
    name: "Leeds",
    region: "Yorkshire",
    region_abbr: "YKS",
    metro: "Leeds and West Yorkshire",
    airport_codes: ["LBA", "MAN"],
    flight_hours_to_madrid: "2h 45m via MAN, one stop via LBA",
    flight_hours_to_barcelona: "2h 30m via LBA direct",
    carriers: [
      "Jet2 (LBA to Barcelona, Alicante and Madrid)",
      "Ryanair (LBA to Barcelona)",
      "Iberia and British Airways (MAN to Madrid)",
    ],
    intro:
      "Leeds and West Yorkshire run one of the strongest grassroots football networks in northern England. Odisea Tours has been hosting Yorkshire clubs and schools in Spain since 2005, with training inside FC Barcelona, Valencia CF and the Spanish Football Federation.",
    local_football_context:
      "Yorkshire football starts at parish level and runs up through county leagues and into academy feeders. A Spain tour for a Leeds club is the same outlay as a domestic showcase weekend, but the players come home with a Spanish FA training day on the books and a friendly fixture line on the CV. Most Leeds groups travel during October half-term and February half-term.",
    time_zone_note:
      "Spain is one hour ahead of Leeds. Squads keep their training rhythm without jet lag.",
    why_spain: [
      "Leeds Bradford airport has direct Jet2 service to Barcelona, Alicante and Madrid, so groups depart from home without changing trains.",
      "Yorkshire half-term and Easter windows align cleanly with quieter La Liga training schedules, giving us access to better facilities and coaches.",
      "Tour cost from Leeds families sits below a comparable European football festival in Holland or Germany.",
    ],
    sample_clubs_phrase:
      "Clubs across Leeds, Bradford, Wakefield, Huddersfield, Halifax and the West Riding",
    ideal_audiences: [
      "Junior football clubs U11 to U18",
      "Independent and state school first XIs",
      "County and district representative squads",
    ],
    hero_photo: "/photos/odisea-tours-spanish-fa-rfef-training.jpg",
    og_summary:
      "Spain football tours from Leeds and West Yorkshire. Direct Jet2 flights from LBA. FC Barcelona, Valencia CF and Spanish FA training. Odisea Tours since 2005.",
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    region: "Scotland",
    region_abbr: "SCO",
    metro: "Greater Glasgow",
    airport_codes: ["GLA", "EDI"],
    flight_hours_to_madrid: "2h 50m direct or via LHR",
    flight_hours_to_barcelona: "2h 40m nonstop",
    carriers: [
      "easyJet (GLA to Barcelona and Alicante)",
      "Jet2 (GLA to Barcelona, Madrid and Malaga)",
      "British Airways (EDI to Madrid via LHR)",
    ],
    intro:
      "Glasgow holds the densest football culture per capita in the United Kingdom. Odisea Tours builds Spain tours for Scottish clubs, schools and academies that match the technical level Glasgow coaches are already teaching, with training inside FC Barcelona, Valencia CF and the Spanish FA.",
    local_football_context:
      "Scottish youth football is technically demanding and intensely supported by family travel. A Spain tour from Glasgow is the most cost-effective European football experience available to a Scottish club, and the cultural reception in Spain to a Scottish travelling group is unmatched. Glasgow school holidays in October, February and Easter are the windows we run most Scottish groups through.",
    time_zone_note:
      "Spain runs one hour ahead of Glasgow. Squads arrive without jet lag and keep their domestic season pattern intact.",
    why_spain: [
      "Glasgow direct service to Barcelona, Alicante and Madrid means the tour starts on day one with a training session, not a layover.",
      "Spanish coaching method and Scottish development pathways have more overlap than either country usually credits. The exchange is real.",
      "Scottish school holidays land in the quieter La Liga training calendar, giving Odisea access to better facilities at lower vendor rates.",
    ],
    sample_clubs_phrase:
      "Clubs across Glasgow, Lanarkshire, Renfrewshire, Ayrshire and the central belt",
    ideal_audiences: [
      "Junior football clubs U11 to U18",
      "Independent and state school first XIs",
      "Boys Club and SFA youth pathway sides",
    ],
    hero_photo: "/photos/preseason-action-shot-pitch.jpg",
    og_summary:
      "Spain football tours from Glasgow and central Scotland. Direct flights to Barcelona, Madrid and Alicante. FC Barcelona, Valencia CF, Spanish FA training. Odisea Tours since 2005.",
  },
];

export function ukCityBySlug(slug: string): UkCity | undefined {
  return UK_CITIES.find((c) => c.slug === slug);
}
