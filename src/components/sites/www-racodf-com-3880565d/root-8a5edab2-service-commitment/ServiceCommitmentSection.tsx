const commitments = [
  ['满足顾客合同要求', '从产品技术性能、质量可靠和服务优质等方面充分满足顾客需求。'],
  ['技术先进科学管理', '持续吸收优秀技术人才，跟踪微波技术前沿，通过科学管理保证过程受控。'],
  ['诚信服务持续改进', '以周到、及时、优良的服务排除产品故障，并通过持续监视、测量、分析和改进提升服务。'],
] as const;

export function ServiceCommitmentSection() {
  return <div id="service-commitment" className="service-part hidden">
    <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" />
    <h3 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">服务承诺</h3>
    <div className="space-y-8">
      <div><h4 className="mb-4 text-lg font-semibold text-gray-900">质量方针</h4><p className="text-sm leading-8 text-gray-600 md:text-base">满足顾客合同要求，技术先进科学管理，诚信服务持续改进。</p></div>
      <div className="grid gap-5 md:grid-cols-3">{commitments.map(([title, description]) => <article key={title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"><h4 className="text-lg font-medium text-gray-900">{title}</h4><p className="mt-3 text-sm leading-7 text-gray-600">{description}</p></article>)}</div>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"><h4 className="mb-4 text-lg font-semibold text-gray-900">售后承诺</h4><ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600 md:text-base"><li>所有恒达微波产品保修期限为一年，以恒达微波发货日期为准，特殊情况按合同约定执行。</li><li>保修期过后仍提供维修服务，并收取适当费用。</li><li>有限保修期间，因我司原因损坏的零件提供免费维修或更换服务。</li><li>更换后的零件作为特殊部分延续保修期10个月。</li></ol></div>
    </div>
  </div>;
}
