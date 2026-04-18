"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeSwitch";
import { use, useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "home" },
  { name: "Projects", href: "projects" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 dark:border-white/10 bg-background/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter">
          NMT<span className="text-primary text-2xl">.</span>
        </Link>

        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-2 text-sm font-small md:font-medium text-muted-foreground">
            {navItems.map((item) => (
              <li
                className=" "
                onClick={() => setActive(item.href)}
                key={item.name}
              >
                <Link
                  href={`#${item.href}`}
                  className={`px-4 py-2 rounded-xl   duration-100
                     ${active == item.href ? " " : ""}
                `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-black/10 dark:border-white/10 pl-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-sm px-4 py-2 border rounded-full font-medium border-primary/20 text-primary hover:bg-primary/5 transition-colors"
            >
              Resume
            </a>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
