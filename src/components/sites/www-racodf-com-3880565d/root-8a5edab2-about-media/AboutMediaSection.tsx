/* Legacy Hengda media coverage images. */
/* eslint-disable @next/next/no-img-element */
const mediaImages = ['001.jpg','002.jpg','003.jpg','004.jpg','005.jpg','006.jpg','007.jpg','009.jpg','010.jpg','011.jpg','012.jpg','013.jpg','014.jpg','015.jpg','016.jpg','017.jpg','018.jpg','019.jpg','ny_mtxc_01.jpg','ny_mtxc_02.jpg','sp1.jpg','sp2.jpg','sp3.jpg','sp4.jpg'];

export function AboutMediaSection() {
  return <div id="about-media" className="about-part scroll-mt-20">
    <div className="mb-10 max-w-2xl lg:mb-12"><div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" /><h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">媒体宣传</h3></div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {mediaImages.map((image, index) => <figure key={image} className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50"><img src={`/sites/www-racodf-com-3880565d/shared/about/media/${image}`} alt={`恒达微波媒体宣传${index + 1}`} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]" /></figure>)}
    </div>
  </div>;
}
