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
        v-if="adminUser"
        text
      >
        {{ adminUser.username }}
      </v-btn>
    </v-app-bar>

    <v-dialog
      v-model="showLogin"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Администрирование сайта</span>
        </v-card-title>
        <v-container>
          <login-form
            @submit="login"
          />
        </v-container>
      </v-card>
    </v-dialog>

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
import {
  mapState,
  mapActions,
} from 'vuex';

export default {
  name: 'Admin',
  components: {
    AdminNavigation: () => import('./AdminNavigation.vue'),
    LoginForm: () => import('./forms/LoginForm.vue'),
  },
  computed: {
    ...mapState([
      'title',
      'adminUser',
    ]),
  },
  data: () => ({
    user: 'Username',
    showLogin: false,
  }),
  methods: {
    ...mapActions([
      'getToken',
      'checkToken',
    ]),
    async login(values) {
      this.showLogin = false;
      const result = await this.getToken(values);
      if (!result) {
        this.showLogin = true;
      } else {
        await this.check();
      }
    },
    async check() {
      const user = await this.checkToken();
      if (!user) {
        this.showLogin = true;
      }
    },
  },
  mounted() {
    this.check();
  },
  watch: {
    $route() {
      this.check();
    },
  },
};
</script>

<style>
</style>
