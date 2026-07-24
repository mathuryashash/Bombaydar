'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import BookingWidget from '@/components/BookingWidget';

export default function AboutStory() {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<'EN' | 'FR'>;
      setLang(customEvent.detail);
    };
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const copy = {
    title: { EN: "The Brand Story", FR: "Notre Histoire" },
    subtitle: { 
      EN: "Steadfast culinary heritage by Chef Surender Kumar Thakur.", 
      FR: "L'héritage culinaire du Chef Surender Kumar Thakur." 
    },
    label: { EN: "Deepen, Don't Dilute", FR: "Approfondir, Ne Pas Diluer" },
    
    p1: {
      EN: "Bombay Restaurant is not just a collection of restaurants; it is the culinary chronicle of Chef Surender Kumar Thakur. Born in the mountainous terrains of Himachal Pradesh, India, Chef Surender's career was forged in the strict discipline of luxury hotels. In 1998, he joined the Oberoi Group's pre-opening teams, working at the legendary Trident Udaipur and the ultra-luxury Oberoi Udaivilas. Here, he mastered the fine art of royal North Indian kitchen management.",
      FR: "Bombay Restaurant n'est pas seulement une chaîne de restaurants; c'est la chronique culinaire du Chef Surender Kumar Thakur. Né dans la région montagneuse de l'Himachal Pradesh, en Inde, la carrière du Chef Surender s'est forgée dans la discipline rigoureuse de l'hôtellerie de luxe. En 1998, il intègre les équipes d'ouverture du Groupe Oberoi, travaillant au mythique Trident Udaipur et au prestigieux Oberoi Udaivilas."
    },
    p2: {
      EN: "Seeking global exposure, Chef Surender moved to Hong Kong in 2001, serving as senior chef at the highly acclaimed 'Bombay Dreams.' This period expanded his palate, blending traditional techniques with international standards of presentation and guest hospitality.",
      FR: "Désireux de s'ouvrir sur l'international, le Chef Surender s'installe à Hong Kong en 2001 pour rejoindre les cuisines du célèbre restaurant 'Bombay Dreams'. Cette période enrichit son savoir-faire, alliant techniques ancestrales aux exigences de la gastronomie internationale."
    },
    p3: {
      EN: "In 2004, Chef Surender embarked on a bold venture: relocating to Morocco to introduce Indian cuisine for the very first time in the Kingdom. Opening Salam Bombay (later known as Bombay Restaurant) in Marrakech, he introduced Moroccan diners to the clay-pot tandoor oven, aromatic basmati rice, and complex garam masalas.",
      FR: "En 2004, le Chef Surender se lance un défi audacieux : s'installer au Maroc pour y introduire la cuisine indienne pour la toute première fois dans le Royaume. En ouvrant le Salam Bombay (plus tard renommé Bombay Restaurant) à Marrakech, il fait découvrir aux palais marocains le tandoor en terre cuite."
    },
    p4: {
      EN: "For over 20 years, Chef Surender has remained dedicated to serving Marrakech. Today, the group operates three interconnected destinations under the Bombay Restaurant banner: the flagship modern Marrakech lounge, the high-atmosphere Medina Rooftop terrace overlooking the ancient sky, and a refined Casablanca outlet. Despite competitor copycats, Chef Surender continues to manage every kitchen directly, ensuring that every curry retains its true, complex depth.",
      FR: "Depuis plus de 20 ans, le Chef Surender reste dévoué à Marrakech. Aujourd'hui, le groupe exploite trois adresses sous l'enseigne Bombay Restaurant : le restaurant moderne de Marrakech, le toit-terrasse de la Médina, et notre adresse de Casablanca. Malgré les tentatives de copie, le Chef Surender gère toujours chaque cuisine pour préserver l'authenticité de nos saveurs."
    },

    philosophyTitle: { EN: "Our Culinary Philosophy", FR: "Notre Philosophie Culinaire" },
    phil1Title: { EN: "Tandoor Integrity", FR: "Intégrité du Tandoor" },
    phil1Desc: { 
      EN: "We use traditional clay tandoors heated to extreme temperatures. This seals in charcoal smoke and moisture, giving our naans and seekh kebabs their distinct charred finish.", 
      FR: "Nous utilisons des fours tandoors traditionnels en argile. Cela emprisonne la fumée de charbon et l'humidité, donnant à nos pains naans et kebabs leur texture grillée unique." 
    },
    phil2Title: { EN: "The Clay-Pot Biryani", FR: "La Biryani en Pot d'Argile" },
    phil2Desc: { 
      EN: "Our signature chicken and lamb biryanis are layered with par-boiled basmati rice, saffron, and raw meats, sealed under a whole wheat dough layer, and slow-baked in individual clay handis.", 
      FR: "Nos biryanis de poulet et d'agneau sont préparés avec du riz basmati, du safran et des viandes marinées, scellés sous une pâte de blé, et cuits à l'étouffée dans des pots d'argile individuels." 
    },
    phil3Title: { EN: "Indo-Chinese Fusion", FR: "La Fusion Indo-Chinoise" },
    phil3Desc: { 
      EN: "Celebrating the historic culinary exchange in Kolkata, our menu features signature Indo-Chinese dishes like crispy Chilli Chicken and Tangy Lollipop Chicken.", 
      FR: "Célébrant l'échange culinaire de Calcutta, notre menu propose des classiques indo-chinois comme le poulet croustillant au piment et le poulet lollipop acidulé." 
    }
  };

  return (
    <div className="about-page-wrapper">
      {/* Hero Banner */}
      <section className="about-hero" style={{ backgroundImage: `url('/images/web/hero_royal_lounge.jpg')` }}>
        <div className="hero-overlay" />
        <div className="container about-hero-content animate-fade-in">
          <span className="location-badge">{copy.label[lang]}</span>
          <h1 className="font-serif about-title">{copy.title[lang]}</h1>
          <p className="about-subtitle">{copy.subtitle[lang]}</p>
        </div>
      </section>

      {/* Heritage Details */}
      <section className="about-history-section container">
        <div className="about-grid">
          <div className="about-content-paragraphs">
            <h2 className="font-serif">{lang === 'EN' ? 'From Udaipur to Marrakech' : 'De Udaipur à Marrakech'}</h2>
            <div className="section-divider" />
            <p className="about-p">{copy.p1[lang]}</p>
            <p className="about-p">{copy.p2[lang]}</p>
            <p className="about-p">{copy.p3[lang]}</p>
            <p className="about-p">{copy.p4[lang]}</p>
          </div>
          
          <div className="about-image-column">
            <div className="about-img-frame glass-panel">
              <Image
                src="/images/clay_pot_biryani_hd.png"
                alt="Clay-Pot Biryani presentation"
                width={500} 
                height={350} 
                className="about-side-img" 
              />
              <span className="img-caption">{lang === 'EN' ? 'Our signature clay-pot slow-cooked Biryani.' : 'Notre biryani signature en pot d\'argile.'}</span>
            </div>
            <div className="about-img-frame glass-panel">
              <Image
                src="/images/chef_upscaled.png"
                alt="Chef Surender in the kitchen"
                width={500} 
                height={350} 
                className="about-side-img" 
              />
              <span className="img-caption">{lang === 'EN' ? 'Chef Surender Kumar Thakur, Owner & Founder.' : 'Le Chef Surender Kumar Thakur, Propriétaire.'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="about-philosophy-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">{lang === 'EN' ? 'How We Cook' : 'Notre Façon de Cuisiner'}</span>
            <h2 className="section-title font-serif">{copy.philosophyTitle[lang]}</h2>
            <div className="section-divider-center" />
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-card glass-panel">
              <div className="phil-icon">🔥</div>
              <h3 className="font-serif">{copy.phil1Title[lang]}</h3>
              <p>{copy.phil1Desc[lang]}</p>
            </div>
            <div className="philosophy-card glass-panel">
              <div className="phil-icon">🏺</div>
              <h3 className="font-serif">{copy.phil2Title[lang]}</h3>
              <p>{copy.phil2Desc[lang]}</p>
            </div>
            <div className="philosophy-card glass-panel">
              <div className="phil-icon">🍜</div>
              <h3 className="font-serif">{copy.phil3Title[lang]}</h3>
              <p>{copy.phil3Desc[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="about-booking-section">
        <div className="container">
          <BookingWidget />
        </div>
      </section>
    </div>
  );
}
