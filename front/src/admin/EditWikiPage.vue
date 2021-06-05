<template>
  <v-container>
    <v-breadcrumbs
      :items="breadcrumbs"
    />
    <v-card
      min-height="70vh"
    >
      <wiki-form
        :form-values="page"
        @submit="submit"
      />
    </v-card>
  </v-container>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'EditWikiPages',
  components: {
    WikiForm: () => import('./forms/WikiForm.vue'),
  },
  computed: {
    ...mapState([
      'page',
    ]),
    pageId() {
      return this.$route.params.id;
    },
    breadcrumbs() {
      return [
        {
          text: 'Администрирование',
          to: '/admin',
          exact: true,
        },
        {
          text: 'Страницы',
          to: '/admin/wiki',
          exact: true,
        },
        {
          text: `${this.page ? this.page.title : 'Страница'}`,
          to: `/admin/wiki/${this.page ? this.page.id : ''}`,
          exact: true,
        },
      ];
    },
  },
  methods: {
    ...mapActions([
      'fetchPageById',
      'updatePage',
    ]),
    submit(values) {
      this.updatePage({
        id: this.pageId,
        values,
      });
      this.$router.push('/admin/wiki');
    },
  },
  mounted() {
    this.fetchPageById(this.pageId);
  },
  watch: {
    $route(value) {
      this.fetchPageById(value.params.id);
    },
  },
};
</script>

<style scoped>

</style>
