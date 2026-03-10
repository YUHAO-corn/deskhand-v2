import type { PropsWithChildren } from "react";
import type { DeckSection } from "../../types/content";
import { BottomPager } from "../chrome/BottomPager";
import { SideNav } from "../chrome/SideNav";
import { SiteHeader } from "../chrome/SiteHeader";
import styles from "./DeckShell.module.css";

interface DeckShellProps extends PropsWithChildren {
  sections: DeckSection[];
  activeId: string;
  navOpen: boolean;
  onOpenNav: () => void;
  onCloseNav: () => void;
}

export function DeckShell({
  children,
  sections,
  activeId,
  navOpen,
  onOpenNav,
  onCloseNav
}: DeckShellProps) {
  return (
    <div className={styles.shell}>
      <SiteHeader onOpenNav={onOpenNav} />
      <SideNav
        activeId={activeId}
        navOpen={navOpen}
        onCloseNav={onCloseNav}
        sections={sections}
      />
      {navOpen ? <button className={styles.backdrop} onClick={onCloseNav} aria-label="关闭导航" /> : null}
      <main className={styles.main}>{children}</main>
      <BottomPager activeId={activeId} sections={sections} />
    </div>
  );
}
