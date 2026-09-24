import { PageBanner } from "../page-banner/PageBanner";
import styles from "./AboutHrSection.module.css";

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
  return <div id="about-hr" className={styles.page}>
    <PageBanner eyebrow="HUMAN RESOURCES" title="人力资源" />

    <section id="talent" className={styles.section}><div className={styles.container}>
      <SectionTitle>人才理念</SectionTitle>
      <div className={styles.placeholder}>内容待补充</div>
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
  </div>;
}
