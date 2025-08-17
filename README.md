# Next Website Template

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black" />
  <img src="https://img.shields.io/badge/React-19-61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind-4.0-38B2AC" />
  <img src="https://img.shields.io/badge/ShadCN-UI-111827" />
  <img src="https://img.shields.io/badge/Framer%20Motion-Animations-0055FF" />
  <img src="https://img.shields.io/badge/i18n-next--intl-7A5AF8" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6" />
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000" />
</p>

> ⚡️ A production-ready Next.js starter focused on speed, theming, and clean DX.  
> Built with Tailwind v4, ShadCN UI, Framer Motion, and next-intl.

---

## ✨ Features

- [**Next.js 15 + React 19**](https://nextjs.org/docs) — App Router, server components, SSR/ISR  
- [**Tailwind CSS v4**](https://tailwindcss.com/docs) — Design tokens, modern utilities, custom palettes  
- [**ShadCN UI**](https://ui.shadcn.com/docs) — Accessible, easily themed component primitives  
- [**Framer Motion**](https://www.framer.com/motion/) — Ready-made animation variants (stagger, entrances)  
- [**Internationalization (next-intl)**](https://next-intl-docs.vercel.app/) — Locale routing & translations  
- [**Theming (next-themes)**](https://github.com/pacocoursey/next-themes) — Dark/light switch with custom palettes  
- [**SEO defaults**](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) — Metadata helpers per route  
- [**Clean structure**](https://nextjs.org/docs/app/building-your-application/routing) — Opinionated layout; componentized sections  
- [**TypeScript strict**](https://www.typescriptlang.org/docs/) — Safer code, better editor hints  

---

## 🚀 Quick Start

```bash
# 1) Install
pnpm install        # or: npm i / yarn

# 2) Run dev
pnpm dev            # http://localhost:3000

# 3) Build & start
pnpm build
pnpm start
```

> Requires Node 18+.

---

## 🌍 i18n

- Locale-aware routes using `next-intl`
- Middleware respects URL locale (no auto-guessing)
- Example pages: `/en/...` and `/es/...`

---

## 🎨 Theming

- Tailwind v4 custom palettes  
- Theme toggle via `next-themes`  

---

## 🧱 Project Structure (excerpt)

```
src/
  app/
    [locale]/
      (routes)/
      layout.tsx
      page.tsx
  components/
    ui/            # ShadCN components & wrappers
    lib/           # Variants, utils, hooks
    pages/         # Page sections (hero, features, etc.)
  lib/
    animation-variants.ts
    generate-locale-metadata.ts
  styles/
    globals.css
```

---

## 🧩 Included UI/UX Bits

- Animated hero sections (waterfall/stagger)  
- Reusable gradient backgrounds  
- Cards with image backgrounds  
- FAQ/Accordion with data-driven config  
- Feature rows with motion  
- Theme & language switchers  

---

## 🛠 Scripts

```jsonc
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "typecheck": "tsc --noEmit"
}
```

---

## 🔧 Environment

Create `.env.local` as needed (examples):

```bash
# next-intl (if using custom config)
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_SUPPORTED_LOCALES=en,es

# If you fetch from APIs:
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

---

## 📦 One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

> After importing from GitHub, Vercel will auto-build on push to `main`.

---

## 🖼 Preview

Add a screenshot or demo GIF here once deployed:  

```
![Template Preview](public/images/preview.png)
```

---

## 🗺 Roadmap

- [ ] Demo content toggles (marketing vs. dashboard shells)  
- [ ] More ready-to-ship sections (pricing, testimonials, blog)  
- [ ] CMS recipe (Sanity/Contentlayer)  
- [ ] Testing setup (Playwright + Vitest)  

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feat/your-thing`  
2. Commit with conventional messages: `feat: add pricing section`  
3. Open a PR to `development`, then merge to `main` when stable  

---

## 📄 License

MIT — use freely, ship quickly.
