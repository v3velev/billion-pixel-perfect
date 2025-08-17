import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-border/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
              GTM Revenue
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revenue growth and lasting competitive advantage delivered with Go-to-market expertise & custom AI solutions.
            </p>
            <Button variant="premium" size="lg">
              Book a Call Today
            </Button>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#solutions" className="hover:text-primary transition-smooth">Go-to-market campaigns</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-smooth">Market Intelligence</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-smooth">AI Growth Partner</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#case-studies" className="hover:text-primary transition-smooth">Case Studies</a></li>
              <li><a href="#client-interview" className="hover:text-primary transition-smooth">Client Interview</a></li>
              <li><a href="#video-breakdown" className="hover:text-primary transition-smooth">Video Breakdown</a></li>
              <li><a href="#calendar" className="hover:text-primary transition-smooth">Book a Call</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 GTM Revenue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;