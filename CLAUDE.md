# Portfolio — Jordan Hilario

## Project Overview
Personal portfolio + resume website for Jordan Hilario, a Fullstack UI/UX Designer. Static site showcasing project case studies and experience.

## Tech Stack
- **Astro** (static site generator)
- **Tailwind CSS v4** (CSS-based config via `@theme` in `src/styles/global.css`)
- **Vercel** (hosting)
- No animation libraries — CSS transitions + IntersectionObserver only

## Architecture
- `src/pages/index.astro` — Home (hero + project grid + contact CTA)
- `src/pages/projects/[...slug].astro` — Project detail (dynamic routes from content collection)
- `src/pages/resume.astro` — Resume (experience, skills, education)
- `src/content/projects/*.md` — Project case studies (markdown + frontmatter)
- `src/content.config.ts` — Content collection schema
- `src/layouts/BaseLayout.astro` — Shared layout wrapper
- `src/components/` — All UI components

## Key Patterns
- **Content collection** with `glob` loader for projects
- **Tailwind v4** — theme configured in `src/styles/global.css` via `@theme`, no `tailwind.config.mjs`
- **Scroll reveal** — `.reveal` class + IntersectionObserver in `BaseLayout.astro`
- **Block headings** — `BlockHeading.astro` renders dark rect with white text for section labels
- **Project grid** — 12-column CSS grid, `gridSize` frontmatter controls column spans (large=7, medium=5, small=4)
- **Sharp buttons** — no border-radius, solid fills
- **Dot grid background** — `bg-dot-grid` / `bg-dot-grid-dark` utility classes

## Visual Style
- Monochromatic (black/white) + orange-red accent (#F04E23)
- Dot grid backgrounds on hero sections
- Bold typography: Space Grotesk (headings), Inter (body)
- Sharp zero-radius buttons and UI elements

## Project Detail Pages
- Support `video` field in frontmatter — renders video player in "Prototype" section instead of "Other Projects"
- HTML in markdown is supported for custom layouts (full-width galleries, colored cards, etc.)
- Filenames with spaces need URL-encoding in markdown image paths
- Images in `public/projects/<ProjectFolder>/`

## Commands
- `npm run dev` — dev server on port 4321
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Content
- Project images go in `public/projects/<ProjectName>/`
- Add new projects by creating `src/content/projects/<slug>.md` with required frontmatter fields
- Resume data is hardcoded in `src/pages/resume.astro`
