import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import sheinLogo from "@/assets/shein_logo.png";

const LandingPage = () => {
  const offerUrl = "https://uplevelrewarded.com/aff_c?offer_id=2596&aff_id=12594";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/30 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full bg-card/80 backdrop-blur-sm border-border/50">
        <CardContent className="p-8 md:p-12 text-center space-y-8">
          {/* Apple Logo */}
          <div className="flex justify-center mb-4">
            <img src={sheinLogo} alt="SHEIN" className="h-20 md:h-28" />
          </div>

          {/* Question */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Want to Get a $750 Apple Gift Card?
          </h1>

          <div className="text-left max-w-lg mx-auto space-y-3 text-white">
            <p className="text-base md:text-lg">
              <span className="font-semibold text-white">Step 1:</span> Enter your email & basic info
            </p>
            <p className="text-base md:text-lg">
              <span className="font-semibold text-white">Step 2:</span> Complete 2-3 Deals
            </p>
            <p className="text-base md:text-lg">
              <span className="font-semibold text-white">Step 3:</span> Claim your reward and repeat anytime!
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">
            <Button 
              asChild 
              size="lg" 
              className="h-14 px-12 text-lg font-semibold bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              <a href={offerUrl} rel="noopener noreferrer">
                Start Now
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;
