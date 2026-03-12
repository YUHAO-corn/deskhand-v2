import type { ClosingThoughtSectionContent } from "../../types/content";
import { SectionCanvas } from "../primitives/SectionCanvas";
import styles from "./ClosingThoughtSection.module.css";

interface ClosingThoughtSectionProps {
  section: ClosingThoughtSectionContent;
  index: number;
}

export function ClosingThoughtSection({
  section,
  index
}: ClosingThoughtSectionProps) {
  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <div className={styles.headerBlock}>
          <p className={styles.kicker}>{section.kicker}</p>
          <div className={styles.titleBlock}>
            <h2>{section.titleLines[0]}</h2>
            <h2>{section.titleLines[1]}</h2>
          </div>
        </div>

        <div className={styles.spectrumWrap} aria-label={section.title}>
          <div className={styles.spectrumRow}>
            <div className={styles.edgeLabel}>
              <strong>{section.spectrum.leftTitle}</strong>
              <span>{section.spectrum.leftNote}</span>
            </div>

            <div className={`${styles.edgeLabel} ${styles.edgeLabelRight}`}>
              <strong>{section.spectrum.rightTitle}</strong>
              <span>{section.spectrum.rightNote}</span>
            </div>
          </div>

          <div className={styles.centerCluster}>
            <span className={styles.centerDot} aria-hidden="true" />
            <span className={styles.centerStem} aria-hidden="true" />
            <em>{section.spectrum.centerTitle}</em>
            <span className={styles.centerNote}>{section.spectrum.centerNote}</span>
          </div>
          <p className={styles.closingLine}>{section.closingLine}</p>
        </div>
      </div>
    </SectionCanvas>
  );
}
