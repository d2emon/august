<template>
  <v-container>
    <v-form>
      <v-text-field
        label="Имя пользователя"
        v-model="username"
        required
      />
      <v-text-field
        label="Пароль"
        type="password"
        v-model="password"
        required
      ></v-text-field>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="success"
          @click="submit"
        >
          Войти
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    load() {
      this.username = '';
      this.password = '';
    },
    submit() {
      this.$emit('submit', {
        username: this.username,
        password: this.password,
      });
    },
  },
  mounted() {
    this.load();
  },
};
</script>

<style scoped>

</style>
