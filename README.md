# Deskhand Showcase V2

Deskhand Showcase 的第二版展示工程。目标不是重写内容，而是把现有 11 个 section 迁移到一套更稳的 React 展示壳层里。

## 设计方向

- 视觉方向：Editorial Boardroom
- 技术栈：Vite + React + TypeScript
- 样式方案：CSS Modules + 全局 design tokens
- 展示形态：单页滚动式静态站，桌面端按“一屏一个 section”优先

## 路径关系

- V2 工程：`/Users/godcorn/cursor/ppt/deskhand-v2`
- 旧版 Astro 工程：`/Users/godcorn/cursor/ppt/deskhand`
- 产品源码：`/Users/godcorn/cursor/Deskhand`
- 重构方案：`/Users/godcorn/cursor/ppt/deskhand/docs/plan/2026-03-11-showcase-v2-rebuild-plan.md`

## 运行

```bash
cd /Users/godcorn/cursor/ppt/deskhand-v2
npm install
npm run dev
```

构建：

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

仓库里已经添加了 GitHub Actions 工作流：[.github/workflows/deploy.yml](/Users/godcorn/cursor/ppt/deskhand-v2/.github/workflows/deploy.yml)。

使用方式：

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

然后到 GitHub 仓库页面确认以下设置：

- `Settings -> Pages`
- `Source` 选择 `GitHub Actions`

说明：

- 如果仓库地址是 `https://github.com/<user>/<repo>`，站点地址会是 `https://<user>.github.io/<repo>/`
- 工作流会在推送到 `main` 分支后自动构建并发布
- `vite.config.ts` 已在 GitHub Actions 环境下自动使用仓库名作为 `base`，本地开发仍保持根路径 `/`

## 工程结构

```text
deskhand-v2/
├── docs/
│   └── implementation-notes.md
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── chrome/
│   │   ├── layout/
│   │   ├── media/
│   │   ├── primitives/
│   │   └── sections/
│   ├── content/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```
