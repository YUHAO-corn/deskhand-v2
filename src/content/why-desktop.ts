import type { ComparisonMatrixSectionContent } from "../types/content";

export const whyDesktopSection: ComparisonMatrixSectionContent = {
  id: "why-desktop",
  navLabel: "Desktop",
  title: "为什么是桌面应用，而不是 CLI 或 Web？",
  kicker: "Form Factor Decision",
  pageType: "comparisonMatrix",
  tone: "linen",
  lead: "我们不是在选一个技术栈，而是在决定：非技术用户和 Agent 协作时，哪里是安全边界，哪里是操作主场。",
  thesis: {
    title: "核心判断",
    body: "当任务同时涉及本地代码上下文、命令执行和文件修改，并且要求用户在每一步都可见、可控、可中断，Desktop 是最短路径。"
  },
  principles: [
    {
      title: "Context stays local",
      body: "代码仓库、会话状态和工具链都在同一环境里，不需要跨端搬运上下文。"
    },
    {
      title: "Permission is explicit",
      body: "safe / ask / allow-all 的权限边界可视化，关键动作可确认、可追溯。"
    },
    {
      title: "Execution is visible",
      body: "从用户输入到 Agent 动作的过程可观察，用户不会被“黑箱自动化”吓退。"
    }
  ],
  matrix: {
    columns: ["CLI", "Web", "Desktop"],
    rows: [
      {
        label: "目标用户门槛",
        values: [
          { text: "开发者优先" },
          { text: "访问门槛低" },
          { text: "非技术用户可上手", best: true }
        ]
      },
      {
        label: "本地代码上下文",
        values: [
          { text: "天然同域" },
          { text: "跨端桥接成本高" },
          { text: "同域且可控", best: true }
        ]
      },
      {
        label: "高风险操作确认",
        values: [
          { text: "交互弱，易误触" },
          { text: "状态割裂，反馈慢" },
          { text: "权限与动作一体化", best: true }
        ]
      },
      {
        label: "可观察性体验",
        values: [
          { text: "日志导向" },
          { text: "展示友好但能力受限" },
          { text: "可视化 + 本地能力兼得", best: true }
        ]
      }
    ]
  },
  decisionRule: {
    label: "Decision Rule",
    text: "任务同时满足 Local Context、Risky Action、Live Feedback 时，默认优先 Desktop。",
    tags: ["Local Context", "Permission Boundary", "Visible Execution"]
  }
};
