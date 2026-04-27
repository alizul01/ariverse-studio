# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build (static export to /dist, or server build if KEYSTATIC_GITHUB_CLIENT_ID is set)
npm run start    # Start production server (server mode only)
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Ariverse Studio** is a game studio portfolio website — a Next.js App Router app that runs in either static export mode or server mode depending on the environment.

### Dual-Mode Build

`next.config.ts` switches behavior based on `KEYSTATIC_GITHUB_CLIENT_ID`:

- **Without it** (default): `output: 'export'`, builds static HTML to `/dist`. The `prebuild` script temporarily moves `/app/api` to `.api-backup/` (Next.js would error on API routes in static export), then `postbuild` restores it. All pages must be statically renderable at build time.
- **With it** (server deployment): normal Next.js server build; API routes and SSR are available.

Images are always unoptimized (`images: { unoptimized: true }`) for static export compatibility.

### Routing

All public pages live under `app/(site)/` route group, wrapped with Navbar/Footer via `app/(site)/layout.tsx`. Dynamic routes (`[slug]`) for blog, games, and services generate static params at build time. The `/keystatic` and `/api/keystatic/[...params]` routes serve the CMS admin UI — only available in server mode.

### Content Management (Keystatic)

Content is managed via **Keystatic** (Git-backed headless CMS). Collections defined in `keystatic.config.ts`:

- **Games** — `src/content/games/` (JSON + document)
- **Posts** — `src/content/posts/` (Markdown)
- **Services** — `src/content/services/` (JSON + document)
- **Careers** — `src/content/careers/` (JSON)
- **Press** — `src/content/press/` (JSON)
- **Crew** — `src/content/crew/` (JSON)

Storage: filesystem locally; commits directly to GitHub repo (`alizul01/ariverse-studio`) in production with OAuth.

The `lib/keystatic.ts` `reader` object is the only way to fetch content — use it in Server Components only (build-time), never in Client Components.

### Static Data

Legacy content not yet in Keystatic lives in `app/data/` as TypeScript files: `games.ts`, `posts.ts`, `services.ts`, `presskit.ts`, `technologies.ts`.

### Styling

Tailwind CSS v4 via PostCSS (`@tailwindcss/postcss`). Theme in `app/globals.css` using CSS variables:
- Background: `#250804` (dark brown) — Accent: `#96191A` (red) — Foreground: `#FCEBD7` (cream)
- Font: Plus Jakarta Sans (loaded via `next/font` in `app/(site)/layout.tsx`)

### Animations

Framer Motion for scroll-triggered and entrance animations. Reusable wrappers in `app/components/animations/` (`FadeIn`, `StaggerContainer`). All animation components are `"use client"`.

### Path Aliases

`@/*` maps to the project root (e.g., `@/lib/keystatic`, `@/app/components/ui/CTA`).

### Environment

`.env` contains legacy Sanity CMS variables (`NEXT_PUBLIC_SANITY_*`) — unused. Keystatic uses `KEYSTATIC_GITHUB_CLIENT_ID` / `KEYSTATIC_GITHUB_CLIENT_SECRET` for production OAuth and `NODE_ENV` for local vs. GitHub storage mode.
