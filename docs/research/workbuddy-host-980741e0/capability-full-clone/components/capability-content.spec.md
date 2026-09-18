# Capability Content Specification

## Overview
- Target file: `src/components/sites/www-racodf-com-3880565d/capability/CapabilityPage.tsx`
- Style file: `src/components/sites/www-racodf-com-3880565d/capability/CapabilityPage.module.css`
- Interaction model: static pages with capability-card hover.

## Extracted Values
- Font family: `"PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`
- Primary color: `#165dff`
- Text title: `#111827`
- Muted text: `#6b7280`
- Border: `#e5e7eb`
- Container max width: `1200px`
- Hero: `padding: 150px 24px 64px`, `background: linear-gradient(160deg, #eef4ff 0%, #ffffff 70%)`
- Hero h1: `40px`, `font-weight: 700`, `letter-spacing: 1px`
- Section: `padding: 56px 0 24px`
- Category title: `26px`, `font-weight: 700`, with `5px x 26px` blue bar
- Capability card: `padding: 38px 28px`, `border-radius: 16px`, `gap: 16px`, `border: 1px solid #e5e7eb`
- Capability card hover: `translateY(-6px)`, `box-shadow: 0 8px 24px rgba(17, 24, 39, 0.10)`, blue border
- Figure cards: `padding: 10px`, `border-radius: 12px`, `box-shadow: 0 1px 3px rgba(17, 24, 39, 0.06)`
- Detail lead text: `15px`, `line-height: 1.9`, `max-width: 960px`

## Assets
- Capability icons copied from `docs/hdmicrowave-resource/市场部安钰琪0917提供/icons-export/03-about-capability`.
- Detail images and video are local under `public/sites/www-racodf-com-3880565d/capability`.

## Responsive
- `900px`: capability card and media grids reduce to two columns.
- `560px`: hero title reduces to `30px`, content stacks to one column, video max width becomes `100%`.
