import generatedCatalog from "./product-catalog.generated.json";

export type Product = {
  model: string;
  frequency: string;
  gain: string;
  interface: string;
  bandwidth: string;
  axis: string;
  description: string;
};

export type ProductCatalogNode = {
  id: string;
  code: string;
  name: string;
  level: number;
  parentId: string | null;
  children: ProductCatalogNode[];
  kind: "category" | "product-list" | "rich-text" | "reference";
};

export type Specification = {
  label: string;
  value: string;
};

export type RichArticle = {
  title: string;
  meta: string;
  model?: string;
  lead: string;
  paragraphs: string[];
  layout: "narrative" | "dual-spec" | "showcase" | "reference";
  images: string[];
  highlights?: Specification[];
  antennaSpecs?: Specification[];
  servoSpecs?: Specification[];
};

export type Category = ProductCatalogNode & {
  description: string;
  images: string[];
  products?: Product[];
  article?: RichArticle;
  children: Category[];
};

const homeImages = "/sites/www-racodf-com-3880565d/shared/home/";
const subsystemImages = "/sites/www-racodf-com-3880565d/shared/subsystems/";
const productsByChapter: Record<string, Product[]> = {
  "1": [
    { model: "HD-WG-112", frequency: "7.05–10.0", gain: "—", interface: "BJ84 / WR-112", bandwidth: "全波导带宽", axis: "—", description: "波导、同轴及微波传输类产品示例型号。" },
    { model: "HD-WG-90", frequency: "8.2–12.4", gain: "—", interface: "BJ100 / WR-90", bandwidth: "全波导带宽", axis: "—", description: "支持接口、法兰和结构形式定制。" },
  ],
  "2": [
    { model: "HD-LNA-180", frequency: "2–18", gain: "≥ 30", interface: "SMA-K", bandwidth: "16", axis: "—", description: "微波有源器件示例型号。" },
    { model: "HD-PA-040", frequency: "8–12", gain: "≥ 40", interface: "SMA-K", bandwidth: "4", axis: "—", description: "功率放大与收发前端类产品示例型号。" },
  ],
  "3": [
    { model: "HD-1800DPX", frequency: "8.5–9.6", gain: "≥ 40.5", interface: "WR-112", bandwidth: "1.1", axis: "≤ 0.8", description: "X 波段双线极化天线示例型号。" },
    { model: "HD-1000DPX", frequency: "9.3–9.5", gain: "≥ 35.8", interface: "WR-112", bandwidth: "0.2", axis: "≤ 0.8", description: "小口径双线极化天线示例型号。" },
  ],
  "4": [
    { model: "HD-2D-1200", frequency: "DC–18", gain: "—", interface: "法兰 / 电连接器", bandwidth: "—", axis: "0.1°", description: "二维伺服转台示例型号。" },
    { model: "HD-3D-900", frequency: "DC–40", gain: "—", interface: "用户定制", bandwidth: "—", axis: "0.08°", description: "三轴伺服转台示例型号。" },
  ],
};

function imageForChapter(chapter: string) {
  const file = chapter === "1" ? "product-waveguide.png" : chapter === "3" ? "product-antenna.png" : chapter === "4" ? "product-servo.png" : chapter === "5" ? "product-subsystem.png" : "product-custom.png";
  return [`${homeImages}${file}`];
}

function layoutForSubsystem(code: string): RichArticle["layout"] {
  if (code.startsWith("5.1")) return "narrative";
  if (code.startsWith("5.2")) return "dual-spec";
  const index = code.split(".").reduce((total, part) => total + Number(part), 0) % 3;
  return (["showcase", "narrative", "dual-spec"] as const)[index];
}

function subsystemArticle(category: Category): RichArticle {
  const layout = layoutForSubsystem(category.code);

  if (layout === "dual-spec") return {
    title: category.name,
    model: "HD-100DPRA1000AP60AESXT",
    meta: `目录编号：${category.code} ｜ 富文本表格型内容`,
    lead: `${category.name}集成天线、馈线与伺服控制单元，可执行多种雷达扫描任务。`,
    paragraphs: ["系统支持计算机自动控制和本地手动控制，天线与伺服指标可在同一张富文本表格中对照查看。"],
    layout,
    images: [`${subsystemImages}radar-radome.png`, `${subsystemImages}radar-antenna-system.png`],
    antennaSpecs: [
      { label: "频率范围", value: "X 波段" },
      { label: "天线直径", value: "1 m" },
      { label: "极化方式", value: "双线极化，同时收发" },
      { label: "波束宽度", value: "≥2.5°" },
      { label: "增益", value: "≥35 dB" },
      { label: "驻波", value: "≤1.5" },
      { label: "交叉极化隔离度", value: "≥30 dB" },
      { label: "功率容量", value: "Pav≥100 W；PP≥1000 W" },
    ],
    servoSpecs: [
      { label: "控制方式", value: "计算机自动控制、本地手动控制" },
      { label: "扫描方式", value: "PPI、RHI、VOL、sPPI、sRHI、定点" },
      { label: "扫描范围", value: "方位 0～360°；俯仰 -3°～182°" },
      { label: "定位精度", value: "方位≤0.2°；俯仰≤0.2°" },
      { label: "扫描速度", value: "方位 0～36°/s；俯仰 0～24°/s" },
      { label: "系统承重", value: "60 kg" },
      { label: "供电", value: "220 AV / 5 kW，支持连续工作" },
      { label: "通讯接口", value: "RS232 / RS485 / RS422 / CAN / LAN" },
    ],
  };

  if (layout === "showcase") return {
    title: category.name,
    model: "HD-900RA300KAP10AES",
    meta: `目录编号：${category.code} ｜ 富文本主视觉型内容`,
    lead: `${category.name}采用模块化天馈伺架构，适用于目标跟踪、测向与自动扫描等任务。`,
    paragraphs: [
      "系统可根据任务配置天线口径、工作频段和负载能力，并通过高精度编码器实时反馈方位与俯仰数据。",
      "控制软件支持手动控制、圆周扫描、扇形扫描、十字扫描以及目标自动跟踪。",
    ],
    layout,
    images: [`${subsystemImages}tracking-antenna.png`, `${subsystemImages}compact-tracking-system.png`],
    highlights: [
      { label: "扫描范围", value: "方位 360°；俯仰 0～90°" },
      { label: "指向精度", value: "优于 0.1°" },
      { label: "扫描速度", value: "最高 30°/s" },
      { label: "通讯接口", value: "RS422 或网络接口" },
    ],
  };

  return {
    title: category.name,
    model: "HD-120MCES6",
    meta: `目录编号：${category.code} ｜ 富文本图文型内容`,
    lead: `${category.name}由反射面天线、馈源网络、伺服转台和控制终端组成。`,
    paragraphs: [
      "系统采用智能化设计，支持一键对星和常用卫星参数预置，可根据定位信息自动完成寻星、对星并进入通信状态。",
      "天线结构兼顾运输、架设和环境适应性，可结合频段、口径及载体条件进行项目化配置。",
    ],
    layout,
    images: [`${subsystemImages}satellite-terminal.png`, `${subsystemImages}satellite-terminal-diagram.png`],
    highlights: [
      { label: "天线形式", value: "环焦抛物面天线" },
      { label: "主反射面口径", value: "φ600 mm" },
      { label: "接收频率", value: "12.25～12.75 GHz" },
      { label: "发射频率", value: "14～14.5 GHz" },
      { label: "指向精度", value: "0.1°" },
      { label: "方位范围", value: "0～360° 连续" },
    ],
  };
}

function hydrateNode(node: ProductCatalogNode): Category {
  const chapter = node.code.split(".")[0];
  const cleanName = node.code === "3" ? "天线" : node.name.replace(/\s+/g, " ").trim();
  const category: Category = {
    ...node,
    name: cleanName,
    description: `${cleanName}相关产品与技术资料。`,
    images: imageForChapter(chapter),
    children: node.children.map(hydrateNode),
  };
  if (node.kind === "product-list") category.products = productsByChapter[chapter] ?? productsByChapter["1"];
  if (node.kind === "rich-text") category.article = subsystemArticle(category);
  if (node.kind === "reference") category.article = {
    title: category.name,
    meta: `目录编号：${category.code} ｜ 内容类型：微波设计参考资料`,
    lead: "微波设计参考资料正文",
    paragraphs: ["该条目属于第九版产品手册中的微波设计参考资料。", "正式内容由后台参考资料正文数据维护。"],
    layout: "reference",
    images: [],
  };
  return category;
}

export const productDirectory = (generatedCatalog as ProductCatalogNode[])
  .filter((node) => node.name.trim() !== "微波设计参考资料")
  .map(hydrateNode);

export const productCategorySlugs: Record<string, string> = {
  "waveguide-coaxial": "1",
  "active-devices": "2",
  antenna: "3",
  "servo-control": "4",
  "subsystem-integration": "5",
};
