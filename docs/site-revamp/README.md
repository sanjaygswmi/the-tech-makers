# The Tech Makers — Website Revamp Plan

**Repository:** `the-tech-makers/the-tech-makers`  
**Website:** https://www.thetechmakers.com  
**Working branch:** `audit/site-revamp-plan`  
**Baseline branch:** `master`  
**Status:** Audit/planning plus initial route/service implementation on the isolated branch; build and QA validation pending.

## Objective

Increase relevant organic traffic and qualified enquiries while preserving the current site's visual design. Improve functionality, lead capture, technical SEO, keyword landing pages, USA-focused local SEO, and measurement—not introduce a new visual design.

## Documents

- [Initial code audit](./AUDIT.md) — verified source observations and checks still pending.
- [Scope and acceptance criteria](./SCOPE.md) — included work, exclusions, and dependencies.
- [Task tracker](./TASKS.md) — status, priority, dependencies, and evidence.
- [Test plan](./TEST-PLAN.md) — required validation and execution status.
- [Development rules](./DEVELOPMENT-RULES.md) — component/file size target and engineering checklist.
- [Homepage keyword inventory](./HOMEPAGE-KEYWORD-INVENTORY.md) — initial source-based inventory of homepage service, solution, technology, and industry terms.
- [Keyword-to-URL map](./KEYWORD-TO-URL-MAP.md) — provisional keyword clusters mapped to existing service/industry routes or candidate landing pages.
- [Keyword and local SEO plan](./KEYWORD-AND-LOCAL-SEO-PLAN.md) — keyword clustering, dedicated landing pages, and US city targeting.
- [Scope re-review](./SCOPE-REVIEW.md) — checks requirements and prevents scope creep.
- [Content strategy & service documentation](./content-strategy/README.md) — consolidated home for the former `ai-docs/` blog, service-page, and category/tag planning documents.

## Current status

| Workstream | Status | Evidence |
|---|---|---|
| Isolated working branch | Complete | `audit/site-revamp-plan` created from `master` |
| Initial source inspection | In progress | Homepage, service routes, industry data, product route, contact form/API, and metadata inspected |
| Planning and rules docs | In progress | Audit, scope, task, test, development-rule, keyword inventory/map, and local SEO docs |
| Initial homepage term inventory | In progress | [HOMEPAGE-KEYWORD-INVENTORY.md](./HOMEPAGE-KEYWORD-INVENTORY.md); live/dynamic data and demand research remain |
| Provisional keyword mapping | In progress | [KEYWORD-TO-URL-MAP.md](./KEYWORD-TO-URL-MAP.md); exact product mapping and live route validation remain |
| US city/keyword research | Not started | Candidate metros are for research only; city-page creation is not approved |
| Live crawl / route inventory | In progress | Route patterns and service/industry slugs inspected; HTTP/canonical/indexability checks remain |
| Local build, lint, and tests | Not run | No local checkout/test execution in this pass |
| Application implementation | Not started | No runtime/app files changed by this documentation pass |
| Production deployment | Not authorized / not started | No production deployment will be triggered by this work |

## Safety and engineering rules

1. Do not commit to or modify `master`.
2. Keep revamp work on `audit/site-revamp-plan` or a separately agreed child branch.
3. Preserve the existing visual design, brand styling, and overall page composition.
4. Follow [development rules](./DEVELOPMENT-RULES.md), including the 200–300 line component/file target and documented exceptions.
5. Do not change production configuration, secrets, analytics IDs, or external integrations without evidence and approval.
6. Do not mark a task complete without test evidence or an explicit reason it cannot be tested.
7. Never fabricate testimonials, client names, project outcomes, traffic numbers, certifications, local offices, or SEO performance claims.
8. Build keyword and city pages around distinct search intent and useful, truthful content; avoid thin/doorway pages and near-duplicate pages.
9. Do not merge or deploy until review and acceptance criteria are satisfied.


## Latest implementation checkpoint — 2026-10-15

The four requested industry slugs and permanent redirects have been added; the consulting service is now titled Technology Consulting with a legacy redirect; three initial AI/data service pages and homepage links have been added; service and industry metadata were improved. See [INDUSTRY-URL-AND-AI-SERVICE-PLAN.md](./INDUSTRY-URL-AND-AI-SERVICE-PLAN.md) and [TASKS.md](./TASKS.md). No build, lint, automated test, browser, sitemap, canonical, or live redirect validation has been run yet. `master` and production remain unchanged.


## Content strategy documentation consolidation — 2026-10-16

The former `ai-docs/` documents have been moved into [content-strategy/](./content-strategy/README.md), under this documentation tree. The six source files were checked against their new copies before the old paths were removed. The former `ai-docs/tasks.md` was renamed to `ADMIN-CATEGORY-TAG-IMPLEMENTATION-GUIDE.md` because its content is a category/tag implementation guide, not the main task tracker. The canonical task tracker remains [TASKS.md](./TASKS.md).
