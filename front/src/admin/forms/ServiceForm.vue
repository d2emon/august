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
      <v-row>
        <v-col>
          <v-text-field
            label="Изображение"
            v-model="image"
          />
        </v-col>
        <v-col>
          <v-img
            v-if="image"
            :src="image"
            width="100%"
          />
        </v-col>
      </v-row>
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
          :to="`/services/${slug}`"
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
    id: null,
    slug: '',
    title: '',
    image: '',
    text: '',
  }),
  methods: {
    load(values) {
      this.id = (values && values.id) || null;
      this.slug = (values && values.slug) || '';
      this.title = (values && values.title) || '';
      this.image = (values && values.image) || '';
      this.text = (values && values.text) || '';
    },
    submit() {
      this.$emit('submit', {
        id: this.id,
        values: {
          slug: this.slug,
          title: this.title,
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
