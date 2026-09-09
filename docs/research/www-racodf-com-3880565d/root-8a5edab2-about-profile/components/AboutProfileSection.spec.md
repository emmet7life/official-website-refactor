# AboutProfileSection specification

## Overview

- Target: `src/components/sites/www-racodf-com-3880565d/root-8a5edab2-about-profile/AboutProfileSection.tsx`
- Screenshot: `docs/design-references/www-racodf-com-3880565d/root-8a5edab2-about-profile/original-1440.png` and `original-390.png`
- Interaction model: hash-driven view with click-driven tab strip; static profile body; hover transitions on company chips.

## Computed styles and structure

- Root `#about`: `display:block`, `background-color:rgb(255,255,255)`, `padding:64px 0 64px` at mobile, `96px 0` at md, `112px 0` at lg; shared source grid background uses 64px squares and a 1px rgba(20,38,72,.03) line.
- Inner container: `max-width:1440px`, centered, padding `0 20px` mobile, `0 40px` md, `0 64px` lg.
- Heading wrapper: `max-width:42rem`; blue rule `48px × 4px`, radius 9999px, gradient `rgb(22,93,255)` to `rgb(105,177,255)`, bottom margin 20px. Heading is 24px / 36px mobile, 36px / 40px md, weight 600, color `#1d2129`.
- Tabs: margin-top 32px, bottom margin 40px mobile / 56px lg, flex-wrap, column gap 4px, horizontal gap 32px, bottom border `1px solid #e5e6eb`. Tab padding `12px 4px`, font 14px mobile / 16px md, weight 500, 2px bottom border. Active color `#165dff` and border `#165dff`; inactive color `#86909c` and transparent border.
- Profile grid: `display:grid`; at lg `grid-template-columns:repeat(10,minmax(0,1fr))`, gap `64px`; left span 7, right span 3. Below lg it stacks with gap 48px.
- Image figure: rounded 8px, border `1px solid #e5e6eb`, gray background, overflow hidden, margin-bottom 32px. Image width 100%, aspect ratio 16/9, `object-fit:cover`.
- Copy: 14px / 28px mobile, 16px / 24px md and desktop, color `#86909c`; paragraph spacing 20px; `text-align:justify`.
- Company group title: 16px mobile / 18px md, weight 600, color `#1d2129`; vertical 4px gradient accent and 8px gap. Group bottom margin 24px.
- Company chips: inline-flex, gap 6px, padding `8px 14px`, 14px text, border `1px solid #e5e6eb`, radius 4px, background `#f7f8fa`, color `#4e5969`, vertical gap 10px. Linked chips hover to white background, blue text and `#69b1ff` border. External arrow is a 12px SVG.

## Verbatim content

Title: `走进雷科`; active tab: `集团概况`; other tabs: `发展历程`, `资质荣誉`, `企业品牌` (hidden by original CSS), `企业文化`, `人力资源`.

Profile copy is the three paragraphs visible in the original page and reused from the already extracted homepage ProfileSection. Core companies: 北京理工雷科电子信息技术有限公司, 北京理工雷科空天信息技术有限公司, 成都爱科特科技发展有限公司, 西安奇维科技有限公司, 西安恒达微波技术开发有限公司, 尧云科技（西安）有限公司. Investee companies: 苏州博海创业微系统有限公司, 苏州理工雷科传感技术有限公司, 理工雷科智途（北京）科技有限公司, 北方雷科（安徽）科技有限公司, 北京理工睿行电子科技有限公司, 奥瑞思智能科技（天津）有限公司.

## Responsive behavior

- 1440px: left content and right company groups sit beside each other; section height 1197.65625px.
- 768px: the `lg` grid has not activated; profile content and company list stack; section height 1762.875px.
- 390px: header is mobile, tabs wrap into two rows, image is full width and company groups stack; section height 1713.75px.

## Assets

Use `/sites/www-racodf-com-3880565d/root-8a5edab2/a4535c5a-1783486476841-7bfe0014.jpg` for the original campus image. Keep all arrow icons inline as the extracted SVG paths.
