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
  name: 'ProjectForm',
  components: {
    MarkdownPreview: () => import('./MarkdownPreview.vue'),
  },
  data: () => ({
    id: null,
    slug: '',
    title: '',
    date: new Date().toISOString().substr(0, 10),
    serviceId: null,
    image: '',
    text: '',
  }),
  methods: {
    load(values) {
      this.id = (values && values.id) || null;
      this.slug = (values && values.slug) || '';
      this.title = (values && values.title) || '';
      this.date = (values && values.date.substr(0, 10))
        || new Date().toISOString().substr(0, 10);
      this.serviceId = (values && values.serviceId) || null;
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
          serviceId: this.serviceId,
          image: this.image,
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
