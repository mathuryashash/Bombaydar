'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Listen for language changes from other components
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<'EN' | 'FR'>;
      setLang(customEvent.detail);
    };
    window.addEventListener('langChange', handleLangChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('langChange', handleLangChange);
    };
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'EN' ? 'FR' : 'EN';
    setLang(newLang);
    window.dispatchEvent(new CustomEvent('langChange', { detail: newLang }));
  };

  const navLinks = [
    { href: '/', label: { EN: 'Home', FR: 'Accueil' } },
    { href: '/about', label: { EN: 'Brand Story', FR: 'Notre Histoire' } },
    { href: '/locations/gueliz', label: { EN: 'Marrakech Gueliz', FR: 'Marrakech Gueliz' } },
    { href: '/locations/medina', label: { EN: 'Medina Rooftop', FR: 'Médina Rooftop' } },
    { href: '/locations/casablanca', label: { EN: 'Casablanca', FR: 'Casablanca' } },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo" onClick={handleLinkClick}>
          <Logo size={44} />
          <div className="logo-text-wrapper">
            <span className="logo-title font-serif gold-text">BOMBAY DARBAR</span>
            <span className="logo-subtitle">MOROCCO</span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-btn ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation links */}
        <div className={`nav-links-wrapper ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    {link.label[lang]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="nav-actions">
            <button 
              onClick={toggleLang} 
              className="lang-toggle-btn"
              title="Switch Language"
            >
              {lang === 'EN' ? 'FR' : 'EN'}
            </button>
            
            <Link 
              href="#reserve" 
              className="btn-primary nav-book-btn"
              onClick={handleLinkClick}
            >
              {lang === 'EN' ? 'Book a Table' : 'Réserver'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
