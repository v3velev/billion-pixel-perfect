import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  number?: number;
  className?: string;
}

const PremiumCard = ({ children, number, className = "" }: PremiumCardProps) => {
  return (
    <div className={`relative gradient-card rounded-3xl p-8 shadow-premium border border-border/20 ${className}`}>
      {number && (
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-border p-0.5">
          <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-xl font-bold text-primary">
            {number}
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default PremiumCard;