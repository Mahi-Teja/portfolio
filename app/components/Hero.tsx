"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] items-center px-6 pb-16 pt-28 md:px-12 lg:px-16"
    >
      <div className="page-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-secondary">
            Available for opportunities
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-balance max-w-5xl text-[clamp(3.25rem,9vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
        >
          Engineering <span className="text-primary">clarity</span>
          <br />
          into digital products.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-10 flex max-w-5xl flex-col gap-8 border-t border-border pt-7 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-lg leading-8 text-secondary md:text-xl">
            I’m Neeli Mahi Teja, a full-stack engineer building fast, scalable
            interfaces and reliable systems.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              Explore work <ArrowDownRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold transition hover:border-primary/50"
            >
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
