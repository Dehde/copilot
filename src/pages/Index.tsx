
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
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-secondary/30">
          <div className="container max-w-7xl mx-auto px-4 h-full flex items-end">
            <h2 className="text-lg font-semibold tracking-wide text-primary uppercase bg-primary/10 px-4 py-2 rounded-full inline-block mb-2">
              Trusted by 500+ PM & CS Teams worldwide
            </h2>
          </div>
        </div>
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
