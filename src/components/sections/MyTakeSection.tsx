import type { MyTakeSectionContent } from "../../types/content";
import { SectionCanvas } from "../primitives/SectionCanvas";
import { SectionHeader } from "../primitives/SectionHeader";
import styles from "./MyTakeSection.module.css";

interface MyTakeSectionProps {
  section: MyTakeSectionContent;
  index: number;
}

export function MyTakeSection({ section, index }: MyTakeSectionProps) {
  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <SectionHeader contrast="dark" kicker={section.kicker} title={section.title} />

        <div className={styles.framework}>
          <div className={styles.chainStrip} aria-label={section.title}>
            {section.chain.map((node, nodeIndex) => (
              <div className={styles.chainNodeWrap} key={node.term}>
                <div className={styles.chainNode}>
                  <strong>{node.term}</strong>
                  <span>{node.annotation}</span>
                </div>
                {nodeIndex < section.chain.length - 1 ? (
                  <span className={styles.chainArrow} aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>

          <div className={styles.pillarGrid}>
            {section.pillars.map((pillar) => (
              <article className={styles.pillarCard} key={pillar.term}>
                <h3>{pillar.term}</h3>

                <div className={styles.cardBlock}>
                  <p className={styles.blockLabel}>做了</p>
                  <strong>{pillar.built.feature}</strong>
                  <p>{pillar.built.description}</p>
                </div>

                <div className={styles.divider} aria-hidden="true" />

                <div className={styles.cardBlock}>
                  <p className={styles.blockLabel}>接下来想做的</p>
                  <ul className={styles.nextList}>
                    {pillar.next.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.closingLine}>{section.closingLine}</p>
        </div>
      </div>
    </SectionCanvas>
  );
}
