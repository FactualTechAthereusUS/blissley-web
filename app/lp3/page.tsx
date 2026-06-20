import dynamic from "next/dynamic";
import Header from "@/components/Header";
import LP3Hero from "@/components/LP3Hero";
import LP3Guarantees from "@/components/LP3Guarantees";

const LP3NotYourFault  = dynamic(() => import("@/components/LP3NotYourFault"));
const LP3Mechanism     = dynamic(() => import("@/components/LP3Mechanism"));
const LP3HowItWorks    = dynamic(() => import("@/components/LP3HowItWorks"));
const LP3TheReturn     = dynamic(() => import("@/components/LP3TheReturn"));
const LP3SafeAndLegit  = dynamic(() => import("@/components/LP3SafeAndLegit"));
const LP3WhyNotCheaper = dynamic(() => import("@/components/LP3WhyNotCheaper"));
const LP3Offer         = dynamic(() => import("@/components/LP3Offer"));
const LP3Reviews       = dynamic(() => import("@/components/LP3Reviews"));
const LP3FAQ           = dynamic(() => import("@/components/LP3FAQ"));
const LP3RiskReversal  = dynamic(() => import("@/components/LP3RiskReversal"));
const Questionnaire    = dynamic(() => import("@/components/Questionnaire"));
const TrustStrip       = dynamic(() => import("@/components/TrustStrip"));
const Footer           = dynamic(() => import("@/components/Footer"));

export default function LP3() {
  return (
    <>
      <Header />
      <main>
        <LP3Hero />
        <LP3Guarantees />
        <LP3NotYourFault />
        <LP3Mechanism />
        <LP3HowItWorks />
        <LP3TheReturn />
        <LP3SafeAndLegit />
        <LP3WhyNotCheaper />
        <LP3Offer />
        <LP3Reviews />
        <LP3FAQ />
        <LP3RiskReversal />
        <Questionnaire />
        <TrustStrip />
        <Footer />
      </main>
    </>
  );
}
