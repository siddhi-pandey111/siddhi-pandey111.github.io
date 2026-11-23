# Siddhi Pandey

A responsive, GitHub Pages–ready academic/research portfolio. Built with **plain HTML, CSS and JavaScript**; no build tools, no dependencies, no login and no backend required.

## Pages
- `index.html` — homepage, introduction, research interests and education
- `research.html` — four research topic panels with introductions, project details and DOI links
- `about.html` — background, professional experience, work-image carousel and methods/tools
- `style.css` — colors, fonts, layouts, animations, mobile design
- `script.js` — accessible mobile navigation, topic and photo dialogs, carousel controls and optional scroll reveals
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

## Research and photography pages
- `beyond.html` — photography gallery and the quote from the previous Hobbies page
- `machine-learning.html`, `multi-hazard.html`, `system-identification.html`, `computational-modeling.html` — standalone versions of the research panels
- `assets/gallery/` — local copies of selected photographs and work images from the previous website

To edit research text, update both its standalone page and its dialog in `research.html`. Journal papers are distinguished from ongoing research and coursework. Image captions and roles come from the old site's Professional Experiences page; no dates or locations were invented.
