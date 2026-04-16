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

export default function Page() {
  return <VeteransClient />;
}
