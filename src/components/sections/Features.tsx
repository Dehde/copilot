
interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Crisp, Minimal Tours",
    description: "Start with the essentials. Give new users a short, clear path—no 30-step walkthroughs or clutter."
  },
  {
    title: "Visual UI Guidance",
    description: 'Each step can point to the right place on the screen, so users never wonder, "Where do I click?"'
  },
  {
    title: "Real-Time, Context-Aware Q&A",
    description: "Let users ask questions mid-tour. Our AI answers exactly what they need, right on the spot."
  },
  {
    title: "Instant AI Setup",
    description: "Describe your product goals, and our AI builds your minimal tours automatically—goodbye lengthy configuration."
  },
  {
    title: "Self-Updating & Future-Proof",
    description: "If your interface changes, our AI updates selectors and steps. No more broken tours or manual fixes."
  },
  {
    title: "A Continuous Copilot",
    description: "Even after onboarding, the AI stays ready to guide, freeing you to focus on higher-level tasks."
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
