import type { HeroSectionContent } from "../../types/content";
import { SectionCanvas } from "../primitives/SectionCanvas";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  section: HeroSectionContent;
  index: number;
}

export function HeroSection({ section, index }: HeroSectionProps) {
  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <div className={styles.copyTop}>
            <p className={styles.eyebrow}>{section.eyebrow}</p>
            <h1 className={styles.title}>{section.title}</h1>
            <p className={styles.subtitle}>{section.subtitle}</p>
            {section.summary ? <p className={styles.summary}>{section.summary}</p> : null}
          </div>

          <div className={styles.copyBottom}>
            <div className={styles.metrics}>
              {section.metrics.map((metric) => (
                <article className={styles.metricCard} key={metric.label}>
                  <p>{metric.label}</p>
                  <strong>{metric.value}</strong>
                </article>
              ))}
            </div>

            <div className={styles.stackBlock}>
              {section.note ? <p className={styles.note}>{section.note}</p> : null}
              <ul className={styles.stack} aria-label="技术栈">
                {section.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualMat} aria-hidden="true" />
          <div className={styles.visualFrame}>
            <img src={section.image.src} alt={section.image.alt} loading="eager" decoding="async" />
          </div>
          {section.image.title || section.image.caption ? (
            <div className={styles.visualCaption}>
              {section.image.title ? <strong>{section.image.title}</strong> : null}
              {section.image.caption ? <span>{section.image.caption}</span> : null}
            </div>
          ) : null}
        </div>
      </div>
    </SectionCanvas>
  );
}
