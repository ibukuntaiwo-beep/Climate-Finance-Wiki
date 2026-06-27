# Landing Page — Four Layout Philosophies

> Four genuinely different theories of how the landing page should work.
> Not cosmetic rearrangements — each one represents a different belief about the page's primary job.
> Written for someone with no design background.
> **Date:** 2026-04-17
> **Inputs:** WIKI_DESIGN_TOKENS.md, BRAND_STYLE_GUIDE.md, PRD.md, WIKI_REFERENCE_SITE_ANALYSIS.md, WIKI_PAGE_LOGIC.md

---

## 1. Navigator-First

### Core idea

The landing page is a map. Its only job is to show the full territory and get the visitor to the right article as fast as possible.

### What it prioritizes

Speed to first click. The visitor sees every category, gets a sense of depth (article counts, connection counts), and picks an entry point. Navigation is the content.

### What tradeoff it makes

No emotional hook. There is no featured case study pulling the visitor into a story. The page is functional, not seductive. First-time visitors who do not know what they are looking for get a menu but no recommendation.

### Which users it serves best

Returning visitors and comms professionals who arrive with a specific question: "I need the article on green bonds before my 2pm meeting." They want the directory, not the magazine cover.

### Which reference pattern influenced it

CFR's topic/region taxonomy as primary navigation — the idea that professionals think along specific axes and the homepage should match those axes. Also draws from the page logic's emphasis on "I can find the article I need in under 10 seconds."

### Block-level wireframe

```
┌──────────────────────────────────────────────────┐
│  DARK NAV: Red Barrow wordmark │ Category links  │
├──────────────────────────────────────────────────┤
│  MASTHEAD (compact)                              │
│  Site title (Libre Baskerville, large)            │
│  One-line tagline + stat: "48 articles · 5       │
│  categories · 240+ connections"                  │
├──────────────────────────────────────────────────┤
│  CATEGORY TILES (5 equal tiles, full width)      │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐            │
│  │CONCEPTS │ │INSTRU-  │ │ACTORS   │            │
│  │12 arts  │ │MENTS    │ │9 arts   │            │
│  │One-line │ │6 arts   │ │One-line │            │
│  │desc     │ │One-line │ │desc     │            │
│  └─────────┘ └─────────┘ └─────────┘            │
│  ┌─────────┐ ┌─────────┐                        │
│  │FRAME-   │ │CASE     │                        │
│  │WORKS    │ │STUDIES  │                        │
│  │13 arts  │ │8 arts   │                        │
│  └─────────┘ └─────────┘                        │
├──────────────────────────────────────────────────┤
│  RECENTLY UPDATED (compact list, 4-6 items)      │
│  Title + category badge + date · no previews     │
├──────────────────────────────────────────────────┤
│  KNOWLEDGE GRAPH TEASER (small, one-line CTA)    │
├──────────────────────────────────────────────────┤
│  FOOTER                                          │
└──────────────────────────────────────────────────┘
```

### Why it would feel intuitive

It mirrors how people use a reference book: open the front cover, see the table of contents, go straight to the chapter. No one reads the introduction to an encyclopedia. The visitor's mental model — "this is a reference, show me the structure" — matches the page exactly.

### Where it might fail

First-time visitors who do not know what climate finance is. They see five categories and no help choosing. There is no story pulling them in, no "start here" signal, no curiosity trigger. If someone arrives via a general search rather than a specific need, the page feels cold. The PRD's stickiness engine (featured case study, story threads, "you might not expect") is almost entirely absent here, so the north star metric — "arrive for one, stay for ten" — has no mechanism on this page.

---

## 2. Editorial-First

### Core idea

The landing page is a publication cover. One editorially curated piece dominates the page, earning trust through the quality of a single story before showing anything else.

### What it prioritizes

First impression and emotional hook. The featured case study is not a sidebar — it is the page. A comms professional arriving for the first time should think: "Whoever made this knows what they are talking about." Credibility is established through one confident editorial choice, not through comprehensiveness.

### What tradeoff it makes

The full category structure is pushed below the fold. A visitor who knows exactly what they want has to scroll past the editorial to find the directory. The page favours discovery over efficiency.

### Which users it serves best

First-time visitors who followed a link, searched for "climate finance wiki," or heard about the site from a colleague. They do not know what they need yet. They need a reason to stay. Also serves the secondary audience (journalists, researchers) who respond to editorial authority.

### Which reference pattern influenced it

The New Yorker's premise that one strong piece of content is the entire homepage identity. Also the brand guideline's principle of progressive disclosure: "the landing page is the calmest page on the site — it does one job: earn enough trust for a click."

### Block-level wireframe

```
┌──────────────────────────────────────────────────┐
│  DARK NAV: Red Barrow wordmark │ Category links  │
├──────────────────────────────────────────────────┤
│  DARK HERO (generous height)                     │
│  Small label: "A RED BARROW PUBLICATION"         │
│  Site title (Libre Baskerville, 3xl)             │
│  Tagline (one line, muted)                       │
├──────────────────────────────────────────────────┤
│  FEATURED CASE STUDY (60-70% of viewport width) │
│  ┌──────────────────────┬──────────────────┐     │
│  │ Label: FEATURED      │ TOPIC OF THE DAY │     │
│  │ CASE STUDY           │                  │     │
│  │                      │ Title            │     │
│  │ Large serif headline │ Two-line teaser  │     │
│  │ Pull-quote (italic,  │ Read →           │     │
│  │ sienna left-border)  │──────────────────│     │
│  │                      │ IN THE NEWS      │     │
│  │ Short paragraph      │ Headline + source│     │
│  │ Read the full case   │ Explore →        │     │
│  │ study →              │                  │     │
│  └──────────────────────┴──────────────────┘     │
├──────────────────────────────────────────────────┤
│  STORY THREADS (3 horizontal cards)              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │Greenwash │ │Follow the│ │Arch. of  │         │
│  │Trail     │ │Money     │ │Policy    │         │
│  │6 articles│ │6 articles│ │6 articles│         │
│  │Teaser    │ │Teaser    │ │Teaser    │         │
│  └──────────┘ └──────────┘ └──────────┘         │
├──────────────────────────────────────────────────┤
│  CATEGORY OVERVIEW (compact row, below fold)     │
│  Concepts(12)·Instruments(6)·Actors(9)·          │
│  Frameworks(13)·Case Studies(8)                  │
├──────────────────────────────────────────────────┤
│  KNOWLEDGE GRAPH TEASER + CTA                    │
├──────────────────────────────────────────────────┤
│  FOOTER                                          │
└──────────────────────────────────────────────────┘
```

### Why it would feel intuitive

It matches the mental model of a publication — the Financial Times, The Economist, Bloomberg Green. Comms professionals already know this pattern: the front page leads with the most important story. They scan the headline and pull-quote to decide whether to engage. The editorial voice signals authority immediately. The page logic doc says the visitor needs to understand "this is a publication, not a blog" within 5 seconds — this layout makes that unmistakable.

### Where it might fail

If the featured case study does not resonate with a particular visitor (say, they need information about the EU Taxonomy and the featured piece is about HSBC greenwashing), the page's biggest asset becomes an obstacle. The category structure is pushed far enough down that task-oriented visitors might feel the page is not a reference tool at all. The "magazine trap" anti-pattern from the page logic document — where rotating editorial makes the page feel like a news site — is a real risk if the editorial changes too often and the page never feels stable.

---

## 3. Teaching-First

### Core idea

The landing page is an onboarding path. Instead of showing a menu or a magazine cover, it answers the question most first-time visitors actually have: "I do not know where to start — guide me."

### What it prioritizes

Story threads and learning sequences. The three guided reading paths are the dominant content — not tucked below a hero, but positioned as the primary entry mechanism. The page assumes most visitors are not experts in climate finance; they are professionals who need to get up to speed.

### What tradeoff it makes

Experienced visitors who already know the territory feel patronized. The "start here" framing is unnecessary for someone who knows exactly which article they need. Category navigation exists but is secondary. The page is optimized for the first visit, not the fifteenth.

### Which users it serves best

Comms professionals who have been told "you need to understand climate finance" but have no existing framework. The person who would otherwise spend 30 minutes wandering Wikipedia and leave more confused. Also journalists starting a climate finance beat who need a structured crash course.

### Which reference pattern influenced it

Colossus's progressive disclosure model — summary → table of contents → full content. Also the PRD's story thread concept (sequential reading paths like a Netflix series) and the stickiness engine's core promise: "arrive for one, stay for ten."

### Block-level wireframe

```
┌──────────────────────────────────────────────────┐
│  DARK NAV: Red Barrow wordmark │ Category links  │
├──────────────────────────────────────────────────┤
│  MASTHEAD (warm paper surface)                   │
│  Site title (Libre Baskerville)                  │
│  Tagline: "Climate finance explained for the     │
│  people who have to explain it to everyone else" │
│  Small stat line: 48 articles · 5 categories     │
├──────────────────────────────────────────────────┤
│  "WHERE TO START" (section label, uppercase)     │
│                                                  │
│  Three tall thread cards, stacked or side-by-    │
│  side, each showing:                             │
│  ┌────────────────────────────────────────┐      │
│  │ THE GREENWASHING TRAIL                 │      │
│  │ "From misleading claims to criminal    │      │
│  │  charges."                             │      │
│  │ 6 articles · ~35 min total read time   │      │
│  │                                        │      │
│  │ 1. Greenwashing                        │      │
│  │ 2. Greenwashing Typology               │      │
│  │ 3. VW Dieselgate                       │      │
│  │ 4. HSBC Greenwashing                   │      │
│  │ 5. DWS SEC Fine                        │      │
│  │ 6. Climate Litigation                  │      │
│  │                                        │      │
│  │ Start this trail →                     │      │
│  └────────────────────────────────────────┘      │
│  [Similar cards for "Follow the Money" and       │
│   "Architecture of Climate Policy"]              │
├──────────────────────────────────────────────────┤
│  "OR BROWSE BY TOPIC" (section label)            │
│  Category row: Concepts(12) · Instruments(6)     │
│  · Actors(9) · Frameworks(13) · Case Studies(8)  │
├──────────────────────────────────────────────────┤
│  FEATURED CASE STUDY (compact, single card)      │
│  Headline + one-line teaser + CTA                │
├──────────────────────────────────────────────────┤
│  KNOWLEDGE GRAPH TEASER                          │
├──────────────────────────────────────────────────┤
│  FOOTER                                          │
└──────────────────────────────────────────────────┘
```

### Why it would feel intuitive

It solves the "blank page" problem. Most reference sites drop the visitor into a directory and hope they know what to click. This page says: "Here are three expert-curated paths through this material. Pick the one that matches your need." The reading path metaphor (a trail, a money flow, a policy architecture) gives the visitor a mental model before they read a single article. It transforms the wiki from a database into a curriculum. The PRD's north star — visitors arrive for one article and stay for ten — works best when the page gives them a sequence to follow, not just a list to pick from.

### Where it might fail

The returning visitor problem. Once someone has completed a thread or already knows the landscape, the "Where to Start" framing is wasted space. The page would need to age well — and a teaching-first page ages poorly because its primary value is onboarding. The page also feels less like a publication (one of the PRD's goals: "looks like a publication, reads like Wikipedia") and more like a course catalogue. If the visitor has a specific, urgent question, being shown three 6-article trails instead of a search bar or directory feels like being handed a textbook when they need a dictionary.

---

## 4. Data-First

### Core idea

The landing page is a dashboard. It leads with numbers, scale, and the knowledge graph — proving the wiki's authority through visible scope and measurable structure, not through prose or editorial curation.

### What it prioritizes

Credibility through evidence. The page answers "why should I trust this?" not with a curated story, but with data: 48 articles, 240+ connections, 5 categories, sources from ICMA and CFA and the SEC. The knowledge graph is not a teaser at the bottom — it is the centrepiece. Every element has a number attached to it.

### What tradeoff it makes

Emotional warmth. The page feels authoritative but not inviting. There is no narrative pull, no "read this story" hook. A visitor who responds to stories more than numbers will find the page impressive but cold. The brand principle of warmth ("not cozy, not playful — warm in the way good materials and considered lighting are warm") is harder to deliver when the dominant language is statistical.

### Which users it serves best

ESG analysts, policy researchers, and senior professionals evaluating whether this resource is comprehensive enough to rely on. People who think: "How much of climate finance does this actually cover?" before they think "What article should I read first?" Also serves the secondary audience of journalists who need to quickly gauge whether this is a one-person blog or a serious reference.

### Which reference pattern influenced it

The wiki design tokens' emphasis on JetBrains Mono for data and statistics. The PRD's "scale signal" (showing article and connection counts). The reference analysis's observation that Colossus.com uses the absence of clutter and the presence of structured data as credibility devices.

### Block-level wireframe

```
┌──────────────────────────────────────────────────┐
│  DARK NAV: Red Barrow wordmark │ Category links  │
├──────────────────────────────────────────────────┤
│  DARK HERO (compact)                             │
│  Site title                                      │
│  Tagline                                         │
├──────────────────────────────────────────────────┤
│  KEY STATS PANEL (3-4 columns, JetBrains Mono)   │
│  ┌──────────┬──────────┬──────────┬──────────┐   │
│  │    48    │   240+   │    5     │    3     │   │
│  │ articles │ connect- │ categor- │ guided   │   │
│  │          │ ions     │ ies      │ trails   │   │
│  └──────────┴──────────┴──────────┴──────────┘   │
├──────────────────────────────────────────────────┤
│  KNOWLEDGE GRAPH (large, interactive preview)    │
│  ┌──────────────────────────────────────────┐    │
│  │                                          │    │
│  │     ○ ── ○          ○                    │    │
│  │    / \    \        / \                   │    │
│  │   ○   ○    ○ ── ○    ○                  │    │
│  │        \  /       \                     │    │
│  │         ○          ○ ── ○               │    │
│  │                                          │    │
│  │  Nodes color-coded by category            │    │
│  │  Explore full graph →                    │    │
│  └──────────────────────────────────────────┘    │
├──────────────────────────────────────────────────┤
│  CATEGORIES WITH DEPTH INDICATORS                │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐      │
│  │ CONCEPTS  │ │INSTRUMENTS│ │ ACTORS    │      │
│  │ 12 arts   │ │ 6 arts    │ │ 9 arts    │      │
│  │ 47 conn.  │ │ 31 conn.  │ │ 38 conn.  │      │
│  │ Top:      │ │ Top:      │ │ Top:      │      │
│  │ Green     │ │ Green     │ │ UNFCCC    │      │
│  │ Finance,  │ │ Bonds,    │ │ World     │      │
│  │ Stranded  │ │ SLBs,     │ │ Bank,     │      │
│  │ Assets    │ │ Carbon    │ │ ICMA      │      │
│  │           │ │ Offsets   │ │           │      │
│  │ Browse →  │ │ Browse →  │ │ Browse →  │      │
│  └───────────┘ └───────────┘ └───────────┘      │
│  [+ Frameworks, Case Studies]                    │
├──────────────────────────────────────────────────┤
│  SOURCES TRANSPARENCY BAR                        │
│  "Built from: CFA Climate Finance, ICMA Green    │
│   Bond Principles, UNFCCC reports, SEC filings"  │
├──────────────────────────────────────────────────┤
│  FOOTER                                          │
└──────────────────────────────────────────────────┘
```

### Why it would feel intuitive

It appeals to the evaluator mindset. A comms professional deciding whether to bookmark this resource looks for signals of completeness and rigour. The data-first page says: "Here is exactly what we cover, how deep it goes, and where the information comes from." The knowledge graph as a centrepiece is a unique differentiator — no other climate finance resource shows its own connection structure this prominently. The JetBrains Mono stats panel, combined with the source transparency bar, creates a credibility stack that works without any editorial prose. The visitor knows within seconds that this is not a blog with five posts — it is a structured body of work.

### Where it might fail

It can feel like a dashboard for a tool rather than the front door of a publication. The PRD says the site should "look like a publication (FT/Economist), read like Wikipedia, feel addictive to browse." A stats-and-graph landing page achieves the Wikipedia and addictive parts but misses the publication feel. There is no human editorial voice — no curated pick, no pull-quote, no "someone who knows this subject chose this for you today." The featured case study and story threads, which are the PRD's primary stickiness mechanisms, are absent or buried. The knowledge graph, while impressive, can intimidate a visitor who has never seen a force-directed graph and does not know what the nodes mean. And the brand principle of warmth — the sunset gradient, the mahogany reading room — is hard to feel when the dominant visual element is a network diagram.

---

## Comparison

| | Navigator | Editorial | Teaching | Data |
|---|---|---|---|---|
| **Page metaphor** | Table of contents | Publication cover | Course catalogue | Dashboard |
| **Hero element** | Category tiles | Featured case study | Story thread cards | Knowledge graph |
| **First question answered** | "Where is what I need?" | "Is this credible and interesting?" | "Where do I start?" | "How comprehensive is this?" |
| **Biggest strength** | Speed to first click | Emotional hook | Onboarding path | Authority signal |
| **Biggest weakness** | No discovery engine | Delays task-oriented visitors | Patronizes returning visitors | Feels cold |
| **Density** | Low-medium | Low | Medium | Medium |
| **Best audience** | Returning visitors with a specific need | First-time visitors with no specific question | Beginners who need structure | Evaluators assessing the resource |

---

*Page type: Landing Page*
*Four layout philosophies — no HTML, no final selection*
*Created: 2026-04-17*
