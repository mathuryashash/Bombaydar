import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChefClient from "./ChefClient";

export const metadata: Metadata = {
  title: "Chef Surender Kumar Thakur — 20+ Years of Authentic Indian Cuisine in Morocco",
  description: "From Oberoi Udaivilas to Bombay Dreams Hong Kong to Marrakech. Meet the master chef behind Morocco's most authentic North Indian cuisine — tandoor, clay-pot biryani & Mughlai traditions since 2004.",
  openGraph: {
    title: "Chef Surender Kumar Thakur — Master of North Indian Cuisine in Morocco",
    description: "Oberoi-trained, Hong Kong-tested, Moroccan pioneer since 2004. Meet the chef.",
    url: "https://www.bombaydar.com/chef",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/images/web/chef_surender_solo_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Chef Surender Kumar Thakur, owner and head chef of Bombay Restaurant Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chef Surender Kumar Thakur — Bombay Restaurant Morocco",
    description: "20+ years of authentic North Indian cuisine in Morocco.",
    images: ["/images/web/chef_surender_solo_portrait.jpg"],
  },
  alternates: {
    canonical: "https://www.bombaydar.com/chef",
  },
};

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  if (!['en', 'fr'].includes(locale)) {
    notFound();
  }

  return <ChefClient locale={locale as 'en' | 'fr'} />;
}