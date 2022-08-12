import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';

import path from 'path';

export default [
  {
    input: path.join('src', 'index.ts'),
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        name: 'monorepo-training',
        file: 'dist/index.umd.js',
        sourcemap: true,
        format: 'umd',
      },
    ],
    plugins: [typescript(), resolve(), terser()],
  },
];
