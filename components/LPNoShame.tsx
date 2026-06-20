"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import FadeUp from "@/components/FadeUp";
import SplitWords from "@/components/SplitWords";

function SpeakerOnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
      <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  );
}

function VideoCard({ src, index, onDragStart }: { src: string; index: number; onDragStart: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          setLoaded(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loaded]);

  useEffect(() => {
    if (!loaded) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [loaded]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100 select-none"
      style={{ width: "200px", aspectRatio: "9/16" }}
      onPointerDown={onDragStart}
    >
      <video
        ref={videoRef}
        src={loaded ? src : undefined}
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }}
      />
      {loaded && (
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
        </button>
      )}
      <div
        className="absolute top-3 left-3 z-20 w-6 h-6 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
      >
        <span className="text-white text-[9px] font-bold">{index + 1}</span>
      </div>
    </div>
  );
}

const BASE_VIDEOS = Array.from({ length: 15 }, (_, i) => `/video-${i + 1}.mp4`);
const DOUBLED = [...BASE_VIDEOS, ...BASE_VIDEOS];
const CARD_WIDTH = 200;
const GAP = 12;
const STEP = CARD_WIDTH + GAP;
const LOOP_WIDTH = BASE_VIDEOS.length * STEP;
const SPEED = 0.5;

export default function LPNoShame() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isPaused = useRef(false);
  const dragStartX = useRef<number | null>(null);
  const dragStartOffset = useRef(0);

  useEffect(() => {
    function tick() {
      if (!isPaused.current) {
        offsetRef.current += SPEED;
        if (offsetRef.current >= LOOP_WIDTH) offsetRef.current -= LOOP_WIDTH;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    isPaused.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    let next = dragStartOffset.current + delta;
    next = ((next % LOOP_WIDTH) + LOOP_WIDTH) % LOOP_WIDTH;
    offsetRef.current = next;
  }

  function onPointerUp() {
    dragStartX.current = null;
    setTimeout(() => { isPaused.current = false; }, 800);
  }

  return (
    <section className="py-14 sm:py-20 overflow-hidden" style={{ backgroundColor: "#F6F4F0" }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <FadeUp>
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#1C3829", fontFamily: "var(--font-manrope)" }}
          >
            REAL PATIENTS
          </p>
        </FadeUp>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight mb-4"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          <SplitWords text="Real Patients." delay={0.05} />
          <br />
          <SplitWords text="No " delay={0.2} />
          <span
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              color: "#1C3829",
            }}
          >
            <SplitWords text="shame." delay={0.28} />
          </span>
          <br />
          <SplitWords text="All Confidence." delay={0.4} />
        </h2>
        <FadeUp delay={0.4}>
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
            There&apos;s no shame in using medicine to help your body work the way it should. Real Blissley patients — not actors, not AI images.
          </p>
        </FadeUp>
      </div>

      {/* Video strip */}
      <div
        className="relative overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ cursor: "grab" }}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
          style={{ background: "linear-gradient(to right, #F6F4F0, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
          style={{ background: "linear-gradient(to left, #F6F4F0, transparent)" }} />
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: `${GAP}px`, paddingLeft: "32px", paddingRight: "32px", willChange: "transform", userSelect: "none" }}
        >
          {DOUBLED.map((src, i) => (
            <VideoCard
              key={i}
              src={src}
              index={i % BASE_VIDEOS.length}
              onDragStart={() => { isPaused.current = true; dragStartOffset.current = offsetRef.current; }}
            />
          ))}
        </div>
      </div>

      {/* CTA band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <FadeUp>
          <p className="text-xl font-bold text-[#111] mb-4" style={{ fontFamily: "var(--font-manrope)" }}>
            Ready to finally see results?
          </p>
          <a
            href="#qualify"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 mb-4"
            style={{ backgroundColor: "#111", fontFamily: "var(--font-manrope)", letterSpacing: "0.06em" }}
          >
            GET STARTED
          </a>
          <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
            No commitment · No hidden fees · Cancel anytime
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
