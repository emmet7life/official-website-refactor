"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import { Check, ChevronDown, RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { createPortal } from "react-dom";
import { PageBanner } from "@/components/sites/www-racodf-com-3880565d/page-banner/PageBanner";
import { productDirectory, type Category, type Product } from "@/components/productcenter/catalog-data";

const MIN_HZ = 9e3;
const MAX_HZ = 300e9;
const LOG_RANGE = Math.log(MAX_HZ / MIN_HZ);
const RESULTS_PER_PAGE = 10;
const UNITS = { kHz: 1e3, MHz: 1e6, GHz: 1e9 } as const;
type Unit = keyof typeof UNITS;
type SearchCriteria = { keyword: string; family: string; lowHz: number; highHz: number };
type CatalogEntry = { category: Category; path: string[]; family: string; products: Product[] };
type Hit = { entry: CatalogEntry; product: Product; exactModelMatch: boolean; rank: number };
const families: Record<string, string> = {
  "1": "无源系列产品", "2": "有源系列产品", "3": "天线系列产品", "4": "伺服转台系列产品", "5": "分系统集成系列产品",
};
const bands = [
  ["HF", 3e6, 30e6, "3–30 MHz"], ["VHF", 30e6, 300e6, "30–300 MHz"], ["UHF", 300e6, 1e9, "300 MHz–1 GHz"],
  ["L", 1e9, 2e9, "1–2 GHz"], ["S", 2e9, 4e9, "2–4 GHz"], ["C", 4e9, 8e9, "4–8 GHz"],
  ["X", 8e9, 12e9, "8–12 GHz"], ["Ku", 12e9, 18e9, "12–18 GHz"], ["K", 18e9, 27e9, "18–27 GHz"],
  ["Ka", 26.5e9, 40e9, "26.5–40 GHz"], ["Q", 33e9, 50e9, "33–50 GHz"], ["U", 40e9, 60e9, "40–60 GHz"],
  ["V", 50e9, 75e9, "50–75 GHz"], ["W", 75e9, 110e9, "75–110 GHz"], ["F", 90e9, 140e9, "90–140 GHz"],
  ["D", 110e9, 170e9, "110–170 GHz"],
] as const;

function flattenDirectory(nodes: Category[], ancestors: string[] = []): CatalogEntry[] {
  return nodes.flatMap((node) => {
    const path = [...ancestors, node.name];
    const family = families[node.code.split(".")[0]] ?? node.name;
    const own = node.products?.length ? [{ category: node, path: [family, ...path.slice(1)], family, products: node.products }] : [];
    return [...own, ...flattenDirectory(node.children, path)];
  });
}

const entries = flattenDirectory(productDirectory);

function parseFrequency(value: string): [number, number] | null {
  if (/dc/i.test(value)) return [0, Number(value.match(/[\d.]+/)?.[0] ?? 0) * 1e9];
  const nums = value.match(/[\d.]+/g)?.map(Number).filter(Number.isFinite) ?? [];
  if (!nums.length) return null;
  return [nums[0] * 1e9, (nums[1] ?? nums[0]) * 1e9];
}

function frequencyMatches(product: Product, low: number, high: number) {
  const range = parseFrequency(product.frequency);
  return range !== null && range[0] <= low && range[1] >= high;
}

function matchProduct(entry: CatalogEntry, product: Product, query: string) {
  if (!query) return { exactModelMatch: false, rank: 5 };
  const q = query.toLocaleLowerCase();
  const model = product.model.toLocaleLowerCase();
  if (model === q) return { exactModelMatch: true, rank: 0 };
  if (model.startsWith(q)) return { exactModelMatch: false, rank: 1 };
  if (model.includes(q)) return { exactModelMatch: false, rank: 2 };
  if (entry.category.name.toLocaleLowerCase().includes(q)) return { exactModelMatch: false, rank: 3 };
  if (entry.path.join(" ").toLocaleLowerCase().includes(q)) return { exactModelMatch: false, rank: 4 };
  if (product.description.toLocaleLowerCase().includes(q)) return { exactModelMatch: false, rank: 5 };
  return null;
}

function SearchModelTable({ rows, makeHref }: { rows: Hit[]; makeHref: (model: string) => string }) {
  const tableRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; scrollLeft: number; moved: boolean } | null>(null);
  const draggedRef = useRef(false);

  return <div className="newsearch-table-scroll" ref={tableRef}
    onMouseDown={(event) => { if (event.button === 0 && tableRef.current) dragRef.current = { x: event.clientX, scrollLeft: tableRef.current.scrollLeft, moved: false }; }}
    onMouseMove={(event) => { if (!dragRef.current || !tableRef.current || !(event.buttons & 1)) return; const delta = event.clientX - dragRef.current.x; if (Math.abs(delta) > 3) dragRef.current.moved = true; if (dragRef.current.moved) { tableRef.current.scrollLeft = dragRef.current.scrollLeft - delta; draggedRef.current = true; } }}
    onMouseUp={() => { dragRef.current = null; }} onMouseLeave={() => { dragRef.current = null; }}>
    <table className="product-center-table newsearch-model-table"><thead><tr><th className="sticky-model">产品型号</th><th>频率范围<br /><small>GHz</small></th><th>增益<br /><small>dB</small></th><th>接口 / 法兰</th><th>工作带宽<br /><small>GHz</small></th><th>轴比 / 精度</th></tr></thead><tbody>{rows.map(({ product }) => <tr key={`${product.model}-${product.frequency}`}><td className="sticky-model"><Link href={makeHref(product.model)} onClick={(event) => { if (draggedRef.current) { event.preventDefault(); draggedRef.current = false; } }}>{product.model}</Link></td><td>{product.frequency}</td><td>{product.gain}</td><td>{product.interface}</td><td>{product.bandwidth}</td><td>{product.axis}</td></tr>)}</tbody></table>
  </div>;
}

function toHz(value: string, unit: Unit) { return Number(value) * UNITS[unit]; }
function sliderPosition(hz: number) { return Math.max(0, Math.min(1000, 1000 * Math.log(hz / MIN_HZ) / LOG_RANGE)); }
function sliderFrequency(position: number) { return MIN_HZ * Math.exp(position / 1000 * LOG_RANGE); }
function formatHz(hz: number) {
  const unit: Unit = hz >= 1e9 ? "GHz" : hz >= 1e6 ? "MHz" : "kHz";
  return `${Number((hz / UNITS[unit]).toPrecision(4))} ${unit}`;
}
function parts(hz: number): { value: string; unit: Unit } {
  const unit: Unit = hz >= 1e9 ? "GHz" : hz >= 1e6 ? "MHz" : "kHz";
  return { value: String(Number((hz / UNITS[unit]).toPrecision(6))), unit };
}

type SelectOption = { value: string; label: string };

function SearchSelect({ value, options, onChange, ariaLabel, className }: {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  ariaLabel: string;
  className: string;
}) {
  const listboxId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value));

  const updatePosition = useCallback(() => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const menuHeight = Math.min(options.length * 40 + 8, 240);
    const top = window.innerHeight - rect.bottom < menuHeight && rect.top > menuHeight
      ? rect.top - menuHeight - 4
      : rect.bottom + 4;
    setPosition({ top, left: Math.min(rect.left, window.innerWidth - rect.width - 8), width: rect.width });
  }, [options.length]);

  useEffect(() => {
    if (!open) return;
    optionRefs.current[activeIndex]?.focus();
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target) && !listRef.current?.contains(target)) setOpen(false);
    };
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [activeIndex, open, updatePosition]);

  function openMenu(index = selectedIndex) {
    updatePosition();
    setActiveIndex(index);
    setOpen(true);
  }

  function choose(option: SelectOption) {
    onChange(option.value);
    setOpen(false);
    triggerRef.current?.focus();
  }

  return <div className={`newsearch-select ${className}`} ref={rootRef}>
    <button
      ref={triggerRef}
      type="button"
      className="newsearch-select-trigger"
      aria-label={ariaLabel}
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-controls={listboxId}
      onClick={() => open ? setOpen(false) : openMenu()}
      onKeyDown={(event) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          const delta = event.key === "ArrowDown" ? 1 : -1;
          openMenu(open ? (activeIndex + delta + options.length) % options.length : selectedIndex);
        } else if ((event.key === "Enter" || event.key === " ") && !open) {
          event.preventDefault();
          openMenu();
        } else if (event.key === "Escape" && open) {
          setOpen(false);
        }
      }}
    >
      <span>{options[selectedIndex]?.label}</span><ChevronDown size={15} aria-hidden="true" />
    </button>
    {open && typeof document !== "undefined" ? createPortal(
      <div id={listboxId} ref={listRef} className="newsearch-select-options" role="listbox" aria-label={ariaLabel} style={position}>
        {options.map((option, index) => <button
          key={option.value}
          ref={(element) => { optionRefs.current[index] = element; }}
          type="button"
          role="option"
          aria-selected={option.value === value}
          className="newsearch-select-option"
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => choose(option)}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              const delta = event.key === "ArrowDown" ? 1 : -1;
              const nextIndex = (index + delta + options.length) % options.length;
              setActiveIndex(nextIndex);
              optionRefs.current[nextIndex]?.focus();
            } else if (event.key === "Home" || event.key === "End") {
              event.preventDefault();
              const nextIndex = event.key === "Home" ? 0 : options.length - 1;
              setActiveIndex(nextIndex);
              optionRefs.current[nextIndex]?.focus();
            } else if (event.key === "Escape") {
              event.preventDefault();
              setOpen(false);
              triggerRef.current?.focus();
            }
          }}
        >{option.label}{option.value === value ? <Check size={14} aria-hidden="true" /> : null}</button>)}
      </div>,
      document.body,
    ) : null}
  </div>;
}

const frequencyUnits: SelectOption[] = ["kHz", "MHz", "GHz"].map((unit) => ({ value: unit, label: unit }));

function FrequencyInput({ label, value, unit, invalid, onValueChange, onUnitChange }: {
  label: string; value: string; unit: Unit; invalid: boolean; onValueChange: (value: string) => void; onUnitChange: (unit: Unit) => void;
}) {
  return <label className={`newsearch-frequency-input${invalid ? " is-invalid" : ""}`}>
    <span>{label}</span>
    <div className="newsearch-number-unit"><input type="number" min="0" step="any" value={value} aria-label={`${label}数值`} onChange={(event) => onValueChange(event.target.value)} /><SearchSelect className="newsearch-unit-select" ariaLabel={`${label}单位`} value={unit} options={frequencyUnits} onChange={(nextUnit) => onUnitChange(nextUnit as Unit)} /></div>
  </label>;
}

export function NewSearchPage() {
  const [keyword, setKeyword] = useState("");
  const [family, setFamily] = useState("");
  const [low, setLow] = useState(parts(MIN_HZ));
  const [high, setHigh] = useState(parts(MAX_HZ));
  const [submittedCriteria, setSubmittedCriteria] = useState<SearchCriteria | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [activeBand, setActiveBand] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [areFiltersOpen, setAreFiltersOpen] = useState(true);
  const requestTimerRef = useRef<number | null>(null);
  const resultsTargetRef = useRef<HTMLDivElement>(null);
  const lowHz = toHz(low.value, low.unit);
  const highHz = toHz(high.value, high.unit);
  const invalid = !Number.isFinite(lowHz) || !Number.isFinite(highHz) || lowHz < MIN_HZ || highHz > MAX_HZ || lowHz > highHz;
  const lowPos = sliderPosition(Math.min(MAX_HZ, Math.max(MIN_HZ, lowHz || MIN_HZ)));
  const highPos = sliderPosition(Math.min(MAX_HZ, Math.max(MIN_HZ, highHz || MAX_HZ)));

  const results = useMemo(() => {
    if (!submittedCriteria) return [];
    const { family: submittedFamily, highHz: submittedHighHz, lowHz: submittedLowHz } = submittedCriteria;
    const hasFrequencyFilter = submittedLowHz !== MIN_HZ || submittedHighHz !== MAX_HZ;
    const q = submittedCriteria.keyword.trim().toLocaleLowerCase();
    const hits: Hit[] = [];
    for (const entry of entries) {
      if (submittedFamily && entry.family !== submittedFamily) continue;
      for (const product of entry.products) {
        const modelMatch = q && product.model.toLocaleLowerCase().includes(q);
        const textualMatch = !q || `${entry.category.name} ${entry.path.join(" ")} ${product.description}`.toLocaleLowerCase().includes(q);
        if (!modelMatch && !textualMatch) continue;
        if (hasFrequencyFilter && !frequencyMatches(product, submittedLowHz, submittedHighHz)) continue;
        const match = matchProduct(entry, product, q);
        if (match) hits.push({ entry, product, ...match });
      }
    }
    const grouped = new Map<string, Hit[]>();
    for (const hit of hits) {
      const key = `${hit.entry.category.code}:${hit.entry.category.id}`;
      grouped.set(key, [...(grouped.get(key) ?? []), hit]);
    }
    return [...grouped.values()].map((items) => items.sort((a, b) => a.rank - b.rank)).sort((a, b) => a[0].rank - b[0].rank || a[0].entry.category.name.localeCompare(b[0].entry.category.name, "zh-CN"));
  }, [submittedCriteria]);
  const pageCount = Math.ceil(results.length / RESULTS_PER_PAGE);
  const pageNumbers = [...new Set([1, currentPage - 1, currentPage, currentPage + 1, pageCount].filter((page) => page >= 1 && page <= pageCount))].sort((a, b) => a - b);
  const visibleResults = results.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE);

  useEffect(() => () => { if (requestTimerRef.current !== null) window.clearTimeout(requestTimerRef.current); }, []);

  useEffect(() => {
    if (!isSearching && submittedCriteria) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      resultsTargetRef.current?.scrollIntoView({ behavior, block: "start" });
    }
  }, [isSearching, submittedCriteria]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (invalid) { setError("请输入 9 kHz–300 GHz 范围内的有效频率，并确保起始频率不大于截止频率。"); return; }
    if (requestTimerRef.current !== null) window.clearTimeout(requestTimerRef.current);
    const criteria = { keyword: keyword.trim(), family, lowHz, highHz };
    setError(""); setCurrentPage(1); setIsSearching(true); setAreFiltersOpen(false);
    requestTimerRef.current = window.setTimeout(() => {
      setSubmittedCriteria(criteria);
      setIsSearching(false);
      requestTimerRef.current = null;
    }, 700);
  }

  function resetSearch() {
    if (requestTimerRef.current !== null) window.clearTimeout(requestTimerRef.current);
    requestTimerRef.current = null;
    setIsSearching(false);
    setSubmittedCriteria(null);
    setKeyword(""); setFamily(""); setRange(MIN_HZ, MAX_HZ);
    setCurrentPage(1); setError(""); setAreFiltersOpen(true);
  }

  function setRange(nextLow: number, nextHigh: number, band = "") {
    setLow(parts(nextLow)); setHigh(parts(nextHigh)); setActiveBand(band); setError("");
  }

  function updateInput(which: "low" | "high", value: string) {
    (which === "low" ? setLow : setHigh)((current) => ({ ...current, value }));
    setActiveBand(""); setError("");
  }

  function updateUnit(which: "low" | "high", unit: Unit) {
    const current = which === "low" ? low : high;
    const hz = toHz(current.value, current.unit);
    const converted = Number.isFinite(hz) ? String(Number((hz / UNITS[unit]).toPrecision(6))) : current.value;
    (which === "low" ? setLow : setHigh)({ value: converted, unit });
    setActiveBand(""); setError("");
  }

  return <div className="newsearch-page">
    <PageBanner eyebrow="PRODUCT SEARCH" title="产品搜索" />
    <div className="newsearch-container newsearch-layout">
      <aside className={`newsearch-filter-panel${areFiltersOpen ? " is-open" : " is-collapsed"}`} aria-label="技术参数筛选">
        <div className="newsearch-panel-heading"><div><span><SlidersHorizontal size={17} />技术参数筛选</span><small>组合条件筛选产品目录</small></div><button type="button" className="newsearch-filter-toggle" aria-expanded={areFiltersOpen} aria-controls="newsearch-filter-form" onClick={() => setAreFiltersOpen((open) => !open)}>{areFiltersOpen ? "收起" : "展开"}</button></div>
        <form id="newsearch-filter-form" className="newsearch-filter-form" onSubmit={submit}>
          <section className="newsearch-filter-section"><h2>搜索关键词</h2><div className="newsearch-keyword"><Search size={17} /><input type="search" value={keyword} placeholder="产品名称、型号" aria-label="产品名称或型号" onChange={(event) => setKeyword(event.target.value)} /></div><div className="newsearch-actions"><button type="button" onClick={resetSearch}><RotateCcw size={14} />重置</button><button className="primary" type="submit" disabled={isSearching}>{isSearching ? <span className="newsearch-button-spinner" aria-hidden="true" /> : <Search size={14} />}{isSearching ? "正在搜索" : "搜索产品"}</button></div></section>
          <section className="newsearch-filter-section"><h2>产品系列</h2><SearchSelect className="newsearch-family-select" ariaLabel="产品系列" value={family} options={[{ value: "", label: "全部系列产品" }, ...Object.entries(families).map(([code, label]) => ({ value: label, label: label || code }))]} onChange={setFamily} /></section>
          <section className="newsearch-filter-section"><div className="newsearch-frequency-title"><h2>频率范围</h2><button type="button" onClick={() => setRange(MIN_HZ, MAX_HZ)}>重置频率</button></div>
            <div className="newsearch-frequency-fields"><FrequencyInput label="起始频率" value={low.value} unit={low.unit} invalid={invalid} onValueChange={(value) => updateInput("low", value)} onUnitChange={(unit) => updateUnit("low", unit)} /><FrequencyInput label="截止频率" value={high.value} unit={high.unit} invalid={invalid} onValueChange={(value) => updateInput("high", value)} onUnitChange={(unit) => updateUnit("high", unit)} /></div>
            {error ? <p className="newsearch-error" role="alert">{error}</p> : null}
            <div className="newsearch-log-slider"><div className="newsearch-slider-track"><span style={{ left: `${lowPos / 10}%`, width: `${Math.max(0, highPos - lowPos) / 10}%` }} /></div><input type="range" min="0" max="1000" value={lowPos} aria-label="拖动设置起始频率" onChange={(event) => { const next = sliderFrequency(Number(event.target.value)); setRange(Math.min(next, highHz), highHz); }} /><input type="range" min="0" max="1000" value={highPos} aria-label="拖动设置截止频率" onChange={(event) => { const next = sliderFrequency(Number(event.target.value)); setRange(lowHz, Math.max(next, lowHz)); }} /></div>
            <div className="newsearch-current-range"><span>{formatHz(lowHz)}</span><span>{formatHz(highHz)}</span></div><div className="newsearch-ticks"><span>9 kHz</span><span>1 MHz</span><span>100 MHz</span><span>10 GHz</span><span>300 GHz</span></div>
            <div className="newsearch-quick-title">常用频段快捷选择</div><div className="newsearch-bands">{bands.map(([label, bandLow, bandHigh, range]) => <button type="button" key={label} className={activeBand === label ? "active" : ""} aria-pressed={activeBand === label} onClick={() => setRange(bandLow, bandHigh, label)}>{label}<small>{range}</small></button>)}</div>
          </section>
        </form>
      </aside>

      <main className="newsearch-results" aria-busy={isSearching}>
        <div className="newsearch-results-head"><div><h2>搜索结果</h2><p>{submittedCriteria ? <>找到 <strong>{results.length}</strong> 个产品类别，匹配型号按类别归并展示</> : "设置关键词、类别或频率范围后搜索"}</p></div><Link href="/productcenter">浏览产品中心</Link></div>
        {isSearching ? <div className="newsearch-loading" role="status"><span className="newsearch-loading-spinner" aria-hidden="true" /><strong>正在搜索产品目录</strong><p>正在根据筛选条件匹配产品与型号…</p></div> : submittedCriteria && results.length ? <><div className="newsearch-result-list" ref={resultsTargetRef}>{visibleResults.map((group) => {
          const first = group[0];
          const makeHref = (model: string) => `/productcenter?code=${encodeURIComponent(first.entry.category.code)}&model=${encodeURIComponent(model)}`;
          return <article className="newsearch-result" key={`${first.entry.category.id}-${first.entry.category.code}`}>
            <div className="newsearch-result-top"><Link className="newsearch-result-title" href={makeHref(first.product.model)}>{first.entry.category.name}</Link>{first.exactModelMatch ? <div className="newsearch-badges"><span>型号精确匹配</span></div> : null}</div>
            <p className="newsearch-description">匹配 {group.length} 个相关产品型号</p>
            <SearchModelTable rows={group} makeHref={makeHref} />
          </article>;
        })}</div>{pageCount > 1 ? <nav className="newsearch-pagination" aria-label="搜索结果分页"><span>共 {results.length} 条结果</span><div><button type="button" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}>上一页</button>{pageNumbers.map((page, index) => <span key={page}>{index > 0 && page - pageNumbers[index - 1] > 1 ? <i aria-hidden="true">…</i> : null}<button type="button" className={currentPage === page ? "active" : undefined} aria-current={currentPage === page ? "page" : undefined} onClick={() => setCurrentPage(page)}>{page}</button></span>)}<button type="button" disabled={currentPage === pageCount} onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}>下一页</button></div></nav> : null}</> : submittedCriteria ? <div className="newsearch-empty" ref={resultsTargetRef}><strong>未找到匹配产品</strong><p>可以尝试更换关键词、一级类别或放宽频率范围。</p></div> : <div className="newsearch-empty"><strong>搜索产品目录</strong><p>支持按产品名称、型号、产品类别和频率范围组合筛选。</p></div>}
      </main>
    </div>
  </div>;
}
