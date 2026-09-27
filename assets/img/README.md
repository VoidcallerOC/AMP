# Image assets

This master ships with **no stock photography** — the hero uses a hand-built
CSS illustration and projects fall back to CSS illustrations so the site
stays fast and isn't tied to any trade. When a client has real photos, drop
them in here and reference them from `config.js`.

- `brand/` — logo, favicon, wordmark files
- `hero/` — hero photography (if replacing the CSS illustration)
- `projects/` — real project / before-after photos. Set a project's
  `image:` path in `config.js` (e.g. `image: "/assets/img/projects/ac-install.jpg"`)
  and flip `placeholder: false` once the job is real.
- `content/` — any other featured content or announcement images
- `social/` — Open Graph / social share image (`og-image.jpg`, 1200×630)

Keep filenames lowercase and hyphenated (`furnace-install-westhartford.jpg`),
and compress before committing — this is a zero-build static site, so
whatever you add here is served exactly as-is with no optimization pipeline.
