"use client";

import Image from "next/image";
import { ProductModal, SpecificationInquiryModal } from "@/components/productcenter/ProductDetailDialogs";
import type { Product } from "@/components/productcenter/catalog-data";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { productDetails } from "@/components/solutions/solution-product-details";

type ProductCatalogSlug = "waveguide-coaxial" | "active-devices" | "antenna" | "servo-control" | "subsystem-integration";

type ProductCategory = {
  id: string;
  label: string;
  slug: ProductCatalogSlug;
};

type ProductItem = {
  name: string;
  model: string;
  metrics: string[];
  categoryId: string;
  image: string;
  href: string;
};

type SolutionSystem = {
  id: string;
  name: string;
  description: string;
  marker: string;
  categories: ProductCategory[];
  products: ProductItem[];
};

type Solution = {
  id: string;
  label: string;
  title: string;
  description: string;
  diagram: "weather-radar" | "satellite";
  systems: SolutionSystem[];
};

const productImages = [
  "/product-center/categories/0001.png",
  "/product-center/categories/0002.png",
  "/product-center/categories/0003.png",
  "/product-center/categories/0004.png",
  "/product-center/categories/0005.png",
  "/product-center/categories/0006.png",
  "/product-center/categories/0007.png",
  "/product-center/categories/0008.png",
  "/product-center/categories/0009.png",
  "/product-center/categories/0010.png",
  "/product-center/categories/0011.png",
] as const;

function createProducts(categories: ProductCategory[], entries: Array<[name: string, categoryId: string]>): ProductItem[] {
  return entries.map(([name, categoryId], index) => {
    const category = categories.find((item) => item.id === categoryId);
    if (!category) throw new Error(`Unknown solution product category: ${categoryId}`);
    const detail = productDetails[name];
    if (!detail) throw new Error(`Missing solution product detail: ${name}`);
    return {
      name,
      model: detail.model,
      metrics: detail.metrics,
      categoryId,
      image: productImages[index % productImages.length],
      href: `/productcenter?category=${category.slug}`,
    };
  });
}

const radarFeedCategories: ProductCategory[] = [
  { id: "waveguide", label: "波导馈线产品", slug: "waveguide-coaxial" },
  { id: "antenna", label: "天线与馈源", slug: "antenna" },
  { id: "active", label: "有源器件", slug: "active-devices" },
];

const radarServoCategories: ProductCategory[] = [
  { id: "servo", label: "伺服驱动产品", slug: "servo-control" },
  { id: "control", label: "控制与反馈", slug: "servo-control" },
  { id: "structure", label: "结构承载", slug: "servo-control" },
];

const radarIntegrationCategories: ProductCategory[] = [
  { id: "system", label: "雷达整机配置", slug: "subsystem-integration" },
  { id: "environment", label: "环境适应组件", slug: "subsystem-integration" },
  { id: "delivery", label: "交付与测试", slug: "subsystem-integration" },
];

const satelliteAntennaCategories: ProductCategory[] = [
  { id: "reflector", label: "反射面天线", slug: "antenna" },
  { id: "feed", label: "馈线与转换", slug: "waveguide-coaxial" },
  { id: "active", label: "有源链路", slug: "active-devices" },
];

const satelliteServoCategories: ProductCategory[] = [
  { id: "servo", label: "跟踪伺服产品", slug: "servo-control" },
  { id: "sensor", label: "反馈器件", slug: "servo-control" },
  { id: "carrier", label: "车载承载结构", slug: "servo-control" },
];

const satelliteTerminalCategories: ProductCategory[] = [
  { id: "terminal", label: "卫星终端系统", slug: "subsystem-integration" },
  { id: "modem", label: "通信与调制解调", slug: "active-devices" },
  { id: "power", label: "电源与监控", slug: "subsystem-integration" },
];

const solutions: Solution[] = [
  {
    id: "weather-radar",
    label: "气象雷达",
    title: "气象雷达",
    description: "面向降水探测、云雨廓线观测与精细化气象服务，提供覆盖 X、Ka、W 波段的天馈伺一体化配置。系统将反射面天线、双线极化馈线、方位俯仰伺服、数据接口与环境防护统一规划，支持体扫、扇扫、定点扫描等观测工作方式，并可按户外长期运行条件进行项目化交付。项目前期可结合站点环境、频段口径、扫描范围与数据接口输出配置清单，协助完成安装空间核查和整机电性能验收。",
    diagram: "weather-radar",
    systems: [
      {
        id: "radar-feed",
        name: "天馈子系统",
        description: "覆盖反射面天线、双线极化馈源、波导馈线与低噪声前端。",
        marker: "feed",
        categories: radarFeedCategories,
        products: createProducts(radarFeedCategories, [
          ["矩形直波导", "waveguide"],
          ["圆弧弯波导", "waveguide"],
          ["矩形扭波导", "waveguide"],
          ["可扭软波导", "waveguide"],
          ["波导同轴转换", "waveguide"],
          ["低损耗电缆组件", "waveguide"],
          ["双线极化馈源", "antenna"],
          ["反射面天线", "antenna"],
          ["喇叭天线", "antenna"],
          ["极化器", "antenna"],
          ["低噪声放大器", "active"],
          ["功率放大器", "active"],
          ["微波滤波器", "active"],
          ["射频开关矩阵", "active"],
        ]),
      },
      {
        id: "radar-servo",
        name: "伺服承载子系统",
        description: "提供方位俯仰驱动、编码反馈、滑环传输与户外承载结构。",
        marker: "servo",
        categories: radarServoCategories,
        products: createProducts(radarServoCategories, [
          ["方位俯仰转台", "servo"],
          ["二维伺服转台", "servo"],
          ["三轴伺服转台", "servo"],
          ["伺服驱动器", "control"],
          ["绝对式编码器", "control"],
          ["精密滑环组件", "control"],
          ["限位保护单元", "control"],
          ["天线座架", "structure"],
          ["减速传动机构", "structure"],
          ["抗风支撑结构", "structure"],
          ["户外防护罩", "structure"],
          ["安装连接组件", "structure"],
        ]),
      },
      {
        id: "radar-control",
        name: "控制与数据子系统",
        description: "承担扫描控制、状态监测、数据采集与通讯接口管理。",
        marker: "control",
        categories: radarIntegrationCategories,
        products: createProducts(radarIntegrationCategories, [
          ["雷达控制终端", "system"],
          ["扫描控制软件", "system"],
          ["远程监控单元", "system"],
          ["数据采集单元", "delivery"],
          ["信号接口盒", "delivery"],
          ["通讯电缆组件", "delivery"],
          ["电源分配单元", "environment"],
          ["防雷滤波组件", "environment"],
          ["标准机柜", "environment"],
        ]),
      },
      {
        id: "radar-integration",
        name: "整机集成子系统",
        description: "按频段、口径与观测任务完成整机配置、联调与交付。",
        marker: "integration",
        categories: radarIntegrationCategories,
        products: createProducts(radarIntegrationCategories, [
          ["W 波段 0.6m 双线极化系统", "system"],
          ["X 波段 1.0m 双线极化系统", "system"],
          ["X 波段 1.8m 双线极化系统", "system"],
          ["X 波段 2.4m 双线极化系统", "system"],
          ["X 波段 4.5m 双线极化系统", "system"],
          ["Ka 波段 1.8m 双线极化系统", "system"],
          ["X-Ka 双波段双天线系统", "system"],
          ["天线罩", "environment"],
          ["加热除冰组件", "environment"],
          ["系统联调测试服务", "delivery"],
          ["现场安装支架", "delivery"],
          ["常用备件包", "delivery"],
        ]),
      },
    ],
  },
  {
    id: "satellite-communication",
    label: "卫星通信",
    title: "卫星通信",
    description: "面向应急通信、车载驻停通信与移动载体通信，整合反射面天线、馈电网络、寻星跟踪、伺服承载与终端监控，支持便携、静中通与动中通形态。系统可根据 L、X、Ku 等频段和载体条件进行配置，实现快速展开、自动对星与稳定链路建立。交付内容可覆盖天线口径、跟踪精度、供电方式、车载承载与远程监控，便于按任务场景完成链路预算和系统联调。",
    diagram: "satellite",
    systems: [
      {
        id: "satellite-antenna",
        name: "天线与馈电子系统",
        description: "覆盖环焦反射面、折叠天线、双频馈源与低损耗传输链路。",
        marker: "antenna",
        categories: satelliteAntennaCategories,
        products: createProducts(satelliteAntennaCategories, [
          ["环焦抛物面天线", "reflector"],
          ["折叠反射面天线", "reflector"],
          ["车载卫星天线", "reflector"],
          ["双频馈源", "reflector"],
          ["极化器", "reflector"],
          ["天线罩", "reflector"],
          ["波导同轴转换", "feed"],
          ["低损耗电缆组件", "feed"],
          ["旋转关节", "feed"],
          ["微波滤波器", "feed"],
          ["低噪声放大器", "active"],
          ["功率放大器", "active"],
          ["上下变频器", "active"],
          ["射频开关矩阵", "active"],
        ]),
      },
      {
        id: "satellite-servo",
        name: "跟踪伺服子系统",
        description: "实现自动寻星、姿态反馈、载体适配与稳定指向控制。",
        marker: "servo",
        categories: satelliteServoCategories,
        products: createProducts(satelliteServoCategories, [
          ["方位俯仰伺服座架", "servo"],
          ["自动寻星控制器", "servo"],
          ["跟踪接收机", "servo"],
          ["伺服驱动器", "servo"],
          ["稳定平台", "servo"],
          ["绝对式编码器", "sensor"],
          ["陀螺传感模块", "sensor"],
          ["精密滑环组件", "sensor"],
          ["限位保护单元", "sensor"],
          ["车载安装座架", "carrier"],
          ["减振支撑结构", "carrier"],
          ["展开锁定机构", "carrier"],
        ]),
      },
      {
        id: "satellite-terminal",
        name: "终端与集成子系统",
        description: "提供便携、静中通、动中通整机及通信电源监控配置。",
        marker: "terminal",
        categories: satelliteTerminalCategories,
        products: createProducts(satelliteTerminalCategories, [
          ["L、X 波段双频便携终端", "terminal"],
          ["X/Ku 车载静中通系统", "terminal"],
          ["Ku 车载静中通系统", "terminal"],
          ["Ku 中高度动中通系统", "terminal"],
          ["卫星调制解调器", "modem"],
          ["通信控制器", "modem"],
          ["信标接收机", "modem"],
          ["基带处理单元", "modem"],
          ["智能电源箱", "power"],
          ["集中监控软件", "power"],
          ["线缆组件包", "power"],
          ["运载防护机箱", "power"],
        ]),
      },
    ],
  },
];

const PAGE_SIZE = 8;

export function SolutionsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [specificationTarget, setSpecificationTarget] = useState<string | null>(null);
  const [solutionId, setSolutionId] = useState(solutions[0].id);
  const [systemId, setSystemId] = useState(solutions[0].systems[0].id);
  const [categoryId, setCategoryId] = useState("all");
  const [page, setPage] = useState(1);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [hasConsultSubmitted, setHasConsultSubmitted] = useState(false);
  const [hoveredSystemId, setHoveredSystemId] = useState<string | null>(null);
  const axisRef = useRef<HTMLDivElement>(null);
  const [axis, setAxis] = useState({ overflow: false, canScrollLeft: false, canScrollRight: false });

  useEffect(() => {
    const syncFromHash = () => {
      const target = solutions.find((item) => item.id === window.location.hash.slice(1));
      if (!target) return;
      setSolutionId(target.id);
      setSystemId(target.systems[0].id);
      setCategoryId("all");
      setPage(1);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    if (!isConsultOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsConsultOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isConsultOpen]);

  useEffect(() => {
    const container = axisRef.current;
    if (!container) return;

    const syncAxisState = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const next = {
        overflow: maxScrollLeft > 2,
        canScrollLeft: container.scrollLeft > 2,
        canScrollRight: container.scrollLeft < maxScrollLeft - 2,
      };
      setAxis((current) => (
        current.overflow === next.overflow
          && current.canScrollLeft === next.canScrollLeft
          && current.canScrollRight === next.canScrollRight
          ? current
          : next
      ));
    };

    syncAxisState();
    container.addEventListener("scroll", syncAxisState, { passive: true });
    window.addEventListener("resize", syncAxisState);
    const observer = new ResizeObserver(syncAxisState);
    observer.observe(container);
    return () => {
      container.removeEventListener("scroll", syncAxisState);
      window.removeEventListener("resize", syncAxisState);
      observer.disconnect();
    };
  }, []);

  const solution = solutions.find((item) => item.id === solutionId) ?? solutions[0];
  const system = solution.systems.find((item) => item.id === systemId) ?? solution.systems[0];
  const filteredProducts = categoryId === "all"
    ? system.products
    : system.products.filter((product) => product.categoryId === categoryId);
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visibleProducts = filteredProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const selectSolution = (nextId: string) => {
    const next = solutions.find((item) => item.id === nextId);
    if (!next) return;
    setSolutionId(next.id);
    setSystemId(next.systems[0].id);
    setCategoryId("all");
    setPage(1);
  };

  const selectSystem = (nextId: string) => {
    setSystemId(nextId);
    setCategoryId("all");
    setPage(1);
  };

  const selectCategory = (nextId: string) => {
    setCategoryId(nextId);
    setPage(1);
  };

  const openConsult = () => {
    setHasConsultSubmitted(false);
    setIsConsultOpen(true);
  };

  const openProduct = (product: ProductItem) => {
    setSelectedProduct({
      name: product.name, model: product.model, image: product.image,
      description: product.name,
      frequency: "", gain: "", interface: "", bandwidth: "", axis: "",
      specifications: product.metrics.map((metric) => {
        const separator = metric.indexOf(" ");
        return separator < 0 ? { label: "技术指标", value: metric } : { label: metric.slice(0, separator), value: metric.slice(separator + 1) };
      }),
    });
  };

  const submitConsult = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasConsultSubmitted(true);
  };

  const scrollAxis = (direction: -1 | 1) => {
    const container = axisRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll<HTMLButtonElement>("button[id]"));
    if (items.length === 0) return;

    const nextItem = direction === 1
      ? items.find((item) => item.offsetLeft + item.offsetWidth > container.scrollLeft + container.clientWidth + 2)
      : [...items].reverse().find((item) => item.offsetLeft + item.offsetWidth < container.scrollLeft - 2);
    const fallback = direction === 1 ? items[items.length - 1] : items[0];
    const target = nextItem ?? fallback;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const nextScrollLeft = direction === 1
      ? Math.min(maxScrollLeft, target.offsetLeft - 2)
      : Math.max(0, target.offsetLeft + target.offsetWidth + 2 - container.clientWidth);
    container.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
  };

  return (
    <div className="solutions-page">
      <section className="solutions-stage" aria-label="解决方案系统组成">
        <div className="solutions-container solution-system-layout">
          <nav className="solution-system-list" aria-label={`${solution.label}子系统`}>
            {solution.systems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === system.id ? "active" : undefined}
                onMouseEnter={() => setHoveredSystemId(item.id)}
                onMouseLeave={() => setHoveredSystemId(null)}
                onFocus={() => setHoveredSystemId(item.id)}
                onBlur={() => setHoveredSystemId(null)}
                onClick={() => selectSystem(item.id)}
                aria-pressed={item.id === system.id}
              >
                <span aria-hidden="true" />
                {item.name}
              </button>
            ))}
          </nav>

          <div className={`solution-diagram solution-${solution.diagram}`} data-solution={solution.id}>
            {solution.diagram === "weather-radar" ? (
              <Image
                src="/sites/www-racodf-com-3880565d/solutions/weather-radar-line-diagram-v2.png"
                alt="气象雷达天馈伺系统线条型科技感示意图"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 60vw"
              />
            ) : (
              <Image
                src="/sites/www-racodf-com-3880565d/solutions/satellite-communication-line-diagram.png"
                alt="卫星通信天馈伺系统线条型科技感示意图"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 60vw"
              />
            )}
            {solution.systems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={[
                  "solution-marker",
                  item.id === system.id ? "active" : undefined,
                  item.id === hoveredSystemId ? "is-hovered" : undefined,
                ].filter(Boolean).join(" ")}
                data-marker={item.marker}
                onMouseEnter={() => setHoveredSystemId(item.id)}
                onMouseLeave={() => setHoveredSystemId(null)}
                onFocus={() => setHoveredSystemId(item.id)}
                onBlur={() => setHoveredSystemId(null)}
                onClick={() => selectSystem(item.id)}
                aria-label={item.name}
                aria-pressed={item.id === system.id}
              >
                <span aria-hidden="true" />
                <small>{item.name}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="solution-axis">
          <div className="solutions-container solution-axis-inner">
            {axis.overflow ? (
              <div className="solution-axis-arrows" aria-label="解决方案滚动控制">
                <button type="button" onClick={() => scrollAxis(-1)} disabled={!axis.canScrollLeft} aria-label="向左滚动解决方案">
                  <ChevronLeft size={17} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollAxis(1)} disabled={!axis.canScrollRight} aria-label="向右滚动解决方案">
                  <ChevronRight size={17} aria-hidden="true" />
                </button>
              </div>
            ) : null}
            <div className={axis.overflow ? "solution-axis-scroll is-overflow" : "solution-axis-scroll"} ref={axisRef}>
              <span className="solution-axis-line" aria-hidden="true" />
              {solutions.map((item) => (
                <button
                  key={item.id}
                  id={item.id}
                  type="button"
                  className={item.id === solution.id ? "active" : undefined}
                  onClick={() => selectSolution(item.id)}
                  aria-current={item.id === solution.id ? "true" : undefined}
                >
                  <span aria-hidden="true" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="solution-description" aria-label="解决方案描述">
        <div className="solutions-container">
          <div className="solution-description-title">
            <h2>{solution.title}</h2>
            <button type="button" className="solution-consult-trigger" onClick={openConsult}>
              获取方案咨询
            </button>
          </div>
          <p>{solution.description}</p>
        </div>
      </section>

      <section className="solution-product-section" aria-label="关联产品">
        <div className="solutions-container">
          <div className="solution-products-head">
            <div>
              <h2>{system.name}</h2>
            </div>
          </div>

          <div className="solution-category-filter" role="group" aria-label="产品分类筛选">
            <button type="button" className={categoryId === "all" ? "active" : undefined} onClick={() => selectCategory("all")} aria-pressed={categoryId === "all"}>
              全部
            </button>
            {system.categories.map((item) => (
              <button
                key={item.id}
                type="button"
                className={categoryId === item.id ? "active" : undefined}
                onClick={() => selectCategory(item.id)}
                aria-pressed={categoryId === item.id}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="solution-product-grid">
            {visibleProducts.map((product) => (
              <button type="button" key={`${system.id}-${product.name}`} onClick={() => openProduct(product)} className="solution-product-card text-left" aria-label={`查看${product.name}产品详情`}>
                <span className="solution-product-figure">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 92vw, (max-width: 1023px) 45vw, 285px" />
                </span>
                <span className="solution-product-body">
                  <span className="solution-product-name">{product.name}</span>
                  <span className="solution-product-model">
                    <span className="solution-product-model-label">产品型号</span>
                    <span className="solution-product-model-code">{product.model}</span>
                  </span>
                  <span className="solution-product-metrics">
                    {product.metrics.slice(0, 3).map((metric) => (
                      <span key={metric} className="solution-product-metric">{metric}</span>
                    ))}
                  </span>
                </span>
                <span className="solution-product-more">
                  查看详细指标
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>

          <div className="solution-pagination" aria-label="产品分页">
            <button type="button" onClick={() => setPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
              <ChevronLeft size={16} aria-hidden="true" />
              上一页
            </button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                className={pageNumber === currentPage ? "active" : undefined}
                onClick={() => setPage(pageNumber)}
                aria-current={pageNumber === currentPage ? "page" : undefined}
              >
                {pageNumber}
              </button>
            ))}
            <button type="button" onClick={() => setPage(Math.min(pageCount, currentPage + 1))} disabled={currentPage === pageCount}>
              下一页
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {selectedProduct ? <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onRequestSpec={(target) => { setSelectedProduct(null); setSpecificationTarget(target); }} /> : null}
      {specificationTarget ? <SpecificationInquiryModal target={specificationTarget} onClose={() => setSpecificationTarget(null)} /> : null}
      {isConsultOpen ? (
        <div
          className="solution-consult-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsConsultOpen(false);
          }}
        >
          <section className="solution-consult-modal" role="dialog" aria-modal="true" aria-labelledby="solution-consult-title">
            <div className="solution-consult-head">
              <div>
                <span>SOLUTION CONSULT</span>
                <h2 id="solution-consult-title">留下您的联系方式</h2>
              </div>
              <button type="button" onClick={() => setIsConsultOpen(false)} aria-label="关闭方案咨询弹窗">
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <p className="solution-consult-lead">提交后，方案顾问将在 1-2 个工作日内与您联系。</p>
            <p className="solution-consult-selected">咨询解决方案·{solution.title}</p>
            <form className="solution-consult-form" onSubmit={submitConsult}>
              <label>
                联系电话*
                <input name="phone" type="tel" placeholder="请输入手机号码" required />
              </label>
              <label>
                公司名称
                <input name="company" placeholder="请输入公司名称（选填）" />
              </label>
              <label>
                需求说明
                <textarea name="message" placeholder="请简要描述您的需求（选填）" />
              </label>
              <label className="solution-consult-consent">
                <input type="checkbox" required />
                <span>
                  我已阅读并同意
                  <span className="solution-privacy-policy">《隐私政策》</span>
                  ，同意西安恒达微波为业务联系与回复目的收集、使用我所填写的个人信息。
                </span>
              </label>
              <button type="submit">提交</button>
              <p aria-live="polite">{hasConsultSubmitted ? "已收到您的咨询，我们会尽快与您联系。" : ""}</p>
            </form>
          </section>
        </div>
      ) : null}
    </div>
  );
}
