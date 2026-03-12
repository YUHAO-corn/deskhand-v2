import type { ComparisonMatrixSectionContent } from "../../types/content";
import { SectionCanvas } from "../primitives/SectionCanvas";
import { SectionHeader } from "../primitives/SectionHeader";
import styles from "./ComparisonMatrixSection.module.css";

interface ComparisonMatrixSectionProps {
  section: ComparisonMatrixSectionContent;
  index: number;
}

export function ComparisonMatrixSection({
  section,
  index
}: ComparisonMatrixSectionProps) {
  const contrast = section.tone === "ink" ? "light" : "dark";

  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      <div className={styles.layout}>
        <div className={styles.copyColumn}>
          <SectionHeader contrast={contrast} kicker={section.kicker} lead={section.lead} title={section.title} />

          <article className={styles.thesisCard}>
            <h3>{section.thesis.title}</h3>
            <p>{section.thesis.body}</p>
          </article>

          <div className={styles.principles}>
            {section.principles.map((principle) => (
              <article className={styles.principleCard} key={principle.title}>
                <strong>{principle.title}</strong>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.matrixColumn}>
          <article className={styles.matrixCard}>
            <p className={styles.matrixTitle}>形态对比矩阵</p>
            <table className={styles.table} aria-label="CLI Web Desktop 形态对比">
              <thead>
                <tr>
                  <th>评估维度</th>
                  {section.matrix.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.matrix.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.values.map((value, valueIndex) => (
                      <td className={value.best ? styles.best : ""} key={`${row.label}-${valueIndex}`}>
                        {value.text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className={styles.ruleCard}>
            <p className={styles.ruleLabel}>{section.decisionRule.label}</p>
            <p className={styles.ruleText}>{section.decisionRule.text}</p>
            <div className={styles.ruleTags}>
              {section.decisionRule.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </SectionCanvas>
  );
}
