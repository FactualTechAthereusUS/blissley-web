import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notice of Privacy Practices — Blissley",
  description: "Blissley Notice of Privacy Practices. Effective May 17, 2026.",
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
    id: "who-we-are",
    roman: "I",
    title: "Who We Are",
    content: (
      <p>
        This Notice of Privacy Practices (&quot;Notice&quot;) describes the privacy practices of
        TheFactual LLC, doing business as Blissley (&quot;Blissley,&quot; &quot;we,&quot; or
        &quot;us&quot;), a Delaware limited liability company located at 131 Continental Dr, Ste
        305, Newark, DE 19713, and its affiliates, including certain affiliated professional
        entities, their physicians, healthcare practitioners, and other personnel.
      </p>
    ),
  },
  {
    id: "privacy-obligations",
    roman: "II",
    title: "Our Privacy Obligations",
    content: (
      <>
        <p>
          We are required by law to maintain the privacy of your health information
          (&quot;Protected Health Information&quot; or &quot;PHI&quot;) and to provide you with
          this Notice of our legal duties and privacy practices with respect to your PHI. We are
          also obligated to notify you following a breach of unsecured PHI.
        </p>
        <p className="mt-3">
          When we use or disclose your PHI, we are required to abide by the terms of this Notice
          (or other notice in effect at the time of the use or disclosure).
        </p>
      </>
    ),
  },
  {
    id: "permissible-uses",
    roman: "III",
    title: "Permissible Uses and Disclosures Without Your Written Authorization",
    content: (
      <>
        <p>
          In certain situations, which we describe in Section IV below, we must obtain your
          written authorization in order to use and/or disclose your PHI. We do not need any
          type of authorization, however, for the following uses and disclosures:
        </p>

        <SubHead>A. Uses and Disclosures For Treatment, Payment and Healthcare Operations</SubHead>
        <p>
          We may use and disclose PHI, but not your &quot;Highly Confidential Information&quot;
          (defined in Section IV.B below), in order to treat you, obtain payment for services
          provided to you, and conduct our healthcare operations as detailed below:
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {[
            {
              label: "Treatment",
              body: "We may use and disclose your PHI to provide treatment, for example, to diagnose and treat your condition or illness. We may also disclose PHI to other healthcare providers involved in your treatment.",
            },
            {
              label: "Payment",
              body: "We may use and disclose your PHI to obtain payment for services that we provide to you.",
            },
            {
              label: "Healthcare Operations",
              body: "We may use and disclose your PHI for our healthcare operations, which include internal administration and planning and various activities that improve the quality and cost effectiveness of the care that we deliver to you. For example, we may use PHI to evaluate the quality and competence of our affiliated physicians and other healthcare practitioners. We may also disclose PHI to resolve any complaints you may have.",
            },
          ].map(({ label, body }) => (
            <div key={label} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-gray-700 mb-1">{label}</p>
              <p className="text-gray-500">{body}</p>
            </div>
          ))}
        </div>

        <SubHead>B. Disclosure to Relatives, Close Friends and Other Caregivers</SubHead>
        <p>
          We may use or disclose your PHI to a family member, other relative, a close personal
          friend, or any other person identified by you when you are present for, or otherwise
          available prior to the disclosure, if we: (1) obtain your agreement; (2) provide you
          with the opportunity to object to the disclosure and you do not object; or (3) reasonably
          infer that you do not object to the disclosure.
        </p>
        <p className="mt-3">
          If you are not present, or the opportunity to agree or object to a use or disclosure
          cannot practicably be provided because of your incapacity or an emergency circumstance,
          we may exercise our professional judgment to determine whether a disclosure is in your
          best interests.
        </p>

        <SubHead>C. Public Health Activities</SubHead>
        <p>We may disclose your PHI for the following public health activities:</p>
        <BulletList items={[
          "To report health information to public health authorities for the purpose of preventing or controlling disease, injury, or disability.",
          "To report child abuse and neglect to public health authorities or other government authorities authorized by law to receive such reports.",
          "To report information about products and services under the jurisdiction of the U.S. Food and Drug Administration.",
          "To alert a person who may have been exposed to a communicable disease or may otherwise be at risk of contracting or spreading a disease or condition.",
          "To report information to your employer as required under laws addressing work-related illnesses and injuries or workplace medical surveillance.",
        ]} />

        <SubHead>D. Victims of Abuse, Neglect or Domestic Violence</SubHead>
        <p>
          If we reasonably believe you are a victim of abuse, neglect, or domestic violence, we
          may disclose your PHI to a governmental authority, including a social service or
          protective services agency, authorized by law to receive reports of such abuse, neglect,
          or domestic violence.
        </p>

        <SubHead>E. Health Oversight Activities</SubHead>
        <p>
          We may disclose your PHI to a health oversight agency that oversees the healthcare
          system and is charged with responsibility for ensuring compliance with the rules of
          government health programs, such as Medicare or Medicaid.
        </p>

        <SubHead>F. Judicial and Administrative Proceedings</SubHead>
        <p>
          We may disclose your PHI in the course of a judicial or administrative proceeding in
          response to a legal order or other lawful process.
        </p>

        <SubHead>G. Law Enforcement Officers</SubHead>
        <p>
          We may disclose your PHI to the police or other law enforcement officials as required
          or permitted by law or in compliance with a court order or a grand jury or
          administrative subpoena.
        </p>

        <SubHead>H. Decedents</SubHead>
        <p>
          We may disclose your PHI to a coroner, medical examiner, or funeral director as
          authorized by law.
        </p>

        <SubHead>I. Research</SubHead>
        <p>
          We may use or disclose your PHI without your consent or authorization if an
          Institutional Review Board or Privacy Board approves a waiver of authorization for
          disclosure.
        </p>

        <SubHead>J. Health or Safety</SubHead>
        <p>
          We may use or disclose your PHI to prevent or lessen a serious and imminent threat to
          a person&apos;s or the public&apos;s health or safety.
        </p>

        <SubHead>K. Specialized Government Functions</SubHead>
        <p>
          We may use and disclose your PHI to units of the government with special functions,
          such as the U.S. military or the U.S. Department of State, under certain circumstances.
        </p>

        <SubHead>L. Workers&apos; Compensation</SubHead>
        <p>
          We may disclose your PHI as authorized by and to the extent necessary to comply with
          state law relating to workers&apos; compensation or other similar programs.
        </p>

        <SubHead>M. As Required By Law</SubHead>
        <p>
          We may use and disclose your PHI when required to do so by any other law not already
          referred to in the preceding categories.
        </p>
      </>
    ),
  },
  {
    id: "written-authorization",
    roman: "IV",
    title: "Uses and Disclosures Requiring Your Written Authorization",
    content: (
      <>
        <SubHead>A. Use or Disclosure with Your Authorization</SubHead>
        <p>
          We must obtain your written authorization for uses and disclosures of PHI for marketing
          purposes and disclosures that constitute the sale of PHI. Additionally, other uses and
          disclosures of PHI not described in this Notice will be made only when you give us your
          written permission on an authorization form (&quot;Your Authorization&quot;).
        </p>

        <SubHead>B. Uses and Disclosures of Your Highly Confidential Information</SubHead>
        <p>
          Federal and state law requires special privacy protections for certain highly
          confidential information about you (&quot;Highly Confidential Information&quot;). This
          Highly Confidential Information may include the subset of your PHI that:
        </p>
        <BulletList items={[
          "Is about mental health and developmental disabilities services",
          "Is about alcohol and drug abuse prevention, treatment, and referral",
          "Is about HIV/AIDS testing, diagnosis, or treatment",
          "Is about sexually-transmitted disease(s)",
          "Is about genetic testing",
          "Is about child abuse and neglect",
          "Is about domestic abuse of an adult with a disability",
          "Is about sexual assault",
        ]} />
        <p className="mt-4">
          In order for us to disclose your Highly Confidential Information for a purpose other
          than those permitted by law, we must have Your Authorization.
        </p>

        <SubHead>C. Revocation of Your Authorization</SubHead>
        <p>
          You may withdraw (revoke) your Authorization regarding your Highly Confidential
          Information (except to the extent that we have acted in reliance upon it) by delivering
          a written statement to the Privacy Officer identified below.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    roman: "V",
    title: "Your Rights Regarding Your Protected Health Information",
    content: (
      <>
        <SubHead>A. For Further Information and Complaints</SubHead>
        <p>
          If you would like more information about your privacy rights, if you are concerned that
          we have violated your privacy rights, or if you disagree with a decision that we made
          about access to your PHI, you may contact our Compliance and Privacy Officer at{" "}
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>.
        </p>
        <p className="mt-3">
          You may also file written complaints with the Director, Office for Civil Rights of the
          U.S. Department of Health and Human Services. We will not retaliate against you if you
          file a complaint with us or the Director.
        </p>

        <SubHead>B. Right to Request Additional Restrictions</SubHead>
        <p>
          You have the right to request a restriction on the uses and disclosures of your PHI:
          (1) for treatment, payment, and healthcare operations purposes; and (2) to individuals
          (such as a family member, other relative, or close personal friend) involved in your
          care or with payment related to your care.
        </p>
        <p className="mt-3">
          You have the right to request that we not disclose your PHI to a health plan for
          payment or healthcare operations purposes, if that PHI pertains solely to a healthcare
          item or service for which we have been involved and which has been paid out of pocket
          in full. Unless otherwise required by law, we are required to comply with your request
          for this type of restriction.
        </p>
        <p className="mt-3">
          If you wish to request additional restrictions, please contact our Compliance and
          Privacy Officer at{" "}
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>. We will respond to your request with a written response.
        </p>

        <SubHead>C. Right to Receive Confidential Communications</SubHead>
        <p>
          You may request, and we will accommodate, any reasonable written request for you to
          receive your PHI by alternative means of communication or at alternative locations.
        </p>

        <SubHead>D. Right to Inspect and Copy Your Health Information</SubHead>
        <p>
          You may request access to your medical record file and billing records maintained by us
          in order to inspect and request copies of the records. Under limited circumstances, we
          may deny you access to a portion of your records.
        </p>
        <p className="mt-3">
          To request access to your records, please email{" "}
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>. If you request copies, we will charge you a cost-based fee that includes: (1)
          labor for copying the PHI; (2) supplies for creating the paper copy or electronic media
          if you request an electronic copy; (3) our postage costs, if you request that we mail
          the copies to you; and (4) if you agree in advance, the cost of preparing an
          explanation or summary of the PHI.
        </p>

        <SubHead>E. Right to Request to Amend Your Records</SubHead>
        <p>
          You have the right to request that we amend PHI maintained in your medical record file
          or billing records. To request an amendment, please email{" "}
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>. We will comply with your request unless we believe that the information that
          would be amended is accurate and complete or other special circumstances apply.
        </p>

        <SubHead>F. Right to Receive an Accounting of Disclosures</SubHead>
        <p>
          Upon request, you may obtain an accounting of certain disclosures of your PHI made by
          us during any period of time prior to the date of your request, provided such period
          does not exceed six years. If you request an accounting more than once during a twelve
          (12) month period, we will charge you a reasonable fee for additional accountings and
          will inform you in advance of any fee to provide you with an opportunity to withdraw or
          modify the request.
        </p>

        <SubHead>G. Right to Receive a Copy of This Notice</SubHead>
        <p>
          Upon request, you may obtain a copy of this Notice, either by email or in paper format.
          Please submit your request to:
        </p>
        <address className="mt-4 not-italic p-5 rounded-xl bg-[#F4F7F4] border border-[#1C3829]/10 text-sm flex flex-col gap-1.5">
          <p className="font-semibold text-gray-700">TheFactual LLC, DBA Blissley</p>
          <p className="text-gray-500">131 Continental Dr, Ste 305, Newark, DE 19713</p>
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>
        </address>
      </>
    ),
  },
  {
    id: "effective-date",
    roman: "VI",
    title: "Effective Date and Duration of This Notice",
    content: (
      <>
        <SubHead>A. Effective Date</SubHead>
        <p>This Notice is effective on May 17, 2026.</p>

        <SubHead>B. Right to Change Terms of This Notice</SubHead>
        <p>
          We may change the terms of this Notice at any time. If we change this Notice, we may
          make the new notice terms effective for all Protected Health Information that we
          maintain, including any information created or received prior to issuing the new notice.
          If we change this Notice, we will post the new notice on our website at{" "}
          <a href="https://www.blissley.com" target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            www.blissley.com
          </a>. You may also obtain any new notice by contacting{" "}
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>.
        </p>
      </>
    ),
  },
  {
    id: "privacy-officer",
    roman: "VII",
    title: "Privacy Officer",
    content: (
      <address className="not-italic p-5 rounded-xl bg-[#F4F7F4] border border-[#1C3829]/10 text-sm flex flex-col gap-1.5">
        <p className="font-semibold text-gray-700">TheFactual LLC, DBA Blissley</p>
        <p className="text-gray-500">131 Continental Dr, Ste 305, Newark, DE 19713</p>
        <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
          help@blissley.com
        </a>
        <a href="tel:+15172801660" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
          (517) 280-1660
        </a>
      </address>
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
              Notice of Privacy Practices
            </h1>
            <p className="text-sm text-gray-400 mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
              Effective Date: May 17, 2026
            </p>

            {/* HIPAA callout */}
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50">
              <p className="text-sm font-bold text-amber-900 leading-relaxed tracking-wide uppercase" style={{ fontFamily: "var(--font-manrope)" }}>
                THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED
                AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
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
              TheFactual LLC, doing business as Blissley, is a technology and care coordination
              platform. All medical services are provided by independent licensed physicians and
              healthcare providers. All pharmacy fulfillment is handled by independent licensed
              third-party compounding pharmacies. Blissley does not directly provide medical
              services, employ physicians, or operate a pharmacy.
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
