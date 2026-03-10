import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  onOpenNav: () => void;
}

export function SiteHeader({ onOpenNav }: SiteHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.kicker}>Showcase V2</p>
          <a href="#hero" className={styles.title}>
            Deskhand / Yuhao
          </a>
        </div>

        <nav className={styles.links} aria-label="作者信息链接">
          <a className={styles.linkChip} href="https://github.com/YUHAO-corn" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={styles.linkChip} href="mailto:yuhao@example.com">
            Email
          </a>
          <a className={`${styles.linkChip} ${styles.linkStrong}`} href="/resume.txt" download>
            Resume
          </a>
        </nav>

        <button className={styles.menuButton} type="button" onClick={onOpenNav}>
          Sections
        </button>
      </div>
    </header>
  );
}
