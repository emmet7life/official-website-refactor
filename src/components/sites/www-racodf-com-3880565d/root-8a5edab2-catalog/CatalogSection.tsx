/* Static product-category markup extracted from the source page. */
export function CatalogSection() {
  const nestedIds = [
    "radar-bird", "radar-antiUAV", "radar-insect", "radar-sleep", "radar-fall", "radar-sigproc", "radar-simtest", "radar-tservo",
    "sat-compute", "sat-remote-sensing", "sat-microwave",
    "ctrl-tsn-flexray", "ctrl-portable-pc", "ctrl-soc-redundant",
    "storage-shanhai-module", "storage-sata-controller", "storage-sata-ssd",
    "connected-mmwave-tester", "connected-gnss-tester", "connected-isac-tester",
  ];
  return <section id="catalog" className="bg-white">
    <div className="sr-only" aria-hidden="true">{nestedIds.map((id) => <span id={id} key={id} />)}</div>
    <div dangerouslySetInnerHTML={{ __html: CATALOG_HTML }} />
  </section>;
}

const CATALOG_HTML = `<section id="radar-products" class="bg-white py-16 md:py-24 lg:py-28 scroll-mt-20">
    <div class="max-w-container mx-auto px-5 md:px-10 lg:px-16">
      <!-- 区块标题 -->
      <div class="fade-in-up mb-10 lg:mb-12">
        <div class="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-primary-mid mb-5"></div>
        <p class="text-sm font-medium text-primary mb-2">业务领域 / 雷达系统</p>
        <h2 class="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">雷达系统产品</h2>
        <p id="radar-products-intro" class="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">面向国防、交通、民航、矿山、气象、汽车等领域，从系统设计、天线、射频、信息采集、信息处理、模拟仿真测试等全产业链覆盖。自主掌握雷达多项关键核心技术，具备毫米波雷达、相控阵雷达、合成孔径雷达系统研发设计和生产能力。</p>
      </div>

      <!-- 产品快捷导航 -->
      <div id="radar-nav" class=""></div>

      <div id="radar-list" class="divide-y divide-gray-200"><div class="py-10 lg:py-12 first:pt-0"><div class="flex items-center gap-3 mb-6"><span class="w-8 h-[3px] bg-primary shrink-0"></span><h3 id="radar-cat-complete" class="scroll-mt-24 text-xl md:text-2xl font-semibold text-gray-900">雷达整机</h3></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"><a href="#radar-bird" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783486641286-e5c3d3e6.jpg" alt="探鸟雷达" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">01 · 机场鸟情安防</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">探鸟雷达</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">探鸟雷达是专为机场等场景打造的鸟情监测安防设备，结合光电识别、智能管控、驱离设备联动技术，可全天候探测鸟类目标、分析鸟群态势，自动引导驱鸟装置开展作业，有效防范鸟击事故，保障航空运行安全。系统搭配鸟情态势管理软件，可生成鸟群热力图，实现全流程可视化管控。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#radar-antiUAV" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783486773590-70f0d999.jpg" alt="无人机探测雷达" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">02 · 反无人机</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">无人机探测雷达</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">该雷达是系列化 X 波段有源相控阵体制三坐标雷达，通过方位机扫、相扫结合和俯仰相扫的方式，实现全天时、全天候对低空入侵目标的实时监测。该雷达采用模块化可拼阵面，可根据客户需求，通过阵面扩展，进行性能提升。可适配固定阵地、机动载具两类部署平台，满足各类系统集成需求。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#radar-insect" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783486817251-23161eaf.jpg" alt="探虫雷达" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">03 · 农业病虫害监测</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">探虫雷达</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">探虫雷达属于农业病虫害监测预警专用全极化雷达，依托 X 波段全极化探测技术，针对迁飞性农业害虫进行远距离、精细化探测、识别与追踪。系统联动病虫害防控平台，实现害虫迁飞轨迹监测、虫情预警，助力农业绿色防控，保障粮食与农作物生产安全。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#radar-sleep" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783486840232-dcc4b8e3.jpg" alt="智能睡眠看护仪" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">04 · 生命体征监测</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">智能睡眠看护仪</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">智能睡眠看护仪是一款基于毫米波雷达技术的智能化生命体征监测设备。采用非接触方式实现室内人员的生命体征监测（包含呼吸率、心率等）和睡眠质量监测。产品配有手机小程序、护理后台界面、智慧驾驶舱，方便老人家属或护理人员随时关注老人情况，当出现生命体征异常或猝死时可自动拨打电话报警，通知老人家属或护理人员进行及时救助。也可用于日常睡眠质量监测，帮助发现和预防呼吸暂停综合征、睡眠等问题。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#radar-fall" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783486945459-7fe91764.jpg" alt="智能跌倒检测仪" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">05 · 智能跌倒检测</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">智能跌倒检测仪</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">智能跌倒检测仪是一款基于毫米波雷达技术的智能化人体检测设备。采用非接触方式实现室内人员的精准感知(跌倒告警、长时间驻留告警等)。产品配有手机小程序，方便监护人随时关注老人情况，当出现跌倒时可自动拨打电话报警，通知监护人或照护人员进行及时救助。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a></div></div><div class="py-10 lg:py-12 first:pt-0"><div class="flex items-center gap-3 mb-6"><span class="w-8 h-[3px] bg-primary shrink-0"></span><h3 id="radar-cat-support" class="scroll-mt-24 text-xl md:text-2xl font-semibold text-gray-900">雷达配套</h3></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"><a href="#radar-sigproc" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783486869647-a38d2300.jpg" alt="雷达信号处理系列产品" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">05 · 信号采集·信息处理</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">雷达信号处理系列产品</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">本系列为自研全国产化雷达信号处理平台，覆盖信号采集、信息处理全链路，采用模块化、系列化、通用化设计，分为模组、单板、整机三级产品形态。硬件底座采用全栈国产芯片（飞腾/鲲鹏 CPU、天垓/智凯/晟弩 GPU、昇腾 AI、国产 RFSOC/9009 射频芯片），适配银河麒麟系统，实现雷达射频信号直采、高速网络传输、大容量分布式存储、异构算力运算、AI 目标识别一体化；形态覆盖商用上架、VPX 加固、便携式小型设备，适配地面、舰载、机载、无人机各类雷达装备；配套自研 GVSIPL 信号处理加速库，兼容 VSIPL 标准，大幅提升 FFT、矩阵、滤波等雷达算法效率。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#radar-simtest" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783486892513-1518d043.jpg" alt="雷达仿真测试系列产品" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">06 · 仿真·测试</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">雷达仿真测试系列产品</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">本系列为雷达全流程仿真测试设备，覆盖目标回波模拟、射频信号生成、SAR 成像仿真、电子干扰对抗模拟，分为上架固定式、便携式、飞航机载式、多通道注入式多种形态，支持射频/中频/数字多类注入方式。频段覆盖 0.1GHz~96GHz，支持脉冲多普勒、步进频、SAR 成像、各类雷达/通信调制信号、多类型有源无源干扰仿真；可通过硬件选件扩展带宽、通道、距离、散射点、极化、功率等能力，配套二维/三维场景规划软件，满足实验室半实物仿真、外场空馈试验、无人机搭载测试、雷达抗干扰训练、型号定型鉴定等全场景测试需求，广泛应用于航天、电子、兵器等领域。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#radar-tservo" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783486918635-59465a28.jpg" alt="雷达天伺馈" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">07 · 天线·伺服·馈线</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">雷达天伺馈</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">雷达天线包括标准增益天线、阵列天线、反射面类天线、超宽带天线、太赫兹天线、微带天线、相控阵天线等。雷达伺服设备包括伺服转台、扫描架、稳定平台等。雷达馈线包括旋转关节及机构、微波开关产品、功分合成网络产品、滤波双工产品等。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a></div></div></div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 卫星应用产品（业务领域 / 卫星应用 三级栏目）                  -->
  <!-- ============================================================ -->
  <section id="satellite-products" class="bg-gray-50 py-16 md:py-24 lg:py-28 scroll-mt-20">
    <div class="max-w-container mx-auto px-5 md:px-10 lg:px-16">
      <!-- 区块标题 -->
      <div class="fade-in-up mb-10 lg:mb-12">
        <div class="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-primary-mid mb-5"></div>
        <p class="text-sm font-medium text-primary mb-2">业务领域 / 卫星应用</p>
        <h2 class="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">卫星应用产品</h2>
        <p id="satellite-products-intro" class="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">面向国防安全、应急管理、自然资源、智慧城市、气象海洋等领域，基于自研核心技术已构建天地一体化技术体系，具备遥感数据“星-地-应用”全产业链服务能力。已推出多款星载端产品和地面端产品，并实际部署应用，处于行业领先地位。</p>
      </div>
      <!-- 产品列表（数据驱动·卡片入口，点击进入产品独立页） -->
      <div id="satellite-list"><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"><a href="#sat-compute" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783487769451-5843d6bc.jpg" alt="天基智算平台" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">01 · 星上智能计算</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">天基智算平台</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">天基智算平台采用标准化、模块化硬件架构，配套开放高效的软件体系，可在卫星严苛的体积、重量、功耗约束条件下，完成在轨高实时、高可靠智能数据处理。该产品已批量配套多个国家重点型号与商业卫星，近百台套在轨常态化稳定运行。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#sat-remote-sensing" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783489865267-25f6b8a7.jpg" alt="地面遥感数据实时处理平台" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">02 · 遥感数据处理</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">地面遥感数据实时处理平台</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">地面遥感数据实时处理平台搭载多型国产计算、智算、存储刀片，一站式完成SAR/光学遥感数据实时接收、解码、快视与0-2级标准化产品生产。设备已多次升级并批量交付，具备工程化稳定运行能力，广泛应用于卫星地面接收站与遥感地面处理中心。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#sat-microwave" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783490048285-d03aafa2.jpg" alt="微波矩阵" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">03 · 射频信号交换</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">微波矩阵</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">全系列微波矩阵开关实现无阻塞全交换，频段覆盖短波至 Ka 等全主流射频频段，矩阵规模支持 32×16 至 1024×1024 超大容量扩展，隔离度、驻波、噪声系数等电气指标优异，支持本地与远程多方式控制及在线运维，广泛适配卫星地面站、通信、监测、雷达测控等多类射频信号交换场景。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a></div></div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 智能控制产品（业务领域 / 智能控制 三级栏目）                  -->
  <!-- ============================================================ -->
  <section id="control-products" class="bg-white py-16 md:py-24 lg:py-28 scroll-mt-20">
    <div class="max-w-container mx-auto px-5 md:px-10 lg:px-16">
      <!-- 区块标题 -->
      <div class="fade-in-up mb-10 lg:mb-12">
        <div class="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-primary-mid mb-5"></div>
        <p class="text-sm font-medium text-primary mb-2">业务领域 / 智能控制</p>
        <h2 class="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">智能控制产品</h2>
        <p id="control-products-intro" class="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">面向多域作战、各种异构平台组网管理、分布执行、联合控制、集中指挥需求，依托国产化计算机、图像处理与显示、组合导航和伺服控制等自研技术积累，推出面向空、天、地协同一体化的智能控制产品。</p>
      </div>
      <!-- 产品列表（数据驱动·卡片入口，点击进入产品独立页） -->
      <div id="control-list"><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"><a href="#ctrl-tsn-flexray" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783487868602-6480f1b1.jpg" alt="TSN+FlexRay 智能控制单元" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">01 · 整车协同控制</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">TSN+FlexRay 智能控制单元</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">TSN+FlexRay 智能控制单元融合 TSN 时间敏感网络与 FlexRay 高可靠总线，以国产飞腾算力为底座，搭载 ReWorks 操作系统，实现整车多系统协同实时管控。整机采用宽温加固设计，适配车载严苛工况，可同时完成 AI 决策与实时任务调度双重运算。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#ctrl-portable-pc" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783487931465-c9a06903.jpg" alt="便携式计算机" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">02 · 加固便携计算</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">便携式计算机</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">便携式计算机多配置可选，集成高性能独立显卡与 CAN、1553B、RS422 等多路接口，整机加固便携、宽温抗振，自带大容量锂电池长续航供电，支持 DC28V/AC220V 双供电，适配野外各类特种作业场景。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#ctrl-soc-redundant" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783487950903-37a6e2ca.jpg" alt="基于 SOC 双冗余控制计算机" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">03 · 冗余实时控制</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">基于 SOC 双冗余控制计算机</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">基于 SOC 双冗余控制计算机采用 FMQL 系列 SOC 双机主从 / 热备冗余设计，搭载 VxWorks、ReWorks 国产实时操作系统，多总线接口齐全，宽温加固结构，可在极端环境下实现高可靠稳定控制。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a></div></div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 智算存储产品（业务领域 / 智算存储 三级栏目）                  -->
  <!-- ============================================================ -->
  <section id="storage-products" class="bg-gray-50 py-16 md:py-24 lg:py-28 scroll-mt-20">
    <div class="max-w-container mx-auto px-5 md:px-10 lg:px-16">
      <!-- 区块标题 -->
      <div class="fade-in-up mb-10 lg:mb-12">
        <div class="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-primary-mid mb-5"></div>
        <p class="text-sm font-medium text-primary mb-2">业务领域 / 智算存储</p>
        <h2 class="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">智算存储产品</h2>
        <p id="storage-products-intro" class="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">面向政务云、国防军工、电力、智慧交通、工业自动化等领域，自研存储控制芯片及固件算法，掌握存储介质全生命周期管理方案，已构建全产业链自主技术体系。打造全国产高可靠固态模组、军工级嵌入式存储芯片及高性能存储板卡产品矩阵。</p>
      </div>
      <!-- 产品列表（数据驱动·卡片入口，点击进入产品独立页） -->
      <div id="storage-list"><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"><a href="#storage-shanhai-module" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783487975305-553d16e3.jpg" alt="“山海”系列国产智算模组" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">01 · 边缘智算模组</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">“山海”系列国产智算模组</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">“山海”系列国产智算模组实现 100% 全栈国产化，引脚兼容主流进口模组，CUDA 生态完全适配，宽温加固设计，可低成本快速替代边缘 AI 算力硬件。最高提供 240TOPS INT8 算力，配套完善开发套件与国产软件生态。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#storage-sata-controller" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783487994951-7f3d6a02.jpg" alt="eMMC存储器" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">02 · eMMC存储器</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">eMMC存储器</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">eMMC存储器为全国产化嵌入式存储介质，产品搭载自研YY2019 eMMC控制器，搭配国产长江存储NAND颗粒，设计、封装、生产全流程自主可控，符合GJB7400-2011军工质量标准、eMMC v5.1协议，兼顾高性能与低功耗，提供工业级、军温级双宽温规格，配套全平台驱动与FPGA端IP适配服务。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#storage-sata-ssd" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783488015904-a9320da7.jpg" alt="系列化NVMe固态硬盘" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">03 · 加固固态硬盘</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">系列化NVMe固态硬盘</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">全系NVMe固态硬盘为全国产化自主可控存储产品，搭载自研NVMe主控芯片，基于PCIe3.0×4、NVMe1.3 协议，覆盖消费标准型、军工加固型多形态硬件，支持软销毁、硬件物理自毁、异常断电保护，宽温加固结构适配严苛工况，兼容国产信创与通用计算机平台，面向军工、信创、工控、机要等高安全存储场景。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a></div></div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 智能网联产品（业务领域 / 智能网联 三级栏目）                  -->
  <!-- ============================================================ -->
  <section id="connected-products" class="bg-white py-16 md:py-24 lg:py-28 scroll-mt-20">
    <div class="max-w-container mx-auto px-5 md:px-10 lg:px-16">
      <!-- 区块标题 -->
      <div class="fade-in-up mb-10 lg:mb-12">
        <div class="w-12 h-1 rounded-full bg-gradient-to-r from-primary to-primary-mid mb-5"></div>
        <p class="text-sm font-medium text-primary mb-2">业务领域 / 智能网联</p>
        <h2 class="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">智能网联产品</h2>
        <p id="connected-products-intro" class="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">面向智能网联汽车、智慧交通路网、现代计量检测、新一代通信技术等领域，依托自研的高性能毫米波雷达测试仪、卫星导航终端测试设备、无线感知测试仪等核心产品矩阵，提供覆盖研发设计、生产制造、检测计量全生命周期的仿真测试产品与一体化解决方案。</p>
      </div>
      <!-- 产品列表（数据驱动·卡片入口，点击进入产品独立页） -->
      <div id="connected-list"><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"><a href="#connected-mmwave-tester" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783488038069-c8d217f1.jpg" alt="毫米波雷达测试仪" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">01 · 毫米波雷达测试</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">毫米波雷达测试仪</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">VRTE 系列毫米波雷达测试仪覆盖 24~94GHz 全毫米波频段，支持多目标高逼真回波模拟，集成信号分析与复杂场景仿真，适配雷达研发、量产全流程测试，提供研发多通道并行、研发在环及产线 EOL 下线检测等差异化机型。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#connected-gnss-tester" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783488053831-19383db0.jpg" alt="卫星导航测试设备" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">02 · 卫星导航测试</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">卫星导航测试设备</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">RGS 系列卫星导航测试设备兼容北斗、GPS 等多全球导航星座，集仿真、记录回放、干扰模拟于一体，覆盖导航终端研发、量产、外场全场景测试，提供台式、便携等多类型设备形态。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a><a href="#connected-isac-tester" class="fade-in-up is-visible group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-card-hover hover:border-primary-mid hover-lift transition-all duration-200">
            <div class="aspect-[4/3] overflow-hidden bg-gray-100"><img src="/sites/www-racodf-com-3880565d/shared/catalog/1783488079257-319b0bbd.jpg" alt="通感融合基站测试仪" loading="lazy" class="w-full h-full object-contain bg-white p-4 group-hover:scale-[1.03] transition-transform duration-300"></div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">03 · 通感融合测试</span>
              <h3 class="mt-3 text-lg font-medium text-gray-900">通感融合基站测试仪</h3>
              <p class="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">通感融合基站测试仪支持全频段通感目标与杂波仿真，多通道并行运算、模块化可扩展，一站式完成通感融合基站研发、外场、产线全流程测试，提供台式与便携可挂载机型。</p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">查看详情 <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"></path></svg></span>
            </div></a></div></div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 产品详情（业务领域产品 · 独立页面，数据驱动）                 -->
  <!-- ============================================================ -->
  `;
