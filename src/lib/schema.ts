export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Bombay Restaurant',
  description: 'Authentic North Indian & Punjabi cuisine by Chef Surender Kumar Thakur since 2004. Three locations across Marrakech and Casablanca, Morocco.',
  url: 'https://bombaydar.com',
  telephone: '+212613727362',
  email: 'Indian.maroc@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MA',
  },
  hasMenu: 'https://bombaydar.com/menu',
  servesCuisine: ['North Indian', 'Punjabi', 'Indo-Chinese', 'Mughlai'],
  priceRange: '$$$',
  paymentAccepted: 'Cash, Credit Card',
  currenciesAccepted: 'MAD, EUR, USD',
  location: [
    {
      '@type': 'Place',
      name: 'Bombay Marrakech Gueliz',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7, Rue Ibn Zaidoun',
        addressLocality: 'Marrakech',
        addressRegion: 'Gueliz',
        postalCode: '40000',
        addressCountry: 'MA',
      },
    },
    {
      '@type': 'Place',
      name: 'Medina Rooftop',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Derb Dabachi, near Jemaa el-Fnaa',
        addressLocality: 'Marrakech',
        addressRegion: 'Medina',
        addressCountry: 'MA',
      },
    },
    {
      '@type': 'Place',
      name: 'Bombay Casablanca',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Boulevard Ghandi, Maârif',
        addressLocality: 'Casablanca',
        addressRegion: 'Maârif',
        addressCountry: 'MA',
      },
    },
  ],
  sameAs: [
    'https://instagram.com/bombay_marrakech',
    'https://facebook.com/bombaymarrakech',
  ],
};

export const guelizSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Bombay Marrakech Gueliz',
  branchCode: 'gueliz',
  description: 'Original flagship restaurant in Marrakech Ville Nouvelle. Art Deco lounge atmosphere with clay-pot biryani and tandoor grills.',
  url: 'https://bombaydar.com/locations/gueliz',
  telephone: '+212613727362',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7, Rue Ibn Zaidoun',
    addressLocality: 'Marrakech',
    addressRegion: 'Gueliz',
    postalCode: '40000',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6345,
    longitude: -7.9998,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Monday',
      opens: '18:00',
      closes: '23:00',
    },
  ],
  hasMenu: 'https://bombaydar.com/locations/gueliz#menu',
  servesCuisine: ['North Indian', 'Punjabi', 'Indo-Chinese'],
  priceRange: '$$$',
  paymentAccepted: 'Cash',
  currenciesAccepted: 'MAD, EUR, USD',
};

export const medinaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Medina Rooftop',
  branchCode: 'medina',
  description: 'Rooftop dining under the Marrakech stars near Jemaa el-Fnaa. Panoramic views of Koutoubia Mosque and Atlas Mountains with authentic Mughlai cuisine.',
  url: 'https://bombaydar.com/locations/medina',
  telephone: '+212613727362',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Derb Dabachi, near Jemaa el-Fnaa',
    addressLocality: 'Marrakech',
    addressRegion: 'Medina',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6295,
    longitude: -7.9811,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:30',
      closes: '23:30',
    },
  ],
  hasMenu: 'https://bombaydar.com/locations/medina#menu',
  servesCuisine: ['North Indian', 'Mughlai', 'Indo-Chinese'],
  priceRange: '$$$',
  paymentAccepted: 'Cash',
  currenciesAccepted: 'MAD, EUR, USD',
};

export const casablancaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Bombay Casablanca',
  branchCode: 'casablanca',
  description: 'Modern Indian dining in Casablanca Maârif. Atlantic coastal elegance with seafood curries, tandoor grills, and handcrafted mocktails. Card payments accepted.',
  url: 'https://bombaydar.com/locations/casablanca',
  telephone: '+212613727362',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Boulevard Ghandi, Maârif',
    addressLocality: 'Casablanca',
    addressRegion: 'Maârif',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.5731,
    longitude: -7.5898,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '23:30',
    },
  ],
  hasMenu: 'https://bombaydar.com/locations/casablanca#menu',
  servesCuisine: ['North Indian', 'Punjabi', 'Seafood', 'Indo-Chinese'],
  priceRange: '$$$',
  paymentAccepted: 'Cash, Credit Card',
  currenciesAccepted: 'MAD, EUR, USD',
};

export const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Chef Surender Kumar Thakur: 20+ Years of Authentic Indian Cuisine in Morocco',
  description: 'From Oberoi Udaivilas to Marrakech. Chef Surender Kumar Thakur\'s culinary journey, clay-pot traditions & catering for weddings across Morocco.',
  url: 'https://bombaydar.com/about',
  mainEntity: {
    '@type': 'Person',
    name: 'Chef Surender Kumar Thakur',
    jobTitle: 'Owner & Head Chef',
    worksFor: {
      '@type': 'Organization',
      name: 'Bombay Restaurant',
    },
    knowsAbout: ['North Indian Cuisine', 'Punjabi Cuisine', 'Tandoor Cooking', 'Clay-Pot Biryani', 'Mughlai Cuisine', 'Restaurant Management'],
    description: 'Chef Surender Kumar Thakur began his journey in 1998 with the prestigious Oberoi Group at Trident Udaipur and Oberoi Udaivilas. Following a defining tenure at Bombay Dreams in Hong Kong, he arrived in Morocco in 2004, introducing traditional clay-oven tandoor techniques and authentic home-style Indian cuisine to the kingdom for the very first time.',
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Bombay Restaurant halal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all meat served at Bombay Restaurant is halal certified. We source our ingredients from trusted halal suppliers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have vegetarian and vegan options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our menu features extensive vegetarian options including paneer dishes, dal, vegetable curries, and vegan options like vegetable samosa, pakora, and salads. Look for the vegetarian (leaf) and vegan (seedling) icons on our menu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is parking available at the restaurants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bombay Marrakech Gueliz has street parking nearby. Medina Rooftop is in the pedestrian Medina area - we recommend taxi or walking from nearby parking. Bombay Casablanca Maârif has parking available in the area.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the dress code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smart casual. We welcome guests in comfortable but presentable attire. No beachwear or sportswear at our fine dining locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you accept reservations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we highly recommend reservations especially for dinner and weekends. Book online via our website or call +212 613-727362.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer catering for weddings and events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide catering services for weddings, corporate events, and private functions across Morocco. Contact us via WhatsApp at +212 613-727362 for a custom quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech locations (Gueliz & Medina): Cash only (MAD, EUR, USD). Casablanca location: Cash and card payments accepted.',
      },
    },
  ],
};

export function generateMenuSchema(branch: 'marrakech' | 'casablanca') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `${branch === 'marrakech' ? 'Marrakech' : 'Casablanca'} Menu`,
    description: `Complete menu for Bombay Restaurant ${branch === 'marrakech' ? 'Marrakech (Gueliz & Medina)' : 'Casablanca'} location.`,
    url: `https://bombaydar.com/locations/${branch}`,
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Starters & Salads',
        description: 'Traditional Indian appetizers including samosas, pakoras, and fresh salads.',
      },
      {
        '@type': 'MenuSection',
        name: 'Tandoor Grills',
        description: 'Clay-oven grilled meats, seafood, and paneer marinated in traditional spices.',
      },
      {
        '@type': 'MenuSection',
        name: 'Indo-Chinese Fusion',
        description: 'Kolkata-style Indo-Chinese favorites like Chilli Chicken and Garlic Chicken.',
      },
      {
        '@type': 'MenuSection',
        name: 'Chicken Curries',
        description: 'Authentic North Indian chicken curries including Butter Chicken, Tikka Masala, and Korma.',
      },
      {
        '@type': 'MenuSection',
        name: 'Mutton & Lamb',
        description: 'Slow-cooked lamb specialties: Rogan Josh, Bhuna Gosht, and Shahi Korma.',
      },
      {
        '@type': 'MenuSection',
        name: 'Seafood',
        description: 'Fresh fish and prawn curries with coastal Indian flavors.',
      },
      {
        '@type': 'MenuSection',
        name: 'Vegetarian',
        description: 'Extensive vegetarian selection including paneer, dal, and seasonal vegetables.',
      },
      {
        '@type': 'MenuSection',
        name: 'Biryani & Rice',
        description: 'Signature clay-pot dum biryanis and aromatic rice preparations.',
      },
      {
        '@type': 'MenuSection',
        name: 'Breads',
        description: 'Fresh tandoor-baked naan, roti, and paratha varieties.',
      },
      {
        '@type': 'MenuSection',
        name: 'Desserts & Drinks',
        description: 'Traditional Indian desserts, lassis, and refreshing mocktails.',
      },
    ],
  };
}