import styles from "./AboutCultureSection.module.css";

const values = ["目标导向", "诚信务实", "团结互助", "勤奋专业"] as const;

const practices = [
  { title: "组织", lines: ["市场引领、产品主站", "项目特战、支撑卷入"] },
  { title: "人才", lines: ["创造价值，勇于承担", "专业追求，善于学习"] },
  { title: "KPI", lines: ["考核衔接战略", "辅导激励员工"] },
] as const;

export function AboutCultureSection() {
  return (
    <div id="about-culture" className={`about-part ${styles.culture}`}>
      <header className={styles.heading}>
        <h2>企业文化</h2>
        <p>以技术立身，以协作推动项目落地。</p>
      </header>

      <section className={styles.mission} aria-labelledby="culture-mission">
        <div>
          <h3 id="culture-mission">使命</h3>
          <p>技术先进，实业报国</p>
        </div>
        <div className={styles.missionSide}>
          <div><h3>愿景</h3><p>成为微波行业的标杆企业</p></div>
          <div><h3>目标</h3><p>以成为卓越的微波供应商为目标</p></div>
        </div>
      </section>

      <section className={styles.values} aria-labelledby="culture-values">
        <div className={styles.sectionHeading}>
          <h3 id="culture-values">价值观</h3>
          <p>共同遵循的做事准则</p>
        </div>
        <ul>{values.map((value) => <li key={value}>{value}</li>)}</ul>
      </section>

      <section className={styles.practices} aria-labelledby="culture-practices">
        <div className={styles.sectionHeading}>
          <h3 id="culture-practices">组织管理</h3>
          <p>让专业能力与项目目标保持一致</p>
        </div>
        <dl>
          {practices.map(({ title, lines }) => (
            <div className={styles.practice} key={title}>
              <dt>{title}</dt>
              <dd>{lines.map((line) => <span key={line}>{line}</span>)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.cooperation} aria-labelledby="culture-cooperation">
        <h3 id="culture-cooperation">服务理念与商业模式</h3>
        <p>四海合作，天下共赢</p>
        <span>供应链管理</span>
      </section>
    </div>
  );
}
