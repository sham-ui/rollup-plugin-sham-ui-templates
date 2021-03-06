import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';

export default {
    input: 'index.js',
    output: [
        { file: pkg.main, format: 'cjs', exports: 'auto' },
        { file: pkg.module, format: 'es' }
    ],
    plugins: [ babel() ],
};
