"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

function Check() {
  return (
    <span
      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "#1C3829" }}
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

const plans = [
  {
    img: "/product-glp1-injection.avif",
    imgH: 200,
    bg: "#EBF2ED",
    badge: null,
    badgeBg: null,
    label: "GLP-1 Injections",
    sublabel: "Semaglutide · Weekly injection",
    price: "Starting at $149",
    priceColor: "#1C3829",
    features: [
      "Licensed US doctor included",
      "Free shipping every month",
      "Cancel or pause anytime",
      "HSA / FSA eligible",
    ],
    cta: "GET STARTED",
    ctaFilled: true,
  },
  {
    img: "/product-glp1-tablet.avif",
    imgH: 210,
    bg: "#1C3829",
    badge: "MOST POPULAR",
    badgeBg: "#B8963E",
    label: "GLP-1 Tablets",
    sublabel: "Oral semaglutide · Daily dissolve",
    price: "Starting at $249",
    priceColor: "#B8963E",
    features: [
      "Licensed US doctor included",
      "Free expedited shipping",
      "Cancel or pause anytime",
      "HSA / FSA eligible",
    ],
    cta: "GET STARTED",
    ctaFilled: true,
    dark: true,
  },
  {
    img: "/product-wegovy-pill.avif",
    imgH: 190,
    bg: "#F6F4F0",
    badge: "BRAND NAME",
    badgeBg: "#111",
    label: "Wegovy® / Zepbound®",
    sublabel: "FDA-approved · Brand name",
    price: "$99/mo + medication cost",
    priceColor: "#888",
    features: [
      "Brand-name prescription",
      "Insurance support included",
      "Cancel anytime",
      "HSA / FSA eligible",
    ],
    cta: "LEARN MORE",
    ctaFilled: false,
  },
];

export default function LPOffer() {
  return (
    <section
      className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      id="offer"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={itemVariants}>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
            >
              Medications
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Trusted by experts,{" "}
              <span style={{ color: "#1C3829" }}>priced for you.</span>
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Doctor-approved GLP-1 medication, shipped to your door. Flat
            pricing — the price{" "}
            <span className="font-semibold" style={{ color: "#1C3829" }}>
              never increases
            </span>{" "}
            as your dose does.
          </motion.p>
        </motion.div>

        {/* Plan cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.label}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col rounded-3xl overflow-visible relative"
              style={{ backgroundColor: plan.bg }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 left-5 z-20">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
                    style={{
                      backgroundColor: plan.badgeBg ?? "#111",
                      fontFamily: "var(--font-manrope)",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Product image overflows top */}
              <div className="flex items-end justify-center h-56 -mt-6 px-6 relative z-10">
                <Image
                  src={plan.img}
                  alt={plan.label}
                  width={240}
                  height={plan.imgH}
                  className="object-contain drop-shadow-xl max-h-52 w-auto"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-3 px-6 pt-4 pb-7">
                {/* Price */}
                <p
                  className="text-xs font-bold"
                  style={{
                    color: plan.priceColor,
                    fontFamily: "var(--font-manrope)",
                  }}
                >
                  {plan.price}
                </p>

                {/* Name */}
                <div>
                  <h3
                    className="text-lg font-bold leading-tight"
                    style={{
                      color: plan.dark ? "#fff" : "#111",
                      fontFamily: "var(--font-manrope)",
                    }}
                  >
                    {plan.label}
                  </h3>
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      color: plan.dark ? "rgba(255,255,255,0.55)" : "#888",
                      fontFamily: "var(--font-manrope)",
                    }}
                  >
                    {plan.sublabel}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="flex flex-col gap-2 mt-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: plan.dark
                            ? "rgba(255,255,255,0.15)"
                            : "#EBF2ED",
                        }}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path
                            d="M1 3L3 5L7 1"
                            stroke={plan.dark ? "#fff" : "#1C3829"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className="text-xs leading-snug"
                        style={{
                          color: plan.dark ? "rgba(255,255,255,0.75)" : "#555",
                          fontFamily: "var(--font-manrope)",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#qualify"
                  className="mt-4 flex items-center justify-center py-3 rounded-full text-xs font-bold tracking-widest transition-all hover:opacity-85 active:scale-95"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    letterSpacing: "0.08em",
                    ...(plan.ctaFilled
                      ? {
                          backgroundColor: plan.dark ? "#fff" : "#111",
                          color: plan.dark ? "#111" : "#fff",
                        }
                      : {
                          backgroundColor: "transparent",
                          color: "#111",
                          border: "1.5px solid rgba(0,0,0,0.18)",
                        }),
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust row */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        >
          {[
            "✓ No membership fee",
            "✓ Free expedited shipping",
            "✓ Cancel anytime",
            "✓ HSA / FSA eligible",
          ].map((item) => (
            <span
              key={item}
              className="text-xs font-medium text-gray-500"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Legal disclaimer */}
        <p
          className="text-[10px] text-gray-400 text-center mt-6 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          *Pricing shown is for compounded GLP-1 medications. Compounded medications are produced in FDA-registered, state-licensed pharmacies. They are not FDA-approved or evaluated for safety, efficacy, or quality. You are not charged until a licensed physician reviews and approves your case. Results may vary.
        </p>
      </div>
    </section>
  );
}
