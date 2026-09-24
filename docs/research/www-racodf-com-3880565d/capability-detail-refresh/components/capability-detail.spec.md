# Capability Detail Refresh Specification

## Overview
- Target files: `CapabilityPage.tsx`, `CapabilityPage.module.css`
- Source pages: `cap-management.html`, `cap-test.html`, `cap-inspection.html`, `cap-tech.html`, `cap-smart.html`
- Interaction model: static content, sticky side navigation, hover states on nav/cards/images.

## Layout
- Header is preserved from the current site.
- Page banner height is 300px, starts below the 70px fixed header, uses dark capability-specific background images from `/assets/capability/banner-*.png`.
- Body layout is a 1200px container, `grid-template-columns: 232px minmax(0, 1fr)`, gap 48px, padding top 56px.
- Side navigation matches current About page style: white card, gradient title, active light-blue item with 3px blue indicator; mobile becomes horizontal scroll.

## Content
- Management: quality system list, ISO image, HD-ERP paragraph/list/image, project team list.
- Test: test system table, dynamic range note, six system/report images, four equipment images.
- Inspection: two 3-column measurement grids, test/inspection table.
- Tech: four stat cards, design/lab figures, ten certificate images in source order.
- Smart: two intro paragraphs, six equipment images, brazing image, composite production line images, robot images, AGV images and video.

## Responsive Behavior
- Desktop: side nav sticky, two-column shell.
- Tablet/mobile: shell stacks; side nav becomes horizontal; grids reduce to 2 columns then 1 column.
