"use client";

import Image from "next/image";
import Link from "next/link";
import { RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";

import { ProductModal, SpecificationInquiryModal } from "@/components/productcenter/ProductDetailDialogs";
import type { Product } from "@/components/productcenter/catalog-data";
import {
  defaultFilters,
  searchCategories,
  searchProducts,
  type NumericFilter,
  type OptionFilter,
  type SearchCategory,
  type SearchCategoryId,
  type SearchFilter,
  type SearchProduct,
  type SearchSpecValue,
} from "./search-data";

type SelectedCategory = SearchCategoryId | "all";
type RangeSelection = Record<string, [number, number]>;
type OptionSelection = Record<string, string[]>;

type SearchQuery = {
  category: SelectedCategory;
  keyword: string;
  ranges: RangeSelection;
  options: OptionSelection;
};

type SearchPageProps = {
  initialCategory?: string;
  initialKeyword?: string;
};

function isNumericFilter(filter: SearchFilter): filter is NumericFilter {
  return "min" in filter;
}

function isOptionFilter(filter: SearchFilter): filter is OptionFilter {
  return "options" in filter;
}

function filtersForCategory(category: SelectedCategory) {
  const categoryFilters = searchCategories.find((item) => item.id === category)?.fields ?? [];
  return [...defaultFilters, ...categoryFilters].slice(0, 10);
}

function filterId(category: SelectedCategory, key: string) {
  return `${category}:${key}`;
}

function boundsToPercent(value: number, filter: NumericFilter) {
  return ((value - filter.min) / (filter.max - filter.min)) * 100;
}

function formatSpecValue(value: SearchSpecValue, unit: string) {
  if (typeof value === "string") return value;
  if (typeof value === "number") return `${value}${unit}`;
  return `${value.min}${unit} - ${value.max}${unit}`;
}

function numericValueMatches(value: SearchSpecValue, selected: [number, number]) {
  if (typeof value === "string") return true;
  if (typeof value === "number") return value >= selected[0] && value <= selected[1];
  return value.max >= selected[0] && value.min <= selected[1];
}

function formatNumber(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/\.?0+$/, "");
}

function toDetailProduct(product: SearchProduct, category: SearchCategory): Product {
  const frequency = product.specs.frequency;
  const interfaceValue = [product.specs.connector, product.specs.controlInterface, product.specs.communicationInterface]
    .find((value): value is string => typeof value === "string");
  const gainValue = [product.specs.gain, product.specs.receiveGain, product.specs.transmitGain].find(
    (value): value is number => typeof value === "number",
  );

  return {
    model: product.model,
    frequency: frequency === undefined ? "—" : formatSpecValue(frequency, ""),
    gain: gainValue === undefined ? "—" : String(gainValue),
    interface: interfaceValue ?? "项目定制",
    bandwidth: typeof frequency === "object" ? formatNumber(frequency.max - frequency.min) : "—",
    axis:
      product.specs.axisRatio !== undefined
        ? formatSpecValue(product.specs.axisRatio, "°")
        : product.specs.pointingAccuracy !== undefined
          ? formatSpecValue(product.specs.pointingAccuracy, "°")
          : "—",
    description: `${category.label}搜索结果演示数据。${product.name}（${product.model}）支持按项目需求配置完整技术参数，并可通过规格书申请获取详细选型资料。`,
  };
}

function RangeControl({
  filter,
  value,
  onChange,
}: {
  filter: NumericFilter;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}) {
  const left = boundsToPercent(value[0], filter);
  const right = boundsToPercent(value[1], filter);

  return (
    <div className="search-range">
      <div className="search-range-slider">
        <div className="search-range-track" aria-hidden="true">
          <span style={{ left: `${left}%`, width: `${Math.max(right - left, 0)}%` }} />
        </div>
        <input
          type="range"
          min={filter.min}
          max={filter.max}
          step={filter.step}
          value={value[0]}
          aria-label={`${filter.label}下限`}
          onChange={(event) => {
            const next = Math.min(Number(event.target.value), value[1]);
            onChange([next, value[1]]);
          }}
        />
        <input
          type="range"
          min={filter.min}
          max={filter.max}
          step={filter.step}
          value={value[1]}
          aria-label={`${filter.label}上限`}
          onChange={(event) => {
            const next = Math.max(Number(event.target.value), value[0]);
            onChange([value[0], next]);
          }}
        />
      </div>
      <div className="search-range-labels">
        <span>
          {value[0]}
          {filter.unit}
        </span>
        <span>
          {value[1]}
          {filter.unit}
        </span>
      </div>
    </div>
  );
}

export function SearchPage({ initialCategory, initialKeyword }: SearchPageProps) {
  const initialSelectedCategory = searchCategories.find((category) => category.id === initialCategory)?.id ?? "all";
  const initialQuery: SearchQuery = {
    category: initialSelectedCategory,
    keyword: initialKeyword?.trim() ?? "",
    ranges: {},
    options: {},
  };
  const shouldSearchOnLoad = initialQuery.category !== "all" || initialQuery.keyword.length > 0;

  const [category, setCategory] = useState<SelectedCategory>(initialSelectedCategory);
  const [keyword, setKeyword] = useState(initialQuery.keyword);
  const [ranges, setRanges] = useState<RangeSelection>({});
  const [options, setOptions] = useState<OptionSelection>({});
  const [submittedQuery, setSubmittedQuery] = useState<SearchQuery | null>(() => (shouldSearchOnLoad ? initialQuery : null));
  const [areFiltersOpen, setAreFiltersOpen] = useState(true);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [inquiryTarget, setInquiryTarget] = useState<string | null>(null);

  const submittedCategory = searchCategories.find((item) => item.id === submittedQuery?.category);
  const visibleFilters = useMemo(() => filtersForCategory(category), [category]);

  const results = useMemo(() => {
    if (!submittedQuery) return [];

    const query = submittedQuery.keyword.trim().toLowerCase();
    const activeFilters = filtersForCategory(submittedQuery.category).map((filter) => ({
      filter,
      id: filterId(submittedQuery.category, filter.key),
    }));

    return searchProducts.filter((product) => {
      if (submittedQuery.category !== "all" && product.category !== submittedQuery.category) return false;

      if (query) {
        const categoryLabel = searchCategories.find((item) => item.id === product.category)?.label ?? "";
        const haystack = `${product.name} ${product.model} ${categoryLabel} ${Object.values(product.specs).join(" ")}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      return activeFilters.every(({ filter, id }) => {
        if (isNumericFilter(filter)) {
          const selected = submittedQuery.ranges[id] ?? [filter.min, filter.max];
          const value = product.specs[filter.key];
          if (value === undefined) return true;
          return numericValueMatches(value, selected);
        }

        if (isOptionFilter(filter)) {
          const selected = submittedQuery.options[id] ?? [];
          if (!selected.length) return true;
          const value = product.specs[filter.key];
          return typeof value === "string" && selected.includes(value);
        }

        return true;
      });
    });
  }, [submittedQuery]);

  const selectedCount =
    (category !== "all" ? 1 : 0) +
    (keyword.trim() ? 1 : 0) +
    visibleFilters.reduce((total, filter) => {
      const id = filterId(category, filter.key);
      if (isNumericFilter(filter)) {
        const selected = ranges[id] ?? [filter.min, filter.max];
        return selected[0] !== filter.min || selected[1] !== filter.max ? total + 1 : total;
      }
      return total + (options[id]?.length ?? 0);
    }, 0);

  function resetFilters() {
    setCategory("all");
    setKeyword("");
    setRanges({});
    setOptions({});
  }

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedQuery({ category, keyword: keyword.trim(), ranges, options });
  }

  function requestSpecification(target: string) {
    setModalProduct(null);
    setInquiryTarget(target);
  }

  return (
    <div className="search-page">
      <section className="search-hero">
        <div className="search-container">
          <p>PRODUCT SEARCH</p>
          <h1>产品选型搜索</h1>
        </div>
      </section>

      <div className="search-container search-body">
        <aside className={`search-filters ${areFiltersOpen ? "is-open" : ""}`} aria-label="技术参数筛选">
          <div className="search-filter-head">
            <div>
              <span>
                <SlidersHorizontal size={17} aria-hidden="true" />
                技术参数筛选
              </span>
              <small>{selectedCount ? `已选择 ${selectedCount} 项，点击搜索后应用` : "按手册指标精选"}</small>
            </div>
            <button
              type="button"
              className="search-filter-toggle"
              aria-expanded={areFiltersOpen}
              aria-controls="search-filter-body"
              onClick={() => setAreFiltersOpen((current) => !current)}
            >
              {areFiltersOpen ? "折叠" : "展开"}
            </button>
          </div>

          <form onSubmit={submitSearch}>
            <div id="search-filter-body" className="search-filter-body">
              <section aria-label="搜索关键词">
                <h2>搜索关键词</h2>
                <div className="search-keyword">
                  <Search size={18} aria-hidden="true" />
                  <label className="sr-only" htmlFor="product-search-input">
                    搜索产品
                  </label>
                  <input
                    id="product-search-input"
                    type="search"
                    value={keyword}
                    placeholder="输入产品名称、型号或关键技术指标"
                    onChange={(event) => setKeyword(event.target.value)}
                  />
                </div>
                <div className="search-filter-actions">
                  <button type="button" onClick={resetFilters}>
                    <RotateCcw size={14} aria-hidden="true" />
                    重置
                  </button>
                  <button type="submit" className="search-submit">
                    <Search size={14} aria-hidden="true" />
                    搜索
                  </button>
                </div>
              </section>

              <section aria-label="一级产品类别">
                <h2>一级类别</h2>
                <div className="search-category-list">
                  <button
                    type="button"
                    className={category === "all" ? "active" : undefined}
                    onClick={() => setCategory("all")}
                    aria-pressed={category === "all"}
                  >
                    全部产品
                  </button>
                  {searchCategories.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={category === item.id ? "active" : undefined}
                      onClick={() => setCategory(item.id)}
                      aria-pressed={category === item.id}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </section>

              {visibleFilters.map((filter) => {
                const id = filterId(category, filter.key);
                return (
                  <section key={id} aria-label={filter.label}>
                    <h2>{filter.label}</h2>
                    {isNumericFilter(filter) ? (
                      <RangeControl
                        filter={filter}
                        value={ranges[id] ?? [filter.min, filter.max]}
                        onChange={(value) => setRanges((current) => ({ ...current, [id]: value }))}
                      />
                    ) : (
                      <div className="search-option-list">
                        {filter.options.map((option) => {
                          const selectedOptions = options[id] ?? [];
                          const isSelected = selectedOptions.includes(option);
                          return (
                            <button
                              key={option}
                              type="button"
                              className={isSelected ? "active" : undefined}
                              aria-pressed={isSelected}
                              onClick={() =>
                                setOptions((current) => {
                                  const next = isSelected
                                    ? selectedOptions.filter((item) => item !== option)
                                    : [...selectedOptions, option];
                                  return { ...current, [id]: next };
                                })
                              }
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </form>
        </aside>

        <main className="search-results-area">
          <div className="search-results-toolbar">
            <div>
              <h2>{submittedCategory?.label ?? "全部产品"}</h2>
              <p>
                {submittedQuery ? (
                  <>
                    共匹配 <strong>{results.length}</strong> 个产品
                  </>
                ) : (
                  "等待提交搜索条件"
                )}
              </p>
            </div>
            {submittedCategory ? (
              <Link href={submittedCategory.href}>查看产品中心分类</Link>
            ) : (
              <Link href="/productcenter">进入产品中心</Link>
            )}
          </div>

          {submittedQuery && results.length ? (
            <div className="search-result-grid">
              {results.map((product) => {
                const productCategory = searchCategories.find((item) => item.id === product.category);
                const metrics = (productCategory?.fields ?? [])
                  .filter((filter) => product.specs[filter.key] !== undefined)
                  .slice(0, 4);

                return (
                  <button
                    key={product.id}
                    type="button"
                    className="search-result-card"
                    onClick={() => productCategory && setModalProduct(toDetailProduct(product, productCategory))}
                  >
                    <span className="search-result-image">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1279px) 44vw, 290px"
                      />
                    </span>
                    <span className="search-result-copy">
                      <small>{productCategory?.label}</small>
                      <strong>{product.name}</strong>
                      <em>{product.model}</em>
                      <span className="search-result-specs">
                        {metrics.map((filter) => (
                          <span key={filter.key}>
                            {filter.label}：{formatSpecValue(product.specs[filter.key], isNumericFilter(filter) ? filter.unit : "")}
                          </span>
                        ))}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          ) : submittedQuery ? (
            <div className="search-empty">
              <strong>未找到匹配产品</strong>
              <p>请尝试放宽频率区间、清除离散选项，或更换关键词。</p>
            </div>
          ) : (
            <div className="search-empty">
              <strong>请设定筛选条件</strong>
              <p>选择类别、输入关键词或调整技术参数后，点击“搜索”查看匹配产品。</p>
            </div>
          )}
        </main>
      </div>

      {modalProduct ? <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} onRequestSpec={requestSpecification} /> : null}
      {inquiryTarget ? <SpecificationInquiryModal target={inquiryTarget} onClose={() => setInquiryTarget(null)} /> : null}
    </div>
  );
}
