import dynamic from "next/dynamic";
import Header from "@/components/Header";
import LPAnnouncementBar from "@/components/LPAnnouncementBar";
import LPHero from "@/components/LPHero";
import LPPressBar from "@/components/LPPressBar";

// Everything below the fold — lazy loaded
const LPCalculator   = dynamic(() => import("@/components/LPCalculator"));
const LPNoShame      = dynamic(() => import("@/components/LPNoShame"));
const LPRepeatCTA    = dynamic(() => import("@/components/LPRepeatCTA"));
const LPHowItWorks   = dynamic(() => import("@/components/LPHowItWorks"));
const LPMechanism    = dynamic(() => import("@/components/LPMechanism"));
const LPMedCards     = dynamic(() => import("@/components/LPMedCards"));
const LPPlanApproval = dynamic(() => import("@/components/LPPlanApproval"));
const LPOffer        = dynamic(() => import("@/components/LPOffer"));
const LPReviewWall   = dynamic(() => import("@/components/LPReviewWall"));
const LPComparison   = dynamic(() => import("@/components/LPComparison"));
const LPFAQ          = dynamic(() => import("@/components/LPFAQ"));
const LPFinalCTA     = dynamic(() => import("@/components/LPFinalCTA"));
const Questionnaire  = dynamic(() => import("@/components/Questionnaire"));
const TrustStrip     = dynamic(() => import("@/components/TrustStrip"));
const Footer         = dynamic(() => import("@/components/Footer"));

export default function LP2() {
  return (
    <>
      <LPAnnouncementBar />
      <Header />
      <main>
        <LPHero />
        <LPPressBar />
        <LPCalculator />
        <LPNoShame />
        <LPRepeatCTA />
        <LPHowItWorks />
        <LPMechanism />
        <LPOffer />
        <LPMedCards />
        <LPPlanApproval />
        <LPReviewWall />
        <LPComparison />
        <LPFAQ />
        <LPFinalCTA />
        <Questionnaire />
        <TrustStrip />
        <Footer />
      </main>
    </>
  );
}
