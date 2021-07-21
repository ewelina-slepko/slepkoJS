import typescript from '@rollup/plugin-typescript';

export default {
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
};
