# Static preview of the Columbia DSA site

Plain HTML + CSS, no build step. No JavaScript (the mobile menu is a native `popover`; the Google Calendar is an iframe).
Served at `/html/`. Not linked from the live site and marked `noindex`.

## Switching themes
- `css/style.css` is the only stylesheet pages link to. It imports a theme from `css/themes/`, then `css/layout.css`.
- To switch themes, change the theme `@import` line in `css/style.css`.
- A theme is just CSS custom properties (colours, fonts, radius, content width). `layout.css` never hard-codes them.
- To make a theme: copy `themes/default.css`, edit the values (and swap the `@font-face` for your own font), point `style.css` at it.

## Going live
Remove the `<meta name="robots" content="noindex…">` line from each page, and move the folder's contents to the site root.

## Cache busting
GitHub Pages lets browsers cache CSS for ~10 minutes. When you change any CSS, bump the `?v=` number
in the `<link>` in each page and in the `@import`s in `css/style.css` so visitors get the new styles at once.
