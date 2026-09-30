import Section from "./Section";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="border-t border-hairline pt-4">
            <dt className="text-sm font-medium text-graphite">
              {group.category}
            </dt>
            <dd className="mt-1 text-[17px] leading-relaxed text-ink">
              {group.items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
