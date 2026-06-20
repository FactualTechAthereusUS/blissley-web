"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function GreenCircleCheck() {
  return (
    <span
      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "#1C3829" }}
    >
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
        <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const guarantees = [
  { text: <><strong>$249/month flat.</strong> The price never changes.</> },
  { text: <><strong>Ships in 24 hours</strong> or you don&apos;t pay for that month.</> },
  { text: <><strong>Cancel in one click.</strong> No calls. No friction. Ever.</> },
];

export default function LP3Guarantees() {
  return (
    <motion.section
      className="py-6 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#1C3829",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          {guarantees.map((g, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 bg-white rounded-full px-6 py-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
            >
              <GreenCircleCheck />
              <span
                className="text-sm text-[#111]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {g.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
