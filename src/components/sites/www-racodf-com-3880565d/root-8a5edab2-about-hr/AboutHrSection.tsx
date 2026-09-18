"use client";

import { useEffect, useState } from "react";
import { ArrowRight, BriefcaseBusiness, GraduationCap, X } from "lucide-react";
import jobs from "./reference-jobs.json";
import styles from "./AboutHrSection.module.css";

type Category = "all" | "social" | "campus" | "graduate";
type Job = (typeof jobs)[number];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "全部" }, { id: "social", label: "社会招聘" },
  { id: "campus", label: "校园招聘" }, { id: "graduate", label: "研究生" },
];
const benefits = [
  ["薪酬与晋升", "宽带化薪酬体系、健全的培训制度、开阔的晋升途径。"],
  ["福利保障", "五险一金、企业年金、免费公寓、午餐及交通补助、绩效奖金、年终奖金、旅游基金、节日福利、定期免费体检。"],
  ["工作环境", "舒适的工作环境、行业内顶端的技术交流，以及丰富的职工文化生活。"],
] as const;
const trainingPoints = ["承担连接技术前沿性课题及产业技术拓展研究", "资深工程师与高校导师联合指导", "覆盖航空、航天、通信、电子等多领域应用", "完善的科研平台与职业发展通道"];
const trainingCards = [
  ["联合培养", "与高校共建研究生联合培养基地，校企双导师协同育人。"],
  ["导师团队", "资深技术专家与学科带头人组成联合指导团队。"],
  ["科研平台", "开放微波测试、环境试验与精密制造等科研平台。"],
  ["职业发展", "优秀毕业生可优先纳入研发与工程核心岗位。"],
] as const;

function SectionTitle({ children }: { children: string }) {
  return <div className={styles.sectionHeading}><span aria-hidden="true" /><h2>{children}</h2></div>;
}

export function AboutHrSection() {
  const [category, setCategory] = useState<Category>("all");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!selectedJob) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedJob(null); };
    document.addEventListener("keydown", onEscape);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onEscape); };
  }, [selectedJob]);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  return <div id="about-hr" className={styles.page}>
    <section className={styles.hero} aria-labelledby="hr-title">
      <h1 id="hr-title">人力资源</h1>
      <p>招聘动态 · 研究生培养 · 与恒达共成长</p>
    </section>

    <section id="channels" className={styles.section}><div className={styles.container}>
      <div className={styles.channelBanner}><div className={styles.channelBackground} aria-hidden="true" /><div className={styles.channelContent}>
        <div><h2>加入我们</h2><p>选择合适的招聘通道，与恒达共成长</p></div>
        <div className={styles.channelCards}>
          <button type="button" className={styles.channelCard} onClick={() => setToast("社会招聘通道即将上线，敬请期待")}><span className={styles.channelIcon}><BriefcaseBusiness strokeWidth={1.2} aria-hidden="true" /></span><span><b>社会招聘</b><small>面向社会成熟人才 · 岗位实时更新</small></span><ArrowRight className={styles.channelArrow} aria-hidden="true" /></button>
          <button type="button" className={styles.channelCard} onClick={() => setToast("校园招聘通道即将上线，敬请期待")}><span className={styles.channelIcon}><GraduationCap strokeWidth={1.2} aria-hidden="true" /></span><span><b>校园招聘</b><small>面向应届毕业生 · 研究生联合培养</small></span><ArrowRight className={styles.channelArrow} aria-hidden="true" /></button>
        </div>
      </div></div>
    </div></section>

    <section id="recruitment" className={styles.section}><div className={styles.container}>
      <SectionTitle>招聘动态</SectionTitle>
      <div className={styles.tabs} role="group" aria-label="招聘类别">{categories.map((item) => <button key={item.id} type="button" aria-pressed={category === item.id} className={`${styles.tab} ${category === item.id ? styles.activeTab : ""}`} onClick={() => setCategory(item.id)}>{item.label}</button>)}</div>
      <h3 className={styles.blockTitle}>招聘岗位</h3>
      <div className={styles.jobGrid}>{jobs.filter((job) => category === "all" || job.category === category).map((job) => <button key={job.title} type="button" className={styles.jobCard} onClick={() => setSelectedJob(job)}><h4>{job.title}</h4><span className={styles.jobTag}>{job.label}</span></button>)}</div>
      <h3 className={styles.blockTitle}>福利待遇</h3>
      <div className={styles.benefitGrid}>{benefits.map(([title, description]) => <div key={title} className={styles.benefitCard}><h4>{title}</h4><p>{description}</p></div>)}</div>
    </div></section>

    <section id="training" className={styles.section}><div className={styles.container}>
      <SectionTitle>研究生培养</SectionTitle>
      <div className={styles.trainingFeature}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sites/www-racodf-com-3880565d/hr/hr-grow.jpg" alt="研究生联合培养" />
        <div><h3>研究生联合培养</h3><p>公司与多所高校共建研究生联合培养基地，围绕微波连接技术、天线与射频系统、智能制造等方向开展前沿课题研究，为优秀学子提供科研实践与职业发展的广阔平台。</p><ul>{trainingPoints.map((point) => <li key={point}>{point}</li>)}</ul></div>
      </div>
      <div className={styles.trainingGrid}>{trainingCards.map(([title, description]) => <div key={title} className={styles.trainingCard}><h4>{title}</h4><p>{description}</p></div>)}</div>
    </div></section>

    <section id="hr-contact" className={styles.section}><div className={styles.container}>
      <SectionTitle>人事行政联系方式</SectionTitle>
      <div className={styles.contactCard}>
        <div><b>联系方式</b><span>029-85224787 / 85380639 / 84500096 / 15365780590</span></div>
        <div><b>联系人</b><span>姬女士　高女士　纪女士</span></div>
        <div><b>简历投递邮箱</b><a href="mailto:hd@hdmicrowave.com">hd@hdmicrowave.com</a></div>
        <div><b>单位地址</b><span>西安市国家民用航天产业基地飞天路485号 / 江苏省盐城市东台市时堰镇镇南工业区江苏恒达微波技术开发有限公司</span></div>
      </div>
    </div></section>

    {toast ? <div className={styles.toast} role="status">{toast}</div> : null}
    {selectedJob ? <div className={styles.modal} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedJob(null); }}><div className={styles.modalPanel} role="dialog" aria-modal="true" aria-labelledby="job-modal-title"><button type="button" className={styles.modalClose} aria-label="关闭岗位详情" onClick={() => setSelectedJob(null)}><X size={20} /></button><h2 id="job-modal-title">{selectedJob.title}</h2><span className={styles.jobTag}>{selectedJob.label}</span><ol>{selectedJob.requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ol></div></div> : null}
  </div>;
}
