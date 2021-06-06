<template>
  <admin-items
    :items="articles"
    title="Статьи"
    slug="article"
  />
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Articles',
  components: {
    AdminItems: () => import('./AdminItems.vue'),
  },
  computed: {
    ...mapState([
      'articles',
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
