"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import FadeUp from "@/components/FadeUp";
import SplitWords from "@/components/SplitWords";

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <polygon
        points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill="#1C3829"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
    </div>
  );
}

/* ── Data ──────────────────────────────────────────────────────── */
const reviews = [
  { name: "Donna",     avatar: "/review-photo-1.jpg",  quote: "The physician was very knowledgeable and ready to answer all my concerns. She even told me about future checkups that will be needed throughout my journey." },
  { name: "Billy",     avatar: "/review-photo-5.jpg",  quote: "Ms. Gonzalez was great! She listened to my needs and provided details of the meds and any issues that rise." },
  { name: "Alexandra", avatar: "/review-photo-3.jpg",  quote: "Everything was quick and concise. I was treated professionally and given the opportunity to ask questions and have my questions answered thoroughly." },
  { name: "Greg",      avatar: "/review-photo-7.jpg",  quote: "I was ready to give up. Wow. I would pay 10x as much if I had to. Dieting days are over. Thanks to Blissley for the metabolic fix — game changer." },
  { name: "Lou-Ann",   avatar: "/review-photo-9.jpg",  quote: "Blissley Doctors & Staff have been very professional and prompt with any questions I have and their support & care. I feel in great hands!" },
  { name: "Terika",    avatar: "/review-photo-11.jpg", quote: "The provider was knowledgeable and helpful. She answered all my questions and made me feel as if this was not our first time meeting." },
];

// Row 1: photo, review, photo, review, photo, review
const row1: Array<{ type: "photo"; src: string } | { type: "review"; data: typeof reviews[0] }> = [
  { type: "photo",  src: "/review-photo-2.jpg" },
  { type: "review", data: reviews[0] },
  { type: "photo",  src: "/review-photo-4.jpg" },
  { type: "review", data: reviews[1] },
  { type: "photo",  src: "/review-photo-6.jpg" },
  { type: "review", data: reviews[2] },
];

// Row 2: review, photo, review, photo, review, photo
const row2: typeof row1 = [
  { type: "review", data: reviews[3] },
  { type: "photo",  src: "/review-photo-8.jpg" },
  { type: "review", data: reviews[4] },
  { type: "photo",  src: "/review-photo-10.jpg" },
  { type: "review", data: reviews[5] },
  { type: "photo",  src: "/review-photo-12.jpg" },
];

const CARD_W = 300;
const GAP    = 16;
const STEP   = CARD_W + GAP;
const SPEED1 = 0.5;
const SPEED2 = 0.4;

function useMarquee(speed: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset   = useRef(0);
  const raf      = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const loopW = (track.children.length / 2) * STEP;

    function tick() {
      offset.current += speed;
      if (offset.current >= loopW) offset.current -= loopW;
      track.style.transform = `translateX(-${offset.current}px)`;
      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [speed]);

  return trackRef;
}

function ReviewCard({ data }: { data: typeof reviews[0] }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col gap-3 rounded-2xl px-6 py-5"
      style={{ width: `${CARD_W}px`, backgroundColor: "#EBF2ED" }}
    >
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
          <Image src={data.avatar} alt={data.name} fill className="object-cover" sizes="36px" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#111]" style={{ fontFamily: "var(--font-manrope)" }}>{data.name}</p>
          <Stars />
        </div>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
        &ldquo;{data.quote}&rdquo;
      </p>
    </div>
  );
}

function PhotoCard({ src }: { src: string }) {
  return (
    <div
      className="flex-shrink-0 relative rounded-2xl overflow-hidden"
      style={{ width: `${CARD_W}px`, height: "200px" }}
    >
      <Image src={src} alt="Blissley patient" fill className="object-cover object-top" sizes={`${CARD_W}px`} />
    </div>
  );
}

function MarqueeRow({ items, speed }: { items: typeof row1; speed: number }) {
  const doubled = [...items, ...items];
  const trackRef = useMarquee(speed);

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex"
        style={{ gap: `${GAP}px`, willChange: "transform", userSelect: "none" }}
      >
        {doubled.map((item, i) =>
          item.type === "photo"
            ? <PhotoCard key={i} src={item.src} />
            : <ReviewCard key={i} data={item.data} />
        )}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-white py-20 overflow-hidden" id="reviews">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <FadeUp>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#B0B8B4", fontFamily: "var(--font-manrope)" }}
          >
            Those who chose Blissley
          </p>
        </FadeUp>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-4"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          <SplitWords text="There's a reason people are" delay={0.05} />
          {" "}
          <SplitWords
            text="raving about us."
            delay={0.25}
            style={{ color: "#1C3829" }}
          />
        </h2>
        <FadeUp delay={0.3}>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
            Join the thousands who have trusted Blissley to help change their lives, achieving significant,{" "}
            <span className="font-semibold" style={{ color: "#1C3829" }}>lasting weight loss.</span>
          </p>
        </FadeUp>
      </div>

      {/* Two marquee rows */}
      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} speed={SPEED1} />
        <MarqueeRow items={row2} speed={SPEED2} />
      </div>
    </section>
  );
}
