<template>
  <v-container>
    <edit-item
      title="Категории статей"
      slug="category"
      :item="item"
      @load="load"
    >
      <category-form
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
  name: 'EditCategory',
  components: {
    EditItem: () => import('./EditItem.vue'),
    CategoryForm: () => import('../forms/CategoryForm.vue'),
  },
  computed: {
    ...mapState([
      'articleCategories',
    ]),
    itemId() {
      return this.$route.params.id;
    },
    item() {
      return this.$route.params.id
        ? this.articleCategories.find((item) => (item.id === this.$route.params.id))
        : null;
    },
  },
  methods: {
    ...mapActions([
      'fetchCategories',
      'addCategory',
      'updateCategory',
    ]),
    load() {
      this.fetchCategories();
    },
    submit({ id, values }) {
      if (id) {
        this.updateCategory({
          id,
          values,
        });
      } else {
        this.addCategory(values);
      }
      this.$router.push('/admin/category');
    },
  },
};
</script>

<style scoped>

</style>
