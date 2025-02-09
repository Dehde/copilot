
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step {
  title: string;
  description: string;
}

const howItWorks: Step[] = [
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

const HowItWorks = () => {
  return (
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
  );
};

export default HowItWorks;
