
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for your team. All plans include a 1-month free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="relative bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Free Trial</h3>
              <p className="text-muted-foreground">Perfect for testing the waters</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>1 month free access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Basic features included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Community support</span>
              </div>
            </div>
            <Button className="mt-8 w-full" variant="outline">
              Start Free Trial
            </Button>
          </div>

          {/* Basic Tier */}
          <div className="relative bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Basic</h3>
              <p className="text-muted-foreground">For growing teams</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Up to 5 product tours</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>50 onboardings/month</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Email support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Analytics dashboard</span>
              </div>
            </div>
            <Button className="mt-8 w-full">
              Get Started
            </Button>
          </div>

          {/* Advanced Tier */}
          <div className="relative bg-white rounded-lg shadow-lg p-8 flex flex-col">
            <div className="absolute -top-2 right-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">Popular</span>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-2">Advanced</h3>
              <p className="text-muted-foreground">For enterprise & large teams</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Unlimited product tours</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Unlimited onboardings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Priority support</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Enhanced security features</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Custom integrations</span>
              </div>
            </div>
            <Button className="mt-8 w-full" variant="default">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
