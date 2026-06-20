"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const entities = [
  {
    letter: "B",
    color: "#1C3829",
    bg: "#EBF2ED",
    name: "Blissley (TheFactual LLC)",
    role: "Technology Platform",
    desc: "Patient intake software, subscription management, and the technology connection layer. We do not employ physicians or dispense medications.",
  },
  {
    letter: "P",
    color: "#3B82F6",
    bg: "#EFF6FF",
    name: "Physician Networks",
    role: "Clinical Care",
    desc: "Independently licensed, board-certified physicians operating under their own medical licenses and professional corporation structures. All clinical decisions are made exclusively by these providers.",
  },
  {
    letter: "Rx",
    color: "#7C3AED",
    bg: "#F5F0FF",
    name: "Licensed Pharmacies",
    role: "Dispensing & Fulfillment",
    desc: "Independently licensed compounding pharmacies operating under state and federal pharmacy law. All prescriptions are filled and shipped directly by these pharmacies.",
  },
];

export default function HomePlatform() {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="platform">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            className="lg:w-[38%] flex-shrink-0"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
              About Blissley
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-5" style={{ fontFamily: "var(--font-manrope)" }}>
              Technology that{" "}
              <span style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "#1C3829" }}>
                connects.
              </span>
              <br />Not a clinic.
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "var(--font-manrope)" }}>
              Blissley is a healthcare technology company — similar to how OpenTable connects diners
              to restaurants, or how Stripe connects businesses to payment networks. We built the
              software. Independent professionals provide the care.
            </p>

            {/* What we are NOT — clean card */}
            <div className="rounded-2xl p-5 mb-8" style={{ backgroundColor: "#F7FAF8", border: "1px solid #D4E5DA" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>What Blissley is not</p>
              {[
                "Not a pharmacy — we do not dispense medications",
                "Not a medical practice — we do not employ physicians",
                "Not a healthcare provider — all care is by independent licensed providers",
              ].map((line) => (
                <div key={line} className="flex items-start gap-2.5 mb-2 last:mb-0">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#1C3829" }}>
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <p className="text-xs text-gray-600 leading-snug" style={{ fontFamily: "var(--font-manrope)" }}>{line}</p>
                </div>
              ))}
            </div>

            <Link
              href="/weightloss"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)", letterSpacing: "0.05em" }}
            >
              GET STARTED
            </Link>
          </motion.div>

          {/* Right — 3 entity cards */}
          <motion.div
            className="flex-1 flex flex-col gap-4"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
          >
            {/* Connection diagram header */}
            <div className="flex items-center gap-3 mb-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-manrope)" }}>Three independent entities</p>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {entities.map((e, i) => (
              <div key={e.name} className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all">
                {/* Letter avatar */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-black"
                  style={{ backgroundColor: e.bg, color: e.color, fontFamily: "var(--font-manrope)" }}
                >
                  {e.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-bold text-[#111] leading-snug" style={{ fontFamily: "var(--font-manrope)" }}>{e.name}</p>
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: e.bg, color: e.color, fontFamily: "var(--font-manrope)" }}>
                      {e.role}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>{e.desc}</p>
                </div>
              </div>
            ))}

            {/* Arrow connectors */}
            <div className="flex items-center justify-center gap-4 py-2">
              {["Patient intake", "→", "Physician review", "→", "Pharmacy fulfillment"].map((s, i) => (
                <span key={i} className="text-xs" style={{ color: i % 2 === 1 ? "#D1D5DB" : "#9CA3AF", fontFamily: "var(--font-manrope)", fontWeight: i % 2 === 1 ? 400 : 600 }}>
                  {s}
                </span>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
