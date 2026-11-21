# Siddhi Pandey — research & beyond

A responsive, three-page, GitHub Pages–ready academic/research portfolio. Built with **plain HTML, CSS and JavaScript**; no build tools, no dependencies, no login and no backend required.

## Pages
- `index.html` — homepage, featured projects, human side and contact
- `research.html` — four research summaries with DOI links and interactive published/ongoing filters
- `about.html` — background, timeline, methods/tools and space for non-academic projects
- `style.css` — colors, fonts, layouts, animations, mobile design
- `script.js` — accessible mobile navigation, research filters and optional scroll reveals
- `assets/favicon.svg` — tab icon

## Preview locally
Open `index.html` in your browser, or use VS Code with Live Server. The other two HTML pages link normally.

## Publish on GitHub Pages
1. Create a **public** repository named `YOUR_USERNAME.github.io` (or any name for a project site).
2. On GitHub, upload all the files **inside** this folder (don't upload the ZIP itself; preserve the `assets` folder).
3. In repository **Settings → Pages**, choose **Deploy from a branch → main → /(root)**, then save.
4. The home URL will be `https://YOUR_USERNAME.github.io/`; for a different repo name, it will be `https://YOUR_USERNAME.github.io/REPO_NAME/`.

All website links to local files use relative paths and work in either setup.

## Personalization: important checks before publishing
- **Review your bio and research descriptions** for the wording you would like used publicly. Ongoing projects are explicitly described as ongoing; do not change them to "published" unless appropriate.
- **LinkedIn contact** currently points to `https://www.linkedin.com/in/siddhi-pandey-a8b37b215/` based on the public LinkedIn link surfaced in search; verify it is your preferred profile. You can also replace the buttons with `mailto:YOUR_EMAIL` once you choose a public email address.
- **Add a CV**: place a PDF in `assets/`, then add a link to it in the navigation or About page. No fake CV PDF link is included.
- **Beyond the CV** is intentionally reserved for your personal projects, travel notes, essays, photography, and other interests. No personal interests are invented or presented as facts.
- The abstract illustrations are **conceptual design graphics, not research plots**. Replace them with your figures when you want to share actual results (and have permission to do so).
- Remove the optional link to your previous Google Site in the footer when you no longer need it.

## Source checks used for the initial content
- Old homepage: https://sites.google.com/view/siddhipandey/home
- Concrete ML paper: https://doi.org/10.1080/15623599.2024.2345008 (2025 volume/issue; published online 2024)
- Regional PGA prediction paper: https://doi.org/10.1002/eer2.70030 (2025 journal issue)

## Design notes
Palette: deep charcoal/forest, warm ivory, pale lime and muted coral; typography: Space Grotesk + DM Sans + Instrument Serif (Google Fonts with local fallbacks). The site includes mobile-first fallback behavior, keyboard focus styles, semantic markup and reduced-motion support.

© 2026. Content and site text can be edited directly in HTML. No analytics or trackers installed.

## Typography
The site now uses **CMU Serif** throughout its pages (regular, bold, and italic).
The web font is requested from jsDelivr via
`https://cdn.jsdelivr.net/npm/computer-modern@0.1.3/cmu-serif.css`.
The font is hosted externally rather than bundled inside this package;
when offline, the browser will use Georgia or another available serif fallback.
The small monospace labels inside technical diagrams intentionally remain monospace.
