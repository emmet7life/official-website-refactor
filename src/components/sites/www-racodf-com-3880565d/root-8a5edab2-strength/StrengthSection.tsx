import type { ReactNode } from 'react';

export function StrengthSection({ children }: { children?: ReactNode }) {
  return <section id="strength" className="bg-white py-16 md:py-24 lg:py-28">
    <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
      <div className="fade-in-up">
        <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" />
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-4xl">企业实力</h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">以体系化研发平台与智能化生产基地为支撑，构建从技术创新到产业化交付的完整能力链条。</p>
      </div>
      {children}
    </div>
  </section>;
}
