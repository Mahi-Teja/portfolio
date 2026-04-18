import React, { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  // Apply the 'dark' class to the html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = async (event) => {
    // Check for browser support
    if (!document.startViewTransition) {
      setIsDark(!isDark);
      return;
    }

    // Get the click position
    const x = event.clientX;
    const y = event.clientY;

    // Calculate distance to the furthest corner
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      // flushSync ensures React updates the DOM before the snapshot is taken
      flushSync(() => {
        setIsDark(!isDark);
      });
    });

    // Wait for the transition to be ready to animate
    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer border border-primary/20 hover:border-primary/30 p-2 flex justify-center items-center rounded-xl bg-background text-foreground transition-transform active:scale-95"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
