import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Curriculum from "@/components/Curriculum";
import ExpertMentorship from "@/components/ExpertMentorship";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div id="curriculum">
          <Curriculum />
        </div>
        <div id="experts">
          <ExpertMentorship />
        </div>
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
