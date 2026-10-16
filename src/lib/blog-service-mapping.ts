/**
 * Central mapping from editorial blog categories to the service pages they can support.
 *
 * These mappings are suggestions for editors, not a publishing rule. Editors can
 * add or remove service associations for each individual post.
 */
const CATEGORY_SERVICE_MAP: Record<string, string[]> = {
  "web-development": ["web-development"],
  "website-development": ["web-development"],
  "web-design": ["web-development", "ui-ux-designing"],
  "web-design-and-development": ["web-development", "ui-ux-designing"],
  "app-development": ["app-development"],
  "mobile-app-development": ["app-development"],
  "ui-ux-design": ["ui-ux-designing"],
  "ui-ux-designing": ["ui-ux-designing"],
  "design": ["ui-ux-designing"],
  "technology-consulting": ["technology-consulting"],
  "technology-strategy": ["technology-consulting"],
  "content-writing": ["content-writing"],
  "content-marketing": ["content-writing", "digital-marketing-seo"],
  "copywriting": ["content-writing"],
  "product-development": ["product-development"],
  "saas": ["product-development"],
  "ecommerce-development": ["web-development", "product-development"],
  "woocommerce": ["web-development", "product-development"],
  "payment-gateway-integration": ["web-development", "app-development", "product-development"],
  "branding": ["digital-marketing-seo", "ui-ux-designing"],
  "business-outsourcing": ["technology-consulting"],
  "email-marketing": ["email-marketing"],
  "email-campaigns": ["email-marketing"],
  "digital-marketing": ["digital-marketing-seo"],
  "seo": ["digital-marketing-seo"],
  "digital-marketing-seo": ["digital-marketing-seo"],
  "quality-assurance": ["quality-assurance"],
  "software-testing": ["quality-assurance"],
  "testing": ["quality-assurance"],
  "artificial-intelligence": ["ai-solutions"],
  "ai": ["ai-solutions"],
  "ai-solutions": ["ai-solutions"],
  "ai-automation": ["ai-solutions"],
  "chatbots": ["ai-chatbot-development"],
  "chatbot-development": ["ai-chatbot-development"],
  "ai-chatbot-development": ["ai-chatbot-development"],
  "data-science": ["data-science-analytics"],
  "data-analytics": ["data-science-analytics"],
  "analytics": ["data-science-analytics"],
  "data-science-analytics": ["data-science-analytics"],
};

const normalizeCategoryKey = (value?: string) =>
  (value || "")
    .normalize("NFKD")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export function getServiceSlugsForCategory(category: { slug?: string; title?: string }) {
  const keys = [normalizeCategoryKey(category.slug), normalizeCategoryKey(category.title)];
  return Array.from(new Set(keys.flatMap((key) => CATEGORY_SERVICE_MAP[key] || [])));
}
