import { createContext, useContext, useEffect, useState } from "react";

const CartCtx = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [wishlist, setWish] = useState([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem("cozye-cart") || "[]"));
      setWish(JSON.parse(localStorage.getItem("cozye-wish") || "[]"));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("cozye-cart", JSON.stringify(items));
    localStorage.setItem("cozye-wish", JSON.stringify(wishlist));
  }, [items, wishlist, ready]);

  const add = item => setItems(prev => {
    const idx = prev.findIndex(p => p.slug === item.slug && p.size === item.size && p.color === item.color);
    if (idx >= 0) return prev.map((p, n) => n === idx ? { ...p, qty: p.qty + item.qty } : p);
    return [...prev, item];
  });

  const value = {
    items, wishlist, open, setOpen, add,
    remove: idx => setItems(p => p.filter((_, n) => n !== idx)),
    setQty: (idx, qty) => setItems(p => p.map((it, n) => n === idx ? { ...it, qty: Math.max(1, qty) } : it)),
    clear: () => setItems([]),
    toggleWish: slug => setWish(w => w.includes(slug) ? w.filter(x => x !== slug) : [...w, slug]),
  };

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export const useCart = () => {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};
