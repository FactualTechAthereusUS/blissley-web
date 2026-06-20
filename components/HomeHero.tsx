"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function PortalMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-25 -z-10"
        style={{ backgroundColor: "#1C3829", transform: "scale(0.85) translateY(20px)" }}
      />

      {/* Card */}
      <div className="rounded-3xl shadow-2xl overflow-hidden" style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
        {/* Top bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
          </div>
          <div className="flex-1 mx-3 h-6 rounded-md flex items-center px-3 text-[10px] text-gray-400" style={{ backgroundColor: "#EFEFEF", fontFamily: "var(--font-manrope)" }}>
            blissley.com/portal
          </div>
        </div>

        <div className="p-5 flex flex-col gap-4">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest" style={{ fontFamily: "var(--font-manrope)" }}>Patient Portal</p>
              <p className="text-sm font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>Welcome back, Sarah</p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-[10px] text-gray-500" style={{ fontFamily: "var(--font-manrope)" }}>Care team online</span>
            </div>
          </div>

          {/* Status cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl p-4" style={{ backgroundColor: "#EBF2ED" }}>
              <p className="text-[9px] font-bold tracking-widest uppercase text-[#1C3829] mb-2" style={{ fontFamily: "var(--font-manrope)" }}>Prescription</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#1C3829" }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </div>
                <p className="text-xs font-bold text-[#1C3829]" style={{ fontFamily: "var(--font-manrope)" }}>Approved</p>
              </div>
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: "#F0F7FF" }}>
              <p className="text-[9px] font-bold tracking-widest uppercase text-blue-600 mb-2" style={{ fontFamily: "var(--font-manrope)" }}>Shipping</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-100">
                  <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#3B82F6" strokeWidth="1.8"><rect x="1" y="3" width="13" height="11" rx="1"/><path d="M14 7h3.5l2.5 3.5V15h-6V7z"/><circle cx="5" cy="16" r="2"/><circle cx="16" cy="16" r="2"/></svg>
                </div>
                <p className="text-xs font-bold text-blue-700" style={{ fontFamily: "var(--font-manrope)" }}>Ships today</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-0">
            {[
              { done: true, label: "Health intake submitted", time: "Jun 18" },
              { done: true, label: "Physician review complete", time: "Jun 19" },
              { done: true, label: "Rx sent to pharmacy", time: "Jun 19" },
              { done: false, label: "Medication ships", time: "Jun 20", active: true },
              { done: false, label: "Delivered to your door", time: "Est Jun 23" },
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start pb-3 last:pb-0">
                <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                  <div
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: step.done || step.active ? "#1C3829" : "#D1D5DB",
                      backgroundColor: step.done ? "#1C3829" : step.active ? "white" : "white",
                    }}
                  >
                    {step.done && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    {step.active && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1C3829" }} />}
                  </div>
                  {i < 4 && <div className="w-px flex-1 mt-0.5" style={{ backgroundColor: step.done ? "#1C3829" : "#E5E7EB", minHeight: "12px" }} />}
                </div>
                <div className="flex items-center justify-between w-full pb-0.5">
                  <p className="text-[11px] font-medium" style={{ color: step.done || step.active ? "#111" : "#9CA3AF", fontFamily: "var(--font-manrope)" }}>{step.label}</p>
                  <p className="text-[10px] text-gray-400 flex-shrink-0 ml-2" style={{ fontFamily: "var(--font-manrope)" }}>{step.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price row */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div>
              <p className="text-[10px] text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>Monthly plan</p>
              <p className="text-base font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>$249 <span className="text-xs font-normal text-gray-400">/ mo</span></p>
            </div>
            <span className="text-[10px] font-bold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)" }}>
              No price changes. Ever.
            </span>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-6 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
        style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#EBF2ED" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1C3829" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        </div>
        <div>
          <p className="text-[10px] font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>Care Team</p>
          <p className="text-[10px] text-gray-500" style={{ fontFamily: "var(--font-manrope)" }}>Your Rx is on its way 🎉</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HomeHero() {
  return (
    <section className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-16">

          {/* LEFT — copy */}
          <div className="flex-1 lg:max-w-xl">
            {/* Live chip */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gray-200"
            >
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse flex-shrink-0" />
              <span className="text-xs text-gray-500" style={{ fontFamily: "var(--font-manrope)" }}>
                Patients connected today:{" "}
                <span className="font-bold text-[#111]">1,247</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.07 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              The smarter way to{" "}
              <span style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "#1C3829" }}>
                access healthcare.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
              className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Blissley is a healthcare technology platform. We connect patients to board-certified
              physicians and licensed pharmacies — 100% online, all 50 states.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Link
                href="/weightloss"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)", letterSpacing: "0.04em" }}
              >
                Start My Intake
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-[#111] border border-gray-200 hover:border-gray-400 transition-all"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                How it works →
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {["All 50 States", "Board-Certified Physicians", "Licensed Pharmacies", "LegitScript Certified"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#1C3829" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — portal mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <PortalMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
