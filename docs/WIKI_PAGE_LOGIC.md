# Page Logic  -  Climate Finance Wiki

> Structural thinking for 5 page types. No layouts yet.
> Written for a non-technical stakeholder.
> **Date:** 2026-04-17
> **Inputs:** WIKI_DESIGN_TOKENS.md, BRAND_STYLE_GUIDE.md, PRD.md, WIKI_REFERENCE_SITE_ANALYSIS.md

---

## 1. Landing Page

> **Layout selected:** Editorial-Conviction (2026-04-18)
> **Mockup:** `mockups/landing-page-final.html`
> **Philosophy:** "Arrive for the story, stay for the structure." The page earns trust through one confident editorial choice, then immediately offers multiple ways in.

### Primary user intent

**Orient and enter.** "What is this site, is it credible, and where do I start?" The visitor has either followed a link or searched for a climate finance term. They need to decide within seconds whether this resource is worth their time.

### Secondary user intents

- Find a specific topic by name (they already know what they want)
- Discover something they didn't know they needed (the editorial hook)
- Understand the scope  -  how much ground does this wiki cover?

### What a first-time visitor should understand within 5 seconds

This is a professional-grade climate finance reference. It covers a defined set of topics, organized by category. It looks published, not crowdsourced. There is a clear way in.

### What should be visible or implied above the fold

The hero is a **55/45 split**: an editorial photograph filling the left panel, the featured case study on a dark surface filling the right. This is not a generic masthead  -  the case study IS the hero.

- **Site identity:** The dark sticky nav carries the Red Barrow wordmark, site title in Libre Baskerville, and category links. A search icon signals that the site is a tool, not just a publication. Identity is established by the nav alone  -  no separate masthead or tagline section.
- **The editorial statement:** The right panel of the hero contains one editorially chosen case study  -  a bold Libre Baskerville headline, a pull-quote with a sienna left border, article metadata in JetBrains Mono, and a pill-shaped CTA. The visitor knows within seconds that this site has editorial judgment, not just content.
- **The photo:** The left panel shows an editorial photograph relevant to the case study's world (e.g., a financial district skyline). It is desaturated slightly (`saturate(0.8) brightness(0.9)`) and fades into the dark panel via a directional gradient. The photo establishes context without competing with the text.
- **Floating bridge cards:** Immediately below the hero, two white cards overlap the hero/content boundary via negative margin. Topic of the Day (sienna top border) and In the News (slate blue top border) are visually distinct from each other and from the case study above. Each has its own label, headline, teaser, and CTA. They signal that the site is curated and current.
- **Scale signal:** A compact stats strip in JetBrains Mono sits below the floating cards: "48 articles - 240+ connections - 5 categories - 3 guided trails." This is not a hero element  -  it is a quiet data line that earns its place through restraint.

### Ideal reading/scanning behavior

The visitor's eyes move in a **Z-pattern across the split hero**, then shift to a vertical scan:

1. **Photo draws the eye left** (0-1 second)  -  the image anchors attention and establishes the domain
2. **Headline captures right** (1-3 seconds)  -  the case study headline is the largest text on the page. The visitor reads it and decides: "this is editorial, not a database"
3. **Pull-quote hooks** (3-5 seconds)  -  the italic serif quote with sienna border delivers a specific, provocative claim
4. **CTA offers entry** (5-6 seconds)  -  "Read the case study ->" is the primary click target
5. **Floating cards provide alternatives** (6-8 seconds)  -  if the case study doesn't match their need, Topic of the Day and In the News offer two secondary entry points on different surfaces
6. **Stats strip signals scope** (8-9 seconds)  -  the JetBrains Mono data line answers "how big is this?"
7. **Scroll reveals thread cards** (10+ seconds)  -  for visitors who want a guided path, three tall cards with photos, taglines, and full article lists appear with a fade-up animation

The landing page succeeds when the visitor clicks something within 10 seconds. It fails when they scroll to the bottom without clicking.

### Correct density level

**Low above the fold, progressive below.** The hero area has editorial density  -  one photo, one case study, one headline  -  but it is visually calm because the 55/45 split gives each element room. Below the fold, density increases gradually: stats strip (data) -> thread cards (structured paths) -> photo divider (visual breath) -> category cards with depth indicators (reference). The brand principle of progressive disclosure is expressed as a literal vertical gradient of density.

### Core modules (in page order)

1. **Navigation bar**  -  dark sticky nav with Red Barrow wordmark, Libre Baskerville site title, category links (Topics, About, Explore), and a search icon. Gains a subtle shadow on scroll.
2. **Hero split (55/45)**  -  editorial photo (left) and featured case study on dark surface (right). The case study includes: uppercase sienna label, Libre Baskerville headline, italic pull-quote with sienna left border, JetBrains Mono metadata, and a pill-shaped CTA.
3. **Floating bridge cards**  -  two white cards overlapping the hero/content boundary via negative margin (-40px). Topic of the Day (sienna top accent) and In the News (slate blue top accent). Each is its own self-contained block with label, headline, teaser, and CTA.
4. **Stats strip**  -  a compact centered line in JetBrains Mono: article count, connection count, category count, trail count. Separated from the next section by a thin 1px rule in `--color-alt-surface`.
5. **Thread cards**  -  three tall white cards, each with: an editorial photo header (180px, desaturated, with gradient overlay and JetBrains Mono metadata), a Libre Baskerville title, an italic tagline, a numbered article list (01-06 in sienna JetBrains Mono), and a CTA. The full article list is visible  -  the visitor can see exactly what they will read before committing.
6. **Photo divider**  -  a full-width editorial photograph (240px height) with a warm gradient overlay and a centered italic Libre Baskerville caption. Provides a visual breath between the active content above and the reference layer below.
7. **Categories with depth**  -  five white cards (3 + 2 grid) showing: Libre Baskerville category name, article count and connection count in JetBrains Mono, a proportional depth bar, top 3 article names (hoverable), and a browse CTA. The depth bars encode relative content volume  -  Frameworks (13 articles) shows a full bar, Instruments (6) shows a half bar.
8. **Sources bar**  -  a single line on alt surface: "BUILT FROM" label followed by an inline list of sources in body text. Reads as a footnote, not a feature.
9. **Footer**  -  dark surface with two layers: brand attribution and date on top (separated by a thin rule), category quick-links below (Concepts, Instruments, Actors, Frameworks, Case Studies, Knowledge Graph). Functions as secondary navigation.

### Entrance choreography

The page uses a measured entrance animation to signal craft:

- Hero content staggers in on load: case study label (100ms) -> headline (220ms) -> pull-quote (380ms) -> metadata (480ms) -> CTA (540ms). Each element fades up 18px over 500ms with `ease-out`.
- Floating cards enter as a group at 700ms.
- Below-fold sections (stats strip, thread cards, categories, sources bar) fade up on scroll via `IntersectionObserver`, one reveal per section.
- All animations are disabled when the visitor's OS has `prefers-reduced-motion` enabled.

### Modules this page does not include (and why)

- **Separate masthead or tagline section.** The nav establishes identity. The case study establishes authority. A masthead with "Climate Finance Wiki" and a tagline would be redundant  -  the visitor already knows what the site is from the nav, and the case study shows what it does better than a tagline could describe it.
- **Category overview above the fold.** Categories are deliberately pushed below the photo divider. The page leads with editorial conviction (case study, threads), not with a directory. The visitor encounters the category structure only after the page has earned their trust.
- **Knowledge graph teaser.** The graph is accessible via the nav link ("Explore") and the footer ("Knowledge Graph"). A teaser section on the landing page would add visual complexity without a clear conversion path for first-time visitors. The stats strip already signals scope (240+ connections) without showing the graph itself.
- **Latest articles or recently updated list.** Freshness is signaled by the In the News floating card (auto-updated via GitHub Action) and the "Last updated April 2026" footer line. A separate "recently updated" section would compete with the thread cards for attention.
- **Dense article grids.** The landing page is not a category index. Showing article grids makes it feel like a database, not a publication.
- **Long editorial text.** The landing page should not try to explain climate finance. That is what articles are for.
- **Decorative photography without editorial purpose.** The hero photo and thread card photos serve specific roles (establishing the case study's world, representing each trail's theme). Photography is never decorative on this page  -  every image is tied to content.

### The most common ways this page type becomes confusing or visually noisy

1. **The carousel trap.** The hero features one case study at a time. It does not rotate, slide, or auto-advance. The featured case study changes only when the editor manually updates it. The page must feel stable  -  a visitor should return next week and find the same structure, even if the content has been updated.
2. **Equal visual weight everywhere.** The hero (55/45 split with photo) is the visually dominant element. The floating cards are secondary. The thread cards are tertiary. The categories are a reference layer. This hierarchy is expressed through size, surface treatment, and vertical position  -  not through identical card grids.
3. **Ambiguous scope.** The stats strip (48 articles, 240+ connections, 5 categories, 3 guided trails) and the category depth bars answer "how comprehensive is this?" with specific numbers. The sources bar answers "where does this come from?" with named institutions.
4. **No clear first click.** The case study CTA ("Read the case study ->") is the primary click target. The floating cards offer two alternatives. The thread cards offer three more. There is always a clear next step, but the case study has visual primacy.
5. **Topic of the Day and In the News competing with the case study.** These are separated from the hero by surface change (dark -> white cards on warm paper), physical gap (negative margin overlap creates a visual break), and scale (smaller headlines, shorter text). They complement the case study; they do not compete with it.

---

## 2. Category Page

### Primary user intent

**Find the right article.** "I know I need something about green finance instruments. Show me what you have, and help me pick the one that answers my question." The visitor has already committed to a category  -  they are browsing with purpose.

### Secondary user intents

- Understand the landscape of a topic area  -  what sub-topics exist, how they relate
- Distinguish foundational articles ("start here") from advanced or niche ones
- Discover articles they did not know existed within this category
- Jump to a different category if they realize they are in the wrong one

### What a first-time visitor should understand within 5 seconds

This is a curated collection of articles about [category name]. There are [N] articles. Some are foundational, some are more specific. Each article has a clear summary that tells you whether it is what you need.

### What should be visible or implied above the fold

- **Category name and brief description**  -  one sentence that defines the scope of this category (e.g., "The financial products designed to fund climate action  -  and the loopholes they sometimes create")
- **Article count**  -  how deep this category goes
- **The first 3-4 article cards**  -  with titles, subtitles, and connection counts visible, so the visitor immediately starts making choices
- **Breadcrumbs**  -  so the visitor knows they are at Home -> Instruments, not lost in a flat list

### Ideal reading/scanning behavior

Vertical scan with quick decision-making:

1. Category name and description  -  confirmed they are in the right place (1-2 seconds)
2. Scan article titles and subtitles  -  looking for the one that matches their need (3-5 seconds)
3. Read the summary of 1-2 candidates  -  deciding which to open (5-10 seconds)
4. Click through to the chosen article

The category page succeeds when the visitor finds and clicks the right article quickly. It fails when they scroll through a long list of identical-looking items with no way to distinguish which one answers their question.

### Correct density level

**Medium.** Denser than the landing page, but still scannable. Each article card should show enough information (title, subtitle, category badge, connection count) to enable a decision without opening the article. But not so much information that the page becomes a wall of text.

### Core modules this page needs

1. **Breadcrumbs**  -  Home -> [Category Name]
2. **Category header**  -  name, one-sentence description, article count
3. **Article cards**  -  each showing: title, subtitle (the one-sentence "so what"), connection count, and optionally a "foundational" or "advanced" marker
4. **Sorting or filtering**  -  at minimum, a way to distinguish foundational articles from specialized ones. Could be as simple as a "Start here" section at the top followed by "All articles"
5. **Cross-category links**  -  a small section or sidebar showing related categories (e.g., on the Instruments page, link to Frameworks and Case Studies)

### Modules this page should probably avoid

- **Hero images or banners.** The visitor is here to scan a list, not admire a visual. The category header should be compact.
- **Long editorial introductions.** A one-sentence description is enough. If the category needs a multi-paragraph explanation, that should be a separate "What are climate finance instruments?" article, not a preamble on the index page.
- **Featured article with disproportionate space.** A "start here" marker is fine. Giving one article a giant hero card while the rest are small rows creates a false hierarchy  -  the featured article might not be the one this visitor needs.
- **Knowledge graph or complex visualizations.** The category page is a practical selection tool. Save the graph for the article page and the dedicated graph view.
- **Story thread promotions.** These belong on the landing page. By the time someone is on a category page, they are looking for a specific article, not a guided reading path.

### The most common ways this page type becomes confusing or visually noisy

1. **The barren list (CFR anti-pattern).** Just titles and dates, no summaries, no hierarchy, no images. This is the single most common failure mode for reference site category pages. The visitor sees a list of 12 titles and has no idea which one to click. Every card needs at least a subtitle.
2. **No hierarchy between articles.** If a foundational explainer like "What Are Green Bonds?" and a specialized article like "The Greenium" look identical on the page, the visitor has no way to know where to start. Foundational articles should be visually distinguished  -  larger card, "Start here" label, or a separate section at the top.
3. **Too many metadata signals per card.** Title + subtitle + category badge + connection count + date + read time + status badge + thread membership = visual noise. Pick the 3-4 most useful signals and cut the rest.
4. **Mixing category-level and site-level navigation.** If the category page also shows global navigation elements (story threads, news, featured case study from the landing page), the visitor cannot tell what belongs to this category and what is site-wide content.

---

## 3. Article Page

### Primary user intent

**Understand this concept well enough to use it.** "Explain green bonds to me so I can brief my boss / write a press release / spot a greenwashing claim." The visitor is here to learn something specific and take it back to their work.

### Secondary user intents

- Find a specific sub-topic within the article (jump to "verification process" or "key players")
- Verify a fact and trace it to a source
- Discover related concepts they should also understand
- Determine if a different article would serve their need better (scan, then redirect)
- Continue along a story thread if they arrived via one

### What a first-time visitor should understand within 5 seconds

What this article is about, who it is relevant to, how deep it goes, and whether it answers their question. They should be able to make a stay-or-leave decision based on the title, subtitle, key stats panel, and table of contents  -  without reading the body text.

### What should be visible or implied above the fold

- **Breadcrumbs**  -  Home -> Instruments -> Green Bonds (constant wayfinding)
- **Category label**  -  small, uppercase, in the Red Barrow label pattern (e.g., "INSTRUMENTS")
- **Title**  -  in Libre Baskerville, large and confident
- **Subtitle (the dek)**  -  one sentence that answers "why should I care about this?" Not a summary of the article  -  a framing statement. Example: "The most popular tool in green finance  -  and the most debated."
- **Key stats panel**  -  2-4 data points in JetBrains Mono (e.g., "Market size: $580B", "Active since: 2007", "Connections: 9 articles") that give the reader an instant sense of scale and context
- **The beginning of the table of contents or the first body section**  -  signaling that structured content follows

### Ideal reading/scanning behavior

A two-pass pattern:

**First pass (5-15 seconds, scanning):**
1. Title + subtitle -> "Is this the right article?"
2. Key stats panel -> "What scale am I dealing with?"
3. Table of contents -> "Does this cover the section I need?"
4. Decision: read from the top, jump to a section, or leave

**Second pass (reading):**
1. Read body sections in order, or jump to the relevant one
2. Notice wikilinks in the text -> mental note of connected topics
3. Reach the "See Also" and "You might not expect" sections -> follow a connection or continue the thread
4. Optionally check Sources for citation needs

The article page succeeds when a reader can scan it in 15 seconds to decide if it is right, and then read it in 5-8 minutes with full comprehension. It fails when the reader has to scroll blindly through a wall of text to find what they need, or when they finish reading and hit a dead end with nowhere to go next.

### Correct density level

**Rich but structured.** This is the densest standard page type (case studies are denser). The body text itself is the core of the product. But density must be organized: broken into named H2 sections every 300-500 words, with callout boxes for key insights, JetBrains Mono panels for data, and wikilinks as inline cross-references. Dense content with clear structure reads as "thorough." Dense content without structure reads as "overwhelming."

### Core modules this page needs

1. **Breadcrumbs**  -  persistent wayfinding
2. **Category label**  -  small uppercase marker above the title
3. **Title**  -  Libre Baskerville, 2xl size
4. **Subtitle/dek**  -  one-sentence framing statement
5. **Key stats panel**  -  2-4 data points in JetBrains Mono, bridging the header and body
6. **Table of contents**  -  sticky sidebar or in-article, showing all H2 sections with active-section highlighting
7. **Body text**  -  chaptered with H2 headings, inline wikilinks, callout boxes for key insights
8. **Callout boxes**  -  sienna-tinted, left-bordered, for "comms insight" or "key takeaway" moments
9. **Sources section**  -  labeled links (report, course, dataset) at the bottom
10. **See Also**  -  3-5 editorially chosen related articles
11. **"You might not expect" block**  -  2-3 surprising cross-connections with provocative one-sentence teasers
12. **Mini knowledge graph**  -  the article's immediate neighborhood (1-hop connections), clickable
13. **Thread progress bar and "Next in thread" CTA**  -  only if the article belongs to a thread

### Modules this page should probably avoid

- **Hero images or banner photography.** The article leads with text and data, not atmosphere. If a diagram or comparison table is needed, it belongs within the body, not as a hero.
- **Author bio or byline.** This is a curated wiki, not a bylined publication. Credibility comes from the source attribution, not a personal brand.
- **Social sharing buttons.** They add visual clutter without proven value for reference content. If sharing matters later, it can be a single small icon, not a toolbar.
- **Comment sections or ratings.** This is a published reference, not a forum.
- **"Related articles" algorithms.** Cross-references should be hand-curated (See Also, "You might not expect"), not auto-generated by tag matching.
- **Full-width diagrams above the fold.** Diagrams belong in the body where they have context. Above the fold is for text-based orientation.

### The most common ways this page type becomes confusing or visually noisy

1. **No table of contents on a 2,000-word article.** The reader has no way to scan the structure or jump to the section they need. They scroll aimlessly, lose patience, and leave. This was the New Yorker's biggest weakness for reference content.
2. **Missing subtitle.** Without the one-sentence "so what" beneath the title, the reader has to start reading the body to figure out whether this article is relevant. For a comms professional scanning under time pressure, that is too much friction.
3. **Sidebar competing with body text.** If the sidebar (TOC, related terms, mini graph) is as visually heavy as the main content column, the reader's eye bounces between them instead of reading. The sidebar should be quieter  -  lighter type, more whitespace, less color.
4. **Too many callout boxes.** One or two callout boxes per article highlight key insights. Five or six callout boxes make the body feel like a PowerPoint deck  -  every paragraph is "key." If everything is called out, nothing is.
5. **Dead-end article.** The reader finishes the last paragraph and sees only a sources list and a footer. No See Also, no thread continuation, no knowledge graph neighborhood. The stickiness engine is broken. Every article must end with at least two clear paths forward.
6. **Wikilinks that look like external links.** If inline cross-references to other wiki articles are visually identical to links that leave the site, the reader cannot predict what happens when they click. Wiki internal links and external source links should be visually distinct.

---

## 4. Case Study Page

### Primary user intent

**See how this played out in the real world.** "I've read the concept article on greenwashing. Now show me what it looked like when HSBC actually did it  -  what happened, who was involved, and what the consequences were." The visitor wants a concrete story, not an abstract explanation.

### Secondary user intents

- Choose between the analytical version (Economist style) and the narrative version (Nature longform) based on how much time they have or how they prefer to learn
- Use the case study as briefing material  -  extract a timeline, key numbers, or outcome summary
- Understand how this case connects to broader concepts (e.g., DWS SEC Fine -> greenwashing -> climate litigation)
- Compare the claims to the reality (before/after format cases)

### What a first-time visitor should understand within 5 seconds

What happened, to whom, and why it matters. The case study title and subtitle should name the actor, the event, and the stakes  -  not the abstract theme. Example: "HSBC Greenwashing: When the Ads Said Green But the Portfolio Said Oil." Within seconds, the reader knows the company, the offense, and the tension.

### What should be visible or implied above the fold

- **Breadcrumbs**  -  Home -> Case Studies -> HSBC Greenwashing
- **Category label**  -  "CASE STUDY" in the uppercase label pattern
- **Title**  -  names the actor and the event
- **Subtitle**  -  the one-sentence editorial angle
- **Style toggle**  -  a subtle switch showing the two available versions (Economist / Nature longform), with a brief description of each (e.g., "Analytical  -  4 min read" / "Narrative  -  7 min read")
- **Key stats panel**  -  the numbers that define this case (e.g., "Fine: $19M", "Year: 2022", "Regulator: SEC", "Connections: 7 articles")
- **The opening of whichever version is selected**  -  enough to hook the reader into continuing

### Ideal reading/scanning behavior

1. Title + subtitle -> "Do I know this case? Is this the one I need?" (2 seconds)
2. Key stats panel -> "What are the headline numbers?" (3 seconds)
3. Style toggle -> choose version based on time or preference (2 seconds)
4. Read the selected version, following the narrative or analytical structure
5. Check the timeline or before/after visual if the case uses one
6. Reach the connections section -> follow links to related concepts or other case studies

The case study page succeeds when a reader can use it as briefing material  -  they can walk into a meeting and say "Here is what happened with HSBC, here are the numbers, here is why it matters for our client." It fails when the case study reads like a textbook example instead of a real story.

### Correct density level

**High  -  the densest page type.** Case studies carry the most information: narrative content, data points, timelines, before/after comparisons, source citations, and connections to concept articles. But this density should feel purposeful and layered, not overwhelming. The style toggle is the key pressure valve  -  the Economist version is tighter and faster (lower density), the Nature version is richer and slower (higher density). The reader chooses their own density level.

### Core modules this page needs

Everything an article page has, plus:

1. **Style toggle**  -  clearly labeled, positioned above the body text, showing which version is active and offering a brief description of each style
2. **Visual format**  -  varies by case study (newspaper front page, timeline, or before/after layout). This is not a generic template  -  each case study has a chosen visual format that matches its story shape
3. **Timeline or sequence**  -  for cases that unfold over time (DWS, PG&E, Seychelles Blue Bond), a visual timeline of key events
4. **Before/after structure**  -  for cases built on claims vs. reality (HSBC, ENEL, Lombard Odier), a visual comparison
5. **"The Debate" section (controversy map)**  -  for cases with contested interpretations, a balanced summary of competing views with links to articles exploring each position
6. **Thread position**  -  if this case study belongs to a story thread, show "Article 3 of 6 in The Greenwashing Trail" with navigation to previous and next

### Modules this page should probably avoid

- **Abstract concept explanations.** If the reader needs to understand what greenwashing is before reading the HSBC case, they should follow a wikilink to the concept article. The case study assumes the reader has basic context  -  or provides it in one sentence with a link, not three paragraphs of background.
- **Academic-style citation.** Case studies cite real events and real documents. Sources should be named inline (e.g., "according to the SEC's enforcement filing") and linked, not hidden in footnote numbers.
- **Neutral, passive framing.** Case studies have protagonists, antagonists, and consequences. The writing should name actors and describe actions ("HSBC ran ads claiming..." not "claims were made regarding..."). The page logic should support this: titles name actors, subtitles name stakes.
- **Generic "related articles" lists.** The connections from a case study should feel curated and surprising, not tag-matched. "You might not expect" matters most on case study pages, because the connections between a real-world scandal and abstract financial instruments are where insight lives.

### The most common ways this page type becomes confusing or visually noisy

1. **The style toggle is hidden or confusing.** If the reader does not notice they can switch between Economist and Nature versions, they are getting only half the product. If the toggle is not clear about what each version offers, they do not know which to choose. The toggle needs to be visible, simple, and briefly labeled.
2. **The visual format overwhelms the content.** A newspaper front page layout or a before/after comparison is a powerful framing device  -  but if it dominates the page with decorative elements (fake mastheads, faux-yellowed paper, heavy borders), it distracts from the actual information. The visual format should organize the content, not costume it.
3. **Too many data points without narrative.** A case study that opens with 8 stats in a panel and then delivers 12 timeline entries with no connecting prose reads like a spreadsheet, not a story. The key stats panel should be limited to 3-4 numbers. Additional data belongs in context within the body.
4. **No clear "so what."** The case study tells you what happened but not why it matters for the reader's work. The subtitle, the closing paragraph, and the connections to concept articles all serve this function. If the reader finishes thinking "interesting, but what do I do with this?" the page has failed.
5. **Mixing both style versions on the page.** The Economist and Nature versions should be clean swaps, not interleaved. If elements from both versions are visible simultaneously, the reader does not know which voice they are reading in.

---

## 5. Glossary Page

### Primary user intent

**Quick definition lookup.** "I just saw the term 'additionality' in a document and I need to know what it means in 15 seconds." The visitor is not here to learn deeply  -  they are here to decode a term and get back to what they were doing.

### Secondary user intents

- Browse the full vocabulary of climate finance to understand the field's scope
- Jump from a short definition to the full article for deeper understanding
- Cross-reference terms  -  "how is 'additionality' different from 'baseline'?"
- Use the glossary as a reference while reading articles elsewhere on the site (or off-site entirely)

### What a first-time visitor should understand within 5 seconds

This is an alphabetical (or categorized) quick-reference for climate finance terms. Each entry gives a plain-English definition in one to two sentences. Deeper explanations are one click away.

### What should be visible or implied above the fold

- **Page title and purpose**  -  "Glossary" with a one-line explanation: "Plain-English definitions for the terms that matter in climate finance"
- **Search or filter**  -  immediately visible, because most glossary visitors arrive looking for a specific term
- **Alphabetical navigation**  -  a visible A-Z bar or jump links so the visitor can go directly to the right letter
- **The first several definitions**  -  showing the format (term, short definition, link to full article) so the visitor understands the page pattern immediately

### Ideal reading/scanning behavior

Targeted, not sequential:

1. Search or scroll to the target letter (1-3 seconds)
2. Scan term names in that section (2-3 seconds)
3. Read the 1-2 sentence definition (3-5 seconds)
4. Either satisfied (leave) or curious (click through to full article)

The rare visitor who browses the full glossary does so alphabetically or by category, scanning for terms they recognize or want to learn. But this is the secondary behavior  -  the primary behavior is surgical: find one term, get the definition, leave.

### Correct density level

**High item count, low depth per item.** This is the inverse of the article page. Many entries visible at once, each taking up minimal vertical space. Definitions are 1-2 sentences maximum. The page should feel like a well-organized index, not a textbook chapter.

### Core modules this page needs

1. **Search/filter bar**  -  prominent, at the top, filtering results as the user types
2. **Alphabetical jump navigation**  -  A-Z bar that lets the visitor skip directly to a letter
3. **Term entries**  -  each showing: the term name (bold), a 1-2 sentence plain-English definition, the category it belongs to (as a small badge), and a "Read full article ->" link
4. **Category grouping option**  -  the ability to toggle between alphabetical order and grouping by category (Concepts, Instruments, Actors, Frameworks), so a visitor browsing by topic can see related terms together
5. **Breadcrumbs**  -  Home -> Glossary

### Modules this page should probably avoid

- **Key stats panels.** Definitions do not need supporting data. If a term has important numbers, those belong in the full article.
- **Knowledge graph or visualizations.** The glossary is a text-lookup tool. Visual complexity slows down the primary use case.
- **Long definitions or explanatory paragraphs.** If a definition needs more than two sentences, it is an article, not a glossary entry. The glossary points to articles; it does not replace them.
- **Images or diagrams per entry.** At the density this page needs, illustrations per term would make it feel cluttered. Process diagrams belong in the article.
- **Featured terms or editorial picks.** The glossary is a neutral reference tool. Highlighting some terms over others breaks the "index" mental model and makes the visitor wonder what they are missing.
- **Story thread promotions.** The glossary is a utility page, not a discovery page. Threads belong on the landing page and within articles.

### The most common ways this page type becomes confusing or visually noisy

1. **No search.** Forcing the visitor to scroll through 48+ terms alphabetically when they know exactly what they are looking for is a usability failure. Search must be the first thing they see.
2. **Definitions that are too long.** If glossary entries run to a full paragraph, the page loses its utility as a quick-lookup tool. The visitor cannot scan. The boundary between "glossary entry" and "article summary" gets blurry. Strict two-sentence maximum.
3. **No link to the full article.** The glossary definition is a doorway, not a destination. If a term does not link to a deeper article, the visitor hits a dead end  -  they got a definition but cannot go further if they need to. Every glossary entry that has a corresponding article must link to it.
4. **Visual clutter per entry.** If every term entry has a category badge, a connection count, a "last updated" date, a source label, and a "read more" button, the page becomes a dense grid of metadata. Each entry needs: term, definition, category badge, article link. Nothing more.
5. **Alphabetical-only organization with no categories.** An A-Z list works for finding a known term. But a comms professional who wants to browse all the instruments terms, or all the actor terms, needs a category view. Without it, related terms are scattered across the alphabet with no visible relationship.
6. **Confusing relationship to article pages.** If glossary definitions and article summaries use similar language and similar layouts, the visitor may not understand which is the quick reference and which is the deep dive. The glossary should look and feel unmistakably different from article pages  -  tighter, more utilitarian, more like a dictionary than a magazine.

---

## Cross-Page Observations

### The density gradient

The five page types form a clear density progression:

| Page | Density | Character |
|------|---------|-----------|
| Landing | Low | Calm, editorial, curated entry points |
| Category | Medium | Scannable index, decision-making aid |
| Article | Rich | Structured depth, the core product |
| Case Study | Highest | Narrative + data + visual formats |
| Glossary | Dense but shallow | Many items, minimal depth each |

This gradient is the brand principle of progressive disclosure made concrete. The visitor encounters increasing density only as they choose to go deeper. No page is denser than the page the visitor chose to navigate to.

### Shared structural rules across all page types

1. **Breadcrumbs on every page except the landing page.** The visitor should always know where they are in the site structure.
2. **Category labels on every content item.** The small uppercase label (CONCEPTS, INSTRUMENTS, CASE STUDY, etc.) appears on every article card, article page header, and glossary entry. It is the single most consistent wayfinding device in the wiki.
3. **No dead ends.** Every page offers at least one clear path forward. Landing -> category or feature. Category -> article. Article -> related articles, thread continuation, or graph. Case study -> concept articles and other cases. Glossary -> full articles.
4. **The subtitle does the work.** On every content item that has a title (article cards, article pages, case study pages), the subtitle beneath the title answers "why should I care?" in one sentence. It is not a summary. It is a decision aid.
5. **Data in monospace, prose in sans-serif, headings in serif.** The three-font system is a page-level signal. When the reader sees JetBrains Mono, they know they are looking at a verified number. When they see Libre Baskerville, they know they are reading a heading. When they see DM Sans, they know they are in body text. This consistency reduces cognitive load across all five page types.

---

*Page logic for: Landing, Category, Article, Case Study, Glossary*
*No layouts specified  -  structural thinking only*
*Created: 2026-04-17*
