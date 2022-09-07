<template>
  <p>
    Redirecting you to the correct website language according to your browser
    settings, please wait or click
    <nuxt-link :to="`/${locale}/`">here</nuxt-link> if you're not being
    redirected…
  </p>
</template>

<script>
import availableLocales from '../../locales/availableLocales';

export default {
  name: 'LocaleRedirect',
  head: {
    title: 'Redirecting',
  },
  computed: {
    locale() {
      let language =
        typeof navigator === 'undefined'
          ? availableLocales[0]
          : navigator.language || navigator.browserLanguage;
      if (language.includes('-')) {
        language = language.split('-')[0];
      }
      return availableLocales.includes(language)
        ? language
        : availableLocales[0];
    },
  },
  mounted() {
    this.$router.push(`/${this.locale}/`);
  },
};
</script>
