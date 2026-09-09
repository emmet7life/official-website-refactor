# Output plan

- Source: https://www.racodf.com/#about-profile
- App root: `.`
- Existing route: `/` preserved and extended with a hash-driven about view.
- Site key: `www-racodf-com-3880565d`
- Page key: `root-8a5edab2-about-profile`
- Research: `docs/research/www-racodf-com-3880565d/root-8a5edab2-about-profile/`
- Screenshots: `docs/design-references/www-racodf-com-3880565d/root-8a5edab2-about-profile/`
- Component namespace: `src/components/sites/www-racodf-com-3880565d/root-8a5edab2-about-profile/`
- Asset namespace: existing shared homepage asset namespace; the about view uses the already downloaded campus image.
- State model: same pathname `/`, fragment `#about-profile`; opening the fragment isolates the `about` section and preserves the shared header/footer.
- Shared foundation change: extend existing `HomepageInteractions` hash routing; no global palette or layout replacement.

The original page hides all homepage sections and displays `#about` with `#about-profile` selected. This clone implements that exact state. Other “走进雷科” tabs remain documented as out of scope for this target and retain their original hash links.
