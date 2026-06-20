"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

const stats = [
  { value: 95, suffix: "%", label: "Less appetite" },
  { value: 88, suffix: "%", label: "Lost weight in 60 days" },
  { value: 93, suffix: "%", label: "Still on program at 6 mo." },
  { value: null, display: "4.8★", label: "Patient rating" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          obs.disconnect();
          const start = performance.now();
          const duration = 1500;
          function frame(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function LPMechanism() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#1C3829" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeUp className="text-center mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-manrope)" }}
          >
            CLINICAL RESULTS
          </p>
          <h2
            className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            The Clinical Trial said 95% felt better.
          </h2>
          <p
            className="text-base sm:text-lg"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
            }}
          >
            Here&apos;s what that actually feels like.
          </p>
        </FadeUp>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="text-center rounded-2xl p-5 sm:p-8"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p
                className="text-4xl sm:text-6xl font-bold text-white leading-none"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {stat.value !== null ? (
                  <CountUp value={stat.value} suffix={stat.suffix!} />
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {stat.display}
                  </motion.span>
                )}
              </p>
              <p
                className="text-[10px] sm:text-xs mt-2 uppercase tracking-wide leading-snug"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-manrope)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <FadeUp delay={0.3} className="text-center mt-12">
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: "white",
              color: "#111",
              fontFamily: "var(--font-manrope)",
              letterSpacing: "0.06em",
            }}
          >
            VIEW HOW IT WORKS
          </a>
        </FadeUp>

      </div>
    </section>
  );
}
