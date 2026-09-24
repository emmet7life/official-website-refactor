# Marketing Site Navigation Specification

## Overview

- Target: shared `HengdaSiteHeader` and navigation styles in `globals.css`.
- Source: latest marketing `about-honor.html` navigation.
- Interaction model: hover/focus dropdowns on desktop; click-toggle full-width menu on mobile.

## Desktop computed styles

- Fixed bar: 70px content height plus 1px border, rgba(255,255,255,.92), 14px backdrop blur, `0 1px 3px rgba(17,24,39,.06)` shadow.
- Inner: max-width 1400px, 24px horizontal padding.
- Logo: 148.562×34px.
- Primary links: 18px/28.8px, weight 400, #1f2937, opacity .85, 28px group gap.
- Primary hover/current: #165dff, opacity 1, weight 600. Transition color and opacity over 200ms; weight changes immediately.
- Search: 14px, 6×16px padding, 8px gap, #f3f4f6, 1px #e5e7eb border, 20px radius.
- Dropdown: top 100% of trigger, centered, minimum 172px, 8px padding, 2px gap, white background, 1px #e5e7eb border, 12px radius, `0 18px 40px rgba(17,24,39,.14)`.
- Dropdown closed: opacity 0, hidden, translateY(8px). Open: opacity 1, visible, translateY(0). Transition 200ms.
- Dropdown links: 17px/27.2px, weight 400, opacity .85, 9×14px padding, 8px radius. Hover: blue, opacity 1, weight 600, rgba(22,93,255,.08) background.

## Mobile

- Breakpoint: ≤900px hides primary links and search and shows the 26px hamburger.
- Menu opens directly below the 70px header as a full-width white panel with 8px 24px 16px padding, bottom border and medium shadow.
- Primary mobile links: 16px with 12px vertical padding; submenu links: 15px, 24px left padding, .85 opacity.
