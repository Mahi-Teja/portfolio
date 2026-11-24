"use client";

const experiences = [
  {
    role: "Packaged App Development Associate",
    company: "Accenture",
    duration: "Jan, 2025 — Present",
    points: [
      "Built a full-stack expense tracking system with real-time analytics",
      "Developed a live scoring app with optimized state management",
      "Focused on scalable architecture and performance-driven design",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border px-6 py-24 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
            Experience
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
            Where I contribute.
          </h2>
        </div>

        <article className="border-t border-border pt-6">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <h3 className="text-xl font-semibold">{experiences[0].role}</h3>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {experiences[0].duration}
            </p>
          </div>
          <p className="mt-2 text-primary">
            {experiences[0].company} · Hyderabad
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-secondary">
            Building enterprise frontend experiences with React and TypeScript,
            with a growing focus on full-stack architecture, API integration,
            and performance.
          </p>
        </article>
      </div>
    </section>
  );
}
