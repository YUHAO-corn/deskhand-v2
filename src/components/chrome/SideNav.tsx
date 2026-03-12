import type { DeckSection } from "../../types/content";
import styles from "./SideNav.module.css";

interface SideNavProps {
  sections: DeckSection[];
  activeId: string;
  navOpen: boolean;
  onCloseNav: () => void;
}

export function SideNav({ sections, activeId, navOpen, onCloseNav }: SideNavProps) {
  return (
    <aside className={`${styles.nav} ${navOpen ? styles.navOpen : ""}`} aria-label="章节导航">
      <div className={styles.panel}>
        <div className={styles.head}>
          <div>
            <p className={styles.label}>目录</p>
            <p className={styles.caption}>11-page product case study</p>
          </div>
          <button className={styles.closeButton} type="button" onClick={onCloseNav}>
            关闭
          </button>
        </div>

        <ul className={styles.list}>
          {sections.map((section, index) => {
            const isActive = section.id === activeId;
            return (
              <li key={section.id}>
                <a
                  className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                  href={`#${section.id}`}
                  onClick={onCloseNav}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.copy}>
                    <strong>{section.navLabel}</strong>
                    <em>{section.title}</em>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
