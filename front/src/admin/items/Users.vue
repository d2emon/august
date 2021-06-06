<template>
  <admin-items
    :items="users"
    title="Пользователи"
    slug="user"
  />
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Users',
  components: {
    AdminItems: () => import('./AdminItems.vue'),
  },
  computed: {
    ...mapState([
      'users',
    ]),
  },
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
