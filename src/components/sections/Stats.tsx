
const Stats = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="feature-card">
            <h3 className="text-2xl font-bold">85% less setup time</h3>
            <p className="mt-2 text-muted-foreground">Go from months to 1 day with AI-powered setup</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">95% less maintenance</h3>
            <p className="mt-2 text-muted-foreground">Automated updates eliminate manual fixes</p>
          </div>
          <div className="feature-card">
            <h3 className="text-2xl font-bold">Truly scales</h3>
            <p className="mt-2 text-muted-foreground">Onboarding coverage through the roof</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
