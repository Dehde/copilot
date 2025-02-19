
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Integrations = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold">Seamless Integrations</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Integrates into your product with 2 lines of code. Works seamlessly with any help center & documentation tool.
        </p>
        <Button className="cta-button mt-8">
          Explore Integrations
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Integrations;
