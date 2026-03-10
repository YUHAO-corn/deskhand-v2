import type {
  ArchitectureSectionContent,
  ProblemSplitSectionContent,
  ShowcaseSectionContent
} from "../types/content";

export const clipboardProblem: ProblemSplitSectionContent = {
  id: "clipboard",
  navLabel: "Clipboard / 01",
  title: "剪贴板功能是 Deskhand 在“资源层”上的第一个落点",
  kicker: "Clipboard / Page 1",
  pageType: "problemSplit",
  tone: "copper",
  variant: "stories",
  lead: "用户在真实工作中产生的大量高价值上下文，其实都短暂经过了剪贴板，但现有 AI 默认看不见这些信息。",
  paragraphs: [
    "结果就是，用户需要反复解释、重新翻找、手动粘贴，AI 无法真正承接用户刚刚发生过的工作流。"
  ],
  painCard: {
    title: "核心痛点",
    paragraphs: [
      "剪贴板不是一个零散功能点，而是用户工作流最密集、最短暂、也最容易被系统忽略的上下文通道。",
      "如果 AI 看不见这层资源，它就只能继续做“会聊天”的工具，而不是“能接着做事”的助手。"
    ]
  },
  storyCards: [
    {
      kicker: "用户故事 1",
      title: "跨境电商运营小李",
      lines: [
        "连续复制竞品标题、卖点、评论和链接。",
        "下午想让 AI 起草文案，但已经记不清复制过什么。"
      ]
    },
    {
      kicker: "用户故事 2",
      title: "猎头顾问小王",
      lines: [
        "频繁复制候选人经历、岗位要求和企业介绍。",
        "切回 AI 窗口后，还得手动重新粘贴背景信息。"
      ]
    },
    {
      kicker: "用户故事 3",
      title: "产品经理小陈",
      lines: [
        "语音输入记录会议想法，再通过剪贴板中转到文档。",
        "会后想让 AI 整理纪要，但 AI 不知道他刚才说过什么。"
      ]
    }
  ],
  solutionCard: {
    title: "解决方案",
    intro: "Deskhand 做的不是普通剪贴板管理器，而是面向桌面智能体的环境上下文能力。",
    bullets: [
      "让 AI 不只是理解用户当前说了什么，还能拿到用户刚刚处理过什么。",
      "让剪贴板从一次性的中转站，变成可持续复用的工作记忆。",
      "让 AI 从“会聊天”进一步走向“能接着做事”。"
    ]
  }
};

export const clipboardShowcase: ShowcaseSectionContent = {
  id: "clipboard-features",
  navLabel: "Clipboard / 02",
  title: "AI 可以主动读取剪贴板历史，作为上下文来完成任务",
  kicker: "Clipboard / Page 2",
  pageType: "showcase",
  tone: "linen",
  lead: "剪贴板不再只是用户手动粘贴的缓存区，而是可被 Agent 主动查询、筛选、引用的资源层。",
  description: "这页使用两个等权截图，强调它不是一次性 demo，而是可泛化的调用模式。",
  screens: [
    {
      src: "/images/clipboard-1.png",
      alt: "Clip Insight 功能截图，展示 AI 读取剪贴板历史分析工作轨迹并生成总结报告",
      title: "Clipboard-1",
      caption: "用户说“帮我统计最近一周的工作轨迹”，AI 自动读取剪贴板历史并生成结构化报告。",
      size: "feature"
    },
    {
      src: "/images/clipboard-2.png",
      alt: "剪贴板历史文件被 AI 引用和分析的任务执行截图",
      title: "Clipboard-2",
      caption: "AI 在执行过程中引用剪贴板历史文件与架构文档，展示了环境上下文如何真正参与任务执行。",
      size: "feature"
    }
  ]
};

export const clipboardArchitecture: ArchitectureSectionContent = {
  id: "clipboard-architecture",
  navLabel: "Clipboard / 03",
  title: "怎么让 AI 可靠地调用剪贴板历史？",
  kicker: "Clipboard / Page 3",
  pageType: "architecture",
  tone: "sage",
  lead: "这不是简单地把数据暴露给模型，而是要在成本、噪音和可靠性之间做清楚的系统切分。",
  description: "最后形成的是一个面向环境上下文的统一工具入口，而不是一堆互相平行的点状能力。",
  image: {
    src: "/images/clipboard-architeture.png",
    alt: "Clipboard 环境感知架构图，展示 query_env_context 与多个数据源的路由关系"
  },
  decisions: [
    {
      title: "MCP 工具化",
      body: "把剪贴板、文件、浏览器记录等分散数据源统一封装为一个 MCP 工具。上层只面向一个入口，系统再自动路由到具体来源。"
    },
    {
      title: "分层存储策略",
      body: "完整内容和轻量索引分层管理。AI 先快速定位，再按需读取原始内容，在效果和 token 成本之间取得平衡。"
    },
    {
      title: "自动监控机制",
      body: "通过实时监控、内容去重和写入识别，自动过滤重复记录与无效信息，避免系统被自己的噪音拖垮。"
    }
  ]
};
