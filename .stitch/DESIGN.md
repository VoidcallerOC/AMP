---
name: Adaptive Movement Parkour — AMP Reference-Inspired
colors:
  canvas: '#0b0b0c'
  surface: '#f3f1ed'
  surface-dark: '#171719'
  brand-red: '#c91520'
  brand-red-bright: '#e1232d'
  brand-red-deep: '#8e1017'
  text-primary: '#ffffff'
  text-dark: '#0b0b0c'
  text-muted: '#d0ccca'
  border-dark: 'rgba(255,255,255,0.2)'
  border-light: 'rgba(18,18,18,0.18)'
typography:
  display:
    fontFamily: 'Barlow Condensed'
    fontWeight: '800'
    textTransform: uppercase
  body:
    fontFamily: 'DM Sans'
    fontWeight: '400'
    lineHeight: '1.6'
  label:
    fontFamily: 'DM Sans'
    fontWeight: '700'
    letterSpacing: '0.16em'
    textTransform: uppercase
spacing:
  unit: 8px
  section-desktop: 'clamp(4.5rem, 8vw, 7.5rem)'
  section-mobile: '2.5rem'
  page-margin-desktop: 32px
  page-margin-mobile: 16px
rounded:
  button: '0'
  card: '0'
  circular-control: '50%'
---

# Design System: Adaptive Movement Parkour (AMP)

**Reference:** [amparkour.com](https://amparkour.com/)
**Implementation:** Static HTML/CSS/JS in `VoidcallerOC/AMP`
**Purpose:** A close visual translation of AMP's live marketing site into this alternate AMP landing page, while retaining the current content, verified program names, imagery, accessibility, and registration flow.

## 1. Visual Theme & Atmosphere

AMP should feel like a real movement gym: energetic, candid, inclusive, and grounded in a physical place—not an abstract fitness-tech brand. The opening screen is a full-bleed gym photograph with an assertive red color wash; bold centered language makes the welcome legible immediately, and the surrounding page alternates between AMP red, near-black, and warm off-white. Keep the photography documentary and recognizably local.

The overall contrast is intentionally strong: athletic display type and vivid red carry the energy, while short body paragraphs, calm spacing, and clean surfaces keep the site approachable to families, teens, adults, and first-timers. Avoid ornate effects, excessive card rounding, gradients unrelated to the photo overlays, or high-performance imagery that makes beginners feel excluded.

## 2. Color Palette & Roles

### Primary Foundation
- **Near-black** `#0b0b0c` — global canvas, navigation contrast, dark program and footer sections.
- **Soft black** `#171719` — secondary dark sections that distinguish content without leaving the dark AMP environment.
- **Warm chalk** `#f3f1ed` — supporting light editorial surface; warmer and softer than pure white.
- **Deep AMP red** `#8e1017` — primary program-discovery field directly after the service-area banner.
- **White** `#ffffff` — high-contrast display and utility text over photography or dark backgrounds.

### Accent & Interactive
- **AMP Red** `#c91520` — signature section band, primary buttons, active accents, photo overlay family.
- **Action Red** `#e1232d` — brighter hover/focus accents and selected emphasis.
- **Deep Red** `#8e1017` — closing conversion section and metadata theme color.

### Typography & Text Hierarchy
- **Primary text** `#ffffff` on dark/red surfaces and `#0b0b0c` on light surfaces.
- **Secondary text** `#d0ccca` on dark backgrounds and `#4c4947` on warm chalk.
- **Quiet borders** `rgba(255,255,255,0.20)` on dark surfaces and `rgba(18,18,18,0.18)` on light surfaces.

### Functional States
- Hover: shift primary red toward `#e1232d`; raise photo cards slightly; brighten photo contrast.
- Focus: visible, 3px white outline with 4px offset (never rely on color alone).
- Reduced motion: remove smooth scrolling and minimize transition duration.
- No fabricated status palette is needed for this marketing site.

## 3. Typography Rules

### Hierarchy & Weights
- **Display/headlines:** Barlow Condensed, weight 800, uppercase, very tight leading (about `0.9`), slight negative tracking. Use responsive `clamp()` sizing. The hero should read as a single, confident invitation rather than an editorial multi-column headline.
- **Body and controls:** DM Sans, 400–700. Use 16px / 1.6 for default copy; body paragraphs should remain comfortably readable over imagery and dark backgrounds.
- **Eyebrows and utility labels:** DM Sans, 700, about 11–12px, uppercase, and 0.14–0.16em tracking.
- **Program card labels:** Barlow Condensed, 700, uppercase; use DM Sans for ages and explanatory microcopy.

### Spacing Principles
Use a relaxed 8px-derived rhythm, with generous vertical spacing between major sections. Keep the page visually dense enough to reveal programs early, but use short, breathable text blocks. Reserve tracking for small uppercase labels, not paragraphs.

## 4. Component Stylings

### Buttons
- Square corners, 50px minimum height, generous horizontal padding, bold uppercase DM Sans labels.
- Primary action: solid AMP red with white text; white-on-dark and outline variants may support secondary actions.
- Hover: subtle upward movement and brighter red; keyboard focus remains a clear outline.

### Cards & Program Tiles
- Program cards sit on the deep-red program field and are square-edged, image-led panels with a dark bottom gradient so titles remain readable.
- Use actual AMP training/gym photography where suitable. If a program-specific image is not available, use a neutral dark-red treatment rather than mislabeling an unrelated image.
- Place a small sequence number at the top, name and concise factual descriptor near the bottom, and a compact circular arrow control at lower-right.
- Keep cards even in height and use a 3-column desktop grid, 2-column tablet/mobile grid, and one column only on very narrow screens.

### Navigation
- Compact horizontal navigation floats over the top of the hero photo with a subtle dark scrim.
- White AMP logo at left, concise uppercase links, bordered booking/schedule CTA at right.
- At 820px and below, collapse to an accessible menu button and dark full-width menu panel; close on link selection or Escape.

### Inputs & Forms
No form is present in the current implementation. If one is added, use square-edged, high-contrast fields with explicit labels and a 3px visible focus ring.

### Domain-Specific Components
- **Photo hero:** use an authentic gym image as a full-bleed background; combine a red tint with a darker lower gradient for text contrast. Center the kicker, large welcome headline, supporting line, and one clear primary action.
- **Age/location banner:** follow the hero with an uninterrupted AMP-red band naming the local service area and age range, then lead directly into program discovery.
- **Facility image:** retain a documentary photo with a simple red offset block rather than a floating/glass panel.

## 5. Layout Principles

### Grid & Structure
- Main content max-width: approximately 1240px; header max-width: approximately 1400px.
- Desktop page gutters: 32px; tablet: 20px; narrow mobile: 16px.
- Hero is full-bleed; program intro is a 2-column block followed by a 3-column image-card grid.

### Whitespace Strategy
Use large desktop section padding around 72–120px, reduced to about 40px on mobile. Keep the age/location band compact relative to the hero, so the program grid is reached quickly.

### Alignment & Visual Balance
- Center the hero messaging over the action photography.
- Left-align body copy and subsequent editorial sections.
- Balance one local human/training image against concise copy; avoid repeating image-plus-copy layouts in every section.

### Responsive Behavior & Touch
- Breakpoint at 820px: stacked editorial layouts, two-column tiles, and collapsible navigation.
- Breakpoint at 580px: full-width hero CTA, compact section spacing, two-column program cards.
- Breakpoint at 360px: single-column cards.
- Controls should remain keyboard reachable, preserve visible focus, respect reduced-motion preferences, and offer touch-sized hit areas.

## 6. Design System Notes for Stitch Generation

### Language to Use
“Real Manchester movement gym, candid parkour photography, energetic AMP red wash, bold condensed athletic headlines, clear family-friendly welcome, high contrast, practical and inclusive, vivid but not glossy.”

### Color References
Use near-black `#0b0b0c`, AMP red `#c91520`, warm chalk `#f3f1ed`, white `#ffffff`, and deep red `#8e1017`. Red is a brand accent and conversion surface, not a reason to tint every image uniformly.

### Component Prompts
1. “Create a full-width landing hero for Adaptive Movement Parkour with a real gym image filling the background, a translucent deep-red overlay, a compact floating navigation, centered ‘Parkour for everyone’ headline in bold condensed white type, one short supportive subhead, and a clear first-session CTA.”
2. “Create a deep-red program section with a concise introduction and six square-edged photo tiles for Mini Movers, Youth Parkour, Teen Parkour, Adult Parkour, Aerial Silks, and Birthday Parties. Use authentic gym photos, dark bottom gradients, factual descriptors, and unobtrusive arrow affordances.”
3. “Create a short full-width AMP-red strip under the hero with a prominent Manchester service-area and ages 4–adult message; keep the typography white, bold, and readable on mobile.”

### Incremental Iteration
First tune hero crop, tint strength, and headline scale. Next tune the red age/location band and program image cards. Preserve the local gym photography, readable contrast, program facts, existing navigation behavior, and square-edged components. Avoid redesigning into a luxury fitness studio, neon gaming interface, or pastel children’s-only brand.
