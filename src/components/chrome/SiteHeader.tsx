import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  onOpenNav: () => void;
}

export function SiteHeader({ onOpenNav }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.kicker}>Deskhand Case Study</p>
          <a href="#hero" className={styles.title}>
            Deskhand
          </a>
        </div>

        <nav className={styles.links} aria-label="Project actions">
          <a
            className={styles.linkChip}
            href="https://github.com/YUHAO-corn/Deskhand"
            target="_blank"
            rel="noreferrer"
          >
            View Repo
          </a>
          <a
            className={styles.linkChip}
            href="https://yuhao-corn.github.io/column/"
            target="_blank"
            rel="noreferrer"
          >
            View Design Notes
          </a>
          <a className={`${styles.linkChip} ${styles.linkStrong}`} href="/resume.txt" download>
            Download Resume
          </a>
        </nav>

        <button className={styles.menuButton} type="button" onClick={onOpenNav}>
          目录
        </button>
      </div>
    </header>
  );
}
