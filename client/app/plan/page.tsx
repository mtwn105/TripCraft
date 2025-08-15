import { Metadata } from "next";
import PlanForm from "./plan-form";

export const metadata: Metadata = {
  title: "Plan a New Trip | TripCraft AI",
  description:
    "Start planning your next adventure. Tell us your destination, budget, and travel style, and let our AI create the perfect itinerary for you.",
  openGraph: {
    title: "Plan a New Trip | TripCraft AI",
    description: "Create a personalized travel plan in minutes.",
    url: "https://tripcraft.amitwani.dev/plan",
  },
  twitter: {
    title: "Plan a New Trip | TripCraft AI",
    description: "Create a personalized travel plan in minutes.",
  },
};

export default function PlanPage() {
  return <PlanForm />;
}
