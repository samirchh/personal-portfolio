import { profile } from "@/data/content";

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-16">
        <p className="font-mono text-sm text-accent">
          <span className="text-muted">$</span> contact --send
        </p>
        <h2 className="mt-4 max-w-[30ch] text-2xl font-medium leading-snug text-text">
          Have a project, a bug to report, or just want to say hi?
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-4 inline-block font-mono text-base text-accent underline underline-offset-4 hover:opacity-80"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <div className="flex gap-5">
            <a
              href={profile.social.github}
              className="font-mono text-sm text-muted hover:text-accent"
            >
              github
            </a>
            <a
              href={profile.social.linkedin}
              className="font-mono text-sm text-muted hover:text-accent"
            >
              linkedin
            </a>
          </div>
          <p className="font-mono text-xs text-muted">
            {profile.location} · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
