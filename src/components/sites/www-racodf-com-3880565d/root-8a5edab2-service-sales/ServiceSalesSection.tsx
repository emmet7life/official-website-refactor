function LocationIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ContactRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return <div className="flex items-start gap-3 text-sm leading-relaxed text-gray-600 md:text-base">
    <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">{icon}</span>
    <span>{children}</span>
  </div>;
}

export function ServiceSalesSection() {
  return <div id="service-sales" className="service-part hidden">
    <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" />
    <h3 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">销售网络</h3>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      <article className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-card-hover">
        <h4 className="text-lg font-medium text-gray-900">西安总部</h4>
        <div className="mt-6 space-y-4">
          <ContactRow icon={<LocationIcon />}>中国西安市航天基地飞天路485号，邮编：710100</ContactRow>
          <ContactRow icon={<PhoneIcon />}>电话：<a className="hover:text-primary" href="tel:02985266226">029-85266226</a>　传真：029-85248049</ContactRow>
          <ContactRow icon={<PhoneIcon />}>手机：<a className="hover:text-primary" href="tel:13379273962">13379273962</a></ContactRow>
          <ContactRow icon={<MailIcon />}><a className="hover:text-primary" href="mailto:marketing@hdmicrowave.com">marketing@hdmicrowave.com</a></ContactRow>
        </div>
      </article>
      {[
        ['国际业务部', '负责境外国家及港澳台地区销售', '+86-15929918231', '+86-29-85266226', 'market@hdmicrowave.com'],
        ['华东区', '华东地区：上海、浙江、江苏、安徽', '15389025378', '', ''],
        ['西南区', '西南地区：四川、重庆、云南、贵州、西藏、福建、海南、广东、广西、湖北、湖南、江西、河南', '13379254722', '', ''],
        ['京津区', '京津地区：北京、天津、黑龙江、吉林、辽宁、内蒙古', '13801055130', '', ''],
        ['华北区', '河北、山东', '15305177790', '', ''],
        ['西安区', '陕西、甘肃、宁夏、青海、新疆、山西', '15305177790', '', ''],
        ['行政人事部', '综合事务联系', '029-85224787/84500096/85241794-202/201', '', 'hd@hdmicrowave.com'],
      ].map(([title, scope, mobile, phone, email]) => <article key={title} className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-card-hover">
        <h4 className="text-lg font-medium text-gray-900">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">{scope}</p>
        <div className="mt-6 space-y-4">
          <ContactRow icon={<PhoneIcon />}>手机：<a className="hover:text-primary" href={`tel:${mobile.replace(/[^+\d]/g, '')}`}>{mobile}</a></ContactRow>
          {phone ? <ContactRow icon={<PhoneIcon />}>电话：<a className="hover:text-primary" href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a></ContactRow> : null}
          {email ? <ContactRow icon={<MailIcon />}><a className="hover:text-primary" href={`mailto:${email}`}>{email}</a></ContactRow> : null}
        </div>
      </article>)}
    </div>
  </div>;
}
import type { ReactNode } from 'react';
