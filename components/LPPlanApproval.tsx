"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="w-[260px] sm:w-[300px] mx-auto rounded-[36px] sm:rounded-[40px] p-2.5 sm:p-3 shadow-2xl"
      style={{ backgroundColor: "#111" }}
    >
      <div
        className="rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col"
        style={{ backgroundColor: "#F4F7F4", height: "520px" }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <span className="text-xs font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>
            Blissley
          </span>
          <span className="text-[10px] text-gray-500" style={{ fontFamily: "var(--font-manrope)" }}>
            Patient Portal
          </span>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#22c55e" }} />
        </div>

        {/* Approval Status */}
        <div className="px-4 py-4 border-b border-gray-200">
          <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
            Approval Status
          </p>
          <div className="flex items-start gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: "#EBF2ED" }}
            >
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5l4 4 6-8" stroke="#1C3829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>
                Prescription Approved
              </p>
              <p className="text-[10px] text-gray-500" style={{ fontFamily: "var(--font-manrope)" }}>
                Dr. Sarah Chen, MD · Licensed Physician
              </p>
              <p className="text-[10px] text-gray-500" style={{ fontFamily: "var(--font-manrope)" }}>
                GLP-1 0.5mg · Weekly injection
              </p>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="px-4 py-4 border-b border-gray-200">
          <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
            Shipping
          </p>
          <div className="flex items-start gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: "#EBF2ED" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C3829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="1" />
                <path d="M16 8h4l3 4v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>
                Ships within 24 hours
              </p>
              <p className="text-[10px] text-gray-500 mb-1.5" style={{ fontFamily: "var(--font-manrope)" }}>
                Free, discreet delivery
              </p>
              <span
                className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold text-white"
                style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                PREPARING SHIPMENT
              </span>
            </div>
          </div>
        </div>

        {/* Billing */}
        <div className="px-4 py-4 border-b border-gray-200">
          <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
            Billing
          </p>
          <div className="flex items-start gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: "#EBF2ED" }}
            >
              <svg width="12" height="10" viewBox="0 0 24 20" fill="none" stroke="#1C3829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="1" width="22" height="18" rx="3" />
                <path d="M1 7h22" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>
                $249/month
              </p>
              <p className="text-[10px] font-semibold mb-0.5" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
                No surprises. Ever.
              </p>
              <p className="text-[10px] text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
                Price stays the same as dose increases.
              </p>
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className="px-4 py-4">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#EBF2ED" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1C3829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <span className="text-xs text-[#111] flex-1" style={{ fontFamily: "var(--font-manrope)" }}>
              Message care team
            </span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#22c55e" }} />
              <span className="text-[10px] text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>Online now</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const pillars = [
  {
    num: "01",
    title: "Medication ships on time. Every time.",
    body: "Ships within 24 hours of approval. If it's late, you don't pay for that month.",
    link: "Our shipping guarantee →",
  },
  {
    num: "02",
    title: "The price never changes.",
    body: "Flat $249/month. No intro rate that doubles. No dose-increase surcharges. Cancel in one click.",
    link: "Our pricing promise →",
  },
  {
    num: "03",
    title: "A real person always responds.",
    body: "Not a chatbot. Not a template. A licensed care team member responds within 4 business hours. Always.",
    link: "Our care promise →",
  },
];

export default function LPPlanApproval() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-20 items-center">

          {/* LEFT phone */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-auto"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhoneMockup />
          </motion.div>

          {/* RIGHT pillars */}
          <motion.div
            className="flex flex-col gap-6 flex-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
            >
              THE BLISSLEY PROMISE
            </p>
            <h2
              className="text-3xl font-bold text-[#111] leading-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Three things that make patients never leave.
            </h2>

            {pillars.map((p) => (
              <div
                key={p.num}
                className="flex flex-col gap-1.5 pt-5 border-t border-gray-100"
              >
                <span
                  className="text-5xl font-bold"
                  style={{ color: "rgba(28,56,41,0.2)", fontFamily: "var(--font-manrope)" }}
                >
                  {p.num}
                </span>
                <h3
                  className="text-lg font-bold text-[#111]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                  {p.body}
                </p>
                <a
                  href="#qualify"
                  className="text-xs font-semibold"
                  style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                >
                  {p.link}
                </a>
              </div>
            ))}

            <FadeUp delay={0.2}>
              <a
                href="#qualify"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white mt-2 transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
              >
                START NOW
              </a>
            </FadeUp>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
