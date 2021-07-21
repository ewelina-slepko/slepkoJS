import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const config = [
    {
        input: './src/main.ts',
        watch: {
            include: './src/**',
            clearScreen: false,
        },
        output: {
            file: './build/index.js',
            format: 'es',
        },
        plugins: [typescript()],
    },
    {
        input: './src/main.ts',
        output: [{ file: './build/index.d.ts', format: 'es' }],
        plugins: [dts()],
    },
];

export default config;
