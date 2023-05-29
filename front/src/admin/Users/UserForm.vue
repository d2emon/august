<template>
  <v-container>
    <v-form>
      <v-text-field
        label="Имя пользователя"
        v-model="username"
      />
      <v-text-field
        label="Пароль"
        type="password"
        v-model="password"
      />
      <v-text-field
        label="Дата регистрации"
        :value="dateFormatter(date)"
        readonly
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
    username: '',
    password: '',
    date: new Date(),
  }),
  methods: {
    load(values) {
      this.id = (values && values.id) || null;
      this.username = (values && values.username) || '';
      this.date = (values && values.date) || new Date();
    },
    submit() {
      const values = {
        username: this.username,
      };
      if (this.password) {
        values.password = this.password;
      }
      this.$emit('submit', {
        id: this.id,
        values,
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
