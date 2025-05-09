import { defineConfig } from 'tsup';
type Mode = 'development' | 'production';
// 读取环境变量
const MODE = process.env.MODE as Mode;
export default defineConfig({
  // 修改入口文件为根目录的 index.ts
  entry: ['src/**/*.ts'],

  // 只输出 ESM 格式
  format: ['esm'],

  // 生成 .mjs 文件
  target: 'esnext',

  // 清理输出目录
  clean: true,

  // 生成 sourcemap
  sourcemap: MODE === 'development' && true,

  // 生成声明文件
  dts: true,
});
