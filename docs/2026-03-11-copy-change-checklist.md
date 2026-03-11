# Deskhand 文案修改决策清单

> 日期：2026-03-11
> 用途：给文案审阅时快速判断“改 / 不改”
> 配套说明：详细理由见 [2026-03-11-positioning-and-copy-review.md](/Users/godcorn/cursor/ppt/deskhand-v2/docs/2026-03-11-positioning-and-copy-review.md)
> 说明：本文件不改源码，只做决策清单

## 使用方式

建议你逐项只做一个判断：

- 改
- 不改
- 稍后再看

如果确定要改，我再按这份清单去执行。

---

## A. 建议优先判断

### 1. Hero eyebrow

- 位置：[hero.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/hero.ts#L10)
- 当前文本：`Product Thinking, Shipped in Code`
- 建议：`改`
- 原因：偏 slogan，像个人 branding，不够“实在的 builder”
- 修改方向：改成更贴近真实问题和落地过程的表达
- 备选方向：
  - `Built from Real Usage Problems`
  - `From Real Workflow Problems to Product Decisions`
  - `为真实使用问题做的桌面 AI 产品`
不改

### 2. Generative UI 页的 `行业信号`

- 位置：[generative-ui.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/generative-ui.ts#L20)
- 当前文本：`行业信号` + “都在强调……关键交互范式”
- 建议：`改`
- 原因：偏行业分析，不够第一视角；如果没有明确出处，可信度也一般
- 修改方向：改成“我的观察”或“我看到的变化”
- 备选方向：
  - 标题改为 `我的观察`
  - 正文改为“我看到越来越多 AI 产品开始补提问式和探索式交互……”
改，换个角度，以我作为一人称，在twitter上观察到的行业现象，例如“社区和创作者在频繁使用”

### 3. Skill System 页的 `市场信号`

- 位置：[skill-system.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/skill-system.ts#L22)
- 当前文本：`市场信号` + `250,000+ GitHub Stars` + 大盘判断
- 建议：`改`
- 原因：这是当前最容易出戏的一块，太像借外部声量抬论点
- 修改方向：改成你自己的观察，或者换成更具体的项目起点事实
- 备选方向：
  - 标题改为 `我看到的门槛`
  - 正文改为“Skill 生态已经存在，但真正卡住非技术用户的是入口、搜索、安装和试错都要自己完成。”
不改，因为这真的是真实发生的

### 4. Skill System 页的 `我们的假设 / 养号`

- 位置：[skill-system.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/skill-system.ts#L33)
- 当前文本：`我们的假设：把“养号”这件事，从用户侧转移到 Agent 侧。`
- 建议：`改`
- 原因：不是第一视角，且“养号”太像内部口语
- 修改方向：改成直接、清楚的个人判断
- 备选方向：
  - `我的判断是，skill 的发现、搜索、安装不该继续由用户自己完成。`
  - `我当时的判断是，把能力扩展这条链路从用户侧转移到 Agent 侧。`
不改

### 5. My Take 页的英文术语

- 位置：[my-take.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/my-take.ts#L11)
- 当前文本：`Intent Understanding / Resource Access / Orchestration`
- 建议：`改`
- 原因：略偏方法论化、框架化，削弱“从项目里长出来”的感觉
- 修改方向：改回中文
- 备选方向：
  - `意图理解`
  - `资源打通`
  - `编排调度`
不改

### 6. Closing 页标题

- 位置：[why-desktop.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/why-desktop.ts#L6)
- 当前文本：`AI Product is about finding the sweet spot`
- 建议：`改`
- 原因：略像在下行业定义，不够“经验分享”
- 修改方向：保留 `sweet spot`，但把句式收成个人判断
- 备选方向：
  - `做完 Deskhand，我更在意那个 sweet spot`
  - `做完这个项目，我更相信 AI Product 要找到那个 sweet spot`
  - `What I Learned About the Sweet Spot`

不改
---

## B. 可以顺手判断

### 7. Hero kicker

- 位置：[hero.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/hero.ts#L7)
- 当前文本：`Project overview`
- 建议：`可改可不改`
- 原因：没错，但偏模板词
- 修改方向：如果想统一气质，可以更贴近作品集语境
- 备选方向：
  - `Case Study`
  - `Project Story`
改 case study

### 8. Site Header 文案

- 位置：[SiteHeader.tsx](/Users/godcorn/cursor/ppt/deskhand-v2/src/components/chrome/SiteHeader.tsx#L12)
- 当前文本：`Deskhand Case Study`
- 建议：`可改可不改`
- 原因：安全，但有点 generic
- 修改方向：如果希望更像个人作品集，可轻微收一下
- 备选方向：
  - `Deskhand`
  - `Deskhand / Case Study`
  - `Deskhand / Portfolio`
改

### 9. Generative UI 问题引入开头

- 位置：[generative-ui.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/generative-ui.ts#L15)
- 当前文本：以“当前主流的 AI 交互方式……”开头
- 建议：`建议改`
- 原因：标题已经是第一视角，正文开头可以再贴近“我在项目里看到的问题”
- 修改方向：从“我发现很多任务不是不知道要什么，而是说不清楚”切入

改，但是应该改成真实体会，可以是我自己的体验，比如我发现很多时候自然语言没办法表达出来，

### 10. Skill System 问题引入开头

- 位置：[skill-system.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/skill-system.ts#L15)
- 当前文本：以“桌面 AI Agent 的需求正在扩散……”开头
- 建议：`建议改`
- 原因：略偏行业观察，可以更像你在项目里撞到的真实障碍
- 修改方向：从“我发现问题不是 skill 不存在，而是非技术用户根本进不去这条链路”切入

可以改，但是不应该改方向，因为这里表达的是越来越多人用桌面AI Agent，如果你你改成进不去就改变了，这是后面的表述

### 11. Skill System showcase lead

- 位置：[skill-system.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/skill-system.ts#L55)
- 当前文本：产品说明式 lead
- 建议：`可改可不改`
- 原因：方向没错，只是还能再多一点“我是怎么解决的”
- 修改方向：收成更明确的 builder 口吻
- 备选方向：
  - `我把 skill 的发现、搜索和安装都交给 Agent，让用户在自然使用中获得能力扩展。`

不改

---

## C. 当前建议保留

### 12. Generative UI 第一页标题

- 位置：[generative-ui.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/generative-ui.ts#L10)
- 当前文本：`我为什么开始补自然语言之外的交互形式`
- 建议：`不改`
- 原因：第一视角很准，已经符合当前定位

### 13. Clipboard 第一页主体文案

- 位置：[clipboard.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/clipboard.ts#L15)
- 当前文本：问题、痛点、用户故事、解决方案
- 建议：`不改`
- 原因：这部分最像真实工作流观察，可以作为全套基准

### 14. Clipboard 第二页个人感受句

- 位置：[clipboard.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/clipboard.ts#L84)
- 当前文本：`真正让我惊喜的是这层额外洞察。`
- 建议：`倾向不改`
- 原因：这是经验分享，不是营销；如果想更克制，再收一档也可以

### 15. 三个架构页的大部分工程决策文案

- 位置：
  - [generative-ui.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/generative-ui.ts#L99)
  - [skill-system.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/skill-system.ts#L89)
  - [clipboard.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/clipboard.ts#L105)
- 建议：`不改`
- 原因：整体都很像真实取舍和落地过程，符合 builder 气质

### 16. My Take 页主标题

- 位置：[my-take.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/my-take.ts#L6)
- 当前文本：`做完 Deskhand，我认为桌面智能体的能力取决于三件事`
- 建议：`不改`
- 原因：这是很好的“先做事，再形成判断”式表达

### 17. Closing 页 kicker 和 closing line

- 位置：
  - [why-desktop.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/why-desktop.ts#L7)
  - [why-desktop.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/why-desktop.ts#L22)
- 当前文本：`What I Learned` / `刚好够智能，刚好够可靠。`
- 建议：`不改`
- 原因：方向是对的，问题主要不在这两句，而在主标题

---

## 你审阅时最值得先做的判断

如果你只想先看最关键的 6 项，按这个顺序：

1. Hero eyebrow 改不改
2. Generative UI 的 `行业信号` 改不改
3. Skill System 的 `市场信号` 改不改
4. Skill System 的 `我们的假设 / 养号` 改不改
5. My Take 英文术语改不改
6. Closing 页标题改不改

这 6 项定下来，整套 deck 的气质就会明显更统一。

