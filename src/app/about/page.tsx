import type { Metadata } from "next";
import { aboutSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Chef Surender Kumar Thakur: 20+ Years of Authentic Indian Cuisine in Morocco",
  description: "From Oberoi Udaivilas to Marrakech. Chef Surender Kumar Thakur's culinary journey, clay-pot traditions & catering for weddings across Morocco.",
  openGraph: {
    title: "Chef Surender Kumar Thakur: 20+ Years of Authentic Indian Cuisine in Morocco",
    description: "From Oberoi Udaivilas to Marrakech. Chef Surender Kumar Thakur's culinary journey, clay-pot traditions & catering for weddings across Morocco.",
    url: "https://bomdaymaroc.com/about",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "article",
    publishedTime: "2004-01-01",
    authors: ["Chef Surender Kumar Thakur"],
    images: [
      {
        url: "/images/web/chef_surender_solo_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Chef Surender Kumar Thakur - Owner & Head Chef of Bombay Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chef Surender Kumar Thakur: 20+ Years of Authentic Indian Cuisine in Morocco",
    description: "From Oberoi Udaivilas to Marrakech. Chef Surender's culinary journey & clay-pot traditions.",
    images: ["/images/web/chef_surender_solo_portrait.jpg"],
  },
  alternates: {
    canonical: "https://bomdaymaroc.com/about",
  },
};

import AboutClient from "./AboutClient";

export default function AboutPage() {
  return <AboutClient />;
}