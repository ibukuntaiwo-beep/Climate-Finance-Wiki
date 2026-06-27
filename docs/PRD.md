# Product Requirements Document: Climate Finance Wiki v2

**Owner:** Communications specialist building a public-facing climate finance knowledge base
**Last updated:** 2026-04-17

---

## 1. Product Vision

A public-facing, editorial-quality knowledge base that looks like a publication (FT/Economist), reads like Wikipedia, and feels addictive to browse. Built for communications professionals navigating climate finance  -  no jargon, no fluff, just clarity.

**North star metric:** Stickiness  -  visitors arrive for one article and stay for ten.

---

## 2. Target Audience

Communications professionals who need to:
- Understand climate finance terminology and key players
- Spot greenwashing and contested claims
- Brief clients, executives, or journalists on climate finance topics
- Stay current on climate policy and market developments

**Secondary audience:** Journalists, policy researchers, ESG analysts, and curious professionals seeking a plain-English reference.

---

## 3. Design System

**Direction:** M5  -  Premium Reference (selected 2026-04-17). Part of the Red Barrow brand family.
**Full token reference:** `docs/WIKI_DESIGN_TOKENS.md`
**Mockups:** `mockups/wiki-directions/m5-premium-reference-landing.html` and `m5-premium-reference-article.html`

### 3.1 Palette: "Premium Reference"

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#A65D3F` | Primary accent (sienna)  -  CTAs, active states, emphasis |
| `--color-primary-light` | `#C47A5C` | Highlights, gradients |
| `--color-secondary` | `#4E6F8E` | Slate blue  -  links, data accents, info elements |
| `--color-page-bg` | `#F7F5F2` | Page background (warm paper) |
| `--color-alt-surface` | `#EDEAE5` | Category nav, article headers, alternating sections |
| `--color-dark-surface` | `#2A2520` | Navigation bar, hero sections, footer |
| `--color-card-bg` | `#FFFFFF` | Content cards |
| `--color-text-primary` | `#2A2520` | Headings, primary text on light surfaces |
| `--color-text-secondary` | `#544E49` | Body text |
| `--color-text-muted` | `#6E6964` | Captions, metadata, breadcrumbs |
| `--color-text-on-dark` | `#FAF8F5` | Text on dark surfaces |

### 3.2 Typography

- **Display:** Libre Baskerville (serif)  -  classic editorial authority
- **Body:** DM Sans (sans-serif)  -  warm, approachable readability
- **Data/code:** JetBrains Mono (monospace)  -  shared Red Barrow constant

### 3.3 Visual Identity

- Dark navigation bar with Libre Baskerville title  -  premium first impression
- Layered surfaces: dark nav -> warm paper bg -> white cards -> alt mid-tone sections
- Borderless white cards floating on warm backgrounds with deep shadows
- Sienna-tinted callout boxes with 3px left-border treatment for key insights
- Uppercase tracked labels as section markers (Red Barrow house style)
- Key stats panels using JetBrains Mono with negative-margin overlap effect
- Progressive density: landing is sparse, articles are comfortable, case studies are data-rich

### 3.4 Visual Modes (Future)

Three layout modes remain planned for a future phase. All share the Premium Reference palette  -  the toggle changes layout density, not color.

| Mode | Default? | Layout | Density |
|------|----------|--------|---------|
| **Editorial** | No | Clean, minimal, generous whitespace | Low  -  content-first |
| **Wikipedia** | Yes | Sidebar TOC, infoboxes, dense cross-links | Medium  -  reference-style |
| **Magazine** | No | Hero images, pull quotes, feature layouts | High  -  visual impact |

---

## 4. Information Architecture

### 4.1 Site Structure

```
/                           -> Landing page (magazine-style)
/concepts/                  -> Category index
/concepts/[slug]            -> Article page
/instruments/               -> Category index
/instruments/[slug]         -> Article page
/actors/                    -> Category index
/actors/[slug]              -> Article page
/frameworks/                -> Category index
/frameworks/[slug]          -> Article page
/case-studies/              -> Category index
/case-studies/[slug]        -> Article page
/graph                      -> Full knowledge graph view
/threads/                   -> Story threads index
/threads/[slug]             -> Guided reading path
```

### 4.2 Content Inventory (at launch)

| Category | Count | Status |
|----------|-------|--------|
| Concepts | 12 | Written |
| Instruments | 6 | Written |
| Actors | 9 | Written |
| Frameworks | 13 | Written |
| Case Studies | 8 | Written |
| **Total** | **48** | |

### 4.3 Article Schema

Every article markdown file includes this frontmatter:

```yaml
---
title: "Green Bonds"
slug: green-bonds
category: instruments
summary: "Fixed-income instruments earmarked for climate and environmental projects."
connections: 9            # count of outbound wikilinks
sources:
  - label: "CFA Climate Finance, Module 3"
    type: course
  - label: "ICMA Green Bond Principles, 2021"
    type: report
    url: "https://..."
last_reviewed: 2026-04-03
status: published         # draft | reviewed | published
thread: follow-the-money  # optional, if part of a story thread
thread_order: 2           # position in thread
style_variants:
  - economist             # only for case studies
  - nature-longform       # only for case studies
---
```

---

## 5. Landing Page

Magazine-style layout with three entry points, optimised for stickiness.

### 5.1 Layout

```
+-------------------------------------------------+
|  NAV: Logo | Categories | Graph | [Style Toggle] |
+-------------------------------------------------+
|  MASTHEAD: Title + date + stats                  |
+------------------------+------------------------+
|  FEATURED CASE STUDY   |  Topic of the Day      |
|  (hero, 60% width)     |  --------------------  |
|  Pull-quote + lede     |  In the News           |
|  Read more ->           |  (headline + link)     |
+------------------------+------------------------+
|  STORY THREADS: 3 horizontal cards              |
+-------------------------------------------------+
|  LATEST ARTICLES: 4-column newspaper grid       |
+-------------------------------------------------+
|  KNOWLEDGE GRAPH: Teaser banner with preview    |
+-------------------------------------------------+
|  FOOTER                                          |
+-------------------------------------------------+
```

### 5.2 Entry Point Details

**Featured Case Study** (rotates from `headlines.json`)
- Tag: "Featured Case Study"
- Large serif headline
- Pull-quote lede (italic, coral left-border)
- Brief paragraph + "Read the full case study ->"

**Topic of the Day** (curated rotation)
- Draws from `topic-rotation.json`  -  a list of article slugs with teaser text
- Rotates daily based on date (deterministic, no randomness)

**In the News** (auto-updated via GitHub Action)
- Headline + source + date + "Read & explore linked topics ->"
- Links to the most relevant wiki article
- Updated daily from RSS feeds (Carbon Brief, Bloomberg Green, etc.)
- Stored in `headlines.json`, committed by GitHub Action

---

## 6. Stickiness Engine

### 6.1 Surprising Connections

After the "See Also" section of each article, display a "You might not expect..." block:

- 2-3 non-obvious connections to other articles
- Each with a 1-sentence provocative teaser
- Example: On the "Green Bonds" page: *"Green bonds sound clean  -  but the Volkswagen Dieselgate scandal shows how even certified instruments can hide dirty secrets ->"*

These are hand-curated in article frontmatter or a separate `connections.json`.

### 6.2 Story Threads

Guided, sequential reading paths  -  like a Netflix series.

**Launch threads:**

1. **The Greenwashing Trail** (6 articles)
   Greenwashing -> Greenwashing Typology -> VW Dieselgate -> HSBC Greenwashing -> DWS SEC Fine -> Climate Litigation

2. **Follow the Money** (6 articles)
   Climate Finance -> Green Bonds -> The Greenium -> Sustainability-Linked Bonds -> ENEL's SLB -> Carbon Offsets

3. **The Architecture of Climate Policy** (6 articles)
   Paris Agreement -> UNFCCC and COP -> EU Taxonomy -> TCFD -> IFRS S1 and S2 -> CSRD

**Thread UX:**
- Each article in a thread shows a progress bar and "Next in thread ->" CTA
- Thread index page shows all threads with article count and estimated read time
- Articles can belong to multiple threads

### 6.3 Controversy Maps

Select articles include a "The Debate" section:
- Framed as a balanced summary of competing views
- Names real actors and their positions
- Links to related articles that explore each side
- Example: Carbon Offsets -> "Miracle or scam? The offset debate has real-world stakes..."

---

## 7. Case Study Enhancements

### 7.1 Dual Content Versions (Case Studies Only)

Each case study has two written versions:

| Style | Tone | Structure |
|-------|------|-----------|
| **Economist** | Analytical, crisp, opinionated | Thesis -> evidence -> implications. Short paragraphs. |
| **Nature longform** | Narrative, immersive, story-driven | Scene-setting -> characters -> escalation -> aftermath. |

Toggle between them via a subtle switch at the top of the article.

### 7.2 Visual Formats (Vary Per Case Study)

| Case Study | Format |
|------------|--------|
| VW Dieselgate | Newspaper front page (breaking news style) |
| HSBC Greenwashing | Before/after narrative (claims vs. reality) |
| DWS SEC Fine | Timeline + outcome (regulatory sequence) |
| PG&E Bankruptcy | Timeline + outcome (climate risk cascade) |
| ENEL SLB | Before/after (promise vs. performance) |
| Marfrig Transition Bond | Newspaper front page (emerging market angle) |
| Seychelles Blue Bond | Timeline + outcome (innovation narrative) |
| Lombard Odier | Before/after (traditional vs. climate lens) |

---

## 8. Knowledge Graph

### 8.1 Full Graph View (`/graph`)

- Interactive force-directed graph using D3.js or similar
- Nodes = articles, sized by connection count
- Edges = wikilinks between articles
- Color-coded by category
- Click a node -> preview panel -> link to article
- Filter by category, thread, or search

### 8.2 Mini-Graph (Per Article)

- Small graph on each article page showing that article's immediate neighbourhood
- 1-hop connections only
- Clickable nodes

### 8.3 Landing Page Teaser

- Static/animated preview of the graph
- "Explore the Knowledge Graph ->" CTA
- Shows node count and edge count

---

## 9. Source Transparency

Every factual claim in the wiki should be traceable.

### 9.1 Article-Level Sources

- Listed in frontmatter and rendered in a "Sources" footer section
- Each source has: label, type (course/report/article/data), optional URL

### 9.2 Inline Attribution (Phase 2)

- Key claims link to their specific source via footnote-style markers
- Hover to see source preview

---

## 10. Data Files

### 10.1 `topic-rotation.json`

```json
[
  {
    "slug": "stranded-assets",
    "teaser": "Why $1.4 trillion in fossil fuel reserves may never be burned."
  },
  ...
]
```

### 10.2 `headlines.json`

```json
{
  "updated": "2026-04-14",
  "headline": "EU Carbon Border Tax Takes Effect",
  "source": "Carbon Brief",
  "url": "https://...",
  "linked_article": "cap-and-trade",
  "summary": "CBAM begins charging importers  -  a landmark for global carbon pricing."
}
```

### 10.3 `threads.json`

```json
[
  {
    "slug": "greenwashing-trail",
    "title": "The Greenwashing Trail",
    "description": "From misleading claims to criminal charges.",
    "articles": ["greenwashing", "greenwashing-typology", "volkswagen-dieselgate", "hsbc-greenwashing", "dws-sec-fine", "climate-litigation"]
  },
  ...
]
```

### 10.4 `connections.json`

```json
{
  "green-bonds": [
    {
      "target": "volkswagen-dieselgate",
      "teaser": "Green bonds sound clean  -  but Dieselgate shows how even certified instruments can hide dirty secrets."
    }
  ],
  ...
}
```

---

## 11. Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Astro | Built for content sites, reads markdown directly, fast static output |
| Styling | CSS (custom properties) | No build-step dependency, full control over editorial design |
| Graph | D3.js (client-side island) | Best-in-class force-directed graphs |
| RSS | GitHub Action (daily cron) | Free, auto-commits headlines.json |
| Hosting | GitHub Pages | Free, CDN-backed, custom domain support |
| Local dev | `astro dev` | Hot reload, instant preview |
| Content source | Existing markdown files in `wiki/` | No migration needed |

---

## 12. Non-Goals (Out of Scope)

- User accounts or authentication
- Comments or community features
- CMS dashboard or admin panel
- AI-powered search (Phase 2)
- Greenwashing detector tool (Phase 2)
- Multi-language support
- Mobile app
