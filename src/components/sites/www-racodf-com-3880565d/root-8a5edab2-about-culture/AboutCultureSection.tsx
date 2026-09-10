const cultureGroups = [
  { title: '企业文化', items: [['使命', '技术先进、实业报国'], ['愿景', '成为微波行业的标杆企业'], ['目标', '以成为卓越的微波供应商为目标'], ['价值观', '目标导向、诚信务实\n团结互助、勤奋专业']] },
  { title: '组织管理', items: [['组织', '市场引领、产品主站\n项目特战、支撑卷入'], ['人才', '创造价值，勇于承担\n专业追求，善于学习'], ['KPI', '考核衔接战略\n辅导激励员工']] },
] as const;

export function AboutCultureSection() {
  return (<div id="about-culture" className="about-part scroll-mt-20">
    <div className="fade-in-up mb-12 max-w-2xl"><div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" /><h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">企业文化</h3></div>
    {cultureGroups.map((group) => (<section key={group.title} className="fade-in-up mb-12 last:mb-0 lg:mb-16" aria-labelledby={`culture-${group.title}`}>
      <div className="mb-6 flex items-center gap-3"><span className="h-[3px] w-8 bg-primary" aria-hidden="true" /><h4 id={`culture-${group.title}`} className="text-xl font-semibold text-gray-900 md:text-2xl">{group.title}</h4></div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{group.items.map(([title, description]) => (<article key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary-mid hover:shadow-card-hover lg:p-7"><p className="text-2xl font-semibold text-primary md:text-3xl">{title}</p><p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-600">{description}</p></article>))}</div>
    </section>))}
    <section className="fade-in-up" aria-labelledby="culture-service"><div className="mb-6 flex items-center gap-3"><span className="h-[3px] w-8 bg-primary" aria-hidden="true" /><h4 id="culture-service" className="text-xl font-semibold text-gray-900 md:text-2xl">服务理念与商业模式</h4></div><div className="grid gap-4 md:grid-cols-3">{['四海合作', '天下共赢', '供应链管理'].map((item) => (<article key={item} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary-mid hover:shadow-card-hover lg:p-7"><p className="text-2xl font-semibold text-primary md:text-3xl">{item}</p></article>))}</div></section>
  </div>);
}
