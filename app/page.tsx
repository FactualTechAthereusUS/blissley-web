import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProductCards from "@/components/ProductCards";
import ResultsSection from "@/components/ResultsSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WeightCalculator from "@/components/WeightCalculator";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import GuaranteeSection from "@/components/GuaranteeSection";
import Questionnaire from "@/components/Questionnaire";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";

export default function Home() {
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
