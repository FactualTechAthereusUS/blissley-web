"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3z" stroke="#1C3829" strokeWidth="1.8" fill="none" />
      <path d="M9 12l2 2 4-4" stroke="#1C3829" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="14" rx="1" stroke="#1C3829" strokeWidth="1.8" />
      <path d="M7 10h2M11 10h2M15 10h2M7 14h2M11 14h2M15 14h2" stroke="#1C3829" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 21v-4h6v4" stroke="#1C3829" strokeWidth="1.8" />
      <path d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" stroke="#1C3829" strokeWidth="1.8" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="#1C3829" strokeWidth="1.8" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke="#1C3829" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.5" fill="#1C3829" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="#1C3829" strokeWidth="1.8" />
      <path d="M7 9h10M7 12h6" stroke="#1C3829" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="19" r="3" stroke="#1C3829" strokeWidth="1.5" fill="none" />
      <path d="M15 22l-2 1v-4" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 22l2 1v-4" stroke="#1C3829" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const credentials = [
  {
    icon: <ShieldIcon />,
    title: "Licensed US physicians only",
    body: "Every prescription is reviewed and signed by a state-licensed physician in your state. No algorithms prescribe medication at Blissley.",
  },
  {
    icon: <BuildingIcon />,
    title: "FDA-registered compounding pharmacies",
    body: "Your medication is prepared in FDA-registered, state-licensed compounding pharmacies. Triad Rx, RedRock Pharmacy, Beaker Pharmacy — all listed on our site.",
  },
  {
    icon: <LockIcon />,
    title: "HIPAA-compliant platform",
    body: "Your health information is protected under federal law. We use the same security standards as hospital systems.",
  },
  {
    icon: <CertificateIcon />,
    title: "Compounded, not counterfeit",
    body: "Compounded semaglutide and tirzepatide are legal and widely used. They are NOT FDA-approved medications (that's Ozempic/Wegovy), but they ARE produced legally in federally-regulated facilities.",
  },
];

const checklist = [
  "Do they name their pharmacy partners? (We do.)",
  "Do they show real physician names?",
  "Is the pricing flat — no hidden dose increases?",
  "Can you cancel in one click with no call?",
  "Do they have a real phone number?",
  "Are they HIPAA compliant?",
  "Is the compounding pharmacy FDA-registered?",
];

export default function LP3SafeAndLegit() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F4F7F4" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-12"
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
            SAFETY &amp; CREDENTIALS
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-3"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Real medicine. Real doctors. Real pharmacies.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Not a supplement. Not a meal plan. Not an app. GLP-1 is an FDA-studied prescription medication, prescribed by licensed US physicians and filled by licensed US pharmacies.
          </motion.p>
        </motion.div>

        {/* 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* LEFT — credential blocks */}
          <motion.div
            className="flex flex-col gap-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {credentials.map((cred, i) => (
              <motion.div key={i} variants={itemVariants} className="flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#EBF2ED" }}
                >
                  {cred.icon}
                </div>
                <div className="min-w-0">
                  <h3
                    className="text-base font-bold text-[#111] mb-1"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {cred.title}
                  </h3>
                  <p
                    className="text-sm text-gray-500 leading-relaxed"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {cred.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — legitimacy check card */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-sm"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h3
              className="text-lg font-bold mb-5"
              style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
            >
              Before you buy anywhere, ask these:
            </h3>
            <ul className="flex flex-col gap-3 mb-6">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0" aria-hidden="true">✅</span>
                  <span
                    className="text-sm text-gray-700 leading-snug"
                    style={{ fontFamily: "var(--font-manrope)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className="text-sm font-bold"
              style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
            >
              Blissley answers yes to all seven.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
