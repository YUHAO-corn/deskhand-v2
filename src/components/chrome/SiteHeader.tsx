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

        <nav className={styles.links} aria-label="作者信息链接">
          <a className={styles.linkChip} href="https://github.com/YUHAO-corn" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={`${styles.linkChip} ${styles.linkStrong}`} href="#why-desktop">
            Decision
          </a>
        </nav>

        <button className={styles.menuButton} type="button" onClick={onOpenNav}>
          目录
        </button>
      </div>
    </header>
  );
}
