import { profile } from "@/data/content";
import SkillHighlight from "./SkillHighlight";

// Build the feature, test it, fix what the testing turns up.
const verbs = ["Build it.", "Test it.", "Fix it."];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100svh-72px)] max-w-board flex-col justify-between px-6 pb-12 pt-10 md:px-10"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <h1 className="font-display text-[clamp(4.25rem,min(13.5vw,17svh),12.5rem)] max-lg:text-[clamp(4.25rem,21vw,9rem)] font-bold leading-[0.9] text-ink lg:col-span-8">
          {verbs.map((word, i) => (
            <span key={word} className="hero-word relative block w-fit">
              {word}
              {i === 2 && (
                <span
                  aria-hidden
                  className="redline-mark absolute -bottom-1 left-0 h-[0.07em] w-full bg-redline"
                />
              )}
            </span>
          ))}
        </h1>

        {/* Sits beside the headline on wide screens, below it on narrow ones. */}
        <div className="lg:col-span-4 lg:flex lg:justify-end lg:pt-3">
          <SkillHighlight />
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {profile.name}
          </p>
          <p className="mt-1 text-lg text-graphite">{profile.role}</p>
          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-ink/80">
            {profile.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
          <a
            href="#contact"
            className="rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-canvas transition-colors hover:bg-redline"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            className="rounded-full border border-ink/25 px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink"
          >
            View resume
          </a>
        </div>
      </div>
    </section>
  );
}
