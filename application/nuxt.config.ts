import { defineNuxtConfig } from 'nuxt';
import availableLocales from './locales/availableLocales';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@intlify/nuxt3',
    '@pinia/nuxt',
    './modules/generate-locale-routes',
    '@nuxtjs/google-fonts',
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
  googleFonts: {
    families: {
      Raleway: [100, 300, 400, 500, 700, 900],
      Montserrat: [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
    download: true,
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
