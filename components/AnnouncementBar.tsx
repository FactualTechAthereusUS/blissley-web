"use client";

import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="relative flex items-center justify-center gap-2 px-10 py-2.5 text-white text-sm font-medium"
      style={{ backgroundColor: "#1C3829", fontFamily: "var(--font-manrope)" }}
    >
      <span style={{ color: "#C9A0A0" }} className="font-semibold">
        🌿 Spring Offer:
      </span>
      <span>
        Start your weight loss program for just{" "}
        <span className="font-bold underline underline-offset-2">$149</span>
        {" "}— Free expedited shipping included.
      </span>

      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 1l12 12M13 1L1 13" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}
