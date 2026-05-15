"use client";

import { useRef, useState, useEffect } from "react";

/* ─── Icons ──────────────────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="26" fill="rgba(0,0,0,0.5)" />
      <polygon points="21,15 41,26 21,37" fill="white" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="26" fill="rgba(0,0,0,0.5)" />
      <rect x="17" y="15" width="6" height="22" rx="2" fill="white" />
      <rect x="29" y="15" width="6" height="22" rx="2" fill="white" />
    </svg>
  );
}

function SpeakerOnIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
      <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  );
}

/* ─── Single video card ──────────────────────────────────────── */
function VideoCard({
  src,
  index,
  onDragStart,
}: {
  src: string;
  index: number;
  onDragStart: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => setPlaying(false));
  }, []);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 700);
  }

  function toggleMute(e: React.MouseEvent) {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{ width: "260px", aspectRatio: "9/16" }}
      onClick={togglePlay}
      onPointerDown={onDragStart}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        autoPlay
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }}
      />

      {/* Mute button */}
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
      </button>

      {/* Card number */}
      <div
        className="absolute top-3 left-3 z-20 w-7 h-7 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
      >
        <span className="text-white text-[10px] font-bold">{index + 1}</span>
      </div>

      {/* Center play/pause flash */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-200"
        style={{ opacity: !playing || showIcon ? 1 : 0 }}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </div>
    </div>
  );
}

/* ─── Videos — duplicated for seamless loop ──────────────────── */
const BASE_VIDEOS = Array.from({ length: 15 }, (_, i) => `/video-${i + 1}.mp4`);
const VIDEOS = [...BASE_VIDEOS, ...BASE_VIDEOS]; // duplicate for seamless wrap

const CARD_WIDTH = 260;
const GAP = 12;
const STEP = CARD_WIDTH + GAP;
const LOOP_WIDTH = BASE_VIDEOS.length * STEP; // width of one full set
const SPEED = 0.6; // px per frame (~36px/s at 60fps)

/* ─── Results section ────────────────────────────────────────── */
export default function ResultsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);           // live value driven by rAF
  const rafRef = useRef<number>(0);
  const isPaused = useRef(false);

  // drag state
  const dragStartX = useRef<number | null>(null);
  const dragStartOffset = useRef(0);

  /* ── animation loop ── */
  useEffect(() => {
    function tick() {
      if (!isPaused.current) {
        offsetRef.current += SPEED;
        // seamless reset when we've scrolled one full set
        if (offsetRef.current >= LOOP_WIDTH) {
          offsetRef.current -= LOOP_WIDTH;
        }
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  /* ── pointer drag ── */
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
    // keep within 0..LOOP_WIDTH
    next = ((next % LOOP_WIDTH) + LOOP_WIDTH) % LOOP_WIDTH;
    offsetRef.current = next;
  }

  function onPointerUp() {
    dragStartX.current = null;
    // resume after brief pause
    setTimeout(() => { isPaused.current = false; }, 800);
  }

  function onCardDragStart() {
    // called by each card's onPointerDown — pause auto-scroll
    isPaused.current = true;
    dragStartOffset.current = offsetRef.current;
  }

  return (
    <section className="bg-white py-16" id="results">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight max-w-sm"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            The results speak{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontStyle: "italic",
                color: "#1C3829",
              }}
            >
              for themselves.
            </span>
          </h2>

          <div className="flex flex-col gap-4 max-w-sm">
            <p
              className="text-sm text-gray-500 leading-relaxed"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Sometimes you have to see it to believe it. GLP-1 medication can
              be{" "}
              <span className="font-semibold" style={{ color: "#1C3829" }}>
                life-changing
              </span>{" "}
              — improving mood, sleep, energy, and longevity. These are real
              Blissley patients sharing their stories.
            </p>
            <a
              href="#qualify"
              className="self-start inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#111",
                fontFamily: "var(--font-manrope)",
                letterSpacing: "0.06em",
              }}
            >
              I&apos;M READY, LET&apos;S GO
            </a>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ cursor: "grab" }}
      >
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
          style={{ background: "linear-gradient(to right, #fff, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
          style={{ background: "linear-gradient(to left, #fff, transparent)" }}
        />

        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: `${GAP}px`,
            paddingLeft: "32px",
            paddingRight: "32px",
            willChange: "transform",
            userSelect: "none",
          }}
        >
          {VIDEOS.map((src, i) => (
            <VideoCard
              key={i}
              src={src}
              index={i % BASE_VIDEOS.length}
              onDragStart={onCardDragStart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
