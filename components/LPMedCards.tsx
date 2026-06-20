"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

const products = [
  {
    img: "/product-glp1-injection.avif",
    bg: "#EBF2ED",
    badge: "IN STOCK",
    badgeBg: "#1C3829",
    badgeText: "white",
    price: "Starting at $149",
    name: "GLP-1 Injections",
    desc: "One simple injection per week.",
    cta: "GET STARTED",
    ctaFilled: true,
    ring: false,
  },
  {
    img: "/product-glp1-tablet.avif",
    bg: "#EBF2ED",
    badge: "MOST POPULAR",
    badgeBg: "#B8963E",
    badgeText: "white",
    price: "Starting at $249",
    name: "GLP-1 Tablets",
    desc: "One dissolvable tablet per day.",
    cta: "GET STARTED",
    ctaFilled: true,
    ring: true,
  },
  {
    img: "/product-wegovy-pill.avif",
    bg: "#F2F2F0",
    badge: "BRAND NAME",
    badgeBg: "#E5E5E0",
    badgeText: "#555",
    price: "$99/mo + medication",
    name: "Wegovy® / Zepbound®",
    desc: "Availability subject to change.",
    cta: "GET STARTED",
    ctaFilled: false,
    ring: false,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function LPMedCards() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeUp className="mb-10 text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
          >
            MEDICATIONS
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Trusted by experts,
            <br />
            <span style={{ color: "#1C3829" }}>priced for you.</span>
          </h2>
        </FadeUp>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {products.map((p) => (
            <motion.div
              key={p.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col rounded-3xl overflow-visible relative"
              style={{
                backgroundColor: p.bg,
                ...(p.ring ? { boxShadow: `0 0 0 2px rgba(184,150,62,0.3)` } : {}),
              }}
            >
              {/* Image overflow top */}
              <div className="flex items-end justify-center h-56 -mt-8 px-6 relative z-10">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={260}
                  height={200}
                  className="object-contain drop-shadow-xl max-h-56 w-auto"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-2 px-6 pt-5 pb-7">
                <span
                  className="inline-flex items-center self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-widest"
                  style={{ backgroundColor: p.badgeBg, color: p.badgeText, fontFamily: "var(--font-manrope)" }}
                >
                  {p.badge}
                </span>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                >
                  {p.price}
                </p>
                <h3
                  className="text-lg font-bold text-[#111]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {p.name}
                </h3>
                <p className="text-xs text-gray-500 leading-snug" style={{ fontFamily: "var(--font-manrope)" }}>
                  {p.desc}
                </p>
                <a
                  href="#qualify"
                  className="mt-3 flex items-center justify-center py-3 rounded-full text-xs font-bold tracking-widest transition-all hover:opacity-80 active:scale-95"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    letterSpacing: "0.08em",
                    ...(p.ctaFilled
                      ? { backgroundColor: "#111", color: "white" }
                      : { backgroundColor: "transparent", color: "#111", border: "1.5px solid #111" }),
                  }}
                >
                  {p.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
