import Link from "next/link";
import Image from "next/image";
import styles from "./CustomMachiningPage.module.css";

const machiningProducts = [
  ["p01.png", "精密加工零件"], ["p02.png", "精密加工零件"], ["p03.png", "精密加工零件"],
  ["p04.png", "五轴加工件"], ["p05.png", "精密加工零件"], ["p06.png", "精密加工零件"],
  ["p07.png", "精密加工零件"], ["p08.png", "慢走丝产品"], ["p09.png", "双头定制铣床产品·缝隙波导"], ["p10.png", "四轴加工产品"],
] as const;

const compositeProducts = [
  ["c01.png", "吸波材料"], ["c02.png", "反射面"], ["c03.png", "复材结构件"],
  ["c04.png", "羰基铁吸波材料"], ["c05.png", "天线罩"], ["c06.png", "吸波材料"], ["c07.png", "吸波材料"],
] as const;

const assetRoot = "/sites/www-racodf-com-3880565d/custom-machining/";

function SectionHeading({ children }: { children: string }) {
  return <div className={styles.sectionHeading}><span aria-hidden="true" /><h2>{children}</h2></div>;
}

function ProductGrid({ products }: { products: readonly (readonly [string, string])[] }) {
  return <div className={styles.grid}>{products.map(([image, label]) => <article className={styles.card} key={image}>
    <div className={styles.cardImage}><Image src={`${assetRoot}${image}`} alt={label} width={600} height={450} loading="lazy" /></div>
    <div className={styles.cardName}>{label}</div>
  </article>)}</div>;
}

export function CustomMachiningPage() {
  return <div className={styles.page}>
    <section className={styles.hero}>
      <h1>来图加工系列产品</h1>
      <p>依托精密数控加工与复合材料成型能力，提供机械加工零件、复材制件及羰基铁吸波材料等来图定制加工服务，满足客户多样化需求。</p>
      <nav className={styles.breadcrumb} aria-label="面包屑导航"><Link href="/">首页</Link><span> / </span><Link href="/productcenter">产品中心</Link><span> / </span><strong>来图加工系列产品</strong></nav>
    </section>
    <section className={styles.section} id="machining"><div className={styles.container}><SectionHeading>机械加工零件</SectionHeading><ProductGrid products={machiningProducts} /></div></section>
    <section className={`${styles.section} ${styles.alt}`} id="composite"><div className={styles.container}><SectionHeading>复材制件及羰基铁吸波材料</SectionHeading><ProductGrid products={compositeProducts} /></div></section>
  </div>;
}
