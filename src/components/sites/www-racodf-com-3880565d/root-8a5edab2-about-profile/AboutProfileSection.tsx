/* Original image sizing is preserved for visual fidelity. */
/* eslint-disable @next/next/no-img-element */

const profileParagraphs = [
  '北京雷科防务科技股份有限公司（简称"雷科防务"）是深圳证券交易所上市公司（股票代码 002413），注册资本 13 亿余元，员工 1800 余人。雷科防务下属雷科电子、雷科空天、爱科特、奇维科技、恒达微波、尧云科技等公司，专业从事雷达系统、卫星应用、智能控制、安全存储、智能网联等业务。',
  '公司坚持自主创新，掌握多项核心技术，下属公司是国家高新技术企业，拥有国家级博士后科研工作站、北京市企业技术中心、四川省企业技术中心，并入选国家级专精特新"小巨人"企业。公司在西安、成都设立生产基地，采用先进生产工艺，建有智能化加工中心。',
  '雷科防务践行"国家、团队、拼搏、创新"企业精神，坚持创新引领、融合发展，长期致力于服务国防军工和国民经济建设领域，为客户提供一流的产品、解决方案及服务。',
] as const;

type Company = {
  name: string;
  href?: string;
};

const coreCompanies: Company[] = [
  { name: '北京理工雷科电子信息技术有限公司', href: 'http://www.racobit.com' },
  { name: '北京理工雷科空天信息技术有限公司' },
  { name: '成都爱科特科技发展有限公司' },
  { name: '西安奇维科技有限公司' },
  { name: '西安恒达微波技术开发有限公司', href: 'http://www.hdmicrowave.com' },
  { name: '尧云科技（西安）有限公司', href: 'http://www.yottac.cn' },
];

const investeeCompanies: Company[] = [
  { name: '苏州博海创业微系统有限公司', href: 'http://www.bmsltcc.com/web' },
  { name: '苏州理工雷科传感技术有限公司', href: 'https://www.racosensor.com' },
  { name: '理工雷科智途（北京）科技有限公司', href: 'http://www.racoits.com' },
  { name: '北方雷科（安徽）科技有限公司', href: 'http://www.or-tech.cn' },
  { name: '北京理工睿行电子科技有限公司', href: 'https://www.ruixtech.com' },
  { name: '奥瑞思智能科技（天津）有限公司' },
];

const tabs = [
  { label: '集团概况', href: '#about-profile', active: true },
  { label: '发展历程', href: '#about-history', active: false },
  { label: '资质荣誉', href: '#about-honors', active: false },
  { label: '企业文化', href: '#about-culture', active: false },
  { label: '人力资源', href: '#about-hr', active: false },
] as const;

function CompanyGroup({ title, companies }: { title: string; companies: Company[] }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span className="h-5 w-1 rounded-full bg-gradient-to-b from-primary to-primary-mid" aria-hidden="true" />
        <h3 className="text-base font-semibold text-gray-900 md:text-lg">{title}</h3>
      </div>
      <div className="flex flex-col items-start gap-2.5">
        {companies.map((company) => {
          const content = (
            <>
              {company.name}
              {company.href ? (
                <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              ) : null}
            </>
          );

          return company.href ? (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-700 transition-colors hover:border-primary-mid hover:text-primary"
            >
              {content}
            </a>
          ) : (
            <span
              key={company.name}
              className="inline-flex items-center gap-1.5 rounded border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-700"
            >
              {content}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function AboutProfileSection() {
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
                className={tab.active
                  ? '-mb-px border-b-2 border-primary px-1 py-3 text-sm font-medium text-primary md:text-base'
                  : '-mb-px border-b-2 border-transparent px-1 py-3 text-sm font-medium text-gray-500 transition-colors hover:text-primary md:text-base'}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </nav>

        <div id="about-profile" className="grid items-start gap-12 lg:grid-cols-10 lg:gap-16">
          <div className="lg:col-span-7">
            <figure className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
              <img
                src="/sites/www-racodf-com-3880565d/root-8a5edab2/a4535c5a-1783486476841-7bfe0014.jpg"
                alt="雷科防务产业园区"
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
            </figure>
            <div id="about-profile-text" className="about-profile-copy mt-8 space-y-5 text-sm text-gray-500 md:text-base">
              {profileParagraphs.map((paragraph) => (
                <p key={paragraph} className="ql-align-justify">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-3">
            <CompanyGroup title="核心企业" companies={coreCompanies} />
            <CompanyGroup title="参股企业" companies={investeeCompanies} />
          </div>
        </div>
      </div>
    </section>
  );
}
