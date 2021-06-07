<template>
  <admin-items
    :items="services"
    title="Услуги"
    slug="service"
  />
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Services',
  components: {
    AdminItems: () => import('./AdminItems.vue'),
  },
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
  watch: {
    $route() {
      this.fetchServices();
    },
  },
};
</script>

<style scoped>

</style>
