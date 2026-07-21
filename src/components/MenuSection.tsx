'use client';

import { useState, useEffect } from 'react';

interface MenuItem {
  id: string;
  name: { EN: string; FR: string };
  description: { EN: string; FR: string };
  price: number;
  category: string;
  imageUrl?: string;
  isVeg?: boolean;
  isVegan?: boolean;
  isSpicy?: boolean;
  isGF?: boolean; // Gluten-Free
}

export default function MenuSection() {
  const [lang, setLang] = useState<'EN' | 'FR'>('EN');
  const [activeTab, setActiveTab] = useState('starters');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVeg, setFilterVeg] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState(false);

  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<'EN' | 'FR'>;
      setLang(customEvent.detail);
    };
    window.addEventListener('langChange', handleLangChange);
    return () => window.removeEventListener('langChange', handleLangChange);
  }, []);

  const categories = [
    { id: 'starters', label: { EN: 'Starters', FR: 'Entrées' } },
    { id: 'tandoor', label: { EN: 'Tandoor Grills', FR: 'Grillades Tandoor' } },
    { id: 'curries', label: { EN: 'Curries', FR: 'Currys' } },
    { id: 'biryanis', label: { EN: 'Biryani & Rice', FR: 'Biryani & Riz' } },
    { id: 'breads', label: { EN: 'Naan & Breads', FR: 'Naan & Pains' } },
    { id: 'drinks', label: { EN: 'Desserts & Drinks', FR: 'Desserts & Boissons' } }
  ];

  const menuItems: MenuItem[] = [
    // Starters
    {
      id: 'veg-samosa',
      name: { EN: 'Vegetable Samosa', FR: 'Samosa aux Légumes' },
      description: { EN: 'Crispy pastry shells stuffed with spiced potatoes and peas.', FR: 'Feuilleté croustillant farci de pommes de terre épicées et de petits pois.' },
      price: 45,
      category: 'starters',
      imageUrl: '/images/samosa_hd.png',
      isVeg: true,
      isVegan: true,
      isGF: false
    },
    {
      id: 'chicken-lollipop',
      name: { EN: 'Chicken Lollipop (Indo-Chinese)', FR: 'Chicken Lollipop (Indo-Chinois)' },
      description: { EN: 'Crispy chicken wings pulled back into lollipop shapes, tossed in a tangy spicy sauce.', FR: 'Ailes de poulet croustillantes en forme de sucette, enrobées de sauce piquante et acidulée.' },
      price: 75,
      category: 'starters',
      isSpicy: true
    },
    {
      id: 'onion-bhaji',
      name: { EN: 'Onion Bhaji', FR: 'Onion Bhaji' },
      description: { EN: 'Crispy onion fritters prepared in gram flour batter with aromatic spices.', FR: 'Beignets d\'oignons croustillants préparés dans une pâte de farine de pois chiches aux épices.' },
      price: 40,
      category: 'starters',
      isVeg: true,
      isVegan: true,
      isGF: true
    },
    
    // Tandoor
    {
      id: 'seekh-kebab',
      name: { EN: 'Lamb Seekh Kebab', FR: 'Lamb Seekh Kebab' },
      description: { EN: 'Minced lamb skewers flavored with garlic, ginger, and home spices, grilled in the tandoor.', FR: 'Brochettes d\'agneau haché parfumées à l\'ail, au gingembre et aux épices maison, grillées au tandoor.' },
      price: 85,
      category: 'tandoor',
      imageUrl: '/images/seekh_kebab_hd.png',
      isSpicy: true,
      isGF: true
    },
    {
      id: 'chicken-tikka-grill',
      name: { EN: 'Classic Chicken Tikka', FR: 'Chicken Tikka Classique' },
      description: { EN: 'Boneless chicken marinated in yogurt, red chilies, and garam masala, grilled on skewers.', FR: 'Poulet désossé mariné au yaourt, piments rouges et garam masala, grillé sur brochettes.' },
      price: 85,
      category: 'tandoor',
      isSpicy: true,
      isGF: true
    },
    {
      id: 'tandoori-platter',
      name: { EN: 'Bombay Tandoori Platter', FR: 'Grand Plateau Tandoori Bombay' },
      description: { EN: 'Assortment of chicken tikka, fish tikka, lamb seekh kebab, and tandoori prawns.', FR: 'Assortiment de poulet tikka, poisson tikka, brochette d\'agneau haché et crevettes tandoori.' },
      price: 155,
      category: 'tandoor',
      isSpicy: true,
      isGF: true
    },

    // Curries
    {
      id: 'butter-chicken',
      name: { EN: 'Signature Butter Chicken', FR: 'Poulet au Beurre (Butter Chicken)' },
      description: { EN: 'Tender chicken tikka simmered in a velvet-smooth, creamy, spiced tomato and cashew gravy.', FR: 'Tendre poulet tikka mijoté dans une sauce veloutée et crémeuse aux tomates, beurre et noix de cajou.' },
      price: 95,
      category: 'curries',
      imageUrl: '/images/butter_chicken_hd.png',
      isGF: true
    },
    {
      id: 'chicken-tikka-masala',
      name: { EN: 'Chicken Tikka Masala', FR: 'Chicken Tikka Masala' },
      description: { EN: 'Char-grilled chicken chunks cooked with roasted bell peppers in a rich spiced onion-tomato sauce.', FR: 'Morceaux de poulet grillés cuits avec des poivrons rôtis dans une sauce relevée aux oignons et tomates.' },
      price: 95,
      category: 'curries',
      isSpicy: true,
      isGF: true
    },
    {
      id: 'rogan-josh',
      name: { EN: 'Kashmiri Lamb Rogan Josh', FR: 'Agneau Rogan Josh du Cachemire' },
      description: { EN: 'Tender lamb chunks slow-cooked with aromatic Kashmiri spices in a rich onion and yogurt gravy.', FR: 'Morceaux d\'agneau tendres mijotés à feu doux avec des épices du Cachemire dans une sauce riche aux oignons et yaourt.' },
      price: 110,
      category: 'curries',
      isGF: true
    },
    {
      id: 'dal-makhani',
      name: { EN: 'Slow-Cooked Dal Makhani', FR: 'Dal Makhani Mijoté' },
      description: { EN: 'Creamy black lentils and kidney beans slow-cooked overnight with butter, cream, and warm spices.', FR: 'Lentilles noires et haricots rouges mijotés toute la nuit avec du beurre, de la crème et des épices douces.' },
      price: 80,
      category: 'curries',
      isVeg: true,
      isGF: true
    },
    {
      id: 'dal-tadka',
      name: { EN: 'Yellow Dal Tadka', FR: 'Dal Tadka Jaune' },
      description: { EN: 'Tempered yellow lentils cooked with garlic, tomatoes, and red chilies.', FR: 'Lentilles jaunes préparées avec de l\'ail, des tomates et tempérées aux piments rouges.' },
      price: 75,
      category: 'curries',
      isVeg: true,
      isVegan: true,
      isGF: true
    },
    {
      id: 'paneer-kadai',
      name: { EN: 'Kadai Paneer', FR: 'Kadai Paneer' },
      description: { EN: 'Fresh cottage cheese cooked in a spicy, thick gravy of bell peppers and freshly ground kadai spices.', FR: 'Fromage cottage frais (paneer) cuit dans une sauce épaisse et épicée aux poivrons et épices broyées.' },
      price: 85,
      category: 'curries',
      isVeg: true,
      isSpicy: true,
      isGF: true
    },
    {
      id: 'chilli-chicken',
      name: { EN: 'Chilli Chicken (Indo-Chinese)', FR: 'Chilli Chicken (Indo-Chinois)' },
      description: { EN: 'Crispy battered chicken tossed with onions and bell peppers in a spicy dark soy-chili sauce.', FR: 'Poulet croustillant sauté avec des oignons et des poivrons dans une sauce soja et piment relevée.' },
      price: 89,
      category: 'curries',
      isSpicy: true
    },

    // Biryanis
    {
      id: 'chicken-biryani',
      name: { EN: 'Clay-Pot Chicken Biryani', FR: 'Biryani au Poulet en Pot d\'Argile' },
      description: { EN: 'Our signature dish. Fragrant basmati rice layered with spiced chicken, sealed with dough in a clay pot and slow-baked.', FR: 'Notre plat signature. Riz basmati parfumé étuvé avec du poulet épicé, scellé dans un pot d\'argile et cuit à l\'étouffée.' },
      price: 110,
      category: 'biryanis',
      imageUrl: '/images/clay_pot_biryani_hd.png',
      isSpicy: true,
      isGF: true
    },
    {
      id: 'lamb-biryani',
      name: { EN: 'Clay-Pot Lamb Biryani', FR: 'Biryani à l\'Agneau en Pot d\'Argile' },
      description: { EN: 'Aromatic basmati rice cooked in a sealed clay handi with tender chunks of spiced lamb.', FR: 'Riz basmati parfumé cuit dans un pot d\'argile scellé avec de tendres morceaux d\'agneau épicé.' },
      price: 125,
      category: 'biryanis',
      isSpicy: true,
      isGF: true
    },
    {
      id: 'veg-biryani',
      name: { EN: 'Clay-Pot Vegetable Biryani', FR: 'Biryani de Légumes en Pot d\'Argile' },
      description: { EN: 'Fragrant basmati rice layered with garden vegetables, saffron, and fresh herbs in a sealed handi.', FR: 'Riz basmati parfumé cuit en pot d\'argile scellé avec un assortiment de légumes de saison et de safran.' },
      price: 95,
      category: 'biryanis',
      isVeg: true,
      isGF: true
    },

    // Breads
    {
      id: 'garlic-naan',
      name: { EN: 'Butter Garlic Naan', FR: 'Naan à l\'Ail et Beurre' },
      description: { EN: 'Tandoor-baked soft leavened flatbread glazed with melted butter and fresh minced garlic.', FR: 'Pain plat traditionnel cuit au tandoor, badigeonné de beurre fondu et d\'ail frais émincé.' },
      price: 25,
      category: 'breads'
    },
    {
      id: 'cheese-naan',
      name: { EN: 'Cheese Naan', FR: 'Naan au Fromage' },
      description: { EN: 'Tandoor-baked flatbread stuffed with soft cream cheese.', FR: 'Pain plat traditionnel cuit au tandoor et généreusement farci de fromage fondu.' },
      price: 30,
      category: 'breads'
    },
    {
      id: 'tandoori-roti',
      name: { EN: 'Tandoori Roti', FR: 'Roti Tandoori' },
      description: { EN: 'Whole wheat flatbread baked fresh in our tandoor oven.', FR: 'Pain plat de blé entier traditionnel cuit au four tandoor.' },
      price: 15,
      category: 'breads',
      isVeg: true,
      isVegan: true
    },

    // Drinks / Desserts
    {
      id: 'mango-lassi',
      name: { EN: 'Mango Lassi', FR: 'Lassi à la Mangue' },
      description: { EN: 'A soothing, chilled yogurt drink whipped with premium sweet Alphonso mango pulp.', FR: 'Boisson rafraîchissante traditionnelle à base de yaourt glacé et de pulpe de mangue Alphonso sucrée.' },
      price: 35,
      category: 'drinks',
      imageUrl: '/images/mango_lassi_hd.png',
      isVeg: true,
      isGF: true
    },
    {
      id: 'masala-chai',
      name: { EN: 'Masala Chai', FR: 'Thé Masala Tchaï' },
      description: { EN: 'Traditional hot Indian tea brewed with black tea leaves, milk, green cardamom, cloves, ginger, and cinnamon.', FR: 'Thé indien traditionnel chaud infusé avec du lait, de la cardamome, des clous de girofle, du gingembre et de la cannelle.' },
      price: 25,
      category: 'drinks',
      isVeg: true,
      isGF: true
    },
    {
      id: 'gulab-jamun',
      name: { EN: 'Gulab Jamun', FR: 'Gulab Jamun' },
      description: { EN: 'Warm golden milk-solid dumplings soaked in a sweet green cardamom and saffron sugar syrup. Serves two.', FR: 'Boulettes dorées de lait concentré servies chaudes dans un sirop de sucre parfumé à la cardamome et au safran.' },
      price: 45,
      category: 'drinks',
      isVeg: true
    }
  ];

  // Filtering Logic
  const filteredItems = menuItems.filter(item => {
    if (item.category !== activeTab) return false;
    
    if (filterVeg && !item.isVeg && !item.isVegan) return false;
    if (filterSpicy && !item.isSpicy) return false;
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchName = item.name[lang].toLowerCase().includes(query);
      const matchDesc = item.description[lang].toLowerCase().includes(query);
      return matchName || matchDesc;
    }
    
    return true;
  });

  return (
    <section className="menu-container">
      {/* Search & Dietary Filters Row */}
      <div className="menu-controls glass-panel">
        <div className="search-box">
          <input 
            type="text" 
            placeholder={lang === 'EN' ? 'Search our menu...' : 'Rechercher un plat...'} 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>&times;</button>
          )}
        </div>

        <div className="dietary-filters">
          <button 
            className={`filter-badge veg ${filterVeg ? 'active' : ''}`}
            onClick={() => setFilterVeg(!filterVeg)}
          >
            <span className="dot veg-dot"></span>
            {lang === 'EN' ? 'Vegetarian' : 'Végétarien'}
          </button>
          <button 
            className={`filter-badge spicy ${filterSpicy ? 'active' : ''}`}
            onClick={() => setFilterSpicy(!filterSpicy)}
          >
            <span className="chili-icon">🌶️</span>
            {lang === 'EN' ? 'Spicy Only' : 'Épicé'}
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="menu-tabs-wrapper">
        <div className="menu-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`menu-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(cat.id);
                setSearchQuery(''); // reset search when tab switches
              }}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <>
          {/* Chef's Specials — the only items that carry a photo */}
          {filteredItems.some(item => item.imageUrl) && (
            <div className="specials-strip">
              <span className="specials-label gold-accent">
                {lang === 'EN' ? "Chef's Specials" : 'Sélection du Chef'}
              </span>
              <div className="specials-grid">
                {filteredItems.filter(item => item.imageUrl).map((item) => (
                  <div key={item.id} className="special-card glass-panel">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.imageUrl} alt={item.name[lang]} className="special-thumb" />
                    <div className="special-info">
                      <span className="special-name font-serif">{item.name[lang]}</span>
                      <span className="special-price gold-accent">{item.price} MAD</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full category list, fine-dining style */}
          <div className="menu-list">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-list-item animate-fade-in-simple">
                <div className="menu-list-item-header">
                  <h3 className="menu-list-name font-serif">{item.name[lang]}</h3>
                  <span className="item-badges">
                    {item.isVeg && <span className="badge-icon veg" title="Vegetarian">🟢</span>}
                    {item.isVegan && <span className="badge-icon vegan" title="Vegan">🌱</span>}
                    {item.isSpicy && <span className="badge-icon spicy" title="Spicy">🌶️</span>}
                    {item.isGF && <span className="badge-icon gf" title="Gluten Free">🌾</span>}
                  </span>
                  <span className="menu-list-leader" aria-hidden="true" />
                  <span className="menu-list-price">{item.price} MAD</span>
                </div>
                <p className="menu-list-desc">{item.description[lang]}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="menu-no-results">
          <p>{lang === 'EN' ? 'No items matches your search filters.' : 'Aucun plat ne correspond à votre recherche.'}</p>
        </div>
      )}
    </section>
  );
}
