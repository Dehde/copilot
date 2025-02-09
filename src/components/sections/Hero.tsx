
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;
