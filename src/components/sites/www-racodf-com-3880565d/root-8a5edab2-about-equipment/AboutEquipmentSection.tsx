/* Legacy Hengda equipment photos are displayed in the original gallery order. */
/* eslint-disable @next/next/no-img-element */
const equipment = Array.from({ length: 13 }, (_, index) => `sysb${index + 1}.${[5, 6, 12].includes(index + 1) ? 'jpg' : 'png'}`);

export function AboutEquipmentSection() {
  return <div id="about-equipment" className="about-part scroll-mt-20">
    <div className="mb-10 max-w-2xl lg:mb-12"><div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" /><h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">实验设备</h3></div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {equipment.map((image, index) => <figure key={image} className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50"><img src={`/sites/www-racodf-com-3880565d/shared/about/equipment/${image}`} alt={`恒达微波实验设备${index + 1}`} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]" /></figure>)}
    </div>
  </div>;
}
