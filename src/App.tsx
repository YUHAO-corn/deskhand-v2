import { startTransition, useEffect, useMemo, useState } from "react";
import { DeckShell } from "./components/layout/DeckShell";
import { ArchitectureDecisionSection } from "./components/sections/ArchitectureDecisionSection";
import { BackgroundSection } from "./components/sections/BackgroundSection";
import { ClosingThoughtSection } from "./components/sections/ClosingThoughtSection";
import { ComparisonMatrixSection } from "./components/sections/ComparisonMatrixSection";
import { HeroSection } from "./components/sections/HeroSection";
import { MyTakeSection } from "./components/sections/MyTakeSection";
import { ProblemSplitSection } from "./components/sections/ProblemSplitSection";
import { SolutionShowcaseSection } from "./components/sections/SolutionShowcaseSection";
import { deckSections } from "./content/deck";
import type { DeckSection } from "./types/content";

function renderSection(section: DeckSection, index: number) {
  switch (section.pageType) {
    case "hero":
      return <HeroSection key={section.id} section={section} index={index} />;
    case "background":
      return <BackgroundSection key={section.id} section={section} index={index} />;
    case "problemSplit":
      return <ProblemSplitSection key={section.id} section={section} index={index} />;
    case "showcase":
      return <SolutionShowcaseSection key={section.id} section={section} index={index} />;
    case "architecture":
      return <ArchitectureDecisionSection key={section.id} section={section} index={index} />;
    case "comparisonMatrix":
      return <ComparisonMatrixSection key={section.id} section={section} index={index} />;
    case "myTake":
      return <MyTakeSection key={section.id} section={section} index={index} />;
    case "closingThought":
      return <ClosingThoughtSection key={section.id} section={section} index={index} />;
    default:
      return null;
  }
}

export default function App() {
  const sectionIds = useMemo(() => deckSections.map((section) => section.id), []);
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const applyHash = () => {
      const nextId = window.location.hash.replace("#", "");
      if (nextId && sectionIds.includes(nextId)) {
        startTransition(() => setActiveId(nextId));
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [sectionIds]);

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleEntries[0]) {
          startTransition(() => setActiveId(visibleEntries[0].target.id));
        }
      },
      {
        threshold: [0.2, 0.38, 0.6, 0.78],
        rootMargin: "-18% 0px -42% 0px"
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    setNavOpen(false);
  }, [activeId]);

  return (
    <DeckShell
      sections={deckSections}
      activeId={activeId}
      navOpen={navOpen}
      onOpenNav={() => setNavOpen(true)}
      onCloseNav={() => setNavOpen(false)}
    >
      {deckSections.map((section, index) => renderSection(section, index))}
    </DeckShell>
  );
}
