import {
  defineNuxtModule,
  extendPages,
  addPlugin,
  createResolver,
} from '@nuxt/kit';
import { NuxtPage } from '@nuxt/schema';

export default defineNuxtModule({
  meta: {
    name: 'generate-locale-routes',
    version: '0.0.1',
    configKey: 'localRoutesGenerator',
    compatibility: { nuxt: '^3.0.0' },
  },
  defaults: {
    availableLocales: ['en'],
  },
  setup: (options) => {
    const resolver = createResolver(import.meta.url);

    function extendPagesHook(pages: NuxtPage[]) {
      const result: NuxtPage[] = [];
      for (const page of pages) {
        for (const locale of options.availableLocales) {
          result.push({
            name: `${locale}-${page.name}`,
            path: `/${locale}${page.path}`,
            file: page.file,
          });
        }
      }
      result.push({
        name: 'locale-redirect',
        path: '/',
        file: resolver.resolve('./redirect.vue'),
      });
      pages.splice(0, pages.length);
      pages.push(...result);
    }

    extendPages(extendPagesHook);
    addPlugin({ src: resolver.resolve('./plugin.ts') });
  },
});
