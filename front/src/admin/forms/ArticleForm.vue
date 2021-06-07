<template>
  <v-container>
    <v-form>
      <v-text-field
        label="Ссылка"
        v-model="slug"
      />
      <v-text-field
        label="Заголовок"
        v-model="title"
      />
      <v-select
        label="Категории"
        v-model="categories"
        :items="categoriesData"
        attach
        chips
        multiple
      />
      <v-text-field
        label="Просмотров"
        readonly
        v-model="viewed"
      />
      <v-date-picker
        full-width
        v-model="date"
      />
      <markdown-preview
        label="Статья"
        v-model="text"
      />

      <v-card-actions>
        <v-btn
          color="success"
          @click="submit"
        >
          Сохранить
        </v-btn>
        <v-btn
          color="primary"
          :to="(slug === 'index') ? '/' : `/about/${slug}`"
        >
          Перейти
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'ArticleForm',
  components: {
    MarkdownPreview: () => import('./MarkdownPreview.vue'),
  },
  computed: {
    categoriesData() {
      return this.categoriesLookup.map((category) => ({
        value: category.id,
        text: category.title,
      }));
    },
  },
  data: () => ({
    id: null,
    slug: '',
    title: '',
    viewed: 0,
    date: new Date().toISOString().substr(0, 10),
    categories: null,
    text: '',
  }),
  methods: {
    load(values) {
      this.id = (values && values.id) || null;
      this.slug = (values && values.slug) || '';
      this.title = (values && values.title) || '';
      this.viewed = (values && values.viewed) || 0;
      this.date = (values && values.date && values.date.substr(0, 10))
        || new Date().toISOString().substr(0, 10);
      this.categories = (values && values.categories) || [];
      this.image = (values && values.image) || '';
      this.text = (values && values.text) || '';
    },
    submit() {
      this.$emit('submit', {
        id: this.id,
        values: {
          slug: this.slug,
          title: this.title,
          date: this.date,
          categories: this.categories,
          text: this.text,
        },
      });
    },
  },
  mounted() {
    this.load(this.formValues);
  },
  props: [
    'formValues',
    'categoriesLookup',
  ],
  watch: {
    formValues: 'load',
  },
};
</script>

<style scoped>

</style>
