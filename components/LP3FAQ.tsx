"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";

const faqs = [
  {
    q: "Is the medication the same as Ozempic?",
    a: "Our compounded semaglutide contains the same active ingredient as Ozempic. Compounded versions are produced in FDA-registered pharmacies and are significantly more affordable. They are not FDA-approved products — Ozempic is — but they are legal and widely prescribed.",
  },
  {
    q: "What if the doctor doesn't approve me?",
    a: "If a physician determines GLP-1 is not clinically appropriate for you, you won't be charged. We'll refund your consultation. No prescription = no charge.",
  },
  {
    q: "I've tried everything. Will this actually be different?",
    a: "GLP-1 works through a mechanism that willpower and calorie restriction cannot replicate — it changes the hormonal signal your brain receives. That's why patients who've tried every diet for years see results within weeks. It's not trying harder. It's different biology.",
  },
  {
    q: "How long will I need to take it?",
    a: "Most patients take GLP-1 for 12–24 months. Some continue maintenance doses indefinitely. Your physician will guide this based on your results and goals. There's no shame in long-term treatment — insulin is long-term. Blood pressure medication is long-term. This is no different.",
  },
  {
    q: "What are the side effects?",
    a: "The most common: mild nausea, especially in the first 2–4 weeks as your body adjusts. Most patients describe it as manageable and temporary. Serious side effects are rare and your physician screens for contraindications before prescribing. Full safety information is available at checkout.",
  },
  {
    q: "What if I need to pause or stop?",
    a: "Cancel or pause anytime through your patient portal — one click, no call, no 30-day notice. If you stop, some weight regain is common. Your care team will help you plan a sensible transition.",
  },
  {
    q: "Is my information safe?",
    a: "Yes. We are HIPAA-compliant. Your health information is protected under federal law and never sold. Our privacy policy is on the site — not buried.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[#1C3829]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="text-base font-semibold text-[#111] leading-snug"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p
          className="text-sm text-gray-500 leading-relaxed pb-6"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function LP3FAQ() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24">

          {/* LEFT sticky */}
          <div className="md:w-64 lg:w-72 md:sticky md:top-32 md:self-start flex flex-col gap-3 lg:gap-4 flex-shrink-0">
            <FadeUp>
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                FAQS
              </p>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2
                className="text-3xl font-bold text-[#111] leading-tight"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Still unsure?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                These are the questions we hear most. Real answers, no spin.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <a
                href="mailto:help@blissley.com"
                className="text-sm font-semibold"
                style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                help@blissley.com
              </a>
            </FadeUp>
          </div>

          {/* RIGHT accordion */}
          <div className="flex-1">
            {faqs.map((item, i) => (
              <Item key={i} q={item.q} a={item.a} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
