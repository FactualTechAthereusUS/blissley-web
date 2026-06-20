"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const outcomes = [
  {
    icon: "☀️",
    title: "Energy that lasts past 2pm",
    body: "No more afternoon crashes. The metabolic shift changes how you feel from morning to night.",
  },
  {
    icon: "🧠",
    title: "Brain fog that lifts",
    body: "GLP-1 receptors are in your brain too. Patients report clarity, focus, and motivation returning within weeks.",
  },
  {
    icon: "💤",
    title: "Sleep that actually restores",
    body: "Weight reduction directly improves sleep apnea and sleep quality. You wake up as a different person.",
  },
  {
    icon: "👗",
    title: "Clothes you forgot you owned",
    body: "Not just fitting into them. Wanting to wear them. The identity shift is real.",
  },
  {
    icon: "❤️",
    title: "A relationship that breathes again",
    body: "Confidence isn't vanity. It's how you show up. Patients report relationship improvements they didn't expect.",
  },
  {
    icon: "🏃",
    title: "Moving without hating it",
    body: "When your joints carry less, movement stops being punishment. Exercise becomes optional — not required.",
  },
];

export default function LP3TheReturn() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#111" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-manrope)" }}
          >
            WHAT COMES BACK
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            This isn&apos;t about the number on the scale.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              color: "#B8963E",
            }}
          >
            It&apos;s about who you are when it moves.
          </motion.p>
        </motion.div>

        {/* Outcome cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col gap-3 rounded-2xl p-6 cursor-default transition-colors"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl" role="img" aria-hidden="true">{o.icon}</span>
              <h3
                className="text-base font-bold text-white leading-snug"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {o.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-manrope)" }}
              >
                {o.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote + CTA */}
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <blockquote
            className="text-xl sm:text-2xl max-w-2xl"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              color: "#B8963E",
            }}
          >
            &ldquo;I finally recognized myself in the mirror for the first time in two years.&rdquo;
          </blockquote>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-manrope)" }}
          >
            — Verified Blissley patient
          </p>

          <a
            href="#qualify"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-white/90 active:scale-95"
            style={{
              border: "2px solid white",
              color: "white",
              fontFamily: "var(--font-manrope)",
              letterSpacing: "0.06em",
            }}
          >
            BECOME THIS VERSION →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
