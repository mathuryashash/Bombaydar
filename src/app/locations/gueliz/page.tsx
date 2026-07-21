'use client';

import { useState, useEffect } from 'react';
import MenuSection from '@/components/MenuSection';
import BookingWidget from '@/components/BookingWidget';

export default function GuelizBranch() {
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
    "name": "Bombay Marrakech (Gueliz)",
    "image": "https://bombaydar.com/images/butter_chicken.png",
    "@id": "https://bombaydar.com/locations/gueliz",
    "url": "https://bombaydar.com/locations/gueliz",
    "telephone": "+212 613-727362",
    "priceRange": "$$",
    "menu": "https://bombaydar.com/locations/gueliz#menu",
    "servesCuisine": "Indian, Punjabi, Halal",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7, Rue Ibn Zaidoun",
      "addressLocality": "Marrakech",
      "postalCode": "40000",
      "addressCountry": "MA"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "18:00",
        "closes": "23:00"
      }
    ]
  };

  const copy = {
    title: { EN: "Bombay Marrakech — Gueliz", FR: "Bombay Marrakech — Gueliz" },
    subtitle: { EN: "Our original flagship restaurant in modern Marrakech.", FR: "Notre restaurant historique dans le Marrakech moderne." },
    tagline: { 
      EN: "Steeped in rich Indian hospitality, Gueliz offers the perfect setting for intimate dinners and authentic Punjabi flavors in a warm, plush interior.", 
      FR: "Empreint de la chaleureuse hospitalité indienne, Gueliz offre le cadre idéal pour des dîners intimes et des saveurs authentiques du Pendjab dans un intérieur cossu." 
    },
    cashAlertTitle: { EN: "Cash Payments Only", FR: "Paiements en Espèces Uniquement" },
    cashAlertText: { 
      EN: "Please note that our Gueliz branch only accepts cash payments (MAD, EUR, USD). Credit cards are not supported at this location.", 
      FR: "Veuillez noter que notre établissement de Gueliz accepte uniquement les paiements en espèces. Les cartes bancaires ne sont pas acceptées." 
    },
    hoursTitle: { EN: "Opening Hours", FR: "Horaires d'Ouverture" },
    contactTitle: { EN: "Contact & Address", FR: "Contact & Adresse" },
    highlightsTitle: { EN: "Branch Highlights", FR: "Points Forts du Restaurant" },
    highlight1: { EN: "Halal Home-Style Kitchen", FR: "Cuisine Familiale Halal" },
    highlight1Desc: { EN: "Authentic spice blends prepared daily by Chef Surender Kumar.", FR: "Mélanges d'épices authentiques préparés quotidiennement par le Chef Surender." },
    highlight2: { EN: "Bollywood Lounge Ambiance", FR: "Ambiance Lounge Bollywood" },
    highlight2Desc: { EN: "Plush seating, warm lighting, and traditional Indian background tracks.", FR: "Sièges en velours, éclairage chaleureux et musique de fond indienne." },
    highlight3: { EN: "Bespoke Spiciness", FR: "Épices sur Mesure" },
    highlight3Desc: { EN: "Every curry can be customized to your precise spice preference on request.", FR: "Chaque curry peut être personnalisé selon votre préférence d'épices sur demande." }
  };

  return (
    <div className="location-page-wrapper">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />

      {/* Header Banner */}
      <section className="location-hero" style={{ backgroundImage: `url('/images/butter_chicken.png')` }}>
        <div className="hero-overlay" />
        <div className="container location-hero-content animate-fade-in">
          <span className="location-badge">Marrakech Flagship</span>
          <h1 className="font-serif location-title">{copy.title[lang]}</h1>
          <p className="location-subtitle">{copy.subtitle[lang]}</p>
        </div>
      </section>

      {/* Details section */}
      <section className="location-info-section container">
        <div className="location-details-grid">
          {/* Card 1: Hours */}
          <div className="info-card glass-panel">
            <h3 className="font-serif">{copy.hoursTitle[lang]}</h3>
            <ul className="info-list">
              <li>
                <span className="day">Tuesday - Sunday:</span>
                <span className="time">12:00 - 23:00</span>
              </li>
              <li>
                <span className="day">Monday:</span>
                <span className="time">18:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Contact */}
          <div className="info-card glass-panel">
            <h3 className="font-serif">{copy.contactTitle[lang]}</h3>
            <ul className="info-list flex-column">
              <li>
                <strong>Address:</strong>
                <p>7, Rue Ibn Zaidoun, Gueliz, Marrakech 40000</p>
              </li>
              <li>
                <strong>Phone:</strong>
                <a href="tel:+212613727362" className="gold-accent">+212 613-727362</a>
              </li>
              <li>
                <strong>Secondary Phone:</strong>
                <a href="tel:+212600919304">+212 600-919304</a>
              </li>
            </ul>
          </div>

          {/* Card 3: Alert cash */}
          <div className="info-card glass-panel cash-alert-card">
            <h3 className="font-serif">{copy.cashAlertTitle[lang]}</h3>
            <p>{copy.cashAlertText[lang]}</p>
          </div>
        </div>

        {/* Narrative & Highlights */}
        <div className="location-narrative-section">
          <div className="narrative-content">
            <h2 className="font-serif">{lang === 'EN' ? 'The Spirit of Gueliz' : 'L\'Esprit de Gueliz'}</h2>
            <p>{copy.tagline[lang]}</p>
          </div>
          
          <div className="highlights-wrapper">
            <h4 className="highlights-title font-serif">{copy.highlightsTitle[lang]}</h4>
            <div className="highlight-item">
              <span className="highlight-icon">🟢</span>
              <div className="highlight-text">
                <h5>{copy.highlight1[lang]}</h5>
                <p>{copy.highlight1Desc[lang]}</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🎵</span>
              <div className="highlight-text">
                <h5>{copy.highlight2[lang]}</h5>
                <p>{copy.highlight2Desc[lang]}</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🌶️</span>
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
            <span className="section-label">{lang === 'EN' ? 'Dine With Us' : 'Dîner Chez Nous'}</span>
            <h2 className="section-title font-serif">{lang === 'EN' ? 'The Gueliz Menu' : 'Le Menu de Gueliz'}</h2>
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
