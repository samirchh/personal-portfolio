# Personal Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Dark, terminal-inspired
theme built around a monospace type treatment for headings and a teal accent.

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
    About.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
    Section.tsx      # shared section header/wrapper
  data/
    content.ts        # ALL editable content lives here
```

## Customizing

Everything you're likely to change — name, tagline, skills, project list,
email, social links — lives in `src/data/content.ts`. You shouldn't need to
touch the component files just to update content.

To swap the resume: drop your PDF into `public/resume.pdf` (the link in
`content.ts` already points there).

## Design notes

- Fonts: JetBrains Mono (headings/labels) + Inter (body) — loaded via
  `next/font/google`, self-hosted at build time (no runtime request to
  Google Fonts, no layout shift).
- Colors are Tailwind tokens defined in `tailwind.config.ts` — change them
  once there and they propagate everywhere (`bg`, `surface`, `border`,
  `text`, `muted`, `accent`).
- Respects `prefers-reduced-motion` and has visible keyboard focus rings.

## Deploying

Easiest path is [Vercel](https://vercel.com): push to GitHub, import the
repo, done. Works equally well on Netlify or any Node host — it's a
standard `next build && next start`.
