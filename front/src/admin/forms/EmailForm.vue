<template>
  <v-container>
    <v-form>
      <v-text-field
        label="Адрес электронной почты"
        v-model="email"
      />
      <v-card-actions>
        <v-btn
          color="success"
          @click="submit"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
import dateFormatter from '@/helpers/dateFormatter';

export default {
  name: 'UserForm',
  data: () => ({
    id: null,
    email: '',
  }),
  methods: {
    load(values) {
      this.id = (values && values.id) || null;
      this.email = (values && values.email) || '';
    },
    submit() {
      this.$emit('submit', {
        id: this.id,
        values: {
          email: this.email,
        },
      });
    },
    dateFormatter,
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
