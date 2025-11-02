import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/30 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full bg-card/80 backdrop-blur-sm border-border/50">
        <CardContent className="p-8 md:p-12 text-center space-y-8">
          {/* Question */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Do you live in the US?
          </h1>

          {/* Yes/No Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              asChild 
              size="lg" 
              className="h-14 px-12 text-lg font-semibold bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              <a href="/landing">
                Yes
              </a>
            </Button>

            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="h-14 px-12 text-lg font-semibold border-2"
            >
              <a href="/landing">
                No
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;