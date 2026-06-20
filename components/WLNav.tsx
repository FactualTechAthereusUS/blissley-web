"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const verticals = [
  { label: "Weight Loss", href: "/weightloss" },
  { label: "Hormones", href: "#" },
  { label: "Sexual Health", href: "#" },
  { label: "Hair", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
];

export default function WLNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/bliss logo.png"
              alt="Blissley"
              width={120}
              height={36}
              className="object-contain"
              style={{ height: "32px", width: "auto" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {verticals.map((v) => (
              <Link
                key={v.label}
                href={v.href}
                className="text-sm text-gray-500 hover:text-[#111] transition-colors"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {v.label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-[#111] transition-colors"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Log In
            </Link>
            <Link
              href="#intake"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)" }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-[#111] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-[#111] transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-[#111] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3">
          {verticals.map((v) => (
            <Link
              key={v.label}
              href={v.href}
              className="text-sm text-gray-600 py-1"
              style={{ fontFamily: "var(--font-manrope)" }}
              onClick={() => setOpen(false)}
            >
              {v.label}
            </Link>
          ))}
          <Link
            href="#intake"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white mt-2"
            style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)" }}
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
