
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutionSteps = [
  "Explain your product once to our AI.",
  "Capture key UI elements via our Chrome Extension.",
  "Watch our AI automatically create tours, checklists, and highlights.",
  "Refine only if you want to personalize further—no coding needed."
];

const SolutionOverview = () => {
  return (
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
            <div className="aspect-video bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
