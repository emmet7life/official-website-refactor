/* Footer migrated from indexH.html. */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const root = "/sites/www-racodf-com-3880565d/shared/home/";
const groups = [
  ["关于恒达", [["公司介绍", "/about/intro"], ["公司历程", "/about/history"], ["资质荣誉", "/about/honor"], ["实验设备", "/about/equipment"], ["公司活动", "/about/activity"], ["媒体宣传", "/about/media"]]],
  ["新闻中心", [["公司新闻", "/news/company"], ["学术展会", "/news/exhibition"], ["行业资讯", "/news/industry"], ["媒体报道", "/news/media"], ["电子报", "/news/enews"]]],
  ["产品中心", [["天线系列", "/products/antenna"], ["馈线系列", "/products/feeder"], ["伺服转台系列", "/products/servo"], ["分系统集成系列", "/products/subsystem"], ["来图加工系列", "/products/custom"]]],
  ["客户服务", [["质量控制", "/service/quality"], ["服务承诺", "/service/promise"]]],
  ["技术资料", [["微波知识", "/tech/knowledge"], ["论文下载", "/tech/papers"]]],
] as const;

export function HengdaHomeFooter() {
  return <footer className="bg-[#07133c] px-5 pb-10 pt-16 text-white md:px-10 lg:px-16">
    <div className="mx-auto grid max-w-container gap-10 lg:grid-cols-[200px_1fr_280px] lg:gap-16">
      <div>
        <Link href="/" className="inline-flex"><img src={`${root}logo.png`} alt="恒达微波" className="h-10 w-auto" /></Link>
        <p className="mt-3 max-w-xs text-xs leading-6 text-slate-400">技术领先，实业报国<br />以成为卓越的微波供应商为目标</p>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {groups.map(([title, links]) => <div key={title}>
          <h4 className="mb-4 text-sm font-semibold">{title}</h4>
          {links.map(([label, href]) => <Link key={label} href={href} className="mb-2.5 block text-xs text-slate-400 transition hover:text-white">{label}</Link>)}
        </div>)}
      </div>
      <div>
        <h4 className="mb-4 text-sm font-semibold">联系我们</h4>
        <div className="flex gap-3">
          {[["qr-gongzhong.png", "官方公众号"], ["qr-xiaochengxu.jpg", "官方小程序"], ["qr-xiaoda.jpg", "官方AI小达"]].map(([source, label]) => <div key={label} className="text-center"><img src={`${root}${source}`} alt={label} className="h-[74px] w-[74px] rounded bg-white p-0.5" /><span className="mt-2 block text-[11px] text-slate-400">{label}</span></div>)}
        </div>
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-container border-t border-white/10 pt-6 text-center text-xs text-slate-500">© 2026 西安恒达微波技术开发有限公司 版权所有</div>
  </footer>;
}
