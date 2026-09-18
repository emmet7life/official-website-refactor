"use client";

/* Homepage content migrated from the approved Hengda indexH.html layout. */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
const homeRoot = '/sites/www-racodf-com-3880565d/shared/home/';
const products = [
  ['product-antenna.png', '天线系列产品', '/productcenter'],
  ['product-waveguide.png', '无源系列产品', '/productcenter'],
  ['product-active.png', '有源系列产品', '/productcenter'],
  ['product-servo.png', '伺服转台系列产品', '/productcenter'],
  ['product-subsystem.png', '分系统类产品', '/productcenter'],
  ['product-custom.png', '来图加工系列产品', '/custom-machining'],
] as const;
const stats = [['27', '发明专利'], ['48', '实用新型专利'], ['21', '软件著作权'], ['96', '知识产权']] as const;
const capabilities = [
  ['1-management.svg', '管理能力', '/capability/management'],
  ['2-test.svg', '测试能力', '/capability/test'],
  ['3-inspection.svg', '试验、检验能力', '/capability/inspection'],
  ['4-tech.svg', '技术能力', '/capability/tech'],
  ['5-smart.svg', '智能制造', '/capability/smart'],
] as const;

function ContactIcon({ name }: { name: '电话' | '传真' | '地址' | '邮箱' }) {
  const isFax = name === '传真';
  return <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border-2 border-white">
    <img src={`${homeRoot}contact-icons/${name}.svg`} alt="" aria-hidden="true" className={isFax ? 'h-[22px] w-[22px]' : 'h-5 w-5'} />
  </span>;
}

function HengdaProductsSection() {
  return <section id="catalog" className="products-section">
    <div className="products-inner">
      <h2 className="products-title animate">产品领域</h2>
      <div className="products-grid">
        {products.map(([image, title, href], index) => <Link
          key={title}
          href={href}
          className={`product-card animate ${index === 1 || index === 4 ? 'stagger-1' : index === 2 ? 'stagger-2' : ''}`}
        >
          <img src={`${homeRoot}${image}`} alt={title} className="product-img" />
          <span>{title}</span>
        </Link>)}
      </div>
    </div>
  </section>;
}

function HengdaCapabilitiesSection() {
  return <section className="capabilities-section">
    <div className="products-inner">
      <h2 className="products-title animate">能力介绍</h2>
      <div className="capabilities-grid">
        {capabilities.map(([icon, title, href], index) => <Link key={title} href={href} className={`capability-card animate ${index === 1 || index === 3 ? 'stagger-1' : index === 2 || index === 4 ? 'stagger-2' : ''}`}>
          <span className="capability-icon"><img src={`${homeRoot}capability-icons/${icon}`} alt="" aria-hidden="true" /></span>
          <span className="capability-title">{title}</span>
        </Link>)}
      </div>
    </div>
  </section>;
}

export function HengdaHomeSection() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const inquiryTypeRef = useRef<HTMLSelectElement>(null);
  const inquiryMessageRef = useRef<HTMLTextAreaElement>(null);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const onScroll = () => { const y = window.scrollY; if (bannerRef.current && y < window.innerHeight) bannerRef.current.style.transform = `translateY(${y * 0.35}px) scale(${1 + y * 0.0002})`; };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); } }), { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.animate').forEach((element) => observer.observe(element));
    const params = new URLSearchParams(window.location.search);
    const inquiry = params.get("inquiry");
    const model = params.get("model");
    const category = params.get("category");
    if (inquiry === "spec" && model) {
      if (inquiryTypeRef.current) inquiryTypeRef.current.value = "获取规格书";
      if (inquiryMessageRef.current) inquiryMessageRef.current.value = `获取规格书：${model}\n请与我联系，并告知获取规格书所需资料。`;
    } else if (inquiry === "selection" && category) {
      if (inquiryTypeRef.current) inquiryTypeRef.current.value = "获取规格书";
      if (inquiryMessageRef.current) inquiryMessageRef.current.value = `选型咨询：${category}\n应用场景、频段、接口和安装条件待补充，请安排业务人员联系。`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);
  return <>
    <section id="hero" className="relative flex h-screen min-h-[720px] items-center overflow-hidden bg-[#06133f] pt-20 text-white">
      <div ref={bannerRef} className="absolute inset-0 bg-cover bg-center opacity-80 will-change-transform" style={{ backgroundImage: `url(${homeRoot}banner-bg.png)` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06133f]/90 via-[#06133f]/55 to-transparent" />
      <div className="relative mx-auto w-full max-w-[920px] px-5 py-24 pt-[70px] text-center md:px-10"><p className="hidden">西安恒达微波技术开发有限公司</p><h1 className="hero-title">技术领先，实业报国</h1><p className="hero-subtitle">以成为卓越的微波供应商为目标</p><div className="flex flex-wrap justify-center gap-[18px]"><a href="#catalog" className="rounded-lg bg-[#1d66d5] px-[30px] py-3 text-[15px] font-medium text-white shadow-lg transition hover:bg-[#2b7de0]">产品领域</a><Link href="/contact" className="rounded-lg bg-white px-[30px] py-3 text-[15px] font-medium text-gray-900 transition hover:bg-sky-50">联系我们</Link></div></div>
    </section>
    <section id="stats" className="bg-[#051137] px-5 py-[70px] md:px-10"><div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-x-10 gap-y-10 md:gap-x-[140px]">{stats.map(([number, label], index) => <div key={label} className={`patent-item animate ${index === 1 ? 'stagger-1' : index === 2 ? 'stagger-2' : index === 3 ? 'stagger-3' : ''} text-center`}><div className="patent-number text-[44px] font-bold leading-none tabular-nums text-[#1d66d5] md:text-[58px]" data-counter={number}>0</div><div className="mt-[10px] text-[15px] text-white/75">{label}</div></div>)}</div></section>
    <HengdaProductsSection />
    <section className="company bg-[#132045] px-5 py-[84px] text-white md:px-10 lg:px-16"><div className="mx-auto max-w-[900px] animate"><h2 className="products-title">公司概况</h2><div className="space-y-[14px] text-justify text-[15px] leading-[1.9] text-white/75 [text-indent:2em]"><p>西安恒达微波技术开发有限公司创立于1993年，总部位于西安国家民用航天产业基地。在西安建有17000平方米科研生产中心，在江苏省东台市建有10000平方米生产基地，在北京、南京、成都、石家庄设有办事处，员工500余人。</p><p>公司长期致力于微波毫米波“天、馈、伺、车、源、智”的研发生产，多次承担国家重大项目研制工作，多款产品成功替代进口，并通过鉴定定型列装。产品广泛应用于航空、航天、航海、气象、安检、警戒、检测、卫星通信、无人机通信、汽车电子、太赫兹、5G等领域。自2003年开始承担了神舟五号、神舟八号至神舟二十三号、天宫一号二号、天舟系列等国家重大航天项目的研制任务，目前，正在参与“神舟”后续型号、货运飞船、探月工程、火星探测工程及星载项目产品的研制工作。</p><p>公司建立并通过了GB/T19001和GJB9001C质量管理体系认证。研制的“微波元器件”、“微波天线”分别荣获陕西省和西安市“名牌产品”称号。是陕西省首批认定的“高新技术企业”，并多次荣获“先进科技企业”奖；陕西省中小企业创新研发中心，西安市企业小巨人领军企业。是全国微波学会、天线学会、军事微波、电磁兼容专业委员会会员单位。获得27项发明专利，48项实用新型专利，21项软件著作权。是国家级专精特新“小巨人”企业。</p></div><img src={`${homeRoot}company-building.jpg`} alt="恒达微波公司大楼" className="mt-10 w-full rounded-2xl border border-white/[0.08] object-cover shadow-[0_12px_44px_rgba(0,0,0,0.35)]" /><div className="mt-[34px] text-center"><Link href="/about/intro" className="inline-flex rounded-md bg-[#1d66d5] px-[30px] py-3 text-[15px] font-medium text-white transition hover:bg-[#4a8eff]">了解更多</Link></div></div></section>
    <HengdaCapabilitiesSection />
    <section id="contact" className="relative overflow-hidden bg-[#07133c] px-5 py-20 text-white md:px-10 lg:px-16"><div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${homeRoot}business-bg.png)` }} /><div className="relative mx-auto max-w-container"><h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">业务咨询</h2><div className="mb-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"><div className="flex gap-3"><ContactIcon name="电话" /><div><p className="font-medium">电话</p><a href="tel:02985266226" className="mt-1 block text-sm leading-6 text-slate-300">029-8526 6226 / 8524 1794</a></div></div><div className="flex gap-3"><ContactIcon name="传真" /><div><p className="font-medium">传真</p><p className="mt-1 text-sm leading-6 text-slate-300">029-8524 8049</p></div></div><div className="flex gap-3"><ContactIcon name="地址" /><div><p className="font-medium">地址</p><p className="mt-1 text-sm leading-6 text-slate-300">陕西省西安市航天基地飞天路485号</p></div></div><div className="flex gap-3"><ContactIcon name="邮箱" /><div><p className="font-medium">邮箱</p><a href="mailto:hd@hdmicrowave.com" className="mt-1 block text-sm leading-6 text-slate-300">hd@hdmicrowave.com</a></div></div></div><form className="mx-auto max-w-xl rounded-2xl bg-white p-6 text-gray-800 shadow-2xl md:p-8" onSubmit={(event) => { event.preventDefault(); event.currentTarget.reset(); setSubmitted(true); window.setTimeout(() => setSubmitted(false), 2800); }}><h3 className="mb-6 text-xl font-semibold">业务咨询表单</h3><div className="space-y-4"><label className="block text-sm text-gray-600">姓名<input required name="name" placeholder="请输入姓名" className="mt-1.5 w-full rounded-lg border border-gray-200 px-3.5 py-3 outline-none transition focus:border-[#1d66d5] focus:ring-2 focus:ring-blue-100" /></label><label className="block text-sm text-gray-600">联系电话<input required type="tel" name="phone" placeholder="请输入联系电话" className="mt-1.5 w-full rounded-lg border border-gray-200 px-3.5 py-3 outline-none transition focus:border-[#1d66d5] focus:ring-2 focus:ring-blue-100" /></label><label className="block text-sm text-gray-600">咨询产品类型<select ref={inquiryTypeRef} required name="product" defaultValue="" className="mt-1.5 w-full rounded-lg border border-gray-200 bg-white px-3.5 py-3 outline-none transition focus:border-[#1d66d5] focus:ring-2 focus:ring-blue-100"><option value="" disabled>请选择产品类型</option><option>获取规格书</option>{['天线系列产品', '无源系列产品', '有源系列产品', '伺服转台系列产品', '分系统类产品', '来图加工系列产品', '其他'].map((title) => <option key={title}>{title}</option>)}</select></label><label className="block text-sm text-gray-600">咨询内容<textarea ref={inquiryMessageRef} required name="content" placeholder="请输入咨询内容" className="mt-1.5 min-h-24 w-full resize-y rounded-lg border border-gray-200 px-3.5 py-3 outline-none transition focus:border-[#1d66d5] focus:ring-2 focus:ring-blue-100" /></label><button type="submit" className="consult-submit w-full rounded-lg bg-[#1d66d5] py-3.5 text-sm font-medium text-white transition">提交</button></div>{submitted ? <div className="fixed bottom-8 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-gray-900/95 px-7 py-3.5 text-sm text-white shadow-xl">提交成功，我们将尽快与您联系！</div> : null}</form></div></section>
  </>;
}



