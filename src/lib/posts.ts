export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
  keywords: string[];
  /** Simple content blocks rendered by the [slug] page */
  body: Array<
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'ul'; items: string[] }
  >;
}

export const posts: BlogPost[] = [
  {
    slug: 'what-makes-tandoor-cooking-different',
    title: 'What Makes Tandoor Cooking Different From Any Other Oven',
    description:
      'The clay tandoor reaches 480°C and gives tandoori chicken its smoky char. Here is why this 5000-year-old oven still cannot be replaced — from the chefs at Bombay Restaurant Marrakech & Casablanca.',
    date: '2026-08-10',
    readMinutes: 5,
    image: '/images/web/chef_tandoor_cooking.jpg',
    imageAlt:
      'Chef cooking naan bread inside a traditional clay tandoor oven at Bombay Restaurant Morocco',
    keywords: ['tandoor oven', 'tandoori cooking', 'indian restaurant marrakech', 'clay oven'],
    body: [
      {
        type: 'p',
        text: 'Walk into any of our kitchens in Marrakech or Casablanca and you will feel it before you see it: a wall of radiant heat rising from a bell-shaped clay pot buried in the ground. The tandoor is the heart of North Indian cooking, and after more than 20 years of working with one every single day, Chef Surender insists nothing else cooks like it.',
      },
      { type: 'h2', text: 'Heat you cannot replicate' },
      {
        type: 'p',
        text: 'A domestic oven tops out around 250°C. A traditional clay tandoor runs at roughly 480°C, heated by charcoal that lines its walls. That intensity does two things no modern equipment can match: it chars the outside of a marinated chicken tikka in minutes while locking the juices inside, and it bakes naan dough onto the clay wall where it puffs up in under 90 seconds.',
      },
      { type: 'h2', text: 'The marinade is only half the story' },
      {
        type: 'p',
        text: 'Yogurt, ginger-garlic, Kashmiri chili — the classic marinades matter. But what makes tandoori food taste like tandoori food is the smoke. Fat drips onto live coals, the smoke rises inside the sealed chamber, and every piece absorbs it. This is why our seekh kebabs taste different from anything grilled on gas.',
      },
      { type: 'h2', text: 'Come taste the difference' },
      {
        type: 'p',
        text: 'You can watch our tandoor masters at work at all three locations: Bombay Marrakech Gueliz, Medina Rooftop, and Bombay Casablanca. Order the mixed tandoori platter with fresh garlic naan — and eat the naan within two minutes of leaving the clay. You will understand.',
      },
    ],
  },
  {
    slug: 'why-we-cook-biryani-in-clay-pots',
    title: 'Why Our Biryani Is Still Cooked in Sealed Clay Pots',
    description:
      'Most restaurants serve biryani from a hotel pan. We slow-cook ours in individual sealed clay handis, exactly as it was done in Punjab generations ago. Here is why it matters — and how to eat it properly.',
    date: '2026-07-28',
    readMinutes: 4,
    image: '/images/web/food_clay_pot_biryani.jpg',
    imageAlt:
      'Signature clay-pot chicken biryani served in a sealed traditional handi at Bombay Restaurant Marrakech',
    keywords: ['clay pot biryani', 'dum biryani marrakech', 'best biryani morocco', 'indian food casablanca'],
    body: [
      {
        type: 'p',
        text: 'Biryani means layers: saffron rice, spiced meat, fried onions, mint, sealed together and cooked on the lowest possible heat. The technique is called dum, and the seal is everything. When we say our chicken biryani arrives at your table still sealed in its clay handi, we mean the cooking finished in front of you.',
      },
      { type: 'h2', text: 'Clay breathes' },
      {
        type: 'p',
        text: 'A metal pot traps steam and turns rice mushy. Clay is porous — it lets just enough moisture escape so the rice stays separate and long-grained while the chicken below braises in its own spiced steam. It also holds heat long after leaving the kitchen, which is why the last spoonful is as hot as the first.',
      },
      { type: 'h2', text: 'How to open a handi like a regular' },
      {
        type: 'ul',
        items: [
          'Crack the dough seal with a spoon — listen for the steam release.',
          'Lift the lid away from your face; the saffron aroma is intense.',
          'Dig from the side, not the middle, to get rice and chicken in every bite.',
          'Finish with raita and a squeeze of lemon. Trust us.',
        ],
      },
      {
        type: 'p',
        text: 'Our clay-pot chicken biryani is available at all three locations. In Marrakech Gueliz it has been the most-ordered dish since 2004 — twenty years of customers cannot be wrong.',
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
