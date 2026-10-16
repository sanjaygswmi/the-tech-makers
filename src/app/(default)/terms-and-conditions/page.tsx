import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer2/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | The Tech Makers",
  description:
    "Read the terms that apply when accessing The Tech Makers website.",
  alternates: { canonical: '/terms-and-conditions' },
};

const TermsAndConditionsPage = () => (
  <div className="min-h-screen bg-white text-gray-800">
    <Header />
    <main className="mx-auto max-w-4xl px-5 py-14 md:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-600">
        The Tech Makers
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">Terms &amp; Conditions</h1>
      <p className="mb-8 text-sm text-gray-500">Effective date: October 15, 2026</p>
      <div className="space-y-7 leading-7">
        <p>
          These terms apply to your access to and use of The Tech Makers website.
          By using the website, you agree to use it lawfully and in accordance
          with these terms. Separate written agreements may apply to services
          that we provide to clients.
        </p>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Website information</h2>
          <p>
            Website content is provided for general information about our
            company and services. It is not a binding offer, project proposal,
            professional advice, or guarantee of a particular outcome. Scope,
            timelines, pricing, deliverables, and service commitments are agreed
            separately in writing where applicable.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Acceptable use</h2>
          <p>
            You must not misuse the website, attempt unauthorized access,
            interfere with its operation, introduce malicious code, submit
            unlawful or misleading material, or use the website in a way that
            violates another person’s rights or applicable law.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Intellectual property</h2>
          <p>
            Unless otherwise stated, website text, design, graphics, branding,
            and other materials are owned by or used with permission by The Tech
            Makers and may be protected by intellectual-property laws. You may
            view and use the website for personal or business evaluation, but
            may not reproduce, distribute, modify, or commercially exploit its
            materials without prior permission, except where law permits.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Third-party services and links</h2>
          <p>
            The website may contain links to third-party websites or use
            third-party tools. We do not control all third-party services and
            are not responsible for their content, availability, or terms.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Availability and disclaimers</h2>
          <p>
            We make reasonable efforts to keep the website available and
            information current, but do not warrant that the website will always
            be uninterrupted, error-free, or complete. To the extent permitted
            by applicable law, the website is provided on an “as available”
            basis.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Limitation of liability</h2>
          <p>
            To the extent permitted by applicable law, The Tech Makers will not
            be liable for indirect or consequential loss arising solely from
            general use of this website. Nothing in these terms excludes
            liability that cannot lawfully be excluded or limits rights that
            cannot lawfully be limited.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Changes and governing law</h2>
          <p>
            We may update these terms by publishing a revised version on this
            page. Subject to mandatory applicable law, these terms are governed
            by the laws of India. Any dispute will be subject to the competent
            courts in India, without affecting any non-waivable rights.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Contact us</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a className="font-medium text-blue-700 underline" href="mailto:info@thetechmakers.com">
              info@thetechmakers.com
            </a>{" "}
            or addressed to C-276, C Block, Sector 63, Noida, Uttar Pradesh 201301,
            India.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsAndConditionsPage;
