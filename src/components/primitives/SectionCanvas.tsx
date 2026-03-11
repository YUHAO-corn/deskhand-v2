import type { PropsWithChildren } from "react";
import type { SectionTone } from "../../types/content";
import styles from "./SectionCanvas.module.css";

interface SectionCanvasProps extends PropsWithChildren {
  id: string;
  index: number;
  tone: SectionTone;
  className?: string;
}

export function SectionCanvas({ children, className, id, index, tone }: SectionCanvasProps) {
  return (
    <section className={styles.shell} id={id}>
      <article
        className={[styles.canvas, styles[tone], className].filter(Boolean).join(" ")}
        data-section={id}
        data-tone={tone}
      >
        <span className={styles.serial}>{String(index + 1).padStart(2, "0")}</span>
        <span className={styles.corner} aria-hidden="true" />
        {children}
      </article>
    </section>
  );
}
