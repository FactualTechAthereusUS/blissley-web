"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { val: "50,000+", label: "Patients connected" },
  { val: "50", label: "States covered" },
  { val: "24hr", label: "Physician review time" },
  { val: "4.8★", label: "Average patient rating" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } };

export default function HomeStats() {
  return (
    <section style={{ backgroundColor: "#1C3829" }} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="flex flex-col items-center justify-center text-center p-8 sm:p-10"
              style={{ backgroundColor: "#1C3829" }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-manrope)" }}>
                {s.val}
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-manrope)" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
