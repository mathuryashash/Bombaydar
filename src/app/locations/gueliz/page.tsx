import type { Metadata } from "next";
import { guelizSchema, faqSchema, generateMenuSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bombay Marrakech Gueliz: Flagship Indian Restaurant in Ville Nouvelle",
  description: "Original Bombay location since 2004. Art Deco lounge, clay-pot biryani, tandoor grills. Open Tue-Sun 12-23h. Book a table at Marrakech's premier Indian restaurant.",
  openGraph: {
    title: "Bombay Marrakech Gueliz: Flagship Indian Restaurant in Ville Nouvelle",
    description: "Original Bombay location since 2004. Art Deco lounge, clay-pot biryani, tandoor grills. Open Tue-Sun 12-23h.",
    url: "https://bombaydar.com/locations/gueliz",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/web/hero_royal_lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Bombay Marrakech Gueliz - Art Deco lounge interior with elegant seating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombay Marrakech Gueliz: Flagship Indian Restaurant",
    description: "Art Deco lounge, clay-pot biryani, tandoor grills since 2004.",
    images: ["/images/web/hero_royal_lounge.jpg"],
  },
  alternates: {
    canonical: "https://bombaydar.com/locations/gueliz",
    languages: {
      en: "https://bombaydar.com/en/locations/gueliz",
      fr: "https://bombaydar.com/fr/locations/gueliz",
      "x-default": "https://bombaydar.com/locations/gueliz",
    },
  },
};

import GuelizClient from "./GuelizClient";

export default function GuelizPage() {
  return <GuelizClient />;
}