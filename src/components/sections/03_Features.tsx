
interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "AI generates & reviews onboarding experiences",
    description: "Based on your documentation, our AI proposes & reviews tours, applying all best practices for maximum effectiveness."
  },
  {
    title: "Users questions: Answered",
    description: 'Based on the gathered product knowledge. Thus enabling configuration of the most complex software'
  },
  {
    title: "Highlight any element",
    description: "For an improved onboarding experience of your first time users."
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
