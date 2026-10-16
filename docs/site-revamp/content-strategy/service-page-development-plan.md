# Service Page Development & Service-Specific Content Plan

**Repository:** `the-tech-makers/the-tech-makers`  
**Working branch:** `audit/site-revamp-plan`  
**Status:** Audit and proposed implementation plan; no production changes or deployment.

## Objective

Make service pages useful landing pages for qualified enquiries, ensure every service link resolves to the right page, build a clear internal-link structure, and show only blog content genuinely related to each service. Keep the public blog archive available as the central library while giving every service page its own automatically refreshed related-content section.

## 1. Current implementation reviewed

Primary files reviewed:
- `src/app/(default)/services/page.tsx`
- `src/app/(default)/services/[services]/page.tsx`
- `src/components/Services Page/Sections/Service/Service.tsx`
- `src/components/Services Page/constant.js` (actual file: `src/components/constant.js`)
- `src/components/Services Page/servicedata.js`
- `src/components/Services Page/ai-servicedata.js`
- `src/components/ServicesDetail/ServicesDetail.jsx`
- `src/components/ServicesDetail/Sections/SolutionsAndServices/SolutionsAndServices.tsx`
- `src/components/ServicesDetail/Sections/Questions/Questions.tsx`
- `src/components/Home Page/Sections/Blogs/Blogs.tsx`
- `src/database/blogs.ts`
- `src/models/Blog.js`
- `src/app/(admin)/admin/blog/components/BlogForm.tsx`
- `src/app/sitemap.ts`

### What already exists

- A service directory at `/services` and dynamic detail routes at `/services/[services]`.
- Service content data with descriptions, service highlights, FAQs, and some portfolio/market-proof assets.
- Metadata and canonical URLs on the service directory and service detail pages.
- Service detail pages already render a blog section using the service slug as a tag slug.
- The sitemap already includes slugs from `servicedata`.
- An admin blog editor supports categories and tags.

### Issues and opportunities

1. **Service list and detail routes are inconsistent.** The directory data in `src/components/constant.js` uses `consulting-assurance`, while detail data uses `technology-consulting`. This means the directory's Consulting & Assurance link does not match the detail-data slug, and the Technology Consulting page is not represented consistently in the directory. Verify intended naming, then use one canonical slug and add a redirect only if a previously public slug must be retained.
2. **AI services are not discoverable from the main service directory.** `ai-servicedata.js` adds AI Solutions & Integration, AI Chatbot Development, and Data Science & Analytics to the detail data, but these do not appear in the current `src/components/constant.js` service list.
3. **Service-page copy is partly generic.** The detail layout hard-codes generic “Creative experiences” copy in the Solutions and Services section. This weakens the relevance of the individual service pages and should be replaced by service-specific section headings/intros or data-driven defaults.
4. **The service-directory hero CTA is broken.** Its target is `/ 404.js`, not a valid contact or enquiry route.
5. **Related-blog matching can show unrelated content.** The detail page passes its slug as a tag slug, but `getBlogsByTagSlug` looks up a tag record and the blog component falls back to the newest general blogs when no matching tagged posts exist. This makes the section appear service-specific even when it is not.
6. **Service-to-blog assignment is implicit.** There is no dedicated service association in the blog model/admin form. Editors must infer the correct tag to use, and there is no reliable validation or service-specific publishing workflow.
7. **Blog category form/API names should be aligned.** The editor uses the field name `category[]`, while the API reads `category`; the editor's explicit category append is commented out. This should be corrected as part of the content-model work so category assignment is reliable.
8. **Internal linking is thin/inconsistent.** The service directory links to detail pages, but the detail template has no explicit “Related services” navigation. The related blog section's “View All Blogs” link leads to the unfiltered global archive rather than a service-filtered archive.
9. **Content and proof need editorial review.** Some service descriptions are broad and use high-level claims. Portfolio, results, certifications, integrations, and client outcomes should only be published when verified. Review FAQ accuracy and remove promises the team cannot substantiate.
10. **Accessibility and presentation need a service-page pass.** Decorative images often have empty alt text, the FAQs use a generic plus icon without an explicit visual expanded state, and the layout uses some fixed-size cards. Review responsive layout, semantic heading order, meaningful image alt text, keyboard behavior, contrast, and CTA prominence during implementation.

This is a source-code audit, not a claim that every page has been visually or functionally tested in a browser.

## 2. Existing service inventory

The current detail data contains these service pages:

| Service | Current detail slug | Directory status |
|---|---|---|
| Web Development | `web-development` | Listed |
| App Development | `app-development` | Listed |
| UI/UX Designing | `ui-ux-designing` | Listed |
| Technology Consulting | `technology-consulting` | Slug mismatch / not listed under same name |
| Content Writing | `content-writing` | Listed |
| Product Development | `product-development` | Listed |
| Email Marketing | `email-marketing` | Listed |
| Digital Marketing & SEO | `digital-marketing-seo` | Listed |
| Quality Assurance | `quality-assurance` | Listed |
| AI Solutions & Integration | `ai-solutions` | Missing from directory |
| AI Chatbot Development | `ai-chatbot-development` | Missing from directory |
| Data Science & Analytics | `data-science-analytics` | Missing from directory |

The directory also contains `consulting-assurance`, which currently has no matching detail-data entry. Resolve the naming decision before publishing the corrected navigation.

## 3. Recommended service information architecture

### A. Fix and improve existing pages first

**P0 — route and conversion correctness**
- Reconcile Consulting & Assurance vs Technology Consulting; use one canonical slug in directory, detail data, sitemap, breadcrumbs, related-service links, and blog associations.
- Fix the invalid directory CTA to a real contact/enquiry route.
- Add the three AI/data service pages to the directory using the same service source of truth as detail pages.
- Create a single service registry (or derive directory cards from the existing detail registry) to prevent the list and detail datasets drifting apart.
- Confirm unknown slugs return 404 and only published service slugs enter the sitemap.

**P1 — service-page conversion quality**
Use a consistent, service-specific page structure:
1. Breadcrumbs: Home → Services → Current service.
2. Hero: clear service outcome, audience/problem, short specific explanation, primary “Discuss your project” CTA and secondary relevant CTA.
3. Scope/capabilities: 4–8 concrete deliverables rather than generic statements.
4. Problems solved / use cases: grounded in likely buyer needs.
5. Delivery process: discovery, scope, implementation, QA/review, handover/support as applicable.
6. Technology/integration details only when confirmed by the team.
7. Verified work, case studies, or demonstrable examples; omit the section or label examples clearly if proof is not available.
8. Service-specific FAQs.
9. Related services.
10. Latest articles for this service.
11. Strong final enquiry CTA with a clear next step.

Keep the layout shared, but put all headings, descriptions, deliverables, FAQs, related service slugs, CTA copy, and proof references in structured per-service data. Do not reuse generic copy that says the same thing on every service.

**P2 — content and SEO quality**
- Unique title, meta description, canonical URL, H1, useful page copy, and meaningful image alt text for each page.
- Add breadcrumb structured data and relevant service/organization structured data where it accurately reflects the page; validate output before release.
- Use descriptive internal anchor text and links to relevant case studies, industries, products, and blog posts.
- Add related-services links based on genuine capability relationships, not a repeated link dump.
- Review page speed, mobile layout, accessibility, and image loading.
- Avoid publishing unsupported metrics, certifications, guarantees, or client claims.

## 4. New service-page candidates

These are candidates to evaluate, not claims that the company currently offers every item. Prioritize based on actual delivery capability, portfolio proof, margin, and lead demand.

### Recommended first wave
1. **Cloud Solutions & DevOps** — cloud architecture/migration, deployment automation, CI/CD, monitoring, reliability and cost-awareness, only to the extent the team can deliver.
2. **E-commerce Development** — dedicated landing page if e-commerce projects are a meaningful lead source; explain platform options, catalog/checkout/integrations, analytics, maintenance, and scope boundaries.
3. **Website Maintenance & Support** — updates, performance, bug fixes, monitoring, backups and ongoing improvement; define response times and service levels only if the business can honor them.
4. **Custom Software & Business Automation** — business applications, API/system integration and workflow automation, with concrete examples of suitable projects.
5. **AI Automation & Agent Development** — separate from general AI integration if autonomous agents, tool integrations, evaluation, human approvals, and monitoring are services the team is ready to sell.

### Evaluate before adding
- Cybersecurity assessments and hardening (only with qualified staff, a defined scope, and clear boundaries around penetration testing/compliance claims).
- CRM/ERP implementation and integration (only for platforms the team supports).
- Conversion-rate optimization and analytics implementation (may be better as a sub-service of Digital Marketing & SEO initially).

Do not create thin pages simply to increase URL count. Each new page should have a distinct search intent, clear deliverables, internal links, FAQs, and a credible reason for a prospect to choose the service.

## 5. Service-specific blog plan

### Recommended model: explicit service association

Use an explicit association instead of relying only on a free-form tag:
- Add `serviceSlugs: string[]` to the Blog model, containing canonical service slugs.
- Add a multi-select “Related services” field to the admin blog form, sourced from the service registry.
- Validate submitted slugs against the registry on create/update; normalize values and reject unknown slugs.
- Query only active/published blogs whose `serviceSlugs` contains the current service slug, sorted by `updatedAt` or publication date as appropriate.
- Display 3–4 related articles on each service page, with title, summary, image, publish/updated date, and a descriptive “Read article” link.
- Provide a “View all [service] articles” link to a filtered archive such as `/blogs?service=web-development` or a dedicated route if that is more suitable to the current archive architecture.
- If no service-related posts exist, show an honest empty state/editorial CTA or omit the section; **do not substitute unrelated global posts**.
- Keep global `/blogs` and category/tag discovery working.

### Backfill and compatibility
- Initially support legacy posts through existing tags as a migration/backfill aid, but do not silently treat every blog as related.
- Prepare a report of service-tag matches and unmapped posts before migration. Map existing posts to services only where the content is genuinely relevant.
- Preserve existing blog URLs and canonical URLs.
- Align category form field names with the API and test create/edit flows for categories, tags, service associations, and active/inactive status.
- Do not auto-publish or auto-modify old posts just to populate every service page.

### Editorial workflow for fresh content
- Create an editorial calendar per service with topics for buyer questions, comparisons, implementation guides, common mistakes, checklists, maintenance, and use cases.
- Start with 3–5 useful topics per priority service; publish only when the article adds original, accurate value.
- Assign each post to one primary service and optionally other genuinely relevant services; avoid attaching every post to every service.
- Display real publication and updated dates. Update the displayed “updated” date only when substantive content changes.
- Track each service page’s related-post count and last published/updated article in a content checklist.
- Freshness comes from publishing relevant new material; do not alter timestamps or rotate unrelated posts to make a page look fresh.

## 6. Internal-linking map

- **Header/footer →** Services directory and key priority services.
- **Services directory →** every canonical service detail page, grouped by capability (Build, Design, Growth, AI & Data, Quality & Advisory) where the grouping is clear.
- **Each service detail →** Services directory breadcrumb, 2–4 relevant related services, relevant industries/products/case studies, 3–4 service-associated articles, and contact/enquiry CTA.
- **Blog article →** its primary related service page, relevant related articles, and contact CTA where natural.
- **Industry pages →** only services that are genuinely relevant to that industry.
- **Product pages →** relevant implementation services and related support pages.
- **Sitemap →** only canonical, valid service routes and active blog routes.
- Use normal crawlable links (not click-only cards), meaningful anchor text, and avoid circular or irrelevant cross-linking.

## 7. Delivery sequence

1. **Audit baseline & slug reconciliation** — confirm canonical service inventory; validate every directory link against detail data; fix broken CTA.
2. **Single service registry and directory refresh** — use one source of truth; add missing existing AI/data service cards; establish consistent grouping.
3. **Reusable service detail template** — improve semantic structure, CTA, process, related services, responsive behavior, and per-service copy.
4. **Blog-to-service association** — model, admin form, validation, query, related article component, filtered archive, legacy mapping, and no-unrelated-fallback behavior.
5. **Internal links and SEO** — breadcrumbs, metadata, structured data where appropriate, sitemap and canonical validation.
6. **Content gap review and first-wave new pages** — build only pages supported by business capability and proof.
7. **Validation** — production build; route/link checks; blog assignment/create/edit tests; responsive/accessibility review; sitemap/canonical checks. Broader security/integration testing remains deferred unless a critical issue appears.

## 8. Acceptance criteria

- Every service shown in the directory resolves to a matching detail page; no orphan detail page exists without an intentional discovery path.
- There is one canonical slug per service and the sitemap contains each valid service URL once.
- Every detail page has unique service-specific copy, clear CTAs, FAQs, and relevant internal links.
- Service-related blog cards only show posts explicitly associated with that service; zero-match pages never display unrelated articles.
- Admins can create/edit posts and reliably save categories, tags, service associations, and status.
- Blog links, filtered archive links, breadcrumbs, and service links resolve correctly.
- Production build and lint pass on the working branch; no merge or deployment happens without approval.

## 9. Immediate next task

Start with **Step 1: route inventory and slug reconciliation**, then make the service directory and detail data share a canonical service registry. Keep the work on `audit/site-revamp-plan`; do not merge into `master` or deploy without explicit approval.
