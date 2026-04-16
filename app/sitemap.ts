import type { MetadataRoute } from "next";
import { POSTS } from "@/content/journal";
import { TOURS } from "@/content/tours";

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
  ];

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

  return [...staticRoutes, ...tourRoutes, ...journalRoutes];
}
