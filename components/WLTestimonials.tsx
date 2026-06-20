"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reviews = [
  {
    quote: "Finally felt heard. The intake was thorough and the physician actually read it.",
    name: "Sarah M.",
    tag: "Weight Loss",
    stars: 5,
  },
  {
    quote: "No bait-and-switch pricing. What I saw is what I paid. Month after month.",
    name: "Marcus T.",
    tag: "Weight Loss",
    stars: 5,
  },
  {
    quote: "Shipped faster than expected. Everything arrived exactly as described, discreet packaging.",
    name: "Jennifer K.",
    tag: "Hormone Health",
    stars: 5,
  },
  {
    quote: "The care team responds same day. That alone is worth it vs. my old doctor's office.",
    name: "David R.",
    tag: "Testosterone",
    stars: 5,
  },
  {
    quote: "I appreciated how clearly everything was explained — no confusing fine print.",
    name: "Alicia W.",
    tag: "Weight Loss",
    stars: 5,
  },
  {
    quote: "Been on program for 6 months. Down 34 lbs. Actually sustainable this time.",
    name: "Chris B.",
    tag: "Weight Loss",
    stars: 5,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#B8963E">
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
        </svg>
      ))}
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function WLTestimonials() {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
          >
            Patient Stories
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#111]"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            50,000+ members.{" "}
            <span style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "#1C3829" }}>
              Real results.
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={card}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 border border-gray-100"
            >
              <Stars n={r.stars} />
              <p
                className="text-[15px] text-[#111] leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <span
                  className="text-sm font-semibold text-[#111]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {r.name}
                </span>
                <span
                  className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "#EBF2ED", color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                >
                  {r.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
