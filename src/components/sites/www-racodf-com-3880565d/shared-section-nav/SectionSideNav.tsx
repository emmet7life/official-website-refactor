import Link from "next/link";
import styles from "./SectionSideNav.module.css";

export type SectionSideNavItem = {
  key: string;
  label: string;
  href?: string;
  active?: boolean;
  count?: number;
  onClick?: () => void;
};

type SectionSideNavProps = {
  title: string;
  items: readonly SectionSideNavItem[];
  ariaLabel: string;
  role?: string;
};

export function SectionSideNav({ title, items, ariaLabel, role }: SectionSideNavProps) {
  return (
    <aside className={styles.side} aria-label={ariaLabel}>
      <div className={styles.sideHead}>{title}</div>
      <div className={styles.sideList} role={role}>
        {items.map((item) => {
          const className = `${styles.sideLink} ${item.active ? styles.sideLinkActive : ""}`;
          const content = (
            <>
              <span>{item.label}</span>
              {typeof item.count === "number" ? <span className={styles.count}>{item.count}</span> : null}
            </>
          );

          if (item.onClick) {
            return (
              <button key={item.key} type="button" className={className} onClick={item.onClick}>
                {content}
              </button>
            );
          }

          return (
            <Link key={item.key} href={item.href ?? "#"} className={className} aria-current={item.active ? "page" : undefined}>
              {content}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
