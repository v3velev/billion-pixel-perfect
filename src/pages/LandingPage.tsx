import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import SolutionsSection from "@/components/SolutionsSection";
import ComparisonSection from "@/components/ComparisonSection";
import ResultsSection from "@/components/ResultsSection";
import ClientStorySection from "@/components/ClientStorySection";
import ExplanationSection from "@/components/ExplanationSection";
import ServiceComparisonSection from "@/components/ServiceComparisonSection";
import ClientResultsSection from "@/components/ClientResultsSection";
import CalendarSection from "@/components/CalendarSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VideoSection title="See how our team can help you unlock new revenue growth." />
      <SolutionsSection />
      <ComparisonSection />
      <ResultsSection />
      <ClientStorySection />
      <ExplanationSection />
      <ServiceComparisonSection />
      <ClientResultsSection />
      <CalendarSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;