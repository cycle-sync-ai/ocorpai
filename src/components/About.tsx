import { Palette, Layers, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Creative Excellence",
    description: "Learn fundamental design principles and develop your unique automotive design style.",
  },
  {
    icon: Layers,
    title: "Industry Tools",
    description: "Master professional software including Alias, CATIA, and advanced 3D modeling platforms.",
  },
  {
    icon: Zap,
    title: "Fast-Track Learning",
    description: "Intensive programs designed to get you industry-ready in months, not years.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn directly from designers who've worked at leading automotive brands.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose AutoDesign Academy?
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
