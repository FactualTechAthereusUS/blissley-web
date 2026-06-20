"use client";

import Image from "next/image";

const logos = [
  { src: "/logo-bloomberg.avif",    alt: "Bloomberg",     w: 140, h: 24 },
  { src: "/logo-nytimes.avif",      alt: "New York Times", w: 120, h: 24 },
  { src: "/logo-healthline.avif",   alt: "Healthline",    w: 120, h: 24 },
  { src: "/logo-fortune.avif",      alt: "Fortune",       w: 100, h: 24 },
  { src: "/logo-fastcompany.avif",  alt: "Fast Company",  w: 130, h: 24 },
  { src: "/logo-forbes.avif",       alt: "Forbes",        w: 90,  h: 24 },
  { src: "/logo-webmd.avif",        alt: "WebMD",         w: 90,  h: 24 },
];

const doubled = [...logos, ...logos];

export default function LPPressBar() {
  return (
    <section className="bg-white py-6 overflow-hidden">
      <style>{`
        @keyframes marquee-press { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .animate-marquee-press { display: flex; animation: marquee-press 30s linear infinite; }
      `}</style>

      <p
        className="text-center text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5"
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        AS SEEN IN
      </p>

      <div className="relative">
        {/* Fade masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div className="overflow-hidden">
          <div
            className="animate-marquee-press"
            style={{ gap: "56px", alignItems: "center" }}
          >
            {doubled.map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center" style={{ height: "24px" }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  className="grayscale opacity-40 object-contain"
                  style={{ maxHeight: "24px", width: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
