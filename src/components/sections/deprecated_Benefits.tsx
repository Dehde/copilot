
interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "No Coding Required",
    description: "Business users, PMs, and CS teams manage tours effortlessly"
  },
  {
    title: "Personalize at Scale",
    description: "With setup and maintenance handled by AI, build multiple persona-specific tours"
  },
  {
    title: "Reduce Errors & Friction",
    description: "Automatic element tracking means fewer broken steps and frustrated users"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="section bg-secondary/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Why It Matters</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="feature-card">
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
