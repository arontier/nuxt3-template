import { defineNuxtConfig } from 'nuxt';
import availableLocales from './src/locales/availableLocales';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['@intlify/nuxt3', './src/modules/generate-locale-routes'],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: availableLocales[0],
      fallbackLocale: availableLocales[0],
      availableLocales,
      sync: true,
    },
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
});
