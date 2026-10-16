# Website Revamp Scope

## Goal

Improve organic discovery and qualified lead capture for The Tech Makers, with the United States as the primary target market and relevant US cities considered where justified, while preserving the current visual design.

## In scope

### 1. Audit and baseline
- Inventory public routes, page templates, key internal links, and CTAs.
- Review existing form and API behavior.
- Record SEO, accessibility, performance, and analytics checks.
- Establish a baseline from Search Console/Analytics if access and data are available.
- Audit every relevant homepage tag, service/topic label, keyword-bearing heading, link, and section; record exact text and source component.

### 2. Lead capture and reliability
- Make the existing contact form resilient to network errors and API failures.
- Prevent duplicate submissions and provide clear accessible pending/success/error states.
- Verify server-side validation and reCAPTCHA behavior.
- Verify email/CRM delivery outcomes and add tests for failure paths.
- Audit existing click-to-call, email, WhatsApp, and booking actions; implement only the actions that fit the current design and business workflow.
- Do not introduce a new CRM or paid service without owner approval.

### 3. Technical SEO
- Create a route inventory and assign a clear search intent to priority pages.
- Improve unique page titles and descriptions using accurate claims.
- Verify canonical tags, robots directives, sitemap, redirects, indexability, heading hierarchy, breadcrumbs, and internal links.
- Add or correct structured data only where the content qualifies and data is accurate.
- Improve image alt text and performance where needed without changing visual presentation.

### 4. Keyword mapping and landing pages
- Inventory the relevant tags and terms currently available on the homepage and its composed sections.
- Map each term to an existing route, an approved new landing page, a merged synonym/intent cluster, or a documented exclusion.
- Plan a dedicated landing page for each approved, distinct keyword intent that is not already adequately served by an existing page.
- Assign one primary target URL per search intent; consolidate synonyms and avoid cannibalization.
- Create useful, unique content and metadata for each approved landing page using reusable templates and the existing design system.
- Audit internal links and navigation so new pages are discoverable.
- Do not publish thin, near-identical pages or fabricate capabilities, results, clients, certifications, or testimonials.

### 5. USA-focused local SEO
- Treat the USA as the primary target market.
- Research and prioritize US cities using actual business priorities, service capability, Search Console/Analytics evidence where available, and realistic commercial relevance.
- Create city-specific landing pages only when the business can truthfully serve the location and the page can provide useful, distinct information.
- Accurately distinguish remote service availability from physical office/in-person presence. Do not invent local addresses, offices, staff, reviews, or LocalBusiness eligibility.
- Add relevant local intent to metadata, content, internal links, sitemap, and structured data only when accurate and appropriate.
- Avoid mass-generated doorway pages.

### 6. Content and navigation functionality
- Ensure service, solution, industry, blog, and portfolio cards lead to relevant details.
- Link case studies and blog posts to appropriate service pages and enquiry paths.
- Reuse existing templates/components where possible.
- Flag questionable claims or placeholder content for owner verification rather than inventing replacements.

### 7. Maintainability rules
- Follow [DEVELOPMENT-RULES.md](./DEVELOPMENT-RULES.md): target 200–300 lines or fewer per component/file, review at 200 lines, and split cohesive responsibilities when files exceed 300 lines.
- Document exceptions above 300 lines with the reason and follow-up trigger.
- Preserve clarity; do not split files artificially or add unnecessary dependencies solely to satisfy line counts.

### 8. Measurement and QA
- Verify analytics events for contact submissions and existing contact actions.
- Document event names and expected triggers.
- Test responsive behavior, navigation, forms, accessibility basics, build, lint, keyword landing pages, metadata, internal links, and relevant automated tests.
- Maintain a task log and record evidence for completion.

## Explicitly out of scope unless separately approved

- Full visual redesign, new brand identity, color/font replacement, or wholesale layout changes.
- Changing production environment variables, API keys, passwords, or other secrets.
- Replacing the current CRM, email provider, analytics provider, hosting, or framework.
- Paid advertising campaign execution or marketing spend.
- Fabricating testimonials, client logos, project metrics, certifications, local offices, or performance promises.
- Bulk publishing low-value city pages or near-duplicate keyword pages without an approved keyword map and useful distinct content.
- Large-scale new content writing without an agreed target page/keyword plan and owner verification of factual claims.
- Database/schema migrations or new account/user-facing products unrelated to lead generation.
- Merging to `master`, changing `master`, or deploying to production without separate approval.

## Definition of done

A task is complete only when:
1. The code/documentation change is on the approved working branch.
2. Acceptance criteria are met.
3. Relevant tests have been run and results recorded.
4. Any untested behavior or external dependency is clearly marked.
5. Existing design is preserved.
6. New pages have distinct intent, useful truthful content, unique metadata, valid internal links, and correct indexability/canonical behavior.
7. City pages reflect actual service capability and do not imply a nonexistent physical presence.
8. No changes were made to `master` or production.
9. The scope re-review confirms no unauthorized expansion.

## Key dependencies / access needed

- Repository access (available).
- Local runtime or CI capable of running install/build/lint/tests.
- Production read-only access or a reliable public crawl for live route checks.
- Google Search Console and Analytics access for real query, country/city, traffic, and lead baselines (optional for code audit; required for a data-backed diagnosis).
- Safe test recipient / HubSpot test environment for end-to-end lead-delivery tests.
- Owner confirmation of priority services, ideal US customer profiles, delivery model (remote/on-site), supported cities, and factual claims.
