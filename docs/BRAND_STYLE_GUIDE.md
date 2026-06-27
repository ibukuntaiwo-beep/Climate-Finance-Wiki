# Red Barrow  -  Brand Guidelines

Global design DNA for everything Red Barrow publishes. This document sits above any individual product. It defines the shared sensibility  -  the thread that makes Internia, the Climate Finance Wiki, and anything built next feel like they came from the same mind.

**Audience:** Designers, developers, and collaborators building Red Barrow products.
**Status:** v1  -  will evolve as products ship and we learn more about our audience.

> **How world-class brands handle this:** Stripe, Linear, and Notion each maintain a small set of non-negotiable brand anchors (a signature color family, a shared typeface, a motion philosophy) while giving individual products freedom to express themselves differently. Red Barrow follows the same model  -  concrete where consistency matters most, principle-level where products need room to breathe.

---

## 1. Brand Principles

Six principles that define the Red Barrow aesthetic. Every design decision  -  color, type, layout, motion  -  should pass through these. They were reverse-engineered from Internia (our first product) and will guide every product that follows.

### 1.1 Warmth

Red Barrow products feel warm. Not cozy, not playful  -  warm in the way that good materials and considered lighting are warm. The accent palette lives in the amber-copper-coral range. Neutrals lean slate, not grey. Backgrounds have temperature  -  never clinical white, never flat grey.

**Where Internia proves this:** Copper (`#D4845F`) as the primary accent. Gold (`#f5c842`) for achievement moments. Warm transparency patterns (`rgba(212, 132, 95, 0.15)`) for active states. Even the darkest surfaces use slate-900 (`#0f172a`), which reads as deep navy rather than pure black.

**The test:** Put all your accent colors in a row. They should look like a sunset gradient  -  not a bag of Skittles.

### 1.2 Typographic Seriousness

Typography is treated as a design decision, not an afterthought. Every product uses a deliberate three-font system (see Section 2.2). Heading fonts carry product personality. Body fonts prioritize readability. Data gets its own typeface. Small labels follow a shared house style.

**Where Internia proves this:** Outfit (display) for modern confidence. Inter (body) for neutral clarity. JetBrains Mono (data) for scores and numbers. Uppercase tracked labels (`0.05-0.08em`, `0.6875rem`) for section markers  -  "CONVERSATIONS", "CHAPTER 2 OF 6", "SELECT RESPONSE". These labels are a recognizable Red Barrow signature.

> **Benchmark  -  Notion:** Notion uses a custom serif for headings to create warmth in what could otherwise feel like a cold productivity tool. The lesson: heading fonts do more emotional work than any other design choice. Choose them with intent.

### 1.3 Surface Craft

Surfaces have material quality. They're not flat rectangles dropped on a background  -  they have depth, transparency, edge treatment, and considered layering. The specific materials vary by product (glass, paper, whatever comes next), but the principle is constant: surfaces should feel like they were made of something.

**Where Internia proves this:** Glass morphism  -  panels float over photographic backgrounds with `backdrop-blur(20px)` and thin borders (`rgba(255, 255, 255, 0.1)`). The sidebar and chat panel appear as a single unified card with shared `border-radius: 20px`. Narration panels use a different material  -  `65%` opacity dark glass with `blur(12px)`. Each surface type has its own character, but all feel crafted.

### 1.4 Interaction Integrity

Every interactive element responds honestly. Hover states are visible. Transitions are smooth. Focus states work for keyboard users. Animation has purpose  -  it communicates state change, not decoration. Nothing bounces, pulses, or spins unless it's functional (Internia's typing indicator dots are functional  -  they simulate a real person typing).

**Where Internia proves this:**
- Hover: response buttons gain a copper border + copper box-shadow + light copper background
- Transition: hover effects take `150ms`, panel reveals take `300ms`, scene transitions take `600ms+`
- Focus: `:focus-visible` gets a `2px solid copper` outline with `2px` offset
- Motion: messages fade up (`translateY(10px)` -> `0`)  -  never sideways, never random
- Respect: `prefers-reduced-motion` disables all animation

> **Benchmark  -  Linear:** Linear defines animation as "fast, precise, intentional"  -  they specify motion *principles* (everything should feel responsive, never sluggish) rather than just timing values. Red Barrow follows the same approach: define what motion should *feel* like, let products define exact durations.

### 1.5 Professional Credibility

Everything looks published, not uploaded. Would this sit comfortably next to a premium app or a professional publication? If it looks like a template, a tutorial project, or a Canva creation, it needs another pass. This doesn't mean corporate or sterile  -  it means considered.

**Where Internia proves this:** The landing page character carousel with stacked cards and spring easing. The episode complete screen with its achievement card, stat grid, and JetBrains Mono numbers. The settings modal with its dark glass aesthetic and copper toggle states. None of these feel like defaults.

> **Benchmark  -  Stripe:** Stripe's design credibility comes from obsessive attention to details that most users never consciously notice  -  gradient transitions, micro-interactions, typographic weight choices. The lesson: credibility is earned in the details, not the hero section.

### 1.6 Progressive Disclosure

First impressions are quiet. Complexity is earned, not imposed. Every layer deeper should feel like discovery, not homework.

This is a brand philosophy, not an information architecture spec. Each product defines its own depth ladder, but all Red Barrow products share the principle: the landing page is the calmest page on the site. It does one job  -  earn enough trust for a click. Density and richness increase as the user goes deeper, but only as fast as they choose.

**Where Internia proves this:** The landing page offers one CTA ("Play"). Scene transitions give the player a moment to absorb the new environment before the interface appears. The glossary unlocks characters and terms as the player encounters them  -  never dumped upfront.

---

## 2. Shared Constraints

These are the concrete anchors  -  the values and structures that stay consistent across every Red Barrow product. They create the family resemblance.

### 2.1 Color Family

Red Barrow's accent colors live in the **warm range**: ambers, coppers, corals, terracottas, burnt oranges. This is the single strongest brand thread.

**Concrete anchors:**

| Constraint | Value | Rationale |
|-----------|-------|-----------|
| Accent hue range | Warm (roughly 10 deg-40 deg on the color wheel) | Creates family resemblance without forcing identical colors |
| Dark anchor | Slate-900 family (`#0f172a` - `#1A1A2E`) | Deep navy, never pure black. Shared across all products |
| Status colors | Success `#22c55e`, Warning `#eab308`, Danger `#ef4444` | Functional colors are universal  -  no product variation |

**Principle-level (product decides):**

| Decision | Guideline |
|----------|-----------|
| Specific accent hex | Each product picks its own warm accent. Must sit comfortably next to every other product's accent |
| Secondary accent | Product's choice. Can be cool (blue for links, gold for achievements) as long as the *primary* accent is warm |
| Light surface tone | Warm white family  -  never clinical `#ffffff` for page backgrounds, never flat grey. Internia uses slate-50 `#f8fafc`; other products may use cream, warm grey, etc. |

**What to avoid:** Cool blues, greens, or purples as primary accents. A secondary blue for links or info states is fine  -  a primary blue brand color is not Red Barrow.

### 2.2 Typography System

Every Red Barrow product uses a **three-font system**:

| Slot | Role | Constraint |
|------|------|-----------|
| **Display** | Headings, hero text, product personality | Product chooses. Serif = editorial authority. Geometric sans = modern energy. Must be a *deliberate* choice, not a default |
| **Body** | Running text, UI labels, conversation | Product chooses. Always a clean sans-serif optimized for screen reading |
| **Mono** | Numbers, scores, data, code | **JetBrains Mono**  -  shared across all products |

**JetBrains Mono is the shared constant.** Any time numbers, scores, data, or tabular information appear in any Red Barrow product, they use JetBrains Mono. It's a subtle but consistent thread  -  the typographic equivalent of a family nose.

**The uppercase label pattern** is a Red Barrow house style:

```
CONVERSATIONS               <- Internia sidebar
CHAPTER 2 OF 6              <- Internia chapter indicator
SELECT RESPONSE              <- Internia response panel
[WIKI CATEGORY LABEL]        <- Future wiki expression
```

Specifics:
- Size: small (`0.6875rem` / 11px as baseline)
- Weight: medium to bold (500-700)
- Letter-spacing: wide (`0.05em`-`0.15em`)
- Transform: uppercase
- Color: muted or accent-tinted, never the same weight as body text

### 2.3 Spacing Grid

All Red Barrow products use a **4px base grid**. Every spacing value is a multiple of 4.

| Token | Value | Typical usage |
|-------|-------|---------------|
| `space-1` | `4px` | Tiny gaps, icon padding |
| `space-2` | `8px` | Small gaps, inline spacing |
| `space-3` | `12px` | Default gap between related items |
| `space-4` | `16px` | Section padding (small) |
| `space-5` | `20px` | Header/section padding |
| `space-6` | `24px` | Panel padding, major gaps |
| `space-8` | `32px` | Page-level padding |
| `space-10` | `40px` | Large section breaks |
| `space-12` | `48px` | Hero-level spacing |
| `space-16` | `64px` | Maximum spacing |

Products may extend this scale (adding `space-20`, `space-24`, etc.) but must not break the 4px multiple rule.

### 2.4 Motion Philosophy

Red Barrow motion is **smooth, purposeful, and respectful**. It communicates state change  -  something appeared, something moved, something changed. It never decorates.

**Principles (all products):**

| Principle | Meaning |
|-----------|---------|
| **Entry = fade up** | New elements enter by fading in and translating upward. Never sideways, never from below, never a random direction |
| **Hover = instant feedback** | `150ms` or faster. The user should never wonder "did that register?" |
| **Panels/modals = deliberate reveal** | `250-400ms` range. Slow enough to feel intentional, fast enough to never feel sluggish |
| **Page/scene transitions = cinematic** | `500ms+`. These are rare, significant moments  -  a scene change, a page transition. They earn their duration |
| **Stagger = sequential, not simultaneous** | When multiple items appear, they arrive one after another (50-100ms stagger), not all at once |
| **Easing = ease or ease-in-out** | Default to smooth curves. `cubic-bezier` for spring-like reveals. Never linear (feels robotic) |
| **Respect reduced motion** | If the OS says reduce motion, all animation durations drop to near-zero. Non-negotiable |

**What to avoid:** Bouncing, pulsing, spinning, parallax scrolling, particle effects, or any animation that exists to impress rather than inform.

### 2.5 Accessibility Floor

Every Red Barrow product meets this baseline. No exceptions, no "we'll fix it later."

| Requirement | Standard | Detail |
|------------|----------|--------|
| Contrast | WCAG 2.1 AA | 4.5:1 for body text, 3:1 for large text (18px+) and UI components |
| Focus states | Visible on every interactive element | `:focus-visible` with accent-colored outline, `2px` offset minimum |
| Touch targets | 44x44px minimum | On all mobile-facing interactive elements |
| Color independence | Never the sole signal | Always pair color with text, icon, or pattern |
| Text scaling | `rem` units | So browser zoom to 200% works without breakage |
| Reduced motion | `prefers-reduced-motion` | All animation disabled when the OS flag is set |
| Keyboard navigation | Full operability | Tab, Shift+Tab, Enter/Space, Escape  -  all functional |
| Screen readers | Semantic HTML + ARIA | `role`, `aria-label`, `aria-live` where needed |

### 2.6 Border Radius Philosophy

Red Barrow products use rounded corners  -  never sharp, never fully circular (except avatars and badges). The specific radii vary by component scale:

| Scale | Range | Examples |
|-------|-------|----------|
| Small components | `6-8px` | Buttons, tags, input fields |
| Medium components | `10-14px` | Cards, popups, response buttons |
| Large containers | `18-24px` | Panels, modals, achievement cards |
| Circular | `50%` | Avatars, status dots, icon badges |

Products define their own specific values within these ranges. The principle: radius should feel proportional to the element  -  small things get small rounding, large things get generous rounding.

---

## 3. Product Expressions

The principles and constraints above are the shared DNA. Each product expresses them differently  -  shaped by what the product needs to be, who uses it, and the context they use it in.

### 3.1 Internia  -  First Expression

**Product type:** Narrative web game
**Personality:** Cinematic, immersive, atmospheric
**Mood:** Late evening. Frosted glass. Warm lamplight reflected in a dark window.

| Element | Decision |
|---------|----------|
| **Primary accent** | Copper `#D4845F` |
| **Secondary accent** | Gold `#f5c842` |
| **Display font** | Outfit (geometric sans  -  modern, confident) |
| **Body font** | Inter (neutral, professional) |
| **Surface treatment** | Glass morphism  -  backdrop-blur, semi-transparent panels over photographic backgrounds |
| **Dark anchor** | Slate-900 `#0f172a` |
| **Light surface** | Slate-50 `#f8fafc` (chat panel backgrounds) |

**Signature elements:**
- Glass panels floating over real-world photography
- Copper selection rings and active-state glows
- Cinematic fade-to-black scene transitions with staggered reveal
- Chat interface as unified card (sidebar + conversation, shared border-radius)
- Dark glass modals (`rgba(15, 23, 42, 0.95)` with `blur(24px)`)

**What Internia never does:**
- Newspaper rules or column layouts
- Cream/paper backgrounds
- Serif typefaces
- Flat, unblurred surfaces

**Full reference:** `docs/INTERNIA_UI_REFERENCE.md` and `docs/INTERNIA_DESIGN_TOKENS.md`

### 3.2 Climate Finance Wiki  -  Second Expression

**Product type:** Public reference wiki
**Personality:** Authoritative, layered, sophisticated
**Mood:** A mahogany-panelled reading room. Dark shelves, warm paper, quiet confidence.
**Direction selected:** M5  -  Premium Reference (2026-04-17)

| Element | Decision |
|---------|----------|
| **Primary accent** | Sienna `#A65D3F` |
| **Secondary accent** | Slate Blue `#4E6F8E` |
| **Display font** | Libre Baskerville (classic serif  -  timeless authority) |
| **Body font** | DM Sans (warm geometric sans  -  approachable readability) |
| **Surface treatment** | Layered surfaces  -  dark nav (`#2A2520`), warm paper bg (`#F7F5F2`), alt surface (`#EDEAE5`), white cards |
| **Dark anchor** | `#2A2520` (warm dark brown, distinct from Internia's slate-900) |
| **Light surface** | `#F7F5F2` (warm paper tone) |

**Signature elements:**
- Dark navigation bar creating premium top-of-page drama
- Layered surface transitions (dark -> warm grey -> white -> alt mid-tone)
- Borderless white cards with deep shadows floating on warm backgrounds
- Libre Baskerville headlines with generous sizing for editorial weight
- JetBrains Mono for all data, stats, and figures
- Key stats panels that overlap surface boundaries (negative margin technique)
- Sienna-tinted callout boxes with left-border treatment

**What the wiki never does:**
- Glass morphism or blur effects (that's Internia)
- Geometric sans-serif headlines (Outfit is Internia's)
- Pure white or cool grey backgrounds
- Copper accent color (reserved for Internia)

**How it aligns with brand principles:**
- **Warmth:** Sienna accent, warm paper surfaces, DM Sans body warmth
- **Typographic Seriousness:** Libre Baskerville is a deliberate, classic choice  -  the opposite of a default
- **Surface Craft:** Four distinct surface tones create material depth
- **Professional Credibility:** Reads as "published"  -  would sit comfortably next to FT or Bloomberg Green
- **Progressive Disclosure:** Landing page is calm (dark hero, sparse content), complexity increases through category -> article -> case study

**Full reference:** `docs/WIKI_DESIGN_TOKENS.md` and `mockups/wiki-directions/m5-premium-reference-*.html`

---

## 4. Starting a New Red Barrow Product

When you start something new, follow this sequence:

**Step 1  -  Pick a warm accent.** Not identical to any existing product's primary accent, but a neighbor. Think terracotta, amber, burnt sienna, rust, deep coral. Put it next to Internia's copper  -  do they look like family?

**Step 2  -  Pick a display font** that carries the right personality. Serif = editorial. Geometric sans = modern. Slab = industrial. Humanist = approachable. *This is the single biggest personality lever you have.* Body font: any clean sans-serif. Mono: JetBrains Mono.

**Step 3  -  Define your surface treatment.** What are things made of in this product? Glass? Paper? Flat cards? Something new? The material should match the product's context and audience.

**Step 4  -  Apply the shared constraints.** 4px grid. Warm accent family. Three-font system. Uppercase label pattern. Motion principles. Accessibility floor. Border radius ranges.

**Step 5  -  Document the expression.** Create a product-specific design tokens file (like Internia's `DESIGN_TOKENS.md`) that captures every concrete value. The global guidelines stay principle-level; the product doc gets specific.

---

## 5. The Brand Test

When you're not sure whether a design decision is Red Barrow, run it through these:

1. **Is it warm?** If the primary accent is cold (pure blue, green, purple), it's not Red Barrow.

2. **Is it deliberate?** If a spacing value, font choice, or color was picked "because it looked okay," it's probably wrong. Every value should trace back to a principle or token.

3. **Is it published?** Would this look at home in a premium app or a professional publication? If it looks like a template or a tutorial project, it needs another pass.

4. **Is it honest?** Does every interactive element respond visibly? Do focus states work? Does it respect reduced-motion preferences? If not, it's not done.

5. **Is it calm at the door?** Is the first thing a user sees the simplest version of the experience? If the landing page feels dense, the product has its depth ladder inverted.

---

## 6. What This Document Is Not

- **Not a product-specific style guide.** Internia has its own design tokens (`INTERNIA_DESIGN_TOKENS.md`). The wiki will have its own. This document doesn't replace those  -  it sits above them.
- **Not a component library.** It doesn't specify button heights or modal widths. Products do that.
- **Not a content style guide.** Tone of voice, writing conventions, and editorial standards are separate concerns (though a Red Barrow writing guide may come later).
- **Not finished.** This is v1. It captures what we know from one shipped product. As the wiki ships, as we learn what our audience responds to, these guidelines will sharpen.

---

*Brand name: Red Barrow*
*First expression: Internia (narrative web game)*
*Second expression: Climate Finance Wiki (TBD)*
*Last updated: 2026-04-17*
