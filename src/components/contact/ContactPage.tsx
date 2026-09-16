"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Handshake, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import styles from "./ContactPage.module.css";

const tabs = [
  { id: "sales", label: "销售网络", icon: MapPin },
  { id: "after-sales", label: "售后服务", icon: ShieldCheck },
  { id: "supply-chain", label: "供应链合作", icon: Handshake },
] as const;
type ContactTab = (typeof tabs)[number]["id"];

export function ContactPage({ sales, quality, commitment }: { sales: ReactNode; quality: ReactNode; commitment: ReactNode }) {
  const [active, setActive] = useState<ContactTab>("sales");
  useEffect(() => {
    const sync = () => {
      const tab = tabs.find((item) => item.id === window.location.hash.slice(1));
      setActive(tab?.id ?? "sales");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function chooseTab(id: ContactTab) {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  return <div className={styles.page}>
    <section className={styles.hero}>
      <div className="product-center-container">
        <p className="text-xs tracking-[0.25em] text-blue-200">CONTACT HENGDA</p>
        <h1 className="mt-5 text-4xl font-semibold md:text-5xl">联系我们</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-slate-200">从产品选型到售后支持，从需求沟通到合作共赢，<br className="hidden sm:block" />恒达微波期待与您携手同行。</p>
      </div>
    </section>
    <div className={styles.surface}>
      <nav className="product-center-container py-5 text-sm text-slate-500" aria-label="页面路径"><Link href="/" className="hover:text-primary">首页</Link><span className="mx-3">/</span>联系我们</nav>
      <div className="product-center-container">
        <div className={styles.tabs} role="tablist" aria-label="联系我们栏目">
          {tabs.map(({ id, label, icon: Icon }, index) => <button
            type="button" role="tab" id={`contact-tab-${id}`} aria-controls={`contact-panel-${id}`} aria-selected={active === id}
            tabIndex={active === id ? 0 : -1} className={`${styles.tab} ${active === id ? styles.tabActive : ""}`} key={id}
            onClick={() => chooseTab(id)}
            onKeyDown={(event) => {
              const nextIndex = event.key === "ArrowRight" ? (index + 1) % tabs.length : event.key === "ArrowLeft" ? (index + tabs.length - 1) % tabs.length : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : -1;
              if (nextIndex < 0) return;
              event.preventDefault();
              chooseTab(tabs[nextIndex].id);
              document.getElementById(`contact-tab-${tabs[nextIndex].id}`)?.focus();
            }}
          ><Icon size={22} aria-hidden="true" /><span>{label}</span><ArrowUpRight size={18} aria-hidden="true" /></button>)}
        </div>
        <section id="contact-panel-sales" role="tabpanel" aria-labelledby="contact-tab-sales" hidden={active !== "sales"} className={styles.panel}>
          {sales}
        </section>
        <section id="contact-panel-after-sales" role="tabpanel" aria-labelledby="contact-tab-after-sales" hidden={active !== "after-sales"} className={styles.panel}>
          <div className="mb-9"><h2 className="text-2xl font-semibold text-slate-900">售后服务</h2><p className="mt-3 text-sm leading-7 text-slate-500">以可靠品质和持续服务，保障每一次交付。</p></div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-9">
            <h3 className="mb-8 border-b border-slate-100 pb-5 text-xl font-semibold text-slate-900">质量控制与服务承诺</h3>
            <div className="space-y-10">{quality}{commitment}</div>
          </div>
          <div className="mt-7 grid gap-8 rounded-xl border border-slate-200 bg-white p-6 md:grid-cols-[.8fr_1.2fr] md:p-9">
            <div><h3 className="text-xl font-semibold text-slate-900">投诉建议</h3><p className="mt-4 text-sm leading-7 text-slate-600">如有产品质量、服务体验方面的问题或改进建议，请告诉我们。来信请说明产品型号、问题现象及联系方式，便于沟通处理。</p><p className="mt-7 text-sm text-slate-500">电话反馈（总部转接）</p><a href="tel:02985266226" className="mt-2 flex items-center gap-2 text-xl font-semibold text-primary"><Phone size={19} aria-hidden="true" />029-85266226</a></div>
            <ContactMailForm kind="feedback" />
          </div>
        </section>
        <section id="contact-panel-supply-chain" role="tabpanel" aria-labelledby="contact-tab-supply-chain" hidden={active !== "supply-chain"} className={styles.panel}>
          <div className="grid gap-9 rounded-xl border border-slate-200 bg-white p-6 md:grid-cols-2 md:p-10">
            <div><p className="text-xs tracking-[0.2em] text-primary">PARTNER WITH US</p><h2 className="mt-4 text-3xl font-semibold text-slate-900">供应链合作</h2><p className="mt-5 text-base leading-8 text-slate-600">四海合作，天下共赢。我们期待与具备专业能力的合作伙伴建立联系，共同为客户提供可靠的产品与服务。</p><p className="mt-4 text-sm leading-7 text-slate-500">欢迎介绍企业基本情况、主营产品与服务、质量管理能力及合作意向。具体合作范围与要求由双方进一步沟通确认。</p><div className="mt-8 rounded-lg bg-blue-50 p-5 text-sm leading-7 text-slate-600"><h3 className="font-semibold text-slate-900">合作资料准备</h3><p className="mt-2">企业简介与营业资质<br />主要产品、加工或配套服务能力<br />质量体系与相关项目经验<br />业务联系人及联系方式</p></div></div>
            <div><h3 className="mb-5 text-xl font-semibold text-slate-900">合作意向登记</h3><ContactMailForm kind="supplier" /></div>
          </div>
        </section>
      </div>
    </div>
  </div>;
}

function ContactMailForm({ kind }: { kind: "feedback" | "supplier" }) {
  const [prepared, setPrepared] = useState(false);
  const supplier = kind === "supplier";
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const type = supplier ? "供应链合作" : String(data.get("type"));
    const body = `咨询类型：${type}\n公司名称：${data.get("company") ?? ""}\n联系人：${data.get("name")}\n联系电话：${data.get("phone")}\n联系邮箱：${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:marketing@hdmicrowave.com?subject=${encodeURIComponent(`${type}咨询`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  return <form className={styles.form} onSubmit={prepareEmail}>
    {!supplier ? <label>反馈类型<select name="type"><option>投诉</option><option>建议</option></select></label> : null}
    {supplier ? <label>公司名称<input name="company" autoComplete="organization" required maxLength={120} placeholder="请输入公司名称" /></label> : null}
    <div className="grid gap-4 sm:grid-cols-2"><label>联系人<input name="name" autoComplete="name" required maxLength={50} placeholder="请输入姓名" /></label><label>联系电话<input name="phone" type="tel" autoComplete="tel" required maxLength={40} placeholder="请输入联系电话" /></label></div>
    <label>联系邮箱<input name="email" type="email" autoComplete="email" required maxLength={120} placeholder="请输入电子邮箱" /></label>
    <label>{supplier ? "合作意向" : "反馈内容"}<textarea name="message" required rows={5} maxLength={2000} placeholder={supplier ? "请介绍主营业务、配套能力及合作意向" : "请描述问题或建议，涉及产品时请注明型号"} /></label>
    <button type="submit" className="flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark"><Mail size={17} aria-hidden="true" />通过邮件发送</button>
    <p className="text-xs leading-6 text-slate-500" role="status">{prepared ? "已尝试打开邮件客户端，请在邮件中确认发送。" : "填写后将打开您的邮件客户端，请确认内容后发送。"} 也可直接联系 <a className="text-primary" href="mailto:marketing@hdmicrowave.com">marketing@hdmicrowave.com</a>。</p>
  </form>;
}
