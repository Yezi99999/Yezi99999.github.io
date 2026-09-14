import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 用户站点 (Yezi99999.github.io) 部署在根路径，base 保持 '/'
  site: 'https://Yezi99999.github.io/',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    // 产物输出到 dist/，与 GitHub Actions 工作流对应
    outDir: 'dist',
    // 内联小体积样式，减少请求
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});
