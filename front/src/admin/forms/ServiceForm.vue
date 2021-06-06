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
      <v-text-field
        label="Изображение"
        v-model="image"
      />
      <v-img
        v-if="image"
        :src="image"
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
  name: 'ServiceForm',
  components: {
    MarkdownPreview: () => import('./MarkdownPreview.vue'),
  },
  data: () => ({
    slug: '',
    title: '',
    image: '',
    text: '',
  }),
  methods: {
    loadValues(values) {
      if (!values) {
        return;
      }
      this.slug = values.slug || '';
      this.title = values.title || '';
      this.image = values.image || '';
      this.text = values.text || '';
    },
    submit() {
      this.$emit('submit', {
        slug: this.slug,
        title: this.title,
        image: this.image,
        text: this.text,
      });
    },
  },
  mounted() {
    this.loadValues(this.formValues);
  },
  props: [
    'formValues',
  ],
  watch: {
    formValues: 'loadValues',
  },
};
</script>

<style scoped>

</style>
