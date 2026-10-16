import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer2/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | The Tech Makers",
  description:
    "Learn how The Tech Makers collects, uses, and protects information submitted through its website.",
  alternates: { canonical: '/privacy-policy' },
};

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-white text-gray-800">
    <Header />
    <main className="mx-auto max-w-4xl px-5 py-14 md:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-600">
        The Tech Makers
      </p>
      <h1 className="mb-4 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500">Effective date: October 15, 2026</p>
      <div className="space-y-7 leading-7">
        <p>
          This Privacy Policy describes how The Tech Makers handles information
          when you visit this website or contact us through its forms. It should
          be read together with any notices shown at the point where information
          is collected.
        </p>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Information we may collect</h2>
          <p>
            Depending on how you interact with us, we may receive your name,
            business email address, phone number, company details, project
            requirements, messages, and information you choose to include in a
            career enquiry or application. Our website and security tools may
            also process technical information such as browser, device, and
            request data.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">How we use information</h2>
          <p>
            We use submitted information to respond to enquiries, discuss and
            provide requested services, manage recruitment communications,
            maintain website operations, prevent abuse, protect our systems, and
            meet applicable legal obligations. We do not ask visitors to submit
            sensitive personal information through general contact forms.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Service providers and sharing</h2>
          <p>
            We may use service providers to support website hosting, form
            delivery, customer relationship management, analytics, and spam or
            abuse prevention. Information may be processed by those providers
            only as needed for their services and subject to the arrangements
            that apply to them. We may also disclose information where required
            by law or necessary to protect rights, users, or the website.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Cookies and similar technologies</h2>
          <p>
            The website or its integrated services may use cookies or similar
            technologies for essential functionality, security, preferences, or
            usage measurement. Available controls depend on your browser and any
            consent tools presented on the website. Blocking cookies may affect
            some functionality.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Retention and security</h2>
          <p>
            We keep information for as long as reasonably necessary for the
            purposes described above, including responding to enquiries,
            maintaining business records, resolving disputes, and meeting legal
            requirements. We use reasonable safeguards appropriate to the
            information and systems involved, but no internet transmission or
            storage system can be guaranteed to be completely secure.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Your choices and requests</h2>
          <p>
            You may contact us to request access to, correction of, or deletion
            of information you have provided, subject to applicable law and
            legitimate recordkeeping requirements. You can also choose not to
            provide optional information, although we may then be unable to
            respond fully to your enquiry.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Third-party websites</h2>
          <p>
            This website may link to third-party websites or services. Their
            privacy practices are governed by their own policies, which we
            encourage you to review.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Contact us</h2>
          <p>
            For privacy-related questions or requests, contact The Tech Makers
            at{" "}
            <a className="font-medium text-blue-700 underline" href="mailto:info@thetechmakers.com">
              info@thetechmakers.com
            </a>{" "}
            or write to C-276, C Block, Sector 63, Noida, Uttar Pradesh 201301,
            India.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicyPage;
