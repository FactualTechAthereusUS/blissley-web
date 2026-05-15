import Image from "next/image";

const items = [
  { icon: "/checkmark.svg",        label: "Blissley guarantee",        w: 24, h: 24 },
  { icon: "/freeshipping.svg",     label: "Free, expedited delivery",   w: 33, h: 24 },
  { icon: "/doctor checkup.svg",   label: "Doctor-led plans & coaching", w: 25, h: 21 },
  { icon: "/$$ sign.svg",          label: "No hidden fees",             w: 24, h: 24 },
];

export default function TrustStrip() {
  return (
    <div className="bg-white border-t border-gray-100">
      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-3">
        <p
          className="text-[10px] text-gray-400 leading-relaxed"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          *Pricing shown is for compounded GLP-1 medications. Brand-name options available at
          additional cost. Payments are HSA/FSA eligible. Results may vary.
        </p>
      </div>

      {/* 4-column strip */}
      <div className="border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
          {items.map(({ icon, label, w, h }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-6 py-5"
            >
              <div className="flex-shrink-0 opacity-70">
                <Image src={icon} alt={label} width={w} height={h} />
              </div>
              <span
                className="text-xs font-semibold text-gray-600"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
