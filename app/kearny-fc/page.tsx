import type { Metadata } from "next";
import { hasAccess } from "@/lib/proposals";
import PasswordGate from "../for/[slug]/PasswordGate";
import KearnyView from "./KearnyView";

const SLUG = "kearny-fc";
const CLUB_NAME = "Kearny FC";

export const metadata: Metadata = {
  title: "Kearny FC · Spain 2027 Tour Options · Odisea Tours",
  description:
    "Two Spain tour options for Kearny FC families: a 10-day cultural Spain tour and a 10-day Donosti Cup tournament tour. Private proposal.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function KearnyFCPage() {
  const ok = await hasAccess(SLUG);
  if (!ok) {
    return <PasswordGate slug={SLUG} clubName={CLUB_NAME} />;
  }
  return <KearnyView />;
}
