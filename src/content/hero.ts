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
  summary:
    "它不是在浏览器里包一层对话框，而是把本地代码上下文、命令执行、权限确认和 GUI 交互放进同一个可控环境里。",
  note: "作品主线是产品判断，暗线是交付能力：从问题定义，到工程取舍，再到真实落地。",
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
    title: "Deskhand overview",
    caption: "主界面同时承载对话、权限状态、历史记录与本地执行反馈。",
    size: "feature"
  }
};
