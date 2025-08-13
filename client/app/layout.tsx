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
  title: "TripCraft AI",
  description: "Your Journey, Perfectly Crafted with Intelligence",
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
          src="https://mtwnanalytics.xyz/script.js"
          data-website-id="877ed4a3-5eb1-4243-b5b9-96b0a41b8056"
        />
      </body>
    </html>
  );
}
