# Warriors of Warmth (WOW)

A professional website for the Warriors of Warmth charity. We supply materials and volunteers to install heating for local spaces that bring the community together.

## Setup

1. Add your logo as `img/logo.png` (or update all HTML files to use your logo path).
2. **Hero background (optional):** Add a volunteer photo as `img/hero-volunteers.jpg` to show as a low-opacity background behind the orange hero on the homepage. If the file is missing, the hero still shows the orange gradient.
3. **Latest project (homepage):** Add an image as `img/latest-project.jpg` for the "Latest project" section. If missing, the section still shows but the image area will be empty.
4. Open `index.html` in a browser or use a local server (e.g. `npx serve .`).

## Projects data

Project listings are driven by **`data/projects.js`**. List projects in order with **oldest at the top**; new projects go at the bottom. You can paste from a secure note or text document: copy the same block for each project and fill in `place`, `why`, `testimonial`, `cite`, and `role`. The last project in the file is shown as "Latest project" on the homepage; add optional `image`, `volunteers`, `radiators`, `boiler`, and `shortDesc` to that entry to customise the homepage block.

## Pages

- **Home:** Hero, about our work, latest project, what we do, how you can help.
- **Need Help:** How we help, nominations, coverage (England), non-profit model.
- **Contact:** Enquiry and nomination form (connect to your backend or email service).
- **Projects:** Place, why chosen, and testimonial for each project we've supported.
- **Sponsors:** List of sponsors; click a card to expand or collapse (one open at a time).

## Brand

- Primary: `#FF9110`
- Light: `#FFE090`

All copy is written in a professional, charity-appropriate tone.
pl