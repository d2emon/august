<template>
  <div class="home">
    <div
      v-if="page"
      v-html="page.html"
    />

    <what-we-do
      title="Что Мы Делаем"
      :links="services"
    />
    <latest-projects
      title="Последние проекты"
      :projects="projects"
    />
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';
import config from '@/helpers/config';

export default {
  name: 'Home',
  components: {
    WhatWeDo: () => import('../components/WhatWeDo.vue'),
    LatestProjects: () => import('../components/LatestProjects.vue'),
  },
  computed: {
    ...mapState([
      'services',
      'projects',
      'page',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchServices',
      'fetchLatestProjects',
      'fetchPage',
    ]),
  },
  mounted() {
    this.fetchServices();
    this.fetchLatestProjects();
    this.fetchPage(config.defaultPage);
  },
};
</script>
