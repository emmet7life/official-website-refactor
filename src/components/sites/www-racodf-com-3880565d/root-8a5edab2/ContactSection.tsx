/* Original image sizing is preserved for visual fidelity. */
/* eslint-disable @next/next/no-img-element */
export function ContactSection() {
  return (<>
<section id="contact" className="bg-contact py-16 md:py-24 lg:py-28">
<div className="max-w-container mx-auto px-5 md:px-10 lg:px-16">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

<div>
<div className="fade-in-up w-12 h-1 rounded-full bg-gradient-to-r from-primary to-primary-mid mb-5"></div>
<h2 className="fade-in-up text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">{"业务咨询"}</h2>
<p className="fade-in-up delay-1 mt-4 text-base md:text-lg text-gray-600 leading-relaxed max-w-md">{"无论是产品咨询、商务合作还是媒体采访，欢迎与我们联系"}</p>
<p className="fade-in-up delay-1 mt-8 text-lg md:text-xl font-semibold text-gray-900">{"北京雷科防务科技股份有限公司"}</p>
<div className="mt-6 space-y-6">
<div className="fade-in-up delay-2 flex items-start gap-4">
<div className="w-11 h-11 flex items-center justify-center bg-primary-light rounded text-primary shrink-0">
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"></path></svg>
</div>
<div>
<p className="text-sm text-gray-500">{"电话"}</p>
<p className="mt-1 text-lg font-medium text-gray-900" id="contact-phone">{"010-68916700"}</p>
</div>
</div>
<div className="fade-in-up delay-3 flex items-start gap-4">
<div className="w-11 h-11 flex items-center justify-center bg-primary-light rounded text-primary shrink-0">
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9V3h12v6"></path><rect x="3.5" y="9" width="17" height="7" rx="1.5"></rect><path d="M7 16h10v5H7z"></path><path d="M17.5 12h.01"></path></svg>
</div>
<div>
<p className="text-sm text-gray-500">{"传真"}</p>
<p className="mt-1 text-lg font-medium text-gray-900" id="contact-fax">{"010-68916700-6759"}</p>
</div>
</div>
<div className="fade-in-up delay-4 flex items-start gap-4">
<div className="w-11 h-11 flex items-center justify-center bg-primary-light rounded text-primary shrink-0">
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
</div>
<div>
<p className="text-sm text-gray-500">{"地址"}</p>
<p className="mt-1 text-lg font-medium text-gray-900" id="contact-address">{"北京市海淀区远大南街6号院鲁迅文创园5号楼"}</p>
</div>
</div>
</div>
</div>

<div className="fade-in-up delay-1 bg-white border border-gray-200 shadow-card rounded-xl p-6 md:p-8">
<form id="contact-form" className="space-y-5">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{"姓名 "}<span className="text-red-500">{"*"}</span></label>
<input type="text" id="name" name="name" required placeholder="请输入您的姓名" className="w-full h-11 px-4 rounded border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
</div>
<div>
<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">{"公司名称"}</label>
<input type="text" id="company" name="company" placeholder="请输入公司名称" className="w-full h-11 px-4 rounded border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
</div>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{"联系电话 "}<span className="text-red-500">{"*"}</span></label>
<input type="tel" id="phone" name="phone" required placeholder="请输入手机号码" className="w-full h-11 px-4 rounded border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
</div>
<div>
<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{"电子邮箱"}</label>
<input type="email" id="email" name="email" placeholder="请输入邮箱地址" className="w-full h-11 px-4 rounded border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors" />
</div>
</div>
<div>
<label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">{"咨询类型"}</label>
<select id="type" name="type" className="w-full h-11 px-4 rounded border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors">
<option>{"产品咨询"}</option>
<option>{"商务合作"}</option>
<option>{"媒体采访"}</option>
<option>{"招聘咨询"}</option>
<option>{"投资者咨询"}</option>
<option>{"其他"}</option>
</select>
</div>
<div>
<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{"咨询内容 "}<span className="text-red-500">{"*"}</span></label>
<textarea id="message" name="message" rows={4} required placeholder="请简要描述您的需求" className="w-full px-4 py-3 rounded border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors resize-none"></textarea>
</div>
<label className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed cursor-pointer">
<input type="checkbox" name="consent" className="mt-0.5 shrink-0 w-4 h-4 accent-primary" />
<span>{"我已阅读并同意 "}<button type="button" className="open-privacy text-primary hover:underline">{"《隐私政策》"}</button>{"，同意雷科防务为业务联系与回复目的收集、使用我所填写的个人信息。"}</span>
</label>
<p id="contact-msg" className="hidden text-sm"></p>
<button type="submit" className="w-full h-12 rounded-md bg-primary text-white text-base font-medium hover:bg-primary-dark transition-colors">{"\n              提交咨询\n            "}</button>
</form>
</div>
</div>
</div>
</section>
  </>);
}
