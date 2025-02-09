
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToValue = () => {
  return (
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
  );
};

export default CallToValue;
