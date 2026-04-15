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
    "valencia-sevilla-football-cities-most-tours-miss",
  ],
  "corporate-retreats": [
    "how-to-plan-a-group-trip-to-spain",
  ],
  "sport-adventure": [
    "how-to-plan-a-group-trip-to-spain",
  ],
  "sabores-de-espana": [
    "how-to-plan-a-group-trip-to-spain",
    "valencia-sevilla-football-cities-most-tours-miss",
  ],
  "flamenco-moorish-spain": [
    "how-to-plan-a-group-trip-to-spain",
    "valencia-sevilla-football-cities-most-tours-miss",
  ],
  "camino-de-santiago": [
    "how-to-plan-a-group-trip-to-spain",
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
