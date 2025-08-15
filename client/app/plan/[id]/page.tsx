import { Metadata } from "next";
import TripDetails from "./trip-details";

export const metadata: Metadata = {
  title: "Your Trip Plan | TripCraft AI",
  description: "View your AI-crafted travel itinerary with flights, hotels, and daily plans.",
};

export default function TripDetailsPage() {
  return <TripDetails />;
}
