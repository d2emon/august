<template>
  <admin-items
    :items="pages"
    title="Страницы"
    slug="wiki"
  />
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'WikiPages',
  components: {
    AdminItems: () => import('./AdminItems.vue'),
  },
  computed: {
    ...mapState([
      'pages',
    ]),
  },
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
