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
      {screen.title || screen.caption ? (
        <figcaption className={styles.caption}>
          {screen.title ? <strong>{screen.title}</strong> : null}
          {screen.caption ? <span>{screen.caption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
