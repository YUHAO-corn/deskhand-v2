import type { ScreenAsset } from "../../types/content";
import styles from "./ScreenCard.module.css";

interface ScreenCardProps {
  screen: ScreenAsset;
}

export function ScreenCard({ screen }: ScreenCardProps) {
  return (
    <figure className={`${styles.card} ${styles[screen.size ?? "feature"]}`}>
      <div className={styles.frame}>
        <img className={styles.image} src={screen.src} alt={screen.alt} loading="lazy" decoding="async" />
      </div>
      <figcaption className={styles.caption}>
        <strong>{screen.title}</strong>
        <span>{screen.caption}</span>
      </figcaption>
    </figure>
  );
}
