# Wiki Design Tokens  -  M5 Premium Reference

> Single source of truth for all design values used across the Climate Finance Wiki.
> This is the wiki's equivalent of `INTERNIA_DESIGN_TOKENS.md`.
> **Direction:** M5  -  Premium Reference (selected 2026-04-17)
> **Reference mockups:** `mockups/wiki-directions/m5-premium-reference-landing.html` and `m5-premium-reference-article.html`

---

## Colors

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#A65D3F` | Primary accent (sienna)  -  CTAs, active states, emphasis, section labels |
| `--color-primary-light` | `#C47A5C` | Hero labels, gradients |
| `--color-primary-subtle-bg` | `rgba(166, 93, 63, 0.07)` | Callout backgrounds, hover tints |
| `--color-secondary` | `#4E6F8E` | Slate blue  -  see-also links, data accents, info elements |

### Surfaces

| Token | Value | Usage |
|-------|-------|-------|
| `--color-page-bg` | `#F7F5F2` | Main page background (warm paper) |
| `--color-alt-surface` | `#EDEAE5` | Alternating sections, article headers, breadcrumb bar |
| `--color-dark-surface` | `#2A2520` | Navigation bar, hero sections, footer |
| `--color-card-bg` | `#FFFFFF` | Content cards, stats panels, sidebar boxes |

### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-text-primary` | `#2A2520` | Headings, primary text on light surfaces |
| `--color-text-secondary` | `#544E49` | Body text, card descriptions |
| `--color-text-muted` | `#6E6964` | Captions, metadata, breadcrumbs, stat labels |
| `--color-text-on-dark` | `#FAF8F5` | Text on dark surfaces (nav, hero, footer) |

### Dark Surface Text (rgba patterns)

| Pattern | Value | Usage |
|---------|-------|-------|
| Nav wordmark | `rgba(250, 248, 245, 0.55)` | "RED BARROW" on dark nav |
| Nav links | `rgba(250, 248, 245, 0.8)` | Topic/About/Explore links on dark nav |
| Hero subtitle | `rgba(250, 248, 245, 0.78)` | Subtitle text on dark hero |
| Hero description | `rgba(250, 248, 245, 0.65)` | Description paragraph on dark hero |
| Footer text | `rgba(250, 248, 245, 0.5)` | Footer labels on dark surface |

### Shadows

| Usage | Value |
|-------|-------|
| Card (default) | `0 4px 20px rgba(0,0,0,0.08)` |
| Card (hover) | `0 8px 32px rgba(0,0,0,0.12)` |
| Focus ring | `outline: 2px solid var(--color-primary); outline-offset: 2px` |

### Status Colors (shared Red Barrow)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `#22c55e` | Success states |
| `--color-warning` | `#eab308` | Warning states |
| `--color-danger` | `#ef4444` | Error states |

---

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-display` | `'Libre Baskerville', serif` | Article titles, section headings, card titles, nav title |
| `--font-body` | `'DM Sans', sans-serif` | Body text, labels, buttons, descriptions |
| `--font-mono` | `'JetBrains Mono', monospace` | Stats, numbers, data, article counts |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | `400` | Body text, nav title |
| Medium | `500` | Nav links, see-also links |
| Semibold | `600` | Labels, CTA buttons, related term links, uppercase markers |
| Bold | `700` | Headings, stat numbers, card titles |

### Type Scale

| Size | rem | px | Usage |
|------|-----|-----|-------|
| 3xl | `3rem` | 48px | Landing page hero title |
| 2xl | `2.5rem` | 40px | Article page title |
| xl | `1.5rem` | 24px | Section headings (h2), stat numbers |
| lg | `1.25rem` | 20px | Hero subtitle |
| base-lg | `1.125rem` | 18px | Nav title, card titles, article subtitle |
| base+ | `1.0625rem` | 17px | Callout text (larger than body) |
| base | `1rem` | 16px | Body text, about text, hero description |
| sm | `0.9375rem` | 15px | CTA button text |
| xs | `0.875rem` | 14px | Card body, sidebar term links, nav links |
| 2xs | `0.8125rem` | 13px | Stat labels, breadcrumbs, meta text, sidebar descriptions, footer |
| 3xs | `0.6875rem` | 11px | Uppercase labels (section markers, category badges, callout labels) |

### Line Heights

| Usage | Value |
|-------|-------|
| Tight (headings) | `1.2` |
| Card titles | `1.35` |
| Normal (body) | `1.6` |
| Relaxed (article body, callouts) | `1.65-1.7` |

### Letter Spacing

| Usage | Value |
|-------|-------|
| Normal | `0` |
| Uppercase labels | `0.08em` |

### Uppercase Label Pattern (Red Barrow House Style)

```css
.label {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```

Used for: section markers ("FEATURED ARTICLES"), category badges ("GREEN FINANCE INSTRUMENTS"), callout labels ("COMMS INSIGHT"), sidebar box titles ("RELATED TERMS"), hero label ("A RED BARROW PUBLICATION").

---

## Spacing

### Base Scale (4px unit)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `4px` | Stat number to label gap, topic title to count |
| `--space-2` | `8px` | Breadcrumb separator margins |
| `--space-3` | `12px` | Nav left gap, category to title, title to subtitle |
| `--space-4` | `16px` | Related term spacing, sidebar label to content, h2 margin-bottom |
| `--space-5` | `20px` | Hero label to title, card text to link |
| `--space-6` | `24px` | Card grid gap, topic grid gap, sidebar gap, body paragraph margin |
| `--space-7` | `28px` | Card padding, sidebar box padding, stat padding, section label margin |
| `--space-8` | `32px` | Page horizontal padding, callout padding, hero/section inner padding |
| `--space-10` | `40px` | H2 margin-top, article body top margin |
| `--space-12` | `48px` | Responsive section padding |
| `--space-14` | `56px` | Section top padding |
| `--space-16` | `64px` | Section bottom padding, nav height, article body bottom padding |
| `--space-18` | `72px` | Hero bottom padding |
| `--space-20` | `80px` | Hero top padding |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | Direction label, callout right corners |
| `--radius-md` | `12px` | Cards, topic tiles, sidebar boxes, stats panel |
| `--radius-lg` | `20px` | (Reserved for larger containers) |
| `--radius-full` | `100px` | CTA button (pill shape) |

---

## Animations & Transitions

### Durations

| Duration | Value | Usage |
|----------|-------|-------|
| Hover | `150ms` | All hover state changes |
| Panel | `300ms` | (Reserved for panel reveals) |

### Easing

| Name | Value | Usage |
|------|-------|-------|
| Default | `ease` | All transitions |

### Hover Behaviours

| Element | Transform | Shadow Change |
|---------|-----------|---------------|
| Card | `translateY(-3px)` | `0 4px 20px` -> `0 8px 32px` |
| Topic tile | `translateY(-2px)` | `0 4px 20px` -> `0 8px 32px` |
| CTA button | `translateY(-1px)` | Background darkens to `#8F4F33` |
| Links | None | Color shifts to lighter/darker variant |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### GPU Compositing

Cards and CTA buttons use `will-change: transform` for smooth hover animations.

---

## Responsive Breakpoints

| Name | Max Width | Key Changes |
|------|-----------|-------------|
| Tablet | `1024px` | Card grid -> 2 columns, reduced padding |
| Mobile | `768px` | Article layout -> single column, sidebar unsticks, stats stack vertically |
| Small mobile | `640px` | Hero title shrinks, card grid -> 1 column, nav links tighten |
| Tiny | `480px` | Topic grid -> 1 column, third nav link hidden |

---

## Component Dimensions

### Navigation

| Property | Value |
|----------|-------|
| Height | `64px` |
| Max width | `1200px` |
| Horizontal padding | `32px` |

### Cards

| Property | Value |
|----------|-------|
| Padding | `32px` (desktop), `24px` (mobile) |
| Border | None (shadow-defined) |
| Grid gap | `24px` |

### Article Layout

| Property | Value |
|----------|-------|
| Max content width | `1200px` |
| Main column max-width | `680px` |
| Sidebar width | `340px` (desktop), `280px` (tablet) |
| Grid gap | `48px` (desktop), `36px` (tablet) |
| Sidebar sticky top | `88px` (nav height + gap) |

### Key Stats Panel

| Property | Value |
|----------|-------|
| Grid | 3 equal columns (desktop), 1 column (mobile) |
| Negative margin overlap | `-24px` (bridges header/body boundary) |
| Stat divider | `1px solid var(--color-alt-surface)` |

---

## Accessibility

### Contrast Ratios (verified)

| Element | Foreground | Background | Ratio | Pass |
|---------|-----------|------------|-------|------|
| Body text | `#544E49` | `#F7F5F2` | 7.4:1 | AA |
| Muted text | `#6E6964` | `#F7F5F2` | 4.8:1 | AA |
| Muted text | `#6E6964` | `#EDEAE5` | 4.6:1 | AA |
| Primary accent | `#A65D3F` | `#FFFFFF` | 6.6:1 | AA |
| Secondary accent | `#4E6F8E` | `#FFFFFF` | 5.3:1 | AA |
| CTA hover text | `#FFFFFF` | `#8F4F33` | 5.9:1 | AA |
| Hero title | `#FAF8F5` | `#2A2520` | 15.4:1 | AAA |

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Lighter outline on dark surfaces */
nav :focus-visible,
footer :focus-visible {
  outline-color: var(--color-primary-light);
}
```

### Touch Targets

All interactive elements meet the 44x44px minimum touch target.

### Keyboard Navigation

Full keyboard operability: Tab, Shift+Tab, Enter/Space, Escape.

---

*Wiki design direction: M5  -  Premium Reference*
*Part of the Red Barrow brand family*
*Created: 2026-04-17*
