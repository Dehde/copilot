
interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Your users questions, answered.",
    description: "Realtime & context-aware. Right within the tour."
  },
  {
    title: "Visual UI Guidance",
    description: 'Each step can point to the right place on the screen, so users never wonder, "Where do I click?"'
  },
  {
    title: "Solution Engineering? Consulting? Let AI handle it",
    description: "We enable AI with all your context - turning it into a 24/7 expert of your product."
  },
  {
    title: "Instant AI Setup",
    description: "Describe your product goals, and our AI builds your tours automatically—goodbye lengthy configuration."
  },
  {
    title: "Self-Updating & Future-Proof",
    description: "If your interface changes, our AI updates selectors and steps. No more broken tours or manual fixes."
  },
  {
    title: "A Continuous Copilot",
    description: "Even after onboarding, the AI stays ready to guide. Onboarding & Support in one solution."
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
