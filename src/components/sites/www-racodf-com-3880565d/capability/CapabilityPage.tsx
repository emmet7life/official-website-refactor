/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ReactNode } from "react";
import { PageBanner } from "../page-banner/PageBanner";
import { SectionSideNav } from "../shared-section-nav/SectionSideNav";
import styles from "./CapabilityPage.module.css";

const assetRoot = "/sites/www-racodf-com-3880565d/capability";

const capabilities = [
  { slug: "management", title: "管理能力", icon: "1-management.svg", subtitle: "质量保障体系 · HD-ERP运营平台 · 项目管理团队", description: "以体系化流程驱动高效协同，保障项目交付质量与进度。", banner: "banner-management.png" },
  { slug: "test", title: "测试能力", icon: "2-test.svg", subtitle: "平面近场 · 暗室远场 · 外场测试 · 30MHz~220GHz", description: "完备的微波与射频测试平台，覆盖全频段性能验证。", banner: "banner-test.png" },
  { slug: "inspection", title: "试验、检验能力", icon: "3-inspection.svg", subtitle: "环境试验能力 · 精密测量能力", description: "从环境到可靠性的全流程实验与检验，支撑产品品质。", banner: "banner-inspection.png" },
  { slug: "tech", title: "技术能力", icon: "4-tech.svg", subtitle: "天、馈、伺、车、源自主研发、生产 · 频率覆盖 0-300GHz", description: "深厚的微波技术积累，支撑定制化产品的工程实现。", banner: "banner-tech.png" },
  { slug: "smart", title: "智能制造", icon: "5-smart.svg", subtitle: "设有技术室、机加车间、钳工车间、复材车间，专业智能制造生产线", description: "数字化产线与精密装备，保障高一致性与生产良率。", banner: "banner-smart.png" },
] as const;

type CapabilitySlug = (typeof capabilities)[number]["slug"];
type GridColumns = 2 | 3 | 4;

const capabilityMap = Object.fromEntries(capabilities.map((item) => [item.slug, item])) as Record<CapabilitySlug, (typeof capabilities)[number]>;
const image = (path: string) => `${assetRoot}/${path}`;

function CapabilityShell({ active, title, subtitle, backgroundImage, children }: { active: CapabilitySlug | "overview"; title: string; subtitle?: string; backgroundImage?: string; children: ReactNode }) {
  const navItems = [
    { key: "overview", label: "能力总览", href: "/capability", active: active === "overview" },
    ...capabilities.map((item) => ({ key: item.slug, label: item.title, href: `/capability/${item.slug}`, active: active === item.slug })),
  ];

  return (
    <div className={styles.page}>
      <PageBanner
        eyebrow="CAPABILITY"
        title={title}
        subtitle={subtitle}
        theme={backgroundImage ? "dark" : "light"}
        backgroundImage={backgroundImage}
        parentCrumb={active === "overview" ? undefined : { label: "能力介绍", href: "/capability" }}
      />
      <section className={styles.section}>
        <div className={styles.layout}>
          <SectionSideNav title="能力介绍" ariaLabel="能力介绍栏目" items={navItems} />
          <article className={styles.article}>{children}</article>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <div className={styles.categoryHead}><div className={styles.categoryBar} /><h2>{children}</h2></div>;
}

function Lead({ children, indent = false, className = "" }: { children: ReactNode; indent?: boolean; className?: string }) {
  return <p className={`${styles.lead} ${indent ? styles.leadIndent : ""} ${className}`}>{children}</p>;
}

function FeatureList({ items }: { items: string[] }) {
  return <ul className={styles.featureList}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function FigureGrid({ columns, items, fit = false }: { columns: GridColumns; items: Array<{ src: string; alt: string; caption?: string; contain?: boolean }>; fit?: boolean }) {
  return (
    <div className={`${styles.figureGrid} ${styles[`cols${columns}`]} ${fit ? styles.fitGrid : ""}`}>
      {items.map((item) => (
        <figure className={`${styles.figure} ${item.contain ? styles.containFigure : ""}`} key={`${item.src}-${item.caption ?? item.alt}`}>
          <img src={image(item.src)} alt={item.alt} loading="lazy" />
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}

function CenterPhoto({ src, alt }: { src: string; alt: string }) {
  return <div className={styles.photoCenter}><figure className={styles.figure}><img className={styles.photoNatural} src={image(src)} alt={alt} loading="lazy" /></figure></div>;
}

export function CapabilityPage() {
  return (
    <CapabilityShell active="overview" title="能力介绍" subtitle="管理能力 · 测试能力 · 试验、检验能力 · 技术能力 · 智能制造">
      <SectionTitle>我们的能力体系</SectionTitle>
      <div className={styles.capabilityGrid}>
        {capabilities.map((item) => (
          <Link className={styles.capabilityCard} href={`/capability/${item.slug}`} key={item.slug}>
            <span className={styles.capabilityIcon}><img src={image(item.icon)} alt="" aria-hidden="true" /></span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </CapabilityShell>
  );
}

function ManagementContent() {
  return <>
    <SectionTitle>质量保障体系</SectionTitle>
    <FeatureList items={["ISO质量管理体系认证证书", "ISO环境管理体系认证证书", "ISO职业健康安全管理体系认证"]} />
    <CenterPhoto src="management/custom/mgmt-iso.png" alt="ISO三大管理体系认证" />
    <SectionTitle>HD-ERP运营平台</SectionTitle>
    <Lead>自建ERP（含：OA、CRM、MRP、TQM、SCM、CCPM），覆盖研发制造全流程信息化管理。</Lead>
    <FeatureList items={["TOC计划排程、工单二维扫码、实时负荷监控", "任务自动分配、LCD大屏互动、零件齐套跟踪"]} />
    <CenterPhoto src="management/custom/mgmt-erp.png" alt="HD-ERP运营平台" />
    <SectionTitle>项目管理团队</SectionTitle>
    <FeatureList items={["PMP、CCPM及MBA培训及认证资质", "航天、航空项目十余年成功经验"]} />
  </>;
}

function TestContent() {
  return <>
    <SectionTitle>测试系统</SectionTitle>
    <div className={styles.tableScroll}><table className={styles.capabilityTable}><thead><tr><th>测试系统名称</th><th>核心规格</th><th>覆盖频率</th></tr></thead><tbody>
      <tr><td>平面近场测量系统</td><td>扫描架有效行程 9m×6m</td><td>0.8GHz~40GHz</td></tr>
      <tr><td>68探头球面场</td><td>转台精度 0.05°</td><td>0.4GHz~8GHz</td></tr>
      <tr><td>9m暗室远场测试系统</td><td>转台精度 0.05°</td><td>2GHz~110GHz</td></tr>
      <tr><td>5m暗室远场测量系统</td><td>转台精度 0.05°</td><td>3GHz~220GHz</td></tr>
      <tr><td>外场测试系统</td><td>3个场地（2000m/300m/30m）</td><td>30MHz~110GHz</td></tr>
    </tbody></table></div>
    <Lead className={styles.tableNote}>动态范围达到 50dB，波束宽度精度达到 0.02°。</Lead>
    <FigureGrid columns={3} fit items={[
      { src: "test/custom/test-sys-1.png", alt: "平面近场测量系统" },
      { src: "test/custom/test-sys-2.png", alt: "微波暗室" },
      { src: "test/custom/test-sys-3.png", alt: "暗室远场测试系统" },
      { src: "test/custom/test-sys-4.png", alt: "探头球面场" },
      { src: "test/custom/test-sys-5.jpg", alt: "外场测试系统" },
      { src: "test/custom/test-report-1.png", alt: "检测报告", contain: true },
    ]} />
    <SectionTitle>设备展示</SectionTitle>
    <FigureGrid columns={4} fit items={[
      { src: "test/slide1/img1.jpg", alt: "能力展示" },
      { src: "test/slide1/img3.jpg", alt: "能力展示" },
      { src: "test/slide1/img4.jpg", alt: "能力展示" },
      { src: "test/slide1/img6.jpg", alt: "能力展示" },
    ]} />
  </>;
}

function InspectionContent() {
  return <>
    <SectionTitle>环境试验能力</SectionTitle>
    <FigureGrid columns={3} fit items={[
      { src: "inspection/custom/env-salt.png", alt: "盐雾试验", caption: "盐雾试验箱" },
      { src: "inspection/custom/env-humid.png", alt: "交变湿热试验箱（高、低温）", caption: "交变湿热试验箱（高、低温）" },
      { src: "inspection/custom/env-shock.png", alt: "温度冲击试验箱", caption: "温度冲击试验箱" },
    ]} />
    <SectionTitle>精密测量能力</SectionTitle>
    <FigureGrid columns={3} fit items={[
      { src: "inspection/custom/meas-video.png", alt: "影像测量仪", caption: "影像测量仪" },
      { src: "inspection/custom/meas-xrf.png", alt: "X光荧光光谱仪", caption: "X光荧光光谱仪" },
      { src: "inspection/custom/meas-cmm.png", alt: "三坐标测试仪", caption: "三坐标测试仪" },
    ]} />
    <SectionTitle>试验、检验能力</SectionTitle>
    <div className={styles.tableScroll}><table className={styles.capabilityTable}><thead><tr><th>试验项目 / 检测设备</th><th>检验、试验区尺寸（W×H×D）</th><th>试验区最大承载 / 容积</th><th>可试验温湿度范围</th></tr></thead><tbody>
      <tr><td>交变湿热试验（高、低温）</td><td>600mm×850mm×800mm</td><td>100kg</td><td>-70℃ ～ +150℃；25 ～ 98% RH</td></tr>
      <tr><td>温度冲击试验</td><td>650mm×460mm×670mm</td><td>50kg</td><td>-70℃ ～ +200℃</td></tr>
      <tr><td>盐雾试验箱</td><td>900mm×500mm×600mm</td><td>270L</td><td>(环境温度+5)℃ ～ +55℃</td></tr>
      <tr><td colSpan={3}>X 光荧光光谱仪：ROHS 检测、成分分析、镀层检测</td></tr>
      <tr><td colSpan={3}>三坐标测试仪：尺寸检测，测量精度 0.001mm</td></tr>
      <tr><td colSpan={3}>影像测量仪：尺寸检测，测量精度 0.003mm</td></tr>
    </tbody></table></div>
  </>;
}

function TechContent() {
  return <>
    <SectionTitle>研发环境与资质认证展示</SectionTitle>
    <Lead>天、馈、伺、车、源自主研发、生产，频率覆盖 0-300GHz，建有专业设计室与实验室。</Lead>
    <div className={styles.statGrid}>{[["21", "发明专利（项）"], ["28", "实用新型（项）"], ["47", "软件著作权（项）"], ["96", "知识产权（项）"]].map(([number, label]) => <div className={styles.statCard} key={label}><div className={styles.statNumber}>{number}</div><div className={styles.statLabel}>{label}</div></div>)}</div>
    <FigureGrid columns={2} fit items={[{ src: "tech/custom/tech-design.jpg", alt: "设计室", caption: "设计室" }, { src: "tech/custom/tech-lab.png", alt: "实验室", caption: "实验室" }]} />
    <SectionTitle>发明专利</SectionTitle>
    <div className={styles.certificateRow}>{["cert-7.jpg", "cert-7.jpg", "cert-9.jpg", "cert-8.jpg", "cert-3.jpg", "cert-4.jpg", "cert-5.jpg", "cert-6.jpg", "cert-2.jpg", "cert-1.jpg"].map((src, index) => <img src={image(`tech/custom/${src}`)} alt={`专利证书 ${index + 1}`} loading="lazy" key={`${src}-${index}`} />)}</div>
  </>;
}

function SmartContent() {
  return <>
    <div className={styles.smartIntro}>
      <Lead indent>设有技术室、机加车间、钳工车间、复材车间。技术室负责生产加工工艺的制定和研究；机加车间配有先进的加工设备和完善的检测手段，具有数车、数铣、电火花、慢走丝、中走丝以及普铣、普车等设备，专业智能制造生产线；钳工车间具备银钎焊、铝钎焊、真空炉铝钎焊、氩弧焊、电焊、热处理、喷漆等工艺能力，拥有产品装配综合实现能力，在波导加工方面有着自己独特的加工工艺，拥有专业波导钳工40多人；复材车间具有复合材料（碳纤维、玻璃纤维）、羰基铁生产研发能力，可承接各种来图加工、来料加工、来样加工、复材设计及加工业务。</Lead>
      <Lead indent>拥有 5 个大型生产车间，20 个班组，生产占地总面积 3 万多平米：西安恒达 6000多平米、江苏恒达 10000平米、雷科达智能制造 3000 平米。现有员工 280多人，1000 台套加工、检测设备，拥有一支经验丰富的技术和管理团队。</Lead>
    </div>
    <SectionTitle>加工设备展示</SectionTitle>
    <FigureGrid columns={3} fit items={Array.from({ length: 6 }, (_, index) => ({ src: `smart/custom/sm-equip-${index + 1}.${index === 5 ? "png" : "jpg"}`, alt: "能力展示" }))} />
    <SectionTitle>真空钎焊</SectionTitle>
    <CenterPhoto src="smart/custom/sm-braze.jpg" alt="真空铝钎焊炉" />
    <SectionTitle>复材生产线</SectionTitle>
    <FigureGrid columns={2} fit items={[{ src: "smart/custom/sm-oven-big.png", alt: "烘箱", caption: "烘箱" }, { src: "smart/custom/sm-oven-vac.png", alt: "真空烘箱", caption: "真空烘箱" }, { src: "smart/custom/sm-cut.jpg", alt: "裁剪下料", caption: "裁剪下料" }, { src: "smart/custom/sm-cure.jpg", alt: "固化处理", caption: "固化处理" }]} />
    <SectionTitle>智能制造机器人</SectionTitle>
    <FigureGrid columns={2} fit items={[{ src: "smart/custom/sm-robot-1.jpg", alt: "能力展示" }, { src: "smart/custom/sm-robot-2.jpg", alt: "能力展示" }]} />
    <SectionTitle>AGV（自动导引运输车）</SectionTitle>
    <FigureGrid columns={3} fit items={[{ src: "smart/custom/sm-agv-1.png", alt: "能力展示" }, { src: "smart/custom/sm-agv-2.png", alt: "能力展示" }, { src: "smart/custom/sm-agv-3.png", alt: "能力展示" }]} />
    <div className={styles.videoWrap}><video controls muted playsInline poster={image("smart/custom/sm-agv-1.png")} src={image("smart/slide6/media1.mp4")} /></div>
  </>;
}

const detailContent: Record<CapabilitySlug, ReactNode> = {
  management: <ManagementContent />,
  test: <TestContent />,
  inspection: <InspectionContent />,
  tech: <TechContent />,
  smart: <SmartContent />,
};

export function CapabilityDetailPage({ slug }: { slug: CapabilitySlug }) {
  const meta = capabilityMap[slug];
  return <CapabilityShell active={slug} title={meta.title} subtitle={meta.subtitle} backgroundImage={image(meta.banner)}>{detailContent[slug]}</CapabilityShell>;
}

export function isCapabilitySlug(value: string): value is CapabilitySlug {
  return capabilities.some((item) => item.slug === value);
}
