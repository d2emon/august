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
  name: 'WikiForm',
  components: {
    MarkdownPreview: () => import('./MarkdownPreview.vue'),
  },
  data: () => ({
    id: null,
    slug: '',
    title: '',
    text: '',
  }),
  methods: {
    load(values) {
      if (!values) {
        return;
      }
      this.id = values.id;
      this.slug = values.slug || '';
      this.title = values.title || '';
      this.text = values.text || '';
    },
    submit() {
      this.$emit('submit', {
        id: this.id,
        values: {
          slug: this.slug,
          title: this.title,
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
  ],
  watch: {
    formValues: 'load',
  },
};
</script>

<style scoped>

</style>
