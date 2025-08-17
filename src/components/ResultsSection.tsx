import { Button } from "@/components/ui/button";

const ResultsSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20">
          <span className="gradient-primary bg-clip-text text-transparent">Actual results with real numbers.</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Result 1 */}
          <div className="gradient-card rounded-3xl p-8 shadow-premium">
            <h3 className="text-2xl font-bold text-center mb-6">GTM Revenue outperforming 6 sales people</h3>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-muted-foreground mb-6">
              picture
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg">Discover More →</Button>
            </div>
          </div>
          
          {/* Result 2 */}
          <div className="gradient-card rounded-3xl p-8 shadow-premium">
            <h3 className="text-2xl font-bold text-center mb-6">1.1 million in closed deals from 1 campaign</h3>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-muted-foreground mb-6">
              picture
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg">Discover More →</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;