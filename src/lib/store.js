import mocha from "../assets/p-mocha.jpg";
import cream from "../assets/p-cream.jpg";
import rose from "../assets/p-rose.jpg";
import espresso from "../assets/p-espresso.jpg";
import blue from "../assets/blueeegirl.jpeg";
import yellow  from "../assets/butteryellow.jpeg";
import burgundy from "../assets/p-burgundy.jpg";
import detail from "../assets/detail.jpg";
import lifestyle from "../assets/lifestyle.jpg";
import hero from "../assets/herooooo.jpeg";

// Men's images
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
    name: "Yellow",
    swatch: "bg-yellow-400",
  },
  blue: {
    name: "Blue",
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
    alt: `${name} styled for a cozy winter day`,
  },
  {
    src: detail,
    alt: `${name} soft fabric close-up`,
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

export const SIZES = ["XS", "S", "M", "L", "XL"];

// ==================================================
// PRODUCTS
// MEN'S COLLECTION FIRST
// WOMEN'S COLLECTION AFTER
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
      "A refined everyday tracksuit designed for men who value comfort without compromising on style. The clean silhouette and versatile neutral palette make it an effortless winter essential.",

    fabric:
      "Premium cotton-blend fleece with a soft brushed interior.",

    caption:
      "Clean lines. Premium comfort. Everyday confidence.",
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
      C.mocha,
    ],

    images: menGallery(
      menGray,
      "Essential Gray Co-ord Set"
    ),

    description:
      "A modern gray co-ord set created for effortless everyday dressing. Its relaxed fit, clean finish and timeless color make it perfect for casual days, travel and weekends.",

    fabric:
      "Soft heavyweight cotton fleece.",

    caption:
      "Minimal design. Maximum comfort. Made for every day.",
  },  
  {
    slug: "menGrayy",
    name: "black printed Co-ord Set",
    category: "mens-coord-sets",
    gender: "men",
    price: 2590,
    badge: "Best Seller",
    bestSeller: true,

    colors: [
      C.gray,
      C.white,
      C.black,
      C.mocha,
    ],

    images: menGallery(
      menGrayy,
      "Essential blackprinted Co-ord Set"
    ),

    description:
      "A modern blackprinted co-ord set created for effortless everyday dressing. Its relaxed fit, clean finish and timeless color make it perfect for casual days, travel and weekends.",

    fabric:
      "Soft heavyweight cotton fleece.",

    caption:
      "Minimal design. Maximum comfort. Made for every day.",
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
      C.espresso,
    ],

    images: menGallery(
      menBlack,
      "Midnight Black Tracksuit"
    ),

    description:
      "A sleek all-black tracksuit with a contemporary relaxed fit. Designed to move effortlessly from everyday errands to travel and casual outings.",

    fabric:
      "Warm premium fleece with a smooth outer finish.",

    caption:
      "Classic black. Modern fit. Effortless winter style.",
  },

  {
    slug: "cozy-black-hoodie-set",
    name: "Cozy black Hoodie Set",
    category: "mens-hoodies",
    gender: "men",
    price: 4650,
    badge: "New",
    isNew: true,

    colors: [
      C.gray,
      C.black,
      C.white,
      C.mocha,
    ],

    images: menGallery(
      menHoodie,
      "Cozy black Hoodie Set"
    ),

    description:
      "A premium oversized hoodie paired . Designed for a laid-back winter wardrobe with a comfortable silhouette and elevated everyday appeal.",

    fabric:
      "Heavyweight brushed fleece.",

    caption:
      "Relaxed fit. Premium fleece. Your everyday winter layer.",
  },

  {
    slug: "coco brown-essential-winter-set",
    name: "Coco Brown Essential Winter Set",
    category: "mens-coord-sets",
    gender: "men",
    price: 2890,
    compareAt: 3990,
    badge: "Sale",

    colors: [
      C.black,
      C.gray,
      C.white,
      C.espresso,
    ],

    images: menGallery(
      menBlackSet,
      "Coco Brown Essential Winter Set"
    ),

    description:
      "A sleek winter co-ord designed around timeless comfort. The understated black finish makes it an easy choice for everyday styling.",

    fabric:
      "Premium soft cotton fleece.",

    caption:
      "Timeless black. Elevated comfort. Everyday essential.",
  },

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
      C.black,
    ],

    images: gallery(
      mocha,
      "Mocha Luxe Tracksuit"
    ),

    description:
      "A soft fleece hoodie set in a warm mocha tone. Designed for cozy days, relaxed weekends and effortless winter styling.",

    fabric:
      "Brushed fleece, soft on the inside and warm without feeling bulky.",

    caption:
      "Your new favorite winter uniform.",
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
      C.rose,
      C.black,
    ],

    images: gallery(
      cream,
      "Cloud Cream Cord Set"
    ),

    description:
      "A refined ribbed knit co-ord featuring a relaxed top and wide-leg trousers. Soft, elegant and effortless for everyday winter dressing.",

    fabric:
      "Rib-knit blend with a soft, cozy hand-feel.",

    caption:
      "Soft textures. Effortless elegance. Winter, your way.",
  },

  {
    slug: "blue",
    name: "Blue Oversized Tracksuit",
    category: "tracksuits",
    gender: "women",
    price: 2450,
    badge: "Best Seller",
    bestSeller: true,

    colors: [
      C.rose,
      C.cream,
      C.mocha,
      C.black,
    ],

    images: gallery(
      blue,
      "Blue Oversized Tracksuit"
    ),

    description:
      "An oversized sweatshirt and relaxed straight-leg trouser set in a soft dusty rose. Feminine, comfortable and effortlessly stylish.",

    fabric:
      "Cotton-blend terry fleece with a brushed interior.",

    caption:
      "Oversized comfort with a soft feminine touch.",
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
      C.espresso,
      C.cream,
    ],

    images: gallery(
      espresso,
      "Espresso Everyday Set"
    ),

    description:
      "A sophisticated cropped zip jacket paired with tailored straight trousers in rich espresso corduroy. Polished enough for outings and comfortable enough for every day.",

    fabric:
      "Soft fine-wale corduroy.",

    caption:
      "Rich tones. Refined comfort. Made to be seen.",
  },

  // ==================================================
  // WOMEN'S HOODIE
  // ==================================================

  {
    slug:"yellow",
    name: " Butter Yellow Oversized Hoodie Set",
    category: "hoodies",
    gender: "women",
    price: 2350,
    badge: "New",
    isNew: true,
    bestSeller: true,

    colors: [
      C.wine,
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
      "A premium relaxed-fit hoodie set designed for cozy winter days. The soft fleece construction and easy silhouette make it a wardrobe essential for everyday wear.",

    fabric:
      "Heavyweight brushed fleece with soft ribbed cuffs and hem.",

    caption:
      "Cozy layers. Beautiful colors. Everyday confidence.",
  },
];

// ==================================================
// CATEGORIES
// MEN'S FIRST
// ==================================================

export const CATEGORIES = {

  // ==================================================
  // MEN'S CATEGORIES
  // ==================================================

  "mens-tracksuits": {
    title: "Men's Tracksuits",
    h1: "Men's Winter Tracksuits",
    blurb:
      "Premium comfort and effortless style for every winter day.",
    filter: (p) =>
      p.category === "mens-tracksuits" &&
      p.gender === "men",
    image: menWhite,
  },

  "mens-coord-sets": {
    title: "Men's Co-ord Sets",
    h1: "Men's Winter Co-ord Sets",
    blurb:
      "Clean silhouettes, premium comfort and effortless everyday style.",
    filter: (p) =>
      p.category === "mens-coord-sets" &&
      p.gender === "men",
    image: menGray,
  },

  "mens-hoodies": {
    title: "Men's Hoodies",
    h1: "Men's Winter Hoodies",
    blurb:
      "Warm, relaxed layers designed for modern everyday comfort.",
    filter: (p) =>
      p.category === "mens-hoodies" &&
      p.gender === "men",
    image: menHoodie,
  },

  // ==================================================
  // WOMEN'S CATEGORIES
  // ==================================================

  tracksuits: {
    title: "Winter Tracksuits",
    h1: "Women's Winter Tracksuits",
    blurb:
      "Comfort meets effortless style in our signature winter tracksuits.",
    filter: (p) =>
      p.category === "tracksuits" &&
      p.gender === "women",
    image: mocha,
  },

  "cord-sets": {
    title: "Cord Sets",
    h1: "Women's Winter Cord Sets",
    blurb:
      "Soft textures, beautiful tones and effortless coordinated dressing.",
    filter: (p) =>
      p.category === "cord-sets" &&
      p.gender === "women",
    image: cream,
  },

  hoodies: {
    title: "Women's Hoodies",
    h1: "Women's Winter Hoodies",
    blurb:
      "Cozy oversized layers made for your everyday winter wardrobe.",
    filter: (p) =>
      p.category === "hoodies" &&
      p.gender === "women",
    image: burgundy,
  },

  sweatshirts: {
    title: "Sweatshirts",
    h1: "Women's Sweatshirts",
    blurb:
      "Everyday cozy essentials designed for effortless winter styling.",
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
      "The pieces everyone is loving this winter.",
    filter: (p) => !!p.bestSeller,
    image: rose,
  },

  "new-arrivals": {
    title: "New Arrivals",
    h1: "New Arrivals",
    blurb:
      "Fresh winter layers designed for the new season.",
    filter: (p) => !!p.isNew,
    image: espresso,
  },

  sale: {
    title: "Sale",
    h1: "Winter Sale",
    blurb:
      "Your favorite cozy pieces at softer prices.",
    filter: (p) => !!p.compareAt,
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
  blue,
  yellow,


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