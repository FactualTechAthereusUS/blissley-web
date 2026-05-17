import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Consent — Blissley",
  description: "Blissley Medical Consent — Telehealth, HIPAA, Financial, and Shipping. Last updated May 17, 2026.",
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

const sections = [
  {
    id: "telehealth",
    roman: "I",
    title: "Telehealth Consent",
    content: (
      <>
        <p>
          Telehealth is a type of care that allows patients to access health services using
          electronic communications, including asynchronous text-based consultations, secure
          messaging, and audio-video interfaces.
        </p>
        <p className="mt-3">
          Electronic systems used by Blissley and its independent clinical partners will
          incorporate network and software security protocols to protect the confidentiality of
          patient identification and health data, and will include measures to safeguard data
          integrity against intentional or unintentional corruption.
        </p>

        <SubHead>Expected Benefits</SubHead>
        <BulletList items={[
          "Improved access to healthcare by enabling a patient to receive services across distances and without the need for an in-person visit.",
          "More efficient medical evaluation and management.",
          "Faster access to independent licensed physicians without traditional waiting room delays.",
          "Maintaining continuity of care with established providers.",
          "Access to compounded medications at significantly lower cost than brand-name alternatives.",
        ]} />

        <SubHead>Possible Risks</SubHead>
        <p>
          As with any medical procedure, there are potential risks associated with the use of
          telehealth. These risks include, but may not be limited to:
        </p>
        <BulletList items={[
          "In rare cases, information transmitted may not be sufficient to allow for appropriate medical decision making by the physician or other clinical staff.",
          "Delays in medical evaluation and treatment could occur due to deficiencies or failures of equipment or connectivity.",
          "In very rare instances, security protocols could fail, causing a breach of privacy of personal medical information.",
          "In rare cases, a lack of access to complete medical records may result in adverse drug interactions, allergic reactions, or other judgmental errors.",
        ]} />

        <SubHead>By consenting to these terms, I understand and agree to the following:</SubHead>
        <div className="mt-3 flex flex-col gap-2">
          {[
            "I understand that the laws that protect privacy and the confidentiality of medical information also apply to telehealth, and that no information obtained in the use of telehealth which identifies me will be disclosed to researchers or other entities without my consent.",
            "I understand that I have the right to withhold or withdraw my consent to the use of telehealth in the course of my care at any time, without affecting my right to future care or treatment.",
            "I understand that I have the right to inspect all information obtained and documented in the course of a telehealth interaction and may receive copies of this information for a reasonable fee.",
            "I understand that a variety of alternative methods of healthcare may be available to me and that I may choose one or more of these at any time.",
            "I understand that it is in my best interest to inform my physician or other clinical staff of any other healthcare providers involved in my medical care.",
            "I understand that I may expect the anticipated benefits from the use of telehealth in my care, but that no results can be guaranteed or assured.",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
              <span className="flex-shrink-0 mt-0.5 text-xs font-bold text-[#1C3829] w-5">{i + 1}.</span>
              <span className="text-sm text-gray-600">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl border border-[#1C3829]/20 bg-[#F4F7F4]">
          <p className="font-semibold text-gray-700 mb-2">Client Consent to the Use of Telehealth</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            I have read and understand the information provided above regarding telehealth. I
            hereby give my informed consent for the use of telehealth in my healthcare. My
            continued use of the Blissley services constitutes my understanding and acceptance
            of the above terms and I hereby authorize the use of telehealth in the course of my
            diagnosis and treatment.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "hipaa",
    roman: "II",
    title: "HIPAA Consent",
    content: (
      <>
        <p>
          The Health Insurance Portability and Accountability Act (HIPAA) provides safeguards to
          protect your privacy. This consent describes how your Protected Health Information
          (PHI) may be used and disclosed in connection with services provided through the
          Blissley platform.
        </p>

        <SubHead>Our HIPAA Policies</SubHead>
        <BulletList items={[
          "Patient information will be kept confidential except as is necessary to provide services or to ensure that all administrative matters related to your care are handled appropriately. This specifically includes the sharing of information with independent healthcare providers, laboratories, and pharmacies as necessary and appropriate for your care.",
          "It is the policy of Blissley to send you communications regarding your care, appointment reminders, and policy updates via telephone, email, SMS, or other means convenient for the practice or as requested by you.",
          "Blissley utilizes a number of vendors in the conduct of business. These vendors may have access to PHI but must agree to abide by the confidentiality rules of HIPAA.",
          "You understand and agree to inspections and review of documents which may include PHI by government agencies in normal performance of their duties.",
          "Your confidential information will not be used for the purposes of marketing or advertising of products, goods, or services without your consent.",
          "We agree to provide patients with access to their records in accordance with state and federal laws.",
        ]} />

        <p className="mt-5">
          You have the right to request restrictions in the use of your protected health
          information and to request changes in certain policies used within the platform
          concerning your PHI. However, we are not obligated to alter internal policies to
          conform to your request.
        </p>

        <div className="mt-4 p-4 rounded-xl border border-[#1C3829]/20 bg-[#F4F7F4]">
          <p className="text-sm text-gray-600 leading-relaxed">
            My continued use of the services constitutes my understanding and acceptance of the
            HIPAA terms set forth above and any subsequent changes in policy. I understand that
            this consent shall remain in force from this time forward.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "financial",
    roman: "III",
    title: "Financial Consent",
    content: (
      <>
        <p>
          I understand and accept the following financial terms in order to receive services
          through the Blissley platform:
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {[
            "A credit card will be kept on file and any remaining balances for services rendered shall be paid in full.",
            "I authorize TheFactual LLC, DBA Blissley, to submit on my behalf and authorize the release of any medical records or other information necessary to process my consultation order.",
            "I authorize TheFactual LLC, DBA Blissley, to charge my payment method for orders placed, services rendered, and subscription renewals.",
            "I authorize TheFactual LLC, DBA Blissley, to charge my credit card account upon any unpaid balances due.",
            "All programs are auto-renewing. I consent to be automatically charged for any program I am enrolled in unless I explicitly request cancellation at least 72 hours before my payment is processed, in accordance with the Cancellation and Refund Policy.",
            "I certify that I am an authorized user of this credit card and that I will not dispute legitimate charges with my credit card company.",
            "I understand that subscription pricing is $149 for the introductory month and $249/month for recurring months, or $199/month on an annual plan, with no hidden fees.",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
              <span className="flex-shrink-0 mt-0.5 text-xs font-bold text-[#1C3829] w-5">{i + 1}.</span>
              <span className="text-sm text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "shipping",
    roman: "IV",
    title: "Shipping Authorization",
    content: (
      <>
        <p>
          All prescription medications are dispensed according to state and federal law with the
          approval of the licensed pharmacist in charge and in compliance with all laws applicable
          from the relevant Medical Boards and State Boards of Pharmacy.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-amber-200 bg-amber-50">
          <p className="text-sm text-amber-800 leading-relaxed">
            <span className="font-semibold">Important:</span> Medication is considered dispensed
            and the order completed when it is signed out for shipping by the licensed pharmacy,
            not when it arrives via delivery. The customer requesting shipping disclaims and agrees
            to hold harmless TheFactual LLC, DBA Blissley, for any delays or errors during the
            shipping process that are outside of our control.
          </p>
        </div>
        <div className="mt-4 p-4 rounded-xl border border-[#1C3829]/20 bg-[#F4F7F4]">
          <p className="text-sm text-gray-600 leading-relaxed">
            My continued use of the services constitutes my understanding and acceptance of the
            above terms and I give permission for the independent licensed pharmacy to ship
            medication to me at the address provided in my intake form or any other address given
            by me, and I agree to all conditions listed above.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "patient-rights",
    roman: "V",
    title: "Summary of Patient Rights",
    content: (
      <>
        <p>By using the Blissley platform, you acknowledge and agree that:</p>
        <div className="mt-4 flex flex-col gap-2">
          {[
            "Blissley is a technology and care coordination platform, not a healthcare provider.",
            "All medical decisions are made exclusively by independent licensed physicians who are not employees of Blissley.",
            "All medications are compounded, dispensed, and shipped by independent licensed third-party pharmacies who are not employees of Blissley.",
            "Telehealth services involve inherent limitations compared to in-person care.",
            "Results from any medication or treatment plan may vary and cannot be guaranteed.",
            "You have the right to withdraw consent and cancel at any time.",
            "In the event of a medical emergency, you should always call 911 or seek in-person emergency care immediately.",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
              <span className="flex-shrink-0 mt-0.5 text-xs font-bold text-[#1C3829] w-5">{i + 1}.</span>
              <span className="text-sm text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "contact",
    roman: "VI",
    title: "Contact Us",
    content: (
      <>
        <p>For any questions regarding this Medical Consent, please contact:</p>
        <address className="mt-4 not-italic p-5 rounded-xl bg-[#F4F7F4] border border-[#1C3829]/10 text-sm flex flex-col gap-1.5">
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>
          <a href="tel:+15172801660" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            (517) 280-1660
          </a>
          <p className="text-gray-500">131 Continental Dr, Ste 305, Newark, DE 19713</p>
        </address>
      </>
    ),
  },
];

export default function ConsentPage() {
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
              Medical Consent
            </h1>
            <p className="text-sm text-gray-400 mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
              Last updated: May 17, 2026
            </p>

            {/* Emergency banner */}
            <div className="p-5 rounded-xl border border-red-200 bg-red-50">
              <p className="text-sm font-bold text-red-800 leading-relaxed tracking-wide uppercase" style={{ fontFamily: "var(--font-manrope)" }}>
                🚨 WE ARE NOT A REPLACEMENT FOR EMERGENCY MEDICAL SERVICES. IF YOU HAVE A MEDICAL
                EMERGENCY, SEEK EMERGENCY MEDICAL CARE IMMEDIATELY IN PERSON OR DIAL 911 OR YOUR
                LOCAL EMERGENCY NUMBER.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              We may change these terms at any time as required by law. This may include changing,
              adding, or removing terms. We may do this in response to legal, business, regulatory,
              or other reasons.
            </p>
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
              TheFactual LLC, doing business as Blissley, is a technology and care coordination
              platform. All medical services are provided by independent licensed physicians. All
              pharmacy fulfillment is handled by independent licensed third-party compounding
              pharmacies. Blissley does not directly provide medical services, employ physicians,
              or operate a pharmacy.
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
