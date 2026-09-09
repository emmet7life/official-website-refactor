# NewsSection

## Target
- Hash `#news` on `/`; a single page with filter buttons `全部`, `公司新闻`, `市场活动`.
- Shared section root `<section id="news">`, background `bg-gray-50`, py-16/md:24/lg:28.

## Content
- Heading `新闻资讯`; intro `关注公司新闻与市场活动，了解雷科防务最新动态`.
- Filter counts in source: 公司新闻 138, 市场活动 29. Initial state is 全部.
- Render the ten visible source records from the captured homepage source, preserving category, date, title, image and order. Company titles include `【央视财经报道】万亿美元大市场！又一赛道，火了！“我国位列全球第一梯队”`, `理工雷科亮相香港世界青年大会 董事长刘峰发声 深化全球布局`, `2026太空算力产业大会在京举行，雷科空天受邀作专题报告`, `雷科防务× 明朝万达战略合作签约｜联合发布智能体安全系列产品，共筑国产化 AI 安全新底座`, `理工雷科“隐形守护”方案亮相2025海南康养大会`, `理工雷科受邀参加京能集团“党建+双碳”为老服务产业链联盟2025年度工作会`, `驰骋雷达前沿 雷科防务亮相第七届IET国际雷达会议`, `6G大会，在京启幕——理工雷科重磅发声，深度参与6G共建`; market titles include `【转自网易】深耕低空赛道 雷科防务携多款硬核产品亮相2026国际低空经济与无人系统博览会`, `军工技术赋能智慧养老，瑞可安毫米波雷达方案亮相北京老博会`, `理工雷科亮相成都老博会 智能雷达守护养老安全`, `2025年亚太空域展览会盛况启幕 理工雷科携雷达系列产品重磅亮相`.

## Layout / behavior
- Filters are compact buttons with active primary-light state. List is a full-width `border-t` + `divide-y`; each row has 112x80 mobile / 144x96 desktop image, category/date, clamped title, hover image scale and title color.
- Clicking a news row opens the existing full-screen local news detail dialog with title, category, date and a short body/summary; Escape/backdrop close.
- Clicking filters updates visible rows and counts; 加载更多 button remains at bottom as source affordance (static demo may reveal no additional records).
- Hash navigation must show only `#news`; both navbar submenu items point to `#news` and select the matching filter.
