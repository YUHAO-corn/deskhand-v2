import type {
  ArchitectureSectionContent,
  ProblemSplitSectionContent,
  ShowcaseSectionContent
} from "../types/content";

export const skillSystemProblem: ProblemSplitSectionContent = {
  id: "skill-system",
  navLabel: "Skill / 01",
  title: "非技术用户涌入，但 Skill 生态没有为他们准备好",
  kicker: "Skill System / Page 1",
  pageType: "problemSplit",
  tone: "linen",
  variant: "chain",
  lead: "桌面 AI Agent 的需求正在从开发者快速扩散到普通用户。这批用户不懂终端、不知道 skill 是什么，也不会主动去“应用市场”搜索安装。",
  paragraphs: [
    "Skill 生态本身存在，但大多数用户进不去。这不是用户教育问题，而是链路设计问题。",
    "Skill 的发现、寻找、安装，不应该继续由用户来做。"
  ],
  insightCards: [
    {
      title: "市场信号",
      stat: "250,000+ GitHub Stars",
      body: "OpenClaw 在 4 个月内超越 React，成为 GitHub 史上收藏最多的软件项目。非技术用户占比上升，说明桌面 AI Agent 已经不再是开发者专属工具。",
      tags: ["桌面 AI Agent", "非技术用户", "需求爆发"]
    },
    {
      title: "我的观察",
      body: "我有个做 HR 的朋友，知道 Deskhand 里可能有“技能包”，但她不知道终端是什么，也不知道去哪找、怎么装。Skill 生态对她来说是一扇没有把手的门。"
    }
  ],
  chain: {
    hypothesis: "我们的假设：把“养号”这件事，从用户侧转移到 Agent 侧。",
    oldPath: {
      label: "旧",
      flow: "用户 → 发现 → 搜索 → 安装 → 受益",
      note: "每一步都需要用户主动。"
    },
    newPath: {
      label: "新",
      flow: "用户 → [Agent 观察 · 寻找 · 安装] → 受益",
      note: "用户无需介入。"
    }
  }
};

export const skillSystemShowcase: ShowcaseSectionContent = {
  id: "skill-system-features",
  navLabel: "Skill / 02",
  title: "把 skill 的发现、寻找、安装，全部交给 Agent",
  kicker: "Skill System / Page 2",
  pageType: "showcase",
  tone: "sage",
  lead: "用户在自然使用中，Agent 持续观察行为模式。当发现重复工作流时，主动搜索或生成匹配的 skill，并通过对话推荐安装。",
  description: "产品关键点不只是推荐，而是让安装失败也能在同一条对话里被 Agent 继续兜底。",
  screens: [
    {
      src: "/images/skill-insight-2026-03-10.png",
      alt: "Skill Insight 功能截图，展示 Agent 分析用户行为模式、搜索现成 skill 并输出推荐对话的完整闭环",
      title: "Skill Insight",
      caption: "Agent 分析历史 session，发现重复模式，主动搜索并推荐安装。用户只需要做最后确认。",
      size: "feature"
    },
    {
      src: "/images/skill-list-2026-03-10.png",
      alt: "已安装 Skill 列表截图，展示能力池管理界面",
      title: "Skill 能力池",
      caption: "已安装能力可见、可管理，内置 skill 与用户自定义 skill 在运行时一视同仁。",
      size: "support"
    }
  ]
};

export const skillSystemArchitecture: ArchitectureSectionContent = {
  id: "skill-system-architecture",
  navLabel: "Skill / 03",
  title: "这套系统怎么工作",
  kicker: "Skill System / Page 3",
  pageType: "architecture",
  tone: "ink",
  lead: "工程决策即产品决策。下面四个关键选择，每一个背后都是一个产品判断，而不只是技术取舍。",
  description: "目标不是把技能系统做成商店，而是做成 Agent 的持续能力增强管线。",
  image: {
    src: "/images/skill-system-architecture-placeholder.png",
    alt: "Skill System 架构流程图"
  },
  decisions: [
    {
      title: "Facet 中间层",
      body: "轻量模型先把每个 session 的原始对话压缩成结构化摘要。摘要可缓存、可增量、可重复使用，最后再交由大模型汇总分析。"
    },
    {
      title: "阈值触发，保持静默",
      body: "新增 20 个 session 才触发一次，没有高价值发现时不打扰用户，避免产品从“聪明”滑向“烦人”。"
    },
    {
      title: "输出即对话，不是通知",
      body: "Insight 结果不是弹窗，而是一条新 session。用户可以追问、调整，失败了 Agent 也能继续接手。"
    },
    {
      title: "委托 SDK 调度",
      body: "Skill 激活不重复造轮子，而是把本地目录作为 plugin 路径交给 Claude Agent SDK，减少自建基础设施负担。"
    }
  ]
};
