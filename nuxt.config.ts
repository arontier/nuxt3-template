import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        jsx: 'preserve',
        allowJs: true,
        noImplicitAny: false,
        types: [],
      },
    },
  },
  vite: {
    plugins: [eslintPlugin()],
  },
});
