import Link from "next/link";

export default function StoreFooter() {
  return (
    <footer className="store-footer">
      <div className="store-footer-top">
        <div className="store-footer-brand">
          <Link href="/" className="store-brand" aria-label="Wishly Store home">
            <span className="store-brand-mark">✦</span>
            <span className="store-brand-copy"><b>Wishly <i>Store</i></b><small>GIFTS WITH MEANING</small></span>
          </Link>
          <p>A home for thoughtful cards, playful surprises and gift ideas made to turn ordinary moments into something memorable.</p>
          <a className="store-footer-main-link" href="https://wishly.bd/" target="_blank" rel="noopener noreferrer">Explore the main Wishly experience <span>↗</span></a>
        </div>
        <div className="store-footer-col"><h2>Shop</h2><Link href="/shop/">All products</Link><Link href="/categories/wishly-cards/">Wishly Cards</Link><Link href="/categories/mystery-gifts/">Mystery Gifts</Link><Link href="/categories/birthday-gifts/">Birthday Gifts</Link><Link href="/categories/anniversary-gifts/">Anniversary Gifts</Link></div>
        <div className="store-footer-col"><h2>Discover</h2><Link href="/categories/friendship-gifts/">Friendship Gifts</Link><Link href="/wishlist/">Saved gifts</Link><Link href="/about/">About Wishly Store</Link><Link href="/faq/">Frequently asked questions</Link></div>
        <div className="store-footer-col"><h2>Information</h2><a href="https://wishly.bd/contact" target="_blank" rel="noopener noreferrer">Contact Wishly ↗</a><Link href="/privacy/">Privacy policy</Link><Link href="/terms/">Terms of use</Link><a href="https://wishly.bd/" target="_blank" rel="noopener noreferrer">Main Wishly website ↗</a></div>
      </div>
      <div className="store-footer-bottom"><span>© {new Date().getFullYear()} Wishly Store. All rights reserved.</span><span>Thoughtful gifts. Personal moments.</span></div>
    </footer>
  );
}
