# Homepage Keyword and Tag Inventory — Initial Source Pass

**Date:** 2026-10-15  
**Source branch:** `audit/site-revamp-plan`  
**Evidence:** Static review of homepage composition and its section components. This is an initial source inventory, not keyword-volume research or a completed live-site crawl.

## How to use this inventory

This file records relevant homepage service labels, topic tags, industry names, and technology labels as they appear in source. It does **not** mean every phrase should automatically become a separate indexed page. Next, map terms to search intent, current routes, commercial relevance, and demand; then approve a URL/page for each distinct intent. Synonyms and close variants should generally share one page.

### Status legend

- **Observed**: text was found in a homepage section source file.
- **Destination check pending**: actual production URL behavior has not been browser-tested.
- **Keyword/page decision pending**: search intent, demand, and page assignment have not yet been researched.
- **Owner verification required**: confirm the company currently offers the service and can substantiate claims.

## 1. Homepage sections reviewed

Homepage composition in `src/components/Home Page/Home.tsx` includes:
- Banner
- What We Do
- End-to-end Software Development
- Services / Our Solutions / Our Technologies
- Industry We Serve
- We Share / blog content
- Reviews
- Latest Blogs
- Innovative Brands

Section sources reviewed for the initial term extraction:
- `src/components/Home Page/Sections/Banner/Banner.tsx`
- `src/components/Home Page/Sections/WhatWeDo/WhatWeDo.tsx`
- `src/components/Home Page/Sections/WhatWeDo/Tabs.tsx`
- `src/components/Home Page/Sections/EndToEnd/EndToEnd.tsx`
- `src/components/Home Page/Sections/Services/Services.tsx`
- `src/components/Home Page/Sections/Services/Tabs.tsx`
- `src/components/Home Page/Sections/Industry Culture/IndustryCulture.tsx`
- `src/components/Home Page/Sections/WeShare/WeShare.tsx`
- `src/components/Home Page/Sections/Reviews/Reviews.tsx`
- `src/components/Home Page/Sections/Reviews/Slider.tsx`
- `src/components/Home Page/Sections/Blogs/Blogs.tsx`
- `src/components/Home Page/Sections/Innovative Brand/Innovative.tsx`

## 2. Main service and solution terms

Observed in the banner, service/solution tabs, and homepage headings:
- Software development
- Website development / web development
- Web application development
- Product development
- App development / mobile app development
- Digital marketing
- Search engine optimization (SEO)
- UI/UX design
- Quality assurance / software testing
- Backend development
- Open-source development
- Shopify development
- WooCommerce development
- Magento development
- WordPress development
- End-to-end software development
- Strategy, design, and engineering
- Let's meet on G-meet / book an appointment (CTA copy; not a keyword page by itself)

**Decision:** map the service phrases to existing service routes first. Create or improve one primary page per distinct service intent where no suitable page exists.

## 3. Product and custom software solution terms

Observed in `WhatWeDo/Tabs.tsx`:
- Learning Management System (LMS)
- ERP solutions
- Cloud solutions
- E-commerce solutions
- Hotel-flight management system
- School management system
- Web application
- Enterprise integration
- Product development
- Real Estate Management System

Associated subtopics observed under those solution tabs:
- **Learning Management System:** Course Content Development; Learning Path Customization; Progress Tracking; Assessment and Quizzes; User Management; Mobile Learning Solutions; Gamification Integration; Reporting and Analytics; Certification Management; Integration with HR Systems.
- **ERP solutions:** ERP Implementation; Customization Services; Data Migration; System Integration; Training and Support; Cloud ERP Solutions; ERP Maintenance; Upgrade Services; Business Process Analysis; Mobile ERP Development.
- **Cloud solutions:** Cloud Migration; Cloud Security; Cloud Consulting; Cloud Deployment; Cloud Integration; Cloud Storage; Cloud Backup; Disaster Recovery as a Service (DRaaS); Cloud Monitoring; Serverless Computing.
- **E-commerce solutions:** E-commerce Website Development; Payment Gateway Integration; Shopping Cart Optimization; Mobile Commerce Solutions; App Design; User Experience (UX) Design; Inventory Management System; Secure Transaction Implementation; Order Tracking and Management; Customer Support Integration; E-commerce Analytics and Reporting.
- **Hotel-flight management system:** Reservation Management; Booking Engine Integration; Inventory Management; User Profiles; Real-time Updates; Mobile App Integration; Multi-Language Support; Customer Support Module.
- **School management system:** Student Enrollment Management; Attendance Tracking System; Grade and Report Card Generation; Timetable and Schedule Planning; Communication and Messaging Platform; Library Management System; Fee Management and Online Payments; Examination and Assessment Tools; Staff and Teacher Management; Parent Portal for Real-time Updates.
- **Web application:** Custom Web Application Development; Responsive Web Design; E-commerce Application Development; Enterprise Web Solutions; Content Management System Solutions; Web Application Maintenance; Web Portal Development; API Development and Integration; Cloud-Based Web Applications; UI/UX Design for Web Applications.
- **Enterprise integration:** Data Integration; Application Integration; B2B Integration; API Integration; Business Process Integration; Middleware Integration; Enterprise Service Bus (ESB); Data Synchronization.
- **Product development:** Ideation and Conceptualization; Market Research and Analysis; Prototyping and Design; Software and Hardware Development; Quality Assurance and Testing; User Experience (UX) Design; Scalability Planning; Regulatory Compliance Support; Post-Launch Maintenance; Continuous Improvement and Enhancements.
- **Real Estate Management System:** Property Listing Management; Transaction Automation; Client Relationship Management; Document Digitization; Financial Reporting; Lease and Contract Management; Vendor and Maintenance Tracking; Mobile Property Inspection; Analytics and Reporting Tools; Integration with Real Estate Platforms.

**Decision:** these subtopics are candidate keyword variants or subpages, not automatic standalone URLs. Validate current offer, demand, and distinct intent before creating each page.

## 4. Services and technologies terms

Observed in `Services/Tabs.tsx`.

### Service labels
- Website Development
- Product Development
- App Development
- Digital Marketing SEO
- UI/UX Designing
- Quality Assurance
- WebApp Development
- Backend Development
- Open source development
- Shopify Development
- Woocommerce Development
- Magento Development
- WordPress Development
- Product Planning
- Analysis
- Product Designing and Implementation
- Testing and Integration
- Maintenance
- Android App Development
- iOS App Development
- Flutter App Development
- React Native Development
- Hybrid App Development
- Search Engine Optimization
- Social Media Marketing
- Influencer Marketing
- PPC/CPC Advertising
- Social Media Management
- Lead Generation
- Logo Designing
- Website Designing
- Mobile Apps UI Design
- UI/Frontend Development
- UX Audit Service
- Building Brand Identity
- Application Testing
- Website Testing
- Vulnerability Testing
- Load Testing
- Performance Testing
- User Acceptance Testing

### Technologies/platforms shown
- PHP
- C#
- .NET
- Kotlin
- Swift
- Dart
- Node.js
- MySQL
- Oracle
- PostgreSQL (shown as pgSQL)
- MongoDB
- Bootstrap
- React.js
- Next.js
- Vue.js
- Ember.js
- Backbone
- Magento
- Shopify
- WooCommerce
- PrestaShop
- Photoshop
- XD
- Figma
- CorelDRAW
- Illustrator
- Semrush
- Ahrefs (shown as AHREF)
- Moz
- Google Analytics
- BrowserStack
- TestRail
- LambdaTest (shown as Lembda Test)
- Jira
- Selenium

**Decision:** technology labels may support a technology/service hub or relevant detail pages when these represent current capabilities. Correct spelling and verify current proficiency before using terms in SEO titles or claims.

## 5. Industry labels

Observed in `IndustryCulture.tsx`:
- Healthcare
- Cloud Solutions
- E-commerce
- Sports
- Gaming
- Travel
- Insurance
- Real Estate
- Marketing & Advertising
- Automobile
- Logistics
- Education & Non-Profit
- Manufacturing
- Media & Entertainment
- Technology & Consulting

**Decision:** determine which industries are actually served and have useful, provable expertise. Create or improve industry pages only when there is distinct audience value and accurate supporting content.

## 6. Banner and conversion language

Observed in `Banner.tsx`:
- Technical solutions
- Applications / application development
- Website development
- Better business experience for smartphone users
- Build a trustworthy online presence
- Business-to-app messaging
- “Know More”
- “Let's meet on G-meet”
- “Book an appointment”

Some banner slides contain broad claims and placeholder-like CTA destinations. Verify factual wording, booking links, and destination routes before relying on these for conversion or SEO.

## 7. End-to-end development subtopics

Observed in `EndToEnd.tsx`:
- End-to-end software development
- Strategy
- Design
- Engineering

These are supporting concepts for a service page and may not need separate URLs unless keyword research and distinct user intent justify them.

## 8. Dynamic content

- **Latest Blogs** is populated dynamically; the exact current article titles and any blog tags depend on content data and require a live/database-backed inventory.
- Review content is rendered through a separate component. Verify the actual testimonials and attribution; do not treat review text as a fabricated keyword target.
- Brand/logo content should be checked for permission and accurate representation before being used as proof or structured data.

## 9. Link/destination issue to prioritize

In the inspected source, many subtopic links in `WhatWeDo/Tabs.tsx` and `Services/Tabs.tsx` use `href="#!"`, including multiple “View More Details” actions. These are placeholder destinations rather than useful internal landing-page links.

**Priority:** P0/P1 destination audit. Each visible clickable item must either:
1. link to a relevant, implemented page;
2. be rendered as non-interactive text if it is not meant to navigate; or
3. use a working in-page action that has an accessible name and behavior.

Do not simply point every tag to the same generic page.

## 10. Next mapping steps

For every term above:
1. Verify the current live label and destination.
2. Confirm whether the business currently offers it and whether it is a priority service.
3. Map it to an existing URL or a distinct keyword cluster.
4. Research US search demand and relevant commercial intent where data/tools permit.
5. Decide: improve existing page, create new landing page, combine with a synonym cluster, or exclude.
6. For approved pages, define the slug, primary keyword, supporting terms, unique value, content owner, CTA, metadata, and QA checks.
7. For city terms, apply [KEYWORD-AND-LOCAL-SEO-PLAN.md](./KEYWORD-AND-LOCAL-SEO-PLAN.md) and avoid false local-presence claims.

## Completion status

**Initial source inventory: In progress.** Core homepage sections and tab labels/subtopics have been inspected and recorded. Live rendered state, dynamic article/tag data, route destinations, keyword demand, current service truth, and final keyword-to-URL mapping remain pending. Do not mark T-021 or the overall keyword audit complete until those gaps are closed.
