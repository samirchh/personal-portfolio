"use client";

import { useState } from "react";
import Section from "./Section";
import { projects } from "@/data/content";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const lead = hoveredProject ?? projects[0];
  const rest = projects.filter((project) => project !== lead);

  return (
    <Section id="projects" title="Projects">
      <div onMouseLeave={() => setHoveredProject(null)}>
        <article
          className="bg-frame p-7 transition-all duration-300 md:p-10"
          onMouseEnter={() => setHoveredProject(lead)}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              {lead.title}
            </h3>
            {lead.status && (
              <span className="text-[15px] text-graphite">{lead.status}</span>
            )}
          </div>
          <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink/80">
            {lead.description}
          </p>
          <p className="mt-6 border-t border-hairline pt-4 text-[15px] text-graphite">
            {lead.stack.join(", ")}
          </p>
        </article>

        <div className="mt-2 divide-y divide-hairline">
          {rest.map((project) => (
            <article
              key={project.title}
              className="grid gap-x-8 gap-y-3 py-8 transition-all duration-300 md:grid-cols-12"
              onMouseEnter={() => setHoveredProject(project)}
            >
              <div className="md:col-span-5">
                <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                  {project.title}
                </h3>
                {project.status && (
                  <p className="mt-1 text-[15px] text-graphite">
                    {project.status}
                  </p>
                )}
              </div>
              <div className="md:col-span-7">
                <p className="max-w-[56ch] text-[17px] leading-relaxed text-graphite">
                  {project.description}
                </p>
                <p className="mt-3 text-[15px] text-ink">
                  {project.stack.join(", ")}
                </p>
                {project.link && (
                  <a
                    href={project.link.href}
                    className="mt-3 inline-block text-[15px] font-medium text-ink underline decoration-redline decoration-2 underline-offset-4 hover:text-redline"
                  >
                    {project.link.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
