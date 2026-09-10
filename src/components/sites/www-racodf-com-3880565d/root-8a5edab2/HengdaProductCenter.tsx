/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const root = "/sites/www-racodf-com-3880565d/shared/home/";

const products = {
  antenna: ["天线系列", "product-antenna.png", "覆盖标准增益天线、阵列天线、反射面天线、超宽带天线、微带天线及相控阵天线等微波毫米波天线产品。"],
  feeder: ["馈线系列", "product-waveguide.png", "提供旋转关节、微波开关、功分合成网络、滤波双工及各类波导馈线产品。"],
  servo: ["伺服转台系列", "product-servo.png", "面向雷达、通信和测试应用，提供伺服转台、扫描架及稳定平台等产品。"],
  subsystem: ["分系统集成系列", "product-subsystem.png", "依托天线、馈线、伺服和微波组件能力，为客户提供分系统集成与联调服务。"],
  custom: ["来图加工系列", "product-custom.png", "面向定制化需求提供微波结构件、波导器件和精密零部件的来图加工服务。"],
} as const;

export type HengdaProductKey = keyof typeof products;

export function HengdaProductCenter({ selected }: { selected: HengdaProductKey }) {
  const [title, image, description] = products[selected];
  return <section className="bg-gray-50 py-16 md:py-24 lg:py-28">
    <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
      <div className="mb-10 max-w-2xl">
        <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" />
        <h1 className="text-2xl font-semibold text-gray-900 md:text-4xl">产品中心</h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">微波毫米波“天、馈、伺、车、源、智”产品及系统</p>
      </div>
      <nav className="mb-10 flex flex-wrap gap-3 border-b border-gray-200 pb-4">
        {Object.entries(products).map(([key, value]) => <Link key={key} href={`/products/${key}`} className={`rounded border px-4 py-2 text-sm transition-colors ${key === selected ? "border-primary bg-primary-light text-primary" : "border-gray-200 bg-white text-gray-600 hover:border-primary hover:text-primary"}`}>{value[0]}</Link>)}
      </nav>
      <article className="grid overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:grid-cols-2">
        <div className="min-h-72 bg-[#07163d]"><img src={`${root}${image}`} alt={title} className="h-full min-h-72 w-full object-cover" /></div>
        <div className="flex flex-col justify-center p-7 md:p-10 lg:p-14"><p className="text-sm font-medium tracking-[0.2em] text-primary">HENGDA MICROWAVE</p><h2 className="mt-4 text-2xl font-semibold text-gray-900 md:text-3xl">{title}</h2><p className="mt-6 text-base leading-8 text-gray-600">{description}</p><Link href="/#contact" className="mt-8 inline-flex h-11 w-max items-center rounded-md bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-dark">业务咨询</Link></div>
      </article>
    </div>
  </section>;
}
