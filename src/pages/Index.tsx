
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/01_Hero";
import SocialProof from "@/components/sections/02_SocialProof";
import Features from "@/components/sections/03_Features";
import HowItWorks from "@/components/sections/04_HowItWorks";
import Benefits from "@/components/sections/05_Benefits";
// import HowItWorks from "@/components/sections/06_HowItWorks";
import Integrations from "@/components/sections/06_Integrations";
import Pricing from "@/components/sections/07_Pricing";
import FAQ from "@/components/sections/08_FAQ";
import CallToValue from "@/components/sections/09_CallToValue";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Benefits />
        {/* <HowItWorks /> */}
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
