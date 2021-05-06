# Rollup plugin for compile sham-ui templates 

```
yarn add -D rollup-plugin-sham-ui-templates
```

## Usage

```js
import shamUICompiler from 'rollup-plugin-sham-ui-templates';
import { babel } from '@rollup/plugin-babel';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        shamUICompiler( {
            extensions: [ '.sht' ]
        } ),
        shamUICompiler( {
            extensions: [ '.sfc' ],
            compilerOptions: {
                asModule: false,
                asSingleFileComponent: true
            }
        } ),
        babel( {
            extensions: [ '.js', '.sht', '.sfc' ],
            exclude: [ 'node_modules/**' ],
            babelHelpers: 'bundled'
        } )
    ]
};
```

