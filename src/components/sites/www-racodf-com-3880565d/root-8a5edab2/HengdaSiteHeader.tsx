/* Old Hengda navigation taxonomy with the interaction model of the React Raco header. */
/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Globe2 } from 'lucide-react';
import { hengdaNavGroups as navGroups } from './hengdaNavigation';

function Chevron() {
  return <svg className="marketing-nav-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>;
}

export function HengdaSiteHeader({ solid = false }: { solid?: boolean }) {
  const pathname = usePathname() ?? '';
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const isCurrent = (section: string) => {
    if (section === '/productcenter' && pathname.startsWith('/products/')) return true;
    return pathname === section || pathname.startsWith(`${section}/`);
  };

  return <>
    <header id="navbar" className={`marketing-navbar fixed left-0 top-0 z-50 w-full ${solid ? 'marketing-navbar-solid scrolled' : ''}`}>
      <div className="marketing-nav-inner">
        <div className="marketing-nav-row">
          <Link href="/" className="flex shrink-0 items-center" aria-label="恒达微波首页">
            <img src="/sites/www-racodf-com-3880565d/shared/home/logo.png" alt="恒达微波" className="marketing-nav-logo marketing-nav-logo-light" />
            <img src="/sites/www-racodf-com-3880565d/shared/home/logo-black-text.png" alt="恒达微波" className="marketing-nav-logo marketing-nav-logo-dark" />
          </Link>
          <nav className="marketing-nav-links" aria-label="主导航">
            <Link
              href="/"
              className={`marketing-nav-link${isCurrent('/') ? ' nav-link-active' : ''}`}
              aria-current={isCurrent('/') ? 'page' : undefined}
            >
              首页
            </Link>
            {navGroups.map((group) => <div
              key={group.label}
              className={`marketing-nav-group${openGroup === group.label ? ' is-open' : ''}`}
              onMouseEnter={() => setOpenGroup(group.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <Link
                href={"href" in group ? group.href : group.links[0][1]}
                className={`marketing-nav-link marketing-nav-link-with-chevron${isCurrent(group.section) ? ' nav-link-active' : ''}`}
                aria-current={isCurrent(group.section) ? 'page' : undefined}
                onFocus={() => setOpenGroup(group.label)}
              >
                {group.label}<Chevron />
              </Link>
              <div className="marketing-nav-dropdown">
                {group.links.map(([label, href]) => <Link
                  key={label}
                  href={href}
                  className="marketing-nav-dropdown-link"
                  onClick={(event) => {
                    setOpenGroup(null);
                    event.currentTarget.blur();
                  }}
                >
                  {label}
                </Link>)}
              </div>
            </div>)}
          </nav>
          <div className="marketing-nav-actions">
            <a href="https://www.hengdamw.com/" target="_blank" rel="noopener noreferrer" className="marketing-language" aria-label="访问英文官网">
              <Globe2 aria-hidden="true" />
              <span>EN</span>
            </a>
            <Link href="/search" className="marketing-search" aria-label="进入产品搜索">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              <span>产品搜索</span>
            </Link>
            <button id="menu-toggle" type="button" className="marketing-menu-toggle" aria-label="打开菜单"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          </div>
        </div>
      </div>
    </header>
    <div id="menu-mask" className="marketing-menu-mask" />
    <aside id="mobile-menu" className="marketing-mobile-menu">
      <nav aria-label="移动端导航">
        <Link href="/" className={isCurrent('/') ? 'nav-link-active' : ''} aria-current={isCurrent('/') ? 'page' : undefined}>首页</Link>
        {navGroups.map((group) => <div key={group.label}>
          <Link href={"href" in group ? group.href : group.links[0][1]} className={isCurrent(group.section) ? 'nav-link-active' : ''} aria-current={isCurrent(group.section) ? 'page' : undefined}>{group.label}</Link>
          {group.links.map(([label, href]) => <Link key={label} href={href} className="marketing-mobile-sub">{label}</Link>)}
        </div>)}
      </nav>
    </aside>
  </>;
}
