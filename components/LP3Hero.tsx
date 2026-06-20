"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const photoVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

const photoItem = {
  hidden: { opacity: 0, scale: 0.97, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const photoGrid = [
  { src: "/hero-yellow-dress.jpg",    alt: "Patient", col: "1",     row: "1 / 3" },
  { src: "/hero-beige-jeans.jpg",     alt: "Patient", col: "2",     row: "1" },
  { src: "/hero-pink-outfit.jpg",     alt: "Patient", col: "3",     row: "1" },
  { src: "/hero-gym-brown.jpg",       alt: "Patient", col: "4",     row: "1 / 3" },
  { src: "/hero-grey-sweatpants.jpg", alt: "Patient", col: "5",     row: "1" },
  { src: "/hero-gym-green.jpg",       alt: "Patient", col: "2 / 4", row: "2" },
  { src: "/hero-black-shorts.jpg",    alt: "Patient", col: "5",     row: "2" },
];

export default function LP3Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#F4F7F4" }} id="hero">

      {/* Text content */}
      <motion.div
        className="max-w-2xl mx-auto px-4 sm:px-6 pt-10 pb-8 flex flex-col items-center text-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow pill */}
        <motion.div variants={itemVariants}>
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{ backgroundColor: "#EBF2ED", color: "#1C3829", fontFamily: "var(--font-manrope)" }}
          >
            50,000+ patients · No insurance required
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.1] font-bold text-[#111]"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          The food noise stops.
          <br />
          <span
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              color: "#1C3829",
            }}
          >
            Finally.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={itemVariants}
          className="text-base text-gray-500 leading-relaxed max-w-lg"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          GLP-1 medication prescribed by a real US doctor. Flat $249/month. Ships to your door.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 mt-1">
          <a
            href="#qualify"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white tracking-wide transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
          >
            SEE IF I QUALIFY →
          </a>
          <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
            3 minutes. No credit card. Not charged until a doctor approves you.
          </p>
        </motion.div>
      </motion.div>

      {/* Desktop mosaic */}
      <motion.div
        className="hidden lg:block px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-0"
        variants={photoVariants}
        initial="hidden"
        animate="show"
      >
        <div
          className="gap-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "360px 200px",
          }}
        >
          {photoGrid.map(({ src, alt, col, row }, i) => (
            <motion.div
              key={src}
              variants={photoItem}
              style={{ gridColumn: col, gridRow: row }}
              className="rounded-2xl overflow-hidden relative"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-top"
                sizes="20vw"
                priority={i < 2}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile 2-col grid */}
      <motion.div
        className="lg:hidden grid grid-cols-2 gap-3 px-4 sm:px-6 pb-6"
        variants={photoVariants}
        initial="hidden"
        animate="show"
      >
        {[
          { src: "/hero-yellow-dress.jpg",    alt: "Patient" },
          { src: "/hero-grey-sweatpants.jpg", alt: "Patient" },
          { src: "/hero-beige-jeans.jpg",     alt: "Patient" },
          { src: "/hero-gym-green.jpg",       alt: "Patient" },
        ].map(({ src, alt }) => (
          <motion.div
            key={src}
            variants={photoItem}
            className="rounded-2xl overflow-hidden relative"
            style={{ aspectRatio: "3/4" }}
          >
            <Image src={src} alt={alt} fill className="object-cover object-top" sizes="50vw" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
