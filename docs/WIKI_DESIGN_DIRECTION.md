# Climate Finance Wiki  -  Design Direction

**Status:** Decision made. M5  -  Premium Reference selected on 2026-04-17.
**Purpose:** Documents the design exploration and final decision for the wiki's visual identity.
**Final tokens:** `docs/WIKI_DESIGN_TOKENS.md`
**Mockups:** `mockups/wiki-directions/m5-premium-reference-landing.html` and `m5-premium-reference-article.html`

> **Decision summary:** 8 directions were explored (3 vanilla, 5 mixes). The owner selected **M5  -  Premium Reference**: Libre Baskerville (display) + DM Sans (body) + Sienna #A65D3F (primary) + Slate Blue #4E6F8E (secondary) + layered surfaces with dark nav. A taste audit was then applied for accessibility, contrast, and responsive behaviour. Green/sage secondary accents were explored and rejected  -  the final secondary is slate blue.

---

*The exploration process below is preserved for reference. It documents the reasoning behind each option and why M5 was the strongest fit.*

---

## Benchmark Publications

Before diving into choices, here's what we can learn from four publications that operate in similar territory  -  serious editorial content, data-heavy subjects, professional audiences.

### Financial Times

**What they do well:** The FT's most recognizable design choice is their salmon pink background color  -  it makes every page instantly identifiable. Their typography is traditional serif for headlines, clean sans-serif for body text. Despite being information-dense, pages feel organized because of generous spacing and clear hierarchy.

**Lesson for us:** A distinctive background temperature (not plain white) can become a brand signature. Typography does most of the personality work  -  the FT doesn't need flashy graphics because the type choices carry authority.

### The Economist

**What they do well:** Dense but navigable. They pack a lot of information into tight layouts, but strict rules about spacing, type sizes, and color usage keep it readable. Their data visualizations (charts, maps) are consistently excellent  -  a recognizable house style.

**Lesson for us:** You can be information-rich without being overwhelming if you have disciplined rules about how content is structured. The Economist earns its density  -  you trust the layout because it's consistent.

### Carbon Brief

**What they do well:** This is probably the closest thing to what we're building  -  a specialist reference site on climate topics. Clean white backgrounds, green accents, heavy use of interactive charts and data. Feels modern and web-native rather than trying to mimic print.

**Lesson for us:** A climate-focused publication doesn't need to scream "climate" with green everything. Carbon Brief uses green sparingly as an accent and lets the content carry the environmental message. Their layout is calm and readable  -  more "research platform" than "newspaper."

### Bloomberg Green

**What they do well:** Premium magazine feel with bold imagery and modern typography. They blend editorial storytelling with data journalism seamlessly. The design feels expensive and confident.

**Lesson for us:** You can be both beautiful and data-serious. Bloomberg Green proves that a publication about climate finance can feel premium rather than worthy/earnest/dry.

---

## Decision 1: Display Font

> **What "display font" means:** The typeface used for headlines, article titles, and other large text. This is the single biggest personality lever  -  it's the first thing that sets the tone when someone lands on a page.

The brand guide says the wiki's display font should carry "product personality" and that serif = editorial authority. Internia uses **Outfit** (a geometric sans-serif  -  clean, modern, game-like). The wiki should feel different.

**Why serif makes sense for the wiki:** Newspapers, journals, academic publications, and books have used serif typefaces for centuries. Our brains are trained to associate serifs with "this has been published, vetted, and is worth trusting." For a reference wiki aimed at professionals, that trust signal matters.

All three options below are free Google Fonts (no licensing cost, easy to add to Astro).

### Option A: Fraunces  -  "The Warm Authority"

A serif typeface with personality. It has what designers call "old-style" proportions (think: the kind of elegant lettering you'd see in a beautifully typeset book from a boutique publisher). The letters have soft, organic details  -  little curves and terminals (the endings of strokes) that feel handcrafted rather than mechanical.

**What it feels like:** A thoughtful publication that cares about its readers. Warm, inviting, but clearly serious. Think: a well-designed independent journal, not a cold academic paper.

**Why it could work:** Most aligned with Red Barrow's "warmth" principle. Has real character  -  visitors would recognize it. It's a variable font, meaning it can smoothly scale from delicate to bold, which gives us flexibility for different heading levels.

**The risk:** It has personality, which means it's opinionated. Some might read it as "too editorial" or "too magazine" for a reference wiki. It's also a newer typeface  -  less "establishment" credibility than something classic.

### Option B: Libre Baskerville  -  "The Classic"

Based on Baskerville, one of the most respected typefaces in publishing history. This is a digital version optimized for screens. Clean, elegant, perfectly proportioned. The letters are precise and balanced  -  nothing calls attention to itself.

**What it feels like:** An established reference work. Authoritative and timeless. Think: if the Encyclopedia Britannica got a tasteful modern redesign.

**Why it could work:** Instant editorial credibility. Everyone subconsciously recognizes Baskerville-style type as "serious and published." It pairs beautifully with clean sans-serif body fonts. It's also extremely well-tested  -  millions of websites use it, so we know it renders well everywhere.

**The risk:** It's common. Many publications use Baskerville variants, so it's harder to stand out. It's also a touch formal  -  could feel stiff if not balanced with warm colors and generous spacing.

### Option C: Crimson Pro  -  "The Scholar"

A transitional serif designed for professional typesetting. "Transitional" means it sits between old-style warmth and modern precision  -  the letters are refined and balanced, with enough personality to avoid feeling sterile but enough discipline to feel authoritative.

**What it feels like:** An academic journal that's unusually readable. Scholarly without being stuffy. Think: the kind of publication where every article has been carefully reviewed, but they actually want people to read it.

**Why it could work:** Natural fit for a knowledge base. The scholarly associations work in our favor  -  this wiki is a reference work, and Crimson Pro communicates "we did the research." It has excellent readability at all sizes, which matters for a text-heavy site.

**The risk:** Could feel too academic for a comms professional audience. The scholarly association might push toward "textbook" rather than "publication"  -  which is the wrong direction for our audience.

### Quick comparison

| | Fraunces | Libre Baskerville | Crimson Pro |
|---|---|---|---|
| **Personality** | Warm, distinctive | Classic, authoritative | Scholarly, refined |
| **Warmth** | Most warm | Moderate | Moderate |
| **Authority** | Earned through character | Immediate (recognition) | Earned through precision |
| **Risk** | Too magazine-ish | Too common | Too academic |
| **Best for** | Standing out, warmth | Credibility, trust | Knowledge depth |

---

## Decision 2: Body Font

> **What "body font" means:** The typeface used for article text, descriptions, labels  -  everything that isn't a headline. You spend 90% of your reading time in this font, so readability is everything.

The brand guide says: always a clean sans-serif. Internia uses **Inter**, so the wiki should use something different to maintain product distinction.

### Option A: Source Sans 3  -  "The Professional"

Adobe's workhorse sans-serif, now open-source. Designed specifically for user interfaces and reading on screens. Neutral, clean, with just enough humanist character (slightly rounded shapes) to avoid feeling robotic.

**What it feels like:** Clear, professional, invisible in the best way. You don't notice the font  -  you just read comfortably. Think: the typographic equivalent of a well-lit room.

**Pairs well with:** All three display options. Especially strong with Libre Baskerville (clean meets classic) or Crimson Pro (both have a quiet professionalism).

### Option B: IBM Plex Sans  -  "The Data-Ready"

Designed by IBM for information-dense environments  -  dashboards, documentation, data reports. It has a slight mechanical precision to it (very consistent letter spacing, clear number forms) that makes it excellent when text lives alongside data and charts.

**What it feels like:** Precise, trustworthy, engineered for clarity. Think: the difference between hand-written and typeset  -  IBM Plex is typeset.

**Pairs well with:** All three display options. Especially strong with Fraunces (warm headlines + precise body creates interesting contrast) or in data-heavy article sections.

### Option C: DM Sans  -  "The Approachable"

A geometric sans-serif with warmth. The letters are based on circles and clean geometry, but with rounded details that keep it friendly. It's the warmest of the three options  -  it has a gentle, approachable feel.

**What it feels like:** Modern, clean, friendly but not casual. Think: a design-forward company's documentation that you actually enjoy reading.

**Pairs well with:** Fraunces (both are warm, cohesive feel) or Libre Baskerville (warmth in body balances formality in headlines).

### Quick comparison

| | Source Sans 3 | IBM Plex Sans | DM Sans |
|---|---|---|---|
| **Character** | Neutral professional | Precise, engineered | Warm, geometric |
| **Reading comfort** | Excellent | Excellent | Very good |
| **With data/charts** | Good | Best | Good |
| **Warmth** | Moderate | Cool | Most warm |
| **Differentiation from Inter** | Moderate | Strong | Strong |

---

## Decision 3: Primary Accent Color

> **What "primary accent" means:** The color that appears on buttons, links, highlighted elements, active states  -  the color that says "this is interactive" or "this is important." It's the wiki's signature color, like copper is for Internia.

The brand guide says: warm family (amber/copper/coral range), distinct from Internia's copper `#D4845F`. Put them next to each other  -  they should look like family, not like the same color.

### Option A: Amber  -  #C49A3C

A warm golden-brown, like aged honey or the spine of a leather-bound book. It sits about 20 degrees away from copper on the color wheel  -  clearly different (more golden, less orange) but unmistakably warm.

**What it feels like:** Knowledge, warmth, authority. Old libraries, good whiskey, late afternoon sunlight. It has associations with wisdom and quality without being flashy.

**Why it could work:** Most distinct from copper while staying in the warm family. Has strong "published reference" associations. Works beautifully with serif typography and paper-like surfaces. Natural fit for a knowledge base.

**The risk:** Could read as "old-fashioned" if paired with overly traditional design choices. Needs modern layout and spacing to stay contemporary.

**Next to Internia's copper:** Copper is orange-warm, amber is golden-warm. They're clearly different colors but look like siblings  -  exactly what the brand guide asks for.

### Option B: Terracotta  -  #BF6F50

An earthy red-brown, like clay pots, brick, or ochre pigment. Closer to copper in hue but earthier and more grounded  -  less polished, more natural.

**What it feels like:** Grounded, earthy, organic. Strong association with natural materials and the built environment. It has a directness that feels honest.

**Why it could work:** Strong climate/earth associations without being heavy-handed (it's not green). Warm and distinctive. Creates a "natural materials" feeling that pairs well with paper surfaces.

**The risk:** Might feel too close to Internia's copper  -  the distinction is subtler than amber. Could also feel too "artisanal/craft" for a professional reference.

**Next to Internia's copper:** They're neighbors  -  both warm orange-browns. You can tell them apart, but the family resemblance is very strong. Maybe too strong.

### Option C: Sienna  -  #A65D3F

A deeper, darker warm brown  -  like burnt umber pigment, dark timber, or rich earth. It's in the same hue neighborhood as copper but significantly darker and richer.

**What it feels like:** Serious, grounded, substantial. This color has weight to it. Think: a mahogany desk, a leather portfolio, dark roasted coffee.

**Why it could work:** The depth and darkness communicate gravitas  -  this is a serious reference work about serious topics (climate finance). It's warm without being bright, which creates a mature, confident impression.

**The risk:** Darker accents have less visual "pop"  -  buttons and links need to be large enough to register. Could make the site feel heavy if overused. Needs lighter supporting colors to balance.

**Next to Internia's copper:** Copper is brighter and warmer; sienna is deeper and more subdued. They're clearly family (same warm undertone) but play different roles  -  copper is energetic, sienna is contemplative.

### Side by side

| | Amber #C49A3C | Terracotta #BF6F50 | Sienna #A65D3F |
|---|---|---|---|
| **Temperature** | Warm golden | Warm earthy | Warm deep |
| **Brightness** | Bright | Medium | Dark |
| **Distance from copper** | Most distinct | Closest | Medium |
| **Association** | Knowledge, authority | Earth, craft | Gravitas, depth |
| **Risk** | Old-fashioned | Too close to copper | Too dark |

---

## Decision 4: Secondary Accent Color

> **What "secondary accent" means:** A supporting color that plays a different role from the primary accent. In Internia, gold `#f5c842` is the secondary  -  it marks achievements and celebration. The wiki's secondary accent would serve different purposes: highlighting data, marking key insights, navigation wayfinding, link colors.

### Option A: Sage  -  #5B8A72

A muted green with warm undertones  -  think dried herbs, eucalyptus, or aged copper patina. It's a "cool" color (green/teal family) that creates temperature contrast with whatever warm primary we choose.

**What it feels like:** Calm, natural, understated expertise. It says "environment" without shouting it.

**Why it could work:** Creates visual contrast  -  warm primary for "action" elements (buttons, CTAs), cool sage for "information" elements (data highlights, links, chart accents). The environmental association is there but subtle, which matches our "don't scream climate with green everything" lesson from Carbon Brief. Also pairs beautifully with all three primary accent options.

**The risk:** A green in a climate publication  -  is it too on-the-nose? I'd argue the muted, sage quality avoids the cliche of "bright green = eco." But worth considering.

### Option B: Slate Blue  -  #5B7B9E

A cool, muted blue-grey  -  think overcast sky, ink, slate stone. Professional and understated. This is closer to what most serious publications use for links and secondary interface elements.

**What it feels like:** Professional, calm, trustworthy. It recedes  -  it doesn't compete with the warm primary.

**Why it could work:** Blue is the most universally trusted color for links and interactive elements (every major website has trained us to expect blue links). Using it as a secondary keeps the interface intuitive. It creates strong temperature contrast with warm primaries.

**The risk:** Could feel generic  -  "blue links" aren't distinctive. Might make the wiki feel more like a corporate site than a publication.

### Option C: Warm Gold  -  #D4A843

A golden yellow-brown  -  similar in spirit to Internia's gold `#f5c842` but warmer and more muted. Less "celebration," more "highlight."

**What it feels like:** Important, noteworthy, premium. It draws the eye without alarming.

**Why it could work:** Stays entirely in the warm color family, creating a cohesive amber-gold palette. Great for "key insight" callouts, important data points, and featured content markers. Maintains the Red Barrow warmth principle across the entire palette.

**The risk:** Two warm accents (primary + secondary) with no cool contrast could feel monotone. Less useful for differentiating element types (if everything is warm, nothing stands out).

### Quick comparison

| | Sage #5B8A72 | Slate Blue #5B7B9E | Warm Gold #D4A843 |
|---|---|---|---|
| **Temperature** | Cool (contrast) | Cool (contrast) | Warm (cohesive) |
| **Distinctiveness** | Most distinctive | Most conventional | Most cohesive |
| **Best role** | Data, links, charts | Links, navigation | Highlights, features |
| **Climate association** | Subtle yes | None | None |
| **Risk** | Too on-the-nose? | Too generic? | Too monotone? |

---

## Decision 5: Surface Treatment

> **What "surface treatment" means:** What are things "made of" in this product? In Internia, everything feels like frosted glass  -  panels are semi-transparent with blur effects, floating over photographs. The wiki needs a different material. This determines background colors, card styles, shadows, and the overall texture of the reading experience.

### Option A: Warm Paper

Backgrounds have a subtle warm tint  -  not pure white (`#ffffff`), but a slightly creamy/warm white (think `#FAF8F5` or similar). Cards and content areas feel like high-quality paper  -  clean, bright, with subtle shadows that create depth. No actual paper texture (that would feel gimmicky), just the color temperature of good paper stock.

**What it feels like:** A beautifully printed publication. Clean and modern, but with warmth you can almost feel. The page has weight.

**How it would look in practice:**
- Page background: warm off-white (`#FAF8F5`)
- Article content area: slightly brighter warm white, with a fine border or soft shadow
- Sidebar/navigation: darker warm surface (warm slate)
- Cards (for article previews, data panels): crisp white with subtle shadow and rounded corners

**Why it could work:** Natural fit for editorial content. The warm tint is a subtle brand signal (like FT's salmon, but much softer). It differentiates strongly from Internia's dark glass surfaces. Excellent readability for long-form content.

**The risk:** "Paper" metaphors can feel dated if pushed too far. The key is warm color temperature, not literal paper simulation.

### Option B: Clean Card

Pure, modern card-based layout. Content lives in distinct white cards on a light neutral background. No warmth in the background itself  -  the warmth comes from accent colors and typography. Think: Notion, Linear, or Stripe's documentation.

**What it feels like:** Modern web platform. Clean, organized, efficient. Information architecture is visible in the layout itself  -  you can see how content is grouped.

**How it would look in practice:**
- Page background: very light grey (`#F5F5F5`) or warm grey (`#F8F7F5`)
- Cards: pure white with consistent border radius, subtle border or shadow
- Dense layouts feel organized because card boundaries create visual order
- Strong contrast between card (white) and background (grey)

**Why it could work:** Most modern and "web-native." Familiar to anyone who uses tools like Notion or Google Docs. The card metaphor naturally creates information hierarchy  -  more important content gets bigger cards. Clean foundation for complex layouts (charts, tables, cross-references).

**The risk:** Could feel too "tool-like"  -  more app than publication. Without warmth in the surfaces themselves, we'd rely entirely on typography and accent colors for personality.

### Option C: Layered Surfaces

Different content types get different surface treatments  -  not one uniform material, but a considered system of surfaces. Article text sits on a clean, reading-optimized surface. Navigation and metadata live on a slightly different surface (warmer, or darker). Data panels have their own treatment. Each surface serves its content.

**What it feels like:** A premium publication that's been designed layer by layer. There's a sense of depth and order  -  you can tell what's primary content and what's supporting information by the surface it sits on.

**How it would look in practice:**
- Main reading surface: warm white, generous margins, clean
- Navigation/category surfaces: slightly warmer or darker tone, creating a frame
- Data panels: distinct treatment  -  perhaps a slightly tinted background with a subtle left border (like Carbon Brief's chart callouts)
- Key insight callouts: warm-tinted surface with accent border

**Why it could work:** Most sophisticated approach. Creates clear visual hierarchy without relying on size alone. Each content type has a "home"  -  readers learn the system quickly. Most aligned with Red Barrow's "Surface Craft" principle.

**The risk:** Most complex to implement and maintain. More design decisions to make downstream. Could feel busy if not carefully balanced.

### Quick comparison

| | Warm Paper | Clean Card | Layered Surfaces |
|---|---|---|---|
| **Feel** | Publication | Platform | Premium publication |
| **Warmth** | In the surfaces | In the accents only | In specific surfaces |
| **Complexity** | Simple | Simple | Complex |
| **Best for** | Editorial focus | Data + editorial mix | Rich content types |
| **Closest benchmark** | FT (warm bg) | Carbon Brief (clean cards) | Bloomberg Green (layered) |

---

## Decision 6: Visual Metaphor

> **What "visual metaphor" means:** The underlying mental model for how the wiki is organized and experienced. When someone lands on the site, what does it remind them of? A newspaper? A book? An atlas? This shapes layout, navigation, and how content is structured visually.

### Option A: Editorial Platform

Not a newspaper, not a book  -  a modern digital publication. Think: Carbon Brief, Stripe's editorial pages, or a well-designed version of Wikipedia. Clean typographic hierarchy, readable layouts, strong navigation. The content is organized by topic (like an encyclopedia) but presented with editorial polish (like a magazine).

**What it feels like:** "This is a serious reference I can trust, and someone clearly put thought into making it readable."

**Layout implications:**
- Landing page: clean hero with a few featured topics, sparse
- Category pages: article lists with brief summaries, maybe a featured article at top
- Article pages: single-column reading with a sidebar for related content and key terms
- Navigation: topic-based, clear breadcrumbs, visible knowledge graph connections

**Why it could work:** Most natural fit for a wiki. Doesn't force a physical-world metaphor onto digital content. Lets the content structure emerge from the topic relationships rather than a layout gimmick. Easiest to build and maintain.

**The risk:** Could feel plain without strong typography and accent colors doing the personality work. Needs the display font and accent color to carry the identity.

### Option B: The Reference Journal

A curated journal  -  articles are carefully selected, each one has been vetted and edited. The reading experience emphasizes depth over breadth. Think: academic journal meets longform journalism. Single-column layouts with generous margins. Pull quotes and key findings are highlighted. Cross-references are prominent.

**What it feels like:** "Each article here is worth reading carefully  -  this isn't a wiki full of stubs."

**Layout implications:**
- Landing page: cover-like treatment with a "featured in this edition" section
- Category pages: curated lists with editorial introductions  -  "This section covers..."
- Article pages: generous reading layout, wide margins, pull quotes, figure captions
- Navigation: less browse-heavy, more "guided reading"  -  suggested paths through content

**Why it could work:** Matches the curation model you already have (the "curation gate" from CLAUDE.md). Every article has been vetted before publishing, so treating the site like a journal isn't pretension  -  it's accurate. The reading experience would feel premium.

**The risk:** Could feel slow or precious. A journal metaphor implies infrequent updates and curated selections, which might not match the wiki's growth model. Also harder to navigate for someone who just wants to look up a specific term quickly.

### Option C: The Atlas

A mapped reference  -  content is organized around a visual structure (a knowledge graph, a map of relationships, a navigable diagram). The central organizing principle isn't a table of contents  -  it's a visualization of how climate finance concepts connect.

**What it feels like:** "I can see the whole landscape and zoom into the parts I care about."

**Layout implications:**
- Landing page: interactive knowledge graph or visual topic map as the hero
- Category pages: cluster view showing related concepts and articles
- Article pages: standard reading layout, but with visible connections to related articles (graph visualization or prominent "Related" section)
- Navigation: both topic-based (traditional) and graph-based (visual)

**Why it could work:** You've already planned a knowledge graph. Making it a central navigation tool (not just a backend feature) would be distinctive  -  very few reference sites do this well. It also embodies progressive disclosure naturally: the graph shows the landscape, clicking in reveals depth.

**The risk:** Most complex to build. Knowledge graph visualizations can be confusing if not done very well. Could also overwhelm first-time visitors  -  "where do I even start?" The graph would need to be genuinely useful, not just a decoration.

### Option D: Hybrid  -  Editorial Platform + Atlas Touches

Start with the Editorial Platform (Option A) as the primary experience  -  clean, typographic, readable. But incorporate Atlas elements (knowledge graph, relationship visualization) as a secondary navigation mode. The graph lives on a dedicated "Explore" page and appears as a smaller widget on article pages showing nearby connections.

**What it feels like:** "A solid reference publication that also lets me see the big picture when I want to."

**Why it could work:** Best of both worlds. New visitors get a clean, familiar publication layout. Returning visitors and power users get the knowledge graph as a discovery tool. The graph earns its complexity  -  it's not the first thing you see, it's something you discover.

**The risk:** Two navigation paradigms to design and maintain. The "Explore" page could feel disconnected from the rest of the site if not integrated well.

---

## Decision 7: Progressive Disclosure

> **What "progressive disclosure" means here:** The brand principle that says "first impressions are quiet, complexity is earned." In practice: the landing page should be the calmest, simplest page. Each click deeper should reveal more detail, more data, more density  -  but only as fast as the visitor chooses.

This is less of an either/or choice and more of a "depth ladder"  -  how density increases as you go deeper. Here's my recommended model (open to adjustment):

### The Depth Ladder

**Level 1  -  Landing Page: "The Invitation"**
- Density: Minimal. Lots of whitespace. One clear message.
- Content: What this wiki is, who it's for, 3-5 featured topics. That's it.
- Feeling: "This seems credible and interesting. I'll click something."
- Data shown: None (or a single compelling number, like "280+ articles across 12 topic areas")
- Design: Hero section with display font at its largest. Accent color used sparingly. Clean, calm.
- Benchmark: Carbon Brief's homepage  -  clean, a few featured stories, clear topic navigation.

**Level 2  -  Category Page: "The Overview"**
- Density: Low-medium. Organized but not dense.
- Content: Topic introduction (2-3 paragraphs), list of articles with summaries, maybe a key statistic or two.
- Feeling: "I can see what's here and pick what interests me."
- Data shown: Article counts, brief stats if relevant. Uppercase label pattern for section markers ("CARBON MARKETS", "GREEN BONDS").
- Design: Article cards or list items. Category introduction uses body font at comfortable reading size. First appearance of the secondary accent (for navigation/category markers).
- Benchmark: The Economist's section pages  -  brief editorial intro, organized article listings.

**Level 3  -  Article Page: "The Read"**
- Density: Medium. Comfortable reading density with supporting elements.
- Content: Full article text, inline definitions (wikilinks), related articles sidebar, key terms panel.
- Feeling: "I'm learning something. I can go deeper on any term I don't know."
- Data shown: Relevant data points inline. JetBrains Mono appears for the first time (figures, percentages, financial data). Pull quotes or key insight callouts.
- Design: Single-column reading layout, generous margins. Sidebar with related content. Accent color for links and highlights. Body font at optimal reading size with 1.6 line height (slightly more spacious than typical  -  makes long reads comfortable).
- Benchmark: FT's article pages  -  clean reading experience, sidebar context, typographic confidence.

**Level 4  -  Case Study / Deep Dive: "The Full Picture"**
- Density: High. This is where data tables, timelines, source listings, and detailed analysis live.
- Content: Extended analysis, data tables, historical context, multiple perspectives, source documents, glossary cross-references.
- Feeling: "This is the comprehensive briefing I needed."
- Data shown: Full data treatments  -  tables, charts, timeline visualizations. JetBrains Mono used extensively for data. Sourcing and methodology notes.
- Design: All design elements deployed. Layered surfaces distinguish data panels from narrative text. Dense but organized  -  the reader has earned this complexity by choosing to go this deep.
- Benchmark: Bloomberg Green's deep dives  -  data-rich, visually layered, premium.

### What stays consistent across all levels

- The display font (in headlines)
- The primary accent color
- The uppercase label pattern (Red Barrow house style)
- The warmth of surfaces
- Clean, disciplined spacing (4px grid)

### What increases with depth

| Element | Landing | Category | Article | Case Study |
|---|---|---|---|---|
| **Content density** | Minimal | Low-medium | Medium | High |
| **Data presence** | None or one number | Brief stats | Inline data | Full tables/charts |
| **JetBrains Mono** | Absent | Rare | Occasional | Frequent |
| **Navigation elements** | Global only | Category nav | Sidebar + links | Full cross-referencing |
| **Accent color usage** | Sparse | Moderate | Active | Full palette |
| **Whitespace** | Generous | Comfortable | Balanced | Efficient |

---

## Three Packaged Directions

Here's how compatible choices work together. These are starting points  -  you can mix elements from different directions.

### Direction 1: "The Warm Authority"

> *A publication that feels like it was edited with care and printed on good paper. Warm, confident, distinctly editorial.*

| Decision | Choice |
|---|---|
| Display font | **Fraunces** (warm, distinctive serif) |
| Body font | **Source Sans 3** (clean, professional) |
| Primary accent | **Amber #C49A3C** (golden-brown, knowledge associations) |
| Secondary accent | **Sage #5B8A72** (muted green, subtle climate association) |
| Surface treatment | **Warm Paper** (warm off-white backgrounds, subtle depth) |
| Visual metaphor | **Editorial Platform** (clean, typographic, content-led) |

**Feels like:** An independent journal about climate finance, published by people who care about both the subject and the reading experience. Closest to the FT's warmth but with its own personality.

**Strongest alignment with:** Red Barrow's Warmth principle. Maximum contrast with Internia (warm paper vs. dark glass, serif vs. geometric sans, amber vs. copper).

**Where it might struggle:** Could feel too "magazine" and not enough "reference." Would need very clean information architecture to avoid feeling editorial at the expense of utility.

### Direction 2: "The Knowledge Engine"

> *A serious reference platform  -  clean, organized, data-capable. The focus is on the information, not the design.*

| Decision | Choice |
|---|---|
| Display font | **Libre Baskerville** (classic, authoritative serif) |
| Body font | **IBM Plex Sans** (precise, data-ready) |
| Primary accent | **Sienna #A65D3F** (deep, serious warm brown) |
| Secondary accent | **Slate Blue #5B7B9E** (professional, conventional) |
| Surface treatment | **Clean Card** (white cards on light background) |
| Visual metaphor | **Hybrid  -  Editorial Platform + Atlas** (clean reference + knowledge graph) |

**Feels like:** A modern encyclopedia built by experts. Serious, precise, trustworthy. The design gets out of the way and lets the content speak. Closest to Carbon Brief's approach but with more visual sophistication.

**Strongest alignment with:** Red Barrow's Professional Credibility and Typographic Seriousness principles. The knowledge graph adds distinctive value.

**Where it might struggle:** Could feel cold without enough warmth in the surfaces. The sienna accent is dark and serious  -  would need to be balanced with lighter supporting colors. More complex to build (knowledge graph).

### Direction 3: "The Modern Briefing"

> *A premium publication that blends editorial storytelling with data. Feels expensive, confident, and current.*

| Decision | Choice |
|---|---|
| Display font | **Crimson Pro** (scholarly, refined serif) |
| Body font | **DM Sans** (warm, geometric sans) |
| Primary accent | **Terracotta #BF6F50** (earthy, grounded) |
| Secondary accent | **Warm Gold #D4A843** (premium, highlight-focused) |
| Surface treatment | **Layered Surfaces** (different materials for different content types) |
| Visual metaphor | **Reference Journal** (curated, editorial introductions, guided reading) |

**Feels like:** Bloomberg Green meets a well-designed academic journal. Premium, layered, confident. Each article feels like it's been selected and curated, not just published.

**Strongest alignment with:** Red Barrow's Surface Craft and Progressive Disclosure principles. The layered surfaces create natural depth hierarchy.

**Where it might struggle:** Most complex to design and build. Two warm accents (terracotta + gold) might feel monotone without a cool counterpoint. The journal metaphor requires strong editorial content to justify itself  -  an empty journal feels pretentious.

---

## What Happened Next

1. All 8 directions were mocked up as full HTML pages (landing + article) with identical content
2. Owner reviewed all 8 side by side and selected **M5  -  Premium Reference**
3. Contrast improvements were applied (text-secondary darkened, text-muted darkened, hero text brightened)
4. A taste audit added focus-visible states, prefers-reduced-motion, responsive breakpoints, and fixed several contrast/sizing issues
5. Green/sage secondary accents were explored via 3 test mockups  -  rejected in favour of slate blue
6. Design tokens file created at `docs/WIKI_DESIGN_TOKENS.md`
7. Brand guide, PRD, and implementation plan updated to reflect the decision

---

*Document created: 2026-04-17*
*Decision made: 2026-04-17  -  M5 Premium Reference*
*Depends on: `docs/BRAND_STYLE_GUIDE.md` (v1)*
