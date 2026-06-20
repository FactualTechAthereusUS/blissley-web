import dynamic from "next/dynamic";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";

const ProductCards    = dynamic(() => import("@/components/ProductCards"));
const ResultsSection  = dynamic(() => import("@/components/ResultsSection"));
const Testimonials    = dynamic(() => import("@/components/Testimonials"));
const WeightCalculator= dynamic(() => import("@/components/WeightCalculator"));
const HowItWorks      = dynamic(() => import("@/components/HowItWorks"));
const Reviews         = dynamic(() => import("@/components/Reviews"));
const FAQ             = dynamic(() => import("@/components/FAQ"));
const GuaranteeSection= dynamic(() => import("@/components/GuaranteeSection"));
const Questionnaire   = dynamic(() => import("@/components/Questionnaire"));
const TrustStrip      = dynamic(() => import("@/components/TrustStrip"));
const Footer          = dynamic(() => import("@/components/Footer"));

export default function WeightLoss() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ProductCards />
        <ResultsSection />
        <Testimonials />
        <WeightCalculator />
        <HowItWorks />
        <Reviews />
        <FAQ />
        <GuaranteeSection />
        <Questionnaire />
        <TrustStrip />
      </main>
      <Footer />
    </>
  );
}
