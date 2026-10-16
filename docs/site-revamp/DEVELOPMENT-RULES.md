# Development Rules — Components, Files, and Maintainability

**Applies to:** all implementation work for the website revamp  
**Working branch:** `audit/site-revamp-plan`  
**Status:** Required engineering guideline for new and refactored code

## 1. Component/file size target

- **Target:** keep a UI component file between **200 and 300 lines or fewer**, including imports and types.
- Treat **200 lines as the point to review for possible extraction**, not a mandatory split when it would make the code less clear.
- **300 lines is the normal upper limit.** If a file exceeds 300 lines, split it into cohesive components, hooks, helpers, types, or data modules where practical.
- Count actual source lines; do not game the limit with compressed formatting or move large blocks into poorly named files.
- Prefer one component per file when it improves discoverability. Small, tightly coupled private subcomponents may remain together when that is clearer.
- Avoid both giant components and excessive fragmentation into tiny files with no independent purpose.

## 2. How to split a component

When a component approaches or exceeds the target:
1. Identify meaningful UI sections, repeated patterns, stateful behavior, and pure transformations.
2. Extract sections into named components with clear props and responsibilities.
3. Extract reusable stateful logic into custom hooks only when doing so improves readability or reuse.
4. Move static content/configuration into typed data modules where appropriate.
5. Keep API contracts, validation, and business rules explicit; do not hide important behavior in generic abstractions.
6. Preserve existing visual output, responsive behavior, semantics, and analytics behavior.
7. Add or update tests for the extracted behavior.

## 3. Exceptions

An exception is acceptable when splitting would harm cohesion or safety, such as generated code, schema/migration files, configuration, or a tightly coupled state machine. For each exception above 300 lines:
- record the path and line count in a Markdown review note;
- explain why splitting is not currently beneficial;
- identify a follow-up trigger or mitigation;
- do not treat the exception as an automatic defect.

Do not modify generated files merely to meet the line target.

## 4. General code quality

- Use clear names and one primary responsibility per component/module.
- Avoid duplicated validation, repeated hard-coded SEO metadata, and copied location-page templates with only city names changed.
- Keep shared page templates and keyword/location data separate from page-specific content.
- Keep secrets and environment-specific values out of source control.
- Do not add a new paid dependency or third-party service without approval.
- Preserve the current site's visual design. Prefer functional, semantic, accessibility, SEO, and reliability improvements.
- Avoid unrelated dependency upgrades and warning cleanup unless they block required work or create a material risk.

## 5. Review checklist

For each new or substantially refactored component:
- [ ] Is the file within the 200–300 line target, or is a documented exception justified?
- [ ] Are responsibilities and props/state clear?
- [ ] Are repeated UI/data patterns reused without over-generalizing?
- [ ] Are keyboard behavior, semantic HTML, and accessible feedback preserved?
- [ ] Are existing visual behavior and responsive layouts preserved?
- [ ] Are relevant tests/build/lint checks run and recorded?
- [ ] Are comments and docs updated when behavior or architecture changes?

## 6. Enforcement and status

This is a documented review rule, not yet an automated CI limit. During implementation, report oversized files in the task tracker. Consider automated line-count checks only if the repository's current tooling can support them without unnecessary dependencies or noisy exceptions.


## Existing oversized files observed during this implementation

The following existing files are already well above the 200–300 line target:
- `src/components/Home Page/Sections/Services/Tabs.tsx` — approximately 1,700+ lines; this change added only a small link section.
- `src/components/Services Page/servicedata.js` — approximately 1,200+ lines; new AI/data entries were isolated in `ai-servicedata.js`, but the existing service records remain in the legacy file.

These are documented exceptions for this change because a full extraction would be a separate, higher-risk structural refactor. Follow-up trigger: refactor each file into cohesive data/presentation modules during a dedicated maintainability task, preserving rendered output and validating with build and visual regression checks. Do not expand these files further where a small separate component or data module can be used.
