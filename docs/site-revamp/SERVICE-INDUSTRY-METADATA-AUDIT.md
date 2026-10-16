# Service and Industry Metadata / Indexability Audit

**Date:** 2026-10-15  
**Branch:** `audit/site-revamp-plan`  
**Scope:** 9 core service routes, 3 AI/data service routes, 12 industry routes, metadata source, canonical policy, sitemap/robots source.  
**Status:** Source audit completed; runtime crawl and build verification pending.

## Summary

- Added distinct meta descriptions to all 9 core service records and reviewed the 3 AI/data service descriptions already present.
- Normalized the three service display titles that used slash-separated labels: Content Writing, Email Marketing, and Digital Marketing & SEO.
- Added distinct intent-focused SEO titles and meta descriptions to all 12 industry records.
- Service and industry routes emit canonical paths and return not-found for unknown slugs.
- Sitemap source includes registered service and industry records and the implemented ERP product route.
- No build, rendered HTML crawl, HTTP status check, redirect test, or Search Console inspection was available. The work is **not yet runtime-validated**.

## Service metadata inventory

| Canonical route | SEO title basis | Metadata status | Content QA note |
|---|---|---|---|
| `/services/web-development` | Web Development Services | Unique description added | Review copy for concrete deliverables, process, proof and supported CMS/platforms. |
| `/services/app-development` | App Development Services | Unique description added | Confirm supported platforms/frameworks and add approved examples. |
| `/services/ui-ux-designing` | UI/UX Designing Services | Unique description added | Review wording and explain actual deliverables such as research, flows, prototypes or audits only where offered. |
| `/services/technology-consulting` | Technology Consulting Services | Unique description added | Updated intro/business copy to match technology consulting rather than the old “Consulting & Assurance” positioning; remove legacy claims in remaining sections during content pass. |
| `/services/content-writing` | Content Writing Services | Unique description added | Corrected title; confirm supported content types and editorial process. |
| `/services/product-development` | Product Development Services | Unique description added | Add a clearer distinction from general web/app development and only verified project evidence. |
| `/services/email-marketing` | Email Marketing Services | Unique description added | Corrected title; verify supported email platforms and automation scope before naming them. |
| `/services/digital-marketing-seo` | Digital Marketing & SEO Services | Unique description added | Corrected title; verify exact service mix and avoid unsubstantiated ranking/result claims. |
| `/services/quality-assurance` | Quality Assurance Services | Unique description added | Review test types, platforms and reporting deliverables; do not imply certifications unless verified. |
| `/services/ai-solutions` | AI Solutions & Integration Services | Existing unique description reviewed | Scope is appropriately qualified; add verified stack, integration examples and data/privacy approach where approved. |
| `/services/ai-chatbot-development` | AI Chatbot Development Services | Existing unique description reviewed | Good focus on task, sources, handoff and fallback; confirm supported channels/integrations. |
| `/services/data-science-analytics` | Data Science & Analytics Services | Existing unique description reviewed | Claims are qualified; confirm actual BI, forecasting, modelling and data engineering scope. |

## Industry metadata inventory

All 12 industry routes now have unique SEO titles and meta descriptions. The title and description are stored in the data record so future content changes do not silently create duplicate snippets.

| Canonical route | SEO title | Content quality assessment |
|---|---|---|
| `/industries/automobile` | Automotive Software Solutions | Introduction is long and broad; focus it on software use cases and what can actually be delivered. |
| `/industries/cloud-solutions` | Cloud Solutions | Intro is short and generic; add clear scope such as assessment, migration, application modernization or integration only where offered. |
| `/industries/gaming-solutions-and-services` | Gaming Software Solutions | Intro describes the gaming sector more than the company's service; add concrete software scope and capability evidence. |
| `/industries/real-estate-solutions` | Real Estate Software Solutions | Broad industry description; distinguish property portals, listing workflows, CRM or management software only if supported. |
| `/industries/tech-driven-consulting` | Technology Consulting | Potential overlap with the Technology Consulting service route; decide whether this industry page has a distinct audience and purpose. |
| `/industries/education` | Education Software Solutions | Current introduction also mentions nonprofit/philanthropy; clarify the primary education audience and supported platform needs. |
| `/industries/e-commerce-solutions` | E-commerce Software Solutions | Intro is mostly category-level language; specify supported commerce builds/integrations after capability review. |
| `/industries/healthcare-solutions` | Healthcare Software Solutions | Intro uses broad transformation language; identify supported workflows without implying clinical or regulatory expertise not confirmed. |
| `/industries/insurance-software-solutions` | Insurance Software Solutions | Intro explains the industry generally; add practical software scope only after confirming relevant experience. |
| `/industries/manufacturing-solutions-and-services` | Manufacturing Software Solutions | More service-oriented than several others, but still needs approved use cases and evidence. |
| `/industries/advertising-industry` | Advertising & Marketing Solutions | Clarify distinction from the Digital Marketing & SEO service page; focus on software/workflow needs rather than duplicating agency-service intent. |
| `/industries/media-entertainment` | Media & Entertainment Software | Good topical direction but needs concrete software deliverables and proof; avoid unsupported “pioneer” claims. |

## Technical checks performed on source

- 9 core service records have non-empty meta descriptions; all are distinct and under 160 characters.
- 3 AI/data records already contain distinct meta descriptions and descriptive body copy.
- 12 industry records have non-empty, distinct meta titles and meta descriptions; title lengths are under 60 characters and descriptions under 160 characters.
- Service and industry metadata use the canonical route path.
- Unknown service and industry slugs call `notFound()`.
- Sitemap source includes service records, industry records, legal routes and the canonical ERP product route.
- Static source inspection only. None of the above confirms the final rendered HTML, generated sitemap response, live route status, or search engine indexing.

## Recommended next actions

1. **P1 — Build and route validation:** run install/build/lint in CI or a working checkout; inspect metadata rendered for all 24 detail routes; test unknown slugs and redirects.
2. **P1 — Industry content differentiation:** rewrite the most generic introductions and service sections with accurate use cases, deliverables and proof approved by the business owner.
3. **P1 — Service content consistency:** remove legacy “Consulting & Assurance” copy and any generic/irrelevant portfolio sections from Technology Consulting; review FAQs for repetitive questions across service pages.
4. **P1 — Page intent conflicts:** assess Technology Consulting service vs. Tech-Driven Consulting industry, and Advertising Industry vs. Digital Marketing & SEO service. Keep both only if they answer distinct search intents.
5. **P2 — Search data:** use Search Console queries, landing-page performance and qualified lead data to refine titles and prioritize content investment.
6. **P2 — Blog sitemap:** include database-backed article URLs after safely verifying the content source and canonical article URLs.

## Decision

**Metadata quality:** improved and statically checked.  
**Technical indexability:** configured in source but not runtime-verified.  
**Content readiness:** do not mark all service/industry pages SEO-ready until content differentiation, proof and intent-overlap reviews are completed.


## Industry introduction content pass — 2026-10-15

All 12 industry introductions were rewritten to reduce generic industry descriptions and make the page purpose clearer. The copy uses scoped, conditional language and calls out areas that require explicit discovery or validation (for example, embedded/vehicle systems, clinical systems, industrial control, regulated data, game infrastructure, and platform integrations). It should not be read as confirmation that every listed example is an existing product or proven capability.

| Route | Content change | Review note |
|---|---|---|
| `/industries/automobile` | Digital customer journeys, enquiries, service workflows, and product information | Do not imply vehicle-control or safety-critical engineering |
| `/industries/cloud-solutions` | Application requirements, migration planning, scalability, integrations | Confirm actual cloud provider/operations scope |
| `/industries/gaming-solutions-and-services` | Player-facing web experiences and supporting workflows | Confirm game-engine, multiplayer, and platform-specific experience |
| `/industries/real-estate-solutions` | Property discovery, listings, enquiries, and workflows | Confirm any CRM/property-management platform integrations |
| `/industries/tech-driven-consulting` | Consulting-sector websites, client journeys, and workflows | Distinguishes the sector page from the Technology Consulting service |
| `/industries/education` | Course/programme information, admissions, student/staff workflows | Confirm any LMS/SIS product scope before claiming it |
| `/industries/e-commerce-solutions` | Storefront, catalogue, checkout, order workflows, integrations | Confirm platform and payment integrations per project |
| `/industries/healthcare-solutions` | Digital information, appointments/enquiries, patient-facing workflows | No unsupported clinical or regulatory claims |
| `/industries/insurance-software-solutions` | Product information, enquiries, policy journeys, documents, workflows | Assess sensitive data and regulatory obligations per project |
| `/industries/manufacturing-solutions-and-services` | Operational information, workflows, quality/reporting, integrations | Explicitly scope industrial control/shop-floor systems |
| `/industries/advertising-industry` | Campaign assets, approvals, reporting, client workflows | Distinguishes software workflows from Digital Marketing & SEO services |
| `/industries/media-entertainment` | Content-led sites, audience experiences, editorial workflows | Confirm streaming, rights, broadcast, or distribution experience |



## Technology Consulting service content correction — 2026-10-15

The Technology Consulting record's old Consulting & Assurance service copy and 20 assurance-oriented FAQs have been replaced with six technology-consulting service topics and six focused FAQs. The new content covers current-state assessment, requirements, architecture and options, roadmapping, solution/vendor evaluation, delivery readiness, and integration feasibility. It explicitly avoids implying legal, financial, regulatory certification, or independent audit services.

This is a content-positioning correction, not confirmation of specific staff credentials or a guaranteed consulting deliverable. Business-owner review and build validation remain required.


## Dynamic blog indexability — 2026-10-15

The blog detail route now sets `/blogs/{slug}` as canonical, uses the article's metadata title/description where available, and invokes Next.js `notFound()` for missing or inactive articles. The blog lookup helper filters to `status: "active"`. The sitemap is now asynchronous and attempts to include active blog slugs with `updatedAt` as `lastModified`; on database errors it logs a generic message and still returns the non-blog sitemap entries.

**Validation limitation:** this is source-level implementation only. Confirm the database connection is available at runtime, that the app's Next.js version supports the sitemap route configuration, that active blog routes return 200, inactive/unknown slugs return 404, and that `/sitemap.xml` includes active articles without duplicates.


## Blog visibility and API access review — 2026-10-15

A source review found that the shared blog listing/tag helpers did not filter inactive posts and the admin-oriented blog API GET handlers did not enforce the auth middleware, although the admin list and edit screens send an auth token. The helpers now filter `status: "active"` for public listing/tag results and calculate totals with matching filters. Both admin API GET handlers now apply the existing authentication middleware.

The public blog article page continues to use the separate database helper, which only returns active articles. Verify the admin UI and public listing behavior after a build; no live API requests or authentication tests were run here.


## Authentication configuration issue found during route validation — 2026-10-15

The auth middleware and login route contained the same hardcoded JWT secret fallback in source control. This meant an unset environment variable would still sign and verify tokens with a repository-known value. The fallback has been removed; both paths now require `JWT_SECRET` and fail closed if it is missing. Login debug logs that printed the submitted request body and JWT payload were also removed. The middleware accepts the token cookie or `x-auth-token` header, matching the two supported request patterns.

**Important before deployment:** confirm a strong `JWT_SECRET` is configured in Vercel for all environments that should support login. Tokens created using the old fallback will no longer validate; users may need to sign in again. This change has not been runtime-tested.


## Role-based access control review — 2026-10-15

A further authentication review found that the shared middleware verified token signatures but did not load the current account or enforce its optional role argument. It also found user API handlers that called the async middleware without awaiting it. The middleware now looks up the current user, rejects missing or soft-deleted accounts, returns the current database role, and enforces supplied role requirements. Blog/category/tag management endpoints now request the admin role; user-list access is admin-only, and user detail endpoints await auth and params and enforce self/admin permissions. Login no longer accepts soft-deleted accounts. Password changes through the user PATCH route now avoid double-hashing through the Mongoose save hook.

These are source-level changes only. Runtime verification is still required, especially for admin workflows and ordinary-user access boundaries.


## Password reset route and UI review — 2026-10-15

The previous reset request handler generated a JWT but did not save the token in the format that the completion handler expected, so the two steps were incompatible. It now generates a random token, stores a bcrypt hash and one-hour expiry, sends the raw token only in the reset link, and invalidates the stored token after successful use. The request response no longer confirms whether an email belongs to an account. A reset page now supports both requesting a link and submitting a new password, and the login screen links to it.

No email delivery or end-to-end reset test has been performed. Verify NEXT_PUBLIC_FRONTEND_URL, the email provider, and the full reset journey in a test environment.


## Category and tag metadata API exposure — 2026-10-15
The public category list explicitly selected headerScripts/bodyScripts, while the public tag list returned complete documents. These list responses now exclude script fields, and the category/tag detail endpoints used by admin edit screens require admin authentication. The admin edit screens already pass the x-auth-token header. Validate both public listings and admin editing in a runtime environment.


## Next.js 15 route parameter compatibility — 2026-10-15
The category and tag dynamic API handlers accessed params synchronously even though this app uses Next.js 15, where route params are asynchronous. All GET/PUT/DELETE handlers now await params before reading the slug. Runtime route tests remain pending.
