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

const bullets = [
  "Lose 15–20% body weight — clinically proven",
  <>Flat <strong>$249/month.</strong> No surprises. Ever.</>,
  "Real US doctor reviews your case within 24 hours",
  "Free shipping within 24 hours of approval",
  "HSA / FSA eligible · No insurance required",
];

function GreenCheck() {
  return (
    <span
      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
      style={{ backgroundColor: "#1C3829" }}
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function LPHero() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-20"
      style={{ backgroundColor: "#F4F7F4" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">

          {/* IMAGE — first on mobile (order-first), second on desktop (order-last) */}
          <motion.div
            className="flex flex-col items-center gap-4 order-first md:order-last"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
          >
            <div
              className="relative w-full max-w-[240px] sm:max-w-xs md:max-w-full aspect-square rounded-full flex items-center justify-center mx-auto"
              style={{ backgroundColor: "#EBF2ED" }}
            >
              <Image
                src="/product-glp1-injection.avif"
                alt="GLP-1 Injection"
                width={380}
                height={380}
                className="object-contain drop-shadow-2xl"
                style={{ maxHeight: "80%", width: "auto" }}
                priority
              />
            </div>
            <Image
              src="/hsa1.avif"
              alt="HSA/FSA Eligible"
              width={180}
              height={48}
              className="object-contain h-10 w-auto"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-5 order-last md:order-first"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#EBF2ED", color: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                ★★★★★&nbsp; Trusted by 50,000+ patients
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[52px] font-bold leading-[1.1] text-[#111]"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Finally serious about{" "}
              <span style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "#1C3829" }}>
                weight loss?
              </span>{" "}
              So are we.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-500 leading-relaxed"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Doctor-prescribed GLP-1. Flat $249/month. Ships to your door.
            </motion.p>

            {/* Bullets */}
            <motion.ul variants={itemVariants} className="flex flex-col gap-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GreenCheck />
                  <span
                    className="text-sm text-[#111] leading-snug"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#qualify"
                className="flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
              >
                DO I QUALIFY?
              </a>
              <a
                href="#offer"
                className="flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-80 active:scale-95"
                style={{ border: "1.5px solid #111", color: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
              >
                SEE PRICING
              </a>
            </motion.div>

            {/* Trust chips */}
            <motion.p
              variants={itemVariants}
              className="text-xs text-gray-400"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              No hidden fees · Cancel anytime · Real humans answer
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
