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

export default function LPRepeatCTA() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1C3829" }}>
      <motion.div
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Ready to lose 15–20% of your body weight?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-sm"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-manrope)" }}
        >
          Join 50,000+ patients. Flat pricing. Ships fast. Real humans.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <motion.a
            href="#qualify"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "white",
              color: "#111",
              fontFamily: "var(--font-manrope)",
              letterSpacing: "0.06em",
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            DO I QUALIFY?
          </motion.a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-80 active:scale-95"
            style={{
              border: "1.5px solid rgba(255,255,255,0.5)",
              fontFamily: "var(--font-manrope)",
              letterSpacing: "0.06em",
            }}
          >
            SEE HOW IT WORKS ↓
          </a>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-manrope)" }}
        >
          ✓ No insurance required · ✓ No hidden fees · ✓ Cancel anytime
        </motion.p>
      </motion.div>
    </section>
  );
}
