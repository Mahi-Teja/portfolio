"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const words = ["fast", "scalable", "real-time"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    start();
    return stop;
  }, []);

  const start = () => {
    if (intervalRef.current) return; // prevent stacking

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1800);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // important reset
    }
  };

  return (
    <span
      className="relative inline-flex items-center align-middle overflow-hidden h-[1.2em] leading-none"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 whitespace-nowrap text-primary"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}