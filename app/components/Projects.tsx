"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectData from "../data/projects";
import { Github } from "./Icons";

// 1. Define Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1, // Delay between each project card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-16 border-t border-black/5 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">
            Selected Work
          </p>
          {/* <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Building with purpose
          </h2>
          <p className="text-secondary max-w-2xl text-lg">
            A selection of projects focused on clean architecture, performance,
            and real-world scalability.
          </p> */}
        </motion.div>

        {/* Projects List with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before reaching the element
          className="space-y-8"
        >
          {projectData.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, description, techStack, links, code }: any) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }} // Slight lift on hover
      className="group relative overflow-hidden rounded-2xl  border border-primary/30    bg-primary-900/50 p-8   hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              {title}
            </h3>

            {/* Quick Links fade in on hover */}
            <div className="flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              {links?.live && (
                <a
                  href={links?.live || "#"}
                  target="_blank"
                  className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-primary hover:text-white transition-colors"
                >
                  <ArrowUpRight size={18} />
                </a>
              )}
              {links?.code && (
                <a
                  href={links?.code || "#"}
                  target="_blank"
                  className="p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-primary hover:text-white transition-colors"
                >
                  <Github />
                </a>
              )}
            </div>
          </div>

          <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((item: string) => (
              <span
                key={item}
                className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative arrow that slides in from the left on hover */}
        {/* <div className="hidden md:flex items-center justify-center">
          <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
            <ArrowUpRight size={40} strokeWidth={1} />
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};
