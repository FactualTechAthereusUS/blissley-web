import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Blissley",
  description: "Blissley Terms of Service. Last updated May 17, 2026.",
};

const sections = [
  {
    id: "introduction",
    roman: "I",
    title: "Introduction",
    content: (
      <p>
        These Terms of Service describe your rights and responsibilities regarding the Blissley
        Platform. By accessing or using the Platform, you acknowledge that you have read,
        understood, and agreed to be legally bound by these Terms and our Privacy Policy.
      </p>
    ),
    note: "You agree that when you use or enter the Platform, you affirmatively consent to conduct business electronically with Blissley. If you do not agree with any of these Terms or our Privacy Policy, you may not use the Platform.",
  },
  {
    id: "modification",
    roman: "II",
    title: "Modification of Terms",
    content: (
      <p>
        We reserve the right, in our sole discretion, to amend these Terms at any time and for
        any reason. You should check the Terms periodically when you use the Platform. If you use
        the Platform after amended Terms have been posted, you will be deemed to have agreed to
        the amended Terms.
      </p>
    ),
  },
  {
    id: "description",
    roman: "III",
    title: "Description of Blissley",
    content: (
      <>
        <p>You understand and agree that the Platform is intended to facilitate the following services:</p>
        <ol className="list-none mt-3 flex flex-col gap-2">
          {[
            "The development and gathering of healthcare records and information for use in medical provider encounters;",
            "Administrative support in connection with scheduling and payment for healthcare services;",
            "Administrative support in connection with coordinating prescription medications ordered or prescribed by independent medical providers; and",
            "Telecommunications and technology support for direct access to independent medical providers for communication, consultations, assessments, and treatment.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-semibold text-gray-500 flex-shrink-0">({String.fromCharCode(97 + i)})</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4">
          The Platform gathers information from you to enable an affiliated independent medical
          provider to determine whether a prescription or diagnostic test is appropriate for you,
          including applicable health information, diagnostic tests where applicable, and personal
          information. After reviewing your information, the independent medical provider — in
          their sole professional judgment — will determine whether to prescribe medication,
          recommend other treatment, or advise you to consult alternative clinical resources.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-gray-50 flex flex-col gap-3">
          <p className="font-semibold text-gray-700">
            Blissley does not provide any healthcare services through the Platform and is not
            licensed to practice medicine. Blissley does not control or interfere with the
            provision of healthcare services by the medical providers and affiliated professional
            entities, each of whom is independent and solely responsible for the healthcare
            services provided to you.
          </p>
          <p className="font-semibold text-gray-700">
            By accepting this Agreement, you additionally understand and agree that Blissley is
            not acting as a pharmacy, nor does Blissley control or interfere with any pharmacy
            services. By accepting this Agreement, you understand and agree that you may be
            entering into a relationship with a pharmacy, pharmacist, and/or pharmacy group as a
            third-party entity.
          </p>
        </div>
        <p className="mt-4">
          All medical providers who deliver healthcare services through the Platform are:
          (i) independent professionals contracted with affiliated professional entities that
          coordinate with Blissley, and (ii) solely responsible for the healthcare services they
          provide to you. Blissley is therefore not responsible for healthcare services provided
          by any medical provider or affiliated professional entity, including any personal injury
          or property damage.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    roman: "IV",
    title: "Eligibility",
    content: (
      <>
        <p>To use the Services, the following must be true:</p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "You are at least 18 years of age or older.",
            "You live in the United States in a state or territory where the Services are available.",
            "You agree to be legally bound by and comply with these Terms.",
            "You have compatible computing and/or mobile devices and access to the Internet.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1C3829]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Meeting the above requirements does not guarantee you will receive the Services. Medical
          providers and affiliated professional entities may determine on a case-by-case basis
          that healthcare services are not appropriate for a particular user.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    roman: "V",
    title: "Availability",
    content: (
      <p>
        The Services are currently available to individuals located in certain states. To see the
        list of current states, please contact customer service at{" "}
        <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
          help@blissley.com
        </a>.
      </p>
    ),
  },
  {
    id: "registration",
    roman: "VI",
    title: "Registration, User Accounts, and User Data",
    content: (
      <p>
        You are required to register with Blissley to access the Services. Upon registration,
        you may enter, submit, or transmit user information or data on or through the Platform.
        You understand that any data provided by you may be used, copied, or displayed by
        Blissley and provided to our service providers, medical providers, and their affiliated
        professional entities in performance of the Services.
      </p>
    ),
  },
  {
    id: "responsibilities",
    roman: "VII",
    title: "Your Responsibilities and Acknowledgment",
    content: (
      <>
        <p>As a condition of your use of the Services, you agree to the following:</p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "All information provided through the Platform is accurate, complete, and correct, and you will accurately maintain and update any information you have provided to Blissley.",
            "Your permission to use the Platform is personal and non-transferable.",
            "You agree to keep your username and password confidential and to exit from your account at the end of each session.",
            "You are responsible for all activities that occur under your account.",
            "You agree to immediately notify Blissley of any unauthorized use of your account by emailing help@blissley.com.",
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
    id: "restrictions",
    roman: "VIII",
    title: "Restrictions on Use",
    content: (
      <>
        <p>You will not use the Platform except as expressly permitted in these Terms. You will not:</p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "Use the Platform for any other person than yourself.",
            "Use the Platform in any manner that infringes any intellectual property right or violates any applicable law or regulation.",
            "License, sell, transfer, assign, or distribute the Platform or related materials to any third party.",
            "Use or access the Platform to create competing products or services.",
            "Take any action that could damage, disable, or impair the Platform in any manner.",
            "Disrupt, interfere with, or attempt to gain unauthorized access to our Platform or any computer network.",
            "Upload, transmit, or propagate any virus, Trojan horse, or other harmful computer code.",
            "Remove, delete, or alter any trademarks, warranties, or disclaimers from the Platform.",
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
    id: "licensing",
    roman: "IX",
    title: "Licensing",
    content: (
      <p>
        Subject to your compliance with these Terms, Blissley grants you a personal, limited,
        revocable, nonexclusive, and non-transferable license to view, access, and use the
        Platform and its content solely for your personal and non-commercial use. All rights not
        expressly granted are reserved by Blissley.
      </p>
    ),
  },
  {
    id: "disclaimer-healthcare",
    roman: "X",
    title: "Disclaimer of Limited Healthcare Services",
    content: (
      <>
        <p>
          The Platform is structured for use specific to certain healthcare services and is not,
          and should not be considered or used as, comprehensive medical advice, care, diagnosis,
          or treatment.
        </p>
        <p className="mt-3">
          Always seek the advice of your physician or other qualified healthcare provider with
          any questions you may have regarding personal health, medical conditions, or
          medications, and before commencing or discontinuing any course of treatment.
        </p>
      </>
    ),
  },
  {
    id: "telehealth",
    roman: "XI",
    title: "Telehealth Consent",
    content: (
      <p>
        Telehealth uses electronic communications, information technology, and other means to
        connect patients and licensed healthcare professionals in different locations regarding a
        clinical matter. Though telehealth carries potential benefits, like any medical procedure,
        it also carries potential risks. By using the Services, you agree and acknowledge that
        Blissley is a beneficiary of the Medical Consent and has the right to enforcement.
      </p>
    ),
  },
  {
    id: "payment",
    roman: "XII",
    title: "Payment and Subscription",
    content: (
      <>
        <p>
          When you submit your information for healthcare services, you agree to pay all fees
          due. By entering your payment information and submitting your request, you authorize us
          or our third-party payment processors to charge the amount due.
        </p>
        <p className="mt-4 font-semibold text-gray-700">Subscription Services</p>
        <p className="mt-1">
          Certain products and services available through the Platform require purchase on an
          automatically renewing subscription basis. Your payment method will be automatically
          charged at regular intervals as described during the checkout process until you cancel
          your subscription.
        </p>
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          {[
            { label: "Pricing", value: "$149 introductory month, $249/month recurring. Annual plan available at $199/month." },
            { label: "Cancellation", value: "Cancel anytime via help@blissley.com or your account portal. Takes effect at end of current billing period." },
            { label: "Refunds", value: "Medical consultation fees are non-refundable. Prescription products cannot be returned for reuse or resale." },
          ].map(({ label, value }) => (
            <div key={label} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-gray-700 mb-1">{label}</p>
              <p className="text-gray-500">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">
          You understand and agree that you are responsible for all fees due to receive the
          Services. Blissley-affiliated medical professional entities are not contracted
          healthcare providers with any health insurance plans, and you are solely responsible
          for paying all fees for the healthcare services provided to you.
        </p>
        <p className="mt-3">
          All payment information is maintained within the secure infrastructure provided by our
          payment processor. For information on data privacy practices related to payment
          processing, please review the applicable privacy notice of our payment processor.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    roman: "XIII",
    title: "Privacy",
    content: (
      <p>
        Blissley understands the importance of confidentiality and privacy regarding your
        information. Please see our Privacy Policy for a description of how we may collect, use,
        and disclose your information in connection with the Platform.
      </p>
    ),
  },
  {
    id: "ip",
    roman: "XIV",
    title: "Intellectual Property",
    content: (
      <p>
        Blissley is the sole and exclusive owner of all right, title, and interest in and to the
        Platform and its content, features, and functionality, and all intellectual property
        rights therein. You have permission to use the Platform solely for your personal and
        non-commercial use on the condition that you comply with these Terms. No other right,
        title, or interest in or to the Platform is transferred to you.
      </p>
    ),
  },
  {
    id: "third-party",
    roman: "XV",
    title: "Third-Party Links and Websites",
    content: (
      <p>
        The Platform may contain hyperlinks to other websites operated by third parties. Blissley
        is not responsible for the information, products, or services described on those linked
        sites, and your use of these linked sites is at your own risk.
      </p>
    ),
  },
  {
    id: "disclaimer-warranties",
    roman: "XVI",
    title: "Disclaimer of Warranties",
    content: (
      <p className="uppercase tracking-wide text-[10px] leading-relaxed text-gray-500">
        You acknowledge and agree that the Platform and the Services are provided on an "as is"
        and "as available" basis. Your use of the Platform is at your sole risk. Blissley and
        its affiliates make no representations or warranties and specifically disclaim any and
        all warranties of any kind, express or implied, with respect to the Platform and the
        Services, including any warranties with respect to merchantability, fitness for a
        particular purpose, title, non-infringement, availability, security, accuracy,
        completeness, timeliness, functionality, reliability, or speed of delivery.
      </p>
    ),
  },
  {
    id: "liability",
    roman: "XVII",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="uppercase tracking-wide text-[10px] leading-relaxed text-gray-500">
          To the fullest extent permissible pursuant to applicable law, neither Blissley nor its
          related persons or licensors will be liable to you or to any party for any claims,
          liabilities, losses, costs or damages under any legal or equitable theory, whether in
          tort, contract, strict liability or otherwise, including but not limited to any
          indirect, punitive, special, incidental, or consequential damages, including lost
          profits, loss of data, service interruption, or the cost of substitute products or
          services.
        </p>
        <p className="uppercase tracking-wide text-[10px] leading-relaxed text-gray-500 mt-3">
          To the extent permitted by law, the total liability of Blissley for any claims under
          these terms shall not exceed U.S. one hundred dollars ($100.00 USD).
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    roman: "XVIII",
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify, defend, and hold Blissley and any of its related persons,
        licensors, and suppliers harmless from and against any and all third-party claims,
        demands, liabilities, costs or expenses, including attorneys&apos; fees and costs, arising
        from or related to: (i) any breach by you of these Terms, (ii) your use of material or
        features available on the Platform in an unauthorized manner, and/or (iii) a violation
        by you of any applicable laws, rules, or regulations.
      </p>
    ),
  },
  {
    id: "modifications",
    roman: "XIX",
    title: "Modifications to the Platform",
    content: (
      <p>
        Blissley reserves the right at any time and for any reason to modify, temporarily or
        permanently discontinue the Platform or any portion thereof, with or without notice. You
        agree that Blissley shall not be liable to you or any third party for any modification,
        suspension, or discontinuance of the Platform.
      </p>
    ),
  },
  {
    id: "suspension",
    roman: "XX",
    title: "Suspension and Termination of Rights",
    content: (
      <>
        <p>
          The Terms will remain in full force and effect as long as you continue to access or
          use the Platform. You may terminate the Terms at any time by discontinuing use of the
          Platform.
        </p>
        <p className="mt-3">
          Blissley may terminate or suspend any of the rights granted by these Terms and your
          access to the Platform with or without prior notice, at any time, and for any reason.
        </p>
      </>
    ),
  },
  {
    id: "arbitration",
    roman: "XXI",
    title: "Governing Law; Dispute Resolution; Arbitration",
    content: (
      <>
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 mb-4">
          <p className="uppercase tracking-wide text-[10px] leading-relaxed text-amber-800 font-semibold">
            In the event of a dispute, you and Blissley agree to try to resolve it informally
            first. If we cannot resolve it within 60 days, we agree to waive the right to trial
            by jury and arbitrate the claim instead of going to court.
          </p>
        </div>
        <p>
          You agree to resolve disputes with Blissley through binding arbitration, except as
          described in this section. The parties expressly waive the right to bring or
          participate in any kind of class, collective, or mass action, private attorney general
          action, or any other representative action.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-gray-700">Opt-Out: </span>
          You may reject this Arbitration Clause and opt out of arbitration by sending an email
          to{" "}
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>{" "}
          within thirty (30) calendar days of first accepting these Terms.
        </p>
        <p className="mt-4 font-semibold text-gray-700">Arbitration Procedure</p>
        <p className="mt-1">Any demand for arbitration by you will be sent to:</p>
        <address className="mt-2 not-italic p-4 rounded-xl bg-gray-50 border border-gray-200 text-sm">
          TheFactual LLC<br />
          131 Continental Dr, Ste 305<br />
          Newark, DE 19713<br />
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>
        </address>
        <p className="mt-4">
          The arbitration will be administered by National Arbitration and Mediation
          (&quot;NAM&quot;) under its operative Comprehensive Dispute Resolution Rules and
          Procedures. The arbitration will be conducted before a single arbitrator.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-gray-700">Class Action Waiver: </span>
          You and Blissley agree that you and Blissley may bring claims against the other only
          on an individual basis and not on a class, collective, representative, or mass action
          basis.
        </p>
      </>
    ),
  },
  {
    id: "copyright",
    roman: "XXII",
    title: "Copyright Infringement",
    content: (
      <p>
        Blissley complies with the provisions of the Digital Millennium Copyright Act
        (&quot;DMCA&quot;) applicable to Internet service providers (17 U.S.C. § 512). If you
        believe your work has been copied and posted on the Platform in a way that constitutes
        copyright infringement, please contact us at{" "}
        <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
          help@blissley.com
        </a>{" "}
        with the following information: (1) an electronic or physical signature of the person
        authorized to act on behalf of the copyright owner; (2) an identification of the
        copyrighted work claimed to have been infringed; (3) an identification of the material
        claimed to be infringing and where it is located on the Platform; (4) your contact
        information; (5) a good-faith belief statement; and (6) a signed statement under penalty
        of perjury that the information is accurate.
      </p>
    ),
  },
  {
    id: "miscellaneous",
    roman: "XXIII",
    title: "Miscellaneous",
    content: (
      <p>
        These Terms set forth the entire understanding and agreement between you and us with
        respect to the subject matter herein. If any provision of the Terms is found to be
        invalid, the remaining provisions shall remain in full force and effect. Our failure to
        act with respect to any failure by you to comply with these Terms does not waive our
        right to act with respect to subsequent or similar failures.
      </p>
    ),
  },
  {
    id: "contact",
    roman: "XXIV",
    title: "Contact Information",
    content: (
      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { label: "Email", value: "help@blissley.com", href: "mailto:help@blissley.com" },
          { label: "Phone", value: "(517) 280-1660", href: "tel:+15172801660" },
          { label: "Address", value: "131 Continental Dr, Ste 305, Newark, DE 19713", href: undefined },
        ].map(({ label, value, href }) => (
          <div key={label} className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
            {href ? (
              <a href={href} className="text-sm font-medium underline underline-offset-2" style={{ color: "#1C3829" }}>{value}</a>
            ) : (
              <p className="text-sm font-medium text-gray-700">{value}</p>
            )}
          </div>
        ))}
      </div>
    ),
  },
];

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-sm text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
              Last updated: May 17, 2026
            </p>

            {/* Emergency notice */}
            <div className="mt-6 p-4 rounded-xl border border-red-100 bg-red-50">
              <p className="text-sm text-red-700 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                <span className="font-bold">Medical Emergency:</span> Blissley is intended for
                specific non-emergency medical conditions. If you believe you are experiencing a
                medical emergency, please dial <strong>911</strong> or contact your local emergency
                provider immediately.
              </p>
            </div>

            {/* Agreement notice */}
            <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-600 leading-relaxed font-semibold" style={{ fontFamily: "var(--font-manrope)" }}>
                PLEASE READ THIS AGREEMENT CAREFULLY. BY USING THE PLATFORM, YOU AGREE TO BE
                BOUND BY THESE TERMS.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-2" style={{ fontFamily: "var(--font-manrope)" }}>
                THIS AGREEMENT CONTAINS A MANDATORY ARBITRATION PROVISION AND CLASS ACTION WAIVER
                IN SECTION XXI. BY ACCEPTING THESE TERMS, YOU AGREE TO RESOLVE DISPUTES THROUGH
                BINDING ARBITRATION RATHER THAN COURT PROCEEDINGS OR CLASS ACTIONS.
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
            {sections.map(({ id, roman, title, content, note }) => (
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
                  className="text-sm text-gray-600 leading-relaxed flex flex-col gap-3"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {content}
                  {note && (
                    <p className="text-gray-500 italic border-l-2 pl-4" style={{ borderColor: "#1C3829" }}>
                      {note}
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col gap-4">
            <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              Blissley is a patient management platform that works with independent physicians and
              practitioners who provide services utilizing the Blissley Platform. Blissley does not
              directly provide medical or pharmacy services and payment does not guarantee the
              writing or dispensing of a prescription. Medical services are provided via independent
              providers. The information provided on this website is for informational purposes and
              not a substitute for professional medical advice, diagnosis, or treatment. If you have
              questions or concerns about your health, please talk to your doctor. This site is an
              advertisement for services and not any specific medication.
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
