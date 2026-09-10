const downloads = [
  {
    title: '2019年全国天线年会论文集（上册）',
    subtitle: '57.5 MB · 2020-04-28',
    href: 'https://www.hdmicrowave.com/aliyunoss/pdf/paper/2019%E4%B8%8A.pdf',
  },
  {
    title: '2019年全国天线年会论文集（中册）',
    subtitle: '64.0 MB · 2020-04-28',
    href: 'https://www.hdmicrowave.com/aliyunoss/pdf/paper/2019%E4%B8%AD.pdf',
  },
  {
    title: '2019年全国天线年会论文集（下册）',
    subtitle: '54.6 MB · 2020-04-28',
    href: 'https://www.hdmicrowave.com/aliyunoss/pdf/paper/2019%E4%B8%8B.pdf',
  },
  { title: '2008海峡两岸三地无线电科技研讨会论文', subtitle: '47K · 2008-10-03', href: 'https://www.hdmicrowave.com/jszc_xiazai_lw_01.html' },
  { title: '“邻居单元”为基础的条件数预处理技术及其在板型基站天线分析中的应用', subtitle: '47K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/15.rar' },
  { title: '微带贴片天线电磁辐射特性分析的FEM/PML方法', subtitle: '48K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/14.rar' },
  { title: '一种均匀直线阵列干扰抑制的新方法', subtitle: '37K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/13.rar' },
  { title: '本征激励法用于天线阵方向图综合', subtitle: '51K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/12.rar' },
  { title: 'MIMO系统双极化微带振子天线研究', subtitle: '264K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/11.rar' },
  { title: '一种改进的遗传算法及其在阵列天线方向图综合中的应用', subtitle: '16K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/10.rar' },
  { title: '用于多种移动通信系统的超宽带共面天线', subtitle: '170K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/09.rar' },
  { title: '一种新型的时空联合解扩重扩智能天线', subtitle: '39K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/08.rar' },
  { title: '圆极化微带天线及其阵列的研究与设计', subtitle: '75K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/07.rar' },
  { title: '平面双臂螺旋天线', subtitle: '671K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/06.rar' },
  { title: '基于软件CST Microwave StudioTM的天线仿真', subtitle: '743K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/04.rar' },
  { title: '角锥TEM双脊喇叭天线研究', subtitle: '251K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/03.zip' },
  { title: '一种新的天线阵列位置误差校正算法', subtitle: '26K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/02.zip' },
  { title: '椭圆波束赋形双偏置天线的设计', subtitle: '48K · 2006-08-03', href: 'https://www.hdmicrowave.com/lunwenjiWebs/1/01.zip' },
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
          <h4 className="fade-in-up mb-4 text-base font-semibold text-primary">论文资料</h4>
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
