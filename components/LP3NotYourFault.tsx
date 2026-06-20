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

function BrainIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="10" stroke="#1C3829" strokeWidth="2" />
      <path d="M10 16 Q13 11 16 16 Q19 21 22 16" stroke="#1C3829" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <line x1="16" y1="6" x2="16" y2="26" stroke="#1C3829" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="10" x2="24" y2="10" stroke="#1C3829" strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="15" r="4" stroke="#1C3829" strokeWidth="2" fill="none" />
      <circle cx="24" cy="15" r="4" stroke="#1C3829" strokeWidth="2" fill="none" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="10" stroke="#1C3829" strokeWidth="2" fill="none" />
      <path d="M16 10v6l4 3" stroke="#1C3829" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const cards = [
  {
    icon: <BrainIcon />,
    title: "Your hunger isn't a willpower problem.",
    body: "GLP-1 is a hormone your gut produces naturally. When it's low, your brain never receives the 'you're full' signal — no matter how disciplined you are.",
  },
  {
    icon: <ScaleIcon />,
    title: "Nearly 70% of weight is genetically determined.",
    body: "Your set-point is real. Your metabolism is real. The cards you were dealt are real. GLP-1 resets the signal — not the effort.",
  },
  {
    icon: <ClockIcon />,
    title: "The system wasn't designed for this.",
    body: "GP waitlists are 3–6 months. Insurance won't cover it. And when you finally get in, they tell you to 'try diet and exercise.' Blissley exists because that's not good enough.",
  },
];

export default function LP3NotYourFault() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Headline */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            You didn&apos;t fail the diet.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold leading-tight mt-1"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              color: "#1C3829",
            }}
          >
            The diet failed your biology.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ backgroundColor: "#F4F7F4" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#EBF2ED" }}
              >
                {card.icon}
              </div>
              <h3
                className="text-base font-bold text-[#111] leading-snug"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        >
          <a
            href="#qualify"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
          >
            THIS IS FOR ME →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
