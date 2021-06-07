<template>
  <admin-items
    :items="socials"
    title="Соцсети"
    slug="social"
  />
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Socials',
  components: {
    AdminItems: () => import('./AdminItems.vue'),
  },
  computed: {
    ...mapState([
      'socials',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchSocials',
    ]),
  },
  mounted() {
    this.fetchSocials();
  },
  watch: {
    $route() {
      this.fetchSocials();
    },
  },
};
</script>

<style scoped>

</style>
