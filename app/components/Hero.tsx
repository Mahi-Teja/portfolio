"use client";

import { motion } from "framer-motion";
import RotatingText from "./RotateText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] md:min-h-screen relative flex items-center justify-center px-6 md:px-16 md:pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full flex flex-col items-center md:items-start text-center md:text-left"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl   font-bold tracking-tighter leading-[0.95] mb-8"
        >
          Hi, I'm <span className="text-primary">Mahi Teja</span> —
          <br />
          I build <RotatingText /> web systems.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
        >
          Focused on building high-performance backends and responsive frontends
          for real-time applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-co  md:flex-row flex-wrap items-center justify-center md:justify-start gap-5 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-background text-sm font-semibold rounded-full hover:opacity-90 transition-all active:scale-95"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-black/10 dark:border-white/10 text-sm font-semibold rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95"
          >
            Let's Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
