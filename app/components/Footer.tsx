"use client";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-secondary">
        {/* Left: Identity */}
        <p>© {new Date().getFullYear()} Mahi Teja</p>

        {/* Center: Navigation */}
        <div className="flex gap-6">
          <a href="#about" className="hover:text-foreground transition">
            About
          </a>
          <a href="#projects" className="hover:text-foreground transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-foreground transition">
            Contact
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Mahi-teja"
            target="_blank"
            className="hover:text-foreground transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mahiteja"
            target="_blank"
            className="hover:text-foreground transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
