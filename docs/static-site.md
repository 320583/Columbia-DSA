# Static site (`public/html/`)

A plain HTML + CSS version of the Columbia DSA site. No build step and no JavaScript (the Google Calendar is an iframe, the mobile menu is a native `popover`, and structured data is inert JSON-LD). The folder is a complete site root: everything a visitor, browser or crawler needs is inside it (`robots.txt`, `sitemap.xml`, `404.html`, favicons, `site.webmanifest`, `og-image.jpg`, fonts, CSS).

All URLs inside it assume it is served from the **root** of `https://columbiadsa.com/`. Until the cutover it is also reachable at `/html/` through the Astro site's `public/` folder; relative asset links work there too, but canonicals, the sitemap and social tags point at the root URLs.

## Cutover (replacing the Astro site)
Publish the contents of `public/html/` as the site root. With the current GitHub Pages workflow, replace the `withastro/action` build step with:

```yaml
      - uses: actions/checkout@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: public/html
```

(keep the `deploy` job as is). The custom domain is set in the repository's Pages settings. After the switch the Astro source (`src/`, `astro.config.ts`, `package.json`, `public/` apart from `html/`) is no longer used and can be deleted.

Old URLs `/social-media/` and `/newsletter-sign-up/` are small redirect pages to the home page, because they were live. Delete them if you don't need the old links to keep working.

## Pages
| Page | File |
| --- | --- |
| Home (about + event calendar) | `index.html` |
| Resources | `resources/index.html` |
| Bylaws | `resources/bylaws/index.html` |
| Contact | `contact/index.html` |
| 404 | `404.html` |

When you add a page, copy an existing one, then add it to the nav (every page's `<nav class="site-nav">`) and to `sitemap.xml`.

## Switching themes
- `css/style.css` is the only stylesheet pages link to. It imports one theme from `css/themes/`, then `css/layout.css`.
- To switch themes, change the theme `@import` line in `css/style.css`.
- A theme is just CSS custom properties (colours, fonts, radius, content width) plus its own `@font-face`. `layout.css` never hard-codes them.
- To make a theme: copy `themes/default.css`, edit the values, point `style.css` at it.

## Cache busting
GitHub Pages lets browsers cache CSS for about 10 minutes. When you change any CSS, bump the `?v=` number in the `<link>` in each page and in the `@import`s in `css/style.css` so visitors get the new styles immediately.

## Notes
- External links open in a new tab (`target="_blank" rel="noopener noreferrer"`); the ↗ marker is announced to screen readers as "(external link, opens in a new tab)".
- Dark mode follows the visitor's system setting (there is no toggle button).
- The Organization and breadcrumb structured data in each page's `<head>` is plain JSON; update the home page's block if the contact email or social profiles change.
