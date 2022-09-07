import { addRouteMiddleware, defineNuxtPlugin, useNuxtApp } from '#app';

export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'change-vue-locale',
    (to) => {
      let path = to.path;
      if (path.startsWith('/')) {
        path = path.substring(1);
      }
      const routeParts = path.split('/');
      if (routeParts.length < 1) {
        return;
      }
      const { vueApp } = useNuxtApp();
      const routeLocale = routeParts[0];
      if (
        vueApp.config.globalProperties.$i18n.availableLocales.includes(
          routeLocale,
        )
      ) {
        vueApp.config.globalProperties.$i18n.locale = routeLocale;
      }
    },
    { global: true },
  );
});
