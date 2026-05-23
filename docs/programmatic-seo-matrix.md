# Programmatic SEO Matrix — odisea-tours.com

Owner: Juan Sanchez
Drafted: 2026-05-23
Sprint target: 30 to 60 unique landing pages, all backed by real Odisea data, no spun template content.

The site already has 6 US cities, 6 UK cities, 5 AU cities (`content/us-cities.ts`, `uk-cities.ts`, `australia-cities.ts`), 11 tours, 3 destinations (BCN, MAD, VLC) and 24 journal posts. This matrix sits on top of that, it does not redo it.

---

## 1. Dimensions and combinations

Five axes. Only some intersections are commercially live.

| Axis | Values |
|---|---|
| Audience | youth-club, high-school, college-programs, women-youth, veterans-amateur, schools-language-immersion, adult-cultural |
| Origin geography | US states (priority 8), UK regions (priority 4, UK is football-only and lower priority per memory; build but do not expand), AU states (priority 5), plus the 17 already-built city pages |
| Spain destination / tour shape | Barcelona-anchored, Madrid-anchored, Valencia-anchored, Andalusia cultural, Camino, multi-city sport, multi-city cultural |
| Format | tour (e.g. 10-day soccer), tournament / festival, pre-season stage, language immersion, family-on-same-itinerary |
| Season | summer (Jun to Aug), winter break (Dec to Jan), Easter / spring break, half-term (UK Feb and Oct), AU July school holiday |

### Priority US states (batch 1)

California, Texas, Florida, New York, New Jersey, Massachusetts, Illinois, Washington. Picked because (a) we already have city pages there or in neighbouring metros, (b) ECNL / MLS Next / NPL density is highest, (c) direct or one-stop carrier service to MAD / BCN exists.

### Priority AU states (batch 1)

NSW, VIC, QLD, WA, SA. Already have city seeds. Add state-level pages as the hub above the city pages.

### Skip in batch 1

- UK state / region rollups. UK is football-only; the 6 UK city pages are enough until Juan reopens UK lead generation.
- Anything implying FCB / VCF / RFEF academy fixture guarantee for boys' youth. Qualify everywhere as "Spanish academy or amateur sides."
- Origin x destination combos where we would be inventing testimonials. Each page needs at least one real Odisea data point or it does not ship.

### High-intent combinations

1. Audience x State (e.g. youth-soccer-club x California). Highest search volume, clearest commercial intent.
2. Audience x Spain destination (e.g. high-school x Barcelona). Captures "barcelona soccer tour for high school" tail.
3. Format x Audience (e.g. pre-season stage x college soccer). Narrow but commercially mature audience.
4. Audience x Season (e.g. youth soccer tour x winter break). Buys against a specific decision window.

### Skip combinations

- City x city (e.g. LA x Barcelona). The current city page already answers this. Do not slice further.
- Single-tour x single-origin city (already covered by tour + city page).
- Season x season, format x format (no search intent).

### Batch 1 page count estimate

| Dimension | Pages |
|---|---|
| US state hubs (8) | 8 |
| AU state hubs (5) | 5 |
| Audience x Spain-city (7 audiences x 3 cities, minus illogical combos) | ~15 |
| Audience x Season (4 audiences x 3 windows) | 9 |
| Format x Audience (5 combos) | 5 |
| **Total batch 1** | **~42 pages** |

Batch 2 (after batch 1 indexes and we see CTR data): 20 to 30 more.

---

## 2. URL structure

Three options:

### Option A. Verb-led, audience-first

`/spain-soccer-tours-for-[audience]-from-[origin]/`
e.g. `/spain-soccer-tours-for-youth-clubs-from-california/`

- Pro: max keyword density, clear scan.
- Con: ugly, long, hard to share verbally, duplicates the existing `/youth` and `/usa/[city]` hierarchy.

### Option B. Hub directories (RECOMMENDED)

- `/usa/[state]/` (state hubs, above existing `/usa/[city]/`)
- `/spain-soccer-tours/[audience]/` (audience hubs, e.g. `/spain-soccer-tours/youth-clubs/`)
- `/spain-soccer-tours/[audience]/[spain-city]/` (audience x Spain-city)
- `/spain-soccer-tours/season/[season]/` (season landers)

- Pro: clean, hierarchical, breadcrumb-friendly, internal-link graph stays tidy. Schema BreadcrumbList writes itself.
- Con: requires careful coordination with the existing `/usa/[city]` route.

### Option C. Flat slugs

`/spain-soccer-tours-california/`, `/youth-soccer-tour-barcelona/`

- Pro: short, no nesting refactor.
- Con: no hierarchy in URL = weaker breadcrumbs, harder to manage at scale.

**Pick: Option B.** Caveat: do not refactor `/usa/[city]` URLs. Keep them and add `/usa/[state]/` as the parent hub that links down. No redirects needed; the city pages link UP to the state hub via breadcrumb.

Pre-check: `next.config.ts` already has 100+ legacy 301s. Before claiming any new slug, grep redirects to make sure the new slug is not shadowed (per memory rule `reference_odisea_next_redirects_gotcha`).

---

## 3. Page template skeleton

Every programmatic page must contain these sections in this order. If a page cannot fill all of them with real data, it does not ship.

1. **Hero**. H1 with the exact target keyword phrase (e.g. "Spain soccer tours for California youth clubs"). Sub-headline naming the unique angle for this combination. Hero photo from the existing Odisea photo library, not stock.
2. **Why this combination works** (2 paragraphs, ~180 to 220 words, first-person Juan voice). The operator's read on this specific intersection. Cannot be template-swapped. A California state page talks about the ECNL National League calendar, MLS Next academy density in SoCal / Bay Area, and the LAX-MAD Iberia nonstop. A Texas state page talks about UIL calendar, FC Dallas / Houston Dynamo academies, DFW-MAD American direct.
3. **Real cost range for this audience**. Pulled from `content/tours.ts` price anchors ($3,495 youth soccer, $2,895 softball, €1,995 to €2,595 cultural). State what is included, what is not (international flights). Add per-state flight-cost band if we have it.
4. **Sample 3-day itinerary specific to this profile**. Not the full 10-day. Three days that signal what THIS audience does differently. College pre-season = double sessions + GPS load monitoring + closed scrimmages. Schools language immersion = morning Spanish class + afternoon cultural visit. Veterans = walking pace tour + La Liga match + boutique hotel.
5. **Real testimonial slot**. Only inserted if a real client from that profile exists. Otherwise omit the section entirely. Never fabricate (memory rule).
6. **FAQ block (4 to 6 Qs)** specific to this audience / origin. For a Massachusetts page: "How long is the flight from Boston to Madrid? Is there a direct?" For a college pre-season page: "Can the tour fit between summer term and pre-season camp?" Each FAQ has to be answerable from existing Odisea operations.
7. **Internal link block**. 3 tour pages, 1 city page (origin), 1 destination page (Spain), 1 audience hub.
8. **CTA**. "Plan your tour from [origin]" link to `/plan-your-tour?source=[slug]` so the inbound form captures the page that converted them.

**Word count floor: 900 words of body content** (excluding nav / footer / JSON-LD). Below 800 and Helpful Content Update reads it as thin.

**Unique-data fields required**: at least 3 of: flight time, flight carriers, soccer-organisation context for the origin (ECNL / NPL / etc.), club-size pattern, school-calendar window, real Odisea client reference, regional culture note. No page ships with fewer than 3.

---

## 4. Data sources

| Data | Source | Owner |
|---|---|---|
| Per-state US soccer participation | US Youth Soccer + US Club Soccer state-association sites; scrape once with Brave + Playwright using same pattern as `~/Desktop/odisea-providers-scraper/` | Build script |
| Flight cost band origin to MAD / BCN | Skyscanner / Google Flights scrape (low / avg / high for school-holiday week); cache quarterly | Build script |
| Flight times + carriers | Already in `content/us-cities.ts`, `uk-cities.ts`, `australia-cities.ts`. Extend to state level by aggregating top metros. | Already have |
| Audience safeguarding norms | US: US Center for SafeSport. UK: FA DBS. AU: Working with Children Check per state. Document once in `content/safeguarding.ts`. | Juan + research |
| Best season per combination | Juan's operational calendar. Need a one-page write-up. | Juan input |
| Real client references per geography | Odisea CRM (`~/Desktop/odisea-sales/`). Pull a list of clubs Odisea has run with, tagged by origin state. | Juan + CRM query |
| Pricing anchors | Already in `content/tours.ts` and memory. | Already have |
| State-level club density (ECNL / MLS Next / NPL count) | Public league pages; one scrape pass. | Build script |
| Spanish-side facility access reality | Juan's ground knowledge. Already reflected in tour copy. | Juan |

New content modules to create:

- `content/us-states.ts` (same shape as `us-cities.ts` but at state level)
- `content/au-states.ts` (same)
- `content/audiences.ts` (typed list with copy blocks per audience)
- `content/seasons.ts` (typed list with copy blocks per season window)

---

## 5. Schema strategy per page

| Page type | JSON-LD emitted |
|---|---|
| State hub (`/usa/[state]/`) | BreadcrumbList + FAQPage + Place (region) |
| Audience hub (`/spain-soccer-tours/[audience]/`) | BreadcrumbList + FAQPage + Service (`serviceType: "Group sports travel"` + `audience: { audienceType: "..." }`) |
| Audience x Spain-city | BreadcrumbList + FAQPage + TouristTrip (with `partOfTrip: TouristTrip` referencing the canonical tour, `touristType: "..."`) |
| Season lander | BreadcrumbList + FAQPage + Event (the booking window, not the trip) |
| Format x Audience | BreadcrumbList + FAQPage + Service |

**Differentiation rules so Google does not see boilerplate**:

- TouristTrip pages: vary `itinerary` array, `subjectOf` (link to journal post), and add a unique `description` field per page (the 2-paragraph WHY).
- FAQPage: minimum 4 questions per page, all unique to the combination. Reuse no more than 1 FAQ across pages.
- Audience hubs use `Service` not `TouristTrip`. That signals to Google these are category pages, not trip listings.

---

## 6. Risk and quality controls

**Helpful Content Update risk** is the live threat. Programmatic pages that look like spun copy get demoted en masse.

Mitigations:

- 900-word floor on body content. Counter in the build.
- Required unique-data fields. Build fails the page if fewer than 3 are filled.
- No two pages share more than 30% of body text. Add a Levenshtein / shingle check in the build.
- Real testimonial only or omit. Never invented.
- Internal-link block must point to at least 5 distinct destinations, not the same 5 on every page.
- Author byline = Juan. First-person voice required in the WHY section.
- Hero photo must be from `/photos/` Odisea library, not stock or AI-generated.

**Pre-launch validation checklist (run for every page before deploy)**:

1. Body content > 900 words
2. At least 3 unique-data fields filled
3. JSON-LD validates in Rich Results Test
4. No "official partner" claim for FCB / VCF / RFEF
5. No em-dashes (regex pre-commit hook)
6. No FCB / VCF academy fixture promise on a men's youth page
7. "Soccer" used for US / AU pages, "football" for UK pages
8. Canonical URL set, sitemap entry generated
9. Hero photo from `/photos/` library
10. At least 5 internal links to distinct routes
11. CTA links to `/plan-your-tour?source=[slug]`
12. Mobile Lighthouse score > 90 (sample 1 page per template)
13. Slug not already claimed by a `next.config.ts` 301

**Indexing strategy**: stagger the batch 1 launch across 3 weeks (15 pages / week). Submit through GSC sitemap. Watch the first 5 pages for HCU impact before pushing the rest.

---

## 7. Launch sequence — batch 1A (first 8 pages)

Highest commercial intent and where Odisea has the most operational data.

1. `/usa/california/` (state hub, links down to LA + SD city pages)
2. `/usa/texas/` (state hub, links down to Dallas + Houston city pages)
3. `/usa/florida/` (state hub, links down to Miami city page)
4. `/usa/new-york/` (state hub, links down to NY city page, covers NJ + CT in copy)
5. `/spain-soccer-tours/youth-clubs/` (audience hub, the money page)
6. `/spain-soccer-tours/high-school/` (audience hub)
7. `/spain-soccer-tours/college-programs/` (audience hub for college soccer programs on in-season immersion tours; anchored by Long Beach University case, 2 trips with Mauricio Ingrassia DOC)
8. `/spain-soccer-tours/youth-clubs/barcelona/` (audience x Spain-city, single highest-volume tail combination)

Validate at 30 days: did 5 of these 8 index in the top 50 for at least one commercial keyword? If yes, ship the next 15 (state hubs for WA / IL / MA / NJ, more audience x city, season landers). If no, debug before scaling.

---

## 8. Open questions for Juan before build starts

### Resolved 2026-05-23

- **Real client references (Q2):** Confirmed by Juan. Colne Academy (UK, 5 consecutive yrs, school), Long Beach University (USA-CA, 2 trips, college, Mauricio Ingrassia DOC), NorCal Coaches and Directors (USA-CA, 2012), Hawaii Elite (USA-HI, annual since 2019, Brent Nunes partner). Full record at `memory/odisea_real_client_references.md`.
- **College pre-season (Q3):** Dropped. LBU's 2 trips were in-season soccer-focused tours, not pre-season camps. `college-preseason` hub replaced by `college-programs` (in-season soccer-immersion) anchored by LBU.
- **Testimonials (Q8):** Colne Academy, Long Beach University and Hawaii Elite confirmed willing to provide on-record quotes. Quote text still needs to be collected (Juan emails contacts). Until collected, batch 1 pages name-drop these clients in credibility blocks but omit testimonial cards.

### Still open

1. **Priority US states**: confirm the 8 (CA, TX, FL, NY, NJ, MA, IL, WA). Swap any?
2. **Women's youth combinations**: memory says women's youth can play La Liga academies but men's cannot. Confirm we want a dedicated `women-youth` audience hub. If yes, we can make stronger fixture claims there.
3. **Schools language-immersion**: there is already a `/sin-traduccion` tour for this. Should the schools-immersion audience hub feed into that tour exclusively, or do you want a different format?
4. **Veterans agency angle**: memory says veterans = US travel agencies as the buyer. Should the veterans audience hub be B2C (the traveller) or B2B (the agency)? Different copy entirely.
5. **Australia state hubs**: do you have AU client references comparable to the US? If thin, drop AU state hubs from batch 1 and ship the 5 AU city pages we already have instead.
6. **Pricing per audience**: confirm college-programs (LBU shape) and veterans price points. We have youth ($3,495), softball ($2,895), cultural (€1,995 to €2,595). What is the college-programs number?
7. **Author byline**: "By Juan Sanchez" or "By the Odisea Tours team"? Affects schema `author` field.

None of these are blocking. Defaults work if you do not respond.
