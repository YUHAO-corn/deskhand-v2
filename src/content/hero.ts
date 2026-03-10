import type { HeroSectionContent } from "../types/content";

export const heroSection: HeroSectionContent = {
  id: "hero",
  navLabel: "Home",
  title: "Deskhand",
  kicker: "Project overview",
  pageType: "hero",
  tone: "hero",
  eyebrow: "Product Thinking, Shipped in Code",
  subtitle: "一个让非技术用户也能真正使用的 Claude Code 桌面应用。",
  metrics: [
    { label: "Commits", value: "247+" },
    { label: "Code Lines", value: "12k+" },
    { label: "Dev Cycle", value: "4 Weeks" },
    { label: "Articles", value: "17" }
  ],
  stack: [
    "Electron",
    "React",
    "TypeScript",
    "Jotai",
    "TailwindCSS",
    "Claude Agent SDK"
  ],
  image: {
    src: "/images/deskhand-overview-2026-03-09.png",
    alt: "Deskhand 桌面应用 overview 界面截图",
    size: "feature"
  }
};
