<template>
  <div class="home">
    <h2>Welcome to FineMinds Marketing Solutions</h2>

    <p>
      This website template has been designed by Free Website Templates for you, for free.
      You can replace all this text with your own text.
    </p>

    <img src="/images/tree.jpg" alt="">

    <what-we-do
      title="Что Мы Делаем"
      :links="services"
    >
      <p>
        This website template has been designed by Free Website Templates for you, for free.
        You can replace all this text with your own text. You can remove any link to our
        website from this website template, you're free to use this website template without
        linking back to us.
      </p>
    </what-we-do>
    <latest-projects
      title="Последние проекты"
      :projects="latestProjects"
    />
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Home',
  components: {
    WhatWeDo: () => import('../components/WhatWeDo.vue'),
    LatestProjects: () => import('../components/LatestProjects.vue'),
  },
  computed: {
    ...mapState([
      'services',
      'latestProjects',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchServices',
      'fetchLatestProjects',
    ]),
  },
  mounted() {
    return Promise.all([
      this.fetchServices(),
      this.fetchLatestProjects(),
    ]);
  },
};
</script>
