"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";

const MIN = 150;
const MAX = 400;
const DEFAULT = 220;

export default function LPCalculator() {
  const [weight, setWeight] = useState(DEFAULT);
  const loss = Math.round(weight * 0.185);
  const pct = ((weight - MIN) / (MAX - MIN)) * 100;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F6F4F0" }}>
      <style>{`
        #lp-calc-slider { -webkit-appearance: none; appearance: none; }
        #lp-calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: white;
          border: 3px solid #B8963E;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        #lp-calc-slider::-moz-range-thumb {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: white;
          border: 3px solid #B8963E;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-12 lg:gap-20">

          {/* LEFT */}
          <FadeUp className="flex flex-col gap-4 md:max-w-xs lg:max-w-sm">
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
            >
              WEIGHT LOSS CALCULATOR
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              How much could you lose?
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              GLP-1 medications produce an average 15–20% body weight loss over 12–16 months.
              See what that means for you.
            </p>
            <a
              href="#qualify"
              className="self-start inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
            >
              GET STARTED
            </a>
          </FadeUp>

          {/* RIGHT */}
          <FadeUp delay={0.15} className="flex-1">
            <div className="rounded-3xl p-6 sm:p-8 shadow-sm bg-white flex flex-col gap-6 sm:gap-8">

              {/* Current weight row — stacks on very small, side-by-side from sm */}
              <div className="flex flex-col xs:flex-row items-start xs:items-baseline justify-between gap-1 xs:gap-4">
                <span
                  className="text-sm font-semibold text-[#111] flex-shrink-0"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Your current weight:
                </span>
                <span
                  className="text-4xl sm:text-5xl font-bold text-[#111] leading-none"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {weight}{" "}
                  <span className="text-lg sm:text-xl font-semibold text-gray-400">lbs</span>
                </span>
              </div>

              {/* Slider */}
              <div className="w-full">
                <input
                  id="lp-calc-slider"
                  type="range"
                  min={MIN}
                  max={MAX}
                  step={1}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-[3px] rounded-full outline-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #B8963E ${pct}%, #D5D5CF ${pct}%)`,
                  }}
                />
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>150 lbs</span>
                  <span className="text-[10px] text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>400 lbs</span>
                </div>
              </div>

              {/* Result row */}
              <div className="flex flex-col xs:flex-row items-start xs:items-baseline justify-between gap-1 xs:gap-4 pt-4 border-t border-gray-200">
                <span
                  className="text-sm font-semibold text-[#111] flex-shrink-0"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  Weight you could lose:
                </span>
                <span
                  className="text-4xl sm:text-5xl font-bold leading-none"
                  style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
                >
                  {loss}{" "}
                  <span className="text-lg sm:text-xl font-semibold text-gray-400">lbs</span>
                </span>
              </div>

              <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
                *Based on average 18.5% clinical trial weight loss. Individual results vary.
              </p>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
