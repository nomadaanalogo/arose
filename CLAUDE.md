# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `pnpm` (not `npm`) as the package manager.

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## Architecture

**What this is:** Next.js 15 marketing/lead-generation website for a Florida-based general contractor (Arose Contractor). No backend — form submissions go to a Google Apps Script endpoint via `fetch`.

**Framework:** Next.js App Router with TypeScript, Tailwind CSS v4, Radix UI + shadcn-style components.

**Key directories:**
- [app/](app/) — App Router pages (`page.tsx` = home, `thanks/page.tsx` = post-form submission)
- [components/](components/) — Section-level page components (hero, contact, services, testimonials, etc.)
- [components/ui/](components/ui/) — Reusable Radix UI primitives (Button, Input, Select, Dialog, etc.)
- [hooks/](hooks/) — `use-mobile.ts`, `use-toast.ts`
- [lib/utils.ts](lib/utils.ts) — `cn()` helper (clsx + tailwind-merge)

**Styling:** Tailwind-first with CSS custom properties (HSL theme variables in `globals.css`). Dark mode via `class` strategy. Component variants use `class-variance-authority`.

**Forms:** [components/contact-section.tsx](components/contact-section.tsx) uses React Hook Form + Zod. Submits to Google Apps Script via `FormData` POST — the endpoint URL is hardcoded there.

**SEO/Analytics:** The root [app/layout.tsx](app/layout.tsx) includes Google Tag Manager, Google Ads conversion tracking, JSON-LD structured data, and full Open Graph/Twitter card metadata. The site targets South Florida service areas (Sunrise, Fort Lauderdale, Boca Raton, West Palm Beach).

**Build config:** `next.config.mjs` ignores ESLint and TypeScript errors during `build` — don't rely on the build succeeding as a correctness check.
