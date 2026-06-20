"use client";

import { useState } from "react";

export default function LPAnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="relative flex items-center justify-center gap-2 px-10 py-2.5 text-white text-sm font-medium"
      style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)" }}
    >
      <span>🌿 Flat $249/month · Cancel in one click · A real person always answers</span>

      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
