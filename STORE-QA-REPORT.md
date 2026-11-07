# Wishly Store — Image & Favicon Update QA Report

## Changes

- Replaced the previous generic/mismatched product artwork with purpose-matched images for all five collections and all nine product concepts.
- Digital card products use matching previews from the main Wishly template/insight library. Mystery Gift and Unexpected Box use dedicated gift artwork.
- Updated all 13 files in `public/images/products/` to optimized 1200×740 WebP assets.
- Added a distinct Best Friend appreciation visual and a separate Unexpected Gift Box artwork.
- Restored the official main Wishly favicon/icon set: ICO, SVG, Apple icon, 192px WebP and 512px WebP.
- Updated the legacy logo mark files, metadata icon declarations and web manifest so all icon formats use the official Wishly mark.
- Updated image intrinsic width/height attributes to match the normalized product image ratio.

## Validation

- Catalogue validation: passed.
- Product/category slugs: 14 unique slugs, no duplicates.
- Product/category image references: 14 references, 0 missing.
- Product image assets: 13 WebP files, all present and non-empty.
- Official favicon/icon files: 9 required assets, all present.
- Web manifest JSON and icon file references: passed.
- Layout metadata references the versioned official Wishly icon: passed.
- Purchase flow: still reports unavailable; does not collect payment details.
- Store contact: still points to `https://wishly.bd/contact`.

## Build limitation

This update changes assets, catalogue image mappings, metadata icon paths and validation scripts. A full dependency-backed `npm ci`, `npm run typecheck` and `npm run build` were not run in this environment. GitHub Actions remains configured to install from `package-lock.json`, validate the store, typecheck, build and deploy.

## SEO & usability pass

- Removed the inherited root canonical (it made `/contact/` point to the home page); `/contact/` now has its own canonical.
- Shortened the home and shop titles (absolute titles), and removed the doubled "| Wishly Store" suffix on payment, mystery and other pages.
- Product pages now use `WebPage` + `BreadcrumbList` structured data instead of `Product` without offers; category pages gained `BreadcrumbList`.
- Added OG image width/height/alt on product, category and shop pages.
- Raised all text below 12px to 12px (labels) or 13–14px (body copy); added a visible `:focus-visible` outline.
- Decorative hero card heading is no longer an `<h2>`; hero art is `aria-hidden`.
- Product detail image attributes now match the real 1200×740 ratio.
- `robots.txt`: removed the `/wishlist/` disallow (the page is already `noindex`) and the unused `host` field.
- Manifest: added PNG 192/512 icons, `id` and `scope`.
- Removed the stray `app/globals-payment-additions.tmp` and the unused low-quality Eid image; the Keepsake product now uses the unused "I miss you" artwork.
- Not changed on purpose: Buy / Continue to payment buttons.
- Run `npm ci && npm run typecheck && npm run build` locally before deploying; the build was not run in this review environment.
