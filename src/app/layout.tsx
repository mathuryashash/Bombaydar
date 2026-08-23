import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { organizationSchema } from "@/lib/schema";
import ScrollAnimationInitializer from "@/components/ScrollAnimationInitializer";

export const metadata: Metadata = {
  title: {
    default: "Bombay Restaurant: Authentic North Indian & Punjabi Cuisine in Marrakech & Casablanca",
    template: "%s | Bombay Restaurant Morocco",
  },
  description: "Experience Chef Surender Kumar Thakur's 20-year legacy. Clay-pot biryani, tandoor grills & rooftop dining in Marrakech (Gueliz & Medina) and Casablanca. Book your table.",
  keywords: [
    "Indian restaurant Marrakech",
    "restaurant indien Marrakech",
    "Medina rooftop dining",
    "Indian restaurant Casablanca",
    "halal Indian food Morocco",
    "Chef Surender Kumar Thakur",
    "Bombay Marrakech",
    "Bombay Medina",
    "Bombay Casablanca",
    "clay pot biryani Morocco",
    "tandoor grill Marrakech",
    "North Indian cuisine Morocco",
  ],
  authors: [{ name: "Chef Surender Kumar Thakur" }],
  creator: "Bombay Restaurant",
  publisher: "Bombay Restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Bombay Restaurant: Authentic North Indian & Punjabi Cuisine in Morocco",
    description: "Experience Chef Surender Kumar Thakur's 20-year legacy. Clay-pot biryani, tandoor grills & rooftop dining in Marrakech & Casablanca.",
    url: "https://bombaydar.com",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/web/hero_royal_lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Bombay Restaurant Marrakech - Authentic North Indian dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombay Restaurant: Authentic North Indian Cuisine in Morocco",
    description: "Chef Surender's 20-year legacy. Clay-pot biryani, tandoor grills & rooftop dining.",
    images: ["/images/web/hero_royal_lounge.jpg"],
    creator: "@bombay_marrakech",
  },
  alternates: {
    canonical: "https://bombaydar.com",
    languages: {
      en: "https://bombaydar.com/en",
      fr: "https://bombaydar.com/fr",
      "x-default": "https://bombaydar.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="lazyOnload"
        />
      </head>
      <body>
        <div className="scroll-progress-bar" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <ScrollAnimationInitializer />
      </body>
    </html>
  );
}