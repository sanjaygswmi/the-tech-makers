# Existing Blog-to-Service Mapping Audit (Initial Public-Site Pass)

**Repository:** `the-tech-makers/the-tech-makers`  
**Working branch:** `audit/site-revamp-plan`  
**Status:** Provisional editorial triage based on the latest-blog cards visible on the public homepage. This is not a complete CMS export or a content-level audit. Do not bulk-assign these associations without reviewing the full article content in the CMS.

## Why this audit is provisional

The public homepage currently surfaces the following seven article titles in its latest-blog section. The CMS archive and full article bodies were not available in the repository, so titles and homepage excerpts alone cannot establish the final category or service association. Use this list to guide the first editorial review, then verify each article in the admin editor before saving associations.

## Initial triage

| Existing article title | Provisional primary service | Possible secondary service | Editorial recommendation |
|---|---|---|---|
| Custom Software Systems: Types and Benefits for Businesses | Product Development | Technology Consulting | Review the article for buyer guidance, scope, and examples. Link to Product Development if it discusses custom product delivery; use Technology Consulting only if it meaningfully covers assessment and roadmap decisions. |
| Unlocking Efficiency and Growth: Exploring the Reasons Why Companies Choose to Outsource Work | Technology Consulting | Product Development | Review for whether the article discusses strategic outsourcing and delivery models versus generic cost-saving claims. Avoid assigning it to every service. |
| Building Brand Identity: Unleashing the Power of Your Unique Voice | UI/UX Designing | Digital Marketing & SEO | Confirm whether the body focuses on visual identity/design or brand positioning/content strategy. If it is mainly branding strategy, consider whether a distinct branding offering is actually part of the service portfolio before mapping. |
| Boost Your Ecommerce with WooCommerce: Harnessing the Power of E-commerce | Web Development | Product Development | Likely relevant to Web Development if the body discusses WooCommerce implementation, integrations, or customization. Assign Product Development only if it discusses custom product functionality beyond store setup. |
| The Tech Makers: Unleashing the Power of Ecommerce Development for Digital Success | Web Development | Product Development | Compare against the WooCommerce article for duplicate search intent. Consider consolidating or differentiating them if both primarily target e-commerce development. |
| The Tech Makers: Revolutionizing the Future with Innovation and Expertise | No association until reviewed | — | Broad company-promotion topic from its title. Review the full article; rewrite around a specific service or leave unassigned if it adds little unique value. |
| Top eCommerce Website Development Companies in 2023: Choosing the Best Partner for Your Online Store | Web Development | — | Outdated year in title. Review factual accuracy, list quality, and search intent. Update only if there is a defensible current version; otherwise consider consolidation or retirement after checking traffic/backlinks. |

## Review workflow in the CMS

For each candidate:

1. Open the article and verify the full body, existing categories, tags, current URL, publication status, and metadata.
2. Pick one primary service only when the article genuinely supports that service.
3. Add a secondary service only where a reader would naturally benefit from that adjacent service.
4. Use the category-to-service helper as a suggestion, not as proof of relevance.
5. Preserve the existing URL and canonical. Any consolidation, redirect, or retirement needs a separate SEO review.
6. Check whether another article already targets the same search intent before deciding to refresh or write a replacement.
7. Save and verify that the article appears on the selected service page and its service-specific archive.

## First opportunities to investigate

- **E-commerce content overlap:** Three of the seven visible articles are about e-commerce/WooCommerce. Compare their content, audience, target queries, organic performance, and backlinks before adding more e-commerce posts.
- **Generic promotional content:** The broad innovation/company article may not support a specific service page without substantial rewriting.
- **Outdated list article:** The 2023 comparison article should be fact-checked and assessed for refresh versus consolidation; do not simply change the year.
- **Service coverage gaps:** The homepage sample provides little visible evidence of dedicated content for App Development, Quality Assurance, Data Science & Analytics, Email Marketing, AI Solutions, or AI Chatbot Development. This is only a homepage-sample observation, not proof that no such articles exist in the full archive.

## Next step

Export the complete blog inventory from the CMS (or provide a database/API export) with title, slug/URL, status, category IDs/titles, tag slugs, short description, and article content. Then complete a reliable article-by-article mapping and overlap audit before bulk-updating any service associations.
