
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">SwiftOnboarder</a>
            <div className="hidden ml-10 space-x-4 md:flex">
              <a href="#solutions" className="nav-link">Solutions</a>
              <a href="#benefits" className="nav-link">Benefits</a>
              <a href="#how-it-works" className="nav-link">How It Works</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#faq" className="nav-link">FAQ</a>
            </div>
          </div>
          <Button className="cta-button">
            Start Your Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container text-center">
          <h1 className="heading">
            Onboarding Your Users Will Love
            <span className="block text-primary">—in Hours, Not Months</span>
          </h1>
          <p className="max-w-2xl mx-auto subheading">
            Eliminate endless manual tour building and maintenance. Our AI powers seamless product tours in 1 day, so you can focus on delivering real value.
          </p>
          <div className="mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="cta-button">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Zero coding. Zero headaches. 90% faster setup.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-secondary/50">
        <div className="container section">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Trusted by 500+ PM & CS Teams worldwide
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div className="feature-card">
                <Check className="w-6 h-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">
                  "Reduced our setup time from 6 weeks to 2 days!"
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  – Fictional Startup Inc.
                </p>
              </div>
              <div className="feature-card">
                <Check className="w-6 h-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">
                  90% Setup Time Reduction
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  From months to just one day
                </p>
              </div>
              <div className="feature-card">
                <Check className="w-6 h-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">
                  ROI Guarantee
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Slash manual effort by 90%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="solutions" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">
            Powerful Features for Seamless Onboarding
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More sections to be added in future iterations */}
    </div>
  );
};

const features = [
  {
    title: "AI-Generated Tours",
    description: "Launch tours 90% faster by letting AI build onboarding flows from a simple description."
  },
  {
    title: "Automated Maintenance",
    description: "Eliminate breakage—our AI tracks UI changes, so tours remain stable."
  },
  {
    title: "Chrome Extension Capture",
    description: "Streamline your workflow—gather UI elements and screenshots without leaving your browser."
  },
  {
    title: "Checklists & Q&A",
    description: "Drive user engagement—keep new users on track with guided tasks and answers."
  },
  {
    title: "Pointing & Highlighting",
    description: "Direct user attention precisely where it's needed, no messy selectors required."
  },
  {
    title: "Personalization at Scale",
    description: "Create multiple persona-specific tours with AI-powered customization."
  }
];

export default Index;
