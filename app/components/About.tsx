"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Go",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Tailwind",
    "Redux",
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 md:px-16 border-t border-black/5 dark:border-white/10 bg-neutral-50/50 dark:bg-transparent"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6"
          >
            About
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-10 max-w-3xl"
          >
            Full-stack engineer building
            <span className="text-muted-foreground">
              {" "}
              scalable systems & clean user experiences.
            </span>
          </motion.h2>

          {/* Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-base text-muted-foreground leading-relaxed"
            >
              <p>
                Focused on performance, scalability, and developer experience.
              </p>
              <p>I design systems that stay maintainable as they grow.</p>
            </motion.div>

            {/* Right */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xs font-mono uppercase tracking-widest text-primary">
                Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs border border-black/10 dark:border-white/10 rounded-full bg-white dark:bg-white/[0.03]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-xs text-muted-foreground italic">
                Currently exploring Go & high-concurrency systems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
