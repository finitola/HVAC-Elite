# HVAC Elite

![HVAC Elite Logo](images/logo_hvac_elite.svg)

**HVAC Elite** is a modern, bilingual (Georgian/English) Single Page Application (SPA) dedicated to professional Heating, Ventilation, and Air Conditioning services in Tbilisi, Georgia.

## Features

- **Custom Vanilla JS SPA:** Built entirely without heavy frameworks (No React/Vue) for lightning-fast performance.
- **Static Prerendering (SSG):** `prerender.js` generates SEO-ready HTML for every route into `dist/`.
- **Client-Side Routing:** Seamless page transitions using the History API.
- **Bilingual Support (KA / EN):** Dynamic language switching with URL synchronization (e.g., `/services` vs `/en/services`).
- **Dynamic SEO & Schema Markup:** Automatically injects Meta tags, OpenGraph, Twitter Cards, and JSON-LD schema for optimal search engine visibility.
- **Agent Discovery:** `llms.txt` and `.well-known/ai-catalog.json` (ARD schema) for AI agents.
- **Responsive Design:** Custom CSS architecture using modern variables and design tokens.
- **Performance Optimized:** Uses WebP images, Intersection Observers for scroll animations, and minimal DOM repaints.

## Project Structure

```text
index.html          # HTML template used by the prerenderer
prerender.js        # Static site generator (outputs dist/)
package.json        # `npm run build` -> node prerender.js
wrangler.jsonc      # Cloudflare deployment config (serves dist/)
_headers            # Security headers / CSP + ai-catalog headers
_redirects          # Cloudflare routing rules
robots.txt          # SEO robot rules
sitemap.xml         # SEO sitemap
llms.txt            # Site summary for LLMs
.well-known/
  ai-catalog.json   # Agent Resource Discovery catalog
css/
  main.css          # Design tokens, variables, base styles
  layout.css        # Header, Footer, and structural components
  pages.css         # Page-specific styling
images/             # WebP, SVG and icon assets
js/
  app.js            # Main application logic and SEO injection
  router.js         # URL routing logic
  store.js          # Global state management (Language, Path)
  components/       # Reusable UI components (Header, Footer)
  pages/            # Page templates (Home, Services, About, Contact, Terms, Privacy, NotFound)
  locales/          # Translation files (ka.js, en.js)
```

## Setup & Build

```bash
git clone https://github.com/finitola/HVAC-Elite.git
npm run build      # generates the dist/ folder
```

For local preview, serve `dist/` with any static server, e.g.:

```bash
python -m http.server 8000 --directory dist
```

## Deployment

Hosted on **Cloudflare** (Workers static assets, see `wrangler.jsonc`). Run `npm run build`, then deploy the `dist/` folder. The SPA fallback (`not_found_handling: single-page-application`) lets the Vanilla JS router handle deep links.

## Contact

- **Website:** [hvacelite.ge](https://hvacelite.ge)
- **Phone:** +995 514 12 88 21
- **Location:** Tbilisi, Georgia
