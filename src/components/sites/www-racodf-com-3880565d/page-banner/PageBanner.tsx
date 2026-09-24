import Link from "next/link";
import styles from "./PageBanner.module.css";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  backgroundImage?: string;
  parentCrumb?: { label: string; href: string };
};

export function PageBanner({ eyebrow, title, subtitle, theme = "light", backgroundImage, parentCrumb }: PageBannerProps) {
  const style = backgroundImage ? { backgroundImage: `url("${backgroundImage}")` } : undefined;
  return <section className={`${styles.banner} ${styles[theme]}`} style={style} aria-labelledby="page-banner-title">
    <div className={styles.inner}>
      <div className={styles.tag}>{eyebrow}</div>
      <h1 id="page-banner-title" className={styles.title}>{title}</h1>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      <div className={styles.crumb} aria-label="面包屑导航">
        <Link href="/">首页</Link><span aria-hidden="true">/</span>
        {parentCrumb ? <><Link href={parentCrumb.href}>{parentCrumb.label}</Link><span aria-hidden="true">/</span></> : null}
        <span className={styles.current}>{title}</span>
      </div>
    </div>
  </section>;
}
