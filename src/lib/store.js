import mocha from "../assets/p-mocha.jpg";
import cream from "../assets/p-cream.jpg";
import rose from "../assets/p-rose.jpg";
import espresso from "../assets/p-espresso.jpg";
import blue from "../assets/blueeegirl.jpeg";
import yellow from "../assets/butteryellow.jpeg";
import burgundy from "../assets/p-burgundy.jpg";
import detail from "../assets/detail.jpg";
import lifestyle from "../assets/lifestyle.jpg";
import hero from "../assets/heroooo.jpeg";
import blackhoodiee from "../assets/blackgirlhood.jpeg"

// ==================================================
// MEN'S IMAGES
// ==================================================

import menWhite from "../assets/men-white.jpg.jpeg";

import menGray from "../assets/grayyyy.jpeg";
import menGrayy from "../assets/mangrayprintes.jpeg";
import menBlack from "../assets/plainblack.jpeg";
import menHoodie from "../assets/blackgirlboy.jpeg";
import menBlackSet from "../assets/brown.jpeg";

// ==================================================
// CONTACT
// ==================================================

export const CONTACT = {
  whatsapp: "+923070437466",
  phone: "+923070437466",
  email: "winters@cozye.pk",
  instagram:
    "https://www.instagram.com/cozye_pk?stkn=OGI4bThzejRsNzc5",
  instagramName: "@cozye_pk",
  tiktok: "",
  facebook: "",
};

export const FREE_DELIVERY_MIN = 3999;

// ==================================================
// COLORS
// ==================================================

const C = {
  white: {
    name: "White",
    swatch: "bg-white",
  },

  yellow: {
    name: "Butter Yellow",
    swatch: "bg-yellow-300",
  },

  blue: {
    name: "Blue",
    swatch: "bg-blue-500",
  },

  gray: {
    name: "Gray",
    swatch: "bg-gray-400",
  },

  black: {
    name: "Black",
    swatch: "bg-black",
  },

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

  espresso: {
    name: "Espresso",
    swatch: "bg-[#4A3025]",
  },
};

// ==================================================
// WOMEN'S PRODUCT GALLERY
// ==================================================

const gallery = (main, name) => [
  {
    src: main,
    alt: `${name} for women — front view`,
  },
  {
    src: lifestyle,
    alt: `${name} styled for a cozy winter look`,
  },
  {
    src: detail,
    alt: `${name} premium fabric detail`,
  },
  {
    src: hero,
    alt: `Model wearing ${name}`,
  },
];

// ==================================================
// MEN'S PRODUCT GALLERY
// ==================================================

const menGallery = (main, name) => [
  {
    src: main,
    alt: `${name} for men — front view`,
  },
  {
    src: lifestyle,
    alt: `${name} styled for a modern winter look`,
  },
  {
    src: detail,
    alt: `${name} premium fabric detail`,
  },
  {
    src: hero,
    alt: `Model wearing ${name}`,
  },
];

// ==================================================
// SIZES
// ==================================================

export const SIZES = [ "S", "M", "L", "XL"];

// ==================================================
// PRODUCTS
// ==================================================

export const PRODUCTS = [

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
      C.mocha,
    ],

    images: menGallery(
      menWhite,
      "Classic White Men's Tracksuit"
    ),

    description:
      "A clean and versatile men's tracksuit designed for everyday winter comfort. Featuring a relaxed silhouette and premium fleece construction, it is perfect for casual outings, travel and laid-back weekends.",

    fabric:
      "Premium cotton-blend fleece with a soft brushed interior.",

    caption:
      "Clean lines. Premium comfort. Everyday confidence.",
  },

  // {
  //   slug: "essential-gray-mens-coord-set",
  //   name: "Essential Gray Men's Co-ord Set",
  //   category: "mens-coord-sets",
  //   gender: "men",
  //   price: 2890,
  //   badge: "Best Seller",
  //   bestSeller: true,

  //   colors: [
  //     C.gray,
  //     C.white,
  //     C.black,
  //     C.mocha,
  //   ],

  //   images: menGallery(
  //     menGray,
  //     "Essential Gray Men's Co-ord Set"
  //   ),

  //   description:
  //     "A contemporary gray co-ord set designed for effortless everyday styling. The relaxed fit and soft fleece construction deliver warmth, comfort and a polished casual look.",

  //   fabric:
  //     "Soft heavyweight cotton fleece.",

  //   caption:
  //     "Minimal design. Maximum comfort. Made for every day.",
  // },

  {
    slug: "black-printed-mens-coord-set",
    name: "Black Printed Men's Co-ord Set",
    category: "mens-coord-sets",
    gender: "men",
    price: 2850,
    badge: "Best Seller",
    bestSeller: true,

    colors: [
      C.black,
      C.gray,
      C.white,
      C.mocha,
    ],

    images: menGallery(
      menGrayy,
      "Black Printed Men's Co-ord Set"
    ),

    description:
      "A statement black co-ord set featuring a contemporary printed design. Created for men who want a relaxed everyday outfit with a modern streetwear-inspired edge.",

    fabric:
      "Soft heavyweight cotton fleece.",

    caption:
      "Bold print. Relaxed fit. Modern winter attitude.",
  },

  {
    slug: "midnight-black-mens-tracksuit",
    name: "Midnight Black Men's Tracksuit",
    category: "mens-tracksuits",
    gender: "men",
    price: 2990,
    badge: "Best Seller",
    bestSeller: true,

    colors: [
      C.black,
      C.gray,
      C.white,
      C.espresso,
    ],

    images: menGallery(
      menBlack,
      "Midnight Black Men's Tracksuit"
    ),

    description:
      "A sleek all-black men's tracksuit with a comfortable relaxed fit. Designed to transition effortlessly from everyday errands to travel and casual winter outings.",

    fabric:
      "Warm premium fleece with a smooth outer finish.",

    caption:
      "Classic black. Modern fit. Effortless winter style.",
  },

  {
    slug: "cozy-black-mens-hoodie-set",
    name: "Cozy Black Men's Hoodie Set",
    category: "mens-hoodies",
    gender: "men",
    price: 5050,
    badge: "New",
    isNew: true,

    colors: [
      C.black,
      C.gray,
      C.white,
      C.mocha,
    ],

    images: menGallery(
      menHoodie,
      "Cozy Black Men's Hoodie Set"
    ),

    description:
      "A premium oversized hoodie set designed for a relaxed winter wardrobe. Its heavyweight fleece construction provides warmth and comfort while maintaining a clean contemporary silhouette.",

    fabric:
      "Heavyweight brushed fleece.",

    caption:
      "Relaxed fit. Premium fleece. Your everyday winter layer.",
  },

  {
    slug: "cocoa-brown-mens-winter-set",
    name: "Cocoa Brown Men's Winter Set",
    category: "mens-coord-sets",
    gender: "men",
    price: 2890,
    compareAt: 3990,
    badge: "Sale",

    colors: [
      C.cocoa,
      C.black,
      C.gray,
      C.espresso,
    ],

    images: menGallery(
      menBlackSet,
      "Cocoa Brown Men's Winter Set"
    ),

    description:
      "A sophisticated cocoa-brown co-ord set designed for effortless winter dressing. The warm neutral tone and comfortable silhouette make it an easy everyday essential.",

    fabric:
      "Premium soft cotton fleece.",

    caption:
      "Warm tones. Elevated comfort. Everyday essential.",
  },

  // ==================================================
  // WOMEN'S COLLECTION
  // ==================================================

  // {
  //   slug: "mocha-luxe-tracksuit",
  //   name: "Mocha Luxe Tracksuit",
  //   category: "tracksuits",
  //   gender: "women",
  //   price: 2850,
  //   badge: "Best Seller",
  //   bestSeller: true,

  //   colors: [
  //     C.mocha,
  //     C.cocoa,
  //     C.cream,
  //     C.black,
  //   ],

  //   images: gallery(
  //     mocha,
  //     "Mocha Luxe Tracksuit"
  //   ),

  //   description:
  //     "A soft and cozy women's fleece tracksuit in a warm mocha tone. Designed with a relaxed silhouette for comfortable everyday wear, weekend plans and effortless winter styling.",

  //   fabric:
  //     "Brushed fleece, soft on the inside and warm without feeling bulky.",

  //   caption:
  //     "Your new favorite winter uniform.",
  // },

  {
    slug: "cloud-cream-cord-set",
    name: "Cloud Cream Cord Set",
    category: "cord-sets",
    gender: "women",
    price: 2850,
    badge: "New",
    isNew: true,
    bestSeller: true,

    colors: [
      C.cream,
      C.mocha,
      C.rose,
      C.black,
    ],

    images: gallery(
      cream,
      "Cloud Cream Cord Set"
    ),

    description:
      "A refined cream co-ord set featuring a relaxed top and coordinated trousers. Its soft texture and neutral tone make it an effortless choice for elevated everyday winter dressing.",

    fabric:
      "Soft corduroy blend with a cozy hand-feel.",

    caption:
      "Soft textures. Effortless elegance. Winter, your way.",
  },

  {
    slug: "blue-oversized-tracksuit",
    name: "Blue Oversized Tracksuit",
    category: "tracksuits",
    gender: "women",
    price: 2850,
    badge: "Best Seller",
    bestSeller: true,

    colors: [
      C.blue,
      C.cream,
      C.mocha,
      C.black,
    ],

    images: gallery(
      blue,
      "Blue Oversized Tracksuit"
    ),

    description:
      "A relaxed oversized tracksuit in a fresh blue tone. Designed for women who love comfortable silhouettes with a clean, contemporary winter aesthetic.",

    fabric:
      "Cotton-blend fleece with a soft brushed interior.",

    caption:
      "Oversized comfort with a fresh winter touch.",
  },

  {
    slug: "espresso-everyday-set",
    name: "Espresso Everyday Set",
    category: "cord-sets",
    gender: "women",
    price: 2850,
    compareAt: 5990,
    badge: "Sale",

    colors: [
      C.espresso,
      C.mocha,
      C.cocoa,
      C.cream,
    ],

    images: gallery(
      espresso,
      "Espresso Everyday Set"
    ),

    description:
      "A sophisticated espresso-toned co-ord set designed for polished everyday styling. The rich neutral shade pairs effortlessly with winter accessories and outerwear.",

    fabric:
      "Soft fine-wale corduroy.",

    caption:
      "Rich tones. Refined comfort. Made to be seen.",
  },

  {
    slug: "butter-yellow-oversized-hoodie-set",
    name: "Butter Yellow Oversized Hoodie Set",
    category: "hoodies",
    gender: "women",
    price: 2800,
    badge: "New",
    isNew: true,
    bestSeller: true,

    colors: [
      C.yellow,
      C.cream,
      C.mocha,
      C.black,
      C.gray,
      C.rose,
    ],

    images: gallery(
      yellow,
      "Butter Yellow Oversized Hoodie Set"
    ),

    description:
      "A premium oversized hoodie set in a soft butter-yellow shade. Designed for cozy winter days, the relaxed silhouette offers everyday comfort while adding a fresh pop of color to your wardrobe.",

    fabric:
      "Heavyweight brushed fleece with soft ribbed cuffs and hem.",

    caption:
      "Cozy layers. Beautiful colors. Everyday confidence.",
  },

  // {
  //   slug: "blackhoodiee",
  //   name: "Burgundy Essential Sweatshirt",
  //   category: "hoodie",
  //   gender: "women",
  //   price: 2790,
  //   badge: "New",
  //   isNew: true,



  //   images: gallery(
  //     blackhoodiee,
  //     "black Essential hoodie"
  //   ),

  //   description:
  //     "A classic oversized sweatshirt in a rich black tone. Designed as an easy everyday layer, it delivers warmth, comfort and effortless winter styling.",

  //   fabric:
  //     "Soft cotton-blend fleece with a brushed interior.",

  //   caption:
  //     "Easy layers. Cozy comfort. Effortless everyday style.",
  // },
];

// ==================================================
// CATEGORIES
// ==================================================

export const CATEGORIES = {

  // ==================================================
  // MEN'S CATEGORIES
  // ==================================================

  "mens-tracksuits": {
    title: "Men's Tracksuits",
    h1: "Men's Winter Tracksuits",
    blurb:
      "Premium men's tracksuits designed for everyday comfort, warmth and effortless winter style.",
    filter: (p) =>
      p.category === "mens-tracksuits" &&
      p.gender === "men",
    image: menWhite,
  },

  "mens-coord-sets": {
    title: "Men's Co-ord Sets",
    h1: "Men's Winter Co-ord Sets",
    blurb:
      "Modern coordinated sets combining relaxed silhouettes, premium comfort and effortless everyday style.",
    filter: (p) =>
      p.category === "mens-coord-sets" &&
      p.gender === "men",
    image: menGray,
  },

  "mens-hoodies": {
    title: "Men's Hoodies",
    h1: "Men's Winter Hoodies",
    blurb:
      "Premium hoodies and relaxed layers designed to keep you warm while maintaining a modern everyday look.",
    filter: (p) =>
      p.category === "mens-hoodies" &&
      p.gender === "men",
    image: menHoodie,
  },

  // ==================================================
  // WOMEN'S CATEGORIES
  // ==================================================

  tracksuits: {
    title: " Tracksuits",
    h1: "men's Winter Tracksuits",
    blurb:
      "Comfort meets effortless style in our collection of cozy men's winter tracksuits.",
    filter: (p) =>
      p.category === "tracksuits" &&
      p.gender === "men",
    image: menGray,
  },

  "cord-sets": {
    title: "Cord Sets",
    h1: "men's Winter Cord Sets",
    blurb:
      "Soft textures, rich winter tones and effortlessly coordinated silhouettes made for everyday wear.",
    filter: (p) =>
      p.category === "cord-sets" &&
      p.gender === "men",
    image: menBlack,
  },

  hoodies: {
    title: "Women's Hoodies",
    h1: "Women's Winter Hoodies",
    blurb:
      "Cozy oversized hoodies and matching sets designed for relaxed, comfortable winter styling.",
    filter: (p) =>
      p.category === "hoodies" &&
      p.gender === "women",
    image: yellow,
  },

  sweatshirts: {
    title: "Women's Sweatshirts",
    h1: "Women's Winter Sweatshirts",
    blurb:
      "Everyday cozy sweatshirts designed for effortless layering and comfortable winter styling.",
    filter: (p) =>
      p.category === "sweatshirts" &&
      p.gender === "women",
    image: burgundy,
  },

  // ==================================================
  // GENERAL CATEGORIES
  // ==================================================

  "best-sellers": {
    title: "Best Sellers",
    h1: "Best Sellers",
    blurb:
      "Discover the winter favorites loved across our men's and women's collections.",
    filter: (p) => !!p.bestSeller,
    image: blue,
  },

  "new-arrivals": {
    title: "New Arrivals",
    h1: "New Arrivals",
    blurb:
      "Fresh winter styles for both men and women, designed for the new season.",
    filter: (p) => !!p.isNew,
    image: espresso,
  },

  sale: {
    title: "Sale",
    h1: "Winter Sale",
    blurb:
      "Shop selected men's and women's winter essentials at special prices.",
    filter: (p) => !!p.compareAt,
    image: espresso,
  },
};

// ==================================================
// SHOP BY CATEGORY
// EXACTLY 4 CARDS
// 2 MEN + 2 WOMEN
// ==================================================

export const SHOP_CATEGORIES = [
  {
    label: "Men's Tracksuits",
    slug: "mens-tracksuits",
    gender: "men",
    image: menWhite,
  },

  {
    label: "Men's Hoodies",
    slug: "mens-hoodies",
    gender: "men",
    image: menHoodie,
  },

  {
    label: "Women's Tracksuits",
    slug: "tracksuits",
    gender: "women",
    image: mocha,
  },

  {
    label: "Women's Cord Sets",
    slug: "cord-sets",
    gender: "women",
    image: cream,
  },
];

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
  blue,
  yellow,

  // Men's
  menWhite,
  menGray,
  menGrayy,
  menBlack,
  menHoodie,
  menBlackSet,
};

// ==================================================
// HELPERS
// ==================================================

export const pkr = (n) =>
  `Rs. ${Number(n).toLocaleString("en-PK")}`;

export const getProduct = (slug) =>
  PRODUCTS.find((p) => p.slug === slug);

// ==================================================
// WHATSAPP
// ==================================================

export const waLink = (text) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

// ==================================================
// INSTAGRAM
// ==================================================

export const INSTAGRAM = {
  username: "@cozye_pk",
  url: CONTACT.instagram,
  label: "Follow us on Instagram @cozye_pk",
};