# Keyword-to-URL Map and Landing-Page Backlog

**Date:** 2026-10-15  
**Branch:** `audit/site-revamp-plan`  
**Market:** USA first  
**Status:** Provisional mapping based on repository source; no search-volume data or owner confirmation has been provided.

## Purpose

Turn the homepage's existing labels into a controlled page plan. The goal is not to make a separate URL for every wording variation. It is to ensure every commercially meaningful, distinct search intent has one suitable destination, and each observed homepage tag is accounted for.

## Existing service detail routes

Source: `src/app/(default)/services/[services]/page.tsx` and `src/components/Services Page/servicedata.js`.

| Existing route | Service title in source | Initial action |
|---|---|---|
| `/services/web-development` | Web Development | Improve for US web development and custom website development intent; check title, copy, CTA, proof, and route behavior |
| `/services/app-development` | App Development | Improve for mobile/app development intent; split Android/iOS/Flutter only if each has distinct offer and content |
| `/services/ui-ux-designing` | UI/UX Designing | Improve for UI/UX design intent; validate target audience and proof |
| `/services/consulting-assurance` (legacy route; title/slug under review) | Consulting/Assurance | Recommend renaming the user-facing title to **Technology Consulting** and evaluating `/services/technology-consulting` as the canonical URL; retain a redirect from the legacy URL. Do not imply a separate assurance/testing offer already covered by Quality Assurance |
| `/services/content-writing` | Content/Writing | Review commercial priority and current capability before investing in SEO |
| `/services/product-development` | Product Development | Improve for custom software/product development intent; ensure differentiation from web/app development |
| `/services/email-marketing` | Email/Marketing | Review commercial priority, current capability, and differentiation from digital marketing |
| `/services/digital-marketing-seo` | Digital/Marketing/SEO | Improve for SEO/digital marketing intent; separate PPC/social only if they are distinct priority services |
| `/services/quality-assurance` | Quality Assurance | Improve for software QA/testing intent; validate current testing services |

**Technical caution:** the dynamic service route currently sets metadata description to the service title alone. Route existence does not prove that page copy is unique, useful, indexable, or performing correctly.

## Existing industry detail routes

Source: `src/components/IndustriDetail/industries_data.js`; route pattern: `/industries/[industriesdetail]`.

| Existing route | Source heading | Initial action |
|---|---|---|
| `/industries/automobile` | Automobile Industry Solutions | Review whether the page provides relevant, verified automotive software capability |
| `/industries/cloud-solutions` (new canonical; legacy `/industries/cloud_solutions_excellence`) | Cloud Solutions | Use the clean slug and permanently redirect the legacy URL; verify internal links and canonical/sitemap output |
| `/industries/gaming-solutions-and-services` | Gaming Solutions and Services | Verify actual gaming work and proof |
| `/industries/real-estate-solutions` | Real Estate Solutions & Services | Verify real-estate work and distinguish industry services from a real-estate software product |
| `/industries/tech-driven-consulting` | Tech-Driven Consulting | Check overlap with consulting service page and ensure distinct intent |
| `/industries/education` (requested replacement) | Education Solutions | Preferred canonical slug; redirect `/industries/empowering-education-and-impactful-philanthropy` to this URL after implementation; verify education capability. Treat nonprofit/philanthropy as a separate intent only if the business wants and can support it |
| `/industries/e-commerce-solutions` | E-Commerce Solutions | Check overlap with e-commerce development page; assign one primary URL per distinct intent |
| `/industries/healthcare-solutions` (requested replacement) | Healthcare Solutions | Preferred canonical slug; redirect `/industries/revolutionizing-healthcare-through-innovative-solutions`; verify healthcare domain expertise and compliance claims |
| `/industries/insurance-software-solutions` | Insurance Software Solutions | Verify insurance software expertise |
| `/industries/manufacturing-solutions-and-services` | Manufacturing Solutions and Services | Verify manufacturing experience and examples |
| `/industries/advertising-industry` (requested replacement) | Advertising Industry Solutions | Preferred canonical slug; redirect `/industries/strategic-marketing-advertising-solutions`; distinguish industry software solutions from the digital-marketing service page |
| `/industries/media-entertainment` (requested replacement) | Media & Entertainment Solutions | Preferred canonical slug; redirect `/industries/elevating-media-entertainment-xperiences`; verify media/entertainment capability |

**Metadata note:** route-specific industry metadata has been added on the working branch; canonical and sitemap behavior still need runtime verification.

## Initial keyword cluster decisions

These are **provisional actions**, not final publishing approvals. Every item still requires live route/canonical/indexability checks and owner verification of current services.

| Cluster ID | Homepage terms / variants | Existing or proposed primary URL | Initial action | Priority | Evidence still needed |
|---|---|---|---|---|---|
| KW-01 | Web development, website development, custom website development | `/services/web-development` | Improve existing page; keep synonyms on one URL | P0 | Search data, current page content, actual US buyer intent |
| KW-02 | Web application development, custom web application, web portal development, API integration | Candidate: `/services/web-development` or a new web-app page | First inspect existing page and portfolio; create separate page only if product/service intent differs meaningfully | P1 | Capability confirmation, demand, distinct content/proof |
| KW-03 | Mobile app development, app development | `/services/app-development` | Improve existing page; keep broad synonyms together | P0 | Search data and page review |
| KW-04 | Android app development, iOS app development, Flutter, React Native, hybrid apps | Parent: `/services/app-development` | Keep as sections initially; separate pages only for proven priority/capability and distinct intent | P1 | Current platform expertise, demand, examples |
| KW-05 | Product development, software product development | `/services/product-development` | Improve existing page; distinguish from custom web/app builds | P0 | Ideal customer, delivery process, genuine proof |
| KW-06 | UI/UX design, UI design, UX audit, mobile app UI design | `/services/ui-ux-designing` | Improve existing page; consider UX audit child page only if it is a real standalone offer | P1 | Offer scope, search demand, examples |
| KW-07 | SEO services, search engine optimization, digital marketing | `/services/digital-marketing-seo` | Improve existing page; separate SEO and broad digital marketing only if content/intent justify it | P0 | Actual service mix, current results/proof |
| KW-08 | PPC/CPC advertising, social media marketing, lead generation | Parent: `/services/digital-marketing-seo` | Initial supporting sections; separate pages only for approved services with distinct content | P1 | Service priority and capability |
| KW-09 | Software QA, quality assurance, software testing, performance testing | `/services/quality-assurance` | Improve existing page; cluster general testing synonyms | P1 | Tooling/capability, service scope, proof |
| KW-10 | Website content, SEO content writing, copywriting | `/services/content-writing` | Review demand and commercial fit before page investment | P2 | Owner confirmation and examples |
| KW-11 | Email marketing, email automation | `/services/email-marketing` | Review whether this is a priority standalone service | P2 | Capability, audience, demand |
| KW-12 | LMS, learning management system, LMS development | Candidate: existing product route under `/products/[products]`; exact slug pending | Verify product route data and page quality; improve or create one canonical LMS page | P1 | Route mapping, current offering, target customer |
| KW-13 | ERP solutions, ERP software development, ERP integration | Candidate: existing product route; exact slug pending | Verify existing ERP/product pages before creating anything new | P1 | Route mapping, ERP offer scope, supportable details |
| KW-14 | Cloud solutions, cloud migration, cloud integration, cloud security | Candidate: existing service/product route; exact slug pending | Cluster by buyer intent; one main cloud page first, supporting subpages only if justified | P1 | Actual cloud services and capability |
| KW-15 | E-commerce development, e-commerce website, payment integration | Candidate: `/services/web-development` or existing product route | Review existing product pages and web-development content; assign one primary URL | P1 | Route mapping, platforms supported, demand |
| KW-16 | Shopify development, WooCommerce development, Magento development, WordPress development | Candidate: existing service/product route or new page per platform | Verify platform-specific routes and expertise; separate platform pages only when each has meaningful unique content | P1 | Current platform capability, portfolio, demand |
| KW-17 | School management system | Candidate: existing product route; exact slug pending | Verify product route and current offering; improve/create one dedicated page if real product/service | P1 | Product ownership/scope, screenshots, target customer |
| KW-18 | Hotel-flight management system, travel booking system, reservation management | Candidate: existing product route; exact slug pending | Cluster into a booking/travel software intent if the business offers it; verify before promoting | P2 | Actual product, features, customer evidence |
| KW-19 | Real estate management system, property listing management software | Candidate: existing product route; exact slug pending | Verify current product/service; one primary page if it is a real offering | P1 | Product status, supported features, proof |
| KW-20 | Enterprise integration, API integration, data integration | Candidate: web development/product development page initially | Use one relevant existing page unless integration is a separately sold, supported service | P2 | Offer scope, architecture skills, demand |
| KW-21 | Industries: healthcare, e-commerce, real estate, education, manufacturing, logistics, travel, insurance, sports, gaming, automotive, media, technology | Existing industry routes listed above | Audit each existing industry route; retain/expand only where genuine relevant expertise can be shown | P1 | Actual served industries, examples, route behavior |
| KW-22 | Technology terms: React, Next.js, Node.js, PHP, .NET, Flutter, Shopify, Figma, Selenium, etc. | Existing relevant service page or technology hub | Do not create a page for every tool automatically; use pages only where buyers search for a specific implementation service and the company can substantiate expertise | P2 | Current expertise, demand, route audit |
| KW-23 | US software development company, US web development services, software development company USA | Homepage or a dedicated US-market service page | Improve US targeting on existing homepage/service pages first; create a dedicated US page only if it provides distinct value | P0 | US target audience, delivery model, proof, Search Console data |
| KW-24 | City + service combinations | No city URL approved yet | Keep city pages unapproved until service coverage and unique local value are confirmed | P1 | Owner-confirmed service model/cities, local research, lead data |
| KW-25 | AI development, AI integration, applied AI solutions | Proposed: `/services/ai-solutions` | Add a dedicated page if current delivery capability is confirmed; describe practical business use cases and integration scope without unsupported AI claims | P1 | Owner confirms service scope, stack, delivery approach, and examples |
| KW-26 | AI chatbot development, customer support chatbots, conversational AI | Proposed: `/services/ai-chatbot-development` | Dedicated intent candidate; distinguish rule-based chatbots from LLM-powered assistants and state integrations actually supported | P1 | Owner confirms chatbot delivery capability, channels, integrations, privacy/security approach |
| KW-27 | Prompt engineering, LLM prompt design, prompt optimization | Proposed: section under `/services/ai-solutions` initially | Do not create a standalone page unless this is a separately sold service with distinct demand and case studies; can later split to `/services/prompt-engineering` | P2 | Owner confirms it is a standalone commercial offer and can provide useful unique content |
| KW-28 | Data science, predictive analytics, machine learning, data analysis | Proposed: `/services/data-science-analytics` | Candidate service page only if the team delivers data science/analytics projects; keep AI/ML overlap clear | P1 | Owner confirms data science, ML, BI, data engineering scope and proof |


## US city strategy: research candidates, not approved landing pages

Do not create dozens of city URLs immediately. Begin with the United States as a market and improve service pages that can serve US buyers regardless of city. Then assess candidate metros using Search Console query/country data, actual customer/lead history, competitive review, commercial fit, and the ability to provide genuinely useful local information.

Candidate metros to evaluate—not a ranking and not an assertion that the business has local offices:
- New York City, NY
- San Francisco Bay Area, CA
- Los Angeles, CA
- Austin, TX
- Dallas–Fort Worth, TX
- Chicago, IL
- Seattle, WA
- Boston, MA
- Atlanta, GA
- Houston, TX
- Denver, CO
- Miami, FL

**No city landing pages should be implemented solely because these cities are large.** If The Tech Makers serves clients remotely from India, pages must state that accurately and avoid implying a physical US office, local employees, or in-person availability. In the absence of genuine local differentiators, prioritize national US service pages instead of city pages.

## Page approval gates

A new page can move from Proposed to Approved only when:
1. The service/product is currently offered and owner-confirmed.
2. The keyword cluster represents a distinct commercial search intent not adequately served by an existing page.
3. Search demand/competitive evidence or a documented strategic reason supports investment.
4. The page can provide unique useful content and a truthful CTA.
5. Existing routes, canonical rules, internal links, and sitemap implications are understood.
6. For city pages, service coverage and truthful location wording are confirmed.

## Work still pending

- Audit product route behavior: the current dynamic product route appears to render one shared ProductERP component regardless of the URL slug; verify and correct before assigning product keywords.
- Inspect all product data and map exact slugs to titles.
- Crawl all current routes and validate their rendered destinations and canonical/indexability behavior.
- Verify dynamic homepage tags/blog category tags against live data.
- Get Search Console/Analytics query and country/city reports if available.
- Confirm top services, ideal US buyer, delivery model, and real project examples.
- Convert this provisional table into a final prioritized URL backlog before implementation.
