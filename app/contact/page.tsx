import type { Metadata } from "next";
import Link from "next/link";

const wishlyContact = "https://wishly.bd/contact";

export const metadata: Metadata = {
  title: "Contact Wishly",
  description: "Contact the Wishly team through the official Wishly website for questions, support and feedback.",
  alternates: { canonical: "/contact/" },
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <section className="store-page-hero contact-page">
      <div className="store-container">
        <div className="store-breadcrumb"><Link href="/">Home</Link><span> / </span><span>Contact</span></div>
        <span className="store-kicker">THE OFFICIAL WISHLY CONTACT</span>
        <h1>Let’s talk <em>to Wishly.</em></h1>
        <p>For questions about Wishly Store, gift collections or the main Wishly experience, please use the official Wishly contact page. Your message will go to the Wishly team—not to a separate Store inbox.</p>
        <a className="store-button store-button-primary contact-official-button" href={wishlyContact} target="_blank" rel="noopener noreferrer">Open Wishly Contact Page <span aria-hidden="true">↗</span></a>
        <p className="contact-note">You will be taken to wishly.bd/contact in a new tab.</p>
      </div>
    </section>
  );
}
