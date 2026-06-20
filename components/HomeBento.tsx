"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function HomeBento() {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 px-4 sm:px-6 lg:px-8" id="conditions">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-12"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
            What We Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>
            One platform.{" "}
            <span style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "#1C3829" }}>
              Every condition.
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Weight Loss — large card */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-2">
            <Link href="/weightloss" className="group flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-all h-full">
              <div className="flex-1 p-8 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EBF2ED" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C6.7 2 4 4.7 4 8c0 5 6 10 6 10s6-5 6-10c0-3.3-2.7-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" fill="#1C3829" opacity=".2"/><path d="M10 2C6.7 2 4 4.7 4 8c0 5 6 10 6 10s6-5 6-10c0-3.3-2.7-6-6-6z" stroke="#1C3829" strokeWidth="1.5" fill="none"/><circle cx="10" cy="8" r="2" stroke="#1C3829" strokeWidth="1.5"/></svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-[#111] group-hover:text-[#1C3829] transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>Weight Loss</h3>
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)" }}>Most Popular</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                    GLP-1 programs supervised by board-certified obesity specialists. Semaglutide and tirzepatide programs. Flat pricing, no surprises.
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-sm font-semibold" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
                  Explore program
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              {/* Stats column */}
              <div className="sm:w-44 flex sm:flex-col gap-0 border-t sm:border-t-0 sm:border-l border-gray-100">
                {[
                  { val: "15–20%", label: "avg weight loss" },
                  { val: "95%", label: "reduced appetite" },
                  { val: "$149", label: "starting / mo" },
                ].map((s, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center justify-center p-5 border-r sm:border-r-0 sm:border-b last:border-0 border-gray-100 text-center">
                    <p className="text-xl font-bold text-[#1C3829]" style={{ fontFamily: "var(--font-manrope)" }}>{s.val}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-snug" style={{ fontFamily: "var(--font-manrope)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          </motion.div>

          {/* Hormone Health */}
          <motion.div variants={item}>
            <Link href="#" className="group flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all h-full">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F5F0FF" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3C7 3 5 5.5 5 8.5c0 3 5 8.5 5 8.5s5-5.5 5-8.5C15 5.5 13 3 10 3z" stroke="#7C3AED" strokeWidth="1.5" fill="none"/></svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111] mb-1 group-hover:text-[#1C3829] transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>Hormone Health</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>HRT programs for perimenopause and menopause, supervised by licensed physicians.</p>
              </div>
              <div className="mt-auto text-xs font-semibold flex items-center gap-1" style={{ color: "#7C3AED", fontFamily: "var(--font-manrope)" }}>
                Coming soon <span className="text-gray-300">→</span>
              </div>
            </Link>
          </motion.div>

          {/* Testosterone */}
          <motion.div variants={item}>
            <Link href="#" className="group flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all h-full">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EFF6FF" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="6" y="3" width="8" height="14" rx="4" stroke="#3B82F6" strokeWidth="1.5"/><path d="M10 8v4" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111] mb-1 group-hover:text-[#1C3829] transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>Testosterone</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>TRT programs for men with low T, supervised by licensed physicians.</p>
              </div>
              <div className="mt-auto text-xs font-semibold flex items-center gap-1" style={{ color: "#3B82F6", fontFamily: "var(--font-manrope)" }}>
                Coming soon <span className="text-gray-300">→</span>
              </div>
            </Link>
          </motion.div>

          {/* Sexual Health */}
          <motion.div variants={item}>
            <Link href="#" className="group flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all h-full">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#FFF1F2" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4c-3.3 0-6 2.7-6 6 0 2.3 1.3 4.4 3.3 5.5L10 17l2.7-1.5A6 6 0 0016 10c0-3.3-2.7-6-6-6z" stroke="#F43F5E" strokeWidth="1.5" fill="none"/></svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111] mb-1 group-hover:text-[#1C3829] transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>Sexual Health</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>ED and sexual wellness treatment reviewed by licensed providers.</p>
              </div>
              <div className="mt-auto text-xs font-semibold flex items-center gap-1" style={{ color: "#F43F5E", fontFamily: "var(--font-manrope)" }}>
                Coming soon <span className="text-gray-300">→</span>
              </div>
            </Link>
          </motion.div>

          {/* Hair */}
          <motion.div variants={item}>
            <Link href="#" className="group flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all h-full">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#FFFBEB" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3c-2 4-5 5.5-5 9a5 5 0 0010 0c0-3.5-3-5-5-9z" stroke="#D97706" strokeWidth="1.5" fill="none" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111] mb-1 group-hover:text-[#1C3829] transition-colors" style={{ fontFamily: "var(--font-manrope)" }}>Hair</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>Clinically-backed hair loss programs for men and women.</p>
              </div>
              <div className="mt-auto text-xs font-semibold flex items-center gap-1" style={{ color: "#D97706", fontFamily: "var(--font-manrope)" }}>
                Coming soon <span className="text-gray-300">→</span>
              </div>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
