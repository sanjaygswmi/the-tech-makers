import Link from "next/link";

type IndustryGuidanceProps = { slug: string };
type RelatedService = { label: string; slug: string };

const guidance: Record<string, { title: string; intro: string; useCases: string[]; faqs: { question: string; answer: string }[]; relatedServices: RelatedService[] }> = {
  "real-estate-solutions": {
    relatedServices: [{ label: "Website Development", slug: "web-development" }, { label: "App Development", slug: "app-development" }, { label: "Product Development", slug: "product-development" }],
    title: "Common real estate software use cases",
    intro: "The right solution depends on whether your priority is property discovery, enquiry handling, listing operations, or internal coordination. Start with the workflow that creates the most friction rather than assuming a single platform will solve every need.",
    useCases: ["Property listings and search journeys", "Lead capture and enquiry routing", "Listing updates and approval workflows", "Connections to existing CRM or business systems"],
    faqs: [
      { question: "Can you build a property listing website?", answer: "A property website can be scoped around listing structure, search and filters, enquiry journeys, and the tools your team already uses. Required integrations and data migration should be confirmed during discovery." },
      { question: "Do we need a full property management system?", answer: "Not necessarily. The scope may be a focused listing or enquiry workflow, a portal, or a broader system depending on your operating model and current software." },
      { question: "Can the solution integrate with our existing CRM?", answer: "Potentially, subject to the CRM's supported APIs, access permissions, data quality, and integration requirements. These are assessed before confirming scope." },
      { question: "Can property listings be updated by agents or administrators?", answer: "Yes. Listing workflows can include role-based access, structured property details, review steps, and publishing controls. The exact permissions and approval process should reflect how your team manages listings." },
      { question: "Can a property platform route enquiries to the right team?", answer: "Enquiries can be routed using agreed rules such as property, location, agent, or enquiry type. Routing logic, notifications, consent, and CRM hand-off requirements should be defined during discovery." },
      { question: "Can you migrate listings from our current website or database?", answer: "Migration may be possible when the source data can be exported or accessed reliably. Data quality, images, field mapping, duplicates, and redirects should be reviewed before planning the migration." }
    ]
  },
  education: {
    relatedServices: [{ label: "Website Development", slug: "web-development" }, { label: "App Development", slug: "app-development" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Common education technology use cases",
    intro: "Education projects can range from a clearer institutional website to digital admissions, learning content, student portals, or integrations. The right scope depends on learner and staff needs, data sensitivity, and the systems already in use.",
    useCases: ["Admissions and course enquiry journeys", "Course and learning-content management", "Student, parent, and staff portals", "Progress reporting and system integrations"],
    faqs: [
      { question: "Can you develop an LMS or student portal?", answer: "Learning platforms and portals can be assessed as project options. Features, user roles, data migration, integrations, and ongoing ownership need to be defined before committing to a scope." },
      { question: "Can a new education website connect to existing systems?", answer: "Integration may be possible when the existing system exposes supported APIs or another reliable exchange method. Compatibility and permissions should be checked first." },
      { question: "How should student data privacy be handled?", answer: "Privacy requirements should be documented during discovery, including data collected, user permissions, retention, hosting, and any legal or institutional policies that apply." },
      { question: "Can admissions forms be tailored to different courses or campuses?", answer: "Forms can be scoped around programme-specific fields, document requirements, status updates, and routing to the appropriate team. Data collection should be limited to what the institution needs." },
      { question: "Can different staff members have different permissions?", answer: "Role-based access can be considered for administrators, admissions teams, educators, students, and other user groups. Permissions should be mapped to real responsibilities and tested before launch." },
      { question: "Can existing student or course data be migrated?", answer: "Migration feasibility depends on the source system, export options, data quality, and field structure. A sample-data review helps identify mapping, validation, and privacy requirements." }
    ]
  },
  "e-commerce-solutions": {
    relatedServices: [{ label: "Website Development", slug: "web-development" }, { label: "App Development", slug: "app-development" }, { label: "Digital Marketing & SEO", slug: "digital-marketing-seo" }],
    title: "Common e-commerce software use cases",
    intro: "Commerce improvements should follow the customer journey and fulfilment model: product discovery, checkout, order communication, inventory, and support. Platform and payment choices depend on your existing stack, market, and operational requirements.",
    useCases: ["Product catalogue and storefront improvements", "Cart, checkout, and payment-provider integration", "Order status and customer account journeys", "Inventory, fulfilment, and CRM integrations"],
    faqs: [
      { question: "Can you improve an existing online store instead of rebuilding it?", answer: "Yes, an assessment can identify whether targeted UX, performance, integration, or workflow changes are more appropriate than a full rebuild." },
      { question: "Can you integrate a payment gateway or inventory system?", answer: "That depends on the platform, provider APIs, commercial access, and transaction requirements. Compatibility should be confirmed before estimating the work." },
      { question: "Will our store support mobile customers?", answer: "Mobile usability should be part of the design and testing scope, including product discovery, checkout, forms, and key account journeys." },
      { question: "Can you connect an online store to order fulfilment tools?", answer: "Potentially, when the commerce platform and fulfilment provider support an approved integration method. Order states, stock updates, exceptions, retries, and reconciliation should be defined up front." },
      { question: "Can product catalogues contain variants and complex filters?", answer: "Catalogue structure can be planned for attributes, variants, categories, search, and filters appropriate to the product range. The model should be agreed before migrating or importing product data." },
      { question: "How do you decide whether to improve or replace our commerce platform?", answer: "The decision should follow an assessment of current platform limits, customer friction, maintenance, integrations, security, and total project cost. A rebuild is not assumed if targeted changes can meet the need." }
    ]
  },
  "manufacturing-solutions-and-services": {
    relatedServices: [{ label: "Product Development", slug: "product-development" }, { label: "Technology Consulting", slug: "technology-consulting" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Common manufacturing software use cases",
    intro: "Manufacturing teams often benefit from clearer operational information and less manual coordination. A practical starting point may be inventory visibility, production reporting, quality records, maintenance workflows, or connecting existing business systems—not necessarily replacing core plant-control software.",
    useCases: ["Inventory and stock visibility", "Production and operations reporting", "Quality and maintenance record workflows", "ERP and business-system integrations"],
    faqs: [
      { question: "Can you connect a manufacturing workflow to our ERP?", answer: "Integration feasibility depends on the ERP, available interfaces, data ownership, and operational constraints. The systems and data flows should be reviewed before confirming an approach." },
      { question: "Do we need a full manufacturing execution system (MES)?", answer: "Not always. A targeted reporting or workflow application may address the immediate need. MES or plant-floor integration requires a more specific technical and operational assessment." },
      { question: "Can dashboards show operational data from different systems?", answer: "Potentially, if data sources can be accessed and reconciled reliably. Data definitions, update frequency, permissions, and ownership need to be agreed." },
      { question: "Can a manufacturing dashboard combine ERP and spreadsheet data?", answer: "It may be possible if data can be exported or accessed consistently and definitions can be reconciled. Data ownership, refresh frequency, validation, and access permissions need to be agreed." },
      { question: "Can software support quality checks and maintenance records?", answer: "Digital workflows can be assessed for checklists, records, approvals, reminders, and reporting. Any regulated or safety-critical process needs requirements and validation from the responsible specialists." },
      { question: "Can you connect directly to production machinery or plant-control systems?", answer: "No such capability is assumed by this page. Direct OT, PLC, SCADA, or plant-control integration requires a separate safety, security, compatibility, and specialist capability assessment." }
    ]
  },
  "healthcare-solutions": {
    relatedServices: [{ label: "Website Development", slug: "web-development" }, { label: "App Development", slug: "app-development" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Common healthcare digital use cases",
    intro: "Healthcare digital projects must balance patient and staff needs with privacy, security, accessibility, and existing clinical or administrative systems. Begin with a clearly defined workflow and verify regulatory and integration requirements before committing to scope.",
    useCases: ["Healthcare information and service websites", "Appointment and enquiry journeys", "Patient-facing information portals", "Administrative reporting and system integrations"],
    faqs: [
      { question: "Can you build a patient portal or appointment journey?", answer: "These can be evaluated as software requirements. Identity, access controls, data sensitivity, integration points, and operational ownership must be assessed first." },
      { question: "Do you guarantee healthcare regulatory compliance?", answer: "No blanket compliance guarantee is implied. Applicable legal, security, clinical, and regulatory requirements must be identified and validated for each project." },
      { question: "Can a solution integrate with our existing healthcare system?", answer: "That depends on the system, vendor access, available APIs or interoperability standards, and permissions. Integration feasibility needs technical review." },
      { question: "How should access to sensitive patient information be controlled?", answer: "Access controls should follow least-privilege principles, with appropriate authentication, role permissions, audit needs, retention, and secure data handling defined for the project. The organisation's compliance team should validate requirements." },
      { question: "Can healthcare forms collect appointment or service enquiries?", answer: "A form can be scoped to collect the minimum information needed and route it to the right team. Sensitive clinical details should not be collected unless the workflow, security controls, and handling obligations have been explicitly reviewed." },
      { question: "Can you migrate content from an existing healthcare website?", answer: "A migration can be assessed for page content, service information, accessibility, redirects, and document handling. Content accuracy and any patient-data exposure should be reviewed before migration." }
    ]
  },
  "travel-hospitality": {
    relatedServices: [{ label: "Website Development", slug: "web-development" }, { label: "App Development", slug: "app-development" }, { label: "Product Development", slug: "product-development" }],
    title: "Travel and hospitality software use cases",
    intro: "Travel projects need a reliable path from search to confirmed booking, with availability, pricing, customer communication, and supplier rules handled consistently. We scope around the booking model and available supplier integrations rather than assuming every airline, hotel, or global distribution system can be connected in the same way.",
    useCases: ["Hotel search, availability, and booking journeys", "Hotel management and reservation workflows", "Flight search and booking experiences", "Travel websites, operator portals, and booking communications"],
    faqs: [
      { question: "Can you build a hotel search and booking website?", answer: "Yes, hotel search and booking experiences can be scoped around your inventory source, search filters, rates, availability, reservation lifecycle, payment provider, and customer communication needs. Supplier access and API terms must be confirmed first." },
      { question: "Can you integrate flight or hotel inventory providers?", answer: "Potentially, where the provider offers suitable APIs or another supported integration method and the client has the required commercial access. Provider coverage, booking rules, testing and support responsibilities should be agreed during discovery." },
      { question: "Can you develop a hotel management system or travel website?", answer: "Hotel-management workflows and travel websites are within the type of projects we can scope. The required modules—such as reservations, room or inventory management, staff workflows, and reporting—depend on the operating model." },
      { question: "Can a booking flow show live availability and pricing?", answer: "That depends on the connected inventory source and its API, commercial permissions, rate rules, and update behavior. Availability, taxes, cancellation rules, and price changes need to be handled explicitly in the user journey." },
      { question: "Can a travel platform manage cancellations and booking changes?", answer: "These workflows can be scoped around supplier rules, booking status, refund responsibilities, notifications, and exception handling. The available actions depend on the connected supplier and booking source." },
      { question: "Can you connect bookings to a hotel or travel operations system?", answer: "Integration may be feasible where the existing system offers supported APIs or reliable data exchange. Booking identifiers, inventory synchronization, failure handling, and operational ownership should be reviewed first." }
    ]
  },
  "logistics-supply-chain": {
    relatedServices: [{ label: "Product Development", slug: "product-development" }, { label: "Website Development", slug: "web-development" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Logistics and shipping software use cases",
    intro: "Shipping and fulfilment systems often sit between an online store, order management, inventory, and one or more carrier services. We focus on the actual operational workflow—rate selection, shipment creation, labels, tracking, exceptions, and reconciliation—and verify each platform and carrier integration before committing to delivery scope.",
    useCases: ["Inventory and fulfilment workflow management", "Multi-carrier shipping aggregation and service selection", "Shipment creation, labels, tracking, and status updates", "Shipping plugins and apps for WordPress, Shopify, and Magento"],
    faqs: [
      { question: "Can you build a shipping aggregator like Shiprocket?", answer: "We can scope a shipping-aggregation platform around carrier onboarding, rate and service selection, shipment creation, labels, tracking, and operational tools. The exact feature set depends on carrier contracts, API access, commercial rules, and the required scale." },
      { question: "Can you create shipping apps or plugins for e-commerce platforms?", answer: "We can assess integrations for platforms such as WordPress/WooCommerce, Shopify, and Magento. Compatibility depends on platform and version, app-store requirements, carrier APIs, and the shipping partner's business rules." },
      { question: "Can the system connect multiple shipping partners?", answer: "A multi-carrier design is possible when each carrier provides an approved integration path. Rate mapping, serviceability, labels, tracking events, cancellations, and error handling need to be validated per carrier." },
      { question: "Can customers compare shipping rates from different carriers?", answer: "A platform can compare eligible services when carrier accounts and APIs provide usable rates and serviceability data. Rules for packaging, dimensions, surcharges, delivery estimates, and fallback behavior should be defined." },
      { question: "Can a shipping system generate labels and track parcels?", answer: "These features can be scoped where carrier integrations support shipment creation, label retrieval, and tracking events. Label formats, cancellations, retries, and status normalization need carrier-by-carrier validation." },
      { question: "Can shipping software sync orders with Shopify, WooCommerce, or Magento?", answer: "Integration feasibility depends on platform and version, app or plugin requirements, order data, and access to the relevant APIs. The expected order and shipment lifecycle should be mapped before implementation." }
    ]
  },

  automobile: {
    relatedServices: [{ label: "Website Development", slug: "web-development" }, { label: "App Development", slug: "app-development" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Common automotive software use cases",
    intro: "Automotive digital projects often support customer journeys and business operations around vehicles, dealerships, service teams, and fleets. Start with the workflow and systems involved; embedded, vehicle-control, and safety-critical engineering are separate specialist scopes.",
    useCases: ["Dealer, vehicle, and service information websites", "Vehicle inventory, catalogue, and listing workflows", "Service booking and customer enquiry journeys", "Fleet or service operations dashboards and integrations"],
    faqs: [
      { question: "Can you build a vehicle inventory or dealership website?", answer: "A project can be scoped around vehicle data, searchable listings, enquiry capture, and dealer workflows. Inventory sources, update frequency, and any CRM integration need to be confirmed." },
      { question: "Can a website support service bookings and customer enquiries?", answer: "Yes, these journeys can be assessed around appointment rules, locations, notifications, and existing business systems. Required integrations and ownership should be defined during discovery." },
      { question: "Do you develop embedded or safety-critical vehicle systems?", answer: "This page does not claim embedded, vehicle-control, or safety-critical engineering capability. Such work requires separate specialist qualification and validation before it can be considered." },
      { question: "Can a vehicle catalogue sync with an existing inventory system?", answer: "Potentially, if the inventory source supports a suitable API or export. Field mapping, availability updates, image handling, and duplicate prevention should be specified." },
      { question: "Can customers book servicing or request a test drive online?", answer: "Those journeys can be evaluated around location, appointment availability, customer details, notifications, and staff workflows. Any connection to dealership or service systems should be validated." },
      { question: "Can fleet dashboards combine data from several business systems?", answer: "A dashboard may combine accessible data sources if the fields and update schedules can be reconciled. Data access, ownership, accuracy, and operational use should be agreed before development." }
    ]
  },
  "cloud-solutions": {
    relatedServices: [{ label: "Technology Consulting", slug: "technology-consulting" }, { label: "Product Development", slug: "product-development" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Common cloud project use cases",
    intro: "Cloud work is a technology-service topic rather than a traditional industry vertical. This page is useful for organisations evaluating cloud-related application or infrastructure work; the final scope should be based on architecture, security, cost, and operational ownership.",
    useCases: ["Application and architecture assessment", "Cloud migration planning and application modernization", "Cloud-hosted application and API integration", "Performance, scalability, backup, and cost reviews"],
    faqs: [
      { question: "Can you assess an application before cloud migration?", answer: "An assessment can review dependencies, architecture, data flows, security needs, availability targets, and migration constraints before a plan or estimate is proposed." },
      { question: "Do all applications need to be rebuilt for the cloud?", answer: "No. Depending on the application, options may include migration with limited changes, modernization, or a more substantial redesign. The right path depends on technical and business constraints." },
      { question: "Can you guarantee a specific cloud cost or performance improvement?", answer: "No result should be guaranteed without evidence and a defined baseline. Cost and performance goals should be measured against the current workload, service choices, and operating requirements." },
      { question: "How do you choose a cloud migration approach?", answer: "The approach depends on application dependencies, data sensitivity, downtime tolerance, cost, performance, and the team's ability to operate the result. An assessment should compare migration, modernization, and redesign options." },
      { question: "Can you help connect cloud applications to existing business systems?", answer: "Integration can be assessed based on supported APIs, identity and access requirements, network boundaries, data flows, and reliability needs. Security and operational ownership should be designed into the approach." },
      { question: "Will moving to the cloud automatically reduce costs?", answer: "No. Costs depend on workload, architecture, usage patterns, service selection, support, and optimization practices. Establish a current baseline and target measures before estimating savings." }
    ]
  },
  "gaming-solutions-and-services": {
    relatedServices: [{ label: "App Development", slug: "app-development" }, { label: "Product Development", slug: "product-development" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Common gaming software use cases",
    intro: "This page focuses on supporting digital products around a game or gaming business, such as player-facing web experiences, account workflows, communities, and companion applications. Game-engine, multiplayer infrastructure, console-porting, and specialist graphics work must be confirmed separately.",
    useCases: ["Gaming websites and player communities", "Player profiles, account, and support workflows", "Companion web or mobile experiences", "Content management, analytics, and web-experience QA"],
    faqs: [
      { question: "Can you build a gaming website or player community?", answer: "A scope can cover public game information, community content, player support, and related account journeys. Moderation, identity, platform integrations, and expected traffic need to be assessed." },
      { question: "Can you develop a companion app for an existing game?", answer: "A companion experience can be evaluated if the required game data or platform interfaces are available. API access, platform rules, and synchronization needs must be confirmed." },
      { question: "Do you provide game-engine or multiplayer server development?", answer: "Those specialist capabilities are not claimed by this page. Engine, networking, porting, or real-time infrastructure requirements need explicit technical qualification before they are included in a proposal." },
      { question: "Can you build account, community, or player-support features around an existing game?", answer: "These features can be scoped when the required identity, game data, or platform interfaces are available. Moderation, account linking, privacy, and platform policies need to be checked." },
      { question: "Can a gaming website handle frequent content updates?", answer: "A content-managed approach can support updates to news, guides, events, and community information, with editorial roles and publishing controls tailored to the team." },
      { question: "Can you test a gaming companion website across devices?", answer: "Quality assurance can cover supported browsers, screen sizes, forms, navigation, and defined user journeys. Game-engine testing, console certification, and real-time network testing are separate scopes unless explicitly agreed." }
    ]
  },
  "tech-driven-consulting": {
    relatedServices: [{ label: "Technology Consulting", slug: "technology-consulting" }, { label: "Website Development", slug: "web-development" }, { label: "Product Development", slug: "product-development" }],
    title: "Common software needs for consulting firms",
    intro: "This page is for consulting firms that need digital tools to market expertise and coordinate client engagements. It is distinct from the Technology Consulting service page, which describes advisory and technical planning services delivered to clients.",
    useCases: ["Consulting websites and expertise/resource libraries", "Client enquiry capture and CRM-connected workflows", "Client portals and controlled document access", "Project, engagement, and reporting workflows"],
    faqs: [
      { question: "Can you build a website for a consulting firm?", answer: "A consulting website can be scoped around service pages, expertise content, lead capture, case studies approved for publication, and integrations with existing CRM or marketing tools." },
      { question: "Can clients access project documents through a portal?", answer: "A portal can be assessed around user roles, document permissions, audit needs, retention, and identity management. Security requirements should be agreed before implementation." },
      { question: "How is this different from Technology Consulting?", answer: "This industry page addresses software and digital workflows used by consulting firms themselves. The Technology Consulting service page covers advisory work such as assessing systems and planning technology initiatives." },
      { question: "Can you create a secure client portal for a consulting firm?", answer: "A portal can be scoped around client identity, project-specific permissions, document access, audit requirements, and retention. Security and confidentiality requirements should be documented before implementation." },
      { question: "Can consulting teams manage enquiries and engagement status in one place?", answer: "A workflow may bring together enquiry capture, assignment, status tracking, and reporting, subject to the tools and data the firm already uses. Integration requirements should be mapped first." },
      { question: "Can the site publish case studies and specialist resources?", answer: "A content-managed site can support approved case studies, articles, downloads, and expertise pages. Client permissions, confidentiality, content ownership, and review workflows should be established before publishing." }
    ]
  },
  "insurance-software-solutions": {
    relatedServices: [{ label: "Product Development", slug: "product-development" }, { label: "Technology Consulting", slug: "technology-consulting" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Common insurance software use cases",
    intro: "Insurance digital projects may support customer information, broker or policyholder journeys, document exchange, and internal operations. Policy administration, underwriting, claims, and regulated data handling require detailed discovery of the insurer's processes and existing systems.",
    useCases: ["Insurance product and customer information journeys", "Quote or policy enquiry workflows", "Document submission and status communication", "Broker portals, reporting, and system integration assessments"],
    faqs: [
      { question: "Can you build a policyholder or broker portal?", answer: "A portal can be evaluated around user roles, permitted information, document exchange, status visibility, and integrations with existing policy or claims systems." },
      { question: "Can you integrate with our policy administration or claims platform?", answer: "Feasibility depends on the platform, supported interfaces, vendor access, data rules, and operational constraints. These should be reviewed before scope or timing is committed." },
      { question: "Do you guarantee insurance regulatory compliance?", answer: "No blanket compliance guarantee is implied. Applicable legal, regulatory, privacy, and security requirements must be identified and validated for each project with the client's responsible specialists." },
      { question: "Can an insurance portal support document uploads and status updates?", answer: "Such a workflow can be assessed around document types, file validation, user permissions, status visibility, retention, and integration with policy or claims systems. Sensitive data handling must be reviewed." },
      { question: "Can quote requests be routed to the right broker or team?", answer: "Routing can be designed around agreed rules such as product, region, broker, or enquiry type. Eligibility logic and regulated advice boundaries should be defined by the client's responsible team." },
      { question: "How do you approach sensitive insurance data?", answer: "The project should define data minimization, access control, secure transmission, retention, logging, and incident responsibilities. Applicable legal and regulatory obligations need validation by the client's specialists." }
    ]
  },
  "advertising-industry": {
    relatedServices: [{ label: "Product Development", slug: "product-development" }, { label: "Website Development", slug: "web-development" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Common software use cases for advertising teams",
    intro: "Advertising agencies often coordinate campaign assets, client reviews, approvals, reporting, and work across multiple platforms. This page focuses on software and workflow support for advertising organisations, rather than selling campaign execution or general SEO services.",
    useCases: ["Campaign asset review and approval workflows", "Client portals and project-status communication", "Content, creative, and campaign resource libraries", "Reporting dashboards and approved platform integrations"],
    faqs: [
      { question: "Can you build a client portal for an advertising agency?", answer: "A portal can be scoped around project updates, asset review, approvals, document access, and client permissions. Existing project-management and storage tools should be identified first." },
      { question: "Can campaign data be combined into reporting dashboards?", answer: "Potentially, if each source provides suitable API or export access and its metrics can be mapped consistently. Data access, licensing, and refresh requirements need to be checked." },
      { question: "Is this the same as your Digital Marketing & SEO service?", answer: "No. This industry page focuses on software and operational workflows for advertising organisations. Digital Marketing & SEO describes marketing services, not a promise of proprietary ad-tech products." },
      { question: "Can clients review and approve creative assets online?", answer: "An approval workflow can be scoped around versioning, comments, decision status, notifications, and permissions. File sizes, storage, retention, and integration with existing tools should be planned." },
      { question: "Can the system track campaign tasks and client feedback?", answer: "A workflow can bring together task status, assigned owners, due dates, feedback, and client visibility. The right design depends on the team's existing project-management process." },
      { question: "Can you connect reporting to advertising platforms?", answer: "Potentially, if the platforms provide appropriate APIs or exports and access is authorized. Metric definitions, attribution windows, data refresh, and platform terms should be checked before implementation." }
    ]
  },
  "media-entertainment": {
    relatedServices: [{ label: "Website Development", slug: "web-development" }, { label: "Product Development", slug: "product-development" }, { label: "Quality Assurance", slug: "quality-assurance" }],
    title: "Common media and entertainment software use cases",
    intro: "Media teams may need digital experiences for audiences and practical workflows for creating, managing, and publishing content. Requirements for streaming delivery, broadcast systems, digital rights, or distribution platforms need separate capability and integration validation.",
    useCases: ["Content-led websites and audience experiences", "Editorial and publishing workflows", "Media libraries and content management", "Audience reporting and integrations with existing platforms"],
    faqs: [
      { question: "Can you develop a media or publisher website?", answer: "A site can be scoped around content types, editorial roles, publishing approvals, search, accessibility, and audience journeys. Migration and publishing workflows should be planned with the team." },
      { question: "Can the site connect to existing content or analytics systems?", answer: "That depends on supported APIs, export options, account access, data structure, and licensing. Integration feasibility should be checked before committing to scope." },
      { question: "Do you provide streaming, broadcast, or digital-rights-management systems?", answer: "These specialist capabilities are not implied by this page. Streaming, broadcast, DRM, and distribution needs require separate technical discovery and verified delivery capability." },
      { question: "Can editors manage content through a role-based publishing workflow?", answer: "A content system can be assessed for contributor roles, editorial review, scheduling, versioning, and publishing permissions. The workflow should match the team's editorial process." },
      { question: "Can a media website support search across a large content library?", answer: "Search can be scoped around metadata, categories, filters, and relevance needs. Content structure, indexing strategy, performance expectations, and accessibility should be considered together." },
      { question: "Can you migrate articles, images, and media metadata from an existing site?", answer: "Migration may be feasible when content and metadata can be exported or accessed. URL mapping, asset rights, duplicate content, redirects, and editorial review should be included in the plan." }
    ]
  },
};

export default function IndustryGuidance({ slug }: IndustryGuidanceProps) {
  const content = guidance[slug];
  if (!content) return null;
  const canonicalUrl = `https://www.thetechmakers.com/industries/${slug}`;
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    url: canonicalUrl,
    mainEntity: content.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-14" aria-labelledby="industry-use-cases">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }} />
      <div className="max-w-3xl mx-auto">
        <h2 id="industry-use-cases" className="text-2xl md:text-3xl font-bold text-center">{content.title}</h2>
        <p className="mt-4 text-center text-gray-700">{content.intro}</p>
        <ul className="grid gap-3 sm:grid-cols-2 mt-8">
          {content.useCases.map((useCase) => (
            <li key={useCase} className="rounded-lg border border-gray-200 p-4">{useCase}</li>
          ))}
        </ul>
        <div className="mt-12">
          <h2 className="text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="py-4">
                <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold">Related services</h2>
          <p className="mt-2 text-gray-700">Explore the service pages for delivery details; this industry page describes the business context and use cases.</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {content.relatedServices.map((service) => (
              <li key={service.slug}>
                <Link className="inline-flex rounded-full border border-gray-300 px-4 py-2 font-medium underline-offset-4 hover:underline" href={"/services/" + service.slug}>{service.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm" aria-label="Explore more solutions">
          <Link className="font-medium underline underline-offset-4" href="/industries">Explore all industry solutions</Link>
          <Link className="font-medium underline underline-offset-4" href="/services">Browse all services</Link>
        </nav>
        <p className="mt-5 text-center">Have a related project? <Link className="font-semibold underline underline-offset-4" href="/contact">Discuss your requirements</Link>.</p>
      </div>
    </section>
  );
}
