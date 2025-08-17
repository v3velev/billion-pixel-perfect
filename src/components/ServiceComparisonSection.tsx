const ServiceComparisonSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 leading-tight">
          GTM Revenue helps you identify the best segment in the market and build the systems to effectively convert them to sales opportunities at scale
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Today's Reality */}
          <div className="gradient-card rounded-3xl p-8 shadow-card">
            <h3 className="text-3xl font-bold mb-6 text-destructive">Today's Reality</h3>
            <p className="text-lg text-muted-foreground mb-6">Companies can no longer make the old way work</p>
            
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>You buy ZoomInfo to build account lists</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>You write message by persona</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Your SDRs try to personalize 1 by 1</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Messages are personalized with no insight</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                <span>Scale by hiring, not with AI</span>
              </li>
            </ul>
          </div>
          
          {/* The Blueprint Way */}
          <div className="gradient-card rounded-3xl p-8 shadow-premium border border-primary/20">
            <h3 className="text-3xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">The Blueprint Way</h3>
            <p className="text-lg text-muted-foreground mb-6">Companies need to transition to the new world, where</p>
            
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>You identify your best performing segment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>You match bespoke data to their insight</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Your customer's insight defines the message</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Your account and persona list is from the insight</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>You can scale to all channels</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparisonSection;