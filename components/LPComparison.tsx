"use client";

import FadeUp from "@/components/FadeUp";

const rows = [
  {
    feature: "Transparent flat pricing",
    big: { val: "❌", note: "Intro bait-and-switch" },
    cheap: { val: "❌", note: "Prices vary by dose" },
    us: { val: "✅", note: "$249/mo. Always." },
  },
  {
    feature: "Guaranteed shipping SLA",
    big: { val: "❌", note: "No guarantee" },
    cheap: { val: "❌", note: "No guarantee" },
    us: { val: "✅", note: "24hrs or free month" },
  },
  {
    feature: "Real human support (4hr)",
    big: { val: "❌", note: "AI chatbot" },
    cheap: { val: "❌", note: "Email only" },
    us: { val: "✅", note: "Human within 4 hrs" },
  },
  {
    feature: "One-click cancellation",
    big: { val: "❌", note: "Retention hoops" },
    cheap: { val: "✅", note: "" },
    us: { val: "✅", note: "Cancel instantly" },
  },
  {
    feature: "Proactive dose adjustment",
    big: { val: "❌", note: "You have to ask" },
    cheap: { val: "❌", note: "" },
    us: { val: "✅", note: "At 60 days auto" },
  },
  {
    feature: "Monthly care check-in",
    big: { val: "❌", note: "" },
    cheap: { val: "❌", note: "" },
    us: { val: "✅", note: "Included" },
  },
  {
    feature: "Subscription pause option",
    big: { val: "❌", note: "" },
    cheap: { val: "❌", note: "" },
    us: { val: "✅", note: "Anytime" },
  },
  {
    feature: "FDA-registered pharmacy",
    big: { val: "✅", note: "" },
    cheap: { val: "⚠️", note: "Some" },
    us: { val: "✅", note: "Always" },
  },
  {
    feature: "Price stays same as dose ↑",
    big: { val: "❌", note: "Often doubles" },
    cheap: { val: "❌", note: "Yes" },
    us: { val: "✅", note: "Never" },
  },
  {
    feature: "HSA/FSA eligible",
    big: { val: "✅", note: "" },
    cheap: { val: "✅", note: "" },
    us: { val: "✅", note: "" },
  },
];

function Cell({ val, note, highlight = false }: { val: string; note: string; highlight?: boolean }) {
  const color = val === "✅" ? "#1C3829" : val === "❌" ? "#DC3545" : "#B8963E";
  return (
    <td
      className="px-3 sm:px-4 py-3 sm:py-4 text-center text-sm"
      style={{ backgroundColor: highlight ? "rgba(235,242,237,0.3)" : undefined }}
    >
      <span style={{ color, fontFamily: "var(--font-manrope)" }} className="font-semibold text-base">
        {val}
      </span>
      {note && (
        <span className="block text-[10px] text-gray-400 mt-0.5 leading-tight" style={{ fontFamily: "var(--font-manrope)" }}>
          {note}
        </span>
      )}
    </td>
  );
}

export default function LPComparison() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F4F7F4" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeUp className="text-center mb-8 sm:mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
          >
            WHY BLISSLEY
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111] leading-tight mb-3"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            The new standard for GLP-1 care.
          </h2>
          <p className="text-sm text-gray-500" style={{ fontFamily: "var(--font-manrope)" }}>
            See why thousands are switching from the other guys.
          </p>
        </FadeUp>

        {/* ── Desktop / Tablet table (md+) ── */}
        <FadeUp delay={0.1} className="hidden md:block">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: "560px" }}>
                <thead>
                  <tr style={{ backgroundColor: "#F9F9F7" }} className="border-b border-gray-100">
                    <th
                      className="px-5 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest w-2/5"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      Feature
                    </th>
                    <th
                      className="px-3 py-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      Big Platforms
                    </th>
                    <th
                      className="px-3 py-4 text-center text-xs font-semibold text-gray-400 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      Cheap Sites
                    </th>
                    <th
                      className="px-3 py-4 text-center text-xs font-bold uppercase tracking-widest"
                      style={{
                        color: "#1C3829",
                        fontFamily: "var(--font-manrope)",
                        backgroundColor: "rgba(235,242,237,0.5)",
                        borderTop: "3px solid #1C3829",
                      }}
                    >
                      BLISSLEY
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className="border-b border-gray-50 last:border-0"
                      style={{ backgroundColor: i % 2 === 0 ? "white" : "#FAFAFA" }}
                    >
                      <td
                        className="px-5 py-3.5 text-sm font-medium text-[#111]"
                        style={{ fontFamily: "var(--font-manrope)" }}
                      >
                        {row.feature}
                      </td>
                      <Cell val={row.big.val} note={row.big.note} />
                      <Cell val={row.cheap.val} note={row.cheap.note} />
                      <Cell val={row.us.val} note={row.us.note} highlight />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeUp>

        {/* ── Mobile: Blissley feature cards ── */}
        <FadeUp delay={0.1} className="md:hidden">
          <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
            {/* Header */}
            <div
              className="px-5 py-4 border-b-[3px]"
              style={{ borderColor: "#1C3829", backgroundColor: "rgba(235,242,237,0.4)" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest text-center"
                style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
              >
                ✅ What you get with Blissley
              </p>
            </div>
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className="flex items-center justify-between px-5 py-3.5 border-b border-gray-50 last:border-0"
                style={{ backgroundColor: i % 2 === 0 ? "white" : "#FAFAFA" }}
              >
                <span
                  className="text-sm font-medium text-[#111] pr-4 leading-snug flex-1"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {row.feature}
                </span>
                <div className="text-right flex-shrink-0">
                  <span className="text-base font-semibold" style={{ color: "#1C3829" }}>
                    {row.us.val}
                  </span>
                  {row.us.note && (
                    <p
                      className="text-[10px] text-gray-400 mt-0.5"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {row.us.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Mobile sub-note */}
          <p
            className="text-xs text-gray-400 text-center mt-4"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Other GLP-1 platforms fail on pricing, shipping, and support. Blissley doesn&apos;t.
          </p>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.2} className="text-center mt-8">
          <a
            href="#offer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:opacity-80 active:scale-95"
            style={{
              border: "1.5px solid #1C3829",
              color: "#1C3829",
              fontFamily: "var(--font-manrope)",
              letterSpacing: "0.06em",
            }}
          >
            SEE YOUR OPTIONS →
          </a>
        </FadeUp>

      </div>
    </section>
  );
}
