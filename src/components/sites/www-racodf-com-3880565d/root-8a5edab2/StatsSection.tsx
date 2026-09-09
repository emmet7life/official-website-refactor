/* Original image sizing is preserved for visual fidelity. */
/* eslint-disable @next/next/no-img-element */
export function StatsSection() {
  return (<>
<section id="stats" className="relative overflow-hidden bg-ink py-14 md:py-20">
<div className="absolute inset-0 hero-grid opacity-40 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
<div className="relative z-10 max-w-container mx-auto px-5 md:px-10 lg:px-16">
<div id="stats-grid" className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-0 md:divide-x md:divide-white/10 text-center"><div className="fade-in-up px-2 md:px-8"><p className="font-semibold text-white tracking-tight leading-none text-4xl md:text-5xl lg:text-[56px]"><span data-counter="3">{"3"}</span><span className="stat-unit text-primary-mid text-2xl md:text-3xl font-medium align-top ml-1">{"项"}</span></p><p className="mt-3.5 text-xs md:text-sm text-gray-400">{"国家科学技术奖二等奖"}</p></div><div className="fade-in-up px-2 md:px-8"><p className="font-semibold text-white tracking-tight leading-none text-4xl md:text-5xl lg:text-[56px]"><span data-counter="636">{"636"}</span><span className="stat-unit text-primary-mid text-2xl md:text-3xl font-medium align-top ml-1">{"项"}</span></p><p className="mt-3.5 text-xs md:text-sm text-gray-400">{"专利及软件著作权"}</p></div><div className="fade-in-up px-2 md:px-8"><p className="font-semibold text-white tracking-tight leading-none text-4xl md:text-5xl lg:text-[56px]"><span data-counter="6">{"6"}</span><span className="stat-unit text-primary-mid text-2xl md:text-3xl font-medium align-top ml-1">{"家"}</span></p><p className="mt-3.5 text-xs md:text-sm text-gray-400">{"专业子公司"}</p></div><div className="fade-in-up px-2 md:px-8"><p className="font-semibold text-white tracking-tight leading-none text-4xl md:text-5xl lg:text-[56px]"><span data-counter="2">{"2"}</span><span className="stat-unit text-primary-mid text-2xl md:text-3xl font-medium align-top ml-1">{"个"}</span></p><p className="mt-3.5 text-xs md:text-sm text-gray-400">{"智能化生产基地"}</p></div></div>
</div>
</section>
  </>);
}
