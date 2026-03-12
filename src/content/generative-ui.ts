import type {
  ArchitectureSectionContent,
  ProblemSplitSectionContent,
  ShowcaseSectionContent
} from "../types/content";

export const generativeUiProblem: ProblemSplitSectionContent = {
  id: "generative-ui",
  navLabel: "Gen UI / 01",
  title: "自然语言之外的交互形式",
  kicker: "Generative UI / Page 1",
  pageType: "problemSplit",
  tone: "sage",
  variant: "matrix",
  lead: "用Deskhand时体会到：AI任务问题不是模型不够强，而是我说不清。",
  paragraphs: [
    "真实高频场景里，很多任务是探索性的。用户还没想清楚方向，文字描述也不稳定，长 prompt 往往无法稳定收敛到高质量结果。",
    '在内容创作、SEO、简历编写、原型设计这类"先探索、再收敛"的任务里，问题不只是模型能力，而是交互形式不对。'
  ],
  signal: {
    title: "我看到的变化",
    body: "我在 Twitter 和开发者社区里越来越频繁地看到，社区和创作者分享自己在创作前会主动用 Interview 式提问、Playground 式探索"
  },
  toolIntro:
    "所以我开始补三种非自然语言交互，让用户通过选择、比较，与AI协同创作。",
  toolCards: [
    {
      title: "Brainstorm",
      description: "把开放问题先压缩成可比较的选择题。"
    },
    {
      title: "Playground",
      description: "用原型偏好测试替代抽象描述。"
    },
    {
      title: "This or That",
      description: "通过快速二选一，持续缩小方向。"
    }
  ],
  matrix: {
    title: "需求明确度 × 表达难度",
    columns: ["能用文字表达", "难以用文字表达"],
    rows: [
      {
        label: "需求明确",
        cells: [
          { lines: ["自然语言", "语音"] },
          { lines: ["表单", "视觉 / 多模态输入"] }
        ]
      },
      {
        label: "需求模糊",
        cells: [
          { lines: ["需要可引导探索的交互"], emphasis: true },
          { lines: ["需要低表达成本的可视化探索"], emphasis: true }
        ]
      }
    ]
  }
};

export const generativeUiSolution: ShowcaseSectionContent = {
  id: "generative-ui-solution",
  navLabel: "Gen UI / 02",
  title: "把探索过程变成可见、可比较、可收敛的交互流",
  kicker: "Generative UI / Page 2",
  pageType: "showcase",
  tone: "linen",
  layout: "editorialWide",
  lead: "不用写长 prompt，用户通过选择、比较、调参来表达偏好，在交互中逐步收敛方向。",
  screens: [
    {
      src: "/images/genui-playground-2026-03-09.png",
      alt: "Playground 功能完整产品截图，展示侧边栏、对话区与 Artifact 面板",
      title: "Playground",
      caption: "有多个原型选择，支持调节参数化细化偏好，最后实时预览",
      size: "feature"
    },
    {
      src: "/images/genui-this-or-that-2026-03-09.png",
      alt: "This or That 功能截图，突出 Artifact 区域中的二选一结果",
      title: "This or That",
      caption: "快速二选一，通过多轮淘汰赛，把模糊偏好持续压缩为准确方向。",
      size: "support"
    }
  ]
};

export const generativeUiArchitecture: ArchitectureSectionContent = {
  id: "generative-ui-architecture",
  navLabel: "Gen UI / 03",
  title: "这套系统怎么工作",
  kicker: "Generative UI / Page 3",
  pageType: "architecture",
  tone: "copper",
  layout: "diagramFocus",
  imageFrame: "wide",
  lead: "上一页的 Playground 和 This or That 背后，是一套让 Agent 按需生成交互式 UI，并把用户选择回流到对话的闭环系统。",
  decisionTitle: "关键工程决策",
  image: {
    src: "/images/genui-architecture-2026-03-09.png",
    alt: "Generative UI 架构流程图，展示上下文输入、Agent 处理、Artifact 生成与安全边界"
  },
  decisions: [
    {
      title: "用户主动触发",
      body: "Agent 难以判断「用户表达困难」的时机，改为菜单触发，由用户决定是否进入探索模式。"
    },
    {
      title: "JSON Schema 约束",
      body: "Agent 输出结构化配置而不是直接写 HTML。token 开销更低，失败面更窄，可维护性也更高。"
    },
    {
      title: "沙箱化安全边界",
      body: "iframe sandbox 禁止脚本执行、网络请求和 Node.js 访问，所有文件操作通过受控 IPC 完成。"
    },
    {
      title: "配置驱动生成",
      body: "预设框架和模板，AI 像填配置表一样输出 JSON，仅少量部分写 HTML。token 从 2000+ 降到 400+，耗时缩短超三分之二。"
    }
  ]
};
