# 代码调研任务

请通读当前项目的源码，完成以下两件事，结果直接写在本文档末尾。

---

## 任务 1：功能模块清单

列出这个 app 的完整功能模块。格式要求：
- 层级不超过两层
- 中文描述
- 只列实际存在于代码中的功能，不要猜

---

## 任务 2：一句话产品定位

从源码推理：这个产品核心能帮用户做哪几件事？用一句话概括，不超过 30 字。

---

## 产出

### 功能模块清单

以下基于 `/Users/godcorn/cursor/Deskhand` 源码中实际存在的功能整理，不包含规划文档里的设想功能。

```text
Deskhand
├── 桌面应用壳层
│   ├── Electron 主进程窗口创建
│   ├── preload 安全桥接
│   ├── IPC 通信层
│   ├── 窗口尺寸与位置记忆
│   └── 内置 skills 首次复制到本地目录
├── 启动与初始化
│   ├── 读取本地配置
│   ├── 检查 API Key 是否已配置
│   ├── 加载历史会话列表
│   ├── 自动创建首个空白会话
│   ├── 恢复上次工作目录
│   └── 加载本地 skills 列表
├── 配置与本地存储
│   ├── 配置文件 `~/.deskhand/config.json`
│   ├── API Key 加密存储 `~/.deskhand/credentials.enc`
│   ├── 会话目录 `~/.deskhand/sessions/`
│   ├── 剪贴板历史 `clipboard-history.jsonl`
│   ├── 剪贴板索引 `clipboard-index.jsonl`
│   └── 剪贴板图片落盘目录 `clipboard-images/`
├── 顶部标题栏
│   ├── 侧边栏开关
│   ├── 新建会话
│   ├── 搜索按钮 UI
│   ├── 当前会话标题展示
│   ├── 消息数展示
│   ├── 当前工作目录名展示
│   └── Live Session 状态展示
├── 会话管理
│   ├── 会话列表展示
│   ├── 会话切换
│   ├── 新会话创建
│   ├── 会话标题推导
│   │   ├── 优先显示自定义名称
│   │   ├── 否则取首条用户消息
│   │   └── 再兜底 preview / New chat
│   ├── 会话重命名
│   ├── 会话归档隐藏
│   ├── 会话删除
│   ├── 未读状态标记与清除
│   ├── memory-only 会话机制
│   ├── JSONL 持久化
│   │   ├── session header
│   │   ├── message append-only 写入
│   │   └── metadata 重写更新
│   └── 按最后消息时间排序
├── 对话主区
│   ├── 空状态欢迎页
│   ├── 消息懒加载
│   ├── 自动滚动到底部
│   ├── 按 turn 分组渲染
│   ├── 用户消息气泡
│   ├── Assistant TurnCard
│   │   ├── 阶段状态标记
│   │   │   ├── Thinking
│   │   │   ├── Running
│   │   │   ├── Awaiting
│   │   │   ├── Responding
│   │   │   └── Completed
│   │   ├── 活动摘要预览
│   │   ├── 活动折叠/展开
│   │   ├── Markdown 正文渲染
│   │   ├── 流式输出光标效果
│   │   ├── Artifact 快捷入口
│   │   └── Insight 动作按钮
│   ├── 系统 / 状态 / 错误消息展示
│   └── ProcessingIndicator 思考中提示
├── 工具过程可视化
│   ├── tool_start / tool_result 事件接入
│   ├── ToolActivityRow 工具行
│   ├── ActivityTree 树形结构
│   ├── Task 子代理嵌套展示
│   ├── Task 展开/折叠
│   ├── 工具执行状态
│   │   ├── executing
│   │   ├── completed
│   │   ├── error
│   │   └── backgrounded
│   └── 工具产物路径提取
├── 输入工具栏
│   ├── 多行文本输入
│   ├── Enter 发送 / Shift+Enter 换行
│   ├── 发送按钮
│   ├── 停止生成按钮
│   ├── 模型选择
│   ├── 权限模式切换
│   ├── 工作目录选择
│   ├── 附件与工具入口
│   │   ├── 文件选择
│   │   ├── 剪贴板历史
│   │   ├── Skills 列表
│   │   └── MCP 连接列表 UI
│   ├── Interact 入口
│   │   ├── Pick a Style
│   │   └── This or That
│   ├── 剪贴板附件预览 chip
│   ├── A2UI prompt 附件 chip
│   ├── Interact tag chip
│   └── Insight 快捷动作自动发消息
├── Agent 对话执行
│   ├── Claude Agent SDK 封装
│   ├── 每个 session 对应一个 DeskhandAgent 实例
│   ├── SDK session id 复用与续聊
│   ├── 流式事件转 UI 事件
│   │   ├── text_delta
│   │   ├── text_complete
│   │   ├── tool_start
│   │   ├── tool_result
│   │   ├── permission_request
│   │   ├── status / info / error
│   │   └── complete
│   ├── 模型参数透传
│   ├── 工作目录注入
│   ├── 剪贴板上下文注入 system prompt
│   ├── plugin 路径注入给 SDK skills
│   ├── A2UI MCP server 注入
│   └── 停止当前生成
├── 权限控制
│   ├── Ask 模式
│   │   └── Bash / Edit / Write 执行前确认
│   ├── Auto 模式
│   │   └── 仅 destructive bash 再确认
│   ├── 权限请求弹窗
│   ├── 活动树内联权限确认
│   └── Allow / Deny 响应回传 Agent
├── 本地上下文接入
│   ├── 工作目录选择器
│   ├── 文件选择器
│   ├── 剪贴板监控
│   │   ├── 500ms 轮询系统剪贴板
│   │   ├── 文本 / 链接 / 图片识别
│   │   ├── 内容去重
│   │   ├── 预览摘要生成
│   │   ├── 图片保存到本地
│   │   ├── 最大 500 条历史裁剪
│   │   └── 自写入内容跳过回录
│   ├── 剪贴板历史弹窗
│   │   ├── 按时间分组
│   │   ├── 关键字过滤
│   │   ├── 文本 / 链接 / 图片行展示
│   │   └── 单条附加到输入区
│   └── 剪贴板内容随消息一起注入发送
├── 交互式探索界面 A2UI
│   ├── Interact tag 路由
│   │   ├── `[pick-a-style]` 强制 `render_playground`
│   │   └── `[this-or-that]` 强制 `render_tournament`
│   ├── A2UI 工具
│   │   ├── `render_playground`
│   │   ├── `render_guided_form`
│   │   └── `render_tournament`
│   ├── 模板注入生成 HTML 文件
│   ├── 临时文件写入 `/tmp/deskhand-a2ui`
│   ├── 产物自动出现在 Artifact 面板
│   └── iframe 内交互结果回流输入框
├── Artifact 面板
│   ├── 面板开关
│   ├── 拖拽调整宽度
│   ├── 文件列表下拉
│   ├── 自动恢复当前会话 artifacts
│   ├── 自动选中最新 artifact
│   ├── 文件内容读取
│   ├── 预览模式切换
│   │   ├── Code
│   │   └── Preview
│   ├── 类型化预览
│   │   ├── HTML iframe
│   │   ├── Markdown 渲染
│   │   ├── 图片预览
│   │   └── 纯文本预览
│   ├── 复制内容到剪贴板
│   ├── 刷新文件内容
│   └── 在 Finder 中显示文件
├── Skills 系统
│   ├── 内置 skills
│   │   ├── playground
│   │   ├── find-skills
│   │   ├── skill-creator
│   │   └── frontend-design
│   ├── 扫描目录
│   │   ├── `~/.claude/skills`
│   │   └── `~/.deskhand/skills`
│   ├── 读取 `SKILL.md`
│   ├── 解析 frontmatter
│   ├── 识别可选 icon
│   ├── Skills 弹窗展示已安装项
│   └── 以 plugin path 方式接入 Claude Agent SDK
├── Skill Insight
│   ├── 自动触发阈值
│   │   └── 距上次 Insight 后新增 20 个 session
│   ├── Facet 提取
│   │   ├── 读取历史 session
│   │   ├── Haiku 提炼结构化摘要
│   │   ├── `.facet.json` 缓存
│   │   └── 跳过旧 session 与 Skill Insight 自身
│   ├── Insight Agent 分析
│   │   ├── 识别重复模式
│   │   ├── 调用 find-skills 搜索 skill
│   │   ├── 生成自然语言报告
│   │   └── 解析 `[ACTIONS]` 按钮
│   ├── 生成新的 Skill Insight 会话
│   ├── 标记未读
│   └── 用户点击按钮后自动继续对话
├── 后台会话事件处理
│   ├── 非当前会话事件持久化
│   ├── 完成后标记未读
│   ├── 更新最后消息时间
│   ├── 会话排序上浮
│   └── 切回时强制重新加载消息
└── 设置页
    ├── General
    │   ├── Tool Model UI
    │   ├── Language UI
    │   ├── Auto Start UI
    │   └── Start minimized UI
    ├── API Connection
    │   ├── Provider UI
    │   └── API Key 输入 UI
    ├── Permissions
    │   └── 权限模式设置 UI
    └── Skills
        └── 已安装 skill 列表与开关 UI
```



### 一句话产品定位

让非技术用户通过桌面端使用本地信息、工具和交互式界面解决问题
