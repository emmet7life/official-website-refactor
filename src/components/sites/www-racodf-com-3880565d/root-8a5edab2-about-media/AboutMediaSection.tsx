/* Legacy Hengda media coverage images. */
/* eslint-disable @next/next/no-img-element */
const mediaImages = ['001.jpg','002.jpg','003.jpg','004.jpg','005.jpg','006.jpg','007.jpg','009.jpg','010.jpg','011.jpg','012.jpg','013.jpg','014.jpg','015.jpg','016.jpg','017.jpg','018.jpg','019.jpg','ny_mtxc_01.jpg','ny_mtxc_02.jpg','sp1.jpg','sp2.jpg','sp3.jpg','sp4.jpg'];
const mediaTitles = ['2017年5月20日 陕西电视台对西安恒达微波技术开发有限公司进行报道','2017年1月6日 东台广播电视台对西安恒达微波技术开发有限公司进行报道','2013年6月23日 陕西电视台对西安恒达微波技术开发有限公司进行报道','2012年6月23日 陕西电视台对西安恒达微波技术开发有限公司进行报道','1998年8月6日 《人民日报》报道：展望未来，再创辉煌','1998年8月4日 《市场报》报道：友谊·合作·发展·共创微波辉煌','1998年 中央电视台《供求热线》企业雄风节目报道'];

export function AboutMediaSection() {
  return <div id="about-media" className="about-part scroll-mt-20">
    <div className="mb-10 max-w-2xl lg:mb-12"><div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" /><h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">媒体宣传</h3></div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {mediaImages.map((image, index) => <article key={image} className="group text-left"><div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-gray-200 bg-gray-50 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary-mid group-hover:shadow-card-hover"><img src={`/sites/www-racodf-com-3880565d/shared/about/media/${image}`} alt={mediaTitles[index] ?? '恒达微波媒体宣传'} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" /></div><p className="mt-3 min-h-[2.75rem] text-sm leading-snug text-gray-700">{mediaTitles[index] ?? '恒达微波媒体宣传'}</p></article>)}
    </div>
  </div>;
}
