import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tripcraft.amitwani.dev"),
  title: "TripCraft AI",
  description: "Your Journey, Perfectly Crafted with Intelligence",
  keywords: [
    "TripCraft AI",
    "AI Trip Planner",
    "Travel Planning",
    "Personalized Itinerary",
    "AI Travel Assistant",
  ],
  openGraph: {
    title: "TripCraft AI",
    description: "Your Journey, Perfectly Crafted with Intelligence",
    url: "https://tripcraft.amitwani.dev",
    siteName: "TripCraft AI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TripCraft AI",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TripCraft AI",
    description: "Your Journey, Perfectly Crafted with Intelligence",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
        <Script
          defer
          src="https://stat.scube.site/script.js"
          data-website-id="877ed4a3-5eb1-4243-b5b9-96b0a41b8056"
        />
      </body>
    </html>
  );
}
