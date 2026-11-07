# Wishly Store — Image & Favicon Update

## Product and collection image mapping

| Collection / Product | Visual direction |
|---|---|
| Wishly Cards | Digital love-letter card preview |
| Mystery Gifts | Sealed dark gift box with a question-mark reveal |
| Birthday Gifts | Birthday page and cake-themed preview |
| Anniversary Gifts | Anniversary memory-map experience |
| Friendship Gifts | Friends celebrating together |
| The Wishly Birthday Card | Laptop preview with a birthday greeting and cake |
| Love Note Wishly Card | Sealed digital love-letter design |
| A Little Thank You Card | Wishly thank-you page preview |
| Mystery Moment Gift | Mystery box with a question mark |
| The Unexpected Box | Ribbon-wrapped surprise gift with pink/violet styling |
| Birthday Memory Surprise | Personal birthday letter preview |
| Birthday Surprise Story | Birthday experience with cake-themed artwork |
| Forever & Always Keepsake | Anniversary timeline / memory-map preview |
| Best Friend Appreciation Card | Best-friends celebration image |

All product image files are normalized to 1200×740 WebP. Category cards point to artwork that matches their collection, while individual product cards use the most relevant specific image.

## Official Wishly favicon

The previous Store-specific icon variants were inconsistent. They have been replaced with the icon set from the main Wishly application:

- `/favicon.ico`
- `/favicon.svg`
- `/wishly-icon.svg?v=2` (the metadata icon URL, versioned to avoid stale browser caching)
- `/apple-icon.png`
- `/icon-192.webp`
- `/icon-512.webp`

`public/site.webmanifest` now references the official 192px and 512px WebP icons. The SVG favicon SHA-256 matches `app/icon.svg` from the main Wishly project.
