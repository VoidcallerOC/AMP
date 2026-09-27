# Adaptive Movement Parkour — AMP

A Forge-built static demo for **Adaptive Movement Parkour** in Manchester, Connecticut.

## Source of truth

- AMP content, programs, contact details, and positioning: [amparkour.com](https://amparkour.com/)
- Design and engineering reference: `VoidcallerOC/client-site-starter`
- Implementation target: `VoidcallerOC/AMP`

## Architecture

This is a lightweight, zero-build HTML/CSS/JS site. It intentionally does not introduce a framework, package manager, backend, database, or CMS.

- `index.html` — accessible page structure and static section headings
- `assets/js/config.js` — verified AMP content and program data
- `assets/js/main.js` — small config-driven renderer and interactions
- `assets/css/styles.css` — Forge-inspired design tokens and responsive styles
- `assets/img/` — real AMP imagery collected from official-site image results
- `vercel.json` — explicit framework-free, no-build Vercel deployment

## Local preview

```bash
python3 -m http.server 8000
```

## Content policy

Do not invent current schedules, prices, awards, policies, or program details. Registration and schedule links point visitors to AMP’s current public site because availability changes by program.
