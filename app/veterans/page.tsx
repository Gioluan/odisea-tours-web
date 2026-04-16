import type { Metadata } from "next";
import VeteransClient from "./client";

export const metadata: Metadata = {
  title: "Veterans Football Tours to Spain — Train, Play, Tour",
  description:
    "Veteran football tours in Spain for over-35 clubs. Play Spanish sides, train at pro facilities, visit Camp Nou & Bernabeu. Fully organized door to door by Odisea Tours.",
  alternates: { canonical: "/veterans" },
  openGraph: {
    url: "https://odisea-tours.com/veterans",
    title: "Veterans Football Tours to Spain",
    description:
      "Over-35 football tours to Spain. Play local Spanish clubs, train at pro facilities, visit iconic stadiums. Families welcome.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://odisea-tours.com" },
    { "@type": "ListItem", position: 2, name: "Veterans Tours", item: "https://odisea-tours.com/veterans" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age group are veterans tours for?",
      acceptedAnswer: { "@type": "Answer", text: "Our veterans tours are designed for over-35 football clubs. Players of all ability levels are welcome." },
    },
    {
      "@type": "Question",
      name: "Are families included on veterans tours?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Partners and families travel with the group and enjoy their own cultural program while players train and play matches." },
    },
    {
      "@type": "Question",
      name: "What's included in the tour price?",
      acceptedAnswer: { "@type": "Answer", text: "Everything on the ground: hotels, meals, transfers, stadium visits, training sessions, matches, and 24/7 bilingual support. Flights are quoted separately." },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <VeteransClient />
    </>
  );
}
