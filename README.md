# Aniket Pandey — Cloud & DevOps Portfolio

A next-generation DevOps engineer portfolio built with **Next.js 14**, **Three.js / React Three Fiber**, **Framer Motion**, and **GSAP**. Visitors explore a live cloud infrastructure simulation rather than a typical scrolling website.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| 3D Graphics | Three.js + React Three Fiber + Drei |
| Animations | Framer Motion + GSAP |
| Language | TypeScript |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router (layout + page)
├── sections/             # Full-page sections (Hero, About, Skills…)
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── components/
│   ├── three/            # Three.js / R3F components
│   │   ├── Scene.tsx         # Canvas wrapper
│   │   ├── ParticleField.tsx # Animated particle network
│   │   └── FloatingNodes.tsx # Orbiting tech labels
│   ├── layout/
│   │   └── Navbar.tsx
│   └── ui/
│       └── CustomCursor.tsx
├── animations/
│   ├── gsap.ts           # GSAP helpers & timelines
│   └── variants.ts       # Framer Motion variants
├── hooks/
│   └── index.ts          # useMousePosition, useInView, useTypewriter…
├── utils/
│   ├── data.ts           # All portfolio content (edit this!)
│   └── helpers.ts        # Pure utility functions
└── styles/
    └── globals.css
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## Customization

All content lives in **`src/utils/data.ts`**. Edit:

- `OWNER` — name, bio, tagline, contact links
- `SKILLS` — technologies, proficiency levels, descriptions
- `PROJECTS` — project details, stack, pipeline flow, GitHub links
- `VALUES` — engineering philosophy cards
- `PIPELINE_STEPS` — CI/CD pipeline visualization

---

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com for automatic deployments
```

The `vercel.json` file is pre-configured with security headers and the `bom1` (Mumbai) region.

---

## Performance Notes

- Three.js canvas uses `AdaptiveDpr` — automatically reduces resolution on lower-end devices
- `dynamic(() => import(...), { ssr: false })` used for all Three.js components to prevent SSR issues
- Particle count capped at 250 for smooth 60fps on most devices
- All section animations use `IntersectionObserver` to trigger only when visible

---

## License

MIT — free to use and adapt for your own portfolio.
