import Section from "./Section";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about" title="about">
      <div className="space-y-4">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="max-w-[68ch] leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
