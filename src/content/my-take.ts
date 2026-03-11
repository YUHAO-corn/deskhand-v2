import type { MyTakeSectionContent } from "../types/content";

export const myTakeSection: MyTakeSectionContent = {
  id: "my-take",
  navLabel: "My Take",
  title: "做完 Deskhand，我认为桌面智能体的能力取决于三件事",
  kicker: "My Take",
  pageType: "myTake",
  tone: "copper",
  chain: [
    { term: "Intent Understanding", annotation: "方向对不对？" },
    { term: "Resource Access", annotation: "能不能走到？" },
    { term: "Orchestration", annotation: "走得快不快？" }
  ],
  pillars: [
    {
      term: "Intent Understanding",
      built: {
        feature: "Gen UI",
        description: "给出自然语言之外的交互方式，让用户通过选择、比较、探索来表达意图"
      },
      next: ["brainstorm 画布", "问答漏斗", "更多交互模式"]
    },
    {
      term: "Resource Access",
      built: {
        feature: "Clipboard",
        description: "搭建剪贴板记录能力，把历史数据开放给 Agent"
      },
      next: ["日历、提醒事项", "备忘录等 OS 级资源"]
    },
    {
      term: "Orchestration",
      built: {
        feature: "Skill System",
        description: "Agent 自主观察、发现、安装、创建 skill"
      },
      next: ["有长期记忆的专家Agent", "保留偏好和风格"]
    }
  ],
  closingLine: "Deskhand 在每个维度上做的都只是一个切片，但每个切片都指向了同一个方向。"
};
