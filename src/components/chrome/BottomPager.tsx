import type { DeckSection } from "../../types/content";
import styles from "./BottomPager.module.css";

interface BottomPagerProps {
  sections: DeckSection[];
  activeId: string;
}

export function BottomPager({ sections, activeId }: BottomPagerProps) {
  const currentIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === activeId)
  );
  const previous = currentIndex > 0 ? sections[currentIndex - 1] : null;
  const next = currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;

  return (
    <div className={styles.pager} aria-label="翻页控件">
      <div className={styles.inner}>
        {previous ? (
          <a className={styles.button} href={`#${previous.id}`}>
            Prev
          </a>
        ) : (
          <span className={`${styles.button} ${styles.disabled}`}>Prev</span>
        )}

        <p className={styles.status}>
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className={styles.divider}>/</span>
          <span>{String(sections.length).padStart(2, "0")}</span>
          <strong className={styles.currentLabel}>{sections[currentIndex]?.navLabel}</strong>
        </p>

        {next ? (
          <a className={`${styles.button} ${styles.buttonStrong}`} href={`#${next.id}`}>
            Next
          </a>
        ) : (
          <span className={`${styles.button} ${styles.disabled}`}>Next</span>
        )}
      </div>
    </div>
  );
}
