
const Stats = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="feature-card">
            <h3 className="text-2xl font-bold">90%</h3>
            <p className="mt-2 text-muted-foreground">Setup reduction: go from months to 1 day</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">90%</h3>
            <p className="mt-2 text-muted-foreground">Maintenance cuts—avoid tour breakage forever</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="mt-2 text-muted-foreground">Global teams trust us to onboard faster</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
