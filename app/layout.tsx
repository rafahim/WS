import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import StoreShell from "@/components/StoreShell";
import "./globals.css";

const siteUrl = "https://store.wishly.bd";
const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Wishly", url: "https://wishly.bd/", logo: { "@type": "ImageObject", url: `${siteUrl}/icon-512.png`, width: 512, height: 512 } },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "Wishly Store", description: "Thoughtful cards, mystery gifts and birthday surprises for meaningful moments.", inLanguage: "en", publisher: { "@id": `${siteUrl}/#organization` } }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Wishly Store — Gifts with Meaning", template: "%s | Wishly Store" },
  description: "Explore Wishly Cards, Mystery Gifts, birthday gift ideas and thoughtful digital surprises for the people who matter.",
  applicationName: "Wishly Store",
  creator: "Wishly",
  publisher: "Wishly",
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: [{ url: "/wishly-icon.svg?v=2", type: "image/svg+xml" }, { url: "/favicon.ico", type: "image/x-icon" }], apple: "/apple-icon.png" },
  openGraph: {
    type: "website", siteName: "Wishly Store", locale: "en_US", title: "Wishly Store — Gifts with Meaning",
    description: "Thoughtful cards, mystery gifts and birthday surprises for meaningful moments.",
    images: [{ url: "/images/og-wishly-store.png", width: 1200, height: 630, alt: "Wishly Store — gifts with meaning" }]
  },
  twitter: { card: "summary_large_image", title: "Wishly Store — Gifts with Meaning", description: "Thoughtful cards, mystery gifts and birthday surprises for meaningful moments.", images: ["/images/og-wishly-store.png"] }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#07070b" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Wishly Store summary for AI assistants" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema).replace(/</g, "\\u003c") }} />
      </head>
      <body><StoreShell>{children}</StoreShell></body>
    </html>
  );
}
