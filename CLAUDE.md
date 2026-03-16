# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build static export to /dist
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Ariverse Studio** is a game studio portfolio website — a statically exported Next.js app using the App Router.

### Build Output

`next.config.ts` sets `output: 'export'` and `distDir: 'dist'`. All pages must be statically renderable; no server-side runtime is available in production. Images are unoptimized (`images: { unoptimized: true }`) for static export compatibility.

### Routing

All public pages live under `app/(site)/` route group, which wraps them with Navbar/Footer via `app/(site)/layout.tsx`. Dynamic routes use `[slug]` segments for blog posts, games, and services. The `/keystatic` and `/api/keystatic/[...params]` routes serve the CMS admin UI and API.

### Content Management (Keystatic)

Content is managed via **Keystatic** — a Git-backed headless CMS. Collections are defined in `keystatic.config.ts`:

- **Games** — `src/content/games/` (JSON + document)
- **Posts** — `src/content/posts/` (Markdown documents)
- **Careers** — `src/content/careers/` (JSON)
- **Press** — `src/content/press/` (JSON)
- **Crew** — `src/content/crew/` (JSON)

In production (with GitHub OAuth), content is written to the GitHub repo (`alizul01/ariverse-studio`). Locally, content is read/written from the filesystem.

The `lib/keystatic.ts` file exports a `reader` object used throughout the app to fetch content at build time. Use this reader in page components rather than reading files directly.

### Static Data

Some content (not yet in Keystatic) lives in `app/data/` as TypeScript files: `games.ts`, `posts.ts`, `services.ts`, `presskit.ts`, `technologies.ts`.

### Styling

Tailwind CSS v4 via PostCSS (`@tailwindcss/postcss`). Custom theme defined in `app/globals.css` using CSS variables:
- Background: `#250804` (dark brown)
- Accent: `#96191A` (red)
- Foreground: `#FCEBD7` (light cream)
- Font: Plus Jakarta Sans

### Animations

Framer Motion is used for scroll-triggered and entrance animations. Reusable wrappers live in `app/components/animations/` (e.g., `FadeIn`, `Stagger`).

### Path Aliases

`@/*` maps to the project root (e.g., `@/lib/keystatic`, `@/app/components/ui/CTA`).

### Environment

`.env` contains legacy Sanity CMS variables (`NEXT_PUBLIC_SANITY_*`) — these are unused. Keystatic uses `NODE_ENV` and GitHub OAuth env vars for storage mode selection.
