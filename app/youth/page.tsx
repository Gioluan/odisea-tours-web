import type { Metadata } from "next";
import YouthClient from "./client";

export const metadata: Metadata = {
  title: "Youth Football Tours to Spain — FC Barcelona, Valencia CF & More",
  description:
    "Youth academy football tours to Spain. Train with FC Barcelona coaches, play Spanish youth teams, tour La Masia. Safe, fully organized group travel from Odisea Tours.",
  alternates: { canonical: "/youth" },
  openGraph: {
    url: "https://odisea-tours.com/youth",
    title: "Youth Football Tours to Spain",
    description:
      "Train with FC Barcelona coaches, play Spanish youth sides, visit iconic stadiums. Safe, coach-led group travel for U-12 to U-18 squads.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://odisea-tours.com" },
    { "@type": "ListItem", position: 2, name: "Youth Tours", item: "https://odisea-tours.com/youth" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age groups do you cater for?",
      acceptedAnswer: { "@type": "Answer", text: "We organize tours for youth teams from U12 through U19, with training and match opponents matched to your players' age and level." },
    },
    {
      "@type": "Question",
      name: "How safe are the tours?",
      acceptedAnswer: { "@type": "Answer", text: "Safety is our top priority. Our bilingual staff are with your group 24/7, from airport arrival to departure. All tours are fully insured and bonded." },
    },
    {
      "@type": "Question",
      name: "Can we train at FC Barcelona?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We have a long-standing relationship with FC Barcelona's academy and can arrange training sessions at the Joan Gamper facility with FCB-certified coaches." },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <YouthClient />
    </>
  );
}
