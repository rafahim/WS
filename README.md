# Wishly Store

A separate, responsive storefront preview using Wishly's dark UI, pink/violet gradients, glass surfaces and centered pill navigation.

## Included

- Home, Shop, category and individual product pages.
- Wishly Cards, Mystery Gifts, Birthday Gifts, Anniversary Gifts and Friendship Gifts collections.
- Search and alphabetical sorting on the Shop page.
- Save-for-later wishlist stored locally in the visitor's browser.
- Product detail pages with clear preview/availability notes.
- Buy / Continue to payment links open a product-specific payment-status page. Every listing currently says it is not available to buy yet; no order or payment details are collected.
- Store Contact links go directly to the official Wishly contact page at https://wishly.bd/contact.
- Each product has a static `/payment/[slug]/` status page. Selecting Buy or Continue to payment shows that the item is not available yet, explains that no payment is collected, and provides a link back to the product and to official Wishly Contact. These pages are `noindex` and excluded from the sitemap.
- About, FAQ, Contact, Privacy and Terms pages.
- SEO metadata, canonical URLs, Open Graph/Twitter cards, Product/Collection/FAQ structured data, sitemap and robots.txt.
- Custom-domain file for `store.wishly.bd` and GitHub Pages Actions workflow.
- Mobile menu with background scroll lock, Escape close and internal menu scrolling.

## Local setup

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production static export

```bash
npm run validate:store
npm run typecheck
npm run build
```

The static site is written to `out/`. No Node.js server, database or API is needed to host the exported pages.

## GitHub Pages deployment

1. Create a new repository for Wishly Store.
2. Upload the project files to the repository root and push to `main`.
3. In **Settings → Pages**, choose **GitHub Actions** as the source.
4. The workflow builds and deploys the `out/` folder.
5. The included `public/CNAME` sets the intended custom domain to `store.wishly.bd`.
6. At your DNS provider, add a CNAME record: host `store`, target `YOUR-GITHUB-USERNAME.github.io`.
7. In GitHub Pages settings, confirm the custom domain and enable HTTPS once DNS has propagated.

If you choose a different subdomain, update `public/CNAME`, `metadataBase` in `app/layout.tsx`, and the absolute URLs in `app/sitemap.ts` and JSON-LD before deployment.

## Important launch status

This is currently a product-catalogue preview, not a live checkout. Product names, descriptions and images are concept concepts to help establish the storefront direction. No prices, stock, shipping promises, order submission or payment success are shown. Mystery Gift contents and physical/digital fulfilment are not final. Confirm actual products, pricing, shipping regions, returns policy, contact details and payment provider before enabling orders.

Saved gifts are stored locally in the visitor's current browser only. They are not account-synced.

## Product imagery and Wishly branding

- Product and collection imagery is now mapped to the item it represents: birthday previews show birthday experiences, Mystery Gifts show a question-mark gift box, anniversary cards show anniversary memories, and friendship items show friendship imagery.
- Digital card imagery uses matching Wishly template previews; supporting gift concepts use dedicated gift artwork. Product-card assets are normalized to 1200×740 WebP images for consistent responsive cropping.
- The favicon and app icons now use the same official icon assets as the main Wishly website: `favicon.ico`, `favicon.svg`, `wishly-icon.svg`, `apple-icon.png`, `icon-192.webp` and `icon-512.webp`.
- `app/layout.tsx` references a versioned official SVG icon to avoid stale browser favicon cache; `site.webmanifest` points to the official Wishly 192px and 512px WebP icons.
