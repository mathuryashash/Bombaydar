'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BookingWidget from '@/components/BookingWidget';

export default function Home() {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    '/images/chef_pose_welcome.png',
    '/images/rooftop_medina_view.png',
    '/images/chef_pose_cooking.png',
    '/images/clay_pot_biryani.png'
  ];

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<'EN' | 'FR'>;
      setLang(customEvent.detail);
    };
    window.addEventListener('langChange', handleLangChange);

    // Hero image rotation
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      window.removeEventListener('langChange', handleLangChange);
      clearInterval(interval);
    };
  }, [heroImages.length]);

  const copy = {
    heroTitle: { EN: "A Culinary Journey from Bombay to Morocco", FR: "Un Voyage Culinaire de Bombay au Maroc" },
    heroSubtitle: { 
      EN: "Authentic, home-style North Indian & Punjabi cuisine by Chef Surender Kumar Thakur.", 
      FR: "Cuisine authentique et familiale du nord de l'Inde et du Pendjab par le chef Surender Kumar Thakur." 
    },
    discoverMenu: { EN: "Discover Our Story", FR: "Découvrir Notre Histoire" },
    bookTable: { EN: "Book a Table", FR: "Réserver une Table" },
    
    // Brand Story
    storyLabel: { EN: "Our Heritage", FR: "Notre Héritage" },
    storyTitle: { EN: "Deepen, Don't Dilute", FR: "Approfondir, Ne Pas Diluer" },
    storyText1: {
      EN: "Founder and Chef Surender Kumar Thakur began his journey in 1998 with the prestigious Oberoi group at Trident Udaipur and Oberoi Udaivilas. Following a defining tenure at Bombay Dreams in Hong Kong, he arrived in Morocco in 2004, introducing traditional clay-oven tandoor techniques and authentic home-style Indian cuisine to the kingdom for the very first time.",
      FR: "Le fondateur et chef Surender Kumar Thakur a débuté son parcours en 1998 au sein du prestigieux groupe Oberoi au Trident Udaipur et à l'Oberoi Udaivilas. Après un passage marquant à Bombay Dreams à Hong Kong, il arrive au Maroc en 2004, introduisant pour la première fois dans le Royaume les techniques traditionnelles du tandoor en terre cuite et une authentique cuisine familiale indienne."
    },
    storyText2: {
      EN: "For over two decades, Chef Surender has operated continuously in Marrakech, expanding from our original Gueliz venue to a stunning Medina rooftop overlook, and now to Boulevard Ghandi, Casablanca. We do not compromise on spices, ingredients, or methods. Our signature chicken biryani is still slow-cooked and served in individually sealed clay pots, just as it was in Punjab generations ago.",
      FR: "Depuis plus de deux décennies, le Chef Surender exerce continuellement à Marrakech, s'étendant de notre établissement historique de Gueliz à un magnifique toit-terrasse surplombant la Médina, et aujourd'hui au Boulevard Ghandi à Casablanca. Nous ne faisons aucun compromis sur les épices, les ingrédients ou les méthodes. Notre biryani signature au poulet est toujours mijoté et servi dans des pots en terre cuite scellés, comme au Pendjab il y a des générations."
    },

    // Locations Selection
    locationsLabel: { EN: "Explore Our Branches", FR: "Explorez Nos Restaurants" },
    locationsTitle: { EN: "Three Unique Settings, One Soul", FR: "Trois Cadres Uniques, Une Seule Âme" },
    guelizDesc: {
      EN: "Our original flagship restaurant in the modern district of Gueliz. Richly decorated rooms and contemporary lighting creating an intimate lounge atmosphere.",
      FR: "Notre restaurant historique dans le quartier moderne de Gueliz. Des salons richement décorés et un éclairage contemporain créant une atmosphère de lounge intime."
    },
    medinaDesc: {
      EN: "Dine under the Marrakech stars. Located near Jemaa el-Fnaa, offering a vibrant rooftop terrace with panoramic views of the historic Medina skyline.",
      FR: "Dînez sous les étoiles de Marrakech. Situé près de Jemaa el-Fnaa, offrant une terrasse animée sur le toit avec vue panoramique sur la Médina historique."
    },
    casaDesc: {
      EN: "Bringing Chef Surender's culinary heritage to Casablanca. Located on Boulevard Ghandi, Maârif, featuring an elegant, modern dining room for urban food lovers.",
      FR: "Apportant l'héritage culinaire du Chef Surender à Casablanca. Situé sur le Boulevard Ghandi, Maârif, offrant une salle élégante pour les passionnés de gastronomie."
    },
    viewBranch: { EN: "View Restaurant Details", FR: "Voir les Détails" },

    // Reviews
    reviewsLabel: { EN: "Guest Stories", FR: "Avis de Nos Clients" },
    reviewsTitle: { EN: "Shared Experiences", FR: "Expériences Partagées" }
  };

  const reviews = [
    {
      text: {
        EN: "The best Indian food I've had outside of India. The clay-pot chicken biryani was incredibly fragrant and flavorful, and the cheese naan was fresh and hot. Outstanding hospitality from Chef Surender himself!",
        FR: "La meilleure cuisine indienne que j'ai goûtée en dehors de l'Inde. Le biryani au poulet en pot d'argile était incroyablement parfumé et savoureux, et le naan au fromage était chaud et frais. Une hospitalité exceptionnelle du Chef Surender !"
      },
      author: "Amina K. (Google Review)",
      branch: { EN: "Marrakech Gueliz", FR: "Marrakech Gueliz" }
    },
    {
      text: {
        EN: "Unbelievable views of the Medina at sunset. We had the butter chicken, dal makhani, and garlic naan. Everything was absolutely delicious, spice level adjusted perfectly. A magical dining experience on the rooftop.",
        FR: "Une vue incroyable sur la Médina au coucher du soleil. Nous avons pris le poulet au beurre, le dal makhani et le naan à l'ail. Tout était absolument délicieux, niveau d'épices ajusté à la perfection. Une expérience magique."
      },
      author: "David L. (Tripadvisor)",
      branch: { EN: "Medina Rooftop", FR: "Médina Rooftop" }
    }
  ];

  return (
    <div className="homepage-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        {heroImages.map((src, index) => (
          <div 
            key={src} 
            className={`hero-bg-slide ${index === heroIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-overlay" />
        
        <div className="container hero-content animate-fade-in">
          <h1 className="hero-title font-serif">{copy.heroTitle[lang]}</h1>
          <p className="hero-subtitle">{copy.heroSubtitle[lang]}</p>
          <div className="hero-buttons">
            <Link href="#reserve" className="btn-primary">{copy.bookTable[lang]}</Link>
            <Link href="/about" className="btn-secondary">{copy.discoverMenu[lang]}</Link>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="hero-indicators">
          {heroImages.map((_, index) => (
            <button 
              key={index} 
              className={`indicator-dot ${index === heroIndex ? 'active' : ''}`}
              onClick={() => setHeroIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Branches grid — FIRST after hero */}
      <section className="branches-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label gold-text">{copy.locationsLabel[lang]}</span>
            <h2 className="section-title font-serif">{copy.locationsTitle[lang]}</h2>
            <div className="section-divider-center" />
          </div>

          <div className="branches-grid">
            {/* Gueliz */}
            <div className="branch-card glass-panel">
              <div className="branch-img-container">
                <Image src="/images/butter_chicken_hd.png" alt="Marrakech Gueliz dining" width={400} height={250} className="branch-img" />
              </div>
              <div className="branch-card-content">
                <h3 className="branch-name font-serif gold-text">Marrakech Gueliz</h3>
                <p className="branch-desc">{copy.guelizDesc[lang]}</p>
                <div className="branch-actions">
                  <Link href="/locations/gueliz" className="btn-secondary branch-btn">{copy.viewBranch[lang]}</Link>
                </div>
              </div>
            </div>

            {/* Medina */}
            <div className="branch-card glass-panel">
              <div className="branch-img-container">
                <Image src="/images/clay_pot_biryani_hd.png" alt="Medina Rooftop dining" width={400} height={250} className="branch-img" />
              </div>
              <div className="branch-card-content">
                <h3 className="branch-name font-serif gold-text">Medina Rooftop</h3>
                <p className="branch-desc">{copy.medinaDesc[lang]}</p>
                <div className="branch-actions">
                  <Link href="/locations/medina" className="btn-secondary branch-btn">{copy.viewBranch[lang]}</Link>
                </div>
              </div>
            </div>

            {/* Casablanca */}
            <div className="branch-card glass-panel">
              <div className="branch-img-container">
                <Image src="/images/seekh_kebab_hd.png" alt="Casablanca dining" width={400} height={250} className="branch-img" />
              </div>
              <div className="branch-card-content">
                <h3 className="branch-name font-serif gold-text">Casablanca Ghandi</h3>
                <p className="branch-desc">{copy.casaDesc[lang]}</p>
                <div className="branch-actions">
                  <Link href="/locations/casablanca" className="btn-secondary branch-btn">{copy.viewBranch[lang]}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section className="brand-story-section container">
        <div className="story-grid">
          <div className="story-image-wrapper glass-panel">
            <Image 
              src="/images/chef_upscaled.png" 
              alt="Chef Surender Kumar Thakur" 
              width={500} 
              height={600}
              className="story-img"
            />
          </div>
          <div className="story-content">
            <span className="section-label gold-text">{copy.storyLabel[lang]}</span>
            <h2 className="section-title font-serif">{copy.storyTitle[lang]}</h2>
            <div className="section-divider" />
            <p className="story-paragraph">{copy.storyText1[lang]}</p>
            <p className="story-paragraph">{copy.storyText2[lang]}</p>
            <div className="story-chef-sign">
              <span className="chef-name gold-text">Chef Surender Kumar Thakur</span>
              <span className="chef-title">{lang === 'EN' ? 'Owner & Head Chef' : 'Propriétaire & Chef Cuisinier'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section container">
        <div className="section-header-center">
          <span className="section-label gold-text">{copy.reviewsLabel[lang]}</span>
          <h2 className="section-title font-serif">{copy.reviewsTitle[lang]}</h2>
          <div className="section-divider-center" />
        </div>

        <div className="reviews-slider-grid">
          {reviews.map((rev, i) => (
            <div key={i} className="review-card glass-panel">
              <span className="quote-mark">“</span>
              <p className="review-text">{rev.text[lang]}</p>
              <div className="review-meta">
                <span className="review-author">{rev.author}</span>
                <span className="review-branch gold-text">{rev.branch[lang]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Anchor Section */}
      <section className="booking-section" id="booking-anchor">
        <div className="container">
          <BookingWidget />
        </div>
      </section>
    </div>
  );
}
