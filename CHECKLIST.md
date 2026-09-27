# New contractor client checklist

Copy this into the client Drive folder when you start a job. The default
site is a **demo HVAC skin** — everything below is about turning it into a
real, verified client site.

## Intake
- [ ] Intake brief filled (trade, towns served, services offered)
- [ ] Logo received
- [ ] Real project photos received (before/after where possible)
- [ ] Business name, phone, email, address confirmed
- [ ] **Verified** claims collected: license #, insurance, years in
      business, warranties, certifications, financing, emergency service
- [ ] Real reviews collected **with permission**
- [ ] Domain owned or to purchase
- [ ] Deposit received

## Build — mostly `assets/js/config.js`
- [ ] `BUSINESS` — name, `shortName`, tagline, trade, phone, `phoneHref`,
      email, address, `mapsQuery`, `serviceAreaShort`, social links
- [ ] `CTA` — confirm primary (estimate) + secondary (call) labels
- [ ] `HERO` — headline, lede, emergency line (or ""), badges (verified only)
- [ ] `TRUST_ITEMS` — only credentials the client confirmed
- [ ] `SERVICES` — 3–6 real services (name, description, icon)
- [ ] `WHY_US` — lead line + real differentiators
- [ ] `SERVICE_AREA` — real towns only, region, statement
- [ ] `PROJECTS` — real jobs; set `image:` paths and `placeholder: false`
      only when photos + details are real
- [ ] `TESTIMONIALS` — replace samples with genuine, permissioned reviews
      (or remove the section) — never present demo reviews as real
- [ ] `FORM` — service + timing options match the trade
- [ ] `HOURS` — real office/dispatch hours
- [ ] **`BUSINESS.demo = false`** — only after every value above is real
      (removes the demo banner + "Demo review"/"Sample project" tags)

## Brand + assets
- [ ] `assets/css/styles.css` — set brand tokens (`--color-primary`,
      `--color-accent`, `--color-highlight`, backgrounds); swap fonts +
      Google Fonts `<link>` if needed
- [ ] Swap favicon at `assets/img/brand/favicon.svg` and the header/footer
      brand wordmark in `index.html`
- [ ] Drop client photos into `assets/img/` (see `assets/img/README.md`);
      replace hero CSS illustration with real photography if available

## SEO
- [ ] `index.html` `<head>` — `<title>`, meta description, canonical, Open
      Graph + Twitter tags
- [ ] Section `<h1>`/`<h2>` copy updated for the trade
- [ ] `robots.txt` + `sitemap.xml` — real domain
- [ ] Add `/assets/img/social/og-image.jpg` (1200×630), uncomment `og:image`

## QA before delivery
- [ ] No leftover demo values: "Charter Oak" / "charteroakhvac" /
      `.example` email / `555` phone / "Sample project" / "Demo review" /
      `demo: true` / `placeholder: true` / `your-client-domain.com`
- [ ] No fabricated claims or reviews anywhere
- [ ] Checked at 320/375/390/430/768/1024/1280/1440px — no horizontal
      scroll, no overlapping text, no tiny touch targets
- [ ] Primary "Request a Free Estimate" and "Call Now" CTAs work everywhere
- [ ] Phone links dial; email links open mail; directions link opens maps
- [ ] All nav links + CTAs scroll to the right section
- [ ] Estimate form opens a pre-filled email; "nothing stored" note present
- [ ] No console errors (Google Fonts must be reachable)
- [ ] Reduced-motion (`prefers-reduced-motion`) respected

## Launch
- [ ] One revision pass
- [ ] Domain pointed at Vercel
- [ ] Delivery email sent
- [ ] Balance invoiced / paid
- [ ] Tracker set to Live
- [ ] Drive folder moved to `03_Delivered`
