import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Iftar & Ramadan Dining — Indian Specials in Marrakech & Casablanca",
  description: "Break your fast with authentic Indian iftar at Bombay Restaurant. Harira meets tandoori: samosas, pakoras, clay-pot biryani and sweet lassi at our Marrakech Gueliz, Medina Rooftop and Casablanca locations.",
  openGraph: {
    title: "Indian Iftar & Ramadan Specials in Morocco",
    description: "Samosas, pakoras, clay-pot biryani & sweet lassi for your Ramadan table.",
    url: "https://www.bombaydar.com/ramadan",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/web/ambiance_candlelit_room.jpg",
        width: 1200,
        height: 630,
        alt: "Candlelit iftar dining room at Bombay Restaurant Morocco during Ramadan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Iftar & Ramadan Specials in Morocco",
    description: "Authentic Indian iftar in Marrakech & Casablanca.",
    images: ["/images/web/ambiance_candlelit_room.jpg"],
  },
  alternates: {
    canonical: "https://www.bombaydar.com/ramadan",
  },
};

const WA_RAMADAN_URL =
  "https://wa.me/212613727362?text=Hello%20Bombay%20Restaurant!%20I%20would%20like%20to%20reserve%20a%20table%20for%20iftar.";

export default function RamadanPage() {
  return (
    <div className="location-page-wrapper">
      <section
        className="relative h-[55vh] min-h-[420px] w-full overflow-hidden flex items-center justify-center"
        aria-label="Ramadan banner"
      >
        <Image
          src="/images/web/ambiance_candlelit_room.jpg"
          alt="Candlelit dining room ready for iftar at Bombay Restaurant"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gold/20 text-gold border border-gold/40 mb-4 inline-block">
            Ramadan Kareem • رمضان كريم
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-3">Iftar, the Bombay Way</h1>
          <p className="text-lg md:text-xl text-sand max-w-2xl mx-auto font-sans font-light">
            Where Moroccan tradition meets the warmth of a Punjabi kitchen.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 section-reveal" aria-labelledby="iftar-title">
        <Breadcrumbs items={[{ name: "Ramadan", url: "/ramadan" }]} />
        <div className="max-w-3xl mx-auto text-center mb-12 mt-6">
          <h2 id="iftar-title" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Break Your Fast With Fire &amp; Saffron
          </h2>
          <p className="text-base text-sand leading-relaxed">
            Every evening during Ramadan, our kitchens prepare a special iftar selection alongside our full menu —
            perfect for families gathering after Maghrib. Reserve a candlelit table at any of our three locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-reveal">
          <article className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="font-serif text-lg font-bold text-gold mb-3">🥟 To Start</h3>
            <ul className="text-sm text-sand space-y-2">
              <li>Vegetable Samosa (2 pcs)</li>
              <li>Chicken Samosa (2 pcs)</li>
              <li>Vegetable Pakora</li>
              <li>Shrimp Cigars</li>
            </ul>
          </article>
          <article className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="font-serif text-lg font-bold text-gold mb-3">🍛 To Share</h3>
            <ul className="text-sm text-sand space-y-2">
              <li>Clay-Pot Chicken Biryani</li>
              <li>Famous Butter Chicken</li>
              <li>Royal Dal Makhani</li>
              <li>Tandoori Mixed Platter</li>
            </ul>
          </article>
          <article className="bg-black/40 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="font-serif text-lg font-bold text-gold mb-3">🥤 To Finish</h3>
            <ul className="text-sm text-sand space-y-2">
              <li>Sweet Rose Lassi</li>
              <li>Hot Gulab Jamun</li>
              <li>Mughlai Shahi Tukda</li>
              <li>Mango Kulfi</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-16 bg-black/30 section-reveal" aria-label="Ramadan reservation">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Reserve Your Iftar Table</h2>
          <p className="text-base text-sand mb-8">
            Tables fill quickly after Maghrib — especially on our Medina rooftop. Book early via WhatsApp or phone.
            Group and family tables welcome.
          </p>
          <a href={WA_RAMADAN_URL} target="_blank" rel="noopener noreferrer" className="btn-primary pulse-glow">
            Reserve via WhatsApp — +212 613-727362
          </a>
        </div>
      </section>
    </div>
  );
}
