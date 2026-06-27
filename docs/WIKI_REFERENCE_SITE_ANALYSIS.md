# Reference Site Analysis — Climate Finance Wiki

> Design principles extracted from three editorial/knowledge sites.
> Written for a non-designer. Concrete, not poetic.
> **Date:** 2026-04-17

---

## CFR.org (Council on Foreign Relations)

### What it does unusually well

1. **The Backgrounder format is the closest analogue to what we're building.** Each backgrounder is a self-contained explainer on a single policy topic, broken into ~10 named chapters with a sticky table of contents. This is exactly the right structural model for a climate finance wiki article — not a blog post, not an encyclopedia dump, but a chaptered explainer.

2. **Sticky in-article navigation.** CFR articles have a persistent nav element that follows you as you scroll, showing where you are in the article's chapter structure. For a 3,000-word article on economic sanctions with 10 sections, this is the difference between "I'll read this later" and actually reading it.

3. **Inline attribution instead of footnotes.** Sources are woven into the text as hyperlinks rather than numbered footnotes. This keeps the reading flow unbroken while still being verifiable. For a comms professional who needs to brief someone quickly, this is better than academic-style citations.

4. **Topic and region taxonomy as primary navigation.** The top nav is organized by Regions and Topics — the two axes that policy professionals actually think along. This is a transferable principle: our wiki should be navigable by the axes comms professionals actually use (concept type, policy area, actor type).

5. **Expert bylines with photos and credentials.** Every piece shows who wrote it and what their institutional authority is. This is a credibility device that costs nothing but signals everything.

### What's transferable

- The chaptered article structure with sticky table of contents
- Inline hyperlinks as both citation and cross-referencing
- Sans-serif body type (SeasonSans) for a modern, non-academic tone
- Expert/source attribution as a visible trust signal
- Moderate whitespace — not magazine-loose, not newspaper-dense
- "Recommended Resources" section at article end (maps to our "See Also")

### What should NOT be copied

- **The backgrounder index page is awful.** 1,004 results across 42 pages with no filtering, no categorization, no images, no summaries. Just titles and dates. Our wiki cannot have a category page this barren — it needs to show summaries, connection counts, and visual hierarchy between foundational and advanced articles.
- **No visual variety within articles.** CFR backgrounders are text-heavy with minimal use of diagrams, charts, or callout boxes. Climate finance concepts (like how a green bond works, or how carbon markets flow) need visual explanation — process diagrams, comparison tables, data panels.
- **Dark theme homepage.** CFR's dark-mode homepage signals "serious news operation," but for a knowledge wiki that people browse during work hours alongside other tabs, a warm light surface (which we've already chosen with `#F7F5F2`) is more functional and less fatiguing.

---

## The New Yorker (newyorker.com)

### What it does unusually well

1. **The narrow reading column.** Article body text sits in a ~595px column (about 57 characters per line), occupying only 43% of the viewport. The remaining space is intentional emptiness. This is the single most impactful reading UX decision on the site — it controls eye movement and reduces fatigue on long pieces. Our design tokens already set main column max-width at 680px, which is in the right range.

2. **The rubric system.** Every article carries a rubric label — not a generic category but a named editorial franchise: "Annals of Education," "Letter from the U.K.," "A Critic at Large." These prime the reader's expectations before they read a word. Our wiki's category labels (CONCEPTS, INSTRUMENTS, ACTORS, FRAMEWORKS, CASE STUDIES) serve the same function.

3. **Typography as the entire identity.** The New Yorker uses five typefaces, each with an exact job. The signature IrvinHeadingPro display face does more brand work than any logo or color. Our choice of Libre Baskerville as the display serif is the right instinct — it's doing the same job: signaling editorial authority through type, not decoration.

4. **The dek (subtitle) as a framing device.** Below every headline sits an italic summary that tells you the thesis before you enter the piece. This isn't SEO metadata — it's editorial compression. Our articles should have this: a one-sentence "so what" beneath the title that tells a comms professional whether this article answers their question.

5. **Section breaks as reading rhythm.** Long articles use horizontal rules every 400-600 words, creating chapter-like breaks. The examined article had 5 breaks in ~4,000 words. This is a practical pattern for wiki explainers that run 1,500-3,000 words.

6. **Visual restraint as brand.** The color palette is essentially black, white, and one red. No gradients, no secondary colors in the UI. The content is the interface. This level of restraint is hard to pull off but is what makes it feel premium.

### What's transferable

- Narrow body column (550-680px) for sustained reading
- Generous line-height (1.5x body font size)
- Full-line paragraph spacing (margin equal to font size)
- Drop caps or similar ceremonial entry points for important articles
- The subtitle/dek as editorial framing, not just metadata
- Section breaks at regular intervals in long content
- The rubric/category label as a small, distinct typographic element above the headline

### What should NOT be copied

- **The magazine-as-homepage model.** The New Yorker homepage is a curated daily editorial experience — a vertical scroll through 14+ sections of picked content. A wiki homepage needs to be a stable table of contents, not a rotating editorial selection. Our visitors arrive looking for a specific topic, not to browse today's picks.
- **No in-article navigation.** New Yorker articles have no table of contents, no anchor links, no "jump to section." For a 2,000-word explainer on the EU Taxonomy, this would be a usability failure. Our articles need scannable structure.
- **Author-centric navigation.** Magazine readers follow writers. Wiki readers follow topics. Our navigation should be concept-first, not author-first.
- **No cross-referencing infrastructure.** No "See Also" sidebars, no related-concept callouts, no glossary tooltips. The New Yorker links inline to its own coverage, but that's it. Our wiki's entire value depends on visible connections between articles — the knowledge graph, wikilinks, "You might not expect" blocks.
- **Decoration over explanation.** New Yorker illustrations are beautiful and editorial — they set mood, not convey information. Our visuals need to explain things: process diagrams, comparison tables, flow charts.

---

## Colossus.com (Invest Like the Best)

### What it does unusually well

1. **Progressive disclosure on content pages.** Podcast episode pages follow a strict layering: title → topic tags → summary → table of contents → show notes (collapsible) → full transcript with chapter headings. This is the best model I've seen for serving both casual browsers and deep researchers from the same page. Our wiki articles should follow this same pattern: headline → key stats → summary → body → sources → related content.

2. **Topic pills as a taxonomy device.** Each episode is tagged with small, uppercase, light-gray rounded pills: "Aerospace & Defense," "Business Building," "Public Equity." These are scannable, non-intrusive, and create multiple navigation axes. This maps directly to our wiki: an article on Green Bonds could carry pills for INSTRUMENTS, CARBON MARKETS, EU POLICY.

3. **Consistent title patterns.** Colossus uses "Company: Descriptive Subtitle" — e.g., "HEICO: Parts for Planes." This gives you the subject and the angle in six words. Our wiki should adopt a similar discipline: "Green Bonds: How They Work and Why They Matter" or "EU Taxonomy: The Classification System Behind Green Finance."

4. **The serif/sans-serif pairing for editorial credibility.** Colossus uses "Family" (a serif) for all headlines and body text, paired with "Sohne" (sans-serif) for UI elements and metadata. This is exactly the pattern our design tokens already implement (Libre Baskerville + DM Sans).

5. **Warm near-black text on off-white.** Body text is `rgb(36, 40, 51)` on `rgb(247, 247, 247)`. Not pure black on pure white. Our tokens already do this (`#544E49` on `#F7F5F2`), which confirms we're in the right zone for sustained reading comfort.

6. **Absence of clutter.** No banner ads, no social share counts, no comment sections, no star ratings, no "you might also like" carousels. The content stands alone. This restraint is what makes it feel premium.

### What's transferable

- The progressive disclosure pattern: summary → TOC → full content → related
- Topic pills/tags as lightweight, scannable taxonomy
- Title:Subtitle naming convention for articles
- Serif body text for editorial authority
- Warm near-black on off-white for reading comfort
- Collapsible sections for supplementary content (show notes → our Sources section)
- Clean card boundaries defined by content, not heavy borders or shadows

### What should NOT be copied

- **The hero carousel.** Rotating featured content is wrong for a knowledge wiki. People arrive looking for specific information, not editorial picks.
- **Full-bleed photography.** Cinematic hero images work for editorial. A wiki should lead with structure and information, not atmosphere.
- **Linear feed layout without sidebar navigation.** Colossus is a single-column feed. A wiki needs persistent navigation — sidebar TOC, breadcrumbs, or a visible topic tree — so readers always know where they are in the knowledge structure.
- **Extreme vertical whitespace.** Colossus uses very generous spacing (the About page has huge gaps between items). A wiki needs tighter spacing because users are scanning and cross-referencing, not browsing leisurely.
- **The podcast-centric organization.** Colossus organizes by series (container), not by topic (concept). A wiki must organize by concept. The knowledge is primary; the format is secondary.

---

## Synthesis

### 15 Design Principles for the Climate Finance Wiki

**Structure and hierarchy:**

1. **Every article is a chaptered explainer, not a wall of text.** Break articles into named sections (H2s) every 300-500 words. Give every article a sticky or visible table of contents. A comms professional scanning for "how does the verification process work" should be able to jump directly to that section.

2. **The subtitle does the heaviest lifting.** Below every article title, place a one-sentence plain-English summary that answers "why should I care about this?" This is not an abstract — it's a decision aid. A comms professional should be able to read the title and subtitle and know whether this article answers their question.

3. **Progressive disclosure, always.** The landing page is the calmest page. Category pages are denser. Article pages are richest. Within each article: key stats panel → subtitle → body → sources → related content. Never dump everything at once. Let the reader choose their depth.

4. **Connections are visible, not hidden.** Wikilinks, "See Also" blocks, "You might not expect" teasers, the mini knowledge graph — these are the product's core value. They should be visually prominent, not buried. The goal is that every article makes you curious about two more.

**Navigation and wayfinding:**

5. **Persistent navigation that shows where you are.** The reader should always know: what category am I in, what article am I reading, what's nearby. This means breadcrumbs (Instruments → Green Bonds), sidebar or sticky TOC within articles, and visible category labels on every page. Never rely on the browser back button.

6. **Category labels are small, uppercase, and always present.** The Red Barrow uppercase label pattern (11px, semibold, tracked, muted color) should appear on every article card and article page, marking it as CONCEPTS, INSTRUMENTS, ACTORS, etc. This primes the reader's expectations before they read the headline — just like CFR's "Backgrounder" label or The New Yorker's rubrics.

7. **The landing page is a table of contents, not a magazine cover.** It should have editorial flavor (a featured case study, a topic of the day), but its primary job is to show the full scope of the wiki and give readers clear entry points. Stable structure beats daily rotation.

**Typography and reading:**

8. **The reading column is narrow and generous.** Body text maxes out at 680px. Line height is 1.6-1.7x. Paragraph spacing is a full line. Characters per line stay in the 55-75 range. These numbers exist because they reduce eye fatigue on dense explanatory content. Do not fill the viewport.

9. **Serif headlines, sans-serif body, monospace data.** This three-font system (Libre Baskerville, DM Sans, JetBrains Mono) does three jobs: the serif signals editorial authority, the sans-serif keeps body text readable at length, and the monospace makes numbers and data feel precise. No font should appear without a clear reason.

10. **Whitespace is functional, not decorative.** Enough breathing room that the page never feels cramped (especially between sections and around callout boxes), but not so much that it feels like a luxury magazine. The goal is "well-organized reference shelf," not "art gallery." Tighter than The New Yorker, looser than Wikipedia.

**Credibility and trust:**

11. **Sources are visible, not hidden.** Every article shows its sources — not as academic footnotes, but as a clear "Sources" section at the bottom with labeled links (report, course, dataset). Inline links to source material work as lightweight citations within the text. A comms professional needs to be able to say "according to the ICMA Green Bond Principles" with a link ready.

12. **Data gets special treatment.** Key statistics, figures, and quantitative claims use JetBrains Mono in dedicated panels or callout boxes. When a reader sees the monospace font, they know they're looking at a verified number. This is a trust signal and a scanning aid.

13. **No decoration that doesn't explain.** Every visual element — diagrams, comparison tables, process flows, key stats panels — should make a concept clearer. No stock photography. No atmospheric illustrations. If an image doesn't help someone understand how a green bond works or who the key actors are, it doesn't belong.

**Engagement and stickiness:**

14. **Cross-references are editorial, not algorithmic.** The "You might not expect" connections, the story threads, the controversy maps — these are hand-curated by someone who understands the material. They should feel like a knowledgeable colleague saying "you should also look at this," not like a "readers also viewed" widget.

15. **Story threads are visible pathways, not hidden features.** The three launch threads (Greenwashing Trail, Follow the Money, Architecture of Climate Policy) should be discoverable from the landing page and from within any article that belongs to a thread. Progress indicators ("Article 3 of 6") and "Next in thread" CTAs make reading sequential content feel like momentum, not homework.

---

### 5 Anti-Patterns to Avoid

1. **The barren index page.** CFR's backgrounder listing — 1,004 results, no images, no summaries, no filters, just titles and dates across 42 pages — is a usability dead end. Category pages must show article summaries, connection counts, and visual hierarchy between foundational and advanced articles. A category page should make someone want to click, not make them reach for Ctrl+F.

2. **The magazine homepage on a reference product.** Both The New Yorker and Colossus use curated, rotating homepage content that changes daily. This works for publications where browsing is the point. The wiki's homepage should have some editorial elements (featured case study, topic of the day), but its primary job is stable wayfinding — showing the full structure of the knowledge base so a first-time visitor immediately understands what's here and how to find it.

3. **Articles without internal navigation.** The New Yorker publishes 4,000-word articles with zero structural scaffolding — no TOC, no anchor links, no jump-to-section. This works for narrative essays but fails for reference content. Every wiki article over 800 words needs a visible table of contents. A reader looking for "what's the difference between SLBs and green bonds" should not have to scroll through an entire article to find the comparison.

4. **Visuals that set mood instead of explaining.** The New Yorker commissions beautiful editorial illustrations. Colossus uses cinematic photography. Neither helps someone understand how a carbon credit moves through a verification pipeline. Visuals should be diagrams, comparison tables, timelines, and process flows — things that make complex mechanisms concrete. If you can't caption it with "this shows how X works," it probably doesn't belong.

5. **Density that punishes scanning.** Wikipedia is the extreme case: walls of text with minimal visual hierarchy, tiny type, and no breathing room. The target audience is comms professionals who need to absorb complex material quickly, often under time pressure. Every article should be scannable in 30 seconds (via headings, key stats panel, and subtitle) before requiring a full read.

---

### What "Intuitive" Means for This Product

For a climate finance wiki aimed at comms professionals, "intuitive" means three specific things:

**1. I can find the article I need in under 10 seconds.** The navigation structure (categories, search, knowledge graph) should match how a comms professional thinks about climate finance: by concept type ("what is this thing?"), by actor ("who does this?"), by instrument ("how does this work?"), or by case study ("show me a real example"). If someone needs to brief their boss on green bonds before a meeting, they should land on the right article within two clicks from the homepage.

**2. I can tell whether this article answers my question before I read it.** The subtitle, key stats panel, and table of contents together form a 10-second preview. A comms professional scanning should be able to decide "yes, this is what I need" or "no, I need the article on SLBs instead" without committing to a full read. The article structure makes its contents visible from the outside.

**3. I always know what to read next.** After finishing an article, the reader should never hit a dead end. Wikilinks within the text, the "See Also" section, the "You might not expect" block, story thread CTAs, and the mini knowledge graph all work together to surface the next relevant piece. The experience should feel like following a trail, not like searching a database. The wiki earns its stickiness by making every article a doorway to two more.

---

*Reference sites studied: CFR.org, newyorker.com, colossus.com*
*Internal files consulted: WIKI_DESIGN_TOKENS.md, BRAND_STYLE_GUIDE.md, PRD.md*
*Created: 2026-04-17*
