# Implementation Notes

## 当前实现范围

- 建立固定 `Header / SideNav / Pager / DeckShell`
- 迁移 11 个 section 的文案与截图
- 以 5 类模板承载页面：Hero、Problem、Showcase、Architecture、Comparison
- 提供桌面端固定 chrome 和移动端折叠菜单降级

## 迁移约束

- 不改章节顺序
- 不扩写新主题
- 不引入 SSR 或多页面路由
- 不把所有 section 塞进一个超大 schema

## 后续可继续打磨

- Skill System 架构图已替换为本地正式 SVG 图稿，后续可继续做品牌化视觉升级
- 可补充结尾 CTA 页
- 可继续统一 section 之间的 page number / footer 文案节奏
