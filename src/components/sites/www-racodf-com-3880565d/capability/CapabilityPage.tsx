/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./CapabilityPage.module.css";

const assetRoot = "/sites/www-racodf-com-3880565d/capability";

const capabilities = [
  {
    slug: "management",
    title: "管理能力",
    icon: "1-management.svg",
    description: "以体系化流程驱动高效协同，保障项目交付质量与进度。",
  },
  {
    slug: "test",
    title: "测试能力",
    icon: "2-test.svg",
    description: "完备的微波与射频测试平台，覆盖全频段性能验证。",
  },
  {
    slug: "inspection",
    title: "试验、检验能力",
    icon: "3-inspection.svg",
    description: "从环境到可靠性的全流程实验与检验，支撑产品品质。",
  },
  {
    slug: "tech",
    title: "技术能力",
    icon: "4-tech.svg",
    description: "深厚的微波技术积累，支撑定制化产品的工程实现。",
  },
  {
    slug: "smart",
    title: "智能制造",
    icon: "5-smart.svg",
    description: "数字化产线与精密装备，保障高一致性与生产良率。",
  },
] as const;

type CapabilitySlug = (typeof capabilities)[number]["slug"];
type GridColumns = 2 | 3 | 4;

const detailMeta: Record<CapabilitySlug, { title: string; subtitle: string }> = {
  management: {
    title: "管理能力",
    subtitle: "质量保障体系 · HD-ERP运营平台 · 项目管理团队",
  },
  test: {
    title: "测试能力",
    subtitle: "专业设备清单 · 核心自研设备",
  },
  inspection: {
    title: "试验、检验能力",
    subtitle: "环境试验能力 · 精密测量能力",
  },
  tech: {
    title: "技术能力",
    subtitle: "天、馈、伺、车、源自主研发、生产 · 频率覆盖 0-300GHz",
  },
  smart: {
    title: "智能制造",
    subtitle: "设有技术室、机加车间、钳工车间、复材车间，专业智能制造生产线",
  },
};

const image = (path: string) => `${assetRoot}/${path}`;

function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className={styles.hero}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className={styles.categoryHead}>
      <div className={styles.categoryBar} />
      <h2>{children}</h2>
    </div>
  );
}

function Lead({ children, indent = false }: { children: ReactNode; indent?: boolean }) {
  return <p className={`${styles.lead} ${indent ? styles.leadIndent : ""}`}>{children}</p>;
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className={styles.featureList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function FigureGrid({
  columns,
  items,
  cover = false,
}: {
  columns: GridColumns;
  items: Array<{ src: string; alt: string; caption?: string }>;
  cover?: boolean;
}) {
  return (
    <div className={`${styles.figureGrid} ${styles[`cols${columns}`]} ${cover ? styles.coverGrid : ""}`}>
      {items.map((item) => (
        <figure key={item.src}>
          <img src={image(item.src)} alt={item.alt} loading="lazy" />
          {item.caption ? <figcaption>{item.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}

function CenterPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.photoCenter}>
      <figure>
        <img className={styles.photoNatural} src={image(src)} alt={alt} loading="lazy" />
      </figure>
    </div>
  );
}

export function CapabilityPage() {
  return (
    <div className={styles.page}>
      <Hero
        title="能力介绍"
        subtitle="管理能力 · 测试能力 · 试验、检验能力 · 技术能力 · 智能制造"
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionTitle>我们的能力体系</SectionTitle>
          <div className={styles.capabilityGrid}>
            {capabilities.map((item) => (
              <Link className={styles.capabilityCard} href={`/capability/${item.slug}`} key={item.slug}>
                <span className={styles.capabilityIcon}>
                  <img src={image(item.icon)} alt="" aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ManagementContent() {
  return (
    <>
      <SectionTitle>质量保障体系</SectionTitle>
      <FeatureList items={["ISO质量管理体系认证证书", "ISO环境管理体系认证证书", "ISO职业健康安全管理体系认证"]} />
      <CenterPhoto src="management/custom/mgmt-iso.png" alt="ISO三大管理体系认证" />

      <SectionTitle>HD-ERP运营平台</SectionTitle>
      <Lead>自建ERP（含：OA、CRM、MRP、TQM、SCM、CCPM），覆盖研发制造全流程信息化管理。</Lead>
      <FeatureList items={["TOC计划排程、工单二维扫码、实时负荷监控", "任务自动分配、LCD大屏互动、零件齐套跟踪"]} />
      <CenterPhoto src="management/custom/mgmt-erp.png" alt="HD-ERP运营平台" />

      <SectionTitle>项目管理团队</SectionTitle>
      <FeatureList items={["PMP、CCPM及MBA培训及认证资质", "航天、航空项目十余年成功经验"]} />
    </>
  );
}

function TestContent() {
  return (
    <>
      <SectionTitle>专业设备清单</SectionTitle>
      <Lead>最高频率到 260GHz 矢量网络分析仪(40台)、示波器(10台)，信号源(6台)、频谱仪(6台)，噪声分析仪等其他仪器60多台，先进的测试设备。</Lead>

      <SectionTitle>核心自研设备</SectionTitle>
      <FeatureList items={["320GHz 天线测试系统", "频率计、功率计 等", "HD自研3mm波信号源", "HD自研旋转关节自动测试平台"]} />

      <SectionTitle>设备展示</SectionTitle>
      <FigureGrid
        columns={4}
        items={[
          { src: "test/slide1/img1.jpg", alt: "能力展示" },
          { src: "test/slide1/img3.jpg", alt: "能力展示" },
          { src: "test/slide1/img4.jpg", alt: "能力展示" },
          { src: "test/slide1/img6.jpg", alt: "能力展示" },
        ]}
      />
    </>
  );
}

function InspectionContent() {
  return (
    <>
      <SectionTitle>环境试验能力</SectionTitle>
      <FeatureList items={["交变湿热试验箱（高、低温）", "温度冲击试验箱", "盐雾试验"]} />
      <FigureGrid
        columns={3}
        items={[
          { src: "inspection/custom/env-salt.png", alt: "盐雾试验", caption: "盐雾试验" },
          { src: "inspection/custom/env-humid.png", alt: "交变湿热试验箱（高、低温）", caption: "交变湿热试验箱（高、低温）" },
          { src: "inspection/custom/env-shock.png", alt: "温度冲击试验箱", caption: "温度冲击试验箱" },
        ]}
      />

      <SectionTitle>精密测量能力</SectionTitle>
      <FeatureList items={["X光荧光光谱仪", "三坐标测试仪", "影像测量仪"]} />
      <FigureGrid
        columns={3}
        items={[
          { src: "inspection/custom/meas-video.png", alt: "影像测量仪", caption: "影像测量仪" },
          { src: "inspection/custom/meas-xrf.png", alt: "X光荧光光谱仪", caption: "X光荧光光谱仪" },
          { src: "inspection/custom/meas-cmm.png", alt: "三坐标测试仪", caption: "三坐标测试仪" },
        ]}
      />

      <SectionTitle>试验、检验能力</SectionTitle>
      <div className={styles.tableScroll}>
        <table className={styles.capabilityTable}>
          <thead>
            <tr>
              <th>试验项目 / 检测设备</th>
              <th>检验、试验区尺寸（W×H×D）</th>
              <th>试验区最大承载 / 容积</th>
              <th>可试验温湿度范围</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>交变湿热试验（高、低温）</td>
              <td>600mm×850mm×800mm</td>
              <td>100kg</td>
              <td>-70℃ ～ +150℃；25 ～ 98% RH</td>
            </tr>
            <tr>
              <td>温度冲击试验</td>
              <td>650mm×460mm×670mm</td>
              <td>50kg</td>
              <td>-70℃ ～ +200℃</td>
            </tr>
            <tr>
              <td>盐雾试验</td>
              <td>900mm×500mm×600mm</td>
              <td>270L</td>
              <td>(环境温度+5)℃ ～ +55℃</td>
            </tr>
            <tr>
              <td colSpan={3}>X 光荧光光谱仪：ROHS 检测、成分分析、镀层检测</td>
            </tr>
            <tr>
              <td colSpan={3}>三坐标测试仪：尺寸检测，测量精度 0.001mm</td>
            </tr>
            <tr>
              <td colSpan={3}>影像测量仪：尺寸检测，测量精度 0.003mm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function TechContent() {
  return (
    <>
      <SectionTitle>研发环境与资质认证展示</SectionTitle>
      <Lead>天、馈、伺、车、源自主研发、生产，频率覆盖 0-300GHz，建有专业设计室与实验室。</Lead>
      <div className={styles.statGrid}>
        {[
          ["21", "发明专利（项）"],
          ["28", "实用新型（项）"],
          ["47", "软件著作权（项）"],
          ["96", "知识产权（项）"],
        ].map(([number, label]) => (
          <div className={styles.statCard} key={label}>
            <div className={styles.statNumber}>{number}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>
      <FigureGrid
        columns={2}
        items={[
          { src: "tech/custom/tech-design.jpg", alt: "设计室", caption: "设计室" },
          { src: "tech/custom/tech-lab.png", alt: "实验室", caption: "实验室" },
        ]}
      />

      <SectionTitle>发明专利</SectionTitle>
      <div className={styles.certificateRow}>
        {Array.from({ length: 9 }, (_, index) => (
          <img
            src={image(`tech/custom/cert-${index + 1}.jpg`)}
            alt={`专利证书 ${index + 1}`}
            loading="lazy"
            key={`cert-${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

function SmartContent() {
  return (
    <>
      <Lead indent>设有技术室、机加车间、钳工车间、复材车间。技术室负责生产加工工艺的制定和研究；机加车间配有先进的加工设备和完善的检测手段，具有数车、数铣、电火花、慢走丝、中走丝以及普铣、普车等设备，专业智能制造生产线；钳工车间具备银钎焊、铝钎焊、真空炉铝钎焊、氩弧焊、电焊、热处理、喷漆等工艺能力，拥有产品装配综合实现能力，在波导加工方面有着自己独特的加工工艺，拥有专业波导钳工40多人；复材车间具有复合材料（碳纤维、玻璃纤维）、羰基铁生产研发能力，可承接各种来图加工、来料加工、来样加工、复材设计及加工业务。</Lead>
      <Lead indent>拥有 5 个大型生产车间，20 个班组，生产占地总面积 3 万多平米：西安恒达 6000多平米、江苏恒达 10000平米、雷科达智能制造 3000 平米。现有员工 280多人，1000 台套加工、检测设备，拥有一支经验丰富的技术和管理团队。</Lead>

      <SectionTitle>加工设备展示</SectionTitle>
      <FigureGrid
        columns={3}
        cover
        items={Array.from({ length: 5 }, (_, index) => ({
          src: `smart/custom/sm-equip-${index + 1}.jpg`,
          alt: "能力展示",
        }))}
      />

      <SectionTitle>真空钎焊</SectionTitle>
      <FeatureList items={["设备：真空铝钎焊炉"]} />
      <Lead>焊接介绍：铝真空钎焊炉用于铝质雷达网格天线、铝波导管及铝换热器的真空钎焊，可适用于锻铝合金薄壁复杂结构工件的真空钎焊处理。本设备配备高性能真空机组、智能控制系统，具有较高的真空度和温度均匀性，多温区独立全自动控制，可随炉对工件进行气体淬火处理。</Lead>
      <Lead>焊接范围：有效工作区：600mm×600mm×1000mm（W×H×L）；最大装炉量：800kg/炉（包括料盘、夹具）。</Lead>
      <CenterPhoto src="smart/custom/sm-braze.jpg" alt="真空铝钎焊炉" />

      <SectionTitle>复材生产线</SectionTitle>
      <FeatureList items={["固化处理", "裁剪下料"]} />
      <Lead>产品类型：以天线罩、反射面、结构件为主，其中反射面、天线罩能够完成设计、测试、整机测试，产品广泛应用于各种通信设施。</Lead>
      <FeatureList items={["产品优势：外形美观、质轻、安装方便", "抗冲击，适应高温低寒等恶劣环境", "独特电性能，提升天线优良物性"]} />
      <Lead>应用领域：航空航天（飞机结构件、发动机部件、卫星支架、火箭整流罩等）；舰载（水面舰船复合隐身桅杆、潜艇指挥台围壳等）；雷达系统（隐身/低RCS外壳、相控阵天线阵面等）；民用（5G/6G基站天线、电磁屏蔽材料等）。</Lead>
      <FigureGrid
        columns={2}
        cover
        items={[
          { src: "smart/custom/sm-oven-big.png", alt: "烘箱", caption: "烘箱" },
          { src: "smart/custom/sm-oven-vac.png", alt: "真空烘箱", caption: "真空烘箱" },
          { src: "smart/custom/sm-cut.jpg", alt: "裁剪下料", caption: "裁剪下料" },
          { src: "smart/custom/sm-cure.jpg", alt: "固化处理", caption: "固化处理" },
        ]}
      />

      <SectionTitle>智能制造机器人</SectionTitle>
      <FigureGrid
        columns={2}
        cover
        items={[
          { src: "smart/custom/sm-robot-1.jpg", alt: "能力展示" },
          { src: "smart/custom/sm-robot-2.jpg", alt: "能力展示" },
        ]}
      />

      <SectionTitle>AGV（自动导引运输车）</SectionTitle>
      <Lead>通过激光雷达、视觉相机实现自主导航、自主避让，精度可达±5mm，适用于高精度和动态环境。可通过调度系统完成多车协同作业。同时支持自主充电、电梯对接、数据集成，可与MES、WMS、ERP等系统无缝连接，实现全自动运行。支持定制增加其他功能，在工厂、车间、办公大楼均可运行。</Lead>
      <FigureGrid
        columns={3}
        cover
        items={[
          { src: "smart/custom/sm-agv-1.png", alt: "能力展示" },
          { src: "smart/custom/sm-agv-2.png", alt: "能力展示" },
          { src: "smart/custom/sm-agv-3.png", alt: "能力展示" },
        ]}
      />
      <div className={styles.videoWrap}>
        <video controls muted playsInline poster={image("smart/custom/sm-agv-1.png")} src={image("smart/slide6/media1.mp4")} />
      </div>
    </>
  );
}

const detailContent: Record<CapabilitySlug, ReactNode> = {
  management: <ManagementContent />,
  test: <TestContent />,
  inspection: <InspectionContent />,
  tech: <TechContent />,
  smart: <SmartContent />,
};

export function CapabilityDetailPage({ slug }: { slug: CapabilitySlug }) {
  const meta = detailMeta[slug];

  return (
    <div className={styles.page}>
      <Hero title={meta.title} subtitle={meta.subtitle} />
      <section className={styles.section}>
        <div className={styles.container}>{detailContent[slug]}</div>
      </section>
    </div>
  );
}

export function isCapabilitySlug(value: string): value is CapabilitySlug {
  return capabilities.some((item) => item.slug === value);
}
