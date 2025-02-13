
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Features from "@/components/sections/Features";
import SolutionOverview from "@/components/sections/SolutionOverview";
import Stats from "@/components/sections/Stats";
import HowItWorks from "@/components/sections/HowItWorks";
import Integrations from "@/components/sections/Integrations";
import FAQ from "@/components/sections/FAQ";
import CallToValue from "@/components/sections/CallToValue";
import Pricing from "@/components/sections/Pricing";

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
