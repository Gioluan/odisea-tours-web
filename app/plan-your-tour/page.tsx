import type { Metadata } from "next";
import PlanYourTourClient from "./client";

export const metadata: Metadata = {
  title: "Plan Your Football Tour to Spain — Free Custom Itinerary",
  description:
    "Tell us about your team and we'll build a custom football tour itinerary to Spain — flights, hotels, pitches, matches and stadium visits. Free, no obligation.",
  alternates: { canonical: "/plan-your-tour" },
  openGraph: {
    url: "https://odisea-tours.com/plan-your-tour",
    title: "Plan Your Football Tour to Spain",
    description:
      "Free custom itinerary for your football tour to Spain. Tell us about your team and we'll handle the rest.",
  },
};

export default function Page() {
  return <PlanYourTourClient />;
}
