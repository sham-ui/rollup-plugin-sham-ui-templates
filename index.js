import { extname } from 'path';
import { createFilter } from '@rollup/pluginutils';
import { Compiler } from 'sham-ui-templates';

export default function shamUICompiler( options = {} ) {
    const filter = createFilter( options.include, options.exclude );

    const extensions = options.extensions || [ '.sht' ];

    const compilerOptions = options.compilerOptions || {};

    const compiler = new Compiler( compilerOptions );

    if ( options.globals ) {
        compiler.globals = options.globals;
    }

    if ( options.transforms ) {
        options.transforms.forEach( function( transform ) {
            compiler.transforms.push( transform );
        } );
    }

    return {
        name: 'sham-ui-compiler',
        transform( code, id ) {
            if ( !filter( id ) ) {
                return null;
            }

            if ( !extensions.includes( extname( id ) ) ) {
                return null;
            }

            const node = compiler.compile( id, code );

            const output = node.toStringWithSourceMap();
            output.map.setSourceContent( id, code );

            return {
                code: output.code,
                map: output.map.toJSON()
            };
        }
    };
}
