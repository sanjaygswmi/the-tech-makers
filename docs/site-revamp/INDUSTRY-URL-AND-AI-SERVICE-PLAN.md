# Industry URL Migration and AI Service Expansion

**Date:** 2026-10-15  
**Branch:** `audit/site-revamp-plan`  
**Status:** Initial implementation committed on the working branch; validation pending

## 1. Requested industry canonical URLs

| Current URL | Preferred URL | Migration requirement |
|---|---|---|
| `/industries/revolutionizing-healthcare-through-innovative-solutions` | `/industries/healthcare-solutions` | Update slug-driven data, links, canonical, sitemap; permanently redirect old URL |
| `/industries/empowering-education-and-impactful-philanthropy` | `/industries/education` | Update slug-driven data, links, canonical, sitemap; permanently redirect old URL |
| `/industries/strategic-marketing-advertising-solutions` | `/industries/advertising-industry` | Update slug-driven data, links, canonical, sitemap; permanently redirect old URL |
| `/industries/elevating-media-entertainment-xperiences` | `/industries/media-entertainment` | Update slug-driven data, links, canonical, sitemap; permanently redirect old URL |
| `/industries/cloud_solutions_excellence` | `/industries/cloud-solutions` | Update slug-driven data and internal links; permanently redirect old URL |

A slug change must not simply break the old URL. Confirm the app's Next.js version and redirect API, then use permanent redirects (HTTP 308 in Next.js configuration is typical). Test both old and new URLs, avoid redirect chains, and ensure internal links point directly to the preferred URL.

## 2. Consulting service title

**Recommended title:** Technology Consulting  
**Candidate canonical URL:** `/services/technology-consulting`  
**Legacy URL:** `/services/consulting-assurance`

Why: “Consulting/Assurance” combines two different concepts and reads awkwardly. Quality Assurance already exists as a separate service. “Technology Consulting” is clearer for a buyer, but the existing page's actual offer must be checked before changing its route or copy. Keep assurance/testing under the QA service unless the business confirms a distinct assurance offer.

## 3. Proposed new service pages

| Service | Candidate URL | Priority | Content boundaries |
|---|---|---:|---|
| AI Solutions & Integration | `/services/ai-solutions` | P1 | Business AI use cases, AI feature integration, workflow assistance, and custom AI-enabled software—only capabilities the team can actually deliver |
| AI Chatbot Development | `/services/ai-chatbot-development` | P1 | Website/support chatbots, conversational experiences, knowledge-base/RAG options, handoff and integrations only where supported; distinguish deterministic bots from LLM-based bots |
| Data Science & Analytics | `/services/data-science-analytics` | P1 | Data analysis, dashboards/BI, forecasting, predictive analytics, and machine learning only to the extent the team offers them |
| Prompt Engineering | Initially a section on `/services/ai-solutions`; possible later `/services/prompt-engineering` | P2 | Promote to a standalone page only if it is a separately sold service with meaningful unique content and evidence of distinct search intent |

### Suggested information architecture

- Keep the existing design system and service-page template; do not redesign the site.
- Each page needs a clear audience, deliverables, engagement process, limitations, CTA, unique metadata, internal links, and relevant FAQs.
- Link the AI Solutions page to Chatbot Development and Data Science & Analytics, and cross-link from relevant existing software-development pages.
- Do not publish placeholder pages or duplicate generic copy with only the service name changed.
- Do not claim proprietary models, guaranteed accuracy/ROI, HIPAA/SOC 2 or other compliance, production experience, or specific integrations unless owner-verified.
- Use existing assets only if relevant; do not reuse an unrelated banner as though it represents AI work.

## 4. Implementation and QA sequence

1. Confirm actual route and data-file structure in the working branch.
2. Update the four industry data slugs and any navigation/card references.
3. Add redirects for all four old industry URLs and, if the service slug changes, the legacy consulting URL.
4. Update service title/copy and add new service data/pages using the existing page architecture.
5. Add route-specific title/description and verify canonical and sitemap behavior.
6. Run lint/build/tests available in the project, then test all old and new URLs, CTAs, internal links, metadata, and mobile rendering.
7. Record actual results in `TASKS.md`; do not merge to `master` or deploy without separate approval.

## 5. Implementation status

Implemented on `audit/site-revamp-plan`:
- Updated the four originally requested industry data slugs/headings and the cloud industry slug to their canonical URLs.
- Added permanent redirects from the five legacy industry URLs.
- Renamed the consulting slug/title to `technology-consulting` / **Technology Consulting**, with a permanent redirect from the old route.
- Added three service data entries: AI Solutions & Integration, AI Chatbot Development, and Data Science & Analytics. Prompt engineering is included as a topic under AI Solutions rather than a separate route.
- Linked the three new service pages from a compact AI & Data Services section on the homepage.
- Added route-specific industry metadata and more useful service descriptions for metadata.
- Suppressed the existing generic web-stack/portfolio sections on AI/data service pages to avoid presenting unrelated material as AI work.

**Not yet validated:** Build, lint, automated tests, browser rendering, redirects, canonical URLs, sitemap, all internal links, and live status codes. New service pages currently reuse the existing generic web banner asset; this is a temporary visual asset, not an AI-specific illustration. No changes have been merged to `master` or deployed to production.
