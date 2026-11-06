# Static preview of the Columbia DSA site

Plain HTML + CSS, no build step. No JavaScript (the mobile menu is a native `popover`; the Google Calendar is an iframe).
Served at `/html/`. Not linked from the live site and marked `noindex`.

## Switching themes
- `css/style.css` is the only stylesheet pages link to. It imports a theme from `css/themes/`, then `css/layout.css`.
- To switch themes, change the theme `@import` line in `css/style.css`.
- A theme is just CSS custom properties (colours, fonts, radius, content width). `layout.css` never hard-codes them.
- To make a theme: copy `themes/default.css`, edit the values (and swap the `@font-face` for your own font), point `style.css` at it.

## Going live (replacing the Astro site)
1. Delete the preview robots line from every page: `<meta name="robots" content="noindex, nofollow">`. The `noarchive, nocache` tags stay (they match the live site).
2. Change `/html/` to `/` in `canonical`, `og:url`, `og:image`, `twitter:image`, the JSON-LD blocks, `sitemap.xml`, `404.html` and the redirect stubs, e.g.
   `grep -rl "columbiadsa.com/html/\|\"/html/" . | xargs sed -i 's#columbiadsa.com/html/#columbiadsa.com/#g; s#"/html/#"/#g'`
3. Publish the contents of this folder as the site root, keeping the files that live in `public/` (not here): `CNAME` (the custom domain!), `robots.txt`, `favicon*`, `apple-touch-icon.png`, `site.webmanifest`.
4. In `robots.txt`, change `Sitemap: …/sitemap-index.xml` to `…/sitemap.xml` (the Astro sitemap goes away).
5. `social-media/` and `newsletter-sign-up/` exist only as redirects to the home page, because those URLs are live today. Delete them if you don't care about old links.

Things the Astro site had that this one deliberately doesn't: the light/dark toggle button (this follows the visitor's system setting), client-side page transitions, and the JavaScript calendar loading spinner (a CSS spinner is used instead).

External links open in a new tab (`target="_blank" rel="noopener noreferrer"`), and their ↗ marker is announced to screen readers as "(external link, opens in a new tab)".

## Cache busting
GitHub Pages lets browsers cache CSS for ~10 minutes. When you change any CSS, bump the `?v=` number
in the `<link>` in each page and in the `@import`s in `css/style.css` so visitors get the new styles at once.
