import type { Metadata } from "next";
import SchoolsClient from "./client";

export const metadata: Metadata = {
  title: "School Football Tours to Spain — Safe, Educational, Unforgettable",
  description:
    "Educational football tours to Spain for school teams. Coaching, matches, cultural visits and stadium tours — fully organized with 24/7 bilingual supervision.",
  alternates: { canonical: "/schools" },
  openGraph: {
    url: "https://odisea-tours.com/schools",
    title: "School Football Tours to Spain",
    description:
      "Safe, educational football tours for school teams. Training, matches, stadium visits — fully supervised end-to-end.",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it just football or are there cultural activities?",
      acceptedAnswer: { "@type": "Answer", text: "Our school tours blend sport with culture. Expect coaching, matches, and stadium visits alongside city tours, museum visits, and local gastronomy experiences." },
    },
    {
      "@type": "Question",
      name: "What supervision is provided?",
      acceptedAnswer: { "@type": "Answer", text: "Odisea Tours staff are with your group 24/7. Our bilingual team handles all logistics, transport, and coordination so teachers can focus on the students." },
    },
    {
      "@type": "Question",
      name: "What group sizes do you accommodate?",
      acceptedAnswer: { "@type": "Answer", text: "We work with school groups of any size, from 15 to over 100 students. Every itinerary is custom-built around your group's needs and budget." },
    },
  ],
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
