import type { MetadataRoute } from "next";

// Search engines and AI search/answer crawlers are explicitly welcome.
const aiAndSearchBots = [
  "Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "GPTBot", "PerplexityBot", "Perplexity-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User", "Google-Extended", "Applebot", "Applebot-Extended", "CCBot", "Bytespider", "DuckAssistBot"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiAndSearchBots.map((userAgent) => ({ userAgent, allow: "/" }))
    ],
    sitemap: "https://store.wishly.bd/sitemap.xml"
  };
}
