import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            GTM Revenue
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#case-studies" className="text-foreground hover:text-primary transition-smooth">
              Case Studies
            </a>
            <a href="#client-interview" className="text-foreground hover:text-primary transition-smooth">
              Client Interview
            </a>
            <a href="#video-breakdown" className="text-foreground hover:text-primary transition-smooth">
              Video Breakdown
            </a>
          </div>
          
          <Button variant="premium" className="shadow-button">
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;