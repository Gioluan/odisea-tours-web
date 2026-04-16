import type { Metadata } from "next";
import TeamClient from "./client";

export const metadata: Metadata = {
  title: "Meet the Odisea Tours Team — Spain, Middle East & USA",
  description:
    "The people behind every Odisea Tours sport tour. Local specialists in Spain, the Middle East and the USA — over 20 years of group sport tour experience.",
  alternates: { canonical: "/team" },
  openGraph: {
    url: "https://odisea-tours.com/team",
    title: "Meet the Odisea Tours Team",
    description:
      "Local specialists on the ground in Spain, the Middle East and the USA. Decades of combined experience organizing group sport tours.",
  },
};

export default function Page() {
  return <TeamClient />;
}
