# New client checklist

Copy this into the client Drive folder when you start a job.

## Intake
- [ ] Intake brief filled
- [ ] Logo received
- [ ] Photos received
- [ ] Hours, address, phone confirmed
- [ ] Domain owned or to purchase
- [ ] Deposit received

## Build
- [ ] New private repo from this template
- [ ] `assets/js/config.js` — set `BUSINESS` (name, phone, phoneHref, email,
      mapsQuery) and `HOURS`
- [ ] `assets/css/styles.css` — set brand tokens (`--color-primary`,
      `--color-accent`, `--color-highlight`, backgrounds); swap
      `--font-display`/`--font-body` + the Google Fonts `<link>` if needed
- [ ] `index.html` — replace "Forge & Main" and all section copy (Hero,
      About, Offerings, Events, Featured, Visit, Contact, Final CTA, Footer)
- [ ] Replace the placeholder **Testimonials** with real customer reviews
      (with permission) — never present demo reviews as real, never launch
      with the sample ones still in place
- [ ] Decide whether the **Events / Community** section applies; rename or
      remove it (section, footer link, nav link) if not
- [ ] Swap favicon at `assets/img/brand/favicon.svg` and logo mark in the
      header/footer brand
- [ ] Drop client photos into `assets/img/` (see `assets/img/README.md`)
      and replace the CSS hero/featured illustrations if real photography
      is available
- [ ] Update `<title>`, meta description, canonical URL, Open Graph +
      Twitter tags in `index.html`'s `<head>`
- [ ] Update `robots.txt` and `sitemap.xml` with the real domain
- [ ] Add `/assets/img/social/og-image.jpg` (1200×630) and uncomment the
      `og:image` tag
- [ ] Update social links (`href="#"` placeholders in Visit + Footer)
- [ ] Preview on Vercel

## QA before delivery
- [ ] No leftover "Forge & Main" / "Millbrook" / `.example` email / `555`
      phone number anywhere
- [ ] No placeholder testimonials, no fabricated reviews
- [ ] Checked at 320/375/390/430/768/1024/1280/1440px — no horizontal
      scroll, no overlapping text, no tiny touch targets
- [ ] All nav links and CTAs scroll to the right section
- [ ] No console errors
- [ ] Reduced-motion (`prefers-reduced-motion`) respected

## Launch
- [ ] One revision pass
- [ ] Domain pointed at Vercel
- [ ] Delivery email sent
- [ ] Balance invoiced / paid
- [ ] Tracker set to Live
- [ ] Drive folder moved to `03_Delivered`
