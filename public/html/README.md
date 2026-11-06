# Static preview of the Columbia DSA site

Plain HTML + CSS, no build step. No JavaScript (the mobile menu is a native `popover`; the Google Calendar is an iframe).
Served at `/html/`. Not linked from the live site and marked `noindex`.

## Switching themes
- `css/style.css` is the only stylesheet pages link to. It imports a theme from `css/themes/`, then `css/layout.css`.
- To switch themes, change the theme `@import` line in `css/style.css`.
- A theme is just CSS custom properties (colours, fonts, radius, content width). `layout.css` never hard-codes them.
- To make a theme: copy `themes/default.css`, edit the values (and swap the `@font-face` for your own font), point `style.css` at it.

## Going live
This copy is served from `/html/`, so a few things are written with that path and will change when it replaces the site root:
- Remove the `<meta name="robots" content="noindex…">` line from each page (it hides the pages from search engines).
- `canonical`, `og:url`, `og:image`, the `sitemap.xml` URLs and `404.html`'s asset links all start with `https://columbiadsa.com/html/` (or `/html/`). Change them to the root.
- `404.html` only takes effect from the site root (GitHub Pages ignores it in a subfolder).
- Point `robots.txt` at `sitemap.xml`.

External links open in a new tab (`target="_blank" rel="noopener noreferrer"`), and their ↗ marker is announced to screen readers as "(external link, opens in a new tab)".

## Cache busting
GitHub Pages lets browsers cache CSS for ~10 minutes. When you change any CSS, bump the `?v=` number
in the `<link>` in each page and in the `@import`s in `css/style.css` so visitors get the new styles at once.
