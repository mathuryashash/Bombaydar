import type { Metadata } from "next";
import { medinaSchema, faqSchema, generateMenuSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Medina Rooftop Marrakech: Rooftop Indian Dining Near Jemaa el-Fnaa",
  description: "Dine under stars with Koutoubia views. Authentic North Indian & Mughlai cuisine. Open daily 12:30-23:30. Reserve now at Marrakech's best rooftop restaurant.",
  openGraph: {
    title: "Medina Rooftop Marrakech: Rooftop Indian Dining Near Jemaa el-Fnaa",
    description: "Dine under stars with Koutoubia views. Authentic North Indian & Mughlai cuisine. Open daily 12:30-23:30.",
    url: "https://bomdaymaroc.com/locations/medina",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/web/hero_medina_rooftop.jpg",
        width: 1200,
        height: 630,
        alt: "Medina Rooftop Marrakech - Rooftop terrace with panoramic Koutoubia views",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medina Rooftop Marrakech: Rooftop Indian Dining",
    description: "Koutoubia views, Mughlai cuisine, clay-pot biryani under the stars.",
    images: ["/images/web/hero_medina_rooftop.jpg"],
  },
  alternates: {
    canonical: "https://bomdaymaroc.com/locations/medina",
  },
};

import MedinaClient from "./MedinaClient";

export default function MedinaPage() {
  return <MedinaClient />;
}