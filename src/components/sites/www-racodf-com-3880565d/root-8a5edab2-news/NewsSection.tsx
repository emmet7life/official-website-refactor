"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

declare global {
  interface Window {
    newsSelectCat?: (category: string) => void;
  }
}

type NewsCategory = "公司新闻" | "媒体报道" | "行业资讯" | "学术展会";
export type NewsFilter = "全部" | NewsCategory | "电子报";

const newsPaths: Record<NewsFilter, string> = {
  "全部": "/news/all",
  "公司新闻": "/news/company",
  "媒体报道": "/news/media",
  "行业资讯": "/news/industry",
  "学术展会": "/news/exhibition",
  "电子报": "/news/enews",
};

type NewsRecord = {
  id: string;
  category: NewsCategory;
  date: string;
  title: string;
  image: string;
  summary: string;
  content?: string;
};

const NEWS: NewsRecord[] = [
  {
    id: "rc-UznxhW",
    category: "公司新闻",
    date: "2026-07-18",
    title: "恒达微波装备智能制造中心项目正式开工",
    image: "hengda-news-image1.png",
    summary: "恒达微波装备智能制造中心项目在西安国家民用航天产业基地开工，开启智能制造升级新篇章。",
    content: "2026年7月18日，恒达微波装备智能制造中心项目开工奠基仪式在西安国家民用航天产业基地隆重举行。\n\n莅临本次奠基仪式的领导及嘉宾有：西安国家民用航天产业基地管委会投资招商中心主任孙丛笑；北京雷科防务科技股份有限公司董事长高立宁、总经理刘峰；西安恒达微波技术开发有限公司董事长伍捍东、总经理马俊梅；西安奇维科技有限公司名誉董事长刘升；雷科防务总部及各子公司领导；上海电子工程设计研究院有限公司西北分公司副总经理刘田；方宇工程咨询有限公司副总经理杨帆；中国建筑第六工程局有限公司交通公司总经济师韩志侠、西北分公司总经理张存庆。\n\n各位领导与嘉宾齐聚现场，共同见证这一具有里程碑意义的重要时刻，标志着恒达微波智能制造升级新篇章的正式开启。\n\n01 嘉宾致辞：殷切寄语，共绘蓝图\n\n仪式上，西安国家民用航天产业基地管委会投资招商中心主任孙丛笑首先致辞，对项目顺利落地表示祝贺，肯定了恒达微波对航天基地微波产业发展的贡献，并表示将持续提供政策支持与服务保障，助力区域微波产业集群高质量发展。\n\n北京雷科防务科技股份有限公司董事长高立宁致辞表示，本项目是雷科防务优化产业布局、深耕智能制造领域的核心重点工程，承载着集团创新发展、转型升级的重要战略意义，对恒达微波未来发展寄予厚望。\n\n西安恒达微波技术开发有限公司总经理马俊梅代表项目实施主体致辞，向长期以来关心支持公司发展的各级领导、合作伙伴及全体员工表示衷心感谢，全面勾勒出项目建设规划与长远发展愿景，尽显实干攻坚、携手共进的责任与担当。\n\n方宇工程咨询有限公司副总经理杨帆致辞表示，工程质量是项目的生命线，监理团队将全程护航、严格把关，确保本项目打造为安全工程、精品工程、标杆工程。\n\n中国建筑第六工程局有限公司交通公司总经济师韩志侠致辞表示，施工团队将全力以赴、精工建造、安全施工、高效履约，高质量完成项目建设任务。\n\n02 奠基培土：鸣炮启航，共奠新基\n\n致辞环节结束后，西安恒达微波技术开发有限公司董事长伍捍东宣布：恒达微波装备智能制造中心项目正式开工。\n\n随后，鸣炮仪式正式启动。声声礼炮，奏响奋进乐章，预示着项目建设红红火火、未来发展蒸蒸日上。\n\n紧接着进行隆重的奠基培土环节，各位领导移步至奠基池，手持金铲，共同挥锹培土，为恒达微波装备智能制造中心项目奠定坚实根基。一锹沃土，夯实航天微波产业根基；一片新园，承载企业科创报国初心。培土礼成，标志着智能制造中心项目全面进入施工建设新阶段。\n\n仪式最后，各位领导及恒达微波参与仪式的员工们分别在奠基石前合影留念，共同记录项目启航的重要时刻。\n\n03 项目规划：升级赋能，智造未来\n\n恒达微波装备智能制造中心项目总投资3亿元，占地37.6亩，总建筑面积约5.8万㎡，建设周期为2年。项目规划建设6栋建筑，配套完整生产试验设施，建成现代化研发中心、智能化生产车间及配套办公生活区。\n\n项目建成后将全面提升公司在微波器件、组件及系统领域的研发与制造能力，引入先进的生产设备与测试仪器，进一步完善从设计研发、生产制造到检测验证的全链条能力，有效扩充产能，优化生产布局，助力恒达微波更好地服务于通信、雷达、卫星、航空航天等领域客户，为我国微波射频产业的高质量发展贡献力量。\n\n04 新程启航：踔厉奋发，再谱新篇\n\n此次装备智能制造中心奠基，是恒达微波发展路上的重要里程碑，也标志着企业开启了提质发展的全新阶段。作为雷科防务智能制造布局的重点项目，该项目契合集团创新发展与转型升级方向，将有效助力企业夯实主业基础、升级生产制造体系，推动业务智能化、规范化发展。\n\n立足新的发展起点，恒达微波将坚守技术创新理念，专注深耕微波技术，持续精进技术、优化产品，稳步提升企业核心竞争实力。公司将秉持务实稳健的发展作风，稳步提升行业发展水平，积极助力产业升级，为行业发展和国家科技建设贡献企业力量。",
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

export function NewsSection({ initialFilter = "全部" }: { initialFilter?: NewsFilter }) {
  const [filter, setFilter] = useState<NewsFilter>(initialFilter);
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
              <Link
                key={category}
                href={newsPaths[category]}
                className={`inline-flex items-center rounded border px-4 py-1.5 text-sm transition-colors ${active ? "border-primary bg-primary-light text-primary" : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"}`}
              >
                {category}
              </Link>
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
            <p className="mt-6 whitespace-pre-line text-base leading-8 text-gray-600">{selected.content ?? selected.summary}</p>
          </article>
        </div>
      )}
    </section>
  );
}

