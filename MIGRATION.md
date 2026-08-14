# Next.js migration guide

The site now runs on Next.js (App Router), deployed to Netlify via
`@netlify/plugin-nextjs` (see `netlify.toml`). The migration is **incremental**:
every legacy page keeps working unchanged until it is converted.

## How it works

- **Legacy pages** stay as plain `.html` files in `public/`. Rewrites in
  `next.config.js` reproduce Netlify's pretty URLs (`/about` → `about.html`,
  `/doorstops` → `doorstops/index.html`), so no URL changes.
- **Converted pages** live in `app/<route>/page.js`. A route in `app/`
  automatically takes precedence over the legacy rewrite for the same path.
- `_redirects` and `_headers` in `public/` are still handled by Netlify.
- The Plausible proxy functions in `netlify/functions/` are unchanged.

## Converting a page

1. Create `app/<route>/page.js`. Export `metadata` for the `<head>` tags.
2. For standard marketing/content pages, wrap the page content in
   `components/site/SiteChrome` — it provides the shared stylesheet, fonts,
   header/nav, footer, back-to-top button, and site-wide scripts (Plausible,
   jQuery + `/assets/js/script.js`, ionicons). See `app/about/page.js`.
3. For interactive pages, port inline scripts to React (`'use client'`
   component with hooks). Keep element ids that scripts or tests rely on.
   See `app/search/` for the pattern (server `page.js` for metadata + client
   component for behavior).
4. Delete the legacy `.html` from `public/` so it can't drift.
5. Run `npm test` — the Playwright e2e suite must stay green. Add specs for
   any behavior the page has that isn't covered yet.

## Commands

- `npm run dev` — dev server
- `npm run build && npm run start` — production server on :4173
- `npm test` — Playwright e2e suite (builds + starts the server itself)

## Known differences from the legacy setup

- Missing URLs now render Next's 404 page instead of `public/404.html`.
  Convert it to `app/not-found.js` if the custom 404 styling matters.
- Converted pages no longer jQuery-`.load()` the footer; they render
  `SiteFooter` directly (same markup as `public/footer.html`).
