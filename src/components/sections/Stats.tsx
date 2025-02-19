
const Stats = () => {
  return (
    <section id="stats" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="feature-card">
            <h3 className="text-2xl font-bold">Save CSMs 80% of their time</h3>
            <p className="mt-2 text-muted-foreground">By covering both onboarding, consulting & support with one solution</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">90% less time spent on setup & maintenance</h3>
            <p className="mt-2 text-muted-foreground">Product tours often take months to setup properly - we'll get you up and running in a day.</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">Truly scalable, truly personalized</h3>
            <p className="mt-2 text-muted-foreground">High speed allows for high coverage - for all your personas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
