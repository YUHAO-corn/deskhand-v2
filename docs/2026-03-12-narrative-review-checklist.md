# 叙事文案审阅清单

Background 过渡页加入后，整篇 deck 的叙事衔接需要统一调整。以下逐条列出需要修改的地方，请逐条标注：✅ 同意 / ❌ 不改 / ✏️ 要调。

---

## 1. Gen UI / Page 1 — 标题

- 文件：`src/content/generative-ui.ts` → `generativeUiProblem.title`
- 原文：`自然语言之外的交互形式`
- 问题：像教科书章节标题。Background 页刚说完"接下来分享三个功能"，读者期待"第一个是……"的感觉，不是一个学术主题词。
- 建议：`很多时候，用户说不清自己想要什么`
不改
---

## 2. Gen UI / Page 1 — paragraphs 用词

- 文件：`src/content/generative-ui.ts` → `generativeUiProblem.paragraphs[0]`
- 原文：`使用者还没想清楚方向`
- 问题："使用者"偏书面/学术，和整体第一人称叙事不搭。
- 建议：改成 `用户还没想清楚方向`

---

## 3. Gen UI / Page 2 — 标题

- 文件：`src/content/generative-ui.ts` → `generativeUiSolution.title`
- 原文：`把探索过程变成可见、可比较、可收敛的交互流`
- 问题："可见、可比较、可收敛"是产品分析框架语言，读起来像产品文档。
- 建议：`用选择代替描述，让用户在交互中找到方向`
不改
---

## 4. Gen UI / Page 2 — lead

- 文件：`src/content/generative-ui.ts` → `generativeUiSolution.lead`
- 原文：`用可视化的偏好测试、二选一、原型探索替代冗长文字描述，让用户在交互中找到方向。`
- 问题：术语堆叠太密，"可视化的偏好测试"像论文。
- 建议：`不用写长 prompt，用户通过选择、比较、调参来表达偏好，在交互中逐步收敛方向。`
改
---

## 5a. Skill System / Page 1 — paragraph 1

- 文件：`src/content/skill-system.ts` → `skillSystemProblem.paragraphs[0]`
- 原文：`Skill 生态本身存在，但大多数用户进不去。这不是用户教育问题，而是链路设计问题。`
- 问题："链路设计问题"是产品术语，"这不是 X，而是 Y"句式有说教感。
- 建议：`Skill 生态本身存在，但大多数用户进不去。问题不在用户不愿意学，而在于整个流程对他们来说门槛太高。`
不改
---

## 5b. Skill System / Page 1 — paragraph 2

- 文件：`src/content/skill-system.ts` → `skillSystemProblem.paragraphs[1]`
- 原文：`Skill 的发现、寻找、安装、创建，不应该继续由用户来做。`
- 问题："不应该"是处方式语气，像在下判断。
- 建议：`所以我在想，这些事能不能让 Agent 来做？`
不改
---

## 6. Clipboard / Page 1 — 标题

- 文件：`src/content/clipboard.ts` → `clipboardProblem.title`
- 原文：`剪贴板功能是 Deskhand 在"资源层"上的第一个落点`
- 问题："资源层"是 My Take 页的框架语言，读者此时还没看到那个框架。提前引用未建立的概念会让人困惑。"落点"也是产品术语。
- 建议：`用户最有价值的上下文，其实都在剪贴板里`
`用户非常多有价值的上下文，都在剪贴板里`
---

## 7. Clipboard / Page 1 — painCard

- 文件：`src/content/clipboard.ts` → `clipboardProblem.painCard.paragraphs[0]`
- 原文：`剪贴板不是零散功能点，而是用户工作流里最密集、最短暂，也最容易被系统忽略的上下文通道。`
- 问题："上下文通道"是抽象概念，"不是 X，而是 Y"又是说教句式。
- 建议：`用户每天复制粘贴几十次，这些内容转瞬即逝，但对 AI 来说其实是非常有价值的工作线索。`
改
---

## 8. Clipboard / Page 1 — solutionCard intro

- 文件：`src/content/clipboard.ts` → `clipboardProblem.solutionCard.intro`
- 原文：`Deskhand 做的不是普通剪贴板管理器，而是面向桌面智能体的环境上下文层。`
- 问题："面向桌面智能体的环境上下文层"——纯产品架构语言，营销腔。
- 建议：`Deskhand 的剪贴板不只是帮你管理复制记录，而是让 AI 能看到你刚才在做什么。`
不改
---

## 9. Clipboard / Page 1 — solutionCard bullets

- 文件：`src/content/clipboard.ts` → `clipboardProblem.solutionCard.bullets`
- 原文：
  - `让 AI 不只理解用户现在说什么，也能拿到刚处理过什么。`
  - `让剪贴板从一次性中转站，变成可复用的工作记忆。`
  - `让 AI 从"会聊天"进一步走向"能接着做事"。`
- 问题：三个"让"排比，营销文案感。
- 建议：
  - `AI 不只知道你现在说什么，也能看到你刚才处理过什么。`
  - `复制过的内容不再用完即弃，而是变成可以反复调用的工作记忆。`
  - `从"会聊天"到"能接着做事"，差的就是这层上下文。`

---

## 10. Clipboard / Page 2 — lead

- 文件：`src/content/clipboard.ts` → `clipboardShowcase.lead`
- 原文：`剪贴板不再只是用户手动粘贴的缓存区，而是可被 Agent 主动查询、筛选、引用的资源层。`
- 问题：又出现"资源层"，且整句是产品定义式语言。
- 建议：`现在 AI 可以主动去查你的剪贴板历史，筛选有用的内容，直接拿来用。`

---

## 11. Why Desktop / Closing — 标题

- 文件：`src/content/why-desktop.ts` → `whyDesktopSection.titleLines`
- 原文：`AI Product is about finding the sweet spot`
- 问题：非常泛的行业金句，像会议演讲标题。和前面具体的个人经历脱节。
- 建议：待讨论。取决于你想让这页传达什么——是"为什么选桌面端"还是个人感悟？

---

## 12. Why Desktop / Closing — closingLine

- 文件：`src/content/why-desktop.ts` → `whyDesktopSection.closingLine`
- 原文：`刚好够智能，刚好够可靠。`
- 问题：标语感，像 slogan。
- 建议：跟第 11 条一起调。
