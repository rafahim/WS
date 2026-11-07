import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://store.wishly.bd";
  const staticRoutes = ["", "/shop/", "/about/", "/faq/", "/privacy/", "/terms/"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route || "/"}`, lastModified: new Date("2026-11-07"), changeFrequency: route === "" || route === "/shop/" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : route === "/shop/" ? 0.9 : 0.5 })),
    ...categories.map((category) => ({ url: `${base}/categories/${category.slug}/`, lastModified: new Date("2026-11-07"), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...products.map((product) => ({ url: `${base}/products/${product.slug}/`, lastModified: new Date("2026-11-07"), changeFrequency: "monthly" as const, priority: 0.7 }))
  ];
}
