
import { Building2, Building, HomeIcon, Landmark, School2, Store } from "lucide-react";

const SocialProof = () => {
  const companies = [
    { name: "TechFlow Systems", icon: Building2, color: "text-blue-500" },
    { name: "InnoVista Corp", icon: Building, color: "text-green-500" },
    { name: "EduSmart Academy", icon: School2, color: "text-purple-500" },
    { name: "ProServe Solutions", icon: Store, color: "text-orange-500" },
    { name: "HomeBase Analytics", icon: HomeIcon, color: "text-red-500" },
    { name: "FinCore Enterprise", icon: Landmark, color: "text-teal-500" },
  ];

  return (
    <section className="bg-secondary/30 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center space-y-8">
          <p className="text-lg text-muted-foreground">
            Already helping product and customer success teams at
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-2 group hover:scale-105 transition-all duration-300"
              >
                <company.icon className={`w-12 h-12 ${company.color}`} />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
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
