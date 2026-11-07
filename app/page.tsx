import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export const metadata: Metadata = {
  title: { absolute: "Wishly Store — Cards, Mystery Gifts & Birthday Surprises" },
  description: "Discover Wishly Cards, mystery gift concepts, birthday surprises, anniversary keepsakes and thoughtful gifts for the people you love.",
  alternates: { canonical: "/" },
  openGraph: { title: "Wishly Store — Gifts with Meaning", description: "Thoughtful cards, mystery gifts and personal surprises for every meaningful moment.", url: "/", type: "website", images: [{ url: "/images/og-wishly-store.png", width: 1200, height: 630, alt: "Wishly Store gift collections" }] },
  twitter: { card: "summary_large_image", title: "Wishly Store — Gifts with Meaning", description: "Thoughtful cards, mystery gifts and personal surprises.", images: ["/images/og-wishly-store.png"] }
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "OnlineStore", "@id": "https://store.wishly.bd/#store",
  name: "Wishly Store", url: "https://store.wishly.bd/", description: "A curated collection preview of Wishly Cards, mystery gifts and meaningful digital gift ideas.",
  brand: { "@type": "Brand", name: "Wishly" }, parentOrganization: { "@type": "Organization", name: "Wishly", url: "https://wishly.bd/" }
};

export default function HomePage() {
  const featured = products.slice(0, 6);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <section className="store-hero">
      <div className="store-hero-glow" aria-hidden="true" />
      <div className="store-container store-hero-grid">
        <div className="store-hero-copy">
          <span className="store-eyebrow"><i /> A LITTLE SOMETHING FOR SOMEONE SPECIAL</span>
          <h1>Give a little <em>meaning.</em><br />Make a big memory.</h1>
          <p>Thoughtful cards, playful surprises and personal gift ideas for birthdays, love stories, friendships and all the moments worth celebrating.</p>
          <div className="store-hero-actions"><Link className="store-button store-button-primary" href="/shop/">Explore the store <span>→</span></Link><Link className="store-button store-button-ghost" href="/categories/wishly-cards/">Discover Wishly Cards</Link></div>
          <div className="store-hero-notes"><span><b>✦</b> Personal by nature</span><span><b>♡</b> Made for meaningful moments</span><span><b>◌</b> New collections preview</span></div>
        </div>
        <div className="store-hero-art" aria-hidden="true">
          <div className="store-art-orbit orbit-a" /><div className="store-art-orbit orbit-b" />
          <div className="hero-gift-card gift-card-main"><div className="gift-card-top"><span>WISHLY / A LITTLE NOTE</span><span>✦</span></div><div className="gift-card-heart">♡</div><p>A little reminder</p><div className="gift-card-title">You make<br /><em>life brighter.</em></div><div className="gift-card-bottom"><span>Made with a little love</span><b>✧</b></div></div>
          <div className="floating-gift-note note-one"><span>FOR YOUR PERSON</span><b>Just because ♡</b></div>
          <div className="floating-gift-note note-two"><span>THE SURPRISE</span><b>Something lovely ✦</b></div>
          <div className="hero-gift-chip"><span>✧</span> A gift worth remembering</div>
        </div>
      </div>
      <div className="hero-bottom-fade" />
    </section>

    <section className="store-launch-strip"><div className="store-container launch-inner"><span className="launch-dot" /> <b>Store preview is live</b><span>Product details, pricing and ordering will be announced as each collection launches.</span><Link href="/about/">How the Store works <span>↗</span></Link></div></section>

    <section className="store-section store-category-section">
      <div className="store-container">
        <div className="store-section-heading"><div><span className="store-kicker">FIND YOUR KIND OF GIFT</span><h2>Shop by <em>feeling.</em></h2><p>Start with the moment you want to make special. There is something lovely in every collection.</p></div><Link className="store-text-link" href="/shop/">View all collections <span>→</span></Link></div>
        <div className="store-category-grid">
          {categories.map((category) => <Link href={`/categories/${category.slug}/`} className="store-category-card" key={category.slug}>
            <div className="category-image"><img src={category.image} alt={`${category.name} collection`} width="1200" height="740" loading="lazy" /><span className="category-icon">{category.icon}</span></div>
            <div className="category-info"><div><h3>{category.name}</h3><p>{category.description}</p></div><span className="category-arrow">↗</span></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="store-section store-featured-section">
      <div className="store-container">
        <div className="store-section-heading"><div><span className="store-kicker">A FEW THINGS TO FALL FOR</span><h2>Little previews, <em>big feelings.</em></h2><p>Meet the first ideas in the Wishly Store collection. Save your favourites and explore what each gift is about.</p></div><Link className="store-text-link" href="/shop/">Explore all gifts <span>→</span></Link></div>
        <div className="store-product-grid">{featured.map((product) => <ProductCard product={product} key={product.slug} />)}</div>
      </div>
    </section>

    <section className="store-section store-how-section"><div className="store-container">
      <div className="store-section-heading centered"><div><span className="store-kicker">THOUGHTFUL, NOT COMPLICATED</span><h2>A little gift. A <em>lot of meaning.</em></h2><p>We want choosing a meaningful surprise to feel as good as giving one.</p></div></div>
      <div className="store-steps"><article><span>01</span><div className="step-icon">⌕</div><h3>Find your moment</h3><p>Browse cards, birthday ideas, mystery gifts and keepsakes by occasion or feeling.</p></article><article><span>02</span><div className="step-icon">♡</div><h3>Save what you love</h3><p>Keep gift ideas in your saved list while you explore the first Wishly collections.</p></article><article><span>03</span><div className="step-icon">✧</div><h3>Stay close to the launch</h3><p>Product formats, prices and ordering details will be published once they are confirmed.</p></article></div>
    </div></section>

    <section className="store-feature-band"><div className="store-container feature-band-inner"><div><span className="store-kicker">A DIFFERENT KIND OF DIGITAL GIFT</span><h2>Some moments deserve more than <em>“just a message.”</em></h2><p>Wishly also helps you create and share personal interactive websites for birthdays, anniversaries, proposals and meaningful surprises.</p><a className="store-button store-button-primary" href="https://wishly.bd/" target="_blank" rel="noopener noreferrer">Explore the main Wishly <span>↗</span></a></div><div className="feature-band-art"><img src="/images/products/wishly-personal-wish-website-maker.webp" alt="A personal Wishly website gift preview" width="1200" height="740" loading="lazy"/><div className="feature-band-sticker">made to<br /><em>mean more</em> ✦</div></div></div></section>

    <section className="store-section store-faq-preview"><div className="store-container faq-preview-inner"><div><span className="store-kicker">GOOD TO KNOW</span><h2>Before you <em>pick a gift.</em></h2><p>Wishly Store is currently a preview catalogue. We are preparing product formats, pricing and fulfilment details before opening orders.</p><Link className="store-text-link" href="/faq/">Read store FAQs <span>→</span></Link></div><div className="store-mini-faq"><details><summary>Can I order something today?</summary><p>Not yet. The current Store is a collection preview. Product availability and ordering will be announced after launch details are confirmed.</p></details><details><summary>Are these physical or digital gifts?</summary><p>The collection includes digital card concepts and gift concepts. Each product page explains what is currently known; Mystery Gift formats are still being planned.</p></details><details><summary>Do products have prices?</summary><p>Prices are not published yet. We will show confirmed prices and any delivery details before taking orders.</p></details></div></div></section>
  </>;
}
