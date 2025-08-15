import { Metadata } from "next";
import TripDetails from "./trip-details";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id: tripId } = await params;
  const trip = await fetch(
    `https://tripcraft.amitwani.dev/api/plans/${tripId}`
  ).then((res) => res.json());

  if (!trip.success || !trip.tripPlan) {
    return {
      title: "Trip Not Found",
    };
  }

  const tripPlan = trip.tripPlan;
  const destination = tripPlan.destination || "your amazing trip";

  return {
    title: `Your Trip to ${destination} | TripCraft AI`,
    description: `An AI-crafted itinerary for your trip to ${destination}. View your flights, hotels, and daily plans.`,
    openGraph: {
      title: `Your Trip to ${destination} | TripCraft AI`,
      description: `An AI-crafted itinerary for your trip to ${destination}.`,
      url: `https://tripcraft.amitwani.dev/plan/${tripId}`,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `TripCraft AI trip to ${destination}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Your Trip to ${destination} | TripCraft AI`,
      description: `An AI-crafted itinerary for your trip to ${destination}.`,
      images: [`/og.png`],
    },
  };
}

export default function TripDetailsPage() {
  return <TripDetails />;
}
