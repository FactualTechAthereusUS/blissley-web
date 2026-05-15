"use client";

import { useState } from "react";

const STEPS = [
  {
    q: "What's your weight loss goal?",
    options: [
      "Losing 1–20 lbs",
      "Losing 21–50 lbs",
      "Losing 51+ lbs",
      "Not sure, I just want to lose the weight",
    ],
  },
  {
    q: "What's your current weight?",
    options: [
      "Under 150 lbs",
      "150–200 lbs",
      "200–250 lbs",
      "250+ lbs",
    ],
  },
  {
    q: "Do you have any of the following?",
    options: [
      "Type 2 diabetes or pre-diabetes",
      "High blood pressure",
      "High cholesterol or sleep apnea",
      "None of the above",
    ],
  },
  {
    q: "Have you tried losing weight before?",
    options: [
      "Yes — tried many things, nothing stuck",
      "Currently on another program",
      "No — this is my first time",
      "Lost weight before, but gained it back",
    ],
  },
];

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const isLast = step === STEPS.length - 1;

  function handleContinue() {
    if (selected === null) return;
    setSelected(null);
    if (isLast) {
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="qualify" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F4F0E8" }}>
      <div className="max-w-xl mx-auto">
        <div
          className="rounded-3xl px-8 sm:px-12 py-12"
          style={{ backgroundColor: "#F9F6F0" }}
        >
          {submitted ? (
            /* ── Thank-you screen ── */
            <div className="flex flex-col items-center gap-6 text-center py-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EBF2ED" }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path
                    d="M8 18L15 25L28 12"
                    stroke="#1C3829"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2
                className="text-3xl font-bold text-[#111]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                You&apos;re on your way!
              </h2>
              <p
                className="text-sm text-gray-500 leading-relaxed max-w-xs"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                A Blissley physician will review your information and reach out
                within 24 hours.
              </p>
            </div>
          ) : done ? (
            /* ── Contact form ── */
            <div className="flex flex-col gap-6">
              <div className="text-center">
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "#EBF2ED" }}
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path
                      d="M5 13L10 18L21 8"
                      stroke="#1C3829"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                >
                  Great news
                </p>
                <h2
                  className="text-3xl font-bold text-[#111] leading-tight mb-3"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  You qualify!
                </h2>
                <p
                  className="text-sm text-gray-500 leading-relaxed"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Enter your details and a licensed physician will review your
                  case within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm outline-none transition-colors bg-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm outline-none transition-colors bg-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm outline-none transition-colors bg-white"
                  style={{ fontFamily: "var(--font-manrope)" }}
                />
                <button
                  type="submit"
                  className="mt-2 w-full py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{
                    backgroundColor: "#1C3829",
                    fontFamily: "var(--font-manrope)",
                    letterSpacing: "0.06em",
                  }}
                >
                  GET STARTED
                </button>
              </form>

              <p
                className="text-xs text-gray-400 text-center"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                No commitment. No hidden fees. Cancel anytime.
              </p>
            </div>
          ) : (
            /* ── Quiz step ── */
            <div className="flex flex-col gap-7">
              {/* Progress bar */}
              <div className="flex gap-1.5">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-all duration-500"
                    style={{ backgroundColor: i <= step ? "#1C3829" : "#E5E7EB" }}
                  />
                ))}
              </div>

              <h2
                className="text-2xl sm:text-3xl font-bold text-[#111] leading-tight text-center"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {STEPS[step].q}
              </h2>

              <div className="flex flex-col gap-2.5">
                {STEPS[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className="w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      borderColor: selected === i ? "#1C3829" : "#E5E7EB",
                      backgroundColor: selected === i ? "#EBF2ED" : "white",
                      color: selected === i ? "#1C3829" : "#374151",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <button
                onClick={handleContinue}
                disabled={selected === null}
                className="w-full py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#1C3829",
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "0.06em",
                }}
              >
                CONTINUE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
