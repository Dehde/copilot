
const Stats = () => {
  return (
    <section id="stats" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="feature-card">
            <h3 className="text-2xl font-bold">Save CSMs 80% of their time</h3>
            <p className="mt-2 text-muted-foreground">By covering onboarding, consulting & support with one solution.</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">Target lower ACV market segments</h3>
            <p className="mt-2 text-muted-foreground">By scaling your onboarding, new market segments become feasible.</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">More effective onboarding than ever before</h3>
            <p className="mt-2 text-muted-foreground">By enabling your CSMs to iterate over onboarding content effectively.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
