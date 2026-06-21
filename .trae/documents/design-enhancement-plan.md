# Design Enhancement Plan — PlayAnnieTime

## Summary

Redesign the existing PR agency website with a new harmonious light color palette (beige-camel / matte silver-white / warm orange), upgraded typography (Playfair Display + Hanken Grotesk), and subtle refined motion — transforming the current monochrome design into a warm, editorial, luxury-agency aesthetic.

## Current State

- **Colors**: Strict black/white/gray monochrome. Hero has dark overlay on photo. Footer is `#111` dark.
- **Fonts**: `Times New Roman` (serif headings) + `system-ui` (sans body). No web font loading.
- **Motion**: None. Only CSS `:hover` transitions on a few elements.
- **Design tone**: Clean but generic. Lacks warmth and brand personality.

## Color Palette (60/30/10)

| Role | Hex | Usage |
|------|-----|-------|
| Beige-camel (60%) | `#D9C8B2` | Page backgrounds, large surfaces, hero overlay |
| Matte silver-white (30%) | `#F5F0EA` | Cards, sections, navigator bg, content areas |
| Warm orange (10%) | `#D47A4A` | CTAs, links, active states, accents, focus rings |
| Text primary | `#2C2416` | Dark brown (softer than pure black) |
| Text secondary | `#8C7B6A` | Muted warm gray for descriptions |
| Border | `#E0D8CD` | Subtle warm border |

All as CSS custom properties in `index.css`.

## Typography

| Role | Font | Source |
|------|------|--------|
| Headings / Brand | **Playfair Display** (serif, 400/500) | Google Fonts |
| Body / UI | **Hanken Grotesk** (sans, 400/500/600) | Google Fonts |

Load via `<link>` in `index.html` with `font-display: swap`. Apply globally in `index.css` body rule.

## Proposed Changes — File by File

### 1. `index.html` — Font Loading

Add `<link>` tags in `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```

### 2. `src/index.css` — Global Design Tokens + Baseline

- Add `:root` block with CSS custom properties for all 6 colors
- Change `body` font to `'Hanken Grotesk', sans-serif`
- Add `background-color: var(--color-beige)` to body
- Add `color: var(--color-text)` to body
- Add `font-variant-numeric: tabular-nums` for numbers
- Add base `scroll-behavior: smooth`

### 3. `src/components/Navigator.module.css` — Warm Nav

- `.nav` background → `var(--color-silver-white)` with subtle bottom shadow
- `.brandMain` → `font-family: 'Playfair Display', serif` + `color: var(--color-text)`
- `.brandSub` → `font-family: 'Hanken Grotesk'` + `color: var(--color-text-secondary)`
- `.links a` → `font-family: 'Hanken Grotesk'`, hover color → `var(--color-warm-orange)`
- `.active` → color → `var(--color-warm-orange)`, border-color → `var(--color-warm-orange)`
- Mobile menu: background → `var(--color-silver-white)`, active bg → `var(--color-beige)`
- Touch: add `touch-action: manipulation` to hamburger

### 4. `src/components/Footer.module.css` — Light Theme Footer

- `.footer` background → `var(--color-beige)`, color → `var(--color-text-secondary)`
- `.email a` color → `var(--color-text)`, border-bottom → `var(--color-warm-orange)`
- `.email a:hover` → `color: var(--color-warm-orange)`
- `.description` color → `var(--color-text-secondary)`

### 5. `src/pages/Home.module.css` — Hero + Pillars

- `.hero` overlay `rgba(0,0,0,0.55)` → `rgba(44,36,22,0.6)` (warm dark brown tint)
- `.pillar` → `font-family: 'Playfair Display', serif`
- `.divider` → `background: var(--color-silver-white)` with lower opacity
- Add `.content` opacity/translateY reveal animation (staggered children)
- Add `text-wrap: balance` to pillar text

### 6. `src/pages/Work.module.css` — Portfolio Grid

- `.page` background → transparent (inherits beige from body)
- `.title` → `font-family: 'Playfair Display', serif`
- `.cardTitle` → `font-family: 'Playfair Display', serif`, color → `var(--color-text)`
- `.cardDescription` → `font-family: 'Hanken Grotesk'`, color → `var(--color-text-secondary)`
- `.image` → add subtle warm border `1px solid var(--color-border)`
- Cards: add `transition: transform 0.4s ease, box-shadow 0.4s ease` on hover with subtle lift

### 7. `src/pages/Services.module.css` — Accordion

- `.heading` → `font-family: 'Playfair Display', serif`
- `.paragraph` → `font-family: 'Hanken Grotesk'`, color → `var(--color-text-secondary)`
- `.header` → `font-family: 'Playfair Display', serif`, hover → `color: var(--color-warm-orange)`
- `.toggle` → `color: var(--color-text-secondary)`, open → `color: var(--color-warm-orange)`
- `.tags` → `font-family: 'Hanken Grotesk'`, color → `var(--color-warm-orange)` for visual pop
- `.description` → `font-family: 'Hanken Grotesk'`, color → `var(--color-text-secondary)`
- `.bullet` → `font-family: 'Hanken Grotesk'`, `::before` color → `var(--color-warm-orange)`
- Accordion border colors → `var(--color-border)`
- Add staggered fade-in for each accordion item on page load

### 8. `src/pages/About.module.css` — Biography

- `.heading` → `font-family: 'Playfair Display', serif`
- `.name` → `font-family: 'Playfair Display', serif`
- `.bio` → `font-family: 'Hanken Grotesk'`, color → `var(--color-text-secondary)`
- `.portrait` border → `var(--color-border)`, add subtle `box-shadow`
- Add reveal animation for the two columns

### 9. `src/pages/Contact.module.css` — Form

- `.intro` → `font-family: 'Hanken Grotesk'`, color → `var(--color-text-secondary)`
- `.label` → `font-family: 'Hanken Grotesk'`, color → `var(--color-text)`
- `.input`, `.textarea` → `font-family: 'Hanken Grotesk'`, border-bottom → `var(--color-border)`
- `.input:focus`, `.textarea:focus` → border-color → `var(--color-warm-orange)`
- `.submit` → background → `var(--color-warm-orange)`, hover → darker orange `#C0683A`
- `.checkbox` accent-color → `var(--color-warm-orange)`
- `.successTitle` → `font-family: 'Playfair Display', serif`
- `.successText` → `font-family: 'Hanken Grotesk'`, color → `var(--color-text-secondary)`

### 10. Global Animation Module — `src/animations.css`

New file for shared animation keyframes and utility classes:
- `@keyframes fadeInUp` — opacity 0→1 + translateY(24px→0)
- `@keyframes fadeIn` — opacity 0→1
- `.reveal` class — hidden by default, revealed when intersecting viewport via JS
- Respect `prefers-reduced-motion` — disable all animations

### 11. Animation Hook — `src/hooks/useReveal.ts` (new)

A lightweight custom hook using `IntersectionObserver`:
- Accepts `ref` and optional `options` (threshold, rootMargin)
- Adds `.reveal-visible` class when element enters viewport
- Cleans up observer on unmount
- Used on: Home hero content, Work card grid, Services accordion items, About columns

### 12. Web Interface Guidelines Compliance — Fixes Across All Files

These are anti-pattern corrections found in the current codebase:

**Navigator.tsx:**
- Hamburger icon button: add `aria-label="Toggle menu"` and `onKeyDown` handler for Enter/Space

**Contact.tsx:**
- Inputs: add `autocomplete` attributes (`name`, `organization`, `email`, `url`)
- Checkboxes: ensure label wraps control for single hit target
- Submit button: add loading spinner during submission (new state)
- Add `autocomplete="off"` on non-auth fields
- Email input: add `spellCheck={false}`, `type="email"`
- Website input: add `type="url"`, `inputmode="url"`, `spellCheck={false}`
- Placeholders: ensure they end with `…` and show example pattern
- Form labels: use `htmlFor` linking to input `id`

**All pages:**
- Headings: add `text-wrap: balance` where missing
- Images: add explicit `width`/`height` attributes for CLS prevention
- Interactive elements: add `:focus-visible` ring using `var(--color-warm-orange)` with offset
- Add `touch-action: manipulation` to all buttons

**Home.tsx:**
- Hero image: add `fetchpriority="high"` since it's above-fold critical

**Footer.tsx:**
- Email link: keep as `<a>` (already correct for navigation)

### 13. `vite.config.ts` — Confirm No Changes Needed

No changes required. Fonts load from Google CDN via `<link>` tags in HTML.

## Design Enhancements Summary

| Category | What Changes |
|----------|-------------|
| **Color** | Full warm palette replacement across all 6 CSS modules + index.css |
| **Typography** | Playfair Display replacing Times New Roman; Hanken Grotesk replacing system-ui |
| **Motion** | Scroll-triggered fade-in-up reveals (IntersectionObserver hook), staggered children, hover lifts on cards |
| **Spacing** | Editorial breathing room — existing generous spacing preserved, enhanced by warm backgrounds |
| **Visual Detail** | Warm shadow on nav, image borders, subtle card hover lifts, bullet accents in warm orange |
| **Accessibility** | Focus-visible rings, ARIA labels, keyboard handlers, autocomplete attributes, prefers-reduced-motion |
| **Forms** | Better input types, autocomplete, label linking, loading state on submit |

## Assumptions & Decisions

1. **Google Fonts CDN** is acceptable (no self-hosting). `font-display: swap` prevents layout shift.
2. **No design library** needed — pure CSS custom properties and CSS Modules suffice.
3. **Hero image** kept as-is (Unsplash URL), only overlay color changes.
4. **Responsive breakpoints** remain at 768px — no new breakpoints added.
5. **All content/copy text** unchanged — only visual presentation changes.
6. **No new npm dependencies** — IntersectionObserver is native browser API, no libraries needed.

## Verification

1. `tsc -b` — TypeScript compilation with zero errors
2. `vite build` — Production build succeeds
3. Visual check of all 5 pages at desktop (1440px) and mobile (375px)
4. Verify all fonts load (Playfair Display on headings, Hanken Grotesk on body)
5. Verify scroll animations trigger on all pages
6. Verify `prefers-reduced-motion` disables animations
7. Tab through site — verify focus-visible rings appear on all interactive elements
8. Submit contact form — verify loading state and success message
