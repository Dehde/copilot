
import { 
  Briefcase, 
  Building2, 
  CircuitBoard, 
  Database, 
  LineChart 
} from "lucide-react";

const SocialProof = () => {
  const companies = [
    { 
      name: "Linear", 
      logo: "https://cdn.brandfetch.io/iduDa181eM/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", 
      color: "text-indigo-500" 
    },
    { name: "Retool", icon: Database, color: "text-blue-500" },
    { name: "Vercel", icon: Building2, color: "text-slate-700" },
    { name: "Stripe", icon: LineChart, color: "text-purple-600" },
    { name: "GitLab", icon: CircuitBoard, color: "text-orange-600" },
    { name: "Notion", icon: Briefcase, color: "text-gray-800" },
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mt-12">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-3 group hover:scale-105 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-white shadow-sm w-16 h-16 flex items-center justify-center">
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <company.icon className={`w-10 h-10 ${company.color}`} />
                  )}
                </div>
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
