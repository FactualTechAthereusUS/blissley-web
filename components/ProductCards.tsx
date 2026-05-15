import Image from "next/image";

const products = [
  {
    img: "/product-glp1-injection.avif",
    imgH: 200,
    bg: "#EBF2ED",
    priceLabel: "Starting at $149",
    priceColor: "#1C3829",
    name: "GLP-1 Injections",
    desc: "One simple injection per week.",
    cta: "GET STARTED",
    ctaStyle: "filled",
  },
  {
    img: "/product-glp1-tablet.avif",
    imgH: 200,
    bg: "#EBF2ED",
    priceLabel: "Starting at $249",
    priceColor: "#1C3829",
    name: "GLP-1 Tablets",
    desc: "One dissolvable tablet per day.",
    cta: "GET STARTED",
    ctaStyle: "filled",
  },
  {
    img: "/product-wegovy-pill.avif",
    imgH: 190,
    bg: "#F2F2F0",
    priceLabel: "$99 Membership + Medication Cost",
    priceColor: "#888",
    name: "Wegovy® Pill",
    desc: "One pill per day.",
    cta: "GET STARTED",
    ctaStyle: "outline",
  },
  {
    img: "/product-wegovy-injection.avif",
    imgH: 190,
    bg: "#EBF0F5",
    priceLabel: "$99 Membership + Medication Cost",
    priceColor: "#888",
    name: "Wegovy® Injection",
    desc: "Availability is subject to change.",
    cta: "GET STARTED",
    ctaStyle: "outline",
  },
  {
    img: "/product-zepbound-injection.avif",
    imgH: 190,
    bg: "#EBF0F5",
    priceLabel: "$99 Membership + Medication Cost",
    priceColor: "#888",
    name: "Zepbound® Injection",
    desc: "Availability is subject to change.",
    cta: "GET STARTED",
    ctaStyle: "outline",
  },
];

export default function ProductCards() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="products">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight max-w-md"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Trusted by experts,{" "}
            <span style={{ color: "#1C3829" }}>priced for you.</span>
          </h2>
          <p
            className="text-sm text-gray-500 max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Find the right GLP-1 medication with the confidence that comes from
            knowing it&apos;s{" "}
            <span className="font-semibold" style={{ color: "#1C3829" }}>
              doctor-approved
            </span>{" "}
            and budget-friendly.
          </p>
        </div>

        {/* ── Product cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-3xl overflow-visible relative"
              style={{ backgroundColor: p.bg }}
            >
              {/* Product image — overflows top */}
              <div className="flex items-end justify-center h-64 -mt-8 px-6 relative z-10">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={260}
                  height={p.imgH}
                  className="object-contain drop-shadow-xl max-h-64 w-auto"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-2 px-5 pt-5 pb-6">
                <p
                  className="text-xs font-semibold"
                  style={{ color: p.priceColor, fontFamily: "var(--font-manrope)" }}
                >
                  {p.priceLabel}
                </p>
                <h3
                  className="text-base font-bold text-[#111]"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-xs text-gray-500 leading-snug"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {p.desc}
                </p>

                <a
                  href="#qualify"
                  className="mt-3 flex items-center justify-center py-2.5 rounded-full text-xs font-bold tracking-widest transition-all hover:opacity-80 active:scale-95"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    letterSpacing: "0.08em",
                    ...(p.ctaStyle === "filled"
                      ? { backgroundColor: "#111", color: "#fff" }
                      : {
                          backgroundColor: "transparent",
                          color: "#111",
                          border: "1.5px solid #111",
                        }),
                  }}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
