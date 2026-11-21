# Siddhi Pandey

A responsive, three-page, GitHub Pages–ready academic/research portfolio. Built with **plain HTML, CSS and JavaScript**; no build tools, no dependencies, no login and no backend required.

## Pages
- `index.html` — homepage, featured projects, human side and contact
- `research.html` — Research summaries with DOI links and interactive published/ongoing filters
- `about.html` — background, timeline, methods/tools and space for non-academic projects
- `style.css` — colors, fonts, layouts, animations, mobile design
- `script.js` — accessible mobile navigation, research filters and optional scroll reveals
- `assets/favicon.svg` — tab icon


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
