# Columbia DSA website

The website for the Columbia, SC chapter of the Democratic Socialists of America, at **https://columbiadsa.com**.

It is plain HTML and CSS with no build step and no JavaScript. Everything that gets published lives in [`site/`](site/).

## How it's published
Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which uploads the `site/` folder to GitHub Pages as-is.

`site/CNAME` holds the custom domain (`columbiadsa.com`). The domain is also set in the repository's **Settings → Pages → Custom domain**; keep the two in sync.

## What's in `site/`
| Path | What it is |
| --- | --- |
| `index.html` | Home page: about text and the event calendar (a Google Calendar iframe) |
| `resources/index.html`, `resources/bylaws/index.html` | Resources and the chapter bylaws |
| `contact/index.html` | Contact |
| `404.html` | Not-found page (GitHub Pages serves it automatically) |
| `social-media/`, `newsletter-sign-up/` | Redirects to the home page. These URLs used to exist, so old links keep working |
| `css/` | Stylesheets (see below) |
| `fonts/` | Geist variable font and its license |
| `img/`, `og-image.jpg`, `favicon*`, `apple-touch-icon.png`, `icon-*.png`, `site.webmanifest` | Images, social preview image, and app icons |
| `robots.txt`, `sitemap.xml` | For search engines |

## Editing
- **Text:** edit the HTML files directly.
- **Adding a page:** copy an existing page, add it to the nav in every page's `<nav class="site-nav">`, and add its URL to `sitemap.xml`.
- **Previewing locally:** from the repo root run `python3 -m http.server --directory site` and open http://localhost:8000.

## Themes and CSS
- `css/style.css` is the only stylesheet the pages link to. It imports one theme from `css/themes/`, then `css/layout.css`.
- **To switch themes**, change the theme `@import` line in `css/style.css`.
- A theme is just CSS custom properties (colours, fonts, radius, content width) plus its own `@font-face`. `layout.css` holds structure only and never hard-codes them. To make a theme, copy `css/themes/default.css`, edit the values, and point `style.css` at it. `red-rose.css` is an example.
- **Cache busting:** GitHub Pages lets browsers cache CSS for about 10 minutes. When you change any CSS, bump the `?v=` number in the `<link>` in every page and in the `@import`s in `css/style.css`.

## Notes
- External links open in a new tab (`target="_blank" rel="noopener noreferrer"`); the ↗ marker is announced to screen readers as "(external link, opens in a new tab)".
- Dark mode follows the visitor's system setting; there is no toggle button.
- The mobile menu is a native `popover` element, and the structured data in each `<head>` is inert JSON-LD, so there is no script anywhere.
- If the contact email or social profiles change, update the Organization block in `index.html`'s `<head>` as well as the footer links.
