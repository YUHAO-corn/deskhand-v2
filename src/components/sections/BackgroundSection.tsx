import type { BackgroundSectionContent } from "../../types/content";
import { SectionCanvas } from "../primitives/SectionCanvas";
import styles from "./BackgroundSection.module.css";

interface BackgroundSectionProps {
  section: BackgroundSectionContent;
  index: number;
}

export function BackgroundSection({ section, index }: BackgroundSectionProps) {
  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <div className={styles.prose}>
          <p className={styles.kicker}>{section.kicker}</p>
          {section.paragraphs.map((paragraph) => (
            <p className={styles.paragraph} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionCanvas>
  );
}
