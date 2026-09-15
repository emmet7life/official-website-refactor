export function ServiceQualitySection({ standalone = false }: { standalone?: boolean }) {
  return <div id="service-quality" className={standalone ? "" : "service-part hidden"}>
    <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-mid" aria-hidden="true" />
    <h3 className="mb-8 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">质量控制</h3>
    <div className="space-y-6 text-sm leading-8 text-gray-600 md:text-base">
      <p>西安恒达微波技术开发有限公司始终坚持质量第一，持续改进，提升顾客满意度，已成熟运行质量管理体系20余年，拥有GB/GJB内审员35人。</p>
      <p>公司设有质量控制部，下设质量管理组、进货检验站、工序检验站、成品检验站、环境试验组，配备三坐标测量仪、影像仪、测高仪、高性能矢量网络分析仪、高低温交变湿热试验箱、三箱式温度冲击试验箱等检测设备。</p>
      <p>现有外场天线测量系统5套，包括暗室远场测量系统3套、平面近场测量系统1套及3毫米波（75-110GHz）远场半自动测试系统1套。专业的质量管理团队和测量设备、系统，是产品质量的保证。</p>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"><h4 className="mb-3 text-lg font-semibold text-gray-900">质量体系</h4><p>公司于2001年首次通过ISO9001:1994国际质量体系认证，并根据产品特点持续优化工作流程，建立完整的质量管理体系。</p></div>
      <p>恒达微波积极导入先进的品质管理方法，以创新技术、可靠设计、传承品质、持续改进，向顾客提供高精度、高品质的卓越产品，秉承“品质至上、匠人精神”的生产服务宗旨。</p>
    </div>
  </div>;
}
