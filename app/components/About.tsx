"use client";

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Redux",
    "Recoil",
    "Docker",
    "Git",
  ];

  return (
    <section
      id="about"
      className="border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-primary">
            About
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
            Good systems feel simple—because the hard decisions are handled with
            care.
          </h2>
        </div>
        <div className="md:pt-12">
          <p className="mb-8 text-lg leading-8 text-secondary">
            I’m a full-stack engineer focused on data-intensive interfaces,
            reusable architecture, and reliable APIs. I enjoy turning complex
            workflows into focused, performant experiences.
          </p>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Core stack
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-surface px-3.5 py-2 text-sm text-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
