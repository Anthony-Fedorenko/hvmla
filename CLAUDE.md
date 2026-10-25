# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing/informational website for Holy Virgin Mary Russian Orthodox Cathedral (Los Angeles), replacing a legacy WordPress site. It is a bilingual (English/Russian) static single-page app covering parish info (history, clergy, ministries), service schedules, live-stream links, news/announcements, educational materials, and donation/contact pages. It also serves legacy QR-code links from a printed centennial guidebook that point at specific icon/mural detail pages.

Currently all content (service schedule, news, announcements, icon descriptions) is hardcoded in TypeScript data files under `src/data/`. A git-based CMS (Decap CMS) migration is planned but not yet implemented — see `CMS_HOSTING_PLAN.md` (Russian-language internal planning doc) for the target architecture (SiteGround production hosting via a `production-deploy` branch built by GitHub Actions, Vercel as staging, Decap CMS backed by GitHub).

## Tech Stack

- **React 18** + **TypeScript 5** (strict mode)
- **Vite 5** — dev server and build, with `@vitejs/plugin-react` and `vite-plugin-image-optimizer` (optimizes/strips-preserves metadata on jpg/png/webp at build time)
- **react-router-dom 6** — `createBrowserRouter`, all routes nested under a single `Layout` element
- **i18next** / **react-i18next** / **i18next-browser-languagedetector** — English/Russian translations, language persisted to `localStorage`
- **CSS Modules** (`*.module.css`) for component styling, plus a global stylesheet (`src/styles/global.css`) for tokens and shared utility classes
- **ESLint** (`typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) with `--max-warnings 0`
- **sharp** — used by the image optimizer plugin

## Project Structure

- `src/main.tsx` — app entry, mounts `App`
- `src/App.tsx` — renders `RouterProvider`
- `src/router/index.tsx` — single source of truth for all routes; large/rarely-needed routes (`about/icons`, the legacy `:legacyId` icon-detail catch-all) are lazy-loaded via `React.lazy` + `Suspense`
- `src/layout/` — `Layout.tsx` (Navbar + `<Outlet>` + Footer, scrolls to top on route change), `Navbar.tsx`, `Footer.tsx`
- `src/pages/` — one directory per site section (`about/`, `ministries/`, `services/`, `sundayschool/`, `education/`, `news/`, `support/`, `cafe/`, `contact/`), each containing page-level components matched 1:1 to routes in `router/index.tsx`
- `src/components/` — shared, reusable, non-page components (e.g. `Hero`, `AnnouncementsPreview`, `UpcomingServices`, `DonationCTA`, `YouTubeEmbed`, `MapEmbed`, `SocialLinks`), each with a sibling `*.module.css`
- `src/data/` — hardcoded content acting as a stand-in database: `services.ts` (service calendar), `announcements.ts`, `news.ts`, `icons.ts` (icon/mural catalog with full hagiographic descriptions, keyed by QR-code slug)
- `src/i18n/` — i18next setup (`index.ts`) and `locales/en.json` / `locales/ru.json` translation dictionaries (nested by section, e.g. `nav.*`, `home.*`)
- `src/styles/global.css` — CSS custom properties (colors, fonts, spacing, shadows) and shared utility classes (`.container`, `.section`, `.btn`, `.card`, `.grid-2`/`.grid-3`, `.page-hero`)
- `public/` — static assets: parish photos, gallery images (thumbnails follow a `<event>_<n>_thumb.jpg` naming pattern), PDFs (bulletins/calendars), logo/favicon
- `.claude/agents/` — project-specific Claude Code subagents (see below)
- `CMS_HOSTING_PLAN.md` — internal (Russian-language) plan for CMS/hosting/content-automation migration; not user-facing docs

## Development Guidelines

- **Routing**: add new pages by creating a component under the matching `src/pages/<section>/` directory and registering it as a child route in `src/router/index.tsx`; group imports by site section with a comment header, matching the existing style. Only lazy-load routes that are large or rarely visited (follow the precedent set for the icons/legacy routes).
- **Styling**: use CSS Modules scoped to the component (`ComponentName.module.css`), with BEM-style class names inside the module (e.g. `.hero__title`, `.navbar__dropdown-link`, modifier classes like `.navbar__link--active`). Reach for CSS custom properties from `global.css` (`--color-*`, `--space-*`, `--font-*`) instead of hardcoding values. Use the shared utility classes (`.container`, `.section`, `.btn--primary`/`.btn--outline`, `.card`, `.grid-2`/`.grid-3`) for common layout patterns rather than re-implementing them.
- **i18n**: all user-facing copy goes through `useTranslation()` / `t("section.key")`, with matching keys added to both `src/i18n/locales/en.json` and `src/i18n/locales/ru.json`, nested by section (`nav`, `home`, etc). Content data files (`src/data/*.ts`) instead store parallel `*En`/`*Ru` fields per entry (e.g. `titleEn`/`titleRu`, `dayOfWeekEn`/`dayOfWeekRu`) rather than using the i18n dictionaries.
- **English-only build mode**: the app supports a `VITE_DISABLE_RUSSIAN` env flag (checked in `src/i18n/index.ts` and `src/layout/Navbar.tsx`) that disables the language detector, forces `en`, and hides the language switcher UI. Any new i18n- or language-switcher-related code should respect this flag.
- **Content data**: static content (schedule, news, announcements, icon catalog) lives in typed arrays in `src/data/*.ts`. Follow the existing `interface` + exported const array pattern when adding entries, and keep IDs/slugs consistent with how they're used for routing (e.g. `icons.ts` `path` matches the legacy QR-code URL segment).
- **TypeScript**: strict mode is on, including `noUnusedLocals`/`noUnusedParameters`/`noFallthroughCasesInSwitch` — keep code free of unused symbols.

## Commands

```bash
npm install              # install dependencies

npm run dev               # start Vite dev server

npm run build              # tsc typecheck + vite build (outputs to dist/)
VITE_DISABLE_RUSSIAN=true npm run build   # English-only production build (used for the SiteGround deploy)

npm run preview            # preview the production build locally

npm run lint                # eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0
```

There is no test suite configured in this project (no test script in `package.json`, no test files present).

### Project subagents (`.claude/agents/`)

- **`build`**: runs `VITE_DISABLE_RUSSIAN=true npm run build`, then zips `dist/` directly to `~/Desktop/hvmla_prod.zip` for SiteGround deployment. Do not copy `dist/` elsewhere first — zip from inside `dist/` to avoid nested folders.
- **`commit-push`**: stages, commits (message format `feat: ...` / `fix: ...` / `chore: ...`, English only, no `Co-Authored-By` line), and pushes to `main`.

## Key Features

- Bilingual (EN/RU) navigation, hero, and content across the whole site, with a persisted language switcher and an EN-only build mode for production
- Full site information architecture: About (history, clergy, bylaws, gallery, icon/mural catalog), Ministries, Services (schedule, live streams, stream archive), Sunday School, Education (books, bulletins), News/Announcements, Support (donations via PayPal, volunteering), Cafe/Museum/Library, Contact (info, map, social, form)
- Legacy QR-code support: routes like `/003-seraphim` (unmatched top-level paths) resolve via a catch-all `:legacyId` route to `IconDetail`, preserving links printed in the physical centennial guidebook
- Custom 404 page (`NotFound.tsx`)
- Build-time image optimization with EXIF metadata preserved and orientation auto-rotated (`vite-plugin-image-optimizer`, `withMetadata: true`)

## Known Constraints

- **No CMS yet**: all editable content (schedule, news, announcements, bulletins, stream video IDs) is hardcoded directly in TypeScript/TSX source files, so any content update requires a code change, commit, and rebuild — there is no way for non-developers to publish updates today. This is the primary problem `CMS_HOSTING_PLAN.md` is planning to solve.
- **Hardcoded stream video IDs**: YouTube live-stream and archive video IDs are hardcoded in `LiveStreams.tsx` / `StreamArchive.tsx` rather than pulled from an API.
- **No automated tests**: there is no test runner or test files in the repo; rely on `npm run build` (typecheck) and `npm run lint` to catch regressions, and manual verification in the browser for UI changes.
- **Commit conventions**: per the `commit-push` subagent, commits must be English-only, use `feat:`/`fix:`/`chore:` prefixes, and must not include Claude co-authorship trailers.
