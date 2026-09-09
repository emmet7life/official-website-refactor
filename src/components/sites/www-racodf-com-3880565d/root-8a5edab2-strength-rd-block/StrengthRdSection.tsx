/* Original image sizing is preserved for visual fidelity. */
/* eslint-disable @next/next/no-img-element */

const cards = [
  {
    title: '强大的研发平台',
    image: '/sites/www-racodf-com-3880565d/shared/strength/strength-rd-platform.jpg',
    description:
      '下属公司获批国家级博士后工作站、北京企业技术中心、北京市重点实验室、陕西省工业企业研发机构等多个省级、国家级科研平台，并获评国家级专精特新“小巨人”企业，研发创新能力与行业技术地位获官方权威认可。',
  },
  {
    title: '专业的研发团队',
    image: '/sites/www-racodf-com-3880565d/shared/strength/strength-rd-team.jpg',
    description:
      '汇聚行业资深工程师与技术专家，核心研发人员均拥有 10 年以上行业技术经验，熟悉前沿技术；并联动高校、科研机构搭建产学研合作体系，实现技术资源共享、优势互补。',
  },
  {
    title: '完善的研发体系',
    image: '/sites/www-racodf-com-3880565d/shared/strength/strength-rd-system.jpg',
    description:
      '设有研发机构、实验室及测试中心，配备精密检测仪、模拟测试与研发实验设备，可完成产品设计、调试、结构优化、性能测试与验证全流程，并建立从需求调研到定型的标准化研发管理流程。',
  },
  {
    title: '技术成果与创新实力',
    image: '/sites/www-racodf-com-3880565d/shared/strength/strength-rd-innovation.jpg',
    description:
      '累计获得发明、实用新型、外观专利等 357 项，软件著作权 279 项，参与多项行业标准制定与技术课题研发，可精准适配市场需求，支持客户个性化、定制化产品研发与技术适配。',
  },
] as const;

export function StrengthRdSection() {
  return (
    <div id="strength-rd-block" className="mt-14 scroll-mt-24 lg:mt-20">
      <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">研发能力</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
        创新是企业持续发展的核心驱动力。公司始终坚持以技术研发为核心战略，深耕电子信息领域，聚焦产品迭代、技术攻坚与工艺优化，构建了完善、高效、自主可控的研发创新体系，具备独立研发、定制开发、技术升级及成果转化的综合实力。
      </p>
      <div id="strength-rd" className="mt-8 grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 hover-lift hover:border-primary-mid hover:shadow-card-hover"
          >
            <div className="aspect-video overflow-hidden bg-white">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h4 className="text-base font-medium text-gray-900">{card.title}</h4>
              <p className="mt-2 text-justify text-sm leading-relaxed text-gray-500">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
