<template>
  <admin-items
    :items="emails"
    title="Рассылка"
    slug="email"
  />
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'Emails',
  components: {
    AdminItems: () => import('./AdminItems.vue'),
  },
  computed: {
    ...mapState([
      'emails',
    ]),
  },
  methods: {
    ...mapActions([
      'fetchEmails',
    ]),
  },
  mounted() {
    this.fetchEmails();
  },
  watch: {
    $route() {
      this.fetchEmails();
    },
  },
};
</script>

<style scoped>

</style>
