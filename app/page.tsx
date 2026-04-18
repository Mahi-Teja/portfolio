"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experiance";
import Bot from "./components/Bot";
import BgGG from "./components/bg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EntryLoader from "./components/EntryLoader";

export default function Home() {
  const [loading, setLoading] = useState(!true);
  return (
    <main className="bg- min-h-screen scroll-smooth selection:bg-primary selection:text-secondary">
      <AnimatePresence mode="wait">
        {loading && <EntryLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {/* Only show content or animate it in once loading is false */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <Projects />
          <About />
          <Contact />
          <Bot />
          <Footer />
        </motion.div>
      )}
    </main>
  );
}
