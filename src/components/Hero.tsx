import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-car-design.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional car design workspace"
          className="w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl text-black md:text-7xl font-bold mb-6 leading-tight">
            OcorpAI
            <span className="text-black block mt-2">Automotive Design Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-black mb-8 leading-relaxed">
            AI-powered automotive design education. Master the fundamentals, connect with industry experts, and build your career in automotive design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-[var(--shadow-glow)]"
            >
              Start Your Journey
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("courses");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
