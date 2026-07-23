'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface MenuItem {
  id: string;
  name: { EN: string; FR: string };
  description: { EN: string; FR: string };
  price: {
    marrakech: number;
    casablanca: number;
  };
  category: string;
  imageUrl?: string;
  isVeg?: boolean;
  isVegan?: boolean;
  isSpicy?: boolean;
  isGF?: boolean;
  locationExclusive?: 'marrakech' | 'casablanca';
}

interface MenuSectionProps {
  defaultBranch?: 'all' | 'marrakech' | 'casablanca';
}

export default function MenuSection({ defaultBranch = 'all' }: MenuSectionProps) {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');
  const [selectedBranch, setSelectedBranch] = useState<'all' | 'marrakech' | 'casablanca'>(defaultBranch);
  const [activeTab, setActiveTab] = useState("starters");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVeg, setFilterVeg] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState(false);
  const [showMenuScanModal, setShowMenuScanModal] = useState(false);
  const [scanBranch, setScanBranch] = useState<'medina' | 'casablanca'>('medina');
  const [currentScanPage, setCurrentScanPage] = useState(1);

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<'EN' | 'FR'>;
      setLang(customEvent.detail);
    };
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const categories = [
    { id: "starters", label: { EN: "Starters & Salads", FR: "Entrées & Salades" } },
    { id: "tandoor", label: { EN: "Tandoor & Grills", FR: "Grillades Tandoor" } },
    { id: "fusion", label: { EN: "Indo-Chinese Fusion", FR: "Fusion Indo-Chinoise" } },
    { id: "thalis", label: { EN: "Thalis & Combos", FR: "Thalis & Combos" } },
    { id: "poultry", label: { EN: "Chicken Curries", FR: "Currys de Poulet" } },
    { id: "lamb", label: { EN: "Mutton & Lamb", FR: "Agneau & Mouton" } },
    { id: "seafood", label: { EN: "Fish & Prawns", FR: "Poissons & Crevettes" } },
    { id: "vegetarian", label: { EN: "Vegetarian", FR: "Plats Végétariens" } },
    { id: "biryanis", label: { EN: "Biryani & Rice", FR: "Biryani & Riz" } },
    { id: "breads", label: { EN: "Naan & Breads", FR: "Naan & Pains" } },
    { id: "drinks", label: { EN: "Desserts & Lassis", FR: "Desserts & Boissons" } }
  ];

  const menuItems: MenuItem[] = [
    // 1. STARTERS & SALADS
    {
      id: "veg-samosa",
      name: { EN: "Vegetable Samosa (2 Pcs)", FR: "Samosa aux Légumes (2 Pcs)" },
      description: { EN: "Crispy South Asian pastry stuffed with seasoned spiced potatoes and green peas.", FR: "Chausson croustillant farci de pommes de terre épicées et petits pois." },
      price: { marrakech: 50, casablanca: 35 },
      category: "starters",
      imageUrl: "/images/web/food_samosa_platter.jpg",
      isVeg: true,
      isVegan: true
    },
    {
      id: "chicken-samosa",
      name: { EN: "Chicken Samosa (2 Pcs)", FR: "Samosa au Poulet (2 Pcs)" },
      description: { EN: "Flaky golden pastry wrapped around savory minced chicken and aromatic herbs.", FR: "Pâte dorée croustillante enrobant du poulet haché savoureux et herbes aromatiques." },
      price: { marrakech: 55, casablanca: 37 },
      category: "starters",
      imageUrl: "/images/web/food_samosa_platter.jpg"
    },
    {
      id: "veg-pakora",
      name: { EN: "Vegetable Pakora", FR: "Pakora aux Légumes" },
      description: { EN: "Assorted seasonal vegetables dipped in spiced chickpea batter and deep-fried until golden.", FR: "Beignets de légumes variés trempés dans une pâte de pois chiches épicée." },
      price: { marrakech: 55, casablanca: 35 },
      category: "starters",
      imageUrl: "/images/web/food_samosa_platter.jpg",
      isVeg: true,
      isVegan: true,
      isGF: true
    },
    {
      id: "cigar-vegetable",
      name: { EN: "Vegetable Cigars (2 Pcs)", FR: "Cigares aux Légumes (2 Pcs)" },
      description: { EN: "Savory blend of minced vegetables, ginger & coriander in rolled crispy filo pastry.", FR: "Mélange savoureux de légumes hachés, gingembre et coriandre en pâte filo croustillante." },
      price: { marrakech: 50, casablanca: 37 },
      category: "starters",
      isVeg: true
    },
    {
      id: "cigar-chicken",
      name: { EN: "Chicken Cigars (2 Pcs)", FR: "Cigares au Poulet (2 Pcs)" },
      description: { EN: "Crispy cylindrical pastry rolls filled with spiced minced chicken.", FR: "Rouleaux de pâte croustillants garnis de poulet haché assaisonné." },
      price: { marrakech: 55, casablanca: 37 },
      category: "starters"
    },
    {
      id: "cigar-shrimps",
      name: { EN: "Shrimp Cigars (2 Pcs)", FR: "Cigares aux Crevettes (2 Pcs)" },
      description: { EN: "Juicy ocean prawns wrapped in golden crispy pastry rolls.", FR: "Crevettes juteuses enrobées dans de fins rouleaux de pâte dorée." },
      price: { marrakech: 59, casablanca: 39 },
      category: "starters"
    },
    {
      id: "salad-poulet",
      name: { EN: "Salad de Poulet (Chicken Salad)", FR: "Salade de Poulet" },
      description: { EN: "Fresh garden greens topped with grilled chicken tikka, cucumber, tomatoes, and house dressing.", FR: "Salade fraîche garnie de poulet tikka grillé, concombres et sauce maison." },
      price: { marrakech: 55, casablanca: 35 },
      category: "starters",
      isGF: true
    },
    {
      id: "garden-fresh-salad",
      name: { EN: "Garden Fresh Salad", FR: "Salade Fraîche du Jardin" },
      description: { EN: "Crisp lettuce, cucumber, tomatoes, bell peppers, carrots with lemon mint dressing.", FR: "Laitue croustillante, concombre, tomates et carottes avec vinaigrette citron-menthe." },
      price: { marrakech: 40, casablanca: 25 },
      category: "starters",
      isVeg: true,
      isVegan: true,
      isGF: true
    },

    // 2. TANDOOR & GRILLS
    {
      id: "chicken-tikka-tandoori",
      name: { EN: "Chicken Tikka Tandoori (6 Pcs)", FR: "Poulet Tikka Tandoori (6 Pcs)" },
      description: { EN: "Tender chicken pieces marinated in yogurt, red chilies, garlic, ginger and clay-oven roasted.", FR: "Morceaux de poulet tendres marinés au yaourt, piment et ail, rôtis au four tandoor." },
      price: { marrakech: 120, casablanca: 95 },
      category: "tandoor",
      imageUrl: "/images/web/food_tandoori_chicken_platter.jpg",
      isSpicy: true,
      isGF: true
    },
    {
      id: "lamb-seekh-kabab",
      name: { EN: "Lamb Seekh Kabab (6 Pcs)", FR: "Seekh Kabab d'Agneau (6 Pcs)" },
      description: { EN: "Juicy minced lamb skewer blended with coriander, cumin, mint, and tandoor roasted.", FR: "Brochettes d'agneau haché parfumées aux herbes fraîches et rôties au tandoor." },
      price: { marrakech: 130, casablanca: 100 },
      category: "tandoor",
      imageUrl: "/images/web/food_tandoori_kebabs.jpg",
      isSpicy: true,
      isGF: true
    },
    {
      id: "chicken-malai-kabab",
      name: { EN: "Badshah Malai Kabab (6 Pcs)", FR: "Poulet Malai Kabab (6 Pcs)" },
      description: { EN: "Boneless chicken marinated in cashew paste, fresh cream, cardamom, and subtle spices.", FR: "Poulet désossé mariné à la crème de noix de cajou, cardamome et épices douces." },
      price: { marrakech: 120, casablanca: 95 },
      category: "tandoor",
      imageUrl: "/images/web/food_tandoori_kebabs.jpg",
      isGF: true
    },
    {
      id: "chicken-seekh-kabab",
      name: { EN: "Chicken Seekh Kabab (6 Pcs)", FR: "Seekh Kabab de Poulet (6 Pcs)" },
      description: { EN: "Spiced minced chicken skewers flame-grilled in our clay tandoor oven.", FR: "Brochettes de poulet haché épicé grillées au feu du tandoor." },
      price: { marrakech: 120, casablanca: 90 },
      category: "tandoor",
      isGF: true
    },
    {
      id: "paneer-tikka",
      name: { EN: "Paneer Tikka Tandoori (4 Pcs)", FR: "Paneer Tikka Tandoori (4 Pcs)" },
      description: { EN: "Chunks of cottage cheese marinated in spiced yogurt with onions & bell peppers, clay-oven grilled.", FR: "Dés de fromage frais marinés au yaourt épicé, poivrons et oignons, grillés au tandoor." },
      price: { marrakech: 110, casablanca: 90 },
      category: "tandoor",
      isVeg: true,
      isGF: true
    },
    {
      id: "fish-tandoori",
      name: { EN: "Fish Tandoori Grill", FR: "Poisson Tandoori Grillé" },
      description: { EN: "Fresh fish fillets marinated in Ajwain carom seeds, turmeric, lemon, and tandoori spices.", FR: "Filets de poisson frais marinés aux graines d'ajwain, curcuma et citron." },
      price: { marrakech: 140, casablanca: 110 },
      category: "tandoor",
      isGF: true
    },
    {
      id: "prawn-tandoori",
      name: { EN: "King Prawn Tandoori", FR: "Crevettes Geantes Tandoori" },
      description: { EN: "Jumbo prawns marinated in rich tandoori spices and char-grilled over white embers.", FR: "Gambas géantes marinées aux épices tandoori et grillées sur braises." },
      price: { marrakech: 180, casablanca: 130 },
      category: "tandoor",
      isGF: true
    },
    {
      id: "mixed-tandoori-platter",
      name: { EN: "Bombay Special Mixed Platter", FR: "Grand Plateau Mixte Bombay" },
      description: { EN: "Royal combination of Chicken Tikka, Lamb Seekh, Malai Kabab, and Tandoori Prawns.", FR: "Assortiment royal de Poulet Tikka, Brochette d'Agneau, Malai Kabab et Gambas." },
      price: { marrakech: 250, casablanca: 180 },
      category: "tandoor",
      imageUrl: "/images/web/food_tandoori_chicken_platter.jpg",
      isGF: true
    },

    // 3. INDO-CHINESE FUSION
    {
      id: "chilli-chicken",
      name: { EN: "Chilli Chicken (Indo-Chinese)", FR: "Poulet Pimenté (Indo-Chinois)" },
      description: { EN: "Crispy chicken tossed with bell peppers, garlic, spring onions, and spicy soy-chilli sauce.", FR: "Morceaux de poulet sautés aux poivrons, ail, ciboule et sauce pimentée au soja." },
      price: { marrakech: 110, casablanca: 85 },
      category: "fusion",
      imageUrl: "/images/web/food_butter_chicken_thali.jpg",
      isSpicy: true
    },
    {
      id: "chicken-wings-fusion",
      name: { EN: "Crispy Fusion Chicken Wings", FR: "Ailes de Poulet Croustillantes" },
      description: { EN: "Sweet and spicy Indo-Chinese glazed chicken wings topped with toasted sesame.", FR: "Ailes de poulet glacées à la sauce aigre-douce indo-chinoise et sésame." },
      price: { marrakech: 89, casablanca: 69 },
      category: "fusion",
      isSpicy: true
    },
    {
      id: "garlic-chicken-fusion",
      name: { EN: "Garlic Chicken Wok", FR: "Poulet Sauté à l'Ail" },
      description: { EN: "Tender chicken stir-fried in rich pungent garlic sauce with capsicum.", FR: "Poulet tendre sauté dans une sauce parfumée à l'ail et poivrons." },
      price: { marrakech: 110, casablanca: 85 },
      category: "fusion"
    },
    {
      id: "chilli-prawn",
      name: { EN: "Chilli Prawn / Shrimp Wok", FR: "Crevettes au Piment Indo-Chinois" },
      description: { EN: "Juicy prawns tossed in spicy tangy Indo-Chinese gravy with ginger & chilies.", FR: "Crevettes juteuses sautées dans une sauce piquante au gingembre et piments." },
      price: { marrakech: 150, casablanca: 110 },
      category: "fusion",
      isSpicy: true
    },
    {
      id: "chilli-fish",
      name: { EN: "Chilli Fish Wok", FR: "Poisson au Piment & Soja" },
      description: { EN: "Crispy batter-fried fish fillets tossed in spicy tangy pepper soy glaze.", FR: "Poisson croustillant enrobé d'une sauce piquante au soja et poivrons." },
      price: { marrakech: 140, casablanca: 95 },
      category: "fusion",
      isSpicy: true
    },
    {
      id: "chilli-paneer",
      name: { EN: "Chilli Paneer Wok", FR: "Paneer Pimenté Indo-Chinois" },
      description: { EN: "Cottage cheese cubes wok-fried with onions, bell peppers, and chili soy sauce.", FR: "Fromage paneer sauté au wok avec poivrons, oignons et piment soja." },
      price: { marrakech: 110, casablanca: 85 },
      category: "fusion",
      isVeg: true,
      isSpicy: true
    },

    // 4. THALIS & COMBOS
    {
      id: "non-veg-thali",
      name: { EN: "Royal Non-Vegetable Thali", FR: "Thali Royal Non-Végétarien" },
      description: { EN: "Complete feast featuring Butter Chicken, Lamb Curry, Dal, Basmati Rice, Butter Naan, Gulab Jamun & Raita.", FR: "Festin complet comprenant Poulet au Beurre, Curry d'Agneau, Lentilles, Riz Basmati, Naan et Dessert." },
      price: { marrakech: 150, casablanca: 120 },
      category: "thalis",
      imageUrl: "/images/web/food_butter_chicken_thali.jpg",
      locationExclusive: "marrakech"
    },
    {
      id: "veg-thali",
      name: { EN: "Royal Vegetarian Thali", FR: "Thali Royal Végétarien" },
      description: { EN: "Assortment of Paneer Butter Masala, Dal Makhani, Mixed Veg, Basmati Rice, Garlic Naan, Dessert & Salad.", FR: "Plateau traditionnel comprenant Paneer Masala, Dal Makhani, Légumes, Riz, Naan à l'ail et Dessert." },
      price: { marrakech: 150, casablanca: 110 },
      category: "thalis",
      imageUrl: "/images/web/food_butter_chicken_thali.jpg",
      isVeg: true
    },
    {
      id: "butter-chicken-combo",
      name: { EN: "Butter Chicken Express Combo", FR: "Combo Poulet au Beurre" },
      description: { EN: "Butter Chicken + Cheese Naan + Basmati Rice + Chilled Coca Cola.", FR: "Poulet au Beurre + Naan au Fromage + Riz Basmati + Coca-Cola frais." },
      price: { marrakech: 150, casablanca: 100 },
      category: "thalis",
      imageUrl: "/images/web/food_butter_chicken_thali.jpg"
    },
    {
      id: "chicken-tikka-combo",
      name: { EN: "Chicken Tikka Masala Combo", FR: "Combo Poulet Tikka Masala" },
      description: { EN: "Chicken Tikka Masala + Cheese Naan + Basmati Rice + Chilled Soda.", FR: "Poulet Tikka Masala + Naan au Fromage + Riz Basmati + Boisson au choix." },
      price: { marrakech: 150, casablanca: 100 },
      category: "thalis"
    },
    {
      id: "chicken-korma-combo",
      name: { EN: "Chicken Korma Combo", FR: "Combo Poulet Korma" },
      description: { EN: "Mughlai Chicken Korma + Cheese Naan + Steam Basmati Rice + Drink.", FR: "Poulet Korma aux Amandes + Naan Fromage + Riz Basmati + Boisson." },
      price: { marrakech: 150, casablanca: 100 },
      category: "thalis"
    },

    // 5. POULTRY (CHICKEN CURRIES)
    {
      id: "butter-chicken",
      name: { EN: "Famous Bombay Butter Chicken", FR: "Poulet au Beurre (Butter Chicken)" },
      description: { EN: "Clay-oven roasted chicken tikka simmered in rich creamy tomato butter cashew gravy.", FR: "Poulet rôtis au tandoor mijoté dans une sauce onctueuse aux tomates, beurre et cajou." },
      price: { marrakech: 110, casablanca: 95 },
      category: "poultry",
      imageUrl: "/images/web/food_butter_chicken_thali.jpg",
      isGF: true
    },
    {
      id: "chicken-tikka-masala",
      name: { EN: "Chicken Tikka Masala", FR: "Poulet Tikka Masala" },
      description: { EN: "Grilled chicken chunks cooked in spiced onion tomato masala gravy with green peppers.", FR: "Morceaux de poulet grillé cuits dans une sauce oignon-tomate épicée avec poivrons." },
      price: { marrakech: 110, casablanca: 95 },
      category: "poultry",
      imageUrl: "/images/web/food_butter_chicken_thali.jpg",
      isSpicy: true,
      isGF: true
    },
    {
      id: "chicken-korma",
      name: { EN: "Mughlai Chicken Korma", FR: "Poulet Korma Mughlai" },
      description: { EN: "Royal Mughlai style chicken braised in rich velvety cashew, almond, cream & saffron sauce.", FR: "Poulet façon royale mijoté dans une sauce veloutée aux noix de cajou, amandes et safran." },
      price: { marrakech: 110, casablanca: 95 },
      category: "poultry",
      isGF: true
    },
    {
      id: "goan-chicken-curry",
      name: { EN: "Goan Chicken Curry", FR: "Poulet Curry de Goa" },
      description: { EN: "Coastal Indian chicken curry with roasted spices, coconut milk, tamarind, and curry leaves.", FR: "Curry de poulet côtier au lait de coco, tamarin, épices torréfiées et feuilles de curry." },
      price: { marrakech: 110, casablanca: 90 },
      category: "poultry",
      isSpicy: true,
      isGF: true
    },
    {
      id: "chicken-curry-classic",
      name: { EN: "Home-style Chicken Curry", FR: "Curry de Poulet Traditionnel" },
      description: { EN: "Tender chicken simmered in traditional North Indian aromatic onion-ginger-garlic gravy.", FR: "Poulet tendre mijoté dans une sauce traditionnelle du Nord aux oignons et gingembre." },
      price: { marrakech: 110, casablanca: 90 },
      category: "poultry",
      isGF: true
    },
    {
      id: "saag-chicken",
      name: { EN: "Chicken Saag (Spinach Chicken)", FR: "Poulet aux Épinards (Saag)" },
      description: { EN: "Tender chicken cooked with slow-simmered spiced fresh spinach puree & butter.", FR: "Poulet cuit avec une purée d'épinards frais mijotée aux épices et au beurre." },
      price: { marrakech: 110, casablanca: 90 },
      category: "poultry",
      isGF: true
    },
    {
      id: "chicken-vindaloo",
      name: { EN: "Spicy Chicken Vindaloo", FR: "Poulet Vindaloo Épicé" },
      description: { EN: "Fiery Goan Portuguese style chicken cooked with coconut vinegar, red chilies, and potatoes.", FR: "Spécialité Goanaise très épicée au piment rouge, vinaigre et pommes de terre." },
      price: { marrakech: 110, casablanca: 90 },
      category: "poultry",
      isSpicy: true,
      isGF: true
    },
    {
      id: "chicken-jalfrezi",
      name: { EN: "Chicken Jalfrezi", FR: "Poulet Jalfrezi" },
      description: { EN: "Diced chicken sautéed with bell peppers, onions, tomatoes, and ground garam masala.", FR: "Dés de poulet sautés avec poivrons, oignons, tomates et épices moulues." },
      price: { marrakech: 110, casablanca: 90 },
      category: "poultry",
      isSpicy: true,
      isGF: true
    },
    {
      id: "chicken-kadhai",
      name: { EN: "Chicken Kadai / Karahi", FR: "Poulet Kadai" },
      description: { EN: "North Indian specialty chicken cooked in iron wok with coriander seeds, tomatoes & peppers.", FR: "Poulet cuit au wok en fonte avec graines de coriandre, tomates et poivrons." },
      price: { marrakech: 110, casablanca: 90 },
      category: "poultry",
      isSpicy: true,
      isGF: true
    },
    {
      id: "rara-chicken",
      name: { EN: "Rara Chicken Double Delight", FR: "Poulet Rara du Chef" },
      description: { EN: "Unique combination of chicken pieces simmered together with spiced minced chicken gravy.", FR: "Mélange savoureux de morceaux de poulet mijotés dans une sauce au poulet haché." },
      price: { marrakech: 110, casablanca: 90 },
      category: "poultry",
      isSpicy: true,
      isGF: true
    },

    // 6. MUTTON & LAMB
    {
      id: "bhuna-gosht",
      name: { EN: "Bhuna Gosht (Lamb)", FR: "Bhuna Gosht (Agneau)" },
      description: { EN: "Slow-roasted tender lamb chunks cooked down in caramelized onion tomato reduction until thick.", FR: "Morceaux d'agneau mijotés longuement dans une réduction d'oignons caramélisés et tomates." },
      price: { marrakech: 120, casablanca: 100 },
      category: "lamb",
      imageUrl: "/images/web/food_tandoori_kebabs.jpg",
      isSpicy: true,
      isGF: true
    },
    {
      id: "kashmiri-rogan-josh",
      name: { EN: "Kashmiri Rogan Josh", FR: "Kashmiri Rogan Josh (Agneau)" },
      description: { EN: "Iconic Kashmiri lamb curry with red Ratanjot bark, fennel seeds, ginger, and aromatic spices.", FR: "Curry d'agneau emblématique du Cachemire mijoté au fenouil, gingembre et épices." },
      price: { marrakech: 120, casablanca: 100 },
      category: "lamb",
      imageUrl: "/images/web/food_tandoori_kebabs.jpg",
      isSpicy: true,
      isGF: true
    },
    {
      id: "mutton-korma",
      name: { EN: "Shahi Mutton Korma", FR: "Korma d'Agneau d'Or" },
      description: { EN: "Rich Mughlai lamb curry braised in yogurt, almonds, cashews, saffron, and aromatic rose essence.", FR: "Agneau fondant dans une sauce crèmeuse aux noix de cajou, amandes et safran." },
      price: { marrakech: 120, casablanca: 100 },
      category: "lamb",
      isGF: true
    },
    {
      id: "lamb-kadai",
      name: { EN: "Lamb Kadai / Karahi", FR: "Agneau Kadai" },
      description: { EN: "Tender lamb chunks stir-fried with crushed spices, tomatoes, garlic, ginger, and green peppers.", FR: "Morceaux d'agneau sautés avec oignons, poivrons et épices fraîchement moulues." },
      price: { marrakech: 120, casablanca: 100 },
      category: "lamb",
      isSpicy: true,
      isGF: true
    },
    {
      id: "lamb-vindaloo",
      name: { EN: "Spicy Lamb Vindaloo", FR: "Agneau Vindaloo Piquant" },
      description: { EN: "Intensely spiced Goan lamb curry with hot red chili paste, tamarind, and garlic.", FR: "Curry d'agneau très relevé à la pâte de piment rouge, tamarin et ail." },
      price: { marrakech: 120, casablanca: 100 },
      category: "lamb",
      isSpicy: true,
      isGF: true
    },
    {
      id: "saag-gosht",
      name: { EN: "Saag Gosht (Spinach Lamb)", FR: "Agneau aux Épinards (Saag)" },
      description: { EN: "Slow-cooked lamb with fresh spinach puree, butter, garlic, and North Indian spices.", FR: "Agneau tendre mijoté avec épinards frais à l'ail, beurre et épices." },
      price: { marrakech: 120, casablanca: 100 },
      category: "lamb",
      isGF: true
    },
    {
      id: "rara-mutton",
      name: { EN: "Rara Mutton Signature", FR: "Mouton Rara Spécial" },
      description: { EN: "Mouthwatering blend of lamb chunks cooked together with spiced minced mutton keema.", FR: "Délicieux mélange de morceaux d'agneau et de viande hachée mijotée aux épices." },
      price: { marrakech: 120, casablanca: 100 },
      category: "lamb",
      isSpicy: true,
      isGF: true
    },

    // 7. FISH & PRAWNS (SEAFOOD)
    {
      id: "goan-prawn-curry",
      name: { EN: "Goan Prawn Curry", FR: "Curry de Crevettes de Goa" },
      description: { EN: "Succulent prawns simmered in coconut milk, turmeric, green chilies, and tamarind.", FR: "Crevettes succulentes mijotées au lait de coco, curcuma, piments verts et tamarin." },
      price: { marrakech: 160, casablanca: 110 },
      category: "seafood",
      isSpicy: true,
      isGF: true
    },
    {
      id: "prawn-masala",
      name: { EN: "Prawn Masala Special", FR: "Crevettes Masala" },
      description: { EN: "Jumbo prawns tossed in thick onion tomato masala gravy enriched with garlicky herbs.", FR: "Gambas sautées dans une sauce épaisse aux oignons, tomates et ail." },
      price: { marrakech: 160, casablanca: 110 },
      category: "seafood",
      isSpicy: true,
      isGF: true
    },
    {
      id: "prawn-korma",
      name: { EN: "Mughlai Prawn Korma", FR: "Korma de Crevettes" },
      description: { EN: "Prawns braised in mild velvety cream cashew and almond Mughlai gravy.", FR: "Crevettes braisées dans une douce sauce veloutée aux noix de cajou et crème." },
      price: { marrakech: 160, casablanca: 110 },
      category: "seafood",
      isGF: true
    },
    {
      id: "goan-fish-curry",
      name: { EN: "Goan Fish Curry", FR: "Curry de Poisson de Goa" },
      description: { EN: "Fresh ocean fish cooked in coconut cream, coriander seeds, lemon, and curry leaf gravy.", FR: "Poisson frais cuit dans une crème de coco aux graines de coriandre et feuilles de curry." },
      price: { marrakech: 140, casablanca: 110 },
      category: "seafood",
      isGF: true
    },

    // 8. VEGETARIAN CURRIES
    {
      id: "dall-makhni",
      name: { EN: "Royal Dal Makhani", FR: "Dal Makhani Royal" },
      description: { EN: "Whole black lentils slow-cooked overnight with kidney beans, butter, cream, and fenugreek.", FR: "Lentilles noires mijotées toute la nuit avec haricots rouges, beurre et crème." },
      price: { marrakech: 99, casablanca: 90 },
      category: "vegetarian",
      isVeg: true,
      isGF: true
    },
    {
      id: "dall-tadka",
      name: { EN: "Yellow Dal Tadka", FR: "Dal Tadka Jaune" },
      description: { EN: "Yellow lentils tempered with cumin seeds, garlic, mustard seeds, ghee, and fresh coriander.", FR: "Lentilles jaunes préparées avec un tempérage au cumin, ail et beurre clarifié ghee." },
      price: { marrakech: 95, casablanca: 85 },
      category: "vegetarian",
      isVeg: true,
      isVegan: true,
      isGF: true
    },
    {
      id: "paneer-makhan-wala",
      name: { EN: "Paneer Butter Masala", FR: "Paneer au Beurre (Makhan Wala)" },
      description: { EN: "Cottage cheese cubes simmered in velvety tomato butter cashew gravy with dried kasuri methi.", FR: "Dés de fromage paneer dans une sauce veloutée aux tomates, beurre et fenugrec." },
      price: { marrakech: 99, casablanca: 90 },
      category: "vegetarian",
      isVeg: true,
      isGF: true
    },
    {
      id: "saag-paneer",
      name: { EN: "Saag Paneer (Spinach Cottage Cheese)", FR: "Saag Paneer (Épinards & Fromage)" },
      description: { EN: "Cottage cheese cubes cooked in rich spinach puree laced with garlic, butter, and cream.", FR: "Fromage paneer dans une purée d'épinards parfumée à l'ail, au beurre et à la crème." },
      price: { marrakech: 99, casablanca: 90 },
      category: "vegetarian",
      isVeg: true,
      isGF: true
    },
    {
      id: "chana-amritsari",
      name: { EN: "Chana Amritsari", FR: "Chana Amritsari (Pois Chiches)" },
      description: { EN: "Authentic North Indian chickpea curry cooked with pomegranate powder and roasted tea spices.", FR: "Curry de pois chiches du Pendjab préparé aux épices rôties et grenade." },
      price: { marrakech: 95, casablanca: 85 },
      category: "vegetarian",
      isVeg: true,
      isVegan: true,
      isGF: true
    },
    {
      id: "aloo-gobi",
      name: { EN: "Aloo Gobi Adraki", FR: "Aloo Gobi (Pommes de Terre & Chou-fleur)" },
      description: { EN: "Potatoes and cauliflower florets sautéed with ginger, turmeric, cumin, and cilantro.", FR: "Pommes de terre et chou-fleur sautés au gingembre, curcuma et coriandre." },
      price: { marrakech: 90, casablanca: 79 },
      category: "vegetarian",
      isVeg: true,
      isVegan: true,
      isGF: true
    },
    {
      id: "jeera-aloo",
      name: { EN: "Jeera Aloo", FR: "Jeera Aloo (Pommes de Terre au Cumin)" },
      description: { EN: "Crispy diced potatoes tossed with abundant roasted cumin seeds, turmeric, and lemon juice.", FR: "Pommes de terre rissolées aux graines de cumin torréfiées et jus de citron." },
      price: { marrakech: 90, casablanca: 79 },
      category: "vegetarian",
      isVeg: true,
      isVegan: true,
      isGF: true
    },
    {
      id: "mix-vegetable",
      name: { EN: "Subz Mixed Vegetables", FR: "Méli-mélo de Légumes" },
      description: { EN: "Seasonal garden vegetables cooked in North Indian spiced onion tomato sauce.", FR: "Assortiment de légumes de saison cuits dans une sauce oignon-tomate épicée." },
      price: { marrakech: 95, casablanca: 85 },
      category: "vegetarian",
      isVeg: true,
      isVegan: true,
      isGF: true
    },
    {
      id: "kadai-paneer",
      name: { EN: "Kadai Paneer Wok", FR: "Kadai Paneer au Wok" },
      description: { EN: "Paneer cheese sautéed in wok with bell peppers, tomatoes, garlic, and fresh karahi masala.", FR: "Fromage paneer sauté avec poivrons, tomates, ail et épices karahi moulu." },
      price: { marrakech: 99, casablanca: 90 },
      category: "vegetarian",
      isVeg: true,
      isGF: true
    },
    {
      id: "paneer-lababdar",
      name: { EN: "Paneer Lababdar", FR: "Paneer Lababdar" },
      description: { EN: "Grated and cubed cottage cheese cooked in creamy onion-tomato & cashew gravy.", FR: "Fromage paneer râpé et en cubes dans une onctueuse sauce tomate-oignon et cajou." },
      price: { marrakech: 99, casablanca: 90 },
      category: "vegetarian",
      isVeg: true,
      isGF: true
    },
    {
      id: "kashmiri-dum-aloo",
      name: { EN: "Kashmiri Dum Aloo", FR: "Dum Aloo du Cachemire" },
      description: { EN: "Baby potatoes fried and simmered in aromatic yogurt fennel sauce with Kashmiri chili.", FR: "Petites pommes de terre mijotées au yaourt, fenouil et piment du Cachemire." },
      price: { marrakech: 95, casablanca: 85 },
      category: "vegetarian",
      isVeg: true,
      isGF: true
    },

    // 9. BIRYANI & RICE
    {
      id: "chicken-biryani",
      name: { EN: "Clay Pot Chicken Biryani", FR: "Biryani au Poulet en Pot d'Argile" },
      description: { EN: "Fragrant basmati rice layered with spiced marinated chicken, saffron, fried onions & mint in clay handi.", FR: "Riz basmati parfumé mijoté à l'étouffée avec poulet épicé, safran et oignons frits." },
      price: { marrakech: 130, casablanca: 110 },
      category: "biryanis",
      imageUrl: "/images/web/food_clay_pot_biryani.jpg",
      isGF: true
    },
    {
      id: "lamb-biryani",
      name: { EN: "Royal Mutton Dum Biryani", FR: "Biryani d'Agneau Royal" },
      description: { EN: "Tender lamb marinated in yogurt & spices cooked dum-style under sealed dough with saffron rice.", FR: "Agneau tendre mariné aux épices cuit à l'étouffée sous pâte scellée avec riz au safran." },
      price: { marrakech: 150, casablanca: 120 },
      category: "biryanis",
      imageUrl: "/images/web/food_clay_pot_biryani.jpg",
      isGF: true
    },
    {
      id: "prawn-biryani",
      name: { EN: "King Prawn Biryani", FR: "Biryani aux Crevettes Geantes" },
      description: { EN: "Juicy ocean prawns spiced with star anise, cardamom, saffron, and baked with basmati rice.", FR: "Crevettes géantes parfumées à la badiane, cardamome et safran avec riz basmati." },
      price: { marrakech: 165, casablanca: 130 },
      category: "biryanis",
      imageUrl: "/images/web/food_clay_pot_biryani.jpg",
      isGF: true
    },
    {
      id: "veg-biryani",
      name: { EN: "Subz Vegetable Biryani", FR: "Biryani aux Légumes" },
      description: { EN: "Assorted vegetables, paneer, aromatic basmati rice, rose water, mint, and toasted nuts.", FR: "Légumes variés, paneer, riz basmati parfumé, eau de rose, menthe et noix." },
      price: { marrakech: 120, casablanca: 100 },
      category: "biryanis",
      imageUrl: "/images/web/food_clay_pot_biryani.jpg",
      isVeg: true,
      isGF: true
    },
    {
      id: "veg-pulao",
      name: { EN: "Aromatic Vegetable Pulao", FR: "Pulao aux Légumes" },
      description: { EN: "Fluffy basmati rice cooked with green peas, carrots, beans, whole spices, and ghee.", FR: "Riz basmati léger cuit avec petits pois, carottes, haricots et épices entières." },
      price: { marrakech: 50, casablanca: 40 },
      category: "biryanis",
      isVeg: true,
      isGF: true
    },
    {
      id: "chicken-fried-rice",
      name: { EN: "Chicken Wok Fried Rice", FR: "Riz Frit au Poulet" },
      description: { EN: "Indo-Chinese style wok-tossed basmati rice with diced chicken, eggs, and spring onion.", FR: "Riz basmati sauté au wok façon indo-chinoise avec poulet, œufs et ciboule." },
      price: { marrakech: 60, casablanca: 45 },
      category: "biryanis"
    },
    {
      id: "jeera-rice",
      name: { EN: "Jeera Cumin Basmati Rice", FR: "Riz Basmati au Cumin" },
      description: { EN: "Fragrant long-grain basmati rice tempered with roasted cumin seeds and butter ghee.", FR: "Riz basmati à grains longs parfumé aux graines de cumin rissolées." },
      price: { marrakech: 40, casablanca: 40 },
      category: "biryanis",
      isVeg: true,
      isGF: true
    },
    {
      id: "steam-rice",
      name: { EN: "Plain Steamed Basmati Rice", FR: "Riz Basmati Nature" },
      description: { EN: "Premium steamed aromatic Himalayan long-grain basmati rice.", FR: "Riz basmati nature cuit à la vapeur." },
      price: { marrakech: 30, casablanca: 30 },
      category: "biryanis",
      isVeg: true,
      isVegan: true,
      isGF: true
    },

    // 10. BREADS & NAANS
    {
      id: "garlic-naan",
      name: { EN: "Garlic Butter Naan", FR: "Naan à l'Ail & Beurre" },
      description: { EN: "Tandoor baked leavened flatbread brushed with garlic butter and fresh cilantro.", FR: "Pain cuit au tandoor badigeonné de beurre à l'ail et coriandre fraîche." },
      price: { marrakech: 20, casablanca: 15 },
      category: "breads",
      imageUrl: "/images/web/food_garlic_naan_basket.jpg",
      isVeg: true
    },
    {
      id: "cheese-naan",
      name: { EN: "Melted Cheese Naan", FR: "Naan au Fromage Fondu" },
      description: { EN: "Tandoor naan bread stuffed with creamy melted mozzarella and cheddar cheese.", FR: "Pain naan généreusement farci de fromage fondu et cuit au tandoor." },
      price: { marrakech: 25, casablanca: 20 },
      category: "breads",
      imageUrl: "/images/web/food_garlic_naan_basket.jpg",
      isVeg: true
    },
    {
      id: "garlic-cheese-naan",
      name: { EN: "Garlic Cheese Naan", FR: "Naan Ail & Fromage" },
      description: { EN: "Ultimate stuffed cheese naan topped with roasted garlic butter and cilantro.", FR: "Pain naan farci de fromage et nappé de beurre à l'ail." },
      price: { marrakech: 25, casablanca: 20 },
      category: "breads",
      imageUrl: "/images/web/food_garlic_naan_basket.jpg",
      isVeg: true
    },
    {
      id: "garlic-chilli-naan",
      name: { EN: "Garlic Chilli Naan", FR: "Naan Ail & Piment" },
      description: { EN: "Spicy tandoori flatbread topped with minced green chilies and garlic butter.", FR: "Pain naan épicé garni de piments verts hachés et ail." },
      price: { marrakech: 20, casablanca: 15 },
      category: "breads",
      isVeg: true,
      isSpicy: true
    },
    {
      id: "butter-naan",
      name: { EN: "Classic Butter Naan", FR: "Naan au Beurre Classique" },
      description: { EN: "Soft fluffy leavened bread cooked in clay oven and topped with melted ghee.", FR: "Pain moelleux traditionnel du tandoor nappé de beurre fondant." },
      price: { marrakech: 18, casablanca: 15 },
      category: "breads",
      isVeg: true
    },
    {
      id: "plain-naan",
      name: { EN: "Plain Naan", FR: "Naan Nature" },
      description: { EN: "Traditional unbuttered clay oven leavened flatbread.", FR: "Pain traditionnel cuit au four tandoor sans beurre." },
      price: { marrakech: 15, casablanca: 10 },
      category: "breads",
      isVeg: true
    },
    {
      id: "tandoori-roti",
      name: { EN: "Whole Wheat Tandoori Roti", FR: "Roti au Blé Complet" },
      description: { EN: "Healthy whole-wheat flatbread cooked crisp inside the clay tandoor oven.", FR: "Pain au blé complet cuit au tandoor sans levain." },
      price: { marrakech: 15, casablanca: 10 },
      category: "breads",
      isVeg: true,
      isVegan: true
    },
    {
      id: "lachha-parantha",
      name: { EN: "Lachha Layered Paratha", FR: "Lachha Paratha Feuilleté" },
      description: { EN: "Flaky multi-layered North Indian whole-wheat bread brushed with ghee.", FR: "Pain feuilleté croustillant au blé complet et beurre clarifié." },
      price: { marrakech: 20, casablanca: 15 },
      category: "breads",
      isVeg: true
    },
    {
      id: "pudina-parantha",
      name: { EN: "Pudina Mint Paratha", FR: "Paratha à la Menthe Fraîche" },
      description: { EN: "Multi-layered wheat paratha layered with dried crushed mint and aromatic cumin.", FR: "Pain feuilleté parfumé à la menthe séchée et au cumin." },
      price: { marrakech: 20, casablanca: 15 },
      category: "breads",
      isVeg: true
    },

    // 11. DESSERTS & DRINKS / LASSIS
    {
      id: "gulab-jamun",
      name: { EN: "Hot Gulab Jamun (2 Pcs)", FR: "Gulab Jamun Chaud (2 Pcs)" },
      description: { EN: "Warm milk-solid dumplings soaked in cardamom rose syrup, served with pistachio slices.", FR: "Boules de lait concentré dorées imbibées d'un sirop chaud à la rose et pistaches." },
      price: { marrakech: 50, casablanca: 35 },
      category: "drinks",
      imageUrl: "/images/web/food_gulab_jamun_dessert.jpg",
      isVeg: true
    },
    {
      id: "mango-kulfi",
      name: { EN: "Royal Mango Kulfi", FR: "Kulfi Glacé à la Mangue" },
      description: { EN: "Traditional slow-boiled milk ice cream infused with Alphonso mango pulp.", FR: "Glace indienne artisanale au lait réduit et à la pulpe de mangue Alphonso." },
      price: { marrakech: 50, casablanca: 40 },
      category: "drinks",
      isVeg: true,
      isGF: true
    },
    {
      id: "shahi-tukda",
      name: { EN: "Mughlai Shahi Tukda", FR: "Shahi Tukda (Pain Perdu Royal)" },
      description: { EN: "Royal fried bread pudding soaked in saffron rabri condensed milk with almonds.", FR: "Pain royal doré imbibé de lait condensé au safran, amandes et cardamome." },
      price: { marrakech: 50, casablanca: 40 },
      category: "drinks",
      isVeg: true
    },
    {
      id: "saffron-pistachio-kulfi",
      name: { EN: "Saffron Pistachio Kulfi", FR: "Kulfi Safran & Pistache" },
      description: { EN: "Traditional frozen cream dessert flavored with Spanish saffron strands and pistachios.", FR: "Glace indienne au safran pur et pistaches grillées." },
      price: { marrakech: 50, casablanca: 40 },
      category: "drinks",
      isVeg: true,
      isGF: true
    },
    {
      id: "rasmalai",
      name: { EN: "Saffron Rasmalai (2 Pcs)", FR: "Rasmalai au Safran (2 Pcs)" },
      description: { EN: "Soft cottage cheese discs soaked in chilled saffron cardamom milk topped with nuts.", FR: "Disques de fromage frais moelleux baignant dans du lait parfumé au safran." },
      price: { marrakech: 55, casablanca: 45 },
      category: "drinks",
      isVeg: true,
      isGF: true
    },
    {
      id: "mango-lassi",
      name: { EN: "Fresh Mango Lassi", FR: "Lassi à la Mangue Fraîche" },
      description: { EN: "Refreshing chilled sweet yogurt smoothie blended with ripe mango pulp and cardamom.", FR: "Boisson onctueuse au yaourt brassé et à la mangue douce." },
      price: { marrakech: 50, casablanca: 35 },
      category: "drinks",
      imageUrl: "/images/web/food_mango_lassi.jpg",
      isVeg: true,
      isGF: true
    },
    {
      id: "strawberry-lassi",
      name: { EN: "Strawberry Lassi", FR: "Lassi à la Fraise" },
      description: { EN: "Creamy sweet yogurt drink blended with fresh strawberry puree.", FR: "Boisson crémeuse au yaourt et purée de fraises fraîches." },
      price: { marrakech: 50, casablanca: 30 },
      category: "drinks",
      isVeg: true,
      isGF: true
    },
    {
      id: "sweet-lassi",
      name: { EN: "Classic Sweet Lassi", FR: "Lassi Sucré Classique" },
      description: { EN: "Traditional Punjabi sweet yogurt shake with rose water and cardamom.", FR: "Boisson traditionnelle au yaourt sucré et eau de rose." },
      price: { marrakech: 35, casablanca: 25 },
      category: "drinks",
      isVeg: true,
      isGF: true
    },
    {
      id: "salty-lassi",
      name: { EN: "Salty Cumin Lassi", FR: "Lassi Salé au Cumin" },
      description: { EN: "Refreshing savory yogurt drink churned with roasted cumin seeds and black salt.", FR: "Boisson rafraîchissante au yaourt salé et cumin grillé." },
      price: { marrakech: 35, casablanca: 25 },
      category: "drinks",
      isVeg: true,
      isGF: true
    },
    {
      id: "mint-mojito",
      name: { EN: "Virgin Mint Mojito Mocktail", FR: "Mojito Vierge Menthe & Citron" },
      description: { EN: "Refreshing mocktail with crushed fresh mint leaves, lime juice, cane syrup, and sparkling soda.", FR: "Cocktail rafraîchissant sans alcool à la menthe fraîche, citron vert et eau gazeuse." },
      price: { marrakech: 35, casablanca: 25 },
      category: "drinks",
      isVeg: true,
      isVegan: true,
      isGF: true
    }
  ];

  const filteredItems = menuItems.filter(item => {
    // Filter by tab category
    if (activeTab !== item.category) return false;

    // Filter by branch availability
    if (selectedBranch === 'marrakech' && item.locationExclusive === 'casablanca') return false;
    if (selectedBranch === 'casablanca' && item.locationExclusive === 'marrakech') return false;

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.EN.toLowerCase().includes(q) || item.name.FR.toLowerCase().includes(q);
      const matchDesc = item.description.EN.toLowerCase().includes(q) || item.description.FR.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }

    // Dietary filters
    if (filterVeg && !item.isVeg) return false;
    if (filterSpicy && !item.isSpicy) return false;

    return true;
  });

  const getDisplayPrice = (item: MenuItem) => {
    if (selectedBranch === 'casablanca') {
      return `${item.price.casablanca} Dhs`;
    } else if (selectedBranch === 'marrakech') {
      return `${item.price.marrakech} Dhs`;
    } else {
      return `${item.price.marrakech} Dhs (Marrakech) / ${item.price.casablanca} Dhs (Casa)`;
    }
  };

  return (
    <div className="menu-container">
      {/* Visual Menu Scans Modal Trigger & Location Branch Switcher */}
      <div className="menu-top-toolbar flex-center flex-column gap-3 mb-4">
        {/* Branch Selection Buttons */}
        <div className="branch-selector-pills flex-center gap-2 flex-wrap">
          <span className="text-muted text-sm font-semibold mr-2">
            {lang === 'EN' ? 'Branch Prices:' : 'Tarifs par Succursale:'}
          </span>
          <button
            className={`btn-branch-pill ${selectedBranch === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedBranch('all')}
          >
            🌟 {lang === 'EN' ? 'All Locations' : 'Toutes les Succursales'}
          </button>
          <button
            className={`btn-branch-pill ${selectedBranch === 'marrakech' ? 'active' : ''}`}
            onClick={() => setSelectedBranch('marrakech')}
          >
            🕌 Marrakech (Gueliz & Medina)
          </button>
          <button
            className={`btn-branch-pill ${selectedBranch === 'casablanca' ? 'active' : ''}`}
            onClick={() => setSelectedBranch('casablanca')}
          >
            🌊 Casablanca (Ghandi)
          </button>
        </div>

        {/* View Official Scanned Menu Cards Button */}
        <div className="menu-scans-trigger-wrapper">
          <button
            className="btn-gold-secondary flex-center gap-2"
            onClick={() => {
              setScanBranch(selectedBranch === 'casablanca' ? 'casablanca' : 'medina');
              setCurrentScanPage(1);
              setShowMenuScanModal(true);
            }}
          >
            <span>📜</span>
            <span>{lang === 'EN' ? 'View Official Scanned Menu Pages' : 'Voir les Pages Officielles du Menu Scanné'}</span>
          </button>
        </div>
      </div>

      {/* Search & Dietary Filters */}
      <div className="menu-controls glass-panel p-3 mb-4 rounded-xl">
        <div className="search-bar-wrapper mb-3">
          <input
            type="text"
            placeholder={lang === 'EN' ? '🔍 Search dishes, ingredients...' : '🔍 Rechercher un plat, ingrédient...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="menu-search-input w-full"
          />
        </div>
        <div className="dietary-toggles flex-between flex-wrap gap-2">
          <div className="toggles flex-center gap-3">
            <label className="checkbox-label flex-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={filterVeg}
                onChange={(e) => setFilterVeg(e.target.checked)}
              />
              <span>🌱 {lang === 'EN' ? 'Vegetarian Only' : 'Végétarien Uniquement'}</span>
            </label>
            <label className="checkbox-label flex-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={filterSpicy}
                onChange={(e) => setFilterSpicy(e.target.checked)}
              />
              <span>🌶️ {lang === 'EN' ? 'Spicy Only' : 'Épicé Uniquement'}</span>
            </label>
          </div>
          <span className="results-count text-sm text-muted">
            {filteredItems.length} {lang === 'EN' ? 'Dishes Found' : 'Plats Trouvés'}
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="menu-tabs-wrapper overflow-x-auto mb-5 pb-2">
        <div className="menu-tabs flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`menu-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Dish Items Grid */}
      <div className="menu-items-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-card glass-panel p-5 rounded-2xl flex flex-col sm:flex-row gap-5 transition-all duration-300 hover:border-gold hover:shadow-2xl group">
            {item.imageUrl ? (
              <div className="dish-thumb-wrapper relative w-full sm:w-36 h-36 flex-shrink-0 rounded-xl overflow-hidden border border-gold-subtle bg-black/40">
                <Image
                  src={item.imageUrl}
                  alt={item.name[lang]}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, 144px"
                />
              </div>
            ) : (
              <div className="dish-thumb-placeholder w-full sm:w-36 h-36 flex-shrink-0 rounded-xl bg-gold-subtle/20 border border-gold-subtle flex-center text-4xl">
                🍲
              </div>
            )}
            <div className="dish-info flex-1 flex flex-col justify-between">
              <div>
                <div className="dish-header flex-between items-start mb-2 gap-2">
                  <h3 className="dish-title font-serif text-xl font-bold flex items-center flex-wrap gap-2 text-white group-hover:text-gold transition-colors">
                    {item.name[lang]}
                    {item.isVeg && <span title="Vegetarian" className="text-sm">🌱</span>}
                    {item.isSpicy && <span title="Spicy" className="text-sm">🌶️</span>}
                  </h3>
                  <span className="dish-price gold-accent font-serif font-bold text-lg whitespace-nowrap bg-gold-subtle/20 px-3 py-1 rounded-full border border-gold-subtle">
                    {getDisplayPrice(item)}
                  </span>
                </div>
                <p className="dish-description text-sm text-muted mb-3 leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
              <div className="dish-tags flex flex-wrap gap-2 text-xs pt-2 border-t border-white/10">
                {item.isVeg && <span className="tag tag-green">🌱 Vegetarian</span>}
                {item.isVegan && <span className="tag tag-green">🌿 Vegan</span>}
                {item.isSpicy && <span className="tag tag-red">🌶️ Mildly Spicy</span>}
                {item.isGF && <span className="tag tag-gold">🌾 Gluten-Free</span>}
                {item.locationExclusive === 'marrakech' && (
                  <span className="tag tag-purple">🕌 Marrakech & Medina Exclusive</span>
                )}
                {item.locationExclusive === 'casablanca' && (
                  <span className="tag tag-blue">🌊 Casablanca Exclusive</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Official Scanned Menu Modal */}
      {showMenuScanModal && (
        <div className="modal-overlay flex-center p-4 fixed inset-0 z-50 bg-black/80 backdrop-blur-md">
          <div className="modal-content glass-panel p-5 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="modal-header flex-between mb-3 border-b border-gold-subtle pb-3">
              <div className="flex-center gap-3">
                <h3 className="font-serif text-xl font-bold text-gold">
                  📜 {lang === 'EN' ? 'Official Scanned Menu' : 'Pages Officielles du Menu'}
                </h3>
                <div className="flex gap-2 flex-wrap">
                  <a
                    href="/Menu Restaurant Bombay 2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm btn-gold flex-center gap-1 text-xs"
                    title="Download Official 2023 PDF Menu"
                  >
                    <span>📥</span> {lang === 'EN' ? 'Download PDF Menu' : 'Télécharger le Menu PDF'}
                  </a>
                  <button
                    className={`btn-sm ${scanBranch === 'medina' ? 'btn-gold' : 'btn-outline'}`}
                    onClick={() => { setScanBranch('medina'); setCurrentScanPage(1); }}
                  >
                    Marrakech (10 Pages)
                  </button>
                  <button
                    className={`btn-sm ${scanBranch === 'casablanca' ? 'btn-gold' : 'btn-outline'}`}
                    onClick={() => { setScanBranch('casablanca'); setCurrentScanPage(1); }}
                  >
                    Casablanca (12 Pages)
                  </button>
                </div>
              </div>
              <button
                onClick={() => setShowMenuScanModal(false)}
                className="text-2xl hover:text-gold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="modal-body flex-1 overflow-y-auto flex-center p-2">
              <div className="scan-image-wrapper relative w-full max-w-2xl aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border border-gold">
                <Image
                  src={
                    scanBranch === 'medina'
                      ? `/images/medina_menu/medina_menu_page_${currentScanPage}.jpg`
                      : `/images/casablanca_menu/casablanca_menu_page_${currentScanPage}.jpg`
                  }
                  alt={`Menu Page ${currentScanPage}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="modal-footer flex-between border-t border-gold-subtle pt-3 mt-2">
              <button
                className="btn-outline flex-center gap-1"
                disabled={currentScanPage === 1}
                onClick={() => setCurrentScanPage(p => Math.max(1, p - 1))}
              >
                ← {lang === 'EN' ? 'Previous Page' : 'Page Précédente'}
              </button>
              <span className="text-sm font-serif gold-accent font-semibold">
                Page {currentScanPage} / {scanBranch === 'medina' ? 10 : 12}
              </span>
              <button
                className="btn-outline flex-center gap-1"
                disabled={currentScanPage === (scanBranch === 'medina' ? 10 : 12)}
                onClick={() => setCurrentScanPage(p => Math.min(scanBranch === 'medina' ? 10 : 12, p + 1))}
              >
                {lang === 'EN' ? 'Next Page' : 'Page Suivante'} →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
