'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<'EN' | 'FR'>;
      setLang(customEvent.detail);
    };
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const content = {
    tagline: {
      EN: "Authentic, home-style North Indian & Punjabi cuisine. Preserving culinary heritage across Morocco since 2004.",
      FR: "Une cuisine authentique du nord de l'Inde et du Pendjab. Préservation de notre patrimoine culinaire au Maroc depuis 2004."
    },
    quickLinks: {
      EN: "Quick Links",
      FR: "Liens Rapides"
    },
    locations: {
      EN: "Our Locations",
      FR: "Nos Restaurants"
    },
    contact: {
      EN: "Central Booking",
      FR: "Réservations Centrales"
    },
    rights: {
      EN: "All rights reserved. Designed with passion.",
      FR: "Tous droits réservés. Conçu avec passion."
    }
  };

  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Brand Info */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Logo size={54} />
            <div className="logo-text-wrapper">
              <span className="logo-title font-serif gold-text">BOMBAY DARBAR</span>
              <span className="logo-subtitle">MOROCCO</span>
            </div>
          </Link>
          <p className="footer-tagline">{content.tagline[lang]}</p>
          <div className="footer-socials">
            <a href="https://instagram.com/bombay_marrakech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="social-icon">IG</span>
            </a>
            <a href="https://facebook.com/bombaymarrakechgueliz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="social-icon">FB</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4 className="footer-title">{content.quickLinks[lang]}</h4>
          <ul className="footer-links">
            <li><Link href="/">{lang === 'EN' ? 'Home' : 'Accueil'}</Link></li>
            <li><Link href="/about">{lang === 'EN' ? 'Brand Story' : 'Notre Histoire'}</Link></li>
            <li><Link href="/locations/gueliz">{lang === 'EN' ? 'Marrakech Gueliz' : 'Marrakech Gueliz'}</Link></li>
            <li><Link href="/locations/medina">{lang === 'EN' ? 'Medina Rooftop' : 'Médina Rooftop'}</Link></li>
            <li><Link href="/locations/casablanca">{lang === 'EN' ? 'Casablanca Outlet' : 'Restaurant Casablanca'}</Link></li>
          </ul>
        </div>

        {/* Locations Info */}
        <div className="footer-column">
          <h4 className="footer-title">{content.locations[lang]}</h4>
          <ul className="footer-locations-list">
            <li>
              <strong>Gueliz, Marrakech</strong>
              <p>7, Rue Ibn Zaidoun</p>
              <span className="footer-hours">Tue - Sun: 12:00 - 23:00 | Mon: 18:00 - 23:00</span>
            </li>
            <li>
              <strong>Medina Rooftop, Marrakech</strong>
              <p>Derb Dabachi, near Jemaa el-Fnaa</p>
              <span className="footer-hours">Open Daily: 12:00 - 00:00</span>
            </li>
            <li>
              <strong>Ghandi, Casablanca</strong>
              <p>Boulevard Ghandi, Maârif</p>
              <span className="footer-hours">Open Daily: 12:00 - 23:30</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4 className="footer-title">{content.contact[lang]}</h4>
          <ul className="footer-contact-details">
            <li>
              <span className="contact-label">Phone:</span>
              <a href="tel:+212613727362" className="contact-value">+212 613-727362</a>
            </li>
            <li>
              <span className="contact-label">Sec. Phone (Gueliz):</span>
              <a href="tel:+212600919304" className="contact-value">+212 600-919304</a>
            </li>
            <li>
              <span className="contact-label">Email:</span>
              <a href="mailto:Indian.maroc@gmail.com" className="contact-value">Indian.maroc@gmail.com</a>
            </li>
            <li className="payment-notice">
              <span className="payment-badge">Cash Only (Marrakech branches)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} Bombay Darbar Marocco. {content.rights[lang]}</p>
        </div>
      </div>
    </footer>
  );
}
