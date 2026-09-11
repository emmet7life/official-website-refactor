export type SearchCategoryId = "waveguide-coaxial" | "active-devices" | "antenna" | "servo-control" | "subsystem-integration";

export type NumericFilter = {
  key: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
};

export type OptionFilter = {
  key: string;
  label: string;
  options: string[];
};

export type SearchFilter = NumericFilter | OptionFilter;

export type SearchSpecValue = number | { min: number; max: number } | string;

export type SearchCategory = {
  id: SearchCategoryId;
  label: string;
  href: string;
  fields: SearchFilter[];
};

export type SearchProduct = {
  id: string;
  name: string;
  model: string;
  category: SearchCategoryId;
  image: string;
  href: string;
  specs: Record<string, SearchSpecValue>;
};

const categoryImages: Record<SearchCategoryId, string> = {
  "waveguide-coaxial": "/product-center/categories/0001.png",
  "active-devices": "/product-center/categories/0004.png",
  antenna: "/product-center/categories/0007.png",
  "servo-control": "/product-center/categories/0010.png",
  "subsystem-integration": "/product-center/categories/0011.png",
};

const categoryImages2: Record<SearchCategoryId, string> = {
  "waveguide-coaxial": "/product-center/categories/0002.png",
  "active-devices": "/product-center/categories/0005.png",
  antenna: "/product-center/categories/0008.png",
  "servo-control": "/product-center/categories/0010.png",
  "subsystem-integration": "/product-center/categories/0011.png",
};

export const defaultFilters: NumericFilter[] = [
  { key: "frequency", label: "频率范围", unit: "GHz", min: 0.32, max: 330, step: 0.01 },
  { key: "vswr", label: "驻波比", unit: "", min: 1, max: 2, step: 0.01 },
];

export const searchCategories: SearchCategory[] = [
  {
    id: "waveguide-coaxial",
    label: "波导、同轴元器件",
    href: "/productcenter?category=waveguide-coaxial",
    fields: [
      { key: "insertionLoss", label: "插入损耗", unit: "dB", min: 0.05, max: 1.5, step: 0.01 },
      { key: "power", label: "功率容量", unit: "W", min: 10, max: 3000, step: 10 },
      { key: "length", label: "长度范围", unit: "mm", min: 0.1, max: 2000, step: 0.1 },
      { key: "flange", label: "法兰类型", options: ["FBP/FBM", "FDP/FDM", "FP/FM", "FUGP"] },
      { key: "material", label: "材料", options: ["铝", "铜", "不锈钢"] },
      { key: "coating", label: "涂覆", options: ["氧化", "镀银", "镀金", "钝化"] },
      { key: "waveguideType", label: "波导形式", options: ["矩形", "双脊", "弯波导", "扭波导"] },
      { key: "connector", label: "接头类型", options: ["SMA-K", "N-K", "K2.92-K", "WR-112"] },
    ],
  },
  {
    id: "active-devices",
    label: "微波有源器件",
    href: "/productcenter?category=active-devices",
    fields: [
      { key: "gain", label: "增益", unit: "dB", min: 5, max: 50, step: 0.1 },
      { key: "noiseFigure", label: "噪声系数", unit: "dB", min: 0.8, max: 10, step: 0.1 },
      { key: "outputPower", label: "输出功率", unit: "dBm", min: 5, max: 45, step: 0.5 },
      { key: "voltage", label: "工作电压", unit: "V", min: 5, max: 48, step: 0.5 },
      { key: "current", label: "工作电流", unit: "mA", min: 100, max: 1800, step: 20 },
      { key: "temperature", label: "工作温度", unit: "℃", min: -55, max: 125, step: 5 },
      { key: "connector", label: "接头类型", options: ["SMA-K", "SMA-J", "N-K", "K2.92-K"] },
      { key: "packaging", label: "封装形式", options: ["模块", "芯片", "机箱"] },
    ],
  },
  {
    id: "antenna",
    label: "天线",
    href: "/productcenter?category=antenna",
    fields: [
      { key: "gain", label: "增益", unit: "dBi", min: 5, max: 55, step: 0.1 },
      { key: "beamwidth", label: "波束宽度", unit: "°", min: 0.5, max: 100, step: 0.1 },
      { key: "aperture", label: "天线口径", unit: "mm", min: 20, max: 3000, step: 10 },
      { key: "crossPolarization", label: "交叉极化隔离度", unit: "dB", min: 20, max: 50, step: 1 },
      { key: "power", label: "功率容量", unit: "W", min: 20, max: 1000, step: 20 },
      { key: "polarization", label: "极化方式", options: ["线极化", "双线极化", "圆极化", "双圆极化"] },
      { key: "antennaType", label: "天线形式", options: ["角锥喇叭", "双脊喇叭", "环焦反射面", "抛物面", "阵列天线"] },
      { key: "connector", label: "接口类型", options: ["WR-42", "WR-75", "WR-112", "SMA-K", "N-K"] },
    ],
  },
  {
    id: "servo-control",
    label: "天线转台与伺服控制",
    href: "/productcenter?category=servo-control",
    fields: [
      { key: "loadCapacity", label: "承重能力", unit: "kg", min: 5, max: 1000, step: 5 },
      { key: "pointingAccuracy", label: "指向精度", unit: "°", min: 0.01, max: 0.5, step: 0.01 },
      { key: "speed", label: "转动速度", unit: "°/s", min: 0.1, max: 120, step: 0.1 },
      { key: "axisCount", label: "轴数", unit: "轴", min: 1, max: 4, step: 1 },
      { key: "axisType", label: "轴系类型", options: ["方位", "俯仰", "方位-俯仰", "方位-俯仰-极化", "X-Y"] },
      { key: "controlInterface", label: "控制接口", options: ["RS232", "RS485", "RS422", "CAN", "LAN"] },
      { key: "powerSupply", label: "供电方式", options: ["AC220V", "DC24V", "DC48V"] },
      { key: "material", label: "材料", options: ["铝", "钢", "不锈钢"] },
    ],
  },
  {
    id: "subsystem-integration",
    label: "分系统集成产品",
    href: "/productcenter?category=subsystem-integration",
    fields: [
      { key: "aperture", label: "天线口径", unit: "mm", min: 300, max: 3000, step: 50 },
      { key: "receiveGain", label: "接收增益", unit: "dB", min: 25, max: 50, step: 0.1 },
      { key: "transmitGain", label: "发射增益", unit: "dB", min: 25, max: 52, step: 0.1 },
      { key: "pointingAccuracy", label: "指向精度", unit: "°", min: 0.05, max: 1, step: 0.01 },
      { key: "trackingSpeed", label: "跟踪速度", unit: "°/s", min: 10, max: 180, step: 1 },
      { key: "transmitPower", label: "发射功率", unit: "W", min: 20, max: 800, step: 20 },
      { key: "polarization", label: "极化方式", options: ["线极化", "双线极化", "圆极化", "双圆极化"] },
      { key: "communicationInterface", label: "通信接口", options: ["RS422", "CAN", "LAN", "多接口定制"] },
    ],
  },
];

function createProduct(
  category: SearchCategoryId,
  index: number,
  name: string,
  model: string,
  specs: Record<string, SearchSpecValue>,
): SearchProduct {
  const categoryConfig = searchCategories.find((item) => item.id === category);
  if (!categoryConfig) throw new Error(`Unknown search category: ${category}`);
  return {
    id: `${category}-${index}`,
    name,
    model,
    category,
    image: index % 2 === 0 ? categoryImages[category] : categoryImages2[category],
    href: categoryConfig.href,
    specs,
  };
}

export const searchProducts: SearchProduct[] = [
  createProduct("waveguide-coaxial", 1, "矩形直波导", "HD-84WAL...PM", { frequency: { min: 6.57, max: 9.99 }, vswr: 1.1, insertionLoss: 0.08, power: 500, length: { min: 0.1, max: 2000 }, flange: "FBP/FBM", material: "铜", coating: "镀银", waveguideType: "矩形", connector: "WR-112" }),
  createProduct("waveguide-coaxial", 2, "双脊直波导", "HD-500DRWAL...PM", { frequency: { min: 5, max: 18 }, vswr: 1.15, insertionLoss: 0.25, power: 200, length: { min: 0.1, max: 500 }, flange: "FP/FM", material: "铜", coating: "镀银", waveguideType: "双脊", connector: "WR-187" }),
  createProduct("waveguide-coaxial", 3, "矩形弯波导", "HD-100WBE...PM", { frequency: { min: 8.2, max: 12.4 }, vswr: 1.08, insertionLoss: 0.1, power: 600, length: { min: 100, max: 1000 }, flange: "FBP/FBM", material: "铝", coating: "氧化", waveguideType: "弯波导", connector: "WR-90" }),
  createProduct("waveguide-coaxial", 4, "矩形扭波导", "HD-120WTS...PM", { frequency: { min: 9.84, max: 15 }, vswr: 1.15, insertionLoss: 0.18, power: 400, length: { min: 100, max: 800 }, flange: "FBP/FBM", material: "铝", coating: "氧化", waveguideType: "扭波导", connector: "WR-75" }),
  createProduct("waveguide-coaxial", 5, "波导同轴转换", "HD-100WCMA...PM", { frequency: { min: 8, max: 12 }, vswr: 1.2, insertionLoss: 0.28, power: 100, length: { min: 30, max: 120 }, flange: "FBP/FBM", material: "铜", coating: "镀金", waveguideType: "矩形", connector: "SMA-K" }),
  createProduct("waveguide-coaxial", 6, "波导定向耦合器", "HD-100WDC20", { frequency: { min: 8.2, max: 12.4 }, vswr: 1.25, insertionLoss: 0.35, power: 300, length: { min: 60, max: 240 }, flange: "FDP/FDM", material: "铝", coating: "氧化", waveguideType: "矩形", connector: "WR-90" }),
  createProduct("waveguide-coaxial", 7, "低损耗电缆组件", "HD-400CA SJ-SJ", { frequency: { min: 0, max: 40 }, vswr: 1.35, insertionLoss: 0.8, power: 80, length: { min: 300, max: 2000 }, flange: "FP/FM", material: "铜", coating: "镀银", waveguideType: "矩形", connector: "K2.92-K" }),
  createProduct("waveguide-coaxial", 8, "大功率匹配负载", "HD-20180CHPL...N", { frequency: { min: 2, max: 18 }, vswr: 1.25, insertionLoss: 0.5, power: 1000, length: { min: 60, max: 300 }, flange: "FP/FM", material: "不锈钢", coating: "钝化", waveguideType: "矩形", connector: "N-K" }),

  createProduct("active-devices", 1, "低噪声放大器", "HD-218LNA35", { frequency: { min: 2, max: 18 }, vswr: 1.5, gain: 35, noiseFigure: 1.4, outputPower: 18, voltage: 12, current: 360, temperature: -40, connector: "SMA-K", packaging: "模块" }),
  createProduct("active-devices", 2, "功率放大器", "HD-812PA42", { frequency: { min: 8, max: 12 }, vswr: 1.6, gain: 42, noiseFigure: 5.5, outputPower: 40, voltage: 28, current: 1600, temperature: -35, connector: "SMA-J", packaging: "机箱" }),
  createProduct("active-devices", 3, "压控振荡器", "HD-455VCO10", { frequency: { min: 4.5, max: 5.5 }, vswr: 1.4, gain: 10, noiseFigure: 3, outputPower: 10, voltage: 12, current: 200, temperature: -40, connector: "SMA-K", packaging: "模块" }),
  createProduct("active-devices", 4, "双平衡混频器", "HD-618MX08", { frequency: { min: 6, max: 18 }, vswr: 1.7, gain: 8, noiseFigure: 8.5, outputPower: 6, voltage: 5, current: 120, temperature: -45, connector: "SMA-K", packaging: "模块" }),
  createProduct("active-devices", 5, "PIN 开关", "HD-218SW30", { frequency: { min: 2, max: 18 }, vswr: 1.45, gain: 2, noiseFigure: 1.2, outputPower: 30, voltage: 24, current: 180, temperature: -55, connector: "SMA-K", packaging: "模块" }),
  createProduct("active-devices", 6, "检波器", "HD-118DT20", { frequency: { min: 1, max: 18 }, vswr: 1.5, gain: 5, noiseFigure: 2.5, outputPower: 8, voltage: 12, current: 100, temperature: -40, connector: "SMA-J", packaging: "模块" }),
  createProduct("active-devices", 7, "捷变频频率源", "HD-X96FS22", { frequency: { min: 8.5, max: 9.6 }, vswr: 1.45, gain: 22, noiseFigure: 4, outputPower: 20, voltage: 15, current: 640, temperature: -30, connector: "SMA-K", packaging: "机箱" }),
  createProduct("active-devices", 8, "毫米波放大芯片", "HD-2640PA18", { frequency: { min: 26.5, max: 40 }, vswr: 1.8, gain: 18, noiseFigure: 4.5, outputPower: 22, voltage: 5, current: 420, temperature: -55, connector: "K2.92-K", packaging: "芯片" }),

  createProduct("antenna", 1, "标准增益喇叭天线", "HD-260SGAH22", { frequency: { min: 18, max: 26.5 }, vswr: 1.25, gain: 22, beamwidth: 10, aperture: 40, crossPolarization: 35, power: 100, polarization: "线极化", antennaType: "角锥喇叭", connector: "WR-42" }),
  createProduct("antenna", 2, "双脊喇叭天线", "HD-118DRHA15", { frequency: { min: 1, max: 18 }, vswr: 1.8, gain: 15, beamwidth: 28, aperture: 80, crossPolarization: 25, power: 50, polarization: "双线极化", antennaType: "双脊喇叭", connector: "SMA-K" }),
  createProduct("antenna", 3, "双极化喇叭天线", "HD-96DPHA24", { frequency: { min: 8.5, max: 9.6 }, vswr: 1.35, gain: 24, beamwidth: 9, aperture: 120, crossPolarization: 38, power: 200, polarization: "双线极化", antennaType: "角锥喇叭", connector: "WR-112" }),
  createProduct("antenna", 4, "环焦抛物面天线", "HD-1200HRA41", { frequency: { min: 12.25, max: 14.5 }, vswr: 1.4, gain: 41, beamwidth: 2.6, aperture: 1200, crossPolarization: 35, power: 400, polarization: "线极化", antennaType: "环焦反射面", connector: "WR-75" }),
  createProduct("antenna", 5, "单脉冲反射面天线", "HD-1000MPRA38", { frequency: { min: 8.5, max: 10.5 }, vswr: 1.45, gain: 38, beamwidth: 2.9, aperture: 1000, crossPolarization: 32, power: 300, polarization: "线极化", antennaType: "抛物面", connector: "WR-90" }),
  createProduct("antenna", 6, "圆极化喇叭天线", "HD-220CPHA20", { frequency: { min: 18, max: 22 }, vswr: 1.35, gain: 20, beamwidth: 12, aperture: 60, crossPolarization: 30, power: 120, polarization: "圆极化", antennaType: "角锥喇叭", connector: "WR-42" }),
  createProduct("antenna", 7, "双圆极化反射面天线", "HD-1800DCPKRA47", { frequency: { min: 12.25, max: 18 }, vswr: 1.4, gain: 47, beamwidth: 2.2, aperture: 1800, crossPolarization: 40, power: 600, polarization: "双圆极化", antennaType: "抛物面", connector: "WR-75" }),
  createProduct("antenna", 8, "宽带阵列天线", "HD-618MA28", { frequency: { min: 6, max: 18 }, vswr: 1.8, gain: 28, beamwidth: 18, aperture: 420, crossPolarization: 28, power: 150, polarization: "双线极化", antennaType: "阵列天线", connector: "N-K" }),

  createProduct("servo-control", 1, "一维方位转台", "HD-AP60E", { loadCapacity: 60, pointingAccuracy: 0.05, speed: 60, axisCount: 1, axisType: "方位", controlInterface: "RS485", powerSupply: "AC220V", material: "铝" }),
  createProduct("servo-control", 2, "一维俯仰转台", "HD-EL100E", { loadCapacity: 100, pointingAccuracy: 0.1, speed: 48, axisCount: 1, axisType: "俯仰", controlInterface: "RS232", powerSupply: "AC220V", material: "铝" }),
  createProduct("servo-control", 3, "方位俯仰转台", "HD-AP120AE", { loadCapacity: 120, pointingAccuracy: 0.08, speed: 60, axisCount: 2, axisType: "方位-俯仰", controlInterface: "CAN", powerSupply: "AC220V", material: "铝" }),
  createProduct("servo-control", 4, "俯仰方位转台", "HD-EA180EA", { loadCapacity: 180, pointingAccuracy: 0.1, speed: 48, axisCount: 2, axisType: "方位-俯仰", controlInterface: "RS422", powerSupply: "AC220V", material: "钢" }),
  createProduct("servo-control", 5, "方位极化转台", "HD-AP80AEP", { loadCapacity: 80, pointingAccuracy: 0.1, speed: 60, axisCount: 2, axisType: "方位-俯仰", controlInterface: "LAN", powerSupply: "DC24V", material: "铝" }),
  createProduct("servo-control", 6, "方位俯仰极化转台", "HD-AP300AEP", { loadCapacity: 300, pointingAccuracy: 0.2, speed: 36, axisCount: 3, axisType: "方位-俯仰-极化", controlInterface: "CAN", powerSupply: "AC220V", material: "钢" }),
  createProduct("servo-control", 7, "X-Y 位移扫描架", "HD-XY50", { loadCapacity: 50, pointingAccuracy: 0.1, speed: 30, axisCount: 2, axisType: "X-Y", controlInterface: "LAN", powerSupply: "DC48V", material: "钢" }),
  createProduct("servo-control", 8, "轻载精密测试转台", "HD-AP10E", { loadCapacity: 10, pointingAccuracy: 0.01, speed: 120, axisCount: 1, axisType: "方位", controlInterface: "RS232", powerSupply: "DC24V", material: "铝" }),

  createProduct("subsystem-integration", 1, "中高度动中通天馈伺系统", "HD-120MCES8", { frequency: { min: 12.25, max: 14.5 }, vswr: 1.4, aperture: 800, receiveGain: 37, transmitGain: 38.5, pointingAccuracy: 0.1, trackingSpeed: 100, transmitPower: 100, polarization: "线极化", communicationInterface: "多接口定制" }),
  createProduct("subsystem-integration", 2, "静中通卫星通信系统", "HD-120MCES6", { frequency: { min: 12.25, max: 14.5 }, vswr: 1.4, aperture: 600, receiveGain: 35.8, transmitGain: 37, pointingAccuracy: 0.1, trackingSpeed: 60, transmitPower: 80, polarization: "线极化", communicationInterface: "LAN" }),
  createProduct("subsystem-integration", 3, "Ku 波段车载静中通系统", "HD-120MCES12", { frequency: { min: 12.25, max: 14.5 }, vswr: 1.35, aperture: 1200, receiveGain: 39.5, transmitGain: 41, pointingAccuracy: 0.1, trackingSpeed: 48, transmitPower: 400, polarization: "线极化", communicationInterface: "CAN" }),
  createProduct("subsystem-integration", 4, "X 波段车载静中通系统", "HD-100MCES12", { frequency: { min: 8, max: 10.5 }, vswr: 1.4, aperture: 1200, receiveGain: 35, transmitGain: 36, pointingAccuracy: 0.15, trackingSpeed: 36, transmitPower: 600, polarization: "圆极化", communicationInterface: "RS422" }),
  createProduct("subsystem-integration", 5, "X/Ku 双波段天馈伺系统", "HD-XK180AEST", { frequency: { min: 8, max: 15 }, vswr: 1.45, aperture: 1800, receiveGain: 42, transmitGain: 43, pointingAccuracy: 0.1, trackingSpeed: 60, transmitPower: 200, polarization: "双线极化", communicationInterface: "多接口定制" }),
  createProduct("subsystem-integration", 6, "气象雷达天馈伺系统", "HD-100DPRA1000", { frequency: { min: 9.3, max: 9.7 }, vswr: 1.5, aperture: 1000, receiveGain: 35, transmitGain: 35, pointingAccuracy: 0.2, trackingSpeed: 36, transmitPower: 100, polarization: "双线极化", communicationInterface: "RS422" }),
  createProduct("subsystem-integration", 7, "测向天线伺服系统", "HD-900RA300K", { frequency: { min: 6, max: 18 }, vswr: 1.5, aperture: 900, receiveGain: 30, transmitGain: 30, pointingAccuracy: 0.1, trackingSpeed: 80, transmitPower: 50, polarization: "线极化", communicationInterface: "CAN" }),
  createProduct("subsystem-integration", 8, "机载自动对准通信系统", "HD-120TRAP50A", { frequency: { min: 12.25, max: 14.5 }, vswr: 1.5, aperture: 300, receiveGain: 14, transmitGain: 14, pointingAccuracy: 0.5, trackingSpeed: 120, transmitPower: 100, polarization: "圆极化", communicationInterface: "多接口定制" }),
];
