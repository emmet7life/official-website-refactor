# AboutHistorySection

## Target
- Hash: `#about-history` on `/`
- Render inside the existing `#about` shell below the shared 走进雷科 tabs.
- Root element must be `<div id="about-history" className="about-part">`.

## Content
Render heading `发展历程`, then a 13-item timeline:
2009 北京理工雷科电子信息技术有限公司成立，核心团队源自北京理工大学雷达技术团队。
2011 通过高新技术企业认定，并通过质量体系认证。
2013 荣获"北斗二号卫星工程建设突出贡献集体奖"；总经理刘峰荣获第十七届"中国青年五四奖章"。
2015 完成与雷科防务（股票代码 002413）的并购重组，登陆资本市场，获得新的发展平台。
2016 并购成都爱科特、西安奇维科技，加速多领域布局。
2018 成立尧云科技拓展千亿级存储市场；央视 CCTV-10《中关村》报道公司与毛二可院士的创业故事。
2019 全面启用 2 万平米草堂工业园生产基地，大幅提升智能化生产效率，迈入雷科防务发展新阶段。
2020 西安北理雷科创新园正式运营；重组西安恒达微波。
2021 成立成都雷科特毫米波技术有限公司，打造毫米波技术先进应用中心。
2022 雷科防务乔迁北京新办公大厦。
2023 雷科防务注册地从江苏迁回北京；成都微波毫米波工艺制造中心落地；西安智能制造单元建成投入使用。
2024 雷科电子荣获高新技术企业创新能力评价最高5A等级。
2025 某雷达产品获工信部某科技进步一等奖。

## Layout / behavior
- Desktop: centered vertical gradient line; alternating cards in two columns, 22px ringed nodes, `lg:pb-16`, card `rounded-xl border-gray-200 p-6 lg:p-7 shadow-sm`.
- Mobile: line at left 11px; all cards stack with `pl-12`, `space-y-10`.
- Card hover uses border primary-mid, card hover shadow, slight lift; reveal uses existing `.fade-in-up` observer.
- Match source dimensions: content width 1297px at 1440 viewport and panel height about 2765px; width 335px at 390 and panel height about 2558px.
