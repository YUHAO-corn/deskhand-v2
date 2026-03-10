import type { ArchitectureSectionContent } from "../../types/content";
import { SectionCanvas } from "../primitives/SectionCanvas";
import { SectionHeader } from "../primitives/SectionHeader";
import styles from "./ArchitectureDecisionSection.module.css";

interface ArchitectureDecisionSectionProps {
  section: ArchitectureSectionContent;
  index: number;
}

export function ArchitectureDecisionSection({
  section,
  index
}: ArchitectureDecisionSectionProps) {
  const contrast = section.tone === "ink" ? "light" : "dark";

  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <SectionHeader
          contrast={contrast}
          kicker={section.kicker}
          lead={section.lead}
          title={section.title}
        />
        <p className={styles.description}>{section.description}</p>

        <div className={styles.body}>
          <figure className={styles.figure}>
            <img src={section.image.src} alt={section.image.alt} loading="lazy" decoding="async" />
          </figure>

          <aside className={styles.sidebar}>
            <h3>关键工程决策</h3>
            <div className={styles.decisionGrid}>
              {section.decisions.map((decision) => (
                <article className={styles.decisionCard} key={decision.title}>
                  <strong>{decision.title}</strong>
                  <p>{decision.body}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </SectionCanvas>
  );
}
