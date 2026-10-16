# Website Revamp Test Plan

**Current execution status:** Planning only. No local build, lint, browser, crawl, or end-to-end test has been run in this pass.

## A. Repository and change-safety checks

- [ ] Confirm working branch is `audit/site-revamp-plan`.
- [ ] Confirm all changes are confined to that branch.
- [ ] Confirm `master` has no new commits from this work.
- [ ] Review changed-file list; planning-only commits must not alter app/runtime files.

## B. Build, static checks, and maintainability

Run in a local checkout or CI environment after code changes:
- [ ] Install dependencies using the repository's lockfile and supported package manager.
- [ ] Run the configured lint command and record any existing script/tool incompatibility.
- [ ] Run `npm run build`.
- [ ] Run available automated tests; add targeted tests for contact API/form behavior where coverage is absent.
- [ ] Do not perform broad dependency upgrades solely to silence non-blocking warnings.
- [ ] Review component/file line counts against [DEVELOPMENT-RULES.md](./DEVELOPMENT-RULES.md).
- [ ] Split oversized files when it improves cohesion; document exceptions above 300 lines.
- [ ] Confirm refactoring has not changed rendered behavior, responsive layouts, or analytics triggers.

## C. Contact form and API

Test both client and API behavior with a safe test environment:
- [ ] Required fields missing -> clear validation; API returns 4xx.
- [ ] Invalid email/phone input -> clear validation and API rejects invalid data.
- [ ] Missing/invalid reCAPTCHA -> rejected safely.
- [ ] Valid submission and both downstream providers succeed -> one clear success state.
- [ ] Email provider fails while HubSpot succeeds -> API returns success and logs email-channel failure only.
- [ ] HubSpot fails while email succeeds -> API returns success and logs HubSpot-channel failure only.
- [ ] Both downstream providers fail/reject -> API returns HTTP 502 and a generic retry message.
- [ ] Verify HubSpot search HTTP failure returns failure and does not create a duplicate contact.
- [ ] Verify HubSpot create must return a contact ID and update must succeed before lead capture reports success.
- [ ] Verify note creation failure does not undo a successfully created/updated contact; confirm this matches the team's lead-capture policy.
- [ ] Network timeout/non-JSON/5xx -> readable inline error and retry path.
- [ ] Double click/repeated submit -> submit button disables and duplicate submit is guarded.
- [ ] Success and error messages are announced through an accessible status region; reCAPTCHA resets after an attempt.
- [ ] Sensitive values and personal data are not written to logs or analytics.
- [ ] Keyboard and screen-reader users can identify field errors and submission status.

## D. Technical SEO and route inventory

- [ ] Crawl public routes and record HTTP status.
- [ ] Confirm canonical URL behavior and redirects.
- [ ] Check title and description uniqueness on priority pages.
- [ ] Check indexability and robots directives.
- [ ] Check sitemap validity and that intended canonical URLs are included.
- [ ] Check broken internal links and orphaned priority pages.
- [ ] Validate structured data only where used and supported by page content.
- [ ] Verify 404 handling and that important pages do not accidentally return soft 404s.

## E. Homepage keyword inventory and landing pages

- [ ] Inspect every homepage section/component and record all relevant visible tags, labels, service names, headings, link anchors, and keyword-bearing terms.
- [ ] Record exact source component, existing destination, likely intent, and proposed action for each term.
- [ ] Cluster synonyms and overlapping terms; assign one primary URL per distinct intent unless a documented distinction justifies multiple URLs.
- [ ] Confirm every approved keyword cluster has a suitable existing page or an approved new landing page.
- [ ] Check new landing pages for genuinely useful, unique copy—not only swapped city/keyword names.
- [ ] Confirm each page has a unique accurate title, description, H1, canonical, CTA, and relevant internal links.
- [ ] Confirm intended pages are indexable and included in the sitemap; non-canonical/duplicate variants are handled appropriately.
- [ ] Verify navigation, breadcrumb, card, and contextual links lead to the correct destinations.
- [ ] Confirm page layout reuses the existing design system and introduces no unapproved redesign.

## F. USA and city-level local SEO

- [ ] Record the USA as the primary market and document the evidence/assumptions behind city priorities.
- [ ] Confirm owner-approved service priorities, delivery model, and cities actually served.
- [ ] Verify city pages provide distinct useful information and do not merely swap city names in a template.
- [ ] Check that copy does not imply an office, address, staff, in-person service, or local listing eligibility that does not exist.
- [ ] Check city-page metadata, canonical, indexability, sitemap inclusion, internal links, and CTA.
- [ ] Use local structured data only when accurate and eligible; validate it against visible content.
- [ ] Track US organic visits and qualified leads separately where analytics configuration permits; do not treat rankings as guaranteed outcomes.

## G. Existing dynamic service, industry, and product routes

- [ ] Check all nine service slugs resolve to the intended service data and unique content.
- [ ] Verify service titles/descriptions are unique, accurate, and not just the service title repeated.
- [ ] Check each industry slug resolves to the matching record; verify unique metadata and canonical behavior.
- [ ] Check product URLs with different slugs render their intended distinct product content or deliberately redirect/noindex.
- [ ] Confirm unknown slugs return a real 404 rather than a generic page with HTTP 200.
- [ ] Check any slug changes for redirects, internal links, sitemap updates, and existing backlinks.
- [ ] Confirm product pages are not duplicated or indexed with identical generic content.

## H. UX, responsive, and accessibility

- [ ] Check key templates at narrow mobile, tablet, and desktop widths.
- [ ] Check navigation menus, accordions, buttons, forms, and CTAs by keyboard and touch.
- [ ] Check visible focus, labels, validation feedback, contrast, and meaningful image alt text.
- [ ] Verify no layout shifts or overflow introduced by changes.
- [ ] Confirm existing visual design, spacing system, colors, typography, and composition remain intact.

## I. Analytics

- [ ] Confirm GTM loads once on intended pages.
- [ ] Confirm a successful form submission fires exactly one conversion event.
- [ ] Confirm failed form submissions do not fire the success event.
- [ ] Verify click-to-call, email, WhatsApp, and booking events if those links exist.
- [ ] Confirm analytics events contain no names, email addresses, phone numbers, message text, or other personal data.
- [ ] Record event name, trigger, and test evidence.
- [ ] Verify landing-page and location reporting without collecting or sending unnecessary personal data.

## J. Release checks

- [ ] All P0 tasks are Done or explicitly waived by the owner.
- [ ] No known false-success lead path remains.
- [ ] Build and required checks pass.
- [ ] Keyword and local SEO scope has been re-reviewed.
- [ ] Diff has been reviewed for scope creep and visual regressions.
- [ ] No merge or production deployment occurs without separate approval.


## Results for route/service implementation (2026-10-15)

| Check | Result | Evidence / limitation |
|---|---|---|
| Requested industry slugs present and unique in data | Passed static check | Inspected `industries_data.js` |
| Old industry slugs absent from data | Passed static check | Redirect targets and canonical slugs checked separately |
| Legacy redirect source/target pairs present | Passed static check | Inspected `next.config.js`; actual HTTP redirect behavior not tested |
| Technology Consulting slug registered | Passed static check | Inspected service data |
| Three AI/data service records registered and unique | Passed static check | Inspected AI data and merged service export |
| Homepage links to new service routes | Passed static check | Inspected homepage services component |
| Route metadata exports present | Passed static check | Inspected dynamic service and industry route files |
| Build / lint / automated tests | Not run | Local clone attempt blocked because `github.com` could not be resolved in this environment |
| Browser rendering / HTTP status / canonical / sitemap | Not run | Requires local checkout, CI, or accessible deployment; production must not be used to validate unmerged code |

Static checks are not a substitute for build and route QA. Run `npm run build`, `npm run lint` (confirm compatibility with the repository's Next.js version), any available tests, and direct route/redirect/canonical checks in a network-enabled checkout before review or release.


## Additional industry URL migration — 2026-10-15

| Check | Result | Evidence / limitation |
|---|---|---|
| Cloud canonical slug is `cloud-solutions` in industry data | Passed static check | Inspected `industries_data.js` on `audit/site-revamp-plan` |
| Legacy cloud slug redirects to `/industries/cloud-solutions` | Passed static configuration check | Redirect entry exists in `next.config.js`; HTTP 308 behavior not tested |
| Cloud canonical route, sitemap, and internal links | Not run | Requires route crawl/runtime validation |


## Product route implementation — 2026-10-15

| Check | Result | Evidence / limitation |
|---|---|---|
| Canonical ERP route accepts only `school-college-erp` | Passed static source check | Dynamic page awaits Next.js 15 `params`, calls `notFound()` for other slugs, and renders ERP template for the canonical slug |
| `/products/id` permanent redirect configured | Passed static configuration check | Entry exists in `next.config.js`; HTTP response not tested |
| ERP title and description configured | Passed static source check | Route exports metadata; browser-rendered head not verified |
| Product card destinations no longer all point to ERP | Passed static source check | School/College ERP points to its detail route; other cards point to `/contact` pending unique product pages |
| Build, lint, browser, 404 and redirect status | Not run | Requires network-enabled checkout or CI; do not infer success from source inspection |


## Homepage placeholder-link cleanup — 2026-10-15

| Check | Result | Evidence / limitation |
|---|---|---|
| `WhatWeDo/Tabs.tsx` contains no `href="#!"` placeholders | Passed static source check | 100 feature chips are non-interactive spans; 10 “View More Details” CTAs route to `/contact` |
| `Services/Tabs.tsx` contains no `href="#!"` placeholders | Passed static source check | 35 feature chips are non-interactive spans; the existing tab headings still control tab state |
| Product inventory mapped to existing detail content | Passed source inventory | Only School/College ERP has a dedicated detail route; 11 other product cards route to contact |
| Browser styling, keyboard behavior, and CTA navigation | Not run | Requires a working checkout/build or browser test environment |


## Site-wide internal-link audit checkpoint — 2026-10-15

| Check | Result | Notes |
|---|---|---|
| Canonical service and industry links in mega menus | Passed static source check | Updated both menu components, including legacy consulting and industry slugs |
| Industry directory cards | Passed static source check | All cards use canonical absolute paths |
| Footer service, industry, and blog links | Passed static source check | Repaired stale slugs and relative `blogs` path; Privacy Policy destination still requires a page |
| Placeholder portfolio detail links | Passed static source check | Removed generic `/our-work/id` links from cards labeled “PROJECT NAME” |
| Social icons with unknown destinations | Passed static source check | Removed inert hash links; verified Facebook profile reused from existing footer link |
| Runtime route status, visual regression, keyboard and mobile navigation | Not run | Requires build/browser validation |


## Legal routes and final static checks — 2026-10-15

| Check | Result | Notes |
|---|---|---|
| `/privacy-policy` route source exists | Passed static source check | Public page with metadata and footer link; policy content requires business/legal review |
| `/terms-and-conditions` route source exists | Passed static source check | Public page with metadata and footer link; terms content requires business/legal review |
| Industry cards and mega menus use canonical slugs | Passed static source check | No legacy slugs remain in these three components |
| Footer has active placeholder hash links | Passed static source check | Remaining `href="#"` occurrence is in a commented-out block |
| TypeScript/Next build and browser route tests | Not run | Environment checkout/network limitation; do not treat static checks as runtime validation |


## Technical SEO metadata checkpoint — 2026-10-15

| Check | Result | Evidence / limitation |
|---|---|---|
| Root metadata defines canonical site origin | Passed static source check | `metadataBase` points to `https://www.thetechmakers.com` |
| Priority static pages have descriptions and canonical paths | Passed static source check | Home, About, Contact, Careers, Services, Industries, Products, and Blogs |
| Service and industry detail routes have canonical paths | Passed static source check | Canonical URL metadata added to dynamic route metadata |
| Unknown service and industry slugs return not-found | Passed static source check | `notFound()` guards added to metadata and page paths |
| ERP product detail has canonical metadata | Passed static source check | Only the implemented ERP detail page is included |
| Generated sitemap source covers known static/service/industry/product routes | Passed source review | XML response and duplicate URLs not runtime-tested |
| Generated robots source references sitemap and blocks admin/login | Passed source review | HTTP response and robots semantics not runtime-tested |
| Dynamic blog article sitemap coverage | Pending | Need verify safe source for database-backed article inventory |
| Build, metadata rendering, crawl, HTTP status and redirect tests | Not run | Requires checkout/CI/browser access |


### Static source verification summary — 2026-10-15
- Re-fetched the current branch files after implementation.
- Confirmed canonical metadata on homepage, priority static pages, legal pages, service/industry detail pages, and the ERP product route.
- Confirmed service and industry unknown-slug guards call `notFound()`.
- Confirmed the sitemap imports the merged service export (9 core service records plus 3 AI/data records), all 12 industry records, the legal pages, and the canonical ERP route.
- Confirmed the robots source references `/sitemap.xml` and disallows `/admin` and `/login`.
- **Runtime checks still pending:** Next build, lint, generated XML output, robots HTTP response, rendered canonical tags, redirects, and live route status.


## Service/industry metadata audit — 2026-10-15
- Static check: all 9 core service records have unique non-empty meta descriptions shorter than 160 characters.
- Static check: all 12 industry records have unique meta titles under 60 characters and unique non-empty meta descriptions shorter than 160 characters.
- Reviewed the 3 AI/data service descriptions; no empty metadata found.
- Static check: service and industry route metadata includes canonical paths and unknown slugs call `notFound()`.
- Content audit findings and route-by-route follow-up are documented in `docs/site-revamp/SERVICE-INDUSTRY-METADATA-AUDIT.md`.
- Pending: build/lint, rendered metadata crawl, sitemap/robots HTTP checks, redirects, live status codes, Search Console inspection, and owner approval of service/industry capability claims.


## Industry content differentiation — 2026-10-15

| Check | Result | Notes |
|---|---|---|
| All 12 industry introductions rewritten from generic sector overview to software/digital workflow focus | Passed static source check | Reviewed the 12 slug/introduction records in `industries_data.js` |
| Specialised claims qualified instead of implied | Passed source review | Vehicle safety systems, clinical/regulatory scope, industrial control, game infrastructure, and platform integrations explicitly require confirmation |
| Technology Consulting portfolio sections hidden where unrelated | Passed static source check | Service detail template now suppresses generic MarketProven/WeShare blocks for this slug |
| Web Development portfolio copy remains aligned to Web Development | Passed static source check | Restored after a mistaken cross-record edit |
| Business-owner review, build, lint, rendered content and route tests | Pending | Copy is not runtime-validated or approved for publication |


## Technology Consulting copy validation — 2026-10-15

| Check | Result | Notes |
|---|---|---|
| Legacy Consulting & Assurance FAQ questions removed from the Technology Consulting record | Passed static source check | Replaced with six relevant questions |
| Technology Consulting service topics match current page positioning | Passed source review | Six topics on assessment, requirements, architecture/options, roadmap, evaluation, and delivery readiness |
| Unrelated portfolio blocks hidden on Technology Consulting | Passed static source check | Requires browser confirmation of rendered layout |
| Industry introductions rewritten | Passed static source check | All 12 records have distinct, scoped introductions |
| JavaScript/Next build, lint and rendered page validation | Pending | Not run in this environment |


## Dynamic blog sitemap and 404 handling — 2026-10-15

| Check | Result | Notes |
|---|---|---|
| Sitemap queries active blog slugs and updated timestamps | Passed static source check | Database helper filters `status: "active"` |
| Sitemap keeps static entries if blog database lookup fails | Passed source review | Runtime fallback not exercised |
| Blog detail canonical metadata | Passed static source check | `/blogs/{slug}` |
| Missing/inactive blog uses real not-found handling | Passed static source check | Uses `notFound()`; database errors are rethrown rather than disguised as missing posts |
| Database connectivity, generated XML, live HTTP status, build and lint | Pending | Requires a working runtime with the project environment |


## Blog visibility and API authentication — 2026-10-15

| Check | Result | Notes |
|---|---|---|
| Public blog listing helper filters active posts | Passed static source check | Pagination total uses the same active filter |
| Tag-based blog helper filters active posts | Passed static source check | Tag-specific count uses the same active filter |
| Admin blog list API GET checks auth middleware | Passed static source check | Existing admin page sends `x-auth-token` |
| Admin blog detail API GET checks auth middleware | Passed static source check | Existing edit page sends `x-auth-token` |
| Valid/invalid token behavior and admin/public runtime tests | Pending | Requires app runtime and test credentials |


## Authentication hardening and blog admin API — 2026-10-15

| Check | Result | Notes |
|---|---|---|
| No hardcoded JWT secret fallback remains in login/auth middleware | Passed static source check | Requires configured `JWT_SECRET` |
| Missing JWT secret fails closed | Passed static source check | Runtime response not tested |
| Login request-body/JWT-payload logs removed | Passed static source check | Avoids logging credentials and claims |
| Auth middleware accepts cookie and `x-auth-token` | Passed static source check | Confirm both request modes in integration tests |
| Admin blog list/detail APIs require auth | Passed static source check | Verify valid and invalid token behavior |
| Vercel environment variables, login, admin pages, public blog routes, build/lint | Pending | Must be validated before merge/deploy |


## Role-based access control and user API checks — 2026-10-15

| Check | Result | Notes |
|---|---|---|
| Middleware validates token and reloads current user role | Passed static source check | Database-backed runtime behavior pending |
| Middleware rejects missing/soft-deleted accounts | Passed static source check | Test against real records |
| Required role argument returns access denied for non-admin | Passed static source check | Must verify with user/admin tokens |
| Blog/category/tag management handlers request admin role | Passed static source check | Public category/tag reads intentionally remain public |
| User listing requires admin | Passed static source check | Test 403 for regular user |
| User detail handlers await auth and route params | Passed static source check | Next.js runtime tests pending |
| User PATCH only allows self or admin; only admin can change role | Passed static source check | Test both roles |
| Password update avoids double hashing | Passed static source check | Confirm login with new password |
| Login rejects soft-deleted accounts | Passed static source check | Confirm account behavior |
| Build, lint, auth integration, admin/public route tests | Pending | No local dependency install or runtime available |


## Password reset flow — 2026-10-15

| Check | Result | Notes |
|---|---|---|
| Reset request stores only a hash of a random token | Passed static source check | Validate against a real database |
| One-hour expiry is stored and checked | Passed static source check | Test expired token |
| Reset token invalidated after successful password change | Passed static source check | Test one-time use |
| Reset page supports request and completion modes | Passed static source check | Confirm query string and API base in deployment |
| Login screen links to reset page | Passed static source check | Browser test pending |
| Email delivery, full reset, expired/invalid token, subsequent login | Pending | Requires configured email, database, and runtime |


## Category/tag metadata API access — 2026-10-15
| Check | Result | Notes |
|---|---|---|
| Category/tag detail APIs require admin | Passed static source check | Edit screens send x-auth-token |
| Public category/tag list excludes script fields | Passed static source check | Validate listing consumers in browser |
| Admin edit forms still receive script fields from detail APIs | Static route contract preserved | Runtime test pending |


## Dynamic API route params — 2026-10-15
| Check | Result | Notes |
|---|---|---|
| Category GET/PUT/DELETE await params | Passed static source check | Runtime route tests pending |
| Tag GET/PUT/DELETE await params | Passed static source check | Runtime route tests pending |


## API authorization follow-up — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| Blog creation requires admin role | Passed static source check | Verify 401 for anonymous, 403 for non-admin, and success for admin |
| User-list endpoint uses awaited admin authorization only | Passed static source check | Runtime request test pending |
| User-list response excludes password and reset-token fields | Passed static source check | Verify serialized API response in a safe test environment |
| Reset-password page emits route-specific noindex metadata | Passed static source check | New route-specific server layout exports `robots: { index: false, follow: false, noarchive: true }`; rendered metadata/build test pending |
| Category create/update/delete preserve middleware status codes | Passed static source check | Runtime checks for 401/403/500 pending |
| Tag create/update/delete preserve middleware status codes | Pending | Current handlers still force authorization failures to 401; attempted source update was blocked |
| Build, lint, auth integration, and endpoint regression tests | Pending | No local checkout/runtime validation available |


## Password-reset configuration and HTTP status follow-up — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| Production requires configured frontend URL for reset emails | Passed static source check | Missing URL returns a generic HTTP 500 response before a token is issued |
| Production reset URL must use HTTPS | Passed static source check | HTTP is permitted only outside production; URL credentials are rejected |
| Invalid/expired token response uses HTTP 400 | Passed static source check | Expiry boundary is inclusive |
| Unexpected reset completion failure uses HTTP 500 | Passed static source check | Previously JSON status values could be returned with default HTTP 200 |
| Missing/invalid URL, mail failure, token expiry/reuse, successful reset and subsequent login | Not run | Requires configured runtime, database, and email provider |


## Blog upload validation — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| Blog create/update use server-generated filenames | Passed static source check | User-supplied filenames are not used in filesystem paths |
| Upload MIME allowlist | Passed static source check | JPEG, PNG, WebP, GIF |
| Maximum blog image size | Passed static source check | 5 MB; runtime boundary tests pending |
| Exclusive file creation | Passed static source check | Uses `flag: "wx"` |
| File signature/content validation and upload behavior | Not run | MIME can be spoofed; verify with runtime tests and consider content sniffing before production |


## Password-reset account-enumeration checks — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| URL configuration checked before account lookup | Passed static source check | Missing/invalid configuration returns the same result regardless of account existence |
| Email-provider failure does not change public reset response | Passed static source check | Logs only a generic delivery failure |
| Existing vs. unknown address response equality in runtime | Not run | Test both cases against configured database/email provider |
| Public reset endpoint rate limiting | Open follow-up | No route-level rate limiting found in this audit |


## Contact API log privacy — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| Top-level contact handler does not log raw exception object | Passed static source check | Uses a generic failure log; provider channel logs remain generic |
| Verify provider libraries never log submitted fields | Not run | Review mail/HubSpot helpers and production logging configuration |


## Category upload and tag authorization — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| Category create uses generated filename and size/type allowlist | Passed static source check | JPEG/PNG/WebP/GIF declarations; 5 MB limit; exclusive file creation |
| Category update uses generated filename and size/type allowlist | Passed static source check | Old-file deletion restricted to resolved category upload directory |
| Tag create preserves middleware status | Passed static source check | Returns middleware-provided 401/403/500 |
| Tag update/delete preserve middleware status | Passed static source check | Both methods return middleware status and message |
| Actual file signature validation and upload boundary tests | Not run | MIME type can be spoofed; requires runtime validation |
| Password-reset endpoint abuse/rate limiting | Open follow-up | Verify hosting/platform protections or implement application-level rate limiting |


## API pagination validation — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| Category list rejects invalid page/limit | Passed static source check | Page positive safe integer; limit 1–100 |
| Tag list rejects invalid page/limit | Passed static source check | Page positive safe integer; limit 1–100 |
| Admin blog list rejects invalid page/limit | Passed static source check | Page positive safe integer; limit 1–100 |
| Runtime pagination request matrix | Not run | Exercise omitted, valid, zero, negative, decimal, non-numeric, and over-limit parameters |


## User profile API validation — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| User ID validation on GET/PATCH/password reset | Passed static source check | Invalid IDs return HTTP 400 before database query |
| Malformed JSON and non-object bodies | Passed static source check | PATCH and password reset return HTTP 400 |
| PATCH field allowlist and field validation | Passed static source check | Unknown fields rejected; email, phone, role, and password constraints checked |
| Deleted account behavior | Passed static source check | GET/PATCH/password reset filter soft-deleted users |
| Duplicate email/phone and schema validation failures | Passed static source check | Mapped to generic HTTP 400 response |
| Runtime API/auth/password-hashing tests, build and lint | Not run | Requires a working checkout and configured test environment |


## CI execution reliability follow-up — 2026-10-16

- Changed the security-check workflow concurrency setting to `cancel-in-progress: false`, so a new commit on the same branch does not cancel a running lint/build/security check midway through execution.
- The workflow runs on pushes to `audit/site-revamp-plan` and pull requests targeting `master`; it does not deploy.
- Result status for the latest workflow run must be checked after GitHub schedules and completes the job. This workflow configuration change itself is not evidence that tests pass.


## CI workflow contract smoke test — 2026-10-16

- Added a Node test asserting the security workflow does not cancel in-progress verification, includes security smoke tests/lint/build, and contains no deployment command.
- The assertion is committed but has not yet been observed passing in a completed GitHub Actions run.


## Login endpoint hardening — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| Login attempts use the shared rate limiter | Passed static source check | 10 requests per 15-minute window; HTTP 429 includes Retry-After |
| Login request body bounded | Passed static source check | 8 KiB content-length and actual UTF-8 byte checks before JSON parsing |
| Malformed/non-object JSON and invalid field types rejected | Passed static source check | Rejects invalid email format, email over 254 characters, empty password, and password over 1,024 characters |
| Database errors logged without raw exception details | Passed static source check | Generic server-side failure message only |
| Runtime login success/failure, rate-limit threshold/expiry, malformed-body matrix, and cookie behavior | Not run | Requires a working checkout, CI results, and a safe test database/provider setup |
| Shared limiter on production hosting | Not verified | Upstash should be configured for cross-instance limits; fallback remains per process. Confirm trusted proxy/IP-header behavior in the deployment environment |

Static source checks do not establish runtime correctness. Do not mark login hardening fully validated until the security workflow completes and endpoint tests pass.


## HubSpot provider timeout hardening — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| All HubSpot contacts/search/create/update and note requests use a shared bounded-time fetch wrapper | Passed static source inspection | Each provider request has a 10-second timeout and disables caching |
| Provider failures avoid logging submitted contact data or raw provider response bodies | Passed static source inspection | Generic channel logs; status codes are logged only for non-success create/update/note responses |
| HubSpot timeout, abort behavior, retry/partial-delivery behavior, and contact submission UX | Not run | Validate with mocked slow/aborted provider requests and verify the contact endpoint returns within its intended budget |
| HubSpot configuration and request compatibility in target Node runtime | Not verified | Requires dependency install/runtime test and configured integration or mocks |

Static inspection only; timeout behavior and full contact submission flow are not runtime-validated.


## Outbound email transport timeout hardening — 2026-10-16

| Check | Result | Notes |
|---|---|---|
| Contact and general SMTP transports set explicit connection/greeting/socket timeouts | Passed static source inspection | 10-second connection timeout, 10-second greeting timeout, 20-second socket inactivity timeout |
| Email delivery under SMTP timeout or unavailable provider | Not run | Exercise with a controlled SMTP mock or staging account; verify generic errors and contact API partial-delivery behavior |
| Runtime compatibility and lint/build | Not run | CI result and local runtime checks remain pending |

These transport limits bound connection establishment and socket inactivity; they are not a strict end-to-end deadline for the complete email operation.


## Site-revamp branch integration and industry verification — 2026-10-16

| Check | Result | Evidence / limitation |
|---|---|---|
| Local reCAPTCHA bypass restricted to development + localhost/loopback | Passed static source inspection | Client widget and API verification are bypassed only when NODE_ENV is development and hostname is localhost, 127.0.0.1 or ::1; production/non-local verification remains required |
| HubSpot contact identity | Passed static source inspection | Search uses email as the primary identity so phone changes do not create a duplicate |
| New/repeat submission note | Passed focused isolated harness previously | Four HubSpot integration tests passed in an isolated Node harness, not a full repository checkout; repeat notes include submitted details and note failures return a CRM-channel failure |
| API email/CRM partial delivery | Not run in full repository | Static inspection confirms both channels are attempted and a success response requires at least one successful capture channel; test email failure, HubSpot failure, and both failing in the complete app |
| Footer contact form | Manual check reported by user | User reports it appears to work locally; no independent browser session or production test performed |
| Industry data slugs and metadata fields | Passed static source check | 12 records, 12 unique slugs, and metadata fields present for all records |
| Industry menu/footer route coverage | Passed static source check | Each of two mega menus and footer contains 12 service and 12 industry links; route data was checked for matching slugs |
| Industry rendering, redirects, canonical, sitemap, responsive layout, accessibility, analytics | Not run | Requires full checkout/CI or a controlled preview deployment; do not use production to validate unmerged code |

### Required before closing P0 validation

- [ ] Run the repository's security and integration test scripts together on the latest integration branch.
- [ ] Run lint and production build; resolve only material failures and avoid unrelated dependency upgrades.
- [ ] Exercise the contact API with mocked HubSpot/email success/failure combinations.
- [ ] Test local reCAPTCHA bypass on localhost in development, and verify that a non-local host or production mode still requires verification.
- [ ] Crawl industry routes and redirects; check canonical metadata, sitemap, unknown-slug 404, CTA and contextual links.
- [ ] Check responsive layouts and keyboard/accessibility behavior.


### Merge record

- PR #2 was squash-merged into `audit/site-revamp-plan` on 2026-10-16 (merge commit: `19421bec4ceda35f5a9553fc6fb66be707b78110`).
- The older diverged draft PR #1 was closed after the reconciled PR merged.
- This merge is not a production release. No merge to `master` or deployment occurred.
- Full-repository tests, lint, build, browser/runtime checks and end-to-end provider-failure checks remain pending.
