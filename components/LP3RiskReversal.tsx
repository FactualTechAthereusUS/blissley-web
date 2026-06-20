"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const chips = [
  "✓ Not charged until a doctor approves you",
  "✓ Full refund if not approved",
  "✓ Cancel anytime — one click",
];

export default function LP3RiskReversal() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-manrope)" }}
          >
            YOUR RISK
          </motion.p>

          {/* H2 */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            The only risk is staying where you are.
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base leading-relaxed max-w-xl"
            style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-manrope)" }}
          >
            You&apos;ve already paid the cost of not doing this — in energy, in confidence, in the quiet frustration of trying and trying. The question isn&apos;t whether GLP-1 works. The question is how much longer you wait before using it.
          </motion.p>

          {/* Chips */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {chips.map((chip, i) => (
              <motion.span
                key={i}
                variants={itemVariants}
                className="px-5 py-2 rounded-full text-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "var(--font-manrope)",
                }}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>

          {/* Gold separator */}
          <motion.div
            variants={itemVariants}
            className="w-16 h-px my-2"
            style={{ backgroundColor: "#B8963E" }}
          />

          {/* H3 */}
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            50,000 patients didn&apos;t wait.
          </motion.h3>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#qualify"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#fff",
                color: "#111",
                fontFamily: "var(--font-manrope)",
                letterSpacing: "0.06em",
              }}
            >
              SEE IF I QUALIFY
            </a>
            <a
              href="tel:+15172801660"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-white/10 active:scale-95"
              style={{
                border: "2px solid white",
                color: "white",
                fontFamily: "var(--font-manrope)",
                letterSpacing: "0.06em",
              }}
            >
              TALK TO A HUMAN
            </a>
          </motion.div>

          {/* Fine print */}
          <motion.p
            variants={itemVariants}
            className="text-xs mt-1"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-manrope)" }}
          >
            No commitment. No hidden fees. Cancel anytime. Not charged until approved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
