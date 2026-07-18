# Codex Landing-Page Directions

**To:** Fable  
**Branch:** `design/landing-reimagine`

## Option 1

- **File:** `codex-option-1.html`
- **Direction:** The Gallery
- **Concept:** A museum-exhibition catalogue built around a dramatic Bodoni headline, generous alabaster space, accession-style labels, and a central numerical plinth. The content behaves like a curated collection rather than a publication or institutional portal, with staggered trails and one framed infrastructure image keeping the page selective.
- **Fonts + palette:** Bodoni Moda and DM Sans; alabaster `#f0eee9`, warm panel `#e5e1da`, carbon `#20221f`, muted grey `#6c6b64`, clay accent `#984a39`.
- **Signature interaction:** Hovering or focusing a category re-stages the hero plinth with that collection's name, count, and accession number while leaving the category itself a progressive live-site link.
- **Astro port flag:** Preserve the category `data-*` attributes and the small plinth controller as a client script. The single remote pylon image should become an optimised Astro image or a locally managed asset.

## Option 2

- **File:** `codex-option-2.html`
- **Direction:** The Terrain
- **Concept:** A tactile cartographic system in mineral green, where climate-finance subjects are plotted as positions on a contour field rather than represented by conventional cards. The route metaphor continues through the reading trails, while the dark solar-farm case study acts as a decisive visual change in elevation.
- **Fonts + palette:** Epilogue and Azeret Mono; mineral ground `#dce0d4`, deep ground `#ccd2c4`, evergreen ink `#253128`, field grey `#657066`, earth accent `#765932`.
- **Signature interaction:** Pointer movement subtly changes the perspective and position of the hero contour plane using transform-only motion; topic pins remain direct live-site links above it.
- **Astro port flag:** Keep the contour SVG inline so it inherits design tokens, and retain the clipped terrain container at every breakpoint. The pointer controller should stay conditional on `prefers-reduced-motion`.

## Option 3

- **File:** `codex-option-3.html`
- **Direction:** The Dossier
- **Concept:** A refined brutalist dossier made from concrete texture, oversized condensed typography, hard rules, file tabs, and stamped counts. Its blunt hierarchy gives the wiki the confidence of a serious research desk without borrowing the visual language of a government or NGO website.
- **Fonts + palette:** IBM Plex Sans Condensed and IBM Plex Mono; concrete `#d3d1ca`, paper `#e8e5dd`, near-black ink `#1d211f`, utility grey `#666964`, oxide accent `#a65a2d`.
- **Signature interaction:** The featured bankruptcy is a native disclosure file: opening the oversized case summary reveals the evidence statement and direct case-study link, with full keyboard support and no JavaScript dependency.
- **Astro port flag:** Retain the semantic `<details>`/`<summary>` structure and the transform/opacity-only open treatment. The concrete noise is an embedded SVG data texture, so it can remain self-contained or be replaced by an approved local texture token.

## Option 4

- **File:** `codex-option-4.html`
- **Direction:** The Aperture
- **Concept:** A cinematic split-screen direction that pairs stark modern typography with tightly art-directed, oxide-duotone infrastructure photography. Full-bleed light and dark fields make the experience feel like a premium film title sequence while the actual content stays sparse, direct, and highly scannable.
- **Fonts + palette:** Syne and DM Mono; warm light `#eeece5`, soft near-black `#20211f`, neutral `#77766f`, oxide accent `#a94737`.
- **Signature interaction:** A three-button reading-trail projector crossfades the image, title, description, and destination link while exposing the selected state through `aria-pressed`.
- **Astro port flag:** Move the trail data into a typed Astro data object and preload the three projector images to avoid a first-selection delay. Preserve the full-bleed section boundaries and initialise only the compact projector controller on the client.

## Self-critique

The Aperture is the strongest of the four. It creates the most immediate premium-authority signal, makes infrastructure imagery feel specific rather than decorative, and gives the supplied content a memorable interaction without turning the homepage into a dashboard; The Gallery is the closest alternative if the owner prefers a quieter, more timeless expression.
