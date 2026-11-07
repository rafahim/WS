import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };
const wishlyContact = "https://wishly.bd/contact";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Payment unavailable", robots: { index: false, follow: true } };
  return {
    title: `Purchase unavailable — ${product.name}`,
    description: `The ${product.name} listing is currently a preview and cannot be purchased yet. No payment is accepted.`,
    alternates: { canonical: `/payment/${slug}/` },
    robots: { index: false, follow: true },
  };
}

export default async function PaymentStatusPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <section className="payment-status-section">
      <div className="store-container payment-status-container">
        <div className="store-breadcrumb"><Link href="/">Home</Link><span> / </span><Link href="/shop/">Shop</Link><span> / </span><Link href={`/products/${product.slug}/`}>{product.name}</Link><span> / </span><span>Payment status</span></div>
        <div className="payment-status-card">
          <div className="payment-status-icon" aria-hidden="true"><span>✦</span></div>
          <span className="store-kicker">WISHLY STORE · ORDER STATUS</span>
          <span className="payment-unavailable-badge"><i /> NOT AVAILABLE YET</span>
          <h1>This gift <em>isn’t available to buy yet.</em></h1>
          <p className="payment-status-lead">Thanks for your interest in <strong>{product.name}</strong>. Wishly Store is currently showing collection previews. Ordering and payment have not opened for this item.</p>
          <div className="payment-product-summary">
            <img src={product.image} alt={product.imageAlt} width="180" height="140" />
            <div><span>{product.categoryLabel}</span><b>{product.name}</b><small>{product.format} · Preview listing</small></div>
          </div>
          <div className="payment-assurance"><span>✓</span><p><strong>No payment will be taken.</strong> This page does not collect payment details, create an order or charge your card. Please do not send money for this preview listing.</p></div>
          <div className="payment-status-actions">
            <Link className="store-button store-button-primary" href={`/products/${product.slug}/`}>Back to gift details <span>↗</span></Link>
            <a className="store-button store-button-ghost" href={wishlyContact} target="_blank" rel="noopener noreferrer">Contact Wishly <span>↗</span></a>
          </div>
          <p className="payment-status-footnote">When ordering becomes available, this page will be updated with confirmed pricing, delivery information and secure payment options.</p>
        </div>
      </div>
    </section>
  );
}
