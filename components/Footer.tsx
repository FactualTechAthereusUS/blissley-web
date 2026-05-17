import Image from "next/image";


const contact = [
  { icon: "/@ icon.svg",          w: 25, h: 25, label: "help@blissley.com" },
  { icon: "/telephone icon.svg",  w: 26, h: 26, label: "(517) 280-1660" },
  { icon: "/mail icon.svg",       w: 24, h: 17, label: "131 Continental Dr. Ste 305, Newark, DE 19713" },
];

const pharmacies = [
  { name: "Triad Rx",                url: "https://www.triadrx.us",                 address: "26258 Pollard Rd, Daphne, AL 36526",         phone: "(251) 380-7630" },
  { name: "RedRock Pharmacy",        url: "https://www.redrockhomepharmacy.com/",   address: "1240 E 100 S #220, St. George, UT 84790",   phone: "(801) 433-9500" },
  { name: "Beaker Pharmacy & Compounding", url: "https://beakerpharmacy.com/beakerpharmacy-compounding", address: "7810 Eldorado Pkwy STE 200, McKinney, TX 75072", phone: "(972) 972-4700" },
];

const links = [
  { label: "Terms & Conditions",     href: "/terms" },
  { label: "Privacy Policy",         href: "/privacy" },
  { label: "Privacy Practices",      href: "/privacy" },
  { label: "Refund Policy",          href: "/refund" },
  { label: "Medical Consent",        href: "/consent" },
  { label: "For California Residents", href: "/california" },
  { label: "Bill of Rights",         href: "/bill-of-rights" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top: logo + contact ── */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-10 border-b border-gray-100">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/bliss logo.png"
              alt="Blissley"
              width={120}
              height={34}
              className="object-contain"
            />
          </div>

          {/* Contact items */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {contact.map(({ icon, w, h, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="flex-shrink-0 opacity-60">
                  <Image src={icon} alt="" width={w} height={h} />
                </div>
                <span
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Legal text ── */}
        <div
          className="py-8 flex flex-col gap-5 text-[11px] text-gray-400 leading-relaxed border-b border-gray-100"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          <p>
            The assessment made available on the Blissley website does not create a
            doctor-patient relationship between the individual completing the assessment and
            Blissley. A network of US-licensed doctors that adhere to rigorous medical protocols
            designed for patient safety has established exclusionary criteria to determine if an
            individual qualifies for treatment. The answers an individual provides to the Blissley
            assessment consequently determine eligibility, and an independent licensed clinician
            will review the assessment after checkout to determine if they qualify for a
            prescription. Clinicians retain sole decision-making authority to prescribe medications
            to patients.
          </p>
          <p>
            All claims and benefits on this website refer to self-reported data from Blissley
            patients on a treatment plan that includes compounded medications and consultations
            with licensed medical professionals. Results from compounded medications found on the
            Blissley platform may vary and be affected by an individual&apos;s adherence to the
            program and their clinician&apos;s recommendations. Compounded medications are produced
            in FDA-regulated facilities. Although these facilities are highly regulated, the
            medications are not FDA-approved or evaluated for safety, efficacy, or quality. The
            decision to use compounded drugs is guided by the licensed provider&apos;s medical
            judgment, which is informed by a telehealth consultation and medical history.
          </p>
          <p>
            We encourage all prospective users of compounded medications to speak with their
            provider about the specific risks and benefits that may come with the use of
            compounded medication. Blissley does not produce compounded medications, and
            individuals may receive medication that looks different than what is portrayed on the
            website.
          </p>
          <p>
            Results vary based on starting program adherence. Results may vary. Medication
            prescriptions are at the discretion of medical providers and may not be suitable for
            everyone. Consult a healthcare professional before using any medication or starting
            any wellness program.
          </p>
          <p>
            Certain materials on this website, including text, images, and other media, may be
            generated or enhanced using artificial intelligence technologies or models. No
            representation or warranty is made regarding the accuracy, completeness, or
            reliability of such content. Individuals appearing in advertisements may be actors
            or models.
          </p>
          <p>
            Testimonials on the website are from Blissley patients. For patient privacy, images
            representing those testimonials may use models.
          </p>
          <p>
            By accepting our Terms of Use, you additionally understand and agree that Blissley is
            not acting as a pharmacy, nor does Blissley control or interfere with any such
            services. By accepting these Terms of Use, you understand and agree that you may be
            entering into a relationship with a pharmacy, pharmacist, and/or pharmacy group or
            other such relationship with any one or more such third-party entities. Partner
            pharmacies include:
          </p>

          {/* Pharmacy list */}
          <div className="flex flex-col gap-4">
            {pharmacies.map((p) => (
              <div key={p.name}>
                <p className="font-semibold text-gray-500">{p.name}</p>
                <p>{p.url}</p>
                <p>Address: {p.address}</p>
                <p>Phone: {p.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p
            className="text-[11px] text-gray-400"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            © 2026 TheFactual LLC. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}
