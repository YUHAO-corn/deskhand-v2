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
  const isDiagramFocus = decisionLayout === "diagramFocus";
  const imageFrame = section.imageFrame ?? "standard";
  const layoutClassName = [styles.layout, isDiagramFocus ? styles.layoutFocus : ""]
    .filter(Boolean)
    .join(" ");
  const bodyClassName = [
    styles.body,
    decisionLayout === "decisionRail" ? styles.bodyRail : "",
    isDiagramFocus ? styles.bodyFocus : "",
    decisionLayout === "decisionRail" && imageFrame === "wide" ? styles.bodyRailWide : "",
    decisionLayout === "decisionRail" && imageFrame === "square" ? styles.bodyRailSquare : "",
    isDiagramFocus && imageFrame === "wide" ? styles.bodyFocusWide : "",
    isDiagramFocus && imageFrame === "square" ? styles.bodyFocusSquare : ""
  ]
    .filter(Boolean)
    .join(" ");
  const figureClassName = [
    styles.figure,
    decisionLayout === "decisionRail" ? styles.figureRail : "",
    isDiagramFocus ? styles.figureFocus : "",
    imageFrame === "wide" ? styles.figureWide : "",
    imageFrame === "square" ? styles.figureSquare : ""
  ]
    .filter(Boolean)
    .join(" ");
  const sidebarClassName = [
    styles.sidebar,
    decisionLayout === "decisionRail" ? styles.sidebarRail : "",
    isDiagramFocus ? styles.sidebarFocus : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={layoutClassName}>
        {!isDiagramFocus ? (
          <>
            <SectionHeader
              contrast={contrast}
              kicker={section.kicker}
              lead={section.lead}
              title={section.title}
            />
            {section.description ? <p className={styles.description}>{section.description}</p> : null}
          </>
        ) : null}

        <div className={bodyClassName}>
          <figure className={figureClassName}>
            <img src={section.image.src} alt={section.image.alt} loading="lazy" decoding="async" />
          </figure>

          <aside className={sidebarClassName}>
            {isDiagramFocus ? (
              <div className={styles.narrativeRail}>
                <p className={styles.railKicker}>{section.kicker}</p>
                <h2 className={styles.railTitle}>{section.title}</h2>
                <p className={styles.railLead}>{section.lead}</p>
                {section.description ? <p className={styles.railDescription}>{section.description}</p> : null}
              </div>
            ) : null}
            <h3>{section.decisionTitle ?? "关键工程决策"}</h3>
            <div className={decisionLayout === "cards" ? styles.decisionGrid : styles.decisionRail}>
              {section.decisions.map((decision, decisionIndex) =>
                decisionLayout === "cards" ? (
                  <article className={styles.decisionCard} key={decision.title}>
                    <strong>{decision.title}</strong>
                    <p>{decision.body}</p>
                  </article>
                ) : (
                  <article className={styles.railItem} key={decision.title}>
                    <span className={styles.railIndex}>{String(decisionIndex + 1).padStart(2, "0")}</span>
                    <div className={styles.railCopy}>
                      <strong>{decision.title}</strong>
                      <p>{decision.body}</p>
                    </div>
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
