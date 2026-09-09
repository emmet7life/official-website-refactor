const downloads = [
  {
    title: '迁飞生物监测预警系统产品册',
    subtitle: '迁飞性害虫与生物监测预警系统产品介绍 · PDF',
    href: '/upfiles/1782736071656-64c4a369.pdf',
  },
  {
    title: '2026智能网联仿真测试产品册-测试仪器',
    subtitle: '面向智能网联汽车的仿真测试仪器产品册 · PDF',
    href: '/upfiles/1782736195441-d515e8b6.pdf',
  },
  {
    title: '智慧养老业务产品册',
    subtitle: '面向智慧养老的健康监护与服务产品介绍 · PDF',
    href: '/upfiles/1782736116750-d24a7499.pdf',
  },
] as const;

function DocumentIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-gray-400 transition-colors group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 4v12M7 11l5 5 5-5M5 20h14" />
    </svg>
  );
}

export function ServiceDownloadsSection() {
  return (
    <div id="service-downloads" className="service-part scroll-mt-24">
      <div className="fade-in-up mb-6 max-w-2xl lg:mb-8">
        <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" />
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">资料下载</h3>
      </div>

      <div id="downloads-grid" className="space-y-8">
        <div>
          <h4 className="fade-in-up mb-4 text-base font-semibold text-primary">产品资料</h4>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {downloads.map((download) => (
              <a
                key={download.href}
                href={download.href}
                data-download={download.href}
                data-dl-title={download.title}
                className="fade-in-up group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary-mid hover:shadow-card-hover"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-primary-light text-primary">
                  <DocumentIcon />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">{download.title}</p>
                  <p className="mt-1 truncate text-xs text-gray-500">{download.subtitle}</p>
                </div>
                <DownloadIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
