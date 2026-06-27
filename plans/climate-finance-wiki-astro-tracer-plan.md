# Plan: Climate Finance Wiki (Astro) - Tracer Bullet Delivery

> Source PRD: `C:\Users\pusko\Downloads\SECOND BRAIN\docs\BUILD_PROMPT.md`

## Architectural decisions

Durable decisions that apply across all phases:

- **Routes**: Static routes remain stable across the build: `/`, `/about/`, `/glossary/`, `/privacy/`, `/terms/`, `/concepts/`, `/instruments/`, `/actors/`, `/frameworks/`, `/case-studies/`, and article detail routes at `/<category>/<slug>/`.
- **Schema**: Astro content collection schema for `articles` frontmatter is the single source of truth for page rendering metadata (`title`, `subtitle`, `category`, `type`, `stats`, `seeAlso`, `unexpected`, `sources`, optional `caseStudy`).
- **Key models**: `Article`, `Category`, `Trail`, `GlossaryTerm`, and `SearchIndexEntry` are durable data models used by pages, search, and navigation.
- **Rendering model**: Fully static output (`output: 'static'`) with build-time generation for all pages and no runtime SSR dependencies.
- **Navigation contract**: Every page always includes nav, footer, and at least one forward path (breadcrumb, related cards, thread bar, glossary link, or category link).
- **Wikilink transformation boundary**: `[[wikilinks]]` are transformed at markdown build time via a remark plugin and must resolve to real site routes.
- **Deployment boundary**: GitHub Pages deploys from `site/dist` via GitHub Actions workflow; no server-side infrastructure.
- **Auth/authorization**: None required for this static documentation site.

---

## Phase 1: Thin Skeleton Slice (Scaffold to First Rendered Route)

**User stories**: As a visitor, I can load the site shell and navigate foundational static pages with consistent nav/footer/search affordances.

### What to build

Initialize Astro in `site/`, wire static build config, add `BaseLayout`, shared nav/footer/search overlay shell, and create minimal pages (`/`, `/about/`, `/privacy/`, `/terms/`) using layout composition.

### Acceptance criteria

- [ ] `site/` Astro project exists with `output: 'static'`, `site`, and `base` placeholders configured.
- [ ] `npm run build` succeeds from `site/` with no errors.
- [ ] `/`, `/about/`, `/privacy/`, and `/terms/` render with nav + footer + search trigger in generated `dist/` HTML.
- [ ] Search overlay opens and closes via UI controls on at least one page template.

### Observable checks

- [ ] Run `npm run build` in `site/` and record successful exit code.
- [ ] Run `npx serve dist` and manually verify the four routes render and include shared chrome.

---

## Phase 2: First Content Vertical Slice (One Category, One Real Article, Wikilinks)

**User stories**: As a visitor, I can open one category page, open one article sourced from real markdown, and follow transformed wikilinks.

### What to build

Set up content collections and one end-to-end article path: ingest a single real article into `src/content/articles`, create category listing for one category, create dynamic article page, and implement initial remark wikilink transformation with a small map.

### Acceptance criteria

- [ ] `src/content/config.ts` enforces schema for article metadata.
- [ ] One real markdown article renders through dynamic route `/<category>/<slug>/` with frontmatter-driven layout props.
- [ ] At least one `[[wikilink]]` in article body resolves to a valid internal URL.
- [ ] Breadcrumb path works from article back to home and category.

### Observable checks

- [ ] Build succeeds after adding content collection and dynamic route generation.
- [ ] Manual click path works: `/` -> selected category -> selected article -> transformed wikilink target.
- [ ] No 404 on the wikilink target route used in the slice.

---

## Phase 3: Full Article Pipeline Slice (All Non-Case-Study Articles)

**User stories**: As a visitor, I can browse every non-case-study article with consistent structure, metadata panels, and related navigation.

### What to build

Scale ingestion from one article to all article markdown files (excluding case studies), complete category indexes, and render article pages with `KeyStats`, `SeeAlso`, `Unexpected`, and sources.

### Acceptance criteria

- [ ] All non-case-study markdown files are transformed into valid collection entries with required frontmatter.
- [ ] Category index pages show correct cards/counts for their article sets.
- [ ] Every `See Also` card points to a real generated article URL.
- [ ] No non-case-study page is a dead end (forward links exist).

### Observable checks

- [ ] Run build and count generated non-case-study article routes in `dist/`.
- [ ] Grep/link-check generated output to confirm `See Also` URLs resolve.
- [ ] Manually sample one article per category and verify stats, TOC/sidebar, sources, and onward links.

---

## Phase 4: Case Study Vertical Slice (Dual Voice + Interactive Blocks)

**User stories**: As a visitor, I can open a case study page, switch between Economist/Nature modes, and use timeline or before/after components.

### What to build

Implement `CaseStudyLayout`, style toggle behavior, and one fully wired case study using dual-body content, stats, thread bar, and one structured visual block (timeline or before/after).

### Acceptance criteria

- [ ] One case study renders with dark header treatment and case-study-specific layout.
- [ ] Style toggle visibly switches between two complete body versions.
- [ ] One structured component (timeline or before/after) is populated and renders correctly.
- [ ] Debate, unexpected insight, and related cards render with valid links.

### Observable checks

- [ ] Manual UI test confirms toggle switches content without page reload.
- [ ] Generated HTML for the case study includes both body variants and structured component markup.
- [ ] Prev/next trail controls behave correctly for the selected trail position.

---

## Phase 5: Complete Case Studies and Trail Integrity Slice

**User stories**: As a visitor, I can traverse all case studies and follow complete trail flows with correct previous/next behavior.

### What to build

Expand from one case study to all case studies, finish trail definitions, apply `ThreadBar` to all trail members, and ensure adjacency logic is correct across full trails.

### Acceptance criteria

- [ ] All case study markdown entries include required case-study metadata and render without fallback errors.
- [ ] Each defined trail includes exactly six valid route targets.
- [ ] `ThreadBar` previous/next links are correct for first, middle, and last positions.
- [ ] Trail navigation never points to missing pages.

### Observable checks

- [ ] Run a route validation script/check confirming every trail target exists in built output.
- [ ] Manually traverse one full 6-step trail using only next/previous controls.

---

## Phase 6: Discovery Slice (Landing, Glossary, Search Overlay at Full Dataset)

**User stories**: As a visitor, I can discover topics from the landing page, search across all articles, and browse glossary terms linked to full articles.

### What to build

Finalize landing and category presentation fidelity to mockups, populate glossary data from `UBIQUITOUS_LANGUAGE.md`, and load search overlay with the full article dataset and stable absolute URLs.

### Acceptance criteria

- [ ] Landing page cards, category sections, and trail CTAs all link to valid routes.
- [ ] Glossary page renders canonical terms and links each entry to a valid article.
- [ ] Search overlay returns relevant results from complete dataset and opens via keyboard shortcut.
- [ ] Internal page footer links (categories, about anchors, privacy, terms) all resolve.

### Observable checks

- [ ] Manual keyboard test: `Ctrl/Cmd+K` opens search, `Escape` closes, result click navigates correctly.
- [ ] Grep built output for `href="#"` and confirm only approved placeholders remain.
- [ ] Manual click path: landing -> category -> article -> see also -> article -> glossary -> landing.

---

## Phase 7: Final Verification and Deployment Slice

**User stories**: As the site owner, I can deploy to GitHub Pages confidently with repeatable build and quality checks.

### What to build

Add GitHub Pages workflow, finalize global motion/accessibility behavior, and execute end-to-end validation checklist for link integrity, route coverage, reduced-motion behavior, and responsive layouts.

### Acceptance criteria

- [ ] `.github/workflows/deploy.yml` builds `site/` and publishes `site/dist` via GitHub Pages actions.
- [ ] Local production build succeeds with zero errors.
- [ ] `prefers-reduced-motion` behavior disables non-essential animations.
- [ ] Responsive behavior is verified at 768px and 480px with usable navigation and readable content.

### Observable checks

- [ ] Run `npm run build` in `site/` and confirm success.
- [ ] Serve `dist/` and verify route count meets target (57+ pages).
- [ ] Inspect one page under reduced-motion preference and confirm animations are suppressed.
- [ ] Capture a short verification log for final handoff (routes sampled, trail tested, search tested).

---

## Sequencing notes

- Keep slices vertical and demoable; do not defer route validation or link integrity entirely to the last phase.
- Enforce a "no dead ends" gate at the end of every phase by checking forward paths.
- Do not move to the next phase unless observable checks for the current phase are green.
