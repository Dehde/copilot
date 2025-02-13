
interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "AI-Generated Content & Tours",
    description: "Simply explain your product and desired onboarding flow to our AI agent. We'll transform your vision into engaging, professional tours automatically."
  },
  {
    title: "Checklists & Q&A",
    description: "Drive user engagement—keep new users on track with guided tasks and answers."
  },
  {
    title: "Automated Maintenance",
    description: "Eliminate breakage—our AI tracks UI changes, so tours remain stable."
  },
  {
    title: "Fully Context Aware",
    description: "Provide autonomous support that understands exactly what your users see and experience, helping them resolve unexpected problems in real-time."
  },
  {
    title: "A True User Copilot",
    description: "More than just product tours—direct user attention, automate routine tasks, and provide solution engineering for a complete user assistance experience."
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
