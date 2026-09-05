import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Photo Gallery — Indian Food, Tandoor & Restaurant Interiors in Morocco",
  description: "Browse Bombay Restaurant Morocco: clay-pot biryani, tandoori platters, butter chicken thali, naan fresh from the tandoor, our Art Deco Gueliz lounge, and the Medina rooftop at sunset.",
  openGraph: {
    title: "Bombay Restaurant Photo Gallery",
    description: "Clay-pot biryani, tandoor grills & rooftop views. See our food and restaurants.",
    url: "https://www.bombaydar.com/gallery",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/web/food_clay_pot_biryani.jpg",
        width: 1200,
        height: 630,
        alt: "Signature clay-pot chicken biryani at Bombay Restaurant Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombay Restaurant Photo Gallery",
    description: "Indian food, tandoor & restaurant interiors in Morocco.",
    images: ["/images/web/food_clay_pot_biryani.jpg"],
  },
  alternates: {
    canonical: "https://www.bombaydar.com/gallery",
  },
};

const galleryItems = [
  { src: "/images/web/food_clay_pot_biryani.jpg", alt: "Signature clay-pot chicken biryani slow-cooked in sealed clay handi with saffron basmati rice", caption: "Clay-Pot Chicken Biryani" },
  { src: "/images/web/food_butter_chicken_thali.jpg", alt: "Butter chicken thali with creamy tomato curry, cheese naan and basmati rice", caption: "Butter Chicken Thali" },
  { src: "/images/web/food_tandoori_chicken_platter.jpg", alt: "Tandoori chicken tikka platter grilled over charcoal in clay tandoor oven", caption: "Tandoori Chicken Platter" },
  { src: "/images/web/food_tandoori_kebabs.jpg", alt: "Assorted seekh kebabs and malai kebabs on sizzling platter from the tandoor", caption: "Tandoori Kebab Selection" },
  { src: "/images/web/food_dal_makhani_curry.jpg", alt: "Royal dal makhani - black lentils slow-cooked overnight with butter and cream", caption: "Dal Makhani" },
  { src: "/images/web/food_samosa_platter.jpg", alt: "Crispy vegetable samosas with tamarind chutney - classic Indian starter", caption: "Samosa Platter" },
  { src: "/images/web/food_naan_bread.jpg", alt: "Fresh garlic butter naan bread brushed with cilantro straight from the tandoor", caption: "Fresh Tandoori Naan" },
  { src: "/images/web/food_gulab_jamun.jpg", alt: "Warm gulab jamun dumplings soaked in cardamom rose syrup with pistachios", caption: "Gulab Jamun" },
  { src: "/images/web/hero_royal_lounge.jpg", alt: "Art Deco lounge interior of Bombay Marrakech Gueliz with velvet seating and brass lanterns", caption: "Gueliz Lounge" },
  { src: "/images/web/hero_medina_rooftop.jpg", alt: "Medina rooftop terrace at sunset overlooking Koutoubia Mosque in Marrakech", caption: "Medina Rooftop" },
  { src: "/images/web/hero_casablanca_interior.jpg", alt: "Modern dining room of Bombay Casablanca with open tandoor grill and gold accents", caption: "Casablanca Dining Room" },
  { src: "/images/web/ambiance_candlelit_room.jpg", alt: "Intimate candlelit dining room with dark teakwood paneling and warm lighting", caption: "Candlelit Ambiance" },
  { src: "/images/web/chef_tandoor_cooking.jpg", alt: "Chef preparing authentic naan bread inside traditional clay tandoor oven", caption: "The Living Tandoor" },
  { src: "/images/web/chef_kitchen_prep.jpg", alt: "Kitchen team preparing fresh Indian ingredients at Bombay Restaurant", caption: "Kitchen Craft" },
];

export default function GalleryPage() {
  return (
    <div className="location-page-wrapper">
      <section className="relative pt-32 pb-10 bg-black/40">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ name: "Gallery", url: "/gallery" }]} />
          <span className="text-xs uppercase tracking-widest text-gold font-bold block mt-6 mb-2">Our World</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">Food, Fire &amp; Atmosphere</h1>
          <p className="text-lg text-sand max-w-2xl font-sans font-light mb-10">
            A look inside Bombay Restaurant — the dishes, the tandoor, and the rooms where memories are made.
          </p>
        </div>
      </section>

      <section className="pb-20" aria-label="Photo gallery">
        <div className="container mx-auto px-4">
          <div className="gallery-grid stagger-reveal">
            {galleryItems.map((item) => (
              <figure key={item.src} className="gallery-item glass-panel rounded-xl overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-sand">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
