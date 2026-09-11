/* Old Hengda navigation taxonomy with the interaction model of the React Raco header. */
/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { hengdaNavGroups as navGroups } from './hengdaNavigation';

function Chevron() {
  return <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>;
}

export function HengdaSiteHeader({ solid = false }: { solid?: boolean }) {
  const pathname = usePathname() ?? '';
  const isCurrent = (section: string) => {
    if (section === '/productcenter' && pathname.startsWith('/products/')) return true;
    return pathname === section || pathname.startsWith(`${section}/`);
  };

  return <>
    <header id="navbar" className={`fixed left-0 top-0 z-50 w-full ${solid ? 'scrolled' : ''}`}>
      <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="/" className="flex shrink-0 items-center" aria-label="恒达微波首页">
            <img src="/sites/www-racodf-com-3880565d/shared/home/logo.png" alt="恒达微波" className="logo-white h-10 w-auto lg:h-11" />
            <img src="/sites/www-racodf-com-3880565d/shared/home/logo-dark.jpg" alt="恒达微波" className="logo-color hidden h-10 w-auto lg:h-11" />
          </Link>
          <nav className="hidden items-center gap-5 text-[15px] font-medium lg:flex xl:gap-7" aria-label="主导航">
            <Link
              href="/"
              className={`py-6 transition-colors hover:text-primary${isCurrent('/') ? ' nav-link-active' : ''}`}
              aria-current={isCurrent('/') ? 'page' : undefined}
            >
              首页
            </Link>
            {navGroups.map((group) => <div key={group.label} className="group relative py-6">
              <Link
                href={"href" in group ? group.href : group.links[0][1]}
                className={`flex items-center gap-1 transition-colors hover:text-primary${isCurrent(group.section) ? ' nav-link-active' : ''}`}
                aria-current={isCurrent(group.section) ? 'page' : undefined}
              >
                {group.label}<Chevron />
              </Link>
              <div className="nav-dropdown invisible absolute left-1/2 top-full w-44 rounded-lg bg-white py-2 opacity-0 shadow-dropdown transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {group.links.map(([label, href]) => <Link key={label} href={href} className="block px-5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary">{label}</Link>)}
              </div>
            </div>)}
            <Link href="/#contact" className="py-6 transition-colors hover:text-primary">联系我们</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://www.hengdamw.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 items-center justify-center gap-1.5 px-1 text-sm font-medium transition-colors hover:text-primary lg:h-auto lg:w-auto lg:px-0"
              aria-label="在新标签页打开恒达微波英文站"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 0 0 18M12 3a14 14 0 0 1 0 18" /></svg>
              <span>EN</span>
            </a>
            <Link href="/search" className="flex h-9 w-9 items-center justify-center transition-colors hover:text-primary lg:h-auto lg:w-auto" aria-label="进入产品搜索">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
            </Link>
            <Link href="/#contact" className="hidden h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-dark lg:inline-flex">业务咨询</Link>
            <button id="menu-toggle" type="button" className="p-1 lg:hidden" aria-label="打开菜单"><svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          </div>
        </div>
      </div>
    </header>
    <div id="menu-mask" className="fixed inset-0 z-[60] bg-gray-900/40 opacity-0 transition-opacity duration-300 lg:hidden" />
    <aside id="mobile-menu" className="fixed right-0 top-0 z-[70] h-full w-[min(86vw,360px)] translate-x-full overflow-y-auto bg-white text-gray-800 shadow-2xl transition-transform duration-300 lg:hidden">
      <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5"><span className="font-semibold text-gray-900">导航菜单</span><button id="menu-close" type="button" className="p-2 text-2xl" aria-label="关闭菜单">×</button></div>
      <nav className="px-5 py-4" aria-label="移动端导航">
        <Link
          href="/"
          className={`block border-b border-gray-100 py-3 font-medium${isCurrent('/') ? ' nav-link-active' : ''}`}
          aria-current={isCurrent('/') ? 'page' : undefined}
        >
          首页
        </Link>
        {navGroups.map((group) => <details key={group.label} className="border-b border-gray-100"><summary className={`flex cursor-pointer list-none items-center justify-between py-3 font-medium${isCurrent(group.section) ? ' nav-link-active' : ''}`} aria-current={isCurrent(group.section) ? 'page' : undefined}><span>{group.label}</span><Chevron /></summary><div className="flex flex-col gap-1 pb-3 pl-3 text-gray-600">{group.links.map(([label, href]) => <Link key={label} href={href} className="py-2">{label}</Link>)}</div></details>)}
        <Link href="/#contact" className="block border-b border-gray-100 py-3 font-medium">联系我们</Link>
        <Link href="/#contact" className="mt-6 flex h-12 items-center justify-center rounded-md bg-primary font-medium text-white transition-colors hover:bg-primary-dark">业务咨询</Link>
      </nav>
    </aside>
  </>;
}
