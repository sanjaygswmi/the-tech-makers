# Industry Page Recommendations and Expansion Plan

**Date:** 2026-10-16  
**Working branch:** `audit/site-revamp-plan`  
**Scope:** Industry directory and 14 industry detail records; SEO, AEO (answer-engine optimization), GEO (generative-engine optimization), UX, conversion, content integrity, and future vertical selection.  
**Evidence level:** Static source review plus publicly indexed homepage content and owner-confirmed delivery experience. Production HTML, analytics, Search Console, keyword volumes, redirects, and browser behavior are not yet verified.  
**Guardrail:** Planning and implementation stay on this branch. Do not merge to `master` or deploy without separate approval.

## Executive recommendation

Improve and validate all 14 current pages; avoid further expansion until the new pages and remaining route/content issues are reviewed. The current issue is not a lack of industry names; it is inconsistent depth, several unverified service claims, weak evidence of delivery, and a mismatch between some homepage industry labels and the detail-page inventory. New pages should be approved only when The Tech Makers can describe a distinct buyer, problem, deliverable, and credible proof point.

## Current inventory and recommended disposition

Canonical routes below reflect the current working-branch source. Existing redirects and route metadata were added in this branch but are not yet runtime-validated.

| Current route | Recommendation | Main content / SEO action |
|---|---|---|
| `/industries/automobile` | Retain; major rewrite | Existing service list includes ADAS, autonomous vehicle, diagnostics, telematics, EV charging and infotainment. These imply specialist/safety-critical engineering not established by the general introduction. Replace with verified, lower-risk digital use cases (dealer/service websites, vehicle inventory, enquiry and service-booking workflows) unless specialist capability and evidence are approved. |
| `/industries/cloud-solutions` | Retain only if clearly an industry/sector page | Cloud is primarily a technology/service category, not an industry vertical. The service list is incorrectly copied from automobile. Prefer moving cloud-intent to the Cloud Solutions service page and decide whether this route should redirect, be repositioned around cloud-native businesses, or remain only if it serves a distinct audience. Avoid competing with a service page. |
| `/industries/gaming-solutions-and-services` | Retain provisionally; qualify heavily | Service list promises game design, porting, VR/AR, monetization, art and localization. Keep only verified capabilities. If experience is limited to web/companion products, state that scope instead of implying game-engine or multiplayer delivery. |
| `/industries/real-estate-solutions` | High-priority improvement | Strong alignment with the site's existing real-estate management / property discovery themes. Explain listing portals, enquiry capture, broker/developer workflows and CRM/integrations only where deliverable. Add approved case study or demonstrable product evidence. |
| `/industries/tech-driven-consulting` | Resolve intent overlap | Distinct from the Technology Consulting service only if it targets consulting firms as buyers (service sites, client portals, internal workflows). Otherwise consolidate/redirect to avoid competing pages. |
| `/industries/education` | High-priority improvement | Split education use cases from nonprofit/philanthropy. The current service list mixes LMS/SIS with donor, fundraising, volunteer and grant management. Keep education-focused items here; only create a nonprofit page if it is a verified, separately targeted market. |
| `/industries/e-commerce-solutions` | High-priority improvement | Strong overlap with the e-commerce solution/product theme. Make the audience and industry use cases distinct from the E-commerce service page: catalog, checkout, fulfilment, inventory and system integrations, subject to supported platforms. Link to the service page rather than duplicating it. |
| `/industries/healthcare-solutions` | Retain; careful proof-led rewrite | Focus on non-clinical digital experiences and workflows unless specialist delivery is verified. EHR, HIE, PACS, RCM and compliance claims need explicit proof and capability review. Never imply a certification or regulatory compliance status without evidence. |
| `/industries/insurance-software-solutions` | Retain provisionally; owner review required | Policy, claims, underwriting, fraud detection and regulatory solutions are high-trust claims. Keep only confirmed capability; describe discovery/integration assessment accurately. Consider consolidating if there is no relevant delivery evidence or distinct demand. |
| `/industries/manufacturing-solutions-and-services` | High-priority improvement | Distinguish ordinary business workflow/reporting/inventory software from MES, PLM, industrial control and predictive maintenance. Advanced plant-floor/OT integrations need proof and a separate technical scope. |
| `/industries/advertising-industry` | Retain if distinct; improve differentiation | Position for advertising agencies and campaign operations software (asset approval, client portals, reporting/workflow integrations). Do not duplicate Digital Marketing & SEO services or imply proprietary ad-tech products. |
| `/industries/media-entertainment` | Retain provisionally; narrow to verified scope | Content-led sites, publishing workflows and audience experiences are plausible. Streaming, DRM, broadcast, rights management and distribution need owner validation and proof before being presented as delivery capabilities. |

### Cross-cutting source issues found

1. **Incorrect copied service lists (baseline finding):** the cloud page previously included automotive/ADAS/EV items; the current integration branch uses a cloud-specific list.  
2. **Education/nonprofit mix (baseline finding):** the earlier education list mixed donor/fundraising/volunteer/grant/NGO CRM services; the current integration branch keeps the Education list focused on learning, admissions, portals and reporting.  
3. **Overclaim risk:** several pages list advanced regulated or safety-critical systems without supporting case studies, credentials, or scope boundaries. The introductions are more cautious than the service lists; align both.  
4. **Generic shared sections:** detail pages share client logos, “Why Choose,” blog/insight and reviews sections. Check whether logos/reviews are real, approved and relevant; add industry-specific evidence where available. Never fabricate industry clients, testimonials, metrics or outcomes.  
5. **Title/intent mismatch:** “Cloud Solutions” is not clearly an industry vertical. “Tech-Driven Consulting” may compete with the Technology Consulting service. Advertising can compete with Digital Marketing & SEO if the page describes agency services instead of software/workflows.  
6. **Homepage-to-detail gap:** homepage mentions Healthcare, Cloud, e-Commerce, Sports, Gaming, Travel, Insurance, Real Estate, Marketing & Advertising, Automobile, Logistics, Education & Non Profit, Manufacturing, Media & Entertainment, and Technology & Consulting. Sports remains a non-clickable label pending capability validation. Travel & Hospitality and Logistics & Supply Chain now have dedicated detail records and homepage links.

## Recommended page template

Retain the existing design system and page layout as a baseline; improve content and information hierarchy rather than redesigning by default.

1. **Answer-first hero:** one concise statement naming the target buyer, the software/workflow problem, and the scoped help offered. Use one clear H1, one primary enquiry CTA, and a relevant secondary CTA only if a real case study/service page exists.
2. **Industry problems and users:** 3–5 specific pain points mapped to real users and workflows. Avoid generic claims like “transform your business.”
3. **Solutions / use cases:** 3–6 practical use cases, each with the business goal, users, and likely deliverables. Mark integrations and specialist work as discovery-dependent where appropriate.
4. **What we can deliver:** concrete outputs (e.g., responsive portal, workflow automation, dashboard, integration assessment) that match actual services. Avoid long lists of fashionable technologies or products that are not offered.
5. **Related services:** link to the most relevant verified service pages with descriptive anchors. Industry pages explain context; service pages explain the delivery capability.
6. **Relevant proof:** approved case study, product/demo, anonymized workflow example, testimonial or measurable outcome. If no proof exists, do not manufacture it; use a transparent process section and mark proof as a content gap.
7. **Delivery approach:** discovery, requirements, design, implementation, QA, rollout and support—only the steps the team actually provides.
8. **Security, privacy and integrations:** concise, project-specific explanation. No blanket compliance claims or unsupported platform logos.
9. **Visible FAQ:** 4–6 genuinely useful buyer questions, answered directly and uniquely for that industry. Questions should reflect sales/discovery knowledge, not keyword stuffing.
10. **Relevant insights:** show only published, genuinely related articles, mapped to an industry taxonomy; avoid showing the same generic posts on every page.
11. **Conversion close:** contextual CTA and short enquiry form path. Preserve source attribution and verify analytics events.

## SEO, AEO and GEO requirements

### Technical SEO

- Keep one canonical URL per distinct search intent. Verify each new/old industry URL, redirect status and chain, canonical, indexability, H1, title, description and sitemap entry with a runtime crawl.
- Preserve the five existing industry URL migrations and direct all internal links to canonical targets. Do not create redirect chains.
- Keep unique title and description per page, but treat length as a guide rather than a ranking rule. Align title, H1, intro and actual page content; avoid repetitive “solutions and services” wording across all pages.
- Add contextual internal links from homepage, relevant service pages, case studies and blog articles. Avoid footer-only links as the primary discovery path.
- Use descriptive image filenames and alt text that explain meaningful content; decorative images should have empty alt text. Optimize dimensions, responsive delivery and loading.
- Check mobile rendering, page speed/Core Web Vitals, keyboard access, contrast and form feedback.
- Ensure sitemap lists only canonical, indexable, useful routes returning 200; unknown slugs should return 404. Verify robots and rendered metadata in production before release.
- Avoid keyword stuffing, mass-generated near-duplicate pages, and city/industry doorway pages.

### AEO (answer-engine optimization)

- Lead with a clear, self-contained 40–70-word answer explaining who the page serves and what types of software/workflow projects are in scope.
- Use question-based headings for genuine buyer questions and concise answers that remain understandable when extracted out of context.
- Define acronyms on first use (e.g., Manufacturing Execution System (MES)); prefer clear entity names and explicit relationships over vague pronouns.
- Make scope and limitations explicit. Do not present a speculative capability as an established product.
- Use valid structured data only where it describes visible page content. Organization/WebSite schema belongs at site level; BreadcrumbList may be suitable on detail pages. FAQPage rich-result visibility is restricted by Google, so FAQ schema should not be treated as a ranking or rich-result guarantee.
- Keep content crawlable in rendered HTML; don't hide essential copy behind interaction-only UI.

### GEO (generative-engine optimization)

- Publish verifiable, distinctive information that an AI answer can attribute to The Tech Makers: what it builds, for whom, typical deliverables, constraints, and approved examples.
- Include original evidence wherever available: case studies, product screenshots, workflow diagrams, author/reviewer identity, publication/update date, and links to related service pages. Clearly label illustrative examples vs. client work.
- Use consistent names for the company, services, industry routes and products across the site. Keep the About/contact details and organization identity accurate.
- Prefer factual, specific paragraphs and useful tables/lists over repeated promotional superlatives. Avoid unsupported “leading,” “best,” “expert,” guaranteed ROI, or invented statistics.
- Cite authoritative external standards only when relevant and accurately interpreted; do not use citations to imply certification or endorsement.
- Maintain crawl access and sensible technical SEO. There is no guaranteed “AI ranking” trick or special schema that guarantees citations in generative answers.

## New industry page candidates

**Do not publish every candidate immediately.** First confirm delivery capability, target market, search demand, qualified lead evidence and whether the existing service pages already satisfy the intent.

| Candidate | Initial priority | Why it may fit | Gate before creating a page |
|---|---|---|---|
| Logistics & Supply Chain | Added — owner review pending | Owner confirmed inventory management, shipping aggregation (Intargos), and e-commerce shipping plugins/apps for shipping partners. | Review public wording and confirm which carrier/platform integrations can be named; add approved proof where possible. |
| Travel & Hospitality | Added — owner review pending | Owner confirmed hotel management, hotel search/bookings, flight booking, and travel website work including highplaces.co.uk, pedalnation.co.uk and tttexpeditions.com. | Review public wording; verify supplier/API/payment integrations before claiming specifics and add approved project proof where permitted. |
| Retail & Distribution | P2 research | Adjacent to e-commerce, inventory and ERP themes; may target point-of-sale, multi-branch inventory, distributor ordering and customer loyalty. | Create only if intent is materially distinct from E-commerce and Product/ERP pages and delivery scope is confirmed. |
| Banking & Financial Services | P2 / high-risk validation | Potential demand for customer portals and workflow systems. | Do not publish until relevant delivery experience, data-security approach, payment/financial integrations and compliance boundaries are verified. |
| Sports & Fitness | P2 / evidence-dependent | Listed on homepage, but no matching industry detail route. Potential booking, membership, event or club workflows. | Confirm buyer demand and experience; otherwise remove/de-emphasize the homepage label rather than creating a thin page. |
| Nonprofits & Social Impact | P2 / evidence-dependent | Current Education page already mixes nonprofit workflows. | Decide whether nonprofit is a real target market; if yes, create a distinct page with approved use cases and separate it from Education. |

### Pages not recommended as standalone industry pages yet

- **Cloud solutions:** likely a service/technology landing page, not an industry page. Resolve route intent before expanding.
- **Technology & Consulting:** retain only if clearly focused on consulting firms as customers, not technology advisory as a service.
- **Automotive advanced engineering, clinical healthcare, insurance underwriting, industrial OT, game-engine/multiplayer, streaming/DRM:** do not market as established specialist capabilities without owner-confirmed skills and evidence.

## Proposed phased work plan

### Phase 1 — Content integrity and architecture (first)

- [ ] Fix the cloud page's copied automotive service list; make a route-level decision for cloud as industry vs. service and document any redirect/consolidation before implementing.
- [ ] Separate Education from nonprofit/philanthropy service items.
- [ ] Audit every service list against actual delivery capability; remove, qualify or substantiate high-risk claims.
- [ ] Resolve Technology Consulting service vs. Tech-Driven Consulting industry intent.
- [ ] Resolve E-commerce industry vs. E-commerce service intent and Advertising Industry vs. Digital Marketing & SEO service intent.
- [ ] Audit generic client logos, reviews, “Why Choose,” and blog blocks for relevance, permission and factual accuracy.
- [ ] Build an explicit homepage industry-label → canonical detail route map; do not link to nonexistent routes.

### Phase 2 — Content and conversion improvement

- [ ] Apply the recommended template to the 4 strongest current pages first: Real Estate, Education, E-commerce, Manufacturing; then Healthcare after claim review.
- [ ] Add specific use cases, deliverables, related service links, contextual CTAs and unique visible FAQs.
- [ ] Add proof only when the business owner supplies/approves it.
- [ ] Associate each relevant blog post with one or more industry categories; only show published, relevant posts on the matching pages and link back to the industry page from those articles.
- [ ] Add breadcrumbs and validate structured data against visible content.

### Phase 3 — Research and expansion decision

- [ ] Inspect Search Console landing-page queries, impressions, clicks and conversions; use analytics/CRM lead quality if available.
- [ ] Validate keyword intent and SERP competition for current routes and candidates; do not infer demand from competitor page counts.
- [ ] Ask the business owner to confirm delivery capabilities, target geographies, priority buyer types, integrations and approved proof.
- [ ] Score candidates on verified capability, evidence, search intent, lead value, differentiation, and content readiness.
- [ ] Create only the highest-scoring new page(s), with unique content and internal links. Otherwise improve existing pages first.

### Phase 4 — Validation and release readiness

- [ ] Run build/lint/tests in a working checkout or CI.
- [ ] Crawl every old and canonical industry URL; verify status, redirect chain, canonical, title, description, H1, robots/indexability, sitemap membership, internal links and unknown-slug 404s.
- [ ] Test mobile, keyboard, CTA/form behavior and analytics events.
- [ ] Review all claims and proof with the business owner.
- [ ] Record evidence in `TASKS.md`; do not merge or deploy without explicit approval.

## Open owner decisions

1. Which industries have actual completed projects or demonstrable products that can be shown publicly?
2. Which advanced capabilities (automotive embedded/ADAS, clinical systems, insurance core systems, manufacturing OT/MES/PLM, gaming engines, streaming/DRM) can the team credibly deliver today?
3. Is Cloud Solutions intended as a service page or as a page for cloud-native businesses?
4. Is nonprofit/social impact a target vertical separate from Education?
5. Which integrations/platforms can be named publicly, and which customer logos/testimonials are approved?
6. Which geographies and buyer segments are priorities for industry SEO?
7. Can Search Console, analytics and qualified-lead data be reviewed before adding new URLs?

## Definition of done

An industry page is ready only when: distinct intent and target buyer are documented; content is unique and factually approved; claims have proof or are appropriately qualified; title/description/canonical/H1 are correct; related links and CTA work; FAQs are visible and useful; structured data matches visible content; images are accessible/optimized; sitemap/robots/redirects are verified; and build/runtime checks pass.


## Implementation and candidate research update — 2026-10-16

### Homepage and template changes now implemented on the review branch

- Homepage industry items now link only where a registered industry detail route exists. Travel & Hospitality and Logistics & Supply Chain now link to their dedicated pages; Sports remains non-clickable pending validation.
- Normalized visible labels to **Automotive**, **E-commerce**, **Marketing & Advertising**, and **Education**; corrected the section heading and description to describe industry-specific software work rather than generic company culture.
- Removed the shared industry-page client-logo carousel and generic blog/review sections from the industry detail template. The previous implementation repeated the same logos, project placeholders, and testimonials on every vertical, which could imply sector-specific proof that was not actually mapped to that page. These sections should return only when approved evidence and relevant articles can be mapped to each industry.
- Replaced irrelevant payment-processing claims in the shared “Why Choose” section with a more general, realistic delivery explanation.
- Fixed the industry services section’s dead `href="#"` CTA; it now links to `/contact` and invites the visitor to discuss a project.
- Added a reusable, visible use-case and FAQ section for Real Estate, Education, E-commerce, Manufacturing, and Healthcare. FAQs avoid blanket compliance, integration, or platform guarantees and are written as buyer questions with scope-dependent answers.
- Narrowed Real Estate, E-commerce, and Technology & Consulting service lists to distinguish customer-sector needs from broad service offerings. The consulting-sector page now focuses on consulting firms' websites, client workflows and portals; technology strategy remains the separate service intent.

### New-industry research: evidence and decision

Public review of the currently indexed The Tech Makers homepage shows an existing **Hotel-Flight Management System** product proposition, as well as Real Estate Management, LMS, ERP, Cloud and E-commerce product/service themes. The owner has additionally confirmed delivery experience in travel/hospitality and logistics/shipping. Dedicated pages are now present on the working branch. This is capability context, not proof of every possible integration, customer outcome, or search demand. See the [currently indexed homepage](https://www.thetechmakers.com/) and its product/solution descriptions.

Public competitor examples confirm that travel/hospitality and logistics/supply-chain software are established categories in the custom software market; for example, [Codes Technology's Logistics, Travel & Hospitality page](https://www.codestechnology.com/service/logistics-travel-hospitality) and [TeamInIndia's Travel & Hospitality software page](https://www.teaminindia.com/industries/travel-and-hospitality-software/) address these categories. Competitor positioning alone does **not** establish keyword volume, conversion potential, or The Tech Makers' delivery capability.

| Candidate | Revised recommendation | Why | Required gate |
|---|---|---|---|
| Travel & Hospitality | **Added — owner review pending** | Owner confirmed experience with hotel management, hotel search and bookings, flight booking, and travel websites including highplaces.co.uk, pedalnation.co.uk and tttexpeditions.com. | Review route copy; verify exact supplier/API/payment integrations before claiming them; add approved project evidence and screenshots where permitted. |
| Logistics & Supply Chain | **Added — owner review pending** | Owner confirmed inventory-management, shipping-aggregator (Intargos), and e-commerce shipping plugin/app work for shipping partners across WordPress, Shopify and Magento. | Review route copy; confirm which carrier/platform integrations can be named publicly and add approved proof. Avoid implying every carrier or platform is already integrated. |
| Sports & Fitness | Defer | Existing homepage label alone is insufficient evidence of capability or demand. | Owner-confirmed examples, target buyer and a differentiated use case. |
| Retail & Distribution | Research later | Adjacent to e-commerce/inventory and potentially duplicative without a distinct buyer problem. | Show intent not already served by the E-commerce page and confirm relevant work. |
| Banking & Financial Services | Defer / high scrutiny | Security, financial regulations and core financial workflows carry high trust and compliance implications. | Verified delivery record and a precise non-overstated scope. |
| Nonprofits & Social Impact | Defer | Previously mixed into Education, but no distinct validated service proposition is established in source. | Confirm actual nonprofit work and separate audience/use cases before creating a page. |

**Search-demand limitation:** no Search Console, keyword-planner, qualified-lead, or CRM evidence was available in this review. Therefore this is a fit-and-content-gap assessment, not a claim that these keywords have high volume. Before creating a new industry URL, review Search Console query impressions/clicks, analytics landing-page conversions, CRM-qualified leads, sales conversations, and the team's confirmed capability list. Do not publish a thin page solely because a competitor has one.

### Remaining owner review

1. Confirm whether the Hotel-Flight Management System is live, demoable, and commercially supported; list integrations that are actually implemented.
2. Confirm the services and industry projects the team can substantiate, especially in healthcare, automotive, manufacturing, gaming, insurance, and media.
3. Approve which case studies, testimonials and client logos may be associated with which sectors.
4. Provide or enable access to Search Console/Analytics and lead/CRM data before a search-demand-based page prioritisation.


- Follow-up internal-link improvement: added contextually selected links from the five priority industry pages to existing service routes (Website Development, App Development, Product Development, Quality Assurance, and/or Digital Marketing & SEO). Static route-data check confirms all referenced slugs exist in the service data.


## Merged source status — 2026-10-16

This section records the source changes merged into the site-revamp review branch, rather than treating all baseline findings above as still open.

### Implemented on the site-revamp review branch

- **Cloud:** the service list is now cloud-specific (application development, migration planning, modernization, architecture assessment, API integration, scalability, performance, cost, backup/disaster recovery). The visible heading is aligned to **Cloud Solutions**. The route-intent decision remains open because cloud is primarily a service/technology category, not a conventional industry.
- **Education:** the service list is education-specific (LMS/SIS, e-learning, admissions, course/programme management, student/staff portals, content and reporting); nonprofit/philanthropy is not listed as an Education service.
- **Real Estate:** introduction now focuses on listing administration, buyer/tenant enquiries, transaction coordination and rental workflows, and avoids implying a ready-made product.
- **E-commerce:** introduction now emphasizes product discovery, catalogue, cart/checkout, order updates and fulfilment integrations, and distinguishes general web development from commerce-specific workflows.
- **Manufacturing:** introduction now distinguishes workflow/reporting projects from a ready-made ERP/MES/PLM product and calls out the need to scope industrial-control and shop-floor integrations.
- **Navigation:** the two service/industry mega menus and footer include the three AI/data service routes; the industry links include Manufacturing, Advertising and Media & Entertainment, and labels for Technology Consulting, Education, Healthcare and Media & Entertainment were normalized.
- **Template work implemented on the working branch:** homepage industry labels link to registered routes, including Travel & Hospitality and Logistics & Supply Chain; generic client-logo/blog-project/testimonial sections are commented out for future reuse, rather than deleted; a contact CTA replaces the dead placeholder link; use-case/FAQ content is present for Real Estate, Education, E-commerce, Manufacturing and Healthcare; contextual links from priority industry pages point to existing service routes.

### Static verification recorded

- The industry data now has **14 records with 14 unique slugs**.
- Every record has a metaTitle and metaDescription field.
- Static checks confirm the Cloud heading/list, Education list, and Real Estate/E-commerce/Manufacturing introductions are aligned to their intended subjects.
- The industry directory, homepage, header mega menu, footer and sitemap source include the two new industry routes. Static source checks do not replace a live crawl; the public site could not be inspected with the available browser fetch, and the new pages have not been deployed.

These checks are source-level only. They do **not** prove the rendered page, HTTP status, canonical tag, redirect, sitemap, responsive layout, or form/analytics behavior. The merge was into `audit/site-revamp-plan` only; no merge to `master` or production deployment occurred.

### Updated task plan and order

1. **P0 — Finish route/content integrity.** Confirm all 14 records have unique intent; decide whether Cloud remains an industry page or should consolidate/redirect to a Cloud service page; review Consulting-vs-Technology Consulting and E-commerce-vs-service overlap; verify industry FAQ/use-case sections and contextual links.
2. **P0 — Owner review of claims.** Confirm what the team can actually deliver and what proof may be published. Prioritize Healthcare, Automotive, Gaming, Insurance, Manufacturing, and Media & Entertainment for specialist-claim review. Do not add compliance, safety-critical, streaming/DRM, or industrial OT claims without evidence.
3. **P1 — Improve page copy and conversion.** After owner review, complete answer-first introductions, specific use cases/deliverables, 4–6 useful visible FAQs per priority page, related-service links, and a relevant CTA. Add only approved case studies/testimonials/logos.
4. **P1 — New verticals.** Travel & Hospitality and Logistics & Supply Chain routes are now implemented based on owner-confirmed delivery experience. Keep Sports, Retail/Distribution, Financial Services and Nonprofit/Social Impact deferred until evidence and a differentiated proposition support them.
5. **P0 — Runtime QA.** In a full checkout/CI, run lint, build and tests; crawl all industry routes and legacy redirects; verify status, unique title/description/H1, canonical, indexability, sitemap, internal links, unknown-slug 404, FAQ rendering, mobile/tablet/desktop, keyboard access and CTA behavior.
6. **P1 — Measurement.** Review Search Console queries, landing-page analytics and qualified CRM leads before prioritizing new pages. No search-volume or ranking outcome is assumed.
7. **Release gate.** Record evidence in TASKS.md and TEST-PLAN.md; do not merge to master or deploy without separate approval.

### Still pending

- Owner confirmation of capabilities, product status, integrations, client permissions and geographic priorities.
- Search Console, analytics and qualified-lead evidence.
- Full build/lint/test, rendered browser checks, route/redirect/canonical/sitemap crawl, accessibility checks and live analytics validation.


## Phase 3 content-integrity audit — 2026-10-16

### Guidance coverage

The shared industry guidance map now has an entry for all 14 industry routes. Each entry provides four use cases, three FAQs, and contextual links to existing service detail pages. Static source verification found no industry route without guidance, no guidance entry for a non-existent industry slug, and no contextual service link to an unregistered service slug.

The seven added guidance entries cover Automobile, Cloud Solutions, Gaming, Tech-Driven Consulting, Insurance, Advertising, and Media & Entertainment. Copy is deliberately qualified where specialist delivery, third-party access, regulated data, safety-critical systems, or compliance would require further verification. This is content consistency—not proof that every possible integration or capability is already delivered.

### Remaining content/intent decisions

1. **Cloud Solutions** — this is a technology/service category, not a conventional industry vertical. Keep it for now, but decide whether it should target organisations with cloud-related software needs or whether cloud-intent belongs exclusively on the Cloud Solutions service page. Avoid duplicate search intent.
2. **Tech-Driven Consulting** — the industry page now explicitly targets consulting firms as software buyers; the Technology Consulting service page targets advisory engagements. Verify that headings, title tags, directory labels, and service links preserve this distinction.
3. **E-commerce** — the industry page should remain focused on commerce-specific customer journeys, catalogue, checkout, fulfilment, and integrations, while the service page explains delivery capabilities. Avoid copying the same keyword-led introduction to both.
4. **Advertising vs Digital Marketing & SEO** — keep the industry page about advertising-agency software and operational workflows; keep campaign execution and organic search service copy on the service page.
5. **Evidence and proof** — do not add client logos, testimonials, quantitative outcomes, or named case studies without owner-approved evidence. Shared logo, blog/project showcase, and generic testimonials remain commented out for possible future reuse.

### Validation status

- Source checks: 14 unique industry slugs; 14 matching guidance entries; all contextual service links resolve to registered service slugs; 42 FAQs defined.
- CI run at the previous branch head passed, but the new guidance commit requires a fresh CI result.
- Live HTTP responses, rendered canonicals, redirects, generated sitemap, robots/indexability, responsive layout, accessibility, and CTA behavior remain unverified. Do not describe these pages as live or deployed until checked.


### Additional overlap/content fixes — 2026-10-16

- Cloud page heading/title now uses **Cloud Application & Platform Solutions** to clarify its software/application scope. The page remains in the industry directory for now; final treatment should be decided only after checking user intent and the rest of the site's service architecture.
- The consulting-sector page metadata now targets **software for consulting firms**, with a matching description about portals, expertise websites, enquiry workflows, and engagement reporting. This distinguishes the buyer (consulting firms) from the Technology Consulting service.
- Advertising page metadata now targets advertising-agency software. Its service list was rewritten from product-like labels (for example, campaign management platforms and SEO tools) into agency workflow, client collaboration, approval, reporting, and integration use cases. This avoids implying a proprietary ad-tech product suite.
- The Automobile heading's accidental leading space was removed.
- Re-validation after content edits: 14 unique slugs, 14 unique meta titles, 14 unique descriptions (all under 160 characters), 14 matching guidance entries, 42 FAQ questions, no duplicate service labels inside any one industry record, and all contextual service links resolve to service records.
- CI has been triggered for the content changes and the documentation update; wait for a successful run on the latest branch head before treating source validation as complete.


## Service-versus-industry intent and structured data — 2026-10-16

### Intent decisions

- **Cloud Solutions:** no dedicated Cloud service detail route exists in the current service data. Keep the industry/category route and describe it as cloud application/platform project guidance. Do not invent a redirect or remove it due to a theoretical overlap.
- **Technology Consulting vs Tech-Driven Consulting:** the service page is for advisory, system assessment, architecture options, and delivery planning; the industry page is for software and workflows used by consulting firms. The industry metadata and intro now make that buyer/context distinction explicit.
- **E-commerce vs Web Development:** the industry page focuses on commerce-specific journeys and operations (catalogue, checkout, order updates, fulfilment, integrations). Web Development remains a broader website/web-application service, and its commerce section now describes commerce as a scoped capability rather than the page's primary positioning.
- **Advertising vs Digital Marketing & SEO:** the industry page targets agency operations, approvals, client workflows, and reporting integrations. Marketing execution and SEO remain on the Digital Marketing & SEO service page.
- No dedicated E-commerce or Advertising service slug currently exists. Preserve the useful industry routes; no consolidation or redirect is warranted on current evidence.

### Service FAQs and structured data

- Curated eight FAQs for each of the 12 service detail pages (9 core + 3 AI), with the same FAQ data driving the accordion and FAQPage JSON-LD. All eight questions render by default; answers are revealed through the existing accordion.
- Added sitewide Organization and WebSite structured data; service detail pages output Service, BreadcrumbList, and FAQPage; industry pages output BreadcrumbList and FAQPage.
- Additional schema candidates: BlogPosting for individual published blog pages after confirming reliable author, date, image, and content fields; Product only for genuine product pages with accurate product data. Do not fabricate local-business details, reviews/ratings, prices, offers, or site-search actions.
- Google deprecated FAQ rich results on May 7, 2026, and removed the feature documentation in June 2026. FAQPage markup here mirrors genuine on-page Q&A for semantic interoperability only; do not expect Google FAQ dropdowns or claim a ranking benefit. See [Google Search documentation updates](https://developers.google.com/search/updates).
- Build/CI, rendered HTML inspection, and schema validation remain pending. No merge or deployment performed.


## Intent-overlap review — 2026-10-16

**Source-level result: the two flagged page pairs now have an explicit, useful distinction in the industry guidance copy.**

| Page pair | Industry-page intent | Service-page intent | Result / remaining check |
|---|---|---|---|
| Tech-Driven Consulting vs. Technology Consulting | Software and digital workflows used by consulting firms themselves: expertise/resource libraries, lead capture, client portals, engagement and reporting workflows | Advisory and technical planning delivered to clients: current-state assessment, requirements, architecture/options, roadmapping, vendor evaluation and delivery readiness | Keep both provisionally. The industry intro and FAQ explicitly explain the distinction. Confirm the service page's remaining sections do not revert to the old Consulting & Assurance proposition. |
| Advertising Industry vs. Digital Marketing & SEO | Software/workflow support for advertising organisations: campaign asset approvals, client portals, creative libraries, reporting and authorized platform integrations | Cross-industry marketing/SEO service delivery | Keep both provisionally. Industry intro and FAQ explicitly state it is not a campaign-execution offer or a claim of proprietary ad-tech products. Ensure shared sections and CTA copy do not blur this distinction. |

**Acceptance boundary:** This is a static copy review, not proof of search performance or rendered-page behavior. Re-check after rendered route QA and after the shared template sections are reviewed.

**Still requires an owner decision:** `/industries/cloud-solutions` remains a technology category rather than an obvious industry vertical. Do not redirect or remove it automatically. The owner should choose between (a) keeping it only if a distinct cloud-native business audience is served, (b) repositioning/renaming it to a defensible sector, or (c) consolidating the search intent into the Cloud Solutions service page with a redirect after link/sitemap review.

**Next content priority:** Review the original industry-specific service lists for claims that imply unverified specialist delivery (especially automotive/ADAS/vehicle systems, gaming engines/multiplayer, healthcare/EHR and regulatory work, insurance underwriting/fraud, manufacturing MES/OT/plant-floor control, and media streaming/DRM/broadcast). Remove or qualify unsupported items in visible content; keep discovery-dependent work clearly conditional. Do not invent client proof, metrics, certifications, integrations, or staff credentials.


## Specialist service-list qualification — 2026-10-16

- Narrowed Education labels so they describe project-scoped LMS implementation/integration and student-information workflows rather than implying a turnkey LMS or SIS product is universally available.
- Reworded Healthcare mobile-app and integration labels to focus on patient-facing/administrative experiences and feasibility-scoped integration with existing systems.
- These wording changes avoid implying prebuilt specialist products or guaranteed compatibility. They do not establish certification, clinical-system expertise, or delivery history; project scope and provider/API feasibility still require discovery.
- Existing qualified introductions remain in place for automotive safety/embedded systems, gaming engines/multiplayer, insurance compliance and sensitive data, manufacturing industrial control/MES/PLM, and media streaming/DRM/broadcast.
- Static source edits only. Rendered page, internal-link, accessibility, and route QA remain pending until a preview/working checkout is available. No merge or deployment performed.
