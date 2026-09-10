import type { ReactNode } from 'react';

const tabs = [
  ['资料下载', 'service-downloads'],
  ['销售网络', 'service-sales'],
  ['质量控制', 'service-quality'],
  ['服务承诺', 'service-commitment'],
] as const;

export function ServiceSection({ children }: { children?: ReactNode }) {
  return <section id="service" className="scroll-mt-20 bg-gray-50 py-16 md:py-24 lg:py-28">
    <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
      <div className="mb-10 max-w-2xl lg:mb-12">
        <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" />
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-4xl">服务支持</h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">提供论文资料、销售网络、质量控制与服务承诺，为客户业务全程保驾护航。</p>
      </div>
      <nav id="service-tabs" className="mb-10 flex flex-wrap gap-x-8 gap-y-1 border-b border-gray-200 lg:mb-14" aria-label="服务支持">
        {tabs.map(([label, id]) => <a key={id} href={`#${id}`} data-service-part={id} className="-mb-px border-b-2 border-transparent px-1 py-3 text-sm font-medium text-gray-500 transition-colors hover:text-primary md:text-base">{label}</a>)}
      </nav>
      {children}
    </div>
  </section>;
}
