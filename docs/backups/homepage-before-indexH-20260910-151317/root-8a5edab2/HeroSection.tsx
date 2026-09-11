"use client";

import { useEffect, useState } from "react";

/* Original image sizing is preserved for visual fidelity. */
/* eslint-disable @next/next/no-img-element */
export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerVersion, setTimerVersion] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % 3);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [isPaused, timerVersion]);

  function selectSlide(index: number) {
    setActiveIndex((index + 3) % 3);
    setTimerVersion((version) => version + 1);
  }

  return (<>
<section onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} id="hero" className="relative h-screen min-h-[560px] w-full overflow-hidden bg-ink">
<div id="hero-slides">
<div className={activeIndex === 0 ? "hero-slide is-active" : "hero-slide"} data-index="0" aria-hidden={activeIndex !== 0} inert={activeIndex !== 0}>
<img src="/sites/www-racodf-com-3880565d/root-8a5edab2/93e050a9-hero-antiuav-radar.jpg" alt="高精度雷达感知，洞察空天" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
<div className="absolute inset-0 hero-scrim"></div>
<div className="absolute inset-0 hero-grid"></div>
<div className="hero-glow absolute -top-32 -left-24 w-[560px] h-[560px] pointer-events-none"></div>
<div className="relative z-10 max-w-container mx-auto px-5 md:px-10 lg:px-16 h-full flex flex-col justify-center pt-16 lg:pt-[72px]">
<span className="h-anim inline-flex items-center gap-3 mb-5">
<span className="h-px w-8 bg-primary-mid"></span>
<span className="font-mono text-primary-mid text-xs md:text-sm tracking-[0.25em] uppercase">{"雷达系统 · RADAR"}</span>
</span>
<h1 className="h-anim d1 text-4xl md:text-6xl lg:text-[64px] font-semibold text-white leading-[1.06] tracking-tight lg:whitespace-nowrap">{"高精度雷达感知，洞察空天"}</h1>
<p className="h-anim d2 text-base md:text-lg text-gray-300 mt-6 max-w-2xl leading-relaxed">{"自主研发新体制雷达产品体系，覆盖探测、跟踪、成像全场景，构筑空天地一体化感知能力。"}</p>
<div className="h-anim d3 flex flex-wrap gap-4 mt-10">
<a href="#business" className="group inline-flex items-center gap-2 h-[54px] px-9 rounded-md bg-primary text-white text-base font-medium shadow-glow hover:bg-primary-dark transition-all">{"探索业务领域"}<svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></a>
<a href="#contact" className="inline-flex items-center h-[54px] px-9 rounded-md border border-white/25 text-white text-base font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-colors">{"联系我们"}</a>
</div>
</div>
</div>
<div className={activeIndex === 1 ? "hero-slide is-active" : "hero-slide"} data-index="1" aria-hidden={activeIndex !== 1} inert={activeIndex !== 1}>
<img src="/sites/www-racodf-com-3880565d/root-8a5edab2/ea5e4988-hero-space.jpg" alt="立足遥感主业，拓展商业航天" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
<div className="absolute inset-0 hero-scrim"></div>
<div className="absolute inset-0 hero-grid"></div>
<div className="hero-glow absolute -top-32 -left-24 w-[560px] h-[560px] pointer-events-none"></div>
<div className="relative z-10 max-w-container mx-auto px-5 md:px-10 lg:px-16 h-full flex flex-col justify-center pt-16 lg:pt-[72px]">
<span className="h-anim inline-flex items-center gap-3 mb-5">
<span className="h-px w-8 bg-primary-mid"></span>
<span className="font-mono text-primary-mid text-xs md:text-sm tracking-[0.25em] uppercase">{"卫星应用 · AEROSPACE"}</span>
</span>
<h1 className="h-anim d1 text-4xl md:text-6xl lg:text-[64px] font-semibold text-white leading-[1.06] tracking-tight lg:whitespace-nowrap">{"立足遥感主业，拓展商业航天"}</h1>
<p className="h-anim d2 text-base md:text-lg text-gray-300 mt-6 max-w-2xl leading-relaxed">{"面向商业航天与卫星应用，提供卫星遥感、导航、通信产品与行业应用，赋能空天产业发展。"}</p>
<div className="h-anim d3 flex flex-wrap gap-4 mt-10">
<a href="#business" className="group inline-flex items-center gap-2 h-[54px] px-9 rounded-md bg-primary text-white text-base font-medium shadow-glow hover:bg-primary-dark transition-all">{"探索业务领域"}<svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></a>
<a href="#contact" className="inline-flex items-center h-[54px] px-9 rounded-md border border-white/25 text-white text-base font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-colors">{"联系我们"}</a>
</div>
</div>
</div>
<div className={activeIndex === 2 ? "hero-slide is-active" : "hero-slide"} data-index="2" aria-hidden={activeIndex !== 2} inert={activeIndex !== 2}>
<img src="/sites/www-racodf-com-3880565d/root-8a5edab2/e617faa3-hero-chip.jpg" alt="自主芯片，智能赋能" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
<div className="absolute inset-0 hero-scrim"></div>
<div className="absolute inset-0 hero-grid"></div>
<div className="hero-glow absolute -top-32 -left-24 w-[560px] h-[560px] pointer-events-none"></div>
<div className="relative z-10 max-w-container mx-auto px-5 md:px-10 lg:px-16 h-full flex flex-col justify-center pt-16 lg:pt-[72px]">
<span className="h-anim inline-flex items-center gap-3 mb-5">
<span className="h-px w-8 bg-primary-mid"></span>
<span className="font-mono text-primary-mid text-xs md:text-sm tracking-[0.25em] uppercase">{"智算存储 · CHIP"}</span>
</span>
<h1 className="h-anim d1 text-4xl md:text-6xl lg:text-[64px] font-semibold text-white leading-[1.06] tracking-tight lg:whitespace-nowrap">{"自主芯片，智能赋能"}</h1>
<p className="h-anim d2 text-base md:text-lg text-gray-300 mt-6 max-w-2xl leading-relaxed">{"以自主可控的芯片与电路设计能力，打造高可靠存储与智能计算底座，驱动产业数字化转型。"}</p>
<div className="h-anim d3 flex flex-wrap gap-4 mt-10">
<a href="#business" className="group inline-flex items-center gap-2 h-[54px] px-9 rounded-md bg-primary text-white text-base font-medium shadow-glow hover:bg-primary-dark transition-all">{"探索业务领域"}<svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></a>
<a href="#contact" className="inline-flex items-center h-[54px] px-9 rounded-md border border-white/25 text-white text-base font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-colors">{"联系我们"}</a>
</div>
</div>
</div></div>

<button onClick={() => selectSlide(activeIndex - 1)} id="hero-prev" className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="上一张" type="button">
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 6l-6 6 6 6"></path></svg>
</button>
<button onClick={() => selectSlide(activeIndex + 1)} id="hero-next" className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="下一张" type="button">
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 6l6 6-6 6"></path></svg>
</button>

<div id="hero-dots" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5"><button className={activeIndex === 0 ? "hero-dot is-active" : "hero-dot"} onClick={() => selectSlide(0)} aria-current={activeIndex === 0 ? "true" : undefined} aria-label="切换到第 1 张" type="button"></button><button className={activeIndex === 1 ? "hero-dot is-active" : "hero-dot"} onClick={() => selectSlide(1)} aria-current={activeIndex === 1 ? "true" : undefined} aria-label="切换到第 2 张" type="button"></button><button className={activeIndex === 2 ? "hero-dot is-active" : "hero-dot"} onClick={() => selectSlide(2)} aria-current={activeIndex === 2 ? "true" : undefined} aria-label="切换到第 3 张" type="button"></button></div>
</section>
  </>);
}
