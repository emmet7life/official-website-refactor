const milestones = [
  ['2009', '北京理工雷科电子信息技术有限公司成立，核心团队源自北京理工大学雷达技术团队。'],
  ['2011', '通过高新技术企业认定，并通过质量体系认证。'],
  ['2013', '荣获"北斗二号卫星工程建设突出贡献集体奖"；总经理刘峰荣获第十七届"中国青年五四奖章"。'],
  ['2015', '完成与雷科防务（股票代码 002413）的并购重组，登陆资本市场，获得新的发展平台。'],
  ['2016', '并购成都爱科特、西安奇维科技，加速多领域布局。'],
  ['2018', '成立尧云科技拓展千亿级存储市场；央视 CCTV-10《中关村》报道公司与毛二可院士的创业故事。'],
  ['2019', '全面启用 2 万平米草堂工业园生产基地，大幅提升智能化生产效率，迈入雷科防务发展新阶段。'],
  ['2020', '西安北理雷科创新园正式运营；重组西安恒达微波。'],
  ['2021', '成立成都雷科特毫米波技术有限公司，打造毫米波技术先进应用中心。'],
  ['2022', '雷科防务乔迁北京新办公大厦。'],
  ['2023', '雷科防务注册地从江苏迁回北京；成都微波毫米波工艺制造中心落地；西安智能制造单元建成投入使用。'],
  ['2024', '雷科电子荣获高新技术企业创新能力评价最高5A等级。'],
  ['2025', '某雷达产品获工信部某科技进步一等奖。'],
] as const;

export function AboutHistorySection() {
  return (
    <div id="about-history" className="about-part scroll-mt-20">
      <div className="fade-in-up mb-12 max-w-2xl">
        <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" />
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">发展历程</h3>
      </div>

      <div className="relative">
        <div className="absolute bottom-2 left-[11px] top-2 w-0.5 rounded-full bg-gradient-to-b from-primary via-primary-mid to-primary/10 lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
        <ol id="about-timeline" className="relative space-y-10 lg:space-y-0">
          {milestones.map(([year, description], index) => {
            const isLeft = index % 2 === 0;
            return (
              <li
                key={year}
                className="fade-in-up relative pl-12 lg:grid lg:grid-cols-[minmax(0,1fr)_2px_minmax(0,1fr)] lg:items-center lg:pb-16 lg:last:pb-0"
              >
                <span className="timeline-marker absolute left-[11px] top-8 z-10 flex h-[22px] w-[22px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-white ring-4 ring-primary-light lg:top-1/2 lg:-translate-y-1/2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <div className={isLeft ? 'lg:col-start-1 lg:mr-8 lg:text-right' : 'lg:col-start-3 lg:ml-8'}>
                  <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-mid hover-lift hover:shadow-card-hover lg:p-7">
                    <div className="bg-gradient-to-r from-primary to-primary-mid bg-clip-text text-3xl font-bold leading-none text-transparent lg:text-4xl">{year}</div>
                    <div className="faq-answer mt-3 text-sm leading-relaxed text-gray-600">
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-start-2" aria-hidden="true" />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
