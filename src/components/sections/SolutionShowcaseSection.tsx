import type { ShowcaseSectionContent } from "../../types/content";
import { ScreenCard } from "../media/ScreenCard";
import { SectionCanvas } from "../primitives/SectionCanvas";
import { SectionHeader } from "../primitives/SectionHeader";
import styles from "./SolutionShowcaseSection.module.css";

interface SolutionShowcaseSectionProps {
  section: ShowcaseSectionContent;
  index: number;
}

export function SolutionShowcaseSection({
  section,
  index
}: SolutionShowcaseSectionProps) {
  const isEditorialLayout =
    section.layout === "editorialWide" ||
    section.layout === "editorialSplit" ||
    section.layout === "editorialBalanced";
  const layoutClass = isEditorialLayout
    ? section.layout === "editorialWide"
      ? styles.editorialWide
      : section.layout === "editorialSplit"
        ? styles.editorialSplit
        : styles.editorialBalanced
    : section.layout === "balanced"
      ? styles.balanced
      : section.screens.length === 2
        ? styles.featured
        : styles.single;

  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={`${styles.layout} ${isEditorialLayout ? styles.layoutEditorial : ""}`}>
        {isEditorialLayout ? (
          <div className={styles.editorialHeader}>
            <p className={styles.editorialKicker}>{section.kicker}</p>
            <h2 className={styles.editorialTitle}>{section.title}</h2>
            <p className={styles.editorialLead}>{section.lead}</p>
            {section.description ? <p className={styles.editorialDescription}>{section.description}</p> : null}
          </div>
        ) : (
          <>
            <SectionHeader kicker={section.kicker} lead={section.lead} title={section.title} />
            {section.description ? <p className={styles.description}>{section.description}</p> : null}
          </>
        )}

        <div className={`${styles.grid} ${layoutClass} ${isEditorialLayout ? styles.gridEditorial : ""}`}>
          {section.screens.map((screen) =>
            isEditorialLayout ? (
              <figure
                className={`${styles.editorialFigure} ${styles[screen.size ?? "feature"]}`}
                key={screen.title ?? screen.src}
              >
                <div className={styles.editorialMedia}>
                  <img
                    className={styles.editorialImage}
                    src={screen.src}
                    alt={screen.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {screen.title || screen.caption ? (
                  <figcaption className={styles.editorialCaption}>
                    {screen.title ? <strong>{screen.title}</strong> : null}
                    {screen.caption ? <span>{screen.caption}</span> : null}
                  </figcaption>
                ) : null}
              </figure>
            ) : (
              <ScreenCard key={screen.title} screen={screen} />
            )
          )}
        </div>
      </div>
    </SectionCanvas>
  );
}
