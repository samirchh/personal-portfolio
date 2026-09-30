import Section from "./Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="divide-y divide-hairline">
        {experience.map((job) => (
          <article
            key={job.role + job.when}
            className="grid gap-x-8 gap-y-3 py-8 first:pt-0 md:grid-cols-12"
          >
            <div className="md:col-span-5">
              <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                {job.role}
              </h3>
              <p className="mt-1 text-[15px] text-ink">{job.company}</p>
              <p className="text-[15px] text-graphite">
                {job.place}, {job.when}
              </p>
            </div>
            <ul className="space-y-2 md:col-span-7">
              {job.points.map((pt) => (
                <li
                  key={pt}
                  className="max-w-[56ch] text-[17px] leading-relaxed text-graphite"
                >
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
