const ComparisonSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">
          We are <span className="text-destructive">NOT</span> a SaaS or an Agency
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Traditional Options */}
          <div className="gradient-card rounded-3xl p-8 shadow-card border border-destructive/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Because traditional options aren't cutting it:</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>AI alone lacks the nuance and contextual understanding that human expertise brings.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Software tools still require your team to do all the work</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>In-house teams are expensive and often slowed down by internal processes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Agencies are expensive and often disconnected from your company's reality.</span>
              </li>
            </ul>
          </div>
          
          {/* GTM Revenue */}
          <div className="gradient-card rounded-3xl p-8 shadow-premium border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-primary bg-clip-text text-transparent">GTM Revenue</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Immediate value delivery in first weeks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Fully managed outcomes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Strategy handled for you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Infinitely scalable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Access to proprietary data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Custom-built solutions aligned with your company</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Adapts to your needs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;