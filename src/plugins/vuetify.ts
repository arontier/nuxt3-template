import { defineNuxtPlugin } from '#app';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(
    createVuetify({
      components,
      directives,
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false,
            colors: {},
          },
        },
      },
      icons: {
        defaultSet: 'mdi',
        aliases: {
          ...aliases,
        },
        sets: {
          mdi,
        },
      },
      display: {
        mobileBreakpoint: 'sm',
      },
    }),
  );
});
