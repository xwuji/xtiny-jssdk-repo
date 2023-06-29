import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';
const path = require('path');
const production = process.env.NODE_ENV === 'production';
export default {
  input: './src/index.ts',
  output: {
    file: path.resolve(__dirname, './lib/index.js'),
    format: 'umd',
    name: 'SticJsSdk',
    sourcemap: true,
  },
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    }),
    eslint({
      include: ['./src/**'],
    }),
    resolve(),
    commonjs(),
    typescript(),
    babel({ babelHelpers: 'bundled' }),
    json(),
    terser({
      compress: {
        drop_console: production,
        drop_debugger: production,
      },
    }),
  ],
};
