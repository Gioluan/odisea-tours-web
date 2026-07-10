import type { Tour } from "@/content/tours";

export interface FaqItem {
  q: string;
  a: string;
}

function joinList(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  const head = items.slice(0, -1).join(", ");
  return `${head}, and ${items[items.length - 1]}`;
}

export function buildTourFaq(tour: Tour): FaqItem[] {
  const fullTitle = `${tour.title}${tour.italicTitle ? " " + tour.italicTitle : ""}`.trim();
  const days = tour.itinerary.length;
  const cities = Array.from(
    new Set(
      tour.itinerary
        .map((d) => {
          const titleParts = d.title.split("·").map((s) => s.trim());
          return titleParts.length > 1 ? titleParts[1] : "";
        })
        .filter(Boolean),
    ),
  );

  const faq: FaqItem[] = [
    {
      q: `What does the ${fullTitle} tour include?`,
      a: `The ${fullTitle} tour includes ${joinList(tour.includes)}. Group size ranges from ${tour.groupSize}. Lodging, ground transport between cities, English-speaking trip leader on the ground, and a custom itinerary brief sent to each traveler before departure are part of every Odisea tour.`,
    },
    {
      q: `How long is the ${fullTitle} tour and where does it run?`,
      a: `The standard length is ${tour.duration}${days > 0 ? ` across ${days} structured days` : ""}${cities.length > 0 ? `, with stops in ${joinList(cities.slice(0, 5))}` : ""}. Dates can be shifted to match school calendars, club seasons or corporate diaries.`,
    },
    {
      q: `Who is the ${fullTitle} tour designed for?`,
      a: `${tour.tagline} Suitable group profile: ${tour.groupSize}. Our team has been running Spain group travel since 2005, with experience across youth clubs, US and UK schools, university groups, veterans associations and corporate teams.`,
    },
    {
      q: `How do I book the ${fullTitle} tour and what is the typical price range?`,
      a: `Booking starts with a free 15 to 30 minute planning call where we confirm dates, group size and inclusions. A custom quote follows within 48 hours with a per-traveler price. Pricing varies by season, group size and lodging tier. Final terms include a refundable deposit and tiered cancellation policy. Contact bookings@odisea-tours.com or use the plan-your-tour form.`,
    },
  ];

  // Custom, query-targeted FAQs come first so the highest-intent answer leads
  // both the on-page list and the FAQPage schema.
  return [...(tour.faq ?? []), ...faq];
}
