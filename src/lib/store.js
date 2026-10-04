import mocha from "../assets/p-mocha.jpg";
import cream from "../assets/p-cream.jpg";
import rose from "../assets/p-rose.jpg";
import espresso from "../assets/p-espresso.jpg";
import burgundy from "../assets/p-burgundy.jpg";
import detail from "../assets/detail.jpg";
import lifestyle from "../assets/lifestyle.jpg";
import hero from "../assets/hero.jpg";


import menWhite from "../assets/men-white.jpg.jpeg";
import menGray from "../assets/grayyyy.jpeg";
import menBlack from "../assets/blackkk.jpeg";
import menHoodie from "../assets/blackgirlboy.jpeg";
import menBlackSet from "../assets/brown.jpeg";

export const CONTACT = {
  whatsapp: "+923070437466",
  phone: "+923070437466",
  email: "winters@cozye.pk",
  instagram: "https://www.instagram.com/cozye_pk?stkn=OGI4bThzejRsNzc5",
  instagramName: "@cozye_pk",
  tiktok: "",
  facebook: "",
};

export const FREE_DELIVERY_MIN = 3999;

const C = {
    white: {
    name: "White",
    swatch: "bg-white",
  },

  gray: {
    name: "Gray",
    swatch: "bg-gray-400",
  },

  black: {
    name: "Black",
    swatch: "bg-black",
  },
  // Women's colors
  mocha: {
    name: "Mocha",
    swatch: "bg-mocha",
  },

  cream: {
    name: "Cream",
    swatch: "bg-ivory",
  },

  rose: {
    name: "Dusty Rose",
    swatch: "bg-rose",
  },

  cocoa: {
    name: "Cocoa",
    swatch: "bg-primary",
  },

  wine: {
    name: "Burgundy",
    swatch: "bg-burgundy",
  },

  // Men's colors
  white: {
    name: "White",
    swatch: "bg-white",
  },

  gray: {
    name: "Gray",
    swatch: "bg-gray-400",
  },

  black: {
    name: "Black",
    swatch: "bg-black",
  },
};


// --------------------------------------------------
// WOMEN'S PRODUCT GALLERY
// --------------------------------------------------

const gallery = (main, name) => [
  {
    src: main,
    alt: `${name} for women — front view`,
  },
  {
    src: lifestyle,
    alt: `${name} styled for a cozy winter day`,
  },
  {
    src: detail,
    alt: `${name} soft fabric close-up`,
  },
  {
    src: hero,
    alt: `Woman wearing ${name}`,
  },
];


// --------------------------------------------------
// MEN'S PRODUCT GALLERY
// --------------------------------------------------

const menGallery = (main, name) => [
  {
    src: main,
    alt: `${name} for men — front view`,
  },
  {
    src: lifestyle,
    alt: `${name} styled for a cozy winter day`,
  },
  {
    src: detail,
    alt: `${name} fabric detail`,
  },
  {
    src: hero,
    alt: `Model wearing ${name}`,
  },
];


export const SIZES = ["XS", "S", "M", "L", "XL"];


// ==================================================
// PRODUCTS
// TOTAL PRODUCTS = 10
// 5 WOMEN + 5 MEN
// ==================================================

export const PRODUCTS = [

  // ==================================================
  // WOMEN'S COLLECTION
  // ==================================================

  {
    slug: "mocha-luxe-tracksuit",
    name: "Mocha Luxe Tracksuit",
    category: "tracksuits",
    gender: "women",
    price: 2450,
    badge: "Best Seller",
    bestSeller: true,

    colors: [
      C.mocha,
      C.cocoa,
      C.cream,
    ],

    images: gallery(
      mocha,
      "Mocha Luxe Tracksuit"
    ),

    description:
      "A soft fleece hoodie and jogger set in a warm mocha tone — the women's winter tracksuit you'll reach for every day.",

    fabric:
      "Brushed fleece, soft on the inside, warm without feeling bulky.",
  },


  {
    slug: "cloud-cream-cord-set",
    name: "Cloud Cream Cord Set",
    category: "cord-sets",
    gender: "women",
    price: 2350,
    badge: "New",
    isNew: true,
    bestSeller: true,

    colors: [
      C.cream,
      C.mocha,
    ],

    images: gallery(
      cream,
      "Cloud Cream Cord Set"
    ),

    description:
      "A ribbed knit co-ord set with a relaxed sweater and wide-leg trousers. Effortless winter dressing in one step.",

    fabric:
      "Rib-knit blend with a soft, cosy hand-feel.",
  },


  {
    slug: "rosewood-oversized-tracksuit",
    name: "Rosewood Oversized Tracksuit",
    category: "tracksuits",
    gender: "women",
    price: 2450,
    badge: "Best Seller",
    bestSeller: true,

    colors: [
      C.rose,
      C.cream,
    ],

    images: gallery(
      rose,
      "Rosewood Oversized Tracksuit"
    ),

    description:
      "An oversized sweatshirt and straight-leg trouser set in a gentle dusty rose — cosy, feminine and easy to style.",

    fabric:
      "Cotton-blend terry fleece with a brushed interior.",
  },


  {
    slug: "espresso-everyday-set",
    name: "Espresso Everyday Set",
    category: "cord-sets",
    gender: "women",
    price: 2350,
    compareAt: 5990,
    badge: "Sale",

    colors: [
      C.cocoa,
      C.mocha,
    ],

    images: gallery(
      espresso,
      "Espresso Everyday Set"
    ),

    description:
      "A cropped zip jacket with tailored straight trousers in rich espresso corduroy. Polished enough for outings.",

    fabric:
      "Soft fine-wale corduroy.",
  },


  {
    slug: "cocoa-comfort-set",
    name: "Cocoa Comfort Set",
    category: "sweatshirts",
    gender: "women",
    price: 2350,
    badge: "New",
    isNew: true,
    bestSeller: true,

    colors: [
      C.wine,
      C.cream,
    ],

    images: gallery(
      burgundy,
      "Cocoa Comfort Set"
    ),

    description:
      "A relaxed crewneck sweatshirt in deep burgundy, paired with cream joggers for that everyday cosy look.",

    fabric:
      "Heavyweight fleece with ribbed cuffs and hem.",
  },


  // ==================================================
  // MEN'S COLLECTION
  // ==================================================

  {
    slug: "classic-white-mens-tracksuit",
    name: "Classic White Men's Tracksuit",
    category: "mens-tracksuits",
    gender: "men",
    price: 2990,
    badge: "New",
    isNew: true,
    bestSeller: true,

    colors: [
      C.white,
      C.gray,
      C.black,
    ],

    images: menGallery(
      menWhite,
      "Classic White Men's Tracksuit"
    ),

    description:
      "A clean and comfortable men's winter tracksuit featuring a relaxed-fit sweatshirt and matching joggers.",

    fabric:
      "Premium cotton-blend fleece with a soft brushed interior.",
  },


  {
    slug: "essential-gray-coord-set",
    name: "Essential Gray Co-ord Set",
    category: "mens-coord-sets",
    gender: "men",
    price: 2890,
    badge: "Best Seller",
    bestSeller: true,

    colors: [
      C.gray,
      C.white,
      C.black,
    ],

    images: menGallery(
      menGray,
      "Essential Gray Co-ord Set"
    ),

    description:
      "A minimal gray co-ord set made for everyday wear. Comfortable, versatile and easy to pair with sneakers.",

    fabric:
      "Soft heavyweight cotton fleece.",
  },


  {
    slug: "midnight-black-tracksuit",
    name: "Midnight Black Tracksuit",
    category: "mens-tracksuits",
    gender: "men",
    price: 2990,
    badge: "Best Seller",
    bestSeller: true,

    colors: [
      C.black,
      C.gray,
      C.white,
    ],

    images: menGallery(
      menBlack,
      "Midnight Black Tracksuit"
    ),

    description:
      "A classic all-black men's tracksuit with a modern relaxed fit. Perfect for winter days, travel and casual outings.",

    fabric:
      "Warm premium fleece with a smooth outer finish.",
  },


  {
    slug: "cozy-gray-hoodie-set",
    name: "Cozy Gray Hoodie Set",
    category: "mens-hoodies",
    gender: "men",
    price: 4650,
    badge: "New",
    isNew: true,

    colors: [
      C.gray,
      C.black,
      C.white,
    ],

    images: menGallery(
      menHoodie,
      "Cozy Gray Hoodie Set"
    ),

    description:
      "A cozy oversized hoodie paired with relaxed joggers for a comfortable everyday winter look.",

    fabric:
      "Heavyweight brushed fleece.",
  },


  {
    slug: "black-essential-winter-set",
    name: "Black Essential Winter Set",
    category: "mens-coord-sets",
    gender: "men",
    price: 2890,
    compareAt: 3990,
    badge: "Sale",

    colors: [
      C.black,
      C.gray,
      C.white,
    ],

    images: menGallery(
      menBlackSet,
      "Black Essential Winter Set"
    ),

    description:
      "A sleek black winter set designed for effortless everyday styling with maximum comfort.",

    fabric:
      "Premium soft cotton fleece.",
  },
];


// ==================================================
// CATEGORIES
// ==================================================

export const CATEGORIES = {

  // Women's categories

  tracksuits: {
    title: "Winter Tracksuits",
    h1: "Women's Winter Tracksuits",
    blurb: "Comfort meets effortless style.",
    filter: p =>
      p.category === "tracksuits" &&
      p.gender === "women",
    image: mocha,
  },

  "cord-sets": {
    title: "Cord Sets",
    h1: "Women's Winter Cord Sets",
    blurb: "Soft, coordinated and made to stand out.",
    filter: p =>
      p.category === "cord-sets" &&
      p.gender === "women",
    image: cream,
  },

  sweatshirts: {
    title: "Sweatshirts",
    h1: "Women's Sweatshirts",
    blurb: "Your everyday cozy essential.",
    filter: p =>
      p.category === "sweatshirts" &&
      p.gender === "women",
    image: burgundy,
  },


  // Men's categories

  "mens-tracksuits": {
    title: "Men's Tracksuits",
    h1: "Men's Winter Tracksuits",
    blurb: "Comfortable winter styles for everyday wear.",
    filter: p =>
      p.category === "mens-tracksuits" &&
      p.gender === "men",
    image: menWhite,
  },

  "mens-coord-sets": {
    title: "Men's Co-ord Sets",
    h1: "Men's Winter Co-ord Sets",
    blurb: "Simple, comfortable and effortlessly stylish.",
    filter: p =>
      p.category === "mens-coord-sets" &&
      p.gender === "men",
    image: menGray,
  },

  "mens-hoodies": {
    title: "Men's Hoodies",
    h1: "Men's Winter Hoodies",
    blurb: "Warm layers made for everyday comfort.",
    filter: p =>
      p.category === "mens-hoodies" &&
      p.gender === "men",
    image: menHoodie,
  },


  // General categories

  "best-sellers": {
    title: "Best Sellers",
    h1: "Best Sellers",
    blurb: "The pieces everyone is loving.",
    filter: p => !!p.bestSeller,
    image: rose,
  },

  "new-arrivals": {
    title: "New Arrivals",
    h1: "New Arrivals",
    blurb: "Fresh layers for the season.",
    filter: p => !!p.isNew,
    image: espresso,
  },

  sale: {
    title: "Sale",
    h1: "Winter Sale",
    blurb: "Cozy favourites at softer prices.",
    filter: p => !!p.compareAt,
    image: espresso,
  },
};


// ==================================================
// IMAGES
// ==================================================

export const IMAGES = {
  hero,
  lifestyle,
  detail,

  // Women's
  mocha,
  cream,
  rose,
  espresso,
  burgundy,

  // Men's
  menWhite,
  menGray,
  menBlack,
  menHoodie,
  menBlackSet,
};


// ==================================================
// HELPERS
// ==================================================

export const pkr = n =>
  `Rs. ${Number(n).toLocaleString("en-PK")}`;


export const getProduct = slug =>
  PRODUCTS.find(
    p => p.slug === slug
  );


export const waLink = text =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;


// ==================================================
// INSTAGRAM
// ==================================================

export const INSTAGRAM = {
  username: "@cozye_pk",
  url: CONTACT.instagram,
  label: "Follow us on Instagram @cozye_pk",
};