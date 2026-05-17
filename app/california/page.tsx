import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "California Privacy Notice — Blissley",
  description: "Blissley California Privacy Notice for California residents under the CCPA and CPRA. Last updated May 17, 2026.",
};

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="mt-3 flex flex-col gap-2">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1C3829]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SubHead = ({ children }: { children: React.ReactNode }) => (
  <p className="font-semibold text-gray-700 mt-6 mb-2">{children}</p>
);

const categories = [
  { letter: "A", title: "Identifiers", examples: "Name, address, email address, phone number, date of birth, client ID number, account name.", collected: "Yes" },
  { letter: "B", title: "Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e))", examples: "Name, signature, address, telephone number, credit card number, debit card number, financial information, medical information, or health insurance information.", collected: "Yes" },
  { letter: "C", title: "Characteristics of protected classifications under California or federal law", examples: "Gender, age, disability, marital status.", collected: "Yes" },
  { letter: "D", title: "Commercial information", examples: "Payment information, subscription records, transaction history, products or services purchased.", collected: "Yes" },
  { letter: "E", title: "Biometric information", examples: "Health information, medical conditions, medical information.", collected: "Yes" },
  { letter: "F", title: "Internet or other similar network activity", examples: "Browser type, cookies, device information, IP address, interaction with website, web usage data.", collected: "Yes" },
  { letter: "G", title: "Geolocation data", examples: "State-level location data used to verify service availability.", collected: "Yes (state level only)" },
  { letter: "H", title: "Sensory data", examples: "Audio recordings of phone calls with customer support (where permitted by law).", collected: "Yes" },
  { letter: "I", title: "Professional or employment-related information", examples: "Occupation.", collected: "Yes" },
  { letter: "J", title: "Non-public education information", examples: null, collected: "No" },
  { letter: "K", title: "Inferences drawn from other personal information", examples: "Consumer preferences, health-related inferences based on intake questionnaire responses.", collected: "Yes" },
];

const rights = [
  {
    title: "Right to Know",
    body: "You have the right to request that we disclose certain information to you about our collection and use of your Personal Information. Once we receive and verify your request, we will disclose to you: the categories of Personal Information we collected about you, the categories of sources, our business or commercial purpose for collecting it, the categories of third parties with whom we share it, and the specific pieces of Personal Information we have collected (data portability request).",
  },
  {
    title: "Right to Correct",
    body: "You have the right to request that we correct inaccurate personal information about you.",
  },
  {
    title: "Right to Delete",
    body: "You have the right to request that we delete your Personal Information from our records, subject to certain exceptions including: completing a transaction for which the information was collected; detecting security incidents or protecting against fraudulent activity; complying with a legal obligation; or other internal and lawful uses compatible with the context in which you provided the information.",
  },
  {
    title: "Right to Limit Use of Sensitive Personal Information",
    body: "You have the right to request that we limit the use and disclosure of your Sensitive Personal Information to purposes necessary to perform the services you requested.",
  },
  {
    title: "Right to Opt-Out of Sale",
    body: "We do not sell your Personal Information. However, to the extent any of our data practices are considered a \"sale\" or \"sharing\" under the CCPA, you may opt-out by contacting us at help@blissley.com or using the Global Privacy Control signal on your browser.",
  },
  {
    title: "Right to Non-Discrimination",
    body: "We will not discriminate against you for exercising any of your CCPA rights. We will not deny you goods or services, charge you different prices, or provide a different level of quality of goods or services as a result of exercising your rights.",
  },
];

const sections = [
  {
    id: "information-collected",
    roman: "I",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We collect information that identifies, relates to, describes, references, is capable of
          being associated with, or could reasonably be linked, directly or indirectly, with a
          particular consumer or device (&quot;Personal Information&quot;).
        </p>
        <p className="mt-3">
          We have collected the following categories of Personal Information from California
          consumers since January 1, 2024 on the Blissley Platform:
        </p>
        <div className="mt-5 flex flex-col gap-3">
          {categories.map(({ letter, title, examples, collected }) => (
            <div
              key={letter}
              className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden"
            >
              <div className="flex items-center justify-between gap-4 px-4 py-3 bg-white border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: "#1C3829" }}
                  >
                    {letter}
                  </span>
                  <p className="text-sm font-semibold text-gray-700">{title}</p>
                </div>
                <span
                  className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${
                    collected.startsWith("No")
                      ? "bg-gray-100 text-gray-500"
                      : "text-white"
                  }`}
                  style={collected.startsWith("No") ? {} : { backgroundColor: "#1C3829" }}
                >
                  {collected}
                </span>
              </div>
              {examples && (
                <p className="px-4 py-3 text-xs text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">Examples: </span>
                  {examples}
                </p>
              )}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "sources",
    roman: "II",
    title: "Sources of Personal Information",
    content: (
      <>
        <p>
          We obtain the categories of Personal Information listed above from the following
          categories of sources:
        </p>
        <BulletList items={[
          "Directly from you when you register, complete intake forms, or use the Platform.",
          "Indirectly from you through information we collect in the course of providing services, including activity on our website.",
          "From independent licensed physicians and pharmacies involved in your care.",
          "From third-party service providers who assist us in operating our platform and delivering our services.",
        ]} />

        <SubHead>Personal Information does NOT include:</SubHead>
        <BulletList items={[
          "Information lawfully made available from federal, state, or local government records.",
          "De-identified or aggregate consumer information.",
          "Health or medical information covered by HIPAA and the California Confidentiality of Medical Information Act (CMIA).",
          "Personal information covered by sector-specific privacy laws including the Fair Credit Reporting Act (FCRA) and the Gramm-Leach-Bliley Act (GLBA).",
        ]} />
      </>
    ),
  },
  {
    id: "sensitive",
    roman: "III",
    title: "Sensitive Personal Information",
    content: (
      <>
        <p>Sensitive personal information means information that reveals:</p>
        <BulletList items={[
          "Your social security, driver's license, or passport number.",
          "Your account log-in, financial account, debit card, or credit card number in combination with any required security or access code, password, or credentials.",
          "Your precise geolocation.",
          "Your racial or ethnic origin, religious or philosophical beliefs, or union membership.",
          "Contents of your mail, email, and text messages unless Blissley is the intended recipient.",
          "Your genetic data.",
          "Processing of biometric information for the purpose of uniquely identifying you.",
          "Personal information collected and analyzed concerning your health.",
          "Personal information collected and analyzed concerning your sex life or sexual orientation.",
        ]} />
      </>
    ),
  },
  {
    id: "use",
    roman: "IV",
    title: "Use of Personal Information",
    content: (
      <>
        <p>
          We may use or disclose the Personal Information we collect for one or more of the
          following business purposes:
        </p>
        <BulletList items={[
          "To fulfill or meet the reason for which the information is provided.",
          "To facilitate telehealth consultations and healthcare services provided by independent licensed physicians.",
          "To coordinate prescription fulfillment with independent licensed third-party pharmacies.",
          "To provide you with information, products, or services you have requested.",
          "To provide you with email alerts, SMS messages, and other notices concerning our products or services.",
          "To carry out our obligations and enforce our rights arising from contracts entered into between you and us, including for billing and subscription management.",
          "To improve our website and present its contents to you.",
          "For testing, research, analysis, and product development.",
          "To protect the rights, property, or safety of us, our patients, or others.",
          "To respond to regulatory and/or law enforcement requests and as required by applicable law, court order, or governmental regulations.",
          "To third-party service providers who perform services on our behalf.",
          "As otherwise required or permitted by law.",
        ]} />
        <p className="mt-5 text-gray-500">
          We will not collect additional categories of Personal Information or use the Personal
          Information we collected for materially different, unrelated, or incompatible purposes
          without providing you notice.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    roman: "V",
    title: "Sharing Personal Information",
    content: (
      <>
        <p>
          We may disclose your Personal Information to a third party for a business purpose.
          We disclose your Personal Information for a business purpose to the following categories
          of third parties:
        </p>
        <BulletList items={[
          "Independent licensed physicians and affiliated clinical networks (such as CareValidate).",
          "Independent licensed compounding pharmacies.",
          "Our affiliates and subsidiaries.",
          "Service providers and vendors who assist in platform operations, payment processing, and customer support.",
          "Third parties to whom you authorize us to disclose your personal information.",
          "Other third parties as required or permitted by law.",
        ]} />
      </>
    ),
  },
  {
    id: "no-sale",
    roman: "VI",
    title: "Selling Personal Information",
    content: (
      <div className="p-4 rounded-xl border border-[#1C3829]/20 bg-[#F4F7F4]">
        <p className="font-semibold text-[#1C3829]">We do not sell your Personal Information to anyone.</p>
      </div>
    ),
  },
  {
    id: "your-rights",
    roman: "VII",
    title: "Your Rights and Choices",
    content: (
      <>
        <p>
          The CCPA and CPRA provide California residents with specific rights regarding their
          Personal Information.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {rights.map(({ title, body }) => (
            <div key={title} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-gray-700 mb-1.5">{title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "exercise-rights",
    roman: "VIII",
    title: "Exercising Your Rights",
    content: (
      <>
        <p>
          To exercise the access, data portability, correction, or deletion rights described
          above, please submit a verifiable consumer request to us by:
        </p>
        <address className="mt-4 not-italic p-5 rounded-xl bg-[#F4F7F4] border border-[#1C3829]/10 text-sm flex flex-col gap-1.5">
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>
          <a href="tel:+15172801660" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            (517) 280-1660
          </a>
          <a href="https://www.blissley.com" target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            blissley.com
          </a>
          <p className="text-gray-500">TheFactual LLC, DBA Blissley, 131 Continental Dr, Ste 305, Newark, DE 19713</p>
        </address>

        <p className="mt-5">
          Only you, or a person registered with the California Secretary of State that you
          authorize to act on your behalf, may make a verifiable consumer request related to
          your Personal Information. You may also make a verifiable consumer request on behalf
          of your minor child.
        </p>
        <p className="mt-3">
          You may only make a verifiable consumer request for access or data portability twice
          within a 12-month period. The verifiable consumer request must:
        </p>
        <BulletList items={[
          "Provide sufficient information that allows us to reasonably verify your identity.",
          "Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.",
        ]} />

        <div className="mt-5 p-4 rounded-xl border border-amber-200 bg-amber-50">
          <p className="text-sm text-amber-800 leading-relaxed">
            <span className="font-semibold">Response Timing:</span> We endeavor to respond to a
            verifiable consumer request within 45 days of its receipt. If we require more time
            (up to 90 days), we will inform you of the reason and extension period in writing.
            We do not charge a fee to process or respond to your verifiable consumer request
            unless it is excessive, repetitive, or manifestly unfounded.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "changes",
    roman: "IX",
    title: "Changes to This Notice",
    content: (
      <p>
        We reserve the right to amend this Privacy Notice at our discretion and at any time.
        When we make material changes to this Privacy Notice, we will notify you by email or
        through a notice on our website.
      </p>
    ),
  },
  {
    id: "contact",
    roman: "X",
    title: "Contact Information",
    content: (
      <>
        <p>
          If you have any questions or comments about this notice, our Privacy Policy, the ways
          in which we collect and use your personal information, your options and rights
          regarding such use, or wish to exercise your rights under California law, please
          contact us at:
        </p>
        <address className="mt-4 not-italic p-5 rounded-xl bg-[#F4F7F4] border border-[#1C3829]/10 text-sm flex flex-col gap-1.5">
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>
          <a href="tel:+15172801660" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            (517) 280-1660
          </a>
          <a href="https://www.blissley.com" target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            blissley.com
          </a>
          <p className="text-gray-500">TheFactual LLC, DBA Blissley</p>
          <p className="text-gray-500">131 Continental Dr, Ste 305, Newark, DE 19713</p>
        </address>
      </>
    ),
  },
];

export default function CaliforniaPage() {
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
              Legal · California Residents Only
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#111] leading-tight mb-4"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              California Privacy Notice
            </h1>
            <p className="text-sm text-gray-400 mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
              Last updated: May 17, 2026
            </p>
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50">
              <p className="text-sm text-amber-800 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                <span className="font-semibold">California Residents Only.</span> This Privacy
                Notice is applicable to California residents only and supplements the information
                in Blissley&apos;s general Privacy Policy. We adopt this notice to comply with the
                California Consumer Privacy Act of 2018 (&quot;CCPA&quot;), the California Privacy
                Rights Act (&quot;CPRA&quot;), and other California privacy laws. Any terms defined
                in the CCPA or CPRA have the same meaning when used in this notice.
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
              TheFactual LLC, doing business as Blissley, is a patient management platform that
              works with independent physicians and practitioners who provide services utilizing
              the Blissley Platform. Blissley does not directly provide medical or pharmacy
              services and payment does not guarantee the writing or dispensing of a prescription.
              Medical services are provided via independent providers. The information provided on
              this website is for informational purposes and not a substitute for professional
              medical advice, diagnosis, or treatment. If you have questions or concerns about your
              health, please talk to your doctor. This site is an advertisement for services and
              not any specific medication.
            </p>
            <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
              © 2026 TheFactual LLC, DBA Blissley. All rights reserved.
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
