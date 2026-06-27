# Implementation Plan: Climate Finance Wiki v2

**Approach:** Ship incrementally. Each session delivers a working, visible improvement.

---

## Phase 1: Foundation (Sessions 1-2)

### Session 1  -  Astro scaffold + landing page

**Goal:** A working site you can open in the browser with real content.

1. Use the existing Astro project at the project root
2. Configure Astro to read markdown from `wiki/climate-finance/`
3. Add frontmatter to all 48 existing articles (category, slug, summary, connections count, sources, status)
4. Build M5 Premium Reference design system (CSS custom properties from `docs/WIKI_DESIGN_TOKENS.md`, typography, layout primitives)
5. Build landing page matching `mockups/wiki-directions/m5-premium-reference-landing.html`:
   - Dark nav bar with Libre Baskerville title
   - Dark hero section with tagline and CTA
   - Featured articles (3-card grid on warm paper background)
   - Topic grid (6 tiles on alt surface)
   - About section
   - Dark footer
6. Verify: `astro dev` runs, landing page renders with real content

**Deliverable:** Open `localhost:4321`, see a polished Premium Reference landing page with real wiki content.

### Session 2  -  Article pages + navigation

**Goal:** Every article renders as a full page. You can click from landing -> article.

1. Build article page template matching `mockups/wiki-directions/m5-premium-reference-article.html`:
   - Breadcrumb on alt surface
   - Article header (category label, Libre Baskerville title, subtitle, meta) on alt surface
   - Key stats panel overlapping header/body boundary
   - Two-column layout: main content (max 680px) + sticky sidebar (340px)
   - Sienna-bordered callout boxes for key insights
   - See Also section (parsed from wikilinks)
   - Sources section (from frontmatter)
   - Related Terms sidebar with descriptions
2. Build category index pages (Concepts, Instruments, Actors, Frameworks, Case Studies)
3. Convert `[[wikilinks]]` in markdown to working `<a>` links
4. Build sticky nav with category links
5. Verify: Can navigate landing -> category -> article -> linked article

**Deliverable:** Full site navigation works. Every article is a real page.

---

## Phase 2: Stickiness Engine (Sessions 3-4)

### Session 3  -  Story threads + surprising connections

**Goal:** The rabbit-hole experience is live.

1. Create `threads.json` with all 3 launch threads
2. Build thread index page (`/threads/`)
3. Add thread progress bar + "Next in thread ->" CTA to article pages
4. Create `connections.json` with surprising connections for 15-20 key articles
5. Build "You might not expect..." block on article pages
6. Seed `topic-rotation.json` with all 48 articles + teaser text

**Deliverable:** You can follow a thread from start to finish. Articles suggest surprising next reads.

### Session 4  -  Knowledge graph

**Goal:** Interactive graph view is live.

1. Build graph data generator (parse all wikilinks from markdown into nodes + edges JSON)
2. Build full graph page (`/graph`) using D3.js force-directed layout
3. Color-code nodes by category
4. Size nodes by connection count
5. Click node -> preview panel with summary + link
6. Filter controls (by category, by thread)
7. Build mini-graph component for article pages (1-hop neighbourhood)
8. Add graph teaser banner to landing page

**Deliverable:** `/graph` shows all 48 articles as an interactive, clickable network.

---

## Phase 3: Visual Modes + Case Study Enhancements (Sessions 5-6)

### Session 5  -  Style toggle (3 visual modes)

**Goal:** The Editorial / Wikipedia / Magazine toggle works across all pages.

1. Build CSS architecture for 3 modes (CSS class on `<body>`, different layout rules per mode)
2. Editorial mode: generous whitespace, large serif headings, minimal chrome
3. Wikipedia mode (default): sidebar TOC, infoboxes, dense cross-links, reference-style
4. Magazine mode: hero images, pull quotes, feature layouts, visual density
5. Build toggle component in nav (persists choice in localStorage)
6. Test all 3 modes on: landing page, article page, category index, graph page

**Deliverable:** Toggle between 3 distinct visual experiences. Preference persists.

### Session 6  -  Case study dual versions + visual formats

**Goal:** Case studies are the showpiece content.

1. Write Nature longform versions for all 8 case studies (Claude generates, owner reviews)
2. Build Economist/Nature toggle on case study pages
3. Build 3 case study visual templates:
   - Timeline + outcome (for DWS, PG&E, Seychelles)
   - Before/after narrative (for HSBC, ENEL, Lombard Odier)
   - Newspaper front page (for VW Dieselgate, Marfrig)
4. Add controversy/debate sections to relevant case studies

**Deliverable:** Case studies have two reading modes and visually distinct formats.

---

## Phase 4: Automation + Polish (Sessions 7-8)

### Session 7  -  RSS automation + deployment

**Goal:** Site is live on GitHub Pages with auto-updating news.

1. Set up GitHub Action for daily RSS fetch:
   - Sources: Carbon Brief, Bloomberg Green, Climate Home News
   - Parses top headline, matches to most relevant wiki article
   - Commits updated `headlines.json`
   - Triggers site rebuild
2. Configure GitHub Pages deployment (Astro build -> static output)
3. Set up custom domain (if owner has one)
4. Test full pipeline: RSS fires -> headline updates -> site rebuilds

**Deliverable:** Site is publicly accessible. News headline updates daily.

### Session 8  -  Quality pass + content enrichment

**Goal:** Every article meets the publication standard.

1. Audit all 48 articles for:
   - Source attribution (every article has at least 2 sources in frontmatter)
   - Cross-linking density (minimum 3 outbound wikilinks per article)
   - Surprising connections (at least 1 per article in `connections.json`)
   - Summary quality (compelling 1-sentence hook)
2. Add freshness dates to all articles
3. Fill content gaps: identify and write any missing articles that threads/connections reference
4. Final visual polish: responsive testing, accessibility pass, performance audit

**Deliverable:** Publication-ready wiki. Every article sourced, linked, and polished.

---

## Session Summary

| Session | Focus | Key Deliverable |
|---------|-------|-----------------|
| 1 | Astro + landing page | Working site with real content |
| 2 | Article pages + nav | Full site navigation |
| 3 | Threads + connections | Rabbit-hole experience |
| 4 | Knowledge graph | Interactive D3 graph |
| 5 | 3 visual modes | Style toggle works |
| 6 | Case study enhancements | Dual versions + visual formats |
| 7 | RSS + GitHub Pages | Site is live and auto-updating |
| 8 | Quality audit | Publication-ready |

---

## Dependencies & Risks

| Risk | Mitigation |
|------|-----------|
| Astro markdown parsing breaks wikilinks | Custom remark plugin to transform `[[wikilinks]]` -> `<a>` tags |
| D3 graph is heavy on mobile | Lazy-load graph, static fallback image for mobile |
| RSS matching article to headline is imprecise | Manual override in `headlines.json`, Claude can correct |
| Nature longform versions need review | Batch-generate, owner reviews before publish |
| 48 articles need frontmatter added | Script to bulk-add frontmatter from `wiki-status.json` |

---

## What's NOT in this plan (Phase 2 backlog)

- AI-powered search (semantic search across articles)
- Greenwashing detector tool
- Inline footnote source attribution
- Additional story threads beyond the launch 3
- New topic areas (climate tech, nature-based solutions, blended finance)
- Dark mode (Canopy palette as dark mode option)
- Analytics / visitor tracking
