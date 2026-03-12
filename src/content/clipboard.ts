import type {
  ArchitectureSectionContent,
  ProblemSplitSectionContent,
  ShowcaseSectionContent
} from "../types/content";
import { assetPath } from "../utils/asset";

export const clipboardProblem: ProblemSplitSectionContent = {
  id: "clipboard",
  navLabel: "Clipboard / 01",
  title: "用户非常多有价值的上下文，都在剪贴板里",
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
      "用户每天复制粘贴几十次，这些内容转瞬即逝，但对 AI 来说其实是非常有价值的工作线索。",
      "AI 如果看不见这层资源，就很难从“会聊天”走到“能接着做事”。"
    ]
  },
  storyCards: [
    {
      kicker: "用户故事 1",
      title: "跨境电商运营小李",
      lines: [
        "连续复制竞品标题、卖点、评论和链接。",
        "下午想让 AI 起草文案，却已经记不清自己复制过什么。"
      ]
    },
    {
      kicker: "用户故事 2",
      title: "猎头顾问小王",
      lines: [
        "频繁复制候选人经历、岗位要求和企业介绍。",
        "切回 AI 窗口后，还得重新粘贴背景信息。"
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
    intro: "Deskhand 做的不是普通剪贴板管理器，而是面向桌面智能体的环境上下文层。",
    bullets: [
      "让 AI 不只理解用户现在说什么，也能拿到刚处理过什么。",
      "让剪贴板从一次性中转站，变成可复用的工作记忆。",
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
  lead: "现在 AI 可以主动去查你的剪贴板历史，筛选有用的内容，直接拿来用。",
  layout: "editorialBalanced",
  screens: [
    {
      src: assetPath("/images/clipboard-1.png"),
      alt: "Clip Insight 功能截图，展示 AI 读取剪贴板历史分析工作轨迹并生成总结报告",
      title: "Clipboard-1",
      caption: "用户说“帮我统计最近一周的工作轨迹”，AI 自动读取剪贴板历史并生成结构化报告。",
      size: "feature"
    },
    {
      src: assetPath("/images/clipboard-2.png"),
      alt: "剪贴板历史文件被 AI 引用和分析的任务执行截图",
      title: "Clipboard-2",
      caption: "拿到剪贴板历史后，Agent 不只还原了我的工作轨迹，还主动总结出工作特征和时间分布。真正让我惊喜的是这层额外洞察。",
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
  layout: "diagramFocus",
  imageFrame: "square",
  lead: "这套能力的关键，是让 AI 能稳定查询、筛选并读取真正有用的剪贴板历史。",
  decisionTitle: "关键工程决策",
  image: {
    src: assetPath("/images/clipboard-architeture.png"),
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
