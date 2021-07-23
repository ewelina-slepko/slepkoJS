import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const config = ['build', 'test-app/slepkojs'].flatMap(output => [
    {
        input: './src/main.ts',
        watch: {
            include: './src/**',
            clearScreen: false,
        },
        output: {
            file: `${output}/index.js`,
            format: 'es',
        },
        plugins: [typescript()],
    },
    {
        input: './src/main.ts',
        output: [{ file: `${output}/index.d.ts`, format: 'es' }],
        plugins: [dts()],
    },
]);

export default config;
