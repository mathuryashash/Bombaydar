import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { organizationSchema } from "@/lib/schema";
import ScrollAnimationInitializer from "@/components/ScrollAnimationInitializer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bombaydar.com"),
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
    url: "https://www.bombaydar.com",
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
    canonical: "https://www.bombaydar.com",
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
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Blocking (not next/script) so the saved theme applies before first paint - avoids a flash of the wrong theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}`,
          }}
        />
        {/* Marks JS availability ASAP: scroll-reveal CSS only hides content when html.js
            is present, so a failed hydration can never leave blank sections. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js');`,
          }}
        />
      </head>
      <body>
        <div className="scroll-progress-bar" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <ScrollAnimationInitializer />
      </body>
    </html>
  );
}