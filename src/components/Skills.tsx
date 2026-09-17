import Section from "./Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="skills">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2 font-mono text-xs text-muted">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border px-2.5 py-1 text-sm text-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
