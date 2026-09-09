"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    newsSelectCat?: (category: string) => void;
  }
}

type NewsCategory = "公司新闻" | "市场活动";

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
    category: "市场活动",
    date: "2026-05-25",
    title: "【转自网易】深耕低空赛道 雷科防务携多款硬核产品亮相2026国际低空经济与无人系统博览会",
    image: "202606181152538251.jpg",
    summary: "雷科防务携多款面向低空经济与无人系统的产品和解决方案亮相展会，展示智能感知技术在低空场景中的应用。",
  },
  {
    id: "rc-Uznxhn",
    category: "市场活动",
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
    category: "市场活动",
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
    category: "市场活动",
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

const imagePath = (filename: string) => `/sites/www-racodf-com-3880565d/shared/news/${filename}`;

export function NewsSection() {
  const [filter, setFilter] = useState<"全部" | NewsCategory>("全部");
  const [selected, setSelected] = useState<NewsRecord | null>(null);
  const visibleNews = filter === "全部" ? NEWS : NEWS.filter((item) => item.category === filter);

  useEffect(() => {
    const previous = window.newsSelectCat;
    window.newsSelectCat = (category: string) => {
      if (category === "公司新闻" || category === "市场活动" || category === "全部") setFilter(category);
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
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">关注公司新闻与市场活动，了解雷科防务最新动态</p>
          </div>
        </div>

        <div id="news-tabs" className="fade-in-up mb-8 flex flex-wrap gap-3">
          {(["全部", "公司新闻", "市场活动"] as const).map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`inline-flex items-center rounded border px-4 py-1.5 text-sm transition-colors ${active ? "border-primary bg-primary-light text-primary" : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"}`}
              >
                {category}
                {category !== "全部" && <span className="ml-1 text-xs opacity-70">{category === "公司新闻" ? 138 : 29}</span>}
              </button>
            );
          })}
        </div>

        <div id="news-grid" className="border-t border-gray-200 divide-y divide-gray-200">
          {visibleNews.map((item) => (
            <button key={item.id} type="button" onClick={() => setSelected(item)} className="group flex w-full items-center gap-4 py-4 text-left md:gap-5 md:py-5">
              <span className="h-20 w-28 shrink-0 overflow-hidden rounded-md bg-gray-100 md:h-24 md:w-36">
                <img src={imagePath(item.image)} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="mb-1.5 flex items-center gap-2">
                  <span className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs ${item.category === "市场活动" ? "bg-primary-light text-primary" : "bg-gray-100 text-primary-dark"}`}>{item.category}</span>
                  <time className="text-xs tabular-nums text-gray-400 md:text-sm">{item.date}</time>
                </span>
                <span className="block line-clamp-2 text-sm font-medium text-gray-800 transition-colors group-hover:text-primary md:text-base">{item.title}</span>
              </span>
            </button>
          ))}
        </div>
        <p className={`${visibleNews.length ? "hidden" : ""} py-10 text-center text-sm text-gray-500`}>该分类暂无新闻</p>
        <div className="mt-10 flex justify-center"><button type="button" className="inline-flex h-12 items-center justify-center gap-2 rounded border border-gray-200 px-8 font-medium text-primary transition-colors hover:border-primary">加载更多<span aria-hidden="true" className="text-xl leading-none">+</span></button></div>
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
