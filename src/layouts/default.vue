<template>
  <v-app>
    <v-app-bar app>
      <!-- -->
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
