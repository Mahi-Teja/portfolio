"use client";

import { ArrowUpRight } from "lucide-react";
import projectData from "../data/projects";
import { Github } from "./Icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary">
              Selected work
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
              Built with intent.
            </h2>
          </div>
          <p className="hidden max-w-sm text-right text-sm text-secondary md:block">
            A selection of products focused on practical utility, real-time
            interaction, and maintainable architecture.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projectData.map((project, index) => (
            <article
              key={project.id}
              className={`group relative flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/35 md:p-9 ${
                index === 0 ? "md:col-span-2 md:min-h-[440px]" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    0{index + 1} / {project.category}
                  </p>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  {project.links.live && project.links.live !== "#" && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background transition group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <ArrowUpRight size={19} />
                    </a>
                  )}
                  {project.links.source && project.links.source !== "#" && (
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background transition hover:border-primary/50"
                    >
                      <Github />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-16 max-w-2xl">
                <p className="mb-7 text-base leading-7 text-secondary md:text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
