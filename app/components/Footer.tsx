"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Neeli Mahi Teja</p>
        <nav className="flex flex-wrap gap-5" aria-label="Footer navigation">
          <a href="#experience" className="transition hover:text-foreground">
            Experience
          </a>
          <a href="#projects" className="transition hover:text-foreground">
            Work
          </a>
          <a href="#about" className="transition hover:text-foreground">
            About
          </a>
          <a
            href="https://github.com/Mahi-teja"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mahiteja"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
