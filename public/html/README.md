# Static preview of the Columbia DSA site

Plain HTML + CSS, no build step, no JavaScript (the Google Calendar is an iframe).
Served at `/html/`. Not linked from the live site and marked `noindex`.

## Switching themes
- `css/style.css` is the only stylesheet pages link to. It imports `css/theme.css`, then `css/layout.css`.
- `css/theme.css` contains a single `@import` pointing at a file in `css/themes/`. Change that line to switch themes.
- A theme is just CSS custom properties (colours, fonts, radius, content width). `layout.css` never hard-codes them.
- To make a theme: copy `themes/default.css`, edit the values, point `theme.css` at it.

## Going live
Remove the `<meta name="robots" content="noindex…">` line from each page, and move the folder's contents to the site root.
