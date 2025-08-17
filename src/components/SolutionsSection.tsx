import { Button } from "@/components/ui/button";
import PremiumCard from "./PremiumCard";
import VideoSection from "./VideoSection";

const SolutionsSection = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-64 h-64 gradient-accent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 gradient-primary rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-20">
          <span className="gradient-primary bg-clip-text text-transparent">GTM Revenue solutions</span>
        </h2>
        
        <div className="space-y-24">
          {/* Solution 1: Go-to-market sales campaigns */}
          <PremiumCard number={1} className="w-4/5 mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">Go-to-market sales campaigns</h3>
            
            <div className="mb-8">
              <p className="text-lg text-muted-foreground mb-2">We create sophisticated GTM campaigns to generate new sales opportunities:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Leverage unique data sets combined with deep context on your brand and company</li>
                <li>• Run scalable, creative campaigns</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h4 className="font-semibold mb-4">$1.1M in Closed Deals from 1 Campaign</h4>
                <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-muted-foreground">
                  case study 1
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-4">103 Sales Opportunities in 1 month</h4>
                <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-muted-foreground">
                  case study 2
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-4">GTM Revenue outperforming 3 Sales Reps & 2 Agencies</h4>
                <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-muted-foreground">
                  case study 2
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg">Discover More →</Button>
            </div>
          </PremiumCard>
          
          {/* Solution 2: Market Intelligence & Data Solutions */}
          <PremiumCard number={2} className="w-4/5 mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">Market Intelligence & Data Solutions</h3>
            
            <div className="mb-8">
              <ul className="space-y-3 text-muted-foreground">
                <li>• Keep data <strong>enriched</strong> and <strong>accurate</strong> at scale.</li>
                <li>• Reflect real-time target account changes in your CRM</li>
                <li>• Get Deep Research at Scale for all leads in your CRM, instead of relying on manual research.</li>
                <li>• Reduce wasted efforts by prioritizing high-intent leads</li>
                <li>• Fuel GTM outreach with live, contextual insights</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <h4 className="font-semibold mb-4 text-center">Outcomes</h4>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center text-muted-foreground">
                  Video explanation of all cases
                </div>
              </div>
              <div className="space-y-4 text-sm">
                <div>• %30 more market coverage</div>
                <div>• 40% increase in meetings booked per rep per month</div>
                <div>• 17% of total Pipeline coming from this platform</div>
              </div>
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg">Discover More →</Button>
            </div>
          </PremiumCard>
          
          {/* Solution 3: AI & Go-to-market growth Partner */}
          <PremiumCard number={3} className="w-4/5 mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">AI & Go-to-market growth Partner</h3>
            
            <div className="mb-8 space-y-4 text-lg text-muted-foreground">
              <p>- Partnering with B2B companies and transforming them into faster, leaner, more profitable organizations.</p>
              <p>- Get a team of AI and go-to-market experts to help orchestrate your entire go-to-market process from Ideation → Execution → Optimisation</p>
              <p>- build any AI Agent or automation you need</p>
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg">Discover More →</Button>
            </div>
          </PremiumCard>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;