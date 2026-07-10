import { TOURS } from "@/content/tours";

/**
 * Compact knowledge base for the site concierge, derived from the structured
 * tour fields. Prices are deliberately EXCLUDED: the concierge must never quote
 * a figure, it routes pricing to a call or a quote. Descriptions and free-text
 * FAQ answers (which sometimes carry prices) are not included here on purpose.
 */
export function buildTourKB(): string {
  const lines: string[] = [];

  for (const t of TOURS) {
    const title = [t.title, t.italicTitle].filter(Boolean).join(" ").trim();
    lines.push(`### ${title}  (slug: ${t.slug})`);
    lines.push(`Tagline: ${t.tagline}`);
    lines.push(`Length: ${t.duration}. Group size: ${t.groupSize}.`);
    if (t.includes?.length) {
      lines.push("Includes:");
      for (const inc of t.includes) lines.push(`  - ${inc}`);
    }
    if (t.itinerary?.length) {
      const route = t.itinerary
        .map((d) => d.title)
        .filter(Boolean)
        .join(" → ");
      lines.push(`Day-by-day: ${route}`);
    }
    lines.push("");
  }

  return lines.join("\n").trim();
}

export const ABOUT_ODISEA = `Odisea Tours is a Spain-based group travel company running sport, school,
cultural and culinary tours across Spain since 2005. It operates under Ground Agents Solutions S.L.
The founder and director is Juan Sanchez. The team is remote-first, based in Castellón, with trip
leaders on the ground in Madrid, Barcelona and Valencia. Primary markets are the USA and Australia.
Every tour is private and fully custom-built for the group: you tell Odisea your dates, group size
and interests, and the team designs the trip and sends a per-traveler quote. All tours are bilingual
with 24/7 on-the-ground support in Spain. Transport is by private coach throughout; international
flights are always quoted separately from ground services. Our team has hosted 200+ groups since 2005.`;

export const CONTACT_FACTS = `Discovery call (free, 30 minutes): https://calendly.com/juan-odisea-tours/30min
Email: bookings@odisea-tours.com
Phone / WhatsApp: +34 670 059 797
Website: https://odisea-tours.com (see /tours, /faq, and /plan-your-tour)`;
