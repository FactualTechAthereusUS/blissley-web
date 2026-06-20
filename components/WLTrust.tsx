"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillars = [
  {
    num: "01",
    title: "Honest pricing, always.",
    body: "One price. No surprise billing. No intro rate that doubles next month. No hidden fees. Cancel anytime, one click.",
  },
  {
    num: "02",
    title: "A real human answers fast.",
    body: "Questions answered by a real person — not a bot, not a 7-day email queue. Fast, because your health doesn't wait.",
  },
  {
    num: "03",
    title: "Ships when it's supposed to.",
    body: "Your medication leaves on time. Every time. Temperature-controlled and tracked from pharmacy to your door.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function WLTrust() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1C3829" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-manrope)" }}
          >
            The Blissley Promise
          </p>
          <h2
            className="text-3xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Why patients choose{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
              }}
            >
              Blissley.
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((p) => (
            <motion.div
              key={p.num}
              variants={item}
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span
                className="text-5xl font-bold"
                style={{ color: "rgba(255,255,255,0.15)", fontFamily: "var(--font-manrope)" }}
              >
                {p.num}
              </span>
              <h3
                className="text-xl font-bold text-white leading-snug"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-manrope)" }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
