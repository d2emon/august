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
          to="/admin/service/add"
        >
          Добавить
        </v-btn>
      </v-toolbar>
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="item in services"
          :key="item.id"
          :to="`/admin/services/${item.id}`"
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
  name: 'Services',
  computed: {
    ...mapState([
      'services',
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
        text: 'Услуги',
        to: '/admin/services',
        exact: true,
      },
    ],
  }),
  methods: {
    ...mapActions([
      'fetchServices',
    ]),
  },
  mounted() {
    this.fetchServices();
  },
};
</script>

<style scoped>

</style>
