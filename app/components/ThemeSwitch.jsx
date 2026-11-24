"use client";

import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Check, Moon, Palette, Sun } from "lucide-react";

const themes = [
  { id: "light", name: "Paper", icon: Sun },
  { id: "dark", name: "Graphite", icon: Moon },
  { id: "midnight", name: "Midnight", icon: Moon },
  { id: "colorful", name: "Playful", icon: Palette },
];

export default function ThemeToggle() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const menuRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") || "light";
    document.documentElement.dataset.theme = saved;
    const frame = window.requestAnimationFrame(() => setTheme(saved));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const close = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  const chooseTheme = async (next, event) => {
    const apply = () => {
      flushSync(() => setTheme(next));
      document.documentElement.dataset.theme = next;
      localStorage.setItem("portfolio-theme", next);
    };

    if (!document.startViewTransition) {
      apply();
      setOpen(false);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect?.();
    const x = rect?.left ?? event.clientX;
    const y = rect?.top ?? event.clientY;
    const transition = document.startViewTransition(apply);
    await transition.ready;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 420,
        easing: "cubic-bezier(.22,1,.36,1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
    setOpen(false);
  };

  const Icon = themes.find((item) => item.id === theme)?.icon || Palette;

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Choose a color theme"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-foreground shadow-sm transition hover:-rotate-6 hover:border-primary/60"
      >
        <Icon size={17} strokeWidth={1.8} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-52 rounded-[1.25rem] border border-border bg-surface p-2 editorial-shadow">
          <p className="px-3 pb-2 pt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Mood
          </p>
          {themes.map((item) => {
            const ItemIcon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={(event) => chooseTheme(item.id, event)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-secondary transition hover:bg-surface-hover hover:text-foreground"
              >
                <ItemIcon size={15} />
                <span className="flex-1 text-left">{item.name}</span>
                {theme === item.id && (
                  <Check size={14} className="text-primary" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
