"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "95%",  label: "Reported appetite reduction" },
  { value: "18%",  label: "Average body weight lost" },
  { value: "88%",  label: "Felt different within 4 weeks" },
  { value: "4.8★", label: "Average patient rating" },
];

function SignalBars({ count, active }: { count: number; active: number }) {
  return (
    <div className="flex items-end gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-sm flex-shrink-0 transition-colors"
          style={{
            width: "8px",
            height: `${12 + i * 6}px`,
            backgroundColor: i < active ? (active >= count ? "#1C3829" : "#EF4444") : "#E5E7EB",
          }}
        />
      ))}
    </div>
  );
}

export default function LP3Mechanism() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F6F4F0" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
            >
              THE SCIENCE
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Your brain is stuck on loud.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              GLP-1 (glucagon-like peptide-1) is a hormone your gut releases when you eat. It travels to the brain and says:{" "}
              <em>you&apos;re full, stop eating.</em> In most people who struggle with weight, this signal is too quiet — or broken entirely.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="h-px w-full"
              style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            />

            <motion.p
              variants={fadeUp}
              className="text-sm text-gray-600 leading-relaxed"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Semaglutide and tirzepatide mimic this signal at full volume. Within days, the food noise — the constant craving, the obsessive thinking about what to eat next — goes quiet. Not through restriction. Not through willpower. Through chemistry.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              className="text-lg leading-snug"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                color: "#1C3829",
              }}
            >
              &ldquo;Within a week, I stopped thinking about food constantly.&rdquo;
            </motion.blockquote>
            <motion.p
              variants={fadeUp}
              className="text-xs text-gray-400 -mt-4"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              — Verified Blissley patient
            </motion.p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            {/* Signal diagram */}
            <div className="bg-white rounded-3xl p-8 flex flex-col items-center gap-6 shadow-sm">
              {/* Brain */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EBF2ED" }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <circle cx="20" cy="20" r="12" stroke="#1C3829" strokeWidth="2" fill="none" />
                  <path d="M12 20 Q16 14 20 20 Q24 26 28 20" stroke="#1C3829" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <text x="20" y="35" textAnchor="middle" fontSize="8" fill="#1C3829" fontFamily="sans-serif">brain</text>
                </svg>
              </div>

              {/* Two signal comparisons */}
              <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
                    WITHOUT GLP-1
                  </p>
                  <SignalBars count={5} active={2} />
                  <p className="text-[10px] text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>Signal: weak</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>
                    WITH GLP-1
                  </p>
                  <SignalBars count={5} active={5} />
                  <p className="text-[10px]" style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}>Signal: full</p>
                </div>
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-5 flex flex-col gap-1"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.08, ease: EASE }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs text-gray-500 leading-snug"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
