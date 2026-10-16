# Scope Re-Review

**Review date:** 2026-10-15  
**Review point:** Planning scope expanded to include engineering rules, homepage keyword inventory, keyword landing pages, US local SEO, and route-level risks found during mapping  
**Result:** The expanded scope is aligned with the user's requirements, subject to the safeguards below. Application implementation and production release remain separate gated steps.

## User requirements to preserve

| Requirement | How this plan satisfies it | Status |
|---|---|---|
| Preserve current design | Existing layout, colors, typography, component composition, and visual identity remain protected | Confirmed |
| Improve functionality and lead capture | Contact reliability, CTA paths, internal links, and conversion measurement are in scope | In scope |
| Address low traffic | Technical SEO, metadata, indexing, keyword mapping, and a measurable baseline are included | In scope |
| Keep all work off `master` | All changes target `audit/site-revamp-plan`; no `master` commits | Active guardrail |
| Document analysis in Markdown | Audit, scope, tasks, tests, development rules, keyword inventory/map, local SEO plan, and this review are tracked in docs | In progress |
| Set component/file size rules | 200–300 line target, split guidance, and documented exceptions above 300 lines | Added to [DEVELOPMENT-RULES.md](./DEVELOPMENT-RULES.md) |
| Audit homepage tags/keywords | Initial source inventory recorded; dynamic/live terms, destination verification, keyword demand, and final URL mapping remain | In progress; see [HOMEPAGE-KEYWORD-INVENTORY.md](./HOMEPAGE-KEYWORD-INVENTORY.md) |
| Dedicated page per keyword | Create pages for each approved distinct intent not adequately served by an existing route; cluster synonyms and avoid duplicate-intent pages | In scope; final list pending |
| Focus local SEO on USA and cities | USA is the primary market; city pages require genuine service relevance and useful unique content | In scope; city research pending |
| Review scope again | Explicit exclusions, dependencies, and release gates are recorded here | Complete for this planning pass |

## Scope boundary check

### Included
- Evidence-based source audit, route inventory, and live SEO checks.
- Lead form reliability and tracking.
- Audit of relevant homepage tags, labels, topics, technologies, industries, and keyword-bearing content.
- Keyword clustering and dedicated landing pages for approved distinct search intents.
- USA-focused SEO and carefully justified city-specific pages.
- Component/file-size review and maintainability improvements where useful.
- Accessibility, responsiveness, performance, and regression tests.
- Content changes supported by accurate business facts and owner verification.
- Audit and repair of existing dynamic product/industry routes and metadata where evidence supports a defect.

### Excluded
- New visual redesign or wholesale layout/brand changes.
- Unapproved paid tools, marketing spend, secrets/configuration changes, or new third-party services.
- Fabricated testimonials, case studies, metrics, certifications, office addresses, local staff, or business presence.
- Automatically generating a page for every US city or every text token regardless of search intent/content value.
- Thin/near-duplicate keyword or city doorway pages.
- Production deployment or merging to `master` without separate approval.

## New route-level findings to account for

1. **Product routes:** `src/app/(default)/products/[products]/page.tsx` does not pass the slug to `ProductERP`; the component appears to render one shared product page regardless of slug. Resolve product-page behavior before creating additional product URLs.
2. **Industry metadata:** `src/app/(default)/industries/[industriesdetail]/page.tsx` has no route-specific metadata export in the inspected source. Validate live behavior and add accurate metadata as appropriate.
3. **Industry slugs:** Some existing slugs are long or inconsistent (including an underscore and a likely typo). Do not change URLs until backlinks, canonicals, redirects, and current indexed URLs are checked.
4. **Service metadata:** Service detail metadata description is set to the service title alone. Create unique descriptions only after confirming actual page content and service scope.
5. **Homepage links:** Multiple `href="#!" ` placeholders were found in service/solution tabs. Audit destinations before adding pages to avoid broken or misleading internal links.

## Key risks and dependencies

1. **Search data:** Without Search Console/Analytics, prioritization must be provisional and cannot claim measured search demand or city-level conversion performance.
2. **Business facts:** Owner confirmation is needed for priority services, ideal US customers, remote/on-site delivery, supported cities, and any claims or proof points.
3. **Content quality:** A page count cannot be responsibly finalized before the actual homepage inventory and intent clustering.
4. **Local SEO accuracy:** City targeting must not imply a physical location or LocalBusiness eligibility that does not exist.
5. **External delivery services:** End-to-end contact tests need safe email/HubSpot configuration and test data.
6. **Design preservation:** Any visual change must be limited to a functional/accessibility fix; larger changes require approval.
7. **SEO uncertainty:** Technical and content work can support discoverability but cannot guarantee rankings, traffic, or leads.
8. **Component-size target:** The 200–300 line rule is a maintainability guideline, not a reason to create artificial file fragmentation. Document exceptions above 300 lines.

## Release gate

Before any merge or production deployment:
- All P0 acceptance criteria must pass or have an explicit owner waiver.
- Keyword and location pages must be checked for distinct intent, truthful content, canonical/indexability, internal links, and sitemap behavior.
- Product route behavior must be resolved; no duplicate product pages may be published unintentionally.
- Build and applicable tests must be recorded.
- Remaining known issues must be listed.
- The diff must be checked for scope creep and visual regressions.
- Owner approval must be obtained.
- `master` and production must remain unchanged until that approval.

**Conclusion:** The expanded plan covers homepage keyword discovery, dedicated intent-led landing pages, US-focused local SEO, maintainability, and route-level SEO risks without authorizing a redesign or premature production changes.


## User-requested route and service updates (2026-10-15)

The owner requested these preferred industry slugs:
- `/industries/revolutionizing-healthcare-through-innovative-solutions` → `/industries/healthcare-solutions`
- `/industries/empowering-education-and-impactful-philanthropy` → `/industries/education`
- `/industries/strategic-marketing-advertising-solutions` → `/industries/advertising-industry`
- `/industries/elevating-media-entertainment-xperiences` → `/industries/media-entertainment`

Implementation must preserve the old URLs with permanent redirects (unless evidence shows an existing redirect/canonical strategy that should be retained), update slug-driven data and internal links, and verify canonical tags and sitemap output. This is not complete merely because the plan records the mapping.

For `/services/consulting-assurance`, the combined title is unclear and may overlap with the existing Quality Assurance service. Recommended replacement title is **Technology Consulting**, with `/services/technology-consulting` as a candidate canonical route. Validate the page's actual scope before changing the slug; retain a redirect from the old route.

New service candidates to evaluate and add with distinct useful content: **AI Solutions & Integration**, **AI Chatbot Development**, and **Data Science & Analytics**. **Prompt Engineering** should initially be covered within the AI Solutions page unless it is confirmed as a separately sold service with enough distinct content to merit its own landing page. Avoid unverified claims about AI capabilities, model providers, integrations, security/compliance, or results.

Status: documented only at this review point; no application code, redirects, service pages, tests, `master`, or production have been changed by this update.


## Implementation checkpoint — 2026-10-15

The initial implementation now includes the requested canonical industry slugs and legacy redirects, the Technology Consulting title/route with legacy redirect, three AI/data service pages, homepage discovery links, and route metadata. Static source inspection confirms the expected route strings and data registration are present. Build/lint/tests and live URL/SEO validation remain outstanding; do not treat this as release-ready. The working branch remains separate from `master` and production.
