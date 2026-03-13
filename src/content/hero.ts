import type { HeroSectionContent } from "../types/content";
import { assetPath } from "../utils/asset";

export const heroSection: HeroSectionContent = {
  id: "hero",
  navLabel: "Intro",
  title: "Deskhand",
  kicker: "Case Study",
  pageType: "hero",
  tone: "hero",
  eyebrow: "Product Thinking, Shipped in Code",
  subtitle: "让非技术用户通过桌面端使用本地信息、工具和交互式界面解决问题",
  author: "David Chen",
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
    src: assetPath("/images/deskhand-overview-2026-03-09.png"),
    alt: "Deskhand 桌面应用 overview 界面截图",
    size: "feature"
  }
};
