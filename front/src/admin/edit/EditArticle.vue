<template>
  <v-container>
    <edit-item
      title="Статьи"
      slug="article"
      :item="item"
      @load="load"
    >
      <article-form
        :form-values="item"
        @submit="submit"
      />
    </edit-item>
  </v-container>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';

export default {
  name: 'EditArticle',
  components: {
    EditItem: () => import('./EditItem.vue'),
    ArticleForm: () => import('../forms/ArticleForm.vue'),
  },
  computed: {
    ...mapState([
      'article',
    ]),
    itemId() {
      return this.$route.params.id;
    },
    item() {
      return this.$route.params.id ? this.article : null;
    },
  },
  methods: {
    ...mapActions([
      'fetchServiceById',
      'addService',
      'updateService',
    ]),
    load(itemId) {
      this.fetchServiceById(itemId);
    },
    submit({ id, values }) {
      if (id) {
        this.updateService({
          id,
          values,
        });
      } else {
        this.addService(values);
      }
      this.$router.push('/admin/article');
    },
  },
};
</script>

<style scoped>

</style>
