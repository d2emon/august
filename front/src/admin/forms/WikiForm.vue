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
      <v-textarea
        label="Статья"
        v-model="text"
      />
    </v-form>
    <v-card-actions>
      <v-btn
        color="success"
        @click="submit"
      >
        Сохранить
      </v-btn>
      <v-btn
        color="primary"
        :to="`/pages/${slug}`"
      >
        Перейти
      </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
export default {
  name: 'WikiForm',
  data: () => ({
    slug: '',
    title: '',
    text: '',
  }),
  methods: {
    loadValues(values) {
      this.slug = values.slug || '';
      this.title = values.title || '';
      this.text = values.text || '';
    },
    submit() {
      this.$emit('submit', {
        slug: this.slug,
        title: this.title,
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
