/* Legacy Hengda company activity photos. */
/* eslint-disable @next/next/no-img-element */
const activityImages = ['gshd1.jpg','gshd2.jpg','gshd3.jpg','gshd4.jpeg','gshd5.jpg','gshd6.jpeg','gshd7.jpg','gshd8.jpeg','gshd12.jpg','gshd13.jpeg','gshd14.jpg','gshd15.jpg','gshd17.jpg','gshd18.jpg','gshd19.jpg','gshd20.jpg','gshd21.jpeg','gshd22.jpeg','gshd23.jpeg','jthd1.jpg','jthd2.jpg','jthd3.jpg','jthd5.jpg','jthd6.jpg','jthd7.jpg','jthd9.jpg','jthd10.jpg','jthd11.jpg','jthd12.jpg','jthd13.jpg','jthd14.jpg','ny_ghhd_22.jpg','ny_ghhd_24.jpg','ny_ghhd_28.jpg','ny_ghhd_29.jpg'];

export function AboutActivitiesSection() {
  return <div id="about-activities" className="about-part scroll-mt-20">
    <div className="mb-10 max-w-2xl lg:mb-12"><div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" /><h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">公司活动</h3></div>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {activityImages.map((image, index) => <figure key={image} className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50"><img src={`/sites/www-racodf-com-3880565d/shared/about/activities/${image}`} alt={`恒达微波公司活动${index + 1}`} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]" /></figure>)}
    </div>
  </div>;
}
