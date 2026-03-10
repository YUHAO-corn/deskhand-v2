import type { DeckSection } from "../types/content";
import { clipboardArchitecture, clipboardProblem, clipboardShowcase } from "./clipboard";
import {
  generativeUiArchitecture,
  generativeUiProblem,
  generativeUiSolution
} from "./generative-ui";
import { heroSection } from "./hero";
import {
  skillSystemArchitecture,
  skillSystemProblem,
  skillSystemShowcase
} from "./skill-system";
import { whyDesktopSection } from "./why-desktop";

export const deckSections: DeckSection[] = [
  heroSection,
  generativeUiProblem,
  generativeUiSolution,
  generativeUiArchitecture,
  skillSystemProblem,
  skillSystemShowcase,
  skillSystemArchitecture,
  clipboardProblem,
  clipboardShowcase,
  clipboardArchitecture,
  whyDesktopSection
];
