import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder for student work - in a real scenario, these would be actual student projects
  const galleryImages = [
    { id: 1, title: "Sports Car Concept", category: "Exterior Design" },
    { id: 2, title: "Luxury Sedan Interior", category: "Interior Design" },
    { id: 3, title: "Electric Vehicle Design", category: "3D Modeling" },
    { id: 4, title: "SUV Dashboard Design", category: "Interior Design" },
    { id: 5, title: "Concept Supercar", category: "Exterior Design" },
    { id: 6, title: "Futuristic Cockpit", category: "Interior Design" },
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Student <span className="text-accent">Showcase</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Witness the exceptional work created by our talented students. These designs represent the future of automotive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-video bg-muted rounded-xl overflow-hidden cursor-pointer shadow-[var(--shadow-elegant)] hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Placeholder gradient backgrounds to represent different projects */}
              <div className={`absolute inset-0 ${
                image.id % 3 === 0
                  ? "bg-gradient-to-br from-accent/20 to-primary/40"
                  : image.id % 2 === 0
                  ? "bg-gradient-to-br from-primary/30 to-accent/30"
                  : "bg-gradient-to-br from-primary/40 to-primary/20"
              }`} />
              
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/60 transition-all duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground p-6">
                <h3 className="text-xl font-bold mb-2 text-center">{image.title}</h3>
                <p className="text-sm opacity-90">{image.category}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary-foreground font-semibold">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
