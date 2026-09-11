/* Original image sizing is preserved for visual fidelity. */
/* eslint-disable @next/next/no-img-element */
export function SiteHeader() {
  return (<>
<header id="navbar" className="fixed top-0 left-0 w-full z-50">
<div className="max-w-container mx-auto px-5 md:px-10 lg:px-16">
<div className="flex items-center justify-between h-16 lg:h-[72px]">

<div className="flex items-center shrink-0">
<a href="#hero" className="flex items-center" aria-label="雷科防务 首页">
<img src="/sites/www-racodf-com-3880565d/root-8a5edab2/6661d259-logo-racodf-white.png" alt="雷科防务" className="logo-white h-8 lg:h-9 w-auto" />
<img src="/sites/www-racodf-com-3880565d/root-8a5edab2/42d43596-logo-racodf.png" alt="雷科防务" className="logo-color h-8 lg:h-9 w-auto" />
</a>
<span className="block w-px h-7 lg:h-8 bg-current opacity-30 mx-3"></span>
<div className="flex flex-col justify-center items-stretch h-8 lg:h-9 leading-none">
<span className="text-[11px] lg:text-xs opacity-70 extracted-26e45015bd"><span>{"股"}</span><span>{"票"}</span><span>{"代"}</span><span>{"码"}</span></span>
<span className="text-base lg:text-xl font-bold leading-none extracted-cb10d86177"><span>{"0"}</span><span>{"0"}</span><span>{"2"}</span><span>{"4"}</span><span>{"1"}</span><span>{"3"}</span></span>
</div>
</div>

<nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[15px] font-medium" aria-label="主导航">
<a href="#hero" className="py-6 hover:text-primary transition-colors">{"首页"}</a>

<div className="group relative py-6">
<a href="#business" className="flex items-center gap-1 hover:text-primary transition-colors" aria-haspopup="true">{"\n              业务领域\n              "}<svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</a>
<div id="biz-menu" className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-44 bg-white rounded-lg shadow-dropdown opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2"><div className="group/sub relative"><a href="#radar-products" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"雷达系统"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a><div className="absolute left-full top-0 w-52 bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 py-2"><div className="group/cat relative"><a href="#radar-cat-complete" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"雷达整机"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a><div className="absolute left-full top-0 w-52 bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/cat:opacity-100 group-hover/cat:visible group-hover/cat:translate-x-0 transition-all duration-200 py-2"><a href="#radar-bird" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"探鸟雷达"}</a><a href="#radar-antiUAV" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"无人机探测雷达"}</a><a href="#radar-insect" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"探虫雷达"}</a><a href="#radar-sleep" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能睡眠看护仪"}</a><a href="#radar-fall" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能跌倒检测仪"}</a></div></div><div className="group/cat relative"><a href="#radar-cat-support" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"雷达配套"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a><div className="absolute left-full top-0 w-52 bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/cat:opacity-100 group-hover/cat:visible group-hover/cat:translate-x-0 transition-all duration-200 py-2"><a href="#radar-sigproc" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"雷达信号处理系列产品"}</a><a href="#radar-simtest" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"雷达仿真测试系列产品"}</a><a href="#radar-tservo" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"雷达天伺馈"}</a></div></div></div></div><div className="group/sub relative"><a href="#satellite-products" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"卫星应用"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a><div className="absolute left-full top-0 w-52 bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 py-2"><a href="#sat-compute" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"天基智算平台"}</a><a href="#sat-remote-sensing" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"地面遥感数据实时处理平台"}</a><a href="#sat-microwave" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"微波矩阵"}</a></div></div><div className="group/sub relative"><a href="#control-products" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能控制"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a><div className="absolute left-full top-0 w-max min-w-[13rem] max-w-xs bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 py-2"><a href="#ctrl-tsn-flexray" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"TSN+FlexRay 智能控制单元"}</a><a href="#ctrl-portable-pc" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"便携式计算机"}</a><a href="#ctrl-soc-redundant" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"基于 SOC 双冗余控制计算机"}</a></div></div><div className="group/sub relative"><a href="#storage-products" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智算存储"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a><div className="absolute left-full top-0 w-max min-w-[13rem] max-w-xs bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 py-2"><a href="#storage-shanhai-module" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"“山海”系列国产智算模组"}</a><a href="#storage-sata-controller" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"eMMC存储器"}</a><a href="#storage-sata-ssd" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"系列化NVMe固态硬盘"}</a></div></div><div className="group/sub relative"><a href="#connected-products" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能网联"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a><div className="absolute left-full top-0 w-max min-w-[13rem] max-w-xs bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 py-2"><a href="#connected-mmwave-tester" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"毫米波雷达测试仪"}</a><a href="#connected-gnss-tester" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"卫星导航测试设备"}</a><a href="#connected-isac-tester" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"通感融合基站测试仪"}</a></div></div></div>
</div>

<div className="group relative py-6">
<a href="#industry" className="flex items-center gap-1 hover:text-primary transition-colors" aria-haspopup="true">{"\n              行业应用\n              "}<svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</a>
<div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-44 bg-white rounded-lg shadow-dropdown opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2 grid grid-cols-1">
<a href="#sol-security" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"国防军工"}</a>
<div className="group/sub relative">
<a href="#sol-airport" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能机场"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a>
<div className="absolute left-full top-0 w-max min-w-[12rem] max-w-xs bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 py-2">
<a href="#sol-airport" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"鸟情探驱管一体化系统"}</a>
<a href="#sol-fod" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"移动式FOD探测系统"}</a>
</div>
</div>
<a href="#sol-satellite" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"卫星应用"}</a>
<div className="group/sub relative">
<a href="#sol-testing" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能测试"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a>
<div className="absolute left-full top-0 w-max min-w-[12rem] max-w-xs bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 py-2">
<a href="#sol-testing" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"汽车雷达测试系统"}</a>
<a href="#sol-isac-test" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"通感一体化基站内场测试"}</a>
</div>
</div>
<a href="#sol-computing" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能算力"}</a>
<a href="#sol-agriculture" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能农业"}</a>
<a href="#sol-health" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能康养"}</a>
<div className="group/sub relative">
<a href="#sol-mining" className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"智能矿山"}<svg className="w-3 h-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"></path></svg></a>
<div className="absolute left-full top-0 w-max min-w-[12rem] max-w-xs bg-white rounded-lg shadow-dropdown opacity-0 invisible -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200 py-2">
<a href="#sol-mining" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"边坡形变监测系统"}</a>
<a href="#sol-mine-l4" className="block whitespace-nowrap px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"井工矿L4无人驾驶系统"}</a>
</div>
</div>
</div>
</div>

<div className="group relative py-6">
<a href="#strength" className="flex items-center gap-1 hover:text-primary transition-colors" aria-haspopup="true">{"\n              企业实力\n              "}<svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</a>
<div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-36 bg-white rounded-lg shadow-dropdown opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2">
<a href="#strength-rd-block" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"研发能力"}</a>
<a href="#strength-prod-block" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"生产能力"}</a>
</div>
</div>

<div className="group relative py-6" data-zh-only="">
<a href="#news" className="flex items-center gap-1 hover:text-primary transition-colors" aria-haspopup="true">{"\n              新闻资讯\n              "}<svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</a>
<div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-36 bg-white rounded-lg shadow-dropdown opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2">
<a href="#news" data-news-category="公司新闻" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"公司新闻"}</a>
<a href="#news" data-news-category="媒体报道" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"媒体报道"}</a>
<a href="#news" data-news-category="行业资讯" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"行业资讯"}</a>
<a href="#news" data-news-category="学术展会" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"学术展会"}</a>
<a href="#news" data-news-category="电子报" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"电子报"}</a>
<a href="#news" className="insight-nav-link block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"行业洞察"}</a>
</div>
</div>

<div className="group relative py-6">
<a href="#service" className="flex items-center gap-1 hover:text-primary transition-colors" aria-haspopup="true">{"\n              服务支持\n              "}<svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</a>
<div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-36 bg-white rounded-lg shadow-dropdown opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2">
<a href="#service-downloads" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"资料下载"}</a>
<a href="#service-sales" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"销售网络"}</a>
<a href="#service-quality" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"质量控制"}</a>
<a href="#service-commitment" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"服务承诺"}</a>
<a href="#service-faq" className="faq-nav-link block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"常见问题"}</a>
</div>
</div>

<div className="group relative py-6">
<button className="flex items-center gap-1 hover:text-primary transition-colors" aria-haspopup="true" type="button">{"\n              投资者关系\n              "}<svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</button>
<div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-36 bg-white rounded-lg shadow-dropdown opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2">
<a href="http://www.szse.cn/certificate/individual/index.html?code=002413" target="_blank" rel="noopener" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"公司行情"}</a>
<a href="https://www.szse.cn/certificate/individual/index.html?code=002413" target="_blank" rel="noopener" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"投资公告"}</a>
<a href="http://irm.cninfo.com.cn/ircs/index" target="_blank" rel="noopener" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"互动交流"}</a>
</div>
</div>

<div className="group relative py-6">
<a href="#about-profile" className="flex items-center gap-1 hover:text-primary transition-colors" aria-haspopup="true">{"\n              走进雷科\n              "}<svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</a>
<div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full w-40 bg-white rounded-lg shadow-dropdown opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2">
<a href="#about-profile" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"公司介绍"}</a>
<a href="#about-history" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"发展历程"}</a>
<a href="#about-honor" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"资质荣誉"}</a>
<a href="#about-equipment" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"实验设备"}</a>
<a href="#about-activities" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"公司活动"}</a>
<a href="#about-media" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"媒体宣传"}</a>
<a href="#about-brand" className="brand-nav-link block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"企业品牌"}</a>
<a href="#about-culture" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"企业文化"}</a>
<a href="#about-hr" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"人力资源"}</a>
<a href="#contact" className="block px-5 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors">{"联系我们"}</a>
</div>
</div>
</nav>

<div className="flex items-center gap-3 lg:gap-5">
<button className="lang-toggle hidden lg:flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" aria-label="切换语言" type="button">
<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z"></path></svg>
<span className="lang-label">{"EN"}</span>
</button>
<button id="search-btn" type="button" className="hidden lg:flex hover:text-primary transition-colors" aria-label="搜索">
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
</button>
<a href="#contact" className="hidden lg:inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors">{"业务咨询"}</a>

<button id="menu-toggle" className="lg:hidden p-1" aria-label="打开菜单" type="button">
<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>
</div>

<div id="menu-mask" aria-hidden="true"></div>

<div id="mobile-menu" aria-label="移动端导航菜单">
<div className="flex items-center justify-between h-16 px-5 border-b border-gray-200">
<span className="text-lg font-semibold">{"导航菜单"}</span>
<button id="menu-close" className="p-1" aria-label="关闭菜单" type="button">
<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6l12 12M18 6L6 18"></path></svg>
</button>
</div>
<nav className="px-5 py-4 text-[15px]" aria-label="移动端主导航">
<a href="#hero" className="block py-3 font-medium border-b border-gray-100">{"首页"}</a>
<details className="border-b border-gray-100">
<summary className="flex items-center justify-between py-3 font-medium cursor-pointer list-none">
<a href="#business">{"业务领域"}</a>
<svg className="chevron w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</summary>
<div id="biz-menu-m" className="pb-3 pl-3 flex flex-col gap-1 text-gray-600"><details><summary className="flex items-center justify-between py-2 cursor-pointer list-none"><a href="#radar-products" className="text-gray-700">{"雷达系统"}</a><svg className="chevron w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><div className="pl-3 flex flex-col gap-1 text-sm text-gray-500"><details><summary className="flex items-center justify-between py-1.5 cursor-pointer list-none"><a href="#radar-cat-complete" className="text-gray-600">{"雷达整机"}</a><svg className="chevron w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><div className="pl-3 flex flex-col gap-1 text-gray-500"><a href="#radar-bird" className="py-1.5">{"探鸟雷达"}</a><a href="#radar-antiUAV" className="py-1.5">{"无人机探测雷达"}</a><a href="#radar-insect" className="py-1.5">{"探虫雷达"}</a><a href="#radar-sleep" className="py-1.5">{"智能睡眠看护仪"}</a><a href="#radar-fall" className="py-1.5">{"智能跌倒检测仪"}</a></div></details><details><summary className="flex items-center justify-between py-1.5 cursor-pointer list-none"><a href="#radar-cat-support" className="text-gray-600">{"雷达配套"}</a><svg className="chevron w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><div className="pl-3 flex flex-col gap-1 text-gray-500"><a href="#radar-sigproc" className="py-1.5">{"雷达信号处理系列产品"}</a><a href="#radar-simtest" className="py-1.5">{"雷达仿真测试系列产品"}</a><a href="#radar-tservo" className="py-1.5">{"雷达天伺馈"}</a></div></details></div></details><details><summary className="flex items-center justify-between py-2 cursor-pointer list-none"><a href="#satellite-products" className="text-gray-700">{"卫星应用"}</a><svg className="chevron w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><div className="pl-3 flex flex-col gap-1 text-sm text-gray-500"><a href="#sat-compute" className="py-1.5">{"天基智算平台"}</a><a href="#sat-remote-sensing" className="py-1.5">{"地面遥感数据实时处理平台"}</a><a href="#sat-microwave" className="py-1.5">{"微波矩阵"}</a></div></details><details><summary className="flex items-center justify-between py-2 cursor-pointer list-none"><a href="#control-products" className="text-gray-700">{"智能控制"}</a><svg className="chevron w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><div className="pl-3 flex flex-col gap-1 text-sm text-gray-500"><a href="#ctrl-tsn-flexray" className="py-1.5">{"TSN+FlexRay 智能控制单元"}</a><a href="#ctrl-portable-pc" className="py-1.5">{"便携式计算机"}</a><a href="#ctrl-soc-redundant" className="py-1.5">{"基于 SOC 双冗余控制计算机"}</a></div></details><details><summary className="flex items-center justify-between py-2 cursor-pointer list-none"><a href="#storage-products" className="text-gray-700">{"智算存储"}</a><svg className="chevron w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><div className="pl-3 flex flex-col gap-1 text-sm text-gray-500"><a href="#storage-shanhai-module" className="py-1.5">{"“山海”系列国产智算模组"}</a><a href="#storage-sata-controller" className="py-1.5">{"eMMC存储器"}</a><a href="#storage-sata-ssd" className="py-1.5">{"系列化NVMe固态硬盘"}</a></div></details><details><summary className="flex items-center justify-between py-2 cursor-pointer list-none"><a href="#connected-products" className="text-gray-700">{"智能网联"}</a><svg className="chevron w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg></summary><div className="pl-3 flex flex-col gap-1 text-sm text-gray-500"><a href="#connected-mmwave-tester" className="py-1.5">{"毫米波雷达测试仪"}</a><a href="#connected-gnss-tester" className="py-1.5">{"卫星导航测试设备"}</a><a href="#connected-isac-tester" className="py-1.5">{"通感融合基站测试仪"}</a></div></details></div>
</details>
<details className="border-b border-gray-100">
<summary className="flex items-center justify-between py-3 font-medium cursor-pointer list-none">
<a href="#industry">{"行业应用"}</a>
<svg className="chevron w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</summary>
<div className="pb-3 pl-3 flex flex-col gap-1 text-gray-600">
<a href="#sol-security" className="py-2">{"国防军工"}</a>
<a href="#sol-airport" className="py-2">{"智能机场"}</a>
<a href="#sol-fod" className="py-1.5 pl-4 text-sm text-gray-500">{"移动式FOD探测系统"}</a>
<a href="#sol-satellite" className="py-2">{"卫星应用"}</a>
<a href="#sol-testing" className="py-2">{"智能测试"}</a>
<a href="#sol-isac-test" className="py-1.5 pl-4 text-sm text-gray-500">{"通感一体化基站内场测试"}</a>
<a href="#sol-computing" className="py-2">{"智能算力"}</a>
<a href="#sol-agriculture" className="py-2">{"智能农业"}</a>
<a href="#sol-health" className="py-2">{"智能康养"}</a>
<a href="#sol-mining" className="py-2">{"智能矿山"}</a>
<a href="#sol-mine-l4" className="py-1.5 pl-4 text-sm text-gray-500">{"井工矿L4无人驾驶系统"}</a>
</div>
</details>
<details className="border-b border-gray-100">
<summary className="flex items-center justify-between py-3 font-medium cursor-pointer">{"\n            企业实力\n            "}<svg className="chevron w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</summary>
<div className="pb-3 pl-3 flex flex-col gap-1 text-gray-600">
<a href="#strength-rd-block" className="py-2">{"研发能力"}</a>
<a href="#strength-prod-block" className="py-2">{"生产能力"}</a>
</div>
</details>
<details className="border-b border-gray-100" data-zh-only="">
<summary className="flex items-center justify-between py-3 font-medium cursor-pointer">{"\n            新闻资讯\n            "}<svg className="chevron w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</summary>
<div className="pb-3 pl-3 flex flex-col gap-1 text-gray-600">
<a href="#news" data-news-category="公司新闻" className="py-2">{"公司新闻"}</a>
<a href="#news" data-news-category="媒体报道" className="py-2">{"媒体报道"}</a>
<a href="#news" data-news-category="行业资讯" className="py-2">{"行业资讯"}</a>
<a href="#news" data-news-category="学术展会" className="py-2">{"学术展会"}</a>
<a href="#news" data-news-category="电子报" className="py-2">{"电子报"}</a>
<a href="#news" className="insight-nav-link py-2">{"行业洞察"}</a>
</div>
</details>
<details className="border-b border-gray-100">
<summary className="flex items-center justify-between py-3 font-medium cursor-pointer list-none">
<a href="#service">{"服务支持"}</a>
<svg className="chevron w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</summary>
<div className="pb-3 pl-3 flex flex-col gap-1 text-gray-600">
<a href="#service-downloads" className="py-2">{"资料下载"}</a>
<a href="#service-sales" className="py-2">{"销售网络"}</a>
<a href="#service-quality" className="py-2">{"质量控制"}</a>
<a href="#service-commitment" className="py-2">{"服务承诺"}</a>
<a href="#service-faq" className="faq-nav-link py-2">{"常见问题"}</a>
</div>
</details>
<details className="border-b border-gray-100">
<summary className="flex items-center justify-between py-3 font-medium cursor-pointer list-none">
<span>{"投资者关系"}</span>
<svg className="chevron w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</summary>
<div className="pb-3 pl-3 flex flex-col gap-1 text-gray-600">
<a href="http://www.szse.cn/certificate/individual/index.html?code=002413" target="_blank" rel="noopener" className="py-2">{"公司行情"}</a>
<a href="https://www.szse.cn/certificate/individual/index.html?code=002413" target="_blank" rel="noopener" className="py-2">{"投资公告"}</a>
<a href="http://irm.cninfo.com.cn/ircs/index" target="_blank" rel="noopener" className="py-2">{"互动交流"}</a>
</div>
</details>
<details className="border-b border-gray-100">
<summary className="flex items-center justify-between py-3 font-medium cursor-pointer">{"\n            走进雷科\n            "}<svg className="chevron w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6l4 4 4-4"></path></svg>
</summary>
<div className="pb-3 pl-3 flex flex-col gap-1 text-gray-600">
<a href="#about-profile" className="py-2">{"公司介绍"}</a>
<a href="#about-history" className="py-2">{"发展历程"}</a>
<a href="#about-honor" className="py-2">{"资质荣誉"}</a>
<a href="#about-equipment" className="py-2">{"实验设备"}</a>
<a href="#about-activities" className="py-2">{"公司活动"}</a>
<a href="#about-media" className="py-2">{"媒体宣传"}</a>
<a href="#about-brand" className="brand-nav-link py-2">{"企业品牌"}</a>
<a href="#about-culture" className="py-2">{"企业文化"}</a>
<a href="#about-hr" className="py-2">{"人力资源"}</a>
<a href="#contact" className="py-2">{"联系我们"}</a>
</div>
</details>
<a href="#contact" className="mt-6 flex items-center justify-center h-12 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors">{"业务咨询"}</a>
<button className="lang-toggle mt-4 flex items-center justify-center gap-1.5 w-full h-11 rounded border border-gray-200 text-sm font-medium text-gray-700 hover:text-primary hover:border-primary transition-colors" type="button">
<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z"></path></svg>
<span className="lang-label">{"English"}</span>
</button>
</nav>
</div>
</header>
  </>);
}

