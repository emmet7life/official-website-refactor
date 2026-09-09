'use client';

/* Original certificate images are retained for visual fidelity. */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

type Honor = {
  image: string;
  title: string;
  category: string;
  accent?: boolean;
};

const honors: Honor[] = [
  { image: 'honor-aaaaa-innovation.jpg', title: '高新技术企业创新能力评价 AAAAA 级', category: '资质评级', accent: true },
  { image: 'honor-space-rendezvous-radar.jpg', title: '载人航天交会对接微波雷达研制突出贡献单位', category: '行业奖项' },
  { image: 'honor-shaanxi-trademark.jpg', title: '陕西省著名商标', category: '品牌荣誉' },
  { image: 'honor-cmmi3.jpg', title: 'CMMI 成熟度 3 级认证', category: '体系认证', accent: true },
  { image: 'honor-bj-software-core.jpg', title: '2023 北京软件核心竞争力企业', category: '国家级资质', accent: true },
  { image: 'honor-top100-2013.jpg', title: '2013中关村高成长企业 TOP100', category: '成长荣誉' },
  { image: 'honor-rising-2012.jpg', title: '2012 中关村新锐企业十强', category: '成长荣誉' },
  { image: 'honor-innovative-sme.jpg', title: '北京市“创新型”中小企业', category: '资质认定', accent: true },
];

const imageRoot = '/sites/www-racodf-com-3880565d/shared/about/';

function ZoomIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
    </svg>
  );
}

export function AboutHonorSection() {
  const [selected, setSelected] = useState<Honor | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('overflow-hidden');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [selected]);

  return (
    <div id="about-honor" className="about-part scroll-mt-20">
      <div className="fade-in-up mb-10 max-w-2xl lg:mb-12">
        <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" />
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">资质荣誉</h3>
      </div>

      <div id="honor-grid" className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {honors.map((honor) => (
          <button
            key={honor.image}
            type="button"
            onClick={() => setSelected(honor)}
            className="group text-left"
            aria-label={`查看${honor.title}`}
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary-mid group-hover:shadow-card-hover">
              <img
                src={`${imageRoot}${honor.image}`}
                alt={honor.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded bg-white/90 text-gray-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <ZoomIcon />
              </span>
            </div>
            <div className="mt-3 flex min-h-[2.75rem] items-start justify-between gap-2">
              <p className="line-clamp-2 text-sm leading-snug text-gray-700">{honor.title}</p>
              <span className={`shrink-0 rounded-sm px-2 py-0.5 text-xs ${honor.accent ? 'bg-primary-light text-primary' : 'bg-gray-100 text-gray-700'}`}>
                {honor.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-gray-900/70 px-5 py-10"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div className="relative flex max-h-full max-w-4xl flex-col items-center rounded-lg bg-white p-4 shadow-2xl md:p-6" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="关闭图片预览"
              className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-2xl leading-none text-gray-600 shadow hover:bg-gray-100 hover:text-gray-900"
            >
              ×
            </button>
            <img src={`${imageRoot}${selected.image}`} alt={selected.title} className="max-h-[75vh] w-auto max-w-full object-contain" />
            <p className="mt-4 text-center text-sm text-gray-700 md:text-base">{selected.title}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
