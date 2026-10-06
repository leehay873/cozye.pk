import { useState } from "react";
import { BrowserRouter, Link, NavLink, Routes, Route, useParams } from "react-router-dom";
import { Heart, Menu, Search, ShoppingBag, User, X, Minus, Plus, MessageCircle, Sparkles, RefreshCw, Truck, ShieldCheck, Star, Mail, Phone, ChevronLeft } from "lucide-react";
import { CartProvider, useCart } from "./lib/cart";
import { CONTACT, FREE_DELIVERY_MIN, getProduct, pkr, waLink, PRODUCTS, CATEGORIES, IMAGES, SIZES } from "./lib/store";
import "./styles.css";

const NAV = [
  ["/", "Home"], ["/collections/new-arrivals", "New Arrivals"], ["/collections/tracksuits", "Tracksuits"],
  ["/collections/cord-sets", "Cord Sets"], ["/collections/sweatshirts", "Sweatshirts"],
  ["/collections/best-sellers", "Best Sellers"], ["/collections/sale", "Sale"],
];

function Header() {
  const [menu, setMenu] = useState(false);
  const { items, wishlist, setOpen } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);

  return <>
    <div className="bg-primary px-3 py-2 text-center text-[0.65rem] tracking-[0.12em] text-primary-foreground uppercase sm:text-[0.7rem]">
      <span>Free Delivery on Orders Above {pkr(FREE_DELIVERY_MIN)}</span>
      <span className="mx-2 opacity-50">|</span>
      <span>Easy Exchange Available</span>
      <span className="hidden sm:inline">
        <span className="mx-2 opacity-50">|</span>
        <a href={`tel:${CONTACT.phone}`} className="hover:underline">{CONTACT.phone}</a>
        <span className="mx-2 opacity-50">|</span>
        <a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a>
      </span>
    </div>

    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">

        <button
          aria-label="Open menu"
          className="p-2 lg:hidden"
          onClick={() => setMenu(true)}
        >
          <Menu className="size-5" />
        </button>

        <Link
          to="/"
          className="font-serif text-2xl tracking-wide lg:text-3xl"
        >
          Cozyé<span className="text-rose">.pk</span>
        </Link>

        <nav className="hidden gap-7 lg:flex">
          {NAV.map(([to, label]) => (
            <NavLink
              key={label}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-[0.75rem] tracking-[0.16em] uppercase transition-colors hover:text-burgundy ${
                  isActive ? "text-burgundy" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            to="/collections/best-sellers"
            aria-label="Search"
            className="hidden p-2 sm:block"
          >
            <Search className="size-5" strokeWidth={1.5} />
          </Link>

          <Link
            to="/pages/contact"
            aria-label="Contact"
            className="hidden p-2 sm:block"
          >
            <User className="size-5" strokeWidth={1.5} />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Wishlist"
            className="relative p-2"
          >
            <Heart className="size-5" strokeWidth={1.5} />
            {wishlist.length > 0 && <Badge n={wishlist.length} />}
          </button>

          <button
            type="button"
            aria-label="Shopping bag"
            className="relative p-2"
            onClick={() => setOpen(true)}
          >
            <ShoppingBag className="size-5" strokeWidth={1.5} />
            {count > 0 && <Badge n={count} />}
          </button>
        </div>
      </div>
    </header>

    {menu && (
      <div
        className="fixed inset-0 z-50 bg-foreground/30 lg:hidden"
        onClick={() => setMenu(false)}
      >
        <div
          className="h-full w-4/5 max-w-xs bg-background p-6"
          onClick={e => e.stopPropagation()}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-serif text-2xl">Cozyé.pk</span>

            <button
              onClick={() => setMenu(false)}
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex flex-col">
            {NAV.map(([to, label]) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenu(false)}
                className="border-b py-4 font-serif text-xl"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 space-y-3 border-t pt-6 text-sm">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2"
            >
              <Phone className="size-4" />
              {CONTACT.phone}
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2"
            >
              <Mail className="size-4" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    )}

    <CartDrawer />
  </>;
}

function Badge({ n }) {
  return (
    <span className="absolute top-0.5 right-0.5 grid size-4 place-items-center rounded-full bg-burgundy text-[0.6rem] text-burgundy-foreground">
      {n}
    </span>
  );
}

function CartDrawer() {
  const { items, open, setOpen, remove, setQty } = useCart();

  if (!open) return null;

  const total = items.reduce(
    (s, i) => s + (getProduct(i.slug)?.price ?? 0) * i.qty,
    0
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/30"
      onClick={() => setOpen(false)}
    >
      <aside
        className="ml-auto flex h-full w-full max-w-md flex-col bg-background"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-2xl">Your Bag</h2>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close bag"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {items.length === 0 && (
            <p className="text-muted-foreground">
              Your bag is empty — let's find your new favourite set.
            </p>
          )}

          {items.map((it, idx) => {
            const p = getProduct(it.slug);

            if (!p) return null;

            return (
              <div key={idx} className="flex gap-4">
                <img
                  src={p.images[0].src}
                  alt={p.images[0].alt}
                  className="h-28 w-20 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <p className="font-serif text-lg leading-tight">
                    {p.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {it.color} · {it.size}
                  </p>

                  <p className="mt-1 text-sm">
                    {pkr(p.price)}
                  </p>

                  <div className="mt-2 flex items-center gap-3">
                    <Qty
                      value={it.qty}
                      onChange={q => setQty(idx, q)}
                      small
                    />

                    <button
                      onClick={() => remove(idx)}
                      className="text-xs underline text-muted-foreground"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {items.length > 0 && (
          <div className="space-y-3 border-t p-5">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{pkr(total)}</span>
            </div>

            <p className="text-xs text-muted-foreground">
              {total >= FREE_DELIVERY_MIN
                ? "You've unlocked free delivery."
                : `Add ${pkr(FREE_DELIVERY_MIN - total)} more for free delivery.`}
            </p>

            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Checkout
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}

function Qty({ value, onChange, small }) {
  const s = small ? "size-8" : "size-12";

  return (
    <div className="inline-flex items-center rounded-full border">
      <button
        type="button"
        className={`${s} grid place-items-center`}
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        <Minus className="size-3.5" />
      </button>

      <span className="w-6 text-center text-sm">
        {value}
      </span>

      <button
        type="button"
        className={`${s} grid place-items-center`}
        onClick={() => onChange(value + 1)}
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}

function ProductCard({ p }) {
  const { wishlist, toggleWish, add, setOpen } = useCart();

  const [color, setColor] = useState(p.colors[0].name);
  const [size, setSize] = useState("M");

  const wished = wishlist.includes(p.slug);

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-secondary">

        <Link to={`/products/${p.slug}`}>
          <img
            src={p.images[0].src}
            alt={p.images[0].alt}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {p.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] tracking-wider uppercase">
            {p.badge}
          </span>
        )}

        <button
          type="button"
          aria-label="Wishlist"
          onClick={() => toggleWish(p.slug)}
          className={`absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background/90 ${
            wished ? "text-burgundy" : ""
          }`}
        >
          <Heart
            className="size-4"
            fill={wished ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="pt-4">
        <Link to={`/products/${p.slug}`}>
          <h3 className="font-serif text-xl leading-tight hover:text-burgundy">
            {p.name}
          </h3>
        </Link>

        <div className="mt-1 flex items-center gap-2">
          <span>{pkr(p.price)}</span>

          {p.compareAt && (
            <span className="text-sm text-muted-foreground line-through">
              {pkr(p.compareAt)}
            </span>
          )}
        </div>

        <div className="mt-3 flex gap-1.5">
          {p.colors.map(c => (
            <button
              key={c.name}
              title={c.name}
              onClick={() => setColor(c.name)}
              className={`size-5 rounded-full border-2 ${c.swatch} ${
                color === c.name
                  ? "border-foreground"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <select
            value={size}
            onChange={e => setSize(e.target.value)}
            className="field min-h-10 flex-1 text-sm"
          >
            {SIZES.map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <button
            className="btn btn-primary px-4"
            onClick={() => {
              add({
                slug: p.slug,
                size,
                color,
                qty: 1
              });

              setOpen(true);
            }}
            aria-label={`Add ${p.name} to bag`}
          >
            <ShoppingBag className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const cats = [
    "tracksuits",
    "cord-sets",
    "sweatshirts",
    "best-sellers"
  ];

  const gram = [
    IMAGES.lifestyle,
    IMAGES.detail,
    IMAGES.rose,
    IMAGES.espresso,
    IMAGES.hero,
    IMAGES.cream
  ];

  const trust = [
    {
      icon: Sparkles,
      t: "Premium Fabric",
      d: "Soft & comfortable winter fabrics"
    },
    {
      icon: RefreshCw,
      t: "Easy Exchange",
      d: "Simple exchange process"
    },
    {
      icon: Truck,
      t: "Nationwide Delivery",
      d: "Delivery across Pakistan"
    },
    {
      icon: ShieldCheck,
      t: "Secure Checkout",
      d: "Safe & reliable ordering"
    }
  ];

  return <>
    <section className="relative isolate overflow-hidden">
      <img
        src={IMAGES.hero}
        alt="Woman in Cozyé winter wear"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />

      <div className="mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-20 lg:px-8">
        <div className="max-w-xl">
          <p className="eyebrow text-burgundy">
            The Winter Edit · 2026
          </p>

          <h1 className="mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Your New Favorite{" "}
            <em className="text-burgundy">Winter</em> Uniform.
          </h1>

          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Cozy layers, effortless style and everyday comfort made for your winter days.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/collections/tracksuits"
              className="btn btn-primary"
            >
              Shop Tracksuits
            </Link>

            <Link
              to="/collections/cord-sets"
              className="btn btn-outline"
            >
              Explore Cord Sets
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <h2 className="text-center text-4xl lg:text-5xl">
        Shop by Category
      </h2>

      <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
        {cats.map(slug => {
          const c = CATEGORIES[slug];

          return (
            <Link
              key={slug}
              to={`/collections/${slug}`}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={c.image}
                alt={c.title}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground lg:p-6">
                <h3 className="text-2xl lg:text-3xl">
                  {c.title}
                </h3>

                <p className="mt-1 hidden text-sm opacity-85 sm:block">
                  {c.blurb}
                </p>

                <span className="mt-3 inline-block border-b border-current pb-0.5 text-[0.7rem] tracking-[0.18em] uppercase">
                  Shop Now
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>

    {/* PRODUCTS - NOW ALL 10 PRODUCTS SHOW */}
    <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow text-burgundy">
          Our Collection
        </p>

        <h2 className="mt-3 text-4xl lg:text-5xl">
          Trending This Winter
        </h2>

        <p className="mt-3 text-muted-foreground">
          Explore all our cozy favorites, designed for everyday wear.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
        {PRODUCTS.map(p => (
          <ProductCard
            key={p.slug}
            p={p}
          />
        ))}
      </div>
    </section>

    <section className="border-y bg-secondary/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 lg:grid-cols-4 lg:px-8">
        {trust.map(({ icon: I, t, d }) => (
          <div key={t} className="text-center">
            <I
              className="mx-auto size-6 text-burgundy"
              strokeWidth={1.3}
            />

            <p className="mt-3 font-serif text-xl">
              {t}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {d}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <img
        src={IMAGES.burgundy}
        alt="Woman in a cream cord set"
        className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
      />

      <div>
        <p className="eyebrow text-burgundy">
          About Cozyé.pk
        </p>

        <h2 className="mt-4 text-5xl leading-tight lg:text-6xl">
          Made for Your <em>Cozy Era.</em>
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Cozyé.pk is a Pakistani winter fashion brand created for women and mens who believe comfort and style should go together. From soft tracksuits to effortless cord sets, every piece is designed to make everyday winter dressing feel easy, comfortable and beautiful.
        </p>

        <Link
          to="/pages/about"
          className="btn btn-outline mt-8"
        >
          Our Story
        </Link>
      </div>
    </section>

    <section className="bg-secondary/60 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-4xl lg:text-5xl">
          Loved by the Cozyé Community
        </h2>

        <div className="mt-4 flex justify-center gap-1 text-mocha">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="size-4"
              strokeWidth={1.3}
            />
          ))}
        </div>

        <p className="mt-5 text-muted-foreground">
          Reviews from our verified customers will appear here soon. Ordered with us? We'd love to hear about your cozy era.
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pt-20 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl">
          Your Cozye Era Starts Here.
        </h2>

        {CONTACT.instagram ? (
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-6"
          >
            Follow @cozye.pk
          </a>
        ) : (
          <p className="mt-3 eyebrow text-muted-foreground">
            @cozye.pk
          </p>
        )}
      </div>

      <div className="mt-10 grid grid-cols-3 gap-2 lg:grid-cols-6">
        {gram.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Cozyé winter outfit styling"
            loading="lazy"
            className="aspect-square w-full rounded-xl object-cover"
          />
        ))}
      </div>
    </section>
  </>;
}

function Collection() {
  const { slug } = useParams();
  const c = CATEGORIES[slug];

  if (!c) return <NotFound />;

  const products = PRODUCTS.filter(c.filter);

  return <>
    <section className="relative overflow-hidden">
      <img
        src={c.image}
        alt={c.title}
        className="h-[45vh] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 py-12 text-primary-foreground lg:px-8">
        <p className="eyebrow opacity-80">
          {c.title}
        </p>

        <h1 className="mt-3 text-5xl lg:text-6xl">
          {c.h1}
        </h1>

        <p className="mt-3 text-lg opacity-85">
          {c.blurb}
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {products.length} styles
        </p>

        <Link
          to="/"
          className="text-sm underline"
        >
          Back Home
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
        {products.map(p => (
          <ProductCard
            key={p.slug}
            p={p}
          />
        ))}
      </div>
    </section>
  </>;
}

function ProductPage() {
  const { slug } = useParams();
  const p = getProduct(slug);
  const { add, setOpen } = useCart();

  const [image, setImage] = useState(0);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState(
    p?.colors[0]?.name || ""
  );

  if (!p) return <NotFound />;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm underline"
      >
        <ChevronLeft className="size-4" />
        Back
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img
            src={p.images[image].src}
            alt={p.images[image].alt}
            className="aspect-[3/4] w-full rounded-3xl object-cover"
          />

          <div className="mt-3 grid grid-cols-4 gap-2">
            {p.images.map((im, i) => (
              <button
                key={i}
                onClick={() => setImage(i)}
                className={`overflow-hidden rounded-xl border ${
                  image === i
                    ? "border-burgundy"
                    : "border-transparent"
                }`}
              >
                <img
                  src={im.src}
                  alt=""
                  className="aspect-square w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="self-center">
          <p className="eyebrow text-burgundy">
            {p.badge || "Cozyé.pk"}
          </p>

          <h1 className="mt-3 text-5xl leading-tight lg:text-6xl">
            {p.name}
          </h1>

          <div className="mt-4 flex items-center gap-3 text-xl">
            <span>{pkr(p.price)}</span>

            {p.compareAt && (
              <span className="text-muted-foreground line-through">
                {pkr(p.compareAt)}
              </span>
            )}
          </div>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {p.description}
          </p>

          <div className="mt-8">
            <p className="text-sm">
              Color:{" "}
              <span className="font-medium">
                {color}
              </span>
            </p>

            <div className="mt-3 flex gap-2">
              {p.colors.map(c => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  className={`size-8 rounded-full border-2 ${c.swatch} ${
                    color === c.name
                      ? "border-foreground"
                      : "border-transparent"
                  }`}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div className="mt-7">
            <div className="flex items-center justify-between">
              <p className="text-sm">Size</p>

              <Link
                to="/pages/size-guide"
                className="text-xs underline"
              >
                Size Guide
              </Link>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {SIZES.map(s => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-12 rounded-full border px-4 py-2 text-sm ${
                    size === s
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            className="btn btn-primary mt-8 w-full"
            onClick={() => {
              add({
                slug: p.slug,
                size,
                color,
                qty: 1
              });

              setOpen(true);
            }}
          >
            <ShoppingBag className="size-4" />
            Add to Bag
          </button>

          <div className="mt-8 border-t pt-6">
            <p className="font-medium">Fabric</p>

            <p className="mt-1 text-muted-foreground">
              {p.fabric}
            </p>

            <p className="mt-5 font-medium">
              Need help?
            </p>

            <p className="mt-1 text-muted-foreground">
              WhatsApp{" "}
              <a
                className="underline"
                href={waLink("Hi Cozyé! I need help with this product.")}
                target="_blank"
                rel="noreferrer"
              >
                {CONTACT.phone}
              </a>{" "}
              or email{" "}
              <a
                className="underline"
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROVINCES = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Gilgit-Baltistan",
  "Azad Kashmir"
];

function Checkout() {
  const { items, clear } = useCart();

  const [done, setDone] = useState(null);

  const [single, setSingle] = useState({
    slug: PRODUCTS[0].slug,
    size: "M",
    color: PRODUCTS[0].colors[0].name,
    qty: 1
  });

  const lines = items.length ? items : [single];

  const total = lines.reduce(
    (s, i) =>
      s + (getProduct(i.slug)?.price ?? 0) * i.qty,
    0
  );

  const submit = e => {
    e.preventDefault();

    const f = new FormData(e.currentTarget);

    const orderId = `COZ-${Date.now()
      .toString()
      .slice(-8)}`;

    const orderDate = new Date().toLocaleString(
      "en-PK",
      {
        dateStyle: "medium",
        timeStyle: "short"
      }
    );

    const msg = [
      "🛍️ NEW COZYÉ.PK ORDER",
      "",
      `Order ID: ${orderId}`,
      `Date: ${orderDate}`,
      "",
      "PRODUCTS",
      ...lines.map((l, i) => {
        const p = getProduct(l.slug);

        return `${i + 1}. ${
          p?.name || l.slug
        } — ${l.color}, ${l.size} × ${
          l.qty
        } = ${pkr((p?.price ?? 0) * l.qty)}`;
      }),
      "",
      `TOTAL: ${pkr(total)}`,
      "",
      "CUSTOMER DETAILS",
      `Name: ${f.get("name")}`,
      `Mobile: ${f.get("phone")}`,
      `Email: ${f.get("email") || "-"}`,
      `Address: ${f.get("address")}`,
      `City: ${f.get("city")}`,
      `Province: ${f.get("province")}`,
      "",
      `Payment: ${f.get("payment")}`,
      `Notes: ${f.get("notes") || "-"}`,
      "",
      "Please confirm this order with the customer."
    ].join("\n");

    window.open(
      waLink(msg),
      "_blank",
      "noopener,noreferrer"
    );

    clear();
    setDone(String(f.get("name")));
  };

  if (done) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="text-5xl">
          Thank you, {done.split(" ")[0]}!
        </h1>

        <p className="mt-4 text-muted-foreground">
          Your complete order details are ready in WhatsApp. Tap Send to send the order to Cozyé.pk support at 03246476900.
        </p>

        <Link
          to="/"
          className="btn btn-primary mt-8"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 lg:px-8">
      <h1 className="text-center text-5xl">
        Place Your Order
      </h1>

      <form
        onSubmit={submit}
        className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]"
      >
        <div className="space-y-5">
          <Field label="Full Name *">
            <input
              name="name"
              required
              className="field"
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Mobile Number *">
              <input
                name="phone"
                required
                type="tel"
                placeholder="03XX XXXXXXX"
                className="field"
              />

              <span className="mt-1 block text-xs text-muted-foreground">
                Support: {CONTACT.phone}
              </span>
            </Field>

            <Field label="Email Address">
              <input
                name="email"
                type="email"
                className="field"
              />
            </Field>
          </div>

          <Field label="Complete Address *">
            <textarea
              name="address"
              required
              rows="2"
              className="field"
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="City *">
              <input
                name="city"
                required
                className="field"
              />
            </Field>

            <Field label="Province *">
              <select
                name="province"
                required
                className="field"
                defaultValue=""
              >
                <option value="" disabled>
                  Select
                </option>

                {PROVINCES.map(x => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </Field>
          </div>

          {!items.length && (
            <div className="grid gap-5 rounded-2xl border bg-card p-5 sm:grid-cols-2">
              <Field label="Product">
                <select
                  className="field"
                  value={single.slug}
                  onChange={e => {
                    const p = PRODUCTS.find(
                      x => x.slug === e.target.value
                    );

                    setSingle({
                      ...single,
                      slug: p.slug,
                      color: p.colors[0].name
                    });
                  }}
                >
                  {PRODUCTS.map(p => (
                    <option key={p.slug}>
                      {p.slug}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Size">
                <select
                  className="field"
                  value={single.size}
                  onChange={e =>
                    setSingle({
                      ...single,
                      size: e.target.value
                    })
                  }
                >
                  {SIZES.map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>

              <Field label="Color">
                <select
                  className="field"
                  value={single.color}
                  onChange={e =>
                    setSingle({
                      ...single,
                      color: e.target.value
                    })
                  }
                >
                  {getProduct(single.slug).colors.map(c => (
                    <option key={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Quantity">
                <input
                  type="number"
                  min="1"
                  className="field"
                  value={single.qty}
                  onChange={e =>
                    setSingle({
                      ...single,
                      qty: Math.max(
                        1,
                        +e.target.value
                      )
                    })
                  }
                />
              </Field>
            </div>
          )}

          <Field label="Order Notes">
            <textarea
              name="notes"
              rows="2"
              className="field"
            />
          </Field>

          <fieldset>
            <legend className="mb-2 text-sm">
              Payment Method
            </legend>

            <div className="space-y-2">
              {[
                "Cash on Delivery",
                "Bank Transfer",
                "Other (we'll confirm on WhatsApp)"
              ].map((m, i) => (
                <label
                  key={m}
                  className="flex min-h-12 items-center gap-3 rounded-xl border bg-card px-4"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m}
                    defaultChecked={i === 0}
                    className="accent-burgundy"
                  />

                  {m}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              required
              className="mt-1 size-4 accent-burgundy"
            />

            I confirm that my order details are correct.
          </label>
        </div>

        <aside className="h-fit rounded-2xl bg-secondary/70 p-6 lg:sticky lg:top-28">
          <h2 className="text-2xl">
            Order Summary
          </h2>

          <div className="mt-4 space-y-3">
            {lines.map((l, i) => {
              const p = getProduct(l.slug);

              return (
                <div
                  key={i}
                  className="flex justify-between gap-3 text-sm"
                >
                  <span>
                    {p.name}
                    <br />

                    <span className="text-muted-foreground">
                      {l.color} · {l.size} × {l.qty}
                    </span>
                  </span>

                  <span>
                    {pkr(p.price * l.qty)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex justify-between border-t pt-4">
            <span>Total</span>

            <span className="font-medium">
              {pkr(total)}
            </span>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">
            {total >= FREE_DELIVERY_MIN
              ? "Free delivery included."
              : "Delivery charges confirmed with your order."}
          </p>

          <button
            type="submit"
            className="btn btn-primary mt-6 w-full"
          >
            Confirm Order
          </button>
        </aside>
      </form>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm">
        {label}
      </span>

      {children}
    </label>
  );
}

const PAGE_DATA = {
  about: [
    "About Cozyé.pk",
    [
      "Cozyé.pk is a Pakistani winter fashion brand created for women and men who believe comfort and style should go together.",
      "From soft tracksuits to effortless cord sets, every piece is designed to make everyday winter dressing feel easy, comfortable and beautiful."
    ]
  ],

  contact: [
    "Contact Us",
    [
      <>
        WhatsApp / Call:{" "}
        <a
          className="underline"
          href={`tel:${CONTACT.phone}`}
        >
          {CONTACT.phone}
        </a>
      </>,
      <>
        Email:{" "}
        <a
          className="underline"
          href={`mailto:${CONTACT.email}`}
        >
          {CONTACT.email}
        </a>
      </>,
      "We're happy to help with sizing, orders and exchanges."
    ]
  ],

  "size-guide": [
    "Size Guide",
    [
      "Our sets have a relaxed, comfortable fit. Measurements for each size are listed on every product page.",
      "Between sizes? Message us on WhatsApp and we'll help you choose."
    ]
  ],

  shipping: [
    "Shipping Policy",
    [
      "We deliver across Pakistan.",
      "Free delivery on orders above Rs. 3,999. Delivery timelines and charges are confirmed when your order is placed."
    ]
  ],

  exchange: [
    "Exchange Policy",
    [
      "Easy exchanges are available. Please contact us on WhatsApp with your order details to start an exchange."
    ]
  ],

  privacy: [
    "Privacy Policy",
    [
      "We only use your details to process and deliver your order and to contact you about it. We never sell your information."
    ]
  ],

  terms: [
    "Terms & Conditions",
    [
      "By placing an order you confirm that your details are correct. Prices are in PKR and may change without notice."
    ]
  ],

  faqs: [
    "FAQs",
    [
      "Do you offer Cash on Delivery? Yes.",
      "Do you deliver nationwide? Yes, across Pakistan.",
      "Can I exchange my size? Yes — message us on WhatsApp."
    ]
  ]
};

function InfoPage() {
  const { slug } = useParams();
  const p = PAGE_DATA[slug];

  if (!p) return <NotFound />;

  return (
    <article className="mx-auto max-w-2xl px-4 py-20">
      <h1 className="text-5xl">
        {p[0]}
      </h1>

      <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground">
        {p[1].map((b, i) => (
          <p key={i}>{b}</p>
        ))}
      </div>

      {slug === "contact" && (
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            className="btn btn-primary"
            href={waLink("Hi Cozyé! I need help with my order.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="size-4" />
            WhatsApp Us
          </a>

          <a
            className="btn btn-outline"
            href={`mailto:${CONTACT.email}`}
          >
            <Mail className="size-4" />
            Email Us
          </a>
        </div>
      )}
    </article>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl">404</h1>

        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="btn btn-primary mt-6"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  const links = [
    ["about", "About Us"],
    ["contact", "Contact Us"],
    ["size-guide", "Size Guide"],
    ["shipping", "Shipping Policy"],
    ["exchange", "Exchange Policy"],
    ["privacy", "Privacy Policy"],
    ["terms", "Terms & Conditions"],
    ["faqs", "FAQs"]
  ];

  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 lg:px-8">

        <div>
          <p className="font-serif text-4xl">
            Cozyé.pk
          </p>

          <p className="mt-2 font-serif text-lg italic opacity-80">
            Made for your cozy era.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <a
              className="flex items-center gap-2 hover:text-rose"
              href={`tel:${CONTACT.phone}`}
            >
              <Phone className="size-4" />
              {CONTACT.phone}
            </a>

            <a
              className="flex items-center gap-2 hover:text-rose"
              href={`mailto:${CONTACT.email}`}
            >
              <Mail className="size-4" />
              {CONTACT.email}
            </a>

            <a
              className="flex items-center gap-2 hover:text-rose"
              href={waLink("Hi Cozyé!")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-3 text-sm">
          {links.map(([slug, label]) => (
            <li key={slug}>
              <Link
                to={`/pages/${slug}`}
                className="opacity-80 hover:opacity-100"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <p className="eyebrow opacity-70">
            Customer Support
          </p>

          <p className="mt-3 font-serif text-xl">
            WhatsApp us for sizing & order assistance.
          </p>

          <a
            href={`tel:${CONTACT.phone}`}
            className="mt-5 inline-block text-sm underline"
          >
            {CONTACT.phone}
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-2 block text-sm underline"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>

      <p className="border-t border-primary-foreground/15 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Cozyé.pk · Women's and men's winter wear, Pakistan
      </p>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi Cozyé! I need help with sizing / my order.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-20 z-40 grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-soft lg:bottom-6"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/collections/:slug"
              element={<Collection />}
            />
            <Route
              path="/products/:slug"
              element={<ProductPage />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
            <Route
              path="/pages/:slug"
              element={<InfoPage />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFab />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;