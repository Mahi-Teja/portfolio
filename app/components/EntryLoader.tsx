"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function EntryLoader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 900);
    const t2 = setTimeout(() => setStep(2), 1300);
    const t3 = setTimeout(() => onComplete(), 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="font-bold tracking-tight text-3xl md:text-6xl">
        <AnimatePresence mode="wait">
          {/* STEP 0 → an empty.com */}
          {step === 0 && (
            <motion.div className="text-3xl md:text-6xl flex items-center gap-2">
              <span className="text-muted-foreground">an</span>
              <span>
                <motion.span layoutId="n-char">n</motion.span>
                <span className="opacity-50">e</span>
                <motion.span layoutId="m-char">m</motion.span>
                <span className="opacity-50">p</span>
                <motion.span layoutId="t-char">t</motion.span>
                <span className="opacity-50">y</span>
              </span>

              <span className="text-primary text-lg md:text-2xl">.com</span>
            </motion.div>
          )}

          {/* STEP 1 → isolate N M T (others fade out, SAME POSITION) */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-8 md:gap-12"
            >
              <motion.span layoutId="n-char">n</motion.span>
              <motion.span layoutId="m-char">m</motion.span>
              <motion.span layoutId="t-char">t</motion.span>
            </motion.div>
          )}

          {/* STEP 2 → expand */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4 md:gap-8 text-2xl md:text-4xl tracking-[0.15em]"
            >
              <div className="flex overflow-hidden">
                <motion.span layoutId="n-char">n</motion.span>
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  eeli
                </motion.span>
              </div>

              <div className="flex overflow-hidden">
                <motion.span layoutId="m-char" className="text-primary">
                  m
                </motion.span>
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  ahi
                </motion.span>
              </div>

              <div className="flex overflow-hidden">
                <motion.span layoutId="t-char">t</motion.span>
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  eja
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
