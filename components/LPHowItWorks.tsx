"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";

const steps = [
  {
    pill: "TODAY",
    title: "Complete your health profile",
    body: "3-minute online form. No commitment, no credit card.",
  },
  {
    pill: "WITHIN 24 HRS",
    title: "A real US doctor reviews your case",
    body: "Licensed physician reviews your intake and writes your prescription.",
  },
  {
    pill: "SHIPS IN 24 HRS",
    title: "Medication ships from a licensed pharmacy",
    body: "Free, discreet, temperature-controlled delivery. Track every step.",
  },
  {
    pill: "ONGOING",
    title: "Your care team stays with you",
    body: "Monthly check-ins, dose adjustments, and a real human responds within 4 hours. Always.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function LPHowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function onScroll() {
      const section = sectionRef.current;
      const line = lineRef.current;
      if (!section || !line) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionH = section.offsetHeight;
      const scrolled = window.scrollY + window.innerHeight * 0.6;
      const pct = Math.min(1, Math.max(0, (scrolled - sectionTop) / sectionH));
      line.style.height = `${pct * 100}%`;

      let active = -1;
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrolled > top) active = i;
      });
      setActiveStep(active);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-24">

          {/* LEFT sticky */}
          <div className="md:w-72 lg:w-80 md:sticky md:top-32 md:self-start flex flex-col gap-5 flex-shrink-0">
            <FadeUp>
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                WHY BLISSLEY
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Better care,
                <br />
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontStyle: "italic",
                    color: "#1C3829",
                  }}
                >
                  without the wait.
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                Direct telehealth — no insurance bureaucracy, 3-month waitlists, or chatbot walls.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <a
                href="#qualify"
                className="self-start inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
              >
                SEE IF I QUALIFY
              </a>
            </FadeUp>
          </div>

          {/* RIGHT timeline */}
          <div className="flex-1">
            <div ref={sectionRef} className="relative">
              {/* Background line */}
              <div
                className="absolute top-0 bottom-0"
                style={{ left: "11px", width: "2px", backgroundColor: "#E5E7EB", zIndex: 0 }}
              />
              {/* Animated fill */}
              <div
                ref={lineRef}
                className="absolute top-0"
                style={{
                  left: "11px",
                  width: "2px",
                  height: "0%",
                  backgroundColor: "#1C3829",
                  zIndex: 1,
                  transition: "height 0.1s linear",
                }}
              />

              <motion.div
                className="flex flex-col gap-0"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
              >
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    ref={(el) => { stepRefs.current[i] = el; }}
                    className="relative flex gap-5 sm:gap-8 pb-12 sm:pb-16 last:pb-0"
                    variants={itemVariants}
                  >
                    {/* Circle dot */}
                    <div className="relative z-10 flex-shrink-0 mt-1" style={{ width: "24px" }}>
                      <div
                        className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500"
                        style={{
                          backgroundColor: activeStep >= i ? "#1C3829" : "white",
                          borderColor: activeStep >= i ? "#1C3829" : "#D1D5DB",
                        }}
                      >
                        {activeStep >= i && (
                          <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className="inline-flex items-center self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                        style={{ backgroundColor: "#EBF2ED", color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                      >
                        {step.pill}
                      </span>
                      <h3
                        className="text-xl font-bold text-[#111] leading-snug"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
