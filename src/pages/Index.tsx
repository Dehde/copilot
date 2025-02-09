import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">Kalasar</a>
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

      {/* Features Section */}
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

      {/* Solution Overview */}
      <section id="how-it-works" className="section bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">See It in Action</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {solutionSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
              <Button className="cta-button mt-8">
                Start Your Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white rounded-lg p-4">
              {/* Placeholder for GIF */}
              <div className="aspect-video bg-muted rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Credibility */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="feature-card">
              <h3 className="text-2xl font-bold">90%</h3>
              <p className="mt-2 text-muted-foreground">Setup reduction: go from months to 1 day</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-bold">90%</h3>
              <p className="mt-2 text-muted-foreground">Maintenance cuts—avoid tour breakage forever</p>
            </div>
            <div className="feature-card">
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="mt-2 text-muted-foreground">Global teams trust us to onboard faster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="section bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Why It Matters</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="feature-card">
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Step-by-Step Guide</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="feature-card">
                <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="cta-button">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section bg-secondary/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold">Seamless Integrations</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Works with modern web frameworks—React, Vue, Angular, and more. No extra code or complex APIs needed.
          </p>
          <Button className="cta-button mt-8">
            Explore Integrations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="feature-card">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="cta-button">
              View All FAQs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call-To-Value */}
      <section className="section bg-secondary/50">
        <div className="container text-center">
          <h2 className="heading">Ready to Onboard Users in Hours, Not Months?</h2>
          <p className="subheading">
            Join the growing community of PMs & CS teams slashing setup & maintenance by 90%.
          </p>
          <div className="mt-10">
            <Button className="cta-button">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              €500/month, no hidden fees, no coding required.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">Kalasar</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Making user onboarding effortless with AI-powered solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                support@kalasar.com
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 Kalasar – All rights reserved
          </div>
        </div>
      </footer>
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

const solutionSteps = [
  "Explain your product once to our AI.",
  "Capture key UI elements via our Chrome Extension.",
  "Watch our AI automatically create tours, checklists, and highlights.",
  "Refine only if you want to personalize further—no coding needed."
];

const benefits = [
  {
    title: "No Coding Required",
    description: "Business users, PMs, and CS teams manage tours effortlessly"
  },
  {
    title: "Personalize at Scale",
    description: "With setup and maintenance handled by AI, build multiple persona-specific tours"
  },
  {
    title: "Reduce Errors & Friction",
    description: "Automatic element tracking means fewer broken steps and frustrated users"
  }
];

const howItWorks = [
  {
    title: "Install in Minutes",
    description: "Add our lightweight snippet to your web app."
  },
  {
    title: "Capture Your App",
    description: "Use our Chrome Extension to record essential elements."
  },
  {
    title: "AI Onboarding",
    description: "Provide your core product details; let AI generate the tours."
  },
  {
    title: "Edit & Launch",
    description: "Publish instantly, with no coding or design hassles."
  }
];

const faqs = [
  {
    question: "Is it really just 1 day to launch?",
    answer: "Absolutely. Our AI automates 90% of the work—just confirm and publish."
  },
  {
    question: "Do I need coding skills?",
    answer: "None at all—PMs and CS teams can handle everything with ease."
  },
  {
    question: "What if my UI changes?",
    answer: "We keep track of element updates automatically—no tour breakages."
  },
  {
    question: "What's in the €500/month plan?",
    answer: "Unlimited tours, up to 100 onboardings per month, and ongoing AI maintenance."
  }
];

export default Index;
