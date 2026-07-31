import { POSTS, type Post } from "@/content/journal";

export const TOUR_TO_JOURNAL: Record<string, string[]> = {
  "european-soccer-tours": [
    "youth-soccer-tours-to-spain-complete-guide",
    "what-a-youth-soccer-tour-to-spain-costs",
    "real-madrid-or-fc-barcelona-which-stadium-visit",
    "la-masia-la-fabrica-academies-worth-visiting",
    "why-australian-teams-choosing-spain-over-england",
    "arranging-friendly-matches-against-spanish-youth-clubs",
    "best-time-of-year-for-a-youth-soccer-tour-to-spain",
    "what-parents-ask-before-europe-soccer-tour",
    "pre-tour-checklist-coach-field-guide",
  ],
  "cultural-journeys": [
    "how-to-plan-a-group-trip-to-spain",
    "sabores-de-espana-food-wine-tour-spain",
    "valencia-sevilla-football-cities-most-tours-miss",
    "walking-camino-de-santiago-with-a-group",
    "corporate-team-building-retreats-spain",
  ],
  "corporate-retreats": [
    "how-to-plan-a-group-trip-to-spain",
    "corporate-team-building-retreats-spain",
    "sabores-de-espana-food-wine-tour-spain",
  ],
  "sport-adventure": [
    "how-to-plan-a-group-trip-to-spain",
    "walking-camino-de-santiago-with-a-group",
  ],
  "sabores-de-espana": [
    "how-to-plan-a-group-trip-to-spain",
    "sabores-de-espana-food-wine-tour-spain",
    "valencia-sevilla-football-cities-most-tours-miss",
  ],
  "flamenco-moorish-spain": [
    "how-to-plan-a-group-trip-to-spain",
    "sabores-de-espana-food-wine-tour-spain",
    "valencia-sevilla-football-cities-most-tours-miss",
  ],
  "camino-de-santiago": [
    "how-to-plan-a-group-trip-to-spain",
    "walking-camino-de-santiago-with-a-group",
  ],
  "sin-traduccion": [
    "how-to-organize-school-football-tour-spain",
    "what-parents-need-to-know-youth-football-tours-spain",
    "how-to-plan-a-group-trip-to-spain",
  ],
  "pre-season-stages": [
    "what-a-youth-soccer-tour-to-spain-costs",
    "training-spanish-fa-rfef-football-tour-experience",
    "pre-tour-checklist-coach-field-guide",
  ],
  "youth-soccer-spain-tour": [
    "youth-soccer-tours-to-spain-complete-guide",
    "what-parents-ask-before-europe-soccer-tour",
    "what-a-youth-soccer-tour-to-spain-costs",
    "best-time-of-year-for-a-youth-soccer-tour-to-spain",
    "how-to-fundraise-for-your-teams-spain-tour",
  ],
  "tournament-experience": [
    "arranging-friendly-matches-against-spanish-youth-clubs",
    "youth-soccer-tours-to-spain-complete-guide",
    "what-a-youth-soccer-tour-to-spain-costs",
  ],
  "softball-tours-spain": [
    "best-softball-tours-spain-us-teams",
    "how-to-plan-a-group-trip-to-spain",
    "how-to-fundraise-for-your-teams-spain-tour",
  ],
  "barcelona-costa-brava-soccer-tour": [
    "costa-brava-the-coast-most-soccer-tours-skip",
    "best-time-of-year-for-a-youth-soccer-tour-to-spain",
    "arranging-friendly-matches-against-spanish-youth-clubs",
    "what-a-youth-soccer-tour-to-spain-costs",
  ],
};

export function relatedJournalPosts(tourSlug: string, limit = 3): Post[] {
  const slugs = TOUR_TO_JOURNAL[tourSlug] ?? [];
  return slugs
    .map((s) => POSTS.find((p) => p.slug === s))
    .filter((p): p is Post => Boolean(p))
    .slice(0, limit);
}

export function topJournalPosts(limit = 3): Post[] {
  return [...POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
