import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

const cateringSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Indian Catering & Private Events by Bombay Restaurant',
  serviceType: 'Catering',
  provider: {
    '@type': 'Restaurant',
    name: 'Bombay Restaurant',
    telephone: '+212613727362',
    url: 'https://www.bombaydar.com',
  },
  areaServed: [
    { '@type': 'City', name: 'Marrakech' },
    { '@type': 'City', name: 'Casablanca' },
    { '@type': 'Country', name: 'Morocco' },
  ],
  description:
    'Authentic North Indian catering for weddings, corporate events, and private functions across Morocco. Live tandoor stations and clay-pot biryani service.',
  url: 'https://www.bombaydar.com/catering',
};

export const metadata: Metadata = {
  title: "Indian Catering & Private Events in Marrakech & Casablanca — Weddings, Functions",
  description: "Authentic Indian catering across Morocco. Weddings, corporate events & private parties with live tandoor, clay-pot biryani and full service by Chef Surender Kumar Thakur. Get a quote via WhatsApp.",
  openGraph: {
    title: "Indian Catering in Morocco — Weddings & Private Events",
    description: "Live tandoor, clay-pot biryani and full-service Indian catering for weddings and events across Morocco.",
    url: "https://www.bombaydar.com/catering",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/web/ambiance_luxury_table.jpg",
        width: 1200,
        height: 630,
        alt: "Elegant Indian catering table setting at Bombay Restaurant Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Catering in Morocco — Weddings & Events",
    description: "Live tandoor & clay-pot biryani catering for weddings and events.",
    images: ["/images/web/ambiance_luxury_table.jpg"],
  },
  alternates: {
    canonical: "https://www.bombaydar.com/catering",
  },
};

const WA_CATERING_URL =
  "https://wa.me/212613727362?text=Hello%20Bombay%20Restaurant!%20I%20would%20like%20a%20catering%20quote%20for%20my%20event.";

const services = [
  {
    icon: "💍",
    title: { EN: "Weddings", FR: "Mariages" },
    desc: {
      EN: "From intimate ceremonies to grand celebrations of 500+ guests. Live tandoor stations, clay-pot biryani service, and traditional presentation that becomes the talk of the wedding.",
      FR: "Des cérémonies intimes aux grandes célébrations de plus de 500 invités. Stations tandoor en direct, service de biryani en pot d'argile et présentation traditionnelle."
    },
  },
  {
    icon: "🏢",
    title: { EN: "Corporate Events", FR: "Événements d'Entreprise" },
    desc: {
      EN: "Impress clients and teams with refined Indian catering for conferences, launches, and office parties. Buffet or plated service, tailored to your venue in Marrakech or Casablanca.",
      FR: "Impressionnez vos clients et équipes avec un traiteur indien raffiné pour conférences, lancements et réceptions. Buffet ou service à l'assiette."
    },
  },
  {
    icon: "🎉",
    title: { EN: "Private Functions", FR: "Réceptions Privées" },
    desc: {
      EN: "Birthdays, anniversaries, family gatherings — large or small. We bring Chef Surender's signature flavors directly to your home, riad, or rented venue.",
      FR: "Anniversaires, mariages, réunions de famille — grandes ou petites. Nous apportons les saveurs signature du Chef Surender chez vous."
    },
  },
];

export default function CateringPage() {
  return (
    <div className="location-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }}
      />

      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden flex items-center justify-center" aria-label="Catering banner">
        <Image
          src="/images/web/ambiance_luxury_table.jpg"
          alt="Luxury Indian catering setup with gold cutlery and candlelit tables"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gold/20 text-gold border border-gold/40 mb-4 inline-block">
            Since 2004 • All of Morocco
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-3">Catering &amp; Private Events</h1>
          <p className="text-lg md:text-xl text-sand max-w-2xl mx-auto font-sans font-light">
            Chef Surender&apos;s signature North Indian flavors, brought directly to your venue.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 section-reveal" aria-labelledby="services-title">
        <Breadcrumbs items={[{ name: "Catering", url: "/catering" }]} />
        <div className="text-center mb-12 mt-6 reveal-on-scroll up">
          <h2 id="services-title" className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">We Cater Every Occasion</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-reveal">
          {services.map((s) => (
            <article key={s.title.EN} className="bg-black/40 p-8 rounded-2xl border border-white/10 backdrop-blur-md text-center hover:border-gold/40 transition-colors">
              <span className="text-4xl block mb-4">{s.icon}</span>
              <h3 className="font-serif text-xl font-bold text-gold mb-3">{s.title.EN}</h3>
              <p className="text-sm text-sand leading-relaxed">{s.desc.EN}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-black/30 section-reveal" aria-labelledby="why-title">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="why-title" className="font-serif text-3xl font-bold text-white mb-8 text-center">The Bombay Catering Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["🔥", "Live Tandoor Station", "Our chefs grill fresh naan and kebabs on-site — the aroma alone is an experience."],
              ["🏺", "Clay-Pot Biryani Service", "Our famous sealed clay-pot biryani, opened at your table for maximum drama."],
              ["👨‍🍳", "20+ Years of Mastery", "The same team behind our three restaurants, led by Chef Surender Kumar Thakur."],
              ["🥗", "Full Dietary Coverage", "Extensive vegetarian, vegan, and halal-certified options for every guest."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex gap-4 bg-black/40 p-6 rounded-xl border border-white/10">
                <span className="text-2xl flex-shrink-0">{icon}</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gold mb-1">{title}</h3>
                  <p className="text-sm text-sand leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-reveal" aria-labelledby="quote-title">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 id="quote-title" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Get Your Custom Quote</h2>
          <p className="text-base text-sand mb-8">
            Tell us your date, guest count, and venue — we respond within hours with a tailored menu and pricing.
            Serving Marrakech, Casablanca, and all of Morocco.
          </p>
          <a href={WA_CATERING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary pulse-glow">
            Inquire via WhatsApp — +212 613-727362
          </a>
        </div>
      </section>
    </div>
  );
}
