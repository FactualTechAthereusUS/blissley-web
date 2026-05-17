import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weight-Loss Consumer Bill of Rights — Blissley",
  description: "Blissley Weight-Loss Consumer Bill of Rights as required by Florida Statute § 501.0575. Last updated May 17, 2026.",
};

const warnings = [
  "RAPID WEIGHT LOSS MAY CAUSE SERIOUS HEALTH PROBLEMS. RAPID WEIGHT LOSS IS WEIGHT LOSS OF MORE THAN 1½ POUNDS TO 2 POUNDS PER WEEK OR WEIGHT LOSS OF MORE THAN 1 PERCENT OF BODY WEIGHT PER WEEK AFTER THE SECOND WEEK OF PARTICIPATION IN A WEIGHT-LOSS PROGRAM.",
  "CONSULT YOUR PERSONAL PHYSICIAN BEFORE STARTING ANY WEIGHT-LOSS PROGRAM.",
  "ONLY PERMANENT LIFESTYLE CHANGES, SUCH AS MAKING HEALTHFUL FOOD CHOICES AND INCREASING PHYSICAL ACTIVITY, PROMOTE LONG-TERM WEIGHT LOSS.",
  "QUALIFICATIONS OF THIS PROVIDER ARE AVAILABLE UPON REQUEST. PLEASE CONTACT HELP@BLISSLEY.COM.",
];

const rights = [
  "ASK QUESTIONS ABOUT THE POTENTIAL HEALTH RISKS OF THIS PROGRAM AND ITS NUTRITIONAL CONTENT, PSYCHOLOGICAL SUPPORT, AND EDUCATIONAL COMPONENTS.",
  "RECEIVE AN ITEMIZED STATEMENT OF THE ACTUAL OR ESTIMATED PRICE OF THE WEIGHT-LOSS PROGRAM, INCLUDING EXTRA PRODUCTS, SERVICES, SUPPLEMENTS, EXAMINATIONS, AND LABORATORY TESTS.",
  "KNOW THE ACTUAL OR ESTIMATED DURATION OF THE PROGRAM.",
  "KNOW THE NAME, ADDRESS, AND QUALIFICATIONS OF THE DIETITIAN OR NUTRITIONIST WHO HAS REVIEWED AND APPROVED THE WEIGHT-LOSS PROGRAM ACCORDING TO FLORIDA STATUTES § 468.505(1)(j).",
];

export default function BillOfRightsPage() {
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
              Legal · Required by Florida Statute § 501.0575
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-[#111] leading-tight mb-4"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Weight-Loss Consumer Bill of Rights
            </h1>
            <p className="text-sm text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
              Last updated: May 17, 2026
            </p>
          </div>

          {/* Statutory warnings */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold tracking-widest" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>I.</span>
              <h2 className="text-xl font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>
                Statutory Warnings
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {warnings.map((text, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-red-200 bg-red-50 flex gap-3"
                >
                  <span className="flex-shrink-0 mt-0.5 text-xs font-bold text-red-600 w-5">{i + 1}.</span>
                  <p
                    className="text-xs font-semibold text-red-800 leading-relaxed tracking-wide"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold tracking-widest" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>II.</span>
              <h2 className="text-xl font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>
                You Have a Right To
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {rights.map((text, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-[#1C3829]/20 bg-[#F4F7F4] flex gap-3"
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                    style={{ backgroundColor: "#1C3829" }}
                  >
                    {i + 1}
                  </span>
                  <p
                    className="text-xs font-semibold text-gray-700 leading-relaxed tracking-wide pt-1"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold tracking-widest" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>III.</span>
              <h2 className="text-xl font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>
                Contact Us
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
              For questions about your rights under this notice or to request provider
              qualifications, please contact:
            </p>
            <address className="not-italic p-5 rounded-xl bg-[#F4F7F4] border border-[#1C3829]/10 text-sm flex flex-col gap-1.5">
              <a href="mailto:help@blissley.com" className="underline underline-offset-2" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
                help@blissley.com
              </a>
              <a href="tel:+15172801660" className="underline underline-offset-2" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
                (517) 280-1660
              </a>
              <p className="text-gray-500" style={{ fontFamily: "var(--font-manrope)" }}>
                TheFactual LLC, DBA Blissley, 131 Continental Dr, Ste 305, Newark, DE 19713
              </p>
            </address>
          </section>

          {/* Footer note */}
          <div className="pt-10 border-t border-gray-100 flex flex-col gap-4">
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
