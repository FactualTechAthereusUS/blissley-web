"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const facts = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 7v11h16V7L10 2z" stroke="#1C3829" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="7" y="11" width="6" height="7" rx="1" stroke="#1C3829" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Technology Company",
    body: "Blissley builds and operates software infrastructure — patient intake, subscription management, and connection layer.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#1C3829" strokeWidth="1.5"/>
        <path d="M7 10l2 2 4-4" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Independent Physicians",
    body: "All clinical decisions are made exclusively by independently licensed physician networks operating under their own medical licenses.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#1C3829" strokeWidth="1.5"/>
        <path d="M6 4V3M10 4V3M14 4V3" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 8h16" stroke="#1C3829" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Licensed Pharmacies",
    body: "Prescriptions are filled and shipped exclusively by independently licensed compounding pharmacies. Blissley does not dispense medications.",
  },
];

export default function WLPlatform() {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="platform">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            className="lg:w-[42%] flex-shrink-0"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
            >
              About Blissley
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-6"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              A technology platform{" "}
              <span style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "#1C3829" }}>
                built for your health.
              </span>
            </h2>
            <p
              className="text-base text-gray-500 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Blissley is a healthcare technology company. We build and operate the software
              that connects patients to independent licensed healthcare providers and licensed
              compounding pharmacies.
            </p>

            {/* Clear not-a disclaimer — the important Stripe-facing section */}
            <div
              className="rounded-2xl p-6 mb-8 flex flex-col gap-3"
              style={{ backgroundColor: "#F7FAF8", border: "1px solid #D4E5DA" }}
            >
              <p
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                What we are not
              </p>
              {[
                "We are not a pharmacy. We do not dispense medications.",
                "We are not a medical practice. We do not employ physicians.",
                "All clinical decisions are made by independently licensed providers.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#EBF2ED" }}
                  >
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3L3 5L7 1" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p
                    className="text-sm text-gray-600 leading-snug"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="#intake"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.05em" }}
            >
              FIND MY TREATMENT
            </Link>
          </motion.div>

          {/* Right — 3 entity cards */}
          <motion.div
            className="flex-1 flex flex-col gap-5"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
          >
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex gap-5 p-7 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#EBF2ED" }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-[#111] mb-1.5"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {f.label}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                { val: "50", unit: "States", label: "covered" },
                { val: "24hr", unit: "", label: "physician review" },
                { val: "4.8", unit: "★", label: "average rating" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-5 text-center"
                  style={{ backgroundColor: "#F7FAF8" }}
                >
                  <p
                    className="text-2xl font-bold text-[#1C3829]"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {s.val}<span className="text-base">{s.unit}</span>
                  </p>
                  <p
                    className="text-[11px] text-gray-400 mt-1 leading-snug"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
