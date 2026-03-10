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
  const layoutClass =
    section.layout === "balanced" ? styles.balanced : section.screens.length === 2 ? styles.featured : styles.single;

  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <SectionHeader kicker={section.kicker} lead={section.lead} title={section.title} />
        {section.description ? <p className={styles.description}>{section.description}</p> : null}
        <div className={`${styles.grid} ${layoutClass}`}>
          {section.screens.map((screen) => (
            <ScreenCard key={screen.title} screen={screen} />
          ))}
        </div>
      </div>
    </SectionCanvas>
  );
}
