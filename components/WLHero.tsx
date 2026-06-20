"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const trust = [
  "All 50 States",
  "Board-Certified Physicians",
  "Licensed Compounding Pharmacies",
  "LegitScript Certified",
];

export default function WLHero() {
  return (
    <section className="bg-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        {/* Live counter chip — Stripe-style */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gray-200 bg-gray-50"
        >
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse flex-shrink-0" />
          <span
            className="text-xs text-gray-500"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Patients connected today:{" "}
            <span className="font-semibold text-[#111]">1,247</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#111] leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Healthcare that actually{" "}
          <span
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              color: "#1C3829",
            }}
          >
            comes through
          </span>{" "}
          for you.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Blissley connects you to board-certified physicians and licensed pharmacies —
          100% online, across all 50 states.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <Link
            href="#intake"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)", letterSpacing: "0.04em" }}
          >
            Find My Treatment
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-[#111] border border-gray-200 bg-white transition-all hover:border-gray-400 active:scale-95"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            How it works →
          </Link>
        </motion.div>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {trust.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-500"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="#1C3829" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
