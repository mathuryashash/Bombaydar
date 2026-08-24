import type { Metadata } from "next";
import MenuSection from "@/components/MenuSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateMenuSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Menu: North Indian Food in Marrakech & Casablanca — Tandoor, Curries, Biryani",
  description: "Full menu of Bombay Restaurant Morocco. Clay-pot biryani, butter chicken, tandoor grills, fresh naan & Indo-Chinese favorites. View prices for Marrakech (Gueliz & Medina) and Casablanca.",
  openGraph: {
    title: "Bombay Restaurant Menu — North Indian Cuisine in Marrakech & Casablanca",
    description: "Clay-pot biryani, butter chicken, tandoor grills, fresh naan & more. Full menu with prices.",
    url: "https://www.bombaydar.com/menu",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/web/food_butter_chicken_thali.jpg",
        width: 1200,
        height: 630,
        alt: "Butter chicken thali at Bombay Restaurant Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombay Restaurant Menu — Indian Food in Morocco",
    description: "Clay-pot biryani, tandoor grills, curries & naan. Full menu with prices.",
    images: ["/images/web/food_butter_chicken_thali.jpg"],
  },
  alternates: {
    canonical: "https://www.bombaydar.com/menu",
  },
};

export default function MenuPage() {
  return (
    <div className="location-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateMenuSchema('marrakech')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateMenuSchema('casablanca')) }}
      />

      <section className="relative pt-32 pb-10 bg-black/40" aria-label="Page header">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ name: "Menu", url: "/menu" }]} />
          <span className="text-xs uppercase tracking-widest text-gold font-bold block mt-6 mb-2">Dine With Us</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
            The Bombay Menu
          </h1>
          <p className="text-lg text-sand max-w-2xl font-sans font-light">
            Authentic home-style North Indian &amp; Punjabi cuisine, cooked over clay fire since 2004.
            Select a branch to see location pricing.
          </p>
        </div>
      </section>

      <section className="py-12" id="menu" aria-label="Full menu">
        <div className="container mx-auto px-4">
          <MenuSection defaultBranch="all" />
        </div>
      </section>
    </div>
  );
}
