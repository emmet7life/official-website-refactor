import Image from "next/image";
import { PageBanner } from "@/components/sites/www-racodf-com-3880565d/page-banner/PageBanner";
import styles from "./CustomMachiningPage.module.css";

const machiningProducts = [
  "p01.png", "p02.png", "p03.png", "p04.png", "p05.png", "p06.png",
  "p07.png", "p08.png", "p09.png", "p10.png",
] as const;

const compositeProducts = ["c01.png", "c02.png", "c03.png", "c04.png", "c05.png", "c06.png", "c07.png"] as const;

const assetRoot = "/sites/www-racodf-com-3880565d/custom-machining/";

function ProductGrid({ products }: { products: readonly string[] }) {
  return <div className={styles.grid}>{products.map((image, index) => <article className={styles.card} key={image}>
    <div className={styles.cardImage}><Image src={`${assetRoot}${image}`} alt={`来图加工产品图 ${index + 1}`} width={600} height={450} loading="lazy" /></div>
  </article>)}</div>;
}

export function CustomMachiningPage() {
  return <div className={styles.page}>
    <PageBanner eyebrow="CUSTOM MACHINING" title="来图加工系列产品" parentCrumb={{ label: "产品中心", href: "/productcenter" }} />
    <section className={styles.section} id="machining"><div className={styles.container}><ProductGrid products={machiningProducts} /></div></section>
    <section className={`${styles.section} ${styles.alt}`} id="composite"><div className={styles.container}><ProductGrid products={compositeProducts} /></div></section>
  </div>;
}
