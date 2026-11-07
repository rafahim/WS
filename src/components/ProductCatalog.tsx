"use client";

import { useMemo, useState } from "react";
import type { StoreProduct } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductCatalog({ products, showFilters = true }: { products: StoreProduct[]; showFilters?: boolean }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter((p) => !q || `${p.name} ${p.categoryLabel} ${p.shortDescription} ${p.idealFor.join(" ")}`.toLowerCase().includes(q));
    if (sort === "az") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za") list.sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [products, query, sort]);

  return <>
    {showFilters && <div className="catalog-toolbar">
      <label className="catalog-search"><span aria-hidden="true">⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search cards, gifts and surprises…" aria-label="Search products" /></label>
      <label className="catalog-sort"><span>Sort by</span><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products"><option value="featured">Featured</option><option value="az">Name: A to Z</option><option value="za">Name: Z to A</option></select></label>
    </div>}
    <div className="product-grid">{filtered.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    {filtered.length === 0 && <div className="catalog-empty"><span>✧</span><h3>No gifts found</h3><p>Try another search, or browse all of the collection.</p><button type="button" onClick={() => setQuery("")}>Clear search</button></div>}
    <p className="catalog-count">Showing {filtered.length} {filtered.length === 1 ? "gift" : "gift ideas"}. Products are previews until launch details are announced.</p>
  </>;
}
