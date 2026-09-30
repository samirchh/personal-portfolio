# Personal Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS. A light, "design review
board" look: cool grey-blue canvas, navy ink, and a single red annotation
accent, built around the idea of *Build it. Test it. Fix it.*

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
  app/
    layout.tsx      # fonts, metadata, global shell
    page.tsx         # assembles all sections
    globals.css      # base styles, focus states, reduced-motion
  components/
    Nav.tsx
    Hero.tsx
    BugReport.tsx    # a real Vyam bug written as a QA report
    Experience.tsx
    ContactForm.tsx  # posts to /api/contact
    About.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
    Section.tsx      # shared section header/wrapper
  data/
    content.ts        # ALL editable content lives here
```

## Contact form (needs setup once)

The form posts to `src/app/api/contact/route.ts`, which emails
sameerchhetri2060@gmail.com through Gmail using nodemailer.

1. Turn on 2-Step Verification on the Google account.
2. Create an App Password (Google Account > Security > App passwords).
3. Copy `.env.example` to `.env.local` and paste the password into
   `GMAIL_APP_PASSWORD`. On Vercel, add both variables under
   Settings > Environment Variables and redeploy.

## Customizing

Everything you're likely to change — name, tagline, skills, project list,
email, social links — lives in `src/data/content.ts`. You shouldn't need to
touch the component files just to update content.

To swap the resume: drop your PDF into `public/resume.pdf` (the link in
`content.ts` already points there).

## Design notes

- Fonts: Bricolage Grotesque (display) + Instrument Sans (body) + DM Mono
  (test IDs only), loaded via `next/font/google` and self-hosted at build time.
  Bricolage is a variable font; the hero animates its `wdth` and `wght` axes.
  **The first `next build` needs internet access** to download the fonts.
- Colors are Tailwind tokens in `tailwind.config.ts`: `canvas`, `frame`, `ink`,
  `graphite`, `hairline`, `redline` (accent, used for marks only) and `pass`
  (QA status only). Change them once there and they propagate everywhere.
- The only load animation is the hero headline (`set-type` and `draw-redline`
  in `globals.css`). Everything else is still until you interact with it.
- Skills are grouped under Design / Build / Break in `content.ts`.
- Respects `prefers-reduced-motion` (final state shows immediately) and has
  visible keyboard focus on every interactive element.

## Deploying

Easiest path is [Vercel](https://vercel.com): push to GitHub, import the
repo, done. Works equally well on Netlify or any Node host — it's a
standard `next build && next start`.
