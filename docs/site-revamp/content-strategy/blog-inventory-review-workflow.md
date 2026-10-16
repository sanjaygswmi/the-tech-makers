# Blog Inventory Review Workflow

## Purpose

Build a complete, evidence-based inventory of existing blog posts before assigning them to service pages, refreshing old content, merging overlapping articles, or retiring URLs.

## Export the current CMS inventory

1. Sign in to the admin area with an administrator account.
2. Open **Admin → Blogs**.
3. Select **Export Inventory CSV**.
4. Save the generated CSV securely. It contains all posts, including drafts/inactive posts, content HTML, metadata, category/tag values, and explicit service associations.
5. Keep the original export unchanged as the baseline. Work on a copy for editorial review.

The export endpoint is administrator-only and returns a private, non-cacheable CSV. Spreadsheet formula-like cell values are prefixed to reduce CSV formula-injection risk.

## Review each post

| Review field | What to record |
|---|---|
| Primary service | One best-fit canonical service slug, or none |
| Secondary services | Only services materially addressed in the article |
| Search intent | Informational, comparison, commercial, navigational, or mixed |
| Content quality | Useful and accurate, thin, outdated, promotional, or unclear |
| Overlap candidate | Other URL(s) that target substantially the same intent |
| Evidence to check | Search Console clicks/impressions, analytics, backlinks, indexation, and lead contribution where available |
| Recommended action | Keep, refresh, consolidate, redirect, unpublish, or investigate |
| Required edits | Concrete changes to make |
| Reviewer / date | Person responsible and review date |

## Association rules

- Categories describe the article's topic; service associations decide which service pages can feature the article.
- Use category-to-service mapping as a suggestion, not an automatic publishing decision.
- Assign one primary service wherever possible. Add secondary associations only if the post provides real value to those audiences.
- Do not assign a post to a service based on its title alone. Review the article body and search intent.
- Do not bulk-update old posts until the review has been completed and checked.
- Preserve existing URLs and canonical behavior during content refreshes. Consolidation or retirement requires checking traffic, backlinks, indexation, and redirect targets first.
- Do not manufacture service coverage by attaching unrelated articles merely to populate an empty service page. An empty related-article section is preferable to irrelevant content.

## Suggested review order

1. Export all posts and count records by status.
2. Identify duplicate slugs, missing titles, missing meta descriptions, and posts without categories.
3. Review published articles first, prioritizing pages with meaningful traffic, backlinks, or commercial relevance.
4. Compare near-duplicate e-commerce articles and other overlapping topics.
5. Map each reviewed post to services and note content gaps per service.
6. Refresh or consolidate only after evidence checks.
7. Update service associations in the admin editor and verify the correct posts appear on service pages and in the filtered blog archive.
8. Re-export the inventory after changes and compare it with the baseline.

## Limitations

The export reflects the CMS at the time it is generated. It does not include analytics, Search Console performance, backlink data, or a guarantee that every listed post is indexed. Use those sources separately before deciding to consolidate or retire a URL.

The earlier existing-blog-service-mapping-audit.md is a provisional sample based on publicly visible article titles, not a substitute for this full inventory review.
