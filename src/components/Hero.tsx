import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-content flex-col justify-center px-6 py-28 md:py-36"
    >
      <p className="mb-4 font-mono text-sm text-accent">
        <span className="text-muted">$</span> whoami
      </p>
      <h1 className="text-4xl font-medium leading-tight text-text md:text-5xl">
        {profile.name}
        <span className="cursor-blink text-accent">_</span>
      </h1>
      <p className="mt-3 font-mono text-base text-muted">{profile.role}</p>
      <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={profile.resumeUrl}
          className="rounded-sm border border-border px-4 py-2 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent"
        >
          view resume
        </a>
        <a
          href="#contact"
          className="rounded-sm border border-transparent bg-accent px-4 py-2 font-mono text-sm text-bg transition-opacity hover:opacity-90"
        >
          get in touch
        </a>
      </div>
    </section>
  );
}
