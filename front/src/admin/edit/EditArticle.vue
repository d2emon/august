<template>
  <v-container>
    <edit-item
      title="Статьи"
      slug="article"
      :item="item"
      @load="load"
      @delete="deleteItem"
    >
      <article-form
        :form-values="item"
        :categoriesLookup="articleCategories"
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
      'articleCategories',
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
      'fetchCategories',
      'fetchArticleById',
      'addArticle',
      'updateArticle',
      'deleteArticle',
    ]),
    load(itemId) {
      this.fetchCategories();
      this.fetchArticleById(itemId);
    },
    submit({ id, values }) {
      if (id) {
        this.updateArticle({
          id,
          values,
        });
      } else {
        this.addArticle(values);
      }
      this.$router.push('/admin/article');
    },
    deleteItem(id) {
      this.deleteArticle(id);
      this.$router.push('/admin/article');
    },
  },
};
</script>

<style scoped>

</style>
