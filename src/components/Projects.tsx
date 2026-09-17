import Section from "./Section";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <Section id="projects" title="projects">
      <div className="divide-y divide-border">
        {projects.map((project) => (
          <article key={project.title} className="py-6 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-medium text-text">
                {project.title}
              </h3>
              {project.status && (
                <span className="font-mono text-xs text-muted">
                  {project.status}
                </span>
              )}
            </div>
            <p className="mt-2 max-w-[65ch] leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-accent/80"
                >
                  {tech}
                </span>
              ))}
              {project.link && (
                <a
                  href={project.link.href}
                  className="ml-2 font-mono text-xs text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {project.link.label}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
