const values = [
  ['国家', '使命为先，服务国防与国民经济'],
  ['团队', '凝聚专业力量，协同攻坚'],
  ['拼搏', '持续摸索前进，冲破黎明前的黑暗'],
  ['创新', '自主知识产权，创新引领发展'],
] as const;

const conduct = [
  ['严格', '规范严格、执行严格、功过严格、赏罚严格'],
  ['用心', '主动、负责、认真、处处留心、注重学习'],
  ['专业', '使自己的工作达到专业水平，不断提高，并为提高专业水平技能持续学习'],
  ['节约', '成为公司永远的特征，并体现在研发、管理的每一个细节'],
] as const;

function EyeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-[3px] w-8 bg-primary" aria-hidden="true" />
      <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">{children}</h3>
    </div>
  );
}

export function AboutCultureSection() {
  return (
    <div id="about-culture" className="about-part scroll-mt-20">
      <div className="grid gap-5 lg:gap-6">
        <div className="fade-in-up flex flex-col rounded-xl border border-primary/15 bg-primary-light/50 p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-mid/20 text-primary-mid">
              <EyeIcon />
            </span>
            <span className="text-sm font-semibold tracking-[0.15em] text-primary-mid">愿景 VISION</span>
          </div>
          <p id="culture-vision" className="mt-6 text-2xl font-semibold leading-snug text-gray-900 md:text-3xl">
            成为世界一流的传感、导航与数字系统高科技公司
          </p>
        </div>
      </div>

      <div className="fade-in-up mt-12 lg:mt-16">
        <SectionHeading>价值观</SectionHeading>
        <div id="about-values" className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {values.map(([title, description], index) => (
            <div
              key={title}
              className="fade-in-up group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover-lift hover:border-primary-mid hover:shadow-card-hover lg:p-7"
            >
              <span className="pointer-events-none absolute -right-1 -top-3 select-none text-6xl font-bold leading-none text-gray-100">
                {`0${index + 1}`}
              </span>
              <p className="relative text-2xl font-semibold text-primary md:text-3xl">{title}</p>
              <p className="relative mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fade-in-up mt-12 lg:mt-16">
        <SectionHeading>行为准则</SectionHeading>
        <div id="about-conduct" className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {conduct.map(([title, description]) => (
            <div
              key={title}
              className="fade-in-up group flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-6 py-8 text-center transition-all duration-200 hover-lift hover:border-primary-mid hover:bg-white hover:shadow-card-hover"
            >
              <div>
                <p className="text-2xl font-semibold text-gray-900 transition-colors group-hover:text-primary md:text-3xl">{title}</p>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
