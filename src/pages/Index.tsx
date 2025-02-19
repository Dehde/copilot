
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/01_Hero";
import SocialProof from "@/components/sections/02_SocialProof";
import Features from "@/components/sections/03_Features";
import SolutionOverview from "@/components/sections/04_SolutionOverview";
import Stats from "@/components/sections/05_Stats";
import HowItWorks from "@/components/sections/06_HowItWorks";
import Integrations from "@/components/sections/07_Integrations";
import FAQ from "@/components/sections/08_FAQ";
import CallToValue from "@/components/sections/09_CallToValue";
import Pricing from "@/components/sections/10_Pricing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative">
        <Hero />
        <SocialProof />
        <Features />
        <SolutionOverview />
        <Stats />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <FAQ />
        <CallToValue />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
