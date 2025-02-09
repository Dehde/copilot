
import { Check } from "lucide-react";

const SocialProof = () => {
  return (
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
  );
};

export default SocialProof;
