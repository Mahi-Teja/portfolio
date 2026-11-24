"use client";

import { ArrowUpRight } from "lucide-react";
import projectData from "../data/projects";
import { Github } from "./Icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              Selected experiments
            </p>
            <h2 className="mt-3 font-serif text-5xl italic md:text-7xl">
              Things I’ve shipped.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-secondary">
            Useful products, live links, and code—not a wall of vague case studies.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {projectData.map((project, index) => (
            <article
              key={project.id}
              className={`group relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 transition duration-500 hover:-rotate-[0.35deg] hover:border-primary/40 md:p-8 ${
                index === 0
                  ? "lg:col-span-7 lg:min-h-[430px]"
                  : index === 1
                  ? "lg:col-span-5 lg:min-h-[430px]"
                  : "lg:col-span-12 lg:min-h-[320px]"
              }`}
            >
              <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border-[28px] border-primary/5 transition duration-500 group-hover:scale-110" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      0{index + 1} · {project.category}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] md:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {project.links.live && project.links.live !== "#" && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background transition hover:rotate-6 hover:scale-105"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                    {project.links.source && project.links.source !== "#" && (
                      <a
                        href={project.links.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} code`}
                        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface transition hover:border-primary/50"
                      >
                        <Github />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mt-20 max-w-2xl">
                  <p className="text-base leading-7 text-secondary md:text-lg">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-secondary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
