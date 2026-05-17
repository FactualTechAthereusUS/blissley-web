import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy — Blissley",
  description: "Blissley Cancellation and Refund Policy. Last updated May 17, 2026.",
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

const sections = [
  {
    id: "subscription-services",
    roman: "I",
    title: "Subscription Services",
    content: (
      <>
        <p>
          Your membership in the Blissley subscription program (&quot;Subscription Service&quot;)
          begins when you have completed the intake form, at which time you will be charged for
          the first month of the Subscription Services.
        </p>
        <p className="mt-3">
          The Subscription Services include access to independent licensed physicians for
          consultations, medications where clinically appropriate and prescribed by independent
          licensed physicians, and ongoing patient support.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-[#1C3829]/20 bg-[#F4F7F4]">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold">Please note:</span> If you are disqualified by our
            independent medical provider for any medical reason, you will receive a full refund
            of your most recent charge.
          </p>
        </div>
        <p className="mt-4 text-gray-500">
          There is no guarantee of results or effectiveness due to your participation in the
          Subscription Services.
        </p>
      </>
    ),
  },
  {
    id: "cancellation",
    roman: "II",
    title: "Cancellation Policy",
    content: (
      <>
        <p>
          You may cancel your Subscription Service at any time for any reason. To cancel your
          Subscription Services, please contact customer service at{" "}
          <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829" }}>
            help@blissley.com
          </a>{" "}
          or through the chat feature in your patient portal.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-amber-200 bg-amber-50">
          <p className="text-sm text-amber-800 leading-relaxed">
            <span className="font-semibold">72-Hour Notice Required:</span> To ensure a smooth
            process, we require your cancellation request to be received at least{" "}
            <span className="font-semibold">72 hours prior to your billing date.</span> If this
            notice period is not met, your subscription will be charged on the next billing date,
            and the cancellation will take effect on the subsequent billing date.
          </p>
        </div>
        <p className="mt-4">
          After cancellation, you will continue to receive the Subscription Services through the
          end of your current billing cycle.
        </p>
      </>
    ),
  },
  {
    id: "refund",
    roman: "III",
    title: "Refund Policy",
    content: (
      <>
        <div className="flex flex-col gap-4">
          {[
            {
              label: "Medical Disqualification",
              body: "If your Subscription Service is cancelled due to disqualification by our independent medical provider, you will be issued a full refund for the most recent Subscription Service charge.",
              accent: "#1C3829",
              bg: "#F4F7F4",
              border: "#1C3829",
            },
            {
              label: "All Other Cancellations",
              body: "Other than cancellation due to medical disqualification, IN NO EVENT SHALL YOU BE ISSUED A REFUND UPON CANCELLATION OF THE SUBSCRIPTION SERVICES.",
              accent: "#dc2626",
              bg: "#fef2f2",
              border: "#fca5a5",
            },
            {
              label: "Prescription Medications",
              body: "Federal law generally prohibits the return of prescription medications to pharmacies for refund or reuse once they have been dispensed to a patient, in order to protect public health and safety. Refunds will only be issued for your most recent billing cycle and will not be issued for past billing cycles.",
              accent: "#92400e",
              bg: "#fffbeb",
              border: "#fcd34d",
            },
            {
              label: "Damaged Items",
              body: "Please inspect your medication immediately upon receipt. If the medication appears to be damaged, please contact customer service immediately at help@blissley.com. Damaged items may be replaced by the pharmacy upon receipt of evidence of damage.",
              accent: "#374151",
              bg: "#f9fafb",
              border: "#e5e7eb",
            },
            {
              label: "Incorrect Items",
              body: "If you receive an incorrect medication, please contact help@blissley.com immediately. Incorrect medications will be replaced by the pharmacy at no additional charge.",
              accent: "#374151",
              bg: "#f9fafb",
              border: "#e5e7eb",
            },
          ].map(({ label, body, accent, bg, border }) => (
            <div
              key={label}
              className="p-4 rounded-xl border text-sm"
              style={{ backgroundColor: bg, borderColor: border }}
            >
              <p className="font-semibold mb-1.5" style={{ color: accent }}>{label}</p>
              <p className="text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "faqs",
    roman: "IV",
    title: "Subscription Services FAQs",
    content: (
      <div className="flex flex-col gap-6">
        {[
          {
            q: "What is included in my Subscription Services price?",
            a: "Your Subscription Services represents a single flat price for the subscription purchased ($149 introductory month, $249/month recurring). This includes asynchronous consultations with an independent licensed physician, care coordination, prescription routing to a licensed compounding pharmacy where clinically appropriate, ongoing physician oversight, and 24/7 patient support. Services and medications covered with the Subscription Service price may vary based on your clinical needs and your physician's independent medical judgment.",
          },
          {
            q: "What if my provider determines I am no longer eligible for the Subscription Services?",
            a: "If the independent physician determines you are no longer eligible for the Subscription Services, your subscription will be cancelled and a refund may be issued for your most recent charge. If you have questions or concerns about an eligibility-initiated cancellation, please contact our customer service at help@blissley.com.",
          },
          {
            q: "Can I pause my subscription instead of cancelling?",
            a: "Yes. You may request a subscription pause by contacting help@blissley.com. Pause requests are subject to approval and available for up to 60 days. If you do not cancel or resume before the end of the pause period, your subscription will automatically resume and your payment method will be charged.",
          },
          {
            q: "How do I update my payment method?",
            a: "You can update your payment method at any time through your patient portal or by contacting help@blissley.com.",
          },
          {
            q: "What happens to my prescription if I cancel?",
            a: "Cancellation of your Subscription Service is deemed to be your direction to the pharmacy to cancel any active prescriptions associated with your account. You will not receive any unshipped medication following your cancellation date.",
          },
        ].map(({ q, a }) => (
          <div key={q} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <p className="font-semibold text-gray-800 mb-2">{q}</p>
            <p className="text-gray-500 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    roman: "V",
    title: "Contact Us",
    content: (
      <>
        <p>For any questions regarding this policy, please contact:</p>
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

export default function RefundPage() {
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
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-sm text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
              Last updated: May 17, 2026
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
              Unless otherwise stated herein, Blissley&apos;s Terms of Service govern the
              Subscription Services Cancellation and Refund Policy. In all events, you are
              responsible for all fees from services and healthcare services rendered. This
              Cancellation and Refund Policy governs fees for Subscription Services only.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              TheFactual LLC, DBA Blissley, is a technology and care coordination platform. All
              medical services are provided by independent licensed physicians. All pharmacy
              fulfillment is handled by independent licensed third-party compounding pharmacies.
              Blissley does not directly provide medical services, employ physicians, or operate
              a pharmacy.
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
