"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const steps = [
  {
    num: "1",
    title: "Answer 8 health questions",
    body: "Online. Takes 3 minutes. No appointment, no waiting room, no GP referral needed.",
    time: "3 MINUTES",
  },
  {
    num: "2",
    title: "A licensed US doctor reviews your case",
    body: "A real physician reads your intake — not an algorithm. Approved or declined within 24 hours.",
    time: "WITHIN 24 HRS",
  },
  {
    num: "3",
    title: "Medication ships from a licensed pharmacy",
    body: "Free, discreet, temperature-controlled. Arrives in 3–5 days. Trackable every step.",
    time: "3–5 DAYS",
  },
  {
    num: "4",
    title: "Your care team checks in monthly",
    body: "Dose adjustments. Side effect support. A real human responds within 4 hours — always.",
    time: "ONGOING",
  },
];

function SyringeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3l3 3-7 7-3-3 7-7zM12 6l6 6" stroke="#1C3829" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 9l-8 8" stroke="#1C3829" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.4" />
      <circle cx="19" cy="5" r="2" stroke="#1C3829" strokeWidth="1.8" fill="none" />
    </svg>
  );
}

export default function LP3HowItWorks() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="how-it-works">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-3"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Easier than booking a doctor&apos;s appointment.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Four steps. The whole thing takes less time than a GP waiting room.
          </motion.p>
        </motion.div>

        {/* Desktop horizontal stepper */}
        <motion.div
          className="hidden md:flex items-start gap-0 mb-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Connecting dashed line */}
          <div
            className="absolute top-5 left-0 right-0 h-px"
            style={{
              backgroundImage: "repeating-linear-gradient(to right, #D1D5DB 0, #D1D5DB 8px, transparent 8px, transparent 16px)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex-1 flex flex-col items-center text-center px-4 relative z-10"
            >
              {/* Circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-4"
                style={{ backgroundColor: "#EBF2ED", color: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                {step.num}
              </div>
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2"
                style={{ backgroundColor: "#EBF2ED", color: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                {step.time}
              </span>
              <h3
                className="text-sm font-bold text-[#111] leading-snug mb-1.5"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-xs text-gray-500 leading-relaxed"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile vertical timeline */}
        <motion.div
          className="md:hidden flex flex-col gap-0 mb-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: "19px", width: "2px", backgroundColor: "#E5E7EB", zIndex: 0 }}
          />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              <div
                className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: "#EBF2ED", color: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                {step.num}
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0 pt-1">
                <span
                  className="inline-flex self-start items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                  style={{ backgroundColor: "#EBF2ED", color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                >
                  {step.time}
                </span>
                <h3
                  className="text-base font-bold text-[#111] leading-snug"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Needle fear card */}
        <motion.div
          className="rounded-2xl p-8 max-w-2xl mx-auto flex flex-col gap-4 mb-10"
          style={{ backgroundColor: "#F4F7F4", border: "1px solid rgba(28,56,41,0.15)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#EBF2ED" }}
            >
              <SyringeIcon />
            </div>
            <h3
              className="text-base font-bold text-[#111]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Not a fan of needles?
            </h3>
          </div>
          <p
            className="text-sm text-gray-600 leading-relaxed"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Neither are a lot of our patients. That&apos;s why we offer GLP-1 in tablet form — one dissolvable tablet per day, no injections required. Same medication, same results, zero needles.
          </p>
          <a
            href="#qualify"
            className="self-start text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
          >
            See tablet options →
          </a>
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#qualify"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
          >
            START IN 3 MINUTES
          </a>
        </div>

      </div>
    </section>
  );
}
