import { categories, products } from "@/data/products";

export const dynamic = "force-static";

const base = "https://store.wishly.bd";

export function GET() {
  const lines: string[] = [
    "# Wishly Store",
    "",
    "> Wishly Store is the preview gift catalogue of Wishly (https://wishly.bd/), a service for creating personal interactive websites for birthdays, anniversaries, proposals and other meaningful moments. The Store presents digital greeting-card concepts, mystery gifts, birthday gifts, anniversary gifts and friendship gifts.",
    "",
    "## Current status",
    "",
    "- The Store is a preview catalogue. Products cannot be ordered or paid for yet.",
    "- No prices are published. Final formats, pricing, availability and delivery details will be announced before orders open.",
    "- The Store does not collect payment details or create orders.",
    "",
    "## Main pages",
    "",
    `- [Home](${base}/): overview of the Wishly Store collections`,
    `- [Shop all gifts](${base}/shop/): every collection and gift concept`,
    `- [About](${base}/about/): what Wishly Store is and how it works`,
    `- [FAQ](${base}/faq/): answers about availability, pricing and saved gifts`,
    `- [Privacy](${base}/privacy/)`,
    `- [Terms](${base}/terms/)`,
    "",
    "## Collections",
    "",
    ...categories.map((c) => `- [${c.name}](${base}/categories/${c.slug}/): ${c.description}`),
    "",
    "## Gift concepts",
    "",
    ...products.map((p) => `- [${p.name}](${base}/products/${p.slug}/): ${p.shortDescription} (${p.categoryLabel}, ${p.format.toLowerCase()}, preview only)`),
    "",
    "## Related Wishly sites",
    "",
    "- [Wishly](https://wishly.bd/): create and share personal interactive websites",
    "- [Wishly Guide](https://guide.wishly.bd/): guides about relationships, gifts, messages and special occasions",
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
