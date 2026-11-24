import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Bot from "./components/Bot";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Bot />
      <Footer />
    </main>
  );
}
