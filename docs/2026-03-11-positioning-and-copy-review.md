# Deskhand 求职作品集：表达定位与文案审视

> 日期：2026-03-11
> 范围：`deskhand-v2` 当前展示站全部主要文本
> 目的：先明确“这份作品集要以什么角色、什么气质说话”，再据此审视现有文案，记录需要修改的地方
> 说明：本文件只记录定位与修改建议，不直接改动源码

## 1. 先说结论

当前这套 deck 的大方向是对的。

它最适合呈现的不是“我有很多观点”，也不是“我来教你怎么做 AI 产品”，而是：

**我是一个很实在的 builder。**

我先做事，先解决问题，先把东西落下来；然后再分享我在这个过程中看到什么、学到什么、因此形成了什么判断。

一句话定位：

**第一视角的 builder，用真实问题、真实取舍和真实落地结果来建立可信度。**

如果再压缩一点，可以理解成：

**先展示做成了什么，再自然带出我是怎么判断的。**

## 2. 这份作品集应该呈现的角色

### 2.1 角色定位

最适合的角色不是：

- 教别人做产品的人
- 输出宏大行业判断的人
- 靠包装和口号建立气场的人

最适合的角色是：

- 能做事的 builder
- 能解决具体问题的产品型 builder
- 判断来自事实，而不是来自姿态的人

可以反复拿来校准文案的一句话：

**我分享的是我做过的事、看到的问题，以及这些经历让我形成的判断。**

### 2.2 叙事顺序

这套 deck 的叙事顺序应该始终是：

1. 我做了什么
2. 我遇到了什么问题
3. 我是怎么处理的
4. 这件事让我形成了什么判断

不是：

1. 我先抛一个行业观点
2. 再拿项目来证明自己是对的

前者是经验分享，后者容易变成教学和营销。

### 2.3 语气边界

应该是：

- 第一视角
- 克制
- 实在
- 基于事实
- 经验分享
- 有判断，但不端着

不应该是：

- 教学腔
- 营销腔
- 布道腔
- “行业应该怎样”的站位腔
- 没有证据支撑的宏大判断

## 3. 文案判断标准

后续所有文案都可以用下面 5 条检查：

1. 这句话是在分享我做项目时的观察，还是在教育读者？
2. 这句话是从事实长出来的，还是像悬空口号？
3. 这句话有没有把“我做了什么”和“我怎么判断”分开？
4. 这句话是不是在用公共行业话术，替代真实项目经验？
5. 这句话读起来像 case study，还是像营销页？

如果一段文字更像“公共行业分析”而不是“我在做 Deskhand 时看到的问题”，就要收回来。

## 4. 总体审视结果

### 4.1 已经比较对的部分

以下文本已经很接近目标气质，可以视为当前表达基线：

- `Generative UI` 第一页标题“我为什么开始补自然语言之外的交互形式”
- 三个架构页的大部分“关键工程决策”文案
- `Clipboard` 第一页的用户工作流描述
- `My Take` 页整体结构
- 结尾页 `What I Learned` 这个 kicker 的方向

这些内容的共同点是：

- 从真实问题出发
- 能看见做事过程
- 判断是从项目里长出来的

### 4.2 主要偏差类型

当前文案主要有 4 类偏差：

1. **偏 slogan**
   - 语气像品牌标语，不像实在的求职作品集

2. **偏公共行业判断**
   - 句子像在讲行业趋势，而不是在讲“我做项目时具体看到什么”

3. **偏外部背书**
   - 用“行业信号”“市场信号”来抬高论点，但事实锚点不够具体

4. **偏抽象框架化**
   - 有些地方过早进入抽象概念，削弱了“我先做事、后抽象”的顺序

## 5. 逐页修改建议

下面只记录需要修改或建议收敛的地方。

### 5.1 Hero 与站点级文案

#### [src/content/hero.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/hero.ts)

**位置**

- 第 10 行：`eyebrow: "Product Thinking, Shipped in Code"`

**问题**

- 这句太像个人 branding slogan
- “thinking + shipped” 的表达方式比较像自我包装
- 它没有落在具体事实和问题上，容易把第一页带向“姿态先行”

**建议**

改成更实在、更像项目经验起点的表达。

推荐方向：

- 强调“从真实问题出发”
- 强调“为了让非技术用户真正能用”
- 强调“这是我做出来并验证过的东西”

可选改法：

- `Built from Real Usage Problems`
- `From Real Workflow Problems to Product Decisions`
- `为真实使用问题做的桌面 AI 产品`

优先原则：

- 宁可朴素，不要标语感
- 宁可偏项目语境，不要偏个人口号

#### [src/content/hero.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/hero.ts)

**位置**

- 第 7 行：`kicker: "Project overview"`

**问题**

- 不算错，但偏模板词
- 和整套 deck 想建立的“第一视角 builder”气质关系不强

**建议**

这是低优先级，可改可不改。

如果要改，建议往 `Case Study` 或 `Project Story` 这类更贴近作品集语境的方向收，不需要太花。

#### [src/components/chrome/SiteHeader.tsx](/Users/godcorn/cursor/ppt/deskhand-v2/src/components/chrome/SiteHeader.tsx)

**位置**

- 第 12 行：`Deskhand Case Study`

**问题**

- 这句本身安全，但略偏 generic
- 如果第一页要强化“这是一个人的求职作品表达”，这里也可以更贴近作品集，而不是网站栏目名

**建议**

低优先级。

可以继续保留；如果后续想统一语气，可考虑：

- `Deskhand`
- `Deskhand / Case Study`
- `Deskhand / Portfolio`

### 5.2 Generative UI

#### [src/content/generative-ui.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/generative-ui.ts)

**位置**

- 第 15-18 行：问题引入

**问题**

- 当前写法已经不差，但开头仍偏“公共行业观察”
- 标题已经是第一视角，正文如果继续以“当前主流 AI 交互方式”开头，会稍微把语气拉回文章体

**建议**

把开头再往“我在做 Deskhand 时看到的真实问题”拉一点。

建议方向：

- 从“我发现很多任务不是用户不知道要什么，而是说不清楚”进入
- 保留你的判断，但让判断先落地，再抽象

可选改法：

- `我在做 Deskhand 时越来越明显地感觉到，很多 AI 任务的问题不是模型不够强，而是用户还没想清楚方向，也说不清楚自己要什么。`

#### [src/content/generative-ui.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/generative-ui.ts)

**位置**

- 第 20-23 行：`signal`

**问题**

- `行业信号` 这个标题本身就容易把语气带向“行业分析”
- 正文里的“都在强调”归因不够具体
- 如果没有明确来源，这种句式容易显得像借外部权威抬高自己

**建议**

二选一：

1. 如果你后续会补具体出处，就把这块写得更具体
2. 如果不准备补出处，建议改成自己的观察，不要借行业大词

推荐改法方向：

- 标题改成 `我的观察`
- 或改成 `我看到的变化`

可选改法：

- `我看到越来越多 AI 产品开始补“提问式”和“探索式”交互，因为很多任务本来就不是一句 prompt 能说清楚的。`

### 5.3 Skill System

#### [src/content/skill-system.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/skill-system.ts)

**位置**

- 第 15-18 行：问题引入

**问题**

- 这一段方向是对的，但第一句仍是大盘判断式开头
- 它更像“行业现象”，还不够像“我在项目里撞到的真实障碍”

**建议**

往使用场景和具体人群再落一步。

比如先说：

- 我发现真正的问题不是 skill 不存在，而是非技术用户根本进不去这条链路

这样会比“桌面 AI Agent 的需求正在扩散”更像经验分享。

#### [src/content/skill-system.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/skill-system.ts)

**位置**

- 第 22-25 行：`市场信号`

**问题**

- 这是当前整套 deck 里最容易出戏的一块
- `250,000+ GitHub Stars`
- `GitHub 史上收藏最多的软件项目`
- `非技术用户占比上升`

这几句都很大，也都需要非常具体的来源支撑。否则就会产生两个问题：

- 语气变得像在借势
- 可信度反而下降

**建议**

这是高优先级修改项。

推荐顺序：

1. 如果你有明确来源和日期，就写具体
2. 如果没有，就不要用这种“市场信号”做论据

更稳的做法是保留“我的观察”卡片，把这一卡改成更贴近项目起点的事实。

推荐方向：

- 从真实用户进入门槛写
- 从你观察到的 skill 使用断裂写
- 从“问题是链路设计，不是教育问题”继续展开

可选改法：

- 标题：`我看到的门槛`
- 正文：`Skill 生态已经存在，但真正卡住非技术用户的不是能力缺失，而是入口、搜索、安装和试错全都要自己完成。`

#### [src/content/skill-system.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/skill-system.ts)

**位置**

- 第 33 行：`我们的假设：把“养号”这件事，从用户侧转移到 Agent 侧。`

**问题**

- `我们的假设` 用了团队/公司口吻，不是第一视角
- `养号` 太口语，也容易让意思跑偏
- 这句话本来应该是很重要的产品判断，但现在有点像内部黑话

**建议**

改成更直接的第一视角判断。

推荐方向：

- `我的判断是，skill 的发现、搜索、安装不该继续由用户自己完成。`
- `我当时的判断是，把能力扩展这条链路从用户侧转移到 Agent 侧。`

#### [src/content/skill-system.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/skill-system.ts)

**位置**

- 第 55-61 行：showcase lead 与 caption

**问题**

- 整体是对的
- 但这块更偏“产品说明”，还可以轻微加一点“这是我怎么解决”的味道

**建议**

不是必改项。

如果要收，会优先收 lead，而不是 caption。

例如：

- `我把 skill 的发现、搜索和安装都交给 Agent，让用户在自然使用中获得能力扩展，而不是先去学一套新系统。`

### 5.4 Clipboard

#### [src/content/clipboard.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/clipboard.ts)

**位置**

- 第 15-24 行：problem lead 与 pain card

**判断**

- 这部分整体对齐
- 已经很像从真实工作流里观察出来的问题
- 可以作为其他模块收敛语气的参照

**建议**

暂不修改。

#### [src/content/clipboard.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/clipboard.ts)

**位置**

- 第 84 行：`真正让我惊喜的是这层额外洞察。`

**问题**

- 这句并不违和，因为它属于经验分享
- 但如果全套文案想更克制一点，这里可以稍微收一档

**建议**

低优先级，可改可不改。

如果要改，可以更平一点：

- `这说明剪贴板历史不只是在补上下文，也能反推出用户的工作模式。`

如果你想保留一点个人感受，这句也可以继续保留。

### 5.5 My Take

#### [src/content/my-take.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/my-take.ts)

**位置**

- 第 11-13 行：`Intent Understanding / Resource Access / Orchestration`
- 第 17-37 行：对应 pillar term

**问题**

- 这页的主标题是很好的，明确是“我做完之后形成的判断”
- 但三段核心概念改成英文后，页面会更像抽象框架，而不是从项目里长出来的总结
- 英文术语让这页略微有了“方法论页”的味道

**建议**

这是中高优先级修改项。

推荐回到之前共识文档里的中文版本：

- `意图理解`
- `资源打通`
- `编排调度`

原因：

- 更贴近前文中文语境
- 更像从项目里提炼出的判断
- 更不像为了做“框架感”而刻意抽象

#### [src/content/my-take.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/my-take.ts)

**位置**

- 第 41 行：closing line

**判断**

- 这句方向是对的
- 相比“验证方向是对的”，现在的版本更轻，也更适合作品集

**建议**

可以保留。

### 5.6 Closing Thought

#### [src/content/why-desktop.ts](/Users/godcorn/cursor/ppt/deskhand-v2/src/content/why-desktop.ts)

**位置**

- 第 6-12 行：标题与 `titleLines`

**问题**

- `What I Learned` 这个 kicker 是对的
- 但主标题 `AI Product is about finding the sweet spot` 仍然是公共判断句式
- 单独看这句，会有一点“在给行业下定义”的感觉

**建议**

这是中高优先级修改项。

目标不是推翻这页，而是把它从“行业论断”收成“做完项目后的个人判断”。

推荐方向：

- 保留 `sweet spot` 这个视觉核心
- 但把标题改得更像个人沉淀

可选改法：

- `做完 Deskhand，我更在意那个 sweet spot`
- `做完这个项目，我更相信 AI Product 要找到那个 sweet spot`
- `What I Learned About the Sweet Spot`

如果你坚持保留现在的英文标题，也不是不能用，但它会比其他页面更接近“公共观点表达”。

## 6. 优先级排序

### A. 建议优先改

1. `hero.ts` 第 10 行 `eyebrow`
2. `generative-ui.ts` 第 20-23 行 `signal`
3. `skill-system.ts` 第 22-25 行 `市场信号`
4. `skill-system.ts` 第 33 行 `我们的假设 / 养号`
5. `my-take.ts` 第 11-37 行英文术语
6. `why-desktop.ts` 第 6-12 行标题

### B. 可以顺手收一收

1. `generative-ui.ts` 第 15-18 行开头再向第一视角靠一点
2. `skill-system.ts` 第 15-18 行开头再向项目经验靠一点
3. `hero.ts` 第 7 行 `Project overview`
4. `SiteHeader.tsx` 第 12 行 `Deskhand Case Study`

### C. 可以继续保留

1. `clipboard.ts` 大部分文本
2. 三个 architecture 页的大部分决策文案
3. `my-take.ts` 主标题
4. `why-desktop.ts` 的 kicker 与 closing line

## 7. 最终文案原则

后续无论是逐页改稿，还是新增页面，都建议遵守下面这条总原则：

**先说我做了什么、遇到了什么，再说我怎么想。**

再压缩成一句：

**这是一个 builder 的经验分享，不是一场面向外部的教学或营销。**

