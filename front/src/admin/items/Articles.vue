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
      'fetchArticles',
    ]),
  },
  mounted() {
    this.fetchArticles();
  },
  watch: {
    $route() {
      this.fetchArticles();
    },
  },
};
</script>

<style scoped>

</style>
