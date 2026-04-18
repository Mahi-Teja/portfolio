"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "mahineeli123@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-16 border-t border-black/5 dark:border-white/10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start"
      >
        {/* Left Side: Copy */}
        <motion.div variants={itemVariants}>
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-6">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-8">
            Let’s build <br />
            something <span className="text-primary italic">impactful.</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
            I’m currently open to new opportunities and technical
            collaborations. If you're looking for an engineer who values clean
            code and performance, let's chat.
          </p>

          {/* <div className="flex items-center gap-3 text-xs text-muted-foreground/60 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for remote roles
          </div> */}
        </motion.div>

        {/* Right Side: Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 pt-4 md:pt-20"
        >
          {/* Email Interaction Card */}
          <div className="group relative">
            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 border border-black/10 dark:border-white/10 rounded-2xl hover:border-primary/50 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Direct Email
                  </p>
                  <span className="text-sm  font-semibold tracking-tight">
                    {email}
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <Check size={18} className="text-emerald-500" />
                  </motion.div>
                ) : (
                  <Copy
                    size={18}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Primary Action */}
          <a
            href={`/resume.pdf`}
            target="_blank"
            className="flex items-center border bg-primary justify-center gap-2 px-6 py-5  text-background dark:bg-primary  rounded-2xl text-sm font-bold hover:opacity-90 transition-all active:scale-[0.98]"
          >
            Resume
            <ArrowUpRight size={18} />
          </a>

          {/* Social Links */}
          <div className="mt-8">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 ml-1">
              Connect elsewhere
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "LinkedIn", href: "https://linkedin.com/in/mahiteja" },
                { name: "GitHub", href: "https://github.com/Mahi-teja" },
                {
                  name: "X / Twitter",
                  href: "https://twitter.com/empty_codes",
                },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium border border-black/5 dark:border-white/5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
