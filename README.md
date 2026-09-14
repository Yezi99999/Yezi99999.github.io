# Yezi99999.github.io

个人站点，使用 [Astro](https://astro.build/) 构建，通过 GitHub Actions 部署到 GitHub Pages。

访问地址：<https://Yezi99999.github.io/>

## 技术栈

- **Astro 5** — 静态站点框架，默认输出零 JS
- **TypeScript**（`astro/tsconfigs/strict`）
- **pnpm** — 包管理
- **GitHub Actions** — 构建并部署到 Pages

## 本地开发

```bash
pnpm install      # 安装依赖
pnpm dev          # 启动开发服务器 http://localhost:4321/
pnpm build        # 构建产物到 dist/
pnpm preview      # 本地预览构建产物
pnpm check        # Astro + TypeScript 类型检查
```

## 目录结构

```
├── .github/workflows/deploy.yml   # GitHub Actions 部署工作流
├── public/                        # 静态资源，原样复制到产物根目录
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       # 全站 HTML 骨架
│   └── pages/
│       ├── index.astro            # 首页
│       └── 404.astro              # 404 页面
├── astro.config.mjs               # Astro 配置
├── pnpm-workspace.yaml            # pnpm 构建脚本白名单
└── tsconfig.json
```

## 如何修改内容

| 想改什么 | 改哪里 |
| --- | --- |
| 首页文字、技术栈列表 | `src/pages/index.astro` |
| 页面标题、描述、`<head>` | `src/layouts/BaseLayout.astro` |
| 站点 URL、构建行为 | `astro.config.mjs` |
| 网站图标 | `public/favicon.svg` |
| 新增页面 | 在 `src/pages/` 下新建 `.astro` 文件，文件名即路由 |

Astro 支持基于文件的路由：`src/pages/about.astro` 会自动生成 `/about` 页面。

## 部署

推送到 `main` 分支即自动触发 `.github/workflows/deploy.yml`：安装依赖 → `pnpm build` → 上传 `dist/` → 部署到 Pages。也可以在工作流页面手动 `workflow_dispatch` 触发。

**首次部署前需要在仓库 Settings → Pages → Source 选择 `GitHub Actions`**（本仓库是用户站点，发布分支固定为 `main`）。

## 后续可选扩展

- **加博客**：使用 [Content Collections](https://docs.astro.build/zh-cn/guides/content-collections/)，在 `src/content/` 写 Markdown
- **加样式**：接入 Tailwind CSS（`pnpm astro add tailwind`）
- **加交互组件**：可在 Astro 中混用 Vue / React / Svelte 岛屿组件
- **加 sitemap**：`pnpm astro add sitemap`
