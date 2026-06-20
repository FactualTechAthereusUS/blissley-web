"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

type CompetitorCard = {
  title: string;
  items: { icon: "x" | "check"; text: string }[];
  bg: string;
  border: string;
  badge?: string;
  footer?: string;
  dark?: boolean;
  cta?: boolean;
};

const cards: CompetitorCard[] = [
  {
    title: 'The $79/month site',
    bg: "#FFF8F8",
    border: "#FECACA",
    items: [
      { icon: "x", text: "Price doubles when your dose increases (and it will)" },
      { icon: "x", text: "Support is a chatbot or 48hr email response" },
      { icon: "x", text: "Pharmacy not disclosed — you don't know where it's made" },
      { icon: "x", text: "Cancellation requires a phone call or 30-day notice" },
      { icon: "x", text: "No proactive dose adjustment — you figure it out" },
    ],
  },
  {
    title: 'The big-name platform',
    bg: "#FFF8F8",
    border: "#FECACA",
    items: [
      { icon: "x", text: "$39/month membership + medication cost = $300+/month actual spend" },
      { icon: "x", text: "AI chatbot wall — real human access is premium" },
      { icon: "x", text: "Shipping delays are the #1 complaint on Trustpilot" },
      { icon: "x", text: "Auto-charges you for refills you didn't confirm" },
      { icon: "x", text: "Can't cancel without navigating 4 screens" },
    ],
  },
  {
    title: 'Blissley — $249/month',
    bg: "#EBF2ED",
    border: "#1C3829",
    badge: "WHAT YOU ACTUALLY GET",
    items: [
      { icon: "check", text: "Same price when your dose increases. Forever." },
      { icon: "check", text: "Real human responds within 4 hours. Always." },
      { icon: "check", text: "FDA-registered pharmacies named on our site" },
      { icon: "check", text: "Cancel in one click. No call. No friction." },
      { icon: "check", text: "Doctor proactively adjusts your dose at 60 days" },
    ],
    footer: "$249/month. Everything included. Not a dollar more.",
    cta: true,
  },
];

function XIcon() {
  return (
    <span
      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
      style={{ backgroundColor: "#FECACA" }}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1 1l6 6M7 1L1 7" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function CheckIcon() {
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

export default function LP3WhyNotCheaper() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
          >
            ON PRICE
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-3"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Yes. You can get it cheaper.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Here&apos;s what the cheaper version actually costs.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="rounded-2xl p-7 flex flex-col gap-4 relative"
              style={{ backgroundColor: card.bg, border: `1.5px solid ${card.border}` }}
            >
              {card.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full text-white whitespace-nowrap"
                    style={{ backgroundColor: "#B8963E", fontFamily: "var(--font-manrope)" }}
                  >
                    {card.badge}
                  </span>
                </div>
              )}

              <h3
                className="text-base font-bold text-[#111] leading-snug"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {card.title}
              </h3>

              <ul className="flex flex-col gap-3">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    {item.icon === "x" ? <XIcon /> : <CheckIcon />}
                    <span
                      className="text-sm text-gray-600 leading-snug min-w-0"
                      style={{ fontFamily: "var(--font-manrope)" }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              {card.footer && (
                <p
                  className="text-sm font-bold mt-1"
                  style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                >
                  {card.footer}
                </p>
              )}

              {card.cta && (
                <a
                  href="#qualify"
                  className="mt-2 flex items-center justify-center py-3 rounded-full text-xs font-bold tracking-widest transition-all hover:opacity-85 active:scale-95"
                  style={{
                    backgroundColor: "#111",
                    color: "#fff",
                    fontFamily: "var(--font-manrope)",
                    letterSpacing: "0.08em",
                  }}
                >
                  GET STARTED
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
