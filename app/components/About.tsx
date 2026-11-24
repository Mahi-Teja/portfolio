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
      className="px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            A little context
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.02] italic tracking-[-0.04em] md:text-7xl">
            I make the useful kind of software.
          </h2>
        </div>
        <div className="lg:pt-10">
          <p className="text-xl leading-8 text-secondary">
            I’m a full-stack engineer interested in fast interfaces, clear data,
            and systems that stay understandable as they grow.
          </p>
          <div className="mt-8 border-t border-border pt-6">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Tools I reach for
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`rounded-full border border-border px-3 py-2 text-xs ${
                    index % 4 === 0
                      ? "-rotate-1 bg-primary text-primary-foreground"
                      : "bg-surface text-secondary"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
