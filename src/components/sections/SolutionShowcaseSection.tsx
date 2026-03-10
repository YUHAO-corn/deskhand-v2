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
  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <SectionHeader kicker={section.kicker} lead={section.lead} title={section.title} />
        <p className={styles.description}>{section.description}</p>
        <div
          className={`${styles.grid} ${section.screens.length === 2 ? styles.twoUp : styles.single}`}
        >
          {section.screens.map((screen) => (
            <ScreenCard key={screen.title} screen={screen} />
          ))}
        </div>
      </div>
    </SectionCanvas>
  );
}
