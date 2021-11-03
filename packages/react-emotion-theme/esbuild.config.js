const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

esbuild
    .build({
        entryPoints: ['./src/index.ts'],
        outfile: 'dist/index.js',
        bundle: true,
        minify: true,
        platform: 'browser',
        format: 'cjs',
        sourcemap: true,
        target: 'es6',
        plugins: [nodeExternalsPlugin()],
    })
    .catch(() => process.exit(1));
