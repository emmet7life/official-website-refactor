# Marketing Navbar Specification

Source: `https://6e8e0fc82fa24bba9c69f617cee902d5.app.workbuddy.host/capability.html`

## Desktop structure

- Fixed full-width navigation bar; 71px rendered height; white at 92% opacity; `blur(14px)` and `0 1px 3px rgba(17,24,39,.06)` shadow.
- Centered inner container: `max-width: 1400px`, 70px high, 24px horizontal padding.
- Dark company logo: 40px high.
- Navigation links: PingFang SC / Microsoft YaHei / Hiragino Sans GB, 18px, weight 400, 28px gaps.
- Search control: 14px, 16px horizontal padding, 20px radius, `#f3f4f6` fill and `#e5e7eb` border.

## Dropdown interaction

- Hover/focus on a group opens a centered panel at 8px below the trigger.
- Panel: minimum width 172px; 8px padding; 12px radius; `0 18px 40px rgba(17,24,39,.14)` shadow.
- Items: 17px regular weight, 9px × 14px padding, 8px item radius; hover background `rgba(30,102,214,.1)`.
- Open transition: opacity and translateY from 8px to 0 over 200ms.

## Mobile

- Desktop link row and search control are hidden at 900px and below; a 26px menu control is displayed.
