<template>
  <admin-items
    :items="articleCategories"
    title="Категории статей"
    slug="category"
  />
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Categories',
  components: {
    AdminItems: () => import('./AdminItems.vue'),
  },
  computed: {
    ...mapState([
      'articleCategories',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchCategories',
    ]),
  },
  mounted() {
    this.fetchCategories();
  },
  watch: {
    $route() {
      this.fetchCategories();
    },
  },
};
</script>

<style scoped>

</style>
