import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bombay Darbar | Authentic Indian Cuisine in Morocco",
  description: "Experience authentic, home-style North Indian & Punjabi cuisine by Chef Surender Kumar Thakur. Visit us in Marrakech (Gueliz & Medina Rooftop) and Casablanca.",
  keywords: "Indian restaurant Marrakech, Medina rooftop dining, Indian restaurant Casablanca, halal Indian food Morocco, Chef Surender Kumar, Bombay Marrakech, Bombay Medina, Bombay Ghandi",
  authors: [{ name: "Chef Surender Kumar Thakur" }],
  openGraph: {
    title: "Bombay Darbar | Authentic Indian Cuisine in Morocco",
    description: "Experience authentic home-style North Indian & Punjabi cuisine by Chef Surender Kumar Thakur. Visit us in Marrakech (Gueliz & Medina Rooftop) and Casablanca.",
    url: "https://bombaydar.com",
    siteName: "Bombay Darbar",
    locale: "en_US",
    type: "website",
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
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
