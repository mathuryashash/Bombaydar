import type { Metadata } from "next";
import { casablancaSchema, faqSchema, generateMenuSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bombay Casablanca Maârif: Modern Indian Restaurant with Seafood & Cocktails",
  description: "Atlantic coastal elegance meets Indian gastronomy. Seafood curries, tandoor grills, card payments accepted. Open daily 12-23:30. Book your table in Casablanca.",
  openGraph: {
    title: "Bombay Casablanca Maârif: Modern Indian Restaurant with Seafood & Cocktails",
    description: "Atlantic coastal elegance meets Indian gastronomy. Seafood curries, tandoor grills, card payments accepted. Open daily 12-23:30.",
    url: "https://www.bombaydar.com/locations/casablanca",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/web/hero_casablanca_interior.jpg",
        width: 1200,
        height: 630,
        alt: "Bombay Casablanca Maârif - Modern dining room with open tandoor grill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombay Casablanca Maârif: Modern Indian Restaurant",
    description: "Seafood curries, tandoor grills, handcrafted mocktails. Card payments accepted.",
    images: ["/images/web/hero_casablanca_interior.jpg"],
  },
  alternates: {
    canonical: "https://www.bombaydar.com/locations/casablanca",
  },
};

import CasablancaClient from "./CasablancaClient";

export default function CasablancaPage() {
  return <CasablancaClient />;
}