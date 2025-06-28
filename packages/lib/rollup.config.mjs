import { dirname } from 'node:path';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

const output = [
  {
    file: 'dist/esm/index.js',
    format: 'esm',
    sourcemap: false,
  },
  {
    file: 'dist/cjs/index.cjs',
    format: 'cjs',
    sourcemap: false,
  },
  {
    file: 'dist/types/index.d.ts',
    format: 'esm',
  },
  {
    file: 'dist/unpkg/index.umd.js',
    format: 'umd',
    name: 'index',
    sourcemap: false,
  },
];

export default defineConfig(
  output.map((item) => {
    return {
      input: 'src/index.ts',
      output: [item],
      plugins: [
        resolve(),
        commonjs(),
        json(),
        typescript({
          tsconfig: 'tsconfig.json',
          compilerOptions: {
            declaration: true,
            declarationDir: dirname(item.file),
          },
        }),
      ],
    };
  }),
);
