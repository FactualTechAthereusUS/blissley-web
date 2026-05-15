"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import SplitWords from "@/components/SplitWords";

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

export default function FAQ() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#111] text-center mb-14 leading-tight"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          <SplitWords text="Frequently Asked Questions" />
        </h2>

        <div>
          {faqs.map((item, i) => (
            <Item key={i} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Still have questions?
          </p>
          <a
            href="#qualify"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
          >
            GET STARTED — DO I QUALIFY?
          </a>
        </div>
      </div>
    </section>
  );
}
