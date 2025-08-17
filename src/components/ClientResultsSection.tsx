import { Button } from "@/components/ui/button";

const ClientResultsSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Result 1 */}
          <div className="gradient-card rounded-3xl p-8 shadow-premium">
            <h3 className="text-2xl font-bold text-center mb-6">$2.8M+ in lifetime value generated over 17 months</h3>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center text-muted-foreground mb-6">
              picture
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg">Discover More →</Button>
            </div>
          </div>
          
          {/* Result 2 */}
          <div className="gradient-card rounded-3xl p-8 shadow-premium">
            <h3 className="text-2xl font-bold text-center mb-6">AI Agent Ecosystem - 60-90 Sales Opportunities per month</h3>
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

export default ClientResultsSection;