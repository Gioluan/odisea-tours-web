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

export default function Page() {
  return <SchoolsClient />;
}
