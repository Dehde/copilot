
import { CircleCheck } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center space-y-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="feature-card group hover:scale-105 transition-all duration-300">
              <div className="flex justify-center">
                <CircleCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors">
                "Reduced our setup time from 6 weeks to 2 days!"
              </h3>
              <p className="mt-3 text-base text-muted-foreground">
                – Fictional Startup Inc.
              </p>
            </div>

            <div className="feature-card group hover:scale-105 transition-all duration-300">
              <div className="flex justify-center">
                <CircleCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors">
                90% Setup Time Reduction
              </h3>
              <p className="mt-3 text-base text-muted-foreground">
                From months to just one day
              </p>
            </div>

            <div className="feature-card group hover:scale-105 transition-all duration-300">
              <div className="flex justify-center">
                <CircleCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors">
                ROI Guarantee
              </h3>
              <p className="mt-3 text-base text-muted-foreground">
                Slash manual effort by 90%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
