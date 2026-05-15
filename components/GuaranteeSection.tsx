import FadeUp from "@/components/FadeUp";

export default function GuaranteeSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
        <div
          className="rounded-3xl px-10 py-12 flex flex-col sm:flex-row items-center gap-10"
          style={{ backgroundColor: "#FDF8F0" }}
        >
          {/* Checkmark circle */}
          <div className="flex-shrink-0">
            <div
              className="w-36 h-36 rounded-full border-[5px] flex items-center justify-center"
              style={{ borderColor: "#B8963E" }}
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path
                  d="M14 30L25 42L46 20"
                  stroke="#B8963E"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#B8963E", fontFamily: "var(--font-manrope)" }}
            >
              Blissley Guarantee
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              The only thing you&apos;ll<br />lose is extra weight.
            </h2>
            <p
              className="text-sm text-gray-500 leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              With over 50,000+ patients treated, we&apos;re confident you will reach your
              goal with our personalized program.
            </p>
            <div>
              <a
                href="#qualify"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
                style={{
                  backgroundColor: "#B8963E",
                  fontFamily: "var(--font-manrope)",
                  letterSpacing: "0.06em",
                }}
              >
                CONTINUE WITH CONFIDENCE
              </a>
            </div>
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
