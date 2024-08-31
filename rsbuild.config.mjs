import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  source: {
    alias: {
      '@': './src',
    },
  },
  tools: {
    bundlerChain: (chain) => {
      chain.module
        .rule('tailwindcss')
        .test(/\.css$/)
        .use('postcss-loader')
        .loader('postcss-loader');
    },
  },
});
