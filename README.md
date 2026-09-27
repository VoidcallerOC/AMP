# Forge-CT Trade Master

A reusable **zero-build** master template for Connecticut home-service
contractors — one `index.html`, no framework, no compile step, no
dependencies. Built around one job: turn local search traffic into
estimate requests and phone calls.

**Conversion flow:** SEARCH → TRUST → SERVICE → PROOF → ESTIMATE / CALL
**Primary CTA:** Request a Free Estimate · **Secondary CTA:** Call Now

The default content is a **demo HVAC skin** — "Charter Oak Heating &
Cooling," a fictional Greater Hartford business with clearly-marked
placeholder data (a reserved `555-01xx` phone number, a `.example`
email). It demonstrates the pattern; it is not a real business. While
`BUSINESS.demo` is `true` a banner and per-item tags flag all sample
content so it can never be mistaken for a real client's claims.

Repo: https://github.com/VoidcallerOC/client-site-starter

## Built for these trades

HVAC · plumbing · electrical · roofing · landscaping · concrete/masonry ·
painting · remodeling · junk removal · tree service — and any other local
home-service contractor. **HVAC is the first finished skin; nothing in the
architecture is HVAC-specific.**

## Architecture

- `index.html` — markup + static headings, organized into commented
  sections (Header, Hero, Trust, Services, Why Us, Service Area, Projects,
  Testimonials, Hours & Contact, Estimate form, Final CTA, Footer). Section
  headings live here; repeating item lists render from config.
- `assets/js/config.js` — **the source of truth.** Business identity,
  contact, CTAs, trust items, services, why-us points, service area,
  projects, testimonials, form options and hours. This is the file you edit.
- `assets/js/main.js` — reads the config and renders it into the page
  (contact sync, CTAs, all list sections, hours, mobile nav, estimate form).
  Rarely needs edits.
- `assets/css/styles.css` — one stylesheet, design tokens at the top.
- `assets/img/` — `brand/ hero/ projects/ content/ social/` (see
  `assets/img/README.md`).
- `vercel.json` — clean URLs, long-lived asset cache, baseline security headers.
- `robots.txt`, `sitemap.xml` — placeholder domain; update before launch.

No build step: what's in the repo is what ships. Preview locally with:

```bash
python3 -m http.server 8000
```

(paths are absolute `/assets/...`, so serve from the repo root)

## New contractor client — edit config, replace copy/images, deploy

1. **`assets/js/config.js`** — the whole job. Set `BUSINESS` (name, phone,
   `phoneHref`, email, address, `mapsQuery`, service-area line, social),
   then `CTA`, `HERO`, `TRUST_ITEMS`, `SERVICES` (3–6), `WHY_US`,
   `SERVICE_AREA`, `PROJECTS`, `TESTIMONIALS`, `FORM` and `HOURS`.
2. **Set `BUSINESS.demo = false`** once every value is the client's real,
   verified information. This removes the demo banner and the "Demo review"
   / "Sample project" tags — so only do it when the content is truly real.
3. **`assets/css/styles.css`** — edit the `:root` tokens (`--color-primary`,
   `--color-accent`, `--color-highlight`, backgrounds); swap
   `--font-display`/`--font-body` + the Google Fonts `<link>` in `<head>`
   if the brand calls for it.
4. **SEO** — update `<title>`, meta description, canonical, Open Graph /
   Twitter tags in `<head>`; update `robots.txt` and `sitemap.xml` with the
   real domain. Section `<h1>`/`<h2>` copy is static in `index.html`.
5. **Images** — drop real logo/photos in `assets/img/` (see its README),
   swap the favicon, add `/assets/img/social/og-image.jpg` (1200×630) and
   uncomment the `og:image` tag. Add real project photos and set each
   project's `image:` path + `placeholder: false` in config.
6. Import into Vercel (static, no framework, no build command).

## Anti-fabrication rules (non-negotiable)

- Never enter a claim the client hasn't confirmed — years in business,
  ratings, licenses, insurance, certifications, awards, warranties,
  response times, customer counts. If you can't verify it, leave it out.
- Never present sample testimonials as real. Replace them with genuine,
  permissioned reviews, or remove the section.
- Never mark a project `placeholder: false` (or set `demo: false`) until
  the content is real.
- The trust strip and hero badges show **only** what's configured — so an
  empty/removed item simply doesn't render.

## The estimate form

Front-end only, matching the zero-build architecture: submitting opens the
visitor's email client pre-filled to `BUSINESS.email`. Nothing is stored
and there is no backend. The form UI states this. Wire up a real form
backend later if a client needs one — that's out of scope for the master.

## Design principles

No generic-template tells: no soft rounded cards, no drop-shadow-everywhere,
no stock photography, no emoji-as-icons, no meaningless animation. Corners
are sharp or fully round (pills/circles). Motion is interaction-only. The
premium feel comes from type, color and spacing — see the comment at the top
of `styles.css` before adding a mid-size border-radius.

## Adding trade landing pages (optional)

The architecture supports additional static pages (e.g. `/ac-repair`,
`/heating`) by copying `index.html`, but **do not mass-generate thin SEO
pages.** Add a page only when it has genuinely distinct, useful content.
