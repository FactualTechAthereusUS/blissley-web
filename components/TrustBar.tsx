"use client";

import Image from "next/image";

const logos = [
  { src: "/logo-bloomberg.avif",   alt: "Bloomberg",         w: 476, h: 88 },
  { src: "/logo-nytimes.avif",     alt: "The New York Times", w: 512, h: 67 },
  { src: "/logo-healthline.avif",  alt: "Healthline",         w: 512, h: 84 },
  { src: "/logo-fortune.avif",     alt: "Fortune",            w: 384, h: 88 },
  { src: "/logo-fastcompany.avif", alt: "Fast Company",       w: 512, h: 74 },
  { src: "/logo-forbes.avif",      alt: "Forbes",             w: 352, h: 88 },
  { src: "/logo-webmd.avif",       alt: "WebMD",              w: 388, h: 88 },
];

const doubled = [...logos, ...logos];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-6 overflow-hidden">
      <p
        className="text-center text-xs font-semibold tracking-widest uppercase mb-5"
        style={{ color: "#B0B8B4", fontFamily: "var(--font-manrope)" }}
      >
        As featured in
      </p>

      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        <div className="animate-marquee">
          {doubled.map(({ src, alt, w, h }, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center px-10"
            >
              <Image
                src={src}
                alt={alt}
                width={w}
                height={h}
                className="h-6 w-auto object-contain"
                style={{ filter: "grayscale(100%) opacity(0.45)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
