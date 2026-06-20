import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Bill of Rights", href: "/bill-of-rights" },
  { label: "Contact", href: "mailto:help@blissley.com" },
];

export default function WLFooter() {
  return (
    <footer className="bg-[#111] text-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Image
              src="/bliss logo.png"
              alt="Blissley"
              width={160}
              height={48}
              className="object-contain mb-4 invert"
              style={{ height: "40px", width: "auto" }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-manrope)" }}
            >
              A healthcare technology platform connecting patients to independent
              licensed providers and pharmacies.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-manrope)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer — full compliance text */}
        <div
          className="rounded-2xl p-6 mb-10"
          style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs leading-relaxed"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-manrope)" }}
          >
            <span className="font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>Important Disclosure:</span>{" "}
            Blissley is a technology platform operated by TheFactual LLC. Blissley is not a pharmacy,
            medical practice, or healthcare provider. We do not employ physicians, hold medical licenses,
            practice medicine, or dispense medications. Medical services are provided exclusively by
            independently licensed physician networks operating under their own professional licenses
            and professional corporation structures. Medications are dispensed exclusively by
            independently licensed compounding pharmacies. All clinical decisions are made solely
            by independently licensed healthcare providers. Blissley provides technology services
            including patient intake software, subscription management, and the technology connection
            layer between patients and independent providers. Individual results may vary. Prescription
            treatment is only available after a consultation with a licensed healthcare provider who
            will determine if treatment is appropriate. These statements have not been evaluated by
            the FDA. This platform is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-manrope)" }}
        >
          <p>© {new Date().getFullYear()} TheFactual LLC. All rights reserved.</p>
          <p>Technology platform — not a healthcare provider.</p>
        </div>

      </div>
    </footer>
  );
}
