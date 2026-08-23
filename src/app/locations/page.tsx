import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SchemaScript from "@/components/SchemaScript";
import { organizationSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Locations",
  description: "Explore Bombay Restaurant's three unique locations: Bombay Marrakech Gueliz flagship, Medina Rooftop near Jemaa el-Fnaa, and Bombay Casablanca Maârif. Authentic North Indian cuisine across Morocco.",
  openGraph: {
    title: "Our Locations - Bombay Restaurant Morocco",
    description: "Three unique settings, one soul. Discover our restaurants in Marrakech Gueliz, Medina Rooftop, and Casablanca Maârif.",
    url: "https://bombaydar.com/locations",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/web/hero_royal_lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Bombay Restaurant locations in Morocco",
      },
    ],
  },
  alternates: {
    canonical: "https://bombaydar.com/locations",
    languages: {
      en: "https://bombaydar.com/en/locations",
      fr: "https://bombaydar.com/fr/locations",
      "x-default": "https://bombaydar.com/locations",
    },
  },
};

const locations = [
  {
    slug: "gueliz",
    name: { EN: "Bombay Marrakech Gueliz", FR: "Bombay Marrakech Guéliz" },
    shortName: { EN: "Bombay Marrakech", FR: "Bombay Marrakech" },
    subtitle: {
      EN: "Our original flagship restaurant in modern Marrakech.",
      FR: "Notre restaurant historique dans le Marrakech moderne."
    },
    description: {
      EN: "Nestled in Marrakech's chic Ville Nouvelle, Bombay Gueliz pays homage to the 1920s Art Deco dining saloons of Bombay's Fort district. Here, dark teakwood paneling, brass lanterns, and plush velvet seating create an intimate sanctuary for refined North Indian culinary craftsmanship.",
      FR: "Niché dans le quartier chic de la Ville Nouvelle à Marrakech, Bombay Guéliz rend hommage aux salons Art Déco des années 1920 du quartier du Fort de Bombay. Des boiseries sombres, lanternes en laiton et sièges en velours créent un sanctuaire intime."
    },
    image: "/images/web/hero_royal_lounge.jpg",
    imageAlt: {
      EN: "Bombay Marrakech Gueliz - Elegant Art Deco lounge interior with dark teakwood paneling, brass lanterns, and plush velvet seating",
      FR: "Bombay Marrakech Guéliz - Salon Art Déco élégant avec boiseries en teck, lanternes en laiton et sièges en velours"
    },
    hours: {
      EN: "Tue–Sun: 12:00–23:00 | Mon: 18:00–23:00",
      FR: "Mar–Dim: 12:00–23:00 | Lun: 18:00–23:00"
    },
    address: "7, Rue Ibn Zaidoun, Gueliz, Marrakech 40000",
    phone: "+212 613-727362",
    payment: "Cash only (MAD, EUR, USD)",
    highlight: {
      EN: "Art Deco Flagship Since 2004",
      FR: "Amiral Art Déco Depuis 2004"
    },
  },
  {
    slug: "medina",
    name: { EN: "Medina Rooftop", FR: "Médina Rooftop" },
    shortName: { EN: "Medina Rooftop", FR: "Médina Rooftop" },
    subtitle: {
      EN: "Dine under the Marrakech stars overlooking historic sights.",
      FR: "Dînez sous les étoiles de Marrakech surplombant les monuments."
    },
    description: {
      EN: "Suspended above the bustling souks near Jemaa el-Fnaa, our Rooftop offers breathtaking sunset views of the Koutoubia Mosque and Atlas Mountains. Combining authentic Moroccan riad architecture with royal Mughlai clay-pot cooking, dining under the starlit Marrakech sky is an unforgettable experience.",
      FR: "Suspendu au-dessus des souks animés près de Jemaa el-Fnaa, notre Rooftop offre une vue panoramique spectaculaire sur la Koutoubia et l'Atlas. Alliant l'architecture d'un riad marocain à la cuisine royale en pot d'argile, dîner sous les étoiles est une expérience inoubliable."
    },
    image: "/images/web/hero_medina_rooftop.jpg",
    imageAlt: {
      EN: "Medina Rooftop Marrakech - Rooftop terrace with panoramic views of Koutoubia Mosque and Atlas Mountains at sunset",
      FR: "Médina Rooftop Marrakech - Terrasse sur le toit avec vue panoramique sur la Koutoubia et l'Atlas au coucher du soleil"
    },
    hours: {
      EN: "Daily: 12:30–23:30",
      FR: "Quotidien: 12:30–23:30"
    },
    address: "Derb Dabachi, near Jemaa el-Fnaa, Marrakech Medina",
    phone: "+212 613-727362",
    payment: "Cash only (MAD, EUR, USD)",
    highlight: {
      EN: "Rooftop with Koutoubia Views",
      FR: "Rooftop avec Vue sur Koutoubia"
    },
  },
  {
    slug: "casablanca",
    name: { EN: "Bombay Casablanca", FR: "Bombay Casablanca" },
    shortName: { EN: "Bombay Casablanca", FR: "Bombay Casablanca" },
    subtitle: {
      EN: "A refined Indian dining escape in Casablanca.",
      FR: "Une évasion gastronomique indienne à Casablanca."
    },
    description: {
      EN: "Located along Boulevard Ghandi in Maârif, Bombay Casablanca bridges Atlantic coastal elegance with contemporary Indian gastronomy. Designed as a modern lounge with gold accents and open tandoor grills, it brings fresh ocean seafood curries, sizzlers, and handcrafted mocktails to Morocco's capital of style.",
      FR: "Situé le long du Boulevard Ghandi à Maârif, Bombay Casablanca associe l'élégance côtière de l'Atlantique à la gastronomie indienne contemporaine. Conçu comme un salon moderne avec grils tandoor ouverts, il propose des currys de fruits de mer et des boissons artisanales."
    },
    image: "/images/web/hero_casablanca_interior.jpg",
    imageAlt: {
      EN: "Bombay Casablanca Maârif - Modern dining room with open tandoor grill, gold accents, and contemporary coastal elegance",
      FR: "Bombay Casablanca Maârif - Salle à manger moderne avec gril tandoor ouvert, accents dorés et élégance côtière contemporaine"
    },
    hours: {
      EN: "Daily: 12:00–23:30",
      FR: "Quotidien: 12:00–23:30"
    },
    address: "Boulevard Ghandi, Maârif, Casablanca",
    phone: "+212 613-727362",
    payment: "Cash & Card accepted (MAD, EUR, USD)",
    highlight: {
      EN: "Seafood Curries & Card Payments",
      FR: "Currys de Fruits de Mer & Paiement par Carte"
    },
  },
];

export default function LocationsPage() {
  return (
    <div className="locations-index-wrapper">
      <SchemaScript schema={organizationSchema} />
      <SchemaScript schema={faqSchema} />
      
      {/* Hero Section */}
      <section className="locations-hero" style={{ backgroundImage: `url('/images/web/hero_royal_lounge.jpg')` }} aria-label="Bombay Restaurant locations hero">
        <div className="hero-overlay" />
        <div className="container location-hero-content reveal-on-scroll up">
          <span className="location-badge reveal-on-scroll left delay-1">Three Locations, One Soul</span>
          <h1 className="font-serif location-title reveal-on-scroll right delay-2">Our Restaurants</h1>
          <p className="location-subtitle reveal-on-scroll up delay-3">
            Experience authentic North Indian & Punjabi cuisine across three distinctive settings in Marrakech and Casablanca.
            Each location offers Chef Surender's signature clay-pot biryani, tandoor grills, and warm hospitality.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="locations-grid-section container section-reveal" aria-labelledby="locations-grid-title">
        <div className="section-header-center reveal-on-scroll up" style={{ marginBottom: "48px" }}>
          <span className="section-label">Explore Our Branches</span>
          <h2 id="locations-grid-title" className="section-title font-serif">Three Unique Settings</h2>
          <div className="section-divider-center" />
        </div>

        <div className="branches-grid stagger-reveal">
          {locations.map((location) => (
            <article key={location.slug} className="branch-card glass-panel">
              <Link href={`/locations/${location.slug}`} className="branch-link" aria-label={`View ${location.name.EN} details`}>
                <div className="branch-img-container">
                  <Image
                    src={location.image}
                    alt={location.imageAlt.EN}
                    width={400}
                    height={250}
                    className="branch-img"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="branch-highlight-badge">
                    <span>{location.highlight.EN}</span>
                  </div>
                </div>
                <div className="branch-card-content">
                  <h3 className="branch-name font-serif">{location.name.EN}</h3>
                  <p className="branch-subtitle">{location.subtitle.EN}</p>
                  <div className="branch-meta">
                    <div className="meta-item">
                      <span className="meta-icon" aria-hidden="true">📍</span>
                      <span>{location.address}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon" aria-hidden="true">🕐</span>
                      <span>{location.hours.EN}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon" aria-hidden="true">💳</span>
                      <span>{location.payment}</span>
                    </div>
                  </div>
                  <div className="branch-actions">
                    <span className="btn-secondary branch-btn" style={{ cursor: "pointer" }}>
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="locations-cta-section section-reveal" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-card glass-panel reveal-on-scroll up">
            <h2 id="cta-title" className="font-serif text-3xl md:text-4xl font-bold text-center mb-6">
              Ready to Experience Authentic Indian Cuisine?
            </h2>
            <p className="text-sand text-center max-w-2xl mx-auto mb-8 reveal-on-scroll up delay-1">
              Book your table at any of our three locations. Whether it's a romantic dinner at our Medina Rooftop,
              a family gathering at our Gueliz flagship, or a business lunch in Casablanca — we're ready to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll up delay-2">
              <Link href="/locations/gueliz#booking-anchor" className="btn-primary pulse-glow" style={{ textAlign: "center" }}>
                Book at Marrakech Gueliz
              </Link>
              <Link href="/locations/medina#booking-anchor" className="btn-primary" style={{ textAlign: "center" }}>
                Book at Medina Rooftop
              </Link>
              <Link href="/locations/casablanca#booking-anchor" className="btn-primary" style={{ textAlign: "center" }}>
                Book at Casablanca
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}