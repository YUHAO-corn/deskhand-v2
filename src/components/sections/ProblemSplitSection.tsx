import type { ProblemSplitSectionContent } from "../../types/content";
import { SectionCanvas } from "../primitives/SectionCanvas";
import { SectionHeader } from "../primitives/SectionHeader";
import styles from "./ProblemSplitSection.module.css";

interface ProblemSplitSectionProps {
  section: ProblemSplitSectionContent;
  index: number;
}

export function ProblemSplitSection({ section, index }: ProblemSplitSectionProps) {
  const contrast = section.tone === "ink" ? "light" : "dark";

  return (
    <SectionCanvas id={section.id} index={index} tone={section.tone}>
      {section.variant === "matrix" ? (
        <div className={styles.matrixLayout}>
          <div className={styles.copyColumn}>
            <SectionHeader
              contrast={contrast}
              kicker={section.kicker}
              lead={section.lead}
              title={section.title}
            />
            <div className={styles.paragraphs}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.signal ? (
              <article className={styles.signalCard}>
                <strong>{section.signal.title}</strong>
                <p>{section.signal.body}</p>
              </article>
            ) : null}
            {section.toolIntro ? <p className={styles.toolIntro}>{section.toolIntro}</p> : null}
            {section.toolCards ? (
              <div className={styles.toolGrid}>
                {section.toolCards.map((tool) => (
                  <article className={styles.toolCard} key={tool.title}>
                    <strong>{tool.title}</strong>
                    <p>{tool.description}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>

          {section.matrix ? (
            <article className={styles.matrixPanel}>
              <p className={styles.panelKicker}>Interaction Space</p>
              <h3>{section.matrix.title}</h3>
              <div className={styles.matrixTable} role="table" aria-label={section.matrix.title}>
                <div className={styles.matrixHead}>
                  <div className={styles.axisEmpty} aria-hidden="true" />
                  {section.matrix.columns.map((column) => (
                    <div className={styles.axisHead} key={column}>
                      {column}
                    </div>
                  ))}
                </div>
                {section.matrix.rows.map((row) => (
                  <div className={styles.matrixRow} key={row.label}>
                    <div className={styles.rowHead}>{row.label}</div>
                    {row.cells.map((cell, cellIndex) => (
                      <article
                        className={`${styles.matrixCell} ${cell.emphasis ? styles.matrixCellEmphasis : ""}`}
                        key={`${row.label}-${cellIndex}`}
                      >
                        {cell.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          ) : null}
        </div>
      ) : null}

      {section.variant === "chain" ? (
        <div className={styles.chainLayout}>
          <div className={styles.chainTop}>
            <div className={styles.copyColumn}>
              <SectionHeader
                contrast={contrast}
                kicker={section.kicker}
                lead={section.lead}
                title={section.title}
              />
              <div className={styles.paragraphs}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className={styles.insightGrid}>
              {section.insightCards?.map((card) => (
                <article className={styles.insightCard} key={card.title}>
                  <p className={styles.insightTitle}>{card.title}</p>
                  {card.stat ? <strong className={styles.insightStat}>{card.stat}</strong> : null}
                  <p className={styles.insightBody}>{card.body}</p>
                  {card.tags ? (
                    <div className={styles.tagRow}>
                      {card.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          {section.chain ? (
            <article className={styles.chainBoard}>
              <p className={styles.chainHypothesis}>{section.chain.hypothesis}</p>
              <div className={styles.chainRows}>
                <div className={styles.chainRow}>
                  <span className={styles.chainTag}>{section.chain.oldPath.label}</span>
                  <div className={styles.chainCopy}>
                    <strong>{section.chain.oldPath.flow}</strong>
                    <p>{section.chain.oldPath.note}</p>
                  </div>
                </div>
                <div className={`${styles.chainRow} ${styles.chainRowNew}`}>
                  <span className={`${styles.chainTag} ${styles.chainTagNew}`}>
                    {section.chain.newPath.label}
                  </span>
                  <div className={styles.chainCopy}>
                    <strong>{section.chain.newPath.flow}</strong>
                    <p>{section.chain.newPath.note}</p>
                  </div>
                </div>
              </div>
            </article>
          ) : null}
        </div>
      ) : null}

      {section.variant === "stories" ? (
        <div className={styles.storiesLayout}>
          <SectionHeader
            contrast={contrast}
            kicker={section.kicker}
            lead={section.lead}
            title={section.title}
          />
          <div className={styles.storiesGrid}>
            {section.painCard ? (
              <article className={styles.sidePane}>
                <h3>{section.painCard.title}</h3>
                {section.painCard.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ) : null}

            <div className={styles.storyCardGrid}>
              {section.storyCards?.map((story) => (
                <article className={styles.storyCard} key={story.title}>
                  <p className={styles.storyKicker}>{story.kicker}</p>
                  <h3>{story.title}</h3>
                  {story.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>

            {section.solutionCard ? (
              <article className={`${styles.sidePane} ${styles.solutionPane}`}>
                <h3>{section.solutionCard.title}</h3>
                <p>{section.solutionCard.intro}</p>
                <ul>
                  {section.solutionCard.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </div>
      ) : null}
    </SectionCanvas>
  );
}
