import { profile } from "@/data/content";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink text-canvas">
      <div className="mx-auto max-w-board px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="max-w-[12ch] font-display text-[clamp(2.6rem,6.5vw,5.5rem)] font-bold leading-[0.98] tracking-tight">
              Get in touch with me
            </h2>
            <p className="mt-6 max-w-[40ch] text-lg text-canvas/70">
              Have a project, a role, or a bug to look at? Send a message and
             I&apos;ll reply.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-block break-all font-display text-xl font-semibold underline decoration-redline decoration-[3px] underline-offset-[8px] transition-colors hover:text-redline md:text-2xl"
            >
              {profile.email}
            </a>
          </div>

          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-canvas/20 pt-6 text-[15px] text-canvas/70">
          <div className="flex gap-6">
            <a
              href={profile.social.github}
              className="transition-colors hover:text-canvas"
            >
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              className="transition-colors hover:text-canvas"
            >
              LinkedIn
            </a>
          </div>
          <p>
            {profile.location}, {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
