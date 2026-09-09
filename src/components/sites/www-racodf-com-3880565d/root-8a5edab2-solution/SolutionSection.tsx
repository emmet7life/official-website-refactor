const solutions = [
  ['sol-security', '国防军工', '面向国防军工场景，提供雷达探测、信号处理、智能控制与综合保障解决方案。', '/sites/www-racodf-com-3880565d/root-8a5edab2/e6edf4f9-industry-security.jpg'],
  ['sol-airport', '智能机场', '围绕机场鸟情探测、FOD 探测和安全运行，提供鸟情探驱管一体化系统与移动式探测方案。', '/sites/www-racodf-com-3880565d/root-8a5edab2/251a2d67-industry-airport.jpg'],
  ['sol-fod', '移动式FOD探测系统', '面向机场跑道异物探测，提供移动式FOD探测系统，支持快速巡检与风险预警。', '/sites/www-racodf-com-3880565d/root-8a5edab2/251a2d67-industry-airport.jpg'],
  ['sol-satellite', '卫星应用', '面向遥感、导航、通信与空天信息处理场景，提供天地一体化卫星应用解决方案。', '/sites/www-racodf-com-3880565d/root-8a5edab2/7d2be933-industry-satellite.jpg'],
  ['sol-testing', '智能测试', '面向汽车雷达和通感融合基站，提供覆盖研发、测试、验证的智能测试系统。', '/sites/www-racodf-com-3880565d/root-8a5edab2/145b4f83-industry-testing.jpg'],
  ['sol-isac-test', '通感一体化基站内场测试', '提供通感一体化基站的内场测试、指标验证和系统联调服务，支持产品快速交付。', '/sites/www-racodf-com-3880565d/root-8a5edab2/145b4f83-industry-testing.jpg'],
  ['sol-computing', '智能算力', '以国产化计算平台、存储和数据处理技术支撑行业智能算力基础设施建设。', '/sites/www-racodf-com-3880565d/root-8a5edab2/1f3f8cad-industry-computing.jpg'],
  ['sol-agriculture', '智能农业', '以毫米波雷达和智能感知技术服务农情监测、病虫害预警与智慧农业管理。', '/sites/www-racodf-com-3880565d/root-8a5edab2/651986e0-industry-agriculture.jpg'],
  ['sol-health', '智能康养', '通过非接触式雷达感知和智能分析，为养老机构与家庭提供健康监护和安全守护。', '/sites/www-racodf-com-3880565d/root-8a5edab2/04defeff-industry-health.jpg'],
  ['sol-mining', '智能矿山', '融合边坡形变监测、无人驾驶和智能感知技术，提升矿山生产安全与作业效率。', '/sites/www-racodf-com-3880565d/root-8a5edab2/5683786c-industry-mining.jpg'],
  ['sol-mine-l4', '井工矿L4无人驾驶系统', '面向井工矿运输作业，提供L4级无人驾驶与智能调度系统，提升矿区作业安全和效率。', '/sites/www-racodf-com-3880565d/root-8a5edab2/5683786c-industry-mining.jpg'],
] as const;

export function SolutionSection() {
  return <section id="solution" className="bg-gray-50 py-16 md:py-24 lg:py-28">
    <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
      <div className="mb-12 max-w-2xl lg:mb-16"><div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" /><h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-4xl">行业应用</h2><p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">将核心技术转化为面向八大行业的成熟解决方案，已在项目中落地应用</p></div>
      <div className="space-y-8">{solutions.map(([id,title,description,image]) => <article id={id} key={id} className="scroll-mt-24 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:grid md:grid-cols-5">
        <img src={image} alt={`${title}解决方案`} className="h-56 w-full object-cover md:col-span-2 md:h-full" />
        <div className="p-6 md:col-span-3 md:p-8"><p className="text-sm font-medium text-primary">行业应用 / {title}</p><h3 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h3><p className="mt-4 text-base leading-8 text-gray-600">{description}</p></div>
      </article>)}</div>
    </div>
  </section>;
}
