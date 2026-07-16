# Columbia DSA Website

This is the official website for Columbia DSA (Democratic Socialists of America), built with modern web technologies to provide a fast, accessible platform for our chapter's news, events, and resources.

## About This Site

The Columbia DSA website is a static site that includes:
- **News/Blog** - Articles and updates from the chapter
- **Calendar** - Upcoming events and meetings
- **Resources** - Bylaws, organizing materials, and other documents
- **Contact Information** - How to get in touch with the chapter

The site is hosted on GitHub Pages at [columbiadsa.com](https://columbiadsa.com).

---

## Technologies Used

This website is built with several modern technologies that work together to create a fast, maintainable site:

### Core Framework
- **[Astro](https://astro.build/)** - The main framework that builds the site. Astro is great for content-heavy sites because it generates fast, static HTML pages while still allowing interactive components where needed.

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework that makes styling consistent and maintainable
- **[shadcn/ui](https://ui.shadcn.com/)** - Pre-built, accessible UI components (buttons, alerts, etc.) that automatically support light/dark themes
- **[React](https://react.dev/)** - Used for interactive components like the construction banner

### Content & Formatting
- **[MDX](https://mdxjs.com/)** - Allows writing blog posts in Markdown with support for React components
- **[Expressive Code](https://expressive-code.com/)** - Enhanced code block styling with syntax highlighting
- **[KaTeX](https://katex.org/)** - Math equation rendering support

### Deployment
- **[GitHub Pages](https://pages.github.com/)** - Free hosting directly from the GitHub repository
- **[GitHub Actions](https://github.com/features/actions)** - Automated builds and deployments when code is pushed

---

## Running the Site Locally

If you want to work on the website on your own computer, follow these steps:

### Prerequisites

You'll need to have these installed on your computer:
1. **[Node.js](https://nodejs.org/)** (version 18 or newer) - Download from nodejs.org
2. **[Git](https://git-scm.com/)** - For downloading and managing the code

To check if you have these installed, open a terminal/command prompt and run:
```bash
node --version
git --version
```

### Setup Instructions

1. **Clone the repository** (download the code to your computer):
   ```bash
   git clone https://github.com/320583/Columbia-DSA.git
   cd Columbia-DSA
   ```

2. **Install dependencies** (download all the required packages):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the site** - Open your web browser and go to:
   ```
   http://localhost:1234
   ```

The site will automatically reload when you make changes to files!

### Useful Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start the development server (use this most of the time) |
| `npm run build` | Build the production version of the site |
| `npm run preview` | Preview the built site locally |
| `npm run prettier` | Auto-format all code files |

---

## Adding a Blog Post

This section explains how to add a new blog post to the website. Don't worry if you're not technical - just follow these steps carefully!

### Step 1: Create a new folder for your post

1. Navigate to the blog posts folder: `src/content/blog/`
2. Create a new folder with a descriptive name using dashes instead of spaces
   - **Good examples**: `may-day-2026`, `mutual-aid-drive`, `general-meeting-recap`
   - **Bad examples**: `May Day 2026`, `post1`, `new post`

### Step 2: Create the blog post file

1. Inside your new folder, create a file named `index.md`
2. Open this file in a text editor (VS Code, Notepad, TextEdit, etc.)

### Step 3: Add the frontmatter (metadata)

At the very top of your `index.md` file, add information about your post between three dashes (`---`). Here's a template:

```markdown
---
title: 'Your Post Title Here'
description: 'A brief summary of what this post is about'
date: 2026-01-15
tags: ['organizing', 'events']
authors: ['columbia-dsa']
draft: false
---
```

**Field explanations:**
- **title**: The main headline (keep it under 60 characters)
- **description**: A short summary that appears in previews (keep it under 155 characters)
- **date**: The publish date in `YYYY-MM-DD` format (year-month-day)
- **tags**: Categories for your post - use existing tags when possible:
  - `organizing`, `labor`, `electoral`, `membership`, `events`, `international`, etc.
- **authors**: Who wrote this post. Use `['columbia-dsa']` for chapter-wide posts
- **draft**: Set to `true` to hide the post, `false` to publish it

### Step 4: Write your content

After the closing `---`, write your blog post content using Markdown formatting:

```markdown
---
title: 'May Day 2026 Celebration'
description: 'Join us for our annual May Day celebration and march'
date: 2026-04-20
tags: ['events', 'organizing']
authors: ['columbia-dsa']
draft: false
---

# May Day is Coming!

Join Columbia DSA on **May 1st** for our annual International Workers' Day celebration!

## Event Details

- **When**: May 1, 2026 at 2:00 PM
- **Where**: Main Street Plaza
- **What to bring**: Signs, banners, and solidarity!

We'll be marching together with other labor organizations...

[Sign up here](https://example.com/signup)
```

**Basic Markdown formatting:**
- `# Heading` = Large heading
- `## Smaller Heading` = Medium heading
- `**bold text**` = **bold text**
- `*italic text*` = *italic text*
- `[link text](URL)` = Clickable link
- `-` or `*` at the start of a line = bullet points
- Blank line = new paragraph

### Step 5: Add images (optional)

To include images in your post:

1. Place image files in the same folder as your `index.md` file
2. Reference them in your post like this:

```markdown
![Description of image](./image-name.jpg)
```

**Best practices for images:**
- Use descriptive filenames: `may-day-march.jpg` not `IMG_1234.jpg`
- Keep file sizes reasonable (under 1MB when possible)
- Supported formats: `.jpg`, `.png`, `.webp`

### Step 6: Preview your post

1. Make sure the development server is running (`npm run dev`)
2. Go to `http://localhost:1234/blog` in your browser
3. Find your post and check that everything looks correct

### Step 7: Publish your post

Once your post looks good:

1. **Save all your changes**
2. **Commit your changes** (save them to git):
   ```bash
   git add .
   git commit -m "Add blog post about [topic]"
   ```
3. **Push to GitHub** (upload to the website):
   ```bash
   git push
   ```

The website will automatically rebuild and your post will appear live within a few minutes!

### Common Issues & Tips

**My post isn't showing up:**
- Check that `draft: false` in the frontmatter
- Make sure the date isn't in the future
- Verify the file is named `index.md` (not `index.txt` or anything else)

**Images aren't loading:**
- Make sure the image is in the same folder as `index.md`
- Check that the image filename in your markdown matches exactly (including `.jpg` or `.png`)
- Use `./` before the filename: `./my-image.jpg`

**Formatting looks weird:**
- Make sure there's a blank line between paragraphs
- Check that all `---` lines have exactly three dashes
- Verify there's no extra spaces before the frontmatter fields

**Need help?**
- Ask in the chapter Discord/Slack
- Check the [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- Look at existing posts in `src/content/blog/` for examples

---

## Site Structure

```
columbia-dsa-2/
├── public/              # Static files (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/
│   │   ├── blog/       # Blog posts (add new posts here!)
│   │   └── authors/    # Author profiles
│   ├── layouts/        # Page templates
│   ├── pages/          # Site pages (routes)
│   └── styles/         # CSS styling
├── astro.config.ts     # Astro configuration
└── package.json        # Project dependencies
```

---

## Making Changes

### Before Publishing
When the site is under construction, several features are temporarily disabled:
- Search engine indexing (robots.txt blocks crawlers)
- Sitemap generation
- Web archive crawling

These are all marked with `CONSTRUCTION-TEMP` comments in the code. To find all temporary changes:

```bash
grep -r "CONSTRUCTION-TEMP" src/
```

### Going Live Checklist
When ready to make the site fully public:

1. Search for `CONSTRUCTION-TEMP` in the codebase
2. Uncomment sitemap generation in `astro.config.ts`
3. Remove robots meta tags from `src/components/head.astro`
4. Update `public/robots.txt` to allow crawlers
5. Remove the construction banner from `src/layouts/layout.astro`
6. Uncomment Discord link in `src/consts.ts` (when ready)

---

## Contributing

This is a chapter-run project. If you'd like to contribute:

1. **For content** (blog posts, updates): Follow the "Adding a Blog Post" section above
2. **For code/design changes**:
   - Create a new branch: `git checkout -b your-feature-name`
   - Make your changes
   - Test locally with `npm run dev`
   - Commit and push your branch
   - Open a Pull Request on GitHub

Questions? Reach out to the website maintainers in the chapter communications.
