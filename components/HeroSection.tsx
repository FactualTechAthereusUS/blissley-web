"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function CheckIcon() {
  return (
    <span
      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
      style={{ backgroundColor: "#1C3829" }}
      aria-hidden="true"
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

const bullets = [
  "Lose pounds of fat every week",
  <><strong>No hidden fees.</strong> Everything you need is included.</>,
  <>Start for just <strong>$149</strong>, no insurance required + free shipping</>,
  "Licensed US doctor reviews your case within 24 hours",
  "HSA / FSA eligible",
];

const photoGrid = [
  { src: "/hero-yellow-dress.jpg",   alt: "Patient",        col: "1",     row: "1 / 3" },
  { src: "/hero-beige-jeans.jpg",    alt: "Patient",        col: "2",     row: "1" },
  { src: "/hero-pink-outfit.jpg",    alt: "Patient",        col: "3",     row: "1" },
  { src: "/hero-gym-brown.jpg",      alt: "Patient result", col: "4",     row: "1 / 3" },
  { src: "/hero-grey-sweatpants.jpg",alt: "Patient result", col: "5",     row: "1" },
  { src: "/hero-gym-green.jpg",      alt: "Patient result", col: "2 / 4", row: "2" },
  { src: "/hero-black-shorts.jpg",   alt: "Patient result", col: "5",     row: "2" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const photoVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

const photoItem = {
  hidden: { opacity: 0, scale: 0.97, y: 20 },
  show:   { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#F4F7F4" }} id="hero">

      {/* ── Text content ── */}
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-8 flex flex-col items-center text-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-sm font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-manrope)", color: "#555" }}
        >
          Join{" "}
          <span className="font-bold" style={{ color: "#111" }}>50,000+</span>{" "}
          Blissley patients finally losing the weight
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.1] font-semibold text-[#111111]"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Finally serious about{" "}
          <span style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "#1C3829", fontWeight: 600 }}>
            weight loss?
          </span>{" "}
          So are we.
        </motion.h1>

        {/* Bullets */}
        <motion.ul
          className="flex flex-col gap-2 text-left w-full max-w-sm mt-1"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          {bullets.map((bullet, i) => (
            <motion.li key={i} className="flex items-start gap-2.5" variants={itemVariants}>
              <CheckIcon />
              <span className="text-sm text-gray-700 leading-snug" style={{ fontFamily: "var(--font-manrope)" }}>
                {bullet}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div className="flex flex-col items-center gap-2 mt-1" variants={itemVariants}>
          <a
            href="#qualify"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white tracking-wide transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
          >
            DO I QUALIFY?
          </a>
          <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
            3 minutes. No commitment required.
          </p>
        </motion.div>
      </motion.div>

      {/* ── Desktop photo mosaic ── */}
      <motion.div
        className="hidden lg:block px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-0"
        variants={photoVariants}
        initial="hidden"
        animate="show"
      >
        <div className="gap-3" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridTemplateRows: "360px 200px" }}>
          {photoGrid.map(({ src, alt, col, row }) => (
            <motion.div
              key={src}
              variants={photoItem}
              style={{ gridColumn: col, gridRow: row }}
              className="rounded-2xl overflow-hidden relative"
            >
              <Image src={src} alt={alt} fill className="object-cover object-top" sizes="20vw" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Mobile 2×2 grid ── */}
      <motion.div
        className="lg:hidden grid grid-cols-2 gap-3 px-4 sm:px-6 pb-6"
        variants={photoVariants}
        initial="hidden"
        animate="show"
      >
        {[
          { src: "/hero-yellow-dress.jpg",   alt: "Before" },
          { src: "/hero-grey-sweatpants.jpg",alt: "After" },
          { src: "/hero-beige-jeans.jpg",    alt: "Before" },
          { src: "/hero-gym-green.jpg",      alt: "After" },
        ].map(({ src, alt }) => (
          <motion.div key={src} variants={photoItem} className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "3/4" }}>
            <Image src={src} alt={alt} fill className="object-cover object-top" sizes="50vw" />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
