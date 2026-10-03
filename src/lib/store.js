import mocha from "../assets/p-mocha.jpg";
import cream from "../assets/p-cream.jpg";
import rose from "../assets/p-rose.jpg";
import espresso from "../assets/p-espresso.jpg";
import burgundy from "../assets/p-burgundy.jpg";
import detail from "../assets/detail.jpg";
import lifestyle from "../assets/lifestyle.jpg";
import hero from "../assets/hero.jpg";

export const CONTACT = {
  whatsapp: "+923706198177",
  phone: "+923706198177",
  email: "winters@cozye.pk",
  instagram: "cozye_pk",
  tiktok: "",
  facebook: "",
};

export const FREE_DELIVERY_MIN = 3999;

const C = {
  mocha: { name: "Mocha", swatch: "bg-mocha" },
  cream: { name: "Cream", swatch: "bg-ivory" },
  rose: { name: "Dusty Rose", swatch: "bg-rose" },
  cocoa: { name: "Cocoa", swatch: "bg-primary" },
  wine: { name: "Burgundy", swatch: "bg-burgundy" },
};

const gallery = (main, name) => [
  { src: main, alt: `${name} for women — front view` },
  { src: lifestyle, alt: `${name} styled for a cozy winter day` },
  { src: detail, alt: `${name} soft fabric close-up` },
  { src: hero, alt: `Woman lounging in ${name}` },
];

export const SIZES = ["XS", "S", "M", "L", "XL"];

export const PRODUCTS = [
  {
    slug: "mocha-luxe-tracksuit", name: "Mocha Luxe Tracksuit", category: "tracksuits",
    price: 2450, badge: "Best Seller", bestSeller: true, colors: [C.mocha, C.cocoa, C.cream],
    images: gallery(mocha, "Mocha Luxe Tracksuit"),
    description: "A soft fleece hoodie and jogger set in a warm mocha tone — the women's winter tracksuit you'll reach for every day.",
    fabric: "Brushed fleece, soft on the inside, warm without feeling bulky.",
  },
  {
    slug: "cloud-cream-cord-set", name: "Cloud Cream Cord Set", category: "cord-sets",
    price: 2350, badge: "New", isNew: true, bestSeller: true, colors: [C.cream, C.mocha],
    images: gallery(cream, "Cloud Cream Cord Set"),
    description: "A ribbed knit co-ord set with a relaxed sweater and wide-leg trousers. Effortless winter dressing in one step.",
    fabric: "Rib-knit blend with a soft, cosy hand-feel.",
  },
  {
    slug: "rosewood-oversized-tracksuit", name: "Rosewood Oversized Tracksuit", category: "tracksuits",
    price: 2450, badge: "Best Seller", bestSeller: true, colors: [C.rose, C.cream],
    images: gallery(rose, "Rosewood Oversized Tracksuit"),
    description: "An oversized sweatshirt and straight-leg trouser set in a gentle dusty rose — cosy, feminine and easy to style.",
    fabric: "Cotton-blend terry fleece with a brushed interior.",
  },
  {
    slug: "espresso-everyday-set", name: "Espresso Everyday Set", category: "cord-sets",
    price: 2350, compareAt: 5990, badge: "Sale", colors: [C.cocoa, C.mocha],
    images: gallery(espresso, "Espresso Everyday Set"),
    description: "A cropped zip jacket with tailored straight trousers in rich espresso corduroy. Polished enough for outings.",
    fabric: "Soft fine-wale corduroy.",
  },
  {
    slug: "cocoa-comfort-set", name: "Cocoa Comfort Set", category: "sweatshirts",
    price: 2350, badge: "New", isNew: true, bestSeller: true, colors: [C.wine, C.cream],
    images: gallery(burgundy, "Cocoa Comfort Set"),
    description: "A relaxed crewneck sweatshirt in deep burgundy, paired with cream joggers for that everyday cosy look.",
    fabric: "Heavyweight fleece with ribbed cuffs and hem.",
  },
];

export const CATEGORIES = {
  tracksuits: { title: "Winter Tracksuits", h1: "Women's Winter Tracksuits", blurb: "Comfort meets effortless style.", filter: p => p.category === "tracksuits", image: mocha },
  "cord-sets": { title: "Cord Sets", h1: "Women's Winter Cord Sets", blurb: "Soft, coordinated and made to stand out.", filter: p => p.category === "cord-sets", image: cream },
  sweatshirts: { title: "Sweatshirts", h1: "Women's Sweatshirts", blurb: "Your everyday cozy essential.", filter: p => p.category === "sweatshirts", image: burgundy },
  "best-sellers": { title: "Best Sellers", h1: "Best Sellers", blurb: "The pieces everyone is loving.", filter: p => !!p.bestSeller, image: rose },
  "new-arrivals": { title: "New Arrivals", h1: "New Arrivals", blurb: "Fresh layers for the season.", filter: p => !!p.isNew, image: espresso },
  sale: { title: "Sale", h1: "Winter Sale", blurb: "Cozy favourites at softer prices.", filter: p => !!p.compareAt, image: espresso },
};

export const IMAGES = { hero, lifestyle, detail, mocha, cream, rose, espresso, burgundy };
export const pkr = n => `Rs. ${Number(n).toLocaleString("en-PK")}`;
export const getProduct = slug => PRODUCTS.find(p => p.slug === slug);
export const waLink = text => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
