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
  const decisionLayout = section.layout ?? "cards";
  const imageFrame = section.imageFrame ?? "standard";
  const bodyClassName = [
    styles.body,
    decisionLayout === "decisionRail" ? styles.bodyRail : "",
    decisionLayout === "decisionRail" && imageFrame === "wide" ? styles.bodyRailWide : "",
    decisionLayout === "decisionRail" && imageFrame === "square" ? styles.bodyRailSquare : ""
  ]
    .filter(Boolean)
    .join(" ");
  const figureClassName = [
    styles.figure,
    decisionLayout === "decisionRail" ? styles.figureRail : "",
    imageFrame === "wide" ? styles.figureWide : "",
    imageFrame === "square" ? styles.figureSquare : ""
  ]
    .filter(Boolean)
    .join(" ");
  const sidebarClassName = [
    styles.sidebar,
    decisionLayout === "decisionRail" ? styles.sidebarRail : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <SectionHeader
          contrast={contrast}
          kicker={section.kicker}
          lead={section.lead}
          title={section.title}
        />
        {section.description ? <p className={styles.description}>{section.description}</p> : null}

        <div className={bodyClassName}>
          <figure className={figureClassName}>
            <img src={section.image.src} alt={section.image.alt} loading="lazy" decoding="async" />
          </figure>

          <aside className={sidebarClassName}>
            <h3>{section.decisionTitle ?? "关键工程决策"}</h3>
            <div className={decisionLayout === "decisionRail" ? styles.decisionRail : styles.decisionGrid}>
              {section.decisions.map((decision, decisionIndex) =>
                decisionLayout === "decisionRail" ? (
                  <article className={styles.railItem} key={decision.title}>
                    <span className={styles.railIndex}>{String(decisionIndex + 1).padStart(2, "0")}</span>
                    <div className={styles.railCopy}>
                      <strong>{decision.title}</strong>
                      <p>{decision.body}</p>
                    </div>
                  </article>
                ) : (
                  <article className={styles.decisionCard} key={decision.title}>
                    <strong>{decision.title}</strong>
                    <p>{decision.body}</p>
                  </article>
                )
              )}
            </div>
          </aside>
        </div>
      </div>
    </SectionCanvas>
  );
}
