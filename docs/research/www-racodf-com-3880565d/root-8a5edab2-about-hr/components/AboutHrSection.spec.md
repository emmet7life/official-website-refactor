# AboutHrSection

## Target
- Hash: `#about-hr` on `/`, nested in shared `#about` shell.
- Root `<div id="about-hr" className="about-part">`.

## Content
- Training heading `人才培养`; paragraphs: `公司秉持"以人为本，培养一流人才"的理念，把人才放在战略C位。我们以"高学历、专业化、年轻化、可持续"为航标，打造覆盖全员、层层进阶的人才成长体系。` and `研发团队硕博占比超60%，硬核实力拉满。每年从顶尖院校锁定最强大脑，靠"导师制"和"项目制"让新人快速上线、独挑大梁。晋升通道公平透明，年轻人直接在核心战场当主角——组织有活力，人才有奔头，这是我们最硬的底气。`; include `/sites/www-racodf-com-3880565d/shared/about/hr-talent-0.png` centered.
- Heading `薪酬福利`; paragraph `公司致力于构建“外部具有竞争力、内部体现公平性、激励富有针对性”的全面薪酬体系，不仅用高薪回报员工的付出，更用暖心福利守护员工的生活。`.
- Heading `人才招聘`; paragraph `公司面向社会与校园持续开放招聘通道，以 “德才兼备、以德为先，人岗相适、用其所长” 为选拔原则，热忱欢迎志同道合的伙伴加入。`
- Jobs grouped by 研发类: 雷达算法工程师; 雷达系统工程师; 硬件工程师; 雷达系统总师; 嵌入式开发工程师; 高级算法主管/经理; 产品经理; 雷达算法工程师（反无）; 系统工程师; 卫星通信总体工程师. 市场类: 销售经理; 销售经理（健康雷达）. 职能类: 高级运维工程师; 新媒体运营专员. Every job uses `若干 · locations` exactly as source extraction.
- Contact: 招聘热线：010-68916700 人力资源部; 公司网址：www.racodf.com; 招聘邮箱：zhaopin@racodf.com; 公司地址：北京市海淀区远大南街6号院鲁迅文创园5号楼.

## Layout / behavior
- Training/welfare/recruiting blocks use source heading rule and `text-base text-gray-600 leading-relaxed space-y-4`; both extracted inline images are shown locally.
- Each recruitment card is a native clickable `<details>` / `<summary>` disclosure. Closed cards show title and `若干 · locations`; opening reveals the exact extracted `岗位职责` and `岗位要求` text with numbered bullet lines. The chevron rotates while open.
- Mobile stacks everything. Source panel is about 1297x2410 desktop and 335x2642 mobile. No external submit action; recruitment links can remain inert/local.
