<template>
  <v-container>
    <edit-item
      title="Страницы"
      slug="wiki"
      :item="item"
      @load="load"
      @delete="deleteItem"
    >
      <wiki-form
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
  name: 'EditWikiPages',
  components: {
    EditItem: () => import('./EditItem.vue'),
    WikiForm: () => import('../forms/WikiForm.vue'),
  },
  computed: {
    ...mapState([
      'page',
    ]),
    itemId() {
      return this.$route.params.id;
    },
    item() {
      return this.$route.params.id ? this.page : null;
    },
  },
  methods: {
    ...mapActions([
      'fetchPageById',
      'addPage',
      'updatePage',
      'deletePage',
    ]),
    load(itemId) {
      this.fetchPageById(itemId);
    },
    submit({ id, values }) {
      if (id) {
        this.updatePage({
          id,
          values,
        });
      } else {
        this.addPage(values);
      }
      this.$router.push('/admin/wiki');
    },
    deleteItem(id) {
      this.deletePage(id);
      this.$router.push('/admin/wiki');
    },
  },
};
</script>

<style scoped>

</style>
