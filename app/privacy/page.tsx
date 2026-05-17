import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Blissley",
  description: "Blissley Privacy Policy. Last updated May 17, 2026.",
};

const sections = [
  {
    id: "introduction",
    roman: "I",
    title: "Introduction",
    content: (
      <>
        <p>
          This Privacy Policy describes how TheFactual LLC d/b/a Blissley (&quot;Blissley,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects and uses Personal Data about you through the use
          of our website and platform (the &quot;Platform&quot;), and through email, text, and other
          electronic communications between you and Blissley. TheFactual LLC is a Delaware
          limited liability company located at 131 Continental Dr, Ste 305, Newark, DE 19713.
        </p>
        <p className="mt-3">
          Blissley respects your privacy and is committed to protecting it through our compliance
          with this policy. This Privacy Policy describes the types of information we and our
          affiliates, including certain affiliated professional entities, may collect from you or
          that you may provide when you use the Platform.
        </p>
        <p className="mt-3">
          This Privacy Policy also describes our practices for collecting, using, maintaining,
          protecting, and disclosing that information. Use of the Platform is governed by this
          Privacy Policy and our Terms of Service. This Privacy Policy is incorporated into our
          Terms of Service.
        </p>
        <p className="mt-3">
          By accessing or using the Platform, you acknowledge that you have read, understood, and
          agreed to be legally bound by and comply with this Privacy Policy and our Terms of
          Service. If any term in this Privacy Policy is unacceptable to you, please do not use
          the Platform or provide any Personal Information.
        </p>
        <p className="mt-3">
          This Privacy Policy may change from time to time and your use of the Platform after we
          make changes is deemed to be acceptance of those changes, so please check this Privacy
          Policy periodically for updates.
        </p>
      </>
    ),
  },
  {
    id: "information-collected",
    roman: "II",
    title: "Information We Collect About You and How It's Collected",
    content: (
      <>
        <p className="font-semibold text-gray-700 mb-3">Information About You and Your Healthcare Treatment and Payment</p>
        <p>We collect several types of information from and about users of our Platform, including:</p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "Information by which you may be personally identified, such as name, mailing address, email address, telephone number, account information, postal address, gender, occupation, billing and collection information, and information related to your eligibility (\"Personal Information\").",
            "Health-related information, such as clinical history, conditions, and any other information exchanged in emails, texts, chats, or calls between you and Blissley.",
            "Information about your Internet connection, the equipment you use to access our Platform, and usage details.",
            "Information about you, such as whether you are a current user, your product interests, location, or demographics.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1C3829]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">We collect this information:</p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "Directly from you when you provide it to us.",
            "Automatically as you navigate through the Platform (e.g., usage details, IP address, and information collected through cookies, web beacons, and other tracking technologies).",
            "From third parties with whom we work to provide you services, such as physicians, medical professionals, and pharmacies.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1C3829]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="font-semibold text-gray-700 mt-6 mb-3">Information You Give to Us</p>
        <p>The information we collect on or through our Platform may include:</p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "Information collected when you browse our website, even without creating an account.",
            "Information you provide when you sign in or register for an account on the Platform.",
            "Information to process or respond to your inquiries related to requests for treatment, payment, or customer service.",
            "Payment processing information, including billing information such as name, address, email address, and payment card information. When you provide payment information, we transmit it via an encrypted connection to a third-party credit card processor.",
            "Records and copies of your correspondence if you contact us, such as when you report an issue with our Platform.",
            "Your search queries on the Platform.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1C3829]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-gray-50">
          <p className="font-semibold text-gray-700">
            Blissley does not collect or store your full credit card details.
          </p>
        </div>

        <p className="font-semibold text-gray-700 mt-6 mb-3">Automatic Data Collection</p>
        <p>
          As you navigate through and interact with our Platform, we may use automatic data
          tracking technologies to collect certain information about your equipment, browsing
          actions, and patterns, including:
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "Details of your visits to our Platform, including traffic data, location data, logs, language, date and time of access, and other communication data.",
            "Information about your computer and Internet connection, including your IP address, operating system, host domain, and browser type.",
            "Details of referring websites (URL).",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1C3829]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="font-semibold text-gray-700 mt-6 mb-2">Cookies</p>
        <p>
          The Platform may utilize cookies to improve functionality. Cookies are text files sent
          by servers to web browsers and stored on your computer. They help us identify and track
          visitors, their usage of the Platform, and access preferences.
        </p>
        <p className="mt-3">
          We use information collected from cookies and other technologies to improve your user
          experience and the overall quality of our services. Visitors who do not wish to have
          cookies placed on their computers should set their browsers to refuse cookies before
          using the Platform. Our sites are designed to respond to Global Privacy Control
          (&quot;GPC&quot;) signals.
        </p>

        <p className="font-semibold text-gray-700 mt-6 mb-2">Third-Party Tools</p>
        <p>
          We use Stripe as our payment processor. A session cookie may be stored on your browser
          to assist in detecting and preventing fraud. These cookies typically remain on your
          browser for 24 hours. For more information, please visit Stripe&apos;s privacy policy at{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            stripe.com/privacy
          </a>.
        </p>
        <p className="mt-3">
          We may also use other third-party tools that allow us to track the performance of our
          site, providing information about errors, website performance, and other technical
          details.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    roman: "III",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          We may use information collected about you, including Personal Information, in the
          following ways:
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "To complete any registration or other transactions or actions you request online, including determining eligibility and payment processing.",
            "For treatment, payment, or healthcare operational purposes.",
            "To communicate with you about our healthcare services, products, and services that you request from us via telephone, voicemail, email, SMS/text messages, or notifications within the Platform.",
            "To contact you if you receive healthcare services resulting from your use of the Platform.",
            "To administer your account, including processing your payments and fulfilling your orders.",
            "To operate the Platform and perform any services associated with it, including providing technical support and improving our products and services.",
            "To provide you with information that you have requested or to respond to your inquiries.",
            "To create de-identified information that cannot be used to personally identify you, such as aggregate statistics relating to the use of our service.",
            "To measure or understand the effectiveness of communications we send to you and others.",
            "To enhance the safety, security, and performance of our products and services, including verifying your identity and preventing or detecting fraud.",
            "To notify you about changes to our services or the Platform.",
            "To enforce this Privacy Policy and our Terms of Service, including to protect the rights, property, or safety of us or any other person.",
            "To comply with applicable federal, state, and other laws and regulations.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1C3829]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "disclosure",
    roman: "IV",
    title: "Disclosure of Your Information",
    content: (
      <>
        <p>
          We may disclose Personal Information that we collect or you provide as described in
          this Privacy Policy as follows:
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "For treatment, payment, or healthcare operations purposes.",
            "To service providers that assist us in the maintenance, improvement, and optimization of our Platform.",
            "To medical providers, including physicians, healthcare facilities, pharmacies, and laboratories that provide services to you.",
            "To Blissley employees or other third parties who provide services to Blissley or an affiliated professional entity.",
            "To our affiliates and their employees.",
            "To third-party credit card processors via an encrypted connection to process payments.",
            "To any third parties we believe necessary or appropriate to comply with applicable laws.",
            "To entities that assist us with marketing and advertising.",
            "In the event of a sale, merger, consolidation, change in control, or transfer of substantial assets, we may transfer information concerning your relationship with us to third parties.",
            "If we are under a duty to disclose or share your Personal Information to comply with any legal obligation, or in order to enforce or apply our Terms of Service and other agreements; or to protect the rights, property, or safety of Blissley, our customers, or others.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1C3829]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "phi",
    roman: "V",
    title: "Protected Health Information",
    content: (
      <>
        <p>
          When you set up an account with Blissley, you are creating a direct customer
          relationship with Blissley that enables you to access and utilize the various functions
          of the Platform. As part of that relationship, you provide certain personal information
          to Blissley, including your name, email address, shipping address, and phone number.
        </p>
        <p className="mt-3">
          However, in using certain components of the Service, you may also provide certain
          health or medical information that may be protected under applicable laws. Blissley is
          not a &quot;covered entity&quot; under HIPAA. One or more of the partner pharmacies or
          affiliated medical providers may be a &quot;covered entity&quot; or &quot;business
          associate&quot; under HIPAA.
        </p>
        <p className="mt-3">
          Any medical or health information that you provide that is subject to specific
          protections under applicable state laws (&quot;Protected Information&quot;) will be used
          and disclosed only in accordance with such applicable laws. Information that does not
          constitute Protected Information under applicable laws may be used or disclosed in any
          manner permitted under this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "options",
    roman: "VI",
    title: "Options About How We Use and Disclose Your Information",
    content: (
      <>
        <p>We strive to provide you with options regarding the Personal Information you provide to us:</p>
        <div className="mt-4 flex flex-col gap-4">
          {[
            {
              label: "Tracking Technologies and Advertising",
              body: "You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, some parts of our Platform may be inaccessible or may not function properly.",
            },
            {
              label: "Do Not Track",
              body: "Our sites are designed to respond to Global Privacy Control (GPC) signals. We otherwise do not currently respond to \"do not track\" signals.",
            },
            {
              label: "Communications Preferences",
              body: "You can choose whether to receive promotional communications from us by email or SMS. If you receive promotional messages from us and would like to stop, you can do so by following the directions in that message or by contacting us as described below.",
            },
          ].map(({ label, body }) => (
            <div key={label} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-gray-700 mb-1">{label}</p>
              <p className="text-gray-500">{body}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "data-security",
    roman: "VII",
    title: "Data Security",
    content: (
      <>
        <p>
          We have implemented measures designed to reasonably secure your Personal Information
          from accidental loss and from unauthorized access, use, alteration, and disclosure.
        </p>
        <p className="mt-3">
          Where we have given you a password which enables you to access certain parts of our
          Platform, you are responsible for keeping this password confidential. We ask you not
          to share a password with anyone.
        </p>
        <p className="mt-3">
          Unfortunately, the transmission of information via the Internet is not completely
          secure. Although we will do our best to protect your Personal Information, we cannot
          guarantee the security of your data transmitted to our Platform; any transmission is
          at your own risk.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    roman: "VIII",
    title: "Third-Party Platforms",
    content: (
      <>
        <p>
          Our Platform may contain links or references to other websites outside of our control.
          Please be aware that this Privacy Policy does not apply to third-party websites.
          Blissley encourages you to read the privacy statements and terms of service of linked
          or referenced websites you enter.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-gray-50">
          <p className="uppercase tracking-wide text-[10px] leading-relaxed text-gray-500 font-semibold">
            Blissley does not control and is not responsible for what third parties do in
            connection with their websites, or how they handle your personal information. Please
            exercise caution and consult the privacy policies posted on each third-party website
            for further information.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "minors",
    roman: "IX",
    title: "No Services to Persons Under the Age of 18",
    content: (
      <p>
        Blissley does not knowingly provide services to minors under 18 and does not knowingly
        collect Personal Information from anyone under 18 years of age.
      </p>
    ),
  },
  {
    id: "california",
    roman: "X",
    title: "California Resident Privacy Rights",
    content: (
      <>
        <p>
          If you are a resident of California, the California Consumer Privacy Act
          (&quot;CCPA&quot;) provides you with additional rights regarding your Personal
          Information.
        </p>
        <div className="mt-3 p-4 rounded-xl border border-amber-200 bg-amber-50">
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Note:</span> Your privacy rights under the CCPA do
            not apply to all information that we might collect, use, or disclose. For example,
            the CCPA does not apply to PHI governed by HIPAA or &quot;medical information&quot;
            governed by the California Confidentiality of Medical Information Act
            (&quot;CMIA&quot;).
          </p>
        </div>
        <p className="font-semibold text-gray-700 mt-5 mb-3">Your California Privacy Rights Include:</p>
        <div className="flex flex-col gap-4">
          {[
            {
              label: "Right to Know",
              body: "You have the right to know about the Personal Information we collect, use, and disclose about you in the twelve (12) months preceding your request. To exercise this right, please contact us at help@blissley.com.",
            },
            {
              label: "Right to Deletion",
              body: "You have the right to request that we delete the Personal Information we collect about you. We will honor your request unless an exception applies, such as when the information is necessary to complete the transaction or contract for which it was collected.",
            },
            {
              label: "Right to Opt-Out of Sale",
              body: "You have the right to request that we do not sell your Personal Information to third parties. While we do not sell your data in the traditional sense, the CCPA defines this term broadly to include certain uses of third-party advertising and marketing services.",
            },
            {
              label: "Right to Non-Discrimination",
              body: "We do not discriminate against you for exercising any of your privacy rights under CCPA or applicable law.",
            },
          ].map(({ label, body }) => (
            <div key={label} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-gray-700 mb-1">{label}</p>
              <p className="text-gray-500">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          <span className="font-semibold text-gray-700">How to Exercise Your Privacy Rights: </span>
          To submit a request, contact us at{" "}
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>. We must verify your identity before processing your request. We may collect your
          name, email address, and phone number to verify your identity.
        </p>
        <p className="mt-3">
          You also may designate an authorized agent to make a request on your behalf. To use an
          authorized agent, you must submit proof that the agent is authorized to act on your
          behalf.
        </p>
      </>
    ),
  },
  {
    id: "consumer-health",
    roman: "XI",
    title: "Consumer Health Data Privacy",
    content: (
      <>
        <p>
          Blissley collects and processes consumer health data as part of providing our
          telehealth services. This health data is collected for the purpose of facilitating
          healthcare services between you and independent licensed medical providers, and for
          administering your subscription and care coordination.
        </p>
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          {[
            { label: "We do not", value: "Sell consumer health data to third parties." },
            { label: "We do not", value: "Use consumer health data for targeted advertising." },
            { label: "We share only with", value: "Licensed healthcare providers, pharmacies, and service providers as necessary to deliver requested services, or as required by law." },
          ].map(({ label, value }, i) => (
            <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: i < 2 ? "#dc2626" : "#1C3829" }}>{label}</p>
              <p className="text-sm text-gray-600">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          For residents of states with specific consumer health data privacy laws (including but
          not limited to Washington, Nevada, Connecticut, and others), please contact us at{" "}
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>{" "}
          to exercise your rights under applicable state law.
        </p>
      </>
    ),
  },
  {
    id: "revisions",
    roman: "XII",
    title: "Revisions to Our Privacy Policy",
    content: (
      <>
        <p>
          We reserve the right to change this Privacy Policy at any time. It is our policy to
          post any changes we make to our Privacy Policy on this page. The date this Privacy
          Policy was last modified is identified at the top of the page.
        </p>
        <p className="mt-3">
          Your continued use of our Platform after such amendments will be deemed your
          acknowledgment of these changes to this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    roman: "XIII",
    title: "Contact Information",
    content: (
      <>
        <p>
          If you have any questions or comments about this Privacy Policy and our privacy
          practices, please contact us at:
        </p>
        <address className="mt-4 not-italic p-5 rounded-xl bg-[#F4F7F4] border border-[#1C3829]/10 text-sm flex flex-col gap-1.5">
          <p className="font-semibold text-gray-700">TheFactual LLC d/b/a Blissley</p>
          <p className="text-gray-500">131 Continental Dr, Ste 305, Newark, DE 19713</p>
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>
          <a href="tel:+15172801660" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            (517) 280-1660
          </a>
        </address>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Back to Blissley">
            <Image src="/bliss logo.png" alt="Blissley" width={120} height={34} className="object-contain" priority />
          </Link>
          <Link
            href="/#qualify"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)", letterSpacing: "0.02em" }}
          >
            GET STARTED
          </Link>
        </div>
      </header>

      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Page title */}
          <div className="mb-12 pb-10 border-b border-gray-100">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
              Legal
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#111] leading-tight mb-4"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-400 mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
              Last updated: May 17, 2026
            </p>

            {/* HIPAA notice */}
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50">
              <p className="text-sm text-amber-800 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                <span className="font-bold">Important Note:</span> Our Notice of Privacy
                Practices is a separate document that governs how protected health information
                (&quot;PHI&quot;) about you may be used and disclosed in connection with
                healthcare services in accordance with the Health Insurance Portability and
                Accountability Act (&quot;HIPAA&quot;).
              </p>
            </div>

            <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-gray-50">
              <p className="text-sm font-semibold text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                PLEASE READ THIS PRIVACY POLICY CAREFULLY BEFORE USING OUR SERVICES OR WEBSITE.
              </p>
            </div>
          </div>

          {/* Table of contents */}
          <nav className="mb-12 p-6 rounded-2xl bg-[#F4F7F4] border border-[#1C3829]/10">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
              Table of Contents
            </p>
            <ol className="flex flex-col gap-1.5">
              {sections.map(({ id, roman, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm text-gray-600 hover:text-[#1C3829] transition-colors flex gap-3"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    <span className="font-semibold text-gray-400 flex-shrink-0 w-10">{roman}.</span>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {sections.map(({ id, roman, title, content }) => (
              <section key={id} id={id} className="scroll-mt-24">
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="text-xs font-bold tracking-widest"
                    style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                  >
                    {roman}.
                  </span>
                  <h2
                    className="text-xl font-bold text-[#111]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {title}
                  </h2>
                </div>
                <div
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {content}
                </div>
              </section>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col gap-4">
            <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              Blissley is a patient management platform that works with independent physicians
              and practitioners who provide services utilizing the Blissley Platform. Blissley
              does not directly provide medical or pharmacy services. Medical services are
              provided via independent providers. The information provided on this website is for
              informational purposes and not a substitute for professional medical advice,
              diagnosis, or treatment.
            </p>
            <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
              © 2026 TheFactual LLC. All rights reserved.
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
