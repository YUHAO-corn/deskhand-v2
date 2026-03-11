export type SectionTone = "hero" | "sage" | "copper" | "linen" | "ink";

export interface NavMeta {
  id: string;
  title: string;
  kicker: string;
  navLabel: string;
  pageType:
    | "hero"
    | "problemSplit"
    | "showcase"
    | "architecture"
    | "comparisonMatrix"
    | "myTake"
    | "closingThought";
  tone: SectionTone;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface ScreenAsset {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  size?: "feature" | "support" | "detail";
}

export interface HeroSectionContent extends NavMeta {
  pageType: "hero";
  eyebrow: string;
  subtitle: string;
  summary?: string;
  note?: string;
  metrics: MetricItem[];
  stack: string[];
  image: ScreenAsset;
}

export interface MatrixCell {
  lines: string[];
  emphasis?: boolean;
}

export interface MatrixRow {
  label: string;
  cells: MatrixCell[];
}

export interface MatrixBlock {
  title: string;
  columns: string[];
  rows: MatrixRow[];
}

export interface StoryCard {
  kicker: string;
  title: string;
  lines: string[];
}

export interface InsightCard {
  title: string;
  body: string;
  kicker?: string;
  stat?: string;
  tags?: string[];
}

export interface ChainComparison {
  hypothesis: string;
  oldPath: {
    label: string;
    flow: string;
    note: string;
  };
  newPath: {
    label: string;
    flow: string;
    note: string;
  };
}

export interface ProblemSplitSectionContent extends NavMeta {
  pageType: "problemSplit";
  variant: "matrix" | "chain" | "stories";
  lead: string;
  paragraphs: string[];
  signal?: {
    title: string;
    body: string;
  };
  toolIntro?: string;
  toolCards?: Array<{
    title: string;
    description: string;
  }>;
  matrix?: MatrixBlock;
  insightCards?: InsightCard[];
  chain?: ChainComparison;
  painCard?: {
    title: string;
    paragraphs: string[];
  };
  storyCards?: StoryCard[];
  solutionCard?: {
    title: string;
    intro: string;
    bullets: string[];
  };
}

export interface ShowcaseSectionContent extends NavMeta {
  pageType: "showcase";
  lead: string;
  description?: string;
  layout?:
    | "featured"
    | "balanced"
    | "editorialWide"
    | "editorialSplit"
    | "editorialBalanced";
  screens: ScreenAsset[];
}

export interface DecisionCard {
  title: string;
  body: string;
}

export type ArchitectureSectionLayout = "cards" | "decisionRail" | "diagramFocus";
export type ArchitectureImageFrame = "standard" | "wide" | "square";

export interface ArchitectureSectionContent extends NavMeta {
  pageType: "architecture";
  lead: string;
  description?: string;
  layout?: ArchitectureSectionLayout;
  imageFrame?: ArchitectureImageFrame;
  decisionTitle?: string;
  image: {
    src: string;
    alt: string;
  };
  decisions: DecisionCard[];
}

export interface ComparisonMatrixSectionContent extends NavMeta {
  pageType: "comparisonMatrix";
  lead: string;
  thesis: {
    title: string;
    body: string;
  };
  principles: Array<{
    title: string;
    body: string;
  }>;
  matrix: {
    columns: string[];
    rows: Array<{
      label: string;
      values: Array<{
        text: string;
        best?: boolean;
      }>;
    }>;
  };
  decisionRule: {
    label: string;
    text: string;
    tags: string[];
  };
}

export interface ClosingThoughtSectionContent extends NavMeta {
  pageType: "closingThought";
  titleLines: [string, string];
  spectrum: {
    leftTitle: string;
    leftNote: string;
    centerTitle: string;
    centerNote: string;
    rightTitle: string;
    rightNote: string;
  };
  closingLine: string;
}

export interface ChainNode {
  term: string;
  annotation: string;
}

export interface PillarCard {
  term: string;
  built: {
    feature: string;
    description: string;
  };
  next: string[];
}

export interface MyTakeSectionContent extends NavMeta {
  pageType: "myTake";
  chain: [ChainNode, ChainNode, ChainNode];
  pillars: [PillarCard, PillarCard, PillarCard];
  closingLine?: string;
}

export type DeckSection =
  | HeroSectionContent
  | ProblemSplitSectionContent
  | ShowcaseSectionContent
  | ArchitectureSectionContent
  | ComparisonMatrixSectionContent
  | MyTakeSectionContent
  | ClosingThoughtSectionContent;
