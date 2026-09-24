/* Footer migrated from indexH.html. */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { hengdaNavGroups } from "./hengdaNavigation";

const root = "/sites/www-racodf-com-3880565d/shared/home/";

export function HengdaHomeFooter() {
  return <footer className="hengda-marketing-footer bg-[#07133c] px-5 pb-10 pt-[60px] text-white md:px-10 lg:px-16">
    <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[220px_1fr_252px] lg:gap-10 xl:gap-12">
      <div>
        <Link href="/" className="inline-flex"><img src={`${root}logo.png`} alt="恒达微波" className="h-10 w-auto" /></Link>
        <p className="mt-3 max-w-none text-xs leading-5 text-white/75">技术领先，实业报国<br /><span className="lg:whitespace-nowrap">以成为卓越的微波供应商为目标</span></p>
      </div>
      <div className="hengda-footer-navigation">
        {hengdaNavGroups.filter((group) => group.label !== "联系我们").map((group) => <div key={group.label}>
          <h4 className="mb-4 text-sm font-semibold">{group.label}</h4>
          {group.links.map(([label, href]) => <Link key={label} href={href} className="mb-2.5 block text-xs text-white/75 transition hover:text-white">{label}</Link>)}
        </div>)}
      </div>
      <div>
        <h4 className="mb-4 text-sm font-semibold">联系我们</h4>
        <div className="flex gap-3">
          {[["qr-gongzhong.png", "官方公众号"], ["qr-xiaochengxu.jpg", "官方小程序"], ["qr-xiaoda.jpg", "官方AI小达"]].map(([source, label]) => <div key={label} className="text-center"><img src={`${root}${source}`} alt={label} className="h-[74px] w-[74px] rounded bg-white p-0.5" /><span className="mt-2 block text-[11px] text-slate-400">{label}</span></div>)}
        </div>
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-[1400px] border-t border-white/10 pt-6 text-center text-xs text-white/60">© 2026 西安恒达微波技术开发有限公司 版权所有</div>
  </footer>;
}
