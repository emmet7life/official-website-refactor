const milestones = [
  ['2019', '恒达微波与上市公司江苏雷科防务股份有限公司（股票代码：002413）完成重组，成为雷科防务全资子公司。'],
  ['2018', '恒达微波空间站探月产品研发生产班组荣获陕西省总工会“工人先锋号”称号；同年，恒达微波产品助力中国“人造小太阳”。'],
  ['2017', '恒达微波被陕西省中小企业促进局授予陕西省“专精特新”中小企业荣誉称号。'],
  ['2013', '恒达微波举行 20 周年庆祝活动，正式迁址西安国家民用航天产业基地。'],
  ['2012', '恒达微波参与研制的微波雷达成功参与“天宫一号”与“神舟八号”两次交会对接任务，并荣获“突出贡献单位”。'],
  ['2008', '恒达微波被评为陕西省第一批“高新技术企业”。'],
  ['2005', '江苏恒达微波技术开发有限公司于江苏东台市成立。'],
  ['2003', '恒达微波作为“神舟五号”地面测量设备研制的重要配套单位，获得中国空间技术研究院颁发的荣誉匾。'],
  ['1993', '西安恒达微波技术开发有限公司于西安市高新技术开发区正式成立。'],
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
                className="fade-in-up relative pl-12 lg:pl-0 lg:grid lg:grid-cols-[minmax(0,1fr)_2px_minmax(0,1fr)] lg:items-center lg:pb-16 lg:last:pb-0"
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
