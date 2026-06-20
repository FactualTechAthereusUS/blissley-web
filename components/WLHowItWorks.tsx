"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    num: "01",
    title: "Complete your health intake",
    body: "Answer a few questions online. Takes 5 minutes. No office visit, no waiting room.",
    tag: "Today",
  },
  {
    num: "02",
    title: "A physician reviews your case",
    body: "An independently licensed, board-certified physician evaluates your intake and determines if treatment is right for you.",
    tag: "Within 24 hrs",
  },
  {
    num: "03",
    title: "Your medication ships to your door",
    body: "If prescribed, a licensed compounding pharmacy ships directly to you. Fast, discreet, temperature-controlled.",
    tag: "Ships in 24 hrs",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function WLHowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#FAFAFA] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
          >
            How It Works
          </p>
          <h2
            className="text-3xl sm:text-5xl font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Three steps.{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                color: "#1C3829",
              }}
            >
              Zero waiting rooms.
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((s) => (
            <motion.div
              key={s.num}
              variants={item}
              className="bg-white p-8 sm:p-10 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-5xl font-bold"
                  style={{ color: "rgba(28,56,41,0.12)", fontFamily: "var(--font-manrope)" }}
                >
                  {s.num}
                </span>
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                  style={{ backgroundColor: "#EBF2ED", color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                >
                  {s.tag}
                </span>
              </div>
              <h3
                className="text-xl font-bold text-[#111] leading-snug"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
