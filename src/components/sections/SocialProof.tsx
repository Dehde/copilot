
import { 
  Briefcase, 
  Building2, 
  CircuitBoard, 
  Database, 
  LineChart 
} from "lucide-react";

const SocialProof = () => {
  const logos = [
    { 
      name: "Linear", 
      logo: "https://cdn.brandfetch.io/iduDa181eM/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
    },
    { 
      name: "Linear", 
      logo: "https://cdn.brandfetch.io/iduDa181eM/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
    },
    { 
      name: "Linear", 
      logo: "https://cdn.brandfetch.io/iduDa181eM/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
    },
    { 
      name: "Stripe", 
      logo: "https://cdn.brandfetch.io/idxAg10C0L/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
    },
    { 
      name: "Stripe", 
      logo: "https://cdn.brandfetch.io/idxAg10C0L/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
    }
  ];

  return (
    <section className="bg-secondary/30 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl font-medium text-foreground">
              Companies that prioritize excellence in user experience
            </p>
            <p className="text-base text-muted-foreground italic">
              "People think speed and quality are conflicts of interest. The opposite is true. Speed is a prerequisite to quality."
            </p>
            <p className="text-sm text-muted-foreground">
              — Nan Yu, Head of Product at Linear
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center mt-12">
            {logos.map((company, index) => (
              <div 
                key={index} 
                className="w-32 h-20 flex items-center justify-center group hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
