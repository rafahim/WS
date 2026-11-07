import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Wishly Store FAQs", description: "Answers about Wishly Store collections, product previews, availability, pricing and saved gifts.", alternates: { canonical: "/faq/" } };
const faqs = [
  ["Can I order a product right now?", "Not yet. Wishly Store is currently a preview catalogue. Ordering will open after product formats, prices, availability and fulfilment details are confirmed."],
  ["What happens when I select Buy?", "You will see a product-specific payment status page explaining that the item is not available to purchase yet. The page does not collect payment details, create an order or charge you."],
  ["What is a Wishly Card?", "Wishly Cards are planned digital greeting-card concepts for birthdays, love notes, gratitude and other meaningful moments. The exact formats will be announced before launch."],
  ["What are Mystery Gifts?", "Mystery Gifts are surprise-first gift concepts. Their final contents and whether they will be digital, physical or a combination are still being planned."],
  ["Are the Birthday Gifts physical or digital?", "The collection preview includes digital-first ideas and gift concepts. Each product page will be updated with the confirmed format before launch."],
  ["Why are there no prices yet?", "Prices are not published because the product range and fulfilment details are still being prepared. Confirmed prices will be visible before orders are accepted."],
  ["How does the Saved Gifts list work?", "Saved gifts are stored locally in your browser on the device you use. They are not synced to an account or sent to Wishly."],
  ["Where can I create a personal Wishly website?", "Visit the main Wishly website at wishly.bd to explore the existing personal website experience."],
  ["Will international delivery be available?", "Shipping regions and digital availability have not been confirmed yet. The Store will publish the supported regions and delivery details before launch."]
];
const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
export default function FaqPage() { return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}/><section className="store-page-hero"><div className="store-container"><div className="store-breadcrumb"><Link href="/">Home</Link><span> / </span><span>FAQs</span></div><span className="store-kicker">A FEW THINGS YOU MIGHT BE WONDERING</span><h1>Good to <em>know.</em></h1><p>Clear answers about the Wishly Store preview, product collections and what comes next.</p></div></section><section className="store-section"><div className="store-container store-faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section></>; }
