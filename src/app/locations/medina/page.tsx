'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuSection from '@/components/MenuSection';
import BookingWidget from '@/components/BookingWidget';

export default function MedinaBranch() {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');
  const [slideIndex, setSlideIndex] = useState(0);

  const heroSlides = [
    '/images/web/hero_medina_rooftop.jpg',
    '/images/web/food_clay_pot_biryani.jpg',
    '/images/web/ambiance_luxury_table.jpg',
    '/images/web/chef_surender_solo_portrait.jpg'
  ];

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<'EN' | 'FR'>;
      setLang(customEvent.detail);
    };
    window.addEventListener('langChange', handleLangChange);
    
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => {
      window.removeEventListener('langChange', handleLangChange);
      clearInterval(interval);
    };
  }, [heroSlides.length]);

  const copy = {
    title: { EN: "Medina Rooftop", FR: "Médina Rooftop" },
    subtitle: { EN: "Dine under the Marrakech stars overlooking historic sights.", FR: "Dînez sous les étoiles de Marrakech surplombant les monuments." },
    tagline: {
      EN: "Suspended above the bustling souks near Jemaa el-Fnaa, our Rooftop offers breathtaking sunset views of the Koutoubia Mosque and Atlas Mountains. Combining authentic Moroccan riad architecture with royal Mughlai clay-pot cooking, dining under the starlit Marrakech sky is an unforgettable experience.",
      FR: "Suspendu au-dessus des souks animés près de Jemaa el-Fnaa, notre Rooftop offre une vue panoramique spectaculaire sur la Koutoubia et l'Atlas. Alliant l'architecture d'un riad marocain à la cuisine royale en pot d'argile, dîner sous les étoiles est une expérience inoubliable."
    },
    hoursTitle: { EN: "Opening Hours", FR: "Horaires d'Ouverture" },
    contactTitle: { EN: "Contact & Address", FR: "Contact & Adresse" },
  };

  return (
    <div className="location-page-wrapper">
      {/* Header Banner Carousel */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden flex items-center justify-center">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === slideIndex ? 'opacity-100 z-10 scale-105' : 'opacity-0 z-0 scale-100'} transition-transform duration-[7000ms]`}
          >
            <Image
              src={slide}
              alt="Medina Rooftop"
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60 z-20" />
        <div className="relative z-30 container mx-auto px-4 text-center text-white">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gold/20 text-gold border border-gold/40 mb-4 inline-block">
            Medina Rooftop
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-3">
            {copy.title[lang]}
          </h1>
          <p className="text-lg md:text-xl text-sand max-w-2xl mx-auto font-sans font-light">
            {copy.subtitle[lang]}
          </p>
        </div>
      </section>

      {/* Details section */}
      <section className="location-info-section container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="font-serif text-xl font-bold text-gold mb-3">{copy.hoursTitle[lang]}</h3>
            <ul className="text-sm text-sand space-y-2">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Daily Sunset & Dinner:</span>
                <span className="font-bold text-white">12:30 - 23:30</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="font-serif text-xl font-bold text-gold mb-3">{copy.contactTitle[lang]}</h3>
            <ul className="text-sm text-sand space-y-2">
              <li>
                <strong className="text-white block">Address:</strong>
                <span>Derb Dabachi, Marrakech Medina (Near Jemaa el-Fnaa)</span>
              </li>
              <li className="pt-2">
                <strong className="text-white block">Central Phone:</strong>
                <a href="tel:+212613727362" className="text-gold font-bold hover:underline">+212 613-727362</a>
              </li>
            </ul>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="font-serif text-xl font-bold text-gold mb-3">Payment Info</h3>
            <p className="text-sm text-sand leading-relaxed">
              Marrakech Medina branch accepts Cash payments (MAD, EUR, USD).
            </p>
          </div>
        </div>

        {/* Narrative */}
        <div className="bg-black/50 p-8 md:p-12 rounded-3xl border border-gold/20 mb-16 backdrop-blur-md max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-gold mb-4">Royal Mughlai Above the Red City</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-base text-sand leading-relaxed font-sans font-light">
            {copy.tagline[lang]}
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 bg-black/30" id="menu">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-2">Medina Rooftop Specialties</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">The Medina Menu</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <MenuSection defaultBranch="marrakech" />
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <BookingWidget />
        </div>
      </section>
    </div>
  );
}
