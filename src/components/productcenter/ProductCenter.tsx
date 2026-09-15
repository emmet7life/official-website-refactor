"use client";

import { CustomManufacturing } from "./CustomManufacturing";

import Link from "next/link";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { productCategorySlugs, productDirectory, type Category, type Product, type Specification } from "./catalog-data";
import { ProductModal, SpecificationInquiryModal } from "./ProductDetailDialogs";

const categoryCardImages = [
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
  "/product-center/categories/101.jpg",
  "/product-center/categories/102.jpg",
  "/product-center/categories/103.jpg",
  "/product-center/categories/105.jpg",
  "/product-center/categories/107.jpg",
  "/product-center/categories/108.jpg",
  "/product-center/categories/110.jpg",
  "/product-center/categories/111.jpg",
  "/product-center/categories/112.jpg",
  "/product-center/categories/114.jpg",
  "/product-center/categories/116.jpg",
  "/product-center/categories/117.jpg",
  "/product-center/categories/118.jpg",
  "/product-center/categories/120.jpg",
  "/product-center/categories/121.jpg",
  "/product-center/categories/122.jpg",
];

function getSelectedNodes(path: number[]) {
  const nodes: Category[] = [];
  let children = productDirectory;
  path.forEach((index) => {
    const node = children[index];
    if (node) { nodes.push(node); children = node.children; }
  });
  return nodes;
}

function getInitialPath(category?: string) {
  const targetCode = category ? productCategorySlugs[category] : undefined;
  const targetIndex = targetCode ? productDirectory.findIndex((node) => node.code === targetCode) : -1;
  return targetIndex >= 0 ? [targetIndex] : [];
}

export function ProductCenter({ initialCategory }: { initialCategory?: string }) {
  const [selectedPath, setSelectedPath] = useState<number[]>(() => getInitialPath(initialCategory));
  const [expandedPaths, setExpandedPaths] = useState<string[]>(() => getInitialPath(initialCategory).map((_, index, path) => path.slice(0, index + 1).join(".")));
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [inquiryTarget, setInquiryTarget] = useState<string | null>(null);
  const contentRef = useRef<HTMLElement>(null);
  const hasMounted = useRef(false);
  const selectedNodes = getSelectedNodes(selectedPath);
  const selected = selectedNodes.at(-1);
  const children = selected?.children ?? productDirectory;
  const mobileLevels = [
    { items: productDirectory, parentPath: [] as number[] },
    ...selectedNodes
      .map((node, index) => ({ items: node.children, parentPath: selectedPath.slice(0, index + 1) }))
      .filter((level) => level.items.length > 0),
  ].slice(0, 3);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    contentRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }, [selectedPath]);

  function select(path: number[]) {
    setSelectedPath(path);
    setExpandedPaths((current) => [...new Set([
      ...current.filter((key) => key.split(".")[0] === String(path[0])),
      ...path.map((_, index) => path.slice(0, index + 1).join(".")),
    ])]);
  }

  function toggleCategory(path: number[]) {
    const key = path.join(".");
    const wasExpanded = expandedPaths.includes(key);
    setSelectedPath(path);
    setExpandedPaths((current) => wasExpanded
      ? current.filter((item) => item !== key && !item.startsWith(`${key}.`))
      : [...current.filter((item) => item.split(".")[0] === String(path[0])), key]);
  }

  function requestSpecification(target: string) {
    setModalProduct(null);
    setInquiryTarget(target);
  }

  function renderTree(items: Category[], parent: number[] = []) {
    return <ul className="product-tree-list">{items.map((item, index) => {
      const path = [...parent, index];
      const isCurrentPath = path.every((value, pathIndex) => selectedPath[pathIndex] === value);
      const isSelected = isCurrentPath && path.length === selectedPath.length;
      const isExpanded = expandedPaths.includes(path.join("."));
      return <li key={item.id}>
        <button type="button" className={`product-tree-item ${isSelected ? "is-selected" : ""}`} aria-expanded={item.children.length ? isExpanded : undefined} aria-current={isSelected ? "page" : undefined} onClick={() => item.children.length ? toggleCategory(path) : select(path)}>
          <span className="tree-marker">{item.children.length ? (isExpanded ? "−" : "+") : "·"}</span>
          <span>{item.name}</span>
        </button>
        {item.children.length && isExpanded ? renderTree(item.children, path) : null}
      </li>;
    })}</ul>;
  }

  return <div className="product-center-page">
    <section className="product-center-hero">
      <div className="product-center-container product-center-hero-inner">
        <h1>产品中心</h1>
      </div>
    </section>
    <div className="product-center-surface">
      <nav className="product-center-container product-center-breadcrumbs" aria-label="产品目录路径"><Link href="/">首页</Link><span>/</span>{selectedNodes.length === 0 ? <strong>产品中心</strong> : <button type="button" onClick={() => select([])}>产品中心</button>}{selectedNodes.map((node, index) => <span key={node.id} className="breadcrumb-segment"><span>/</span>{index === selectedNodes.length - 1 ? <strong>{node.name}</strong> : <button type="button" onClick={() => select(selectedPath.slice(0, index + 1))}>{node.name}</button>}</span>)}</nav>
      <nav className="product-center-container mobile-category-navigation" aria-label="产品分类目录">
        {mobileLevels.map((level, levelIndex) => <div className="mobile-category-level" key={level.parentPath.join("-") || "root"}>
          {level.items.map((item, index) => {
            const path = [...level.parentPath, index];
            const isActive = selectedPath[levelIndex] === index;
            const isSelected = isActive && path.length === selectedPath.length;
            return <button
              type="button"
              className={isActive ? "is-active" : ""}
              aria-current={isSelected ? "page" : undefined}
              onClick={() => select(path)}
              key={item.id}
            >{item.name}</button>;
          })}
        </div>)}
      </nav>
      <main className="product-center-container product-center-layout">
        <aside className="product-directory"><nav aria-label="产品分类目录">{renderTree(productDirectory)}</nav></aside>
        <section className="product-center-content" ref={contentRef}>
          {selected?.code === "custom" ? <CustomManufacturing /> : null}
          {selected?.article ? <ProductArticle category={selected} onRequestSpec={requestSpecification} /> : selected?.products ? <><ProductCategoryIntro category={selected} /><ProductTable products={selected.products} onOpen={setModalProduct} onRequestSpec={requestSpecification} /><div className="product-mobile-tip">型号列固定在左侧，规格书列固定在右侧；中间技术指标可横向滑动。点击型号查看完整参数。</div></> : <div className="category-cards">{children.map((child, index) => <button key={child.id} type="button" className="category-card-high" onClick={() => select([...selectedPath, index])}>
            <span className="category-card-index">{child.code}</span>
            <span className="category-card-copy"><strong>{child.name}</strong><span className="category-card-action">{child.kind === "rich-text" || child.kind === "reference" ? "查看详情" : child.children.length ? "进入分类" : "查看产品"}<i aria-hidden="true">→</i></span></span>
            <span className="category-card-visual" aria-hidden="true"><Image src={categoryCardImages[index % categoryCardImages.length]} alt="" fill sizes="(max-width: 560px) 44vw, (max-width: 850px) 36vw, 280px" /></span>
          </button>)}</div>}
        </section>
      </main>
    </div>
    {modalProduct ? <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} onRequestSpec={requestSpecification} /> : null}
    {inquiryTarget ? <SpecificationInquiryModal target={inquiryTarget} onClose={() => setInquiryTarget(null)} /> : null}
  </div>;
}

function ProductCategoryIntro({ category }: { category: Category }) {
  const [imageIndex, setImageIndex] = useState(0);
  return <section className="product-leaf-intro">
    <div className="product-leaf-copy">
      <div className="product-overview-label"><span>产品介绍</span><i aria-hidden="true" /></div>
      <p>{category.description}</p>
      <p>支持按频率范围、接口形式和关键技术指标进行选型，具体参数可结合应用场景进行配置。</p>
    </div>
    <figure className="product-leaf-image">
      <ZoomableImage src={category.images[imageIndex]} alt={category.name} />
      <figcaption>产品示意 / 实际规格以技术文件为准</figcaption>
      {category.images.length > 1 ? <div className="product-image-controls"><button type="button" onClick={() => setImageIndex((imageIndex - 1 + category.images.length) % category.images.length)}>‹</button><span>{imageIndex + 1} / {category.images.length}</span><button type="button" onClick={() => setImageIndex((imageIndex + 1) % category.images.length)}>›</button></div> : null}
    </figure>
  </section>;
}

function ProductArticle({ category, onRequestSpec }: { category: Category; onRequestSpec: (target: string) => void }) {
  const article = category.article;
  if (!article) return null;

  if (article.layout === "reference") return <article className="product-article product-rich-reference">
    <header><div className="product-center-kicker">REFERENCE CONTENT</div><h3>{article.title}</h3><div className="product-article-meta">{article.meta}</div></header>
    <div className="product-article-body">{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
  </article>;

  return <article className={`product-rich-article is-${article.layout}`}>
    <header className="product-rich-header">
      <div><span>分系统产品详情</span><h3>{article.title}</h3></div>
      {article.model ? <div className="product-rich-model"><span>产品型号</span><strong>{article.model}</strong></div> : null}
    </header>
    <p className="product-rich-lead">{article.lead}</p>

    {article.layout === "narrative" ? <>
      <div className="product-rich-gallery">{article.images.map((src, index) => <ZoomableImage src={src} alt={`${article.title}产品图 ${index + 1}`} key={src} />)}</div>
      <div className="product-rich-narrative"><div>{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><SpecificationList items={article.highlights ?? []} /></div>
    </> : null}

    {article.layout === "dual-spec" ? <>
      <div className="product-rich-gallery is-compact">{article.images.map((src, index) => <ZoomableImage src={src} alt={`${article.title}产品图 ${index + 1}`} key={src} />)}</div>
      {article.paragraphs.map((paragraph) => <p className="product-rich-paragraph" key={paragraph}>{paragraph}</p>)}
      <DualSpecificationTable antenna={article.antennaSpecs ?? []} servo={article.servoSpecs ?? []} />
    </> : null}

    {article.layout === "showcase" ? <>
      <div className="product-rich-showcase">
        {article.images[0] ? <ZoomableImage src={article.images[0]} alt={`${article.title}产品主图`} /> : null}
        <div><h4>系统说明</h4>{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
      <SpecificationList items={article.highlights ?? []} variant="metrics" />
      {article.images[1] ? <div className="product-rich-detail-image"><ZoomableImage src={article.images[1]} alt={`${article.title}应用形态`} /></div> : null}
    </> : null}

    <footer className="product-rich-footer"><span>{article.meta}</span><button type="button" className="product-primary-button" onClick={() => onRequestSpec(article.model ?? category.name)}>获取规格书</button></footer>
  </article>;
}

function SpecificationList({ items, variant = "list" }: { items: Specification[]; variant?: "list" | "metrics" }) {
  return <dl className={`product-rich-specs is-${variant}`}>{items.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>;
}

function DualSpecificationTable({ antenna, servo }: { antenna: Specification[]; servo: Specification[] }) {
  const rows = Array.from({ length: Math.max(antenna.length, servo.length) }, (_, index) => ({ antenna: antenna[index], servo: servo[index] }));
  return <div className="product-rich-table-scroll"><table className="product-rich-table"><thead><tr><th colSpan={2}>天线参数</th><th colSpan={2}>伺服参数</th></tr></thead><tbody>{rows.map((row, index) => <tr key={`${row.antenna?.label}-${row.servo?.label}-${index}`}><th>{row.antenna?.label}</th><td>{row.antenna?.value}</td><th>{row.servo?.label}</th><td>{row.servo?.value}</td></tr>)}</tbody></table></div>;
}

function ProductTable({ products, onOpen, onRequestSpec }: { products: Product[]; onOpen: (product: Product) => void; onRequestSpec: (target: string) => void }) {
  return <section className="product-list-section">
    <header className="product-list-heading"><h3>产品列表</h3><p>点击产品型号查看完整技术参数</p></header>
    <div className="product-table-wrap"><div className="product-table-scroll"><table className="product-center-table"><thead><tr><th className="sticky-model">产品型号</th><th>频率范围<br /><small>GHz</small></th><th>增益<br /><small>dB</small></th><th>接口 / 法兰</th><th>工作带宽<br /><small>GHz</small></th><th>轴比 / 精度</th><th className="sticky-spec">规格书</th></tr></thead><tbody>{products.map((product) => <tr key={product.model}><td className="sticky-model"><button type="button" className="model-button" onClick={() => onOpen(product)}>{product.model}</button></td><td>{product.frequency}</td><td>{product.gain}</td><td>{product.interface}</td><td>{product.bandwidth}</td><td>{product.axis}</td><td className="sticky-spec"><button type="button" className="spec-button" onClick={() => onRequestSpec(product.model)} aria-label={`获取 ${product.model} 规格书`}>获取</button></td></tr>)}</tbody></table></div></div>
  </section>;
}

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return <>
    <button type="button" className="zoomable-product-image" onClick={() => setIsOpen(true)} aria-label={`查看大图：${alt}`}>
      <Image src={src} alt={alt} width={720} height={520} />
      <span><Maximize2 aria-hidden="true" size={16} />查看大图</span>
    </button>
    {isOpen ? <ProductImageLightbox src={src} alt={alt} onClose={() => setIsOpen(false)} /> : null}
  </>;
}

function ProductImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return createPortal(<div className="product-image-lightbox" role="presentation" onClick={onClose}>
    <figure role="dialog" aria-modal="true" aria-label={alt} onClick={(event) => event.stopPropagation()}>
      <button type="button" onClick={onClose} aria-label="关闭大图"><X aria-hidden="true" size={24} /></button>
      <Image src={src} alt={alt} width={1600} height={1200} priority />
      <figcaption>{alt}</figcaption>
    </figure>
  </div>, document.body);
}
