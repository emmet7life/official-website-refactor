"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    newsSelectCat?: (category: string) => void;
  }
}

type NewsCategory = "公司新闻" | "媒体报道" | "行业资讯" | "学术展会";
type NewsFilter = "全部" | NewsCategory | "电子报";

type NewsRecord = {
  id: string;
  category: NewsCategory;
  date: string;
  title: string;
  image: string;
  summary: string;
};

const NEWS: NewsRecord[] = [
  {
    id: "rc-UznxhW",
    category: "公司新闻",
    date: "2026-05-29",
    title: "【央视财经报道】万亿美元大市场！又一赛道，火了！“我国位列全球第一梯队”",
    image: "202606181038135895.jpg",
    summary: "央视财经聚焦低空经济产业发展，雷科防务持续发挥雷达、通信与智能感知技术优势，服务新兴产业应用落地。",
  },
  {
    id: "rc-UznxhL",
    category: "媒体报道",
    date: "2026-05-25",
    title: "【转自网易】深耕低空赛道 雷科防务携多款硬核产品亮相2026国际低空经济与无人系统博览会",
    image: "202606181152538251.jpg",
    summary: "雷科防务携多款面向低空经济与无人系统的产品和解决方案亮相展会，展示智能感知技术在低空场景中的应用。",
  },
  {
    id: "rc-Uznxhn",
    category: "媒体报道",
    date: "2026-05-21",
    title: "军工技术赋能智慧养老，瑞可安毫米波雷达方案亮相北京老博会",
    image: "202606181348129214.jpg",
    summary: "瑞可安以毫米波雷达感知方案服务智慧养老场景，为居家照护和养老机构提供更及时、更可靠的安全守护。",
  },
  {
    id: "rc-Uznxhv",
    category: "公司新闻",
    date: "2026-04-15",
    title: "理工雷科亮相香港世界青年大会 董事长刘峰发声 深化全球布局",
    image: "202606181415293574.png",
    summary: "理工雷科亮相香港世界青年大会，分享企业科技创新实践，持续深化国际合作与全球业务布局。",
  },
  {
    id: "rc-UznxUW",
    category: "公司新闻",
    date: "2026-04-08",
    title: "2026太空算力产业大会在京举行，雷科空天受邀作专题报告",
    image: "202606181424406097.png",
    summary: "雷科空天受邀参加2026太空算力产业大会并作专题报告，介绍空天信息技术和算力应用方面的探索。",
  },
  {
    id: "rc-UznxUL",
    category: "公司新闻",
    date: "2026-03-31",
    title: "雷科防务× 明朝万达战略合作签约｜联合发布智能体安全系列产品，共筑国产化 AI 安全新底座",
    image: "202606181431199997.jpg",
    summary: "雷科防务与明朝万达达成战略合作，联合发布智能体安全系列产品，共同推进国产化人工智能安全能力建设。",
  },
  {
    id: "rc-Uzn3UL",
    category: "媒体报道",
    date: "2026-03-19",
    title: "理工雷科亮相成都老博会 智能雷达守护养老安全",
    image: "202603301443062610.jpg",
    summary: "理工雷科在成都老博会展示智能雷达养老解决方案，用科技感知守护老年人居家生活安全。",
  },
  {
    id: "rc-UznvJL",
    category: "公司新闻",
    date: "2025-12-22",
    title: "理工雷科“隐形守护”方案亮相2025海南康养大会",
    image: "202512231006008292.jpg",
    summary: "理工雷科携“隐形守护”智慧康养方案亮相大会，探索科技赋能养老产业的新模式与新路径。",
  },
  {
    id: "rc-UznQhW",
    category: "媒体报道",
    date: "2025-12-11",
    title: "2025年亚太空域展览会盛况启幕 理工雷科携雷达系列产品重磅亮相",
    image: "202512231015328146.jpg",
    summary: "理工雷科携雷达系列产品亮相2025年亚太空域展览会，集中展示面向空域安全的技术和产品能力。",
  },
  {
    id: "rc-UznQhL",
    category: "公司新闻",
    date: "2025-12-09",
    title: "理工雷科受邀参加京能集团“党建+双碳”为老服务产业链联盟2025年度工作会",
    image: "202512231026046870.jpg",
    summary: "理工雷科参加京能集团产业链联盟年度工作会，交流党建与双碳融合发展的实践成果及为老服务方案。",
  },
  {
    id: "rc-UznQhn",
    category: "公司新闻",
    date: "2025-11-24",
    title: "驰骋雷达前沿 雷科防务亮相第七届IET国际雷达会议",
    image: "202512231415246243.jpg",
    summary: "雷科防务亮相第七届IET国际雷达会议，与行业专家交流雷达技术前沿，共同探讨产业发展趋势。",
  },
  {
    id: "rc-UznQhv",
    category: "公司新闻",
    date: "2025-11-14",
    title: "6G大会，在京启幕——理工雷科重磅发声，深度参与6G共建",
    image: "202512231421355110.jpg",
    summary: "理工雷科参加6G大会并分享技术实践，持续参与下一代移动通信技术和产业生态建设。",
  },
];

const E_NEWS = [
  ['2015', [['2015/10/17 恒达微波参加 IME/China 2015第十届中国国际微波及天线技术展览', 'enews/20151017/enewsletter.html'], ['2015/10/16 恒达微波参加2015第十届国际微波及天线技术展览会', 'enews/20151016/enewsletter.html']]],
  ['2014', [['2014/10/20 恒达微波参加2014第九届国际微波及天线技术展览会', 'enews/20141020/enewsletter.html'], ['2014/02/24 恒达微波参加IWS国际无线会议', 'enews/20140221/enewsletter.html']]],
  ['2013', [['2013/11/07 恒达微波参加2013年全国天线年会', 'enews/20131107/enewsletter.html'], ['2013/10/09 恒达微波参加2013第八届国际微波及天线技术展览会', 'enews/20131009/enewsletter.html']]],
  ['2012', [['2012/11/30 西安恒达微波技术开发有限公司喜迁航天基地新址通知函', 'enews/20121130/enewsletter.html'], ['2012/04/24 恒达微波欢迎您参加2012年国际微波毫米波技术会议暨产品展', 'enews/20120424/enewsletter.html']]],
  ['2011', [['2011/12/21 恒达微波祝您新年快乐', 'enews/20111221/enewsletter.html'], ['2011/10/26 恒达微波诚邀您参加IME/China 2011上海国际微波展', 'enews/20111026/enewsletter.htm'], ['2011/10/17 恒达微波诚邀您参加2011年全国天线年会', 'enews/20111017/enewsletter.htm'], ['2011/07/26 恒达微波卫星通信应用专题', 'enews/20110726/enewsletter.html'], ['2011/05/23 恒达微波参加2011年全国微波毫米波会议', 'enews/20110523/enewsletter.htm']]],
  ['2010', [['2010/10/11 恒达微波参加IME2010上海国际微波展', 'enews/20101011/enewsletter.html'], ['2010/06/09 恒达微波网站全新改版', 'enews/20100609/enewsletter.html'], ['2010/04/28 恒达微波欢迎您参加2010年国际微波毫米波技术会议', 'enews/20100428/enewsletter.htm']]],
  ['2009', [['2009/8/4 恒达微波现货供应', 'enews/20090804/enewsletter.html'], ['2009/7/27 恒达微波卫星通信应用专题（第4期）', 'enews/20090727/enewsletter.html'], ['2009/7/20 恒达微波卫星通信应用专题（第3期）', 'enews/20090720/enewsletter.html'], ['2009/7/13 恒达微波卫星通信应用专题（第2期）', 'enews/20090713/enewsletter_2.html'], ['2009/7/7 恒达微波卫星通信应用专题（第1期）', 'enews/20090707/enewsletter_1.html']]],
] as const;

const LEGACY_NEWS: NewsRecord[] = [
  { id: "legacy-行业资讯-1", category: "行业资讯", date: "2022-12-05", title: "【转自中国载人航天】官方 | 神舟十四号载人飞船返回舱成功着陆 神舟十四号载人飞行任务取得圆...", image: '202606181038135895.jpg', summary: "【转自中国载人航天】官方 | 神舟十四号载人飞船返回舱成功着陆 神舟十四号载人飞行任务取得圆..." },
  { id: "legacy-行业资讯-2", category: "行业资讯", date: "2022-11-22", title: "【转自人民日报】神舟十五号，择机发射！", image: '202606181038135895.jpg', summary: "【转自人民日报】神舟十五号，择机发射！" },
  { id: "legacy-行业资讯-3", category: "行业资讯", date: "2022-10-25", title: "【转自央视新闻】梦天实验舱，近日择机发射！", image: '202606181038135895.jpg', summary: "【转自央视新闻】梦天实验舱，近日择机发射！" },
  { id: "legacy-行业资讯-4", category: "行业资讯", date: "2022-10-14", title: "【转自央视新闻】期待！长征七号遥六运载火箭运抵发射场", image: '202606181038135895.jpg', summary: "【转自央视新闻】期待！长征七号遥六运载火箭运抵发射场" },
  { id: "legacy-行业资讯-5", category: "行业资讯", date: "2022-08-15", title: "【转自西安航天基地】相约丝博，共赴星河之约！", image: '202606181038135895.jpg', summary: "【转自西安航天基地】相约丝博，共赴星河之约！" },
  { id: "legacy-行业资讯-6", category: "行业资讯", date: "2022-07-25", title: "【转自人民日报】问天升空，叩问苍穹！", image: '202606181038135895.jpg', summary: "【转自人民日报】问天升空，叩问苍穹！" },
  { id: "legacy-行业资讯-7", category: "行业资讯", date: "2022-05-10", title: "再立新功！天舟四号用成功向祖国报告", image: '202606181038135895.jpg', summary: "再立新功！天舟四号用成功向祖国报告" },
  { id: "legacy-行业资讯-8", category: "行业资讯", date: "2022-05-10", title: "天舟四号货运飞船发射成功！中国空间站全面建造大幕正式开启", image: '202606181038135895.jpg', summary: "天舟四号货运飞船发射成功！中国空间站全面建造大幕正式开启" },
  { id: "legacy-行业资讯-9", category: "行业资讯", date: "2022-02-16", title: "今年发多少火箭？什么型号首飞？完成啥大工程？| 中国航天科技集团发布《蓝皮书》", image: '202606181038135895.jpg', summary: "今年发多少火箭？什么型号首飞？完成啥大工程？| 中国航天科技集团发布《蓝皮书》" },
  { id: "legacy-行业资讯-10", category: "行业资讯", date: "2021-09-17", title: "神舟十二成功着陆 航天英雄平安归来", image: '202606181038135895.jpg', summary: "神舟十二成功着陆 航天英雄平安归来" },
  { id: "legacy-行业资讯-11", category: "行业资讯", date: "2021-06-16", title: "明日出征！时隔五年，中国航天员将再次前往太空", image: '202606181038135895.jpg', summary: "明日出征！时隔五年，中国航天员将再次前往太空" },
  { id: "legacy-行业资讯-12", category: "行业资讯", date: "2020-08-25", title: "常用天线、无源器件干货汇总", image: '202606181038135895.jpg', summary: "常用天线、无源器件干货汇总" },
  { id: "legacy-行业资讯-13", category: "行业资讯", date: "2020-08-25", title: "PCB设计中，3W原则、20H原则和五五原则你都知道是怎样的吗？", image: '202606181038135895.jpg', summary: "PCB设计中，3W原则、20H原则和五五原则你都知道是怎样的吗？" },
  { id: "legacy-行业资讯-14", category: "行业资讯", date: "2020-08-21", title: "L波段相控阵天线单元设计", image: '202606181038135895.jpg', summary: "L波段相控阵天线单元设计" },
  { id: "legacy-行业资讯-15", category: "行业资讯", date: "2020-07-18", title: "长五“就位”，目标：火星！", image: '202606181038135895.jpg', summary: "长五“就位”，目标：火星！" },
  { id: "legacy-行业资讯-16", category: "行业资讯", date: "2020-05-09", title: "长征五号B运载火箭首飞成功！", image: '202606181038135895.jpg', summary: "长征五号B运载火箭首飞成功！" },
  { id: "legacy-行业资讯-17", category: "行业资讯", date: "2020-04-25", title: "垂直间隔50米、水平间隔100米！腾盾“双尾蝎”无人机在自贡完成一站控双机编队飞行！", image: '202606181038135895.jpg', summary: "垂直间隔50米、水平间隔100米！腾盾“双尾蝎”无人机在自贡完成一站控双机编队飞行！" },
  { id: "legacy-行业资讯-18", category: "行业资讯", date: "2020-04-25", title: "信息情.航天梦", image: '202606181038135895.jpg', summary: "信息情.航天梦" },
  { id: "legacy-行业资讯-19", category: "行业资讯", date: "2020-03-20", title: "毛二可院士：雷达技术的前世与今生", image: '202606181038135895.jpg', summary: "毛二可院士：雷达技术的前世与今生" },
  { id: "legacy-行业资讯-20", category: "行业资讯", date: "2019-12-19", title: "中国航天2020硬核预告！", image: '202606181038135895.jpg', summary: "中国航天2020硬核预告！" },
  { id: "legacy-学术展会-1", category: "学术展会", date: "2026-07-02", title: "诚挚邀约 | 恒达微波× 雷科空天 邀您共赴第四届商业航天应用大会暨空天信息卫星展！", image: '202606181038135895.jpg', summary: "诚挚邀约 | 恒达微波× 雷科空天 邀您共赴第四届商业航天应用大会暨空天信息卫星展！" },
  { id: "legacy-学术展会-2", category: "学术展会", date: "2026-05-20", title: "诚挚邀约丨恒达微波× 雷科防务 邀您共赴2026 国际低空经济与无人系统博览会！", image: '202606181038135895.jpg', summary: "诚挚邀约丨恒达微波× 雷科防务 邀您共赴2026 国际低空经济与无人系统博览会！" },
  { id: "legacy-学术展会-3", category: "学术展会", date: "2026-05-20", title: "展会回顾丨深圳2026中国微波周 恒达微波精彩花絮", image: '202606181038135895.jpg', summary: "展会回顾丨深圳2026中国微波周 恒达微波精彩花絮" },
  { id: "legacy-学术展会-4", category: "学术展会", date: "2026-04-23", title: "展会回顾 | 第六届雷达未来大会 恒达微波精彩花絮", image: '202606181038135895.jpg', summary: "展会回顾 | 第六届雷达未来大会 恒达微波精彩花絮" },
  { id: "legacy-学术展会-5", category: "学术展会", date: "2026-05-08", title: "诚挚邀约 | 恒达微波邀您5月10日共赴 深圳 2026中国微波周！", image: '202606181038135895.jpg', summary: "诚挚邀约 | 恒达微波邀您5月10日共赴 深圳 2026中国微波周！" },
  { id: "legacy-学术展会-6", category: "学术展会", date: "2026-04-15", title: "特邀报告 | 恒达微波总设计师伍捍东：有源控相阵列的聚焦散焦与扫焦技术", image: '202606181038135895.jpg', summary: "特邀报告 | 恒达微波总设计师伍捍东：有源控相阵列的聚焦散焦与扫焦技术" },
  { id: "legacy-学术展会-7", category: "学术展会", date: "2026-04-15", title: "诚挚邀约 | 恒达微波邀您4月18日共赴第六届雷达未来大会！", image: '202606181038135895.jpg', summary: "诚挚邀约 | 恒达微波邀您4月18日共赴第六届雷达未来大会！" },
  { id: "legacy-学术展会-8", category: "学术展会", date: "2026-04-07", title: "展会回顾 | IME第八届西部微波会 恒达微波精彩花絮", image: '202606181038135895.jpg', summary: "展会回顾 | IME第八届西部微波会 恒达微波精彩花絮" },
  { id: "legacy-学术展会-9", category: "学术展会", date: "2026-03-26", title: "诚挚邀约 | 恒达微波邀您4月2日共赴IME第八届西部微波会！", image: '202606181038135895.jpg', summary: "诚挚邀约 | 恒达微波邀您4月2日共赴IME第八届西部微波会！" },
  { id: "legacy-学术展会-10", category: "学术展会", date: "2026-03-26", title: "特邀报告 | 恒达微波总设计师伍捍东：有源控相阵列的聚焦散焦与扫焦技术", image: '202606181038135895.jpg', summary: "特邀报告 | 恒达微波总设计师伍捍东：有源控相阵列的聚焦散焦与扫焦技术" },
  { id: "legacy-学术展会-11", category: "学术展会", date: "2025-11-26", title: "特邀报告 | 恒达微波伍捍东总设计师：相控阵天线原理与应用（11月28日南京）", image: '202606181038135895.jpg', summary: "特邀报告 | 恒达微波伍捍东总设计师：相控阵天线原理与应用（11月28日南京）" },
  { id: "legacy-学术展会-12", category: "学术展会", date: "2025-11-26", title: "诚挚邀约丨恒达微波邀您11月28日共赴 IME2025第三届南京微波毫米波天线及雷达技术会！", image: '202606181038135895.jpg', summary: "诚挚邀约丨恒达微波邀您11月28日共赴 IME2025第三届南京微波毫米波天线及雷达技术会！" },
  { id: "legacy-学术展会-13", category: "学术展会", date: "2025-11-10", title: "展会回顾 │ 南京 2025雷达无线电产业大会 ? 恒达微波精彩花絮", image: '202606181038135895.jpg', summary: "展会回顾 │ 南京 2025雷达无线电产业大会 ? 恒达微波精彩花絮" },
  { id: "legacy-学术展会-14", category: "学术展会", date: "2025-11-06", title: "诚挚邀约丨恒达微波邀您11月6-8日共赴 南京 2025雷达无线电产业大会！", image: '202606181038135895.jpg', summary: "诚挚邀约丨恒达微波邀您11月6-8日共赴 南京 2025雷达无线电产业大会！" },
  { id: "legacy-学术展会-15", category: "学术展会", date: "2025-10-27", title: "展会回顾 │ IME/China 2025 第18届微波天线及材料会 恒达微波精彩花絮", image: '202606181038135895.jpg', summary: "展会回顾 │ IME/China 2025 第18届微波天线及材料会 恒达微波精彩花絮" },
  { id: "legacy-学术展会-16", category: "学术展会", date: "2025-10-27", title: "展会回顾 │ 2025全国天线年会 恒达微波精彩花絮", image: '202606181038135895.jpg', summary: "展会回顾 │ 2025全国天线年会 恒达微波精彩花絮" },
  { id: "legacy-学术展会-17", category: "学术展会", date: "2025-10-19", title: "诚挚邀约丨恒达微波邀您10月20-22日共赴 IME/China 2025 第18届微波天线及材料会！", image: '202606181038135895.jpg', summary: "诚挚邀约丨恒达微波邀您10月20-22日共赴 IME/China 2025 第18届微波天线及材料会！" },
  { id: "legacy-学术展会-18", category: "学术展会", date: "2025-10-19", title: "诚挚邀约丨恒达微波邀您10月20-22日共赴2025全国天线年会！", image: '202606181038135895.jpg', summary: "诚挚邀约丨恒达微波邀您10月20-22日共赴2025全国天线年会！" },
  { id: "legacy-学术展会-19", category: "学术展会", date: "2025-08-11", title: "展会回顾│第三届天线与微波及卫星通信关键技术会?恒达微波精彩花絮", image: '202606181038135895.jpg', summary: "展会回顾│第三届天线与微波及卫星通信关键技术会?恒达微波精彩花絮" },
  { id: "legacy-学术展会-20", category: "学术展会", date: "2025-08-06", title: "诚挚邀约丨恒达微波邀您8月7日共赴天线与微波及卫星通信会！", image: '202606181038135895.jpg', summary: "诚挚邀约丨恒达微波邀您8月7日共赴天线与微波及卫星通信会！" },
];

const imagePath = (filename: string) => `/sites/www-racodf-com-3880565d/shared/news/${filename}`;

export function NewsSection() {
  const [filter, setFilter] = useState<NewsFilter>("全部");
  const [selected, setSelected] = useState<NewsRecord | null>(null);
  const allNews = [...NEWS, ...LEGACY_NEWS];
  const visibleNews = filter === "全部" || filter === "电子报" ? (filter === "电子报" ? [] : allNews) : allNews.filter((item) => item.category === filter);

  useEffect(() => {
    const previous = window.newsSelectCat;
    window.newsSelectCat = (category: string) => {
      if (["公司新闻", "媒体报道", "行业资讯", "学术展会", "电子报", "全部"].includes(category)) setFilter(category as NewsFilter);
    };
    return () => {
      if (previous) window.newsSelectCat = previous;
      else delete window.newsSelectCat;
    };
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("overflow-hidden");
    };
  }, [selected]);

  return (
    <section id="news" className="bg-gray-50 py-16 md:py-24 lg:py-28">
      <div className="max-w-container mx-auto px-5 md:px-10 lg:px-16">
        <div className="fade-in-up mb-12 flex flex-col gap-6 lg:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" />
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-4xl">新闻资讯</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">关注恒达微波公司新闻、媒体报道、行业资讯与学术展会动态</p>
          </div>
        </div>

        <div id="news-tabs" className="fade-in-up mb-8 flex flex-wrap gap-3">
          {(["全部", "公司新闻", "媒体报道", "行业资讯", "学术展会", "电子报"] as const).map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`inline-flex items-center rounded border px-4 py-1.5 text-sm transition-colors ${active ? "border-primary bg-primary-light text-primary" : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filter === "电子报" ? <div id="e-news-grid" className="space-y-6">
          {E_NEWS.map(([year, items]) => <section key={year} className="rounded-lg border border-gray-200 bg-white p-5 md:p-6"><h3 className="mb-4 text-lg font-semibold text-primary">{year}年恒达微波电子报</h3><div className="grid gap-3 md:grid-cols-2">{items.map(([title, href]) => <a key={href} href={`https://www.hdmicrowave.com/${href}`} target="_blank" rel="noopener noreferrer" className="group rounded border border-gray-100 bg-gray-50 px-4 py-3 text-sm leading-relaxed text-gray-700 transition-colors hover:border-primary-mid hover:bg-primary-light hover:text-primary">{title}<span className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">↗</span></a>)}</div></section>)}
        </div> : <div id="news-grid" className="border-t border-gray-200 divide-y divide-gray-200">
          {visibleNews.map((item) => (
            <button key={item.id} type="button" onClick={() => setSelected(item)} className="group flex w-full items-center gap-4 py-4 text-left md:gap-5 md:py-5">
              <span className="h-20 w-28 shrink-0 overflow-hidden rounded-md bg-gray-100 md:h-24 md:w-36">
                <img src={imagePath(item.image)} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="mb-1.5 flex items-center gap-2">
                  <span className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs ${item.category === "媒体报道" ? "bg-primary-light text-primary" : "bg-gray-100 text-primary-dark"}`}>{item.category}</span>
                  <time className="text-xs tabular-nums text-gray-400 md:text-sm">{item.date}</time>
                </span>
                <span className="block line-clamp-2 text-sm font-medium text-gray-800 transition-colors group-hover:text-primary md:text-base">{item.title}</span>
              </span>
            </button>
          ))}
        </div>}
        {filter !== "电子报" && <p className={`${visibleNews.length ? "hidden" : ""} py-10 text-center text-sm text-gray-500`}>该分类暂无新闻</p>}
        {filter !== "电子报" && <div className="mt-10 flex justify-center"><button type="button" className="inline-flex h-12 items-center justify-center gap-2 rounded border border-gray-200 px-8 font-medium text-primary transition-colors hover:border-primary">加载更多<span aria-hidden="true" className="text-xl leading-none">+</span></button></div>}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-5" role="dialog" aria-modal="true" aria-label={selected.title} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <article className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-2xl md:p-10">
            <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-400 hover:bg-gray-100 hover:text-gray-700" aria-label="关闭">×</button>
            <div className="mb-4 flex items-center gap-2"><span className="rounded-sm bg-primary-light px-2 py-0.5 text-xs text-primary">{selected.category}</span><time className="text-sm text-gray-400">{selected.date}</time></div>
            <h3 className="pr-8 text-xl font-semibold leading-relaxed text-gray-900 md:text-2xl">{selected.title}</h3>
            <img src={imagePath(selected.image)} alt="" className="mt-6 max-h-80 w-full rounded-md object-cover" />
            <p className="mt-6 text-base leading-8 text-gray-600">{selected.summary}</p>
          </article>
        </div>
      )}
    </section>
  );
}
