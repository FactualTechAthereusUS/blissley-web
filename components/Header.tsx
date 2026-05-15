"use client";

import { useState } from "react";
import Image from "next/image";

function BlissleyLogo() {
  return (
    <Image
      src="/bliss logo.png"
      alt="Blissley"
      width={140}
      height={40}
      className="object-contain"
      priority
    />
  );
}

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="/" aria-label="Blissley home">
            <BlissleyLogo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#1C3829] transition-colors"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#qualify"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#111111",
                fontFamily: "var(--font-manrope)",
                letterSpacing: "0.02em",
              }}
            >
              GET APPROVED
            </a>

            {/* Hamburger — mobile/tablet only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#1C3829] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M2 2l18 18M20 2L2 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium text-gray-700 hover:text-[#1C3829] border-b border-gray-50 transition-colors"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#qualify"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "#111111", fontFamily: "var(--font-manrope)" }}
            >
              GET APPROVED
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
