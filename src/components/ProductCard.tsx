import Link from "next/link";
import type { StoreProduct } from "@/data/products";
import SaveGiftButton from "@/components/SaveGiftButton";

export default function ProductCard({ product }: { product: StoreProduct }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}/`} className="product-card-image">
        <img src={product.image} alt={product.imageAlt} width="1200" height="740" loading="lazy" decoding="async" />
        <span className="product-badge">{product.badge}</span>
      </Link>
      <div className="product-card-info">
        <div className="product-card-meta"><span>{product.categoryLabel}</span><span className="product-status">Preview</span></div>
        <h3><Link href={`/products/${product.slug}/`}>{product.name}</Link></h3>
        <p>{product.shortDescription}</p>
        <div className="product-card-bottom"><div className="product-card-links"><Link className="product-view-link" href={`/products/${product.slug}/`}>Explore gift <span>↗</span></Link><Link className="product-buy-link" href={`/payment/${product.slug}/`}>Buy <span>→</span></Link></div><SaveGiftButton slug={product.slug} compact /></div>
      </div>
    </article>
  );
}
