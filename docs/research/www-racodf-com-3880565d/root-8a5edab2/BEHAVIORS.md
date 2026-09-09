# Homepage behaviors

Source: https://www.racodf.com/, inspected 2026-09-09 using Chrome CDP.

- Header: fixed; 64px mobile, 72px desktop. `scrolled` at scrollY > 20 changes background to white and labels dark. Desktop dropdowns use group hover. Mobile side drawer uses mask, scroll lock and native nested details; transform .35s cubic-bezier(.16,1,.3,1).
- Hero: three slides, 6000ms interval. Arrows/dots reset timer; mouseenter pauses, mouseleave resumes. Opacity .9s ease; heroUp .6s ease-out text delays .15/.3/.45s. Active indicator 28px, inactive 10px; height 6px. Images object-cover. All three slide copies are in extraction JSON.
- Stats: IntersectionObserver threshold .5; counts linearly over 1400ms, once. Values 3, 636, 6, 2.
- Sections: fade-in-up threshold .15, reveal once. Hover-lift translates Y -3px over .25s cubic-bezier(.16,1,.3,1). Exact source CSS is preserved.
- Business/Industry: click navigation isolates the overview section. Detail-card links open original product / solution hash views, outside the requested default homepage scope.
- Contact: required name, phone, message, privacy checkbox; email validation. Original posts /api/lead. Clone displays explicit local demo acknowledgement and sends no request.
- Privacy/legal: click opens modal; close control, backdrop and Escape dismiss.
- Search: click opens modal; local clone searches extracted homepage content.
- Language: original uses stored language and reload. Clone uses extracted original bilingual text.
- Responsive: 1440, 768, 390 screenshots and exact per-element computed styles in extraction JSON. Breakpoints sm 640, md 768, lg 1024. Desktop nav hidden below lg.
- No Lenis, Locomotive, scroll-snap, video, canvas, Lottie or downloaded fonts found on the homepage. Grid, scrim and glow are CSS layers.

Interaction snapshots: interaction-states.json. Reference screenshots: original-1440/768/390.png, hero-1/2/3.png, mobile-menu.png, privacy-mobile.png.
