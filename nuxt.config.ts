import { defineNuxtConfig } from 'nuxt';
import availableLocales from './src/locales/availableLocales';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@intlify/nuxt3',
    '@pinia/nuxt',
    './src/modules/generate-locale-routes',
  ],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: availableLocales[0],
      fallbackLocale: availableLocales[0],
      availableLocales,
      sync: true,
    },
  },
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  localRoutesGenerator: {
    availableLocales,
  },
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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:color";
            @import '@/assets/styles/_variables.scss';
            @import '@/assets/styles/overrides.scss';
          `,
        },
      },
    },
  },
});
