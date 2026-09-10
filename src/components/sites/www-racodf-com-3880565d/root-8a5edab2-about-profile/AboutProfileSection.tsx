/* Original image sizing is preserved for visual fidelity. */
/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from 'react';

const profileParagraphs = [
  '2020年1月，西安恒达微波技术开发有限公司（以下简称为“恒达微波”或“公司”）正式加入雷科防务，成为雷科防务全资子公司（股票代码002413）。',
  '恒达微波创立于1993年，总部位于西安国家民用航天产业基地，长期致力于微波毫米波“天、馈、伺、车、源”产品及系统的研制。公司在西安国家民用航天基地建有17000平方米科研生产中心，在北京、南京、成都、石家庄设有办事处，重点服务于国内外著名院所及上市公司。',
  '恒达微波产品广泛应用于航空、航天、航海、气象、安检、警戒、检测、卫星通讯、无人机通讯、汽车电子、太赫兹、5G等领域。公司曾多次成功承担国家重大项目研制工作，多款产品成功替代进口，并通过鉴定定型列装。',
  '恒达微波作为“国家高新技术企业”，取得了GJB、环境管理体系认证、职业健康安全管理体系认证以及“货物进出口许可证”等资质证书。公司品牌标识“恒达微波”荣获西安市、陕西省著名商标。',
  '恒达微波是国家重大航天项目“神舟”、“天宫”和“天舟”等系列工程的重要研制配套单位，被《陕西日报》等媒体誉为“国家重大航天工程中的陕西元素”，屡获业内嘉奖。',
  '近年来恒达微波获取的部分资质和荣誉有：“毫米波与太赫兹技术北京市重点实验室（西安分部）”、“纳税信用A级纳税人”、“陕西省中小企业创新研发中心”、“西安市科技企业小巨人领军企业”、“陕西省专精特新中小企业”、“守合同重信用企业”、“科技型中心企业”、“工人先锋号”、“和谐企业”、“西安市微波毫米波系统工程技术研究中心”等。',
  '在“产学研”方面，利用公司20多年的微波行业经验和技术创新，先后与北京理工大学、西北大学、西北工业大学、西安电子科技大学、西安工业大学、西安邮电大学等院校建立了“工程实践教育中心”，同时按照“恒达卓越工程师培养计划”的通用标准和行业标准，积极为工程实践教育中心创造条件，并充分利用此平台，主动开展产学研项目的研究，以推动行业新技术及新工艺的创新发展，实现优势互补和资源共享，达到共赢的目的。',
] as const;

const companyHonors = [
  '国家高新技术企业',
  '毫米波与太赫兹技术北京市重点实验室（西安分部）',
  '纳税信用A级纳税人',
  '陕西省中小企业创新研发中心',
  '西安市科技企业小巨人领军企业',
  '陕西省专精特新中小企业',
  '守合同重信用企业',
  '科技型中心企业',
  '工人先锋号',
  '和谐企业',
  '西安市微波毫米波系统工程技术研究中心',
  'GJB质量管理体系认证',
  '环境管理体系认证',
  '职业健康安全管理体系认证',
  '货物进出口许可证',
  '西安市著名商标、陕西省著名商标',
] as const;

const tabs = [
  { label: '公司介绍', href: '#about-profile', active: true },
  { label: '发展历程', href: '#about-history', active: false },
  { label: '资质荣誉', href: '#about-honor', active: false },
  { label: '企业文化', href: '#about-culture', active: false },
  { label: '人力资源', href: '#about-hr', active: false },
] as const;

export function AboutProfileSection({ children }: { children?: ReactNode }) {
  return (
    <section id="about" className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
        <div>
          <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" />
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-4xl">走进雷科</h2>
        </div>

        <nav className="mt-8 mb-10 border-b border-gray-200 lg:mb-14" aria-label="走进雷科">
          <div className="flex flex-wrap gap-x-8 gap-y-1">
            {tabs.map((tab) => (
              <a
                key={tab.label}
                href={tab.href}
                data-about-part={tab.href.slice(1)}
                className={tab.active
                  ? '-mb-px border-b-2 border-primary px-1 py-3 text-sm font-medium text-primary md:text-base'
                  : '-mb-px border-b-2 border-transparent px-1 py-3 text-sm font-medium text-gray-500 transition-colors hover:text-primary md:text-base'}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </nav>

        <div id="about-profile" className="about-part">
          <div id="about-profile-text" className="about-profile-copy mx-auto max-w-5xl space-y-6 text-sm leading-8 text-gray-500 md:text-base">
            <img src="/sites/www-racodf-com-3880565d/shared/about/hengda-company-leike.jpg" alt="恒达微波公司介绍" loading="lazy" className="mx-auto h-auto max-h-56 w-full max-w-3xl rounded-lg object-contain" />
            {profileParagraphs.slice(0, 3).map((paragraph) => <p key={paragraph} className="text-justify indent-8">{paragraph}</p>)}
            <img src="/sites/www-racodf-com-3880565d/shared/about/hengda-company-hengda2.jpg" alt="恒达微波科研生产中心" loading="lazy" className="mx-auto h-auto max-h-56 w-full max-w-3xl rounded-lg object-contain" />
            {profileParagraphs.slice(3).map((paragraph, index) => (
              <p key={paragraph} className="text-justify indent-8">
                {paragraph}
                {index === 0 ? <img src="/sites/www-racodf-com-3880565d/shared/about/hengda-company-logo.jpg" alt="恒达微波品牌标识" loading="lazy" className="ml-1 inline-block h-5 w-auto align-middle" /> : null}
              </p>
            ))}
            <div className="pt-4">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-gradient-to-b from-primary to-primary-mid" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">荣誉资质</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {companyHonors.map((honor) => (
                  <li key={honor} className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{honor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
