
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutionSteps = [
  "Provide Context to our AI (help center, docs, call recordings)",
  "Walk our AI through your product",
  "Let AI create, review & edit tours",
  "Iterate based on user feedback"
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
