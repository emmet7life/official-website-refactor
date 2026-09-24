"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Phone, Send } from "lucide-react";
import styles from "./ContactPage.module.css";
import newsStyles from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-news/NewsSection.module.css";
import { PageBanner } from "@/components/sites/www-racodf-com-3880565d/page-banner/PageBanner";
import { SectionSideNav } from "@/components/sites/www-racodf-com-3880565d/shared-section-nav/SectionSideNav";

const tabs = [
  { id: "sales", label: "销售网络" },
  { id: "after-sales", label: "售后服务" },
  { id: "supply-chain", label: "供应链合作" },
] as const;
type ContactTab = (typeof tabs)[number]["id"];

function getContactTab(section: string | undefined): ContactTab {
  return tabs.find((item) => item.id === section)?.id ?? "sales";
}

export function ContactPage({ initialSection, sales, quality, commitment }: { initialSection?: string; sales: ReactNode; quality: ReactNode; commitment: ReactNode }) {
  const initialTab = getContactTab(initialSection);
  const [active, setActive] = useState<ContactTab>(initialTab);
  useEffect(() => {
    setActive(initialTab);
  }, [initialTab]);

  function chooseTab(id: ContactTab) {
    setActive(id);
    const params = new URLSearchParams(window.location.search);
    params.set("section", id);
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
  }

  return <div className={styles.page}>
    <PageBanner eyebrow="CONTACT HENGDA" title="联系我们" />
    <div className={styles.surface}>
      <div className={`${newsStyles.content} ${styles.contactLayout} product-center-container`}>
        <SectionSideNav
          title="联系我们"
          ariaLabel="联系我们栏目"
          role="tablist"
          items={tabs.map(({ id, label }) => ({
            key: id,
            label,
            active: active === id,
            onClick: () => chooseTab(id),
          }))}
        />
        <div>
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
            <ContactForm kind="feedback" />
          </div>
        </section>
        <section id="contact-panel-supply-chain" role="tabpanel" aria-labelledby="contact-tab-supply-chain" hidden={active !== "supply-chain"} className={styles.panel}>
          <div className="grid gap-9 rounded-xl border border-slate-200 bg-white p-6 md:grid-cols-2 md:p-10">
            <div><p className="text-xs tracking-[0.2em] text-primary">PARTNER WITH US</p><h2 className="mt-4 text-3xl font-semibold text-slate-900">供应链合作</h2><p className="mt-5 text-base leading-8 text-slate-600">四海合作，天下共赢。我们期待与具备专业能力的合作伙伴建立联系，共同为客户提供可靠的产品与服务。</p><p className="mt-4 text-sm leading-7 text-slate-500">欢迎介绍企业基本情况、主营产品与服务、质量管理能力及合作意向。具体合作范围与要求由双方进一步沟通确认。</p><div className="mt-8 rounded-lg bg-blue-50 p-5 text-sm leading-7 text-slate-600"><h3 className="font-semibold text-slate-900">合作资料准备</h3><p className="mt-2">企业简介与营业资质<br />主要产品、加工或配套服务能力<br />质量体系与相关项目经验<br />业务联系人及联系方式</p></div></div>
            <div><h3 className="mb-5 text-xl font-semibold text-slate-900">合作意向登记</h3><ContactForm kind="supplier" /></div>
          </div>
        </section>
        </div>
      </div>
    </div>
  </div>;
}

function ContactForm({ kind }: { kind: "feedback" | "supplier" }) {
  const [submitted, setSubmitted] = useState(false);
  const supplier = kind === "supplier";
  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }
  return <form className={styles.form} onSubmit={submitForm} onInput={() => setSubmitted(false)}>
    {!supplier ? <label>反馈类型<select name="type"><option>投诉</option><option>建议</option></select></label> : null}
    {supplier ? <label>公司名称<input name="company" autoComplete="organization" required maxLength={120} placeholder="请输入公司名称" /></label> : null}
    <div className="grid gap-4 sm:grid-cols-2"><label>联系人<input name="name" autoComplete="name" required maxLength={50} placeholder="请输入姓名" /></label><label>联系电话<input name="phone" type="tel" autoComplete="tel" required maxLength={40} placeholder="请输入联系电话" /></label></div>
    <label>联系邮箱<input name="email" type="email" autoComplete="email" required maxLength={120} placeholder="请输入电子邮箱" /></label>
    <label>{supplier ? "合作意向" : "反馈内容"}<textarea name="message" required rows={5} maxLength={2000} placeholder={supplier ? "请介绍主营业务、配套能力及合作意向" : "请描述问题或建议，涉及产品时请注明型号"} /></label>
    <button type="submit" disabled={submitted} className="flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:cursor-default disabled:bg-slate-400"><Send size={17} aria-hidden="true" />{submitted ? "已提交" : "提交表单"}</button>
    {submitted ? <p className="text-xs leading-6 text-emerald-700" role="status">提交成功，我们将尽快与您联系！</p> : null}
  </form>;
}
