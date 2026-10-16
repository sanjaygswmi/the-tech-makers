# Website Revamp Task Tracker

Statuses: **Done**, **In progress**, **Blocked**, **Not started**, **Not run**. A task cannot be marked Done without evidence. Planning documents are not evidence that the corresponding site implementation or live tests have passed.

| ID | Task | Priority | Status | Acceptance / evidence |
|---|---|---:|---|---|
| T-001 | Create isolated branch from `master` | P0 | Done | Branch `audit/site-revamp-plan` exists; no app code changed |
| T-002 | Inspect app routes and key contact code | P0 | Done | Route structure, homepage composition, contact form/API, and metadata reviewed |
| T-003 | Document scope and exclusions | P0 | Done | See [SCOPE.md](./SCOPE.md) |
| T-004 | Document initial code findings | P0 | Done | See [AUDIT.md](./AUDIT.md) |
| T-005 | Complete public URL/route inventory | P0 | In progress | Source-derived static, service, industry, product, blog, redirect, sitemap, and robots inventory recorded in [ROUTE-INVENTORY.md](./ROUTE-INVENTORY.md); live HTTP status, canonical, indexability, CTA, and browser crawl remain pending |
| T-006 | Verify current technical SEO baseline | P0 | In progress | Source-level robots/sitemap/canonical/redirect inventory recorded in [ROUTE-INVENTORY.md](./ROUTE-INVENTORY.md); generated responses and rendered canonical/indexability checks remain pending |
| T-007 | Verify traffic and lead baseline | P1 | Blocked on data access | Search Console/Analytics baseline recorded, or explicitly marked unavailable |
| T-008 | Fix API success semantics for email/CRM failure | P0 | In progress | API attempts both channels independently, reports success only when at least one channel confirms capture, and returns an error if both fail; runtime failure-matrix tests pending |
| T-009 | Improve contact form pending/error/success behavior | P0 | In progress | Added pending state, duplicate-submit guard, response validation, inline accessible feedback, reCAPTCHA reset, and development-only localhost bypass. User reports the footer form appears to work locally; full repository tests, cross-provider failure tests, and production/non-local reCAPTCHA checks remain pending. |
| T-010 | Remove/fix unused undefined attachment handler | P2 | Not started | Dead code removed or file-upload flow fully implemented and tested |
| T-011 | Improve unique metadata for priority pages | P1 | In progress | Each priority route has unique accurate title/description; metadata checks pass |
| T-012 | Audit CTA and internal-link destinations | P1 | In progress | Fixed placeholder homepage tab links, stale service/industry menu and directory URLs, and placeholder portfolio detail links. Added AI/data services and missing industry links to both mega menus/footer; normalized key labels. Remaining: privacy policy destination and site-wide route/browser validation.
| T-013 | Verify call/email/WhatsApp actions | P1 | Not started | Mobile/desktop links verified; only existing or approved channels implemented |
| T-014 | Verify analytics conversion events | P1 | Not started | GTM preview/network evidence for expected events; no PII sent |
| T-015 | Accessibility and responsive checks | P1 | Not started | Keyboard/form feedback/mobile viewport checks recorded |
| T-016 | Performance review | P2 | Not started | Baseline report recorded; only material issues prioritized |
| T-017 | Run lint/build/automated tests | P0 | In progress | GitHub Actions run [38868865822](https://github.com/the-tech-makers/the-tech-makers/actions/runs/38868865822) on commit `5726249caf2b9cc9212a61fa9f6913b57e89f2f1` completed successfully: dependency install, security smoke tests, integration tests, lint, and production build all passed. Browser/live-route checks remain separate and pending. |
| T-018 | Final scope review | P0 | Not started | [SCOPE-REVIEW.md](./SCOPE-REVIEW.md) updated after implementation |
| T-019 | Prepare review summary / PR | P0 | Not started | Reviewable diff, tests, known risks, and no deployment |
| T-020 | Merge/deploy | — | Out of current scope | Requires explicit separate approval |
| T-021 | Inventory homepage tags and keyword-bearing content | P0 | In progress | Initial static inventory recorded in [HOMEPAGE-KEYWORD-INVENTORY.md](./HOMEPAGE-KEYWORD-INVENTORY.md); dynamic/live terms, destinations, and keyword mapping remain |
| T-022 | Cluster homepage terms by distinct search intent | P0 | In progress | Provisional cluster map recorded in [KEYWORD-TO-URL-MAP.md](./KEYWORD-TO-URL-MAP.md); demand, live routes, and owner confirmation remain |
| T-023 | Approve keyword landing-page list | P0 | Blocked on inventory/research | Page list includes intent, slug, unique value, priority, and owner-verified facts |
| T-024 | Implement approved keyword landing pages | P1 | Not started | Every approved distinct intent without a suitable page has useful unique content and metadata |
| T-025 | Research US target cities and customer intent | P1 | Not started | Candidate metros documented for research only; priority requires search/lead evidence |
| T-026 | Define US/local SEO page policy and service coverage | P0 | In progress | See [KEYWORD-AND-LOCAL-SEO-PLAN.md](./KEYWORD-AND-LOCAL-SEO-PLAN.md); owner must verify delivery model and cities |
| T-027 | Implement justified US city landing pages | P1 | Not started | Each page has distinct local value, truthful coverage, unique metadata, working links, and no doorway-page pattern |
| T-028 | Audit component/file line counts and refactor oversized files when touched | P2 | Not started | Review against [DEVELOPMENT-RULES.md](./DEVELOPMENT-RULES.md); document justified exceptions over 300 lines |
| T-029 | Validate landing pages, sitemap, canonicals, links, and analytics | P0 | Not run | Route crawl and relevant tests recorded; no duplicate intent or false local claims |
| T-030 | Update scope re-review for keyword/local SEO and engineering rules | P0 | In progress | Initial scope review complete; product-route finding and updated route evidence need inclusion |
| T-031 | Audit product slugs and repair product detail route behavior | P0 | In progress | ERP detail uses `/products/school-college-erp`; `/products/id` redirects there; other product cards route to contact until distinct detail content exists; duplicate metadata keys removed on 2026-10-16; runtime route and metadata tests pending |
| T-032 | Add route-specific metadata for industry detail pages | P1 | In progress | Unique accurate metadata for approved routes; canonical and redirect checks pass |
| T-033 | Validate service, industry, and product routes end-to-end | P0 | Not run | Route crawl checks status, rendered content, title/description, canonical, indexability, and CTA |
| T-034 | Migrate industry URLs to requested canonical slugs | P1 | In progress | Five migrations configured: four originally requested slugs plus `/industries/cloud_solutions_excellence` → `/industries/cloud-solutions`; verify internal links, canonical metadata, sitemap, and old/new route behavior |
| T-035 | Rename Consulting/Assurance service proposition | P1 | In progress | Recommended title: Technology Consulting; confirm content fits, then choose canonical slug and preserve old URL with redirect |
| T-036 | Define and implement AI-related service pages | P1 | In progress | Proposed AI Solutions, AI Chatbot Development, and Data Science & Analytics; Prompt Engineering starts as a section unless validated as a standalone commercial offer; owner-verify claims, unique content, metadata, links, and tests 
| T-038 | Audit and improve industry pages for content accuracy, intent, SEO/AEO/GEO; decide new verticals | P1 | In progress | See [INDUSTRY-PAGE-RECOMMENDATIONS.md](./INDUSTRY-PAGE-RECOMMENDATIONS.md). All 14 pages have 6 FAQs with matching FAQPage JSON-LD; 42 related-service links map to existing slugs. Static content review confirms distinct intent for Tech-Driven Consulting vs Technology Consulting and Advertising Industry vs Digital Marketing & SEO; specialist automotive, gaming, healthcare, insurance, manufacturing and media copy includes scope boundaries. Remaining: rendered/schema validation, owner review, Cloud route-intent decision, runtime QA and analytics evidence. CI run 38868865822 passed build, lint, integration and security smoke tests. |
| T-039 | Consolidate legacy `ai-docs/` into the main documentation tree | P1 | Done | Six legacy files moved without content loss to [content-strategy/](./content-strategy/README.md); misleading `tasks.md` renamed to `ADMIN-CATEGORY-TAG-IMPLEMENTATION-GUIDE.md`; index and main README updated; old `ai-docs/` files removed after content equality checks. Documentation-only change; application tests not applicable. |
| T-037 | Audit API authorization and sensitive response fields | P0 | In progress | Admin-only blog creation enforced; user-list response excludes credentials/reset secrets; category endpoints preserve middleware status; tag endpoints now preserve middleware 401/403/500 status handling; password-reset URL/HTTP errors hardened; blog image uploads use generated filenames, an image MIME allowlist, and a 5 MB limit; blog creation no longer logs authenticated user/blog documents; login endpoint rate limiting and body-size validation remain pending; runtime checks pending |

## Completion reporting format

For each task, record:
- Status and date.
- Files/routes affected.
- Test commands or manual steps.
- Expected vs actual result.
- Any known limitations.
- Reviewer/owner decision where required.


## Implementation update — 2026-10-15

Changes committed to `audit/site-revamp-plan` (not merged/deployed):
- Updated the four industry slugs and visible headings to the requested shorter versions.
- Added permanent redirects from all four legacy industry URLs.
- Changed the consulting service slug/title to `technology-consulting` / **Technology Consulting** and added a permanent redirect from `/services/consulting-assurance`.
- Added `ai-solutions`, `ai-chatbot-development`, and `data-science-analytics` service data in a separate file and registered these routes with the existing dynamic service page.
- Added a homepage AI & Data Services link group.
- Avoided displaying the existing generic web-stack/portfolio sections on the new AI/data pages because they would be misleading there.
- Added service metadata descriptions and industry route metadata.

**Validation status:** Static source review only. Build, lint, automated tests, browser checks, redirect status checks, sitemap/canonical checks, and live form checks have not been run. New service pages currently reuse the existing generic web banner asset; an AI-specific asset is not yet available and no visual redesign was made.


## Validation attempt — 2026-10-15

**Static source checks completed:** expected new industry slugs exist and are unique; old slugs are absent from industry data; each legacy path and target is present in the redirect configuration; Technology Consulting has the new slug and the old slug is absent from service data; all three AI/data service slugs exist without duplicates; homepage links to all three new services exist; service and industry metadata exports are present.

**Build/lint/tests not run:** attempted to clone the branch to a temporary local directory to run the project checks, but the environment could not resolve `github.com` (DNS/network unavailable). Therefore these static checks do not establish that the project compiles or that the routes render correctly. Next validation requires a working checkout or CI run; do not merge/deploy based only on these checks.


## Contact API delivery-contract update — 2026-10-15

**Status:** Implemented on `audit/site-revamp-plan`; runtime tests not run.

- Email and HubSpot delivery are now attempted independently using `Promise.allSettled`, so an exception in one provider does not prevent the other attempt.
- The API reports success only when at least one provider returns a successful result. If both fail, it returns HTTP 502 with a generic retry message.
- Failure logs identify only the affected channel and do not log submitted contact data or full provider response objects.
- **Remaining risk:** `addToContact` currently has internal paths that may report success despite partial HubSpot failures (for example, note creation/update result handling). That helper needs a separate focused audit before HubSpot success can be treated as fully reliable.
- Build, lint, and the provider failure matrix have not been run because a network-enabled checkout is unavailable in this environment.


## Contact form client-state update — 2026-10-15

- Added a disabled/pending submit state and guard against repeated submissions.
- Added inline status feedback for validation, provider/API errors, and successful submission using an `aria-live` status region.
- Checks `response.ok` and the API's `success` flag; handles non-JSON and network failures; resets reCAPTCHA after each attempted request.
- Removed the unused attachment handler that referenced undefined `setFile`; file uploads remain out of scope.
- Static review only; no browser, accessibility, or automated test has run.


## HubSpot helper reliability follow-up — 2026-10-15

- HubSpot contact-search API failures now propagate as a failed delivery instead of being mistaken for “no existing contact” (which could create duplicates).
- Contact updates must report success before the helper returns success; contact creation must return an ID.
- Note creation is treated as supplementary to lead capture, so a note failure does not negate a successfully created/updated contact.
- Removed an unused import and stopped logging the full failed create response object.
- **Not runtime-tested:** provider mocks and all create/update/search failure cases remain in the test plan.


## Product route implementation checkpoint — 2026-10-15

Changes committed to `audit/site-revamp-plan` only:
- `/products/school-college-erp` is the explicit canonical route for the existing School/College ERP detail template.
- `/products/id` permanently redirects to the canonical ERP route.
- The dynamic product route returns Next.js `notFound()` for unsupported product slugs instead of serving the same ERP page under arbitrary URLs.
- The product card for School/College ERP links to its detail page; the other product cards now link to `/contact` because dedicated detail content for those products does not exist in the inspected source. This avoids representing the ERP page as details for unrelated products.
- Added route-specific title and description for School/College ERP.

**Static review only:** verified the route guard, metadata strings, redirect entry, and product-card destination changes in source. Build, lint, browser, HTTP status, canonical/sitemap, and redirect behavior are not yet tested because the local clone was blocked by unavailable GitHub DNS. Task remains in progress until runtime validation and product-route inventory are completed.


## Homepage placeholder-link checkpoint — 2026-10-15

- Audited the product card inventory: only School/College ERP currently has an implemented detail template. The other 11 cards remain enquiry links until distinct product detail content is approved.
- Removed all `href="# !"` placeholders (literal value is `#!`) from `WhatWeDo/Tabs.tsx` and `Services/Tabs.tsx`.
- Feature/service chips that describe capabilities are now non-interactive styled spans, rather than fake links that jump to the top of the page.
- “View More Details” CTAs in the What We Do tabs now route to `/contact` as an explicit enquiry path. Dedicated detail routes should replace these only when matching content exists.
- Static source check only; visual regression and browser navigation tests are pending.


## Site-wide internal-link audit checkpoint — 2026-10-15

- Updated desktop mega-menu links to canonical `/services/technology-consulting`, `/industries/cloud-solutions`, `/industries/education`, `/industries/healthcare-solutions`, `/industries/advertising-industry`, and `/industries/media-entertainment` destinations.
- Updated the industry directory cards to use the new canonical industry slugs and absolute internal paths.
- Updated footer service and industry links, including the `/blogs` path and Email Marketing / Responsive Web Design destinations.
- Removed the fake `/our-work/id` links from generic “PROJECT NAME” portfolio placeholders; they are not yet backed by named project detail content.
- Removed inert social icon links where no verified destination is configured. Connected the footer Facebook icon to the already-used official Facebook profile.
- The footer Privacy Policy link now targets `/privacy-policy`, but that page still needs to be implemented/verified before release. The audit remains in progress; build, browser, and full route-crawl checks are not run.


### Follow-up: legal routes and final link checks — 2026-10-15
- Added public `/privacy-policy` and `/terms-and-conditions` pages and linked both from the footer. The wording is a starter draft and needs business/legal review before production publication, especially to confirm actual analytics, cookies, processors, retention practices, and applicable legal requirements.
- Static re-fetch confirms canonical industry slugs in both mega menus and industry cards; no legacy industry slugs or consulting slug remain in those components.
- The footer's only remaining hash link is inside a commented-out social icon block, not an active link.
- Full runtime validation remains pending.


## Technical SEO metadata checkpoint — 2026-10-15
- Added `metadataBase` for the public canonical domain `https://www.thetechmakers.com`.
- Added explicit homepage metadata and canonical URLs for priority static pages, service pages, industry pages, and the ERP product detail page.
- Added Next.js-generated `/sitemap.xml` covering verified static routes, registered service slugs, registered industry slugs, and the one implemented ERP detail page.
- Added Next.js-generated `/robots.txt` with a sitemap reference and disallow rules for admin/login paths.
- Service and industry detail routes now return `notFound()` for unknown slugs instead of serving generic detail-page content.
- Dynamic blog article URLs are not yet in the sitemap because their database-backed inventory has not been verified.
- Static source checks only; build, generated XML, robots response, canonical tags, and live route statuses remain unverified.


## Service/industry metadata and content audit — 2026-10-15
- Added distinct meta descriptions for all 9 core service records and added intent-focused titles plus descriptions for all 12 industry records.
- Reviewed the 3 AI/data service metadata descriptions already in place.
- Normalized legacy slash-separated service labels for Content Writing, Email Marketing, and Digital Marketing & SEO.
- Updated Technology Consulting intro/business copy to match the current service positioning instead of the former Consulting & Assurance wording.
- Created `docs/site-revamp/SERVICE-INDUSTRY-METADATA-AUDIT.md` with route-by-route content findings and next actions.
- Metadata source quality is improved; page content quality and runtime indexability remain pending validation.


## Service content consistency and industry differentiation checkpoint — 2026-10-15
- Restored the Web Development record's generic portfolio intro after an accidental mismatch during the consulting-copy edit.
- Hid generic portfolio sections on Technology Consulting because the current portfolio assets/copy do not establish relevant consulting case studies.
- Rewrote all 12 industry introductions to focus on plausible software and digital-workflow needs, with explicit qualification where specialised, safety-critical, clinical, or regulated capabilities need separate verification.
- Clarified the difference between the Technology Consulting service and the consulting-sector industry page, and between Advertising Industry software/workflow needs and the Digital Marketing & SEO service.
- No runtime validation performed; all new industry copy requires business-owner review for actual capability fit before publication.


## Technology Consulting content correction — 2026-10-15
- Replaced the legacy Consulting & Assurance service bullets with six scoped technology consulting topics: current-state assessment, requirements, architecture/options, roadmapping, solution evaluation, and delivery readiness.
- Replaced 20 legacy Consulting & Assurance FAQs with six questions relevant to software and technology planning, including an explicit clarification that legal/financial/independent audit assurance is not implied.
- Kept the generic portfolio sections suppressed on this route until relevant, approved case studies are available.
- Static source inspection only; validate syntax/build and obtain business-owner approval before publication.


## Dynamic blog SEO and indexability checkpoint — 2026-10-15
- Added a database helper to list active blog slugs and modification dates for sitemap generation.
- The sitemap now attempts to include active blog article URLs; if the database is temporarily unavailable, it retains the static and data-backed service/industry/product entries rather than failing the entire sitemap response.
- Public blog detail lookup now excludes inactive posts.
- Blog detail metadata now includes canonical URLs; missing or inactive slugs use Next.js not-found handling rather than rendering a custom “not found” page with HTTP 200.
- Database errors are rethrown rather than being silently converted to a 404. Runtime behavior remains unverified until build and database-backed route checks run.


## Blog publication visibility and admin API access — 2026-10-15
- Public blog list and tag queries now include only `status: "active"` posts, with pagination counts using the same filter.
- Added authentication checks to the administrative blog-list and blog-detail API GET handlers. The existing admin blog list/edit pages send the auth token; public article pages read published articles through the database helper.
- This closes an identified risk where inactive content could be included in public queries and admin API responses could be requested without the authentication check.
- Static source checks only. Confirm valid/invalid token behavior, admin list/edit functionality, public active-only visibility, and tag pagination in a runtime environment.


## Blog API and authentication hardening — 2026-10-15
- Added active-only filters to public blog listing/tag data helpers.
- Protected admin blog-list and detail API GET endpoints using the existing auth middleware.
- Updated auth middleware to accept either the HttpOnly token cookie or the existing `x-auth-token` header used by server-side admin page fetches.
- Removed the committed hardcoded JWT signing/verification secret fallback. Login and middleware now fail closed if `JWT_SECRET` is not configured.
- Removed login request-body and JWT-payload debug logging to avoid logging submitted credentials or token claims.
- **Deployment prerequisite:** verify a strong `JWT_SECRET` environment variable exists in every required environment before deploying these changes. Existing tokens signed with the old fallback will not validate after the secret changes; users may need to log in again.
- Runtime authentication tests and build remain pending.


## Admin role enforcement and user API correctness — 2026-10-15
- Authentication middleware now verifies the JWT, loads the current account from the database, rejects missing/soft-deleted accounts, and supports required roles.
- Blog, category, and tag management endpoints now require the admin role for administrative listing/detail and mutation actions. Public category/tag read endpoints remain available.
- User listing now requires admin; user profile APIs await authentication and Next.js route params correctly, restrict access to self/admin, and prevent non-admins from changing roles.
- Password updates through the profile PATCH endpoint now rely on the model's password-save hook (avoiding double hashing); direct reset writes continue to hash explicitly.
- Login excludes soft-deleted accounts.
- Runtime tests remain pending; verify admin and ordinary-user permissions, login/logout, profile updates, and content management before merge/deployment.


## Password reset flow repair — 2026-10-15
- Password reset requests now generate a cryptographically random token, persist only its bcrypt hash, and store a one-hour expiry.
- Reset requests return a generic response to avoid revealing whether an email address has an account.
- Reset completion validates the token and expiry, requires a password of at least eight characters, and invalidates the token after a successful change.
- Added a /reset-password page for requesting a reset email and setting a new password from the emailed link; added a link from the login screen.
- Runtime checks pending: verify email delivery, link URL configuration, expired/invalid/used token rejection, successful password change, and subsequent login.


## Admin metadata API exposure — 2026-10-15
- Category and tag detail APIs now require the admin role because they return editable metadata and script fields.
- Public category/tag list responses now select only listing fields and no longer expose headerScripts/bodyScripts.
- Confirm public pages still render category/tag listings and admin edit pages still load metadata after runtime testing.


## Next.js dynamic API route compatibility — 2026-10-15
- Category and tag dynamic API handlers now await the route params, matching the Next.js 15 route-handler contract.
- Verify category/tag detail loading, update, and delete actions in the admin UI after a build.
\n\n## API authorization audit — 2026-10-16\n\n**Status:** Partial source-level fixes committed to `audit/site-revamp-plan`; not merged or deployed.\n\n- Blog creation now explicitly requires the `admin` role, matching the existing admin-only blog listing and slug management routes.\n- Removed a redundant, un-awaited `auth(req)` call in the user-list endpoint; the endpoint already validates admin access with an awaited role check.\n- User-list responses now exclude `passwordResetToken` and `passwordResetExpires` as well as password fields.\n- Added `src/app/(auth)/reset-password/layout.tsx` with route-specific `noindex`, `nofollow`, and `noarchive` metadata. Static source check passed; rendered metadata still needs build/browser verification.
- Category create/update/delete endpoints now return the middleware's actual status and message (including 403/500) instead of forcing all authorization failures to 401.
- Tag create/update/delete endpoints now preserve middleware authorization status and message, including 401/403/500 responses.\n- Runtime/build/lint/browser tests remain unrun because this environment has not provided a working local checkout.\n

## Password-reset configuration and HTTP status follow-up — 2026-10-16

- Production reset requests now require `NEXT_PUBLIC_FRONTEND_URL`; the localhost fallback is limited to non-production environments.
- The configured reset URL is parsed and restricted to HTTPS in production (HTTP is allowed only outside production); embedded URL credentials are rejected.
- Invalid/expired reset tokens now return HTTP 400 consistently, and reset processing failures return HTTP 500 rather than defaulting to HTTP 200.
- Token expiry comparison now treats the exact expiry instant as expired.
- Static source review only. Verify missing/invalid production URL configuration, URL origin and reset link, invalid/expired/reused tokens, email-delivery failure, and successful password change in a test environment. Build/lint/runtime tests remain pending.


## Blog upload and reset-route security follow-up — 2026-10-16

- Blog create/update image uploads no longer use the submitted filename on disk. Filenames are generated with UUIDs, writes use exclusive creation, accepted MIME types are JPEG/PNG/WebP/GIF, and the maximum image size is 5 MB.
- Password-reset links require a configured HTTPS frontend origin in production, and invalid/expired reset tokens return proper HTTP 400 responses.
- Static source review only. Upload validation, malformed MIME/content, size boundaries, reset flow, and filesystem behavior need runtime tests. MIME declarations alone do not prove the uploaded bytes are a valid image.


## Password-reset enumeration follow-up — 2026-10-16

- Frontend URL configuration is validated before account lookup, so a missing/invalid setting does not create different responses for known and unknown addresses.
- Email delivery errors are logged generically and the public response remains the same as for an unknown address, preventing delivery failures from revealing account existence.
- Residual risk: public password-reset requests are not rate-limited in this route; confirm platform-level rate limiting or add an abuse-control mechanism before production.


## Contact API logging follow-up — 2026-10-16

- The contact route's top-level failure handler no longer logs the raw exception object; it logs a generic event to reduce the chance that submitted contact details or provider payloads reach application logs.


## Category upload and tag authorization follow-up — 2026-10-16

- Category create/update image uploads now use generated UUID filenames, allow only declared JPEG/PNG/WebP/GIF MIME types, enforce a 5 MB limit, and use exclusive file creation.
- Category update removes an old image only when its resolved path stays inside the category upload directory; missing old files no longer fail the update.
- Tag create/update/delete now preserve authentication middleware status and message rather than converting every failure to HTTP 401.
- Residual upload risk: declared MIME type is not proof of actual file content. Signature validation and runtime boundary tests remain open.
- Password-reset rate limiting remains open pending confirmation of platform-level abuse protection.


## API pagination validation — 2026-10-16

- Public category and tag listings and the admin blog listing now reject non-integer, zero, negative, and excessively large pagination values.
- Page must be a positive safe integer; limit must be an integer from 1 through 100. Defaults remain unchanged when parameters are omitted.
- This bounds database skip/limit work and avoids invalid pagination values being silently coerced.
- Runtime request tests and build/lint remain pending.


## User profile API input validation — 2026-10-16

- Added malformed-JSON/object checks and field validation to user PATCH and password-reset POST.
- Validate MongoDB user IDs before querying; deleted accounts are treated as not found by profile GET/PATCH and password-reset POST.
- PATCH accepts only known fields, validates email/phone/role, enforces password length of 8–128 characters, and maps schema/duplicate-key validation failures to HTTP 400.
- Password reset filters out soft-deleted accounts and runs update validators.
- Static source checks only; request-matrix, role-based authorization, duplicate email/phone, password hashing/login, build, and lint tests remain pending.


## Contact helper privacy follow-up — 2026-10-16

- Updated `src/utils/sendMail.js`: contact mail helper no longer returns raw SMTP provider response objects or exception details; it returns only a success flag.
- Attempted updates to the HubSpot helper and contact API were blocked and were not applied. The current branch should still be treated as needing review of HubSpot exception/provider-response logging and HTML escaping of contact values in email/HubSpot note content.
- Contact API input validation changes were not applied in this pass.
- **Rate limiting remains open:** no shared rate-limit store or provider was found in inspected dependencies/config. Avoid process-memory limits in serverless production; use an approved shared store or hosting-level controls before release.
- Static source review only; no build, lint, or provider/runtime tests were run.

## Upload signature validation — 2026-10-16

- Added byte-signature checks for JPEG, PNG, GIF, and WebP images to blog create/update and category create/update endpoints.
- Uploads are rejected with HTTP 400 when the file bytes do not match the declared MIME type. Existing 5 MB limits and generated filenames remain in place.
- Static source re-fetch confirms the checks are present. Build, lint, and upload tests with real/mismatched files have not run.

## Security work remaining before release

- Contact API field/type/length validation remains open; the attempted edit was blocked by the editing workflow and was not bypassed.
- HubSpot helper still needs a focused safe-logging and HTML-escaping review; a previous edit attempt was blocked and was not bypassed.
- No shared durable rate-limiting service is configured in the inspected project. Do not use a process-local limiter as a production substitute; choose/configure a durable provider or platform-level protection.
- Run a full build/lint/test pass and authentication, password-reset, upload-signature, contact delivery failure-matrix, and role-based access tests in a working checkout before merge/deployment. CI concurrency now avoids cancelling an in-progress verification run on each push; confirm a completed run before treating checks as passed.
- This branch remains isolated; no merge or deployment has occurred.



## Baseline security response headers — 2026-10-16

- Added site-wide Next.js response headers in `next.config.js`: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, and a restrictive `Permissions-Policy` disabling camera, microphone, and geolocation access.
- This is a baseline hardening layer, not a complete security policy. A Content Security Policy was not added because it needs a tested inventory of analytics, CAPTCHA, embeds, and other required origins to avoid breaking production functionality. HSTS was also left out until HTTPS/subdomain coverage is confirmed.
- Static source review only; inspect actual response headers and test contact/reCAPTCHA, analytics, admin pages, and any embedded content after a working build/deployment preview. No merge or deployment performed.


## Contact validation, HubSpot output safety, and durable rate limiting — 2026-10-16

**Implemented on `audit/site-revamp-plan`; not merged or deployed. Build/runtime tests remain pending.**

- Contact API: rejects malformed JSON, non-object bodies, oversized bodies (20 KiB), missing/invalid required strings, wrong field types (including null optional values), overlong fields, invalid email addresses, and invalid phone numbers before reCAPTCHA/provider calls. Field limits are explicit in `src/app/api/contact/route.js`.
- Contact abuse control: limits each client to 5 contact submissions per 10 minutes using the shared rate-limit helper.
- HubSpot helper: escapes both labels and values inserted into note HTML; removes raw exception/response logging; encodes contact IDs in request paths; validates that a HubSpot token is configured; retains generic, channel-level logs only.
- HubSpot provider calls now have a 10-second timeout to prevent contact submissions from hanging indefinitely while waiting on the external CRM. Timeout/failure behavior still needs runtime verification.
- SMTP transport now has explicit connection (10 s), greeting (10 s), and socket inactivity (20 s) timeouts to reduce the chance of email delivery hanging indefinitely. Runtime delivery checks remain pending.
- Password reset: adds shared rate limits of 5 reset requests per 15 minutes and 10 reset completions per 15 minutes, plus JSON/email/token/password length validation.
- Rate limiting: `src/utils/rateLimit.js` prefers atomic Redis Lua execution via Upstash REST and hashed client identifiers when `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are configured. These variables are optional. If Redis is not configured or unavailable, a bounded in-memory fixed-window fallback applies and logs one generic warning per process. The fallback is per process and does not coordinate limits across server instances/serverless invocations; a shared provider or hosting-level protection is recommended for stronger production coverage. Requests over the configured threshold return HTTP 429 with `Retry-After`; lack of Redis alone does not return HTTP 503.

**Validation status and release gate:** GitHub source files were re-fetched and nine static assertions passed for the validation, escaping, rate-limit configuration, headers, and documentation requirements. JavaScript syntax-only compilation checks passed for the four edited source modules and `next.config.js`. There is no repository lockfile or existing GitHub Actions workflow in this branch. A local clone/build attempt failed because the environment could not resolve `github.com`; therefore `npm run build`, lint, and runtime/security tests have **not** run. Before merge/deploy, configure Upstash and test malformed/oversized contact bodies, field types and length boundaries, email/phone validation, reCAPTCHA rejection, each contact-delivery failure combination, escaped HTML payloads, rate-limit thresholds/expiry, Redis timeout/unavailable behavior, and password-reset invalid/expired/reused tokens. Do not treat static checks as build or runtime evidence.


## Rate-limiting portability follow-up — 2026-10-16

- Upstash Redis configuration is optional so the application can be hosted without Redis. The limiter uses Redis when configured and falls back to a bounded in-memory fixed-window limiter when credentials are absent or Redis requests fail.
- The in-memory fallback logs a generic warning once per process and returns HTTP 429 when a limit is exceeded. Redis absence alone no longer blocks contact or password-reset requests with HTTP 503.
- Limitation: in-memory counts are not shared between instances and may reset when a process restarts or serverless instance changes. Use a shared Redis provider or hosting-level rate limiting when coordinated limits are required.
- Static source inspection only; build, lint, and runtime threshold/fallback tests remain pending.


## Security verification harness — 2026-10-16

- Added Node's built-in test-runner smoke tests for the optional in-memory rate-limit fallback, threshold and `Retry-After` behavior, client/namespace isolation, Redis failure fallback, hashed client identifiers, and source-level guards for contact validation, auth/roles, password-reset token lifecycle, image signatures, HTML escaping, and response headers.
- Added `.github/workflows/security-checks.yml` for the isolated `audit/site-revamp-plan` branch and future pull requests targeting `master`. It installs dependencies, runs security smoke tests, lint, and a production build. It does not deploy.
- Added `npm test` / `npm run test:security` scripts.
- Password-reset POST and PATCH now reject request bodies larger than 8 KiB before JSON parsing (content-length pre-check plus actual UTF-8 byte-count check); the smoke suite asserts this guard exists. Runtime route tests remain pending.
- **Verification status: partial.** CI passed security smoke tests, lint, and the production build on the earlier branch commit. The integration test step has now been added to CI and its latest run is pending. Source-level assertions are not substitutes for live browser checks.
- Still required before merge/deploy: confirm CI dependency installation, test, lint, and build results; run endpoint tests against a disposable database and mocked email/HubSpot/reCAPTCHA providers; verify required production secrets and hosting proxy/IP-header behavior; test real security headers and browser compatibility. CSP/HSTS remain intentionally unconfigured pending deployment validation.


## Route inventory checkpoint — 2026-10-16

- Added [ROUTE-INVENTORY.md](./ROUTE-INVENTORY.md) covering sitemap-listed static routes, all 12 service routes, all 12 industry routes, the single implemented ERP product detail route, database-backed blog URLs, seven configured legacy redirects, and utility/API route handling.
- Recorded the source-defined sitemap and robots behavior plus the remaining live HTTP/rendered-page checks. The public inspection interface could not retrieve production `sitemap.xml` or `robots.txt`, so no live status or response content is claimed.
- During route review, found and removed duplicate `alternates` and `robots` keys in the School/College ERP page metadata object. This is a source correction only; build validation has not run.
- **Still pending:** actual crawl of status/redirect chain/title/description/canonical/robots/H1/indexability/CTA/sitemap membership, unknown-slug 404 behavior, database-backed blog visibility, and browser checks. T-005/T-006 remain in progress.

- Additional source review found duplicate `Metadata` imports and duplicate `metadata` declarations in the homepage route; removed the duplicates on 2026-10-16. A follow-up scan of the 15 known route/config files found one metadata declaration per static route and metadata generators on the service/industry dynamic routes. This remains a source check, not a build result.


## Authentication and sensitive-log audit — 2026-10-16

- Removed blog creation logs that included the authenticated user object and full newly created blog document. Failure logs are now generic.
- Hardened login endpoint on 2026-10-16: applies shared rate limiting (10 attempts per 15 minutes), rejects oversized bodies (8 KiB), malformed/non-object JSON, invalid email shapes, and non-string/overlong passwords before database lookup; database failures now use generic logging. Static source inspection only. CI, lint/build, runtime rate-limit thresholds, proxy/IP-header behavior, and authentication regression tests remain pending.
- Existing shared rate limiter has a process-local fallback when Upstash is not configured; on serverless/multi-instance hosting, that fallback does not provide a globally coordinated limit.


## Industry page Phase 1 — 2026-10-16

- Corrected the Cloud Solutions service list: removed copied automotive services and replaced them with cloud/application planning topics aligned to the page introduction. Updated the heading to **Cloud Application & Platform Solutions** without changing the existing route.
- Corrected the Education service list: removed donor management, fundraising, volunteer management, grant management, and nonprofit CRM items. Replaced them with education-focused platform and workflow topics; no separate nonprofit page was created.
- Narrowed the Automobile, Gaming, Healthcare, Insurance, Manufacturing, and Media & Entertainment service lists to more general web, portal, workflow, integration, and reporting use cases. This reduces unsupported implications around safety-critical automotive software, game-engine delivery, clinical systems, insurance decisioning, industrial control/MES/PLM, streaming/DRM, and broadcast infrastructure.
- These are source-content corrections, not confirmation that every listed service has been delivered before. Service/capability owner review is still required before publication.
- **Validation pending:** build/lint, rendered-page review, route/canonical/redirect checks, responsive layout, links/CTA, schema, and live crawl have not run in this pass. No merge or deployment performed.

## Industry page Phase 2 — 2026-10-16

- Homepage industry labels now link to registered industry routes only; Sports remains non-clickable pending capability validation; Travel & Hospitality and Logistics & Supply Chain now link to their dedicated pages. Visible labels and the section heading/copy were normalized.
- Reviewed the shared industry template. The generic client-logo carousel, shared blog/project showcase, and generic testimonials are commented out rather than deleted, preserving them for future reuse. Re-enable selectively when relevant content is approved.
- Replaced unrelated payment-processing copy in the shared “Why Choose” section and fixed the dead industry CTA to route to /contact.
- Added visible use-case and FAQ content for Real Estate, Education, E-commerce, Manufacturing, and Healthcare. Answers qualify integrations and sensitive-sector requirements rather than promising universal compatibility or compliance.
- Refined service lists on Real Estate, E-commerce, and Technology & Consulting pages to improve industry-vs-service intent separation.
- Researched new-page candidates using the first-party homepage and public market examples. Added dedicated Travel & Hospitality and Logistics & Supply Chain pages based on owner-confirmed delivery experience: hotel management, hotel search/bookings, flight booking and travel websites (including highplaces.co.uk, pedalnation.co.uk and tttexpeditions.com); inventory management, the Intargos shipping aggregator, and e-commerce shipping plugins/apps for shipping partners. Competitor/category presence was not treated as demand proof. No Search Console, Analytics, CRM or keyword-volume data was available.
- Validation update: prior CI run passed security smoke tests, lint, and production build. Added `npm run test:integrations` to the branch workflow; latest run pending. Static checks confirmed 14 unique industry slugs, complete industry metadata, all contextual service links resolve to registered service slugs, and travel/logistics image assets exist. Public browser fetch could not verify the new routes or sitemap, and these pages are not deployed.
- Owner review still needed: review the new Travel & Hospitality and Logistics & Supply Chain pages when live; verify exact integration/provider claims; approve client logos/testimonials/case studies by industry. No new pages beyond these evidence-backed additions should be created without further research.
- Validation pending: no build, lint, unit tests, browser checks, runtime route/canonical/sitemap crawl, accessibility review, or live analytics test has run. No merge/deployment performed.

- Added contextual links from the five priority industry pages to existing service detail routes. Static source check confirmed every referenced service slug exists in `servicedata.js`.


## Site-revamp branch integration update — 2026-10-16

- Contact form local reCAPTCHA bypass is restricted to NODE_ENV=development and localhost/loopback hostnames; production and non-local requests still verify the token.
- HubSpot lookup now uses email as the primary identity; new and repeat submissions receive notes with submitted details, and note failures are treated as CRM-channel failures.
- API preserves independent lead-capture behavior: it attempts HubSpot and admin email even if one channel fails, returns success if at least one channel confirms capture, and returns 502 only if both channels fail. Email subject is selected from the HubSpot action when available.
- User manually checked the footer form and reports it appears to work. This is a positive manual check, not a full end-to-end or production verification.
- Industry data, navigation and documentation changes are tracked in INDUSTRY-PAGE-RECOMMENDATIONS.md. Static checks passed; build/lint/tests and rendered/runtime checks remain pending.
- PR #2 (feature/site-revamp-industry-contact-integration → audit/site-revamp-plan) was squash-merged as 19421bec4ceda35f5a9553fc6fb66be707b78110. The older, diverged draft PR #1 was closed to avoid duplicate review paths. master and production remain untouched; no deployment occurred.


## Documentation folder consolidation — 2026-10-16

- Moved the six files formerly under `ai-docs/` to `docs/site-revamp/content-strategy/`; preserved source contents exactly and verified each new file against its original before deleting the original path.
- Renamed the former `ai-docs/tasks.md` to `ADMIN-CATEGORY-TAG-IMPLEMENTATION-GUIDE.md` because the document describes admin category/tag implementation and is not the site-revamp task tracker.
- Added a content-strategy index and links from the site-revamp README. The canonical tracker remains `docs/site-revamp/TASKS.md`.
- This is a documentation-only consolidation. No application code, `master`, or production deployment was changed.


## Industry page Phase 3 — 2026-10-16

- Audited the 14 registered industry slugs against the shared guidance map. Found seven pages without dedicated use cases, FAQs, or contextual service links: Automobile, Cloud Solutions, Gaming, Tech-Driven Consulting, Insurance, Advertising, and Media & Entertainment.
- Added audience-specific use cases, three FAQs per missing page, and links to existing service routes. The content qualifies platform/API dependencies and avoids implying unverified specialist capability in automotive safety systems, game-engine/multiplayer delivery, insurance compliance, or broadcast/DRM systems.
- Post-change static verification: all 14 industry slugs now have guidance entries; no extra guidance keys; all contextual service slugs resolve to registered service records; 42 FAQs are defined across the guidance map.
- Latest GitHub Actions run for branch head `c3374d94e5fd83445640a656bb9d1cba1cf433b6` passed: https://github.com/the-tech-makers/the-tech-makers/actions/runs/38863311485. This run predates the latest guidance-content commit, so the new commit still needs its own CI result.
- Remaining next: review cloud and Technology & Consulting intent overlap with their service pages; review e-commerce overlap; then run the branch CI on the new commit and proceed to runtime route/canonical/sitemap/browser validation. No merge or deployment performed.


- Follow-up audit correction: the Cloud page heading/title now describes cloud application and platform solutions; the consulting-industry title and description now target software needs of consulting firms rather than repeating the Technology Consulting service intent. The Advertising page's service list now describes agency workflows and integrations instead of implying a catalogue of proprietary ad-tech/marketing products.
- Recheck after those content edits: 14 unique slugs, 14 unique meta titles, 14 unique meta descriptions, all descriptions under 160 characters, 42 FAQ questions, no duplicate service labels within an industry record, and all related service slugs resolve. Latest CI for the content edits is pending.


## Service/industry overlap and structured data — 2026-10-16

- Kept all industry routes. Source review found no dedicated Cloud, E-commerce, or Advertising service slug; these should not be removed or redirected merely because adjacent service pages discuss related capabilities.
- Clarified intent separation: Cloud industry title/description focuses on cloud application and platform project needs; the consulting-industry page targets software used by consulting firms, while Technology Consulting targets advisory, assessment, and planning; the E-commerce industry page focuses on commerce-specific workflows, while Web Development remains the broader website/web-app service; Advertising focuses on agency workflows, while Digital Marketing & SEO describes marketing services.
- Added eight curated FAQs for each of the 12 service detail pages (9 core services plus 3 AI services). The shared FAQ accordion now renders all eight questions by default, and its data is the same source used for the FAQPage JSON-LD.
- Added structured data: sitewide Organization and WebSite; service pages include Service, BreadcrumbList, and FAQPage; industry pages include BreadcrumbList and FAQPage. JSON-LD text is escaped before insertion. Provider, logo, canonical URLs, breadcrumbs, and FAQ content use existing verified site information.
- Static verification: 12 service FAQ maps × 8 questions = 96; all service slugs have matching FAQ data; no repeated question within a service; 14 industry routes remain; service and industry FAQ schema use their rendered FAQ data. Source inspection only; CI/build and rich-results/schema validation are still pending.
- Other schema opportunities to assess separately: BlogPosting on each individual published blog (if author/date/image/content fields are reliably available), and Product schema only for genuine product detail pages with accurate product data. Do not add LocalBusiness, ratings/reviews, pricing/offers, or SearchAction without verifiable business details, genuine reviews/prices, or a real site-search feature.
- SEO caveat: Google deprecated FAQ rich results on May 7, 2026, and removed the feature documentation in June 2026. Keep FAQPage only as semantic schema for the real on-page Q&A; do not expect FAQ dropdowns in Google Search or claim a ranking benefit. Google’s [Search documentation updates](https://developers.google.com/search/updates) records this change.
- No merge or deployment performed.


## Industry FAQ expansion — 2026-10-16

**Status:** Implemented on `audit/site-revamp-plan`; no merge or deployment.

- Expanded `src/components/IndustriDetail/IndustryGuidance.tsx` from 3 to 6 industry-specific FAQs for each of 14 industry pages (42 additional questions; 84 visible FAQ entries total).
- Kept FAQPage JSON-LD generated from the same `content.faqs` array rendered in the accordion, so structured data and visible FAQ content share a single source.
- Static source validation: 14 industry data slugs match 14 guidance entries; every page has 6 FAQs; no duplicate questions found; all 42 related-service links map to registered service slugs.
- **Not run:** local lint/build/test suite, rendered HTML/schema validation, browser/responsive checks, live redirects, canonical and sitemap HTTP checks. These remain required before calling the task fully validated.

**Next industry-page task:** Run end-to-end route/SEO validation for all 14 industry routes: response status, rendered title/description, canonical, indexability, visible FAQ versus FAQPage JSON-LD, sitemap inclusion, internal links, and legacy redirect destinations. Resolve any failures before further content expansion. The Cloud Solutions page's classification as a service/industry route remains an owner decision, not an automatic redirect.


## Industry route SEO source audit — 2026-10-16

**Status:** Static source checks completed; runtime checks still pending.

- Confirmed 14 industry slugs are unique and all 14 records have distinct metadata titles and descriptions.
- Confirmed the dynamic industry route defines route-specific title/description, canonical metadata, notFound() handling for unknown slugs, and BreadcrumbList structured data.
- Confirmed sitemap generation includes all industry records from industries_data.
- Confirmed all five configured legacy industry redirects target current industry slugs.
- **Not established by these checks:** production HTTP status, redirect status/chain, rendered metadata or schema, actual sitemap response, mobile/browser behavior, and indexability. The available GitHub workflow lookup returned no PR-triggered run for the documentation commit, so no build/test pass is claimed.

**Next action remains:** execute the production build and route-level QA against a working checkout or preview, recording each route's HTTP status, title, description, canonical, robots/indexability, FAQ visibility/schema, sitemap inclusion, and legacy redirect result. Then fix any failures found.


## Industry route validation follow-up — 2026-10-16

**CI evidence:** GitHub Actions run [38868865822](https://github.com/the-tech-makers/the-tech-makers/actions/runs/38868865822), commit `5726249caf2b9cc9212a61fa9f6913b57e89f2f1`, completed successfully. Dependency installation, security smoke tests, integration tests, lint, and production build passed.

**Still not verified:** This CI result does not prove live route HTTP responses, rendered FAQPage JSON-LD, canonical tags, sitemap output, or redirect status codes. Live/browser QA remains pending until a preview deployment is accessible.

**Next industry content pass:** Review intent differentiation for (1) Technology Consulting service vs. Tech-Driven Consulting industry and (2) Digital Marketing & SEO service vs. Advertising Industry. Preserve both page types only where the industry page clearly serves sector-specific software/workflow needs and the service page describes the cross-industry service. Do not invent business capabilities or remove either route without a reasoned SEO/UX decision.


## Industry page implementation follow-up — 2026-10-16

- Qualified four visible service-list labels in industries_data.js: Education LMS/SIS items now describe project-scoped implementation/integration and workflows; Healthcare mobile and integration items now describe patient-facing/administrative experiences and feasibility-scoped system integration.
- This is a content-accuracy improvement, not verification of specialist credentials, compliance, or provider compatibility.
- Still pending: rendered-page/internal-link review and route-level SEO/browser validation for all 14 industry routes once a preview or working checkout is accessible. Do not claim runtime validation from static edits.
- No merge or deployment performed.

## Homepage hero and industry navigation follow-up — 2026-10-16

- Updated the homepage hero to use a single descriptive H1: “Web & Software Development for Growing Businesses”; removed the previous empty hidden H1.
- Replaced the homepage “Let’s meet on G-meet” placeholder `href="#"` with the contact route (`/contact`).
- Added direct directory navigation from each industry detail page to `/industries` and `/services`, retaining related-service links and the contact CTA.
- Static validation confirmed all six distinct service slugs used by industry guidance are present in the current service data.
- Commits: [industry directory links](https://github.com/the-tech-makers/the-tech-makers/commit/2c71af74fe5a3728d9f8332864f7eb1e38efb140) and [homepage hero/CTA](https://github.com/the-tech-makers/the-tech-makers/commit/235f94ad34acce679cb6442defcd681b373aba57).
- CI passed for the industry navigation commit in [run 38872092175](https://github.com/the-tech-makers/the-tech-makers/actions/runs/38872092175). CI for the latest homepage change is pending at the time of this note.
- Still pending: end-to-end URL/redirect/canonical/sitemap checks, rendered schema verification, responsive/browser QA, and homepage keyword-to-URL implementation for solution terms without a suitable landing page. No merge or deployment performed.


## LMS landing page implementation — 2026-10-16

- Added the `/services/learning-management-system` service route through the existing data-driven service route, including a unique metadata description, Service/BreadcrumbList/FAQPage JSON-LD, and nine project-scoped FAQs.
- Added LMS-specific sections for learning journeys, roles and access, progress/assessment/reporting, responsive experience, content migration, and integration/rollout planning. Content explicitly avoids implying a proprietary ready-made LMS or guaranteed compatibility with third-party systems.
- Added tailored hero/business copy, typical project deliverables, related links to existing web/app/UI/UX/QA/consulting services, and suppressed generic portfolio sections on this page.
- Changed the homepage Learning Management System tab’s “View More Details” CTA to link to the new landing page.
- Sitemap already derives service URLs from `servicedata`, so no sitemap source change was required.
- Static source checks are being performed; build, lint, browser rendering, generated sitemap/canonical, and live HTTP checks remain pending until CI/preview is available. No merge or deployment performed.
