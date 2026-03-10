import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  kicker: string;
  title: string;
  lead: string;
  contrast?: "light" | "dark";
}

export function SectionHeader({
  contrast = "dark",
  kicker,
  lead,
  title
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${contrast === "light" ? styles.light : ""}`}>
      <p className={styles.kicker}>{kicker}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.lead}>{lead}</p>
    </div>
  );
}
