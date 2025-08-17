import { Play } from "lucide-react";

interface VideoSectionProps {
  title: string;
  videoId?: string;
  className?: string;
}

const VideoSection = ({ title, videoId, className = "" }: VideoSectionProps) => {
  return (
    <section className={`py-20 px-6 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="gradient-card rounded-3xl p-8 shadow-premium">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Video placeholder with play button */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-sm"></div>
                <button className="relative z-10 w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce shadow-glow">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </button>
                
                {/* Premium video overlay */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium">
                  8 min tour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;