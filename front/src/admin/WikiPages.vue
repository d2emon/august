<template>
  <v-container>
    <v-breadcrumbs
      :items="breadcrumbs"
    />
    <v-card
      min-height="70vh"
    >
      <v-toolbar
        color="primary"
        dark
      >
        <v-btn
          text
          to="/admin/wiki/add"
        >
          Добавить
        </v-btn>
      </v-toolbar>
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="item in pages"
          :key="item.id"
          :to="`/admin/wiki/${item.id}`"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'WikiPages',
  computed: {
    ...mapState([
      'pages',
    ]),
  },
  data: () => ({
    breadcrumbs: [
      {
        text: 'Администрирование',
        to: '/admin',
        exact: true,
      },
      {
        text: 'Страницы',
        to: '/admin/wiki',
        exact: true,
      },
    ],
  }),
  methods: {
    ...mapActions([
      'fetchPages',
    ]),
  },
  mounted() {
    this.fetchPages();
  },
};
</script>

<style scoped>

</style>
