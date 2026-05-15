"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import FadeUp from "@/components/FadeUp";
import SplitWords from "@/components/SplitWords";

const steps = [
  {
    number: "01",
    title: "Take a 3-minute quiz",
    desc: "Answer a few quick questions about your health history and weight loss goals. No commitment, no credit card.",
    img: "/hiw-quiz.avif",
    alt: "Person taking a quick online quiz on their phone",
  },
  {
    number: "02",
    title: "A licensed doctor reviews your case",
    desc: "A US-licensed physician reviews your information within 24 hours and prescribes the right GLP-1 for you.",
    img: "/hiw-doctor.avif",
    alt: "Doctor reviewing a patient case",
  },
  {
    number: "03",
    title: "Medication arrives at your door",
    desc: "Your prescription is filled by a licensed pharmacy and shipped directly to you — free, fast, and discreet.",
    img: "/hiw-door.avif",
    alt: "Package delivered to front door",
  },
];

export default function HowItWorks() {
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

      // activate steps
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
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="how-it-works">
      <div className="max-w-2xl mx-auto lg:max-w-3xl">

        {/* Header */}
        <div className="mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-4"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            <SplitWords text="Get started in" />{" "}
            <SplitWords
              text="three steps."
              delay={0.18}
              style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic", color: "#1C3829" }}
            />
          </h2>
          <FadeUp delay={0.3}>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm" style={{ fontFamily: "var(--font-manrope)" }}>
              From your first question to your first dose — Blissley makes the process{" "}
              <span className="font-semibold" style={{ color: "#1C3829" }}>simple, fast, and judgment-free.</span>
            </p>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div ref={sectionRef} className="relative">

          {/* Track (background grey line) */}
          <div
            className="absolute top-0 bottom-0"
            style={{ left: "11px", width: "2px", backgroundColor: "#E5E7EB", zIndex: 0 }}
          />

          {/* Animated green fill */}
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

          {/* Steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="relative flex gap-8 pb-20 last:pb-0"
              >
                {/* Circle */}
                <div className="relative z-10 flex-shrink-0 mt-0.5" style={{ width: "24px" }}>
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
                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: activeStep >= i ? "#1C3829" : "#9CA3AF", fontFamily: "var(--font-manrope)" }}
                    >
                      {step.number}
                    </p>
                    <h3
                      className="text-xl font-bold text-[#111] leading-snug mb-2"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm text-gray-500 leading-relaxed max-w-md"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Step image */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ borderRadius: "20px", aspectRatio: "16/9", maxWidth: "480px" }}
                  >
                    <Image
                      src={step.img}
                      alt={step.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#qualify"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
          >
            DO I QUALIFY?
          </a>
          <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
            3 minutes. No commitment required.
          </p>
        </div>

      </div>
    </section>
  );
}
