"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function LPFinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111" }}>
      <motion.div
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-manrope)" }}
        >
          START TODAY
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Ready to feel like yourself again?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl leading-tight"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontStyle: "italic",
            color: "#B8963E",
          }}
        >
          Blissley makes it simple.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3">
          {["3-minute quiz", "Doctor in 24hrs", "Ships to your door"].map((chip) => (
            <span
              key={chip}
              className="px-4 py-1.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "var(--font-manrope)",
              }}
            >
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#qualify"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "white",
              color: "#111",
              fontFamily: "var(--font-manrope)",
              letterSpacing: "0.06em",
            }}
          >
            DO I QUALIFY?
          </a>
          <a
            href="tel:+15172801660"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white transition-all hover:opacity-80 active:scale-95"
            style={{
              border: "1.5px solid rgba(255,255,255,0.4)",
              fontFamily: "var(--font-manrope)",
              letterSpacing: "0.06em",
            }}
          >
            (517) 280-1660
          </a>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-manrope)" }}
        >
          No commitment. No hidden fees. Cancel anytime.
        </motion.p>
      </motion.div>
    </section>
  );
}
