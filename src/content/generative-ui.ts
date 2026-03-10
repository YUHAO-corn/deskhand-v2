import type {
  ArchitectureSectionContent,
  ProblemSplitSectionContent,
  ShowcaseSectionContent
} from "../types/content";

export const generativeUiProblem: ProblemSplitSectionContent = {
  id: "generative-ui",
  navLabel: "Gen UI / 01",
  title: "除了对话，AI 还需要什么交互形式？",
  kicker: "Generative UI / Page 1",
  pageType: "problemSplit",
  tone: "sage",
  variant: "matrix",
  lead: "当前主流的 AI 交互方式，大多默认用户已经知道自己想要什么，而且能把它清楚表达出来。",
  paragraphs: [
    "但真实高频场景里，很多任务是探索性的。用户还没想清楚方向，文字描述也不稳定，长 prompt 往往无法稳定收敛到高质量结果。",
    "在内容创作、SEO、简历编写、原型设计这类“先探索、再收敛”的任务里，问题不只是模型能力，而是交互形式不对。"
  ],
  signal: {
    title: "行业信号",
    body: "Claude Agent SDK 开发者社区与一线创作者都在强调：Interview 式提问和 Playground 式探索，正在成为新一代 AI 产品的关键交互范式。"
  },
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
  lead: "用可视化的偏好测试、二选一、原型探索替代冗长文字描述，让用户在交互中找到方向。",
  description:
    "这不是给聊天框加装饰，而是把“探索本身”变成系统的一等公民。",
  screens: [
    {
      src: "/images/genui-playground-2026-03-09.png",
      alt: "Playground 功能完整产品截图，展示侧边栏、对话区与 Artifact 面板",
      title: "Playground",
      caption: "通过可交互原型并排比较，用“偏好”替代“长 prompt”。",
      size: "feature"
    },
    {
      src: "/images/genui-this-or-that-2026-03-09.png",
      alt: "This or That 功能截图，突出 Artifact 区域中的二选一结果",
      title: "This or That",
      caption: "快速二选一，把模糊偏好持续压缩为可执行方向。",
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
  lead: "上一页看到的 Playground 和 This or That 背后，是一套让 Agent 按需生成交互式 UI，并将用户选择结果回流到对话的闭环系统。",
  description: "工程决策直接决定了产品边界与可用性。",
  image: {
    src: "/images/genui-architecture-2026-03-09.png",
    alt: "Generative UI 架构流程图，展示上下文输入、Agent 处理、Artifact 生成与安全边界"
  },
  decisions: [
    {
      title: "用户主动触发",
      body: "测试后发现 Agent 很难准确判断“用户表达困难”的时机，所以最终改为菜单触发，让用户决定是否进入探索模式。"
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
      title: "架构演化",
      body: "方案经历了纯 JSON、纯 HTML、再到 JSON + HTML 混合，最终落在稳定性和表达力的平衡点上。"
    }
  ]
};
