# Forge-CT client demo base

A reusable **zero-build** foundation for premium local-business websites —
one `index.html`, no framework, no compile step, no dependencies. Fork it
per client, restyle it in minutes, ship it on Vercel.

The default content ("Forge & Main," a fictional Millbrook, OH business) is
placeholder copy that demonstrates the pattern — swap it out, don't ship it.

Repo: https://github.com/VoidcallerOC/client-site-starter

## Architecture

- `index.html` — all markup and copy, organized into clearly commented
  sections (Header, Hero, Trust Strip, About, Offerings, Events, Featured,
  Testimonials, Visit, Contact, Final CTA, Footer)
- `assets/css/styles.css` — one stylesheet, design tokens at the top
- `assets/js/config.js` — the business data every fork edits first
- `assets/js/main.js` — behavior (mobile nav, hours, contact form) — rarely
  needs edits
- `assets/img/` — brand/hero/products/events/content/social subfolders (see
  `assets/img/README.md`)
- `vercel.json` — clean URLs, long-lived asset cache, baseline security headers
- `robots.txt`, `sitemap.xml` — placeholder domain, update before launch

No build step: what's in the repo is what ships. Preview locally with:

```bash
python3 -m http.server 8000
```

(paths in the HTML are absolute `/assets/...`, so serve from the repo root)

## New client in about 30 minutes

1. On GitHub: **Use this template** (or clone) → new **private** repo named
   after the client.
2. **`assets/js/config.js`** — set `BUSINESS.name`, `phone`, `phoneHref`,
   `email`, `mapsQuery`, and the weekly `HOURS`. These values automatically
   sync to every phone/email/directions link in the page (look for
   `data-business="..."` attributes in `index.html` if you need to find one).
3. **`assets/css/styles.css`** — edit the `:root` design tokens at the top:
   `--color-primary`, `--color-accent`, `--color-highlight`, backgrounds,
   and (if the brand calls for it) swap `--font-display`/`--font-body` plus
   the Google Fonts `<link>` in `index.html`'s `<head>`.
4. **`index.html`** — search-replace the business name ("Forge & Main"),
   then work section by section (each is marked with an HTML comment):
   headline/lede in Hero, the three Offerings rows, Events cards (or delete
   the section if it doesn't apply — see note below), Featured cards,
   **replace the placeholder Testimonials with real reviews**, address in
   Visit/Footer, nav labels, footer links.
5. **SEO** — update `<title>`, meta description, canonical URL, and Open
   Graph/Twitter tags in `<head>`; update `robots.txt` and `sitemap.xml`
   with the real domain.
6. Drop logo/photos into `assets/img/` (see `assets/img/README.md`) and
   swap the favicon at `assets/img/brand/favicon.svg`.
7. Import the repo into Vercel (static, no framework, no build command).

### About the Events / Community section

It's built with the first wave of client demos (gaming stores, comic shops)
in mind — tournaments, new releases, community nights — but it's just a
3-card grid. Rename it ("Classes," "Specials," "Workshops") for a different
vertical, or delete the `<section id="events">` block, its footer link, and
its nav link entirely if the business doesn't run events.

## Design principles

This starter deliberately avoids generic-template tells: no soft rounded
cards, no drop-shadow-everywhere, no stock photography, no emoji-as-icons.
Corners are either sharp or fully round (pills/circles) — see the comment
at the top of `styles.css` before adding a mid-size border-radius.

## Drive system

Client briefs, proposals, invoices:

https://drive.google.com/drive/folders/1pVd0M_OjpkKASki85HYFomFXEhrjHE_P
