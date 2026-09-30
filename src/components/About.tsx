import Section from "./Section";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-6">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "max-w-[38ch] font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-[1.75rem]"
                : "max-w-[62ch] text-[17px] leading-relaxed text-graphite"
            }
          >
            {p}
          </p>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="border-b border-hairline pb-3 font-display text-2xl font-semibold tracking-tight text-ink">
          Education
        </h3>
        <div className="divide-y divide-hairline">
          {about.education.map((e) => (
            <div key={e.title} className="py-5">
              <p className="text-[17px] font-medium text-ink">{e.title}</p>
              <p className="text-[15px] text-graphite">
                {e.place}
                {e.when ? `, ${e.when}` : ""}
              </p>
              {e.note && (
                <p className="mt-1 text-[15px] text-graphite">{e.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
