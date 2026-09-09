# AboutHonorSection

## Target
- Hash: `#about-honor` on `/`, nested in shared `#about` shell.
- Root `<div id="about-honor" className="about-part">`; heading `资质荣誉`.

## Cards
Use local originals under `/sites/www-racodf-com-3880565d/shared/about/`:
`honor-aaaaa-innovation.jpg` / 高新技术企业创新能力评价 AAAAA 级 / 资质评级;
`honor-space-rendezvous-radar.jpg` / 载人航天交会对接微波雷达研制突出贡献单位 / 行业奖项;
`honor-shaanxi-trademark.jpg` / 陕西省著名商标 / 品牌荣誉;
`honor-cmmi3.jpg` / CMMI 成熟度 3 级认证 / 体系认证;
`honor-bj-software-core.jpg` / 2023 北京软件核心竞争力企业 / 国家级资质;
`honor-top100-2013.jpg` / 2013中关村高成长企业 TOP100 / 成长荣誉;
`honor-rising-2012.jpg` / 2012 中关村新锐企业十强 / 成长荣誉;
`honor-innovative-sme.jpg` / 北京市“创新型”中小企业 / 资质认定.

## Layout / behavior
- Grid: `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`, gap 5 / 6; image aspect 3/2, rounded-lg, gray border.
- Each card is a button; hover border/shadow/lift, image scale 1.03 and reveal zoom icon. Clicking opens the existing local dialog pattern with image/title; no network behavior.
- Match source panel size around 1297x652 desktop and 335x800 mobile. Heading spacing `mb-10 lg:mb-12`, card title `text-sm leading-snug line-clamp-2`, category pill.
