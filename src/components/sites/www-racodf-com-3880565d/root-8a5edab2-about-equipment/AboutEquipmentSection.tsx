/* Legacy Hengda equipment photos are displayed in the original gallery order. */
/* eslint-disable @next/next/no-img-element */
const equipment = [
  ['sysb1.png', '1GHz-110GHz微波暗室（远场、近场）'], ['sysb2.png', '110GHz矢量网络分析仪'], ['sysb3.png', '温度冲击试验箱'], ['sysb4.png', '选频微波测试平台'], ['sysb5.jpg', '热处理炉'], ['sysb6.jpg', '振动试验机'], ['sysb7.png', '3mm波信号源'], ['sysb8.png', '小功率计'], ['sysb9.png', '点频信号源'], ['sysb10.png', '微波毫米波专业测量仪器仪表'], ['sysb11.png', 'SD2466A功率计'], ['sysb12.jpg', 'TDS1012数字存储示波器'], ['sysb13.png', '安立公司矢量网络分析仪'],
] as const;

export function AboutEquipmentSection() {
  return <div id="about-equipment" className="about-part scroll-mt-20">
    <div className="mb-10 max-w-2xl lg:mb-12"><div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" /><h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">实验设备</h3></div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {equipment.map(([image, title]) => <article key={image} className="group text-left"><div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary-mid group-hover:shadow-card-hover"><img src={`/sites/www-racodf-com-3880565d/shared/about/equipment/${image}`} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" /></div><p className="mt-3 min-h-[2.75rem] text-sm leading-snug text-gray-700">{title}</p></article>)}
    </div>
  </div>;
}
