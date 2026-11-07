"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const KEY = "wishly-store-saved-v1";
export default function WishlistContents() {
  const [saved, setSaved] = useState<string[]>([]);
  useEffect(() => {
    const load = () => {
      try { const data = JSON.parse(localStorage.getItem(KEY) || "[]"); setSaved(Array.isArray(data) ? data : []); }
      catch { setSaved([]); }
    };
    load();
    window.addEventListener("wishly-store-saved-change", load);
    window.addEventListener("storage", load);
    return () => { window.removeEventListener("wishly-store-saved-change", load); window.removeEventListener("storage", load); };
  }, []);
  const selected = products.filter((product) => saved.includes(product.slug));
  return selected.length ? <div className="product-grid">{selected.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="wishlist-empty"><span>♡</span><h2>Your saved gifts will live here.</h2><p>Tap the heart on a product to keep it close while you explore.</p><Link className="store-button store-button-primary" href="/shop/">Explore the store <span>→</span></Link></div>;
}
