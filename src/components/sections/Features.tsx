
interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "AI-Generated Tours",
    description: "Launch tours 90% faster by letting AI build onboarding flows from a simple description."
  },
  {
    title: "Automated Maintenance",
    description: "Eliminate breakage—our AI tracks UI changes, so tours remain stable."
  },
  {
    title: "Chrome Extension Capture",
    description: "Streamline your workflow—gather UI elements and screenshots without leaving your browser."
  },
  {
    title: "Checklists & Q&A",
    description: "Drive user engagement—keep new users on track with guided tasks and answers."
  },
  {
    title: "Pointing & Highlighting",
    description: "Direct user attention precisely where it's needed, no messy selectors required."
  },
  {
    title: "Personalization at Scale",
    description: "Create multiple persona-specific tours with AI-powered customization."
  }
];

const Features = () => {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">
          Powerful Features for Seamless Onboarding
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
