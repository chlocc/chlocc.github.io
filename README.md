# chloe-lw-chan.com

Personal site for Chloe Lok Wing Chan. Static site built with [Astro](https://astro.build),
deployed to GitHub Pages. Migrated off Wix in September 2026.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where the content lives

Everything editable is data, not markup:

| File | What it drives |
|---|---|
| `src/data/publications.json` | The Writing page and the homepage's featured three |
| `src/data/builds.json` | The Builds page and the homepage build list |
| `src/data/press.json` | The "As seen on" press section on the Litex page |
| `src/data/supporters.json` | The logo wall on the Litex page |

**To add a new side project**, append an object to `src/data/builds.json` — `name`, `tagline`,
`description`, `stack`, `cadence`, `href`, `repo` — and push. Nothing else needs to change.

Images go in `public/img/`, PDFs in `public/files/`.

## Wix migration notes

- `assets/img/raw/` is the untouched archive of every image pulled off the Wix CDN before the
  plan lapsed. Working copies in `public/img/` are resized and renamed.
- `public/files/` holds three PDFs that were hosted on Wix and would have died with the plan:
  the ETH ETF paper and two MingPao press clippings.
- Old Wix URLs redirect to their new homes (see `redirects` in `astro.config.mjs`):
  `/financial-publications` → `/writing`, `/litex-legaltech` → `/projects/litex`,
  `/liblit-fintech` → `/projects/liblit`, `/filmography` → `/film`.

## Outstanding

- [ ] **Contact form** — sign up at [formspree.io](https://formspree.io), then replace
      `FORMSPREE_ENDPOINT` in `src/pages/contact.astro`. The form is disabled until then.
- [ ] **Custom domain** — add a `public/CNAME` file containing `www.chloe-lw-chan.com`
      and point DNS at GitHub Pages (see the cutover checklist).
