"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeSwitch";

const navItems = [
  { name: "Experience", href: "experience" },
  { name: "Work", href: "projects" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
      aria-label="Primary navigation"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all md:px-12 ${
          scrolled
            ? "rounded-full border border-border/80 bg-background/85 py-2.5 pr-2.5 pl-5 shadow-[0_12px_40px_rgba(0,0,0,.08)] backdrop-blur-xl"
            : ""
        }`}
      >
        <Link
          href="#home"
          className="text-sm font-bold tracking-[0.16em]"
          aria-label="Go to homepage"
        >
          MAHI<span className="text-primary">.</span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={`#${item.href}`}
                  className="rounded-full px-3.5 py-2 text-sm text-secondary transition hover:bg-surface-hover hover:text-foreground"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="hidden rounded-full bg-foreground px-4 py-2.5 text-xs font-semibold text-background sm:inline-flex"
          >
            Résumé
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
