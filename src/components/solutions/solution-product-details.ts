export type ProductDetail = {
  model: string;
  metrics: string[];
};

/**
 * Solution subsystem product details: the model code and a subset of published
 * key metrics shown on the solution product cards. Keyed by the product name
 * used in SolutionsPage so the same name can be reused across subsystems.
 */
export const productDetails: Record<string, ProductDetail> = {
  "矩形直波导": {
    model: "HD-84WAL...PM",
    metrics: [
      "频率 6.57–9.99 GHz",
      "驻波比 ≤1.1",
      "插入损耗 ≤0.08 dB",
      "功率容量 500 W",
    ],
  },
  "圆弧弯波导": {
    model: "HD-100WBC...PM",
    metrics: [
      "频率 8.2–12.4 GHz",
      "驻波比 ≤1.08",
      "插入损耗 ≤0.12 dB",
      "功率容量 600 W",
    ],
  },
  "矩形扭波导": {
    model: "HD-120WTS...PM",
    metrics: [
      "频率 9.84–15 GHz",
      "驻波比 ≤1.15",
      "插入损耗 ≤0.18 dB",
      "功率容量 400 W",
    ],
  },
  "可扭软波导": {
    model: "HD-100WFL...PM",
    metrics: [
      "频率 8.2–12.4 GHz",
      "驻波比 ≤1.2",
      "扭转能力 ±90°",
      "功率容量 300 W",
    ],
  },
  "波导同轴转换": {
    model: "HD-100WCMA...PM",
    metrics: [
      "频率 8–12 GHz",
      "驻波比 ≤1.2",
      "插入损耗 ≤0.28 dB",
      "接头 SMA-K",
    ],
  },
  "低损耗电缆组件": {
    model: "HD-400CA SJ-SJ",
    metrics: [
      "频率 DC–40 GHz",
      "驻波比 ≤1.35",
      "插入损耗 ≤0.8 dB/m",
      "接头 K2.92-K",
    ],
  },
  "双线极化馈源": {
    model: "HD-100DPF...PM",
    metrics: [
      "频率 8.5–9.6 GHz",
      "驻波比 ≤1.25",
      "交叉极化 ≥35 dB",
      "功率容量 300 W",
    ],
  },
  "反射面天线": {
    model: "HD-1200RA38",
    metrics: [
      "频率 8.5–10.5 GHz",
      "增益 ≥38 dBi",
      "波束宽度 2.9°",
      "口径 1200 mm",
    ],
  },
  "喇叭天线": {
    model: "HD-260SGAH22",
    metrics: [
      "频率 18–26.5 GHz",
      "增益 22 dBi",
      "波束宽度 10°",
      "接口 WR-42",
    ],
  },
  "极化器": {
    model: "HD-100WPL90",
    metrics: [
      "频率 8.2–12.4 GHz",
      "驻波比 ≤1.2",
      "插入损耗 ≤0.25 dB",
      "轴比 ≤0.5 dB",
    ],
  },
  "低噪声放大器": {
    model: "HD-218LNA35",
    metrics: [
      "频率 2–18 GHz",
      "增益 35 dB",
      "噪声系数 1.4 dB",
      "输出功率 18 dBm",
    ],
  },
  "功率放大器": {
    model: "HD-812PA42",
    metrics: [
      "频率 8–12 GHz",
      "增益 42 dB",
      "输出功率 40 dBm",
      "供电 28 V",
    ],
  },
  "微波滤波器": {
    model: "HD-100WFIL...PM",
    metrics: [
      "频率 8.2–12.4 GHz",
      "驻波比 ≤1.3",
      "插入损耗 ≤0.5 dB",
      "带外抑制 ≥40 dB",
    ],
  },
  "射频开关矩阵": {
    model: "HD-218SWM...PM",
    metrics: [
      "频率 2–18 GHz",
      "端口 4×4",
      "隔离度 ≥70 dB",
      "切换时间 ≤100 ns",
    ],
  },
  "方位俯仰转台": {
    model: "HD-AP120AE",
    metrics: [
      "承重 120 kg",
      "指向精度 0.08°",
      "转动速度 60 °/s",
      "控制接口 CAN",
    ],
  },
  "二维伺服转台": {
    model: "HD-EA180EA",
    metrics: [
      "承重 180 kg",
      "指向精度 0.1°",
      "转动速度 48 °/s",
      "控制接口 RS422",
    ],
  },
  "三轴伺服转台": {
    model: "HD-AP300AEP",
    metrics: [
      "承重 300 kg",
      "指向精度 0.2°",
      "转动速度 36 °/s",
      "轴数 3 轴",
    ],
  },
  "伺服驱动器": {
    model: "HD-2SD...PM",
    metrics: [
      "输入 AC220V",
      "额定电流 8 A",
      "控制接口 CAN",
      "工作温度 -40–70 ℃",
    ],
  },
  "绝对式编码器": {
    model: "HD-2ENC23",
    metrics: [
      "分辨率 23 bit",
      "精度 ±10″",
      "输出 RS422",
      "防护等级 IP67",
    ],
  },
  "精密滑环组件": {
    model: "HD-2SR...PM",
    metrics: [
      "通路 24 路",
      "额定电流 5 A/路",
      "转速 ≤120 r/min",
      "绝缘电阻 ≥500 MΩ",
    ],
  },
  "限位保护单元": {
    model: "HD-2LPU...PM",
    metrics: [
      "供电 DC24V",
      "触点容量 5 A",
      "输出 干接点",
      "防护等级 IP65",
    ],
  },
  "天线座架": {
    model: "HD-2MT...PM",
    metrics: [
      "承载 ≤500 kg",
      "材料 钢",
      "涂覆 热镀锌",
      "结构形式 定制",
    ],
  },
  "减速传动机构": {
    model: "HD-2RD...PM",
    metrics: [
      "减速比 100:1",
      "回差 ≤0.03°",
      "额定扭矩 260 N·m",
      "材料 钢",
    ],
  },
  "抗风支撑结构": {
    model: "HD-2WS...PM",
    metrics: [
      "抗风 50 m/s",
      "材料 钢",
      "涂覆 热镀锌",
      "结构形式 定制",
    ],
  },
  "户外防护罩": {
    model: "HD-2OC...PM",
    metrics: [
      "防护等级 IP66",
      "材料 玻璃钢",
      "工作温度 -40–70 ℃",
      "结构形式 定制",
    ],
  },
  "安装连接组件": {
    model: "HD-2IC...PM",
    metrics: [
      "材料 不锈钢",
      "涂覆 钝化",
      "规格 M8–M16",
      "结构形式 定制",
    ],
  },
  "雷达控制终端": {
    model: "HD-2RCS...PM",
    metrics: [
      "显示 15 英寸",
      "接口 LAN",
      "供电 AC220V",
      "工作温度 -20–60 ℃",
    ],
  },
  "扫描控制软件": {
    model: "HD-2SCS...PM",
    metrics: [
      "工作方式 体扫/扇扫/定点",
      "接口 RS422",
      "运行平台 Windows",
      "协议 定制",
    ],
  },
  "远程监控单元": {
    model: "HD-2RMU...PM",
    metrics: [
      "接口 LAN",
      "协议 TCP/IP",
      "供电 DC24V",
      "工作温度 -40–70 ℃",
    ],
  },
  "数据采集单元": {
    model: "HD-2DAU...PM",
    metrics: [
      "通道 16 路",
      "采样率 100 kS/s",
      "接口 RS485",
      "供电 DC24V",
    ],
  },
  "信号接口盒": {
    model: "HD-2SIB...PM",
    metrics: [
      "通道 16 路",
      "接口 LAN",
      "供电 DC24V",
      "防护等级 IP65",
    ],
  },
  "通讯电缆组件": {
    model: "HD-2CC...PM",
    metrics: [
      "芯数 8 芯",
      "长度 定制",
      "接口 RJ45",
      "屏蔽 双屏蔽",
    ],
  },
  "电源分配单元": {
    model: "HD-2PDU...PM",
    metrics: [
      "输入 AC220V",
      "输出 8 路",
      "额定电流 16 A",
      "保护 过流/防雷",
    ],
  },
  "防雷滤波组件": {
    model: "HD-2LFP...PM",
    metrics: [
      "通流容量 40 kA",
      "插入损耗 ≤0.5 dB",
      "接口 N-K",
      "防护等级 IP65",
    ],
  },
  "标准机柜": {
    model: "HD-2RC...PM",
    metrics: [
      "高度 42 U",
      "防护等级 IP55",
      "材料 冷轧钢",
      "供电 AC220V",
    ],
  },
  "W 波段 0.6m 双线极化系统": {
    model: "HD-100DPRA600W",
    metrics: [
      "频率 92–96 GHz",
      "增益 ≥48 dBi",
      "口径 600 mm",
      "极化 双线极化",
    ],
  },
  "X 波段 1.0m 双线极化系统": {
    model: "HD-100DPRA1000",
    metrics: [
      "频率 9.3–9.7 GHz",
      "接收增益 35 dB",
      "口径 1000 mm",
      "极化 双线极化",
    ],
  },
  "X 波段 1.8m 双线极化系统": {
    model: "HD-100DPRA1800",
    metrics: [
      "频率 9.3–9.7 GHz",
      "增益 ≥41 dBi",
      "波束宽度 1.9°",
      "极化 双线极化",
    ],
  },
  "X 波段 2.4m 双线极化系统": {
    model: "HD-100DPRA2400",
    metrics: [
      "频率 9.3–9.7 GHz",
      "增益 ≥43 dBi",
      "波束宽度 1.4°",
      "极化 双线极化",
    ],
  },
  "X 波段 4.5m 双线极化系统": {
    model: "HD-100DPRA4500",
    metrics: [
      "频率 9.3–9.7 GHz",
      "增益 ≥46 dBi",
      "波束宽度 0.8°",
      "极化 双线极化",
    ],
  },
  "Ka 波段 1.8m 双线极化系统": {
    model: "HD-120DPRA1800A",
    metrics: [
      "频率 34.5–35.5 GHz",
      "增益 ≥52 dBi",
      "口径 1800 mm",
      "极化 双线极化",
    ],
  },
  "X-Ka 双波段双天线系统": {
    model: "HD-XK180AEST",
    metrics: [
      "频率 8–15 GHz",
      "接收增益 42 dB",
      "口径 1800 mm",
      "极化 双线极化",
    ],
  },
  "天线罩": {
    model: "HD-2RAD...PM",
    metrics: [
      "直径 1200 mm",
      "插损 ≤0.3 dB",
      "材料 玻璃钢",
      "防护等级 IP66",
    ],
  },
  "加热除冰组件": {
    model: "HD-2DH...PM",
    metrics: [
      "功率 2 kW",
      "供电 AC220V",
      "温控范围 -40–40 ℃",
      "防护等级 IP65",
    ],
  },
  "系统联调测试服务": {
    model: "HD-2SAT",
    metrics: [
      "服务内容 联调测试",
      "交付物 测试报告",
      "现场支持 可选",
      "测试项 定制",
    ],
  },
  "现场安装支架": {
    model: "HD-2INS...PM",
    metrics: [
      "材料 钢",
      "涂覆 热镀锌",
      "承载 定制",
      "结构形式 定制",
    ],
  },
  "常用备件包": {
    model: "HD-2SPK",
    metrics: [
      "清单 易损件",
      "数量 定制",
      "包装 木箱",
      "交付 随箱",
    ],
  },
  "环焦抛物面天线": {
    model: "HD-1200HRA41",
    metrics: [
      "频率 12.25–14.5 GHz",
      "增益 41 dBi",
      "波束宽度 2.6°",
      "口径 1200 mm",
    ],
  },
  "折叠反射面天线": {
    model: "HD-1800FRA43",
    metrics: [
      "频率 12.25–14.5 GHz",
      "增益 ≥43 dBi",
      "口径 1800 mm",
      "结构 可折叠",
    ],
  },
  "车载卫星天线": {
    model: "HD-1200VSAT",
    metrics: [
      "频率 12.25–14.5 GHz",
      "接收增益 39.5 dB",
      "口径 1200 mm",
      "极化 线极化",
    ],
  },
  "双频馈源": {
    model: "HD-100DPF...PM",
    metrics: [
      "频率 8–15 GHz",
      "驻波比 ≤1.35",
      "端口 2 路",
      "极化 双线极化",
    ],
  },
  "旋转关节": {
    model: "HD-100WRJ...PM",
    metrics: [
      "频率 8.2–12.4 GHz",
      "驻波比 ≤1.3",
      "插入损耗 ≤0.3 dB",
      "转速 ≤60 r/min",
    ],
  },
  "上下变频器": {
    model: "HD-120UPC...PM",
    metrics: [
      "频率 12.25–14.5 GHz",
      "增益 30 dB",
      "噪声系数 ≤3 dB",
      "接口 LAN",
    ],
  },
  "方位俯仰伺服座架": {
    model: "HD-AP120AES",
    metrics: [
      "承重 120 kg",
      "指向精度 0.08°",
      "转动速度 60 °/s",
      "控制接口 CAN",
    ],
  },
  "自动寻星控制器": {
    model: "HD-2ASC...PM",
    metrics: [
      "跟踪精度 ≤0.15°",
      "接口 CAN",
      "供电 DC24V",
      "工作温度 -40–70 ℃",
    ],
  },
  "跟踪接收机": {
    model: "HD-120TR...PM",
    metrics: [
      "频率 12.25–14.5 GHz",
      "跟踪精度 ≤0.1°",
      "灵敏度 -110 dBm",
      "接口 RS422",
    ],
  },
  "稳定平台": {
    model: "HD-2STP...PM",
    metrics: [
      "承重 80 kg",
      "稳定精度 ≤0.1°",
      "轴数 2 轴",
      "供电 DC24V",
    ],
  },
  "陀螺传感模块": {
    model: "HD-2IMU...PM",
    metrics: [
      "零偏稳定性 ≤0.05 °/h",
      "输出 RS422",
      "供电 DC24V",
      "工作温度 -40–70 ℃",
    ],
  },
  "车载安装座架": {
    model: "HD-2VMT...PM",
    metrics: [
      "承载 ≤300 kg",
      "材料 钢",
      "涂覆 喷涂",
      "结构形式 定制",
    ],
  },
  "减振支撑结构": {
    model: "HD-2VIB...PM",
    metrics: [
      "减振效率 ≥80%",
      "承载 ≤300 kg",
      "材料 钢",
      "结构形式 定制",
    ],
  },
  "展开锁定机构": {
    model: "HD-2DLM...PM",
    metrics: [
      "驱动力 ≤500 N",
      "锁定方式 机械",
      "材料 钢",
      "结构形式 定制",
    ],
  },
  "L、X 波段双频便携终端": {
    model: "HD-LX60P...PM",
    metrics: [
      "频率 1.2–12.4 GHz",
      "接收增益 34 dB",
      "口径 600 mm",
      "结构 便携",
    ],
  },
  "X/Ku 车载静中通系统": {
    model: "HD-100MCES12",
    metrics: [
      "频率 8–10.5 GHz",
      "接收增益 35 dB",
      "口径 1200 mm",
      "极化 圆极化",
    ],
  },
  "Ku 车载静中通系统": {
    model: "HD-120MCES12",
    metrics: [
      "频率 12.25–14.5 GHz",
      "接收增益 39.5 dB",
      "口径 1200 mm",
      "控制接口 CAN",
    ],
  },
  "Ku 中高度动中通系统": {
    model: "HD-120MCES8",
    metrics: [
      "频率 12.25–14.5 GHz",
      "接收增益 37 dB",
      "跟踪速度 100 °/s",
      "发射功率 100 W",
    ],
  },
  "卫星调制解调器": {
    model: "HD-2MOD...PM",
    metrics: [
      "速率 ≤100 Mbps",
      "调制方式 定制",
      "接口 LAN",
      "中频 70/140 MHz",
    ],
  },
  "通信控制器": {
    model: "HD-2COM...PM",
    metrics: [
      "通道 4 路",
      "接口 LAN",
      "供电 DC24V",
      "工作温度 -40–70 ℃",
    ],
  },
  "信标接收机": {
    model: "HD-2BCN...PM",
    metrics: [
      "频率 11.7–12.75 GHz",
      "灵敏度 -120 dBm",
      "接口 RS422",
      "供电 DC24V",
    ],
  },
  "基带处理单元": {
    model: "HD-2BBU...PM",
    metrics: [
      "速率 ≤200 Mbps",
      "接口 LAN",
      "供电 AC220V",
      "工作温度 -20–60 ℃",
    ],
  },
  "智能电源箱": {
    model: "HD-2PPB...PM",
    metrics: [
      "输入 AC220V",
      "输出 DC24V/48V",
      "额定功率 3 kW",
      "保护 过流/过温",
    ],
  },
  "集中监控软件": {
    model: "HD-2MON...PM",
    metrics: [
      "监控对象 多站点",
      "接口 LAN",
      "协议 SNMP",
      "运行平台 Windows",
    ],
  },
  "线缆组件包": {
    model: "HD-2CBL...PM",
    metrics: [
      "芯数 定制",
      "长度 定制",
      "接口 定制",
      "屏蔽 双屏蔽",
    ],
  },
  "运载防护机箱": {
    model: "HD-2TC...PM",
    metrics: [
      "防护等级 IP65",
      "材料 铝合金",
      "工作温度 -40–70 ℃",
      "结构形式 定制",
    ],
  },
};
