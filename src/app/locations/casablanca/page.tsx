'use client';

import { useState, useEffect } from 'react';
import MenuSection from '@/components/MenuSection';
import BookingWidget from '@/components/BookingWidget';

export default function CasablancaBranch() {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<'EN' | 'FR'>;
      setLang(customEvent.detail);
    };
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Bombay Casablanca",
    "image": "https://bombaydar.com/images/casablanca_interior.png",
    "@id": "https://bombaydar.com/locations/casablanca",
    "url": "https://bombaydar.com/locations/casablanca",
    "telephone": "+212 613-727362",
    "priceRange": "$$",
    "menu": "https://bombaydar.com/locations/casablanca#menu",
    "servesCuisine": "Indian, Punjabi, Halal",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Boulevard Ghandi, Maârif",
      "addressLocality": "Casablanca",
      "addressCountry": "MA"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "23:30"
      }
    ]
  };

  const copy = {
    title: { EN: "Bombay Casablanca", FR: "Bombay Casablanca" },
    subtitle: { EN: "A refined Indian dining escape on Boulevard Ghandi.", FR: "Une évasion gastronomique indienne sur le Boulevard Ghandi." },
    tagline: { 
      EN: "Located on the vibrant Boulevard Ghandi in the Maârif district, Bombay Casablanca brings Chef Surender's culinary expertise to the economic capital. Experience signature North Indian recipes in an upscale, contemporary dining lounge.", 
      FR: "Situé sur le Boulevard Ghandi dans le quartier de Maârif, Bombay Casablanca apporte le savoir-faire culinaire du Chef Surender dans la capitale économique. Savourez nos recettes signatures du nord de l'Inde dans un salon moderne et raffiné." 
    },
    statusAlertTitle: { EN: "Casablanca Location Details", FR: "Détails de Casablanca" },
    statusAlertText: { 
      EN: "This branch is fully open for dine-in, takeaway, and group bookings. Cards are accepted at this location. Address: Boulevard Ghandi (near Maarif).", 
      FR: "Ce restaurant est ouvert pour les repas sur place, à emporter et les réservations de groupe. Les cartes bancaires sont acceptées. Adresse : Boulevard Ghandi." 
    },
    hoursTitle: { EN: "Opening Hours", FR: "Horaires d'Ouverture" },
    contactTitle: { EN: "Contact & Address", FR: "Contact & Adresse" },
    highlightsTitle: { EN: "Branch Highlights", FR: "Points Forts du Restaurant" },
    highlight1: { EN: "Upscale Modern Dining", FR: "Lounge Moderne et Chic" },
    highlight1Desc: { EN: "Intimate contemporary layouts paired with warm luxury accent lights.", FR: "Des agencements intimes et contemporains associés à des lumières chaleureuses." },
    highlight2: { EN: "Full Indian Menu", FR: "Carte Indienne Complète" },
    highlight2Desc: { EN: "Includes authentic chicken curries, tandoori meats, and Indo-Chinese favorites.", FR: "Comprend des currys authentiques, des grillades tandoori et des classiques indo-chinois." },
    highlight3: { EN: "Card Payments Accepted", FR: "Paiement par Carte" },
    highlight3Desc: { EN: "Unlike Marrakech, card payments are fully supported here.", FR: "Contrairement à Marrakech, les paiements par carte sont acceptés ici." }
  };

  return (
    <div className="location-page-wrapper">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />

      {/* Header Banner */}
      <section className="location-hero" style={{ backgroundImage: `url('/images/casablanca_interior.png')` }}>
        <div className="hero-overlay" />
        <div className="container location-hero-content animate-fade-in">
          <span className="location-badge gold-text">Casablanca Ghandi</span>
          <h1 className="font-serif location-title">{copy.title[lang]}</h1>
          <p className="location-subtitle">{copy.subtitle[lang]}</p>
        </div>
      </section>

      {/* Details section */}
      <section className="location-info-section container">
        <div className="location-details-grid">
          {/* Card 1: Hours */}
          <div className="info-card glass-panel">
            <h3 className="font-serif gold-text">{copy.hoursTitle[lang]}</h3>
            <ul className="info-list">
              <li>
                <span className="day">Open Daily:</span>
                <span className="time">12:00 - 23:30</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Contact */}
          <div className="info-card glass-panel">
            <h3 className="font-serif gold-text">{copy.contactTitle[lang]}</h3>
            <ul className="info-list flex-column">
              <li>
                <strong>Address:</strong>
                <p>Boulevard Ghandi, Maârif, Casablanca</p>
              </li>
              <li>
                <strong>Phone & Central Booking:</strong>
                <a href="tel:+212613727362" className="gold-text">+212 613-727362</a>
              </li>
              <li>
                <strong>Email:</strong>
                <a href="mailto:Indian.maroc@gmail.com">Indian.maroc@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Card 3: Alert Status */}
          <div className="info-card glass-panel booking-alert-card">
            <h3 className="font-serif">{copy.statusAlertTitle[lang]}</h3>
            <p>{copy.statusAlertText[lang]}</p>
          </div>
        </div>

        {/* Narrative & Highlights */}
        <div className="location-narrative-section">
          <div className="narrative-content">
            <h2 className="font-serif gold-text">{lang === 'EN' ? 'Modern Indian Lounge' : 'Salon Indien Contemporain'}</h2>
            <p>{copy.tagline[lang]}</p>
          </div>
          
          <div className="highlights-wrapper">
            <h4 className="highlights-title font-serif">{copy.highlightsTitle[lang]}</h4>
            <div className="highlight-item">
              <span className="highlight-icon">🍽️</span>
              <div className="highlight-text">
                <h5>{copy.highlight1[lang]}</h5>
                <p>{copy.highlight1Desc[lang]}</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🔥</span>
              <div className="highlight-text">
                <h5>{copy.highlight2[lang]}</h5>
                <p>{copy.highlight2Desc[lang]}</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">💳</span>
              <div className="highlight-text">
                <h5>{copy.highlight3[lang]}</h5>
                <p>{copy.highlight3Desc[lang]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="location-menu-section" id="menu">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label gold-text">{lang === 'EN' ? 'Dine With Us' : 'Dîner Chez Nous'}</span>
            <h2 className="section-title font-serif">{lang === 'EN' ? 'The Casablanca Menu' : 'Le Menu de Casablanca'}</h2>
            <div className="section-divider-center" />
          </div>
          <MenuSection />
        </div>
      </section>

      {/* Booking Form */}
      <section className="location-booking-section">
        <div className="container">
          <BookingWidget />
        </div>
      </section>
    </div>
  );
}
