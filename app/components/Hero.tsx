"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[94svh] items-end overflow-hidden px-5 pb-12 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pb-16"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-55" />
      <div className="absolute right-[8%] top-[18%] h-44 w-44 rounded-full bg-accent/20 blur-[70px]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="mb-7 inline-flex -rotate-2 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium shadow-sm">
              <Sparkles size={14} className="text-primary" />
              Hey, I’m Mahi — engineer & builder
            </div>

            <h1 className="max-w-5xl text-[clamp(3.7rem,10vw,8.8rem)] leading-[0.82] tracking-[-0.075em]">
              Making{" "}
              <span className="font-serif italic text-primary">complex</span>
              <br /> feel wonderfully simple.
            </h1>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="mb-2 rounded-[1.75rem] border border-border bg-surface p-5 editorial-shadow lg:mb-4"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Currently
            </p>
            <p className="mt-2 text-sm leading-6 text-secondary">
              Building enterprise experiences and exploring full-stack systems in
              Hyderabad.
            </p>
            <a
              href="#projects"
              className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold"
            >
              See what I’m making <ArrowDown size={16} />
            </a>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
