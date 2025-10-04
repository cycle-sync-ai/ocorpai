import { Palette, Layers, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "AI-Powered Learning",
    description: "Get instant feedback on your designs with our advanced AI analysis system that evaluates your work like a professional mentor.",
  },
  {
    icon: Layers,
    title: "Progressive Curriculum",
    description: "Structured 9-term program from beginner to advanced, covering everything from basic sketching to professional portfolio development.",
  },
  {
    icon: Zap,
    title: "Industry-Ready Skills",
    description: "Master CAD tools, materials science, ergonomics, and professional presentation skills that employers demand.",
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Connect with industry professionals from Tesla, BMW, Aston Martin, and other leading automotive brands for mentorship and career guidance.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose OcorpAI?
          </h2>
          <p className="text-lg text-muted-foreground">
            We bridge the gap between passion and profession. Our comprehensive curriculum and expert instructors prepare you for a thriving career in automotive design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
