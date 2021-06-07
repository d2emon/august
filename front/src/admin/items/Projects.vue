<template>
  <admin-items
    :items="projects"
    title="Проекты"
    slug="project"
  />
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Projects',
  components: {
    AdminItems: () => import('./AdminItems.vue'),
  },
  computed: {
    ...mapState([
      'projects',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchProjects',
    ]),
  },
  mounted() {
    this.fetchProjects();
  },
  watch: {
    $route() {
      this.fetchProjects();
    },
  },
};
</script>

<style scoped>

</style>
