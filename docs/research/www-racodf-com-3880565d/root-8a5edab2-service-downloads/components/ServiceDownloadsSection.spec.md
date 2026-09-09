# ServiceDownloadsSection

## Target
- Hash `#service-downloads` on `/`; render inside shared `#service` shell.
- Root `<div id="service-downloads" className="service-part">`.
- Heading `资料下载`, category `产品资料`.

## Content
Render these three source links as cards, preserving title, subtitle and PDF type:
- `迁飞生物监测预警系统产品册` — `迁飞性害虫与生物监测预警系统产品介绍 · PDF` — `/upfiles/1782736071656-64c4a369.pdf`
- `2026智能网联仿真测试产品册-测试仪器` — `面向智能网联汽车的仿真测试仪器产品册 · PDF` — `/upfiles/1782736195441-d515e8b6.pdf`
- `智慧养老业务产品册` — `面向智慧养老的健康监护与服务产品介绍 · PDF` — `/upfiles/1782736116750-d24a7499.pdf`

## Layout / behavior
- Cards are real anchors with source download URLs and `data-download`; local clone can use the existing local acknowledgement behavior rather than network submission.
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, gap 5/6; white rounded cards, file icon tile in primary-light, title/subtitle truncation, download icon, hover border/shadow/lift.
- Panel source size is about 1297px wide desktop and stacks on 390px.
