"use client";

export default function Footer() {
  return (
    <footer className="px-5 pb-8 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-border py-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-base italic text-foreground">
          Mahi Teja · built with curiosity.
        </p>
        <nav
          className="flex flex-wrap gap-x-5 gap-y-2"
          aria-label="Footer navigation"
        >
          <a href="#projects" className="hover:text-foreground">
            Projects
          </a>
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a
            href="https://github.com/Mahi-teja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mahiteja"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
