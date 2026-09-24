# About pages behaviors

- Header: fixed; dropdowns open on hover/focus and close when a destination is clicked.
- Sidebar: normal links on desktop; horizontally scrollable links below 860px. Active route uses a blue rule and pale-blue background.
- Honor cards, activity photos, and capability cards: hover-only elevation/scale feedback; no modal or tab state on the supplied target pages.
- Capability cards: click-driven route navigation to the five existing capability detail pages.
- Culture cards: hover changes `transform` from none to `translateY(-4px)` and `box-shadow` from none to `0 8px 24px rgba(17, 24, 39, .10)` over 220ms.
- Activity feature rows: hover lifts 2px and receives the same medium shadow over 200ms. Gallery images scale to 1.05 over 300ms.
- Honor cards: hover lifts 3px and changes from no shadow to `0 8px 24px rgba(17, 24, 39, .10)` over 220ms. No click/modal behavior exists on the source page.
- Responsive sweep: captured at 1440x900 and 390x844 for every source page under `docs/design-references/workbuddy-about-refresh/`.
