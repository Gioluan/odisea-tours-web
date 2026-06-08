import type { Metadata } from "next";
import SchoolsClient from "./client";
import { SCHOOLS_FAQ } from "./faq";

export const metadata: Metadata = {
  title: "School Football Tours to Spain: Safe, Educational, Unforgettable",
  description:
    "Educational football tours to Spain for school teams. Coaching, matches, cultural visits and stadium tours, fully organized with 24/7 bilingual supervision.",
  alternates: { canonical: "/schools" },
  openGraph: {
    url: "https://odisea-tours.com/schools",
    title: "School Football Tours to Spain",
    description:
      "Safe, educational football tours for school teams. Training, matches, stadium visits, fully supervised end-to-end.",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Football Tours to Spain",
    description:
      "Safe, educational football tours for school teams. Training, matches, stadium visits, fully supervised end-to-end.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://odisea-tours.com" },
    { "@type": "ListItem", position: 2, name: "School Tours", item: "https://odisea-tours.com/schools" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SCHOOLS_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SchoolsClient />
    </>
  );
}
