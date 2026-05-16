# TimeLens — CLAUDE.md

Mobile-first React app for exploring San Francisco landmarks across historical eras. Users scan QR codes at real locations to see how they looked in 3–5 time periods. Nearby partner businesses (cafes, museums, shops) are shown per location.

## Stack

- React 18 + TypeScript + Vite
- React Router v6
- Plain CSS with custom properties (no Tailwind, no UI libraries)
- Dev: `npm run dev` → `http://localhost:5173`
- Repo: https://github.com/huezokate/timelens.git

## Design Tokens

From the Figma file (`PzEPUP1Bv0amoNA3ufvfut`). Use these exactly — do not invent new colors.

```css
/* Backgrounds */
--bg-primary:   #f6fbfd;   /* cool near-white — main app bg */
--bg-warm:      #f6f1e8;   /* warm ivory — cards, panels */
--bg-muted:     #edf2f4;   /* grey-blue — secondary surfaces */
--bg-dark:      #3c3c3e;   /* dark grey — era image overlays */
--bg-ink:       #1e1e1e;   /* near-black — deepest surfaces */

/* Text */
--text-primary:   #4a4b4d;  /* charcoal — body text */
--text-secondary: #3a546b;  /* steel blue-grey — captions, metadata */
--text-on-dark:   #ffffff;  /* white — text on dark/image surfaces */
--text-accent:    #da4c29;  /* rust — highlight text */

/* Accents */
--accent-rust:    #da4c29;  /* primary CTA, active states */
--accent-amber:   #f1c531;  /* era year stamps, highlights */
--accent-sage:    #72ad91;  /* parks group, positive states */
--accent-steel:   #bfe2f4;  /* waterfront group, info */
--accent-steel-dark: #3a546b; /* darker steel — links, secondary CTAs */
--accent-blue:    #1079bf;  /* alert/info */

/* Borders / Overlays */
--border:         rgba(74, 75, 77, 0.12);
--overlay-dark:   rgba(30, 30, 30, 0.55);
```

## Typography

From the Figma file. Load these fonts — they are available in Figma and via Google Fonts.

| Role | Font | Weight |
|------|------|--------|
| Display / era labels | Cinzel | Regular, Bold |
| Secondary display | Balthazar | Regular |
| UI headings | Overpass | Bold |
| Body / captions | Open Sans | Regular, Bold |

```css
--font-display: 'Cinzel', serif;          /* location names, era titles, wordmark */
--font-secondary: 'Balthazar', serif;     /* taglines, historical descriptions */
--font-ui: 'Overpass', sans-serif;        /* headings, labels */
--font-body: 'Open Sans', sans-serif;     /* body text, captions, metadata */
```

Add to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Balthazar&family=Overpass:wght@700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
```

## File Structure

```
src/
├── data/
│   └── locations.ts       # All groups, locations, eras, partners — source of truth
├── components/
│   ├── BottomNav.tsx       # Fixed bottom bar: Route / Lens / Menu tabs
│   ├── EraImage.tsx        # Hero image area — gradient + grain + year stamp
│   ├── EraStrip.tsx        # Horizontal era year scrubber (pills)
│   ├── GroupCard.tsx       # Card on Home — group name, tagline, era range, accent bar
│   ├── LocationCard.tsx    # Row in Group view — location name, era count, years
│   └── PartnerChip.tsx     # Horizontal chip — type icon, name, tagline
└── pages/
    ├── Home.tsx            # 2×2 group grid + hero header + scan CTA
    ├── Group.tsx           # Group hero + location list + partners strip
    ├── Location.tsx        # Era carousel + detail text + partners + more locations
    └── Scan.tsx            # QR viewfinder placeholder
```

## Data Shape

```ts
Group      → id, name, tagline, locationCount, eraRange, accentColor
Location   → id, name, groupId, eras[], partners[]
Era        → year, label, description, gradientKey
Partner    → id, name, type (cafe|museum|shop|attraction), tagline, since?
```

4 groups · 15 locations · 5 eras each · 3 partners each — all in `src/data/locations.ts`.

Era gradient keys: `'1770s' | '1850s' | '1890s' | '1920s' | '1950s' | '1980s' | '2020s'`
Mapped in `ERA_GRADIENTS` in `locations.ts`. Use warm ivory-to-sepia tones, not dark cinema.

## Figma

- File: `PzEPUP1Bv0amoNA3ufvfut` (Time-Lens-Fig)
- Prototype screens: page "NEW" (node `109:242`) — Home, SF Waterfront, Pier 43, Scan
- First App draft reference: page "Design" (node `109:241`)
- Existing Figma components to reuse by ID:
  - `Menu bottom bar` — `15:940` (variants: route selected `15:939`, photo `15:938`, select routes `15:937`)
  - `Locations - partners` — `13:568` (variants: Locations `13:566`, Partners `13:567`)
  - `Pier 43 - years` — `15:1151`

## Conventions

- Mobile-first: app shell max-width `430px`, centered
- Bottom nav is `position: fixed`, height `64px` → pages need `padding-bottom: 80px`
- Era image crossfade: fade out → swap gradient → fade in, CSS `opacity` transition 250ms
- Horizontal strips (era scrubber, partner chips): `overflow-x: auto; scrollbar-width: none`
- Group accent color drives the card's accent bar and era strip active pill
- Partner type icons: cafe ☕ · museum 🏛 · shop 🛍 · attraction ⛵

## Do Not

- Do not use Tailwind or any CSS framework
- Do not hardcode colors outside of `index.css` tokens
- Do not add a real camera/QR API yet — Scan page is a placeholder
- Do not change the data structure without updating both `locations.ts` types and all consuming pages
- Do not use the dark near-black palette (`#0c0c0e`) — the Figma palette is light ivory/steel
