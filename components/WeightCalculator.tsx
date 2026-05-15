"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";

const MIN_WEIGHT = 120;
const MAX_WEIGHT = 400;
const DEFAULT_WEIGHT = 200;

function calcLoss(lbs: number) {
  return Math.round(lbs * 0.23);
}

export default function WeightCalculator() {
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);
  const loss = calcLoss(weight);
  const pct = ((weight - MIN_WEIGHT) / (MAX_WEIGHT - MIN_WEIGHT)) * 100;

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="calculator">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">

          {/* ── Left copy ── */}
          <FadeUp className="flex flex-col gap-5 lg:max-w-sm">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Want to{" "}
              <span style={{ color: "#1C3829" }}>reach your goal</span>{" "}
              weight fast?
            </h2>

            <p
              className="text-sm text-gray-500 leading-relaxed"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              It&apos;s not magic — it&apos;s{" "}
              <strong style={{ color: "#1C3829" }}>metabolic science</strong>. GLP-1 is a
              naturally occurring hormone that regulates appetite and blood sugar,{" "}
              <strong style={{ color: "#1C3829" }}>improving your metabolism</strong> and
              knocking out cravings.
            </p>

            <a
              href="#qualify"
              className="self-start inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#111",
                fontFamily: "var(--font-manrope)",
                letterSpacing: "0.06em",
              }}
            >
              GET STARTED
            </a>
          </FadeUp>

          {/* ── Right card ── */}
          <FadeUp delay={0.15} className="flex-1">
          <div
            className="rounded-3xl px-8 py-10 flex flex-col gap-8"
            style={{ backgroundColor: "#F4F4F2" }}
          >
            {/* Current weight row */}
            <div className="flex items-baseline justify-between gap-4">
              <span
                className="text-sm font-semibold text-[#111]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Select your current weight:
              </span>
              <span
                className="text-5xl font-bold text-[#111] leading-none"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {weight}{" "}
                <span className="text-xl font-semibold text-gray-400">lbs</span>
              </span>
            </div>

            {/* Slider */}
            <div className="relative w-full">
              <input
                type="range"
                min={MIN_WEIGHT}
                max={MAX_WEIGHT}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full appearance-none h-[3px] rounded-full outline-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #B8963E ${pct}%, #D5D5CF ${pct}%)`,
                }}
              />
              <style>{`
                input[type=range]::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  width: 28px;
                  height: 28px;
                  border-radius: 50%;
                  background: white;
                  border: 3px solid #B8963E;
                  cursor: pointer;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                }
                input[type=range]::-moz-range-thumb {
                  width: 28px;
                  height: 28px;
                  border-radius: 50%;
                  background: white;
                  border: 3px solid #B8963E;
                  cursor: pointer;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                }
              `}</style>
            </div>

            {/* Weight you could lose row */}
            <div className="flex items-baseline justify-between gap-4 pt-2 border-t border-gray-200">
              <span
                className="text-sm font-semibold text-[#111]"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Weight you could lose:
              </span>
              <span
                className="text-5xl font-bold text-[#111] leading-none"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {loss}{" "}
                <span className="text-xl font-semibold text-gray-400">lbs</span>
              </span>
            </div>
          </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
