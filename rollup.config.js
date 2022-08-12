import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';

import path from 'path';

const PACKAGE_ROOT_PATH = process.cwd();
console.log(PACKAGE_ROOT_PATH);
export default [
  {
    input: path.join(PACKAGE_ROOT_PATH, 'src', 'index.ts'),
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
      },
      {
        name: 'monorepo-training',
        file: 'dist/index.umd.js',
        format: 'umd',
      },
    ],
    plugins: [typescript(), resolve(), terser()],
  },
];
