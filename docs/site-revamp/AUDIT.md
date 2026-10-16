# Initial Website Audit

**Audit date:** 2026-10-15  
**Baseline:** `master` at commit `45ace4c17ed9be6796058e6a5475a3d9da008f31`  
**Evidence level:** Static source inspection. This is not yet a complete live-site, analytics, browser, or accessibility audit.

## Architecture observed

- The repository is a Next.js App Router project.
- Public route groups exist under `src/app/(default)`, including home, about, blogs, careers, contact, industries, our-work, products, and services.
- API route folders include contact, blogs, category, tags, users, auth, and logout.
- The homepage composes sections through `src/components/Home Page/Home.tsx`: Banner, What We Do, End to End, Services, Industry Culture, We Share, Reviews, Blogs, and Innovative Brand.
- A reusable contact form exists at `src/components/ContactForm.js`.
- The contact API route is `src/app/api/contact/route.js`.
- Google Tag Manager is initialized in `src/components/TagManager/TagManagerLoader.tsx` using a hard-coded GTM container ID.

## Verified findings from source

### A-01 — Contact submission can report success even when downstream actions fail
**Priority:** P0 — fix before relying on enquiries  
**Evidence:** `src/app/api/contact/route.js`

The API previously called `sendContactMail` and `addToContact`, ignored `success: false` results, and still reported success. On `audit/site-revamp-plan`, it now attempts both providers independently, logs channel-level failures without submitted data, and returns success only if at least one provider reports success; if both fail it returns HTTP 502. Runtime behavior remains untested.

**Risk:** A visitor may see a successful submission even though the email or HubSpot contact was not created. This can cause silent lead loss.

**Current contract:** Either email delivery or HubSpot contact capture is sufficient to acknowledge receipt; both are attempted independently. If both fail, the API returns an error. **Required follow-up:** test every failure combination and inspect `src/utils/hubspot.js`, whose helper result handling may overstate success when some internal HubSpot operations fail.

### A-02 — Contact form has no visible in-flight state or guarded error path
**Priority:** P1  
**Evidence:** `src/components/ContactForm.js`

The submit handler awaits `fetch`, parses JSON, displays `result.message`, and resets reCAPTCHA, but does not wrap the request in `try/catch`, check `response.ok`, or expose a disabled/loading state. The API's error responses generally use an `error` field, while the client displays only `message`.

**Risk:** Network/server errors can become unhandled; visitors may see an empty or unclear alert; repeated clicks can submit more than once.

**Required follow-up:** Implement pending/success/error states, handle non-2xx responses, show accessible inline feedback, prevent duplicate submissions, and reset the form/reCAPTCHA only according to the chosen success behavior.

### A-03 — Contact form contains an unused attachment handler referencing an undefined setter
**Priority:** P2  
**Evidence:** `src/components/ContactForm.js`

`handleFileChange` calls `setFile`, but no `setFile` state setter is declared. The attachment input is commented out, so the handler appears unused currently.

**Risk:** Re-enabling attachment UI without correcting the handler would cause a runtime error. Remove dead code or implement attachment handling deliberately; do not add file uploads without server validation, size limits, storage policy, and malware/security review.

### A-04 — Metadata is generic on key routes
**Priority:** P1  
**Evidence:** `src/app/(default)/layout.tsx`, service route metadata, contact/blogs/our-work route metadata.

The shared layout defaults to a USA-focused homepage title and broad description. Contact, blogs, and portfolio routes have short generic titles. Service metadata uses the service title as its description.

**Risk:** Search result snippets and page differentiation may be weaker than intended, especially if metadata is not consistently overridden on all important routes.

**Required follow-up:** Inventory every indexable route; define unique, truthful titles/descriptions aligned to each page's intent. Verify canonical URLs, robots directives, Open Graph metadata, and structured data before changes.

### A-05 — Homepage sections are modular, but the conversion path needs an end-to-end audit
**Priority:** P1  
**Evidence:** `src/components/Home Page/Home.tsx`

The homepage already has multiple content sections and a reviews section. The code structure offers places to add functionality without changing the visual design.

**Risk:** Section presence alone does not prove that cards, CTAs, or links route visitors to useful next steps.

**Required follow-up:** Click-test every homepage CTA/card, verify destinations, add contextual paths from relevant services and case studies to enquiry actions, and keep the existing design.

### A-06 — Analytics is initialized, but conversion tracking is not yet verified
**Priority:** P1  
**Evidence:** `src/components/TagManager/TagManagerLoader.tsx` and the contact form's `detectAnalyticsSource()` call.

A GTM container is initialized and the form attaches an analytics-source value. Static source inspection does not prove that GA4 events, consent handling, phone/WhatsApp click events, successful form submissions, or CRM attribution are configured correctly.

**Required follow-up:** Verify the actual GTM container configuration and live network/events. Track only meaningful events and avoid sending personal information to analytics.

### A-07 — Homepage contains a large set of candidate service/technology/industry keywords that need destination mapping
**Priority:** P0 for SEO architecture  
**Evidence:** `src/components/Home Page/Sections/WhatWeDo/Tabs.tsx`, `src/components/Home Page/Sections/Services/Tabs.tsx`, `src/components/Home Page/Sections/Industry Culture/IndustryCulture.tsx`, and [HOMEPAGE-KEYWORD-INVENTORY.md](./HOMEPAGE-KEYWORD-INVENTORY.md).

Static source review found solution terms including LMS, ERP, cloud, e-commerce, school management, web application, enterprise integration, product development, and real-estate management; numerous service, technology, and industry labels are also present. The initial term list is recorded in the inventory.

**Risk:** Without mapping terms to actual routes and distinct search intent, relevant terms may be unsupported, duplicated, or disconnected from organic landing pages.

**Required follow-up:** Complete live/dynamic inventory; verify current service offerings; map terms to existing pages or approved new pages; research US intent/demand; and avoid one thin page per synonym.

### A-08 — Many homepage subtopic and “View More Details” links are placeholders
**Priority:** P0/P1 depending on affected lead path  
**Evidence:** `src/components/Home Page/Sections/WhatWeDo/Tabs.tsx` and `src/components/Home Page/Sections/Services/Tabs.tsx`.

The inspected source contains multiple links using `href="#!"`, including subtopic labels and “View More Details” actions.

**Risk:** Clickable content may not navigate to a useful detail page, undermining both user journeys and internal-link discovery. The exact live behavior remains untested.

**Required follow-up:** Audit all visible clickable items. Link each item to a relevant implemented destination, or render it as non-interactive text if it is only a label. Do not route every item to a generic page simply to remove the placeholder.

### A-09 — Dynamic product routes appear to render the same generic page for every slug
**Priority:** P0 for product-page SEO and user trust  
**Evidence:** `src/app/(default)/products/[products]/page.tsx` renders `<ProductERP />` without passing the `products` parameter. `src/components/ProductERP/ProductERP.tsx` renders a fixed set of generic sections and does not read a product slug or product-specific data. The route file also has no product-specific metadata export.

**Risk:** Different product URLs may render the same content, creating duplicate/thin pages and making keyword-to-URL mapping unreliable. The live response and exact product routes still need to be checked.

**Required follow-up:** Inventory product slugs and their expected titles/content; determine whether these routes should be real distinct product pages, redirect to a canonical page, or be noindexed/removed. Implement slug-aware content and unique metadata only after product offerings are verified. Do not create additional product landing pages until this is resolved.

### A-10 — Industry detail pages lack route-specific metadata in the inspected route file
**Priority:** P1  
**Evidence:** `src/app/(default)/industries/[industriesdetail]/page.tsx` does not export `generateMetadata` or `metadata`. `src/components/IndustriDetail/IndustryDetail.jsx` reads the URL slug and loads a matching record from `industries_data.js`.

**Risk:** Industry pages may inherit generic metadata, and existing industry slug/content quality may not align with search intent.

**Required follow-up:** Verify canonical/indexability and current route behavior; add unique metadata based on approved, accurate industry content; check slug consistency and plan redirects before changing URLs.

## Not yet verified

- Complete live URL inventory and HTTP status/canonical/redirect behavior.
- Whether all intended routes are indexed and whether sitemap/robots files are correct.
- Exact rendered homepage state, dynamic blog/tag data, and all live link destinations.
- Search intent, US keyword demand, and priority city list.
- Current service capability and which industries/technologies should be marketed.
- Mobile behavior, keyboard navigation, contrast, and screen-reader feedback.
- Performance/Core Web Vitals and image loading.
- Whether email delivery and HubSpot are configured correctly in the deployed environment.
- Whether phone, WhatsApp, and booking CTAs are present and working across the site.
- Analytics properties, event names, consent configuration, and current traffic/lead baselines.
- Local build, lint, and automated tests.

## Audit rule

Findings above are code-based observations. Live behavior, configuration-dependent behavior, and SEO outcomes remain **unverified** until the corresponding checks in [TEST-PLAN.md](./TEST-PLAN.md) are run.
