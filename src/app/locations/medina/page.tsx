'use client';

import { useState, useEffect } from 'react';
import MenuSection from '@/components/MenuSection';
import BookingWidget from '@/components/BookingWidget';

export default function MedinaBranch() {
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
    "name": "Bombay Medina Rooftop",
    "image": "https://bombaydar.com/images/rooftop_medina_view.png",
    "@id": "https://bombaydar.com/locations/medina",
    "url": "https://bombaydar.com/locations/medina",
    "telephone": "+212 613-727362",
    "priceRange": "$$$",
    "menu": "https://bombaydar.com/locations/medina#menu",
    "servesCuisine": "Indian, Punjabi, Halal",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Derb Dabachi",
      "addressLocality": "Marrakech Medina",
      "postalCode": "40000",
      "addressCountry": "MA"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "12:00",
        "closes": "00:00"
      }
    ]
  };

  const copy = {
    title: { EN: "Bombay Medina Rooftop", FR: "Bombay Médina Rooftop" },
    subtitle: { EN: "Dine under the stars in the historic heart of Marrakech.", FR: "Dînez sous les étoiles au cœur historique de Marrakech." },
    tagline: { 
      EN: "Perched high above Derb Dabachi, steps away from the iconic Jemaa el-Fnaa square, Bombay Medina combines Chef Surender's culinary mastery with spectacular panoramic views of the Atlas mountains and the historic city skyline.", 
      FR: "Perché au-dessus de Derb Dabachi, à deux pas de la place Jemaa el-Fnaa, Bombay Médina associe la maîtrise culinaire du Chef Surender à des vues panoramiques spectaculaires sur l'Atlas et la skyline historique de la ville." 
    },
    bookingAlertTitle: { EN: "Rooftop Table Advisory", FR: "Conseil de Réservation" },
    bookingAlertText: { 
      EN: "Rooftop terrace seating is highly sought after, especially during sunset. We recommend booking in advance. Cash payments are preferred.", 
      FR: "Les places sur la terrasse du toit sont très demandées, surtout au coucher du soleil. Réservation recommandée. Paiement en espèces privilégié." 
    },
    hoursTitle: { EN: "Opening Hours", FR: "Horaires d'Ouverture" },
    contactTitle: { EN: "Contact & Address", FR: "Contact & Adresse" },
    highlightsTitle: { EN: "Branch Highlights", FR: "Points Forts du Restaurant" },
    highlight1: { EN: "Panoramic Skyline Views", FR: "Vues Panoramiques" },
    highlight1Desc: { EN: "Breathtaking overlooks of Medina rooftops and the Koutoubia Mosque silhouette.", FR: "Surplomb époustouflant des toits de la Médina et silhouette de la Koutoubia." },
    highlight2: { EN: "Al Fresco Dining", FR: "Dîner en Plein Air" },
    highlight2Desc: { EN: "Stunning open terrace set with glowing lanterns and brass tableware.", FR: "Superbe terrasse ouverte ornée de lanternes lumineuses et vaisselle en laiton." },
    highlight3: { EN: "Rooftop Dinner spend", FR: "Dîner Gastronomique" },
    highlight3Desc: { EN: "Average spend is 350-400 MAD/head. Worth every moment.", FR: "Dépense moyenne de 350-400 MAD par personne. Un moment inoubliable." }
  };

  return (
    <div className="location-page-wrapper">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />

      {/* Header Banner */}
      <section className="location-hero" style={{ backgroundImage: `url('/images/rooftop_medina_view.png')` }}>
        <div className="hero-overlay" />
        <div className="container location-hero-content animate-fade-in">
          <span className="location-badge gold-text">Medina Rooftop View</span>
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
                <span className="time">12:00 - 00:00 (Midnight)</span>
              </li>
              <li className="sunset-note">
                <span>* Ideal sunset seating starts around 18:30.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Contact */}
          <div className="info-card glass-panel">
            <h3 className="font-serif gold-text">{copy.contactTitle[lang]}</h3>
            <ul className="info-list flex-column">
              <li>
                <strong>Address:</strong>
                <p>Derb Dabachi, Marrakech Medina (near Jemaa el-Fnaa)</p>
              </li>
              <li>
                <strong>Central Reservation:</strong>
                <a href="tel:+212613727362" className="gold-text">+212 613-727362</a>
              </li>
              <li>
                <strong>Email:</strong>
                <a href="mailto:Indian.maroc@gmail.com">Indian.maroc@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Card 3: Alert Booking */}
          <div className="info-card glass-panel booking-alert-card">
            <h3 className="font-serif">{copy.bookingAlertTitle[lang]}</h3>
            <p>{copy.bookingAlertText[lang]}</p>
          </div>
        </div>

        {/* Narrative & Highlights */}
        <div className="location-narrative-section">
          <div className="narrative-content">
            <h2 className="font-serif gold-text">{lang === 'EN' ? 'Dining Above the Medina' : 'Dîner au-dessus de la Médina'}</h2>
            <p>{copy.tagline[lang]}</p>
          </div>
          
          <div className="highlights-wrapper">
            <h4 className="highlights-title font-serif">{copy.highlightsTitle[lang]}</h4>
            <div className="highlight-item">
              <span className="highlight-icon">🌅</span>
              <div className="highlight-text">
                <h5>{copy.highlight1[lang]}</h5>
                <p>{copy.highlight1Desc[lang]}</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">✨</span>
              <div className="highlight-text">
                <h5>{copy.highlight2[lang]}</h5>
                <p>{copy.highlight2Desc[lang]}</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">⭐</span>
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
            <span className="section-label gold-text">{lang === 'EN' ? 'Medina Rooftop Specialties' : 'Spécialités de la Médina'}</span>
            <h2 className="section-title font-serif">{lang === 'EN' ? 'The Medina Menu' : 'Le Menu de la Médina'}</h2>
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
