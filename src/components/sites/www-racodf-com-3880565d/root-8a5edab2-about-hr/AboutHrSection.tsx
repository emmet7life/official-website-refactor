/* Original HR content is reproduced locally from the public page. */
/* eslint-disable @next/next/no-img-element */

import jobs from './jobs.json';

type Job = (typeof jobs)[number];

function JobDetails({ text }: { text: string }) {
  const match = text.match(/\n\n岗位职责\n\n([\s\S]*?)\n\n岗位要求\n\n([\s\S]*)$/);
  const renderBody = (body: string) => {
    const lines = body.split('\n').filter(Boolean);
    return lines.length > 1 ? <ul className="list-disc space-y-1 pl-4">{lines.map((line) => <li key={line}>{line}</li>)}</ul> : <p>{body}</p>;
  };
  if (!match) return null;
  return <div className="space-y-3 border-t border-gray-100 px-4 pb-4 pt-3 text-sm leading-relaxed text-gray-600">
    <div><p className="mb-1.5 text-xs font-semibold text-primary">岗位职责</p>{renderBody(match[1])}</div>
    <div><p className="mb-1.5 text-xs font-semibold text-primary">岗位要求</p>{renderBody(match[2])}</div>
  </div>;
}

function JobCard({ job }: { job: Job }) {
  const location = (job.details.split('\n')[1] ?? '').replace('若干 · ', '');
  return <details className="group rounded-lg border border-gray-200 bg-white transition-colors hover:border-primary-mid">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden">
      <span className="min-w-0 truncate text-sm font-medium text-gray-800">{job.title}</span>
      <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-gray-400">若干 · {location}<svg className="h-3.5 w-3.5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></span>
    </summary>
    <JobDetails text={job.details} />
  </details>;
}

function Heading({ children }: { children: string }) {
  return <div className="mb-6 flex items-center gap-3 lg:mb-8"><span className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" /><h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">{children}</h3></div>;
}

export function AboutHrSection() {
  return (
    <div id="about-hr" className="about-part scroll-mt-20">
      <div className="mb-12 lg:mb-16">
        <Heading>人才培养</Heading>
        <div className="space-y-4 text-base leading-relaxed text-gray-600">
          <p>公司秉持&quot;以人为本，培养一流人才&quot;的理念，把人才放在战略C位。我们以&quot;高学历、专业化、年轻化、可持续&quot;为航标，打造覆盖全员、层层进阶的人才成长体系。</p>
          <p>研发团队硕博占比超60%，硬核实力拉满。每年从顶尖院校锁定最强大脑，靠&quot;导师制&quot;和&quot;项目制&quot;让新人快速上线、独挑大梁。晋升通道公平透明，年轻人直接在核心战场当主角——组织有活力，人才有奔头，这是我们最硬的底气。</p>
          <p className="text-center"><img src="/sites/www-racodf-com-3880565d/shared/about/hr-talent-0.png" alt="雷科人才团队" loading="lazy" className="mx-auto h-auto max-w-full rounded-lg" /></p>
        </div>
      </div>

      <div className="mb-12 lg:mb-16">
        <Heading>薪酬福利</Heading>
        <div className="space-y-4 text-base leading-relaxed text-gray-600">
          <p>公司致力于构建“外部具有竞争力、内部体现公平性、激励富有针对性”的全面薪酬体系，不仅用高薪回报员工的付出，更用暖心福利守护员工的生活。</p>
          <p className="text-center"><img src="/sites/www-racodf-com-3880565d/shared/about/hr-talent-1.png" alt="雷科员工福利" loading="lazy" className="mx-auto h-auto max-w-full rounded-lg" /></p>
        </div>
      </div>

      <div className="mb-12 lg:mb-16">
        <Heading>人才招聘</Heading>
        <p className="mb-8 text-base leading-relaxed text-gray-600">公司面向社会与校园持续开放招聘通道，以 “德才兼备、以德为先，人岗相适、用其所长” 为选拔原则，热忱欢迎志同道合的伙伴加入。</p>
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from(new Set(jobs.map((job) => job.group))).map((group) => <div key={group} className="space-y-3">
            <h4 className="mb-3 text-base font-semibold text-primary">{group}</h4>
            <div className="grid items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">{jobs.filter((job) => job.group === group).map((job) => <JobCard key={job.title} job={job} />)}</div>
          </div>)}
        </div>
      </div>

      <div className="rounded-xl border border-primary/15 bg-primary-light/50 p-6 lg:p-8">
        <Heading>联系方式</Heading>
        <div className="grid gap-4 text-sm leading-relaxed text-gray-600 md:grid-cols-2">
          <p>招聘热线：010-68916700 人力资源部</p><p>公司网址：www.racodf.com</p><p>招聘邮箱：zhaopin@racodf.com</p><p>公司地址：北京市海淀区远大南街6号院鲁迅文创园5号楼</p>
        </div>
      </div>
    </div>
  );
}
