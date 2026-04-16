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

export default function Page() {
  return <YouthClient />;
}
