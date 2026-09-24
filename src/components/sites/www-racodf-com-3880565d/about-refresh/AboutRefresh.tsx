/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./AboutRefresh.module.css";

export type AboutItem = "intro" | "history" | "honor" | "activity" | "capability";

const navItems: Array<{ item: AboutItem; label: string; href: string }> = [
  { item: "intro", label: "公司介绍", href: "/about/intro" },
  { item: "history", label: "发展历程", href: "/about/history" },
  { item: "honor", label: "荣誉资质", href: "/about/honor" },
  { item: "activity", label: "公司活动", href: "/about/activity" },
  { item: "capability", label: "能力介绍", href: "/capability" },
];

const pageTitles: Record<AboutItem, string> = {
  intro: "公司介绍",
  history: "发展历程",
  honor: "荣誉资质",
  activity: "公司活动",
  capability: "能力介绍",
};

export function AboutRefreshShell({ item, children }: { item: AboutItem; children: ReactNode }) {
  const title = pageTitles[item];
  return <div className={styles.page}>
    <section className={styles.banner}>
      <div className={styles.bannerInner}>
        <div className={styles.bannerTag}>ABOUT US</div>
        <h1 className={styles.bannerTitle}>{title}</h1>
        <div className={styles.crumb}><Link href="/">首页</Link><span>/</span><Link href="/about/intro">关于我们</Link><span>/</span><span className={styles.current}>{title}</span></div>
      </div>
    </section>
    <div className={styles.body}>
      <aside className={styles.side} aria-label="关于我们栏目">
        <div className={styles.sideHead}>关于我们</div>
        {navItems.map((nav) => <Link key={nav.item} href={nav.href} className={`${styles.sideLink} ${nav.item === item ? styles.sideLinkActive : ""}`}>{nav.label}</Link>)}
      </aside>
      <article className={styles.article}>{children}</article>
    </div>
  </div>;
}

const milestones = [
  ["1993", "西安恒达微波技术开发有限公司于西安市高新技术开发区正式成立。", "A1993.jpg"],
  ["2003", "恒达微波作为“神舟五号”地面测量设备研制的重要配套单位，获得中国空间技术研究院颁发的荣誉匾。", "A2003.jpg"],
  ["2005", "江苏恒达微波技术开发有限公司于江苏东台市成立。", "A2005.jpg"],
  ["2008", "恒达微波被评为陕西省第一批“高新技术企业”。", "A2008.jpg"],
  ["2012", "恒达微波参与研制的微波雷达成功参与“天宫一号”与“神舟八号”两次交会对接任务，并荣获“突出贡献单位”。", "A2012.jpg"],
  ["2013", "恒达微波举行20周年庆祝活动，正式迁址西安国家民用航天产业基地。", "A2013.jpg"],
  ["2017", "恒达微波被陕西省中小企业促进局授予陕西省“专精特新”中小企业荣誉称号。", "A2017.jpg"],
  ["2018", "恒达微波空间站探月产品研发生产班组荣获陕西省总工会“工人先锋号”称号；同年，恒达微波产品助力中国“人造小太阳”。", "A2018.jpg"],
  ["2019", "恒达微波与上市公司江苏雷科防务股份有限公司（股票代码：002413）完成重组，成为雷科防务全资子公司。", "A2019.jpg"],
  ["2022", "成立西安雷科达装备智能制造有限公司，为公司向装备智能制造、数字化工厂迈进做好准备。", "hengda-site.jpg"],
  ["2024", "恒达微波智能装备制造项目新址规划：占地57300㎡，计划总投资5亿元。", "hengda-site.jpg"],
] as const;

const honors = [
  ["gsry1.jpg", "陕西省“专精特新”中小企业"], ["gsry2.jpg", "西安市微波毫米波系统工程研究中心"], ["gsry5.jpg", "陕西省中小企业创新研发中心"], ["gsry3.jpg", "开拓创新奖"], ["gsry8.jpg", "载人航天交会对接微波雷达研制突出贡献单位"], ["gsry9.jpg", "神舟五号飞船载人飞行成功纪念"], ["gsry1.png", "高新技术企业"], ["gsry2 (1).jpg", "陕西省著名商标"], ["gsry6.png", "西安科技企业小巨人“领军企业”"], ["gsry4.jpg", "西安市优秀民营企业"], ["gsry3.png", "西安名牌产品"], ["gsry14.jpg", "校企合作"], ["gsry15.jpg", "校企合作"], ["gsry11.jpg", "校企合作"], ["gsry12.jpg", "校企合作"], ["gsry13.jpg", "校企合作"], ["gsry6.jpg", "会员单位"], ["gsry7.jpg", "会员单位"], ["gsry9 (1).jpg", "会员单位"], ["gsry8 (1).jpg", "会员单位"],
] as const;

const activityPhotos = ["gshd12.jpg", "gshd13.jpeg", "gshd14.jpg", "gshd15.jpg", "gshd17.jpg", "gshd18.jpg", "gshd19.jpg", "gshd20.jpg", "gshd21.jpeg", "gshd22.jpeg", "gshd23.jpeg", "gshd7.jpg", "gshd8.jpeg", "jthd1.jpg", "jthd10.jpg", "jthd11.jpg", "jthd12.jpg", "jthd13.jpg", "jthd14.jpg", "jthd2.jpg", "jthd3.jpg", "jthd5.jpg", "jthd6.jpg", "jthd7.jpg", "jthd9.jpg", "ny_ghhd_22.jpg"] as const;
const mediaPhotos = ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg", "009.jpg", "010.jpg", "011.jpg", "012.jpg", "013.jpg", "014.jpg", "015.jpg", "016.jpg", "017.jpg", "018.jpg", "019.jpg", "ny_mtxc_02.jpg", "sp1.jpg", "sp2.jpg", "sp3.jpg", "sp4.jpg"] as const;
const activityFeatures = [
  ["2019.11", "王英英荣获西安市“巾帼建功标兵”", "gshd1.jpg"],
  ["2019.11", "航天羽毛球大赛", "gshd2.jpg"],
  ["2019.10", "上海IME微波展", "gshd4.jpeg"],
  ["2019.09", "董事长位培东荣获“最美奋斗者”", "gshd3.jpg"],
  ["2019.08", "团建活动", "gshd5.jpg"],
  ["2019.07", "云南天线年会", "gshd6.jpeg"],
] as const;
const mediaItems = [
  ["2017.05.20", "陕西电视台对西安恒达微波技术开发有限公司进行报道"], ["2017.01.06", "东台广播电视台对西安恒达微波技术开发有限公司进行报道"], ["2013.06.23", "陕西电视台对西安恒达微波技术开发有限公司进行报道"], ["2012.06.23", "陕西电视台对西安恒达微波技术开发有限公司进行报道"], ["1998.08.06", "《人民日报》报道：展望未来，再创辉煌"], ["1998.08.04", "《市场报》报道：友谊·合作·发展·共创微波辉煌"], ["1998", "中央电视台《供求热线》企业雄风节目报道"],
] as const;

export function AboutIntroContent() {
  return <div className={styles.copy}>
    <section className={styles.section}><h2 className={styles.title}>公司简介</h2>
      <img className={styles.articleImage} src="/sites/www-racodf-com-3880565d/shared/about/hengda-company-leike.jpg" alt="恒达微波与雷科防务重组成功" />
      <p>2020年1月，西安恒达微波技术开发有限公司（以下简称为“恒达微波”或“公司”）正式加入雷科防务，成为雷科防务全资子公司（股票代码002413）。</p>
      <p>恒达微波创立于1993年，总部位于西安国家民用航天产业基地，长期致力于微波毫米波“天、馈、伺、车、源”产品及系统的研制。公司在西安国家民用航天基地建有17000平方米科研生产中心，在北京、南京、成都、石家庄设有办事处，重点服务于国内外著名院所及上市公司。</p>
      <p>恒达微波产品广泛应用于航空、航天、航海、气象、安检、警戒、检测、卫星通讯、无人机通讯、汽车电子、太赫兹、5G等领域。公司曾多次成功承担国家重大项目研制工作，多款产品成功替代进口，并通过鉴定定型列装。</p>
      <img className={`${styles.articleImage} ${styles.articleImageWide}`} src="/sites/www-racodf-com-3880565d/shared/about/hengda-company-hengda2.jpg" alt="恒达微波科研生产中心" />
      <p>恒达微波作为“国家高新技术企业”，取得了GJB、环境管理体系认证、职业健康安全管理体系认证以及“货物进出口许可证”等资质证书。公司品牌标识“恒达微波”<img className={styles.inlineLogo} src="/sites/www-racodf-com-3880565d/shared/about/hengda-company-logo.jpg" alt="恒达微波品牌标识" />荣获西安市、陕西省著名商标。</p>
      <p>恒达微波是国家重大航天项目“神舟”、“天宫”和“天舟”等系列工程的重要研制配套单位，被《陕西日报》等媒体誉为“国家重大航天工程中的陕西元素”，屡获业内嘉奖。</p>
    </section>
    <section className={styles.section}><h2 className={styles.title}>企业文化</h2><p className={styles.lead}>以技术立身，以协作推动项目落地。</p><div className={styles.cultureGrid}>{[["使命", "技术先进，实业报国"], ["愿景", "成为微波行业的标杆企业"], ["目标", "以成为卓越的微波供应商为目标"]].map(([title, text]) => <div className={styles.cultureCard} key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className={styles.section}><h2 className={styles.title}>产学研合作</h2><p>在“产学研”方面，公司利用20多年的微波行业经验和技术创新，先后与北京理工大学、西北大学、西北工业大学、西安电子科技大学、西安工业大学、西安邮电大学等院校建立了“工程实践教育中心”，同时按照“恒达卓越工程师培养计划”的通用标准和行业标准，积极为工程实践教育中心创造条件，并充分利用此平台，主动开展产学研项目的研究，以推动行业新技术及新工艺的创新发展，实现优势互补和资源共享，达到共赢的目的。</p></section>
  </div>;
}

export function AboutHistoryContent() { return <section className={styles.section}><h2 className={styles.title}>发展历程</h2><p className={styles.lead}>从微波技术开发起步，持续走向航天配套与装备智能制造。</p><div className={styles.timeline}>{milestones.map(([year, text, image]) => <div className={styles.timelineItem} key={year}><time className={styles.year}>{year}</time><p>{text}</p><img src={`/sites/www-racodf-com-3880565d/shared/history/${image}`} alt={`${year}年`} /></div>)}</div></section>; }

export function AboutHonorContent() { return <section className={styles.section}><h2 className={styles.title}>荣誉资质</h2><div className={styles.honorGrid}>{honors.map(([image, title], index) => <figure className={styles.honorCard} key={`${image}-${index}`}><img src={`/sites/www-racodf-com-3880565d/shared/honor/${image}`} alt={title} /><figcaption>{title}</figcaption></figure>)}</div></section>; }

export function AboutActivityContent() { return <>
  <section className={styles.section}><h2 className={styles.title}>公司活动</h2><div className={styles.activityList}>{activityFeatures.map(([date, title, image]) => <article className={styles.activityItem} key={title}><div className={styles.activityThumb}><img src={`/sites/www-racodf-com-3880565d/shared/about/activities/${image}`} alt={title} /></div><div><span className={styles.date}>{date}</span><h3>{title}</h3></div></article>)}</div><div className={styles.photoGrid}>{activityPhotos.map((image) => <figure key={image}><img src={`/sites/www-racodf-com-3880565d/shared/about/activities/${image}`} alt="" /></figure>)}</div></section>
  <section className={styles.section}><h2 className={styles.title}>媒体宣传</h2><div className={styles.activityList}>{mediaItems.map(([date, title]) => <article className={styles.mediaItem} key={`${date}-${title}`}><span className={styles.date}>{date}</span><p>{title}</p></article>)}</div><div className={styles.photoGrid}>{mediaPhotos.map((image) => <figure key={image}><img src={`/sites/www-racodf-com-3880565d/shared/about/media/${image}`} alt="" /></figure>)}</div></section>
  </>; }

const capabilities = [
  ["management", "管理能力", "1-management.svg", "以体系化流程驱动高效协同，保障项目交付质量与进度。"], ["test", "测试能力", "2-test.svg", "完备的微波与射频测试平台，覆盖全频段性能验证。"], ["inspection", "试验、检验能力", "3-inspection.svg", "从环境到可靠性的全流程实验与检验，支撑产品品质。"], ["tech", "技术能力", "4-tech.svg", "深厚的微波技术积累，支撑定制化产品的工程实现。"], ["smart", "智能制造", "5-smart.svg", "数字化产线与精密装备，保障高一致性与生产良率。"],
] as const;
export function CapabilityOverviewContent() { return <section className={styles.section}><h2 className={styles.title}>我们的能力体系</h2><div className={styles.capGrid}>{capabilities.map(([slug, title, icon, description]) => <Link className={styles.capCard} href={`/capability/${slug}`} key={slug}><span className={styles.capIcon}><img src={`/sites/www-racodf-com-3880565d/capability/${icon}`} alt="" /></span><h3>{title}</h3><p>{description}</p></Link>)}</div></section>; }
