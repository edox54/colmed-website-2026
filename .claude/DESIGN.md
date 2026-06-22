# Colmed Centro Médico — DESIGN.md
> Base adapted from Grove AI style reference (Refero Styles). Colors are Colmed originals — all other tokens (typography, spacing, radius, shadows, elevation, layout) follow Grove AI conventions.

**Theme:** light

Colmed uses a clinical-credibility language: bright white canvas, restrained cyan accents, and a deliberate typographic contrast between an editorial serif (Libre Caslon Text or Lora) for hero-level headlines and a precise grotesque (Geist or Inter) for body and interface. Surfaces are flat with a single light-gray card layer; elevation comes from soft inset shadows and hairline borders, never from heavy drop shadows. Component weight is lightweight: pill buttons, ghost controls, thin outlined tags, and tight small-caps section labels. The system feels like a well-funded Latin American medical center that also happens to be a modern product — clinical authority through restraint.

---

## Tokens — Colors

> **Colmed original palette — do not modify these values.**

| Name | Value | Token | Role |
|------|-------|-------|------|
| Cyan Brand | `#0891b2` | `--color-cyan-brand` | Primary brand color — logo, signature word in serif headlines, accent borders on tags and pills, icon highlights. Reads as clinical and trustworthy. (Tailwind cyan-600) |
| Cyan Vivid | `#06b6d4` | `--color-cyan-vivid` | Interactive accent — hover states, CTA fills, inline highlights. (Tailwind cyan-500) |
| Cyan Light | `#22d3ee` | `--color-cyan-light` | Soft tints, highlight backgrounds, glow moments. (Tailwind cyan-400) |
| Cyan Pale | `#cffafe` | `--color-cyan-pale` | Card tints, section bands, subtle emphasis. (Tailwind cyan-100) |
| Teal Action | `#0d9488` | `--color-teal-action` | Secondary accent for gradients and CTA pairs. (Tailwind teal-600) |
| Ink Black | `#0f172a` | `--color-ink-black` | Primary text, headings, filled dark buttons. (Tailwind slate-900) |
| Graphite | `#334155` | `--color-graphite` | Secondary text, dividers, metadata. (Tailwind slate-700) |
| Slate Mid | `#64748b` | `--color-slate-mid` | Muted helper text, inactive labels, tertiary metadata. (Tailwind slate-500) |
| Mist Gray | `#f1f5f9` | `--color-mist-gray` | Card surface — the only neutral fill. Creates a single elevated tier above white canvas. (Tailwind slate-100) |
| Pure White | `#ffffff` | `--color-pure-white` | Page canvas, card-internal backgrounds, inverse text on dark fills. |
| Shadow Smoke | `#cbd5e1` | `--color-shadow-smoke` | Box-shadow base color for soft elevation behind cards. (Tailwind slate-300) |
| Emerald Support | `#10b981` | `--color-emerald-support` | Success states, positive proof points. (Tailwind emerald-500) |

---

## Tokens — Typography

> Grove AI convention: editorial serif for display, grotesque for UI.

### Libre Caslon Text — Display serif for hero headlines and any signature brand word.
- **Substitute:** Lora, Source Serif 4, PT Serif
- **Weights:** 400
- **Sizes:** 36px, 40px, 72px, 80px
- **Line height:** 1.20, 1.25
- **Letter spacing:** -0.011em
- **Role:** Hero-level storytelling. One word (e.g. "Colmed") can be set in `--color-cyan-brand` while the rest of the headline stays `--color-ink-black` — color carries the brand identity.
- **Token:** `--font-display`

### Geist / Inter — Primary interface and body typeface.
- **Substitute:** Inter, IBM Plex Sans, system-ui
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 14px, 15px, 16px, 18px, 20px, 24px, 32px, 36px, 40px
- **Line height:** 1.00–1.65 (scales with size)
- **Letter spacing:** -0.036em at 40px → -0.004em at 16px → +0.1em at 12px (uppercase labels)
- **OpenType:** `"ss01" on, "tnum" on`
- **Role:** Body copy, navigation, buttons, badges, stat numbers.
- **Token:** `--font-sans`

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | +1.2px | `--text-caption` |
| body-sm | 14px | 1.5 | -0.28px | `--text-body-sm` |
| body | 16px | 1.5 | -0.32px | `--text-body` |
| subheading | 20px | 1.25 | -0.4px | `--text-subheading` |
| heading-sm | 24px | 1.25 | -0.6px | `--text-heading-sm` |
| heading | 32px | 1.2 | -0.9px | `--text-heading` |
| heading-lg | 40px | 1.2 | -1.44px | `--text-heading-lg` |
| display | 72–80px | 1.2 | -1.01px | `--text-display` |

---

## Tokens — Spacing & Shapes

**Base unit:** 4px  
**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| tags / pills / buttons | 9999px | `--radius-pill` |
| large cards | 24px | `--radius-card-lg` |
| cards | 20px | `--radius-card` |
| icons | 12px | `--radius-icon` |
| inputs | 8px | `--radius-input` |

> **Rule:** Only 8px, 12px, 20px, 24px, or 9999px. No intermediate values.

### Shadows (Grove AI elevation model)

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0,0,0,0.25) 0px 1px 2px 0px inset` | `--shadow-subtle` |
| hairline | `rgba(0,0,0,0.35) 0px 0px 1px 0px` | `--shadow-hairline` |
| lift | `rgba(0,0,0,0.15) 0px 1px 1px 0px` | `--shadow-lift` |
| button-highlight | `rgba(255,255,255,0.75) 0px 1px 2px 0px inset` | `--shadow-btn-highlight` |

> **Rule:** Maximum 1–2px blur. No heavy drop shadows. Elevation = hairline halos + inset tints.

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 24px
- **Element gap:** 10px

---

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#ffffff` | Default page background across all sections. |
| 1 | Card | `#f1f5f9` | Elevated card background for stat blocks, feature panels, grouped content. |
| 2 | Inverted Dark | `#0f172a` | Dark surface for announcement banners, testimonial overlays, filled primary buttons. |
| 3 | Brand Accent | `#0891b2` | Brand-color surface for top acquisition banner and any full-bleed cyan moments. |

---

## Components

### Top Announcement Banner
Background `--color-cyan-brand`, white text, 12–14px Geist/Inter, 4px vertical padding. Centered single line + trailing arrow. No border, no radius.

### Sticky Navigation
White background, subtle bottom border (1px `--color-shadow-smoke`). Logo left, horizontal nav links in 14px Geist, "Contáctanos" as filled cyan pill CTA right. Padding 16px vertical.

### Announcement Pill (above hero)
Transparent background, 1px `--color-cyan-brand` border, 9999px radius, Geist 12px uppercase, 0.1em tracking, `--color-cyan-brand` text, 8px 16px padding.

### Hero Headline
Libre Caslon Text 72–80px, weight 400, line-height 1.2, letter-spacing -0.011em. One word in `--color-cyan-brand`, rest in `--color-ink-black`. No gradient, no decoration.

### Hero Subhead
Geist 18–20px, weight 500, `--color-ink-black`. Max-width 520px, left-aligned.

### Filled Dark Button (primary action)
Background `--color-ink-black`, white text, Geist 14px medium, 9999px radius, 12px 24px padding. Inner highlight shadow: `--shadow-btn-highlight`.

### Filled Cyan Button (brand CTA)
Background `--color-cyan-brand`, white text, Geist 14px medium, 9999px radius, 12px 24px padding. Hover: `--color-cyan-vivid`.

### Outlined Button (secondary)
Transparent background, 1px border `--color-ink-black`, `--color-ink-black` text, Geist 14px medium, 9999px radius.

### Stat Card
Mist Gray (`--color-mist-gray`) fill, 20px radius, 24px padding. Number: Geist 40px weight 600 `--color-ink-black`. Label: Geist 14px `--color-graphite`.

### Small-Caps Section Label
Geist 12px, letter-spacing 0.1em, uppercase, `--color-cyan-brand` or `--color-slate-mid`. Sets clinical-editorial tone.

### Proof Point Formula
small-caps cyan label (12px, 0.1em tracking) → small cyan directional icon → big dark number (Geist 40px 600 `--color-ink-black`) → single-line caption (Geist 14px `--color-graphite`).

### Testimonial Card
White background, 20px radius, 32px padding, hairline shadow. Logo top-left, quote Geist 18px regular, author photo (40px circle) + name/role at bottom.

---

## Do's and Don'ts

### Do
- Use 9999px radius on all buttons, tags, and pills — consistent pill language throughout.
- Reserve `--color-cyan-brand` for: the signature word in serif headlines, small-caps section labels, icon/directional accents.
- Pair a Filled Dark Button with an Outlined Button as the canonical CTA pair per section.
- Use Mist Gray (`--color-mist-gray`) as the only card surface color — never white-on-white to group content.
- Type all small-caps category labels at 12px with 0.1em tracking.
- Keep body copy left-aligned and capped at ~520px for editorial reading column.
- Use `--font-display` (Libre Caslon Text / Lora) exclusively for hero headlines.

### Don't
- Do not apply drop shadows greater than 1–2px blur.
- Do not introduce new accent colors outside the Colmed palette above.
- Do not center-align body paragraphs — left-alignment below the hero is non-negotiable.
- Do not use radii between 14px and 18px — the system commits to 8/12px, 20/24px, or 9999px only.
- Do not use `--color-cyan-brand` as filled background on large surfaces beyond the announcement banner.
- Do not pair the display serif with colors outside `--color-cyan-brand` or `--color-ink-black`.

---

## CSS Custom Properties

```css
:root {
  /* Colors — Colmed originals */
  --color-cyan-brand: #0891b2;
  --color-cyan-vivid: #06b6d4;
  --color-cyan-light: #22d3ee;
  --color-cyan-pale: #cffafe;
  --color-teal-action: #0d9488;
  --color-ink-black: #0f172a;
  --color-graphite: #334155;
  --color-slate-mid: #64748b;
  --color-mist-gray: #f1f5f9;
  --color-pure-white: #ffffff;
  --color-shadow-smoke: #cbd5e1;
  --color-emerald-support: #10b981;

  /* Surfaces */
  --surface-canvas: #ffffff;
  --surface-card: #f1f5f9;
  --surface-inverted-dark: #0f172a;
  --surface-brand-accent: #0891b2;

  /* Typography */
  --font-display: 'Libre Caslon Text', 'Lora', 'Source Serif 4', Georgia, serif;
  --font-sans: 'Geist', 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: 'Geist Mono', 'JetBrains Mono', ui-monospace, monospace;

  /* Type Scale */
  --text-caption: 12px;    --leading-caption: 1.5;    --tracking-caption: 1.2px;
  --text-body-sm: 14px;    --leading-body-sm: 1.5;    --tracking-body-sm: -0.28px;
  --text-body: 16px;       --leading-body: 1.5;       --tracking-body: -0.32px;
  --text-subheading: 20px; --leading-subheading: 1.25; --tracking-subheading: -0.4px;
  --text-heading-sm: 24px; --leading-heading-sm: 1.25; --tracking-heading-sm: -0.6px;
  --text-heading: 32px;    --leading-heading: 1.2;    --tracking-heading: -0.9px;
  --text-heading-lg: 40px; --leading-heading-lg: 1.2; --tracking-heading-lg: -1.44px;
  --text-display: 80px;    --leading-display: 1.2;    --tracking-display: -1.01px;

  /* Spacing */
  --spacing-4: 4px;  --spacing-8: 8px;   --spacing-12: 12px;
  --spacing-16: 16px; --spacing-20: 20px; --spacing-24: 24px;
  --spacing-32: 32px; --spacing-36: 36px; --spacing-40: 40px;
  --spacing-48: 48px; --spacing-64: 64px; --spacing-72: 72px;
  --spacing-80: 80px; --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 10px;

  /* Border Radius */
  --radius-input: 8px;
  --radius-icon: 12px;
  --radius-card: 20px;
  --radius-card-lg: 24px;
  --radius-pill: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(0,0,0,0.25) 0px 1px 2px 0px inset;
  --shadow-hairline: rgba(0,0,0,0.35) 0px 0px 1px 0px;
  --shadow-lift: rgba(0,0,0,0.15) 0px 1px 1px 0px;
  --shadow-btn-highlight: rgba(255,255,255,0.75) 0px 1px 2px 0px inset;
}
```
