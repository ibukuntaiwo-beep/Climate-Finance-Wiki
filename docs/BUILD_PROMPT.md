# Build Prompt  -  Climate Finance Wiki (Astro + GitHub Pages)

> Paste this entire document as your opening prompt in a new Claude Code session.
> Working directory: `C:\Users\pusko\Downloads\Personal Projects\Websites\climate-finance-wiki`

---

## What you're building

A complete, working static website for a Climate Finance Wiki, built with **Astro** and deployed to **GitHub Pages**. Every page must render in a browser, every link must resolve to a real page, and every page must offer at least one clear path forward (no dead ends).

Astro is the build tool. The visual design is already locked  -  six finalized HTML mockups define every pixel. Your job is to faithfully translate those mockups into Astro components, layouts, and pages, then populate them with real content from the wiki markdown files.

---

## What already exists

### Finalized mockups (the visual source of truth)
Six production-grade HTML mockups in `mockups/` define every page type. **Read every mockup file before writing any code.** They contain the exact CSS, HTML structure, JS behavior, and content patterns you must reproduce.

| Mockup file | Template for | Pages |
|-------------|-------------|-------|
| `mockups/landing-page-final.html` | Landing / home page | 1 |
| `mockups/category-page-final.html` | Category index pages | 5 |
| `mockups/article-page-final.html` | Article pages | 41 |
| `mockups/case-study-page-final.html` | Case study pages | 8 |
| `mockups/glossary-page-final.html` | Glossary | 1 |
| `mockups/about-page-final.html` | About page + search overlay | 1 |

### Content source files
- `wiki/climate-finance/*.md`  -  49 wiki articles in Markdown (the body content for every article and case study page)
- `wiki/climate-finance/_index.md`  -  Master article index with categories and one-line descriptions
- `UBIQUITOUS_LANGUAGE.md`  -  Canonical glossary (30 terms with definitions and categories)

### Design system docs (read for context, don't re-implement  -  the mockups already encode these)
- `docs/WIKI_DESIGN_TOKENS.md`  -  CSS variables, typography, spacing, colors
- `docs/BRAND_STYLE_GUIDE.md`  -  Brand principles
- `docs/WIKI_PAGE_LOGIC.md`  -  Behavioral specs for all page types

---

## Astro project structure

The Astro project now lives at this project root. Do not create a nested `site/` directory.

```
climate-finance-wiki/
├── astro.config.mjs
├── package.json
├── public/
├── src/
│   ├── styles/global.css
│   ├── components/
│   ├── layouts/
│   ├── content/
│   ├── data/
│   ├── lib/
│   └── pages/
├── wiki/
├── raw/
├── mockups/
├── promo/
└── docs/
```

---

## Step-by-step build order

### Step 1: Initialize Astro project

```bash
cd "C:\Users\pusko\Downloads\Personal Projects\Websites\climate-finance-wiki"
# Already at the Climate Finance Wiki project root
npm create astro@latest . -- --template minimal --no-install
npm install
```

In `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/REPO_NAME',
  output: 'static',
  build: {
    format: 'directory'
  }
});
```

Use placeholder values for `site` and `base`  -  the owner will fill these in when they set up the GitHub repo.

### Step 2: Extract global CSS

Read ALL 6 mockup files. Extract every CSS rule into `src/styles/global.css`. Organize it:

1. **CSS custom properties** (`:root` block  -  from any mockup, they're identical)
2. **Reset and base** (`*, html, body`)
3. **Typography** (display headings, body text, mono, labels)
4. **Nav styles** (from landing-page-final.html  -  the canonical dark nav)
5. **Breadcrumb styles**
6. **Footer styles** (both landing dark footer AND internal 3-column light footer)
7. **Search overlay styles** (from about-page-final.html)
8. **Card styles** (floating cards, article cards, category cards, see-also cards)
9. **Stats panel styles**
10. **Callout box styles**
11. **Thread bar styles**
12. **Timeline styles** (from case-study-page-final.html)
13. **Article body styles** (from article-page-final.html  -  h2, p, wikilinks, TOC)
14. **Case study styles** (dark header, style toggle, debate card, surprise card)
15. **Glossary styles** (from glossary-page-final.html  -  two-column, letter headers, search)
16. **Category page styles** (from category-page-final.html  -  editorial cards, sidebar boxes)
17. **Animations** (`@keyframes fadeUp`, `.reveal` classes, stagger delays)
18. **Accessibility** (`:focus-visible`, `prefers-reduced-motion`)
19. **Responsive breakpoints** (consolidate all media queries)

Import this in `BaseLayout.astro`:
```astro
<style is:global>
  @import '../styles/global.css';
</style>
```

Or use a `<link>` tag to a public CSS file  -  whichever keeps the build cleaner.

### Step 3: Build shared components

Read each mockup and extract the reusable HTML into Astro components. Each component accepts props for its variable content.

**Nav.astro**  -  Props: `activePage?: 'topics' | 'about' | 'explore'`
- Extract from landing-page-final.html
- Dark bar, 64px height, RED BARROW wordmark, search icon triggers overlay
- Search icon has `id="searchToggle"` for JS binding

**FooterLanding.astro**  -  No props
- Dark footer from landing-page-final.html
- Used only on the landing page

**FooterInternal.astro**  -  No props
- 3-column light footer (from about-page-final.html / category-page-final.html)
- Categories: Concepts, Instruments, Actors, Frameworks, Case Studies (linked to category index pages)
- Wiki: About this project, How to use the wiki, Knowledge Graph (#), Contact (all link to about.astro with anchors)
- Bottom: copyright, Privacy, Terms

**SearchOverlay.astro**  -  Props: none (search data loaded via script)
- Extract from about-page-final.html
- Hardcode ALL 49 articles in the search dataset with correct URLs
- Ctrl/Cmd+K opens it, Escape closes it, backdrop click closes it
- Results show: category badge, title, description
- All result links must use correct relative paths from the current page  -  since Astro builds static HTML, use absolute paths from site root (e.g., `/concepts/green-bonds/`)

**Breadcrumbs.astro**  -  Props: `items: Array<{label: string, href?: string}>`
- Last item has no href (current page)
- Separator: `->`

**KeyStats.astro**  -  Props: `stats: Array<{value: string, label: string}>`
- White card, JetBrains Mono numbers, grid layout
- Negative margin overlap from header

**Callout.astro**  -  Props: `label: string` (e.g., "COMMS INSIGHT"), default slot for content
- Sienna left border, subtle background

**ThreadBar.astro**  -  Props: `trailName: string, current: number, total: number, prevHref?: string, nextHref?: string`
- Progress dots, previous/next links
- First article: prev disabled. Last article: next disabled.

**SeeAlso.astro**  -  Props: `articles: Array<{title: string, category: string, description: string, href: string}>`
- Card grid with hover lift

**Unexpected.astro**  -  Props: `headline: string`, default slot for body
- "YOU MIGHT NOT EXPECT" label, sienna left border

**StyleToggle.astro**  -  No props (JS handles state)
- Two buttons: Economist / Nature
- Toggles visibility of two body sections

**Timeline.astro**  -  Props: `events: Array<{year: string, description: string}>`
- Vertical line, sienna dots, year labels

**BeforeAfter.astro**  -  Props: `before: string[], after: string[]`
- Two-column comparison

### Step 4: Build layouts

**BaseLayout.astro**  -  Props: `title: string, description?: string, footerType?: 'landing' | 'internal'`
- HTML doctype, head with Google Fonts, meta viewport, title
- Global CSS import
- `<slot />` for page content
- Conditional footer (landing vs internal)
- SearchOverlay component (on every page)
- Shared JS: nav scroll shadow (requestAnimationFrame), IntersectionObserver for `.reveal` elements, search overlay open/close

**ArticleLayout.astro**  -  extends BaseLayout
- Props: `title, subtitle, category, categorySlug, stats, tocSections, trail?, seeAlso, unexpected?, sources`
- Breadcrumbs -> KeyStats -> two-column grid (main + sticky sidebar TOC)
- Thread bar (if `trail` prop provided)
- TOC with active section tracking (IntersectionObserver JS)
- SeeAlso and Unexpected blocks after main content
- Sources section

**CaseStudyLayout.astro**  -  extends BaseLayout
- Props: `title, subtitle, stats, trail?, timeline?, beforeAfter?, debate, seeAlso, unexpected, sources`
- Dark header (extends from nav), CASE STUDY label, breadcrumbs on dark surface
- Stats panel with negative margin overlap
- Style toggle
- Slots for `economist` and `nature` body content
- Timeline or BeforeAfter component
- Debate card (white card, slate blue top border)
- ThreadBar, Unexpected, SeeAlso, Sources

**CategoryLayout.astro**  -  extends BaseLayout
- Props: `categoryName, description, articleCount, connectionCount, articles, foundational?, sidebarCategories, connectionMap, glossaryTerms`
- Category header with label, title, description, meta counts
- Photo banner (use Unsplash images  -  different per category)
- Two-column: main (article cards) + sticky sidebar
- Sidebar: Related Categories, Connection Map, Quick Glossary

**SimpleLayout.astro**  -  extends BaseLayout
- Props: `title`
- Single centered column, max-width 680px
- For Privacy, Terms pages

### Step 5: Set up content collections

Create `src/content/config.ts`:
```ts
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.enum(['concepts', 'instruments', 'actors', 'frameworks', 'case-studies']),
    type: z.enum(['article', 'case-study']).default('article'),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
    seeAlso: z.array(z.object({
      title: z.string(),
      category: z.string(),
      description: z.string(),
      slug: z.string()
    })),
    unexpected: z.object({
      headline: z.string(),
      body: z.string()
    }).optional(),
    sources: z.array(z.string()),
    caseStudy: z.object({
      visualFormat: z.enum(['timeline', 'before-after']).optional(),
      timeline: z.array(z.object({ year: z.string(), description: z.string() })).optional(),
      before: z.array(z.string()).optional(),
      after: z.array(z.string()).optional(),
      debate: z.string().optional()
    }).optional()
  })
});

export const collections = { articles };
```

**Copy and transform wiki markdown files** into `src/content/articles/`. Each wiki file (`wiki/climate-finance/xyz.md`) becomes `src/content/articles/xyz.md` with YAML frontmatter added. The existing body content stays as-is.

For each article, read the wiki markdown and add frontmatter:
```yaml
---
title: "Green Bonds"
subtitle: "The most popular tool in green finance  -  and the most debated."
category: "instruments"
type: "article"
stats:
  - { value: "$5.4T", label: "Cumulative issuance" }
  - { value: "2014", label: "First principles" }
  - { value: "4", label: "Pillars" }
  - { value: "8", label: "Connected articles" }
seeAlso:
  - { title: "The Greenium", category: "Instruments", description: "The market premium for credible green labelling.", slug: "the-greenium" }
  - { title: "Sustainability-Linked Bonds", category: "Instruments", description: "When the issuer's entire performance is on the line.", slug: "sustainability-linked-bonds" }
  # ... more
unexpected:
  headline: "The coal company green bond paradox"
  body: "A coal company can issue a compliant green bond for a solar project while continuing to burn coal at full capacity."
sources:
  - "CFA Institute Climate Finance Certificate course materials"
  - "ICMA Green Bond Principles (2021)"
---

(existing markdown body content here, with [[wikilinks]] preserved)
```

For case studies, add the `caseStudy` field with timeline/before-after data and debate text.

### Step 6: Create data files

**`src/data/categories.ts`:**
```ts
export const categories = [
  {
    slug: 'concepts',
    name: 'Concepts',
    description: 'The foundational ideas behind climate finance  -  risk, value, accountability, and the gap between ambition and action.',
    foundational: ['climate-finance'],
    photo: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'instruments',
    name: 'Instruments',
    description: 'The financial products designed to fund climate action  -  and the loopholes they sometimes create.',
    foundational: ['green-bonds'],
    photo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'actors',
    name: 'Actors',
    description: 'The institutions, coalitions, and individuals shaping how climate finance works  -  and who it works for.',
    foundational: [],
    photo: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'frameworks',
    name: 'Frameworks',
    description: 'The agreements, taxonomies, and disclosure standards that set the rules for climate finance.',
    foundational: ['paris-agreement'],
    photo: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1400&q=80'
  },
  {
    slug: 'case-studies',
    name: 'Case Studies',
    description: 'Real-world stories of climate finance in action  -  what happened, who was involved, and what the consequences were.',
    foundational: [],
    photo: 'https://images.unsplash.com/photo-1504711434969-e33886168d5c?auto=format&fit=crop&w=1400&q=80'
  }
];
```

**`src/data/trails.ts`:**
```ts
export const trails = [
  {
    name: 'The Greenwashing Trail',
    tagline: 'From misleading claims to criminal charges.',
    articles: [
      { slug: 'greenwashing', category: 'concepts' },
      { slug: 'greenwashing-typology', category: 'concepts' },
      { slug: 'volkswagen-dieselgate', category: 'case-studies' },
      { slug: 'hsbc-greenwashing', category: 'case-studies' },
      { slug: 'dws-sec-fine', category: 'case-studies' },
      { slug: 'climate-litigation', category: 'concepts' }
    ]
  },
  {
    name: 'Follow the Money',
    tagline: 'How climate finance actually flows  -  and where it gets stuck.',
    articles: [
      { slug: 'climate-finance', category: 'concepts' },
      { slug: 'green-bonds', category: 'instruments' },
      { slug: 'the-greenium', category: 'instruments' },
      { slug: 'sustainability-linked-bonds', category: 'instruments' },
      { slug: 'enel-slb', category: 'case-studies' },
      { slug: 'carbon-offsets', category: 'instruments' }
    ]
  },
  {
    name: 'Architecture of Climate Policy',
    tagline: 'The agreements, taxonomies, and standards that set the rules.',
    articles: [
      { slug: 'paris-agreement', category: 'frameworks' },
      { slug: 'unfccc-and-cop', category: 'actors' },
      { slug: 'eu-taxonomy', category: 'frameworks' },
      { slug: 'tcfd', category: 'frameworks' },
      { slug: 'ifrs-s1-s2', category: 'frameworks' },
      { slug: 'csrd', category: 'frameworks' }
    ]
  }
];
```

### Step 7: Wikilink resolver

Create `src/lib/wikilinks.ts`  -  a utility that maps `[[Display Text]]` to the correct site URL:

```ts
// Map of canonical article titles (and common variants) -> { category, slug }
const wikiLinkMap: Record<string, { category: string, slug: string }> = {
  'Climate Finance': { category: 'concepts', slug: 'climate-finance' },
  'Green Bonds': { category: 'instruments', slug: 'green-bonds' },
  'Greenwashing': { category: 'concepts', slug: 'greenwashing' },
  'Greenwashing Typology': { category: 'concepts', slug: 'greenwashing-typology' },
  'TCFD': { category: 'frameworks', slug: 'tcfd' },
  'Paris Agreement': { category: 'frameworks', slug: 'paris-agreement' },
  'Mark Carney and the Tragedy of the Horizon': { category: 'actors', slug: 'mark-carney' },
  'Mark Carney': { category: 'actors', slug: 'mark-carney' },
  // ... map ALL 49 articles including variant names from wikilinks
};

export function resolveWikilink(text: string): string | null {
  const entry = wikiLinkMap[text];
  if (!entry) return null;
  return `/${entry.category}/${entry.slug}/`;
}
```

The body markdown uses `[[wikilinks]]`. You need a **remark plugin** to transform these during Astro's markdown processing. Create `src/lib/remark-wikilinks.ts`:

```ts
// A remark plugin that transforms [[Link Text]] and [[Link Text|Display Text]]
// into <a class="wikilink" href="/category/slug/">Display Text</a>
```

Register the plugin in `astro.config.mjs`:
```js
import remarkWikilinks from './src/lib/remark-wikilinks';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkWikilinks]
  }
});
```

**Build the COMPLETE wikilink map** by reading ALL 49 wiki markdown filenames and titles. Include common variants used in wikilinks across articles (e.g., `[[Mark Carney and the Tragedy of the Horizon|Mark Carney]]`, `[[IFRS S1 and S2|ISSB]]`, `[[Adaptation vs Mitigation]]`, `[[Net Zero vs Carbon Neutral]]`, `[[GHG Protocol]]`, `[[GHG Scopes]]`, etc.).

To build this map: grep all wiki markdown files for `\[\[` patterns to find every wikilink variant used, then map each to the correct slug.

### Step 8: Build pages

**`src/pages/index.astro`**  -  Landing page
- Extract HTML structure from `mockups/landing-page-final.html`
- Use `BaseLayout` with `footerType="landing"`
- Wire all links: hero CTA, floating cards, trail article names, category cards, category article names, trail "Start" CTAs
- All links use absolute paths from site root (e.g., `/case-studies/hsbc-greenwashing/`)

**`src/pages/[category]/index.astro`**  -  Category pages (or 5 separate files, one per category)
- Query the content collection for articles in this category
- Use `CategoryLayout`
- For each article: title, subtitle (from frontmatter), connection count, foundational badge if applicable
- Sidebar: other categories with article counts, connection map, glossary terms

**`src/pages/[category]/[slug].astro`**  -  Article pages
- `getStaticPaths()` returns all articles
- Use `ArticleLayout` for type `article`, `CaseStudyLayout` for type `case-study`
- Render markdown body with wikilink resolution
- Look up trail membership from `trails.ts` and pass to ThreadBar
- Pass frontmatter data (stats, seeAlso, unexpected, sources) to layout

**`src/pages/glossary.astro`**  -  Glossary
- Extract from mockup, populate with terms from `UBIQUITOUS_LANGUAGE.md`
- Each term links to its article page
- Client-side search/filter JS

**`src/pages/about.astro`**  -  About page
- Extract from mockup
- Active state on About nav link
- Real content (already written in the mockup)

**`src/pages/privacy.astro`** and **`src/pages/terms.astro`**
- SimpleLayout, placeholder body text

### Step 9: Case study dual-version content

Each case study needs TWO versions of its body text (Economist and Nature). Options:

**Option A (recommended):** In the case study markdown frontmatter, include the full text for both versions:
```yaml
caseStudy:
  economistBody: |
    In September 2015, the EPA issued a notice...
  natureBody: |
    The engineers in Wolfsburg had a problem...
```
The `[slug].astro` page renders both inside toggled divs. The existing markdown body can be used for one version, and the frontmatter carries the other.

**Option B:** Use two separate markdown files per case study (`volkswagen-dieselgate.md` and `volkswagen-dieselgate-nature.md`). More complex routing.

Go with Option A. For the 4 case studies that don't have pre-written dual versions in the mockups (HSBC, DWS, Marfrig, Lombard Odier), write both versions by reading the wiki markdown and adapting it into the two styles:
- **Economist style:** Data-forward, tight paragraphs, ~400 words. Structure: What happened -> mechanism -> response -> precedent.
- **Nature style:** Narrative, immersive, ~600 words. People, places, moments, then consequences.

---

## Link integrity rules

1. **Every `[[wikilink]]` in every article must resolve** via the remark plugin to a real page URL
2. **Every nav link must work**  -  Topics (-> landing page `#categories` or just `/`), About (-> `/about/`), Explore (-> `#` placeholder), Search (-> overlay)
3. **Every footer link must work**  -  categories -> `/[category]/`, About/How to use/Contact -> `/about/` or `/about/#section`, Knowledge Graph -> `#`, Privacy -> `/privacy/`, Terms -> `/terms/`
4. **Every See Also card** -> real article URL
5. **Every thread bar Previous/Next** -> correct adjacent article in the trail
6. **Every breadcrumb** -> Home = `/`, Category = `/[category]/`
7. **Every glossary "Read full article ->"** -> correct article URL
8. **No dead ends**  -  every page has nav, breadcrumbs, footer, and content-specific forward links

---

## GitHub Pages deployment

Add a GitHub Actions workflow at `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        working-directory: .
        run: npm ci
      - name: Build
        working-directory: .
        run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## What NOT to do

- Do not change the visual design. The mockups are locked  -  extract their CSS faithfully.
- Do not invent article content. Body text comes from `wiki/climate-finance/*.md`.
- Do not add features, pages, or sections not specified here.
- Do not use any CSS framework (Tailwind, etc.). The design system is custom.
- Do not use `lorem ipsum` anywhere.
- Do not skip the search overlay on any page.
- Do not create any page without nav and footer.
- Do not use SSR mode. Output must be fully static (`output: 'static'`).

---

## Session-close checklist

When you're done building:

1. Run `npm run build` in the project root  -  it must succeed with zero errors
2. Run `npx serve dist` (or similar) and open in browser
3. Count generated HTML files in `dist/`  -  should be 57+ pages
4. Click through one full path: landing -> category -> article -> See Also -> article -> glossary -> landing
5. Verify search overlay works (Ctrl+K) with results linking to real pages
6. Verify one trail end-to-end (all 6 Previous/Next links resolve)
7. Grep the `dist/` directory for `href="#"`  -  only Explore/Knowledge Graph should remain as `#`
8. Verify `prefers-reduced-motion` disables animations
9. Test at 768px and 480px viewport widths  -  responsive layout must work
