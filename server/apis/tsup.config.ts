import { defineConfig } from 'tsup';
// 读取环境变量
export default defineConfig({
  // 修改入口文件为根目录的 index.ts
  entry: ['src/index.ts'],

  // 只输出 ESM 格式
  format: ['esm', 'iife', 'cjs'],

  // 生成 .mjs 文件
  target: 'esnext',

  // 清理输出目录
  clean: true,

  // 生成 sourcemap
  sourcemap: false,

  // 生成声明文件
  dts: true,
});
