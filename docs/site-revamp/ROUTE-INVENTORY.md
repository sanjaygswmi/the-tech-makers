# Public Route and Technical SEO Inventory

**Date:** 2026-10-16  
**Branch:** `audit/site-revamp-plan`  
**Status:** Source inventory completed; live HTTP/canonical/indexability crawl remains pending.  
**Evidence boundary:** This is a source-derived inventory, not proof that any route currently returns the expected status in production. The branch is isolated and has not been merged or deployed.

## Route inventory

### Public static routes included in the generated sitemap

| URL | Source / purpose | Expected SEO handling | Validation status |
|---|---|---|---|
| `/` | Homepage | Index/follow; homepage metadata inherited from default layout unless overridden | Source only |
| `/about` | Company/about page | Unique title/description and canonical | Source only |
| `/contact` | Lead/contact page | Unique metadata; verify form and contact CTAs | Source only |
| `/careers` | Careers page | Confirm whether public recruitment content merits indexing | Source only |
| `/services` | Service directory | Canonical directory page | Source only |
| `/industries` | Industry directory | Canonical directory page | Source only |
| `/products` | Product directory | Canonical directory page; product detail inventory is limited | Source only |
| `/blogs` | Blog directory | Dynamic page; canonical `/blogs` | Source only |
| `/privacy-policy` | Privacy policy | Canonical legal page; wording requires business/legal review | Source only |
| `/terms-and-conditions` | Terms page | Canonical legal page; wording requires business/legal review | Source only |

### Service detail routes

Source: `src/components/Services Page/servicedata.js`, `src/components/Services Page/ai-servicedata.js`, and `src/app/(default)/services/[services]/page.tsx`.

| URL | Page intent | Expected handling | Validation status |
|---|---|---|---|
| `/services/web-development` | Web development | Unique metadata; index/follow | Source only |
| `/services/app-development` | App development | Unique metadata; index/follow | Source only |
| `/services/ui-ux-designing` | UI/UX design | Unique metadata; index/follow | Source only |
| `/services/technology-consulting` | Technology consulting | Unique metadata; index/follow | Source only |
| `/services/content-writing` | Content writing | Confirm business priority and offer accuracy | Source only |
| `/services/product-development` | Product development | Distinguish from web/app development | Source only |
| `/services/email-marketing` | Email marketing | Confirm business priority and offer accuracy | Source only |
| `/services/digital-marketing-seo` | Digital marketing and SEO | Avoid overlap with industry pages | Source only |
| `/services/quality-assurance` | Software QA/testing | Confirm service scope and evidence | Source only |
| `/services/ai-solutions` | AI solutions/integration | Confirm offer and supporting proof | Source only |
| `/services/ai-chatbot-development` | AI chatbot development | Confirm offer and supporting proof | Source only |
| `/services/data-science-analytics` | Data science and analytics | Confirm offer and supporting proof | Source only |

The dynamic service route calls `notFound()` for unknown slugs. Verify this produces HTTP 404 in a production build; source presence alone does not establish the response status.

### Industry detail routes

Source: `src/components/IndustriDetail/industries_data.js` and `src/app/(default)/industries/[industriesdetail]/page.tsx`.

| URL | Validation / content concern | Validation status |
|---|---|---|
| `/industries/automobile` | Verify actual automotive capabilities; do not imply safety-critical/embedded capability without proof | Source only |
| `/industries/cloud-solutions` | Canonical replacement for legacy underscore slug | Source only |
| `/industries/gaming-solutions-and-services` | Verify gaming experience and scope | Source only |
| `/industries/real-estate-solutions` | Distinguish industry solutions from the real-estate product | Source only |
| `/industries/tech-driven-consulting` | Avoid confusing industry intent with Technology Consulting service | Source only |
| `/industries/education` | Verify education capabilities; do not imply nonprofit specialism without evidence | Source only |
| `/industries/e-commerce-solutions` | Review overlap with e-commerce development service intent | Source only |
| `/industries/healthcare-solutions` | Verify healthcare expertise and compliance claims | Source only |
| `/industries/insurance-software-solutions` | Verify insurance-domain capability | Source only |
| `/industries/manufacturing-solutions-and-services` | Verify manufacturing experience | Source only |
| `/industries/advertising-industry` | Distinguish industry workflow software from digital marketing services | Source only |
| `/industries/media-entertainment` | Verify media/entertainment capability | Source only |

The dynamic industry route calls `notFound()` for unknown slugs. Verify HTTP 404 behavior and canonical metadata after build.

### Product and blog routes

| URL pattern | Source / handling | Validation status |
|---|---|---|
| `/products/school-college-erp` | The only product detail page with a dedicated template and product-specific metadata | Source only |
| `/products/id` | Permanent redirect to `/products/school-college-erp` | Redirect configuration only |
| `/products/[products]` | Unknown product slugs call `notFound()`; other product cards are enquiry links until distinct detail content exists | Source only |
| `/blogs/[slug]` | Database-backed published blog pages; inactive posts should not be public/indexable; canonical metadata is generated for articles | Source only |
| `/sitemap.xml` | Generated by `src/app/sitemap.ts`; includes static routes, registered service/industry slugs, the ERP page, and published blog slugs when database access succeeds | Source only |
| `/robots.txt` | Generated by `src/app/robots.ts`; allows public crawling, disallows `/admin` and `/login`, and points to the sitemap | Source only |

If the blog database is unavailable, sitemap generation is intended to retain the static/data-backed routes and omit dynamic blog entries. Verify the generated XML, uniqueness, last-modified values, and response status.

### Known permanent redirects

Source: `next.config.js`.

| Legacy path | Destination |
|---|---|
| `/industries/revolutionizing-healthcare-through-innovative-solutions` | `/industries/healthcare-solutions` |
| `/industries/empowering-education-and-impactful-philanthropy` | `/industries/education` |
| `/industries/strategic-marketing-advertising-solutions` | `/industries/advertising-industry` |
| `/industries/elevating-media-entertainment-xperiences` | `/industries/media-entertainment` |
| `/industries/cloud_solutions_excellence` | `/industries/cloud-solutions` |
| `/services/consulting-assurance` | `/services/technology-consulting` |
| `/products/id` | `/products/school-college-erp` |

These are configuration declarations only. The redirect status, destination response, canonical tags, internal links, and sitemap output must be checked with a built app or a deployed preview.

### Non-public / utility routes

- `/admin` and nested admin pages: excluded from the robots crawl policy and should also be protected by authentication/authorization; robots rules are not access control.
- `/login`: excluded from robots crawling; verify noindex metadata where appropriate.
- `/reset-password`: route-specific `noindex`, `nofollow`, and `noarchive` metadata added; rendered metadata needs browser/build verification.
- `/api/*`: API endpoints are not sitemap destinations. Verify sensitive endpoints enforce authorization and return intended status codes.
- Unknown dynamic service, industry, product, and inactive blog URLs: expected to return a real 404 rather than indexable generic content.

## Live-check results and limitations

- A public search result for the homepage was available, but it is a search-engine snapshot and does not prove current response status, metadata, or behavior.
- The web inspection interface could not retrieve `https://www.thetechmakers.com/sitemap.xml` or `https://www.thetechmakers.com/robots.txt` directly. No HTTP status or response body is claimed for those URLs.
- The working branch has not been deployed, so the inventory describes proposed branch behavior rather than production behavior.
- Google Search Console and Analytics data were not available for this inventory; traffic, query demand, conversions, and US city priorities remain unverified.

## Required crawl checklist

When a network-enabled checkout or preview is available, crawl all rows above and record, for each URL: requested URL, HTTP status, redirect chain, final URL, rendered title, meta description, canonical, robots meta/header, H1, indexability, CTA destination, and sitemap inclusion. Include negative tests for unknown slugs and inactive blog posts. Check for duplicate URLs, redirect loops, canonical/redirect conflicts, missing titles/descriptions, and sitemap URLs that do not return indexable 200 responses.

**Current conclusion:** source inventory is recorded, but T-005/T-006 and T-029/T-033 remain open until the actual HTTP/rendered-page crawl is run.
