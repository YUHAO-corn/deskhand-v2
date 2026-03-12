import type { BackgroundSectionContent } from "../../types/content";
import { SectionCanvas } from "../primitives/SectionCanvas";
import styles from "./BackgroundSection.module.css";

interface BackgroundSectionProps {
  section: BackgroundSectionContent;
  index: number;
}

export function BackgroundSection({ section, index }: BackgroundSectionProps) {
  const closingParagraph = section.paragraphs[section.paragraphs.length - 1] ?? "";
  const openingParagraphs = section.paragraphs.slice(0, -1);
  const closingLines = closingParagraph.split("\n").filter(Boolean);

  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <div className={styles.prose}>
          <p className={styles.kicker}>{section.kicker}</p>

          <div className={styles.copy}>
            {openingParagraphs.map((paragraph, paragraphIndex) => (
              <p className={styles.paragraph} key={paragraph}>
                {paragraphIndex === 0 ? <span className={styles.paragraphLead}>{paragraph}</span> : paragraph}
              </p>
            ))}
          </div>

          <p className={styles.closingParagraph}>
            <span className={styles.closingLead}>{closingLines[0] ?? ""}</span>
            <span className={styles.closingFollowup}>{closingLines[1] ?? ""}</span>
          </p>
        </div>

        <div aria-hidden="true" className={styles.divider} />

        <div className={styles.mapShell}>
          <img
            alt="Deskhand 结构导图"
            className={styles.mindMap}
            src="/images/logic-chart-refined.svg"
          />
        </div>
      </div>
    </SectionCanvas>
  );
}
