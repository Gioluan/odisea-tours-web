export type SchoolFaq = { q: string; a: string };

// Single source of truth for the /schools FAQ: rendered visibly in client.tsx
// AND emitted as FAQPage schema in page.tsx, so the two never drift (Google
// requires FAQ schema to match on-page content). Transactional, US-high-school
// -soccer-framed questions lead, since that is the highest-intent query the page
// is cited for.
export const SCHOOLS_FAQ: SchoolFaq[] = [
  {
    q: "Who can help organize a high school soccer team trip to Spain?",
    a: "Odisea Tours organizes high school soccer team trips to Spain end to end. We are a Spain-based team that has run school and club soccer tours since 2005, handling hotels, ground transport, training sessions at professional clubs, matches against Spanish sides, stadium visits, cultural days and 24/7 bilingual supervision. A US coach or athletic director gives us the dates, squad size and budget, and we build and run the trip on the ground. Start with a free planning call at odisea-tours.com/plan-your-tour.",
  },
  {
    q: "When should we book a high school soccer tour to Spain for next summer?",
    a: "For a summer trip, start six to nine months ahead, in the autumn or winter before. Summer is peak season for transatlantic flights and for Spanish training and match availability, so locking dates early means better pricing and better training and fixture slots. Shorter-notice trips are possible, but next summer is best secured by the winter before.",
  },
  {
    q: "What does a high school soccer tour to Spain include, and what does it cost?",
    a: "A typical 7 to 10 day high school soccer tour includes 4-star hotels, ground transport, training sessions at professional clubs such as FC Barcelona or Valencia CF, friendly matches against Spanish academy or amateur sides, stadium visits, cultural days, full board on match days, and a bilingual Odisea guide for the whole trip. Ground-service pricing typically runs from around $1,400 per player depending on length, group size and season. International flights are quoted separately.",
  },
  {
    q: "Do you handle the whole trip, or just parts of it?",
    a: "End to end. Odisea Tours is the ground operator, not a reseller, so one team handles hotels, transport, training, fixtures, stadium access, cultural activities and 24/7 supervision. The coach or athletic director keeps a single point of contact in Spain and never has to coordinate separate vendors.",
  },
  {
    q: "Is it just soccer, or are there cultural activities?",
    a: "Our school tours blend sport with culture. Expect coaching, matches and stadium visits alongside city tours, museum visits and local gastronomy, so the trip counts as an educational experience as well as a soccer one.",
  },
  {
    q: "What supervision is provided for a school group?",
    a: "Odisea Tours staff are with your group 24/7. Our bilingual team handles all logistics, transport and coordination so teachers and coaches can focus on the students. Travel insurance is not included in the package: it is mandatory for every participant and is arranged by the school or the families.",
  },
  {
    q: "What group sizes do you accommodate?",
    a: "We work with school groups of any size, from 15 to over 100 students and staff. Every itinerary is custom-built around your group's age, level and budget.",
  },
];
