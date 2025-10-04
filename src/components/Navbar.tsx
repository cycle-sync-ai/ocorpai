import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">
            Ocorp<span className="text-accent">AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("curriculum")} className="text-foreground hover:text-accent transition-colors">
              Curriculum
            </button>
            <button onClick={() => scrollToSection("experts")} className="text-foreground hover:text-accent transition-colors">
              Experts
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-accent transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-accent transition-colors">
              Contact
            </button>
            <ThemeToggle />
            <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Learning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection("curriculum")} className="text-foreground hover:text-accent transition-colors text-left">
                Curriculum
              </button>
              <button onClick={() => scrollToSection("experts")} className="text-foreground hover:text-accent transition-colors text-left">
                Experts
              </button>
              <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-accent transition-colors text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-accent transition-colors text-left">
                Contact
              </button>
              <div className="flex items-center justify-between">
                <span className="text-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                Start Learning
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
