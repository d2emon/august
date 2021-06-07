<template>
  <v-container>
    <v-form>
      <v-text-field
        label="Название"
        v-model="title"
      />
      <v-text-field
        label="Ссылка"
        v-model="href"
      />
      <v-text-field
        label="Социальная сеть"
        v-model="social"
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
          :href="href"
        >
          Перейти
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'SocialForm',
  data: () => ({
    id: null,
    title: '',
    href: '',
    social: '',
  }),
  methods: {
    load(values) {
      this.id = (values && values.id) || null;
      this.title = (values && values.title) || '';
      this.href = (values && values.href) || '';
      this.social = (values && values.social) || '';
    },
    submit() {
      this.$emit('submit', {
        id: this.id,
        values: {
          title: this.title,
          href: this.href,
          social: this.social,
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
