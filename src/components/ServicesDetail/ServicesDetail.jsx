import React from "react";
import Link from "next/link";
import Banner from "./Sections/Banner/Banner";
import BusinessOriented from "./Sections/BusinessOriented/BusinessOriented";
import SolutionsAndServices from "./Sections/SolutionsAndServices/SolutionsAndServices";
import Wanttomeasure from "./Sections/Wanttomeasure/Wanttomeasure";
import MarketProven from "./Sections/MarketProven/MarketProven";
import WeShare from "../Home Page/Sections/WeShare/WeShare";
import Blogs from "../Home Page/Sections/Blogs/Blogs";
import Innovative from "../Home Page/Sections/Innovative Brand/Innovative";
import { servicedata } from "../Services Page/servicedata";
import Questions from "./Sections/Questions/Questions";

const relatedServiceSlugs = {
  "web-development": ["app-development", "ui-ux-designing", "digital-marketing-seo"],
  "app-development": ["web-development", "ui-ux-designing", "quality-assurance"],
  "ui-ux-designing": ["web-development", "app-development", "digital-marketing-seo"],
  "technology-consulting": ["product-development", "quality-assurance", "ai-solutions"],
  "content-writing": ["digital-marketing-seo", "email-marketing", "web-development"],
  "product-development": ["web-development", "app-development", "quality-assurance"],
  "email-marketing": ["digital-marketing-seo", "content-writing", "ai-chatbot-development"],
  "digital-marketing-seo": ["content-writing", "email-marketing", "web-development"],
  "quality-assurance": ["app-development", "web-development", "product-development"],
  "ai-solutions": ["ai-chatbot-development", "technology-consulting", "data-science-analytics"],
  "ai-chatbot-development": ["ai-solutions", "web-development", "email-marketing"],
  "data-science-analytics": ["ai-solutions", "technology-consulting", "product-development"],
  "learning-management-system": ["web-development", "app-development", "ui-ux-designing", "quality-assurance", "technology-consulting"],
};

// Typical outputs help buyers understand what a scoped engagement may produce.
// These are options to agree during discovery, not promises that every project includes every item.
const serviceDeliverables = {
  "web-development": { heading: "Typical website project outputs", intro: "Define the site around the journeys visitors need to complete and the team needs to maintain.", items: ["Agreed sitemap, page templates, and key user journeys", "Responsive interface implementation for agreed breakpoints", "Configured forms, content management, and approved integrations", "Technical SEO foundations, analytics requirements, and launch checklist", "Handover notes for content updates and ongoing maintenance"] },
  "app-development": { heading: "Typical mobile app outputs", intro: "The deliverables depend on platform choice, device capabilities, and the backend services involved.", items: ["Prioritized user stories and supported-device matrix", "App interface flows and implementation for agreed platforms", "API, identity, notification, and data-handling integration scope", "Test results for agreed critical journeys and device coverage", "Release preparation and store-submission handover, where in scope"] },
  "ui-ux-designing": { heading: "Typical UI/UX design outputs", intro: "Make the experience reviewable before committing to full implementation.", items: ["User journeys and information architecture for priority tasks", "Wireframes and high-fidelity screens for agreed views", "Clickable prototype for stakeholder review", "Reusable component and responsive-state specifications", "Usability and accessibility findings with prioritized recommendations"] },
  "technology-consulting": { heading: "Typical consulting outputs", intro: "Turn an open-ended technology question into documented options and next steps.", items: ["Current-state and constraint summary", "Architecture or platform options with trade-offs", "Risk, dependency, and integration assessment", "Prioritized technical roadmap with decision points", "Implementation brief or acceptance criteria for the next phase"] },
  "content-writing": { heading: "Typical content project outputs", intro: "Content scope should reflect audience intent, channel, brand voice, and approval needs.", items: ["Content brief and agreed page or asset inventory", "Draft copy for the agreed pages, articles, or campaigns", "Search-intent and on-page content recommendations where relevant", "Editorial review for clarity, consistency, and factual accuracy", "Content handoff with titles, descriptions, and publishing notes"] },
  "product-development": { heading: "Typical product development outputs", intro: "Reduce uncertainty by agreeing the problem, first release, and evidence needed before expanding scope.", items: ["Problem statement, target users, and prioritized requirements", "MVP scope and release milestones", "Prototype or proof-of-concept plan for high-risk assumptions", "Technical approach, integration dependencies, and acceptance criteria", "Testing, release, and post-launch learning plan"] },
  "email-marketing": { heading: "Typical email marketing outputs", intro: "Campaign assets and automation depend on your email platform, audience permissions, and available data.", items: ["Audience segments and campaign objectives", "Email copy and responsive layout for agreed campaigns", "Automation journey map and trigger requirements", "Tracking plan for delivery, clicks, conversions, and unsubscribes", "Pre-send QA checklist and performance review recommendations"] },
  "digital-marketing-seo": { heading: "Typical digital marketing and SEO outputs", intro: "Prioritize work against the website, target audience, available data, and agreed business goals.", items: ["Technical and on-page review with prioritized issues", "Keyword-to-page mapping and content recommendations", "Campaign or channel plan aligned to the agreed audience", "Measurement plan with defined conversion events and reporting cadence", "Action backlog that separates quick fixes from longer-term work"] },
  "quality-assurance": { heading: "Typical QA and testing outputs", intro: "Testing depth should be based on release risk, supported platforms, and the criticality of each workflow.", items: ["Test scope, risk areas, and coverage matrix", "Test cases for agreed user journeys and acceptance criteria", "Manual or automated checks where appropriate to the project", "Defect reports with reproduction steps and severity", "Release-readiness summary and recommended follow-up checks"] },
  "ai-solutions": { heading: "Typical AI solution outputs", intro: "Start with a bounded use case and evaluation plan before choosing a model or automating a workflow.", items: ["Use-case brief, success measures, and out-of-scope decisions", "Data, privacy, access, and integration dependency review", "Prototype plan and representative evaluation cases", "Human review, fallback, and error-handling design", "Evaluation findings and recommendations for a controlled next step"] },
  "ai-chatbot-development": { heading: "Typical chatbot project outputs", intro: "The design should make clear what the bot can answer, when it must hand off, and which data it can access.", items: ["Supported intents, knowledge sources, and conversation flows", "Escalation and human-handoff rules", "Integration requirements for approved channels and systems", "Evaluation cases for answer quality, failure modes, and safety boundaries", "Monitoring and content-maintenance recommendations"] },
  "data-science-analytics": { heading: "Typical data and analytics outputs", intro: "The appropriate output depends on data quality, access, decision needs, and the maturity of existing reporting.", items: ["Data-source inventory and quality assessment", "Defined business questions, metrics, and analysis approach", "Exploratory analysis or model evaluation plan, where relevant", "Documented findings, assumptions, and limitations", "Dashboard, reporting, or next-step recommendations agreed for the project"] },
  "learning-management-system": { heading: "Typical LMS project outputs", intro: "Outputs are agreed after reviewing learner workflows, platform constraints, content, integrations, and rollout needs.", items: ["Learner and administrator journeys with role and permission requirements", "Course structure, learning-path, assessment, and reporting requirements", "Platform fit assessment or documented custom-build scope", "Integration and content-migration feasibility plan", "Test and rollout checklist for agreed priority workflows"] },
};

const serviceBusinessValue = {
  "web-development": "Build a website or web application around the tasks your customers and team need to complete. Scope can cover public-facing pages, portals, CMS workflows, integrations, and maintainability, with priorities agreed before implementation.",
  "app-development": "Plan a mobile experience around real user journeys, platform needs, and the systems the app must connect to. We clarify the first release, device coverage, data handling, and post-launch responsibilities before the build is scoped.",
  "ui-ux-designing": "Make complex journeys easier to understand before development begins. Research, information architecture, wireframes, prototypes, and usability reviews help stakeholders align on what users need and give developers clearer implementation guidance.",
  "technology-consulting": "Make technology decisions with explicit trade-offs instead of choosing tools by trend. Review architecture, constraints, integrations, delivery risks, and team needs to produce a practical set of options and next steps.",
  "content-writing": "Give each page or campaign a clear audience, purpose, and next action. Content scope can include briefs, website copy, articles, and editorial improvements, with factual review and approvals built into the workflow.",
  "product-development": "Move from an idea to a testable product plan by defining the user problem, minimum viable scope, key assumptions, and acceptance criteria. This helps teams prioritize learning and delivery before committing to a larger roadmap.",
  "email-marketing": "Connect email activity to audience needs and measurable campaign goals. Planning can cover permission-aware segments, campaign content, automated journeys, tracking, and pre-send checks based on the tools and data available.",
  "digital-marketing-seo": "Prioritize digital marketing work around search intent, audience fit, website readiness, and conversion goals. Recommendations should identify what to fix first, how progress will be measured, and which outcomes depend on factors outside the campaign.",
  "quality-assurance": "Reduce release risk by focusing testing on critical user journeys, high-impact failures, supported platforms, and agreed acceptance criteria. Findings are documented so teams can reproduce issues and make informed release decisions.",
  "ai-solutions": "Identify a bounded AI use case before investing in implementation. Evaluate data readiness, integrations, output quality, privacy considerations, human review, and fallback behavior so stakeholders can judge whether a solution is useful and manageable.",
  "ai-chatbot-development": "Design a chatbot around the questions it should answer, the approved knowledge it can use, and the situations that require human support. Define evaluation and escalation rules alongside integrations rather than treating conversation quality as the only success measure.",
  "data-science-analytics": "Turn available data into evidence for a defined business decision. Agree on metrics and data quality first, then choose analysis, reporting, or model evaluation methods that fit the question and document important assumptions and limitations.",
  "learning-management-system": "Plan a learning platform around your actual learners, course structure, administrator responsibilities, reporting needs, and existing systems. We help assess platform fit and scope implementation, migration, or integrations based on feasibility and agreed requirements.",
};

const serviceHeroCopy = {
  "web-development": "Build a website, web application, or portal around your customers’ needs and your team’s workflows. We help define the right scope, interface, integrations, and content-management approach for your business.",
  "app-development": "Plan and build a mobile application around clear user journeys, platform requirements, and the services it needs to connect with—from first-release planning through testing and launch preparation.",
  "ui-ux-designing": "Create digital experiences that are easier to navigate and act on. We help structure information, map user journeys, prototype key screens, and refine interfaces before implementation.",
  "technology-consulting": "Make informed technology decisions with a practical review of your current systems, architecture options, integrations, delivery risks, and next-step priorities.",
  "content-writing": "Develop useful, audience-focused content for websites, landing pages, articles, and campaigns—with clear briefs, consistent messaging, and search intent considered where relevant.",
  "product-development": "Turn a product idea into a defined, testable plan. Align on the user problem, first-release scope, core requirements, technical dependencies, and how success will be evaluated.",
  "email-marketing": "Plan email campaigns and lifecycle journeys around your audience, consent requirements, available customer data, and measurable campaign objectives.",
  "digital-marketing-seo": "Build a prioritized digital marketing and SEO plan around search intent, audience needs, website readiness, and meaningful conversion measurements—not rankings alone.",
  "quality-assurance": "Find and document defects before they affect users. Testing is scoped around critical workflows, release risks, supported platforms, and agreed acceptance criteria.",
  "ai-solutions": "Assess where AI can solve a real business problem, then define a bounded implementation approach with evaluation, data and integration requirements, human oversight, and fallback behavior.",
  "ai-chatbot-development": "Design a chatbot with clear supported topics, trusted knowledge sources, useful handoff paths, and evaluation criteria so users know when to rely on it and when to reach a person.",
  "data-science-analytics": "Answer specific business questions with a fit-for-purpose approach to data quality, analysis, reporting, and model evaluation—with assumptions and limitations made clear.",
  "learning-management-system": "Plan an LMS implementation around learning workflows, roles, content, progress reporting, and required integrations. We assess platform fit and scope the right approach before development begins.",
};

const ServicesDetail = ({ slug }) => {

  const matchedItem = servicedata.find((item) => item.slug === slug);
  const title = matchedItem?.title
  const description = matchedItem?.description
  const business = matchedItem?.business
  const project = matchedItem?.project
  const faq= matchedItem?.faq
  const services = matchedItem?.services
  const banner_image = matchedItem?.image
  const isAiDataService = ["ai-solutions", "ai-chatbot-development", "data-science-analytics"].includes(slug)
  const shouldShowPortfolio = !isAiDataService && !["technology-consulting", "learning-management-system"].includes(slug)
  const marketproven = matchedItem?.marketproven
  const canonicalUrl = `https://www.thetechmakers.com/services/${slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: title,
        serviceType: title,
        description: matchedItem?.metaDescription || (description || "").trim().slice(0, 300),
        url: canonicalUrl,
        provider: { "@id": "https://www.thetechmakers.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thetechmakers.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.thetechmakers.com/services" },
          { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
        ],
      },
      ...((faq || []).length > 0 ? [{
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        url: canonicalUrl,
        mainEntity: faq.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }] : []),
    ],
  };
  const relatedServices = (relatedServiceSlugs[slug] || [])
    .map((relatedSlug) => servicedata.find((item) => item.slug === relatedSlug))
    .filter(Boolean);
  // console.log("faq", faq)
  
  if (!matchedItem) {
    return null;
  }

  return (
    <div className="service-detail">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-screen-xl px-4 pt-5">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <li><Link href="/">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/services">Services</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-gray-900">{title}</li>
        </ol>
      </nav>
      <Banner title={title} description={serviceHeroCopy[slug] || description} banner_image={banner_image} />
      <BusinessOriented business={serviceBusinessValue[slug] || business} title={title} />
      <SolutionsAndServices title={title} services={services} />
      {serviceDeliverables[slug] && (
        <section aria-labelledby="service-deliverables-heading" className="mx-auto max-w-screen-xl px-5 py-14">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#E05A32]">What you can expect</p>
            <h2 id="service-deliverables-heading" className="text-2xl font-bold md:text-3xl">{serviceDeliverables[slug].heading}</h2>
            <p className="mt-3 leading-7 text-gray-600">{serviceDeliverables[slug].intro}</p>
          </div>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDeliverables[slug].items.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-gray-200 p-5 leading-6">
                <span aria-hidden="true" className="mt-1 font-bold text-[#E05A32]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-gray-500">Final deliverables are confirmed after reviewing your goals, existing systems, dependencies, and project scope.</p>
        </section>
      )}
      <Wanttomeasure serviceTitle={title} />
      {shouldShowPortfolio && <MarketProven marketproven={marketproven} />}
      {shouldShowPortfolio && <WeShare project={project} />}
      <Questions faq={faq} />
      {relatedServices.length > 0 && (
        <section aria-labelledby="related-services-heading" className="mx-auto max-w-screen-xl px-5 py-14">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#E05A32]">Explore more</p>
            <h2 id="related-services-heading" className="text-2xl font-bold md:text-3xl">Related services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Explore complementary services that can support the next stage of your project.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <article key={service.slug} className="flex h-full flex-col rounded-xl border border-gray-200 p-5 transition-shadow hover:shadow-md">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                  {(service.metaDescription || service.description || "").trim().slice(0, 180)}
                </p>
                <Link href={`/services/${service.slug}`} className="mt-5 inline-flex font-semibold text-[#E05A32] underline-offset-4 hover:underline">
                  Explore {service.title} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="inline-flex rounded-md bg-[#E05A32] px-5 py-3 font-semibold text-white transition-opacity hover:opacity-90">
              Discuss your project
            </Link>
          </div>
        </section>
      )}
      <Blogs serviceSlug={slug} serviceTitle={title} />
      <Innovative />
    </div>
  );
};

export default ServicesDetail;
