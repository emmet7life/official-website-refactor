/* eslint-disable @next/next/no-img-element */
import styles from "./AboutHistorySection.module.css";

const milestones = [
  { year: "1993", description: "西安恒达微波技术开发有限公司于西安市高新技术开发区正式成立。", image: "A1993.jpg" },
  { year: "2003", description: "恒达微波作为“神舟五号”地面测量设备研制的重要配套单位，获得中国空间技术研究院颁发的荣誉匾。", image: "A2003.jpg" },
  { year: "2005", description: "江苏恒达微波技术开发有限公司于江苏东台市成立。", image: "A2005.jpg" },
  { year: "2008", description: "恒达微波被评为陕西省第一批“高新技术企业”。", image: "A2008.jpg" },
  { year: "2012", description: "恒达微波参与研制的微波雷达成功参与“天宫一号”与“神舟八号”两次交会对接任务，并荣获“突出贡献单位”。", image: "A2012.jpg" },
  { year: "2013", description: "恒达微波举行 20 周年庆祝活动，正式迁址西安国家民用航天产业基地。", image: "A2013.jpg" },
  { year: "2017", description: "恒达微波被陕西省中小企业促进局授予陕西省“专精特新”中小企业荣誉称号。", image: "A2017.jpg" },
  { year: "2018", description: "恒达微波空间站探月产品研发生产班组荣获陕西省总工会“工人先锋号”称号；同年，恒达微波产品助力中国“人造小太阳”。", image: "A2018.jpg" },
  { year: "2019", description: "恒达微波与上市公司江苏雷科防务股份有限公司（股票代码：002413）完成重组，成为雷科防务全资子公司。", image: "A2019.jpg" },
  { year: "2022", description: "成立西安雷科达装备智能制造有限公司，为公司向装备智能制造、数字化工厂迈进做好准备。", image: "hengda-site.jpg" },
  { year: "2024", description: "恒达微波智能装备制造项目新址规划：占地 57300㎡，计划总投资 5 亿元。", image: "hengda-site.jpg" },
] as const;

export function AboutHistorySection() {
  return (
    <div id="about-history" className={`about-part ${styles.history}`}>
      <header className={styles.heading}>
        <div>
          <h2>发展历程</h2>
          <p>从微波技术开发起步，持续走向航天配套与装备智能制造。</p>
        </div>
        <span className={styles.range}>1993 <span aria-hidden="true">/</span> 2024</span>
      </header>

      <ol className={styles.records} aria-label="恒达微波发展历程">
        {milestones.map(({ year, description, image }) => (
          <li className={styles.record} key={year}>
            <time className={styles.year} dateTime={year}>{year}</time>
            <p className={styles.description}>{description}</p>
            <div className={styles.image}>
              <img src={`/sites/www-racodf-com-3880565d/shared/history/${image}`} alt="" loading="lazy" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
