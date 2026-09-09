export function SiteDialogs() {
  return (<>
<div aria-label="站内搜索" aria-modal="true" className="fixed inset-0 z-[80] hidden bg-ink/80 backdrop-blur-sm px-5 pt-24 md:pt-32" id="search-modal" role="dialog">
<div className="max-w-2xl mx-auto">
<div className="relative">
<svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
<input autoComplete="off" className="w-full h-14 pl-12 pr-12 rounded-xl bg-white text-gray-900 text-base shadow-modal focus:outline-none focus:ring-2 focus:ring-primary/30" id="search-input" type="text" />
<button aria-label="关闭" className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors" id="search-close" type="button">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"></path></svg>
</button>
</div>
<div className="mt-3 bg-white rounded-xl shadow-modal overflow-hidden max-h-[60vh] overflow-y-auto" id="search-results"></div>
<p className="mt-3 text-center text-xs text-white/60" id="search-hint"></p>
</div>
</div><div aria-label="隐私政策" aria-modal="true" className="fixed inset-0 z-[90] hidden items-center justify-center bg-gray-900/70 px-5 py-10" id="privacy-modal" role="dialog">
<div className="w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-white rounded-xl shadow-xl">
<div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
<h3 className="text-lg font-semibold text-gray-900">{"隐私政策"}</h3>
<button aria-label="关闭" className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors" id="privacy-close" type="button">{"✕"}</button>
</div>
<div className="px-6 py-5 space-y-4 text-sm text-gray-600 leading-relaxed">
<p>{"北京雷科防务科技股份有限公司（以下简称\"我们\"）尊重并保护您的个人信息。本政策说明我们如何收集、使用和保护您通过本网站提交的信息。"}</p>
<div><p className="font-semibold text-gray-900 mb-1">{"一、我们收集的信息"}</p><p>{"当您通过\"业务咨询/留资\"提交时，我们收集您主动填写的姓名、联系电话、公司名称及需求说明；为保障网站安全与正常运行，服务器会记录基本访问日志（如 IP 地址、访问时间、页面）。"}</p></div>
<div><p className="font-semibold text-gray-900 mb-1">{"二、使用目的"}</p><p>{"所收集信息仅用于回复您的咨询、开展业务联系及向您提供相关资料，不会用于与上述目的无关的用途。"}</p></div>
<div><p className="font-semibold text-gray-900 mb-1">{"三、共享与披露"}</p><p>{"我们不会出售您的个人信息；除依据法律法规要求或为完成您主动发起的请求所必需外，不会向第三方提供。"}</p></div>
<div><p className="font-semibold text-gray-900 mb-1">{"四、存储与安全"}</p><p>{"信息存储于我们受控的服务器，并采取访问控制、传输加密（HTTPS）等合理措施保护其安全；保存期限不超过实现上述目的所必需的期间。"}</p></div>
<div><p className="font-semibold text-gray-900 mb-1">{"五、您的权利"}</p><p>{"您有权查询、更正、删除您的个人信息或撤回同意。如需行使上述权利，请通过下方方式联系我们。"}</p></div>
<div><p className="font-semibold text-gray-900 mb-1">{"六、联系我们"}</p><p>{"邮箱：market@racodf.com；地址：北京市海淀区远大南街6号院鲁迅文创园5号楼。"}</p></div>
<p className="text-xs text-gray-400">{"本政策可能适时更新，更新后将在本页面公布。"}</p>
</div>
</div>
</div><div aria-label="法律声明" aria-modal="true" className="fixed inset-0 z-[90] hidden items-center justify-center bg-gray-900/70 px-5 py-10" id="legal-modal" role="dialog">
<div className="w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-white rounded-xl shadow-xl">
<div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
<h3 className="text-lg font-semibold text-gray-900">{"法律声明"}</h3>
<button aria-label="关闭" className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors" id="legal-close" type="button">{"✕"}</button>
</div>
<div className="px-6 py-5 space-y-5 text-sm text-gray-600 leading-relaxed">
<div>
<p className="font-semibold text-gray-900 mb-1.5">{"一、版权与知识产权声明"}</p>
<p>{"本网站全部内容，包括文字、图文、图表、LOGO、视觉设计、创意文案、软件程序、音视频素材等知识产权均归本公司及内容信息提供方所有，受《中华人民共和国著作权法》及国际相关版权公约保护。"}</p>
<p className="mt-2">{"本公司对站内全部内容享有复制、汇编、改编、传播等排他性权利。未经本公司书面正式授权，任何单位或个人不得擅自转载、摘抄、篡改、商用、镜像建站。确需转载公开资讯内容，转载时必须完整标注来源及本公司全称，不得歪曲、删减原文内容。"}</p>
<p className="mt-2">{"网站配套系统、软件程序、技术程序的知识产权归属本公司或合作供应商，禁止逆向解析、破解、二次分发、仿制。除个人非商业浏览查阅外，本网站不授予访客任何专利、商标、软件著作相关明示或隐含授权。"}</p>
</div>
<div>
<p className="font-semibold text-gray-900 mb-1.5">{"二、信息发布使用条款"}</p>
<p>{"本站仅允许用户基于合法目的使用，包括产品信息查阅、线上业务咨询、技术沟通、留言反馈等合规场景。"}</p>
<ol className="list-decimal pl-5 mt-2 space-y-1.5">
<li>{"用户禁止发布虚假、夸大、不实、涉黄涉暴、违反公序良俗或违法违规内容；若用户违反本条约定，我司有权直接屏蔽留言、限制账号使用权限，并保留终止全部线上服务、追究对应法律责任的权利。"}</li>
<li>{"用户发布的所有留言、咨询内容，不得违反《网络安全法》《个人信息保护法》及国家、地方互联网管理相关法律法规。"}</li>
<li>{"用户自主发布内容，由发布方独立承担全部解释义务与法律责任，因违规言论引发的一切纠纷、赔偿均由用户自行承担。"}</li>
<li>{"本公司拥有对用户留言、提交信息的完整管理权限，可随时审核、修改、隐藏、删除违规内容，无需提前告知用户。"}</li>
<li>{"未经本公司书面许可，用户不得将网站图文、产品资料、技术方案、宣传素材用于商业宣传、招投标、对外推广等商业用途。"}</li>
</ol>
</div>
<div>
<p className="font-semibold text-gray-900 mb-1.5">{"三、服务变更与终止条款"}</p>
<ol className="list-decimal pl-5 space-y-1.5">
<li>{"本公司有权独立判定用户行为是否违反本声明全部条款，一旦认定用户存在违规行为，可立即关闭用户留言、咨询权限，删除用户留存信息，终止全部线上服务。"}</li>
<li>{"本公司可根据业务调整、平台升级、系统维护需求，随时修改、暂停、关闭网站部分或全部免费线上服务，无需提前通知用户及第三方。"}</li>
</ol>
</div>
<div>
<p className="font-semibold text-gray-900 mb-1.5">{"四、免责条款"}</p>
<ol className="list-decimal pl-5 space-y-1.5">
<li>{"本网站不承诺网站服务永久稳定不间断，无法保证服务器零故障、无延迟；因网站维护、系统升级、运营商网络故障造成服务中断、用户咨询信息丢失，本公司不承担任何赔偿责任。"}</li>
<li>{"本公司仅对自身官方发布的产品参数、技术方案、企业介绍信息的真实性、合法性负责；第三方用户留言、外部链接内容仅供参考，访客需自行核验真伪，因采信第三方信息产生的损失由访客自行承担。"}</li>
<li>{"网站所有产品介绍、技术效果描述为标准测试环境下参考结果，实际使用效果受安装环境、使用场景、配套条件影响，不构成产品性能绝对承诺。"}</li>
<li>{"本站提供第三方合作平台、合作企业链接仅作信息展示，不代表我方担保第三方产品、服务质量，访问外部链接产生的风险由访客自行承担。"}</li>
</ol>
</div>
<div>
<p className="font-semibold text-gray-900 mb-1.5">{"五、服务条款修订规则"}</p>
<p>{"本公司保留随时修订本法律声明、隐私政策、网站使用条款的权利。条款更新后将在网站首页、底部公示更新内容，用户继续浏览、使用本网站，即视为自愿接受更新后的全部条款；若不认可修订内容，用户可停止访问本站。"}</p>
</div>
<div>
<p className="font-semibold text-gray-900 mb-1.5">{"六、外部链接与外链规范"}</p>
<ol className="list-decimal pl-5 space-y-1.5">
<li>{"任何第三方网站如需建立本站外链，必须提前取得本公司书面许可。外链不得使用框架嵌套、篡改页面视觉样式；不得虚构合作关系，不得误导公众、损害企业品牌商誉。我方有权随时撤销外链许可，第三方需立即删除全部链接及我方 LOGO、商标素材。"}</li>
<li>{"严禁任何企业、个人批量抓取全站数据、搭建镜像网站、仿冒本官方网站。"}</li>
</ol>
</div>
<div>
<p className="font-semibold text-gray-900 mb-1.5">{"七、提交信息使用权约定"}</p>
<p>{"访客向本站提交的产品建议、技术创意、优化方案等内容，视为授予我司无期限、无地域限制的无偿使用权，我司可自由落地应用，无需另行支付费用；但本公司不会未经许可公开访客个人身份信息。"}</p>
</div>
<div>
<p className="font-semibold text-gray-900 mb-1.5">{"八、法律适用与争议管辖"}</p>
<p>{"本法律声明的订立、履行、解释及争议解决均适用中华人民共和国现行法律。"}</p>
<p className="mt-2">{"若就本网站使用、本声明产生任何纠纷，双方同意交由本公司住所地有管辖权的人民法院诉讼解决。"}</p>
<p className="mt-2">{"若本声明任一条款因法律调整被认定无效，其余条款效力不受影响。"}</p>
</div>
</div>
</div>
</div>
  </>);
}
