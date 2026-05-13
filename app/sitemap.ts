import type { MetadataRoute } from "next";
import { POSTS } from "@/content/journal";
import { TOURS } from "@/content/tours";
import { US_CITIES } from "@/content/us-cities";
import { UK_CITIES } from "@/content/uk-cities";
import { AU_CITIES } from "@/content/australia-cities";

const SITE = "https://odisea-tours.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/tours`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE}/veterans`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/youth`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/schools`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/plan-your-tour`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/brand`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE}/destinations`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/destinations/barcelona`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/destinations/madrid`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/destinations/valencia`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/usa`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/uk`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/australia`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const usCityRoutes: MetadataRoute.Sitemap = US_CITIES.map((c) => ({
    url: `${SITE}/usa/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const ukCityRoutes: MetadataRoute.Sitemap = UK_CITIES.map((c) => ({
    url: `${SITE}/uk/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const auCityRoutes: MetadataRoute.Sitemap = AU_CITIES.map((c) => ({
    url: `${SITE}/australia/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const tourRoutes: MetadataRoute.Sitemap = TOURS.map((tour) => ({
    url: `${SITE}/tours/${tour.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const journalRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = [
    "dispatches",
    "field-notes",
  ].map((slug) => ({
    url: `${SITE}/journal/category/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...tourRoutes,
    ...journalRoutes,
    ...categoryRoutes,
    ...usCityRoutes,
    ...ukCityRoutes,
    ...auCityRoutes,
  ];
}
