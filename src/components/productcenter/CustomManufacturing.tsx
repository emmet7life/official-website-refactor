import Image from "next/image";
import Link from "next/link";

const root = "/sites/www-racodf-com-3880565d/shared/home/";
const examples = [
  ["product-waveguide.png", "波导与馈线类"],
  ["product-antenna.png", "天线类"],
  ["product-servo.png", "转台与结构件类"],
  ["product-custom.png", "来图加工件"],
] as const;

export function CustomManufacturing() {
  return <article className="custom-manufacturing">
    <header className="rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 md:p-10">
      <p className="text-xs tracking-[0.2em] text-primary">CUSTOM MANUFACTURING</p>
      <div className="mt-5 grid items-center gap-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">来图加工</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">根据您提供的图纸及技术要求，为微波产品、配套零部件与结构件提供加工服务。从材料、尺寸到接口形式，围绕实际装配与应用需求开展沟通，确认加工方案。</p>
          <Link href="/?inquiry=custom#contact" className="mt-7 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark">咨询来图加工 <span className="ml-4" aria-hidden="true">→</span></Link>
        </div>
        <Image src={`${root}product-custom.png`} alt="来图加工系列产品展示" width={600} height={440} className="h-56 w-full object-contain" />
      </div>
    </header>
    <section className="mt-9" aria-labelledby="custom-gallery-title">
      <h3 id="custom-gallery-title" className="text-xl font-semibold text-slate-900">系列产品展示</h3>
      <p className="mt-2 text-sm leading-7 text-slate-500">加工范围与交付要求以图纸评估及双方确认的技术文件为准。</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {examples.map(([image, title]) => <figure key={title} className="rounded-lg border border-slate-200 bg-white p-5">
          <Image src={`${root}${image}`} alt={title} width={480} height={320} className="h-44 w-full object-contain" />
          <figcaption className="mt-4 border-t border-slate-100 pt-4 text-base font-medium text-slate-800">{title}</figcaption>
        </figure>)}
      </div>
    </section>
    <aside className="mt-7 rounded-lg bg-slate-50 p-6 text-sm leading-7 text-slate-600"><h3 className="mb-2 font-semibold text-slate-900">沟通前请准备</h3><p>产品图纸、材料与表面处理要求、关键尺寸及公差、加工数量和期望交期。我们的业务人员将与您联系，进一步确认技术要求。</p></aside>
  </article>;
}
