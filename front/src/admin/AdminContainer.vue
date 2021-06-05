<template>
  <div id="app">
    <v-app-bar
      app
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>{{title}} - Панель управления</v-toolbar-title>

      <v-spacer />

      <v-btn
        v-if="user"
        text
      >
        {{ user }}
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <admin-navigation />
            </v-sheet>
          </v-col>

          <v-col>
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Admin',
  components: {
    AdminNavigation: () => import('./AdminNavigation.vue'),
  },
  computed: {
    ...mapState([
      'title',
    ]),
  },
  data: () => ({
    user: 'Username',
  }),
};
</script>

<style>
</style>
