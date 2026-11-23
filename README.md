# haozzzdev.github.io

Minimal personal website for **Hao Zhang** (`https://haozzzdev.github.io/`), built with zero-dependency HTML, CSS, and JavaScript for direct GitHub Pages hosting.

## Structure

- `index.html` — Single-column editorial homepage, Open Graph metadata, and Schema.org `Person` / `WebSite` JSON-LD
- `post.html` — Built-in zero-build Markdown article reader (`post.html?slug=<name>`)
- `styles.css` — Light / dark design system, responsive layout, and article prose typography
- `data.js` — Single source of truth for bilingual (`EN` / `中文`) bio, focus areas, experience, education, and published articles
- `script.js` — Theme toggle, language switcher, dynamic rendering, and one-click email copy
- `posts/_template.md` — Starter Markdown template for future technical articles
- `assets/favicon.svg` — Monogram favicon
- `.nojekyll` — Disables Jekyll preprocessing on GitHub Pages for direct static serving

## Publishing a New Article

No build step required:

1. Copy `posts/_template.md` to `posts/<your-slug>.md` (e.g. `posts/multi-cloud-control-plane.md`).
2. Add an entry to `copy.en.writing.posts` (and `copy.zh.writing.posts`) in `data.js`:
   ```js
   {
     slug: "multi-cloud-control-plane",
     date: "2026-12",
     title: "Designing a Multi-Cloud Resource Ingestion Control Plane",
     summary: "Architecture notes on rate-limited backfills, dual-path reconciliation, and 99.99% availability.",
     tags: ["Distributed Systems", "Cloud Infra"],
     readTime: "6 min read",
   }
   ```
3. Commit and push to `main` — the article list updates automatically and links directly to `post.html?slug=multi-cloud-control-plane`.

## Optional: Adding a Downloadable PDF Resume

Place a redacted `resume.pdf` (without private phone number) in the repository root and set `profile.links.resumeUrl` in `data.js` to `"./resume.pdf"`. The **Resume (PDF)** button will automatically appear in the hero section.