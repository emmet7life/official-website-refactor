# About profile behaviors

Source: https://www.racodf.com/#about-profile, inspected 2026-09-09 with Chrome CDP.

- Page state is hash-driven. The original `showView('about')` hides all sections except `#about`, adds top body padding for the fixed 72px desktop / 64px mobile header, and keeps the header in scrolled mode. `#about-profile` is selected by default.
- The about tabs are click-driven. The selected tab receives `border-primary` and `text-primary`; inactive tabs use `border-transparent` and `text-gray-500`. Other tabs switch hidden `.about-part` panels in the original, but this target only renders the requested profile panel.
- Profile content is static after the view is selected. The section itself uses the shared `.fade-in-up` IntersectionObserver threshold `.15`; the original script marks the selected panel’s descendants visible immediately.
- Company links are external anchors with `target=_blank` and `rel=noopener noreferrer`; non-link company entries are static chips.
- Hover states on company chips change text/border/background colors through the original transition classes. No time-driven animation, carousel, video, canvas, or smooth-scroll library is used.
- Responsive layout: desktop 1440px is a 10-column grid with content span 7 and company list span 3; 768px keeps the same stacked breakpoint behavior from `lg`; 390px stacks image/text first, then company groups. Captured heights: about 1197.65625px at 1440, 1762.875px at 768, 1713.75px at 390 (excluding footer).
- The original campus image is `1783490548910-d11921c7.jpg`, already downloaded into the shared namespace as `a4535c5a-1783486476841-7bfe0014.jpg`.
