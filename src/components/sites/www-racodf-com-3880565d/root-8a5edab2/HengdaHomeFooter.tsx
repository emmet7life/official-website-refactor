/* Footer migrated from indexH.html. */
/* eslint-disable @next/next/no-img-element */
const root = '/sites/www-racodf-com-3880565d/shared/home/';
const groups = [
  ['关于恒达', [['公司介绍', '#about-profile'], ['公司历程', '#about-history'], ['资质荣誉', '#about-honor'], ['实验设备', '#about-equipment'], ['公司活动', '#about-activities'], ['媒体宣传', '#about-media']]],
  ['新闻中心', [['公司新闻', '#news'], ['学术展会', '#news'], ['行业资讯', '#news'], ['媒体报道', '#news'], ['视频号内容', '#news']]],
  ['产品中心', [['天线系列', '#catalog'], ['馈线系列', '#catalog'], ['伺服转台系列', '#catalog'], ['分系统集成系列', '#catalog'], ['来图加工系列', '#catalog']]],
  ['客户服务', [['质量控制', '#service-quality'], ['服务承诺', '#service-commitment']]],
  ['技术资料', [['微波知识', '#service-downloads'], ['论文下载', '#service-downloads']]],
] as const;

export function HengdaHomeFooter() {
  return <footer className="bg-[#07133c] px-5 pb-10 pt-16 text-white md:px-10 lg:px-16"><div className="mx-auto grid max-w-container gap-10 lg:grid-cols-[200px_1fr_280px] lg:gap-16"><div><a href="#hero" className="inline-flex"><img src={`${root}logo.png`} alt="恒达微波" className="h-10 w-auto" /></a><p className="mt-3 max-w-xs text-xs leading-6 text-slate-400">技术领先，实业报国<br />以成为卓越的微波供应商为目标</p></div><div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">{groups.map(([title, links]) => <div key={title}><h4 className="mb-4 text-sm font-semibold">{title}</h4>{links.map(([label, href]) => <a key={label} href={href} className="mb-2.5 block text-xs text-slate-400 transition hover:text-white">{label}</a>)}</div>)}</div><div><h4 className="mb-4 text-sm font-semibold">联系我们</h4><div className="flex gap-3"><div className="text-center"><img src={`${root}qr-gongzhong.png`} alt="官方公众号" className="h-[74px] w-[74px] rounded bg-white p-0.5" /><span className="mt-2 block text-[11px] text-slate-400">官方公众号</span></div><div className="text-center"><img src={`${root}qr-xiaochengxu.jpg`} alt="官方小程序" className="h-[74px] w-[74px] rounded bg-white p-0.5" /><span className="mt-2 block text-[11px] text-slate-400">官方小程序</span></div><div className="text-center"><img src={`${root}qr-xiaoda.jpg`} alt="官方AI小达" className="h-[74px] w-[74px] rounded bg-white p-0.5" /><span className="mt-2 block text-[11px] text-slate-400">官方AI小达</span></div></div></div></div><div className="mx-auto mt-10 max-w-container border-t border-white/10 pt-6 text-center text-xs text-slate-500">© 2026 西安恒达微波技术开发有限公司 版权所有</div></footer>;
}
