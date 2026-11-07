export type StoreCategory = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
};

export type StoreProduct = {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  badge: string;
  format: "Digital concept" | "Gift concept";
  idealFor: string[];
  highlights: string[];
  note: string;
};

export const categories: StoreCategory[] = [
  {
    slug: "wishly-cards",
    name: "Wishly Cards",
    shortName: "Cards",
    description: "Digital cards for birthdays, love notes, thank-you messages and the little moments worth celebrating.",
    image: "/images/products/digital-love-letter-envelope.webp",
    icon: "✉",
    seoTitle: "Wishly Cards — Thoughtful Digital Greeting Cards",
    seoDescription: "Explore the Wishly Cards collection: digital greeting card concepts for birthdays, romance, gratitude and meaningful moments."
  },
  {
    slug: "mystery-gifts",
    name: "Mystery Gifts",
    shortName: "Mystery",
    description: "A little suspense, a thoughtful reveal and a surprise designed to make someone feel remembered.",
    image: "/images/products/birthday-surprise-gift.webp",
    icon: "✧",
    seoTitle: "Mystery Gifts — Surprise Gift Ideas",
    seoDescription: "Discover mystery gift and surprise reveal concepts for people who love thoughtful, unexpected moments."
  },
  {
    slug: "birthday-gifts",
    name: "Birthday Gifts",
    shortName: "Birthday",
    description: "Personal birthday surprises, memory-led gifts and digital ways to make their day feel special.",
    image: "/images/products/birthday-magic-template.webp",
    icon: "♕",
    seoTitle: "Birthday Gifts — Personalised Surprise Ideas",
    seoDescription: "Browse birthday gift concepts, digital birthday cards and thoughtful surprise ideas for friends, partners and family."
  },
  {
    slug: "anniversary-gifts",
    name: "Anniversary Gifts",
    shortName: "Anniversary",
    description: "Celebrate shared memories, milestones and the story two people keep creating together.",
    image: "/images/products/anniversary-surprise-website.webp",
    icon: "♡",
    seoTitle: "Anniversary Gifts — Meaningful Ideas for Couples",
    seoDescription: "Explore anniversary gift concepts, memory-inspired surprises and digital keepsakes for couples."
  },
  {
    slug: "friendship-gifts",
    name: "Friendship Gifts",
    shortName: "Friendship",
    description: "Small, personal ways to celebrate your favourite people and remind them they matter.",
    image: "/images/products/friendship-surprise-website.webp",
    icon: "☼",
    seoTitle: "Friendship Gifts — Ideas for Best Friends",
    seoDescription: "Find friendship gift inspiration, appreciation cards and personal surprises for your closest friends."
  }
];

export const products: StoreProduct[] = [
  {
    slug: "the-wishly-birthday-card",
    name: "The Wishly Birthday Card",
    category: "wishly-cards",
    categoryLabel: "Wishly Cards",
    shortDescription: "A bright, personal birthday greeting with room for your own words and memories.",
    description: "A digital birthday card concept designed to feel warmer than a generic greeting. Imagine a personal note, a favourite photo and a small detail that makes the recipient smile. The Wishly Birthday Card is part of the first Store collection preview; final formats and ordering details will be announced at launch.",
    image: "/images/products/birthday-wish-website-guide.webp",
    imageAlt: "A Wishly birthday website preview displayed on a laptop with a pink birthday greeting, cake and flowers",
    badge: "Birthday favourite",
    format: "Digital concept",
    idealFor: ["Friends", "Partners", "Siblings", "Family"],
    highlights: ["A personal birthday message", "Space for a favourite memory or photo", "A shareable digital greeting concept"],
    note: "This is a collection preview, not a live product listing. Final features, price and availability have not been announced."
  },
  {
    slug: "love-note-wishly-card",
    name: "Love Note Wishly Card",
    category: "wishly-cards",
    categoryLabel: "Wishly Cards",
    shortDescription: "A heartfelt digital note for the person who makes ordinary days feel special.",
    description: "A romantic card concept for a thoughtful message, a shared memory or a simple reminder that someone matters. It is designed around words first, with a visual style that feels intimate rather than overdone.",
    image: "/images/products/digital-love-letter-envelope.webp",
    imageAlt: "A romantic digital love letter template with an envelope and heart detail",
    badge: "Made for love notes",
    format: "Digital concept",
    idealFor: ["Partners", "Long-distance couples", "Anniversaries", "Just because"],
    highlights: ["Personal message-led layout", "Romantic visual direction", "A digital keepsake concept"],
    note: "This is a preview concept. Final formats, price and availability will be shared before launch."
  },
  {
    slug: "thank-you-wishly-card",
    name: "A Little Thank You Card",
    category: "wishly-cards",
    categoryLabel: "Wishly Cards",
    shortDescription: "A simple way to say thank you with more thought than a quick message.",
    description: "A gratitude card concept for friends, family, mentors and anyone whose kindness deserves to be noticed. Pair a sincere note with a memory or a specific reason you appreciate them.",
    image: "/images/products/thank-you-website-guide.webp",
    imageAlt: "A dark elegant digital thank-you card template with glowing typography",
    badge: "A thoughtful note",
    format: "Digital concept",
    idealFor: ["Friends", "Family", "Teachers", "Colleagues"],
    highlights: ["A gratitude-first message", "Warm and minimal visual style", "Suitable for everyday appreciation"],
    note: "This is a preview concept. Final formats, price and availability will be shared before launch."
  },
  {
    slug: "mystery-moment-gift",
    name: "Mystery Moment Gift",
    category: "mystery-gifts",
    categoryLabel: "Mystery Gifts",
    shortDescription: "A surprise-first gift idea where the reveal is part of the experience.",
    description: "The Mystery Moment Gift is a store concept built around anticipation. The recipient gets a clue, a reveal or a sequence of small surprises before discovering the full message. The exact format—digital, physical or a combination—will be confirmed when this collection launches.",
    image: "/images/products/birthday-surprise-gift.webp",
    imageAlt: "A mysterious dark gift box with a question mark and purple ribbon",
    badge: "A surprise reveal",
    format: "Gift concept",
    idealFor: ["Birthdays", "Anniversaries", "Best friends", "Surprise occasions"],
    highlights: ["Surprise-led reveal concept", "Designed around anticipation", "Flexible for different occasions"],
    note: "Mystery Gift formats and contents are not final yet. No item, delivery method or price is being promised at this preview stage."
  },
  {
    slug: "the-unexpected-box",
    name: "The Unexpected Box",
    category: "mystery-gifts",
    categoryLabel: "Mystery Gifts",
    shortDescription: "A mystery-box concept for people who enjoy not knowing what comes next.",
    description: "A playful mystery gift direction that keeps the details hidden until the reveal. The final box contents, delivery area and fulfilment method will be published only after they are confirmed.",
    image: "/images/products/unexpected-gift-box.webp",
    imageAlt: "A premium ribbon-wrapped surprise gift box in Wishly pink and violet styling",
    badge: "Mystery collection",
    format: "Gift concept",
    idealFor: ["Surprise lovers", "Birthdays", "Celebrations", "Just because"],
    highlights: ["Surprise-led product concept", "A reveal moment built into the experience", "A future collection preview"],
    note: "Preview only. The final contents, price and shipping or delivery details have not been announced."
  },
  {
    slug: "birthday-memory-surprise",
    name: "Birthday Memory Surprise",
    category: "birthday-gifts",
    categoryLabel: "Birthday Gifts",
    shortDescription: "Turn favourite moments, photos and a birthday message into a personal surprise.",
    description: "A birthday gift concept that puts memories at the centre. Instead of focusing only on an object, it celebrates the stories, photos and small details that make the person feel known. Final format and availability will be announced later.",
    image: "/images/products/girlfriend-birthday-gift-ideas.webp",
    imageAlt: "A personal birthday letter template with a pastel envelope and a celebratory message",
    badge: "Memory-led gift",
    format: "Digital concept",
    idealFor: ["Girlfriend or boyfriend", "Best friends", "Parents", "Siblings"],
    highlights: ["Photo and memory-led idea", "Personal birthday message", "Designed for a meaningful reveal"],
    note: "This is a product concept preview. Final format, price and availability have not been announced."
  },
  {
    slug: "birthday-surprise-story",
    name: "Birthday Surprise Story",
    category: "birthday-gifts",
    categoryLabel: "Birthday Gifts",
    shortDescription: "A birthday surprise told through a few meaningful moments and a final reveal.",
    description: "A story-shaped birthday surprise concept: start with a warm opening, guide the recipient through a few memories or clues, and end with the birthday wish. It is intended to make the experience feel personal and memorable.",
    image: "/images/products/birthday-magic-template.webp",
    imageAlt: "A birthday celebration template preview with cake and a magical birthday atmosphere",
    badge: "Surprise experience",
    format: "Digital concept",
    idealFor: ["Long-distance birthdays", "Partners", "Close friends", "Family"],
    highlights: ["A guided reveal", "Personal story and message", "Digital-first gift direction"],
    note: "Preview only. Final format and availability will be announced before launch."
  },
  {
    slug: "forever-and-always-keepsake",
    name: "Forever & Always Keepsake",
    category: "anniversary-gifts",
    categoryLabel: "Anniversary Gifts",
    shortDescription: "A memory-inspired anniversary idea for celebrating the story you share.",
    description: "A keepsake concept centred on shared milestones, favourite photos and a personal note. It is intended for couples who want to celebrate their story in a personal way rather than rely on a generic gift.",
    image: "/images/products/long-distance-couple-surprise.webp",
    imageAlt: "A night-sky Wishly love template reading I miss you, with a softly glowing moon",
    badge: "For shared stories",
    format: "Digital concept",
    idealFor: ["Couples", "Wedding anniversaries", "Long-distance partners", "Milestones"],
    highlights: ["Shared-memory theme", "Personal message space", "Anniversary-focused concept"],
    note: "This is a preview concept. Final formats, price and availability will be confirmed at launch."
  },
  {
    slug: "best-friend-appreciation-card",
    name: "Best Friend Appreciation Card",
    category: "friendship-gifts",
    categoryLabel: "Friendship Gifts",
    shortDescription: "A warm, playful card concept for the friend who always shows up.",
    description: "A friendship card idea that gives you a place to say what everyday conversations can leave unsaid. Add a favourite memory, an inside joke or a simple thank-you for being there.",
    image: "/images/products/best-friend-appreciation.webp",
    imageAlt: "A best-friends celebration photo for a personal appreciation gift idea",
    badge: "For your person",
    format: "Digital concept",
    idealFor: ["Best friends", "Friendship Day", "Birthdays", "Thank-you moments"],
    highlights: ["Personal appreciation message", "Memory and inside-joke friendly", "A thoughtful digital card idea"],
    note: "Preview only. Final format, price and availability have not been announced."
  }
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getProductsByCategory = (slug: string) => products.filter((product) => product.category === slug);
