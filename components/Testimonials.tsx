import Image from "next/image";

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 mt-1.5">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="7" fill="#1C3829" />
        <path d="M3.5 7l2.5 2.5 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[11px] text-gray-400" style={{ fontFamily: "var(--font-manrope)" }}>
        Verified Blissley Customer
      </span>
    </span>
  );
}

const quotes = [
  // left side (right-aligned)
  { text: "Very easy and convenient for a very busy working lady.", side: "left",  top: "3%"  },
  { text: "Very nice and informative Dr. Quick and easy!",         side: "left",  top: "40%" },
  { text: "The company, staff, and docs are amazing — they care of every patient.", side: "left",  top: "68%" },
  // right side (left-aligned)
  { text: "…the weight vanished!",                                 side: "right", top: "3%"  },
  { text: "Every person I have contact with shows compassion.",    side: "right", top: "40%" },
  { text: "NP was very helpful and friendly!",                    side: "right", top: "68%" },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 overflow-hidden" id="testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Patient count + stars */}
        <div className="flex flex-col items-center gap-3 mb-5">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#B0B8B4", fontFamily: "var(--font-manrope)" }}
          >
            10,000+ Patients Agree
          </p>
          <Image src="/stars.svg" alt="5 stars" width={150} height={30} className="h-9 w-auto" />
        </div>

        {/* Hero quote */}
        <h2
          className="text-center font-bold text-[#111] leading-[1.1] mb-3"
          style={{ fontFamily: "var(--font-manrope)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)" }}
        >
          &ldquo;When nothing else worked,{" "}
          <span style={{ color: "#1C3829" }}>Blissley did&rdquo;</span>
        </h2>

        <div className="flex justify-center mb-10">
          <VerifiedBadge />
        </div>

        {/* ── Desktop: quotes behind big centered bottle ── */}
        <div className="relative hidden lg:block" style={{ minHeight: "780px" }}>

          {/* Quotes — z-index 1, allowed to bleed under bottle */}
          {quotes.map((q, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: q.top,
                zIndex: 1,
                maxWidth: "270px",
                ...(q.side === "left"
                  ? { left: 0, textAlign: "right" }
                  : { right: 0, textAlign: "left" }),
              }}
            >
              <p
                className="text-lg font-semibold leading-snug"
                style={{ color: "rgba(0,0,0,0.18)", fontFamily: "var(--font-manrope)" }}
              >
                {q.text}
              </p>
              <div className={`flex ${q.side === "left" ? "justify-end" : "justify-start"}`}>
                <VerifiedBadge />
              </div>
            </div>
          ))}

          {/* Bottle — z-index 10, floats above quotes */}
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "-60px",
              bottom: "-60px",
              width: "560px",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            <Image
              src="/testimonial-bottle.avif"
              alt="Blissley GLP-1 medication"
              fill
              className="object-contain"
              sizes="560px"
              style={{
                transform: "rotate(-8deg)",
                transformOrigin: "top center",
                filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.15))",
              }}
            />
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          <div className="relative w-56 h-80">
            <Image
              src="/testimonial-bottle.avif"
              alt="Blissley GLP-1 medication"
              fill
              className="object-contain"
              sizes="224px"
              style={{ transform: "rotate(-12deg)", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 w-full">
            {quotes.map((q, i) => (
              <div key={i}>
                <p className="text-xs font-semibold leading-snug" style={{ color: "rgba(0,0,0,0.22)", fontFamily: "var(--font-manrope)" }}>
                  {q.text}
                </p>
                <VerifiedBadge />
              </div>
            ))}
          </div>
        </div>

        {/* HSA/FSA */}
        <div className="flex justify-center mt-14">
          <Image src="/hsa1.avif" alt="HSA / FSA Eligible" width={220} height={56} className="h-14 w-auto object-contain" />
        </div>

      </div>
    </section>
  );
}
