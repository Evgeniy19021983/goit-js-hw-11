import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    base: '/goit-js-hw-11/',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        plugins: [nodeResolve(), commonjs()],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
