import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const ClientStorySection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="gradient-card rounded-3xl p-12 shadow-premium">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Story Content */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-lg font-semibold text-muted-foreground">Customer Story</span>
                  <div className="h-8 w-24 bg-gradient-to-r from-primary/30 to-accent/30 rounded flex items-center justify-center text-sm">
                    zoominfo
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold mb-8 leading-tight">
                  "We saw value from day one."
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Docket delivered value from day one. Questions started flowing within an hour, and it quickly became one of our most active Slack channels. Even our CRO checks it before bed.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">12%</div>
                    <div className="text-sm text-muted-foreground">Average increase in win-rates</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">10%</div>
                    <div className="text-sm text-muted-foreground">Shorter sales cycle</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">LM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Luke Martin</div>
                    <div className="text-sm text-muted-foreground">Head of Revenue Enablement Tech Stack at ZoomInfo</div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Video */}
              <div>
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/30 to-background/10 backdrop-blur-sm"></div>
                    <button className="relative z-10 w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce shadow-glow">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline" size="lg" className="w-full">
                    Read case study
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStorySection;