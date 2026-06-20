import dynamic from "next/dynamic";
import HomeHero from "@/components/HomeHero";
import HomeBento from "@/components/HomeBento";

const WLNav          = dynamic(() => import("@/components/WLNav"));
const WLHowItWorks   = dynamic(() => import("@/components/WLHowItWorks"));
const HomePlatform   = dynamic(() => import("@/components/HomePlatform"));
const HomeStats      = dynamic(() => import("@/components/HomeStats"));
const WLTrust        = dynamic(() => import("@/components/WLTrust"));
const WLTestimonials = dynamic(() => import("@/components/WLTestimonials"));
const WLFooter       = dynamic(() => import("@/components/WLFooter"));

export const metadata = {
  title: "Blissley — Healthcare Technology Platform",
  description:
    "Blissley connects patients to board-certified physicians and licensed pharmacies. 100% online, all 50 states.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <WLNav />
      <main>
        <HomeHero />
        <HomeBento />
        <WLHowItWorks />
        <HomeStats />
        <HomePlatform />
        <WLTrust />
        <WLTestimonials />
      </main>
      <WLFooter />
    </div>
  );
}
