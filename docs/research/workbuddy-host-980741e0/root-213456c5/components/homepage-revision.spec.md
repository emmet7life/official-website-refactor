# Homepage Revision Specification

## Scope

Existing `/` route update from the Workbuddy marketing source. Static content retains the existing intersection-entry and card-hover transitions.

## Changes

- Four counters: `27 发明专利`, `48 实用新型专利`, `21 软件著作权`, `96 知识产权`; number style is `58px/700 #1d66d5` on a `#051137` background.
- Products are 天线、无源、有源、伺服转台、分系统类、来图加工. The cards are 16:10, 380px max width, radius 28px, with a -7px hover rise.
- Company copy is verbatim source content: 15px/28.5px, 900px max width, `rgba(255,255,255,.75)`.
- Five capabilities follow company, using 44px source icons in 86px outlined containers and the same glass-card grid as products.
- Consultation icon holders are 46px circles; phone/location/mail render at 20px and fax at 22px.

## Responsive behavior

Desktop cards are a 3 + 3 product grid and 3 + 2 capability grid. At 640px and below, cards stack full width.
