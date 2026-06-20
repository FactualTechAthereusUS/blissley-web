"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";

const faqs = [
  {
    q: "How much does the program cost?",
    a: "Our compounded GLP-1 injections start at $149/month with everything included — consultation, prescription, and free shipping. No hidden fees, no insurance required. We also offer brand-name options (Wegovy®, Zepbound®) starting at a $99/month membership plus medication cost.",
  },
  {
    q: "Will this work for me?",
    a: "GLP-1 medications have been clinically proven to help people lose 15–20% of their body weight. As long as you meet basic eligibility criteria (BMI ≥ 27 with a weight-related condition, or BMI ≥ 30), a licensed physician will evaluate your case and determine the best treatment plan.",
  },
  {
    q: "What if my insurance doesn't cover the medication?",
    a: "No problem. Blissley operates entirely outside of insurance, so you pay a transparent flat monthly price. Our compounded GLP-1 options are significantly more affordable than brand-name alternatives, and your payments are HSA/FSA eligible.",
  },
  {
    q: "What can I expect after I sign up?",
    a: "Within 24 hours a US-licensed physician reviews your intake form. Once approved, your prescription is sent to a licensed pharmacy and shipped to your door — typically within 3–5 business days. You'll have ongoing access to your care team throughout your treatment.",
  },
  {
    q: "Is the medication safe?",
    a: "GLP-1 receptor agonists have been FDA-approved and studied for over a decade. Our compounded medications are prepared in FDA-registered, state-licensed pharmacies following strict quality standards. Your physician will review your health history to make sure it's the right fit.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most patients notice reduced appetite within the first week. Meaningful weight loss — typically 1–2 lbs per week — begins within the first month. Results vary by individual, starting dose, and lifestyle factors, but clinical studies show an average of 15–20% body weight loss over 12–16 months.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts or cancellation fees. You can pause or cancel your subscription at any time through your patient portal or by reaching out to our support team.",
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

export default function LPFAQ() {
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
                We&apos;ve got you.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
                You have questions, we have answers.
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
