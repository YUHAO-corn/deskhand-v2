# Deskhand V2 Review Findings And Fix Plan

> 日期：2026-03-11
> 记录对象：`/Users/godcorn/cursor/ppt/deskhand-v2`
> 基线约束：`/Users/godcorn/cursor/ppt/deskhand/docs/plan/2026-03-11-showcase-v2-rebuild-plan.md`

## 1. 这次 review 的结论

当前 V2 不是“还有一些小瑕疵”，而是同时存在三类结构性问题：

1. 内容越界了
2. 一屏展示规范失效了
3. 截图与视觉节奏失真了

这三类问题叠加后，已经违背了这次重构最重要的边界：

**这不是内容重写，而是展示层重建。**

所以修复顺序不能从“调几个 CSS”开始，而必须先锁定内容边界，再重做版式约束。

---

## 2. review 基线

### 2.1 应遵守的迁移原则

重构方案里已经明确写了两条边界：

- 保留章节结构、文案主旨、图片素材、单页浏览方式
- 不扩写新内容

因此这次修复的判断标准很明确：

- 旧版已确认的文本，可以迁移，但要为一屏展示服务
- 迁移过程中新增的“内部备注口吻”“开发注释口吻”“自我解释口吻”应移除
- 如果旧版文本本身也不适合外部展示，以这次 review 的用户判断为准，仍然应移除或改短

### 2.2 本次 review 的直接来源

- 用户口头 review 记录
- V2 内容源：`src/content/*.ts`
- 旧版展示基线：`/Users/godcorn/cursor/ppt/deskhand/src/pages/index.astro`

---

## 3. 发现的问题

## 3.1 内容偏离迁移边界

这不是零散措辞问题，而是系统性地往页面里加入了“讲给内部团队听”的说明句。

### 已定位到的待移除文本

- `src/content/hero.ts`
  - `summary`：`它不是在浏览器里包一层对话框，而是把本地代码上下文、命令执行、权限确认和 GUI 交互放进同一个可控环境里。`
  - `note`：`作品主线是产品判断，暗线是交付能力：从问题定义，到工程取舍，再到真实落地。`
  - `image.caption`：`主界面同时承载对话、权限状态、历史记录与本地执行反馈。`
- `src/content/generative-ui.ts`
  - `generativeUiSolution.description`：`这不是给聊天框加装饰，而是把“探索本身”变成系统的一等公民。`
  - `generativeUiArchitecture.description`：`工程决策直接决定了产品边界与可用性。`
- `src/content/skill-system.ts`
  - `skillSystemShowcase.description`：`产品关键点不只是推荐，而是让安装失败也能在同一条对话里被 Agent 继续兜底。`
  - `skillSystemArchitecture.lead`：`工程决策即产品决策。下面四个关键选择，每一个背后都是一个产品判断，而不只是技术取舍。`
  - `skillSystemArchitecture.description`：`目标不是把技能系统做成商店，而是做成 Agent 的持续能力增强管线。`
- `src/content/clipboard.ts`
  - `clipboardShowcase.description`：`这页使用两个等权截图，强调它不是一次性 demo，而是可泛化的调用模式。`
  - `clipboardArchitecture.lead`：`这不是简单地把数据暴露给模型，而是要在成本、噪音和可靠性之间做清楚的系统切分。`
  - `clipboardArchitecture.description`：`最后形成的是一个面向环境上下文的统一工具入口，而不是一堆互相平行的点状能力。`

### 特别说明

- `generativeUiArchitecture.lead` 这句不是必须整句删除，但要改短，避免换行过多：
  - 当前：`上一页看到的 Playground 和 This or That 背后，是一套让 Agent 按需生成交互式 UI，并将用户选择结果回流到对话的闭环系统。`
  - 建议改为：`上一页的 Playground 和 This or That 背后，是一套让 Agent 按需生成交互式 UI，并把用户选择回流到对话的闭环系统。`

### 判断

这些文字的问题不只是“长”，而是口吻错了。它们在解释作者怎么想，而不是在向外部受众展示产品本身。

---

## 3.2 一屏展示规范失效

用户点名的问题页：

- 第 1 页
- 第 3 页
- 第 4 页
- 第 6 页
- 第 7 页
- 第 8 页
- 第 9 页

这说明问题不是个别页面没收住，而是 V2 当前没有真正把“一屏完整展示”当成硬约束。

### 直接原因

#### 原因 A：section 只有最小高度，没有固定高度

`src/components/primitives/SectionCanvas.module.css` 目前使用的是：

- `.shell { min-height: var(--section-safe-h) }`
- `.canvas { min-height: var(--section-safe-h) }`

这意味着：

- 页面内容少时，看起来像一屏
- 页面内容一多，就会直接把 section 撑高
- 导航定位后，用户看到的是 section 顶部，不是完整的一页

这与“每次导航后都应完整看到整张”的要求是冲突的。

#### 原因 B：模板组件默认允许内容自然增高

以下模板都用了 `height: 100%`，但没有“内容预算”：

- `HeroSection.module.css`
- `SolutionShowcaseSection.module.css`
- `ArchitectureDecisionSection.module.css`
- `ProblemSplitSection.module.css`
- `ComparisonMatrixSection.module.css`

结果是：

- 标题、lead、description、caption 只要多写一点，整个版就继续向下长
- 当前模板没有“删减辅助信息优先于增高页面”的机制

#### 原因 C：这次重构把额外文案也一起加进页面了

很多超高不是因为原文太多，而是因为 V2 新增了：

- summary
- note
- description
- 更长的 caption

所以高度失控本质上是“内容越界”和“版式缺少硬约束”叠加造成的。

---

## 3.3 首屏首图过小

第 1 页是产品第一次亮相，当前主图不够有压迫力。

### 现状原因

- `HeroSection.module.css` 的左右栏比例是 `0.92fr / 1.08fr`
- 左栏还塞了 `summary`、`note`、指标卡、技术栈
- 右栏图片没有明确的更高优先级

结果就是：

- 图虽然在右侧，但视觉权重不够
- 第一眼没有形成“产品首次亮相”的效果

### 修复目标

首图至少增大约 `25%`，更理想是接近 `33%`。

---

## 3.4 暗色页破坏整体节奏

当前突然变黑的页，来自 `tone: "ink"`：

- `src/content/skill-system.ts` 的 `skillSystemArchitecture`
- `src/content/why-desktop.ts` 的 `whyDesktopSection`

### 判断

这类深色页不是不能做，而是必须承担明确的叙事职责。

当前问题在于：

- 前面大多数页是浅底 editorial 风格
- 中途突然切成深色，没有建立节奏和理由
- 用户感受到的是“奇怪”，不是“重点”

所以这不是审美分歧，而是视觉系统不一致。

---

## 3.5 图片裁切与主次关系错误

### 被点名的图片

- 第 4 页的图
- 第 7 页的图
- 第 9 页的图 2
- 第 9 页两张图应等权

### 直接原因

#### 原因 A：截图默认被 `cover`

`src/components/media/ScreenCard.module.css`

- `.image { object-fit: cover }`

`src/components/sections/ArchitectureDecisionSection.module.css`

- `.figure img { object-fit: cover }`

这会直接导致：

- 架构图被截断
- 产品截图边缘信息丢失
- 用户明明提供的是完整截图，页面却只展示一部分

#### 原因 B：双图模板默认强制主次关系

`src/components/sections/SolutionShowcaseSection.module.css`

- `.twoUp { grid-template-columns: 1.22fr 0.78fr }`

这意味着只要是两张图，就默认：

- 左图更大
- 右图更小

但第 9 页不是主次结构，而是双证据结构，两张图应等权。

---

## 4. 修复方案

## 4.1 第一阶段：先锁内容，再调样式

### 目标

把 V2 重新拉回“展示层重建”边界内。

### 具体动作

1. 以 `deskhand/src/pages/index.astro` 作为迁移基线
2. 以本次 review 的用户判断作为更高优先级覆盖
3. 删除第 3.1 节列出的全部待移除文本
4. 将 `generativeUiArchitecture.lead` 改成短句版本
5. 做一次全文人工核对，重点检查：
   - 是否出现“这页要表达的是”
   - 是否出现“工程决策即产品决策”这一类内部表达
   - 是否出现“这页使用两个等权截图”这种开发备注口吻

### 涉及文件

- `src/content/hero.ts`
- `src/content/generative-ui.ts`
- `src/content/skill-system.ts`
- `src/content/clipboard.ts`

---

## 4.2 第二阶段：把“一屏完整展示”变成硬约束

### 目标

导航跳转后，每页都必须整张完整可见，不能靠滚动补完。

### 具体动作

1. 桌面端把 `SectionCanvas` 从 `min-height` 改成固定高度
   - `height: var(--section-safe-h)`
   - `max-height: var(--section-safe-h)`
2. `canvas` 内部改成“有限空间布局”
   - 超出的内容必须通过缩短文案、压缩间距、调整列宽解决
   - 不能继续把 section 撑高
3. 给每类模板建立垂直预算
   - `Hero`
   - `Showcase`
   - `Architecture`
   - `ProblemSplit`
   - `Comparison`
4. 统一桌面验收基线
   - 建议以 `1440 x 900` 作为最低验收高度
   - 在这个高度下，左侧导航定位后应完整看到整页内容

### 涉及文件

- `src/components/primitives/SectionCanvas.module.css`
- `src/components/sections/HeroSection.module.css`
- `src/components/sections/SolutionShowcaseSection.module.css`
- `src/components/sections/ArchitectureDecisionSection.module.css`
- `src/components/sections/ProblemSplitSection.module.css`
- `src/components/sections/ComparisonMatrixSection.module.css`
- `src/styles/global.css`

---

## 4.3 第三阶段：重做图片展示规则

### 目标

产品截图和架构图默认展示完整，不再被任意裁切。

### 具体动作

1. 截图默认从 `cover` 改为 `contain`
2. 为截图容器补背景和居中规则，避免 `contain` 后出现丑的空边
3. 架构图页同样默认 `contain`
4. 只有装饰性图片才允许 `cover`
5. 给 `ShowcaseSection` 增加版式选项
   - `feature-support`
   - `equal-split`
6. 第 9 页使用 `equal-split`
   - 两张图同宽
   - 两张图同高
   - 两张图 caption 权重一致

### 涉及文件

- `src/components/media/ScreenCard.module.css`
- `src/components/media/ScreenCard.tsx`
- `src/components/sections/SolutionShowcaseSection.module.css`
- `src/components/sections/SolutionShowcaseSection.tsx`
- `src/components/sections/ArchitectureDecisionSection.module.css`
- `src/types/content.ts`
- `src/content/clipboard.ts`

---

## 4.4 第四阶段：修正首屏和暗色页

### 第 1 页

修复目标：

- 首图放大 `25%` 到 `33%`
- 首屏优先呈现“产品亮相”，不是解释性文字

具体动作：

1. 移除 hero 的 `summary`、`note`、caption
2. 调整 Hero 左右栏比例，让图片获得更大面积
3. 明确首图容器高度和展示边界
4. 如仍然拥挤，优先压缩指标卡与技术栈的视觉体积

### 暗色页

修复目标：

- 去掉“突然黑一页”的体验

具体动作：

1. `skillSystemArchitecture` 改回浅色 tone
2. `whyDesktopSection` 改回浅色 tone，或至少给出和全局系统一致的中性浅底版本
3. 不再把“深色”当成默认的重点强调手段

### 涉及文件

- `src/content/hero.ts`
- `src/components/sections/HeroSection.module.css`
- `src/content/skill-system.ts`
- `src/content/why-desktop.ts`
- `src/components/primitives/SectionCanvas.module.css`

---

## 4.5 第五阶段：按页复核

### 优先复核页

- 第 1 页：首图过小、文案越界、一屏不完整
- 第 3 页：双图展示高度超限
- 第 4 页：架构图裁切、标题区过高
- 第 6 页：新增 description 造成高度浪费
- 第 7 页：暗色页、架构图裁切、内部口吻文案
- 第 8 页：三故事布局密度过高
- 第 9 页：双图应等权，且图 2 不可被截断
- 第 11 页：暗色页节奏异常

### 每页验收清单

- 导航点击后能否一屏完整看到整页
- 页面是否出现未授权新增文案
- 截图是否完整显示
- 如果是双图页，主次关系是否符合原意
- 页面颜色是否与整体视觉系统一致

---

## 5. 实施顺序建议

建议按下面顺序改，不要同时乱动：

1. 先删文案，锁定内容边界
2. 再修 section 高度体系
3. 再修图片展示规则
4. 再修首屏放大与暗色页
5. 最后做逐页验收

如果顺序反过来，CSS 会反复返工，因为很多超高本来就是多写出来的文本造成的。

---

## 6. 一句话判断

这次 V2 现在最需要的不是“继续润色”，而是：

**把内容收回边界内，把版式重新纳入硬约束，然后再谈视觉质量。**
