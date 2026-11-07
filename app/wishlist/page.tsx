import type { Metadata } from "next";
import Link from "next/link";
import WishlistContents from "@/components/WishlistContents";
export const metadata: Metadata = { title: "Saved Gifts", description: "Keep your favourite Wishly Store gift ideas together in one place.", robots: { index: false, follow: true }, alternates: { canonical: "/wishlist/" } };
export default function WishlistPage() { return <><section className="store-page-hero"><div className="store-container"><div className="store-breadcrumb"><Link href="/">Home</Link><span> / </span><span>Saved gifts</span></div><span className="store-kicker">YOUR LITTLE SHORTLIST</span><h1>Saved with <em>love.</em></h1><p>Keep the ideas you like close. Your saved list stays in this browser on this device.</p></div></section><section className="store-section shop-products-section"><div className="store-container"><WishlistContents/></div></section></>; }
