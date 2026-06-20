"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const verticals = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="#1C3829" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Weight Loss",
    desc: "Access GLP-1 programs supervised by board-certified obesity specialists.",
    href: "/lp2",
    accent: "#EBF2ED",
    hot: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C9.58 4 6 7.58 6 12c0 3.5 2.1 6.5 5.1 7.8L14 24l2.9-4.2C19.9 18.5 22 15.5 22 12c0-4.42-3.58-8-8-8z" stroke="#1C3829" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Hormone Health",
    desc: "HRT programs for women navigating perimenopause and menopause.",
    href: "#",
    accent: "#F5F0FF",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="4" width="12" height="20" rx="6" stroke="#1C3829" strokeWidth="1.5"/>
        <path d="M14 10v8" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 14h6" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Testosterone",
    desc: "TRT programs for men with low T, supervised by licensed physicians.",
    href: "#",
    accent: "#F0F5FF",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 6c-4.42 0-8 3.58-8 8 0 3.1 1.78 5.8 4.38 7.16L14 22l3.62-0.84C20.22 19.8 22 17.1 22 14c0-4.42-3.58-8-8-8z" stroke="#1C3829" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Sexual Health",
    desc: "ED and sexual wellness treatment options reviewed by licensed providers.",
    href: "#",
    accent: "#FFF5F0",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4c-2.2 4-6 5.5-6 10a6 6 0 0012 0c0-4.5-3.8-6-6-10z" stroke="#1C3829" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Hair",
    desc: "Clinically-backed hair loss programs for men and women.",
    href: "#",
    accent: "#FFFBF0",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function WLVerticals() {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
            >
              Conditions We Connect
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              One platform.{" "}
              <span style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "#1C3829" }}>
                Every condition.
              </span>
            </h2>
          </div>
          <p
            className="text-sm text-gray-400 max-w-xs"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Blissley connects you to independent licensed providers for each health category.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {verticals.map((v) => (
            <motion.div key={v.label} variants={card}>
              <Link
                href={v.href}
                className="group flex flex-col gap-4 p-7 rounded-2xl border border-gray-100 bg-white hover:border-[#1C3829] transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: v.accent }}
                  >
                    {v.icon}
                  </div>
                  {v.hot && (
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)" }}
                    >
                      Most Popular
                    </span>
                  )}
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-[#111] mb-1 group-hover:text-[#1C3829] transition-colors"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {v.label}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {v.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
