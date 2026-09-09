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
        <h4 className="text-lg font-medium text-gray-900">北京总部</h4>
        <div className="mt-6 space-y-4">
          <ContactRow icon={<LocationIcon />}>北京市海淀区远大南街6号院鲁迅文创园5号楼</ContactRow>
          <ContactRow icon={<PhoneIcon />}>010-68916700</ContactRow>
          <ContactRow icon={<MailIcon />}>market@racodf.com</ContactRow>
        </div>
      </article>
    </div>
  </div>;
}
import type { ReactNode } from 'react';
