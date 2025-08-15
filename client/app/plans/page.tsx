import { Metadata } from "next";
import PlansList from "./plans-list";

export const metadata: Metadata = {
  title: "Your Trip Plans | TripCraft AI",
  description:
    "View and manage all your AI-generated travel itineraries. Your adventures are saved here.",
  openGraph: {
    title: "Your Trip Plans | TripCraft AI",
    description: "Access your saved travel plans.",
    url: "https://tripcraft.amitwani.dev/plans",
  },
  twitter: {
    title: "Your Trip Plans | TripCraft AI",
    description: "Access your saved travel plans.",
  },
};

export default function PlansPage() {
  return <PlansList />;
}
