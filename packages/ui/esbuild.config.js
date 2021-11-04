const esbuild = require('esbuild');
const { pnpPlugin } = require('@yarnpkg/esbuild-plugin-pnp');
const pkg = require('./package.json');

esbuild
    .build({
        entryPoints: ['./src/index.ts'],
        outfile: pkg.main,
        format: 'cjs',
        sourcemap: true,
        bundle: true,
        external: ['react', 'react-dom', '@emotion/react'],
        plugins: [pnpPlugin()],
    })
    .catch(() => process.exit(1));
