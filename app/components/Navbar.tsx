"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeSwitch";

const navItems = [
  { name: "Story", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "Say hello", href: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all md:px-8 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/90 bg-surface/90 px-3 py-2 shadow-sm backdrop-blur-xl">
        <Link
          href="#home"
          className="flex h-10 items-center gap-2 rounded-full px-3 font-serif text-xl italic"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-sm text-primary-foreground not-italic">
            M
          </span>
          <span className="hidden sm:inline">Mahi Teja</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={`#${item.href}`}
              className={`rounded-full px-4 py-2 text-sm transition ${
                index === navItems.length - 1
                  ? "ml-1 bg-foreground text-background hover:opacity-85"
                  : "text-secondary hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="mx-auto mt-2 max-w-7xl rounded-[1.5rem] border border-border bg-surface p-3 shadow-xl md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`#${item.href}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-secondary hover:bg-surface-hover hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
