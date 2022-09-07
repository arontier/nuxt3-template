<template>
  <v-app>
    <v-app-bar app>
      {{ $t('hello') }} {{ count }}
      <v-btn @click="increment">increment</v-btn>
    </v-app-bar>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <slot />
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useCounter from '@/store/useCounter';

const store = useCounter();
const { count } = storeToRefs(store);
const { increment } = store;
</script>
