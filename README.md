# Client site starter

Reusable **zero-build** template for local-business sites. Same pattern as M&J, Thousand Sunny, Hard Hitting, and The Stronghold:

- one `index.html`
- `assets/css`, `assets/js`, `assets/img`
- `vercel.json` (clean URLs + long-lived asset cache)
- no framework, no compile step

Repo: https://github.com/VoidcallerOC/client-site-starter

## New client in 10 minutes

1. On GitHub: **Use this template** (or clone) → new **private** repo named after the client.
2. Search-replace in `index.html`:
   - `Client Name`
   - headline, lede, about, services
   - phone, address, domain (`example.com`)
3. Edit `assets/js/main.js` → `BUSINESS` and `HOURS`.
4. Drop logo/photos into `assets/img/` and swap the gallery placeholders.
5. Change `--accent` / `--bg` in `assets/css/styles.css` to the brand.
6. Import the repo in Vercel (static, no framework) or ask Grok to link it.

Local preview (paths are absolute `/assets/...`):

```bash
python3 -m http.server 8000
```

## Drive system

Client briefs, proposals, invoices:

https://drive.google.com/drive/folders/1pVd0M_OjpkKASki85HYFomFXEhrjHE_P
