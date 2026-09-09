/* Original image sizing is preserved for visual fidelity. */
/* eslint-disable @next/next/no-img-element */

const cards = [
  {
    title: '规模化生产基地',
    image: '/sites/www-racodf-com-3880565d/shared/strength/strength-prod-base.jpg',
    text: '拥有标准化工业厂房、独立生产车间、无尘车间与仓储库区，科学划分原料、生产、加工、检测、成品仓储、发货等功能区，具备大批量、连续性、标准化生产能力，有效保障订单交付效率。',
  },
  {
    title: '智能化生产设备',
    image: '/sites/www-racodf-com-3880565d/shared/strength/strength-prod-equipment.jpg',
    text: '引进先进的自动化生产线、数控加工、精密生产、智能组装与一体化加工设备，实现加工、组装、包装等工序的智能化、自动化作业，大幅提升产能并保障产品精度、一致性与稳定性。',
  },
  {
    title: '严苛品控与交付能力',
    image: '/sites/www-racodf-com-3880565d/shared/strength/strength-prod-qc.jpg',
    text: '严格执行 ISO9001 质量管理体系，建立全流程质量管控；从物料抽检到多工序巡检、首检、终检，再到成品全方位检测；依托完善的供应链与仓储物流体系，保障订单按时、保质、保量交付。',
  },
  {
    title: '柔性定制生产实力',
    image: '/sites/www-racodf-com-3880565d/shared/strength/strength-prod-flex.jpg',
    text: '在标准化量产基础上具备成熟的柔性生产能力，可按客户个性化需求、定制化参数与特殊场景要求快速调整工艺、优化流程，承接小批量定制、中批量补货到大批量量产的各类订单。',
  },
] as const;

export function StrengthProdSection() {
  return (
    <div id="strength-prod-block" className="about-part mt-14 scroll-mt-24 lg:mt-20">
      <h3 className="fade-in-up text-xl font-semibold text-gray-900 md:text-2xl">生产能力</h3>
      <p className="fade-in-up mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
        产能与品控是企业交付实力的核心体现。公司拥有标准化、规模化、智能化的生产基地，配套完善的生产厂房与自动化生产线，建立了从采购、精密生产、全程品控到成品出库的全闭环生产管理体系，以高效产能、严苛品控与稳定交付为客户提供高品质产品与一站式交付服务。
      </p>
      <div id="strength-prod" className="mt-8 grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 hover-lift hover:border-primary-mid hover:shadow-card-hover">
            <div className="aspect-video overflow-hidden bg-white">
              <img src={card.image} alt={card.title} loading="lazy" className="h-full w-full object-contain transition-transform duration-300" />
            </div>
            <div className="p-5">
              <h4 className="text-base font-medium text-gray-900">{card.title}</h4>
              <p className="mt-2 text-justify text-sm leading-relaxed text-gray-500">{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
