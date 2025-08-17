import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-accent rounded-full blur-3xl opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="block mb-4">Revenue growth and lasting competitive advantage</span>
            <span className="block gradient-primary bg-clip-text text-transparent">
              delivered with Go-to-market expertise & custom AI solutions.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            GTM Revenue gives you an unfair competitive advantage in your B2B sales. 
            Generating over $53M+ in sales pipeline for our clients with our AI sales solutions.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <Button variant="premium" size="lg" className="text-lg px-8 py-4 shadow-button animate-pulse-glow">
              Book a call →
            </Button>
            <Button variant="outline-gradient" size="lg" className="text-lg px-8 py-4">
              Watch 8 minute tour
            </Button>
          </div>
          
          <div className="inline-flex items-center gap-3 text-primary font-semibold text-lg cursor-pointer hover:text-primary-light transition-smooth">
            <span>Trusted by 75+ B2B companies | (View Case Studies)</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;