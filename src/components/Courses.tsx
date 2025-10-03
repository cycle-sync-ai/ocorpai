import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Award } from "lucide-react";
import exteriorImage from "@/assets/course-exterior.jpg";
import interiorImage from "@/assets/course-interior.jpg";
import modelingImage from "@/assets/course-3d.jpg";

const courses = [
  {
    title: "Exterior Design Mastery",
    description: "Master the art of creating stunning vehicle exteriors. Learn form development, surface modeling, and design language.",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    image: exteriorImage,
  },
  {
    title: "Interior Design Excellence",
    description: "Design luxurious and functional car interiors. Cover ergonomics, materials, and user experience principles.",
    duration: "10 Weeks",
    level: "Intermediate",
    image: interiorImage,
  },
  {
    title: "3D Modeling & Visualization",
    description: "Bring your designs to life with advanced 3D modeling techniques and photorealistic rendering skills.",
    duration: "14 Weeks",
    level: "All Levels",
    image: modelingImage,
  },
];

const Courses = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our <span className="text-accent">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive courses designed to take you from beginner to professional automotive designer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    <span>{course.level}</span>
                  </div>
                </div>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Enroll Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
