# Landing Page Layout Evaluation

> Criterion-by-criterion assessment, ranking, recommendation, and hybrid improvement.
> Evaluates the four layout philosophies from `WIKI_LANDING_PAGE_LAYOUTS.md`.
> **Date:** 2026-04-17
> **Inputs:** WIKI_LANDING_PAGE_LAYOUTS.md, WIKI_PAGE_LOGIC.md, PRD.md, BRAND_STYLE_GUIDE.md, WIKI_DESIGN_TOKENS.md, WIKI_REFERENCE_SITE_ANALYSIS.md

---

## Criterion-by-criterion assessment

### 1. Clarity of information hierarchy

**Editorial-First: Strong.** One thing dominates, everything else is subordinate. The visitor's eye has a clear path: hero → featured piece → threads → categories. There is never a moment where two elements compete for attention at the same weight.

**Navigator-First: Medium.** Five equal category tiles create a choice grid, not a hierarchy. The visitor sees five things of equal importance and has to decide which matters. That is a decision cost, not a hierarchy.

**Teaching-First: Medium.** The "Where to Start" label creates a clear top-level priority, but the three thread cards are equal to each other. Within each card, the six-article list adds visual weight. The page has one clear level (threads first, categories second), but within that level it is flat.

**Data-First: Weak.** Stats panel, knowledge graph, category cards, source bar — four elements that all feel equally important. The knowledge graph is large but it is not clearly the "first thing to do." It is something to look at, not something to act on. The hierarchy is visual (big graph) but not functional (what do I click?).

---

### 2. Ease of first-time orientation

**Editorial-First: Strong.** A first-time visitor sees a publication. They have seen publications before. The mental model is instant: "This is like the FT or Bloomberg Green. I understand how this works." The featured case study tells them what kind of content lives here without requiring them to evaluate a menu.

**Teaching-First: Strong.** "Where to Start" is literally the answer to the first-time visitor's unspoken question. Three named trails with plain-English descriptions ("From misleading claims to criminal charges") tell the visitor what the wiki covers and how to begin. This is the only layout that explicitly addresses the "I don't know what I don't know" problem.

**Navigator-First: Weak.** A first-time visitor sees five categories and has to already understand what "Instruments" and "Frameworks" mean in a climate finance context to know which one to click. The page assumes knowledge the first-time visitor does not have. A comms professional who has been told "learn about climate finance" sees five doors and no signs.

**Data-First: Weak.** "48 articles, 240+ connections" means nothing to someone who does not yet know what those articles contain. The knowledge graph is visually striking but semantically empty on first encounter — coloured dots connected by lines. The visitor knows the wiki is large but not what it is about. Scale without meaning is not orientation.

---

### 3. Reading comfort

**Editorial-First: Strong.** Generous dark hero, one featured piece with a pull-quote in a comfortable reading width, clear breathing room between sections. The page follows the brand's progressive disclosure principle — calm at the door, density earned deeper in.

**Teaching-First: Medium.** The thread cards with six-article lists inside them are denser than they need to be on a landing page. Listing all six articles per thread is useful information but it creates three blocks of structured text competing for attention. The page risks feeling like a syllabus.

**Navigator-First: Medium.** Compact and efficient, which is comfortable in a utility sense but not in an editorial sense. There is nothing to linger on. Reading comfort is not really tested because there is almost nothing to read — just labels and counts.

**Data-First: Weak.** The knowledge graph is a visual element that does not "read" at all — it is perceived, not read. The stats panel is glanceable but not comfortable. The category cards with "top articles" lists inside them add density. The source transparency bar is text-heavy. The page asks the eye to do several different kinds of work (read numbers, interpret a diagram, scan lists, read a text bar) with no single comfortable rhythm.

---

### 4. Scannability

**Navigator-First: Strong.** This is what the layout is built for. Five tiles, each with a name, a count, and a one-line description. A visitor can scan the entire page in under 5 seconds. Every element is the same size and format. No surprises, no complexity.

**Editorial-First: Medium.** The featured case study is not scannable — it is readable. The pull-quote and paragraph reward attention, not speed. The story thread cards below are scannable. The category row is scannable. But the page's dominant element (the featured piece) deliberately slows the visitor down. That is the point, but it is a scannability cost.

**Teaching-First: Medium.** The thread cards are scannable at the title level ("The Greenwashing Trail" — got it) but the six-article lists inside them invite deeper reading. The "Or Browse by Topic" category row is fast. The page is scannable in layers but not all at once.

**Data-First: Medium.** The stats panel is instantly scannable. The category cards are scannable. But the knowledge graph is not scannable — it is a complex visual that requires interpretation. It sits in the middle of the page and breaks the scanning rhythm. The visitor's eye moves fast through numbers, hits the graph, slows down to figure out what it means, then has to re-accelerate for the category cards below.

---

### 5. Suitability for climate finance content

**Editorial-First: Strong.** Climate finance is a field where credibility matters more than comprehensiveness on first contact. A comms professional needs to trust the source before they use it in a briefing. Leading with one well-curated case study — a real scandal, real numbers, a real editorial angle — demonstrates exactly the kind of authority the PRD describes. The content type (case studies with named actors and consequences) is this wiki's strongest asset, and this layout puts it front and centre.

**Teaching-First: Strong.** Climate finance is genuinely confusing. Most of the target audience (comms professionals) are not finance experts. The three threads map to three real questions comms professionals face: "How do I spot greenwashing?", "How does the money actually flow?", "What policy architecture am I operating within?" The layout matches the content's natural learning structure.

**Data-First: Medium.** The knowledge graph is a genuine differentiator — the interconnectedness of climate finance concepts is real and valuable. But the graph only becomes meaningful after the visitor understands what the nodes represent. Leading with the graph is leading with the answer before the question has been asked.

**Navigator-First: Weak.** The five categories (Concepts, Instruments, Actors, Frameworks, Case Studies) are meaningful taxonomy, but on the landing page they are just labels. "Instruments" does not tell a comms professional whether this wiki covers green bonds (it does) or weather derivatives (it does not). The category names are structurally correct but semantically thin for first contact.

---

### 6. Premium/editorial feel

**Editorial-First: Strong.** This is the layout that most directly achieves the PRD's goal of "looks like a publication (FT/Economist)." Dark hero, Libre Baskerville at 3xl, a pull-quote with a sienna left-border, one confident editorial pick. The restraint is what makes it feel premium — one story, not twelve. The brand guideline's "mahogany-panelled reading room" metaphor is most alive here.

**Data-First: Medium.** The JetBrains Mono stats panel and the source transparency bar have a quiet authority. But the knowledge graph pulls the aesthetic toward "data product" rather than "editorial publication." Bloomberg Terminal feels premium. But it does not feel editorial.

**Teaching-First: Weak.** A page dominated by three cards with numbered article lists inside them reads as "course platform" or "learning management system." Coursera, not The Economist. The warm paper background and Libre Baskerville title help, but the structural pattern (numbered learning paths with read-time estimates) overrides the editorial signals.

**Navigator-First: Weak.** Five equal tiles with counts is the structure of a SaaS dashboard or a documentation site. Stripe's docs, Notion's help centre, Tailwind's docs — all use tile grids as their landing page. The layout is clean and efficient but it has zero editorial personality. Nothing says "publication."

---

### 7. Likelihood of feeling intuitive to a non-expert user

**Editorial-First: Strong.** Everyone has seen a publication homepage. The pattern — big headline, supporting story, section cards below — is instantly recognisable. The visitor does not need to understand climate finance to understand the page. They just read what is in front of them.

**Teaching-First: Strong.** "Where to Start" is explicit. The three trails have plain-English descriptions. A non-expert can read "The Greenwashing Trail: From misleading claims to criminal charges" and immediately know whether that is relevant to them. The page does the orientation work for the visitor.

**Navigator-First: Medium.** The tile grid is a familiar pattern, but it requires the visitor to already know what they want. A non-expert seeing "Frameworks (13)" does not know what a climate finance framework is or why there are 13 of them. The interface is intuitive; the content labels are not.

**Data-First: Weak.** Force-directed graphs are not intuitive to non-experts. The visitor sees coloured dots and connecting lines and has to figure out that each dot is an article and each line is a connection. The stats panel ("48 articles, 240+ connections") is clear, but the graph — the page's centrepiece — requires a legend and a learning curve. This is the only layout where the hero element might confuse the visitor.

---

### 8. Distinctiveness from generic SaaS or blog layouts

**Data-First: Strong.** No blog or SaaS product leads with a knowledge graph. The stats panel + interactive graph + source transparency bar is a combination that does not exist on any standard template. A visitor arriving at this page would immediately know they have never seen this layout before. Distinctiveness is this layout's genuine superpower.

**Editorial-First: Medium.** The dark hero + featured article + thread cards is recognisable as a publication pattern, which means it is not generic SaaS, but it is not unprecedented either. Bloomberg Green, Carbon Brief, and other climate publications use similar structures. The sienna accent, Libre Baskerville, and warm paper surface differentiate it visually, but the structural pattern is familiar.

**Teaching-First: Medium.** The "three learning paths" structure is distinctive compared to blogs and SaaS, but it exists in education platforms (Coursera, Khan Academy, Codecademy). A visitor might pattern-match it to "online course" rather than "wiki" or "publication."

**Navigator-First: Weak.** This is the layout most likely to be mistaken for a SaaS documentation site or a generic knowledge base. Five category tiles with counts is exactly how Stripe, Twilio, and every API documentation site organises their landing page. The visual treatment (warm colours, serif type) would differentiate it somewhat, but the structural pattern is the most common layout on the internet for this kind of content.

---

## Scorecard

| Criterion | Navigator | Editorial | Teaching | Data |
|---|---|---|---|---|
| Information hierarchy | Medium | **Strong** | Medium | Weak |
| First-time orientation | Weak | **Strong** | **Strong** | Weak |
| Reading comfort | Medium | **Strong** | Medium | Weak |
| Scannability | **Strong** | Medium | Medium | Medium |
| Climate finance suitability | Weak | **Strong** | **Strong** | Medium |
| Premium/editorial feel | Weak | **Strong** | Weak | Medium |
| Intuitive for non-experts | Medium | **Strong** | **Strong** | Weak |
| Distinctiveness | Weak | Medium | Medium | **Strong** |

---

## Rankings

| Rank | Layout | Rationale |
|------|--------|-----------|
| **1** | **Editorial-First** | Strongest across the most criteria. Wins on hierarchy, orientation, reading comfort, premium feel, and intuitiveness. Its weakness (delays task-oriented visitors) is real but manageable — the nav bar still has category links. The PRD says the site should "look like a publication" and this is the only layout that actually delivers that. |
| **2** | **Teaching-First** | Strong on orientation and content suitability. It solves a real problem (non-expert visitors need a starting path) that the other layouts ignore. Falls to second because it sacrifices the publication feel and ages poorly for returning visitors. |
| **3** | **Data-First** | The most distinctive layout, but distinctiveness without intuitiveness is a liability. The knowledge graph is genuinely differentiating but it asks too much of the first-time visitor. Strong for a secondary audience (evaluators, analysts) that is not the primary target. |
| **4** | **Navigator-First** | Efficient but empty. It is the best layout for someone who already knows exactly what they want and the worst layout for everyone else. It fails on the PRD's stickiness goal, fails on editorial feel, and is indistinguishable from a documentation site. A useful navigation pattern, but not a landing page philosophy. |

---

## Recommendation

**Editorial-First is the lead direction.**

It is the only layout that does what the PRD actually asks for: make the site feel like a publication on first contact. A comms professional arriving at this page sees authority, editorial judgment, and clear structure — exactly what they need to decide "this is worth my time" within 5 seconds.

The landing page's job, per the page logic document, is to "earn enough trust for a click." A curated featured case study with a pull-quote and a confident headline earns that trust faster than a directory, a curriculum, or a dashboard.

The editorial-first layout also has the best alignment with the brand principles:

- **Warmth:** Dark hero with warm sienna accents, pull-quote with the left-border treatment
- **Progressive disclosure:** Calm at the door, density increases as you scroll
- **Professional credibility:** Reads as published, not uploaded
- **Typographic seriousness:** Libre Baskerville at hero scale does more brand work than any other element

Its main weakness — task-oriented visitors have to scroll past the editorial — is already solved by the persistent dark nav with category links. The directory is always one click away in the nav bar.

---

## Hybrid improvement

**Steal the "Where to Start" framing from Teaching-First, but compress it.**

The editorial-first layout already has three story thread cards below the featured piece. Right now they are structurally identical horizontal cards. Instead, add the uppercase section label "WHERE TO START" above them and include a one-line description per thread — but do not list all six articles inside each card. Keep the cards compact: thread title, one-sentence teaser, article count, estimated total read time, and a "Start this trail" CTA.

This borrows the Teaching-First layout's strongest idea (explicit onboarding guidance for non-experts) without borrowing its weaknesses (the course-catalogue density, the full article lists, the loss of editorial feel). The section label does the work: it tells first-time visitors "these are curated entry points" without turning the page into a syllabus.

The result: a page that leads with editorial authority (the featured case study), follows with structured guidance (the compressed thread cards), and closes with scope and discovery (the category row and graph teaser). Three layers, three jobs, one clear reading path.

---

*Evaluates: Navigator-First, Editorial-First, Teaching-First, Data-First*
*Recommendation: Editorial-First with Teaching-First hybrid*
*Created: 2026-04-17*
